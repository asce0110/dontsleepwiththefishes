"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { HelpCircle, ExternalLink, ChevronRight, Sparkles, ShieldCheck } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

const generalFaq: FAQItem[] = [
  {
    q: "What is Don't Sleep With The Fishes?",
    a: <>Don't Sleep With The Fishes is a sea-themed point-and-click survival horror game by DopplerGhost. You play as a captain whose ship has been damaged — quickly salvage items into a lifeboat, choose one crew member, then survive day-by-day by fishing, eating, repairing, and handling night events. The game has multiple endings.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>Source: Official itch.io page</span></>,
  },
  {
    q: "How do I download and install the game?",
    a: <>Purchase the game ($1.99) on the official itch.io page. After purchase, click the <strong>Download</strong> button at the top of the itch page to get the Windows executable.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>Source: Official itch.io page &amp; community download instructions</span></>,
  },
  {
    q: "What platform is the game on?",
    a: <>Currently <strong>Windows only</strong>. The official itch page lists the platform as Windows. No native Mac, Linux, or mobile versions exist at this time.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>Source: Official itch.io page</span></>,
  },
  {
    q: "Is Don't Sleep With The Fishes coming to Steam?",
    a: <>Yes! Don't Sleep With The Fishes <strong>launches on Steam on June 26, 2026</strong>.{" "}
      <a href="https://store.steampowered.com/app/4834070/Dont_Sleep_With_The_Fishes/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors underline">Wishlist now</a>{" "}
      to get notified on launch day. The Steam version may include custom achievements. See the{" "}
      <Link href="/steam" className="underline hover:text-amber">Steam page</Link>{" "}
      for full details and Steam vs itch.io comparison.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>Source: Official Steam store page + v1.1.2 devlog</span></>,
  },
  {
    q: "Will itch.io buyers get a Steam key?",
    a: <>This has <strong>not been confirmed</strong> by the developer. Some game developers do provide Steam keys to itch.io purchasers after a Steam release, but this is not guaranteed. Wait for an official announcement from DopplerGhost.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(251,191,36,0.7)" }}>Source: Not yet confirmed — community speculation</span></>,
  },
  {
    q: "Can I get the game for free?",
    a: <>This guide does not provide or link to pirated copies. The game costs <strong>$1.99 on itch.io</strong> and supports an independent developer. If you cannot afford it, wishlist it and watch for sales or the Steam release.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>Source: Official itch.io pricing</span></>,
  },
];

const gameplayFaq: FAQItem[] = [
  {
    q: "What are the controls?",
    a: <><strong>WASD</strong> — Move around. <strong>E</strong> — Pick up and throw items. <strong>Left-Click</strong> — Interact with objects. <strong>Right-Shift</strong> — Additional action (community tip). <strong>ESC</strong> — Pause menu. Some players report pressing Space after interacting with crates/barrels for extra actions.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>Source: Official itch + community tips</span></>,
  },
  {
    q: "How many endings are there?",
    a: <>The official itch page confirms <strong>multiple endings</strong> but does not give an exact number. Community reports suggest 12+ distinct outcomes, including rescue, death, and hidden endings. See the{" "}
      <Link href="/endings" className="underline hover:text-amber">Endings Guide</Link>{" "}
      for the full breakdown with source confidence labels.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>Source: Official (multiple endings confirmed) + Community (specific count)</span></>,
  },
  {
    q: "How do I make myself visible / get rescued?",
    a: <>Use <strong>Flare Gun or Flashlight</strong> during the Hope and Other People night events. The rescue ending chance was slightly increased in v1.1.2. See the{" "}
      <Link href="/endings/rescue" className="underline hover:text-amber">Rescue Guide</Link>{" "}
      for details.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>Source: Official v1.1.2 devlog (rescue chance increased) + Community (flare/flashlight method)</span></>,
  },
  {
    q: "What does Captain Whiskers do?",
    a: <>Captain Whiskers is a cat crew member. In <strong>v1.1.2</strong>, Captain Whiskers gives a <strong>+1% fishing catch chance</strong> bonus. The cat also has unique lore interactions. See the{" "}
      <Link href="/characters/captain-whiskers" className="underline hover:text-amber">Captain Whiskers Guide</Link>{" "}
      (coming soon).<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>Source: Official v1.1.2 devlog</span></>,
  },
  {
    q: "What is the Giant Squid and how do I deal with it?",
    a: <>The Giant Squid is a night event that can destroy your boat. One <strong>community reply on Reddit says to use the Anchor</strong>. Harpoon Gun is also mentioned as a possible counter but is unverified. This event may be connected to the Pay Debt and True Ending routes. See the{" "}
      <Link href="/events/giant-squid" className="underline hover:text-amber">Giant Squid Guide</Link>.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(251,191,36,0.7)" }}>Source: Community (Reddit) — not independently verified</span></>,
  },
  {
    q: "What does 'pay your debt' mean?",
    a: <>This is a game mechanic that <strong>community players are still tracking</strong>. It appears to be connected to the Giant Squid encounter and possibly the Heart of the Sea / Heart Piece items. No confirmed resolution steps exist yet. See the{" "}
      <Link href="/endings/pay-debt" className="underline hover:text-amber">Pay Debt tracker page</Link>.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(251,191,36,0.7)" }}>Source: Community (Reddit discussions) — route not confirmed</span></>,
  },
  {
    q: "What are Heart Piece / Heart Note for?",
    a: <>Players on Reddit have reported finding Heart Note and Heart Piece items, but their <strong>purpose is not yet confirmed</strong>. Community theories suggest they may relate to a hidden route or the True Ending. We are tracking this — see the{" "}
      <Link href="/items/heart-of-the-sea" className="underline hover:text-amber">Heart of the Sea page</Link>.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(239,68,68,0.7)" }}>Source: Unverified — player reports only</span></>,
  },
  {
    q: "Does Message in a Bottle do anything?",
    a: <>Players on Reddit have asked about this item's purpose. Currently, <strong>its function is unknown</strong>. If you discover what it does, the community would benefit from your report.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(239,68,68,0.7)" }}>Source: Unverified — player questions only</span></>,
  },
  {
    q: "What is the world record for days survived?",
    a: <>No official world record exists. Reddit players have self-reported <strong>52, 68, and 75 days survived</strong>, but these are unverified claims without evidence standards. v1.1.2 added a "Highest Day Reached" record to the game.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>Source: Official (record feature added) + Unverified (player day counts)</span></>,
  },
  {
    q: "Is there a Chinese or Korean translation?",
    a: <>No official Chinese or Korean translation exists. Community translation patches may be available — check community forums — but these are <strong>unofficial and may have compatibility issues</strong> with current game versions. Always download from trusted sources.<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(251,191,36,0.7)" }}>Source: Community — no official translations</span></>,
  },
];

