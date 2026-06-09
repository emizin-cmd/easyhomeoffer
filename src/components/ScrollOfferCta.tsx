import { ArrowRight } from "lucide-react";

const scrollToOffer = () =>
  document
    .getElementById("offer")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });

/**
 * Centered brand-orange CTA pill placed between major body sections.
 * Clicking smooth-scrolls the page to the hero #offer LeadForm card.
 * Margins of mt-12/md:mt-16 sit it apart from the preceding section
 * content; place inside the previous section's inner container so it
 * picks up the section's background color.
 */
export function ScrollOfferCta({ label = "Get Cash Offer" }: { label?: string }) {
  return (
    <div className="mt-12 flex justify-center md:mt-16">
      <button
        type="button"
        onClick={scrollToOffer}
        className="group flex w-full max-w-md items-center justify-center gap-2.5 rounded-full bg-[#f97316] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-xl active:translate-y-0 active:bg-[#c2410c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fb923c]/60"
      >
        {label}
        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" strokeWidth={2.5} />
      </button>
    </div>
  );
}
