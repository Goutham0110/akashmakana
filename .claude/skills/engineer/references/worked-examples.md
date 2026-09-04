# Worked examples

Output-format grounding for the four most common task types on this project. The point is the *shape* of a good response, not the specific content.

---

## 1. New section build

**Request:** "Add a client logos / trust bar under the hero."

**Good response:**

> Trust bar under the hero: a horizontal row of client wordmarks, muted, that becomes a two-row wrap on mobile. Static Server Component, no interactivity.
>
> **Assumptions**
> - Logos are single-color SVGs I place in `public/logos/`. If they're full-color raster, say so — the treatment changes.
> - "Trusted by" is the label. Confirm the exact copy.
>
> **Content shape** — `content/home.ts`:
> ```ts
> clients: { name: string; logo: string; href?: string }[]
> ```
>
> **Plan**
> 1. Add `clients` array to `content/home.ts`.
> 2. `components/TrustBar.tsx` — Server Component. `flex flex-wrap` on mobile, single row `md:` and up. Logos at `opacity-60`, `grayscale`, hover restores if `href` is present.
> 3. Drop `<TrustBar />` into `app/(marketing)/page.tsx` between hero and the next section.
> 4. Each logo: inline `<svg>` via a small loader, or `next/image` with explicit `width`/`height` if raster.
>
> **Trade-offs**
> - Grayscale-until-hover only when the logo links somewhere; otherwise a flat muted row (hover on a non-interactive element is a false affordance).
> - No marquee/auto-scroll — it hurts reduced-motion and reads as filler on a 6–8 logo set.
>
> **Out of scope:** logo submission flow, CMS-managed list.
>
> Then: build, verify 375 / 768 / 1280, check focus-visible on the linked logos, commit `feat(home): add client trust bar`.

**Why it's good:** confirms design intent, names the content shape before coding, picks a path on the hover question and defends it, refuses the marquee with a reason.

---

## 2. Rendering-boundary decision

**Request:** "The testimonials section should auto-rotate every 5s and let you click dots to jump."

**Good response:**

> This needs client state (active index, interval), so the carousel itself is a Client Component — but keep it a leaf.
>
> **Boundary**
> - `TestimonialsSection` (Server) — renders the heading and passes the testimonials array in as a prop. Stays on the server so the copy is in the static HTML and indexable.
> - `TestimonialCarousel` (Client, `"use client"`) — receives `testimonials` as a prop, owns `activeIndex` and the `setInterval`.
> - All testimonial text is server-rendered inside the client component's children where possible, or passed as props — either way it's in the initial HTML.
>
> **Trade-offs**
> - Passing rendered content as props vs. fetching in the client: props keeps it in SSR output and out of a client fetch waterfall.
> - Auto-rotate pauses on hover/focus and respects `prefers-reduced-motion` (no auto-advance at all when reduced) — otherwise it's a moving-content accessibility failure.
> - Dots are real `<button>`s with `aria-label="Show testimonial N"`, not divs.
>
> **Out of scope:** swipe gestures, infinite loop cloning.

**Why it's good:** keeps the client boundary at the leaf, keeps content in SSR, handles the reduced-motion and keyboard obligations that an auto-rotating carousel creates.

---

## 3. Performance fix

**Request:** "The homepage feels slow to load the main image."

**Good response:**

> Measured with `next build` + Lighthouse (mobile, throttled): LCP 4.1s, and it's the hero image. Two causes.
>
> 1. **Not prioritized** — hero `<Image>` has no `priority`, so it loads after the font and below-fold images. Add `priority`.
> 2. **Oversized transfer** — source is a 3200px JPEG served at ~1200px display. `next/image` is resizing but the `sizes` prop is missing, so it requests the largest candidate. Add `sizes="(max-width: 768px) 100vw, 1200px"`.
>
> Also: the display font is loaded via a `<link>` in `app/layout.tsx` head, render-blocking. Move it to `next/font/local` — self-hosted, `display: swap`, no blocking request.
>
> **Not doing:** converting to a background-image, adding a blur placeholder library, or lazy-loading below-fold sections — none are the bottleneck.
>
> Re-measure after: expect LCP under 2.5s.

**Why it's good:** measured before touching anything, named the exact metric and the two concrete causes, explicitly declined the speculative fixes, committed to a re-measure.

---

## 4. Accessibility fix

**Request:** "Screen reader users can't tell where they are in the nav, and the mobile menu traps focus."

**Good response:**

> Two issues in `components/SiteHeader.tsx`.
>
> 1. **Current page not announced** — nav links have no `aria-current`. Add `aria-current="page"` on the link whose `href` matches the current pathname (`usePathname()` — this makes the nav a Client Component, which is fine, it's already interactive for the mobile toggle).
> 2. **Focus not trapped, and not restored** — opening the mobile menu leaves focus on the toggle; Tab escapes to the page behind the overlay. And closing doesn't return focus.
>    - Use the native `<dialog>` element for the mobile menu (built-in focus trap + `Esc` to close), or a focus-trap on the overlay if the design needs custom animation.
>    - On close, `toggleRef.current?.focus()`.
>    - Overlay gets `aria-modal="true"` and a label.
>
> **Also while here:** the hamburger button is an icon with no accessible name — add `aria-label="Open menu"` / `"Close menu"` toggling with state.
>
> **Verify:** keyboard-only walk through open → tab through links → Esc → focus back on toggle. VoiceOver: current page announced, menu announced as a dialog.
>
> Commit `fix(header): trap and restore focus in mobile menu, announce current page`.

**Why it's good:** names each defect precisely, gives the native-element option first, catches the adjacent icon-button-name bug, specifies the exact keyboard path to verify.

---

## Response shape checklist

Every non-trivial response has:

- [ ] Direct answer first, no preamble
- [ ] Design-intent / content assumptions flagged as assumptions
- [ ] Content shape stated before component code, when new content is involved
- [ ] Server/Client boundary called out when it's a real decision
- [ ] Trade-offs where a real choice was made; speculative alternatives explicitly declined
- [ ] Out-of-scope line
- [ ] How it will be verified (breakpoints, states, metric)
- [ ] Commit message
