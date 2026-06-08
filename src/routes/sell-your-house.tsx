import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  DollarSign,
  Home,
  Phone,
  Sparkles,
  Star,
  BadgeCheck,
  X,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/LeadForm";
import { GoogleGLogo } from "@/components/GoogleReviewCard";
import { ScrollOfferCta } from "@/components/ScrollOfferCta";
import skyline from "../assets/skyline.jpg";
import bbbAccredited from "../assets/bbb-accredited.png";
import bbbAPlus from "../assets/bbb-a-plus.png";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";

export const Route = createFileRoute("/sell-your-house")({
  component: SellYourHousePage,
  head: () =>
    buildSeo({
      path: "/sell-your-house",
      title: "Sell Your House Fast in Minneapolis | Easy Home Offer",
      description:
        "Moving, foreclosure, divorce, or inherited property? We buy Twin Cities houses as-is. Fair cash offer in 24 hours. Call 612-445-5250.",
    }),
});

const PHONE_DISPLAY = "612-445-5250";
const PHONE_TEL = "6124455250";

const SITUATIONS = [
  { full: "Are You In Foreclosure or Are About To Be?", short: "Facing foreclosure" },
  { full: "Do You Own Unwanted Rental Property?", short: "Unwanted rental property" },
  {
    full: "Do You Have Frustrating Tenants (Or Family Members) That You Can’t Get Rid Of?",
    short: "Difficult tenants or family",
  },
  { full: "Do You Own A Vacant Property?", short: "Vacant property" },
  { full: "Did You Inherit An Unwanted Property?", short: "Inherited property" },
  {
    full: "Do You Need To Relocate Quickly And Need To Sell Your Current House Fast?",
    short: "Need to relocate quickly",
  },
  { full: "Do You Want To Avoid Paying Realtor Commissions?", short: "Avoid realtor commissions" },
  { full: "Are You Going Through A Divorce?", short: "Going through divorce" },
  { full: "Do You Have Little Or No Equity And Need To Sell?", short: "Little or no equity" },
  {
    full: "Do You Own A “Fixer Upper” That You Don’t Want To Fix Up Or Don’t Have Time To Fix Up?",
    short: "Fixer upper, no time",
  },
];

/* ---------- shared building blocks ---------- */


