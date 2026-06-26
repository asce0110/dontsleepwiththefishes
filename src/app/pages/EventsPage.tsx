"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import type { Confidence } from "../components/ui/SourceBadge";
import Link from "next/link";
import { AlertTriangle, Sparkles, ChevronRight, Siren, Anchor, ShieldCheck } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface EventRow {
  event: string;
  bestCounter: string;
  backup: string;
  avoid: string;
  result: string;
  searchIntent: string;
  confidence: Confidence;
  href: string;
}

const events: EventRow[] = [
  {
    event: "Giant Squid",
    bestCounter: "Anchor for survival; completed Heart of the Sea for true ending route",
    backup: "Repair boat next day if damaged",
    avoid: "Going back to sleep",
    result: "Death risk, boat damage, or true ending route",
    searchIntent: "pay debt, true ending, giant squid",
    confidence: "Community",
    href: "/events/giant-squid",
  },
  {
    event: "Hope",
    bestCounter: "Flashlight or Flare Gun",
    backup: "Save Flare Gun if expecting a later rescue chance",
    avoid: "Ignoring the plane",
    result: "Chance-based rescue route",
    searchIntent: "make yourself visible, rescue route",
    confidence: "Community",
    href: "/endings/rescue",
  },
  {
    event: "Seagull",
    bestCounter: "Shoo it away if avoiding bad ending",
    backup: "Feed only if you accept food drain",
    avoid: "Letting too many stay",
    result: "Possible bad ending / resource drain",
    searchIntent: "avoid seagull ending",
    confidence: "Community",
    href: "/events/seagull",
  },
  {
    event: "Eerie Melody",
    bestCounter: "Duct Tape",
    backup: "Bucket / Umbrella",
    avoid: "Flashlight / Spyglass",
    result: "Avoid siren damage or death",
    searchIntent: "eerie melody, siren, duct tape",
    confidence: "Community",
    href: "/events/eerie-melody",
  },
  {
    event: "Eyes",
    bestCounter: "Stay awake",
    backup: "None known",
    avoid: "Going to sleep with a companion",
    result: "Shipmate survives, but you wake with low energy",
    searchIntent: "eyes event, protect shipmate",
    confidence: "Community",
    href: "/events/eyes",
  },
  {
    event: "Whirlpool",
    bestCounter: "Anchor",
    backup: "Immediate repair after damage",
    avoid: "No anchor / sleeping through it",
    result: "Prevent or reduce heavy boat damage",
    searchIntent: "whirlpool, anchor use, boat damage",
    confidence: "Community",
    href: "/events/whirlpool",
  },
];

const riskColors: Record<string, string> = {
  Extreme: "rgba(239,68,68,0.90)",
  High: "rgba(248,113,113,0.85)",
  Medium: "rgba(251,191,36,0.85)",
  Low: "rgba(52,211,153,0.85)",
};

function EventFAQSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are night events in Don't Sleep With The Fishes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Night events interrupt your sleep and force you to choose an item, stay awake, signal for help, or risk going back to sleep. Each event tests a different part of your inventory: Anchor protects against boat-loss threats, Flare Gun and Flashlight help with rescue events, Duct Tape and Bucket solve certain hazard events, and staying awake can sometimes protect a shipmate."
        }
      },
      {
        "@type": "Question",
        "name": "What do you do with the Giant Squid in Don't Sleep With The Fishes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Community reports suggest using the Anchor as the safest survival counter. The completed Heart of the Sea may be tied to the true ending route, but that route should be verified before being treated as confirmed."
        }
      },
      {
        "@type": "Question",
        "name": "How do you make yourself visible in Don't Sleep With The Fishes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "During the Hope event, use Flashlight or Flare Gun to signal passing aircraft. Rescue is chance-based, not guaranteed. Official v1.1.2 patch notes confirm rescue ending chances were slightly increased."
        }
      },
      {
        "@type": "Question",
        "name": "How do you avoid the Seagull bad ending?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shoo seagulls away instead of letting too many stay on the boat. Feeding a seagull can make it stay with you, but it drains food. Too many seagulls may lead to a bad ending."
        }
      },
      {
        "@type": "Question",
        "name": "What should you use for Eerie Melody?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Community reports recommend Duct Tape as the safest counter. Bucket or Umbrella are backup options. Avoid using Flashlight or Spyglass, as those may trigger a dangerous siren outcome."
        }
      },
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function EventsPage() {
  return (
    <>
      <SEO
        title="Night Event Counters Guide"
        description="Complete Don't Sleep With The Fishes night event counters guide updated for v1.1.2. Learn what to do against the Giant Squid, Hope, Seagull, Eerie Melody, Eyes, Whirlpool, and more."
       
        ogType="website"
      />
      <EventFAQSchema />

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <AlertTriangle className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Events Database</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> Updated for v1.1.2
            </span>
            <span className="text-xs font-medium" style={{ color: "rgba(122,146,170,0.75)", ...NUNITO }}>Last verified: 2026-06-08</span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Night Event Counters</h1>

          {/* Short answer */}
          <div className="mb-4 max-w-3xl">
            <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              Night events in Don't Sleep With The Fishes interrupt your sleep and force you to choose an item, stay awake, signal for help, or risk going back to sleep. This guide lists the safest known counters for each major event, updated for v1.1.2, with source labels for official notes, verified tests, and community reports.
            </p>
          </div>

          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(245,158,11,0.55)" }}>Spoiler level: Medium</span>
            <span className="text-xs text-text-secondary">|</span>
            <SourceBadge source="Official" />
            <SourceBadge source="Community" />
            <SourceBadge source="Unverified" />
          </div>
        </div>

        {/* Quick Answer */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Quick Answer</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            Night events interrupt your sleep and force you to choose an item, stay awake, signal for help, or risk going back to sleep. This guide lists known counters for major events and labels each answer as Official, Verified, Community, or Unverified.
          </p>
        </InfoCard>

        {/* SEO body text */}
        <InfoCard className="mb-6">
          <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
            Night events are one of the most important survival checks in Don't Sleep With The Fishes. The official game page explains that if your sleep is interrupted, you must use an item you brought to handle the situation, or try going back to sleep when you have no better answer. In practice, each night event tests a different part of your inventory: <strong className="text-text-primary">Anchor</strong> protects against boat-loss threats, <strong className="text-text-primary">Flare Gun and Flashlight</strong> help with rescue events, <strong className="text-text-primary">Duct Tape and Bucket</strong> solve certain hazard events, and staying awake can sometimes protect a shipmate.
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.70)" }}>
            Because many event solutions are still being tested by the community, this guide separates official patch notes, verified route testing, and community-reported counters. If a counter is marked <strong>Community</strong> or <strong>Unverified</strong>, treat it as useful but not final.
          </p>
        </InfoCard>

        {/* Event Counter Table */}
        <InfoCard>
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>Night Event Counter Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 800 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Event</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Best Counter</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>Backup</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden lg:table-cell" style={NUNITO}>Avoid</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden xl:table-cell" style={NUNITO}>Search Intent</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Src</th>
                </tr>
              </thead>
              <tbody>
                {events.map((row, i) => (
                  <tr key={row.event}
                    style={{ borderBottom: i < events.length - 1 ? "1px solid rgba(245,158,11,0.06)" : "none" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.03)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                    <td className="py-3 pr-3">
                      <Link href={row.href} className="flex items-center gap-2 group">
                        <Siren className="h-3.5 w-3.5 shrink-0" style={{ color: "rgba(245,158,11,0.4)" }} />
                        <span className="text-sm font-bold text-text-primary group-hover:text-amber transition-colors" style={NUNITO}>{row.event}</span>
                      </Link>
                    </td>
                    <td className="py-3 pr-3 text-xs text-text-secondary" style={NUNITO}>{row.bestCounter}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.backup}</td>
                    <td className="py-3 pr-3 text-xs hidden lg:table-cell" style={{ color: "rgba(248,113,113,0.80)", ...NUNITO }}>{row.avoid}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden xl:table-cell" style={NUNITO}>{row.searchIntent}</td>
                    <td className="py-3"><SourceBadge source={row.confidence} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* Official confirmation callout */}
        <InfoCard variant="amber" className="mt-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
            <div>
              <h2 className="text-sm font-semibold text-amber mb-1">What's Confirmed vs Community-Reported</h2>
              <div className="space-y-2 text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
                <p><strong>Official:</strong> The game has night events that interrupt sleep and require items to handle. v1.1.2 added 3 new night events and slightly increased rescue ending chances.</p>
                <p><strong>Community:</strong> Specific item counters (Anchor for Squid, Duct Tape for Eerie Melody, Stay Awake for Eyes, etc.) are based on player reports from Reddit, Fandom, and itch comments. These have not all been independently verified.</p>
                <p><strong>Unverified:</strong> Some theories (giving fish to squid, exact bad ending triggers, solo run outcomes) are player speculation without confirmed results.</p>
              </div>
            </div>
          </div>
        </InfoCard>

        {/* Event FAQ */}
        <InfoCard className="mt-6">
          <h2 className="text-base font-bold text-text-primary mb-4" style={NUNITO}>Event FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "What do you do with the Giant Squid?", a: "Community reports say use the Anchor for survival. The Heart of the Sea may open a true ending route, but this is not independently verified. See the Giant Squid Guide for details." },
              { q: "How do you make yourself visible?", a: "During the Hope event, use Flashlight or Flare Gun to signal passing aircraft. Rescue is chance-based. Official v1.1.2 notes confirm rescue chances were slightly increased." },
              { q: "How do you avoid the Seagull ending?", a: "Shoo seagulls away instead of feeding too many. Community reports say letting too many seagulls stay can lead to a bad ending. See the Seagull Guide." },
              { q: "What do you use for Eerie Melody?", a: "Use Duct Tape, Bucket, or Umbrella. Avoid Flashlight and Spyglass — community reports say they trigger a dangerous siren reaction." },
              { q: "Should you stay awake during Eyes?", a: "Yes, if you have a shipmate. Staying awake protects your companion but leaves you with low energy. Going to sleep may result in shipmate death." },
              { q: "What do you use for Whirlpool?", a: "Use Anchor. Without Anchor, the boat takes heavy damage. Anchor is an S-tier item because it counters both Whirlpool and Giant Squid." },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="text-xs font-bold text-text-primary mb-1" style={NUNITO}>{item.q}</h3>
                <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{item.a}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Deep dive links */}
        <div className="mt-10">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Event Detail Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              { href: "/events/giant-squid", label: "Giant Squid Guide", desc: "Anchor, Pay Debt & True Ending route", icon: <Anchor className="h-3.5 w-3.5" /> },
              { href: "/endings/rescue", label: "Make Yourself Visible", desc: "Flare Gun, Flashlight & rescue chance", icon: <ShieldCheck className="h-3.5 w-3.5" /> },
              { href: "/events/seagull", label: "Seagull Guide", desc: "Feed vs Shoo & bad ending prevention", icon: <Siren className="h-3.5 w-3.5" /> },
              { href: "/events/eerie-melody", label: "Eerie Melody Guide", desc: "Duct Tape, Bucket & siren counter", icon: <Siren className="h-3.5 w-3.5" /> },
              { href: "/events/eyes", label: "Eyes Event Guide", desc: "Stay awake strategy & shipmate risk", icon: <Siren className="h-3.5 w-3.5" /> },
              { href: "/events/whirlpool", label: "Whirlpool Guide", desc: "Anchor use & boat damage recovery", icon: <Anchor className="h-3.5 w-3.5" /> },
            ].map(({ href, label, desc, icon }) => (
              <Link key={label} href={href} className="group flex items-center justify-between gap-2 rounded-xl border px-4 py-3 active:scale-[0.98] transition-all duration-200" style={{ borderColor: "rgba(245,158,11,0.09)", background: "rgba(8,14,28,1)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.30)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.09)"; }}>
                <div className="flex items-center gap-2.5">
                  <span style={{ color: "rgba(245,158,11,0.4)" }}>{icon}</span>
                  <div>
                    <div className="text-sm font-medium text-text-primary group-hover:text-amber transition-colors">{label}</div>
                    <div className="text-xs text-text-secondary">{desc}</div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-text-secondary group-hover:text-amber transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Related item links */}
        <div className="mt-6">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Key Items for Events</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/items", label: "Anchor" },
              { href: "/items", label: "Flare Gun" },
              { href: "/items", label: "Flashlight" },
              { href: "/items", label: "Duct Tape" },
              { href: "/items", label: "Bucket" },
              { href: "/items/heart-of-the-sea", label: "Heart of the Sea" },
            ].map(({ href, label }) => (
              <Link key={label} href={href} className="rounded-full px-3 py-1 text-xs font-bold transition-all hover:brightness-110" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.15)", color: "rgba(245,158,11,0.75)", ...NUNITO }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
