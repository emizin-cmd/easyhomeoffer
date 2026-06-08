import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  ClipboardList,
  FileCheck,
  FileText,
  Handshake,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wallet,
} from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { LeadForm } from "@/components/LeadForm";
import { CompareTable } from "@/components/CompareTable";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { FaqAccordion, type FaqEntry } from "@/components/FaqAccordion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import skyline from "../assets/skyline.jpg";

export const Route = createFileRoute("/home-buyers")({
  component: HomeBuyersPage,
  head: () =>
    buildSeo({
      path: "/home-buyers",
      title: "Minneapolis Home Buyers You Can Trust | Easy Home Offer",
      description:
        "Local Twin Cities home buyers — not wholesalers. BBB A+ rated, 15+ years, 600+ sellers helped. Real cash, real closings. Get a fair offer today.",
    }),
});

const BENEFITS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Wallet,
    title: "Real cash, verified",
    body:
      "Every offer we send includes proof of funds from our title company. You can confirm the money exists before you ever sign anything — and we encourage you to.",
  },
  {
    icon: ShieldCheck,
    title: "BBB A+ accredited since 2010",
    body:
      "Look us up at bbb.org. Zero complaints filed in 15 years. Hundreds of verified Google reviews from real Twin Cities homeowners — not stock photos and fake names.",
  },
  {
    icon: Users,
    title: "Local team, 600+ closings",
    body:
      "Same office in Maple Grove since 2009. The Jason who picks up your call is the Jason who shows up to your walkthrough and signs at the title company.",
  },
  {
    icon: FileCheck,
    title: "We close, period",
    body:
      "We do not assign contracts. We do not 'wholesale' your house to a third party. The name on the title company's buyer line is the same every single time.",
  },
];

const STEPS: { n: string; icon: LucideIcon; title: string; body: string }[] = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Quick intro call",
    body:
      "Five minutes. We learn about you, the property, and your timeline. No pitch, no pressure.",
  },
  {
    n: "02",
    icon: Phone,
    title: "Walkthrough within 48 hours",
    body:
      "At a time that works for you. We show up, we're respectful of your time, and we leave when promised.",
  },
  {
    n: "03",
    icon: FileText,
    title: "Written offer with proof of funds",
    body:
      "Take it to your CPA, your attorney, or your dog. We don't follow up aggressively while you decide.",
  },
  {
    n: "04",
    icon: Handshake,
    title: "Close at a local title company",
    body:
      "Cash wired the same day. We've used the same two title companies for over a decade — they know our paperwork cold.",
  },
];

const FAQS: FaqEntry[] = [
  {
    q: "How do I verify you're actually buyers and not wholesalers?",
    a: "Three ways: (1) Our BBB A+ accredited profile lists every complaint ever filed against us — zero. (2) Our Google reviews come from real, named sellers we've closed with. (3) Every offer we make includes proof of funds from our title company. Call them. They'll confirm.",
  },
  {
    q: "Are you wholesalers?",
    a: "No. Wholesalers put your house under contract and try to assign that contract to a third-party buyer — if no one bites, the deal evaporates. We're the buyer of record on every deal. Same name on every closing for 15 years.",
  },
  {
    q: "Why is your offer below retail market value?",
    a: "Because we're not a retail buyer. We pay cash, close in 7-14 days, take the property in any condition, and pay all closing costs. That speed and certainty has a price — usually 70-85% of after-repair value, depending on condition and market.",
  },
  {
    q: "Who pays the closing costs?",
    a: "We do. Title insurance, escrow fees, transfer fees, the title company's closing fee — all on us. You walk away with the offer amount. No surprise deductions at the closing table.",
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

function HomeBuyersPage() {
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
              <SectionLabel>Local home buyers · Twin Cities</SectionLabel>
            </div>
            <h1 className="mt-5 text-center text-4xl font-bold leading-[1.05] tracking-tight md:mt-6 md:text-5xl lg:text-left lg:text-6xl">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Minneapolis home buyers
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                you can trust.
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg lg:mx-0 lg:text-left">
              Not a wholesaler. Not an assignment broker. We’re the actual buyer —
              writing real all-cash offers with our own money and closing with a local
              title company. 15+ years. 600+ sellers helped.
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
            <SectionLabel>What sets us apart</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              The same buyer, same office,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                for 15 years.
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
            <SectionLabel>How we actually buy</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              From first call to{" "}
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
        </div>
      </section>

      {/* COMPARE */}
      <section className="border-y border-border/60 bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Direct vs. an agent</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              The financial breakdown,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                line by line.
              </span>
            </h2>
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
            <SectionLabel>Verified Google reviews</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              What our sellers actually say
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
            <SectionLabel>Buyer credibility questions</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              The questions{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                smart sellers ask.
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
