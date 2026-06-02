import { ArrowRight } from "lucide-react";
import * as React from "react";
import {
  loadGoogleMapsPlaces,
  destroyAutocomplete,
  type GoogleMapsPlacesAutocomplete,
} from "@/lib/google-maps";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as
  | string
  | undefined;

type FieldKey = "firstName" | "lastName" | "email" | "phone" | "address" | "details";

type FormValues = Record<FieldKey, string>;
type FieldErrors = Partial<Record<FieldKey, string>>;

// Letters (any Unicode script — covers é, ñ, ö common in MN names),
// plus spaces and hyphens for double names. No digits, punctuation, or emojis.
const NAME_RE = /^[\p{L}](?:[\p{L}\s-]*[\p{L}])?$/u;

// Pragmatic email: local@domain.tld with at least a 2-char TLD.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// US phone: (XXX) XXX-XXXX  |  XXX-XXX-XXXX  |  XXXXXXXXXX
const PHONE_RE = /^(?:\(\d{3}\)\s?\d{3}-\d{4}|\d{3}-\d{3}-\d{4}|\d{10})$/;

function validate(values: FormValues, addressVerified: boolean): FieldErrors {
  const errors: FieldErrors = {};

  const firstName = values.firstName.trim();
  if (!firstName) {
    errors.firstName = "Please enter your first name.";
  } else if (!NAME_RE.test(firstName)) {
    errors.firstName = "Names cannot contain special characters or emojis.";
  }

  const lastName = values.lastName.trim();
  if (!lastName) {
    errors.lastName = "Please enter your last name.";
  } else if (!NAME_RE.test(lastName)) {
    errors.lastName = "Names cannot contain special characters or emojis.";
  }

  // Email is optional, but if filled it must be valid.
  const email = values.email.trim();
  if (email && !EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email address (e.g. name@domain.com).";
  }

  const phone = values.phone.trim();
  if (!phone) {
    errors.phone = "Please enter a valid US phone number.";
  } else if (!PHONE_RE.test(phone)) {
    errors.phone = "Please enter a valid US phone number.";
  }

  if (!values.address.trim()) {
    errors.address = "Please enter your property address.";
  } else if (GOOGLE_MAPS_API_KEY && !addressVerified) {
    errors.address = "Please select your address from the Google suggestions.";
  }

  return errors;
}

