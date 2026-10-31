import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
export const metadata: Metadata = {
  title: "Baruch Scribe — a quiet companion for biblical counselors",
  description: "Baruch follows the session quietly, so your attention can stay on your counselee.",
  icons: { icon: "/favicon.png" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
    <body className="bg-[#F7F4F3] font-sans text-[#3f5a72] antialiased">{children}</body></html>);
}
