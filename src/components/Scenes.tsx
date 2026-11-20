// More original cartoon scenes for JiSi Play Zone (attractions, gallery, birthday, top banner).
import { SlideScene, TrampolineScene } from "./Illustrations";

const INK = "var(--color-ink)";
const SKIN = "#f3c19b";
const COLORS = ["var(--color-brand-bright)", "var(--color-sun)", "var(--color-cherry)", "#ffffff", "var(--color-sky)", "var(--color-sun)", "var(--color-cherry)"];

/** Kid popping out of a ball pit, balls flying. */
export function BallPitScene({ className = "" }: { className?: string }) {
  const balls: [number, number][] = [];
  for (let row = 0; row < 3; row++) for (let col = 0; col < 10; col++) balls.push([38 + col * 16 + (row % 2) * 8, 98 + row * 11]);
  return (
    <svg viewBox="0 0 220 140" className={className} aria-hidden>
      <path d="M12 72 Q8 20 74 14 Q146 4 194 26 Q220 50 206 96 Q190 134 112 134 Q24 134 12 72 Z" fill="#fff1d6" />
      <g className="animate-bob">
        <circle cx="110" cy="70" r="13" fill={SKIN} />
        <path d="M97 66 Q110 48 123 66 Z" fill={INK} />
        <circle cx="105" cy="70" r="1.8" fill={INK} />
        <circle cx="115" cy="70" r="1.8" fill={INK} />
        <path d="M104 76 Q110 81 116 76" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M98 84 L84 64 M122 84 L136 64" stroke={SKIN} strokeWidth="5" strokeLinecap="round" />
        <path d="M100 86 L120 86 L118 96 L102 96 Z" fill="var(--color-cherry)" />
      </g>
      <g className="animate-float">
        <circle cx="70" cy="44" r="7" fill="var(--color-sky)" />
        <circle cx="150" cy="38" r="7" fill="var(--color-sun)" />
        <circle cx="166" cy="62" r="6" fill="var(--color-cherry)" />
        <circle cx="56" cy="66" r="6" fill="#34c78a" />
      </g>
      {balls.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="8" fill={COLORS[(i * 3) % COLORS.length]} />
      ))}
      <rect x="24" y="96" width="172" height="34" rx="16" fill="none" stroke="var(--color-grape)" strokeWidth="8" />
    </svg>
  );
}

/** Kid climbing a padded wall next to a rope net. */
export function ClimbScene({ className = "" }: { className?: string }) {
  const holds = [[70, 40], [96, 30], [84, 62], [116, 52], [72, 86], [104, 84], [128, 74], [92, 104], [122, 102]];
  return (
    <svg viewBox="0 0 220 140" className={className} aria-hidden>
      <path d="M14 74 Q8 22 72 14 Q150 4 196 30 Q220 54 204 98 Q186 136 110 134 Q22 134 14 74 Z" fill="#e7faf2" />
      <rect x="56" y="16" width="92" height="104" rx="10" fill="var(--color-grape)" />
      <path d="M56 50 L148 30 M56 90 L148 66" stroke="var(--color-sky)" strokeWidth="10" />
      {holds.map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="6" ry="4.5" fill={COLORS[i % COLORS.length]} />
      ))}
      <path d="M156 24 L196 40 M156 50 L196 64 M156 76 L196 88 M164 22 L164 118 M180 30 L180 118" stroke="#fbbf24" strokeWidth="3" />
      <g className="animate-bob">
        <circle cx="100" cy="50" r="9" fill={SKIN} />
        <path d="M91 48 Q100 36 109 48 Z" fill="#a16207" />
        <path d="M100 60 L100 80" stroke="var(--color-sky)" strokeWidth="11" strokeLinecap="round" />
        <path d="M96 62 L84 44 M104 62 L114 50" stroke={SKIN} strokeWidth="4" strokeLinecap="round" />
        <path d="M97 82 L88 96 M103 82 L110 98" stroke="var(--color-cherry)" strokeWidth="5" strokeLinecap="round" />
      </g>
      <rect x="40" y="118" width="140" height="12" rx="6" fill="var(--color-sky)" />
    </svg>
  );
}

