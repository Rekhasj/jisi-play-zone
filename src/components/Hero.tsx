"use client";

import { useEffect, useState } from "react";
import { BUSINESS, HERO_SLIDES, OPENING_HOURS, PARTY_AREA_OFFER, PRICING, whatsAppLink } from "@/data/site";
import { HeroScene } from "./Scenes";
import { Mascot, Road, Star, rupee } from "./ui";

export const fmtTime = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return `${((h + 11) % 12) + 1}${m ? `:${String(m).padStart(2, "0")}` : ""} ${h >= 12 ? "PM" : "AM"}`;
};

function useOpenStatus() {
  const [status, setStatus] = useState<{ open: boolean; text: string } | null>(null);
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const today = OPENING_HOURS[now.getDay()];
      const mins = now.getHours() * 60 + now.getMinutes();
      const toMin = (t: string) => {
        const [h, m] = t.split(":").map(Number);
        return h * 60 + m;
      };
      if (mins >= toMin(today.open) && mins < toMin(today.close)) {
        setStatus({ open: true, text: `Open now · till ${fmtTime(today.close)}` });
      } else if (mins < toMin(today.open)) {
        setStatus({ open: false, text: `Opens today at ${fmtTime(today.open)}` });
      } else {
        const tomorrow = OPENING_HOURS[(now.getDay() + 1) % 7];
        setStatus({ open: false, text: `Opens tomorrow ${fmtTime(tomorrow.open)}` });
      }
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);
  return status;
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const status = useOpenStatus();
  const count = HERO_SLIDES.length;
  const [todayHours, setTodayHours] = useState("");
  useEffect(() => {
    const t = OPENING_HOURS[new Date().getDay()];
    setTodayHours(`${fmtTime(t.open)}–${fmtTime(t.close)}`);
  }, []);

  // Rotate the headline every few seconds.
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 4500);
    return () => clearInterval(id);
  }, [count, index]);

  const slide = HERO_SLIDES[index];

  return (
    <section id="home" className="relative">
      <div className="relative isolate flex min-h-[92svh] flex-col overflow-hidden rounded-b-[2.5rem] pt-24 md:min-h-[720px]">
        {/* Background: deep teal at the top (so the header blends in) fading to light teal */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-grape via-[var(--color-sky)] to-[var(--color-sky-soft)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-confetti opacity-60" />

        {/* Sky decorations */}
        {/* party bunting across the room */}
        <div className="pointer-events-none absolute inset-x-0 top-24 flex justify-center gap-1.5 overflow-hidden">
          {Array.from({ length: 22 }).map((_, i) => (
            <span
              key={i}
              className={`h-6 w-5 shrink-0 [clip-path:polygon(0_0,100%_0,50%_100%)] ${["bg-sun", "bg-bubble", "bg-sky", "bg-grass", "bg-tangerine"][i % 5]}`}
              style={{ transform: `translateY(${Math.round(Math.sin(i / 1.6) * 5)}px)` }}
            />
          ))}
        </div>
        <Star className="pointer-events-none absolute left-5 top-40 w-8 animate-wiggle" />
        <Star className="pointer-events-none absolute right-8 top-56 w-6 animate-wiggle [animation-delay:-1s]" color="var(--color-cherry)" />
        <Mascot className="pointer-events-none absolute left-3 top-[44%] w-14 animate-float drop-shadow-xl md:left-[12%] md:top-[30%] md:w-24" />

        {/* Headline */}
        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-5 pt-14 text-center text-white md:pt-16">
          {status && (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-ink shadow-lg">
              <span className={`h-2.5 w-2.5 rounded-full ${status.open ? "animate-pulse bg-grass-dark" : "bg-cherry"}`} />
              {status.text}
            </span>
          )}
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-sun drop-shadow">JiSi Play Zone · Kuppam</p>
          <h1
            key={index}
            className="mt-2 animate-pop text-[2.75rem] leading-[1.02] [text-shadow:0_4px_16px_rgb(15_118_110/0.45)] sm:text-7xl"
          >
            {slide.title}
          </h1>
          <p className="mt-3 max-w-md text-lg font-medium text-white/95 [text-shadow:0_2px_10px_rgb(15_118_110/0.5)]">{slide.text}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#book" className="btn bg-white text-grape">
              🎟️ Book Play Time
            </a>
            <a
              href={whatsAppLink("Hi JiSi Play Zone! I'd like to know about birthday party packages.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-sun text-ink shadow-[0_10px_22px_-10px_rgb(245_167_0/0.9)]"
            >
              🎂 Birthday Party
            </a>
          </div>
          <div className="mt-6 flex gap-2" role="tablist" aria-label="Headlines">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setIndex(i)}
                aria-label={`Headline ${i + 1}`}
                aria-selected={i === index}
                role="tab"
                className={`h-2.5 rounded-full transition-all ${i === index ? "w-7 bg-sun" : "w-2.5 bg-white/70"}`}
              />
            ))}
          </div>
        </div>

        {/* Cartoon playground */}
        <div className="relative mt-auto h-56 w-full sm:h-72 md:h-80">
          <HeroScene className="absolute inset-0 h-full w-full" />
        </div>

        {/* Cartoon road with a car and a bike driving past */}
        <Road className="-mt-[60px]" />
      </div>

      {/* Quick-info bar: the things parents ask first */}
      <div className="relative z-10 mx-4 mt-5 grid grid-cols-2 gap-3 sm:mx-auto sm:max-w-5xl sm:grid-cols-4">
        {[
          { icon: "⏰", bg: "bg-sun-soft", title: todayHours ? `Today ${todayHours}` : "Open all 7 days", sub: "Open all 7 days", href: "#contact" },
          { icon: "🎟️", bg: "bg-lilac", title: `From ${rupee(PRICING.tickets[0].price)}`, sub: `per child · ${PRICING.session}`, href: "#pricing" },
          { icon: "🎂", bg: "bg-pink-soft", title: "Birthday parties", sub: `from just ${rupee(PARTY_AREA_OFFER.price)}`, href: "#birthday" },
          { icon: "📍", bg: "bg-sky-soft", title: BUSINESS.city, sub: "Get directions →", href: BUSINESS.mapsLink, external: true },
        ].map((c, i) => (
          <a
            key={c.icon}
            href={c.href}
            {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex items-center gap-2.5 rounded-2xl bg-white p-2.5 shadow-[0_14px_32px_-16px_rgb(15_118_110/0.45)] transition hover:-translate-y-1"
          >
            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-2xl ${c.bg} animate-bob`} style={{ animationDelay: `${i * 0.25}s` }}>
              {c.icon}
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block font-display text-sm text-ink sm:text-base">{c.title}</span>
              <span className="block text-xs font-semibold text-ink/55">{c.sub}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
