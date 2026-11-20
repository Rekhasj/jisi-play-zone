import type { Metadata, Viewport } from "next";
import { Baloo_2, Fredoka } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-baloo", weight: ["600", "700", "800"] });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "JiSi Play Zone | Indoor Soft Play & Birthday Parties in Kuppam",
  description:
    "Kuppam's indoor soft play zone for kids aged 1–12: ball pool, slides, trampoline, sandpit, car & bike rides and birthday party packages. Book on WhatsApp.",
  icons: { icon: "/jisi.svg" },
  openGraph: {
    title: "JiSi Play Zone, Kuppam",
    description: "Indoor soft play & birthday parties for kids. Book on WhatsApp.",
    images: ["/images/play/toys.webp"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f766e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${baloo.variable} ${fredoka.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
