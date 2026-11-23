"use client";

import { useEffect, useState } from "react";
import { BUSINESS, NAV_LINKS, telLink } from "@/data/site";
import { JiSiKids } from "./Kids";
import { Mascot } from "./ui";

const NAV_STYLE: Record<string, { icon: string; bg: string }> = {
  "#home": { icon: "🏠", bg: "bg-sky" },
  "#about": { icon: "😊", bg: "bg-sun" },
  "#attractions": { icon: "🛝", bg: "bg-cherry" },
  "#membership": { icon: "💳", bg: "bg-grape" },
  "#pricing": { icon: "🎟️", bg: "bg-tangerine" },
  "#birthday": { icon: "🎂", bg: "bg-bubble" },
  "#gallery": { icon: "📸", bg: "bg-grass" },
  "#testimonials": { icon: "⭐", bg: "bg-sun" },
  "#contact": { icon: "📞", bg: "bg-sky" },
};

export function Logo({ light }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-1.5" aria-label={`${BUSINESS.name} home`}>
      {/* the two kids behind the name on one side, the balloon on the other */}
      <JiSiKids className="h-12 w-auto" />
      <span className="leading-none">
        <span className={`block font-display text-[1.8rem] leading-[0.9] ${light ? "text-sun" : "text-grape"}`}>JiSi</span>
        <span className={`block text-[11px] font-bold uppercase tracking-[0.18em] ${light ? "text-white" : "text-ink/70"}`}>
          Play Zone
        </span>
      </span>
      <Mascot className="h-11 w-8 animate-bob" />
    </a>
  );
}

const RIBBON = [
  "🧦 Please remember to bring your socks!",
  "🎉 Birthday parties from just ₹999",
  "🕚 Open all 7 days",
  "🚗 Car, bike & scooty rides: ₹50 for 2 rounds",
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        {/* Scrolling announcement ribbon */}
        <div className="overflow-hidden bg-grape-dark py-1.5 text-sm font-semibold text-white">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {[...RIBBON, ...RIBBON].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
        <div
          className={`transition-all duration-300 ${
            scrolled ? "bg-grape shadow-[0_10px_30px_-12px_rgb(12_45_72/0.45)]" : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Logo light />
            <nav className="hidden items-center gap-4 lg:flex">
              {NAV_LINKS.slice(1, 8).map((l) => (
                <a key={l.href} href={l.href} className="font-semibold text-white/90 transition hover:text-sun">
                  {l.label}
                </a>
              ))}
              <a href="#book" className="btn bg-sun py-2 text-ink shadow-[0_10px_22px_-10px_rgb(245_167_0/0.9)]">
                Book Now
              </a>
            </nav>
            <button
              onClick={() => setOpen(true)}
              className="btn gap-2 bg-white px-4 py-2 text-grape lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="flex flex-col gap-[3px]">
                <span className="h-0.5 w-5 rounded bg-grape" />
                <span className="h-0.5 w-5 rounded bg-grape" />
                <span className="h-0.5 w-5 rounded bg-grape" />
              </span>
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Slide-in drawer (mobile) */}
      <div
        className={`fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[82%] max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(.34,1.4,.64,1)] lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Menu"
      >
        <div className="relative flex items-center justify-between bg-lilac px-5 py-5">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            className="sticker-sm grid h-11 w-11 place-items-center rounded-full bg-cherry text-xl font-bold text-white active:scale-90"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <nav className="bg-dots flex-1 space-y-2 overflow-y-auto px-4 py-4">
          {NAV_LINKS.map((l, i) => {
            const s = NAV_STYLE[l.href];
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 35}ms` : "0ms" }}
                className={`sticker-sm flex items-center gap-3 rounded-2xl bg-white px-3 py-2 text-lg font-semibold text-ink transition-all duration-300 active:translate-y-0.5 ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
                }`}
              >
                <span className={`grid h-9 w-9 place-items-center rounded-xl shadow-sm text-lg ${s?.bg}`}>{s?.icon}</span>
                {l.label}
              </a>
            );
          })}
        </nav>
        <div className="grid grid-cols-2 gap-3 border-t border-slate-100 bg-white p-4">
          <a href="#book" onClick={() => setOpen(false)} className="btn bg-grape px-2 text-white">
            Book Now
          </a>
          <a href={telLink} className="btn bg-lilac px-2 text-grape shadow-none">
            📞 Call
          </a>
        </div>
      </aside>
    </>
  );
}
