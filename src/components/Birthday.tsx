"use client";

import { BIRTHDAY_ADDONS, BIRTHDAY_OPTIONS, BIRTHDAY_POLICY, BUSINESS, telLink, whatsAppLink } from "@/data/site";
import { PartyScene } from "./Scenes";
import { Car, Mascot, Section, SectionTitle, Star, rupee } from "./ui";

// Card colours for the two options: teal for the budget one, white for the full play area.
const OPTION_STYLE = [
  { card: "bg-grape text-white", muted: "text-white/75", price: "text-sun", tag: "bg-sun text-ink", btn: "bg-sun text-ink" },
  { card: "bg-white text-ink", muted: "text-ink/70", price: "text-grape", tag: "bg-grape text-white", btn: "bg-grape text-white" },
];

export default function Birthday() {
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
          ribbonClass="bg-grape text-white"
        />

        {/* Two options side by side on desktop, stacked on phones */}
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {BIRTHDAY_OPTIONS.map((o, i) => {
            const s = OPTION_STYLE[i];
            const priceText = o.price ? rupee(o.price) : "Ask for price";
            return (
              <div key={o.name} data-reveal="up" className={`sticker relative flex flex-col overflow-hidden rounded-[2rem] p-5 sm:p-6 ${s.card}`}>
                {/* Party cartoon at the top of each card */}
                <div className="relative -mx-5 -mt-5 mb-4 aspect-[220/150] bg-[var(--color-pink-soft)] sm:-mx-6 sm:-mt-6">
                  <PartyScene className="absolute inset-0 h-full w-full p-3" accent={i === 0 ? "var(--color-grape)" : "#fb923c"} />
                </div>
                <span className={`relative w-fit -rotate-2 rounded-full px-3 py-1 text-xs font-extrabold uppercase ${s.tag}`}>{o.tag}</span>
                <h3 className="relative mt-2 text-3xl leading-tight">{o.name}</h3>
                <div className={`relative font-display text-4xl ${s.price}`}>{priceText}</div>
                <ul className="relative mt-3 flex-1 space-y-1.5 text-sm font-semibold">
                  {o.included.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-grass text-[10px] text-white">✓</span>
                      {it}
                    </li>
                  ))}
                  {o.excluded.map((it) => (
                    <li key={it} className={`flex gap-2 ${s.muted}`}>
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cherry text-[10px] text-white">✕</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsAppLink(
                    o.price
                      ? `Hi JiSi Play Zone! I'd like to book the ${o.name} birthday (${rupee(o.price)}). Please share available dates.`
                      : `Hi JiSi Play Zone! I'd like to book the ${o.name} for a birthday party. Please share the price and available dates.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn relative mt-5 w-full ${s.btn}`}
                >
                  {o.price ? `Book for ${rupee(o.price)}` : "💬 Ask for price"}
                </a>
              </div>
            );
          })}
        </div>

        {/* Add-ons for any party; prices on enquiry */}
        <div data-reveal="up" className="sticker-sm mx-auto mt-6 max-w-3xl rounded-3xl bg-white p-5">
          <h4 className="font-display text-xl text-ink">🎁 Add-ons for your party</h4>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {BIRTHDAY_ADDONS.map((a) => (
              <div key={a.name} className="rounded-2xl bg-pink-soft p-3 text-sm">
                <div className="text-2xl">{a.icon}</div>
                <div className="font-bold text-ink">{a.name}</div>
                <div className="text-ink/60">{a.detail}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm font-semibold text-ink/80">
            For cake prices, flavours, snacks and other details, message or call us.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={whatsAppLink(
                "Hi JiSi Play Zone! Please share the prices for birthday add-ons: cake (per kg & flavours), snacks, return gifts, party poppers and birthday number."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-grape text-white"
            >
              💬 Enquire on WhatsApp
            </a>
            <a href={telLink} className="btn bg-sun text-ink">
              📞 Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Booking rules */}
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