export function LeadForm({ variant = "light" }: { variant?: "light" | "glass" }) {
  const isGlass = variant === "glass";

  const [values, setValues] = React.useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    details: "",
  });
  const [errors, setErrors] = React.useState<FieldErrors>({});

  // Address ref — passed to Google Places Autocomplete. Plain DOM input ref;
  // does NOT participate in React state on keystrokes.
  const addressInputRef = React.useRef<HTMLInputElement | null>(null);
  // Records the last formatted_address Google handed back, used only at
  // submit time. Ref (not state) → no re-renders triggered by Maps activity.
  const lastVerifiedAddressRef = React.useRef<string>("");

  // Attach Google Places Autocomplete to the address input. Run once.
  // Defensive guards: DOM-level dataset flag, cancel flag, try/catch,
  // and full destroyAutocomplete + listener removal in cleanup.
  React.useEffect(() => {
    if (!GOOGLE_MAPS_API_KEY) return;
    const inputEl = addressInputRef.current;
    if (!inputEl) return;
    if (inputEl.dataset.gmapsAttached === "1") return; // already attached on this DOM node

    let cancelled = false;
    let cleanup: (() => void) | null = null;

    loadGoogleMapsPlaces(GOOGLE_MAPS_API_KEY)
      .then((google) => {
        if (cancelled || !inputEl.isConnected) return;
        if (inputEl.dataset.gmapsAttached === "1") return; // re-check post-await

        let ac: GoogleMapsPlacesAutocomplete;
        try {
          ac = new google.maps.places.Autocomplete(inputEl, {
            types: ["address"],
            componentRestrictions: { country: "us" },
            fields: ["formatted_address", "address_components"],
          });
        } catch (err) {
          console.warn("[LeadForm] Autocomplete construction failed:", err);
          return;
        }
        inputEl.dataset.gmapsAttached = "1";

        const listener = ac.addListener("place_changed", () => {
          const place = ac.getPlace();
          const formatted = place.formatted_address?.trim() ?? "";
          if (!formatted) return;
          // Sync React state ONCE on a successful pick. No further updates from this path.
          lastVerifiedAddressRef.current = formatted;
          setValues((prev) =>
            prev.address === formatted ? prev : { ...prev, address: formatted },
          );
          setErrors((prev) => {
            if (!prev.address) return prev;
            const next = { ...prev };
            delete next.address;
            return next;
          });
        });

        cleanup = () => {
          listener.remove();
          destroyAutocomplete(google, ac);
          delete inputEl.dataset.gmapsAttached;
        };
      })
      .catch((err) => {
        // Non-fatal: form keeps working as a plain text input.
        console.warn("[LeadForm] Google Maps Places failed to load:", err);
      });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  const setField =
    (field: FieldKey) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const v = e.target.value;
      setValues((prev) => ({ ...prev, [field]: v }));
      // Clear the error for this field as soon as the user edits it.
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Address is "Google-verified" only when its current value matches the
    // formatted_address from the user's last dropdown pick. Manual typing
    // after a pick invalidates this → forces re-selection.
    const isAddressVerified =
      !!lastVerifiedAddressRef.current &&
      values.address.trim() === lastVerifiedAddressRef.current.trim();
    const next = validate(values, isAddressVerified);
    if (Object.keys(next).length > 0) {
      setErrors(next);
      // Focus the first invalid field for keyboard / screen-reader users.
      const firstInvalid = (Object.keys(next) as FieldKey[])[0];
      const el = e.currentTarget.querySelector<HTMLInputElement | HTMLTextAreaElement>(
        `[name="${firstInvalid}"]`,
      );
      el?.focus();
      return;
    }
    setErrors({});
    alert("Thanks! We'll be in touch within 24 hours.");
  };

  // Base input styling, minus the border-color tokens (those swap on error).
  const baseInput = isGlass
    ? "w-full rounded-xl border bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 backdrop-blur transition focus:bg-white/15 focus:outline-none"
    : "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:outline-none focus:ring-4";

  const borderFor = (hasError: boolean) => {
    if (isGlass) {
      return hasError
        ? "border-red-400 focus:border-red-300"
        : "border-white/20 focus:border-white/60";
    }
    return hasError
      ? "border-destructive focus:border-destructive focus:ring-destructive/20"
      : "border-border focus:border-primary focus:ring-primary/15";
  };

  const inputCls = (hasError: boolean) => `${baseInput} ${borderFor(hasError)}`;

  const labelCls = `block text-sm font-medium ${isGlass ? "text-white" : "text-foreground"}`;
  const errorCls = `mt-1 text-xs font-medium ${isGlass ? "text-red-300" : "text-destructive"}`;

  const errId = (field: FieldKey) => `lead-${field}-error`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label htmlFor="lead-firstName" className={labelCls}>
            First Name <span className="text-destructive">*</span>
          </label>
          <input
            id="lead-firstName"
            name="firstName"
            value={values.firstName}
            onChange={setField("firstName")}
            placeholder="First Name *"
            autoComplete="given-name"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? errId("firstName") : undefined}
            className={inputCls(!!errors.firstName)}
          />
          {errors.firstName && (
            <p id={errId("firstName")} role="alert" className={errorCls}>
              {errors.firstName}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lead-lastName" className={labelCls}>
            Last Name <span className="text-destructive">*</span>
          </label>
          <input
            id="lead-lastName"
            name="lastName"
            value={values.lastName}
            onChange={setField("lastName")}
            placeholder="Last Name *"
            autoComplete="family-name"
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? errId("lastName") : undefined}
            className={inputCls(!!errors.lastName)}
          />
          {errors.lastName && (
            <p id={errId("lastName")} role="alert" className={errorCls}>
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="lead-email" className={labelCls}>
          Email
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          value={values.email}
          onChange={setField("email")}
          placeholder="Email"
          autoComplete="email"
          inputMode="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? errId("email") : undefined}
          className={inputCls(!!errors.email)}
        />
        {errors.email && (
          <p id={errId("email")} role="alert" className={errorCls}>
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="lead-phone" className={labelCls}>
          Phone Number <span className="text-destructive">*</span>
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(e) => {
            const next = e.target.value;
            // Hard caps so typing stops at the longest valid US format:
            //   - total length ≤ 14   (matches "(XXX) XXX-XXXX")
            //   - digit count ≤ 10    (caps raw "XXXXXXXXXX" entry)
            // Either limit, when hit, blocks the keystroke by refusing to update state.
            const digitCount = (next.match(/\d/g) ?? []).length;
            if (next.length > 14 || digitCount > 10) return;
            setValues((prev) => ({ ...prev, phone: next }));
            if (errors.phone) {
              setErrors((prev) => {
                const cleared = { ...prev };
                delete cleared.phone;
                return cleared;
              });
            }
          }}
          maxLength={14}
          placeholder="(___) ___-____"
          autoComplete="tel-national"
          inputMode="tel"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? errId("phone") : undefined}
          className={inputCls(!!errors.phone)}
        />
        {errors.phone && (
          <p id={errId("phone")} role="alert" className={errorCls}>
            {errors.phone}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="lead-address" className={labelCls}>
          Property Address <span className="text-destructive">*</span>
        </label>
        <input
          id="lead-address"
          name="address"
          ref={addressInputRef}
          value={values.address}
          onChange={setField("address")}
          placeholder="Start typing — pick from suggestions *"
          autoComplete="street-address"
          aria-invalid={!!errors.address}
          aria-describedby={errors.address ? errId("address") : undefined}
          className={inputCls(!!errors.address)}
        />
        {errors.address && (
          <p id={errId("address")} role="alert" className={errorCls}>
            {errors.address}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="lead-details" className={labelCls}>
          Additional Details{" "}
          <span className={isGlass ? "text-white/60" : "text-muted-foreground"}>
            (optional)
          </span>
        </label>
        <textarea
          id="lead-details"
          name="details"
          value={values.details}
          onChange={setField("details")}
          placeholder="Tell us about your property or situation..."
          rows={4}
          className={`${inputCls(false)} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3.5 text-sm font-semibold text-background shadow-lg transition hover:translate-y-[-1px] hover:shadow-xl"
      >
        Get my fair cash offer
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </button>
      <p className={`text-[11px] leading-relaxed ${isGlass ? "text-white/70" : "text-muted-foreground"}`}>
        By submitting you agree to receive messages from Twin Cities Home Buyers. Msg &amp; data
        rates may apply. Reply STOP to unsubscribe.
      </p>
    </form>
  );
}
