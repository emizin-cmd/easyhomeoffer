import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Quote, Sparkles, Star } from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { LeadForm } from "@/components/LeadForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import skyline from "../assets/skyline.jpg";

export const Route = createFileRoute("/get-a-cash-offer-today")({
  component: GetACashOfferTodayPage,
  head: () =>
    buildSeo({
      path: "/get-a-cash-offer-today",
      title: "Get a Cash Offer Today | We Buy Minneapolis Houses Fast",
      description:
        "Sell your Twin Cities house this week. Fair all-cash offer in 24 hours. No fees, no repairs, no agent commissions. Call 612-445-5250.",
    }),
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
      <Sparkles className="h-3 w-3 text-primary" />
      {children}
    </div>
  );
}

const COMMON_POINTS = [
  "They deserve to receive fair treatment",
  "They need a quick solution that puts cash in their pocket right away",
  "They shouldn’t have to pay all of the extra cash for real estate agent fees, closing fees, etc.",
  "They just want to end the headache this house is giving them",
];

function GetACashOfferTodayPage() {
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
        <div className="relative mx-auto max-w-4xl px-6 py-10 md:py-20 text-center lg:py-28">
          <SectionLabel>Get a cash offer · Today</SectionLabel>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:mt-6 md:text-5xl lg:text-6xl">
            <span className="block bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Sell Your House This Week
            </span>
            <span className="mt-3 block bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              We Buy Minneapolis Houses Fast!
            </span>
            <span
              className="mt-3 block bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              … And Give You A Fair Cash Offer
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
            No repairs. No showings. No agent fees. Just a fair offer and a closing date
            that works for you.
          </p>

          <div className="my-10 flex justify-center md:my-12 lg:hidden">
            <button
              type="button"
              onClick={scrollToOffer}
              className="group flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3.5 text-sm font-semibold text-background shadow-lg transition hover:translate-y-[-1px] hover:shadow-xl"
            >
              Get My Cash Offer
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* INTRO COPY */}
      <section className="relative py-10 md:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 45% at 15% 0%, color-mix(in oklab, var(--primary) 9%, transparent), transparent 70%), radial-gradient(50% 40% at 100% 100%, color-mix(in oklab, var(--primary) 6%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-5 text-[15px] leading-relaxed text-foreground/80">
            <p>
              Selling a house can be stressful, time-consuming, and expensive. Eliminate that
              stress and the peace of mind that comes with knowing your house hassles are
              completely done – without having to fix it up, show it, wait for buyer
              financing, or evict the tenants.
            </p>
            <p className="font-heading text-xl font-semibold text-foreground">
              And, it all happens SO FAST.
            </p>
            <p>
              We work with people every week who need to sell their house fast. Good folks
              who are in complicated housing situations.
            </p>
            <p>
              Such as people in foreclosure, going through a divorce, relocating and can’t
              sell their house. Those who own a vacant house they don’t want to deal with
              any more… to landlords tired of dealing with tenants, and people who inherited
              a house they don’t want.
            </p>
            <p>
              Homeowners who lost their job and just can’t afford the payment any more and
              can’t afford to pay a real estate agent their fees to sell it, to people who
              owe more on their house than it’s worth and listing with an agent just isn’t an
              option.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL */}
      <section className="relative border-y border-border/60 bg-secondary/40 py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10">
            <Quote
              className="absolute top-6 right-6 h-10 w-10 text-primary/15"
              strokeWidth={1.5}
              aria-hidden
            />
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="mt-5 border-l-2 border-primary/60 pl-5 text-[17px] italic leading-relaxed text-foreground/85">
              “Jason helped me through a difficult situation. Being able to sell my home in
              a quick manner was a great help. All the people I worked with at Twin Cities
              Home Buyers were understanding, helpful and accessible. I appreciate the
              assistance they provided me during this difficult time. I would recommend Twin
              Cities Home Buyers to others.”
            </blockquote>
            <footer className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                F
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Mrs. Ford</div>
                <div className="text-xs text-muted-foreground">
                  Homeowner · Twin Cities, MN
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>

      {/* COMMON GROUND — bullets */}
      <section className="relative py-12 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 45% at 50% 0%, color-mix(in oklab, var(--primary) 6%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>What they have in common</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              What all of these people we help{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                have in common is…
              </span>
            </h2>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {COMMON_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-primary/40"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium leading-relaxed text-foreground/90">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-foreground/80">
            … and we can help them{" "}
            <span className="font-semibold text-foreground">achieve all of these.</span>
          </p>
        </div>
      </section>

      {/* CTA — Lead form */}
      <section className="relative overflow-hidden border-t border-border/60 py-12 md:py-20">
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <div id="offer" className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-12">
            <div className="text-center">
              <SectionLabel>Get started</SectionLabel>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                See what we can offer you for your{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  house today
                </span>
                .
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Fill out the form below and we'll get back to you within 48 hours with a fair,
                no-obligation cash offer.
              </p>
            </div>
            <div className="mt-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
