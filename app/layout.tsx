import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vrpinteriors.example"),
  title: {
    default: `${site.name} — Interior Design & Construction in Jaipur`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "interior designer Jaipur",
    "architectural drawing 2D 3D",
    "modular kitchen Jaipur",
    "construction company Jaipur",
    "Vastu consultant",
    "turnkey interior projects",
    "VRP Interiors",
  ],
  openGraph: {
    title: `${site.name} — Designing Spaces, Building Dreams`,
    description: site.description,
    type: "website",
    locale: "en_IN",
    images: ["/gallery/living-room-01.jpeg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1714",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