/** Birthday party: bunting, banner, balloons, cake and gifts. `accent` tints table, banner and balloons. */
export function PartyScene({ className = "", accent = "var(--color-grape)", fit = "meet" }: { className?: string; accent?: string; fit?: "slice" | "meet" }) {
  const balloons: [number, number, string][] = [
    [24, 72, "var(--color-sun)"], [38, 52, accent], [34, 92, "var(--color-sky)"],
    [196, 72, "var(--color-cherry)"], [182, 52, "#34c78a"], [186, 92, accent],
  ];
  return (
    <svg viewBox="0 0 220 160" className={className} preserveAspectRatio={`xMidYMid ${fit}`} aria-hidden>
      <rect width="220" height="160" fill="var(--color-pink-soft)" />
      <path d="M0 18 Q110 44 220 18" stroke="var(--color-sky-soft)" strokeWidth="2" fill="none" />
      {[14, 38, 62, 86, 110, 134, 158, 182, 206].map((x, i) => {
        const dy = Math.round(Math.sin(i / 1.4) * 5);
        return <path key={x} d={`M${x - 9} ${20 + dy} L${x + 9} ${22 + dy} L${x} ${36 + dy} Z`} fill={COLORS[i % COLORS.length]} />;
      })}
      <rect x="54" y="44" width="112" height="20" rx="10" fill={accent} />
      <text x="110" y="57.8" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff" fontFamily="system-ui" letterSpacing="0.5">
        HAPPY BIRTHDAY
      </text>
      {balloons.map(([x, y, c], i) => (
        <g key={i} className={i % 2 ? "animate-float" : "animate-bob"}>
          <path d={`M${x} ${y + 13} Q${x + 4} ${y + 30} ${x} ${y + 46}`} stroke="var(--color-brand-100)" strokeWidth="1.2" fill="none" />
          <ellipse cx={x} cy={y} rx="11" ry="13" fill={c} />
          <ellipse cx={x - 4} cy={y - 4} rx="3" ry="4" fill="#fff" opacity=".45" />
        </g>
      ))}
      <rect x="40" y="122" width="140" height="10" rx="4" fill={accent} />
      <path d="M44 132 L52 158 M176 132 L168 158" stroke={accent} strokeWidth="6" strokeLinecap="round" />
      <rect x="86" y="96" width="48" height="26" rx="6" fill="var(--color-coral-light)" />
      <path d="M86 102 Q92 108 98 102 Q104 108 110 102 Q116 108 122 102 Q128 108 134 102 L134 100 Q134 96 128 96 L92 96 Q86 96 86 100 Z" fill="#fff" />
      <rect x="108" y="82" width="4" height="14" rx="2" fill="var(--color-sky)" />
      <path d="M110 72 Q114 78 110 82 Q106 78 110 72 Z" fill="#ffb703" className="animate-pulse" />
      <rect x="54" y="104" width="22" height="18" rx="3" fill="var(--color-sky)" />
      <rect x="63" y="104" width="4" height="18" fill="var(--color-sun)" />
      <rect x="146" y="100" width="24" height="22" rx="3" fill="#34c78a" />
      <rect x="156" y="100" width="4" height="22" fill="var(--color-cherry)" />
    </svg>
  );
}

