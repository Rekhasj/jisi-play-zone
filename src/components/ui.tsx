"use client";

import { useEffect, useRef, type ReactNode } from "react";

export const rupee = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/** Big cartoon section heading with a little ribbon label above it. */
export function SectionTitle({
  eyebrow,
  title,
  text,
  titleClass = "text-ink",
  textClass = "text-ink/70",
  ribbonClass = "bg-grape text-white",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  titleClass?: string;
  textClass?: string;
  ribbonClass?: string;
}) {
  return (
    <div data-reveal="up" className="relative mx-auto mb-8 max-w-xl text-center">
      <span className={`inline-block rounded-full px-4 py-1 text-sm font-bold uppercase tracking-wider ${ribbonClass}`}>
        {eyebrow}
      </span>
      <h2 className={`text-outline mt-3 text-4xl leading-[1.05] sm:text-5xl ${titleClass}`}>{title}</h2>
      {text && <p className={`mt-3 text-lg font-medium ${textClass}`}>{text}</p>}
    </div>
  );
}

/** Fades + bounces children in when they scroll into view. */
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/** Wavy edge between two coloured sections. `className` sets the fill via text colour. */
export function Wave({ className = "text-cream", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-16 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0,40 C120,80 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,80 L0,80 Z"
      />
    </svg>
  );
}

/**
 * Coloured page section whose top edge is a wave biting into the section above.
 * `bg` is the background class (e.g. "bg-grape"), `fill` the matching text class ("text-grape").
 */
