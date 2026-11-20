import { GALLERY } from "@/data/site";
import { SCENES } from "./Scenes";
import { Section, SectionTitle } from "./ui";

const TILTS = ["-rotate-2", "rotate-2", "rotate-1", "-rotate-1"];
const TAPES = ["bg-sun", "bg-bubble", "bg-sky", "bg-grass"];

export default function Gallery() {
  return (
    <Section id="gallery" bg="bg-white" fill="text-white">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="📸 Gallery" title="Happy Moments" text="A peek at the fun waiting for your little ones!" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3">
          {GALLERY.map((g, i) => {
            const Scene = SCENES[g.scene];
            return (
              <figure
                key={g.alt}
                data-reveal="zoom"
                className={`sticker-sm group relative rounded-xl bg-white p-2 pb-3 transition hover:rotate-0 ${TILTS[i % 4]}`}
                style={{ transitionDelay: `${(i % 3) * 110}ms` }}
              >
                <span className={`absolute -top-3 left-1/2 z-10 h-5 w-14 -translate-x-1/2 rotate-[-4deg] opacity-90 ${TAPES[i % 4]}`} />
                <span className="relative block aspect-square overflow-hidden rounded-lg bg-lilac">
                  <Scene
                    className="absolute inset-0 h-full w-full transition duration-500 group-hover:scale-110"
                    {...(g.accent ? { accent: g.accent } : {})}
                  />
                </span>
                <figcaption className="mt-1.5 block truncate text-xs font-semibold text-ink/70">{g.alt}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
