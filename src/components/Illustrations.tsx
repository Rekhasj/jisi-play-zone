// Original cartoon illustrations for JiSi Play Zone (hand-drawn as SVG, free to use).

const INK = "var(--color-ink)";
const SKIN = "#f3c19b";

export function SunFace({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <g className="origin-center animate-spin-slow" style={{ transformBox: "fill-box" }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <path key={i} d="M60 6 L67 24 L53 24 Z" fill="#ffb703" transform={`rotate(${i * 30} 60 60)`} strokeLinejoin="round" />
        ))}
      </g>
      <circle cx="60" cy="60" r="34" fill="var(--color-sun)" />
      <circle cx="50" cy="48" r="10" fill="#fff" opacity=".35" />
      <path d="M44 56 Q49 50 54 56" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M66 56 Q71 50 76 56" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="42" cy="66" rx="6" ry="4" fill="#ff9fb4" />
      <ellipse cx="78" cy="66" rx="6" ry="4" fill="#ff9fb4" />
      <path d="M48 68 Q60 82 72 68 Z" fill={INK} />
      <path d="M53 74 Q60 79 67 74" fill="#ff7a9a" />
    </svg>
  );
}

export function Rocket({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <g transform="rotate(40 60 60)">
        {/* flame */}
        <path d="M50 92 Q60 122 70 92 Z" fill="#fb923c" className="animate-pulse" />
        <path d="M54 92 Q60 110 66 92 Z" fill="var(--color-sun)" />
        {/* fins */}
        <path d="M44 70 L30 94 L48 88 Z" fill="var(--color-cherry)" />
        <path d="M76 70 L90 94 L72 88 Z" fill="var(--color-cherry)" />
        {/* body */}
        <path d="M60 10 Q82 32 78 84 Q60 94 42 84 Q38 32 60 10 Z" fill="#f8fafc" />
        <path d="M60 10 Q72 22 76 36 L44 36 Q48 22 60 10 Z" fill="var(--color-cherry)" />
        <path d="M44 80 Q60 88 76 80 L77 86 Q60 96 43 86 Z" fill="var(--color-grape)" />
        <circle cx="60" cy="54" r="10" fill="var(--color-sky)" stroke="#94a3b8" strokeWidth="4" />
        <circle cx="56" cy="50" r="3" fill="#fff" opacity=".8" />
      </g>
      <circle cx="18" cy="24" r="3" fill="var(--color-sun)" />
      <circle cx="100" cy="18" r="2.5" fill="var(--color-cherry)" />
      <circle cx="104" cy="98" r="3" fill="var(--color-sky)" />
    </svg>
  );
}

/** Shiny trophy with a star — Super Pass. */
export function Trophy({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <g className="animate-pulse">
        <path d="M22 20 l3 -7 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 Z" fill="var(--color-sun)" />
        <path d="M94 34 l2 -5 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 Z" fill="var(--color-cherry)" />
      </g>
      {/* handles */}
      <path d="M36 34 Q16 34 18 52 Q20 66 40 66" stroke="var(--color-sun-dark)" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M84 34 Q104 34 102 52 Q100 66 80 66" stroke="var(--color-sun-dark)" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* cup */}
      <path d="M34 24 L86 24 L84 52 Q80 76 60 78 Q40 76 36 52 Z" fill="var(--color-sun)" />
      <path d="M44 30 Q42 50 50 66" stroke="#ffffff" strokeOpacity=".5" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M60 36 l4 9 l10 1 l-7 7 l2 10 l-9 -5 l-9 5 l2 -10 l-7 -7 l10 -1 Z" fill="#ffffff" />
      {/* stem and base */}
      <rect x="54" y="78" width="12" height="12" fill="var(--color-sun-dark)" />
      <rect x="40" y="90" width="40" height="10" rx="4" fill="var(--color-grape)" />
      <rect x="34" y="100" width="52" height="10" rx="4" fill="var(--color-ink)" />
    </svg>
  );
}

