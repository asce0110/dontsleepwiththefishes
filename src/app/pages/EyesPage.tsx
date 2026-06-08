"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Eye, ChevronRight, Sparkles, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const counterTable = [
  { choice: "Stay awake", outcome: "Shipmate survives; you wake with low energy", bestFor: "Protecting companion", confidence: "Community" as const },
  { choice: "Go to sleep", outcome: "Companion may die", bestFor: "Not recommended with shipmate", confidence: "Community" as const },
  { choice: "No shipmate present", outcome: "Needs more testing", bestFor: "Solo routes", confidence: "Unverified" as const },
];

const faq = [
  { q: "Should you stay awake during Eyes?", a: "Yes, according to community reports. Staying awake protects your shipmate but leaves you with low energy the next day." },
  { q: "What happens if you sleep in the Eyes event?", a: "Community reports say your companion may die if you go to sleep. This is the riskiest choice when you have a shipmate." },
  { q: "Can Eyes kill your shipmate?", a: "Yes, community reports indicate the Eyes event can result in shipmate death if you go to sleep." },
  { q: "What if I have no shipmate?", a: "The outcome for solo runs is not well-documented. Marked as Unverified — treat with caution." },
  { q: "How do you recover after low energy?", a: "After staying awake, you will have low energy the next day. Prioritize eating and resting. Avoid extra tasks until energy recovers." },
];

export function EyesPage() {
  return (
    <>
      <SEO
        title="Eyes Event Guide: Stay Awake or Sleep?"
        description="Learn whether to stay awake or go to sleep during the Eyes event in Don't Sleep With The Fishes, and how to protect your shipmate."
       
      />
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Eye className="h-3.5 w-3.5 text-amber" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber">Night Event</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Eyes Event Guide</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            During the Eyes event, the safest community-reported choice is to <strong className="text-text-primary">stay awake</strong>, especially if you have a shipmate. Going back to sleep may cause your companion to die, while staying awake protects them but leaves you with low energy.
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>Choice Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 550 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-3 text-[10px] font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>Choice</th>
                    <th className="py-2.5 pr-3 text-[10px] font-black uppercase tracking-widest text-text-tertiary hidden sm:table-cell" style={NUNITO}>Outcome</th>
                    <th className="py-2.5 pr-3 text-[10px] font-black uppercase tracking-widest text-text-tertiary hidden md:table-cell" style={NUNITO}>Best For</th>
                    <th className="py-2.5 text-[10px] font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>Src</th>
                  </tr>
                </thead>
                <tbody>
                  {counterTable.map((row, i) => (
                    <tr key={row.choice} style={{ borderBottom: i < counterTable.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.choice}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.outcome}</td>
                      <td className="py-3 pr-3 text-xs text-text-tertiary hidden md:table-cell" style={NUNITO}>{row.bestFor}</td>
                      <td className="py-3"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          <InfoCard variant="warning">
            <h2 className="text-sm font-semibold text-amber mb-2">Shipmate Risk</h2>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
              Community sources (Fandom) report that the Eyes event typically targets the <strong>companion</strong>. If you have a shipmate, staying awake is strongly recommended. The event's outcome on solo runs has not been independently verified — mark any solo-strategy advice as Unverified until tested.
            </p>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>Common Mistakes</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li>Going to sleep with a shipmate — highest risk of companion death</li>
              <li>Assuming staying awake has no cost — you will have low energy next day</li>
              <li>Not planning for the low-energy day after Eyes</li>
              <li>Treating solo-run outcomes as confirmed (they are Unverified)</li>
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
          <div className="mb-4 text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Related Guides</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { href: "/guide", label: "Beginner Guide", desc: "Shipmate choices & survival" },
              { href: "/characters/captain-whiskers", label: "Captain Whiskers", desc: "Cat companion details" },
              { href: "/events", label: "All Events", desc: "Full night event counter table" },
              { href: "/walkthrough", label: "Walkthrough", desc: "Day-by-day survival route" },
              { href: "/endings", label: "Endings Guide", desc: "All outcomes & requirements" },
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
