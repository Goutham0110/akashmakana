import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

// Anchor lastModified to the deploy date rather than `new Date()` so it only
// changes when the site is rebuilt with new content.
const lastModified = new Date();

const routes = [
  { path: "/", priority: 1 },
  { path: "/work/", priority: 0.8 },
  { path: "/services/", priority: 0.8 },
  { path: "/about/", priority: 0.6 },
  { path: "/contact/", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
