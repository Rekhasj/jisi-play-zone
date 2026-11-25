// The "JiSi" name with a balloon for the dot of each "i" (coral, then yellow). Nothing on the J.
// Uses the dotless ı so the font's own dot doesn't show under the balloon.

function Balloon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 20 30"
      aria-hidden
      className="pointer-events-none absolute left-1/2 -translate-x-1/2"
      // span has line-height 0, so its box bottom sits 0.28em above the baseline (Baloo 2);
      // the dotless ı is 0.5em tall, so the string ends just inside the top of the stem
      style={{ width: "0.32em", bottom: "0.19em" }}
    >
      <path d="M10 23 q-2.5 3 0 5 q1.5 1.2 0 2" fill="none" stroke="var(--color-ink)" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="10" cy="11" rx="8.5" ry="10" fill={color} stroke="var(--color-ink)" strokeWidth="1.6" />
      <ellipse cx="7" cy="7" rx="2.2" ry="3.4" fill="#fff" opacity=".6" transform="rotate(-25 7 7)" />
      <path d="M8 21 L12 21 L10 23.5 Z" fill={color} stroke="var(--color-ink)" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function I({ color }: { color: string }) {
  return (
    <span className="relative inline-block" style={{ lineHeight: 0 }}>
      ı
      <Balloon color={color} />
    </span>
  );
}

export function JiSiWordmark() {
  return (
    <span aria-label="JiSi" role="img" className="inline-block whitespace-nowrap">
      <span aria-hidden>
        J<I color="var(--color-cherry)" />S<I color="var(--color-sun)" />
      </span>
    </span>
  );
}
