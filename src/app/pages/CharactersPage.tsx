"use client";

import { useState, useEffect } from "react";
import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import Link from "next/link";
import { Users, Star, Fish, Shield, Wrench, Heart, Sparkles, ChevronRight, ExternalLink, Anchor, Siren } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;
const PIRATA: React.CSSProperties = { fontFamily: "'Fredoka', sans-serif", fontWeight: 600 };

const characters = [
  {
    name: "Laurel",
    icon: <Heart className="h-5 w-5" />,
    role: "Morale & Support",
    accent: "#f59e0b",
    ability: "Improves mood recovery, helps during Hope events",
    supportAction: "Food restores more hunger during the day",
    bestDay: "Recovery day",
    pros: ["Boosts morale recovery", "Strong during Hope rescue events", "Good for rescue-focused runs", "Helps maintain sanity in long runs"],
    cons: ["No direct combat/defense help", "Less useful on repair-heavy days", "Hunger management still requires fishing"],
    bestFor: "Rescue Ending, True Ending routes",
    worstFor: "Combat-heavy routes, Giant Squid encounters",
  },
  {
    name: "Frederik",
    icon: <Wrench className="h-5 w-5" />,
    role: "Repair & Crafting",
    accent: "#3b82f6",
    ability: "Better repair efficiency, useful for Leak events",
    supportAction: "Helps bait guarantee a catch during the day",
    bestDay: "Fishing day",
    pros: ["Better repair efficiency saves energy", "Strong against Leak and Eerie Melody events", "Support action guarantees fish with bait", "Good all-rounder for most routes"],
    cons: ["No morale or combat bonuses", "Repair benefit only matters on damaged days", "Less impact if you already have Duct Tape"],
    bestFor: "Pay Debt routes, general survival",
    worstFor: "Routes avoiding repair (Duct Tape stockpile)",
  },
  {
    name: "Row",
    icon: <Shield className="h-5 w-5" />,
    role: "Combat & Defense",
    accent: "#ef4444",
    ability: "Helps counter monster events like Eyes and Anglerfish",
    supportAction: "Repairs cost less energy during the day",
    bestDay: "Repair day",
    pros: ["Defends against Eyes, Anglerfish, and monster events", "Repair support saves energy on fix days", "Best for surviving high-threat nights", "Protects against shipmate-death events"],
    cons: ["No fishing or food bonuses", "Less useful on peaceful nights", "Morale support is minimal"],
    bestFor: "Monster-heavy routes, long survival runs",
    worstFor: "Peaceful rescue routes with few threats",
  },
  {
    name: "Captain Whiskers",
    icon: <Fish className="h-5 w-5" />,
    role: "Fishing & Luck",
    accent: "#22c55e",
    ability: "Fishing chance +1% in v1.1.2, unique lore interactions",
    supportAction: "Passive +1% fishing catch chance (always active)",
    bestDay: "Any fishing day",
    pros: ["+1% fishing catch chance (v1.1.2 buff)", "Passive bonus — always active", "Unique lore interactions and dialogue", "Minor but adds up in long survival runs"],
    cons: ["Smallest mechanical impact of all shipmates", "No active Support action to trigger", "No defense or repair help", "1% is negligible for short runs"],
    bestFor: "Long survival records, completionist runs",
    worstFor: "Speedruns, rescue-focused short runs",
  },
];

const comparisonColumns = [
  { key: "ability" as const, label: "Ability" },
  { key: "supportAction" as const, label: "Support Action (v1.1.2)" },
  { key: "bestDay" as const, label: "Best Day" },
  { key: "bestFor" as const, label: "Best For" },
];

