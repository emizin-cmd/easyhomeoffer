import { createFileRoute } from "@tanstack/react-router";
import { Check, Quote, ShieldCheck, Sparkles } from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { LeadForm } from "@/components/LeadForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import skyline from "../assets/skyline.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    buildSeo({
      path: "/about",
      title: "About Us | Minneapolis Cash Home Buyer — Easy Home Offer",
      description:
        "15+ years buying houses across Minneapolis & St. Paul. BBB A+ rated, 600+ homeowners helped. Read a real client story.",
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

function AboutPage() {
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
          <SectionLabel>About us</SectionLabel>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:mt-6 md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Not all home buying companies
            </span>{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              are the same…
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
            15+ years buying homes across Minneapolis &amp; St. Paul. BBB A+ rated.
            600+ sellers helped.
          </p>
        </div>
      </section>

      {/* KNOW WHO YOU ARE WORKING WITH */}
      <section className="relative py-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 45% at 15% 0%, color-mix(in oklab, var(--primary) 9%, transparent), transparent 70%), radial-gradient(50% 40% at 100% 100%, color-mix(in oklab, var(--primary) 6%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Know who you are working with!
          </h2>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-foreground/80">
            <p>
              Making the decision to sell your home can be a difficult and stressful one
              … don’t add to your stress by working with an amateur. New real estate
              investors pop up all the time. This competition is great for giving sellers
              different options — it’s horrible for actually getting a cash offer that
              results in you selling your home and moving on to a better situation.
            </p>
          </div>

          {/* Pull quote callout */}
          <figure className="relative mt-10 overflow-visible rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10">
            <Quote
              className="absolute top-6 right-6 h-10 w-10 text-primary/15"
              strokeWidth={1.5}
              aria-hidden
            />
            <blockquote className="border-l-2 border-primary/60 pl-5 font-heading text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
              “Don’t add to your stress by working with an amateur.”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="h-4 w-4" />
              </span>
              Twin Cities Home Buyers · 15+ years, 600+ sellers
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CLIENT STORY */}
      <section className="relative border-y border-border/60 bg-secondary/40 py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <SectionLabel>A real client · A real story</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              20 years in one home —{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                a calm, fair close.
              </span>
            </h2>
          </div>

          <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-foreground/85">
            <p>
              Our clients, like many others in Minneapolis, have been owners of their
              homes for a long time. This is not unusual for Minnesota. This client had
              owned her home for more than 20 years, and due to not being able to keep up
              with repairs, she felt it was time to sell.
            </p>
            <p>
              Her brother had sold a house successfully through Twin Cities Home Buyers
              and was satisfied with the process. He persuaded her to contact Twin Cities
              Home Buyers for an offer.
            </p>
            <p>
              During the first meeting with Jason, the entire process was explained —
              from the purchase, to repairs, to selling the house. The repairs and
              maintenance were discussed so our client knew how we came to the offer
              amount we did.
            </p>
            <p>
              She felt the cash offer was fair and signed the paperwork to sell. Our
              client was informed about the selling and closing process and all it
              entailed. Everyone was on the same page with{" "}
              <span className="font-semibold text-foreground">
                consistent communication throughout the process.
              </span>
            </p>
          </div>

          {/* Story highlights */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { k: "20+", l: "Years owned" },
              { k: "1", l: "Meeting with Jason" },
              { k: "100%", l: "Fair, transparent close" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`rounded-2xl border border-border bg-card p-5 text-center shadow-[var(--shadow-soft)] ${
                  i === 2 ? "sm:col-span-1" : ""
                }`}
              >
                <div
                  className="bg-clip-text font-heading text-3xl font-black tracking-tight text-transparent"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  {s.k}
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE CAN HELP */}
      <section className="relative py-12 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 45% at 50% 0%, color-mix(in oklab, var(--primary) 6%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Who we can help</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Any situation. Any condition.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Anywhere in MN.
              </span>
            </h2>
            <p className="mt-3 text-base text-muted-foreground md:mt-4 md:text-lg">
              We’ve helped homeowners through every kind of life event. Whatever the
              story, we can still write a fair cash offer.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:gap-4 lg:mt-14 lg:grid-cols-3">
            {SITUATIONS.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary/40 lg:gap-3 lg:rounded-2xl lg:p-5"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary lg:h-9 lg:w-9 lg:rounded-xl">
                  <Check className="h-3.5 w-3.5 lg:h-4 lg:w-4" strokeWidth={3} />
                </span>
                <span className="text-[13px] font-medium leading-snug lg:text-sm lg:leading-normal">
                  {s}
                </span>
              </div>
            ))}
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
