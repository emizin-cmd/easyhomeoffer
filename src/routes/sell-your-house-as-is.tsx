import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeCheck,
  ClipboardList,
  Flame,
  Hammer,
  Handshake,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trash2,
} from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { LeadForm } from "@/components/LeadForm";
import { CompareTable } from "@/components/CompareTable";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { FaqAccordion, type FaqEntry } from "@/components/FaqAccordion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import skyline from "../assets/skyline.jpg";

export const Route = createFileRoute("/sell-your-house-as-is")({
  component: SellYourHouseAsIsPage,
  head: () =>
    buildSeo({
      path: "/sell-your-house-as-is",
      title: "Sell Your House As-Is in Minneapolis | Easy Home Offer",
      description:
        "We buy Twin Cities houses exactly as they are. Major repairs, code issues, fire/water damage, hoarder cleanouts — all fine. Cash offer in 24 hours.",
    }),
});

const BENEFITS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Hammer,
    title: "Major structural & system issues",
    body:
      "Foundation cracks, roof leaks, failing furnace, sewer line backups, knob-and-tube wiring, ancient galvanized plumbing. None of it scares us. We buy houses that wouldn't pass a single FHA inspection.",
  },
  {
    icon: AlertTriangle,
    title: "Code violations & open permits",
    body:
      "Open permits from 2003, expired certificate of occupancy, condemned status, unfinished basement remodel, illegal additions. We can still write an offer and close.",
  },
  {
    icon: Flame,
    title: "Fire, water, mold & hazards",
    body:
      "Fire and smoke damage, flood damage, black mold, asbestos, lead paint, hoarder-grade interiors. We've bought houses through all of it — and we handle remediation post-closing.",
  },
  {
    icon: Trash2,
    title: "Leave anything you want",
    body:
      "Furniture, appliances, garbage, boxes from the move you started ten years ago, even an inoperable car in the driveway. Leave it. Disposal is on us.",
  },
];

const STEPS: { n: string; icon: LucideIcon; title: string; body: string }[] = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Be honest about the condition",
    body:
      "The more detail we have up front, the more accurate the first offer. Pictures help — even rough phone pics from the doorway.",
  },
  {
    n: "02",
    icon: Phone,
    title: "We walk through as-is",
    body:
      "No need to clean. No need to move anything. We look at the condition exactly as you live in it (or exactly as it sits if it's vacant).",
  },
  {
    n: "03",
    icon: Handshake,
    title: "Cash at close, no renegotiation",
    body:
      "Our written offer is what closes. No repair credits, no last-minute price drop after the inspection. Close at a local title company in 7-14 days.",
  },
];

const FAQS: FaqEntry[] = [
  {
    q: "What's the worst condition you'll buy?",
    a: "Honestly? We've bought houses with caved-in roofs, fire damage, hoarder conditions, raw sewage in the basement, and squatters still in residence. If you're embarrassed about the condition, that almost always means it's a great fit for us.",
  },
  {
    q: "Will the offer change after you walk through?",
    a: "Our written offer is what closes. We don't 'inspect to renegotiate' — that's an agent-deal tactic. We absorb the repair risk when we sign. The only thing that changes our offer is finding out the property is in better condition than you described.",
  },
  {
    q: "What about asbestos, lead paint, or mold?",
    a: "All fine. We handle remediation after closing. You're not on the hook for testing, disclosure work, or cleanup costs. We disclose what we find to our own future buyer when we resell.",
  },
  {
    q: "Do you charge me for the cleanout?",
    a: "Never. Cleanout, junk removal, disposal — all on us. Leave the place as messy as you need. We donate what's reusable, recycle what we can, and dump the rest. You walk away with the keys and the check.",
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

function SellYourHouseAsIsPage() {
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
            <div className="flex justify-center lg:justify-start">
              <SectionLabel>Any condition · No repairs</SectionLabel>
            </div>
            <h1 className="mt-5 text-center text-4xl font-bold leading-[1.05] tracking-tight md:mt-6 md:text-5xl lg:text-left lg:text-6xl">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Sell your house
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                exactly as it is.
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg lg:mx-0 lg:text-left">
              Don’t lift a paintbrush. Don’t haul a single box. We buy Minneapolis &amp;
              St. Paul houses in any condition — even with leftover belongings, deferred
              maintenance, or full-on "fixer-upper" status.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium text-foreground">4.9</span>
                <span>· 600+ sellers helped</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />
                15+ years in business
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
                BBB A+ rated
              </div>
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
            <SectionLabel>What "as-is" actually covers</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              If a buyer with an FHA loan{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                would walk — we'll still buy.
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
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>The as-is process</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              3 steps. No repairs.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                No surprises.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.n}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
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
        </div>
      </section>

      {/* COMPARE */}
      <section className="border-y border-border/60 bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>As-is vs. listing for retail</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Retail price{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                comes with retail costs.
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              An agent listing means you fund the repairs to reach the retail buyer.
              That math rarely beats a direct as-is offer once you count the holding costs.
            </p>
          </div>
          <div className="mt-10">
            <CompareTable />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Real homeowners. Real stories.</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Trusted across the Twin Cities
            </h2>
          </div>
          <div className="mt-14">
            <ReviewsCarousel />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border/60 bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <SectionLabel>As-is sale questions</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              The questions{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                we hear most.
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
