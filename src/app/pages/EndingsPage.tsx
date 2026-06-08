"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import type { Confidence } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Trophy, Sparkles, ChevronRight, AlertTriangle, ShieldCheck } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface EndingRow {
  type: string;
  requirement: string;
  confidence: Confidence;
  note?: string;
  accent: string;
}

const endings: EndingRow[] = [
  { type: "Rescue Ending", requirement: "Flare Gun / Flashlight to signal for help. Respond to Hope and Other People events.", confidence: "Official", note: "Rescue ending chance slightly increased in v1.1.2 (official devlog). The 'make yourself visible' strategy is core to this route.", accent: "#22c55e" },
  { type: "True Ending", requirement: "Heart of the Sea item (community report). May involve paying debt and/or specific squid interaction.", confidence: "Community", note: "Exact steps not confirmed by official sources. Multiple community theories exist.", accent: "#f59e0b" },
  { type: "Pay Debt Route", requirement: "Possibly connected to Giant Squid encounter and Heart of the Sea. Community is still tracking.", confidence: "Community", note: "Reddit players discuss 'pay your debt' in context of squid and heart items. Route not confirmed.", accent: "#fbbf24" },
  { type: "Ghost Ship / Flying Dutchman", requirement: "Hidden ending. Specific trigger unknown.", confidence: "Community", note: "Mentioned in player discussions. Exact unlock conditions unverified.", accent: "#a78bfa" },
  { type: "Survivor Ending", requirement: "Survive long enough and reach rescue conditions.", confidence: "Official", note: "Multiple ending confirmed by official itch page.", accent: "#22c55e" },
  { type: "Lost at Sea (Death)", requirement: "Hit 0 health, starve, or fail critical night events.", confidence: "Official", note: "Official itch page mentions you 'can die in many ways.'", accent: "#ef4444" },
  { type: "Seagull Bad Ending", requirement: "Keep seagull too long without feeding or shooing (community report).", confidence: "Community", note: "Reddit players discuss avoiding this outcome.", accent: "#f87171" },
  { type: "Boat Destroyed", requirement: "Fail Whirlpool or Leak events without Anchor / Duct Tape.", confidence: "Community", accent: "#ef4444" },
  { type: "Starvation", requirement: "Run out of food. No Bait or Fishing Rod.", confidence: "Official", accent: "#f97316" },
  { type: "Shipmate Death", requirement: "Fail Eyes event or other crew-threatening encounters.", confidence: "Community", note: "Players report shipmates can die during specific events.", accent: "#ef4444" },
];

