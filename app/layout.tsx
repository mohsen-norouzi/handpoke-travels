import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bodoni",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const juliette = localFont({
  src: "./fonts/Juliette.otf",
  variable: "--font-juliette",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Handpoke Travels",
    template: "%s · Handpoke Travels",
  },
  description:
    "Ink stories. Mark souls. Handpoke tattoos around the world.",
  applicationName: "Handpoke Travels",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Handpoke Travels",
    title: "Handpoke Travels",
    description:
      "Ink stories. Mark souls. Handpoke tattoos around the world.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Handpoke Travels",
    description:
      "Ink stories. Mark souls. Handpoke tattoos around the world.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${cormorant.variable} ${juliette.variable} ${jost.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
