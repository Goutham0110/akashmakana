import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for host-agnostic deployment (GitHub Pages, S3, Netlify static).
  // If you deploy to Vercel and want image optimization / route handlers,
  // remove `output` and `images.unoptimized`.
  output: "export",
  images: {
    unoptimized: true,
    // Unsplash stand-ins until AM Productions supplies its own show photography.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  trailingSlash: true,
  // If the site is served from a sub-path (e.g. https://example.com/site),
  // set basePath: "/site" here and keep src/lib/base-path.ts in sync.
};

export default nextConfig;
