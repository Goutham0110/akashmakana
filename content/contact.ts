// Contact page copy and form model. The form validates in the browser only;
// there is no submission handler yet. Wire it to a form service or endpoint
// before launch.

export const contactIntro = {
  eyebrow: "Contact",
  heading: "Tell us the date and the idea",
  body: "You get a single-page plan and a fixed quote within three working days.",
};

export type FormatOption = { value: string; label: string };

export const formatOptions: FormatOption[] = [
  { value: "dj", label: "DJ night" },
  { value: "standup", label: "Standup" },
  { value: "live", label: "Live show" },
  { value: "full", label: "Full production" },
  { value: "unsure", label: "Not sure yet" },
];

export const crowdRanges: string[] = [
  "Under 200",
  "200 to 500",
  "500 to 1,500",
  "1,500 to 5,000",
  "5,000 plus",
];

export const asideBlocks = {
  reach: {
    title: "Straight to a person",
  },
  where: {
    title: "Where we work",
    body: "Based in India. Most shows are in metro cities, but we travel for the right night. Travel and stay are quoted separately and shown up front.",
  },
  ready: {
    title: "Good to have ready",
    items: [
      "A date, even a rough one",
      "The act, if it is confirmed",
      "The venue or the city",
      "A rough budget band",
    ],
  },
  image: {
    src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=80",
    alt: "Crowd silhouettes against an orange-hazed stage at an outdoor night event",
    caption: "Dune Sessions, Jaisalmer",
    width: 900,
    height: 600,
  },
};