function FaqCard({ q, a }: FAQItem) {
  return (
    <InfoCard>
      <h3 className="text-sm font-bold text-text-primary mb-2" style={NUNITO}>{q}</h3>
      <div className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{a}</div>
    </InfoCard>
  );
}

export function FAQPage() {
  return (
    <>
      <SEO
        title="FAQ: Steam, Mac, Mobile, Download & Controls"
        description="Don't Sleep With The Fishes FAQ: Steam release, Mac and mobile compatibility, how to download, controls, giant squid, pay debt, heart piece, and world record. Official + community answers."
       
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <HelpCircle className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">FAQ</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-2" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes FAQ</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-lg">Frequently asked questions about Steam release, platforms, download, controls, and game mechanics. Answers sourced from official devlogs and community reports.</p>
        </div>

        {/* Quick Answer */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Quick Answer</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            This FAQ answers common Don't Sleep With The Fishes questions about downloads, Steam status, controls, endings, rescue routes, Giant Squid, Pay Debt, Heart Pieces, translations, and safe official links.
          </p>
        </InfoCard>

        {/* General FAQ */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-amber" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Platform &amp; Download</h2>
          </div>
          <div className="space-y-3">
            {generalFaq.map((faq) => <FaqCard key={faq.q} {...faq} />)}
          </div>
        </div>

        {/* Gameplay FAQ */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-amber" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Gameplay &amp; Mechanics</h2>
          </div>
          <div className="space-y-3">
            {gameplayFaq.map((faq) => <FaqCard key={faq.q} {...faq} />)}
          </div>
        </div>

        {/* Official links */}
        <InfoCard variant="amber" className="mt-8">
          <h2 className="text-sm font-semibold text-amber mb-2">Official Links</h2>
          <div className="space-y-1.5">
            <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-amber transition-colors" style={NUNITO}>
              <ExternalLink className="h-3 w-3" /> Official Game on itch.io
            </a>
            <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes/devlog/1546268/version-112" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-amber transition-colors" style={NUNITO}>
              <ExternalLink className="h-3 w-3" /> v1.1.2 Devlog
            </a>
          </div>
        </InfoCard>

        {/* Related links */}
        <div className="mt-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Related Guides</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { href: "/guide", label: "Beginner Guide", desc: "Start here for your first playthrough" },
              { href: "/faq/steam-release", label: "Steam Release FAQ", desc: "Everything about the Steam port" },
              { href: "/faq/mac", label: "Mac Compatibility", desc: "Running on Mac & workarounds" },
              { href: "/faq/mobile", label: "Mobile Version FAQ", desc: "Android, iOS & mobile status" },
            ].map(({ href, label, desc }) => (
              <Link key={label} href={href} className="group flex items-center justify-between gap-2 rounded-xl border px-4 py-3 active:scale-[0.98] transition-all duration-200" style={{ borderColor: "rgba(245,158,11,0.09)", background: "rgba(8,14,28,1)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.30)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.09)"; }}>
                <div>
                  <div className="text-sm font-medium text-text-primary group-hover:text-amber transition-colors">{label}</div>
                  <div className="text-xs text-text-secondary">{desc}</div>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-text-secondary group-hover:text-amber transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
