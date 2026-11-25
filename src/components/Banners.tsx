// Social media banners (Instagram posts & WhatsApp / Instagram stories) built from the website cartoons.
// Every banner is drawn at its real pixel size (1080 wide) so it can be saved as an image.
import type { ReactNode } from "react";
import { BIRTHDAY_ADDONS, BIRTHDAY_OPTIONS, BUSINESS, MEMBERSHIPS, PRICING } from "@/data/site";
import { Rocket, SlideScene, SunFace, TrampolineScene, Trophy } from "./Illustrations";
import { BallPitScene, ClimbScene, HeroScene, PartyScene, SandpitScene } from "./Scenes";
import { JiSiKids } from "./Kids";
import { JiSiWordmark } from "./Wordmark";
import { Bike, Car, Cloud, Mascot, Star, WhatsAppIcon } from "./ui";

// Local copy: the one in ui.tsx is a client-module function and can't be called while rendering on the server.
const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

const BASIC = { ...BIRTHDAY_OPTIONS[0], price: BIRTHDAY_OPTIONS[0].price ?? 1999 };
const [WEEKDAY, WEEKEND] = PRICING.tickets;
const RIDES = PRICING.rides;
const MEMBER_ART = { rocket: Rocket, trophy: Trophy, sun: SunFace } as const;
const BUNTING = ["bg-sun", "bg-cherry", "bg-sky", "bg-grass", "bg-tangerine"];
const ATTRACTIONS = ["Ball pool", "Giant slides", "Trampoline", "Sandpit", "Soft climbing", "Car & bike rides"];

// CSS pixel size of each format. Print banners are saved at 3-4x this for sharp printing.
export const SIZES = {
  post: { w: 1080, h: 1080, label: "Instagram post · 1080 × 1080" },
  story: { w: 1080, h: 1920, label: "WhatsApp status / story · 1080 × 1920" },
  flex: { w: 1800, h: 900, label: "Print flex banner · 6 × 3 ft" },
  poster: { w: 1200, h: 1800, label: "Print poster · 2 × 3 ft" },
} as const;
type Size = keyof typeof SIZES;

export type BannerDef = { id: string; title: string; size: Size; render: () => ReactNode };

/* ---------- shared pieces ---------- */

function Frame({ size, still = false, className = "", children }: { size: Size; still?: boolean; className?: string; children: ReactNode }) {
  return (
    <div
      className={`${still ? "banner-static " : ""}relative overflow-hidden font-sans text-ink ${className}`}
      style={{ width: SIZES[size].w, height: SIZES[size].h }}
    >
      {children}
    </div>
  );
}

function Bunting({ top = 0, count = 18 }: { top?: number; count?: number }) {
  return (
    <div className="absolute inset-x-0 flex justify-center gap-2" style={{ top }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`shrink-0 [clip-path:polygon(0_0,100%_0,50%_100%)] ${BUNTING[i % 5]}`}
          style={{ width: 46, height: 58, transform: `translateY(${Math.round(Math.sin(i / 1.6) * 8)}px)` }}
        />
      ))}
    </div>
  );
}

function Brand({ light = false, scale = 1 }: { light?: boolean; scale?: number }) {
  return (
    <div className="flex items-center" style={{ gap: 14 * scale }}>
      <div style={{ width: 118 * scale }}>
        <JiSiKids className="h-auto w-full" />
      </div>
      <div className="leading-none">
        <div className={`font-display ${light ? "text-sun" : "text-grape"}`} style={{ fontSize: 76 * scale, lineHeight: 0.85, paddingTop: 22 * scale }}>
          <JiSiWordmark />
        </div>
        <div
          className={`font-bold uppercase ${light ? "text-white" : "text-ink/75"}`}
          style={{ fontSize: 22 * scale, letterSpacing: "0.2em" }}
        >
          Play Zone
        </div>
      </div>
    </div>
  );
}

