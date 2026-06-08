import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  FileText,
  Gavel,
  Handshake,
  Lock,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { LeadForm } from "@/components/LeadForm";
import { CompareTable } from "@/components/CompareTable";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { FaqAccordion, type FaqEntry } from "@/components/FaqAccordion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import skyline from "../assets/skyline.jpg";

export const Route = createFileRoute("/divorce")({
  component: DivorcePage,
  head: () =>
    buildSeo({
      path: "/divorce",
      title: "Selling a House During Divorce in Minneapolis | Easy Home Offer",
      description:
        "Sell the marital home for cash and close cleanly. Private, fast, no agent showings. Fair offer in 24 hours. Close in 7 days. Twin Cities.",
    }),
});

const BENEFITS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Lock,
    title: "Total privacy",
    body:
      "No yard sign. No MLS listing. No open houses. No nosy neighbors wondering why strangers keep showing up. The transaction stays between us, you, and the title company.",
  },
  {
    icon: Scale,
    title: "A single neutral offer",
    body:
      "We deliver one written offer that both parties see at the same time. No agent quietly working harder for one side, no separate negotiation, no he-said/she-said.",
  },
  {
    icon: Gavel,
    title: "We work with your attorneys",
    body:
      "Once you accept, your attorneys handle the marital paperwork on their end. We work directly with the title company so proceeds split exactly as your decree specifies.",
  },
  {
    icon: CalendarCheck,
    title: "Your timeline, not the court’s",
    body:
      "Close before the decree, after, or on the date both of you choose. Seven days or six months — your call. The offer stays valid while you both decide.",
  },
];

const STEPS: { n: string; icon: LucideIcon; title: string; body: string }[] = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Share the basics",
    body:
      "Either party (or both together) submits the property details. We keep everything confidential.",
  },
  {
    n: "02",
    icon: Phone,
    title: "Schedule a quiet walkthrough",
    body:
      "One short visit at a time both parties approve. No signs, no neighbors, no agent caravans.",
  },
  {
    n: "03",
    icon: FileText,
    title: "One written cash offer",
    body:
      "Delivered to both parties simultaneously. Proof of funds attached. No contingencies.",
  },
  {
    n: "04",
    icon: Handshake,
    title: "Close at the title company",
    body:
      "Both sign on your chosen date. Proceeds split per the decree — directly from the title company.",
  },
];

const FAQS: FaqEntry[] = [
  {
    q: "Will our neighbors know we're selling?",
    a: "No. There's no MLS listing, no yard sign, no Zillow page, no public-facing photos. The only people who ever step foot in the house are you, your spouse, and us.",
  },
  {
    q: "Can one spouse contact you without the other?",
    a: "Yes — initial conversations are confidential. But both spouses (or whoever's on title) need to sign the purchase agreement and the closing documents at the title company. Many couples reach out together for that reason.",
  },
  {
    q: "What if we can't agree on a price?",
    a: "Our offer is written and based on the home's real condition and recent Minneapolis comps. It's the same number for both of you. You and your attorneys decide whether to accept. We don't push.",
  },
  {
    q: "Do you work with divorce attorneys?",
    a: "Often. We're happy to share copies of the offer and closing documents directly with each spouse's attorney so everything aligns with the settlement agreement before signing.",
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

function DivorcePage() {
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
              <SectionLabel>Divorce · A private, fast close</SectionLabel>
            </div>
            <h1 className="mt-5 text-center text-4xl font-bold leading-[1.05] tracking-tight md:mt-6 md:text-5xl lg:text-left lg:text-6xl">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Selling the house during
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                a divorce?
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg lg:mx-0 lg:text-left">
              A fair, neutral cash offer so you can close this chapter and move on. No
              agent showings, no nosy open houses, no waiting six months for the right
              buyer. We close at a local title company on your timeline.
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
            <SectionLabel>Built for divorce sales</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Designed to be{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                private, neutral, and final.
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
            <SectionLabel>The process</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              From first call to{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                signed and closed.
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
              Why most couples skip{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                the MLS during divorce.
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Listing means months of showings, a public listing both spouses see daily,
              and uncertainty about who closes first. Direct sale removes all three.
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
            <SectionLabel>Divorce sale questions</SectionLabel>
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
