import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0B0E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://4kshoot.studio"),
  title: "4K Shoot — Photographe Professionnel & Vidéaste à Parakou (Bénin)",
  description:
    "Shooting photo en studio à Parakou, couverture mariages et événements, photos de famille et publicités de marque. Déplacements à Cotonou et dans tout le Bénin.",
  keywords: [
    "4K Shoot Parakou",
    "Photographe Parakou",
    "Studio Photo Parakou",
    "Photographe Mariage Bénin",
    "Shooting Photo Cotonou",
    "Vidéaste Parakou Bénin",
    "Photo Famille Bénin",
    "Publicité Vidéo Bénin",
  ],
  authors: [{ name: "4K Shoot Parakou" }],
  openGraph: {
    title: "4K Shoot — Photographe Professionnel & Vidéaste à Parakou (Bénin)",
    description:
      "Portraits studio à Parakou, mariages inoubliables, photos de famille et publicités d'entreprise. Disponible à Parakou, Cotonou et partout au Bénin.",
    url: "https://4kshoot.studio",
    siteName: "4K Shoot Parakou",
    images: [
      {
        url: "/images/studio_hero_cotonou.jpg",
        width: 1920,
        height: 1080,
        alt: "4K Shoot Photographe Studio Parakou Bénin",
      },
    ],
    locale: "fr_BJ",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${jakartaSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-[#0A0B0E] text-[#FFFFFF] font-sans antialiased selection:bg-[#6366F1] selection:text-white">
        {children}
      </body>
    </html>
  );
}
