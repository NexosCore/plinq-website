import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://plinq.no"),
  title: {
    default: "Plinq · Digital signage for butikk",
    template: "%s · Plinq",
  },
  description:
    "Gjør TV-skjermene i butikken levende. Last opp bilder og videoer fra mobilen, publiser med noen få trykk og la Plinq ta seg av resten.",
  keywords: [
    "digital signage",
    "butikk-TV",
    "reklame på skjerm",
    "Plinq",
    "Norge",
  ],
  authors: [{ name: "Nexos AS" }],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://plinq.no",
    siteName: "Plinq",
    title: "Plinq · Din reklame. På skjermen. På sekunder.",
    description:
      "Gjør TV-skjermene i butikken levende. Publiser bilder og video fra mobilen.",
    images: [
      { url: "/images/tv-reklame.png", width: 1920, height: 1080, alt: "Plinq på TV-skjerm" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plinq · Digital signage for butikk",
    description:
      "Gjør TV-skjermene i butikken levende. Publiser fra mobilen.",
    images: ["/images/tv-reklame.png"],
  },
  alternates: {
    canonical: "https://plinq.no",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#071018",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nb" className={`${manrope.variable} h-full`}>
      <body className="site-gradient min-h-full antialiased">{children}</body>
    </html>
  );
}
