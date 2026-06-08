import * as React from "react";
import { ChevronDown } from "lucide-react";

export type FaqEntry = { q: string; a: React.ReactNode };

/**
 * One-open-at-a-time accordion. Starts with the first item open so the
 * section never reads as a cold list. Click an open item to collapse.
 */
export function FaqAccordion({
  items,
  defaultOpenIndex = 0,
}: {
  items: FaqEntry[];
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(defaultOpenIndex);
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <FaqRow
          key={i}
          index={i}
          question={item.q}
          answer={item.a}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function FaqRow({
  question,
  answer,
  index,
  open,
  onToggle,
}: {
  question: string;
  answer: React.ReactNode;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`group overflow-hidden rounded-2xl border transition-all ${
        open
          ? "border-primary/40 bg-card shadow-[var(--shadow-soft)]"
          : "border-border bg-card/60 hover:border-primary/30 hover:bg-card"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6"
      >
        <div
          className={`font-heading text-xl font-black tabular-nums leading-none ${
            open ? "text-transparent" : "text-muted-foreground/50"
          }`}
          style={
            open
              ? {
                  backgroundImage: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }
              : undefined
          }
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="flex-1 font-heading text-base font-bold leading-snug tracking-tight text-foreground sm:text-lg">
          {question}
        </h3>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180 text-primary" : ""
          }`}
          aria-hidden
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 border-t border-border/60 px-5 py-5 pl-[52px] text-[15px] leading-relaxed text-foreground/80 sm:px-6 sm:pl-[60px]">
            {typeof answer === "string" ? <p>{answer}</p> : answer}
          </div>
        </div>
      </div>
    </div>
  );
}
