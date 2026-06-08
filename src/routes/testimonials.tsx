import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { GoogleReviewCard } from "@/components/GoogleReviewCard";
import { GOOGLE_REVIEWS } from "@/lib/google-reviews";
import { buildSeo } from "@/lib/seo";
import { LeadForm } from "@/components/LeadForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import skyline from "../assets/skyline.jpg";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () =>
    buildSeo({
      path: "/testimonials",
      title: "Testimonials | 600+ Minneapolis Sellers | Easy Home Offer",
      description:
        "Read real testimonials from Twin Cities homeowners who sold for cash. 600+ sellers helped, zero complaints, 15+ years in business.",
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

// Reviews live in src/lib/google-reviews.ts (shared with the homepage carousel).

function TestimonialsPage() {
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
              <SectionLabel>Real homeowners · Real stories</SectionLabel>
            </div>
            <h1 className="mt-5 text-center text-4xl font-bold leading-[1.05] tracking-tight md:mt-6 md:text-5xl lg:text-left lg:text-6xl">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Ability to find the right
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                solution for you…
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg lg:mx-0 lg:text-left">
              …but don’t take our word for it!
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

      {/* INTRO TEXT */}
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
              Homeowners today are in a unique situation of having a variety of choices when they decide to sell their home. Not all home buying companies are alike. Choosing one with your best interests in mind can be difficult. Figuring out who to trust, who will focus on their needs and time frames are high on home owners’ priority lists.
            </p>
            <p>
              At Twin Cities Home Buyers, we listen to our clients, discover what they want and need, and walk them through the transaction to make it as easy as possible to sell their house.
            </p>
            <p>
              As Minnesota natives, we treat homeowners with 3 moral codes: <span className="font-semibold text-foreground">respect, privacy and convenience.</span> Our ability to find a solution for any situation you may be facing is the best in Minneapolis/St. Paul.
            </p>
            <p>
              If you are dealing with having to move for your job, you or a family member are moving to assisted living or you’re trying to sell an inherited house, we can be as flexible as you need to close the sale quickly.
            </p>
            <p>
              When you work with us, you can expect a stress free experience. In over 15 years, and helping more than 600 homeowners, we’ve received mountains of feedback from our clients. We are proud to say, we’ve never had a complaint about our services and never had a broken transaction.
            </p>
            <p>
              When you choose us, you’ll receive only the best customer service and creativity to find a solution to your problem. Your needs come first. When our clients are happy, we are happy.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]">
            <p className="text-sm text-muted-foreground">
              Want to share your own experience with us? Send us a note to let us know what working with Twin Cities Home Buyers, Inc. has been like for you.
            </p>
            <a
              href="mailto:info@twincitieshomebuyers.com"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
            >
              Send us your story
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border/60 bg-card/50 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { n: "15+", l: "Years" },
              { n: "600+", l: "Sellers" },
              { n: "0", l: "Complaints" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="bg-clip-text font-heading text-3xl font-black tracking-tight text-transparent md:text-4xl"
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
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="relative py-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 45% at 50% 0%, color-mix(in oklab, var(--primary) 6%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Check out what others have said{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                about us.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GOOGLE_REVIEWS.map((review) => (
              <GoogleReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
