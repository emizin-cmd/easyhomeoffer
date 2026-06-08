import { useState } from "react";
import { ArrowRight, Check, Minus, Scale, TrendingUp } from "lucide-react";

type Row = { label: string; agent: string; us: string; usHighlight?: boolean };

const ROWS: Row[] = [
  {
    label: "Commissions / Fees",
    agent: "6% on average — paid by you, the seller",
    us: "NONE",
    usHighlight: true,
  },
  {
    label: "Who pays closing costs?",
    agent: "2% on average — paid by you",
    us: "NONE — we pay all costs",
    usHighlight: true,
  },
  {
    label: "Inspection & financing contingency",
    agent: "Yes — up to 15% of sales fall through",
    us: "NONE",
    usHighlight: true,
  },
  {
    label: "Appraisal needed",
    agent: "Yes — sale often subject to appraisal",
    us: "NONE — we make cash offers",
    usHighlight: true,
  },
  {
    label: "Average days until sold",
    agent: "+/- 91 days",
    us: "Immediate cash offer",
    usHighlight: true,
  },
  { label: "Number of showings", agent: "It depends", us: "1 (just us)" },
  {
    label: "Closing date",
    agent: "30–60 +/- days after accepting the buyer's offer",
    us: "The date of YOUR choice",
    usHighlight: true,
  },
  {
    label: "Who pays for repairs?",
    agent: "Negotiated during inspection period",
    us: "NONE — we pay for all repairs",
    usHighlight: true,
  },
];

const scrollToOffer = () =>
  document
    .getElementById("offer")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });

export function CompareTable({ ctaLabel = "Get My Cash Offer" }: { ctaLabel?: string }) {
  const [tab, setTab] = useState<"agent" | "us">("us");

  return (
    <>
      {/* MOBILE/TABLET — tabbed view */}
      <div className="lg:hidden">
        <div
          role="tablist"
          aria-label="Compare selling options"
          className="grid grid-cols-2 gap-2 rounded-2xl border border-border bg-card p-1.5 shadow-[var(--shadow-soft)]"
        >
          <button
            type="button"
            role="tab"
            aria-selected={tab === "agent"}
            onClick={() => setTab("agent")}
            className={`flex items-center justify-center gap-1.5 rounded-xl px-2 py-2.5 text-center text-[11px] font-semibold leading-tight transition sm:text-xs ${
              tab === "agent"
                ? "bg-foreground text-background shadow-md"
                : "bg-transparent text-muted-foreground hover:bg-secondary/60"
            }`}
          >
            <Scale className="h-3.5 w-3.5 shrink-0" />
            Selling w/ an agent
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "us"}
            onClick={() => setTab("us")}
            style={tab === "us" ? { background: "var(--gradient-primary)" } : undefined}
            className={`flex items-center justify-center gap-1.5 rounded-xl px-2 py-2.5 text-center text-[11px] font-semibold leading-tight transition sm:text-xs ${
              tab === "us"
                ? "text-primary-foreground shadow-md"
                : "bg-transparent text-primary hover:bg-primary/5"
            }`}
          >
            <TrendingUp className="h-3.5 w-3.5 shrink-0" />
            SOLD to Twin Cities Home Buyers
          </button>
        </div>

        <ul className="mt-6 space-y-3">
          {ROWS.map((row) => (
            <li
              key={row.label}
              className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {row.label}
              </div>
              <div className="mt-2 flex items-start gap-2.5">
                {tab === "agent" ? (
                  <>
                    <Minus aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/70" />
                    <span className="text-sm leading-snug text-foreground/85">{row.agent}</span>
                  </>
                ) : (
                  <>
                    <Check
                      aria-hidden
                      strokeWidth={3}
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    />
                    <span
                      className={`text-sm leading-snug ${
                        row.usHighlight ? "font-semibold text-foreground" : "text-foreground/90"
                      }`}
                    >
                      {row.us}
                    </span>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="my-10 flex justify-center md:my-12">
          <button
            type="button"
            onClick={scrollToOffer}
            className="group flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-[#f97316] px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-xl active:translate-y-0 active:bg-[#c2410c]"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* DESKTOP — 3-column comparison table */}
      <div className="hidden overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] lg:block">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr]">
          <div className="hidden border-b border-border/60 bg-secondary/40 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:block">
            Category
          </div>
          <div className="border-b border-border/60 bg-secondary/40 px-6 py-4 text-center text-sm font-semibold">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Scale className="h-4 w-4" />
              Selling w/ an agent
            </div>
          </div>
          <div
            className="border-b border-border/60 px-6 py-4 text-center text-sm font-semibold text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="h-4 w-4" />
              SOLD to Twin Cities Home Buyers
            </div>
          </div>
        </div>

        {ROWS.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr] ${
              i !== ROWS.length - 1 ? "border-b border-border/60" : ""
            }`}
          >
            <div className="bg-secondary/30 px-6 py-5 text-sm font-semibold md:bg-transparent">
              {row.label}
            </div>
            <div className="flex items-start gap-2 border-t border-border/40 px-6 py-5 text-sm text-muted-foreground md:border-t-0 md:border-l md:border-border/60">
              <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
              <span>{row.agent}</span>
            </div>
            <div
              className={`flex items-start gap-2 border-t border-border/40 px-6 py-5 text-sm md:border-t-0 md:border-l md:border-border/60 ${
                row.usHighlight ? "font-semibold text-foreground" : "text-foreground/90"
              }`}
              style={
                row.usHighlight
                  ? {
                      background:
                        "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent)",
                    }
                  : undefined
              }
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{row.us}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
