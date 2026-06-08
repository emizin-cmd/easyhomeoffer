import { createFileRoute, Link } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { BadgeCheck, Check, MessageCircleQuestion, Phone, Sparkles, Star } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { FaqAccordion, type FaqEntry } from "@/components/FaqAccordion";
import { GoogleGLogo } from "@/components/GoogleReviewCard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import skyline from "../assets/skyline.jpg";
import bbbAccredited from "../assets/bbb-accredited.png";
import bbbAPlus from "../assets/bbb-a-plus.png";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () =>
    buildSeo({
      path: "/faq",
      title: "FAQ | Selling Your House for Cash in Minneapolis",
      description:
        "Answers to common questions about selling your Twin Cities house fast for cash. Pricing, fees, timelines, and how our process works.",
    }),
});

const PHONE_DISPLAY = "612-445-5250";
const PHONE_TEL = "6124455250";

const FAQS: FaqEntry[] = [
  {
    q: "Will you be listing my house on the MLS or actually buying it?",
    a: "Great question. We're not agents, and we don't list houses. We are professional home buyers: We buy houses in Minneapolis that meet our purchasing criteria. From there we may repair the house and resell it to another home owner or keep it as a rental ourselves.",
  },
  {
    q: "Do you pay fair prices for properties?",
    a: (
      <>
        <p>
          Many of the houses we purchase are below market value (we do this so we can earn a
          reasonable return on our investment). We are looking to get a fair discount on a property.
          However, in our experience, many sellers aren't necessarily expecting a large "windfall"
          on the property but rather appreciate that we can offer cash, we close very quickly (no
          waiting for financing), and no time or effort or expense is required on your part to fix
          up the property or pay agent fees. If that's what you're looking for and you see the
          value in getting your house sold fast… let's see if we can come to a fair win-win price.
          (Besides, our no-obligation pricing commitment means that you do not have to move forward
          with the offer we give… but it's good to know what we're offering!)
        </p>
        <p className="mt-3">
          DOWNLOAD our free guide that walks you through the Pros and Cons (plus the cost and
          timeline) of selling your house to a real estate investor… plus learn the pros, cons, and
          costs of the other two alternatives… listing with an agent or selling it yourself.
        </p>
      </>
    ),
  },
  {
    q: "How do you determine the price to offer on my house?",
    a: "Great question, and we're an open book: Our process is very straightforward. We look at the location of the property, what repairs are needed, the current condition of the property, and values of comparable houses sold in the area recently. We take many pieces of information into consideration… and come up with a fair price that works for us and works for you too.",
  },
  {
    q: "Are there any fees or commissions to work with you?",
    a: "This is what makes us stand out from the traditional method of selling your house: There are NO fees or commissions when you sell your house to us. We'll make you an offer, and if it's a fit then we'll buy your house (and we'll often pay for the closing costs too!). No hassle. No fees. We make our money after we pay for repairs on the house (if any) and sell it for a profit — we're taking all of the risk on whether we can sell it for a profit or not.",
  },
  {
    q: "How are you different from a real estate agent?",
    a: "Real estate agents list properties and hope someone will buy them. They take a percentage of the sale price if they find a buyer — often around 6%. We're not agents, we're home buyers. We actually buy houses with our own cash, so we can make a decision within a couple of days (sometimes the same day). We then repair the house and market it ourselves to find a buyer.",
  },
  {
    q: "Is there any obligation when I submit my info?",
    a: "There is absolutely zero obligation for you. Once you tell us a bit about your property, we'll take a look at things, maybe set up a call with you to find out a bit more, and make you an all-cash offer that's fair for you and fair for us. From there, it's 100% your decision on whether or not you'd like to sell your house to us.",
  },
];

function FaqPage() {
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
                Everything you wanted
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                to know.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
              Working with a professional home buyer can be confusing. Here are the questions we hear
              most often — read through to find what you're looking for. Still stuck?{" "}
              <Link to="/contact-us" className="font-medium text-primary hover:underline">
                Reach out anytime
              </Link>
              .
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

      {/* FAQ list */}
      <section className="relative py-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 0%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 70%), radial-gradient(50% 40% at 100% 100%, color-mix(in oklab, var(--primary) 6%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-3xl px-6">
          <FaqAccordion items={FAQS} />

          {/* Still have questions card */}
          <div className="relative mt-12 rounded-2xl bg-foreground p-8 text-background shadow-[var(--shadow-elegant)]">
            <span
              className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              Still curious?
            </span>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <MessageCircleQuestion className="h-8 w-8 shrink-0 text-primary" />
                <div>
                  <h3 className="font-heading text-xl font-bold">Can't find your answer?</h3>
                  <p className="mt-1 text-sm text-background/80">
                    Call us directly — we usually pick up on the first ring.
                  </p>
                </div>
              </div>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
