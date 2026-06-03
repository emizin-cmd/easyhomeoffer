/**
 * Singleton Google Maps Places JS API loader.
 *
 * Uses Google's `callback` query parameter so we're notified ONLY after
 * `places` (and any other libraries) are fully attached to `window.google.maps`.
 * Previously this used `loading=async` + a script-tag `onload` listener, which
 * caused: "Google Maps loaded but `places` library is missing" — the script
 * resolves before secondary libraries finish under the new `loading=async`
 * loader contract (https://developers.google.com/maps/documentation/javascript/load-maps-js-api).
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
  // Already loaded with places library attached — short-circuit.
  if (window.google?.maps?.places) {
    return Promise.resolve(window.google);
  }
  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise<GoogleMapsGlobal>((resolve, reject) => {
    // Unique global callback name — Google calls this after the script + libraries load.
    const callbackName = `__gmapsReady_${Math.random().toString(36).slice(2, 11)}`;
    const cleanupCallback = () => {
      try {
        delete (window as unknown as Record<string, unknown>)[callbackName];
      } catch {
        /* ignore */
      }
    };

    (window as unknown as Record<string, () => void>)[callbackName] = () => {
      cleanupCallback();
      if (window.google?.maps?.places) {
        resolve(window.google);
      } else {
        // Defensive — shouldn't happen with `callback=` URL param, but if Google's
        // contract ever changes again, surface a clear error instead of hanging.
        loaderPromise = null;
        reject(new Error("Google Maps callback fired but `places` is missing"));
      }
    };

    // If another loader already injected the script (e.g. an HMR remount), reuse it.
    // Wait for `places` to appear with a polling fallback so we don't deadlock if the
    // existing script's callback was a different name.
    const existing = document.querySelector<HTMLScriptElement>('script[data-gmaps="1"]');
    if (existing) {
      let elapsed = 0;
      const poll = window.setInterval(() => {
        if (window.google?.maps?.places) {
          window.clearInterval(poll);
          cleanupCallback();
          resolve(window.google);
        } else if ((elapsed += 100) > 10_000) {
          window.clearInterval(poll);
          cleanupCallback();
          loaderPromise = null;
          reject(new Error("Existing Google Maps script never finished loading `places`"));
        }
      }, 100);
      return;
    }

    const script = document.createElement("script");
    // NOTE: we deliberately do NOT use `loading=async` here. With `loading=async`,
    // Google's loader contract requires `await google.maps.importLibrary('places')`
    // instead of attaching libraries from the URL — and our code consumes
    // `window.google.maps.places` directly, so we stick with the legacy
    // (`libraries=...` + `callback=...`) pattern, which guarantees `places` is
    // present when the callback fires.
    script.src =
      `https://maps.googleapis.com/maps/api/js` +
      `?key=${encodeURIComponent(apiKey)}` +
      `&libraries=places` +
      `&v=weekly` +
      // Force English UI + US region bias. Without `language=en`, Google localizes
      // address suggestions to the browser's Accept-Language header — producing
      // Russian/Cyrillic transliterations for users with non-English locales.
      `&language=en` +
      `&region=US` +
      `&callback=${callbackName}`;
    script.async = true;
    script.defer = true;
    script.dataset.gmaps = "1";
    script.onerror = () => {
      cleanupCallback();
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
