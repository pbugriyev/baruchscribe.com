import { Headphones, Ear, MessageCircleQuestion, Timer, BookOpen, ClipboardList, HardDrive, HandHeart, Languages, MicOff, ShieldCheck, ArrowRight, Download, Sparkles } from "lucide-react";

const DL = "/download/";
const tr = "transition-colors duration-200";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#9DB6C9]/40 bg-[#F7F4F3]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className={`flex items-center gap-2.5 text-[#324E66] ${tr} hover:text-[#263d52] hover:underline`}>
          <img src="/logo.svg" alt="" className="h-7 w-7" />
          <span className="font-serif text-lg tracking-tight">Baruch Scribe</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-8 text-sm md:flex">
          {[["Features", "#features"], ["How it works", "#how"], ["Why Baruch", "#why"], ["Founding 12", "#founding"]].map(([l, h]) => (
            <a key={h} href={h} className={`text-[#3f5a72] ${tr} hover:text-[#263d52]`}>{l}</a>))}
        </nav>
        <a href={DL} className={`inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#324E66] px-3.5 py-2 text-sm font-medium text-white ${tr} hover:bg-[#263d52]`}>
          <Download className="h-4 w-4" aria-hidden /> Download App
        </a>
      </div>
      <nav aria-label="Sections" className="flex justify-center gap-6 border-t border-[#9DB6C9]/40 py-2 text-xs md:hidden">
        {[["Features", "#features"], ["How it works", "#how"], ["Why Baruch", "#why"], ["Founding 12", "#founding"]].map(([l, h]) => (
          <a key={h} href={h} className={`text-[#3f5a72] ${tr} hover:text-[#263d52]`}>{l}</a>))}
      </nav>
    </header>
  );
}

function Line({ who, text }: { who: "You" | "Counselee"; text: string }) {
  return (
    <div className="flex gap-2 text-[13px] leading-snug">
      <span className={`w-[70px] shrink-0 text-[11px] font-medium uppercase tracking-wider ${who === "You" ? "text-[#324E66]" : "text-[#4d6982]"}`}>{who}</span>
      <p className="text-[#324E66]">{text}</p>
    </div>
  );
}

