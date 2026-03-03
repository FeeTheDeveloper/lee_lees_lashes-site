import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lee Lee's Lashes | Premium Lash Extensions",
  description:
    "Luxury lash extensions crafted with precision. Elevate your look with Lee Lee's Lashes — your destination for classic, hybrid, and volume lash sets.",
  keywords: [
    "lash extensions",
    "eyelash extensions",
    "volume lashes",
    "classic lashes",
    "hybrid lashes",
    "beauty",
    "lash artist",
  ],
  openGraph: {
    title: "Lee Lee's Lashes | Premium Lash Extensions",
    description:
      "Luxury lash extensions crafted with precision. Elevate your look with Lee Lee's Lashes.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
