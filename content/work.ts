// Work / project data. All photography is verified Unsplash placeholder until
// AM Productions supplies its own show gallery. Project names, venues, cities
// and capacities are placeholders.

export type WorkCategory = "dj" | "standup" | "live";

export type WorkFilter = { id: "all" | WorkCategory; label: string };

export const workFilters: WorkFilter[] = [
  { id: "all", label: "All" },
  { id: "dj", label: "DJ nights" },
  { id: "standup", label: "Standup" },
  { id: "live", label: "Live shows" },
];

export type Project = {
  id: string;
  category: WorkCategory;
  tag: string;
  title: string;
  meta: string;
  fullMeta: string;
  span: "wide" | "tall" | "mid";
  image: { src: string; full: string; alt: string; width: number; height: number };
};

export const projects: Project[] = [
  {
    id: "neon-terrace",
    category: "dj",
    tag: "DJ night",
    title: "Neon Terrace, Vol. 4",
    meta: "Rooftop club series - Bengaluru",
    fullMeta: "Rooftop club series - Bengaluru - 1,200 capacity",
    span: "wide",
    image: {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
      full: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1800&q=85",
      alt: "A DJ working the booth above a dense club crowd washed in magenta and blue light",
      width: 1200,
      height: 750,
    },
  },
  {
    id: "late-set-tour",
    category: "standup",
    tag: "Standup",
    title: "Late Set Tour",
    meta: "7 cities - comedy special",
    fullMeta: "7-city comedy special - 300 to 700 capacity rooms",
    span: "tall",
    image: {
      src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=85",
      alt: "A single microphone on a stand against a dark stage with warm bokeh behind it",
      width: 800,
      height: 1000,
    },
  },
  {
    id: "amps-open-air",
    category: "live",
    tag: "Live show",
    title: "Amps & Open Air",
    meta: "Ticketed concert - Goa",
    fullMeta: "Ticketed concert - Goa - 2,000 capacity",
    span: "tall",
    image: {
      src: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=1400&q=85",
      alt: "A guitarist mid-song on a stage lit blue and orange, drum kit behind",
      width: 800,
      height: 1000,
    },
  },
  {
    id: "monsoon-mainstage",
    category: "live",
    tag: "Festival",
    title: "Monsoon Mainstage",
    meta: "Two-day festival - Pune",
    fullMeta: "Two-day festival build - Pune - 9,000 across the weekend",
    span: "wide",
    image: {
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1100&q=80",
      full: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1800&q=85",
      alt: "Confetti falling over a huge concert crowd with bright white stage lights ahead",
      width: 1100,
      height: 733,
    },
  },
  {
    id: "warehouse-21",
    category: "dj",
    tag: "DJ night",
    title: "Warehouse 21",
    meta: "Underground party - Mumbai",
    fullMeta: "Underground party - Mumbai - 800 capacity",
    span: "mid",
    image: {
      src: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1100&q=80",
      full: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1800&q=85",
      alt: "Silhouetted dancers in a dark warehouse space with a bright doorway and neon floor reflections",
      width: 1100,
      height: 733,
    },
  },
  {
    id: "first-light-sessions",
    category: "live",
    tag: "Live show",
    title: "First Light Sessions",
    meta: "Sunrise concert - Rishikesh",
    fullMeta: "Sunrise concert - Rishikesh - 600 capacity",
    span: "mid",
    image: {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=85",
      alt: "A performer with one hand raised on stage, smoke and sparks behind",
      width: 800,
      height: 1000,
    },
  },
  {
    id: "dune-sessions",
    category: "dj",
    tag: "DJ night",
    title: "Dune Sessions",
    meta: "Desert stage - Jaisalmer",
    fullMeta: "Desert stage - Jaisalmer - 1,500 capacity",
    span: "tall",
    image: {
      src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1400&q=85",
      alt: "Crowd silhouettes against an orange-hazed stage at an outdoor night event",
      width: 800,
      height: 533,
    },
  },
  {
    id: "open-mic-league",
    category: "standup",
    tag: "Standup",
    title: "Open Mic League",
    meta: "Monthly comedy night - Hyderabad",
    fullMeta: "Monthly comedy night - Hyderabad - 250 capacity",
    span: "tall",
    image: {
      src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1400&q=85",
      alt: "A vintage chrome microphone in close focus with coloured bokeh behind",
      width: 800,
      height: 533,
    },
  },
  {
    id: "hill-sessions",
    category: "live",
    tag: "Festival",
    title: "Closing Night, Hill Sessions",
    meta: "Festival headline set - Shillong",
    fullMeta: "Festival headline set - Shillong - 4,000 capacity",
    span: "tall",
    image: {
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
      full: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1800&q=85",
      alt: "A packed festival crowd with arms raised as warm stage light floods the front rows",
      width: 1200,
      height: 750,
    },
  },
];

// The five shots shown on the home page teaser, in mosaic order.
export const homeTeaser = [
  projects[0],
  projects[1],
  projects[2],
  projects[3],
  projects[4],
];
