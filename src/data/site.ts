import type { SceneKey } from "@/components/Scenes";

// Single place to edit everything on the site: contact details, prices,
// packages, photos and FAQs. Every section reads from this file.

export const BUSINESS = {
  name: "JiSi Play Zone",
  tagline: "Indoor Soft Play & Birthday Parties",
  city: "Kuppam",
  address: "Kuppam, Chittoor District, Andhra Pradesh 517425",
  phone: "919441880054", // country code + number, digits only
  phoneDisplay: "+91 94418 80054",
  email: "rekhasj21@gmail.com",
  mapsLink: "https://maps.google.com/?q=Kuppam+Andhra+Pradesh",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  youtube: "https://youtube.com/",
};

export const telLink = `tel:+${BUSINESS.phone}`;
export const whatsAppLink = (message: string) =>
  `https://wa.me/${BUSINESS.phone}?text=${encodeURIComponent(message)}`;

// 0 = Sunday ... 6 = Saturday. Times in 24h "HH:MM".
export const OPENING_HOURS: Record<number, { open: string; close: string }> = {
  0: { open: "10:00", close: "21:00" },
  1: { open: "11:00", close: "20:30" },
  2: { open: "11:00", close: "20:30" },
  3: { open: "11:00", close: "20:30" },
  4: { open: "11:00", close: "20:30" },
  5: { open: "11:00", close: "20:30" },
  6: { open: "10:00", close: "21:00" },
};

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#attractions", label: "Attractions" },
  { href: "#membership", label: "Membership" },
  { href: "#pricing", label: "Pricing" },
  { href: "#birthday", label: "Birthday Packages" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact Us" },
];

export const HERO_SLIDES = [
  {
    title: "Jump, Slide & Play!",
    text: "Kuppam's own indoor soft play zone for kids aged 1–12.",
  },
  {
    title: "Birthday Parties Made Easy",
    text: "Decoration, play time & party room — all in one place.",
  },
  {
    title: "Safe, Clean, Soft & Fun",
    text: "Soft padded play areas made for happy little explorers.",
  },
];

// "Why choose us" cards shown after the top banner. `art` picks a cartoon: sun, rocket, chair or cake.
export const WHY_US = [
  { art: "sun", bg: "bg-sun-soft", title: "Safe & Soft Play", text: "Fully padded play areas, caring staff and CCTV, so you can relax." },
  { art: "rocket", bg: "bg-lilac", title: "Non-Stop Fun", text: "Slides, ball pool, trampoline, sandpit plus car & bike rides!" },
  { art: "chair", bg: "bg-sky-soft", title: "Parents Relax Too", text: "Comfy seating right next to the play area to watch your little ones." },
  { art: "cake", bg: "bg-pink-soft", title: "Parties Made Easy", text: "Play zone, party room and JiSi Events decoration in one booking." },
] as const;

// Under-3 supervision note shown below the attraction cards.
export const ATTRACTION_NOTE = "Kids under 3 years must be accompanied by a parent or guardian at all times.";

export const ATTRACTIONS: {
  emoji: string;
  name: string;
  text: string;
  scene: SceneKey; // cartoon shown on the card
}[] = [
  { emoji: "🔵", name: "Ball Pool", text: "Dive into thousands of colourful soft balls.", scene: "ballpit" },
  { emoji: "🛝", name: "Giant Slides", text: "Twisty and wave slides into the ball pit.", scene: "slide" },
  { emoji: "🤸", name: "Trampoline", text: "Bounce high in a fully netted trampoline.", scene: "trampoline" },
  { emoji: "🧗", name: "Soft Climbing", text: "Padded climbing wall and rope nets.", scene: "climb" },
  { emoji: "🏖️", name: "Sandpit", text: "Dig, build sandcastles and play with buckets & spades.", scene: "sandpit" },
  { emoji: "🌀", name: "Tunnel Slide", text: "Twist and whoosh through the big tube slide.", scene: "tunnel" },
];

// Play time prices (per child, per session).
export const PRICING = {
  session: "1 hour", // change this if your session length is different
  rides: "1 car ride + 1 bike ride included", // shown on every ticket
  tickets: [
    { id: "weekday", days: "Mon – Fri", price: 200, art: "slide" },
    { id: "weekend", days: "Sat, Sun & Holidays", price: 300, art: "trampoline" },
  ],
  notes: [
    "One parent / guardian enters free with every child",
    "Extra adult: ₹50",
    "Socks are compulsory — available at counter for ₹40",
    "Toddlers (1–3 yrs) get 20% off on weekdays",
  ],
};

