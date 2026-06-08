import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Check, Clock, Mail, MapPin, Phone, Quote, Sparkles, Star } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { GoogleGLogo } from "@/components/GoogleReviewCard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import skyline from "../assets/skyline.jpg";
import bbbAccredited from "../assets/bbb-accredited.png";
import bbbAPlus from "../assets/bbb-a-plus.png";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";
import { buildSeo, LOCAL_BUSINESS_JSON_LD } from "@/lib/seo";

export const Route = createFileRoute("/contact-us")({
  component: ContactUsPage,
  head: () => {
    const seo = buildSeo({
      path: "/contact-us",
      title: "Contact Us | Easy Home Offer — Minneapolis Cash Buyer",
      description:
        "Talk to a real person at Easy Home Offer. We respond within 48 hours about selling your Minneapolis or St. Paul house for cash.",
    });
    return {
      ...seo,
      scripts: [
        { type: "application/ld+json", children: LOCAL_BUSINESS_JSON_LD },
      ],
    };
  },
});

const PHONE_DISPLAY = "612-445-5250";
const PHONE_TEL = "6124455250";

function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO — split with form */}
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

        <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-6 py-10 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
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
                Let's talk about your
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Minneapolis house.
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
              Fill out the form and you'll hear from a real human within 48 hours. We love talking
              with people to see how we can help you sell your Minneapolis/St. Paul house.
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

            {/* Quick contact cards */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="group flex items-start gap-3 rounded-2xl border border-border bg-card/70 p-4 backdrop-blur transition hover:border-primary/40 hover:bg-card"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Call us
                  </div>
                  <div className="mt-0.5 font-heading text-base font-bold text-foreground">
                    {PHONE_DISPLAY}
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Response time
                  </div>
                  <div className="mt-0.5 font-heading text-base font-bold text-foreground">
                    Within 48 hours
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Serving
                  </div>
                  <div className="mt-0.5 font-heading text-base font-bold text-foreground">
                    Minneapolis &amp; St. Paul
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Prefer typing?
                  </div>
                  <div className="mt-0.5 font-heading text-base font-bold text-foreground">
                    Use the form →
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lead form in hero */}
          <div className="relative">
            <div
              className="absolute -inset-2 -z-10 rounded-[2rem] opacity-30 blur-2xl"
              style={{ background: "var(--gradient-primary)" }}
              aria-hidden
            />
            <div id="offer" className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:p-8">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-xl font-bold tracking-tight">Send us a message</h2>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  Free · No obligation
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                We'll get back to you within 48 hours.
              </p>
              <div className="mt-6">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why people call us */}
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
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <Sparkles className="h-3 w-3 text-primary" />
                Why people reach out
              </div>
              <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Selling a house can be{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  overwhelming.
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/80">
                Our clients didn't have any idea how to start the process of selling a house in
                Minneapolis. They dreaded interviewing agents and waiting for a showing and offer
                to come in. They remembered seeing signs for Twin Cities Home Buyers around the
                Minneapolis area and gave us a call.
              </p>

              <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                If you have questions about…
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Our process for making you an all cash offer for your house",
                  "Stopping foreclosure in Minneapolis if your situation qualifies",
                  "Our company and who we are",
                  "Job relocation, assisted living, inherited houses or anything else",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                    />
                    {t}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm leading-relaxed text-foreground/80">
                Give us a call or fill out the contact form. If you need us quicker, make sure to
                call — we're able to answer phone calls quickly. If you'd like to receive an offer
                today, fill out our{" "}
                <Link to="/" className="font-semibold text-primary hover:underline">
                  Get My Offer Now
                </Link>{" "}
                form on the home page.
              </p>
              <p className="mt-4 font-heading text-lg font-bold text-foreground">
                We look forward to talking with you soon!
              </p>
            </div>

            {/* Right column — testimonials */}
            <div className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground/90">
                  "They appreciate such a company like Twin Cities Home Buyers existed. By working
                  with Twin Cities Home Buyers we found a simple solution to our property problem.
                  We've already recommended Twin Cities Home Buyers to family members."
                </p>
                <div className="mt-5 text-sm font-semibold text-foreground">— The Knaaps</div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground/90">
                  "We would definitely recommend Twin Cities Home Buyers because of our experience
                  with Jason. He was professional but did not intimidate us, was not pushy. He
                  explained everything and was accommodating as to when we wanted to move. He made
                  it easier for us to leave our home of 50 years."
                </p>
                <div className="mt-5 text-sm font-semibold text-foreground">— Mary McNamara</div>
              </div>

              {/* Helped 600+ card */}
              <div className="relative rounded-3xl bg-foreground p-7 pt-9 text-background shadow-[var(--shadow-elegant)]">
                <span
                  className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-md"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Trusted locally
                </span>
                <div
                  className="bg-clip-text font-heading text-5xl font-black tracking-tight text-transparent"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  600+
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-background/85">
                  Minnesota homeowners have sold their house fast with Twin Cities Home Buyers.
                  Yours could be next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
