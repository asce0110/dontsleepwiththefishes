"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Waves, AlertTriangle, ChevronRight, Sparkles, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const counterTable = [
  { item: "Duct Tape", result: "Safest known counter", cost: "Consumed", confidence: "Community" as const },
  { item: "Bucket", result: "Works as a counter", cost: "May break", confidence: "Community" as const },
  { item: "Umbrella", result: "Can counter event", cost: "May damage boat", confidence: "Community" as const },
  { item: "Flashlight", result: "Dangerous reaction", cost: "Avoid", confidence: "Community" as const },
  { item: "Spyglass", result: "Dangerous reaction", cost: "Avoid", confidence: "Community" as const },
];

const faq = [
  { q: "What do you use for Eerie Melody?", a: "Duct Tape is the safest community-reported counter. Bucket and Umbrella are backup options." },
  { q: "Does Duct Tape stop the siren?", a: "According to community reports, yes — Duct Tape is considered the best counter for the Eerie Melody / siren event." },
  { q: "Can Bucket stop Eerie Melody?", a: "Yes, community reports say Bucket works, but it may break in the process." },
  { q: "Should I use Flashlight on Eerie Melody?", a: "No. Community reports say Flashlight and Spyglass trigger a dangerous siren reaction. Avoid both." },
  { q: "Is Eerie Melody the same as Leak?", a: "No. Eerie Melody is a siren/melody event. Leak is a separate water leak event — see the related guides section. Duct Tape and Bucket can counter both, but they are different events." },
];

export function EerieMelodyPage() {
  return (
    <>
      <SEO
        title="Eerie Melody Guide: Duct Tape, Bucket & Siren Counter"
        description="How to survive the Eerie Melody event in Don't Sleep With The Fishes. Learn why Duct Tape, Bucket, or Umbrella are safer than Flashlight or Spyglass."
       
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Waves className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Night Event</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Eerie Melody Guide</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            For Eerie Melody, community reports recommend using <strong className="text-text-primary">Duct Tape, Bucket, or Umbrella</strong>. Avoid using the Flashlight or Spyglass, because those choices may trigger a dangerous siren outcome. Do not confuse this with the Leak event — they are separate encounters.
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Quick Answer</h2>
            <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              For Eerie Melody, community reports recommend using <strong className="text-text-primary">Duct Tape, Bucket, or Umbrella</strong>. Avoid Flashlight or Spyglass, because they may trigger a dangerous siren outcome. This counter is community-reported and should be verified in your current game version.
            </p>
          </InfoCard>

          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>Item Counter Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 550 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Item</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>Result</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>Cost / Risk</th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Src</th>
                  </tr>
                </thead>
                <tbody>
                  {counterTable.map((row, i) => (
                    <tr key={row.item} style={{ borderBottom: i < counterTable.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.item}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.result}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.cost}</td>
                      <td className="py-3"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          <InfoCard variant="warning">
            <h2 className="text-base font-bold text-amber mb-1" style={NUNITO}>Why Eerie Melody Is Not the Leak Event</h2>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
                  Eerie Melody is a <strong>siren / melody event</strong>, not a boat leak. Duct Tape and Bucket happen to counter both, but the events have different triggers and failure outcomes. If you are looking for water leak repairs, that is a different encounter.
                </p>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>Items to Avoid</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li><strong>Flashlight:</strong> Community reports say it triggers a dangerous siren reaction.</li>
              <li><strong>Spyglass:</strong> Same — reported to cause a negative outcome.</li>
              <li>If you only have these items, going back to sleep may be the lesser risk — but this is unverified.</li>
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
              { href: "/items", label: "Duct Tape", desc: "Item details & all uses" },
              { href: "/items", label: "Bucket", desc: "Item details & all uses" },
              { href: "/events", label: "All Events", desc: "Full night event counter table" },
              { href: "/guide", label: "Beginner Guide", desc: "First playthrough survival tips" },
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

        <div className="mt-6 text-xs" style={{ color: "rgba(42,62,90,0.7)", ...NUNITO }}>
          Unofficial fan guide &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">Official game on itch.io <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