function Phone() {
  return (
    <div id="how" className="relative mx-auto mt-20 w-full max-w-[360px]">
      <div aria-hidden className="absolute -inset-16 -z-10 rounded-full bg-[#9DB6C9]/35 blur-3xl" />
      <div className="rounded-[2.5rem] border border-[#9DB6C9]/40 bg-white p-3">
        <div className="overflow-hidden rounded-[2rem] border border-[#9DB6C9]/40 bg-[#F7F4F3]">
          <div className="flex items-center justify-between px-6 pt-4 text-[11px] text-[#4d6982]"><span>9:41</span><span className="h-1.5 w-16 rounded-full bg-[#E8EFF4]" /><span>●●●</span></div>
          <div className="flex items-center justify-between border-b border-[#9DB6C9]/40 px-5 py-3">
            <div><p className="text-sm font-medium text-[#324E66]">Session 3 · Anna</p><p className="text-[11px] text-[#4d6982]">Grief · 24:12</p></div>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#324E66]/30 bg-[#324E66]/10 px-2 py-1 text-[11px] text-[#324E66]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#324E66]" />Listening</span>
          </div>
          <div className="space-y-3 px-5 py-4">
            <Line who="Counselee" text="Since my mother died I don't really pray anymore. What's the point?" />
            <Line who="You" text="That sounds heavy. Tell me more about those first weeks." />
            <Line who="Counselee" text="Everyone moved on. I felt like God moved on too, and I got bitter." />
          </div>
          <div className="space-y-2 px-4 pb-4">
            <div className="rounded-lg border border-[#9DB6C9]/40 bg-white p-3">
              <p className="flex items-center gap-1.5 text-[11px] font-medium text-[#324E66]"><Headphones className="h-3.5 w-3.5" aria-hidden />In your earbud</p>
              <p className="mt-1 text-[13px] text-[#324E66]">Keep listening. Let them finish the whole story.</p>
            </div>
            <div className="rounded-lg border border-[#9DB6C9]/40 bg-white p-3">
              <p className="flex items-center gap-1.5 text-[11px] font-medium text-[#3f5a72]"><BookOpen className="h-3.5 w-3.5" aria-hidden />Scripture cue</p>
              <p className="mt-1 text-[13px] text-[#324E66]">Like Naomi, grief turning to bitterness. Consider opening Ruth 1:19-21.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 border-t border-[#9DB6C9]/40 p-4">
            <span className="rounded-lg border border-[#9DB6C9]/40 py-2 text-center text-xs text-[#324E66]">Pause</span>
            <span className="rounded-lg bg-[#324E66] py-2 text-center text-xs text-white">End session</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, body, icon: Icon, children, className = "" }: { title: string; body: string; icon: React.ComponentType<{ className?: string }>; children?: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-[#9DB6C9]/40 bg-white p-6 ${tr} hover:border-[#9DB6C9] sm:p-8 ${className}`}>
      <Icon className="h-5 w-5 text-[#324E66]" />
      <h3 className="mt-4 font-serif text-xl tracking-tight text-[#324E66]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed">{body}</p>
      {children}
    </div>
  );
}

function CueTimeline() {
  const cues = [
    [Ear, "02:10", "Listen first. Don't answer yet."],
    [Timer, "11:45", "You've been speaking a while. Let them carry the next part."],
    [MessageCircleQuestion, "18:30", "Ask: what did you want most right then?"],
    [HandHeart, "46:00", "It's time to wrap up. Close in prayer."],
  ] as const;
  return (
    <ol className="mt-6 space-y-4 border-l border-[#9DB6C9]/40 pl-5">
      {cues.map(([I, t, c], i) => (
        <li key={t} className="relative">
          <span className={`absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full border ${i === 2 ? "border-[#324E66] bg-[#324E66]" : "border-[#9DB6C9] bg-white"}`} />
          <p className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#4d6982]"><I className="h-3.5 w-3.5" />{t}</p>
          <p className="mt-0.5 text-sm text-[#324E66]">{c}</p>
        </li>))}
    </ol>
  );
}

function Skills() {
  const s = [["Listening well", 82], ["Getting to the heart", 64], ["Opening the Word", 41], ["Good homework", 70]] as const;
  return (
    <div className="mt-6 space-y-3">
      {s.map(([n, v]) => (
        <div key={n}>
          <div className="flex justify-between text-xs"><span className={n === "Opening the Word" ? "text-[#324E66]" : "text-[#324E66]"}>{n}</span><span>{v}%</span></div>
          <div className="mt-1 h-1.5 rounded-full bg-[#E8EFF4]"><div className={`h-full rounded-full ${n === "Opening the Word" ? "bg-[#324E66]" : "bg-[#9DB6C9]"}`} style={{ width: `${v}%` }} /></div>
        </div>))}
      <p className="pt-2 text-xs text-[#4d6982]">Focus next time: <span className="text-[#324E66]">let a passage speak before you answer.</span></p>
    </div>
  );
}

function Web() {
  const refs = [["Genesis 4:6-7", 50, 30], ["James 1:19-20", 50, 110], ["Psalm 34:18", 50, 190]] as const;
  return (
    <svg viewBox="0 0 360 220" className="mt-6 w-full" role="img" aria-label="Three passages joined into a take-home plan">
      {refs.map(([, x, y]) => <path key={y} d={`M ${x + 110} ${y} C 220 ${y}, 220 110, 250 110`} fill="none" stroke="#9DB6C9" strokeWidth="1" />)}
      {refs.map(([r, x, y]) => (<g key={r}><rect x={x - 40} y={y - 14} width="150" height="28" rx="8" fill="#E8EFF4" stroke="#9DB6C9" /><text x={x + 35} y={y + 4} textAnchor="middle" fontSize="11" fill="#324E66">{r}</text></g>))}
      <rect x="250" y="92" width="100" height="36" rx="8" fill="#324E66" stroke="#324E66" />
      <text x="300" y="114" textAnchor="middle" fontSize="11" fill="#FFFFFF">Take-home plan</text>
    </svg>
  );
}

const Title = ({ k, t, id }: { k: string; t: string; id?: string }) => (
  <div id={id} className="mx-auto max-w-2xl text-center">
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4d6982]">{k}</p>
    <h2 className="mt-3 font-serif text-3xl tracking-tight text-[#324E66] sm:text-5xl">{t}</h2>
  </div>
);

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="mx-auto max-w-6xl px-5 pb-24 pt-20 text-center sm:px-8 sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-lg border border-[#324E66]/30 bg-[#324E66]/10 px-3 py-1 text-xs font-medium text-[#324E66]"><Sparkles className="h-3.5 w-3.5" aria-hidden />Now available for Android</span>
                    <h1 className="mx-auto mt-8 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-[#324E66] sm:text-7xl">Every counselor needs a Baruch.</h1>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-xl leading-snug tracking-tight text-[#324E66] sm:text-2xl">Baruch follows the session quietly, so your attention can stay on your counselee.</p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed">It keeps a faithful record and coaches you through one earbud in Scripture's own categories. Afterward it helps you grow as a counselor.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={DL} className={`inline-flex items-center gap-2 rounded-lg bg-[#324E66] px-5 py-3 text-sm font-medium text-white ${tr} hover:bg-[#263d52]`}>Get the App <ArrowRight className="h-4 w-4" aria-hidden /></a>
            <a href="#how" className={`text-sm text-[#324E66] ${tr} hover:text-[#263d52]`}>See how it works →</a>
          </div>
          <Phone />
        </section>

        <section id="features" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Title k="Features" t="Everything stays in the background." />
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <Card icon={Headphones} title="A quiet earbud coach" body="Put the phone face down. Short cues arrive in natural pauses, never over your counselee.">{<CueTimeline />}</Card>
            <Card icon={Sparkles} title="Coach Me and Growth path" body="After each session: what went well, where to grow, and one move for next time.">{<Skills />}</Card>
            <Card icon={BookOpen} title="Scripture at the center" body="Passages from the session become homework and a take-home plan the counselee keeps.">{<Web />}</Card>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card icon={ClipboardList} title="Intake to first-session brief" body="Import a filled intake form, or talk it through together in the first session." />
            <Card icon={HardDrive} title="Notes stay with you" body="On your device, or in your own Google Drive or OneDrive. Nowhere else." />
            <Card icon={HandHeart} title="Prayer at the start and end" body="A gentle prompt to open in prayer, and to close with the homework in view." />
            <Card icon={Languages} title="Four languages" body="English, Русский, Español and 한국어, from transcript to case report." />
            <Card icon={MicOff} title="Confession mode" body="One tap turns the microphone off. Nothing after that moment is transcribed." />
            <Card icon={ShieldCheck} title="Sufficient Scripture" body="Biblical categories only. It respects medical care and common grace, and never replaces them." />
          </div>
        </section>

        <section id="why" className="border-y border-[#9DB6C9]/40 bg-[#E8EFF4]">
          <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
            <Title k="The name" t="Why Baruch?" />
            <div className="mt-12 space-y-6 text-base leading-relaxed sm:text-lg">
              <p>Baruch son of Neriah was the faithful scribe, assistant, and friend of the prophet Jeremiah. He wrote down the words Jeremiah dictated onto a scroll, then read them aloud to the people of Judah (Jeremiah 36). When King Jehoiakim cut that scroll apart and burned it, Baruch sat down and wrote it all again.</p>
              <p>During the Babylonian siege, Baruch handled the legal deeds for the field Jeremiah bought as a sign of hope that God would bring His people home (Jeremiah 32). He stood with Jeremiah under suspicion and danger (Jeremiah 43), and God gave him a word of his own: a promise to keep him through it all (Jeremiah 45).</p>
              <p>In the last years of the kingdom of Judah, Baruch helped preserve, proclaim, and defend the word God gave His prophet.</p>
              <p className="border-l-2 border-[#324E66] pl-5 font-serif text-xl tracking-tight text-[#324E66] sm:text-2xl">Every pastor and biblical counselor needs a Baruch. Someone to be a faithful scribe, a careful keeper of records, and a loyal companion in the work. Our prayer is that Baruch Scribe will be that, in some small measure, for you.</p>
            </div>
          </div>
        </section>


        <section id="founding" className="border-y border-[#9DB6C9]/40 bg-[#E8EFF4]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4d6982]">Founding 12</p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-[#324E66] sm:text-5xl">12 testers. 14 free days.</h2>
              <p className="mt-6 leading-relaxed">We're inviting twelve pastors and biblical counselors to use Baruch Scribe in real sessions and help shape it. Founding testers get fourteen days free and a direct line to the people building it.</p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>• Android phone required for now</li>
                <li>• Honest feedback after a few sessions</li>
                <li>• Your notes stay on your device or in your own Drive</li>
              </ul>
              <p className="mt-6 inline-flex rounded-lg border border-[#9DB6C9] bg-white px-3 py-1 text-xs font-medium text-[#324E66]">Only twelve spots. We'll reply to each request personally.</p>
            </div>
            <form action="https://formsubmit.co/p.bugriyev@gmail.com" method="POST" className="space-y-4 rounded-lg border border-[#9DB6C9]/40 bg-white p-6 sm:p-8">
              <input type="hidden" name="_subject" value="Founding 12 sign-up" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://baruchscribe.com/thanks/" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
              <div><label htmlFor="name" className="block text-sm font-medium text-[#324E66]">Name</label><input id="name" name="name" required autoComplete="name" className="mt-1.5 w-full rounded-lg border border-[#9DB6C9] bg-white px-3 py-2.5 text-sm text-[#324E66] transition-colors duration-200 focus:border-[#324E66] focus:outline-none focus:ring-2 focus:ring-[#9DB6C9]/50" /></div>
              <div><label htmlFor="email" className="block text-sm font-medium text-[#324E66]">Email</label><input id="email" name="email" type="email" required autoComplete="email" className="mt-1.5 w-full rounded-lg border border-[#9DB6C9] bg-white px-3 py-2.5 text-sm text-[#324E66] transition-colors duration-200 focus:border-[#324E66] focus:outline-none focus:ring-2 focus:ring-[#9DB6C9]/50" /></div>
              <div><label htmlFor="church" className="block text-sm font-medium text-[#324E66]">Church</label><input id="church" name="church" required className="mt-1.5 w-full rounded-lg border border-[#9DB6C9] bg-white px-3 py-2.5 text-sm text-[#324E66] transition-colors duration-200 focus:border-[#324E66] focus:outline-none focus:ring-2 focus:ring-[#9DB6C9]/50" /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="role" className="block text-sm font-medium text-[#324E66]">Role</label><select id="role" name="role" required defaultValue="" className="mt-1.5 w-full rounded-lg border border-[#9DB6C9] bg-white px-3 py-2.5 text-sm text-[#324E66] transition-colors duration-200 focus:border-[#324E66] focus:outline-none focus:ring-2 focus:ring-[#9DB6C9]/50"><option value="" disabled>Choose one</option><option>Pastor</option><option>Biblical counselor</option><option>Other</option></select></div>
                <fieldset><legend className="block text-sm font-medium text-[#324E66]">Android phone?</legend><div className="mt-3 flex gap-5 text-sm"><label className="flex items-center gap-2"><input type="radio" name="android" value="Yes" required className="accent-[#324E66]" />Yes</label><label className="flex items-center gap-2"><input type="radio" name="android" value="No" className="accent-[#324E66]" />No</label></div></fieldset>
              </div>
              <div><label htmlFor="why" className="block text-sm font-medium text-[#324E66]">Why do you want to join?</label><textarea id="why" name="why" rows={3} maxLength={500} required className="mt-1.5 w-full rounded-lg border border-[#9DB6C9] bg-white px-3 py-2.5 text-sm text-[#324E66] transition-colors duration-200 focus:border-[#324E66] focus:outline-none focus:ring-2 focus:ring-[#9DB6C9]/50" /></div>
              <button type="submit" className="w-full rounded-lg bg-[#324E66] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#263d52]">Request a spot</button>
              <p className="text-xs text-[#4d6982]">Your answers go only to the Baruch Scribe team by email. No tracking, no mailing list.</p>
            </form>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl gap-4 px-5 py-24 sm:px-8 md:grid-cols-2">
          <div className="rounded-lg border border-[#9DB6C9]/40 bg-white p-8">
            <h2 className="font-serif text-3xl tracking-tight text-[#324E66]">The sufficiency of Scripture</h2>
            <p className="mt-4 leading-relaxed">God's Word is enough to address the problems of the heart. Baruch speaks in biblical categories like sin, suffering, idols, repentance and grace, not borrowed therapy models.</p>
            <p className="mt-3 leading-relaxed">It honors the medical boundary, encouraging care from a doctor when the body is involved, and gives thanks for common grace without making it the authority.</p>
          </div>
          <div className="rounded-lg border border-[#9DB6C9]/40 bg-white p-8">
            <h2 className="font-serif text-3xl tracking-tight text-[#324E66]">Private by design</h2>
            <p className="mt-4 leading-relaxed">Your notes stay on your phone, or in your own Google Drive or OneDrive. There are no ads and no analytics, and the app never sends anything on its own.</p>
            <a href="/privacy.html" className={`mt-6 inline-block text-sm text-[#324E66] ${tr} hover:text-[#263d52] hover:underline`}>Read how privacy works →</a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
          <div className="rounded-lg border border-[#9DB6C9]/40 bg-white px-6 py-16 text-center">
            <h2 className="font-serif text-3xl tracking-tight text-[#324E66] sm:text-5xl">Bring a faithful scribe to your next session.</h2>
            <p className="mt-4">Available now on Android. iPhone is coming later.</p>
            <a href={DL} className={`mt-8 inline-flex items-center gap-2 rounded-lg bg-[#324E66] px-5 py-3 text-sm font-medium text-white ${tr} hover:bg-[#263d52]`}><Download className="h-4 w-4" aria-hidden />Download for Android</a>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#9DB6C9]/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm sm:flex-row sm:px-8">
          <p>© 2026 Baruch Scribe</p>
          <nav className="flex gap-6">
            {[["Download", DL], ["Privacy", "/privacy.html"], ["Features", "#features"], ["Founding 12", "#founding"]].map(([l, h]) => <a key={l} href={h} className={`${tr} hover:text-[#263d52]`}>{l}</a>)}
          </nav>
        </div>
      </footer>
    </>
  );
}
