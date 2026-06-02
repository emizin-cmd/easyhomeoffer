import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Quote, Star, Sparkles } from "lucide-react";
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

const UNSPLASH_PARAMS = "?auto=format&fit=crop&w=150&h=150&q=80";

const TESTIMONIALS = [
  {
    name: "Mr. Chlebeck",
    text: "Very \"up front\" with relating comments and sensitive to feelings of sellers.",
    avatar: `https://images.unsplash.com/photo-1500648767791-00dcc994a43e${UNSPLASH_PARAMS}`,
  },
  {
    name: "The Raetz's",
    text: "Things went smoothly with our contact person, Jake. We are thankful this company can do this so that we may move on and leave the past behind us, looking forward now.",
    avatar: `https://images.unsplash.com/photo-1521119989659-a83eee488004${UNSPLASH_PARAMS}`,
  },
  {
    name: "Mrs. Johnson",
    text: "Everyone is very polite and respectful. Even when I was a bit stressed Jason and Kristie were always very helpful and friendly. They put me at ease. The sale was a very positive experience.",
    avatar: `https://images.unsplash.com/photo-1544005313-94ddf0286df2${UNSPLASH_PARAMS}`,
  },
  {
    name: "Mrs. Pantlin",
    text: "The entire process sent very quickly and smoothly. I appreciated the understanding of my tenants privacy (inspections done while kids were at school).",
    avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb${UNSPLASH_PARAMS}`,
  },
  {
    name: "Mr. Swerdlick",
    text: "I worked with Jason Cramer, he was very understanding about my situation. I found Jason to be a reliable partner in getting my house sold.",
    avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e${UNSPLASH_PARAMS}`,
  },
  {
    name: "Mr. Wright's",
    text: "Always answered all questions and worked transaction to fit our schedule. Plan on using Jason for our next home sale.",
    avatar: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d${UNSPLASH_PARAMS}`,
  },
  {
    name: "Mr. Krommer",
    text: "You guys are awesome and helped us out a lot, we really appreciate it a lot. We will definitely refer Jason and the company if someone we know wants to sell their home.",
    avatar: `https://images.unsplash.com/photo-1463453091185-61582044d556${UNSPLASH_PARAMS}`,
  },
  {
    name: "Mrs. Joslin",
    text: "First impression was friendly and professional. Quick and responsive communication between all participants. Would highly recommend Twin Cities Home Buyers.",
    avatar: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80${UNSPLASH_PARAMS}`,
  },
  {
    name: "Mrs. Hoffman",
    text: "Jason was very pleasant and informative. The closing went smoothly and we were very satisfied.",
    avatar: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2${UNSPLASH_PARAMS}`,
  },
];

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
        <div className="relative mx-auto max-w-4xl px-6 py-10 md:py-20 text-center lg:py-28">
          <SectionLabel>Real homeowners · Real stories</SectionLabel>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:mt-6 md:text-5xl lg:text-6xl">
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
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
            …but don’t take our word for it!
          </p>
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
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <Quote
                  className="absolute top-5 right-5 h-8 w-8 text-primary/15"
                  strokeWidth={1.5}
                />
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">
                  "{t.text}"
                </p>
                <div className="mt-auto flex items-center gap-3 pt-5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    decoding="async"
                    width={72}
                    height={72}
                    className="h-9 w-9 shrink-0 rounded-full object-cover"
                  />
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                </div>
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