export function Section({
  id,
  bg,
  fill,
  className = "",
  children,
}: {
  id?: string;
  bg: string;
  fill: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative ${bg}`}>
      <Wave className={`pointer-events-none absolute inset-x-0 top-0 -translate-y-[calc(100%-1px)] ${fill}`} />
      <div className={`relative overflow-hidden px-4 pb-16 pt-10 ${className}`}>{children}</div>
    </section>
  );
}

export function Cloud({ className = "", color = "#7fd3fb" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden>
      <path
        d="M20 52 Q2 52 6 38 Q8 26 24 28 Q26 10 46 12 Q58 0 74 12 Q94 8 96 28 Q116 28 114 42 Q112 54 96 52 Z"
        fill={color}
        style={{ filter: "drop-shadow(0 6px 10px rgb(14 116 180 / 0.25))" }}
      />
      {/* soft highlight */}
      <path d="M30 30 Q34 18 48 20 Q58 10 70 20" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/** Cartoon car with a kid at the window. `balloons` ties three balloons to the roof. */
export function Car({ className = "", color = "var(--color-cherry)", balloons = false }: { className?: string; color?: string; balloons?: boolean }) {
  return (
    <svg viewBox={balloons ? "0 -46 130 116" : "0 0 130 70"} className={className} aria-hidden>
      {balloons && (
        <g>
          <path d="M70 10 Q64 -8 52 -20 M72 10 Q74 -10 74 -26 M74 10 Q84 -6 96 -18" stroke="#6b5fa8" strokeWidth="1.2" fill="none" />
          <ellipse cx="50" cy="-28" rx="9" ry="11" fill="var(--color-sun)" />
          <ellipse cx="74" cy="-34" rx="9" ry="11" fill="var(--color-grape)" />
          <ellipse cx="98" cy="-26" rx="9" ry="11" fill="var(--color-sky)" />
        </g>
      )}
      <path
        d="M10 46 Q10 33 24 31 L40 29 L52 13 Q56 9 64 9 L92 9 Q100 9 104 15 L114 29 Q124 31 124 43 L124 50 Q124 55 119 55 L15 55 Q10 55 10 50 Z"
        fill={color}
      />
      <path d="M56 15 L50 29 L76 29 L76 15 Z" fill="#c7ecff" />
      <path d="M80 15 L80 29 L107 29 L98 17 Q96 15 92 15 Z" fill="#c7ecff" />
      {/* little passenger */}
      <circle cx="66" cy="23" r="5.5" fill="#f3c19b" />
      <path d="M60.5 21 Q66 14 71.5 21" fill="var(--color-ink)" />
      <circle cx="121" cy="38" r="3.5" fill="#ffd84d" />
      <rect x="11" y="36" width="5" height="5" rx="1.5" fill="#fb923c" />
      <path d="M78 31 L78 52" stroke="#00000022" strokeWidth="2" />
      <g className="wheel">
        <circle cx="36" cy="55" r="11" fill="var(--color-ink)" />
        <circle cx="36" cy="55" r="4.5" fill="#e5e7eb" />
        <rect x="35" y="45" width="2" height="20" fill="#e5e7eb" />
      </g>
      <g className="wheel">
        <circle cx="100" cy="55" r="11" fill="var(--color-ink)" />
        <circle cx="100" cy="55" r="4.5" fill="#e5e7eb" />
        <rect x="99" y="45" width="2" height="20" fill="#e5e7eb" />
      </g>
    </svg>
  );
}

/** Kid riding a bicycle. */
export function Bike({ className = "", color = "var(--color-grape)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 92 72" className={className} aria-hidden>
      <g className="wheel">
        <circle cx="20" cy="54" r="14" fill="none" stroke="var(--color-ink)" strokeWidth="3.5" />
        <path d="M20 40 V68 M6 54 H34" stroke="#94a3b8" strokeWidth="1.5" />
      </g>
      <g className="wheel">
        <circle cx="72" cy="54" r="14" fill="none" stroke="var(--color-ink)" strokeWidth="3.5" />
        <path d="M72 40 V68 M58 54 H86" stroke="#94a3b8" strokeWidth="1.5" />
      </g>
      <path d="M20 54 L40 54 L58 32 L32 32 Z M58 32 L72 54 M40 54 L32 32" fill="none" stroke={color} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M27 30 H38" stroke="var(--color-ink)" strokeWidth="4" strokeLinecap="round" />
      <path d="M58 32 L60 24 H66" stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* rider */}
      <path d="M33 28 L42 12" stroke="var(--color-cherry)" strokeWidth="7" strokeLinecap="round" />
      <path d="M42 14 L60 24" stroke="#f3c19b" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M34 29 L44 40 L40 54" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="44" cy="7" r="6.5" fill="#f3c19b" />
      <path d="M37 6 Q44 -4 51 6 Z" fill="var(--color-sun)" />
    </svg>
  );
}

/** A little road with a car and a bike driving across in opposite directions. */
export function Road({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none relative h-24 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute inset-x-0 bottom-0 h-9 bg-[#3a3f6b]">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-grass" />
        <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-[repeating-linear-gradient(90deg,#fff_0_22px,transparent_22px_46px)] opacity-80" />
      </div>
      <div className="absolute bottom-6 left-0 animate-drive-back">
        <Bike className="w-14 -scale-x-100" />
      </div>
      <div className="absolute bottom-1 left-0 animate-drive">
        <Car className="w-24 animate-bob" />
      </div>
    </div>
  );
}

export function Star({ className = "", color = "var(--color-sun)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className} aria-hidden>
      <path
        d="M25 3 L31 18 L47 19 L35 30 L39 46 L25 37 L11 46 L15 30 L3 19 L19 18 Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** "Bubbly" — JiSi Play Zone's own balloon buddy mascot. */
export function Mascot({ className = "", color = "var(--color-cherry)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 170" className={className} aria-hidden>
      <path d="M60 118 q-10 14 4 24 q12 10 -2 26" fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="60" cy="62" rx="48" ry="56" fill={color} stroke="var(--color-ink)" strokeWidth="2.5" />
      <ellipse cx="40" cy="34" rx="10" ry="16" fill="#fff" opacity=".55" transform="rotate(-25 40 34)" />
      <path d="M52 117 L68 117 L60 126 Z" fill={color} stroke="var(--color-ink)" strokeWidth="2" strokeLinejoin="round" />
      {/* face */}
      <ellipse cx="44" cy="60" rx="7" ry="9" fill="var(--color-ink)" />
      <ellipse cx="76" cy="60" rx="7" ry="9" fill="var(--color-ink)" />
      <circle cx="46" cy="57" r="2.6" fill="#fff" />
      <circle cx="78" cy="57" r="2.6" fill="#fff" />
      <ellipse cx="32" cy="76" rx="7" ry="4.5" fill="#ffb3c7" />
      <ellipse cx="88" cy="76" rx="7" ry="4.5" fill="#ffb3c7" />
      <path d="M46 78 Q60 96 74 78 Q60 84 46 78 Z" fill="var(--color-ink)" stroke="var(--color-ink)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M53 86 Q60 91 67 86" fill="#ff7a9a" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.71.22 1.36.19 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.45-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.9.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.37-11.36 0-3.04-1.18-5.89-3.33-8.04" />
    </svg>
  );
}
