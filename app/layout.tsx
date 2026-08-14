import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Italianno, Jost } from "next/font/google";
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

const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italianno",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Handpoke Travels",
  description: "Ink stories. Mark souls. Handpoke tattoos around the world.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${cormorant.variable} ${italianno.variable} ${jost.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
