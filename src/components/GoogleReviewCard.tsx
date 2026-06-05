import { Star } from "lucide-react";
import {
  type GoogleReview,
  initialOf,
  avatarColorClass,
} from "@/lib/google-reviews";

/**
 * Official 4-color Google "G" logo. Inline SVG so no extra network requests
 * and the colors render consistently regardless of CSS context.
 */
export function GoogleGLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden focusable="false">
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
}

interface Props {
  review: GoogleReview;
  /** Optional className override merged onto the article element. */
  className?: string;
}

/**
 * Google-styled review card. Avatar circle with initial, name + badge row,
 * Google "G" logo in the top-right indicating verified source, 5-star row
 * in Google's gold (#FBBC05), and the review text.
 */
export function GoogleReviewCard({ review, className = "" }: Props) {
  const filledStars = Math.min(Math.max(review.stars, 0), 5);

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] md:rounded-3xl md:p-6 ${className}`}
    >
      {/* Header: avatar + name + badge + Google G */}
      <header className="flex items-start gap-3">
        <div
          aria-hidden
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-base font-bold text-white ${avatarColorClass(review.name)}`}
        >
          {initialOf(review.name)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-foreground">
            {review.name}
          </div>
          <div className="truncate text-xs text-muted-foreground">{review.badge}</div>
        </div>
        <GoogleGLogo className="h-5 w-5 shrink-0" />
      </header>

      {/* Stars (Google gold) */}
      <div className="mt-3 flex items-center gap-0.5">
        {Array.from({ length: filledStars }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]"
            strokeWidth={0}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">
        {review.text}
      </p>

      {/* Verified footer */}
      <footer className="mt-4 flex items-center gap-1.5 border-t border-border/60 pt-3 text-[11px] font-medium text-muted-foreground">
        <GoogleGLogo className="h-3.5 w-3.5" />
        <span>Verified Google Review</span>
      </footer>
    </article>
  );
}
