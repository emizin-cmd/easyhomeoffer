import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Check, Minus, Sparkles, Star } from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { LeadForm } from "@/components/LeadForm";
import { CompareTable } from "@/components/CompareTable";
import { GoogleGLogo } from "@/components/GoogleReviewCard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import skyline from "../assets/skyline.jpg";
import bbbAccredited from "../assets/bbb-accredited.png";
import bbbAPlus from "../assets/bbb-a-plus.png";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";

export const Route = createFileRoute("/compare")({
  component: ComparePage,
  head: () =>
    buildSeo({
      path: "/compare",
      title: "Sell Direct vs. Listing: Compare Your Options | Easy Home Offer",
      description:
        "Commissions, repairs, showings, contingencies — see the side-by-side cost of an agent vs. selling your Minneapolis house direct for cash.",
    }),
});

const DISADVANTAGES = [
  "Lost time with days on market",
  "Additional money lost on repairs",
  "Numerous showings and insensitive buyers",
];

const UPPER_HAND = [
  "Your house isn't on the market at all",
  "Sold with one showing — just us",
  "No repairs, utility bills, or property taxes piling up",
  "Sold on day 1 — potentially cash in hand on day 7",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
      <Sparkles className="h-3 w-3 text-primary" />
      {children}
    </div>
  );
}

function ComparePage() {
  const scrollToOffer = () =>
    document
      .getElementById("offer")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: `url(${skyline})`, backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
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
                Selling to Twin Cities Home Buyers
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                vs. a Minnesota agent.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
              There are real differences between selling the traditional way through a realtor and
              selling to professional home buyers. Before you list, take a look at all your options —
              the open market isn't always the better deal.
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

      {/* COMPARISON TABLE */}
      <section className="relative py-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 45% at 100% 0%, color-mix(in oklab, var(--primary) 9%, transparent), transparent 70%), radial-gradient(50% 40% at 0% 100%, color-mix(in oklab, var(--primary) 6%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>The breakdown</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              The differences,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                line by line.
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              When the Minneapolis market favors sellers, listing looks obvious — until you tally up
              the commissions, repairs, showings, and time on market.
            </p>
          </div>

          <div className="mt-10">
            <CompareTable />
          </div>
        </div>
      </section>

      {/* WHO BENEFITS */}
      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div>
              <div className="flex justify-center lg:justify-start">
                <SectionLabel>Who really benefits?</SectionLabel>
              </div>
              <h2 className="mt-5 text-center font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-left">
                You shouldn't have to{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  pay to sell.
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  When you work with a real estate agent, you need to worry about paying out
                  commissions and fees, closing costs, and even more money in repairs or inspection
                  items that come up.
                </p>
                <p>
                  When you work with Twin Cities Home Buyers, you don't have any commissions, fees,
                  or closing costs to pay. There's nothing you need to pay out of pocket to sell
                  your home to us. Ever.
                </p>
                <p className="font-heading text-lg font-semibold text-foreground">
                  If you list your house with a realtor, you have the disadvantages of:
                </p>
                <ul className="space-y-2">
                  {DISADVANTAGES.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-border bg-secondary/60">
                        <Minus className="h-3 w-3 text-muted-foreground" />
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Upper hand card */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:p-9">
                <SectionLabel>With us, the upper hand</SectionLabel>
                <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight">
                  Sold on day 1. Cash in hand on day 7.
                </h3>
                <ul className="mt-6 space-y-3">
                  {UPPER_HAND.map((u) => (
                    <li key={u} className="flex items-start gap-3 text-sm">
                      <span
                        className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-primary-foreground"
                        style={{ background: "var(--gradient-primary)" }}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-foreground/85">{u}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 rounded-2xl border border-border bg-secondary/40 p-5 text-sm text-foreground/80">
                  In 15 years and 600+ deals, we've{" "}
                  <span className="font-semibold text-foreground">never had a broken deal.</span>{" "}
                  That's more than 600 happy home sellers.
                </div>
              </div>
            </div>
          </div>

          <div className="my-10 flex justify-center md:my-12 lg:hidden">
            <button
              type="button"
              onClick={scrollToOffer}
              className="group flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-[#f97316] px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-xl active:translate-y-0 active:bg-[#c2410c]"
            >
              Get My Cash Offer
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* INSPECTION + FINANCING TRAP */}
      <section className="relative border-t border-border/60 py-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 45% at 0% 0%, color-mix(in oklab, var(--primary) 8%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>What happens after the offer</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              An offer isn't a sale.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Step 1 — Inspection
              </div>
              <h3 className="mt-2 font-heading text-xl font-bold">Repairs can make or break the deal</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                Say the inspector flags your breaker box and wants it updated from 60amp to 120amp.
                That's a <span className="font-semibold text-foreground">$2,500+ cost to you</span> —
                with no added value to your property — just to satisfy this one buyer.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Step 2 — Financing
              </div>
              <h3 className="mt-2 font-heading text-xl font-bold">The lender can still kill it</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                Even after a clean inspection, most buyers need a lender. If that lender backs out,
                the deal is off. This happens to{" "}
                <span className="font-semibold text-foreground">15% of all real estate deals.</span>
              </p>
            </div>
          </div>

          <div
            className="mt-10 rounded-3xl border border-border p-8 text-center"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--primary) 12%, transparent), transparent)",
            }}
          >
            <h3 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
              With Twin Cities Home Buyers, you don't have either.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] text-foreground/80">
              We do our inspection at the initial offer meeting and we make all-cash offers with no
              contingencies. We can't pay retail prices for the house, but we are{" "}
              <span className="font-semibold text-foreground">guaranteed to close</span> on all of
              our deals.
            </p>
          </div>

          <div className="my-10 flex justify-center md:my-12 lg:hidden">
            <button
              type="button"
              onClick={scrollToOffer}
              className="group flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-[#f97316] px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-xl active:translate-y-0 active:bg-[#c2410c]"
            >
              Get My Cash Offer
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL — LARSONS */}
      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <div className="flex justify-center lg:justify-start">
                <SectionLabel>A real story</SectionLabel>
              </div>
              <h2 className="mt-5 text-center font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-left">
                The Larsons inherited a house they{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  didn't want.
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  Like most people, they didn't have time to sell on their own. When they first
                  visited the house, they realized it was in such poor condition they wouldn't be
                  able to sell it without paying for extensive repairs. They were tempted to leave
                  the house and let the city claim it.
                </p>
                <p>
                  They didn't want to pay commissions, fees, or any of the repair and labor costs
                  to bring the house up in value — so they searched for a professional home buyer
                  in Minneapolis and contacted Twin Cities Home Buyers.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:p-9">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                  L
                </div>
                <div>
                  <div className="font-semibold leading-tight">The Larsons</div>
                  <div className="text-xs text-muted-foreground">Minneapolis, MN · Inherited home</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-5 border-l-2 border-primary/60 pl-4 italic text-foreground/80">
                "After talking to Jason about the fears we had about selling to an investor, he put
                our mind at ease. He explained how he came to the all-cash offer and how the
                7–10 day closing works."
              </blockquote>
              <p className="mt-5 text-sm text-foreground/80">
                The Larsons accepted the offer. According to Mrs. Larson, “the whole complete
                process was stress free and Jason was very patient with our schedule.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
