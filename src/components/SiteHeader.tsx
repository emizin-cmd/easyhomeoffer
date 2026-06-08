import { Link } from "@tanstack/react-router";
import { Phone, Menu } from "lucide-react";
import * as React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.svg";

const PHONE_DISPLAY = "612-445-5250";
const PHONE_TEL = "6124455250";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <img
            src={logo}
            alt="Easy Home Offer"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="text-lg tracking-tight">Easy Home Offer</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground lg:flex">
          <Link
            to="/sell-your-house"
            className="font-bold text-foreground transition hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Sell Your House
          </Link>
          <Link
            to="/get-a-cash-offer-today"
            className="transition hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Get a Cash Offer
          </Link>
          <Link
            to="/how-it-works"
            className="transition hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            How it works
          </Link>
          <Link
            to="/compare"
            className="transition hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Compare
          </Link>
          <Link
            to="/testimonials"
            className="transition hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Testimonials
          </Link>
          <Link
            to="/faq"
            className="transition hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            FAQ
          </Link>
          <Link
            to="/about"
            className="transition hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            About
          </Link>
          <Link
            to="/contact-us"
            className="transition hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 rounded-full bg-[#f97316] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#ea580c] hover:shadow-md active:bg-[#c2410c] sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-background text-foreground transition hover:bg-accent lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-72 flex-col sm:w-80">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-2">
                <Link
                  to="/sell-your-house"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-bold text-foreground transition hover:bg-accent"
                  activeProps={{ className: "text-foreground" }}
                >
                  Sell Your House
                </Link>
                <Link
                  to="/get-a-cash-offer-today"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  Get a Cash Offer
                </Link>
                <Link
                  to="/how-it-works"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  How it works
                </Link>
                <Link
                  to="/compare"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  Compare
                </Link>
                <Link
                  to="/testimonials"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  Testimonials
                </Link>
                <Link
                  to="/faq"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  FAQ
                </Link>
                <Link
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  About
                </Link>
                <Link
                  to="/contact-us"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  Contact
                </Link>
              </nav>
              <div className="mt-auto pt-6 pb-6">
                <a
                  href={`tel:${PHONE_TEL}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#f97316] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#ea580c] hover:shadow-md active:bg-[#c2410c]"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