export function EndingsPage() {
  return (
    <>
      <SEO
        title="Endings Guide: All Outcomes & Requirements"
        description="Don't Sleep With The Fishes endings guide: all 12+ outcomes — rescue, true ending, pay debt, ghost ship, bad endings, and hidden secrets. Source confidence labels for every route."
       
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Trophy className="h-3.5 w-3.5 text-amber" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber">Endings Database</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-2" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes All Endings Guide</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">The game has multiple endings — survival, death, and hidden outcomes. Official sources confirm multiple endings exist and that the rescue ending chance was increased in v1.1.2. Specific route details are sourced from community reports unless marked otherwise.</p>
        </div>

        {/* Quick Answer */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Quick Answer</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            Don't Sleep With The Fishes has multiple ending outcomes, including rescue routes, bad endings, and community-reported secret routes. This guide tracks each ending with spoiler warnings and source labels so confirmed routes are separated from player theories.
          </p>
        </InfoCard>

        {/* Spoiler Warning */}
        <InfoCard variant="warning" className="mb-6">
          <h2 className="text-sm font-semibold text-amber mb-1">Spoiler Warning</h2>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.75)" }}>
            This page lists all known endings with their requirements. If you prefer to discover endings yourself, start with the{" "}
            <Link href="/guide" className="underline hover:text-amber">Beginner Guide</Link>{" "}
            which has spoiler-free summaries.
          </p>
        </InfoCard>

        {/* All Endings Overview */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>All Endings Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 650 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                  <th className="py-2.5 pr-3 text-[10px] font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>Outcome</th>
                  <th className="py-2.5 pr-3 text-[10px] font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>Requirement / Route</th>
                  <th className="py-2.5 pr-3 text-[10px] font-black uppercase tracking-widest text-text-tertiary hidden sm:table-cell" style={NUNITO}>Notes</th>
                  <th className="py-2.5 text-[10px] font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>Source</th>
                </tr>
              </thead>
              <tbody>
                {endings.map((row, i) => (
                  <tr key={row.type}
                    style={{ borderBottom: i < endings.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.03)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                    <td className="py-3 pr-3">
                      <div className="flex items-center gap-2.5">
                        <span className="h-2 w-2 rounded-full shrink-0" style={{ background: row.accent, boxShadow: `0 0 5px ${row.accent}44` }} />
                        <span className="text-sm font-bold text-text-primary" style={NUNITO}>{row.type}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-3 text-xs text-text-secondary" style={NUNITO}>{row.requirement}</td>
                    <td className="py-3 pr-3 text-xs text-text-tertiary hidden sm:table-cell" style={NUNITO}>{row.note || "—"}</td>
                    <td className="py-3"><SourceBadge source={row.confidence} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* Source Confidence */}
        <InfoCard variant="warning" className="mt-6">
          <h2 className="text-sm font-semibold text-amber mb-1">Source Confidence</h2>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
                The official itch page confirms there are <strong>multiple endings</strong> but does not specify an exact number.
                We list <strong>12+ known outcomes</strong> based on community reports, but the total number is not officially confirmed.
            Official endings are confirmed by the itch.io page or devlog. Community routes are player-reported and not independently verified. Unverified entries are mentioned by players but not reliably confirmed.
          </p>
        </InfoCard>

        {/* Ending FAQ */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-4" style={NUNITO}>Ending FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "How many endings are there?", a: "The official itch page confirms multiple endings but does not specify an exact number. We list 12+ known outcomes based on community reports, but the total is not officially confirmed. Some outcomes may be variations of the same ending path." },
              { q: "How do you get the true ending?", a: "True ending requirements are community-reported and not yet independently verified. Current theories involve Heart of the Sea and the Giant Squid encounter. See the True Ending Guide for tracking updates." },
              { q: "What does pay debt mean?", a: "This prompt appears connected to the Giant Squid encounter. Community players are tracking how to resolve it. See the Pay Debt Guide for current theories and verification status." },
              { q: "How do you make yourself visible?", a: "Use Flare Gun or Flashlight during Hope and Other People night events. Official v1.1.2 notes confirm rescue ending chances were slightly increased." },
              { q: "Is there a seagull ending?", a: "Yes, community reports describe a seagull bad ending triggered by keeping too many seagulls on the boat. See the Seagull Guide for prevention strategies." },
              { q: "Is there a Ghost Ship ending?", a: "Players mention a Ghost Ship / Flying Dutchman hidden ending, but the exact unlock conditions are not verified. This is tracked as a community report." },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="text-xs font-bold text-text-primary mb-1" style={NUNITO}>{item.q}</h3>
                <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{item.a}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Related links */}
        <div className="mt-8">
          <h2 className="mb-4 text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { href: "/endings/true-ending", label: "True Ending Guide", desc: "Heart of the Sea & community theories" },
              { href: "/endings/rescue", label: "Make Yourself Visible", desc: "Rescue route step-by-step" },
              { href: "/endings/pay-debt", label: "Pay Debt Route", desc: "Giant Squid & debt resolution" },
            ].map(({ href, label, desc }) => (
              <Link key={label} href={href} className="group flex items-center justify-between gap-2 rounded-xl border px-4 py-3 transition-all duration-200" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,14,28,1)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.30)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,31,56,1)"; }}>
                <div>
                  <div className="text-sm font-medium text-text-primary group-hover:text-amber transition-colors">{label}</div>
                  <div className="text-xs text-text-tertiary">{desc}</div>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-text-muted group-hover:text-amber transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
