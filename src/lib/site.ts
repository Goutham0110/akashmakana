// Single source of truth for site-wide metadata. Update these when the brand
// and hosting are finalized, then every SEO surface (layout, sitemap, robots,
// JSON-LD) picks up the change.

export const site = {
  name: "AM Productions",
  // Absolute URL the site is deployed at, no trailing slash.
  url: "https://example.com",
  title: "AM Productions - DJ nights, standup and live shows across India",
  description:
    "AM Productions is an event production house run by Akash Makana. We build DJ nights, standup comedy tours and live music shows across India, from the booking to the last song.",
  // Path under public/ to the 1200x630 Open Graph image.
  ogImage: "/og-image.png",
  locale: "en_IN",
  // Placeholder contact details - swap for real ones before launch.
  contact: {
    email: "hello@amproductions.com",
    phone: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
  },
  social: {
    // Fill in real profiles; used for JSON-LD `sameAs` and any social links.
    linkedin: "",
    instagram: "",
  },
} as const;
