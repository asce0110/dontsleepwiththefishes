"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Anchor, AlertTriangle, ChevronRight, Siren, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const counterTable = [
  { choice: "Use Anchor", outcome: "Survive the event; boat may take heavy damage; anchor may break", useWhen: "Normal survival route", confidence: "Community" as const },
  { choice: "Use completed Heart of the Sea", outcome: "Possible true ending / pay debt route", useWhen: "Secret ending route", confidence: "Community" as const },
  { choice: "Go back to sleep", outcome: "High death risk", useWhen: "Not recommended", confidence: "Community" as const },
  { choice: "Give fish / food", outcome: "Player theory only", useWhen: "Do not present as guide yet", confidence: "Unverified" as const },
  { choice: "Use Harpoon Gun", outcome: "Not enough evidence", useWhen: "Do not recommend yet", confidence: "Unverified" as const },
];

const faq = [
  { q: "What do you do with the Giant Squid?", a: "Community reports say use the Anchor for survival. The completed Heart of the Sea may open a true ending route, but this has not been independently verified." },
  { q: "What does \"pay your debt\" mean?", a: "This prompt appears connected to the Giant Squid encounter. Community players are still tracking how to resolve it — see the Pay Debt tracker page." },
  { q: "Does the Anchor work on the Giant Squid?", a: "Yes, according to community reports. One Reddit reply explicitly says to throw the Anchor at it. This has not been verified in-game by this guide." },
  { q: "Is the Giant Squid connected to the true ending?", a: "Community theories suggest the completed Heart of the Sea item and the Giant Squid encounter may be part of the true ending route. This is not officially confirmed." },
  { q: "Can you give the squid fish or food?", a: "This is a player theory from Reddit. There is no confirmed evidence that giving fish to the squid resolves the encounter or triggers any ending route. Do not rely on this." },
  { q: "What happens if you go back to sleep?", a: "Community reports indicate going back to sleep during the Giant Squid event has a high death risk. This is the least recommended option." },
];

export function GiantSquidPage() {
  return (
    <>
      <SEO
        title="Giant Squid Guide: Anchor, Pay Debt & True Ending"
        description="Learn what to do when the Giant Squid appears in Don't Sleep With The Fishes, including the Anchor counter, Pay Debt prompt, Heart of the Sea route, and true ending notes."
       
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">

        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Siren className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Night Event</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Giant Squid Guide</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            The safest community-reported counter for the Giant Squid is the <strong className="text-text-primary">Anchor</strong>. The event also appears to be connected to the "pay your debt" prompt and the completed Heart of the Sea route, but those ending details should be treated as community-reported until verified in-game.
          </p>
        </div>

        <InfoCard variant="warning" className="mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
            <div>
              <h3 className="text-sm font-semibold text-amber mb-1">Spoiler Warning</h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.75)" }}>This page discusses ending routes. If you prefer to discover the Giant Squid encounter yourself, start with the <Link href="/events" className="underline hover:text-amber">Events overview</Link> for a spoiler-free summary.</p>
            </div>
          </div>
        </InfoCard>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>Best Counter Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 600 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Choice</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>Expected Outcome</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>Use When</th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Src</th>
                  </tr>
                </thead>
                <tbody>
                  {counterTable.map((row, i) => (
                    <tr key={row.choice} style={{ borderBottom: i < counterTable.length - 1 ? "1px solid rgba(245,158,11,0.06)" : "none" }}>
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

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>What Not to Do</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li>Do not go back to sleep — high death risk per community reports</li>
              <li>Do not assume giving fish to the squid will resolve pay debt — this is unverified player theory</li>
              <li>Do not waste Harpoon Gun on the squid without more evidence</li>
              <li>Do not enter this event without Anchor unless you accept high risk</li>
            </ul>
          </InfoCard>

          <InfoCard variant="warning">
            <h2 className="text-sm font-semibold text-amber mb-2">Common Mistakes</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(245,158,11,0.85)" }}>
              <li>Using Anchor on a minor event, then having nothing for Squid or Whirlpool</li>
              <li>Assuming pay debt = give fish (this is speculation, not confirmed)</li>
              <li>Treating the true ending route as a guaranteed Known path when it is still community-tracked</li>
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
              { href: "/endings/pay-debt", label: "Pay Debt Route", desc: "Tracking the debt resolution path" },
              { href: "/items/heart-of-the-sea", label: "Heart of the Sea", desc: "Key item for true ending route" },
              { href: "/endings/true-ending", label: "True Ending Guide", desc: "Community theories & requirements" },
              { href: "/events/whirlpool", label: "Whirlpool Guide", desc: "Another event that needs Anchor" },
              { href: "/events", label: "All Events", desc: "Full night event counter table" },
            ].map(({ href, label, desc }) => (
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

        <div className="mt-6 text-xs" style={{ color: "rgba(122,146,170,0.75)", ...NUNITO }}>
          Unofficial fan guide &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">Official game on itch.io <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