function ContactBar({ text = "Book on WhatsApp" }: { text?: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink px-14 text-white" style={{ height: 120 }}>
      <div className="flex items-center gap-4">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-[#25d366]">
          <WhatsAppIcon className="h-10 w-10" />
        </span>
        <div className="leading-tight">
          <div className="text-[22px] font-semibold text-white/70">{text}</div>
          <div className="font-display text-[40px] leading-none">{BUSINESS.phoneDisplay}</div>
        </div>
      </div>
      <div className="text-right leading-tight">
        <div className="text-[22px] font-semibold text-white/70">Indoor soft play</div>
        <div className="font-display text-[36px] leading-none text-sun">📍 {BUSINESS.city}</div>
      </div>
    </div>
  );
}

function Chip({ children, className = "bg-white text-ink" }: { children: ReactNode; className?: string }) {
  return <span className={`rounded-full px-6 py-2.5 text-[28px] font-bold shadow-md ${className}`}>{children}</span>;
}

function Tick({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <li className={`flex items-center gap-4 text-[34px] font-semibold ${light ? "text-white" : "text-ink"}`}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-grass text-[24px] text-white">✓</span>
      {children}
    </li>
  );
}

/* ---------- banner content blocks (reused by posts and stories) ---------- */

function TicketCards({ compact = false }: { compact?: boolean }) {
  const card = (t: typeof WEEKDAY, Art: typeof SlideScene, bg: string) => (
    <div className={`sticker flex flex-1 flex-col items-center rounded-[48px] ${bg} px-6 ${compact ? "pb-5 pt-3" : "pb-8 pt-6"} text-center`}>
      <Art className={compact ? "w-[62%]" : "w-full"} />
      <div className="mt-1 text-[34px] font-bold uppercase tracking-wide text-ink/70">{t.days}</div>
      <div className="font-display leading-none text-grape" style={{ fontSize: compact ? 104 : 128 }}>
        {inr(t.price)}
      </div>
      <div className="text-[28px] font-semibold text-ink/70">per child · {PRICING.session}</div>
    </div>
  );
  return (
    <div className="flex gap-8">
      {card(WEEKDAY, SlideScene, "bg-white")}
      {card(WEEKEND, TrampolineScene, "bg-sun-soft")}
    </div>
  );
}

function RidesStrip() {
  return (
    <div className="sticker flex items-center gap-6 rounded-[40px] bg-white px-8 py-5">
      <Car className="w-36 shrink-0" />
      <Bike className="w-24 shrink-0" />
      <div className="flex-1 leading-tight">
        <div className="font-display text-[44px] leading-none text-ink">Fun rides</div>
        <div className="text-[26px] font-semibold text-ink/70">{RIDES.types} · mix &amp; match</div>
      </div>
      <div className="text-right leading-none">
        <div className="font-display text-[80px] text-cherry-dark">{inr(RIDES.price)}</div>
        <div className="text-[24px] font-bold text-ink/70">for {RIDES.rounds} rounds</div>
      </div>
    </div>
  );
}

function MemberCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex gap-6">
      {MEMBERSHIPS.map((m) => {
        const Art = MEMBER_ART[m.art];
        return (
          <div
            key={m.name}
            className={`sticker relative flex flex-1 flex-col items-center rounded-[44px] bg-white px-5 pb-7 pt-5 text-center ${
              m.popular ? "ring-[10px] ring-sun" : ""
            }`}
          >
            {m.popular && (
              <span className="absolute -top-7 rotate-[-4deg] rounded-full bg-cherry px-5 py-1.5 text-[24px] font-extrabold uppercase text-white shadow-md">
                ⭐ Best value
              </span>
            )}
            <Art className={compact ? "w-24" : "w-36"} />
            <div className="font-display text-[42px] leading-none text-ink">{m.name}</div>
            <div className={`mt-3 font-display leading-none text-grape ${compact ? "text-[66px]" : "text-[78px]"}`}>{inr(m.price)}</div>
            <div className="mt-3 rounded-full bg-lilac px-4 py-1.5 text-[26px] font-bold text-ink">
              {m.hours ? `${m.hours} hours` : "1 hour every day"}
            </div>
            <div className="mt-2 text-[24px] font-semibold text-ink/65">
              {m.hours ? `Valid ${m.validity}` : `${m.validity} · one child`}
            </div>
            {!m.hours && (
              <div className="mt-2 rounded-full bg-sun px-4 py-1 text-[24px] font-extrabold text-ink">
                Only {inr(Math.round(m.price / 30))} / day
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function BirthdayList({ light = false }: { light?: boolean }) {
  return (
    <ul className="space-y-4">
      {BASIC.included.map((it) => (
        <Tick key={it} light={light}>
          {it}
        </Tick>
      ))}
    </ul>
  );
}

const ADDON_TEXT = BIRTHDAY_ADDONS.map((a) => `${a.icon} ${a.name}`).join("  ·  ");

/* ---------- print banners for schools & markets ----------
   Modern poster style: one coral accent, starburst price stickers, attraction icons from the website.
   Cartoons are frozen (Frame `still`) so nothing moves between preview and print. */

const CORAL = "var(--color-cherry)";

// Starburst sticker with text inside.
function Burst({ size, color, rotate = 0, spikes = 20, children }: { size: number; color: string; rotate?: number; spikes?: number; children: ReactNode }) {
  const pts = Array.from({ length: spikes * 2 }, (_, i) => {
    const r = i % 2 ? 43 : 50;
    const a = (Math.PI * i) / spikes;
    return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
  return (
    <div className="relative shrink-0" style={{ width: size, height: size, transform: `rotate(${rotate}deg)` }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full drop-shadow-[0_10px_14px_rgb(18_53_91/0.35)]">
        <polygon points={pts} fill={color} stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center text-center leading-none" style={{ maxWidth: size * 0.7 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function SunRays() {
  return (
    <div
      className="absolute inset-0 opacity-60"
      style={{ background: "repeating-conic-gradient(from 0deg at 30% 30%, rgb(255 255 255 / 0.09) 0deg 7deg, transparent 7deg 14deg)" }}
    />
  );
}

function KidsLogo({ kidsW, jisi }: { kidsW: number; jisi: number }) {
  return (
    <div className="flex items-end gap-3">
      <div style={{ width: kidsW }}>
        <JiSiKids className="h-auto w-full" />
      </div>
      <div className="pb-2 leading-none">
        <div className="font-display text-sun [text-shadow:0_6px_0_rgb(18_53_91/0.35)]" style={{ fontSize: jisi, lineHeight: 0.8 }}>
          <JiSiWordmark />
        </div>
        <div className="mt-2 font-extrabold uppercase text-white" style={{ fontSize: jisi * 0.27, letterSpacing: "0.2em" }}>
          Play Zone
        </div>
      </div>
    </div>
  );
}

// Round icons of the attractions (cartoons from the website).
const ICONS = [
  { label: "Ball pool", Art: BallPitScene },
  { label: "Slides", Art: SlideScene },
  { label: "Trampoline", Art: TrampolineScene },
  { label: "Sandpit", Art: SandpitScene },
  { label: "Soft climbing", Art: ClimbScene },
];

function Attractions({ size, gap, labelSize }: { size: number; gap: number; labelSize: number }) {
  return (
    <div className="flex" style={{ gap }}>
      {ICONS.map(({ label, Art }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="grid place-items-center overflow-hidden rounded-full border-[6px] border-white bg-white shadow-xl" style={{ width: size, height: size }}>
            <Art className="w-[125%] max-w-none" />
          </div>
          <div className="mt-2 font-display leading-none text-white" style={{ fontSize: labelSize }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

function PriceBurst({ t, color, size, rotate }: { t: typeof WEEKDAY; color: string; size: number; rotate: number }) {
  const k = size / 320;
  return (
    <Burst size={size} color={color} rotate={rotate}>
      <div className="font-bold uppercase text-ink" style={{ fontSize: 30 * k }}>
        {t.days}
      </div>
      <div className="font-display text-ink" style={{ fontSize: 112 * k, lineHeight: 0.95 }}>
        {inr(t.price)}
      </div>
      <div className="font-bold text-ink/80" style={{ fontSize: 24 * k }}>
        per child / hour
      </div>
    </Burst>
  );
}

function BirthdayBurst({ size, rotate }: { size: number; rotate: number }) {
  const k = size / 380;
  return (
    <Burst size={size} color={CORAL} rotate={rotate} spikes={24}>
      <div className="font-display text-white" style={{ fontSize: 38 * k }}>
        🎂 Birthday
        <br />
        party just
      </div>
      <div className="my-1 font-display text-sun [text-shadow:0_5px_0_rgb(18_53_91/0.35)]" style={{ fontSize: 124 * k, lineHeight: 0.95 }}>
        {inr(BASIC.price)}
      </div>
      <div className="font-bold text-white" style={{ fontSize: 23 * k }}>
        2 hrs + decoration
        <br />
        up to 20 guests
      </div>
    </Burst>
  );
}

// Rides / membership lines with a cartoon on the left.
function Feature({ art, title, sub, size = 1 }: { art: ReactNode; title: ReactNode; sub: string; size?: number }) {
  return (
    <div className="flex items-center rounded-full bg-white shadow-xl" style={{ gap: 14 * size, padding: `${10 * size}px ${28 * size}px ${10 * size}px ${14 * size}px` }}>
      <div className="grid shrink-0 place-items-center rounded-full bg-lilac" style={{ width: 84 * size, height: 84 * size }}>
        {art}
      </div>
      <div className="leading-tight">
        <div className="whitespace-nowrap font-display text-ink" style={{ fontSize: 36 * size }}>
          {title}
        </div>
        <div className="whitespace-nowrap font-semibold text-ink/65" style={{ fontSize: 22 * size }}>
          {sub}
        </div>
      </div>
    </div>
  );
}

const RidesFeature = ({ size }: { size?: number }) => (
  <Feature
    size={size}
    art={<Car className="w-[80%]" color={CORAL} />}
    title={
      <>
        Rides · {RIDES.rounds} rounds <span className="text-[color:var(--color-cherry)]">{inr(RIDES.price)}</span>
      </>
    }
    sub="Car, bike or scooty"
  />
);
const MemberFeature = ({ size }: { size?: number }) => (
  <Feature size={size} art={<Trophy className="w-[78%]" />} title="Membership available" sub={`Fun Pass · Super Pass · Daily Play Pass`} />
);

function QrMini({ size, light = false }: { size: number; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-2xl bg-white p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/qr-location.svg" alt="QR code for our location" style={{ width: size, height: size }} />
      </div>
      <div className={`font-display leading-tight ${light ? "text-white" : "text-ink"}`} style={{ fontSize: size * 0.2 }}>
        📍 Scan for
        <br />
        location
      </div>
    </div>
  );
}

function Footer({ h, qr, phone }: { h: number; qr: number; phone: number }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink px-12 text-white" style={{ height: h }}>
      <div>
        <div className="flex items-center gap-3">
          <span className="grid shrink-0 place-items-center rounded-full bg-[#25d366]" style={{ width: phone * 1.25, height: phone * 1.25 }}>
            <WhatsAppIcon className="h-3/5 w-3/5" />
          </span>
          <span className="font-display leading-none" style={{ fontSize: phone }}>
            {BUSINESS.phoneDisplay}
          </span>
        </div>
        <div className="mt-2 font-semibold text-white/75" style={{ fontSize: phone * 0.55 }}>
          📍 {BUSINESS.city} · Open all 7 days · 🧦 Socks compulsory for kids
        </div>
      </div>
      <QrMini size={qr} light />
    </div>
  );
}

const PRINT_BG = "bg-gradient-to-b from-[#0f766e] via-[#11998e] to-[#14b8a6]";

const PRINT_BANNERS: BannerDef[] = [
  {
    id: "print-flex",
    title: "Combined · print flex banner",
    size: "flex",
    render: () => (
      <Frame size="flex" still className={PRINT_BG}>
        <SunRays />
        <Bunting top={0} count={32} />

        {/* left: brand, attractions, prices */}
        <div className="absolute left-12 top-[78px]">
          <div className="flex items-end gap-12">
            <KidsLogo kidsW={210} jisi={140} />
            <div className="pb-4 font-display text-[72px] leading-[0.95] text-white">
              Indoor Soft Play
              <br />
              for Kids
            </div>
          </div>
          <div className="mt-7">
            <Attractions size={150} gap={34} labelSize={28} />
          </div>
          <div className="mt-6 flex items-center gap-8">
            <PriceBurst t={WEEKDAY} color="var(--color-sun)" size={230} rotate={-6} />
            <PriceBurst t={WEEKEND} color="#ffffff" size={230} rotate={5} />
            <div className="flex flex-col gap-4">
              <RidesFeature size={0.9} />
              <MemberFeature size={0.9} />
            </div>
          </div>
        </div>

        {/* right: birthday */}
        <div className="absolute right-12 top-[80px] flex w-[560px] flex-col items-center">
          <BirthdayBurst size={400} rotate={-4} />
          <div className="-mt-6 w-[420px]">
            <PartyScene className="h-auto w-full" accent={CORAL} transparent />
          </div>
        </div>

        <Footer h={130} qr={104} phone={44} />
      </Frame>
    ),
  },
  {
    id: "print-poster",
    title: "Combined · print poster",
    size: "poster",
    render: () => (
      <Frame size="poster" still className={PRINT_BG}>
        <SunRays />
        <Bunting top={0} count={22} />
        <Cloud className="absolute left-6 top-[150px] w-32 opacity-90" color="#ffffff" />
        <Cloud className="absolute right-6 top-[200px] w-28 opacity-80" color="#ffffff" />

        <div className="absolute inset-x-0 top-[84px] flex flex-col items-center text-center">
          <KidsLogo kidsW={240} jisi={150} />
          <div className="mt-4 font-display text-[80px] leading-none text-white">Indoor Soft Play for Kids</div>
          <div className="mt-8">
            <Attractions size={170} gap={28} labelSize={28} />
          </div>
        </div>

        <div className="absolute inset-x-0 top-[690px] flex justify-center gap-10">
          <PriceBurst t={WEEKDAY} color="var(--color-sun)" size={330} rotate={-6} />
          <PriceBurst t={WEEKEND} color="#ffffff" size={330} rotate={5} />
        </div>

        <div className="absolute inset-x-10 top-[1040px] flex items-center justify-between">
          <BirthdayBurst size={400} rotate={-4} />
          <div className="w-[560px]">
            <PartyScene className="h-auto w-full" accent={CORAL} transparent />
          </div>
        </div>

        <div className="absolute inset-x-0 top-[1460px] flex justify-center gap-5">
          <RidesFeature size={0.78} />
          <MemberFeature size={0.78} />
        </div>
        <Footer h={190} qr={130} phone={48} />
      </Frame>
    ),
  },
];

/* ---------- the banners ---------- */

export const BANNERS: BannerDef[] = [
  ...PRINT_BANNERS,
  {
    id: "opening-post",
    title: "Opening Soon · Instagram post",
    size: "post",
    render: () => (
      <Frame size="post" className="bg-gradient-to-b from-grape via-[var(--color-sky)] to-[var(--color-sky-soft)]">
        <div className="absolute inset-0 bg-confetti opacity-50" />
        <Bunting top={0} count={20} />
        <Cloud className="absolute left-10 top-48 w-40 opacity-80" color="#ffffff" />
        <Cloud className="absolute right-12 top-64 w-32 opacity-70" color="#ffffff" />
        <Star className="absolute left-24 top-[420px] w-14" />
        <Star className="absolute right-28 top-[150px] w-10" color="var(--color-cherry)" />
        <div className="relative flex flex-col items-center pt-24 text-center text-white">
          <Brand light scale={1.15} />
          <div className="mt-6 rotate-[-3deg] rounded-full bg-sun px-10 py-2 font-display text-[44px] text-ink shadow-xl">
            🎈 Coming to {BUSINESS.city}
          </div>
          <h1 className="mt-4 font-display text-[150px] leading-[0.9] [text-shadow:0_6px_24px_rgb(15_118_110/0.55)]">
            Opening
            <br />
            Soon!
          </h1>
          <p className="mt-4 text-[34px] font-semibold [text-shadow:0_2px_10px_rgb(15_118_110/0.6)]">
            Indoor soft play zone for kids aged 1–12
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-[120px] h-[300px]">
          <HeroScene className="absolute inset-0 h-full w-full" />
        </div>
        <ContactBar text="Stay tuned · WhatsApp us" />
      </Frame>
    ),
  },
  {
    id: "opening-story",
    title: "Opening Soon · WhatsApp status / Instagram story",
    size: "story",
    render: () => (
      <Frame size="story" className="bg-gradient-to-b from-grape via-[var(--color-sky)] to-[var(--color-sky-soft)]">
        <div className="absolute inset-0 bg-confetti opacity-50" />
        <Bunting top={0} count={20} />
        <Cloud className="absolute left-10 top-60 w-48 opacity-80" color="#ffffff" />
        <Cloud className="absolute right-10 top-[520px] w-40 opacity-70" color="#ffffff" />
        <Star className="absolute left-20 top-[640px] w-16" />
        <Star className="absolute right-24 top-[200px] w-12" color="var(--color-cherry)" />
        <div className="relative flex flex-col items-center pt-36 text-center text-white">
          <Brand light scale={1.5} />
          <div className="mt-10 rotate-[-3deg] rounded-full bg-sun px-12 py-3 font-display text-[54px] text-ink shadow-xl">
            🎈 Coming to {BUSINESS.city}
          </div>
          <h1 className="mt-8 font-display text-[190px] leading-[0.88] [text-shadow:0_6px_24px_rgb(15_118_110/0.55)]">
            Opening
            <br />
            Soon!
          </h1>
          <p className="mt-6 text-[42px] font-semibold [text-shadow:0_2px_10px_rgb(15_118_110/0.6)]">
            Indoor soft play zone for kids aged 1–12
          </p>
          <div className="mt-10 flex max-w-[940px] flex-wrap justify-center gap-4">
            {ATTRACTIONS.map((a) => (
              <Chip key={a}>{a}</Chip>
            ))}
          </div>
          <div className="mt-10 flex gap-5">
            <Chip className="bg-cherry text-white">🎟️ Play from {inr(WEEKDAY.price)}</Chip>
            <Chip className="bg-sun text-ink">🎂 Birthdays at {inr(BASIC.price)}</Chip>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[120px] h-[420px]">
          <HeroScene className="absolute inset-0 h-full w-full" />
        </div>
        <ContactBar text="Stay tuned · WhatsApp us" />
      </Frame>
    ),
  },
  {
    id: "tickets-post",
    title: "Play Time Tickets · Instagram post",
    size: "post",
    render: () => (
      <Frame size="post" className="bg-sky-soft">
        <div className="absolute inset-0 bg-confetti opacity-40" />
        <div className="relative px-14 pt-12">
          <div className="flex items-center justify-between">
            <Brand scale={0.9} />
            <span className="rotate-3 rounded-full bg-cherry px-7 py-2 font-display text-[36px] text-white shadow-lg">Open all 7 days</span>
          </div>
          <h1 className="mt-4 font-display text-[84px] leading-none text-ink">
            Play Time <span className="text-grape">Tickets</span>
          </h1>
          <div className="mt-5">
            <TicketCards compact />
          </div>
          <div className="mt-5">
            <RidesStrip />
          </div>
          <p className="mt-4 text-center text-[26px] font-semibold text-ink/75">
            🧦 Socks compulsory for kids · 👶 Toddlers (1–3 yrs) 20% off on weekdays
          </p>
        </div>
        <ContactBar />
      </Frame>
    ),
  },
  {
    id: "membership-post",
    title: "Membership Cards · Instagram post",
    size: "post",
    render: () => (
      <Frame size="post" className="bg-grape">
        <div className="absolute inset-0 bg-confetti opacity-30" />
        <Star className="absolute right-16 top-16 w-14" />
        <div className="relative px-12 pt-12 text-white">
          <Brand light scale={0.9} />
          <h1 className="mt-6 font-display text-[100px] leading-[0.95]">
            Play More, <span className="text-sun">Pay Less!</span>
          </h1>
          <p className="mt-2 text-[34px] font-semibold text-white/90">Membership cards · use any day, Monday to Sunday</p>
          <div className="mt-12">
            <MemberCards />
          </div>
          <p className="mt-8 text-center text-[30px] font-bold text-sun">🧦 Free socks on your first visit with every card</p>
        </div>
        <ContactBar text="Get your card on WhatsApp" />
      </Frame>
    ),
  },
  {
    id: "birthday-post",
    title: `Birthday at ${inr(BASIC.price)} · Instagram post`,
    size: "post",
    render: () => (
      <Frame size="post" className="bg-pink-soft">
        <div className="absolute inset-0 bg-confetti opacity-40" />
        <Bunting top={0} count={20} />
        <div className="relative flex px-12 pt-24">
          <div className="w-[560px]">
            <Brand scale={0.85} />
            <div className="mt-6 inline-block rotate-[-3deg] rounded-full bg-grape px-6 py-2 font-display text-[34px] text-white">
              🎉 Birthday parties
            </div>
            <h1 className="mt-4 font-display text-[78px] leading-[0.95] text-ink">Celebrate your birthday at just</h1>
            <div className="font-display text-[190px] leading-[0.85] text-cherry-dark">{inr(BASIC.price)}</div>
          </div>
          <PartyScene className="-mr-6 mt-10 w-[480px] flex-1" accent="var(--color-grape)" />
        </div>
        <div className="relative mx-12 mt-6 rounded-[44px] bg-white px-10 py-7 shadow-xl">
          <BirthdayList />
        </div>
        <p className="relative mt-5 text-center text-[26px] font-bold text-ink/80">
          🏰 Full play area booking also available · Add-ons: cake, snacks, return gifts & more
        </p>
        <ContactBar text="Book your date & time slot" />
      </Frame>
    ),
  },
  {
    id: "birthday-story",
    title: `Birthday at ${inr(BASIC.price)} · WhatsApp status / Instagram story`,
    size: "story",
    render: () => (
      <Frame size="story" className="bg-pink-soft">
        <div className="absolute inset-0 bg-confetti opacity-40" />
        <Bunting top={0} count={20} />
        <Mascot className="absolute left-10 top-[720px] w-24" color="var(--color-sun)" />
        <Mascot className="absolute right-10 top-[640px] w-20" color="var(--color-grape)" />
        <div className="relative flex flex-col items-center pt-32 text-center">
          <Brand scale={1.2} />
          <div className="mt-10 rotate-[-3deg] rounded-full bg-grape px-10 py-3 font-display text-[48px] text-white">🎉 Birthday parties</div>
          <h1 className="mt-6 font-display text-[100px] leading-[0.95] text-ink">
            Celebrate your
            <br />
            birthday at just
          </h1>
          <div className="font-display text-[260px] leading-[0.85] text-cherry-dark">{inr(BASIC.price)}</div>
        </div>
        <PartyScene className="relative mx-auto mt-2 w-[700px]" accent="var(--color-grape)" />
        <div className="relative mx-14 mt-2 rounded-[48px] bg-white px-12 py-9 shadow-xl">
          <BirthdayList />
          <div className="mt-6 border-t-2 border-dashed border-pink-soft pt-5 text-[30px] font-semibold text-ink/80">
            <b className="text-ink">Add-ons:</b> {ADDON_TEXT}
          </div>
        </div>
        <p className="relative mt-6 text-center text-[32px] font-bold text-grape">🏰 Full play area booking also available</p>
        <ContactBar text="Book your date & time slot" />
      </Frame>
    ),
  },
  {
    id: "all-story",
    title: "Everything in one · WhatsApp status / Instagram story",
    size: "story",
    render: () => (
      <Frame size="story" className="bg-gradient-to-b from-grape via-[var(--color-sky)] to-[var(--color-sky-soft)]">
        <div className="absolute inset-0 bg-confetti opacity-40" />
        <Bunting top={0} count={20} />
        <div className="relative px-12 pt-24">
          <div className="flex items-center justify-between">
            <Brand light scale={1.05} />
            <span className="rotate-3 rounded-full bg-sun px-7 py-2 font-display text-[36px] text-ink shadow-lg">Open all 7 days</span>
          </div>
          <h1 className="mt-4 font-display text-[84px] leading-[0.95] text-white [text-shadow:0_4px_18px_rgb(15_118_110/0.5)]">
            Jump, Slide <span className="text-sun">&amp; Play!</span>
          </h1>

          <h2 className="mt-4 font-display text-[48px] text-white">🎟️ Play time tickets</h2>
          <div className="mt-2">
            <TicketCards compact />
          </div>
          <div className="mt-6">
            <RidesStrip />
          </div>

          <h2 className="mt-5 font-display text-[48px] text-ink">💳 Membership cards</h2>
          <div className="mt-8">
            <MemberCards compact />
          </div>

          <div className="sticker mt-7 flex items-center gap-6 rounded-[44px] bg-pink-soft px-8 py-5">
            <PartyScene className="w-64 shrink-0" accent="var(--color-grape)" />
            <div className="leading-tight">
              <div className="text-[30px] font-bold uppercase text-ink/70">🎂 Birthday parties at just</div>
              <div className="font-display text-[120px] leading-none text-cherry-dark">{inr(BASIC.price)}</div>
              <div className="text-[26px] font-semibold text-ink/75">Party area 2 hrs with decoration · up to 20 guests</div>
            </div>
          </div>
        </div>
        <ContactBar />
      </Frame>
    ),
  },
  {
    id: "rides-post",
    title: "Fun Rides · Instagram post",
    size: "post",
    render: () => (
      <Frame size="post" className="bg-sun-soft">
        <div className="absolute inset-0 bg-confetti opacity-40" />
        <div className="relative flex flex-col items-center px-12 pt-14 text-center">
          <Brand scale={0.95} />
          <h1 className="mt-8 font-display text-[120px] leading-[0.9] text-ink">
            Vroom <span className="text-cherry-dark">Vroom!</span>
          </h1>
          <p className="mt-3 text-[38px] font-semibold text-ink/80">{RIDES.types} rides · mix &amp; match</p>
          <div className="mt-12 flex items-end justify-center gap-12">
            <Car className="w-[400px]" />
            <Bike className="w-[260px]" color="var(--color-grape)" />
          </div>
          <div className="mt-10 rounded-[48px] bg-grape px-14 py-5 text-white shadow-xl">
            <span className="font-display text-[150px] leading-none text-sun">{inr(RIDES.price)}</span>
            <span className="ml-4 font-display text-[54px]">for {RIDES.rounds} rounds</span>
          </div>
          <p className="mt-6 text-[30px] font-bold text-ink/70">Rides are sold separately at the counter</p>
        </div>
        <ContactBar />
      </Frame>
    ),
  },
];
