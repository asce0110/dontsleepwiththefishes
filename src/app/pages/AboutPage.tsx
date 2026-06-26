"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { ExternalLink, ShieldCheck, ChevronRight, BookOpen, Sparkles } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const doesAndDoesnt = [
  ["Write guides and explain mechanics", "Host game files"],
  ["Link to official itch.io page", "Provide cracks, torrents, or mirrors"],
  ["Track official updates", "Claim to represent DopplerGhost"],
  ["Label community reports", "Present guesses as confirmed facts"],
  ["Accept corrections", "Copy Fandom or Reddit content verbatim"],
];

const sourceLabels = [
  { label: "Official", meaning: "Confirmed by DopplerGhost through itch.io page, devlog, or official comment", example: "v1.1.2 changes, Steam port status, Captain Whiskers fishing bonus" },
  { label: "Verified", meaning: "Confirmed through direct gameplay testing by this guide", example: "A tested item counter or ending route" },
  { label: "Community", meaning: "Reported by players on Reddit, itch.io comments, Fandom, or videos", example: "Giant Squid anchor reports, Heart Piece theories" },
  { label: "Unverified", meaning: "Mentioned by players but not reliably confirmed", example: "Exact Pay Debt route before testing" },
];

const spoilerLevels = [
  { level: "None", meaning: "Controls, download help, basic survival" },
  { level: "Light", meaning: "Item effects, non-ending event counters" },
  { level: "Medium", meaning: "Event outcomes and bad ending prevention" },
  { level: "Heavy", meaning: "True ending, Pay Debt, Heart of the Sea, Ghost Ship" },
];

const versionPriority = [
  { pageType: "Events", priority: "Highest" },
  { pageType: "Items", priority: "Highest" },
  { pageType: "Endings", priority: "Highest" },
  { pageType: "Walkthrough", priority: "High" },
  { pageType: "Tips & Tricks", priority: "High" },
  { pageType: "Achievements & Records", priority: "High" },
  { pageType: "FAQ / Steam Release", priority: "High" },
  { pageType: "About page", priority: "Low" },
];

function AboutSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About This Don't Sleep With The Fishes Wiki",
    "description": "An unofficial fan-made guide explaining source labels, version updates, spoiler policy, and official download links for Don't Sleep With The Fishes.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Don't Sleep With The Fishes Guide & Wiki",
    },
    "about": {
      "@type": "VideoGame",
      "name": "Don't Sleep With The Fishes",
      "sameAs": "https://dopplerghost.itch.io/dont-sleep-with-the-fishes",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function AboutPage() {
  return (
    <>
      <SEO title="About This Wiki" description="" />
      <AboutSchema />

      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <BookOpen className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">About</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>About This Wiki</h1>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            An unofficial fan-made guide for Don't Sleep With The Fishes, built to keep routes, events, items, endings, and community reports clearly labeled.
          </p>
        </div>

        <div className="space-y-4">

          {/* Short Statement */}
          <InfoCard variant="amber">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
              <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
                This is an <strong className="text-text-primary">unofficial fan-made wiki</strong> and strategy guide for Don't Sleep With The Fishes. It is <strong className="text-text-primary">not affiliated with DopplerGhost</strong>, and it does not host game files. All download links point to the official itch.io page.
              </p>
            </div>
          </InfoCard>

          {/* What This Wiki Is */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>What This Wiki Is</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              This wiki helps players survive longer, understand night events, compare item uses, track endings, and follow version-specific changes in Don't Sleep With The Fishes. The goal is to turn scattered community questions from Reddit, itch.io comments, and gameplay testing into clear, spoiler-aware guides.
            </p>
            <ul className="space-y-1.5 text-sm" style={NUNITO}>
              {["Night event counters", "Item uses and priority", "Endings and route notes", "Walkthroughs and survival tips", "Completion, records, and lore tracking", "Steam release and download FAQ"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                  {item}
                </li>
              ))}
            </ul>
          </InfoCard>

          {/* What This Wiki Is Not */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>What This Wiki Is Not</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              This wiki is <strong className="text-text-primary">not</strong> an official website, not a download mirror, not a crack or free-download source, and not a replacement for buying the game. If you want to play Don't Sleep With The Fishes, buy or download it from the official DopplerGhost itch.io page.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 450 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest" style={{ color: "rgba(52,211,153,0.7)", ...NUNITO }}>This Wiki Does</th>
                    <th className="py-2 text-xs font-black uppercase tracking-widest" style={{ color: "rgba(239,68,68,0.7)", ...NUNITO }}>This Wiki Does Not</th>
                  </tr>
                </thead>
                <tbody>
                  {doesAndDoesnt.map(([does, doesnt], i) => (
                    <tr key={does} style={{ borderBottom: i < doesAndDoesnt.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-2.5 pr-3 text-xs" style={{ color: "rgba(52,211,153,0.8)", ...NUNITO }}>{does}</td>
                      <td className="py-2.5 text-xs" style={{ color: "rgba(239,68,68,0.7)", ...NUNITO }}>{doesnt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          {/* Source Confidence System */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Source Confidence System</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              Because Don't Sleep With The Fishes is still being actively discussed by players, not every route or event counter is fully confirmed. Each guide uses a source confidence label so readers can tell the difference between official notes, tested information, community reports, and unverified theories.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 500 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Label</th>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>Meaning</th>
                    <th className="py-2 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>Example</th>
                  </tr>
                </thead>
                <tbody>
                  {sourceLabels.map((row, i) => (
                    <tr key={row.label} style={{ borderBottom: i < sourceLabels.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-2.5 pr-3"><SourceBadge source={row.label as "Official" | "Verified" | "Community" | "Unverified"} /></td>
                      <td className="py-2.5 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.meaning}</td>
                      <td className="py-2.5 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          {/* Verification Standards */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>How We Verify Guides</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-2" style={NUNITO}>
              Before a route is marked Verified, it should be tested in the current game version whenever possible. If a mechanic changes after a patch, the related page is reviewed and the source label may be downgraded until retested.
            </p>
            <ul className="space-y-1.5 text-xs text-text-secondary" style={NUNITO}>
              {["Tested on the listed game version", "Outcome reproduced or recorded", "Screenshot/video proof when possible", "Compared against official patch notes", "Community-only claims kept separate"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                  {item}
                </li>
              ))}
            </ul>
          </InfoCard>

          {/* Version Update Policy */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Version Update Policy</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              Guides are written with version labels. When DopplerGhost releases a new update, core pages such as Events, Items, Endings, Tips, and Achievements are reviewed first.
            </p>
            <div className="overflow-x-auto mb-2">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 350 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Page Type</th>
                    <th className="py-2 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {versionPriority.map((row, i) => (
                    <tr key={row.pageType} style={{ borderBottom: i < versionPriority.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-2.5 pr-3 text-xs text-text-secondary" style={NUNITO}>{row.pageType}</td>
                      <td className="py-2.5 text-xs font-bold" style={{ color: row.priority === "Highest" ? "rgba(52,211,153,0.9)" : row.priority === "High" ? "rgba(96,165,250,0.9)" : "rgba(122,146,170,0.7)", ...NUNITO }}>{row.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-text-secondary" style={NUNITO}>Current guide target version: v1.1.2 &middot; Last reviewed: 2026-06-08</p>
          </InfoCard>

          {/* Spoiler Policy */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Spoiler Policy</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              Some Don't Sleep With The Fishes pages contain ending spoilers. Major ending routes, true ending notes, Pay Debt, Heart Piece, and Ghost Ship content are labeled with spoiler warnings. General survival tips and item pages try to keep major route spoilers out of the first screen.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 400 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Level</th>
                    <th className="py-2 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {spoilerLevels.map((row, i) => (
                    <tr key={row.level} style={{ borderBottom: i < spoilerLevels.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-2.5 pr-3 text-xs font-bold" style={{ color: row.level === "Heavy" ? "rgba(239,68,68,0.8)" : row.level === "Medium" ? "rgba(251,191,36,0.8)" : "rgba(52,211,153,0.8)", ...NUNITO }}>{row.level}</td>
                      <td className="py-2.5 text-xs text-text-secondary" style={NUNITO}>{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          {/* Copyright */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Copyright &amp; Official Links</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              Don't Sleep With The Fishes is developed by <strong className="text-text-primary">DopplerGhost</strong>. This guide is a fan-made resource and is not affiliated with or endorsed by the developer unless explicitly stated.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              <strong className="text-text-primary">We do not host</strong> the game, game archives, cracks, torrents, or download mirrors.
            </p>
            <div className="space-y-1.5 text-sm" style={NUNITO}>
              <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-amber/80 hover:text-amber transition-colors">
                <ExternalLink className="h-3.5 w-3.5" /> Official itch.io page
              </a>
            </div>
            <div className="mt-3 pt-3 border-t" style={{ borderColor: "rgba(15,31,56,0.5)" }}>
              <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>
                Screenshots are used for guide explanation and should be limited to what is necessary. Community wiki pages may be used as research leads, but this site does not copy Fandom articles. Community-sourced mechanics are rewritten, attributed where appropriate, and verified separately when possible.
              </p>
            </div>
          </InfoCard>

          {/* Community Contributions */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Community Contributions</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              Players can help improve this wiki by reporting errors, submitting screenshots, sharing tested routes, or confirming event counters in the current game version.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {["Submit a correction", "Report an unverified route", "Submit a highest-day record", "Suggest a missing event"].map((item) => (
                <div key={item} className="rounded-xl border px-4 py-3 text-sm font-medium text-text-primary" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,14,28,1)", ...NUNITO }}>
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-text-secondary" style={NUNITO}>
              For corrections, route proof, or source updates, contact us through the site contact form or leave a note on the relevant guide page when comments are available.
            </p>
          </InfoCard>

          {/* Contact and Corrections */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Contact and Corrections</h2>
            <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              If you find outdated information, an unverified route, or a missing event counter, please send the game version, event name, item used, outcome, and screenshot or video proof when possible.
            </p>
            <p className="mt-2 text-xs text-text-secondary" style={NUNITO}>
              For corrections, route proof, or source updates, contact us through the site contact form or leave a note on the relevant guide page when comments are available.
            </p>
          </InfoCard>
        </div>

        {/* Related Links */}
        <div className="mt-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Related Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { href: "/guide", label: "Beginner Guide", desc: "Start here for your first playthrough" },
              { href: "/events", label: "Events Guide", desc: "Night event counter table" },
              { href: "/items", label: "Items Guide", desc: "Full item catalog & rankings" },
              { href: "/endings", label: "Endings Guide", desc: "All outcomes & requirements" },
              { href: "/tips-tricks", label: "Tips & Tricks", desc: "Best survival strategies" },
              { href: "/achievements", label: "Achievements & Records", desc: "Completion & highest day tracker" },
              { href: "/faq/steam-release", label: "Steam Release FAQ", desc: "Steam port status" },
            ].map(({ href, label, desc }) => (
              <Link key={label} href={href} className="group flex items-center justify-between gap-2 rounded-xl border px-4 py-3 transition-all duration-200" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,14,28,1)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.30)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,31,56,1)"; }}>
                <div>
                  <div className="text-sm font-medium text-text-primary group-hover:text-amber transition-colors">{label}</div>
                  <div className="text-xs text-text-secondary">{desc}</div>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-text-secondary group-hover:text-amber transition-colors" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-bold transition-all" style={{ ...NUNITO, borderColor: "rgba(245,158,11,0.20)", background: "rgba(245,158,11,0.06)", color: "#f59e0b" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.14)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.06)"; }}>
              <ExternalLink className="h-4 w-4" /> Official Game on itch.io
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
