export const metadata = { title: "Thank you — Baruch Scribe" };
export default function Thanks() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 text-center">
      <h1 className="font-serif text-4xl tracking-tight text-[#324E66]">Thank you.</h1>
      <p className="mt-4 leading-relaxed">Your Founding 12 request is in. We'll reply personally by email.</p>
      <a href="/" className="mt-8 rounded-lg bg-[#324E66] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#263d52]">Back to home</a>
    </main>
  );
}
