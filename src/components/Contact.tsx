"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { BIRTHDAY_OPTIONS, BUSINESS, FAQS, NAV_LINKS, OPENING_HOURS, TESTIMONIALS, telLink, whatsAppLink } from "@/data/site";
import { Logo } from "./Header";
import { fmtTime } from "./Hero";
import { Bike, Cloud, Mascot, Section, SectionTitle, Star, Wave, WhatsAppIcon } from "./ui";


export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = ref.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (el && card) setActive(Math.round(el.scrollLeft / (card.offsetWidth + 20)));
  };
  const scrollTo = (i: number) => {
    const el = ref.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
  };

  return (
    <Section id="testimonials" bg="bg-sky-soft" fill="text-sky-soft">
      <Cloud className="absolute -left-6 top-8 w-24 opacity-90" />
      <Cloud className="absolute -right-4 bottom-10 w-20 opacity-90" />
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="⭐ Testimonials" title="Happy Parents Say..." />
        <div ref={ref} onScroll={onScroll} className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 pt-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} data-reveal="up" className="sticker relative w-[82%] shrink-0 snap-center rounded-[2rem] bg-white p-6 sm:w-[45%] lg:w-[31%]">
              {/* speech bubble tail */}
              <span className="absolute -bottom-[14px] left-10 h-6 w-6 rotate-45 bg-white" />
              <div className="text-2xl tracking-wider text-sun" aria-label={`${t.rating} out of 5 stars`}>
                {"★".repeat(t.rating)}
                <span className="text-ink/15 [text-shadow:none]">{"★".repeat(5 - t.rating)}</span>
              </div>
              <blockquote className="mt-2 text-lg font-medium leading-snug">&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-full shadow-md font-display text-xl text-white bg-grape`}>
                  {t.name[0]}
                </span>
                <span className="font-bold">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-3 flex justify-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              onClick={() => scrollTo(i)}
              aria-label={`Review ${i + 1}`}
              className={`h-3.5 rounded-full shadow-sm transition-all ${active === i ? "w-8 bg-sun" : "w-3.5 bg-white"}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}