// Memberships — one child, valid any day (Mon–Sun), max 2 hours per visit.
// Hour bundles: the site shows price per hour and the saving against the weekday ticket.
// `hours: null` = Unlimited monthly plan (one visit a day).
export type Membership = {
  name: string;
  hours: number | null;
  validity: string;
  price: number;
  art: "balloon" | "rocket" | "trophy" | "sun"; // cartoon at the top of the card
  tone: "teal" | "brand" | "navy" | "coral"; // accent colour of the card
  popular?: boolean;
  perks: string[];
};
export const MEMBERSHIPS: Membership[] = [
  {
    name: "Starter",
    hours: 10,
    validity: "1 month",
    price: 1499,
    art: "balloon",
    tone: "teal",
    perks: ["Any day, Mon – Sun", "Free socks on first visit"],
  },
  {
    name: "Fun Pass",
    hours: 24,
    validity: "2 months",
    price: 2999,
    art: "rocket",
    tone: "brand",
    popular: true,
    perks: ["Any day, Mon – Sun", "Free socks on first visit", "5% off birthday packages"],
  },
  {
    name: "Super Pass",
    hours: 50,
    validity: "6 months",
    price: 5999,
    art: "trophy",
    tone: "navy",
    perks: ["Any day, Mon – Sun", "Can be shared with siblings and friends", "10% off birthday packages"],
  },
  {
    name: "Unlimited",
    hours: null,
    validity: "1 month",
    price: 2499,
    art: "sun",
    tone: "coral",
    perks: ["One visit every day, up to 2 hours", "For one child (not shareable)", "Best for families nearby"],
  },
];

export const MEMBERSHIP_NOTES = [
  "All plans work any day, Monday to Sunday — maximum 2 hours per visit",
  "Hours are used per child, per visit (minimum 30 minutes)",
  "Unlimited: one visit a day for one child; not shareable",
  "Show your membership card or registered number at the counter",
  "Unused hours expire after the validity period",
];

// Extras for birthday parties.
export const BIRTHDAY_EXTRAS = {
  extraGuest: 50, // per guest beyond the package's guest limit
  extraPlate: 80, // extra evening-snack plate (Grand Party)
  others: "Theme cakes, bigger cakes, kid's name board, return gifts and other special designs — extra price applicable",
};

/*
  Birthday packages — how the prices are worked out (weekday / weekend):
    play  = kids x 2 hours x party rate (Rs 100 Mon–Fri, Rs 150 Sat–Sun)
          + decoration (2,000 / 3,500 / 4,000) + cake (Rs 500 per kg) + food
  Weekdays get bonus play time (Super 3 hrs, Grand 4 hrs) at no extra cost.
  `worth` = what the same party costs at walk-in rates (Rs 200 / Rs 300 per kid per hour) + decoration, cake and food.
*/
export const BIRTHDAY_PACKAGES = [
  {
    name: "Mini Party",
    prices: { weekday: 4999, weekend: 5999 },
    worth: { weekday: 7000, weekend: 9000 },
    kids: 10,
    guests: 25,
    extraKid: { weekday: 249, weekend: 349 },
    cakeKg: 2,
    food: { included: false, title: "Snacks & drinks", detail: "Available at extra price" },
    playTime: { weekday: "2 hours", weekend: "2 hours" },
    accent: "var(--color-sky)",
    included: [
      "Play zone for up to 10 kids",
      "Up to 25 guests in total (kids + adults)",
      "Balloon decoration + birthday banner",
      "Cake table decoration",
      "Cake up to 2 kg",
    ],
    excluded: ["Snacks & drinks (extra price)", "Return gifts (extra price)"],
  },
  {
    name: "Super Party",
    prices: { weekday: 9999, weekend: 11999 },
    worth: { weekday: 17800, weekend: 17800 },
    kids: 20,
    guests: 40,
    extraKid: { weekday: 249, weekend: 349 },
    cakeKg: 3,
    food: { included: true, title: "Welcome drinks included", detail: "For all 40 guests · snacks at extra price" },
    playTime: { weekday: "3 hours", weekend: "2 hours" },
    accent: "var(--color-grape)",
    popular: true,
    included: [
      "Play zone for up to 20 kids",
      "Up to 40 guests in total (kids + adults)",
      "Balloon decoration",
      "Cake table decoration",
      "Welcome drinks for all guests",
      "Cake up to 3 kg",
    ],
    excluded: ["Snacks (extra price)", "Return gifts (extra price)", "Photography"],
  },
  {
    name: "Grand Party",
    prices: { weekday: 14999, weekend: 17999 },
    worth: { weekday: 34100, weekend: 28100 },
    kids: 30,
    guests: 60,
    extraKid: { weekday: 249, weekend: 349 },
    cakeKg: 5,
    food: {
      included: true,
      title: "Welcome drinks + evening snacks",
      detail: "Drinks for all 60 guests · snacks (3 chaat + 3 sweets) for the 30 kids",
    },
    playTime: { weekday: "4 hours", weekend: "2 hours" },
    accent: "#fb923c",
    included: [
      "Play zone for up to 30 kids",
      "Up to 60 guests in total (kids + adults)",
      "Stage decoration with balloons",
      "Entry arch",
      "Cake table decoration",
      "Photo booth with props",
      "Welcome drinks for all guests",
      "Evening snacks for the kids (3 types of chaat, 3 types of sweets)",
      "Cake up to 5 kg",
    ],
    excluded: ["Kid's name board (extra price)", "Return gifts (extra price)", "Professional photographer", "Lunch / dinner for adults"],
  },
];

