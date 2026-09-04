# Product

## Register

brand

## Users

People planning a public-facing live event in India and deciding who to trust with it:
venue and club owners, brand and marketing leads, college fest committees, promoters,
and private hosts with a budget. They arrive with a date, sometimes an act, and a fear
that the night falls apart on stage. Their job to be done: hand the production to a crew
that has run this exact kind of night before, at scale, and walk away looking good.

## Product Purpose

A marketing site for AM Productions, an event production house run by Akash Makana,
focused on DJ nights, standup comedy and live music shows. The site exists to convert
a visitor into a booking enquiry by proving track record through photography, a clear
service structure, and a plain account of how a booking runs. Success: the visitor
sends the brief on the contact page. There is no backend; the site is frontend-only
(Next.js 15 static export).

## Brand Personality

Confident, plain-spoken, slightly blunt. The voice of a crew that has done 300 nights
and does not need to oversell the 301st. Three words: seasoned, direct, unflashy.
Emotional goal for the visitor: relief. "These people will handle it, and it will look
incredible." Never hype, never buzzwords, never a hard sell.

## Anti-references

- Purple-and-cyan "nightlife / EDM" template landing pages.
- SaaS-minimal: thin type, lots of white, gradient buttons, hero-metric block.
- Editorial-serif brand affectation: display italic serif, drop caps, ruled columns,
  tiny tracked eyebrows above every section.
- Wedding-planner softness: script fonts, blush tones, rounded cards.
- Stock "corporate events" clip-art energy.

## Design Principles

1. **The photos do the selling.** Every layout gives event photography room to be big
   and full-bleed. Text supports the image, not the other way round.
2. **Show the track record, do not claim it.** Numbers appear once, where they are real.
   Credibility comes from the volume and range of work shown.
3. **Plain about process.** Tell the visitor exactly how a booking runs, what they get,
   and when. No mystery, no "let's jump on a call to discuss synergies."
4. **Same crew, whole show.** The site's structure and copy reinforce that the person
   who quotes the job runs it. Small team is the selling point, not a limitation.
5. **Built for the room it happens in.** Dark, high-contrast, poster-loud. The site
   should feel like the venue at 10pm, not a daytime office.

## Accessibility & Inclusion

WCAG 2.1 AA minimum. Body text >= 4.5:1, large text and labels >= 3:1, verified against
the near-black background. Full keyboard paths including the work filter and lightbox.
Visible focus-visible rings in the ember accent. Touch targets >= 44px. Every animation
(hero marquee, scroll settle-in, hover transforms, lightbox) has a
`prefers-reduced-motion` alternative and no content depends on JS or a scroll trigger to
become visible. Dark-only theme is a deliberate register choice, not a default; contrast
is held well above the minimum to keep it comfortable.