// Simple localStorage-based poll
function CommunityPoll() {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [voted, setVoted] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("dswtf-character-poll");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setVotes(data.votes || {});
        setVoted(data.voted || null);
      } catch {}
    }
  }, []);

  const castVote = (name: string) => {
    if (voted) return;
    const newVotes = { ...votes, [name]: (votes[name] || 0) + 1 };
    setVotes(newVotes);
    setVoted(name);
    localStorage.setItem("dswtf-character-poll", JSON.stringify({ votes: newVotes, voted: name }));
  };

  const total = Object.values(votes).reduce((a, b) => a + b, 0) || 1;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
        {characters.map((ch) => {
          const pct = Math.round(((votes[ch.name] || 0) / total) * 100);
          return (
            <button
              key={ch.name}
              onClick={() => castVote(ch.name)}
              disabled={!!voted}
              className="group relative overflow-hidden rounded-xl border px-4 py-3 text-left transition-all duration-200"
              style={{
                borderColor: voted === ch.name ? `${ch.accent}66` : voted ? "rgba(245,158,11,0.07)" : "rgba(245,158,11,0.09)",
                background: voted === ch.name ? `${ch.accent}11` : "rgba(8,14,28,1)",
                cursor: voted ? "default" : "pointer",
                opacity: voted && voted !== ch.name ? 0.55 : 1,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span style={{ color: ch.accent }}>{ch.icon}</span>
                  <span className="text-sm font-bold text-text-primary" style={NUNITO}>{ch.name}</span>
                </div>
                <span className="text-xs font-bold" style={{ color: ch.accent, ...NUNITO }}>{pct}%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(245,158,11,0.09)" }}>
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: ch.accent, boxShadow: `0 0 6px ${ch.accent}44` }} />
              </div>
              {!voted && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" style={{ background: `${ch.accent}11` }}>
                  <span className="text-xs font-black uppercase tracking-wider" style={{ color: ch.accent, ...NUNITO }}>Vote</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
      {voted && (
        <p className="text-center text-xs mb-2" style={{ color: "rgba(122,146,170,0.75)", ...NUNITO }}>
          You voted for <strong style={{ color: "rgba(245,158,11,0.8)" }}>{voted}</strong>. Total votes: {total}.
        </p>
      )}
      <p className="text-center text-xs" style={{ color: "rgba(122,146,170,0.60)", ...NUNITO }}>
        Votes stored in your browser only. Not a scientific poll.
      </p>
    </div>
  );
}

export function CharactersPage() {
  return (
    <>
      <SEO
        title="Characters & Shipmates — Who to Save"
        description="Compare all 4 shipmates in Don't Sleep With The Fishes. Laurel, Frederik, Row, and Captain Whiskers — abilities, Support actions, best routes, and community poll."
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Users className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Characters</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ ...PIRATA, fontSize: "2rem", letterSpacing: "0.02em" }}>
            Don't Sleep With The Fishes{" "}
            <span style={{ background: "linear-gradient(135deg, #f59e0b 0%, #fde68a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Characters & Shipmates</span>
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            You can bring <strong className="text-text-primary">one crew member</strong> onto your lifeboat. Each shipmate has unique abilities, v1.1.2 Support actions, and different strengths for specific endings. Choose wisely — the wrong shipmate can cost you a run.
          </p>
        </div>

        {/* Quick answer */}
        <InfoCard className="mb-6">
          <div className="flex items-start gap-3">
            <Star className="h-5 w-5 shrink-0 mt-0.5 text-amber" />
            <div>
              <h2 className="text-base font-bold text-text-primary mb-1" style={NUNITO}>Quick Pick</h2>
              <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
                <strong className="text-text-primary">Frederik</strong> is the best all-rounder for most players — repair efficiency and guaranteed fish catches cover the two most common failure points.{" "}
                <strong className="text-text-primary">Row</strong> if you're scared of monster events.{" "}
                <strong className="text-text-primary">Laurel</strong> if you're going for Rescue.{" "}
                <strong className="text-text-primary">Captain Whiskers</strong> for completion and long survival flex.
              </p>
            </div>
          </div>
        </InfoCard>

        {/* Character detail cards */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-amber" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Meet the Shipmates</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {characters.map((ch) => (
              <InfoCard key={ch.name}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: `${ch.accent}18`, border: `1px solid ${ch.accent}33` }}>
                    <span style={{ color: ch.accent }}>{ch.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary" style={NUNITO}>{ch.name}</h3>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: `${ch.accent}99`, ...NUNITO }}>{ch.role}</span>
                  </div>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mb-3" style={NUNITO}>{ch.ability}</p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-teal/70 mb-1.5">Pros</div>
                    <ul className="space-y-1">
                      {ch.pros.map((p) => (
                        <li key={p} className="flex items-start gap-1.5 text-xs text-text-secondary" style={NUNITO}>
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full" style={{ background: "#22c55e" }} />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-red/70 mb-1.5">Cons</div>
                    <ul className="space-y-1">
                      {ch.cons.map((c) => (
                        <li key={c} className="flex items-start gap-1.5 text-xs text-text-secondary" style={NUNITO}>
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full" style={{ background: "#ef4444" }} />{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full px-2 py-0.5 text-xs font-bold" style={{ background: `${ch.accent}18`, color: ch.accent, border: `1px solid ${ch.accent}33`, ...NUNITO }}>Best for: {ch.bestFor}</span>
                  <span className="rounded-full px-2 py-0.5 text-xs font-bold" style={{ background: "rgba(239,68,68,0.08)", color: "rgba(239,68,68,0.7)", border: "1px solid rgba(239,68,68,0.18)", ...NUNITO }}>Skip if: {ch.worstFor}</span>
                </div>
              </InfoCard>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-amber" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Quick Comparison</h2>
          </div>
          <InfoCard>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 500 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Shipmate</th>
                    {comparisonColumns.map((col) => (
                      <th key={col.key} className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>{col.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {characters.map((ch, i) => (
                    <tr key={ch.name} style={{ borderBottom: i < characters.length - 1 ? "1px solid rgba(245,158,11,0.06)" : "none" }}>
                      <td className="py-3 pr-3">
                        <div className="flex items-center gap-2">
                          <span style={{ color: ch.accent }}>{ch.icon}</span>
                          <span className="text-xs font-bold text-text-primary" style={NUNITO}>{ch.name}</span>
                        </div>
                      </td>
                      <td className="py-3 pr-3 text-xs text-text-secondary" style={NUNITO}>{ch.ability}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary" style={NUNITO}>{ch.supportAction}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary" style={NUNITO}>{ch.bestDay}</td>
                      <td className="py-3 text-xs" style={{ color: ch.accent, ...NUNITO }}>{ch.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>
        </div>

        {/* Community Poll */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-amber" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Community Poll: Who Do You Bring?</h2>
          </div>
          <InfoCard>
            <CommunityPoll />
          </InfoCard>
        </div>

        {/* Related */}
        <div className="mt-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Related Guides</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { href: "/guide", label: "Beginner Guide", desc: "Shipmate choice & evacuation", icon: <Star className="h-3.5 w-3.5" /> },
              { href: "/walkthrough", label: "Walkthrough", desc: "Day-by-day survival route", icon: <Anchor className="h-3.5 w-3.5" /> },
              { href: "/endings", label: "Endings Guide", desc: "Which shipmate for which ending", icon: <Siren className="h-3.5 w-3.5" /> },
            ].map(({ href, label, desc, icon }) => (
              <Link key={label} href={href} className="group flex items-center justify-between gap-2 rounded-xl border px-4 py-3 transition-all duration-200" style={{ borderColor: "rgba(245,158,11,0.09)", background: "rgba(8,14,28,1)" }}
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
