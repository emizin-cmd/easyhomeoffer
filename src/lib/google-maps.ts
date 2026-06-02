/**
 * Singleton Google Maps Places JS API loader.
 *
 * - SSR-safe (rejects on the server)
 * - Single in-flight promise (multiple callers don't trigger multiple script tags)
 * - destroyAutocomplete() fully tears down a Places.Autocomplete instance
 *   via google.maps.event.clearInstanceListeners — prevents listener leaks
 *   on unmount that historically caused the form to hang.
 */

type GooglePlace = {
  formatted_address?: string;
  address_components?: Array<{ long_name: string; short_name: string; types: string[] }>;
};

export interface GoogleMapsPlacesAutocomplete {
  addListener: (event: "place_changed", cb: () => void) => { remove: () => void };
  getPlace: () => GooglePlace;
}

interface GoogleMapsGlobal {
  maps: {
    places: {
      Autocomplete: new (
        input: HTMLInputElement,
        opts: {
          types?: string[];
          componentRestrictions?: { country: string | string[] };
          fields?: string[];
        },
      ) => GoogleMapsPlacesAutocomplete;
    };
    event: {
      clearInstanceListeners: (instance: object) => void;
    };
  };
}

declare global {
  interface Window {
    google?: GoogleMapsGlobal;
  }
}

let loaderPromise: Promise<GoogleMapsGlobal> | null = null;

export function loadGoogleMapsPlaces(apiKey: string): Promise<GoogleMapsGlobal> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Google Maps cannot load during SSR"));
  }
  if (window.google?.maps?.places) {
    return Promise.resolve(window.google);
  }
  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise<GoogleMapsGlobal>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-gmaps="1"]');
    const ready = () => {
      if (window.google?.maps?.places) resolve(window.google);
      else reject(new Error("Google Maps loaded but `places` library is missing"));
    };
    if (existing) {
      existing.addEventListener("load", ready);
      existing.addEventListener("error", () => reject(new Error("Google Maps script error")));
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&v=weekly&loading=async`;
    script.async = true;
    script.defer = true;
    script.dataset.gmaps = "1";
    script.onload = ready;
    script.onerror = () => {
      loaderPromise = null; // permit retry on next mount
      reject(new Error("Failed to load Google Maps script"));
    };
    document.head.appendChild(script);
  });

  return loaderPromise;
}

export function destroyAutocomplete(
  google: GoogleMapsGlobal,
  ac: GoogleMapsPlacesAutocomplete,
): void {
  try {
    google.maps.event.clearInstanceListeners(ac);
  } catch {
    /* already torn down */
  }
}
