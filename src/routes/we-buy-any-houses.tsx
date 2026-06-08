import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  ClipboardList,
  Clock,
  Handshake,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingDown,
} from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { LeadForm } from "@/components/LeadForm";
import { CompareTable } from "@/components/CompareTable";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { FaqAccordion, type FaqEntry } from "@/components/FaqAccordion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import skyline from "../assets/skyline.jpg";

export const Route = createFileRoute("/we-buy-any-houses")({
  component: WeBuyAnyHousesPage,
  head: () =>
    buildSeo({
      path: "/we-buy-any-houses",
      title: "We Buy Any House in Minneapolis–St. Paul | Easy Home Offer",
      description:
        "Any condition. Any situation. Any neighborhood. Get a fair all-cash offer for your Twin Cities house in 24 hours. Close in as little as 7 days.",
    }),
});

const BENEFITS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Home,
    title: "Any condition",
    body:
      "Mint-condition or full gut rehab. Move-in ready or condemned. The condition affects the price — it doesn't affect whether we'll write you an offer.",
  },
  {
    icon: TrendingDown,
    title: "Any situation",
    body:
      "Foreclosure timeline ticking, inherited from a distant relative, post-divorce, downsize for assisted living, job relocating in two weeks, vacant for years. We've closed all of these.",
  },
  {
    icon: MapPin,
    title: "Any neighborhood",
    body:
      "Minneapolis, St. Paul, Edina, Bloomington, Brooklyn Park, Apple Valley, Rochester, Duluth — anywhere in Minnesota. Single-family, condo, townhome, duplex, mobile on land, all considered.",
  },
  {
    icon: Clock,
    title: "Any timeline",
    body:
      "Need to close next week? We can. Need to wait 90 days while your next house finishes building? Also fine. You set the pace and our offer stays valid.",
  },
];

const STEPS: { n: string; icon: LucideIcon; title: string; body: string }[] = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Address and basics",
    body:
      "Five-minute form. Tell us the address, rough condition, and your timeline. No SSN, no credit pull, no commitment.",
  },
  {
    n: "02",
    icon: Phone,
    title: "Same- or next-day walkthrough",
    body:
      "We schedule fast because we know you wouldn't be here if you weren't ready to move. Bring questions.",
  },
  {
    n: "03",
    icon: Handshake,
    title: "Written cash offer, your date",
    body:
      "Within 24 hours. Pick the closing date, the title company, and the terms. Cash at close.",
  },
];

const FAQS: FaqEntry[] = [
  {
    q: "Do you buy condos and townhomes?",
    a: "Yes. Condos, townhomes, single-family, duplexes up to fourplexes, and mobile homes on owned land. We check HOA fees and any pending special assessments as part of our valuation, but those rarely kill a deal.",
  },
  {
    q: "What about tenant-occupied properties?",
    a: "Yes. We buy occupied rentals all the time. You don't need to evict, give notice, or even tell your tenants we're coming through (though it's appreciated). We handle the lease transition or the move-out, whichever fits.",
  },
  {
    q: "What if I owe more on the house than it's worth?",
    a: "Sometimes we can still help via creative options — short sale negotiation with your lender, subject-to financing where we take over payments, or wrapping the mortgage. It depends on the loan and your lender. Worth a conversation.",
  },
  {
    q: "What areas do you actually buy in?",
    a: "The entire Twin Cities metro is our home turf — Hennepin, Ramsey, Anoka, Dakota, Washington, Carver, Scott. We also buy regularly in Rochester, St. Cloud, Duluth, and most of greater Minnesota. If you're unsure, just submit the address — we'll tell you yes or no in 24 hours.",
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

function WeBuyAnyHousesPage() {
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
              <SectionLabel>Any condition · Any situation</SectionLabel>
            </div>
            <h1 className="mt-5 text-center text-4xl font-bold leading-[1.05] tracking-tight md:mt-6 md:text-5xl lg:text-left lg:text-6xl">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                We buy any house
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                in the Twin Cities.
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg lg:mx-0 lg:text-left">
              Foreclosure, inherited, fire-damaged, vacant, tenant-occupied, tiny,
              huge, downtown, suburb — if it’s in Minneapolis–St. Paul (or anywhere in
              MN), we’re interested. Fair cash offer in 24 hours.
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
            <SectionLabel>Why "any" actually means any</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              We've seen worse.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                We've still bought.
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
            <SectionLabel>The any-house process</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              3 steps, your terms,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                your date.
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
            <SectionLabel>Direct vs. an agent</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Any house, every line —{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                see the math.
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
            <SectionLabel>Any-house questions</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              The edge cases{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                sellers ask about.
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
