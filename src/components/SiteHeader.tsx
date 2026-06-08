import { Link } from "@tanstack/react-router";
import { ChevronDown, Phone, Menu } from "lucide-react";
import * as React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.svg";

const PHONE_DISPLAY = "612-445-5250";
const PHONE_TEL = "6124455250";

type SellMenuItem = { to: string; label: string };

const SELL_MENU: SellMenuItem[] = [
  { to: "/sell-your-house", label: "Sell Your House" },
  { to: "/get-a-cash-offer-today", label: "Get a Cash Offer" },
  { to: "/sell-inherited-home-minneapolis", label: "Sell Inherited Home" },
  { to: "/sell-your-house-as-is", label: "Sell Your House As-Is" },
  { to: "/home-buyers", label: "Home Buyers" },
  { to: "/we-buy-houses-fast", label: "We Buy Houses Fast" },
  { to: "/we-buy-inherited-houses", label: "We Buy Inherited Houses" },
  { to: "/we-buy-houses-as-is", label: "We Buy Houses As-Is" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = React.useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = React.useState(false);
  const desktopMenuRef = React.useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click + Escape.
  React.useEffect(() => {
    if (!desktopMenuOpen) return;
    const handlePointer = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && desktopMenuRef.current && !desktopMenuRef.current.contains(target)) {
        setDesktopMenuOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDesktopMenuOpen(false);
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [desktopMenuOpen]);

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
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          {/* Sell Your House — dropdown trigger */}
          <div className="relative" ref={desktopMenuRef}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={desktopMenuOpen}
              onClick={() => setDesktopMenuOpen((v) => !v)}
              className="inline-flex items-center gap-1 font-bold text-foreground transition hover:text-foreground"
            >
              Sell Your House
              <ChevronDown
                className={`h-4 w-4 transition-transform ${desktopMenuOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {desktopMenuOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-border bg-card shadow-xl"
              >
                <ul className="py-2">
                  {SELL_MENU.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        role="menuitem"
                        onClick={() => setDesktopMenuOpen(false)}
                        className="block px-4 py-2.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                        activeProps={{ className: "bg-secondary text-foreground" }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

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

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
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
              <nav className="mt-8 flex flex-col gap-1">
                {/* Sell Your House — collapsible group */}
                <button
                  type="button"
                  aria-expanded={mobileSubmenuOpen}
                  aria-controls="mobile-sell-submenu"
                  onClick={() => setMobileSubmenuOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-bold text-foreground transition hover:bg-accent"
                >
                  Sell Your House
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileSubmenuOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                <div
                  id="mobile-sell-submenu"
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    mobileSubmenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="mt-1 mb-1 flex flex-col gap-0.5 border-l border-border/60 pl-3">
                      {SELL_MENU.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                            activeProps={{ className: "text-foreground" }}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/how-it-works"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  How it works
                </Link>
                <Link
                  to="/compare"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  Compare
                </Link>
                <Link
                  to="/testimonials"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  Testimonials
                </Link>
                <Link
                  to="/faq"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  FAQ
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  About
                </Link>
                <Link
                  to="/contact-us"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  Contact
                </Link>
              </nav>
              <div className="mt-auto pt-6 pb-6">
                <a
                  href={`tel:${PHONE_TEL}`}
                  onClick={() => setMobileOpen(false)}
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
