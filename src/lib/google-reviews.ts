/**
 * Verified Google Business reviews — single source of truth.
 *
 * Used by both the homepage testimonials carousel and the dedicated
 * /testimonials grid. Editing here updates both surfaces.
 */

export interface GoogleReview {
  name: string;
  /** e.g. "Local Guide · 16 reviews" or "3 reviews" */
  badge: string;
  /** 1–5 */
  stars: number;
  text: string;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Trina Holley",
    badge: "Local Guide · 16 reviews",
    stars: 5,
    text: "Andrew the maintenance guy was very professional and nice! He took off his shoes and did a great job installing our microwave! Thanks Fuze and Andrew!!!!",
  },
  {
    name: "lisa moberg",
    badge: "3 reviews",
    stars: 5,
    text: "What a great experience. Knowledgeable helpful people helped make selling our home a very easy process! Highly recommend this team!",
  },
  {
    name: "Theresa Treptow",
    badge: "Local Guide · 13 reviews",
    stars: 5,
    text: "Great experience working with Jason! He helped us through the entire process. We really appreciated how in touch and how effective every detail was handled.. our closing went well and any and all questions were answered.",
  },
  {
    name: "Patty Kappelhoff",
    badge: "7 reviews",
    stars: 5,
    text: "Jason and his team were wonderful to work with. Made the process easy for our family, selling our Mothers home. Highly recommend and already have shared with others. Thank you.",
  },
  {
    name: "Jennifer Paterson",
    badge: "2 reviews",
    stars: 5,
    text: "I cant say enough good things about the team at Twin Cities Home Buyers. We had a total of 6 companies come out to look at the house and make us an offer; we knew after talking to Jessica and meeting Jason (and later his wife) that we were in good hands.",
  },
  {
    name: "Timothy Chang",
    badge: "8 reviews",
    stars: 5,
    text: "Straight forward, easy and simple process",
  },
  {
    name: "Maryrose Mallari",
    badge: "3 reviews",
    stars: 5,
    text: "Dealing with Jason was easy. He kept his word and was up front with the financial details.",
  },
  {
    name: "M. & B. Skallet",
    badge: "2 reviews",
    stars: 5,
    text: "The experience with TC home buyers went seamlessly. They were extremely helpful with jumping through the hurdles of inspections required by the city. I would recommend them to anyone looking to maximize their profit with minimum work",
  },
  {
    name: "April White",
    badge: "1 review",
    stars: 5,
    text: "Everything went smoothly. They cared about my needs and were easy to work with.",
  },
  {
    name: "Dennis Berger",
    badge: "5 reviews",
    stars: 5,
    text: "Working with the Twin Cities Home Buyers was great. Brendan was a pleasure to work with. He is very knowledgeable & answered all inquiries very quickly. 10 Star Service, Thanks again.",
  },
];

/** Returns the first alphabetic character of the name, uppercased. */
export function initialOf(name: string): string {
  const m = name.match(/[A-Za-z]/);
  return m ? m[0].toUpperCase() : "•";
}

/**
 * Deterministic avatar color per name. Mirrors Google's approach of using
 * a small palette of brand-friendly colors. Keeps yellow out (poor contrast
 * with white initial). All hex values are valid Tailwind arbitrary values.
 */
const AVATAR_PALETTE = [
  "bg-[#4285F4]", // Google blue
  "bg-[#34A853]", // Google green
  "bg-[#EA4335]", // Google red
  "bg-[#5F6368]", // Google graphite
  "bg-[#9333EA]", // purple
  "bg-[#0F9D58]", // teal-green
];

export function avatarColorClass(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return AVATAR_PALETTE[hash % AVATAR_PALETTE.length];
}
