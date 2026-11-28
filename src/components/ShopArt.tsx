// Original cartoon art for the shop (toys, books, gifts, party things, socks). Plain SVG, 120 × 120.

const INK = "var(--color-ink)";
const S = { stroke: INK, strokeWidth: 2.5, strokeLinejoin: "round" as const };

export function TeddyBear({ className = "" }: { className?: string }) {
  const fur = "#c98a55";
  const light = "#f3d1a8";
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {/* ears */}
      <circle cx="36" cy="28" r="12" fill={fur} {...S} />
      <circle cx="84" cy="28" r="12" fill={fur} {...S} />
      <circle cx="36" cy="28" r="6" fill={light} />
      <circle cx="84" cy="28" r="6" fill={light} />
      {/* body + arms + feet */}
      <ellipse cx="60" cy="86" rx="28" ry="26" fill={fur} {...S} />
      <ellipse cx="60" cy="90" rx="15" ry="14" fill={light} />
      <ellipse cx="30" cy="78" rx="9" ry="13" fill={fur} {...S} transform="rotate(25 30 78)" />
      <ellipse cx="90" cy="78" rx="9" ry="13" fill={fur} {...S} transform="rotate(-25 90 78)" />
      <ellipse cx="42" cy="108" rx="12" ry="8" fill={fur} {...S} />
      <ellipse cx="78" cy="108" rx="12" ry="8" fill={fur} {...S} />
      {/* head */}
      <circle cx="60" cy="44" r="25" fill={fur} {...S} />
      <ellipse cx="60" cy="53" rx="11" ry="8" fill={light} />
      <ellipse cx="60" cy="49" rx="4.5" ry="3.2" fill={INK} />
      <path d="M55 56 Q60 60 65 56" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="40" r="3.2" fill={INK} />
      <circle cx="70" cy="40" r="3.2" fill={INK} />
      <circle cx="51" cy="39" r="1" fill="#fff" />
      <circle cx="71" cy="39" r="1" fill="#fff" />
      {/* bow tie */}
      <path d="M48 68 L60 73 L48 78 Z M72 68 L60 73 L72 78 Z" fill="var(--color-cherry)" {...S} />
      <circle cx="60" cy="73" r="3.5" fill="var(--color-sun)" stroke={INK} strokeWidth="2" />
    </svg>
  );
}

export function StoryBooks({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {/* stack */}
      <rect x="18" y="86" width="84" height="16" rx="3" fill="var(--color-grape)" {...S} />
      <rect x="22" y="90" width="70" height="8" rx="2" fill="#fff" opacity=".85" />
      <rect x="24" y="70" width="76" height="16" rx="3" fill="var(--color-sun)" {...S} />
      <rect x="28" y="74" width="62" height="8" rx="2" fill="#fff" opacity=".85" />
      {/* open book on top */}
      <path d="M60 64 Q40 52 20 58 L20 26 Q40 20 60 32 Z" fill="#fff" {...S} />
      <path d="M60 64 Q80 52 100 58 L100 26 Q80 20 60 32 Z" fill="#fff" {...S} />
      <path d="M60 32 V64" stroke={INK} strokeWidth="2.5" />
      <path d="M28 34 Q40 31 52 37 M28 42 Q40 39 52 45 M28 50 Q38 48 46 51" stroke="var(--color-sky)" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* little star picture on the right page */}
      <path d="M80 34 l3.5 7 7.5 1 -5.5 5 1.5 7.5 -7 -3.8 -7 3.8 1.5 -7.5 -5.5 -5 7.5 -1 Z" fill="var(--color-cherry)" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      {/* sparkles */}
      <path d="M12 16 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="var(--color-sun)" />
      <path d="M106 12 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5 Z" fill="var(--color-sun)" />
    </svg>
  );
}

