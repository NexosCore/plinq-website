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
    default: "Plinq · Digital reklame på TV for bedrifter",
    template: "%s · Plinq",
  },
  description:
    "Plinq gjør det enkelt å vise reklamebilder og videoer på TV-skjermer. Vi hjelper deg med oppsett og en løsning som passer virksomheten din.",
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
    title: "Plinq · Digital reklame på TV – tilpasset din bedrift.",
    description:
      "Digital reklame på TV – tilpasset din bedrift. Personlig kontakt, oppsett og tilpasning med Plinq.",
    images: [
      { url: "/images/plinq-mobil-tv.png", width: 1672, height: 941, alt: "Konseptillustrasjon av Plinq fra mobil til TV" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plinq · Digital reklame på TV for bedrifter",
    description:
      "Digital reklame på TV – tilpasset din bedrift. Kontakt oss for oppsett og tilbud.",
    images: ["/images/plinq-mobil-tv.png"],
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
