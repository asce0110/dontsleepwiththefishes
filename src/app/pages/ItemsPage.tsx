"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import type { Confidence } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Package, Sparkles, ChevronRight, AlertTriangle } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface ItemRow {
  item: string;
  source: string;
  bestUse: string;
  eventCounter: string;
  endingUse: string;
  priority: "S" | "A" | "B" | "C";
  confidence: Confidence;
  v112Change?: string;
}

const items: ItemRow[] = [
  { item: "Anchor", source: "Ship / Chest", bestUse: "Boat safety & monster defense", eventCounter: "Giant Squid, Whirlpool", endingUse: "True ending alternative", priority: "S", confidence: "Community", v112Change: "No confirmed change" },
  { item: "Flare Gun", source: "Ship / Chest", bestUse: "Signaling for rescue", eventCounter: "Hope, Other People", endingUse: "Rescue route", priority: "S", confidence: "Official", v112Change: "Rescue ending chance slightly increased" },
  { item: "Flashlight", source: "Ship", bestUse: "Signaling & shadow defense", eventCounter: "Hope, Shadow Figure", endingUse: "Rescue route alternative", priority: "S", confidence: "Community" },
  { item: "Duct Tape", source: "Ship / Chest", bestUse: "Repair & event defense", eventCounter: "Leak, Eerie Melody", endingUse: "Survival", priority: "A", confidence: "Official", v112Change: "Repair use now optional; chest spawn rate decreased" },
  { item: "Bucket", source: "Ship", bestUse: "Water collection & event counter", eventCounter: "Leak, Eerie Melody", endingUse: "Heart route (community report)", priority: "A", confidence: "Community" },
  { item: "Bait", source: "Ship / Events", bestUse: "Fishing — primary food source", eventCounter: "Day survival", endingUse: "Survival", priority: "A", confidence: "Official", v112Change: "Only consumed when fish is caught (was: always consumed)" },
  { item: "Fishing Rod", source: "Ship", bestUse: "Food gathering", eventCounter: "Daily food", endingUse: "Survival", priority: "A", confidence: "Official" },
  { item: "Swim Ring", source: "Treasure Chest", bestUse: "Water safety", eventCounter: "Unknown", endingUse: "Unknown", priority: "B", confidence: "Official", v112Change: "Added to Treasure Chest loot pool" },
  { item: "Scuba Gear", source: "Ship / Chest", bestUse: "Risk route exploration", eventCounter: "Red, Arms and Fingers", endingUse: "Resource route", priority: "B", confidence: "Community" },
  { item: "Harpoon Gun", source: "Ship", bestUse: "Monster defense", eventCounter: "Anglerfish, Sharks", endingUse: "Survival", priority: "B", confidence: "Community" },
  { item: "Spyglass", source: "Ship", bestUse: "Observation & scouting", eventCounter: "Fog, Moon", endingUse: "Limited", priority: "C", confidence: "Community" },
  { item: "Heart Piece / Heart Note", source: "Unknown", bestUse: "Unknown", eventCounter: "Unknown", endingUse: "Possibly hidden route", priority: "C", confidence: "Unverified" },
  { item: "Message in a Bottle", source: "Unknown", bestUse: "Unknown", eventCounter: "Unknown", endingUse: "Unknown", priority: "C", confidence: "Unverified" },
  { item: "Captain Whiskers", source: "Ship (crew)", bestUse: "Fishing boost", eventCounter: "N/A (passive)", endingUse: "Unique lore interactions", priority: "A", confidence: "Official", v112Change: "Fishing catch chance +1%" },
];

const priorityColors: Record<string, { bg: string; border: string; color: string }> = {
  S: { bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.30)", color: "#f59e0b" },
  A: { bg: "rgba(96,165,250,0.10)", border: "rgba(96,165,250,0.25)", color: "#60a5fa" },
  B: { bg: "rgba(122,146,170,0.10)", border: "rgba(122,146,170,0.25)", color: "#7a92aa" },
  C: { bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.20)", color: "rgba(239,68,68,0.70)" },
};

function PriorityBadge({ p }: { p: string }) {
  const c = priorityColors[p] || priorityColors.C;
  return (
    <span className="inline-flex items-center justify-center rounded-md w-7 h-7 text-xs font-black" style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}>
      {p}
    </span>
  );
}

