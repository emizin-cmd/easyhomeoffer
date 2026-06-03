import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Phone,
  Sparkles,
} from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import skyline from "../assets/skyline.jpg";

const PHONE_DISPLAY = "612-445-5250";
const PHONE_TEL = "6124455250";

export const Route = createFileRoute("/thank-you")({
  component: ThankYouPage,
  head: () =>
    buildSeo({
      path: "/thank-you",
      title: "Thank You | Easy Home Offer — Minneapolis Cash Buyer",
      description:
        "Thanks for your submission. Our team will review your property details and reach out within 24 hours.",
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

const STEPS = [
  {
    icon: FileText,
    step: "01",
    title: "We review your details",
    text: "Our team studies the property and the Minneapolis–St. Paul market data to prepare a fair number.",
  },
  {
    icon: Phone,
    step: "02",
    title: "We call you within 24 hours",
    text: "Quick, no-pressure call to confirm a few details and walk you through how the offer works.",
  },
  {
    icon: Clock,
    step: "03",
    title: "Close on your timeline",
    text: "Once you accept, we close at a local title company in as little as 7 days — or whenever works for you.",
  },
];

function ThankYouPage() {
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
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary md:h-20 md:w-20">
            <CheckCircle2 className="h-9 w-9 md:h-11 md:w-11" strokeWidth={2} />
          </div>
          <div className="mt-6 flex justify-center">
            <SectionLabel>Submission received</SectionLabel>
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:mt-6 md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Thank you —
            </span>{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              we've got your details.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
            Our team will review your information and get back to you with a fair, no-obligation
            cash offer within 24 hours. Keep an eye on your email and phone.
          </p>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>What happens next</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:mt-5 md:text-5xl">
            Three steps to your fair cash offer
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:mt-4 md:text-lg">
            Here's exactly what we'll do over the next 24 hours.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:mt-14 md:gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, ...s }) => (
            <div
              key={s.step}
              className="group relative rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)] md:rounded-3xl md:p-8"
            >
              <span className="absolute right-4 top-4 text-xs font-semibold text-muted-foreground/50 md:right-6 md:top-6 md:text-sm">
                {s.step}
              </span>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground md:h-12 md:w-12 md:rounded-2xl">
                <Icon className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight md:mt-5 md:text-xl">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground md:mt-2 md:text-sm">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL CTA */}
      <section className="relative overflow-hidden border-t border-border/60 py-12 md:py-20">
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Want to talk{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              right now?
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground md:mt-4 md:text-lg">
            Skip the wait — call us directly. We usually pick up on the first ring.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-lg transition hover:translate-y-[-1px] hover:shadow-xl"
            >
              <Phone className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-accent"
            >
              Back to home
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
