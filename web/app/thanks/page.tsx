import type { Metadata } from "next";

const THANKS_TITLE = "Thank you — Baruch Scribe";
const THANKS_DESCRIPTION = "Your Founding 12 request for Baruch Scribe is in. We'll reply personally by email.";
export const metadata: Metadata = {
  title: THANKS_TITLE,
  description: THANKS_DESCRIPTION,
  alternates: { canonical: "https://baruchscribe.com/thanks/" },
  openGraph: {
    type: "website",
    siteName: "Baruch Scribe",
    url: "https://baruchscribe.com/thanks/",
    title: THANKS_TITLE,
    description: THANKS_DESCRIPTION,
    images: [{ url: "https://baruchscribe.com/assets/og-image.png", width: 1200, height: 630, alt: "Baruch Scribe" }],
  },
  twitter: { card: "summary_large_image", title: THANKS_TITLE, description: THANKS_DESCRIPTION, images: ["https://baruchscribe.com/assets/og-image.png"] },
};
export default function Thanks() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 text-center">
      <h1 className="font-serif text-4xl tracking-tight text-[#324E66]">Thank you.</h1>
      <p className="mt-4 leading-relaxed">Your Founding 12 request is in. We'll reply personally by email.</p>
      <a href="/" className="mt-8 rounded-lg bg-[#324E66] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#263d52]">Back to home</a>
    </main>
  );
}
