"use client";

import { SHOP_ITEMS, telLink, whatsAppLink } from "@/data/site";
import { SHOP_ART } from "./ShopArt";
import { Section, SectionTitle, Star, WhatsAppIcon } from "./ui";

// Toys, books and gifts sold at the play zone counter.
export default function Shop() {
  return (
    <Section id="shop" bg="bg-cream" fill="text-cream">
      <Star className="absolute right-6 top-14 w-8 animate-wiggle" />
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="🛍️ Shop"
          title="Toys, Books & Gifts"
          text="Pick up a little something at our counter — for your kids, a birthday or return gifts."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {SHOP_ITEMS.map((item, i) => {
            const Art = SHOP_ART[item.art];
            return (
              <article
                key={item.name}
                data-reveal="up"
                style={{ transitionDelay: `${(i % 3) * 120}ms` }}
                className="sticker group flex flex-col overflow-hidden rounded-3xl bg-white transition duration-300 hover:-translate-y-2"
              >
                <div className={`grid aspect-[4/3] place-items-center ${item.bg}`}>
                  <Art className="h-[78%] w-auto transition duration-500 group-hover:-rotate-3 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                  <h3 className="text-xl leading-none text-ink">{item.name}</h3>
                  <p className="mt-1.5 text-sm leading-snug text-ink/75">{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
        {/* one contact row for the whole shop (cards stay clean) */}
        <div data-reveal="up" className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsAppLink("Hi JiSi Play Zone! I'd like to know about the toys, books and gifts at your shop. Please share prices.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-grape text-white"
          >
            <WhatsAppIcon /> Ask on WhatsApp
          </a>
          <a href={telLink} className="btn bg-sun text-ink">
            📞 Call us
          </a>
        </div>
      </div>
    </Section>
  );
}
