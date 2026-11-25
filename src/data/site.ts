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
    text: "Decoration, play time & party area — all in one place.",
  },
  {
    title: "Safe, Clean, Soft & Fun",
    text: "Soft padded play areas made for happy little explorers.",
  },
];

// "Why choose us" cards shown after the top banner. `art` picks a cartoon: sun, rocket, chair or cake.
export const WHY_US = [
  { art: "sun", bg: "bg-sun-soft", title: "Safe & Soft Play", text: "Fully padded play areas, caring staff and CCTV, so you can relax." },
  { art: "rocket", bg: "bg-lilac", title: "Non-Stop Fun", text: "Slides, ball pool, trampoline, sandpit plus car, bike & scooty rides!" },
  { art: "chair", bg: "bg-sky-soft", title: "Parents Relax Too", text: "Comfy seating right next to the play area to watch your little ones." },
  { art: "cake", bg: "bg-pink-soft", title: "Parties Made Easy", text: "Play zone, party area and decoration in one booking." },
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
  // Rides are not in the ticket: sold separately, any mix of the ride types.
  rides: { price: 50, rounds: 2, types: "Car, bike or scooty" },
  tickets: [
    { id: "weekday", days: "Mon – Fri", price: 200, art: "slide" },
    { id: "weekend", days: "Sat & Sun", price: 300, art: "trampoline" },
  ],
  notes: [
    "Socks are compulsory — bring your own or buy them at the counter (₹40)",
    "Kids under 3 must wear a diaper. Diapers available at the counter",
    "Toddlers (1–3 yrs) get 20% off on weekdays",
  ],
};

// Memberships — valid any day (Mon–Sun). The site shows only the member price
// (per hour, or per day for the Daily Play Pass).
// `hours: null` = Daily Play Pass: 1 visit a day, 1 hour, for one child, 30 days.
export type Membership = {
  name: string;
  hours: number | null;
  validity: string;
  price: number;
  art: "rocket" | "trophy" | "sun"; // cartoon at the top of the card
  tone: "brand" | "navy" | "coral"; // accent colour of the card
  popular?: boolean;
  perks: string[];
};
export const MEMBERSHIPS: Membership[] = [
  {
    name: "Fun Pass",
    hours: 10,
    validity: "6 months",
    price: 2000,
    art: "rocket",
    tone: "brand",
    perks: ["Use your hours any day, Mon – Sun", "Free socks on first visit"],
  },
  {
    name: "Super Pass",
    hours: 15,
    validity: "1 year",
    price: 2500,
    art: "trophy",
    tone: "navy",
    popular: true,
    perks: ["Use your hours any day, Mon – Sun", "Free socks on first visit"],
  },
  {
    name: "Daily Play Pass",
    hours: null,
    validity: "1 month",
    price: 3000,
    art: "sun",
    tone: "coral",
    perks: ["1 visit every day, 1 hour each", "For one child only (not shareable)", "Free socks on first visit"],
  },
];

export const MEMBERSHIP_NOTES = [
  "Fun Pass & Super Pass: use your hours any day, Monday to Sunday",
  "Daily Play Pass: one 1-hour visit a day, for one child only; not shareable",
  "Free socks on your first visit with every plan",
  "Show your membership card or registered number at the counter",
  "Unused hours expire after the validity period",
];

// Birthday options: two simple choices, plus add-ons.
export type BirthdayOption = {
  name: string;
  price: number | null; // null = price shared on enquiry
  tag: string;
  included: string[];
  excluded: string[];
};
export const BIRTHDAY_OPTIONS: BirthdayOption[] = [
  {
    name: "Basic Package",
    price: 1999,
    tag: "🎉 Budget birthday",
    included: [
      "Party area for 2 hours with decoration",
      "Birthday kid plays free in the play zone for 2 hours",
      "Up to 20 guests in total (kids + adults)",
    ],
    excluded: ["Play zone for guests (normal ticket price)", "Cake, snacks & return gifts (add-ons below)"],
  },
  {
    name: "Full Play Area",
    price: null,
    tag: "🏰 Whole play zone",
    included: [
      "The full play area booked just for your party",
      "Party area with decoration",
      "All your little guests play together",
      "25 to 30 guests in total (kids + adults)",
    ],
    excluded: ["Cake, snacks & return gifts (add-ons below)"],
  },
];
// The cheapest option, used for "from just ₹1,999" labels.
export const PARTY_AREA_OFFER = BIRTHDAY_OPTIONS[0] as BirthdayOption & { price: number };

// Add-ons for any birthday party. Prices are shared on enquiry.
export const BIRTHDAY_ADDONS = [
  { icon: "🎂", name: "Cake", detail: "Price per kg · choose your flavour" },
  { icon: "🍟", name: "Snacks", detail: "For kids & guests" },
  { icon: "🎁", name: "Return gifts", detail: "For every little guest" },
  { icon: "🎊", name: "Party poppers", detail: "For the cake moment" },
  { icon: "🔢", name: "Birthday number", detail: "Number candle or balloon" },
];

export const BIRTHDAY_POLICY = [
  "Basic Package: up to 20 guests · Full Play Area: 25 to 30 guests (kids + adults in total)",
  "Pay 50% advance to block the date and time slot for your celebration; balance on the party day",
  "Advance is not refundable, but you can move the date once or pass the booking to family or friends (tell us on WhatsApp)",
  "Cake, snacks and other add-ons are quoted separately — message or call us",
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
  { q: "What age group is the play zone for?", a: "Children aged 1 to 12 years. Kids under 3 must wear a diaper and be accompanied by a parent or guardian." },
  { q: "Are socks compulsory?", a: "Yes, socks are compulsory for kids inside the play area, for hygiene and safety. Bring your own or buy them at the counter." },
  { q: "Can we bring outside food?", a: "Outside food is not allowed in the play area. For birthday parties, you may bring your own cake." },
  { q: "How do I book a birthday party?", a: "Fill the booking form or WhatsApp us. A 50% advance confirms your date and time." },
  { q: "Do I need to book play time in advance?", a: "Yes, advance booking is compulsory. Book your date and time slot on WhatsApp or call us before you come." },
];

export const RULES = [
  "Socks compulsory",
  "Diapers compulsory for kids under 3",
  "No shoes in play area",
  "Adult supervision for kids under 3",
  "No food or drinks inside play area",
  "No pushing or rough play",
  "Kids who are unwell, please visit another day",
];