/** Indoor soft-play panorama for the bottom of the top banner: net frame, padded beams, foam mats. */
export function HeroScene({ className = "" }: { className?: string }) {
  const pit: [number, number][] = [];
  for (let i = 0; i < 15; i++) pit.push([470 + i * 12, 338 + (i % 2) * 7]);
  const mats = ["var(--color-brand-bright)", "#ffffff"];
  return (
    <svg viewBox="0 0 1440 420" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden>
      <defs>
        <pattern id="net" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0 V22 M0 0 H22" stroke="#ffffff" strokeOpacity=".45" strokeWidth="1.6" fill="none" />
        </pattern>
      </defs>

      {/* hanging lights */}
      {[150, 330, 1110, 1290].map((x, i) => (
        <g key={x}>
          <path d={`M${x} 0 V${60 + (i % 2) * 24}`} stroke="var(--color-brand-100)" strokeWidth="2" />
          <path d={`M${x - 22} ${78 + (i % 2) * 24} Q${x} ${50 + (i % 2) * 24} ${x + 22} ${78 + (i % 2) * 24} Z`} fill="var(--color-sun)" />
          <ellipse cx={x} cy={84 + (i % 2) * 24} rx="16" ry="8" fill="#fff7c2" className="animate-pulse" />
        </g>
      ))}

      {/* rainbow wall decal */}
      {["var(--color-cherry)", "var(--color-sun)", "#ffffff", "var(--color-sky)", "var(--color-brand-bright)"].map((c, i) => (
        <path key={c} d={`M${60 + i * 12} 300 A ${110 - i * 12} ${110 - i * 12} 0 0 1 ${280 - i * 12} 300`} stroke={c} strokeWidth="11" fill="none" opacity=".85" />
      ))}

      {/* padded wall base */}
      <rect x="0" y="318" width="1440" height="44" fill="var(--color-grape-dark)" />
      {Array.from({ length: 24 }).map((_, i) => (
        <rect key={i} x={i * 60 + 4} y="322" width="52" height="36" rx="10" fill="var(--color-sky)" />
      ))}

      {/* foam mat floor */}
      {Array.from({ length: 24 }).map((_, i) => (
        <g key={i}>
          <rect x={i * 60} y="362" width="60" height="30" fill={mats[i % mats.length]} />
          <rect x={i * 60} y="392" width="60" height="28" fill={mats[(i + 1) % mats.length]} />
        </g>
      ))}

      {/* trampoline (left) */}
      <path d="M190 360 L180 390 M310 360 L320 390" stroke="var(--color-ink)" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="250" cy="356" rx="74" ry="15" fill="var(--color-sky)" />
      <ellipse cx="250" cy="354" rx="62" ry="9" fill="var(--color-ink)" />
      <g className="animate-float">
        <circle cx="250" cy="262" r="12" fill={SKIN} />
        <path d="M238 258 Q250 242 262 258 Z" fill={INK} />
        <path d="M250 276 L250 300" stroke="var(--color-cherry)" strokeWidth="13" strokeLinecap="round" />
        <path d="M245 278 L230 262 M255 278 L270 262" stroke={SKIN} strokeWidth="5" strokeLinecap="round" />
        <path d="M246 304 L240 322 M254 304 L262 320" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* ---- soft-play frame with safety net ---- */}
      <rect x="440" y="96" width="680" height="266" fill="url(#net)" />
      <rect x="440" y="96" width="680" height="266" fill="#ffffff" opacity=".08" />
      {/* posts */}
      {[440, 610, 780, 950, 1106].map((x) => (
        <rect key={x} x={x - 7} y="88" width="16" height="274" rx="8" fill="var(--color-brand-bright)" />
      ))}
      {/* padded top beam + mid deck */}
      <rect x="426" y="80" width="708" height="20" rx="10" fill="var(--color-sun)" />
      <rect x="600" y="204" width="370" height="18" rx="9" fill="var(--color-sun)" />

      {/* ball pit */}
      <rect x="452" y="318" width="210" height="44" rx="12" fill="var(--color-sky-soft)" />
      {pit.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="10" fill={COLORS[i % COLORS.length]} />
      ))}

      {/* wave slide into the ball pit */}
      <path d="M612 214 C560 222 584 314 520 330" stroke="var(--color-cherry)" strokeWidth="26" fill="none" strokeLinecap="round" />
      <path d="M612 202 C556 212 578 302 516 318" stroke="var(--color-coral-light)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <g className="animate-bob">
        <circle cx="574" cy="252" r="11" fill={SKIN} />
        <path d="M563 248 Q574 232 585 248 Z" fill="#a16207" />
        <path d="M570 264 L558 280" stroke="#34c78a" strokeWidth="11" strokeLinecap="round" />
        <path d="M568 264 L552 252 M578 264 L592 250" stroke={SKIN} strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* soft steps up to the deck */}
      {[["var(--color-sky)", 690, 300, 62], ["var(--color-sun)", 740, 262, 100], ["#34c78a", 790, 222, 140]].map(([c, x, y, h]) => (
        <rect key={String(c)} x={Number(x)} y={Number(y)} width="52" height={Number(h)} rx="8" fill={String(c)} />
      ))}

      {/* kid waving on the deck */}
      <g className="animate-bob">
        <circle cx="880" cy="176" r="12" fill={SKIN} />
        <path d="M868 172 Q880 156 892 172 Z" fill={INK} />
        <path d="M880 190 L880 204" stroke="var(--color-sky)" strokeWidth="12" strokeLinecap="round" />
        <path d="M886 190 L902 170 M874 190 L862 198" stroke={SKIN} strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* tunnel slide out of the frame */}
      <path d="M960 214 C1060 214 1012 330 1110 344" stroke="var(--color-sun)" strokeWidth="34" fill="none" strokeLinecap="round" />
      <path d="M960 214 C1060 214 1012 330 1110 344" stroke="var(--color-sun-dark)" strokeWidth="34" fill="none" strokeDasharray="9 18" />

      {/* climbing wall (right) */}
      <rect x="1190" y="150" width="150" height="168" rx="14" fill="var(--color-sky)" />
      {[[1215, 180], [1260, 170], [1305, 190], [1230, 220], [1285, 230], [1320, 255], [1215, 265], [1260, 290]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="9" ry="7" fill={COLORS[(i + 2) % COLORS.length]} />
      ))}
      <g className="animate-bob">
        <circle cx="1268" cy="212" r="10" fill={SKIN} />
        <path d="M1258 208 Q1268 194 1278 208 Z" fill="#a16207" />
        <path d="M1268 224 L1268 246" stroke="var(--color-cherry)" strokeWidth="11" strokeLinecap="round" />
        <path d="M1263 226 L1250 206 M1273 226 L1286 214" stroke={SKIN} strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* party balloons tied to the frame */}
      <g className="animate-float">
        <path d="M440 96 Q420 60 400 40 M440 96 Q440 56 444 30 M440 96 Q462 62 484 44" stroke="var(--color-sky-soft)" strokeWidth="2" fill="none" />
        <ellipse cx="400" cy="30" rx="16" ry="19" fill="var(--color-cherry)" />
        <ellipse cx="444" cy="18" rx="16" ry="19" fill="var(--color-sun)" />
        <ellipse cx="486" cy="34" rx="16" ry="19" fill="var(--color-sky)" />
      </g>
    </svg>
  );
}