export function ItemsPage() {
  return (
    <>
      <SEO
        title="Items Guide: Uses, Sources & Best Picks"
        description="Don't Sleep With The Fishes items guide: every item, source, best use, event counter, ending priority, and v1.1.2 changes. S-tier to C-tier rankings with source confidence."
       
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Package className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Items Database</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-2" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Items Guide</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">Complete item catalog with sources, event counters, ending uses, and priority rankings. Source confidence labels indicate whether info comes from official devlogs, community reports, or is still unverified.</p>
        </div>

        {/* Quick Answer */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Quick Answer</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            The best items in Don't Sleep With The Fishes are the ones that solve multiple problems. <strong className="text-text-primary">Anchor, Duct Tape, Bait, Bucket, Flashlight, and Flare Gun</strong> are usually high-value because they help with night events, food, rescue chances, or long survival. Some item uses are community-reported and marked with source confidence labels until verified in-game.
          </p>
        </InfoCard>

        {/* Legend */}
        <InfoCard className="mb-6">
          <div className="flex flex-wrap items-center gap-3 text-xs" style={NUNITO}>
            <span className="text-text-secondary font-bold">Priority:</span>
            {[
              { p: "S", desc: "Essential — bring every run" },
              { p: "A", desc: "Strong — high value" },
              { p: "B", desc: "Situational — depends on route" },
              { p: "C", desc: "Limited / Unknown" },
            ].map(({ p, desc }) => (
              <span key={p} className="inline-flex items-center gap-1.5">
                <PriorityBadge p={p} />
                <span className="text-text-secondary">{desc}</span>
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-3 text-xs" style={NUNITO}>
            <span className="text-text-secondary font-bold">Source:</span>
            <SourceBadge source="Official" />
            <SourceBadge source="Community" />
            <SourceBadge source="Unverified" />
          </div>
        </InfoCard>

        {/* Item Priority Table */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>Item Priority Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 700 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Item</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>Source</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Best Use</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>Event Counter</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden lg:table-cell" style={NUNITO}>Ending Use</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Pri</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Source</th>
                </tr>
              </thead>
              <tbody>
                {items.map((row, i) => (
                  <tr key={row.item}
                    style={{ borderBottom: i < items.length - 1 ? "1px solid rgba(245,158,11,0.06)" : "none" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.03)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                    <td className="py-3 pr-3">
                      <div>
                        <span className="text-sm font-bold text-text-primary" style={NUNITO}>{row.item}</span>
                        {row.v112Change && (
                          <span className="block text-xs mt-0.5" style={{ color: "rgba(52,211,153,0.7)" }}>{row.v112Change}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.source}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary" style={NUNITO}>{row.bestUse}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.eventCounter}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden lg:table-cell" style={NUNITO}>{row.endingUse}</td>
                    <td className="py-3 pr-3"><PriorityBadge p={row.priority} /></td>
                    <td className="py-3"><SourceBadge source={row.confidence} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* Category sections */}
        <div className="mt-6 mb-6">
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>Item Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              { href: "/items/best-items", label: "Best Items for Beginners", desc: "Top picks for new players" },
              { href: "/events", label: "Night Event Counter Items", desc: "Anchor, Duct Tape, Flare Gun & more" },
              { href: "/endings/rescue", label: "Rescue Route Items", desc: "Flare Gun, Flashlight" },
              { href: "/items/heart-of-the-sea", label: "Ending Route Items", desc: "Heart of the Sea & secret items" },
              { href: "/items", label: "Food, Fishing & Repair", desc: "Bait, Fishing Rod, Duct Tape" },
              { href: "/items", label: "Chest & Limited Items", desc: "Swim Ring, rare chest drops" },
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

        {/* FAQ */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-4" style={NUNITO}>Item FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "What are the best items in Don't Sleep With The Fishes?", a: "Anchor, Flare Gun, Duct Tape, Bait, and Flashlight are consistently high-value because they cover boat safety, rescue, repairs, food, and night events. See the priority table above for full rankings." },
              { q: "Which items counter night events?", a: "Anchor counters Whirlpool (and is community-reported for Giant Squid). Duct Tape and Bucket counter Eerie Melody and Leak. Flare Gun and Flashlight help with Hope and Other People rescue events." },
              { q: "Should I save the Anchor?", a: "Yes. Anchor is an S-tier survival item because it counters two of the most dangerous events — Whirlpool and Giant Squid. Without Anchor, both can destroy your boat." },
              { q: "Is Duct Tape worth keeping?", a: "Yes. In v1.1.2, repair use of Duct Tape is optional, so you can save it for critical event counters like Eerie Melody. Its chest drop rate was also decreased, making it more scarce." },
              { q: "What changed for Bait in v1.1.2?", a: "Bait is now only consumed when you actually catch a fish. Before v1.1.2, it was consumed on every fishing attempt. This makes Bait a much safer investment for food strategy." },
              { q: "Which items help with rescue?", a: "Flare Gun and Flashlight are the primary rescue route items. Official v1.1.2 notes confirm rescue ending chances were slightly increased. Use Flashlight first to save Flare Gun for stronger opportunities." },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="text-xs font-bold text-text-primary mb-1" style={NUNITO}>{item.q}</h3>
                <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{item.a}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Source Confidence */}
        <InfoCard variant="warning" className="mb-6">
          <h2 className="text-sm font-semibold text-amber mb-1">Source Confidence</h2>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.75)" }}>
            <strong>Official</strong> data comes from the game's itch.io page and v1.1.2 devlog. <strong>Community</strong> entries are based on Reddit, Fandom, and player reports — not independently verified. <strong>Unverified</strong> items are mentioned by players but lack confirmed mechanics. This guide will be updated as more information is verified in-game.
          </p>
        </InfoCard>

        {/* Related links */}
        <div className="mt-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { href: "/events", label: "Events Guide", desc: "Night event counters & best items" },
              { href: "/endings", label: "Endings Guide", desc: "All outcomes & item requirements" },
              { href: "/items/best-items", label: "Best Items Tier List", desc: "S-tier to C-tier rankings" },
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
