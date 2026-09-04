// About page copy. Placeholder in the AM Productions voice. Akash Makana is
// real; other team names and bios are placeholders, as are the numbers.

export const story = {
  lede: "AM Productions started in 2016 with one rented sound system and a rooftop that was not supposed to have a party on it.",
  paragraphs: [
    "Since then the work has stayed the same shape: DJ nights, standup shows and live concerts, run by the people who planned them. Akash Makana still calls most shows from the side of the stage.",
    "We keep the team small on purpose. The person who quotes your event is the person who runs it. When something moves at 9pm on a show night, and it always does, you are talking to someone who can fix it.",
  ],
  portrait: {
    src: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?auto=format&fit=crop&w=900&q=80",
    alt: "Two musicians playing side by side in a dark low-lit venue",
    caption: "Akash Makana, side of stage",
    width: 900,
    height: 1125,
  },
} as const;

export type Principle = { index: string; title: string; body: string };

export const principles: Principle[] = [
  {
    index: "01",
    title: "One team, whole show",
    body: "No handoff to a junior crew after the contract. Same faces from first call to load-out.",
  },
  {
    index: "02",
    title: "Fixed quote, early",
    body: "A single-page plan and a firm number within three working days. Changes are priced before they happen.",
  },
  {
    index: "03",
    title: "Plan for the 9pm problem",
    body: "Every run sheet has a backup for the thing most likely to go wrong. It usually does, and it is usually handled.",
  },
];

export type Member = {
  name: string;
  role: string;
  placeholder?: boolean;
  photo: { src: string; alt: string };
};

export const crew: Member[] = [
  {
    name: "Akash Makana",
    role: "Founder, show caller. Runs the room on the night.",
    photo: {
      src: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=500&q=80",
      alt: "Portrait placeholder",
    },
  },
  {
    name: "Name Surname",
    role: "Production lead. Stage, sound and vendor build.",
    placeholder: true,
    photo: {
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
      alt: "Portrait placeholder",
    },
  },
  {
    name: "Name Surname",
    role: "Artist and tour coordination. Contracts and travel.",
    placeholder: true,
    photo: {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
      alt: "Portrait placeholder",
    },
  },
  {
    name: "Name Surname",
    role: "Ticketing, front of house and guest management.",
    placeholder: true,
    photo: {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
      alt: "Portrait placeholder",
    },
  },
];

export type Numbers = { value: string; sup?: string; label: string };

export const numbers: Numbers[] = [
  { value: "340", sup: "+", label: "Shows produced since 2016" },
  { value: "18", label: "Cities, Kochi to Shillong" },
  { value: "9,000", label: "Largest single crowd handled" },
];

export type Milestone = { year: string; title: string; body: string };

export const timeline: Milestone[] = [
  {
    year: "2016",
    title: "First rooftop night",
    body: "One system, one rooftop, 120 people. It did not stop after that.",
  },
  {
    year: "2018",
    title: "First comedy tour",
    body: "Four cities in nine days. Learned what a tour actually costs.",
  },
  {
    year: "2021",
    title: "Full production arm",
    body: "Started owning staging and sound instead of renting every time.",
  },
  {
    year: "2024",
    title: "Festival mainstage",
    body: "First multi-day build, 9,000 across the weekend, no incidents.",
  },
];
