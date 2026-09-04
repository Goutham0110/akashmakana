# Project

A **design-focused portfolio website for a business** ("Aakash"), built with **Next.js 15** (static export). This is a marketing site where the design *is* the product — the job is to make the business look credible, considered, and premium. It is frontend-only: no backend services, no database, no auth.

Scaffolded 2026-09-04, modeled on `../portfolio` (a personal portfolio using the same stack).

## Commands

```bash
npm run dev       # Dev server (Turbopack)
npm run build     # Static export to out/
npm run lint      # ESLint
npm run deploy    # Build + push out/ to the gh-pages branch
```

## Stack

- **Next.js 15.5.6** App Router, **React 19**, TypeScript strict
- `output: "export"` static build with **Turbopack**. `next.config.ts` also sets `images.unoptimized` and `trailingSlash`. Do not remove these unless moving off static hosting.
- **Tailwind CSS v4** — inline `@theme` config in `src/app/globals.css`, no `tailwind.config`. `@tailwindcss/postcss` in `postcss.config.mjs`.
- **Framer Motion 12** for animation. `MotionProvider` wraps the app with `MotionConfig reducedMotion="user"`. Shared variants in `src/lib/animation-variants.ts`.
- Fonts via `next/font/google`: `--font-sans` (Poppins), `--font-mono` (Montserrat).
- **npm** (package-lock.json). Node 24.
- `@/*` path alias → `src/*`.

## Structure

- `src/app/` — `layout.tsx` (fonts, SEO metadata, Organization JSON-LD), `page.tsx` (composes sections), `globals.css`, `sitemap.ts`, `robots.ts`, `icon.svg`
- `src/app/sections/` — page sections (`hero`, `contact` so far). All `"use client"` (Framer Motion).
- `src/components/` — `MotionProvider`, `HeaderText` (h2 section heading with wipe reveal; the only h1 is the hero), `Divider`, `Analytics` (GoatCounter, disabled until `GOATCOUNTER_CODE` set)
- `src/lib/` — `site.ts` (single source of site name / url / description / social — every SEO surface reads this), `animation-variants.ts`, `base-path.ts` (`withBasePath`, no-op until the site moves to a sub-path)
- `content/` — markdown/data files for copy (empty; add when sections need real content)
- `public/` — static assets (add `og-image.png`, 1200x630)
- `docs/design/` — HTML design prototypes (the `designer` agent works here only; engineers implement from these)

## Styling / theming

Neutral **light + dark** token blocks in `globals.css`: light palette on bare `:root`, dark under `@media (prefers-color-scheme: dark)` and `:root[data-theme="dark"]`. Tokens: `--background`, `--surface`, `--surface-raised`, `--foreground`, `--muted`, `--hairline`, `--accent`, `--accent-contrast`. All placeholders — swap hue/chroma for the real brand. Tailwind color utilities: `bg-background`, `text-foreground`, `text-muted`, `border-hairline`, `bg-accent`, `text-accent-contrast`.

Mobile-first; keep every section horizontal-overflow-free at 375px. Heading type scale pattern: `text-4xl sm:text-6xl lg:text-7xl`.

## Conventions

- Server Components by default. `"use client"` only on leaves that need interactivity, hooks, or browser APIs (section files need it for Framer Motion).
- Every animation ships with a `prefers-reduced-motion` alternative (`MotionConfig reducedMotion="user"` covers Framer Motion; hand-rolled CSS animations need their own `@media` guard). Content never depends on a scroll/class trigger to become visible.
- WCAG AA minimum: contrast (4.5:1 body, 3:1 large), keyboard paths, focus-visible, touch targets >= 44px.
- UX copy: button labels are verb + object; no em dashes; no marketing buzzwords.
- Visitor-facing copy longer than a few words goes in `content/` or a typed data file, not hardcoded in JSX.
- Commits: scoped conventional messages (`feat(home): ...`, `fix(nav): ...`). Never mix a feature and a refactor in one commit.
- No building for scale/features the site doesn't have (no state manager, no i18n framework, no CMS abstraction) unless asked.

## Before launch

- **Brand**: swap placeholder tokens and fonts in `globals.css` / `layout.tsx`.
- **Copy**: `src/lib/site.ts` and section files carry placeholders.
- **Hosting**: `site.ts` `url` is `https://example.com`. Set the real domain. For a sub-path, set `basePath` in `next.config.ts` and `BASE_PATH` in `src/lib/base-path.ts`.
- **OG image**: add `public/og-image.png`.
- **Analytics**: set `GOATCOUNTER_CODE` in `src/components/analytics.tsx` or remove it.

## .claude setup

- **`engineer` agent + skill** (default agent) — Next.js frontend engineering: pages, sections, component architecture, rendering decisions, motion, a11y, SEO, performance, refactoring.
- **`frontend-engineer` agent** — combined design + engineering for tasks that touch both how something looks and how it works.
- **`designer` agent** — pure visual design, produces browseable HTML prototypes in `docs/design/` only. Uses the `impeccable` and `ui-ux-pro-max` skills.
- **`impeccable` skill** — production-grade frontend design system, craft, anti-slop rules (`brand` register for this site).
- **`ui-ux-pro-max` skill** — searchable design intelligence DB (styles, palettes, typography, UX rules); `nextjs` stack.