export const BIRTHDAY_POLICY = [
  "Each package includes a set number of kids for the play zone and guests in total (kids + adults); extra guests ₹50 each",
  "Extra kids in the play zone: ₹249 each Mon–Fri, ₹349 each Sat–Sun",
  "Extra evening-snack plates (Grand Party): ₹80 each",
  "Pay 50% advance to block your date; balance on the party day",
  "Advance is not refundable, but you can move the date once or pass the booking to family or friends (tell us on WhatsApp)",
  "Theme cakes, name boards and return gifts are quoted separately based on your theme",
  "Regular customers using the play area will not be restricted — they continue using their packages without affecting your birthday event",
];

// Gallery tiles (cartoon scenes).
export type GalleryItem = { alt: string; scene: SceneKey; accent?: string };
export const GALLERY: GalleryItem[] = [
  { scene: "party", accent: "var(--color-grape)", alt: "Birthday parties" },
  { scene: "ballpit", alt: "Ball pool fun" },
  { scene: "trampoline", alt: "Trampoline jumps" },
  { scene: "balloons", accent: "var(--color-sky)", alt: "Balloon setup" },
  { scene: "climb", alt: "Soft climbing" },
  { scene: "sandpit", alt: "Sandpit fun" },
]

export const TESTIMONIALS = [
  { name: "Lakshmi P.", text: "My son didn't want to go home! The staff are so caring.", rating: 5 },
  { name: "Ravi Kumar", text: "Celebrated my daughter's 5th birthday here. Decoration was beautiful and kids enjoyed a lot.", rating: 5 },
  { name: "Sowmya R.", text: "Finally a safe indoor play area in Kuppam. The ball pool is perfect for my 2-year-old.", rating: 5 },
  { name: "Mohammed A.", text: "Good pricing and very friendly. The monthly card is worth it.", rating: 4 },
];

export const FAQS = [
  { q: "What age group is the play zone for?", a: "Children aged 1 to 12 years. Kids under 3 must be accompanied by a parent or guardian." },
  { q: "Are socks compulsory?", a: "Yes, for hygiene and safety socks are compulsory for kids and adults inside the play area. You can buy them at the counter." },
  { q: "Can parents stay with the kids?", a: "Yes. One parent enters free with each child. You can also relax in the parent seating area." },
  { q: "Can we bring outside food?", a: "Outside food is not allowed in the play area. For birthday parties, you may bring your own cake." },
  { q: "How do I book a birthday party?", a: "Fill the booking form or WhatsApp us. A 50% advance confirms your date and time." },
  { q: "Do I need to book play time in advance?", a: "Walk-ins are welcome. On weekends and holidays we recommend booking a slot on WhatsApp." },
];

export const RULES = [
  "Socks compulsory",
  "No shoes in play area",
  "Adult supervision for kids under 3",
  "No food or drinks inside play area",
  "No pushing or rough play",
  "Kids who are unwell, please visit another day",
];
