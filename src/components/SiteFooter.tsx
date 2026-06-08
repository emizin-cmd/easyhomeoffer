import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.svg";

const PHONE_DISPLAY = "612-445-5250";
const PHONE_TEL = "6124455250";

export function SiteFooter() {
  return (
    <>
      {/* Floating "Get Cash Offer" widget — desktop only */}
      <div className="pointer-events-none fixed bottom-8 right-8 z-50 hidden md:block">
        <span
          aria-hidden
          className="animate-cta-ripple pointer-events-none absolute inset-0 rounded-full bg-[#f97316]"
        />
        <span
          aria-hidden
          className="animate-cta-ripple-delayed pointer-events-none absolute inset-0 rounded-full bg-[#f97316]"
        />
        <button
          type="button"
          aria-label="Scroll to lead capture form"
          onClick={() =>
            document
              .getElementById("offer")
              ?.scrollIntoView({ behavior: "smooth", block: "center" })
          }
          className="pointer-events-auto relative inline-flex items-center rounded-full bg-[#f97316] px-5 py-3 text-sm font-semibold text-white shadow-xl ring-1 ring-[#fb923c]/30 transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-2xl active:translate-y-0"
        >
          Get Cash Offer
        </button>
      </div>

      {/* Floating phone CTA — mobile only (pill with number + icon) */}
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label={`Call us at ${PHONE_DISPLAY}`}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#f97316] py-2 pl-5 pr-2 text-primary-foreground shadow-lg ring-4 ring-[#f97316]/20 transition hover:scale-105 hover:shadow-xl active:scale-95 md:hidden"
      >
        <span className="text-sm font-semibold tracking-tight">{PHONE_DISPLAY}</span>
        <span
          aria-hidden
          className="grid h-9 w-9 place-items-center rounded-full bg-white/25 backdrop-blur-sm"
        >
          <Phone className="h-4 w-4 animate-phone-wiggle" strokeWidth={2.5} />
        </span>
        <span className="sr-only">Call {PHONE_DISPLAY}</span>
      </a>

      <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Easy Home Offer"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="text-lg font-bold tracking-tight">Easy Home Offer</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Twin Cities Home Buyers. Buying houses across Minnesota for over 15 years.
            BBB A+ rated. 600+ sellers helped.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://x.com/TCHomeBuyers"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-muted text-muted-foreground transition hover:text-foreground"
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCTvAQ04UMwCXyDSZ_COnqHg"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-muted text-muted-foreground transition hover:text-foreground"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/twincitieshomebuyer/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-muted text-muted-foreground transition hover:text-foreground"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a
              href="https://www.facebook.com/TwinCitiesHomeBuyers/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-muted text-muted-foreground transition hover:text-foreground"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/sell-your-house" className="hover:text-foreground">Sell Your House</Link></li>
            <li><Link to="/how-it-works" className="hover:text-foreground">How it works</Link></li>
            <li><Link to="/compare" className="hover:text-foreground">Compare</Link></li>
            <li><Link to="/testimonials" className="hover:text-foreground">Testimonials</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link to="/contact-us" className="hover:text-foreground">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="font-semibold text-foreground">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              4820 Minnetonka Blvd, Suite 300
              <br />
              Minneapolis, MN 55416
            </li>
            <li>Mon–Sat · 8am–7pm CT</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-foreground">Terms & Conditions</Link>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground/70">
            We are a real estate solutions and investment firm that specializes in helping homeowners get rid of burdensome houses fast at a fair price with no hassles. We are investors and problem solvers who can buy your house fast with a fair all cash offer.
          </p>
          <p className="mt-4 text-left text-xs text-muted-foreground">
            © {new Date().getFullYear()} Easy Home Offer · Twin Cities Home Buyers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
