# Aakash

Design-focused portfolio website for a business. Built with Next.js 15 (static export), Tailwind CSS v4, and Framer Motion.

## Commands

```bash
npm run dev       # Dev server (Turbopack)
npm run build     # Static export to out/
npm run lint      # ESLint
npm run deploy    # Build + push out/ to the gh-pages branch
```

## Structure

- `src/app/` — App Router: `layout.tsx` (fonts, SEO, JSON-LD), `page.tsx` (composes sections), `sitemap.ts`, `robots.ts`
- `src/app/sections/` — page sections (`hero`, `contact` so far). Client components (Framer Motion).
- `src/components/` — shared components (`MotionProvider`, `HeaderText`, `Divider`, `Analytics`)
- `src/lib/` — `site.ts` (single source of site metadata), `animation-variants.ts`, `base-path.ts`
- `content/` — markdown/data files for copy (empty for now)
- `public/` — static assets
- `docs/design/` — HTML design prototypes (the `designer` agent works here)

## Before launch

- **Brand**: `src/app/globals.css` has neutral placeholder tokens (light + dark). Swap for real brand colors and fonts.
- **Copy**: `src/lib/site.ts` and the section files carry placeholder text.
- **Hosting**: `src/lib/site.ts` `url` is `https://example.com`. Set the real domain. If serving from a sub-path, set `basePath` in `next.config.ts` and `BASE_PATH` in `src/lib/base-path.ts`.
- **OG image**: add `public/og-image.png` (1200x630).
- **Analytics**: set `GOATCOUNTER_CODE` in `src/components/analytics.tsx` (or remove it).
