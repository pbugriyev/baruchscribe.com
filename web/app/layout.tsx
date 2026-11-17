import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const SITE = "https://baruchscribe.com";
const DESCRIPTION = "Baruch Scribe follows a biblical counseling session quietly, keeps a faithful record, and offers gentle next questions, so your attention can stay on your counselee.";
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Baruch Scribe — a quiet companion for biblical counselors",
  description: DESCRIPTION,
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    siteName: "Baruch Scribe",
    locale: "en_US",
    images: [{ url: `${SITE}/assets/og-image.png`, width: 1200, height: 630, alt: "Baruch Scribe — a quiet companion for biblical counselors" }],
  },
  twitter: { card: "summary_large_image", images: [`${SITE}/assets/og-image.png`] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
    <body className="bg-[#F7F4F3] font-sans text-[#3f5a72] antialiased">{children}</body></html>);
}