/** Kid building a sandcastle in the sandpit. */
export function SandpitScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 140" className={className} aria-hidden>
      <path d="M12 72 Q8 20 74 14 Q146 4 194 26 Q220 50 206 96 Q190 134 112 134 Q24 134 12 72 Z" fill="#fff6dc" />
      <rect x="22" y="82" width="176" height="46" rx="12" fill="#f59e0b" />
      <rect x="30" y="88" width="160" height="34" rx="9" fill="#fde68a" />
      {[[44, 100], [70, 112], [150, 98], [176, 110], [100, 116]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="#f59e0b" opacity=".6" />
      ))}
      {/* sandcastle */}
      <path d="M118 104 V80 H124 V74 H130 V80 H136 V74 H142 V80 H148 V74 H154 V80 H160 V104 Z" fill="#fbbf24" />
      <rect x="133" y="90" width="12" height="14" rx="6" fill="#d97706" />
      <path d="M139 74 V60" stroke={INK} strokeWidth="2" />
      <path d="M139 60 L152 64 L139 68 Z" fill="var(--color-cherry)" className="animate-pulse" />
      {/* bucket and spade */}
      <path d="M170 92 L190 92 L186 112 L174 112 Z" fill="var(--color-sky)" />
      <path d="M170 92 Q180 80 190 92" stroke="var(--color-ink)" strokeWidth="2" fill="none" />
      <path d="M48 110 L64 86" stroke="var(--color-cherry)" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="66" cy="83" rx="6" ry="4" fill="var(--color-cherry)" transform="rotate(-55 66 83)" />
      {/* kid */}
      <g className="animate-bob">
        <circle cx="90" cy="60" r="12" fill={SKIN} />
        <path d="M78 58 Q90 42 102 58 Z" fill={INK} />
        <circle cx="86" cy="61" r="1.6" fill={INK} />
        <circle cx="94" cy="61" r="1.6" fill={INK} />
        <path d="M86 66 Q90 69 94 66" stroke={INK} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M80 76 Q90 70 100 76 L100 96 L80 96 Z" fill="#34c78a" />
        <path d="M98 80 L114 90" stroke={SKIN} strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** Kid whooshing out of a twisty tunnel slide. */
