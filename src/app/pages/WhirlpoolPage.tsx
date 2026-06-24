"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Anchor, Compass, ChevronRight, Sparkles, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const counterTable = [
  { choice: "Use Anchor", outcome: "Stabilizes the boat / prevents heavy damage", risk: "Anchor may be unavailable later", confidence: "Community" as const },
  { choice: "No Anchor", outcome: "Boat may take heavy damage", risk: "High", confidence: "Community" as const },
  { choice: "Repair next day", outcome: "Recover from damage if resources allow", risk: "Costs energy", confidence: "Community" as const },
];

const faq = [
  { q: "What do you use for Whirlpool?", a: "Anchor is the safest known counter. Without Anchor, the boat takes heavy damage and you will need to repair the next day." },
  { q: "Is Anchor worth bringing?", a: "Yes. Anchor is tied to Giant Squid and Whirlpool — two of the most dangerous events. Treat Anchor as an S-tier survival item." },
  { q: "What happens if I do not have Anchor?", a: "The boat may take heavy damage. You will need to spend energy and possibly Duct Tape on repairs the next day. If the boat is already damaged, this can be fatal." },
  { q: "Can Whirlpool destroy the boat?", a: "Yes, community reports indicate that failing the Whirlpool event (no Anchor + no repair) can lead to the boat being destroyed." },
  { q: "Should I save Anchor for Giant Squid?", a: "Both events can be run-ending without Anchor. This is why Anchor is S-tier — ideally you want one available for both. If you can only cover one, prioritize based on which event you are more likely to encounter on your current route." },
];

export function WhirlpoolPage() {
  return (
    <>
      <SEO
        title="Whirlpool Guide: How to Use the Anchor"
        description="How to survive the Whirlpool event in Don't Sleep With The Fishes. Learn when to use the Anchor, what happens without it, and how to recover from boat damage."
       
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Compass className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Night Event</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Whirlpool Guide</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            The safest known counter for Whirlpool is the <strong className="text-text-primary">Anchor</strong>. Without an Anchor, the boat may take heavy damage, so this event is one reason Anchor should be treated as a high-priority survival item.
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>Counter Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 550 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>Choice</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-tertiary hidden sm:table-cell" style={NUNITO}>Outcome</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-tertiary hidden md:table-cell" style={NUNITO}>Risk</th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>Src</th>
                  </tr>
                </thead>
                <tbody>
                  {counterTable.map((row, i) => (
                    <tr key={row.choice} style={{ borderBottom: i < counterTable.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.choice}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.outcome}</td>
                      <td className="py-3 pr-3 text-xs text-text-tertiary hidden md:table-cell" style={NUNITO}>{row.risk}</td>
                      <td className="py-3"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          <InfoCard variant="warning">
            <h2 className="text-sm font-semibold text-amber mb-2">Anchor Priority</h2>
            <p className="text-xs leading-relaxed mb-2" style={{ color: "rgba(245,158,11,0.85)" }}>
              Anchor is tied to <strong>Giant Squid and Whirlpool</strong> — two of the most dangerous night events. Both can destroy your boat without Anchor. This makes Anchor an S-tier item that should be brought on every run if possible.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.65)" }}>
              Community sources (Fandom) also associate Anchor with Restless Waves, but this has not been independently verified by this guide.
            </p>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>Common Mistakes</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li>Not bringing Anchor because you assumed other items could cover Whirlpool</li>
              <li>Using Anchor on a minor event and having nothing for Whirlpool or Giant Squid</li>
              <li>Not repairing boat damage after surviving Whirlpool without Anchor</li>
              <li>Going to sleep during Whirlpool — community reports say this is extremely dangerous</li>
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
              { href: "/events/giant-squid", label: "Giant Squid Guide", desc: "Another event that needs Anchor" },
              { href: "/items", label: "Anchor", desc: "Item details & all uses" },
              { href: "/items", label: "Duct Tape", desc: "For post-event boat repair" },
              { href: "/events", label: "All Events", desc: "Full night event counter table" },
              { href: "/walkthrough", label: "Walkthrough", desc: "Day-by-day survival route" },
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

        <div className="mt-6 text-xs" style={{ color: "rgba(42,62,90,0.7)", ...NUNITO }}>
          Unofficial fan guide &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">Official game on itch.io <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
