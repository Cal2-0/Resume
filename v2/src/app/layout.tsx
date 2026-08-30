import type { Metadata } from "next";
import {
  Permanent_Marker,
  Patrick_Hand,
  Caveat,
  Special_Elite,
} from "next/font/google";
import "./globals.css";

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
  display: "swap",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Calvin Chronicles",
  description: "A Digital Scrapbook Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${permanentMarker.variable} ${patrickHand.variable} ${caveat.variable} ${specialElite.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
