import { createFileRoute, Link } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Clock,
  DollarSign,
  FileText,
  MapPin,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import skyline from "../assets/skyline.jpg";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksPage,
  head: () =>
    buildSeo({
      path: "/how-it-works",
      title: "How It Works | Sell Your Minneapolis House in 4 Steps",
      description:
        "Our simple 4-step process to sell your Twin Cities home fast for cash. Fair offer in 24 hours. Close in as little as 7 days. No fees.",
    }),
});

const STEPS = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Tell us about your property",
    body: "Quick, Easy & Free! Fill out our online form or give us a call. We'll gather some basic information about your house and your situation.",
  },
  {
    num: "02",
    icon: Phone,
    title: "We set up a quick appointment",
    body: "If your property meets our buying criteria, we'll contact you to schedule a brief walkthrough — usually within 24 hours.",
  },
  {
    num: "03",
    icon: FileText,
    title: "Fair written, no-obligation offer",
    body: "We'll present you with a fair, all-cash offer based on your home's condition and the current Minneapolis housing market. No pressure, no obligation.",
  },
  {
    num: "04",
    icon: DollarSign,
    title: "Close with cash in hand",
    body: "We close at a local reputable title company, with cash in your hands in as little as 7 days. When you work with us, we guarantee we'll close… always!",
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

function HowItWorksPage() {
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
          className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-10 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div>
            <div className="flex justify-center lg:justify-start">
              <SectionLabel>Our process</SectionLabel>
            </div>
            <h1 className="mt-5 text-center text-4xl font-bold leading-[1.05] tracking-tight md:mt-6 md:text-5xl lg:text-left lg:text-6xl">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                4 Steps To Sell Your House
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Quickly and Easily.
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg lg:mx-0 lg:text-left">
              When you work with a realtor, you'll find there is a long process to selling your house.
              With Twin Cities Home Buyers, we cut through the red tape and make it simple.
            </p>
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

      {/* THE OLD WAY */}
      <section className="relative py-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 0%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 70%), radial-gradient(50% 40% at 100% 100%, color-mix(in oklab, var(--primary) 6%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div>
              <div className="flex justify-center lg:justify-start">
                <SectionLabel>The old way</SectionLabel>
              </div>
              <h2 className="mt-5 text-center font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-left">
                Working with a realtor means{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  waiting… and waiting.
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  You'll have your listing meeting to discuss the home's value. You'll sign a bunch of
                  paperwork along with a 6 month listing contract. Your real estate agent may take
                  pictures and anything they need to get your listing up and marketing.
                </p>
                <p className="font-heading text-xl font-semibold text-foreground">
                  Then you wait…
                </p>
                <p className="font-heading text-xl font-semibold text-foreground">
                  And wait…
                </p>
                <p className="font-heading text-xl font-semibold text-foreground">
                  And wait…
                </p>
                <p>
                  Hopefully, you get a showing resulting in an offer within a day or two. If you luck
                  out and that's what happens, you now need to wait to close. Which may not happen
                  at all depending on the lender and your buyer having their ducks in a row.
                </p>
                <p>
                  Waiting and the repairs needed to sell a home for a decent price on the open market
                  is too much for some folks.
                </p>
              </div>
            </div>

            {/* Story card — 32 years */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:p-9">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                    S
                  </div>
                  <div>
                    <div className="font-semibold leading-tight">Satisfied Sellers</div>
                    <div className="text-xs text-muted-foreground">Minneapolis, MN · 32 years</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-5 border-l-2 border-primary/60 pl-4 italic text-foreground/80">
                  "Our clients were thinking about selling the home they had lived in for 32 years.
                  The house was in desperate need of repairs but had good bones. With the right
                  renovations and decorating they knew it would sell on the open market. They didn't
                  have the time or the money to do the necessary renovations to list the house with
                  a real estate agent. They called Twin Cities Home Buyers to see what other options
                  were available to them."
                </blockquote>
                <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-foreground/80">
                  <p>
                    The staff at Twin Cities Home Buyers was courteous and respectful during the
                    entire process. Jason offered a fair price due to the condition of the house and
                    the current Minneapolis housing market. We asked many questions and the staff
                    worked with us and answered promptly and in detail. The whole process from
                    calling to closing was very efficient.
                  </p>
                  <p className="font-semibold text-foreground">
                    "Several months have now passed since we sold our home to Twin Cities Home
                    Buyers. We definitely feel we made the right decision for our circumstances and
                    highly recommend the company to others."
                  </p>
                </div>
              </div>
            </div>
          </div>

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

      {/* 4 STEPS */}
      <section className="relative overflow-hidden border-t border-border/60 py-12 md:py-20">
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <SectionLabel>4 simple steps</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              When you work with{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Twin Cities Home Buyers
              </span>
              , we have an easy 4 step process.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <div
                    className="bg-clip-text font-heading text-4xl font-black tabular-nums tracking-tight text-transparent"
                    style={{ backgroundImage: "var(--gradient-primary)" }}
                  >
                    {step.num}
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

      {/* TIMEFRAME */}
      <section className="relative py-12">
        <div className="mx-auto max-w-4xl px-6 pt-3">
          <div className="relative rounded-3xl bg-foreground p-8 pt-10 text-background shadow-[var(--shadow-elegant)] sm:p-10 sm:pt-12">
            <span
              className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-md"
              style={{ background: "var(--gradient-primary)" }}
            >
              Timeframe
            </span>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                <Clock className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold tracking-tight">
                  How fast can we close?
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-background/85">
                  Once we get your info, we're usually able to make you a fair all-cash offer within{" "}
                  <strong className="text-background">24 hours</strong>. From there, we can close as
                  quickly as <strong className="text-background">7 days</strong>… or on your schedule
                  (sometimes we can have a check in your hand the very same day!).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CYNTHIA & DALE STORY */}
      <section className="relative py-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 0%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 70%), radial-gradient(50% 40% at 100% 100%, color-mix(in oklab, var(--primary) 6%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div>
              <div className="flex justify-center lg:justify-start">
                <SectionLabel>Real story</SectionLabel>
              </div>
              <h2 className="mt-5 text-center font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-left">
                Selling Your House Can Be{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  Quick And Simple!
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  Our clients needed to sell their Minneapolis house but it was in desperate need of
                  repairs as they had not done any updating in over 30 years. They couldn't do the
                  repairs due to medical conditions and knew they wouldn't get much selling the
                  traditional way. They couldn't sell on the open market due to being on medical
                  assistance. The timing had to be exactly right and they couldn't wait months to find
                  a buyer. They were not physically able to make the repairs.
                </p>
                <p>
                  Cynthia and Dale had the hopes of buying their new home but had to sell their current
                  home. Cynthia found Twin Cities Home Buyers online and decided to see if we could
                  help them out.
                </p>
                <p className="font-heading text-lg font-semibold text-foreground">
                  They needed to sell and close the SAME DAY!
                </p>
                <p>
                  It was a high requirement for any investor and they were hoping Jason could do it.
                </p>
                <p>
                  How it works? Twin Cities Home Buyers has an easy process they go through with every
                  house. As soon as you fill out the online form or call to give us information about
                  the house you want to sell, we start our research process. This allows us to make the
                  best offer we can the first time we meet. Because we buy houses with all cash, we
                  have no inspections or financial contingencies. Meaning you'll have one showing and
                  if you accept our offer, your house is sold, Fast! No waiting! No hassles!
                </p>
                <p>
                  With Twin Cities Home Buyers, you are able to get an all cash offer the same day we
                  meet with you. It doesn't matter if your house is in need of repairs or you have a
                  specific time frame to sell. We can take care of it for you. In some special cases,
                  we can close the same day we meet with you. Typical closings are 7-10 days after an
                  accepted all cash offer.
                </p>
                <p className="font-semibold text-foreground">
                  Cynthia and Dale were very happy they were able to move to their new house. The sale
                  of their old house went faster than they thought it would. According to the couple,
                  "working with Jason was a great experience."
                </p>
              </div>
            </div>

            {/* Right side: benefits list */}
            <div className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:p-9">
                <h3 className="font-heading text-xl font-bold tracking-tight">
                  No fees. No repairs. No hassle.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  Unlike working with a realtor, when you work with us there are no fees… none, not
                  even closing costs!
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    "You don't have to worry about extra costs",
                    "You won't need to come out of pocket to sell",
                    "Leave your house as-is — no repairs or replacements",
                    "Your location doesn't matter, pretty or ugly house",
                    "Leave behind items you don't want — we'll donate them",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantee card */}
              <div className="relative rounded-3xl bg-foreground p-7 pt-10 text-background shadow-[var(--shadow-elegant)] mt-3">
                <span
                  className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-md"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Our guarantee
                </span>
                <p className="text-[15px] leading-relaxed text-background/85">
                  We guarantee we'll close… always! When you work with Twin Cities Home Buyers,
                  you're working with a team that has been writing fair, all-cash offers for Minnesota
                  homeowners for over 15 years.
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-background/70">600+ happy sellers</span>
                </div>
              </div>
            </div>
          </div>
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
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-12">
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
