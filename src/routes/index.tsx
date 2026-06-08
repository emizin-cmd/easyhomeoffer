import { createFileRoute, Link } from "@tanstack/react-router";
import { buildSeo, LOCAL_BUSINESS_JSON_LD } from "@/lib/seo";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock,
  DollarSign,
  Home,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/LeadForm";
import skyline from "../assets/skyline.jpg";
import sold from "../assets/sold.jpg";
import bbbAccredited from "../assets/bbb-accredited.png";
import bbbAPlus from "../assets/bbb-a-plus.png";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";
import { GoogleReviewCard, GoogleGLogo } from "@/components/GoogleReviewCard";
import { GOOGLE_REVIEWS } from "@/lib/google-reviews";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => {
    const seo = buildSeo({
      path: "/",
      title: "Sell My Minneapolis House Fast for Cash | Easy Home Offer",
      description:
        "Get a fair all-cash offer for your Twin Cities home in 24 hours. Close in 7 days. No fees, no repairs, no agent commissions. Call 612-445-5250.",
    });
    return {
      meta: seo.meta,
      links: [
        ...seo.links,
        { rel: "preload", as: "image", href: skyline, fetchpriority: "high" },
      ],
      scripts: [
        { type: "application/ld+json", children: LOCAL_BUSINESS_JSON_LD },
      ],
    };
  },
});

const PHONE_DISPLAY = "612-445-5250";
const PHONE_TEL = "6124455250";

/* ---------- shared building blocks ---------- */


type StoryChapter = {
  id: string;
  num: string;
  tag: string;
  title: string;
  body: React.ReactNode;
};

const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: "problem",
    num: "01",
    tag: "The problem",
    title: "Most “cash buyers” have never closed a deal.",
    body: (
      <>
        <p>
          They show up after a real estate “guru” comes through selling a course — and now they
          think they're investors. They tie up your property, tell you they're working with title,
          and quietly try to flip the contract to someone else for a profit.
        </p>
        <p className="font-heading text-xl font-semibold text-foreground">
          It's not right. With Twin Cities Home Buyers, it doesn't happen.
        </p>
      </>
    ),
  },
  {
    id: "promise",
    num: "02",
    tag: "Our promise",
    title: "15+ years. 600+ sellers. One showing — us.",
    body: (
      <>
        <p>
          We've been writing fair, all-cash offers for Minnesota homeowners since before most of
          these new “investors” owned a calculator. Read the Google Reviews. We're A+ rated with
          the BBB.
        </p>
        <p>
          No staging, no open houses, no inspections, no bank delays.{" "}
          <strong className="text-foreground">One meeting, one offer, sold the same day.</strong>
        </p>
      </>
    ),
  },
  {
    id: "kay",
    num: "03",
    tag: "Kay's story",
    title: "“He made the decision very easy.”",
    body: (
      <figure className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-base font-bold text-primary-foreground">
            K
          </div>
          <div>
            <div className="font-semibold leading-tight">Kay</div>
            <div className="text-xs text-muted-foreground">Homeowner · St. Paul, MN</div>
          </div>
          <div className="ml-auto flex gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <blockquote className="border-l-2 border-primary/60 pl-4 italic text-foreground/80">
          “As a single woman, I don't normally let strangers into my home. But Steve from Twin
          Cities Home Buyers came over, gave me a fair cash offer, and closed when I needed. I put
          money in savings and moved into the assisted living facility on time.”
        </blockquote>
      </figure>
    ),
  },
  {
    id: "fit",
    num: "04",
    tag: "Who we help",
    title: "Any situation. Any condition. Anywhere in MN.",
    body: (
      <>
        <p>
          Moving, foreclosure, divorce, falling behind, liens, vacant, full of 20 years of stuff,
          or not even habitable — doesn't matter. Take what you want, leave what you don't. We'll
          donate the rest.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            "Inherited property",
            "Behind on mortgage",
            "Liens or back taxes",
            "Costly repairs needed",
            "Fire or water damage",
            "Bad rental tenants",
          ].map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
              {t}
            </div>
          ))}
        </div>
      </>
    ),
  },
];

