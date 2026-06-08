import { GoogleReviewCard } from "@/components/GoogleReviewCard";
import { GOOGLE_REVIEWS } from "@/lib/google-reviews";

/**
 * Mobile: native horizontal scroll with snap. No autoplay (autoplay
 * fights touch interaction). Desktop: seamless marquee — cards are
 * duplicated in DOM so when translation reaches -50% the next set is
 * already where the first set started. Pauses on hover; the
 * animate-marquee class respects prefers-reduced-motion.
 */
export function ReviewsCarousel() {
  return (
    <>
      <div
        className="-mx-6 overflow-x-auto pb-4 [scrollbar-width:thin] snap-x snap-mandatory md:hidden"
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

      <div
        className="-mx-6 hidden overflow-hidden pb-4 md:block"
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

      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground/70">
        <span className="md:hidden">Swipe to see more</span>
        <span className="hidden md:inline">Hover to pause</span>
      </div>
    </>
  );
}
