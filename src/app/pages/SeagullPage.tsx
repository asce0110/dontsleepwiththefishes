"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Skull, ChevronRight, Sparkles, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const counterTable = [
  { choice: "Shoo the seagull", outcome: "Removes or prevents it staying", useWhen: "Avoiding bad ending", confidence: "Community" as const },
  { choice: "Feed the seagull", outcome: "It may stay with you and eat food", useWhen: "Only if testing companion route", confidence: "Community" as const },
  { choice: "Let too many stay", outcome: "Possible bad ending", useWhen: "Avoid", confidence: "Community" as const },
];

const faq = [
  { q: "Should you feed the seagull?", a: "Only if you accept the food drain and want to test the companion route. For survival-focused runs, shoo it away." },
  { q: "How do you avoid the seagull ending?", a: "The safest known strategy is to shoo seagulls away instead of letting too many stay on the boat. The bad ending appears to trigger when too many seagulls accumulate." },
  { q: "Does the seagull help you?", a: "There is no confirmed benefit to keeping a seagull. It drains food and may contribute to a bad ending. Community theories about seagull companions are unverified." },
  { q: "How many seagulls are too many?", a: "This threshold is not confirmed. Some players report issues after 2-3 seagulls, but this varies. The safest approach is to shoo all of them if you are not specifically testing the seagull route." },
  { q: "Can you remove a seagull after feeding it?", a: "This has not been confirmed. Community reports suggest once a seagull stays, it may be difficult or impossible to remove." },
];

export function SeagullPage() {
  return (
    <>
      <SEO
        title="Seagull Guide: How to Avoid the Bad Ending"
        description="Learn how the Seagull event works in Don't Sleep With The Fishes, whether to feed or shoo seagulls, and how to avoid the seagull bad ending."
       
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Skull className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Night Event</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Seagull Guide</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            If you want to avoid the Seagull bad ending, the safest known strategy is to <strong className="text-text-primary">shoo seagulls away</strong> instead of letting too many stay on the boat. Feeding a seagull can make it stay with you, but it also drains food.
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>Feed vs Shoo Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 550 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Choice</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>Outcome</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>Use When</th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Src</th>
                  </tr>
                </thead>
                <tbody>
                  {counterTable.map((row, i) => (
                    <tr key={row.choice} style={{ borderBottom: i < counterTable.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.choice}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.outcome}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.useWhen}</td>
                      <td className="py-3"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          <InfoCard variant="warning">
            <h2 className="text-sm font-semibold text-amber mb-2">How the Bad Ending Happens</h2>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
              The Seagull becomes dangerous if you keep feeding or letting too many seagulls stay. Community reports suggest the bad ending triggers when seagulls accumulate beyond a threshold, but the exact number is not confirmed. This is not an instant-fail event — it builds up over multiple encounters.
            </p>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>Common Mistakes</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li>Feeding every seagull because it seems cute — this can lead to the bad ending</li>
              <li>Assuming seagulls provide a benefit — no confirmed benefit exists</li>
              <li>Ignoring the food drain from feeding seagulls</li>
              <li>Not tracking how many seagulls are on the boat</li>
            </ul>
          </InfoCard>

          <InfoCard>
            <h2 className="text-sm font-bold text-text-primary mb-3" style={NUNITO}>FAQ</h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="text-xs font-bold text-text-primary mb-1" style={NUNITO}>{item.q}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{item.a}</p>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>

        <div className="mt-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Related Guides</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { href: "/endings", label: "Endings Guide", desc: "All outcomes including bad endings" },
              { href: "/events", label: "All Events", desc: "Full night event counter table" },
              { href: "/guide", label: "Beginner Guide", desc: "First playthrough survival tips" },
              { href: "/items", label: "Items Guide", desc: "Food items & resource management" },
              { href: "/walkthrough", label: "Walkthrough", desc: "Day-by-day survival route" },
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
        </div>

        <div className="mt-6 text-xs" style={{ color: "rgba(122,146,170,0.75)", ...NUNITO }}>
          Unofficial fan guide &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">Official game on itch.io <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
