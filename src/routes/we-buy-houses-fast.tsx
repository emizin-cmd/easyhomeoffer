import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CalendarClock,
  Check,
  ClipboardList,
  DollarSign,
  FileText,
  Handshake,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { LeadForm } from "@/components/LeadForm";
import { CompareTable } from "@/components/CompareTable";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { FaqAccordion, type FaqEntry } from "@/components/FaqAccordion";
import { GoogleGLogo } from "@/components/GoogleReviewCard";
import { ScrollOfferCta } from "@/components/ScrollOfferCta";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import skyline from "../assets/skyline.jpg";
import bbbAccredited from "../assets/bbb-accredited.png";
import bbbAPlus from "../assets/bbb-a-plus.png";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";

export const Route = createFileRoute("/we-buy-houses-fast")({
  component: WeBuyHousesFastPage,
  head: () =>
    buildSeo({
      path: "/we-buy-houses-fast",
      title: "We Buy Houses Fast in Minneapolis | Easy Home Offer",
      description:
        "Cash in hand in 7 days. Sometimes the same week. Foreclosure deadline, job relocation, urgent estate close — we buy Twin Cities houses fast.",
    }),
});

const BENEFITS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Zap,
    title: "24-hour written offer",
    body:
      "Submit the address and basics today. Tomorrow you have a written cash offer in your inbox with proof of funds attached. No phone-tag, no back-and-forth.",
  },
  {
    icon: CalendarClock,
    title: "Close in 7 days",
    body:
      "Our fastest deals have closed in 5 business days. The title company has a same-day option for emergencies. Pick a closing date that matches your urgency.",
  },
  {
    icon: DollarSign,
    title: "Cash — not financing",
    body:
      "No buyer mortgage to evaporate on day 28. Funds sit in our title company's escrow before we sign. The deal can't die because a lender changed its mind.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed close",
    body:
      "600+ closings since 2010. Zero broken deals. If we sign the purchase agreement, we close it. That's what makes 'fast' actually meaningful.",
  },
];

const STEPS: { n: string; icon: LucideIcon; title: string; body: string }[] = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Day 0 · Submit basics",
    body:
      "Five-minute form: address, rough condition, your timeline. No SSN, no credit pull. The clock starts the moment you hit send.",
  },
  {
    n: "02",
    icon: FileText,
    title: "Day 1 · Written cash offer",
    body:
      "Real number, proof of funds attached. Sent by email or text — whichever you prefer. You decide whether to keep going.",
  },
  {
    n: "03",
    icon: Phone,
    title: "Day 2–3 · Walkthrough + signed PA",
    body:
      "Short visit so we confirm condition. Purchase agreement signed at the kitchen table or via DocuSign — your call.",
  },
  {
    n: "04",
    icon: Handshake,
    title: "Day 7+ · Close, cash wired",
    body:
      "Title company closes; funds wire same day. Need it sooner? We can sometimes hand you a cashier's check at the closing table.",
  },
];

const FAQS: FaqEntry[] = [
  {
    q: "How fast is 'fast' really?",
    a: "Realistically: written offer within 24 hours of you submitting the form. Walkthrough within 48 hours of that. Closing in 7–14 days from signed purchase agreement. We've done full close-to-funds in 5 business days when title is clean and the seller is responsive.",
  },
  {
    q: "What about title clearance — won't that slow us down?",
    a: "We use two local title companies that specialize in fast turnarounds. They start the title work the day we sign the purchase agreement, often catching issues (liens, judgments, missing heir signatures) before they become deadline-killers. Most deals clear title in 5–7 days.",
  },
  {
    q: "I'm in foreclosure with X days until the sale — can you close in time?",
    a: "Usually yes. We've stopped sheriff's sales with 9 days to spare. Submit the property today, tell us the foreclosure deadline up front, and we'll fast-track it. We coordinate directly with your lender's loss-mitigation department on payoff timing.",
  },
  {
    q: "Why does cash close so much faster than a mortgage buyer?",
    a: "A retail buyer with a mortgage waits 30-45 days on underwriting, appraisal, repair negotiations, and final loan approval — any of which can kill the deal. With cash, none of those steps exist. The only timeline is title work + scheduling the closing.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
      <Sparkles className="h-3 w-3 text-primary" />
      {children}
    </div>
  );
}

function WeBuyHousesFastPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url(${skyline})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-10 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-secondary/60 py-1 pl-1.5 pr-3.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <img
                  src={bbbAPlus}
                  alt="BBB A+ Rating"
                  width={32}
                  height={32}
                  decoding="async"
                  className="h-5 w-auto shrink-0"
                />
                Twin Cities cash buyer · BBB A+ rated
              </div>
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:mt-6 md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                We buy houses fast
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                in the Twin Cities.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
              Cash in your hand in 7 days. Sometimes the same week. Foreclosure deadline
              ticking, relocating in 3 weeks, urgent estate close — we close on the date
              you need, with zero last-minute surprises.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8 md:gap-5">
              <a
                href="https://www.bbb.org/us/mn/maple-grove/profile/real-estate-investing/twin-cities-home-buyers-inc-0704-96005623#sealclick"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:opacity-80 md:gap-3"
                aria-label="BBB Accredited Business A+ Rating"
              >
                <img src={bbbAccredited} alt="BBB Accredited Business" width={120} height={56} decoding="async" fetchPriority="high" className="h-8 w-auto md:h-14" />
                <img src={bbbAPlus} alt="BBB A+ Rating" width={120} height={56} decoding="async" fetchPriority="high" className="h-8 w-auto md:h-14" />
              </a>

              <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/60 px-3 py-2 backdrop-blur-sm md:gap-4 md:rounded-2xl md:px-4 md:py-3">
                <div className="flex -space-x-1.5 md:-space-x-2">
                  {[avatar1, avatar2, avatar3].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={64}
                      height={64}
                      className="h-7 w-7 rounded-full border-2 border-background object-cover md:h-9 md:w-9"
                    />
                  ))}
                </div>
                <div className="text-xs leading-tight md:text-sm">
                  <div className="font-semibold text-foreground">600+ homeowners</div>
                  <div className="text-[11px] text-muted-foreground md:text-xs">trusted us since 2010</div>
                </div>
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-2 md:mt-8 md:gap-3">
              {[
                "Cash offer in 24 hours",
                "Close in as little as 7 days",
                "Any condition, any situation",
                "We pay all closing costs",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-[13px] font-medium leading-snug md:gap-3 md:text-sm">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary md:h-6 md:w-6">
                    <Check className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground md:mt-10 md:justify-start md:gap-x-8 md:gap-y-3">
              <div className="flex items-center gap-2">
                <GoogleGLogo className="h-5 w-5 shrink-0" />
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#FBBC05] text-[#FBBC05]"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <span className="font-medium text-foreground">4.9</span>
                <span>· 600+ Google reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
                15+ years in business
              </div>
              <a
                href="https://www.bbb.org/us/mn/maple-grove/profile/real-estate-investing/twin-cities-home-buyers-inc-0704-96005623"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:opacity-80"
              >
                <img
                  src={bbbAPlus}
                  alt="BBB A+ Rating"
                  width={32}
                  height={32}
                  decoding="async"
                  className="h-5 w-auto shrink-0"
                />
                <span>BBB A+ Rated</span>
              </a>
            </div>
          </div>

          {/* Offer card */}
          <div id="offer" className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] opacity-20 blur-2xl"
              style={{ background: "var(--gradient-primary)" }}
              aria-hidden
            />
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Get your free cash offer</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Takes 60 seconds · No obligation · Reply within 24h
                </p>
              </div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-border/60 bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Why we close fast</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Speed only counts{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                when the deal actually closes.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold leading-snug tracking-tight">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{b.body}</p>
                </div>
              );
            })}
          </div>

          <ScrollOfferCta />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Day-by-day timeline</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              From form to{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                wire transfer.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.n}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <div
                    className="bg-clip-text font-heading text-4xl font-black tabular-nums tracking-tight text-transparent"
                    style={{ backgroundImage: "var(--gradient-primary)" }}
                  >
                    {step.n}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-heading text-base font-bold leading-snug tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{step.body}</p>
                </div>
              );
            })}
          </div>

          <ScrollOfferCta />
        </div>
      </section>

      {/* COMPARE */}
      <section className="border-y border-border/60 bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Fast cash vs. listing</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              91 days on market vs.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                7 days to close.
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              When time matters more than every last dollar, the comparison isn't even close.
            </p>
          </div>
          <div className="mt-10">
            <CompareTable />
          </div>

          <ScrollOfferCta />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Verified Google reviews</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Sellers we closed fast
            </h2>
          </div>
          <div className="mt-14">
            <ReviewsCarousel />
          </div>

          <ScrollOfferCta />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border/60 bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <SectionLabel>Speed questions</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              How fast,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                actually?
              </span>
            </h2>
          </div>
          <div className="mt-10">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
