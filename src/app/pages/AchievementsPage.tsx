"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import type { Confidence } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Trophy, Sparkles, ChevronRight, Target, ExternalLink, ShieldCheck } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface StatusRow {
  feature: string;
  status: string;
  confidence: Confidence;
}

const statusTable: StatusRow[] = [
  { feature: "Steam achievements", status: "Not publicly listed yet; Steam port is planned", confidence: "Official" },
  { feature: "Custom Steam achievements", status: "Mentioned by developer as possible with Steam port", confidence: "Official" },
  { feature: "Lore item tracking", status: "Saved to endings tab after fishing", confidence: "Official" },
  { feature: "Highest Day Reached", status: "Tracked in Main Menu from v1.1.2", confidence: "Official" },
  { feature: "v1.1.1 record tracking", status: "Not recorded by the new feature", confidence: "Official" },
  { feature: "Ending checklist", status: "Multiple endings exist, but full list must be verified", confidence: "Official" },
  { feature: "Community world records", status: "Needs proof; no official leaderboard exists", confidence: "Community" },
];

interface GoalRow {
  goal: string;
  category: string;
  howToTrack: string;
  guideUrl: string;
  guideLabel: string;
  confidence: Confidence;
}

const goals: GoalRow[] = [
  { goal: "Get rescued", category: "Ending route", howToTrack: "Trigger rescue outcome", guideUrl: "/endings/rescue", guideLabel: "Rescue Guide", confidence: "Official" },
  { goal: "Reach highest day record", category: "Record", howToTrack: "Check Main Menu after v1.1.2 run", guideUrl: "/speedrun", guideLabel: "Speedrun Guide", confidence: "Official" },
  { goal: "Find lore item", category: "Lore", howToTrack: "Fish lore item; view in endings tab", guideUrl: "/items", guideLabel: "Items Guide", confidence: "Official" },
  { goal: "Complete all endings", category: "Completion", howToTrack: "Use endings checklist below", guideUrl: "/endings", guideLabel: "Endings Guide", confidence: "Official" },
  { goal: "Pay Debt route", category: "Secret route", howToTrack: "Track with source labels", guideUrl: "/endings/pay-debt", guideLabel: "Pay Debt Guide", confidence: "Community" },
  { goal: "Ghost Ship / Flying Dutchman", category: "Secret ending", howToTrack: "Needs verified route", guideUrl: "/endings", guideLabel: "Endings Guide", confidence: "Community" },
  { goal: "Steam achievements", category: "Steam", howToTrack: "Wait for Steam release", guideUrl: "/faq/steam-release", guideLabel: "Steam FAQ", confidence: "Official" },
];

interface EndingTracker {
  ending: string;
  confirmed: string;
  spoiler: string;
  guideUrl: string;
  guideLabel: string;
}

const endingTracker: EndingTracker[] = [
  { ending: "Rescue ending", confirmed: "Official route type; details community-tested", spoiler: "Medium", guideUrl: "/endings/rescue", guideLabel: "Rescue Guide" },
  { ending: "True ending", confirmed: "Community-reported until verified", spoiler: "Heavy", guideUrl: "/endings/true-ending", guideLabel: "True Ending Guide" },
  { ending: "Pay Debt route", confirmed: "Community-reported", spoiler: "Heavy", guideUrl: "/endings/pay-debt", guideLabel: "Pay Debt Guide" },
  { ending: "Seagull bad ending", confirmed: "Community-reported", spoiler: "Medium", guideUrl: "/events/seagull", guideLabel: "Seagull Guide" },
  { ending: "Ghost Ship / Flying Dutchman", confirmed: "Community question; needs verification", spoiler: "Heavy", guideUrl: "/endings", guideLabel: "Endings Guide" },
];

const faqData = [
  { q: "Does Don't Sleep With The Fishes have achievements?", a: "The itch.io version does not have a formal achievement system, but v1.1.2 added completion tracking: lore items are saved to the endings tab, and Highest Day Reached is tracked in the main menu. Steam achievements are planned but not yet released." },
  { q: "Are there Steam achievements?", a: "Not yet. A public Steam achievement list is not available. The developer has confirmed a Steam port is planned, and an itch comment mentions custom Steam achievements as a possible part of the port. Until the Steam page is live, no achievement list is confirmed." },
  { q: "Where do I see Highest Day Reached?", a: "In the Main Menu on v1.1.2 or newer. This feature was added in v1.1.2 and does not track runs from earlier versions." },
  { q: "Do v1.1.1 records count?", a: "No. The official v1.1.2 patch notes state that v1.1.1 runs are not recorded because the Highest Day Reached feature did not exist in that version." },
  { q: "How do I track 100% completion?", a: "Use the completion checklist on this page to track endings, lore items, records, and secret routes. Entries marked Community or Unverified are leads rather than confirmed completion goals." },
  { q: "Are lore items saved?", a: "Yes. Official v1.1.2 notes confirm that when you fish a lore item, it is saved to the endings tab for later viewing." },
  { q: "How do I unlock all endings?", a: "Multiple endings are officially confirmed. Use the Endings Guide for known routes. Some routes (True Ending, Pay Debt, Ghost Ship) are community-reported and still being verified." },
  { q: "Is there an official leaderboard?", a: "No. Some players have self-reported day counts (52, 68, 75 days) in itch comments and Reddit, but there is no official leaderboard or verification standard." },
  { q: "What counts as a verified record?", a: "A screenshot or video showing the Highest Day Reached screen in v1.1.2. Without proof, records are marked as Community report or Unverified on this guide." },
];

function AchievementsFAQSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function AchievementsPage() {
  return (
    <>
      <SEO title="Achievements & Records" description="" />
      <AchievementsFAQSchema />

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Trophy className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Completion Tracker</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Achievements &amp; Completion Guide</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            Don't Sleep With The Fishes does not yet have a confirmed public Steam achievement list, but v1.1.2 added important completion tracking: lore items remain saved in the endings tab, and Highest Day Reached is now tracked from the main menu. Use this page as a completion checklist for endings, lore, rescue routes, secret routes, and long-survival records.
          </p>
        </div>

        {/* Quick Answer */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Quick Answer</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            Don't Sleep With The Fishes does not yet have a confirmed public Steam achievement list, but v1.1.2 added completion tracking such as lore item saving and Highest Day Reached. Use this page to track endings, records, lore items, and future Steam achievement status.
          </p>
        </InfoCard>

        {/* Current Status Table */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>Current Achievement Status</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Feature</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>Current Status</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Src</th>
                </tr>
              </thead>
              <tbody>
                {statusTable.map((row, i) => (
                  <tr key={row.feature} style={{ borderBottom: i < statusTable.length - 1 ? "1px solid rgba(245,158,11,0.06)" : "none" }}>
                    <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.feature}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.status}</td>
                    <td className="py-3"><SourceBadge source={row.confidence} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* Completion Checklist */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>Completion Checklist</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 650 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Goal</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>Category</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>How to Track</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Guide</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Src</th>
                </tr>
              </thead>
              <tbody>
                {goals.map((row, i) => (
                  <tr key={row.goal} style={{ borderBottom: i < goals.length - 1 ? "1px solid rgba(245,158,11,0.06)" : "none" }}>
                    <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.goal}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.category}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.howToTrack}</td>
                    <td className="py-3 pr-3">
                      <Link href={row.guideUrl} className="text-xs font-bold text-amber/80 hover:text-amber transition-colors" style={NUNITO}>{row.guideLabel}</Link>
                    </td>
                    <td className="py-3"><SourceBadge source={row.confidence} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* Endings Tracker */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Endings Tracker</h2>
          <p className="text-xs text-text-secondary leading-relaxed mb-3" style={NUNITO}>
            This checklist tracks confirmed, verified, and community-reported endings separately. If an ending route is marked Community or Unverified, treat it as a lead rather than a finished walkthrough.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 550 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Ending / Route</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>Confirmed?</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>Spoiler</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Guide</th>
                </tr>
              </thead>
              <tbody>
                {endingTracker.map((row, i) => (
                  <tr key={row.ending} style={{ borderBottom: i < endingTracker.length - 1 ? "1px solid rgba(245,158,11,0.06)" : "none" }}>
                    <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.ending}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.confirmed}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.spoiler}</td>
                    <td className="py-3">
                      <Link href={row.guideUrl} className="text-xs font-bold text-amber/80 hover:text-amber transition-colors" style={NUNITO}>{row.guideLabel}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* Steam Achievement Status */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Steam Achievement Status</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            A public Steam achievement list is <strong className="text-text-primary">not available yet</strong>. The developer has said the next main goal is a Steam port, and a comment on the itch page mentions custom Steam achievements as a possible part of the port. Until the Steam page is live, this section tracks status only and does not list achievements as confirmed.
          </p>
          <div className="mt-2 flex items-center gap-2">
            <SourceBadge source="Official" /> <span className="text-xs text-text-secondary">Not released yet</span>
          </div>
        </InfoCard>

        {/* Highest Day Reached */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Highest Day Reached</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-1" style={NUNITO}>
            Highest Day Reached is now tracked in v1.1.2 and can be viewed from the main menu. Runs from v1.1.1 are not included because the tracking feature did not exist in that version.
          </p>
          <SourceBadge source="Official" />
        </InfoCard>

        {/* FAQ */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-4" style={NUNITO}>FAQ</h2>
          <div className="space-y-5">
            {faqData.map((item) => (
              <div key={item.q}>
                <h3 className="text-xs font-bold text-text-primary mb-1" style={NUNITO}>{item.q}</h3>
                <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{item.a}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Related Guides */}
        <div className="mt-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Related Guides</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { href: "/endings", label: "Endings Guide", desc: "All outcomes & requirements" },
              { href: "/endings/rescue", label: "Rescue Route", desc: "Make yourself visible strategy" },
              { href: "/endings/pay-debt", label: "Pay Debt Route", desc: "Community tracking page" },
              { href: "/speedrun", label: "Speedrun & Records", desc: "World record & survival days" },
              { href: "/faq/steam-release", label: "Steam Release FAQ", desc: "Steam port status & timeline" },
              { href: "/tips-tricks", label: "Tips & Tricks", desc: "Best survival strategies" },
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

        <div className="mt-6 text-xs" style={{ color: "rgba(122,146,170,0.75)", ...NUNITO }}>
          Unofficial fan guide &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">Official game on itch.io <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