/** Comfy armchair with a cushion and footstool — "parents relax too". */
export function ArmChair({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {/* floating Zz */}
      <g className="animate-bob" fill="var(--color-grape)" fontFamily="system-ui" fontWeight="800">
        <text x="84" y="22" fontSize="14">Z</text>
        <text x="96" y="12" fontSize="10">z</text>
      </g>
      <ellipse cx="54" cy="106" rx="46" ry="6" fill="var(--color-brand-100)" />
      {/* legs */}
      <path d="M26 92 L22 104 M82 92 L86 104" stroke="#a16207" strokeWidth="5" strokeLinecap="round" />
      {/* back rest */}
      <path d="M24 34 Q24 20 38 20 L70 20 Q84 20 84 34 L84 74 L24 74 Z" fill="var(--color-brand-bright)" />
      <path d="M36 30 Q54 24 72 30" stroke="#ffffff" strokeOpacity=".4" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* seat */}
      <rect x="20" y="66" width="68" height="18" rx="8" fill="var(--color-grape)" />
      {/* cushion */}
      <rect x="34" y="40" width="40" height="26" rx="11" fill="var(--color-sun)" />
      <path d="M48 50 Q51 47 54 50 Q57 47 60 50 Q60 55 54 59 Q48 55 48 50 Z" fill="var(--color-cherry)" />
      {/* arm rests */}
      <rect x="10" y="50" width="20" height="40" rx="10" fill="var(--color-sky)" />
      <rect x="78" y="50" width="20" height="40" rx="10" fill="var(--color-sky)" />
      <rect x="12" y="84" width="84" height="10" rx="5" fill="var(--color-grape-dark)" />
      {/* footstool */}
      <rect x="92" y="88" width="22" height="12" rx="6" fill="var(--color-sun)" />
      <path d="M96 100 L95 106 M110 100 L111 106" stroke="#a16207" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function PartyCake({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {[38, 60, 82].map((x, i) => (
        <g key={x}>
          <rect x={x - 3} y="22" width="6" height="20" rx="2" fill={["var(--color-sky)", "var(--color-cherry)", "#34c78a"][i]} />
          <path d={`M${x} 8 Q${x + 6} 16 ${x} 22 Q${x - 6} 16 ${x} 8 Z`} fill="#ffb703" className="animate-pulse" />
        </g>
      ))}
      <rect x="22" y="42" width="76" height="26" rx="8" fill="var(--color-coral-light)" />
      <path d="M22 50 Q30 58 38 50 Q46 58 54 50 Q62 58 70 50 Q78 58 86 50 Q94 58 98 50 L98 46 Q98 42 92 42 L28 42 Q22 42 22 46 Z" fill="#fff" />
      <rect x="12" y="66" width="96" height="34" rx="9" fill="var(--color-grape)" />
      <path d="M12 76 Q22 86 32 76 Q42 86 52 76 Q62 86 72 76 Q82 86 92 76 Q100 84 108 76 L108 72 Q108 66 100 66 L20 66 Q12 66 12 72 Z" fill="#fde68a" />
      {[26, 46, 66, 86].map((x) => (
        <circle key={x} cx={x + 4} cy="90" r="3.5" fill="var(--color-sun)" />
      ))}
      <ellipse cx="60" cy="104" rx="56" ry="6" fill="var(--color-brand-100)" />
    </svg>
  );
}

/** Kid whooshing down a slide into a ball pit. */
export function SlideScene({ className = "" }: { className?: string }) {
  const balls = [
    [34, 112, "var(--color-cherry)"], [48, 110, "var(--color-sky)"], [62, 113, "var(--color-sun)"], [76, 109, "#34c78a"], [90, 112, "var(--color-grape)"],
    [104, 110, "var(--color-cherry)"], [118, 113, "var(--color-sky)"], [132, 110, "#fb923c"], [146, 112, "var(--color-cherry)"], [41, 102, "var(--color-sun)"],
    [56, 101, "var(--color-grape)"], [70, 103, "var(--color-cherry)"], [84, 100, "var(--color-sky)"], [98, 102, "var(--color-sun)"], [112, 101, "#34c78a"],
    [126, 103, "var(--color-cherry)"], [140, 101, "var(--color-grape)"],
  ] as const;
  return (
    <svg viewBox="0 0 220 140" className={className} aria-hidden>
      <path d="M14 70 Q10 18 70 16 Q130 2 190 22 Q218 40 206 90 Q198 132 120 134 Q30 138 14 70 Z" fill="var(--color-sky-soft)" />
      {/* bunting */}
      <path d="M30 22 Q110 44 196 22" stroke="var(--color-brand-100)" strokeWidth="2" fill="none" />
      {[46, 68, 90, 112, 134, 156, 178].map((x, i) => (
        <path key={x} d={`M${x - 7} ${28 + Math.round(Math.sin(i) * 2)} L${x + 7} ${30 + Math.round(Math.sin(i) * 2)} L${x} ${42 + Math.round(Math.sin(i) * 2)} Z`} fill={["var(--color-cherry)", "var(--color-sun)", "var(--color-sky)", "#34c78a", "var(--color-grape)", "#fb923c", "var(--color-cherry)"][i]} />
      ))}
      {/* tower + ladder */}
      <rect x="160" y="54" width="34" height="68" rx="4" fill="var(--color-sky)" />
      <rect x="156" y="50" width="42" height="8" rx="3" fill="var(--color-grape)" />
      {[66, 80, 94, 108].map((y) => (
        <rect key={y} x="166" y={y} width="22" height="4" rx="2" fill="var(--color-sky-soft)" />
      ))}
      {/* slide */}
      <path d="M160 58 Q120 60 110 84 Q100 104 70 106" stroke="var(--color-cherry)" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d="M160 52 Q118 54 106 80 Q96 98 70 100" stroke="var(--color-coral-light)" strokeWidth="3" fill="none" />
      {/* kid on the slide */}
      <g className="animate-bob">
        <circle cx="126" cy="54" r="8" fill={SKIN} />
        <path d="M118 52 Q126 40 134 52 Z" fill={INK} />
        <path d="M122 62 L112 70" stroke="var(--color-sun)" strokeWidth="9" strokeLinecap="round" />
        <path d="M120 62 L110 54 M126 62 L134 50" stroke={SKIN} strokeWidth="4" strokeLinecap="round" />
        <path d="M112 72 L98 78" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" />
        <path d="M140 46 l6 -3 M142 54 l7 0" stroke="var(--color-brand-200)" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      {/* ball pit */}
      <ellipse cx="90" cy="110" rx="66" ry="16" fill="var(--color-ink)" opacity=".12" />
      {balls.map(([x, y, c], i) => (
        <circle key={i} cx={x} cy={y} r="7" fill={c} />
      ))}
      <path d="M22 104 Q22 124 40 124 L140 124 Q158 124 158 104" stroke="var(--color-grape)" strokeWidth="8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Two kids bouncing on a trampoline. */
export function TrampolineScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 140" className={className} aria-hidden>
      <path d="M10 76 Q8 22 76 14 Q150 4 196 30 Q220 54 204 98 Q186 136 110 134 Q22 134 10 76 Z" fill="#dff4ff" />
      {/* stars */}
      {[[36, 34], [184, 40], [160, 18]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y - 7} L${x + 2} ${y - 2} L${x + 7} ${y} L${x + 2} ${y + 2} L${x} ${y + 7} L${x - 2} ${y + 2} L${x - 7} ${y} L${x - 2} ${y - 2} Z`} fill="var(--color-sun)" className="animate-pulse" />
      ))}
      {/* trampoline */}
      <path d="M48 112 L42 130 M172 112 L178 130 M110 118 L110 132" stroke="var(--color-ink)" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="110" cy="108" rx="66" ry="14" fill="var(--color-grape)" />
      <ellipse cx="110" cy="106" rx="56" ry="9" fill="var(--color-ink)" />
      {/* kid 1 – jumping high */}
      <g className="animate-float">
        <circle cx="88" cy="36" r="9" fill={SKIN} />
        <path d="M79 34 Q88 20 97 34 Z" fill="#a16207" />
        <path d="M88 46 L88 64" stroke="var(--color-cherry)" strokeWidth="11" strokeLinecap="round" />
        <path d="M84 48 L72 34 M92 48 L104 34" stroke={SKIN} strokeWidth="4" strokeLinecap="round" />
        <path d="M85 66 L80 80 M91 66 L98 78" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" />
      </g>
      {/* kid 2 – smaller bounce */}
      <g className="animate-bob">
        <circle cx="138" cy="58" r="8" fill={SKIN} />
        <path d="M130 56 Q138 44 146 56 Z" fill={INK} />
        <path d="M138 66 L138 82" stroke="var(--color-sun)" strokeWidth="10" strokeLinecap="round" />
        <path d="M134 68 L124 60 M142 68 L152 58" stroke={SKIN} strokeWidth="4" strokeLinecap="round" />
        <path d="M135 84 L132 96 M141 84 L146 95" stroke="#34c78a" strokeWidth="5" strokeLinecap="round" />
      </g>
      <path d="M60 64 q-6 6 0 12 M162 70 q6 6 0 12" stroke="var(--color-brand-200)" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export const WHY_ART = { sun: SunFace, rocket: Rocket, chair: ArmChair, cake: PartyCake } as const;
