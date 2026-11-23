"use client";

import { useEffect, useState } from "react";
import { ATTRACTION_NOTE, ATTRACTIONS, MEMBERSHIP_NOTES, MEMBERSHIPS, PRICING, RULES, WHY_US, whatsAppLink } from "@/data/site";
import { PartyCake, Rocket, SlideScene, SunFace, TrampolineScene, Trophy, WHY_ART } from "./Illustrations";
import { PartyScene, SCENES } from "./Scenes";
import { Cloud, Mascot, Reveal, Section, SectionTitle, Star, Wave, rupee } from "./ui";

export function WhyUs() {
  return (
    <section id="why" className="relative bg-white px-4 pb-6 pt-14">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Why Choose Us" title="Why Parents Love JiSi" text="Happy kids, relaxed parents — everything under one roof." />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {WHY_US.map((w, i) => {
            const Art = WHY_ART[w.art];
            return (
              <div
                key={w.title}
                data-reveal="up"
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`group rounded-[2rem] ${w.bg} px-4 pb-6 pt-5 text-center transition hover:-translate-y-1.5`}
              >
                <Art className="mx-auto h-20 w-20 transition group-hover:scale-110 sm:h-24 sm:w-24" />
                <h3 className="mt-3 text-lg leading-tight text-ink sm:text-xl">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-snug text-ink/70">{w.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" bg="bg-white" fill="text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-sm">
          {/* Two round photos, like stickers on a scrapbook */}
          <div className="relative h-80">
            <div className="pointer-events-none absolute inset-4 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-lilac" />
            <div className="sticker absolute left-0 top-0 grid h-56 w-56 place-items-center overflow-hidden rounded-full bg-sky-soft">
              <SlideScene className="w-[115%] max-w-none" />
            </div>
            <div className="sticker absolute bottom-0 right-0 grid h-44 w-44 place-items-center overflow-hidden rounded-full bg-[var(--color-pink-soft)]">
              <PartyScene className="h-auto w-[86%]" accent="var(--color-grape)" />
            </div>
            <Star className="absolute right-6 top-2 w-10 animate-wiggle" />
            <Star className="absolute bottom-10 left-6 w-7 animate-wiggle [animation-delay:-1.2s]" color="var(--color-grape)" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <span className="inline-block rounded-full bg-grape px-4 py-1 text-sm font-bold uppercase tracking-wider text-white">
            About Us
          </span>
          <h2 className="mt-3 text-4xl leading-[1.05] text-ink sm:text-5xl">
            Kuppam&apos;s happiest place to <span className="text-grape">play &amp; celebrate!</span>
          </h2>
          <p className="mt-4 text-lg text-ink/80">
            JiSi Play Zone is an indoor soft play centre for kids in Kuppam. Kids climb, slide,
            bounce and make new friends while parents relax nearby.
          </p>
          <p className="mt-3 text-lg text-ink/80">
            Book a birthday party and you get the play zone, the party area and theme decoration all in one place.
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-2.5">
            {[
              ["🛡️", "Soft padded play"],
              ["👩‍🏫", "Trained staff"],
              ["🛋️", "Parent lounge"],
              ["🎈", "Party area"],
              ["📹", "CCTV monitored"],
            ].map(([icon, t]) => (
              <li key={t} className="sticker-sm flex items-center gap-2 rounded-2xl bg-white px-3 py-2 font-semibold">
                <span className="text-xl">{icon}</span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

const CARD_BG = ["bg-sun-soft", "bg-lilac", "bg-sky-soft", "bg-mint-soft", "bg-pink-soft"];

export function Attractions() {
  return (
    <Section id="attractions" bg="bg-lilac" fill="text-lilac">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Attractions" title="So Much to Explore!" text="Soft, safe and super fun — for every little explorer." />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {ATTRACTIONS.map((a, i) => (
            <article
              key={a.name}
              data-reveal="up"
              className={`sticker group overflow-hidden rounded-3xl bg-white transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_50px_-20px_rgb(15_118_110/0.55)] max-md:last:odd:col-span-2 md:col-span-2`}
              style={{ transitionDelay: `${(i % 3) * 120}ms` }}
            >
              <div className={`relative overflow-hidden aspect-[4/3.2] ${CARD_BG[i % CARD_BG.length]}`}>
                {(() => {
                  const Scene = SCENES[a.scene];
                  return <Scene className="absolute inset-0 h-full w-full p-2 transition duration-500 group-hover:-rotate-2 group-hover:scale-110" />;
                })()}
              </div>
              <div className="px-4 pb-4 pt-4">
                <h3 className="text-xl leading-none text-ink">{a.emoji} {a.name}</h3>
                <p className="mt-1.5 text-sm leading-snug text-ink/75">{a.text}</p>
                <a href="#book" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-grape transition group-hover:gap-2">
                  Book a visit <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <p data-reveal="up" className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-ink shadow-sm">
          <span className="text-xl">👶</span>
          {ATTRACTION_NOTE}
        </p>
      </div>
    </Section>
  );
}

export function Pricing() {
  // Default to today's ticket: weekend on Sat/Sun, weekday otherwise.
  const [sel, setSel] = useState(0);
  useEffect(() => {
    const d = new Date().getDay();
    setSel(d === 0 || d === 6 ? 1 : 0);
  }, []);
  const [kids, setKids] = useState(1);
  const ticket = PRICING.tickets[sel];
  const total = ticket.price * kids;
  const TICKET_BG = ["bg-grape text-white", "bg-sun text-ink"];

  return (
    <Section id="pricing" bg="bg-sun-soft" fill="text-sun-soft">
      <Mascot className="absolute -right-4 top-10 w-20 rotate-12 animate-float opacity-90 sm:right-10" color="var(--color-grape)" />
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="Pricing"
          title="Play Time Tickets"
          text={`Per child · ${PRICING.session} of non-stop fun!`}
          ribbonClass="bg-grape text-white"
        />

        <div className="grid grid-cols-2 gap-4">
          {PRICING.tickets.map((t, i) => {
            const selected = sel === i;
            return (
              <button
                key={t.id}
                onClick={() => setSel(i)}
                aria-pressed={selected}
                data-reveal={i ? "right" : "left"}
                className={`sticker relative overflow-hidden rounded-3xl bg-white text-center transition ${
                  selected ? "-translate-y-1 scale-[1.03] ring-4 ring-grape ring-offset-2 ring-offset-sun-soft" : "opacity-90"
                }`}
              >
                <div className="bg-white px-2 pt-2">
                  {t.art === "slide" ? <SlideScene className="mx-auto w-full max-w-[220px]" /> : <TrampolineScene className="mx-auto w-full max-w-[220px]" />}
                </div>
                {/* ticket header with punched holes */}
                <div className={`relative px-2 py-2.5 font-bold ${TICKET_BG[i]}`}>
                  {t.days}
                  <span className="absolute -bottom-2.5 -left-2.5 h-5 w-5 rounded-full bg-sun-soft" />
                  <span className="absolute -bottom-2.5 -right-2.5 h-5 w-5 rounded-full bg-sun-soft" />
                </div>
                <div className="border-t-2 border-dashed border-ink/30 px-2 pb-4 pt-3">
                  <div className="font-display text-5xl text-ink sm:text-6xl">{rupee(t.price)}</div>
                  <div className="text-sm font-semibold text-ink/60">per child · {PRICING.session}</div>
                </div>
                {selected && <span className="absolute right-2 top-2 text-2xl">✅</span>}
              </button>
            );
          })}
        </div>

        {/* Rides add-on (not included in the ticket) */}
        <div data-reveal="up" className="sticker-sm mt-6 flex items-center gap-4 rounded-3xl bg-white p-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-lilac text-3xl" aria-hidden>
            🚗
          </span>
          <div className="flex-1">
            <div className="font-display text-xl leading-tight text-ink">Fun Rides</div>
            <div className="text-sm font-semibold text-ink/60">
              {PRICING.rides.types} · mix &amp; match
            </div>
          </div>
          <div className="text-right">
            <div className="font-display text-3xl leading-none text-grape">{rupee(PRICING.rides.price)}</div>
            <div className="text-xs font-bold text-ink/60">for {PRICING.rides.rounds} rounds</div>
          </div>
        </div>

        {/* Mini calculator */}
        <div data-reveal="up" className="sticker mt-7 rounded-3xl bg-grape p-4 text-white">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-white/80">How many kids?</div>
              <div className="mt-1 flex items-center gap-3">
                <button
                  onClick={() => setKids((k) => Math.max(1, k - 1))}
                  className="grid h-10 w-10 place-items-center rounded-full shadow-sm bg-white text-2xl font-bold text-ink active:scale-90"
                  aria-label="Fewer kids"
                >
                  −
                </button>
                <span className="w-7 text-center font-display text-3xl">{kids}</span>
                <button
                  onClick={() => setKids((k) => Math.min(10, k + 1))}
                  className="grid h-10 w-10 place-items-center rounded-full shadow-sm bg-sun text-2xl font-bold text-ink active:scale-90"
                  aria-label="More kids"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-white/80">{ticket.days}</div>
              <div key={total} className="animate-pop font-display text-4xl text-sun">
                {rupee(total)}
              </div>
            </div>
          </div>
          <a
            href={whatsAppLink(
              `Hi JiSi Play Zone! I'd like to book play time (${ticket.days}, ${PRICING.session}) for ${kids} kid${kids > 1 ? "s" : ""}. Total ${rupee(total)}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-4 w-full bg-sun text-ink"
          >
            Book this on WhatsApp
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <ul data-reveal="left" className="sticker-sm space-y-2 rounded-3xl bg-white p-5 font-medium">
            <li className="font-display text-xl text-ink">Good to know</li>
            {PRICING.notes.map((n) => (
              <li key={n} className="flex gap-2 text-sm">
                <span>🧦</span>
                {n}
              </li>
            ))}
          </ul>
          <ul data-reveal="right" className="sticker-sm space-y-2 rounded-3xl bg-white p-5 font-medium">
            <li className="font-display text-xl text-ink">Play zone rules</li>
            {RULES.map((r) => (
              <li key={r} className="flex gap-2 text-sm">
                <span>✅</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

const MEMBERSHIP_ART = { rocket: Rocket, trophy: Trophy, sun: SunFace } as const;
const MEMBERSHIP_TONE = {
  brand: { panel: "bg-lilac", text: "text-grape", button: "bg-grape text-white", chip: "bg-lilac text-grape" },
  navy: { panel: "bg-sun-soft", text: "text-ink", button: "bg-ink text-white", chip: "bg-sun-soft text-ink" },
  coral: { panel: "bg-pink-soft", text: "text-cherry-dark", button: "bg-cherry-dark text-white", chip: "bg-pink-soft text-cherry-dark" },
} as const;

export function Membership() {
  return (
    <Section id="membership" bg="bg-mint-soft" fill="text-mint-soft">
      <Star className="absolute left-6 top-16 w-8 animate-wiggle" />
      <Mascot className="absolute right-4 top-14 hidden w-14 animate-float sm:block" color="var(--color-cherry)" />
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Membership"
          title="Play More, Pay Less!"
          text="One card for every day of the week, Monday to Sunday."
        />
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto px-6 pb-6 pt-4 md:mx-auto md:grid md:max-w-5xl md:grid-cols-3 md:overflow-visible">
          {MEMBERSHIPS.map((m, i) => {
            // Daily Play Pass shows its price per day (30 days); hour passes show no badge.
            const perDay = m.hours ? null : `${rupee(Math.round(m.price / 30))} / day`;
            const tone = MEMBERSHIP_TONE[m.tone];
            const Art = MEMBERSHIP_ART[m.art];
            return (
              <article
                key={m.name}
                data-reveal="up"
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`sticker relative flex w-[78%] shrink-0 snap-center flex-col overflow-hidden rounded-[2rem] bg-white transition duration-300 hover:-translate-y-1.5 md:w-auto ${
                  m.popular ? "ring-4 ring-sun" : ""
                }`}
              >
                {m.popular && (
                  <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-xl bg-sun px-3 py-1 text-xs font-extrabold uppercase text-ink">
                    ⭐ Best value
                  </span>
                )}

                {/* cartoon panel (Daily Play Pass also shows its price per day) */}
                <div className={`relative flex h-36 items-center justify-center ${tone.panel}`}>
                  <Art className="h-24 w-24 animate-float" />
                  {perDay && (
                    <span className="absolute right-3 top-3 rotate-6 rounded-2xl bg-sun px-2.5 py-1 text-center font-display text-sm leading-tight text-ink shadow-md">
                      Only
                      <br />
                      {perDay}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                  <h3 className={`text-2xl leading-tight ${tone.text}`}>{m.name}</h3>

                  <div className="mt-2 flex flex-wrap gap-1.5 text-xs font-bold">
                    <span className={`rounded-full px-2.5 py-1 ${tone.chip}`}>⏱ {m.hours ? `${m.hours} hours` : "1 hour every day"}</span>
                    <span className={`rounded-full px-2.5 py-1 ${tone.chip}`}>📅 {m.validity}</span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
                    <span className="font-display text-4xl text-ink">{rupee(m.price)}</span>
                    {!m.hours && <span className="font-bold text-ink/60">/month</span>}
                  </div>

                  <ul className="mt-4 space-y-2 text-sm font-medium text-ink/80">
                    {m.perks.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-bold ${tone.chip}`}>✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5">
                  <a
                    href={whatsAppLink(
                      `Hi JiSi Play Zone! I'm interested in the ${m.name} membership (${m.hours ? `${m.hours} hours` : "1 hour every day"}, ${m.validity}, ${rupee(m.price)}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn w-full ${tone.button}`}
                  >
                    Get {m.name}
                  </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="text-center text-sm font-semibold text-grape md:hidden">👉 Swipe to see all cards</p>
        <ul className="sticker-sm mx-auto mt-6 max-w-2xl space-y-1.5 rounded-3xl bg-white p-5 text-sm font-medium">
          {MEMBERSHIP_NOTES.map((n) => (
            <li key={n} className="flex gap-2">
              <span>💡</span>
              {n}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/** Full-width photo with a colourful overlay and text on top. */
export function PhotoBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <Wave className="pointer-events-none absolute inset-x-0 top-0 z-10 text-white" flip />
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[var(--color-grape-dark)] via-grape to-[var(--color-sky)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-confetti" />
      <Rocket className="pointer-events-none absolute bottom-10 left-4 hidden w-28 animate-float md:block lg:left-16" />
      <PartyCake className="pointer-events-none absolute bottom-10 right-4 hidden w-28 animate-bob md:block lg:right-16" />
      <Mascot className="pointer-events-none absolute left-6 top-24 w-12 animate-float md:hidden" color="var(--color-sun)" />
      <Cloud className="pointer-events-none absolute top-16 w-20 animate-drift opacity-90" />
      <Star className="pointer-events-none absolute right-6 top-20 w-8 animate-wiggle" />

      <div className="mx-auto max-w-5xl px-4 pb-20 pt-24 text-center text-white">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sun">Kuppam&apos;s own play world</p>
        <h2 data-reveal="zoom" className="mx-auto mt-2 max-w-2xl text-4xl leading-tight [text-shadow:0_4px_18px_rgb(31_33_82/0.35)] sm:text-5xl">
          Where little feet run free &amp; big smiles never stop! 🎉
        </h2>
        <a href="#attractions" className="btn mt-8 bg-white text-grape">
          Explore the play zone 👇
        </a>
      </div>
    </section>
  );
}
