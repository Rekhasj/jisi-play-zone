import type { Metadata } from "next";
import { BANNERS, SIZES } from "@/components/Banners";

export const metadata: Metadata = {
  title: "Banners | JiSi Play Zone",
  robots: { index: false, follow: false },
};

// Preview scale for the gallery (banners are drawn at 1080 px wide).
const SCALE = 0.4;

export default async function BannersPage({ searchParams }: { searchParams: Promise<{ b?: string }> }) {
  const { b } = await searchParams;
  const single = BANNERS.find((x) => x.id === b);

  // ?b=<id> shows one banner at full size, for saving as an image.
  if (single)
    return (
      <div className="w-fit">
        {/* hide the Next.js dev badge so it doesn't show up in saved images */}
        <style>{"nextjs-portal{display:none!important}"}</style>
        {single.render()}
      </div>
    );

  return (
    <main className="min-h-screen bg-[#e9eef3] px-4 py-8">
      <h1 className="text-center font-display text-4xl text-ink">JiSi Play Zone · Banners</h1>
      <p className="mt-1 text-center text-ink/70">Click a banner to open it full size.</p>
      <div className="mx-auto mt-8 flex max-w-[1400px] flex-wrap items-start justify-center gap-8">
        {BANNERS.map((x) => {
          const { w, h, label } = SIZES[x.size];
          return (
            <figure key={x.id} className="flex flex-col items-center">
              <a
                href={`/banners?b=${x.id}`}
                className="block overflow-hidden rounded-xl shadow-xl"
                style={{ width: w * SCALE, height: h * SCALE }}
              >
                <div style={{ transform: `scale(${SCALE})`, transformOrigin: "top left" }}>{x.render()}</div>
              </a>
              <figcaption className="mt-2 max-w-[432px] text-center text-sm font-semibold text-ink">{x.title}<span className="block text-xs font-medium text-ink/60">{label}</span></figcaption>
            </figure>
          );
        })}
      </div>
    </main>
  );
}
