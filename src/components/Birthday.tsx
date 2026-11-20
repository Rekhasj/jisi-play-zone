"use client";

import { useEffect, useState } from "react";
import { BIRTHDAY_EXTRAS, BIRTHDAY_PACKAGES, BIRTHDAY_POLICY, whatsAppLink } from "@/data/site";
import { PartyScene } from "./Scenes";
import { Car, Mascot, Section, SectionTitle, Star, rupee } from "./ui";

const PKG_ICON = ["🧁", "🎂", "🏰"];

type Day = "weekday" | "weekend";
const DAY_LABEL: Record<Day, string> = { weekday: "Mon – Fri", weekend: "Sat, Sun & Holidays" };

export default function Birthday() {
  const [active, setActive] = useState(1);
  const [day, setDay] = useState<Day>("weekday");
  const pkg = BIRTHDAY_PACKAGES[active];
  const [kids, setKids] = useState(pkg.kids);
  const [guests, setGuests] = useState(pkg.guests);

  // Open on today's prices.
  useEffect(() => {
    const d = new Date().getDay();
    setDay(d === 0 || d === 6 ? "weekend" : "weekday");
  }, []);

  const choose = (i: number) => {
    setActive(i);
    setKids(BIRTHDAY_PACKAGES[i].kids);
    setGuests(BIRTHDAY_PACKAGES[i].guests);
  };

  const price = pkg.prices[day];
  const extraKids = Math.max(0, kids - pkg.kids);
  const extraGuests = Math.max(0, guests - pkg.guests);
  const total = price + extraKids * pkg.extraKid[day] + extraGuests * BIRTHDAY_EXTRAS.extraGuest;
  const perKid = Math.round(price / pkg.kids);
  const save = Math.floor((pkg.worth[day] - price) / 100) * 100; // round down: "save ₹2,000", not "₹2,001"

  return (
    <Section id="birthday" bg="bg-pink-soft" fill="text-pink-soft">
      {/* bunting flags */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-1 overflow-hidden">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className={`h-7 w-6 shrink-0 shadow-sm [clip-path:polygon(0_0,100%_0,50%_100%)] ${
              ["bg-sun", "bg-grape", "bg-sky", "bg-grass", "bg-tangerine"][i % 5]
            }`}
          />
        ))}
      </div>
      <Mascot className="absolute left-2 top-16 w-14 animate-float" color="var(--color-sun)" />
      <Mascot className="absolute right-3 top-24 w-12 animate-float [animation-delay:-2s]" color="var(--color-grape)" />

      <div className="mx-auto max-w-5xl pt-6">
        <SectionTitle
          eyebrow="🎉 Birthday Packages"
          title="Party Time at JiSi!"
          text="Play zone + party room + decoration by JiSi Events. We handle everything!"
          ribbonClass="bg-grape text-white"
          textClass="text-ink"
        />

        <div data-reveal="up" className="sticker-sm mx-auto mb-5 flex w-fit rounded-full bg-white p-1">
          {(["weekday", "weekend"] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDay(d)}
              aria-pressed={day === d}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${day === d ? "bg-grape text-white" : "text-ink"}`}
            >
              {DAY_LABEL[d]}
            </button>
          ))}
        </div>

        <div data-reveal="up" className="mx-auto mb-8 grid max-w-md grid-cols-3 gap-3">
          {BIRTHDAY_PACKAGES.map((p, i) => (
            <button
              key={p.name}
              onClick={() => choose(i)}
              className={`sticker-sm flex flex-col items-center rounded-2xl px-1 py-2 font-bold transition ${
                active === i ? "-translate-y-1 bg-grape text-white" : "bg-white"
              }`}
            >
              <span className={`text-3xl ${active === i ? "animate-bob" : ""}`}>{PKG_ICON[i]}</span>
              <span className="text-sm leading-tight">{p.name}</span>
              <span className={`text-xs font-semibold ${active === i ? "text-sun" : "text-grape"}`}>{rupee(p.prices[day])}</span>
            </button>
          ))}
        </div>

        <div key={pkg.name} className="sticker animate-pop overflow-hidden rounded-[2rem] bg-white md:grid md:grid-cols-2">
          <div className="flex flex-col bg-[var(--color-pink-soft)]">
          <div className="relative aspect-[220/170] w-full">
            <PartyScene className="absolute inset-0 h-full w-full p-3 pb-12" accent={pkg.accent} />
            {pkg.popular && (
              <span className="absolute right-3 top-3 rotate-6 rounded-full shadow-md bg-sun px-3 py-1 text-sm font-extrabold uppercase">
                ⭐ Most Popular
              </span>
            )}
            <div className="absolute bottom-3 left-3 rounded-2xl shadow-md bg-white px-3 py-1.5">
              <h3 className="text-2xl leading-none text-ink">{pkg.name}</h3>
              <p className="text-sm font-semibold">
                👧 {pkg.kids} kids · 👨‍👩‍👧 {pkg.guests} guests
              </p>
            </div>
          </div>
          {/* What's in the package — sits under the cartoon so both columns are similar height */}
          <div className="flex-1 border-t border-pink-soft bg-white px-5 pb-6 pt-5 sm:px-7">
            <h4 className="font-display text-xl text-ink">Included</h4>
            <ul className="mt-2 space-y-2">
              {pkg.included.map((it) => (
                <li key={it} className="flex gap-2 font-medium">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full shadow-sm bg-grass text-xs text-white">
                    ✓
                  </span>
                  {it}
                </li>
              ))}
            </ul>

            <h4 className="mt-5 font-display text-xl text-ink">Not included</h4>
            <ul className="mt-2 space-y-2">
              {pkg.excluded.map((it) => (
                <li key={it} className="flex gap-2 font-medium text-ink/75">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full shadow-sm bg-cherry text-xs text-white">
                    ✕
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          </div>
          <div className="p-5 sm:p-7">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span key={price} className="animate-pop font-display text-5xl text-grape">{rupee(price)}</span>
              <span className="font-semibold text-ink/60">{DAY_LABEL[day]}</span>
              <span className="rounded-full bg-sun px-2.5 py-0.5 text-xs font-bold text-ink">Only {rupee(perKid)} per kid</span>
            </div>
            <p className="mt-1 text-sm font-semibold text-ink/60">
              Worth <s>{rupee(pkg.worth[day])}</s> if booked separately — you save{" "}
              <span className="text-grass-dark">{rupee(save)}</span>
            </p>
            {/* Play time differs on weekdays vs weekends */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-center">
              <div className="rounded-2xl shadow-sm bg-sky/20 py-2">
                <div className="text-xs font-bold uppercase text-ink/60">Mon – Fri</div>
                <div className="font-display text-xl text-ink">⏰ {pkg.playTime.weekday}</div>
              </div>
              <div className="rounded-2xl shadow-sm bg-sun/40 py-2">
                <div className="text-xs font-bold uppercase text-ink/60">Sat & Sun</div>
                <div className="font-display text-xl text-ink">⏰ {pkg.playTime.weekend}</div>
              </div>
            </div>

            {/* Cake & snacks: what's included and add-on prices */}
            <h4 className="mt-5 font-display text-xl text-ink">Cake &amp; food</h4>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <div className="rounded-2xl bg-pink-soft p-3">
                <div className="text-2xl">🎂</div>
                <div className="font-bold text-ink">Cake up to {pkg.cakeKg} kg free</div>
                <div className="text-ink/60">Theme or bigger cake at extra price</div>
              </div>
              <div className="rounded-2xl bg-sun-soft p-3">
                <div className="text-2xl">{pkg.food.included ? "🥤" : "🍟"}</div>
                <div className="font-bold text-ink">{pkg.food.title}</div>
                <div className="text-ink/60">{pkg.food.detail}</div>
              </div>
            </div>
            <p className="mt-2 rounded-2xl bg-lilac px-3 py-2 text-sm font-semibold text-ink/80">🎁 {BIRTHDAY_EXTRAS.others}</p>

            <div className="mt-5 rounded-2xl border-2 border-dashed border-grape/25 bg-lilac p-4">
              <label htmlFor="party-kids" className="flex items-center justify-between font-bold">
                <span>Kids in the play zone</span>
                <span className="rounded-full bg-grape px-3 py-0.5 font-display text-xl text-white">{kids}</span>
              </label>
              <input
                id="party-kids"
                type="range"
                min={pkg.kids}
                max={pkg.kids + 20}
                value={kids}
                onChange={(e) => setKids(Number(e.target.value))}
                className="mt-3 h-3 w-full cursor-pointer accent-grape"
              />
              <div className="mt-1 text-sm font-semibold text-ink/70">
                {extraKids > 0 ? `+${extraKids} extra kids × ${rupee(pkg.extraKid[day])}` : `🎈 ${pkg.kids} kids included`}
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 border-t border-grape/15 pt-3">
                <span className="text-sm font-bold">Total guests (kids + adults)</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.max(pkg.guests, g - 5))}
                    className="grid h-8 w-8 place-items-center rounded-full bg-white text-lg font-bold text-grape shadow-sm"
                    aria-label="Fewer guests"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-bold">{guests}</span>
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.min(pkg.guests + 60, g + 5))}
                    className="grid h-8 w-8 place-items-center rounded-full bg-grape text-lg font-bold text-white shadow-sm"
                    aria-label="More guests"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-1 text-sm font-semibold text-ink/70">
                {extraGuests > 0
                  ? `+${extraGuests} extra guests × ${rupee(BIRTHDAY_EXTRAS.extraGuest)}`
                  : `👨‍👩‍👧 ${pkg.guests} guests included`}
              </div>

              <div className="mt-3 flex items-end justify-between border-t border-grape/15 pt-3">
                <span className="text-sm font-semibold text-ink/70">
                  Estimated total
                  <span className="block text-xs font-medium text-ink/50">Cake &amp; extras quoted separately</span>
                </span>
                <span key={total} className="animate-pop font-display text-3xl text-ink">
                  {rupee(total)}
                </span>
              </div>
            </div>

            <a
              href={whatsAppLink(
                `Hi JiSi Play Zone! I'd like to book the ${pkg.name} (${DAY_LABEL[day]}) for ${kids} kids and ${guests} guests in total (estimated ${rupee(total)}). ` +
                  "Please share available dates, and the price for a theme cake / return gifts if we need them."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-5 w-full bg-grape text-white"
            >
              🎉 Enquire on WhatsApp
            </a>
          </div>
        </div>

        {/* Booking rules, shown for every package */}
        <div data-reveal="up" className="sticker-sm mx-auto mt-6 max-w-3xl rounded-3xl bg-white p-5">
          <h4 className="font-display text-xl text-ink">📋 Good to know before booking</h4>
          <ul className="mt-2 space-y-1.5 text-sm font-medium">
            {BIRTHDAY_POLICY.map((p) => (
              <li key={p} className="flex gap-2">
                <span>🎀</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* balloon car driving past under the party */}
      <div className="h-20" />
      <div className="pointer-events-none absolute bottom-3 left-0 animate-drive [animation-duration:16s]">
        <Car balloons className="w-28" color="var(--color-grape)" />
      </div>
      <Star className="absolute bottom-24 right-6 w-9 animate-wiggle" />
    </Section>
  );
}