export function GiftBox({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {/* bow */}
      <path d="M60 36 Q40 10 30 26 Q26 38 60 36 Z" fill="var(--color-cherry)" {...S} />
      <path d="M60 36 Q80 10 90 26 Q94 38 60 36 Z" fill="var(--color-cherry)" {...S} />
      {/* box */}
      <rect x="22" y="52" width="76" height="56" rx="6" fill="var(--color-sky)" {...S} />
      <rect x="16" y="36" width="88" height="20" rx="5" fill="var(--color-brand-200)" {...S} />
      <rect x="52" y="36" width="16" height="72" fill="var(--color-sun)" {...S} />
      {/* dots */}
      {[[34, 70], [84, 72], [34, 94], [84, 96], [44, 82], [76, 84]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="#fff" opacity=".85" />
      ))}
      <circle cx="60" cy="36" r="6" fill="var(--color-cherry)" {...S} />
    </svg>
  );
}

export function ReturnGifts({ className = "" }: { className?: string }) {
  const bag = (x: number, color: string, tilt: number) => (
    <g transform={`rotate(${tilt} ${x + 20} 90)`}>
      <path d={`M${x + 10} 58 Q${x + 20} 40 ${x + 30} 58`} fill="none" stroke={INK} strokeWidth="3" />
      <path d={`M${x} 58 H${x + 40} L${x + 36} 108 H${x + 4} Z`} fill={color} {...S} />
      <circle cx={x + 20} cy="80" r="7" fill="#fff" opacity=".9" />
      <path d={`M${x + 20} 75 l1.8 3.6 4 .6 -2.9 2.8 .7 4 -3.6 -1.9 -3.6 1.9 .7 -4 -2.9 -2.8 4 -.6 Z`} fill="var(--color-sun)" />
    </g>
  );
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {bag(8, "var(--color-cherry)", -8)}
      {bag(72, "var(--color-grape)", 8)}
      {bag(40, "var(--color-sun)", 0)}
      {/* tissue peeking out of the middle bag */}
      <path d="M48 58 L54 46 L60 56 L66 44 L72 58 Z" fill="#fff" {...S} />
    </svg>
  );
}

export function PartyKit({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {/* balloons */}
      <path d="M30 62 Q34 86 44 108 M52 52 Q50 80 50 108" fill="none" stroke={INK} strokeWidth="1.6" />
      <ellipse cx="28" cy="40" rx="15" ry="19" fill="var(--color-cherry)" {...S} />
      <ellipse cx="52" cy="30" rx="15" ry="19" fill="var(--color-sky)" {...S} />
      <ellipse cx="23" cy="33" rx="4" ry="6" fill="#fff" opacity=".6" />
      <ellipse cx="47" cy="23" rx="4" ry="6" fill="#fff" opacity=".6" />
      {/* party hat */}
      <path d="M84 30 L108 98 H60 Z" fill="var(--color-sun)" {...S} />
      <path d="M75 56 L95 60 M68 76 L102 82" stroke="var(--color-cherry)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="84" cy="27" r="7" fill="var(--color-cherry)" {...S} />
      <path d="M58 98 H110" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {/* confetti */}
      {[[100, 18, "var(--color-sky)"], [112, 42, "var(--color-cherry)"], [70, 14, "#34c78a"], [12, 96, "var(--color-sun)"]].map(([x, y, c]) => (
        <rect key={`${x}-${y}`} x={x as number} y={y as number} width="6" height="6" rx="1.5" fill={c as string} transform={`rotate(25 ${x} ${y})`} />
      ))}
    </svg>
  );
}

export function KidsSocks({ className = "" }: { className?: string }) {
  const sock = (dx: number, color: string, tilt: number) => (
    <g transform={`translate(${dx} 0) rotate(${tilt} 40 60)`}>
      {/* short ankle socks: small cuff, mostly foot */}
      <path d="M30 46 H56 V62 Q56 68 64 72 L80 80 Q94 87 87 99 Q80 109 64 103 L38 92 Q30 88 30 78 Z" fill={color} {...S} />
      <rect x="30" y="46" width="26" height="10" fill="#fff" {...S} />
      <path d="M66 100 Q74 91 83 97" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {sock(-14, "var(--color-sky)", -6)}
      {sock(20, "var(--color-cherry)", 6)}
    </svg>
  );
}

export const SHOP_ART = {
  teddy: TeddyBear,
  books: StoryBooks,
  gift: GiftBox,
  returnGifts: ReturnGifts,
  party: PartyKit,
  socks: KidsSocks,
} as const;
export type ShopArtKey = keyof typeof SHOP_ART;