export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" bg="bg-white" fill="text-white">
      <div className="mx-auto max-w-3xl">
        <SectionTitle eyebrow="❓ FAQ" title="Parents Often Ask" ribbonClass="bg-grape text-white" />
        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} data-reveal="up" className={`sticker-sm overflow-hidden rounded-3xl bg-white transition ${isOpen ? "-translate-y-0.5" : ""}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-3 p-3.5 text-left text-lg font-bold"
                >
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full shadow-sm font-display bg-lilac text-grape`}>
                    {i + 1}
                  </span>
                  <span className="flex-1 leading-snug">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full shadow-sm text-xl transition-transform ${
                      isOpen ? "rotate-45 bg-grape text-white" : "bg-lilac text-grape"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden px-4 font-medium text-ink/75">
                    <span className="block pb-4 pl-12">{f.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

const PURPOSES = [
  { label: "Play time", icon: "🛝" },
  ...BIRTHDAY_OPTIONS.map((p) => ({ label: `Birthday – ${p.name}`, icon: "🎂" })),
  { label: "Membership", icon: "💳" },
  { label: "Other question", icon: "💬" },
];

export function BookingForm() {
  const [form, setForm] = useState({ name: "", childAge: "", purpose: PURPOSES[0].label, date: "", kids: 1, note: "" });
  const [today, setToday] = useState("");
  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);
  const set = (k: "name" | "childAge" | "date" | "note") => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hi JiSi Play Zone! 👋",
      `Name: ${form.name}`,
      `Enquiry: ${form.purpose}`,
      form.date && `Date: ${new Date(form.date).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })}`,
      `Kids: ${form.kids}`,
      form.childAge && `Child's age: ${form.childAge}`,
      form.note && `Note: ${form.note}`,
    ].filter(Boolean);
    window.open(whatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const input = "w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition focus:border-grape focus:bg-lilac/40";

  return (
    <Section id="book" bg="bg-sky-soft" fill="text-sky-soft" className="bg-dots">
      <Mascot className="absolute right-2 top-6 w-16 animate-float" color="var(--color-sun)" />
      <div className="mx-auto max-w-xl">
        <SectionTitle
          eyebrow="🎟️ Book Now"
          title="Reserve Your Fun!"
          text="Fill this in and tap send. WhatsApp opens with your details ready."
        />
        <form onSubmit={submit} data-reveal="zoom" className="sticker space-y-4 rounded-[2rem] bg-white p-5 sm:p-7">
          <div>
            <p className="mb-2 font-bold">What are you booking?</p>
            <div className="flex flex-wrap gap-2">
              {PURPOSES.map((p) => (
                <button
                  type="button"
                  key={p.label}
                  onClick={() => setForm((f) => ({ ...f, purpose: p.label }))}
                  className={`rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold transition ${
                    form.purpose === p.label ? "bg-grape text-white" : "bg-white"
                  }`}
                >
                  {p.icon} {p.label}
                </button>
              ))}
            </div>
          </div>
          <input required placeholder="Parent's name *" value={form.name} onChange={set("name")} className={input} autoComplete="name" />
          <div className="grid grid-cols-2 gap-3">
            <label className="text-sm font-bold">
              📅 Date
              <input type="date" min={today} value={form.date} onChange={set("date")} className={`${input} mt-1 px-2`} />
            </label>
            <div className="text-sm font-bold">
              👧 Kids
              <div className="mt-1 flex items-center justify-between rounded-2xl border-2 border-slate-200 px-1.5 py-1.5">
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, kids: Math.max(1, f.kids - 1) }))}
                  className="grid h-9 w-9 place-items-center rounded-full bg-lilac text-xl"
                  aria-label="Fewer kids"
                >
                  −
                </button>
                <span className="font-display text-2xl">{form.kids}</span>
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, kids: Math.min(60, f.kids + 1) }))}
                  className="grid h-9 w-9 place-items-center rounded-full bg-sun text-xl"
                  aria-label="More kids"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <input placeholder="Child's age (e.g. 4 years)" value={form.childAge} onChange={set("childAge")} className={input} />
          <textarea placeholder="Anything else? Theme, time, questions…" rows={3} value={form.note} onChange={set("note")} className={input} />
          <button type="submit" className="btn w-full bg-[#25d366] py-3.5 text-lg text-white">
            <WhatsAppIcon className="h-6 w-6" /> Send on WhatsApp
          </button>
          <a href={telLink} className="block text-center font-bold text-grape">
            or call us 📞 {BUSINESS.phoneDisplay}
          </a>
        </form>
      </div>
    </Section>
  );
}

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function Footer() {
  const [todayIdx, setTodayIdx] = useState(-1);
  useEffect(() => setTodayIdx(new Date().getDay()), []);

  return (
    <footer id="contact" className="relative bg-grape-dark text-white">
      <Wave className="pointer-events-none absolute inset-x-0 top-0 -translate-y-[calc(100%-1px)] text-grape-dark" />
      {/* Night-sky call to action */}
      <div className="relative overflow-hidden px-4 pb-12 pt-10 text-center">
        {[
          "left-[8%] top-6",
          "left-[30%] top-16",
          "right-[12%] top-8",
          "right-[30%] top-24",
          "left-[18%] bottom-8",
          "right-[8%] bottom-14",
        ].map((pos, i) => (
          <span key={pos} className={`absolute h-1.5 w-1.5 animate-pulse rounded-full bg-white ${pos}`} style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
        <span className="absolute -left-8 top-20 h-24 w-24 rounded-full border-[3px] border-white/70 bg-bubble shadow-[inset_-10px_-8px_0_#00000022]" />
        <span className="absolute -right-6 top-4 h-14 w-14 rounded-full bg-sun shadow-[0_0_30px_var(--color-sun)]" />
        <Star className="absolute right-10 bottom-10 w-8 animate-wiggle" />
        <div className="pointer-events-none absolute bottom-1 left-0 animate-drive-back">
          <Bike className="w-12 -scale-x-100" color="var(--color-sun)" />
        </div>
        <p className="relative text-lg font-semibold text-sun">See you at the play zone! 👋</p>
        <h2 className="text-outline relative mx-auto mt-2 max-w-md text-4xl leading-tight">Your Kid&apos;s Happiest Day Starts Here!</h2>
        <a href="#book" className="btn relative mt-6 bg-sun text-ink">
          Contact Us
        </a>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 border-t-2 border-dashed border-white/15 px-5 pb-10 pt-10 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 text-white/80">
            A bright, safe and soft indoor play world in Kuppam, made for little explorers and their families. Brought to you by JiSi Events &amp; Decorations.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { href: BUSINESS.facebook, label: "Facebook", bg: "bg-[#1877f2]", icon: "f" },
              { href: BUSINESS.instagram, label: "Instagram", bg: "bg-grape", icon: "◎" },
              { href: BUSINESS.youtube, label: "YouTube", bg: "bg-[#ff0000]", icon: "▶" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`grid h-12 w-12 place-items-center rounded-full border-2 border-white text-lg font-bold ${s.bg} active:scale-90`}
              >
                {s.icon}
              </a>
            ))}
            <a
              href={whatsAppLink("Hi JiSi Play Zone!")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-white bg-[#25d366] active:scale-90"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl text-sun">Opening Hours</h3>
          <ul className="mt-3 space-y-1">
            {[1, 2, 3, 4, 5, 6, 0].map((d) => (
              <li
                key={d}
                className={`flex justify-between rounded-xl px-3 py-1.5 text-sm ${
                  d === todayIdx ? "bg-sun font-bold text-ink" : "text-white/80"
                }`}
              >
                <span>
                  {DAYS[d]}
                  {d === todayIdx && " 👈 today"}
                </span>
                <span>
                  {fmtTime(OPENING_HOURS[d].open)} – {fmtTime(OPENING_HOURS[d].close)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl text-sun">Find Us</h3>
          <ul className="mt-3 space-y-3 text-white/85">
            <li>
              <a href={BUSINESS.mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-3">
                <span>📍</span>
                {BUSINESS.address}
              </a>
            </li>
            <li>
              <a href={telLink} className="flex gap-3">
                <span>📞</span>
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex gap-3 break-all">
                <span>✉️</span>
                {BUSINESS.email}
              </a>
            </li>
          </ul>
          <iframe
            title="JiSi Play Zone location on Google Maps"
            src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&output=embed`}
            className="mt-5 h-44 w-full rounded-2xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <h3 className="mt-7 text-2xl text-sun">Quick Links</h3>
          <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-white/80">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-sun">
                › {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-5 pb-24 text-center text-xs text-white/60 md:pb-5">
        © {new Date().getFullYear()} {BUSINESS.name}, {BUSINESS.city}. A JiSi Events venture.
      </p>
    </footer>
  );
}

/** Floating WhatsApp, back-to-top and a mobile bottom action bar. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={whatsAppLink("Hi JiSi Play Zone! I have a question.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 left-4 z-40 grid h-14 w-14 place-items-center rounded-full shadow-md bg-[#25d366] text-white shadow-lg active:scale-90 md:bottom-6"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-20 right-4 z-40 grid h-12 w-12 place-items-center rounded-full shadow-md bg-sun text-xl font-bold text-ink shadow-lg transition md:bottom-6 ${
          showTop ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        ↑
      </button>

      {/* Mobile bottom bar: the 3 things parents do most */}
      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 bg-white shadow-[0_-8px_24px_-12px_rgb(15_118_110/0.35)] pb-[env(safe-area-inset-bottom)] text-sm font-bold text-ink md:hidden">
        <a href={telLink} className="flex flex-col items-center py-1.5 active:bg-lilac">
          <span className="text-xl">📞</span>Call
        </a>
        <a href="#pricing" className="flex flex-col items-center border-x-2 border-ink/10 py-1.5 active:bg-lilac">
          <span className="text-xl">🎟️</span>Prices
        </a>
        <a href="#book" className="flex flex-col items-center bg-grape py-1.5 text-white active:bg-grape-dark">
          <span className="text-xl">🎉</span>Book Now
        </a>
      </nav>
    </>
  );
}
