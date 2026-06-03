/**
 * Shared SEO helpers.
 *
 * Each route calls buildSeo({ path, title, description, image? }) inside its
 * createFileRoute({ head: () => ({ meta, links }) }) function. Returns an object
 * ready to spread into TanStack Router's head() return value.
 *
 * Update SITE_URL when the production domain is finalized.
 */

export const SITE_URL = "https://easyhomeoffer.com";
export const SITE_NAME = "Easy Home Offer";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

export interface SeoInput {
  path: string; // route path, e.g. "/", "/sell-your-house"
  title: string; // ≤ 60 chars, brand-aware
  description: string; // ≤ 155 chars, persuasive with CTA
  image?: string; // optional absolute URL or absolute path
}

export function buildSeo({ path, title, description, image }: SeoInput) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_OG_IMAGE;

  return {
    meta: [
      { title },
      { name: "description", content: description },

      // Open Graph
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: ogImage },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/**
 * Local-business JSON-LD payload. Renders inside a
 * <script type="application/ld+json"> tag.
 */
export const LOCAL_BUSINESS_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: SITE_NAME,
  alternateName: "Twin Cities Home Buyers",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  image: DEFAULT_OG_IMAGE,
  description:
    "Twin Cities home buyer offering fair all-cash offers on Minneapolis & St. Paul houses. Close in as little as 7 days. No fees, no commissions, no repairs.",
  telephone: "+1-612-445-5250",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4820 Minnetonka Blvd, Suite 300",
    addressLocality: "Minneapolis",
    addressRegion: "MN",
    postalCode: "55416",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Minneapolis" },
    { "@type": "City", name: "St. Paul" },
    { "@type": "AdministrativeArea", name: "Twin Cities Metro" },
    { "@type": "State", name: "Minnesota" },
  ],
  sameAs: [
    "https://x.com/TCHomeBuyers",
    "https://www.facebook.com/TwinCitiesHomeBuyers/",
    "https://www.instagram.com/twincitieshomebuyer/",
    "https://www.youtube.com/channel/UCTvAQ04UMwCXyDSZ_COnqHg",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "600",
  },
});
