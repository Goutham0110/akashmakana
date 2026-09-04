// Services copy. Indicative pricing is a placeholder pending real numbers.

export type Service = {
  id: string;
  index: string;
  title: string;
  teaser: string;
  lede: string;
  points: string[];
  cta: string;
  priceHint: string;
  priceHintPlaceholder?: boolean;
  image: { src: string; alt: string; caption: string };
};

export const services: Service[] = [
  {
    id: "dj",
    index: "01",
    title: "DJ & music nights",
    teaser:
      "Club nights, rooftop sessions and festival stages. Line-up curation, decks, monitoring and a floor that stays full.",
    lede: "Club nights, rooftop sessions, festival stages. We book the line-up and build the room around it.",
    points: [
      "Line-up curation and artist contracts",
      "DJ booth, decks, monitoring and FOH mix",
      "Lighting and haze rig sized to the venue",
      "Entry, wristbands and crowd flow plan",
    ],
    cta: "Book a DJ night",
    priceHint: "Indicative from ₹X,XX,XXX",
    priceHintPlaceholder: true,
    image: {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1100&q=80",
      alt: "A DJ working the booth above a club crowd lit in magenta and blue",
      caption: "Neon Terrace rooftop series, Bengaluru",
    },
  },
  {
    id: "standup",
    index: "02",
    title: "Standup & comedy",
    teaser:
      "Single-night specials and multi-city tours. Room sizing, ticketing, green room and a clean recording setup.",
    lede: "Single-night specials and multi-city tours. Quiet rooms, clean sound, tight schedules.",
    points: [
      "Room sizing and seating layout for sightlines",
      "Ticketing setup, guest list and door management",
      "Green room, hospitality and travel coordination",
      "Multi-camera recording and audio capture",
    ],
    cta: "Plan a comedy night",
    priceHint: "Indicative from ₹X,XX,XXX per city",
    priceHintPlaceholder: true,
    image: {
      src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1100&q=80",
      alt: "A single microphone on a stand against a dark stage with warm bokeh",
      caption: "Late Set Tour, seven cities",
    },
  },
  {
    id: "live",
    index: "03",
    title: "Live shows & concerts",
    teaser:
      "Bands and solo acts, ticketed or brand-hosted. Stage build, backline, front of house and artist liaison.",
    lede: "Bands and solo acts, ticketed or brand-hosted. Full stage, backline and front of house.",
    points: [
      "Stage build, trussing, barricade and rigging",
      "Line array PA, monitors and backline hire",
      "Artist liaison, riders and stage management",
      "Medical, security and crowd safety planning",
    ],
    cta: "Talk about a concert",
    priceHint: "Scoped per show",
    priceHintPlaceholder: true,
    image: {
      src: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=1100&q=80",
      alt: "A guitarist mid-song on a stage lit blue and orange, drum kit behind",
      caption: "Amps & Open Air, Goa",
    },
  },
  {
    id: "full",
    index: "04",
    title: "Full production",
    teaser:
      "You have the venue and the date, nothing else. We bring staging, sound, light, power, permits and crew.",
    lede: "You have a venue and a date. We bring everything that turns it into a show.",
    points: [
      "Staging, sound, lighting and power distribution",
      "Local permits, police and fire clearances",
      "Crew roster, run sheet and show calling",
      "Vendor payments and post-event settlement",
    ],
    cta: "Hand us the build",
    priceHint: "Day rate plus crew",
    priceHintPlaceholder: true,
    image: {
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1100&q=80",
      alt: "Confetti over a large concert crowd with bright white stage lighting",
      caption: "Monsoon Mainstage festival build, Pune",
    },
  },
];

export type AddOn = { title: string; body: string };

export const addOns: AddOn[] = [
  { title: "Content crew", body: "Photo and reels team on site, edited turnaround within 48 hours." },
  { title: "Brand build", body: "Stage branding, signage, sampling zones and photo moments." },
  { title: "Guest travel", body: "Flights, hotels and ground transport for artists and VIPs." },
  { title: "Bar & F&B", body: "Licensed bar partners, menu and service staff for the room." },
];
