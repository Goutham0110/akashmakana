# AM Productions - design prototypes

Browseable HTML mockups for the AM Productions marketing site. These are the
source of truth for the visual design; engineers implement the Next.js site from
them. Nothing here is production code.

## Open it

Open any `.html` file directly in a browser, or serve the folder:

```bash
npx serve docs/design
```

Start at `index.html`. `design-system.html` documents tokens, type and states.

## Pages

| File | What it shows |
|------|---------------|
| `index.html` | Home: hero, track-record strip, services teaser, work mosaic, process, client logos, CTA |
| `work.html` | Filterable editorial mosaic (All / DJ / Standup / Live), lightbox with keyboard nav, empty state |
| `services.html` | Four services with sticky jump nav, indicative pricing slots, bolt-ons |
| `about.html` | Story, working principles, crew, numbers, timeline |
| `contact.html` | Booking form: validation, required-field errors, invalid-email error, success panel |
| `design-system.html` | Tokens, colour, type scale, components, state coverage, token map for engineers |

## Shared assets

- `assets/base.css` - design tokens and shared components (header, footer, buttons, type)
- `assets/site.js` - progressive-enhancement JS (sticky header, mobile nav, filter, lightbox, form demo). Every page works with this file removed.

## What is placeholder

Marked inline with an orange dashed `placeholder` chip. Pending from AM Productions:

- Logo / wordmark (currently typeset "AM.Productions")
- All photography (verified Unsplash stand-ins; search briefs are in the `alt` text)
- Real project names, venues, cities, capacities
- Client and venue list
- Copy (written in the AM Productions voice as a stand-in, fully replaceable)
- Email, phone, social handles
- Team names and bios (Akash Makana is real; the rest are "Name Surname")
- Track-record numbers (340+ shows, 18 cities, 9k crowd)

## Notes for implementation

- **Fonts:** Anton (display) + Archivo (body). Prototype loads from Google Fonts;
  production should use `next/font/google`. This replaces the placeholder
  Poppins / Montserrat in `layout.tsx`.
- **Theme:** dark-only, by design (the site should feel like the venue at night).
  The repo currently ships light + dark token blocks. Decision needed before build.
- **Token map:** see the table at the bottom of `design-system.html` for the
  prototype var -> `globals.css` `@theme` mapping.
- **Contact form:** prototype validates in-browser only. No submission handler,
  no network request. Wire to a real endpoint (or a mailto / form service) during build.
- **Motion:** deliberately light. Framer Motion is already in the stack; the
  scroll settle-in and lightbox map cleanly onto it. Keep the
  `MotionConfig reducedMotion="user"` wrapper.
