"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { AlertTriangle, ChevronRight, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const counterTable = [
  { item: "Flashlight", when: "Early Hope event or when saving Flare Gun", result: "May attract attention, not guaranteed", confidence: "Community" as const },
  { item: "Flare Gun", when: "Stronger rescue attempt, especially if saving for later", result: "Chance of rescue", confidence: "Community" as const },
  { item: "No item / ignore", when: "Keep resources but lose rescue chance", result: "Not recommended for rescue route", confidence: "Community" as const },
  { item: "v1.1.2 rescue chance", when: "Official patch note", result: "Rescue endings are slightly more likely", confidence: "Official" as const },
];

const faq = [
  { q: "How do you make yourself visible?", a: "During the Hope event, use Flashlight or Flare Gun to signal passing aircraft. The event text will indicate when a plane or aircraft is overhead." },
  { q: "Should I use the Flare Gun or Flashlight?", a: "Flashlight can be used on the first Hope event to save the Flare Gun for a later, potentially more important rescue chance. Flare Gun is the stronger signal but is single-use." },
  { q: "Is rescue guaranteed?", a: "No. Rescue is chance-based. The game does not guarantee rescue even if you use the correct item. Official v1.1.2 notes say rescue chances were slightly increased, but not made guaranteed." },
  { q: "Can you get rescued more than once?", a: "This has not been confirmed. The rescue ending is an ending — once rescued, the run ends." },
  { q: "Did v1.1.2 change rescue chances?", a: "Yes. Official v1.1.2 devlog confirms that Getting Rescued ending chances were slightly increased. The exact percentage change is not published." },
];

export function RescuePage() {
  return (
    <>
      <SEO
        title="Make Yourself Visible Guide: Hope, Flare Gun & Rescue"
        description="How to get rescued in Don't Sleep With The Fishes during the Hope event. Learn when to use the Flare Gun, Flashlight, and how rescue chance works in v1.1.2."
       
      />
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.18)" }}>
              <ShieldCheck className="h-3.5 w-3.5" style={{ color: "rgba(52,211,153,0.9)" }} />
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(52,211,153,0.9)" }}>Rescue Route</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Official" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Make Yourself Visible Rescue Guide</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            During the <strong className="text-text-primary">Hope</strong> event, an aircraft may pass over the sea. Community reports say you can use the <strong className="text-text-primary">Flashlight or Flare Gun</strong> to make yourself visible, but rescue is <strong>not guaranteed</strong>. Official v1.1.2 notes confirm that Getting Rescued ending chances were slightly increased.
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>Item Choice Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 600 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-3 text-[10px] font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>Item</th>
                    <th className="py-2.5 pr-3 text-[10px] font-black uppercase tracking-widest text-text-tertiary hidden sm:table-cell" style={NUNITO}>When to Use</th>
                    <th className="py-2.5 pr-3 text-[10px] font-black uppercase tracking-widest text-text-tertiary hidden md:table-cell" style={NUNITO}>Expected Result</th>
                    <th className="py-2.5 text-[10px] font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>Src</th>
                  </tr>
                </thead>
                <tbody>
                  {counterTable.map((row, i) => (
                    <tr key={row.item} style={{ borderBottom: i < counterTable.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.item}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.when}</td>
                      <td className="py-3 pr-3 text-xs text-text-tertiary hidden md:table-cell" style={NUNITO}>{row.result}</td>
                      <td className="py-3"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          <InfoCard variant="amber">
            <h2 className="text-sm font-semibold text-amber mb-2">Key Strategy: First Hope vs Later Hope</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(245,158,11,0.85)" }}>
              <li><strong>First Hope event (early game):</strong> Consider using Flashlight to save Flare Gun for later.</li>
              <li><strong>Later Hope event (mid-late game):</strong> If you have Flare Gun, this is the time to use it.</li>
              <li><strong>Multiple Hope events:</strong> Community reports suggest Hope can occur multiple times. Save at least one signaling item.</li>
            </ul>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>Common Mistakes</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li>Using Flare Gun on non-Hope events and having nothing left for rescue</li>
              <li>Assuming Flare Gun always = rescue (it does not — it is chance-based)</li>
              <li>Ignoring Hope entirely because you assume rescue is impossible</li>
              <li>Not bringing any signaling item because you planned a different ending route</li>
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
              { href: "/items", label: "Flare Gun", desc: "Item details & all uses" },
              { href: "/items", label: "Flashlight", desc: "Item details & all uses" },
              { href: "/walkthrough", label: "Walkthrough", desc: "Day-by-day survival route" },
              { href: "/events", label: "All Events", desc: "Full night event counter table" },
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
