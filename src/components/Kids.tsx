// Big sister and little brother holding hands — the two kids behind the "JiSi" name. Original SVG cartoon.

const SKIN = "#d99a6c";
const HAIR = "#3b2418";
const INK = "var(--color-ink)";

function Face() {
  return (
    <>
      <ellipse cx="-8" cy="52" rx="2.8" ry="3.6" fill={INK} />
      <ellipse cx="8" cy="52" rx="2.8" ry="3.6" fill={INK} />
      <circle cx="-7" cy="51" r="1" fill="#fff" />
      <circle cx="9" cy="51" r="1" fill="#fff" />
      <ellipse cx="-14" cy="60" rx="4.5" ry="2.8" fill="#ff9fb2" opacity=".8" />
      <ellipse cx="14" cy="60" rx="4.5" ry="2.8" fill="#ff9fb2" opacity=".8" />
      <path d="M-7 60 Q0 67 7 60" fill="none" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    </>
  );
}

// Arms, legs and shoes shared by both kids. Feet at y≈156; waves with the left arm, holds hands with the right.
function Limbs() {
  return (
    <>
      <path d="M-10 126 V150 M10 126 V150" stroke={SKIN} strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="-12" cy="153" rx="8" ry="4.5" fill={INK} />
      <ellipse cx="12" cy="153" rx="8" ry="4.5" fill={INK} />
      <path d="M-14 84 L-36 60" stroke={SKIN} strokeWidth="7" strokeLinecap="round" />
      <circle cx="-38" cy="57" r="5.5" fill={SKIN} />
      <path d="M14 84 L34 106" stroke={SKIN} strokeWidth="7" strokeLinecap="round" />
    </>
  );
}

function Girl() {
  return (
    <g>
      <Limbs />
      <path d="M-15 76 H15 L29 128 H-29 Z" fill="var(--color-cherry)" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M-23 112 H23" stroke="#fff" strokeWidth="3" strokeDasharray="2 5" strokeLinecap="round" opacity=".8" />
      <rect x="-4" y="68" width="8" height="10" fill={SKIN} />
      {/* pigtails with yellow bobbles */}
      <circle cx="-27" cy="54" r="10" fill={HAIR} />
      <circle cx="27" cy="54" r="10" fill={HAIR} />
      <circle cx="-21" cy="48" r="4" fill="var(--color-sun)" />
      <circle cx="21" cy="48" r="4" fill="var(--color-sun)" />
      <circle cx="0" cy="50" r="23" fill={SKIN} stroke={INK} strokeWidth="2.5" />
      <path d="M-23 52 Q-25 24 0 25 Q25 24 23 52 Q18 36 0 35 Q-18 36 -23 52 Z" fill={HAIR} />
      <Face />
    </g>
  );
}

function Boy() {
  return (
    <g>
      <Limbs />
      {/* shorts + T-shirt */}
      <path d="M-18 108 H18 L17 128 H3 L0 118 L-3 128 H-17 Z" fill="var(--color-grape)" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M-15 76 H15 L20 112 H-20 Z" fill="var(--color-sun)" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="0" cy="94" r="5" fill="var(--color-cherry)" />
      <rect x="-4" y="68" width="8" height="10" fill={SKIN} />
      <circle cx="0" cy="50" r="23" fill={SKIN} stroke={INK} strokeWidth="2.5" />
      {/* short hair with a little fringe */}
      <path d="M-23 50 Q-26 22 0 24 Q26 22 23 48 Q20 40 14 38 L10 42 L6 36 L0 41 L-6 36 L-11 41 L-15 37 Q-21 40 -23 50 Z" fill={HAIR} />
      <Face />
    </g>
  );
}

export function JiSiKids({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 190 162" className={className} aria-hidden>
      <g transform="translate(58 2)">
        <Girl />
      </g>
      {/* little brother, mirrored so he waves with the other hand */}
      <g transform="translate(130 30) scale(-0.82 0.82)">
        <Boy />
      </g>
      <circle cx="94" cy="111" r="5.5" fill={SKIN} />
    </svg>
  );
}
