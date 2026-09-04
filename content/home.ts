// Home page copy and data. Placeholder copy is written in the AM Productions
// voice and is fully replaceable. Track-record numbers are placeholders.

export const hero = {
  eyebrow: "Event production - India",
  headline: "We run the room.",
  headlineAccent: "You take the credit.",
  note: "DJ nights, standup tours and live shows, booked and built end to end by Akash Makana and team.",
  image: {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=2000&q=80",
    alt: "A packed festival crowd with arms raised as warm stage light floods over the front rows",
    width: 2000,
    height: 1333,
  },
  marquee: [
    "DJ Nights",
    "Standup Comedy",
    "Live Music",
    "Stage & Sound",
    "Artist Booking",
    "Tour Production",
  ],
} as const;

export type Stat = { value: string; sup?: string; label: string; placeholder?: boolean };

export const stats: Stat[] = [
  { value: "340", sup: "+", label: "Shows produced since 2016", placeholder: true },
  { value: "18", label: "Cities toured, Kochi to Shillong", placeholder: true },
  { value: "9k", label: "Largest single crowd handled", placeholder: true },
];

export type ProcessStep = { title: string; body: string };

export const process: ProcessStep[] = [
  {
    title: "Scope the room",
    body: "One call to fix the date, the act, the venue and the budget. You get a single-page plan and a fixed quote within three working days.",
  },
  {
    title: "Build the show",
    body: "Artist contracts, stage and sound design, ticketing setup, permits, crew roster and a run sheet. You approve, we execute.",
  },
  {
    title: "Run and hand back",
    body: "Our team is on site from load-in to load-out. You get the photos, the settlement and a short what-worked note within a week.",
  },
];

// Client / venue names are placeholders pending the real list.
export const clients: string[] = [
  "Kaia Rooftop",
  "Antisocial",
  "The Quarry",
  "Fandom",
  "Bay Arena",
  "Studio Nine",
];