export function TunnelSlideScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 140" className={className} aria-hidden>
      <path d="M14 74 Q8 22 72 14 Q150 4 196 30 Q220 54 204 98 Q186 136 110 134 Q22 134 14 74 Z" fill="#e7faf2" />
      {/* tower */}
      <rect x="22" y="24" width="50" height="104" rx="8" fill="var(--color-grape)" />
      <rect x="18" y="20" width="58" height="10" rx="5" fill="var(--color-sun)" />
      {[44, 64, 84, 104].map((y) => (
        <rect key={y} x="30" y={y} width="34" height="5" rx="2.5" fill="var(--color-brand-200)" />
      ))}
      {/* twisty tunnel */}
      <path d="M70 40 C130 34 150 60 112 74 C74 88 96 116 168 112" stroke="#34c78a" strokeWidth="26" fill="none" strokeLinecap="round" />
      <path d="M70 40 C130 34 150 60 112 74 C74 88 96 116 168 112" stroke="#1f9e6a" strokeWidth="26" fill="none" strokeDasharray="7 13" />
      {/* exit + kid */}
      <ellipse cx="172" cy="112" rx="10" ry="14" fill="var(--color-ink)" />
      <g className="animate-bob">
        <circle cx="186" cy="104" r="10" fill={SKIN} />
        <path d="M176 100 Q186 86 196 100 Z" fill="#a16207" />
        <path d="M184 116 L196 96 M190 116 L204 104" stroke={SKIN} strokeWidth="4" strokeLinecap="round" />
        <path d="M200 84 l6 -4 M202 92 l8 0" stroke="#34c78a" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <rect x="140" y="124" width="70" height="8" rx="4" fill="var(--color-sky)" />
    </svg>
  );
}

/** Balloon arch decoration over a party backdrop. */
export function BalloonArchScene({ className = "", accent = "var(--color-sky)" }: { className?: string; accent?: string }) {
  const arch: [number, number, string][] = [];
  const palette = [accent, "var(--color-sun)", "var(--color-cherry)", "#ffffff", "var(--color-grape)"];
  for (let i = 0; i <= 18; i++) {
    const t = Math.PI - (i / 18) * Math.PI;
    arch.push([Math.round(110 + Math.cos(t) * 82), Math.round(132 - Math.sin(t) * 100), palette[i % palette.length]]);
  }
  return (
    <svg viewBox="0 0 220 160" className={className} aria-hidden>
      <rect width="220" height="160" fill="var(--color-mint-soft)" />
      <rect x="44" y="46" width="132" height="92" rx="12" fill="var(--color-sky-soft)" />
      <circle cx="110" cy="86" r="26" fill={accent} opacity=".25" />
      <text x="110" y="83" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--color-grape)" fontFamily="system-ui">
        HAPPY
      </text>
      <text x="110" y="99" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--color-grape)" fontFamily="system-ui">
        BIRTHDAY
      </text>
      {arch.map(([x, y, c], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="12" fill={c} stroke="#00000010" />
          <circle cx={x - 4} cy={y - 4} r="3" fill="#fff" opacity=".5" />
        </g>
      ))}
      <g className="animate-float">
        <ellipse cx="186" cy="34" rx="9" ry="11" fill="var(--color-sun)" />
        <path d="M186 45 Q190 56 186 66" stroke="var(--color-brand-100)" strokeWidth="1.2" fill="none" />
      </g>
      <rect x="0" y="138" width="220" height="22" fill="var(--color-brand-100)" />
    </svg>
  );
}

export const SCENES = {
  ballpit: BallPitScene,
  slide: SlideScene,
  trampoline: TrampolineScene,
  climb: ClimbScene,
  party: PartyScene,
  balloons: BalloonArchScene,
  sandpit: SandpitScene,
  tunnel: TunnelSlideScene,
} as const;
export type SceneKey = keyof typeof SCENES;