function StorySection() {
  const [active, setActive] = useState(STORY_CHAPTERS[0].id);
  const current = STORY_CHAPTERS.find((c) => c.id === active) ?? STORY_CHAPTERS[0];

  return (
    <section id="story" className="relative overflow-hidden py-12 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%), radial-gradient(50% 40% at 100% 100%, color-mix(in oklab, var(--primary) 8%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          {/* LEFT: headline + chapter nav */}
          <div className="lg:sticky lg:top-24">
            <div className="flex justify-center lg:justify-start">
              <SectionLabel>Our story</SectionLabel>
            </div>
            <h2 className="mt-5 text-center text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-left lg:text-6xl">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                “I need to sell my house fast in
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Minneapolis – St. Paul!”
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-center text-base text-muted-foreground lg:mx-0 lg:text-left">
              Four chapters on why we exist, who we help, and what makes us different. Tap one.
            </p>

            {/* stats strip */}
            <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur">
              {[
                { n: "15+", l: "Years" },
                { n: "600+", l: "Sellers" },
                { n: "A+", l: "BBB" },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className={`px-4 py-5 text-center ${i < 2 ? "border-r border-border" : ""}`}
                >
                  <div
                    className="bg-clip-text font-heading text-2xl font-black tracking-tight text-transparent md:text-3xl"
                    style={{ backgroundImage: "var(--gradient-primary)" }}
                  >
                    {s.n}
                  </div>
                  <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: chapter selector + animated panel */}
          <div>
            <div className="flex flex-col gap-2">
              {STORY_CHAPTERS.map((c) => {
                const isActive = c.id === active;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    className={`group relative overflow-hidden rounded-2xl border text-left transition-all ${
                      isActive
                        ? "border-primary/40 bg-card shadow-[var(--shadow-soft)]"
                        : "border-border bg-card/40 hover:border-primary/30 hover:bg-card/70"
                    }`}
                  >
                    <div className="flex items-start gap-4 px-5 py-4">
                      <div
                        className={`font-heading text-2xl font-black tabular-nums leading-none transition-colors ${
                          isActive ? "text-transparent" : "text-muted-foreground/50"
                        }`}
                        style={
                          isActive
                            ? {
                                backgroundImage: "var(--gradient-primary)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                              }
                            : undefined
                        }
                      >
                        {c.num}
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {c.tag}
                        </div>
                        <div
                          className={`mt-1 font-heading text-lg font-bold leading-snug tracking-tight transition-colors ${
                            isActive ? "text-foreground" : "text-foreground/70"
                          }`}
                        >
                          {c.title}
                        </div>
                      </div>
                      <ArrowRight
                        className={`mt-1 h-4 w-4 shrink-0 transition-all ${
                          isActive
                            ? "translate-x-0 text-primary opacity-100"
                            : "-translate-x-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      />
                    </div>
                    {/* expanded body */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 border-t border-border/60 px-5 py-5 pl-[68px] text-[15px] leading-relaxed text-foreground/80">
                          {c.body}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* bottom-line card */}
            <div className="relative mt-10 rounded-2xl bg-foreground p-7 text-background shadow-[var(--shadow-elegant)]">
              <span
                className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                Bottom line
              </span>
              <p className="text-[15px] leading-relaxed">
                If you have a property and need to sell it, we'd like to make you a fair cash
                offer and close when you're ready. We buy houses in and around Minneapolis &amp;
                St. Paul — and anywhere in Minnesota.
              </p>
            </div>
          </div>
        </div>

        <div className="my-10 flex justify-center md:my-12 lg:hidden">
          <button
            type="button"
            onClick={scrollToOffer}
            className="group flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-[#f97316] px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-xl active:translate-y-0 active:bg-[#c2410c]"
          >
            Get Cash Offer
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

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


const SITUATIONS = [
  "Avoiding foreclosure",
  "Inherited property",
  "Going through divorce",
  "Relocating for work",
  "Burdensome rental / bad tenants",
  "Liens or back taxes",
  "Major repairs needed",
  "Vacant or fire damaged",
  "Downsizing or assisted living",
];

const scrollToOffer = () => {
  document
    .getElementById("offer")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};

/* ---------- page ---------- */

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO — split */}
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

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 md:gap-14 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <img
                  src={bbbAPlus}
                  alt="BBB A+ Rating"
                  width={32}
                  height={32}
                  decoding="async"
                  className="h-4 w-auto"
                />
                Twin Cities cash buyer · BBB A+ rated
              </div>
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:mt-6 md:text-5xl lg:text-6xl">
              Sell your Minneapolis–St. Paul home{" "}
              <span className="bg-gradient-to-r from-primary to-[color:var(--primary-glow)] bg-clip-text text-transparent">
                in days, not months.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
              A fair all-cash offer within 24 hours. You choose the closing date. No fees,
              no commissions, no repairs — we buy houses exactly as they are.
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


            {/* trust strip — branded by Google + BBB, not just generic icons.
                Centered on mobile (where flex-wrap stacks the rows), reverts
                to left-aligned at md+ to match the surrounding text column. */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground md:mt-10 md:justify-start md:gap-x-8 md:gap-y-3">
              {/* Google Reviews snippet */}
              <div className="flex items-center gap-1.5">
                <GoogleGLogo className="h-4 w-4 shrink-0" />
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <span className="font-medium text-foreground">4.9</span>
                <span>· 600+ Google reviews</span>
              </div>

              {/* Years in business */}
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-primary" />
                15+ years in business
              </div>

              {/* BBB authentic badge */}
              <a
                href="https://www.bbb.org/us/mn/maple-grove/profile/real-estate-investing/twin-cities-home-buyers-inc-0704-96005623"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition hover:opacity-80"
              >
                <img
                  src={bbbAPlus}
                  alt="BBB A+ Rating"
                  width={32}
                  height={32}
                  decoding="async"
                  className="h-4 w-auto"
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
          ].map(({ icon: Icon, ...s }) => {
            const scrollToOffer = () =>
              document
                .getElementById("offer")
                ?.scrollIntoView({ behavior: "smooth", block: "center" });
            return (
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
            );
          })}
        </div>

        <div className="my-10 flex justify-center md:my-12 lg:hidden">
          <button
            type="button"
            onClick={scrollToOffer}
            className="group flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-[#f97316] px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-xl active:translate-y-0 active:bg-[#c2410c]"
          >
            Get Cash Offer
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* WHY US — feature grid + image */}
      <section id="why" className="border-y border-border/60 bg-secondary/40 py-12 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div className="relative hidden lg:block">
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
              <img
                src={sold}
                alt="Happy homeowners after selling to Easy Home Offer"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width={1200}
                height={1200}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Sold in 9 days</div>
                  <div className="text-xs text-muted-foreground">Kay, St. Paul</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center lg:justify-start">
              <SectionLabel>Why homeowners pick us</SectionLabel>
            </div>
            <h2 className="mt-5 text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-left">
              Skip the showings, the agent, and the wait.
            </h2>
            <p className="mt-4 text-center text-lg leading-relaxed text-muted-foreground lg:text-left">
              We help property owners in every situation — divorce, foreclosure, inheritance,
              tenants, downsizing, fire damage, or simply a busy life. Whatever the story,
              we make it simple.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "No repairs or cleaning",
                "No agent commissions",
                "No open houses",
                "We buy as-is, any condition",
                "Flexible close — move when you're ready",
                "We handle paperwork",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-foreground text-background">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY — interactive chapters */}
      <StorySection />


      {/* COMPARE */}
      <section id="compare" className="mx-auto max-w-6xl px-6 py-12 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Compare</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Listing vs. selling to us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See which path actually fits your situation.
          </p>
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

        <div className="my-10 flex justify-center md:my-12 lg:hidden">
          <button
            type="button"
            onClick={scrollToOffer}
            className="group flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-[#f97316] px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-xl active:translate-y-0 active:bg-[#c2410c]"
          >
            Get Cash Offer
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="border-y border-border/60 bg-secondary/40 py-12 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Real homeowners. Real stories.</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Trusted across the Twin Cities
            </h2>
          </div>

          {/* MOBILE: manual horizontal scroll, NO autoplay. Single set of cards
              (no DOM duplication needed) with snap-x for tactile swipe feel. */}
          <div
            className="mt-14 -mx-6 overflow-x-auto pb-4 [scrollbar-width:thin] snap-x snap-mandatory md:hidden"
            aria-label="Customer reviews — swipe to see more"
          >
            <div className="flex gap-6 px-6">
              {GOOGLE_REVIEWS.map((review) => (
                <div key={review.name} className="w-[300px] shrink-0 snap-start">
                  <GoogleReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP: auto-scrolling marquee. Duplicates cards in DOM so the
              -50% translation creates a seamless loop. Pauses on hover so users
              can read individual reviews. Respects prefers-reduced-motion. */}
          <div
            className="mt-14 -mx-6 hidden overflow-hidden pb-4 md:block"
            aria-label="Customer reviews carousel"
          >
            <div className="animate-marquee flex gap-6 pl-6">
              {[...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS].map((review, i) => (
                <div
                  key={`${review.name}-${i}`}
                  className="w-[380px] shrink-0"
                  aria-hidden={i >= GOOGLE_REVIEWS.length}
                >
                  <GoogleReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Hint differs per viewport: swipe on mobile, hover-to-pause on desktop. */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground/70">
            <span className="md:hidden">Swipe to see more</span>
            <span className="hidden md:inline">Hover to pause</span>
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>We help in every situation</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Sell no matter what's going on
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Inherited property, behind on payments, tenants, foreclosure, divorce — we've seen it
            all and we can still write you a cash offer.
          </p>
        </div>

        {/* MOBILE/TABLET — compact dropdown + CTA */}
        <div className="mx-auto mt-10 max-w-md lg:hidden">
          <label
            htmlFor="situation-select"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Select your situation:
          </label>
          <div className="relative">
            <select
              id="situation-select"
              defaultValue=""
              className="w-full appearance-none rounded-2xl border border-border bg-card px-4 py-3.5 pr-10 text-sm font-medium text-foreground transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
            >
              <option value="" disabled hidden>
                Choose what's going on…
              </option>
              {SITUATIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
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
            Get a Cash Offer
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>

        {/* DESKTOP — full grid */}
        <div className="mt-14 hidden gap-4 lg:grid lg:grid-cols-3">
          {SITUATIONS.map((s) => (
            <div
              key={s}
              onClick={scrollToOffer}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:bg-secondary/40"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium">{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" className="border-y border-border/60 bg-secondary/40 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex justify-center">
              <SectionLabel>Where we buy</SectionLabel>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Across the Twin Cities metro
            </h2>
            <p className="max-w-md text-sm text-muted-foreground">
              We buy houses anywhere in Minnesota, with a focus on Minneapolis, St. Paul and the
              surrounding suburbs.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 text-sm font-medium sm:grid-cols-3 md:grid-cols-5">
            {[
              "Minneapolis",
              "St. Paul",
              "Bloomington",
              "Brooklyn Center",
              "Coon Rapids",
              "Eagan",
              "Eden Prairie",
              "Maple Grove",
              "Plymouth",
              "Roseville",
            ].map((c) => (
              <li
                key={c}
                className="rounded-xl border border-border bg-card px-4 py-3 text-center transition hover:border-primary/40 hover:text-primary"
              >
                {c}, MN
              </li>
            ))}
          </ul>
        </div>
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
              No realtors, no fees, no repairs, no cleaning. Find out exactly what we can pay for
              your house.
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