function SectionLabel({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "onDark";
}) {
  const styles =
    variant === "onDark"
      ? "border-white/15 bg-white/5 text-background/80 backdrop-blur-xl"
      : "border-border bg-secondary/60 text-muted-foreground";
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider ${styles}`}
    >
      <Sparkles className="h-3 w-3 text-primary" />
      {children}
    </div>
  );
}

/* ---------- page ---------- */

function SellYourHousePage() {
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
                Fast cash offer · No obligations
              </div>
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:mt-6 md:text-5xl lg:text-6xl">
              Find Out If Your Minneapolis Property Qualifies For An{" "}
              <span className="bg-gradient-to-r from-primary to-[color:var(--primary-glow)] bg-clip-text text-transparent">
                All Cash Offer Below…
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
              When you are moving out of state due to job relocation, divorce or foreclosure, you want to sell quickly and move on with your life.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-4 md:text-lg">
              It’s hard to sell a house in Minneapolis quickly through a realtor. And when you’re moving, you’ve other things to prepare for than holding showings and open houses to try and sell the house yourself. Luckily, selling a house fast is possible when you contact a professional home buyer like Twin Cities Home Buyers.
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

      {/* Logo / stats strip */}
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {[
            { k: "600+", v: "Sellers helped" },
            { k: "24 hr", v: "Cash offer turnaround" },
            { k: "7 days", v: "Fastest close" },
            { k: "$0", v: "Fees & commissions" },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-3xl font-bold tracking-tight md:text-4xl">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-10">
          <ScrollOfferCta />
        </div>
      </section>

      {/* RICHARD'S STORY */}
      <section className="mx-auto max-w-4xl px-6 py-12 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Real story</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            "I would definitely recommend Twin Cities Home Buyers"
          </h2>
        </div>

        <div className="mt-14 space-y-6 text-[15px] leading-relaxed text-foreground/80">
          <p>
            Richard was dealing with this exact dilemma. He was moving from Apple Valley, MN to California and needed to sell his home quickly. Unfortunately, his house was also in need of some major repairs to bring it up to market value. Yet, time was not on his side.
          </p>
          <p>
            He called Twin Cities Home Buyers and made an appointment for a walkthrough. He wasn’t sure what to expect. He asked the staff a lot of questions like <em>"how do you determine my home's value?"</em> And <em>"how quickly can you close?"</em> And was given honest answers, and not just what he wanted to hear.
          </p>
          <p>
            Richard was worried that due to the distressed condition of his property, the offer would be too low and he wouldn’t be able to accept it. However, when they explained how they came to the offer amount and the process of selling the house, he felt he was given a fair and reasonable offer. He accepted the all cash offer from Twin Cities Home Buyers and closed when he needed to move.
          </p>
          <blockquote className="rounded-2xl border-l-4 border-primary bg-card p-6 text-foreground">
            <p className="italic">
              "Working with Twin Cities Home Buyers saved me a lot of time and headaches. I would definitely recommend Twin Cities Home Buyers to anyone with a distressed property that wants to sell quickly and fairly."
            </p>
            <footer className="mt-3 text-sm font-semibold text-foreground">— Richard, Apple Valley, MN</footer>
          </blockquote>
        </div>

        <div className="my-10 flex justify-center md:my-12">
          <button
            type="button"
            onClick={scrollToOffer}
            className="group flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-[#f97316] px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-xl active:translate-y-0 active:bg-[#c2410c]"
          >
            Get My Cash Offer
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* SITUATIONS — checklist */}
      <section className="border-y border-border/60 bg-secondary/40 py-12 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>We can help</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Are you currently facing any of these situations like Richard?
            </h2>
          </div>

          {/* MOBILE/TABLET — compact dropdown + CTA */}
          <div className="mx-auto mt-12 max-w-md lg:hidden">
            <label
              htmlFor="sell-situation-select"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Select your situation:
            </label>
            <div className="relative">
              <select
                id="sell-situation-select"
                defaultValue=""
                className="w-full appearance-none rounded-2xl border border-border bg-card px-4 py-3.5 pr-10 text-sm font-medium text-foreground transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
              >
                <option value="" disabled hidden>
                  Choose what's going on…
                </option>
                {SITUATIONS.map((s) => (
                  <option key={s.short} value={s.short}>
                    {s.short}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              />
            </div>
            <button
              type="button"
              onClick={scrollToOffer}
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#f97316] px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-xl active:translate-y-0 active:bg-[#c2410c]"
            >
              Get My Cash Offer
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </div>

          {/* DESKTOP — full question grid */}
          <div className="mt-14 hidden gap-4 sm:grid-cols-2 lg:grid">
            {SITUATIONS.map((s) => (
              <div
                key={s.full}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:bg-secondary/40"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium">{s.full}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-5 text-center md:mt-14 md:p-8">
            <p className="text-sm leading-snug text-muted-foreground md:text-lg md:leading-relaxed">
              If you answered <strong className="text-foreground">"yes"</strong> to one or more of these questions, we can help! We are specialists in solving real estate problems… especially ones that pose a financial burden on you, the homeowner. We can solve almost any financial problem that your property is causing.
            </p>
            <p className="mt-3 text-sm leading-snug text-muted-foreground md:mt-4 md:text-lg md:leading-relaxed">
              Take control of your situation, end the hassles, and get back to living the life you want to live. You deserve to know all of the options available to you right now.
            </p>
          </div>

          <div className="my-10 hidden justify-center md:my-12 lg:flex">
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

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-12 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:mt-5 md:text-5xl">
            Three steps to a stress-free sale
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:mt-4 md:text-lg">
            Tell us about your house, get a fair cash offer, pick your closing day. That's it.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:mt-14 md:gap-6 md:grid-cols-3">
          {[
            {
              icon: Home,
              step: "01",
              title: "Tell us about your house",
              text: "Fill out the form or call us. We'll learn about your property in a quick, no-pressure chat.",
            },
            {
              icon: DollarSign,
              step: "02",
              title: "Get a fair cash offer",
              text: "Within 24 hours we present a no-obligation all-cash offer based on real Twin Cities market data.",
            },
            {
              icon: Clock,
              step: "03",
              title: "Close on your timeline",
              text: "Pick a closing date — as fast as 7 days or as flexible as you need. We pay all costs.",
            },
          ].map(({ icon: Icon, ...s }) => (
            <div
              key={s.step}
              role="button"
              tabIndex={0}
              onClick={scrollToOffer}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  scrollToOffer();
                }
              }}
              className="group relative cursor-pointer rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:rounded-3xl md:p-8"
            >
              <span className="absolute right-4 top-4 text-xs font-semibold text-muted-foreground/50 md:right-6 md:top-6 md:text-sm">
                {s.step}
              </span>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground md:h-12 md:w-12 md:rounded-2xl">
                <Icon className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight md:mt-5 md:text-xl">{s.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground md:mt-2 md:text-sm">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="my-10 flex justify-center md:my-12">
          <button
            type="button"
            onClick={scrollToOffer}
            className="group flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-[#f97316] px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-xl active:translate-y-0 active:bg-[#c2410c]"
          >
            Get My Cash Offer
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* COMPARE mini */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Compare</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Listing vs. selling to us
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Traditional listing
            </div>
            <div className="mt-2 text-2xl font-bold">With a real estate agent</div>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "6% in agent commissions",
                "2%+ in closing costs",
                "Months of showings & open houses",
                "Inspection & financing contingencies",
                "Often 60–90+ day close",
                "Repairs & cleanup on you",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-foreground p-8 text-background shadow-[var(--shadow-elegant)]">
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-primary)" }}
              aria-hidden
            />
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-wider text-background/60">
                The easy way
              </div>
              <div className="mt-2 flex items-center gap-2 text-2xl font-bold">
                Selling to Easy Home Offer
                <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                  Recommended
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Zero commissions",
                  "Zero closing costs — we pay them",
                  "One showing — us. No strangers.",
                  "No financing or inspection risk",
                  "Close in as little as 7 days",
                  "Leave the house as-is",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ScrollOfferCta />
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-foreground py-12 md:py-24 text-background">
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <div className="flex justify-center lg:justify-start">
              <SectionLabel variant="onDark">Ready when you are</SectionLabel>
            </div>
            <h2 className="mt-5 text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-left">
              What do you have to lose?{" "}
              <span className="bg-gradient-to-r from-[color:var(--primary-glow)] to-primary bg-clip-text text-transparent">
                Get your offer today.
              </span>
            </h2>
            <p className="mt-5 text-center text-lg text-background/70 lg:text-left">
              Simply fill out the short form below or give us a call, and our experts will help you (with no pushy sales techniques or obligation)… we’ll help you make sense of all of this confusion and present you with the options that can potentially change your life and help you get back to normal.
            </p>
            <p className="mt-3 text-center text-base text-background/60 lg:text-left">
              Send us information in the form below and we’ll get back to you promptly (usually within 48 hours) – we’ll give you a call and show you the options to help solve your current situation.
            </p>
            <p className="mt-3 text-center text-sm font-semibold text-background/80 lg:text-left">
              All of this 100% free to you (no fees). 100% no hassle. 100% no obligation. No commitment.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition hover:translate-y-[-1px]"
              >
                <Phone className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </a>
              <span className="text-sm text-background/60">or fill the form →</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold">Get started in 60 seconds</h3>
            <p className="mt-1 text-sm text-background/60">We'll reach out within 24 hours.</p>
            <div className="mt-6">
              <LeadForm variant="glass" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
