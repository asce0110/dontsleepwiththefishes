"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import type { Confidence } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Lightbulb, Sparkles, ChevronRight, Anchor, ShieldCheck, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface QuickTip {
  tip: string;
  why: string;
  confidence: Confidence;
}

const quickTips: QuickTip[] = [
  { tip: "Bring at least one night-event counter item", why: "Night events may interrupt sleep; without items you can only risk sleeping through", confidence: "Official" },
  { tip: "Do not waste the Flare Gun early", why: "Flare Gun / Flashlight are needed for rescue-related events like Hope and Other People", confidence: "Community" },
  { tip: "Keep Anchor if possible", why: "Anchor counters Whirlpool; community also uses it for Giant Squid survival", confidence: "Community" },
  { tip: "Save Duct Tape for repairs or hazard events", why: "In v1.1.2, repair use of Duct Tape is optional — save it for critical counters", confidence: "Official" },
  { tip: "Use Bait more confidently in v1.1.2", why: "Bait is now only consumed when you actually catch a fish", confidence: "Official" },
  { tip: "Captain Whiskers is now slightly useful for fishing", why: "v1.1.2 gives Captain Whiskers +1% fishing catch chance", confidence: "Official" },
  { tip: "Use shipmate Support when the day's plan matches it", why: "Frederik, Laurel, and Row each have different Support action effects", confidence: "Official" },
  { tip: "Track Highest Day Reached only from v1.1.2 onward", why: "The record feature was added in v1.1.2; v1.1.1 runs are not tracked", confidence: "Official" },
  { tip: "Do not assume every community ending route is confirmed", why: "Heart / Pay Debt / Giant Squid routes still need in-game verification", confidence: "Community" },
];

const shipmateTable = [
  { name: "Frederik", support: "Helps bait guarantee a catch during the day", bestDay: "Fishing day", confidence: "Official" as Confidence },
  { name: "Laurel", support: "Food restores more hunger during the day", bestDay: "Recovery day", confidence: "Official" as Confidence },
  { name: "Row", support: "Repairs cost less energy during the day", bestDay: "Repair day", confidence: "Official" as Confidence },
];

const faqData = [
  { q: "What are the best tips for Don't Sleep With The Fishes?", a: "Bring versatile items that solve multiple problems (Anchor, Duct Tape, Flare Gun), manage energy carefully, save key tools for night events, and fish efficiently — especially with Bait in v1.1.2 where it's only consumed on a successful catch." },
  { q: "What items should I bring first?", a: "Fishing Rod and Bait for food, Anchor for boat-threatening events, Flare Gun for rescue chances, and Duct Tape for hazard events. These cover the most common failure points." },
  { q: "Is bait worth using in v1.1.2?", a: "Yes. Official v1.1.2 patch notes confirm Bait is only consumed when you actually catch a fish, making it a much safer investment for food strategy." },
  { q: "Is Captain Whiskers useful?", a: "In v1.1.2, yes — but modestly. The cat gives +1% fishing catch chance. It's minor for short runs but can add up over long survival attempts." },
  { q: "Which shipmate support is best?", a: "It depends on your day plan. Use Frederik for fishing days, Laurel for recovery days, and Row for repair-heavy days. There is no single 'best' — match the Support to your plan." },
  { q: "How do I survive longer?", a: "Keep Anchor for Whirlpool and Giant Squid, save Flare Gun for rescue events, use Duct Tape strategically (not automatically), fish with Bait efficiently, repair before the boat becomes critical, and track your food vs. energy balance." },
  { q: "Should I save the Flare Gun?", a: "Yes, if you're aiming for a rescue route. Community strategy suggests using Flashlight on early Hope events and saving Flare Gun for stronger rescue opportunities." },
  { q: "Is Anchor worth keeping?", a: "Yes — it's one of the highest-value survival items. Community reports confirm it counters Whirlpool, and it's widely used for Giant Squid. Without Anchor, both events can destroy your boat." },
  { q: "How do I avoid wasting Duct Tape?", a: "In v1.1.2, repair use of Duct Tape is optional. Don't auto-use it for every repair — save it for Eerie Melody and Leak events where the counter is critical." },
  { q: "How do I get a recorded highest-day run?", a: "Play on v1.1.2 or newer. The Highest Day Reached record was added in v1.1.2 and does not track v1.1.1 runs. Check the Main Menu after your run." },
];

function TipsFAQSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": typeof item.a === "string" ? item.a : "" },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function TipsAndTricksPage() {
  return (
    <>
      <SEO title="Tips & Tricks" description="" />
      <TipsFAQSchema />

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Lightbulb className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Tips &amp; Tricks</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> Updated for v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Tips &amp; Tricks</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            The safest way to survive longer in Don't Sleep With The Fishes is to bring versatile items, manage energy carefully, fish efficiently, repair before the boat becomes critical, and save key tools for night events and rescue chances. This guide separates official v1.1.2 changes from community-tested strategies.
          </p>
        </div>

        {/* Quick Tips Table */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>Quick Tips</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Tip</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>Why It Helps</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Src</th>
                </tr>
              </thead>
              <tbody>
                {quickTips.map((row, i) => (
                  <tr key={row.tip} style={{ borderBottom: i < quickTips.length - 1 ? "1px solid rgba(245,158,11,0.06)" : "none" }}>
                    <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.tip}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.why}</td>
                    <td className="py-3"><SourceBadge source={row.confidence} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* Official Tips */}
        <div className="space-y-4 mb-8">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Use Bait More Aggressively in v1.1.2</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-2" style={NUNITO}>
              In v1.1.2, bait is safer to use than before because it is <strong className="text-text-primary">only consumed when you actually catch a fish</strong>. This makes bait a stronger part of your food strategy, especially on long survival attempts.
            </p>
            <SourceBadge source="Official" />
          </InfoCard>

          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Save Duct Tape for High-Value Uses</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-2" style={NUNITO}>
              Duct Tape became more strategic in v1.1.2. Because <strong className="text-text-primary">repair use is now optional</strong> and chest drops are less generous, do not spend Duct Tape automatically unless the repair or event counter is worth it.
            </p>
            <SourceBadge source="Official" />
          </InfoCard>

          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Captain Whiskers Is Small but No Longer Useless</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-2" style={NUNITO}>
              Captain Whiskers is not a huge power spike, but in v1.1.2 the cat finally improves <strong className="text-text-primary">fishing odds by 1%</strong>. For normal runs this is minor; for long survival attempts, small fishing improvements can still matter.
            </p>
            <SourceBadge source="Official" />
          </InfoCard>

          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Use Shipmate Support Based on Your Day Plan</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              Shipmate Support is strongest when you already know your day plan. Use Frederik before fishing, Laurel when food recovery matters, and Row before a repair-heavy day.
            </p>
            <div className="overflow-x-auto mb-2">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 500 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Shipmate</th>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>Support Use</th>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>Best Day Plan</th>
                    <th className="py-2 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Src</th>
                  </tr>
                </thead>
                <tbody>
                  {shipmateTable.map((row) => (
                    <tr key={row.name}>
                      <td className="py-2.5 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.name}</td>
                      <td className="py-2.5 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.support}</td>
                      <td className="py-2.5 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.bestDay}</td>
                      <td className="py-2.5"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <SourceBadge source="Official" />
          </InfoCard>

          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Use v1.1.2 for Highest-Day Records</h2>
            <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              If you want a recorded highest-day run, play on v1.1.2 or newer. The official patch notes say v1.1.1 runs are not tracked because the record feature was added later.
            </p>
            <SourceBadge source="Official" />
          </InfoCard>
        </div>

        {/* Community Tips */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full" style={{ background: "rgba(251,191,36,0.6)" }} />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Community-Reported Strategies</h2>
          </div>
          <div className="space-y-4">
            <InfoCard>
              <h3 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Anchor Is an S-Tier Safety Item</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-1" style={NUNITO}>
                Anchor is one of the safest items to keep because it is community-reported as a counter for dangerous boat events, especially Whirlpool. It may also matter for Giant Squid survival routes, but that should be verified before treating it as final.
              </p>
              <SourceBadge source="Community" />
            </InfoCard>

            <InfoCard>
              <h3 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Save Flashlight and Flare Gun for Rescue</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-1" style={NUNITO}>
                If you are trying for a rescue route, avoid wasting your Flare Gun. Community reports suggest using Flashlight first and saving Flare Gun for stronger rescue opportunities. Official v1.1.2 notes confirm rescue ending chance was slightly increased.
              </p>
              <div className="flex items-center gap-2">
                <SourceBadge source="Community" /> <span className="text-xs text-text-secondary">+ Official rescue chance update</span>
              </div>
            </InfoCard>

            <InfoCard>
              <h3 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Do Not Feed Every Seagull</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-1" style={NUNITO}>
                Do not feed every seagull unless you are testing that route. Community reports say seagulls can stay on the boat, eat your food, and become dangerous if too many remain.
              </p>
              <SourceBadge source="Community" />
            </InfoCard>

            <InfoCard>
              <h3 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Open Chests Only When You Can Afford the Energy</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-1" style={NUNITO}>
                Chests can be valuable, but they are not free. Open them when you can afford the energy cost and when a missing utility item would improve your night-event coverage. Official v1.1.2 notes confirm Treasure Chest drop pool adjustments.
              </p>
              <div className="flex items-center gap-2">
                <SourceBadge source="Community" /> <span className="text-xs text-text-secondary">+ Official chest pool update</span>
              </div>
            </InfoCard>
          </div>
        </div>

        {/* FAQ */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-4" style={NUNITO}>FAQ</h2>
          <div className="space-y-5">
            {faqData.map((item) => (
              <div key={item.q}>
                <h3 className="text-xs font-bold text-text-primary mb-1" style={NUNITO}>{item.q}</h3>
                <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{item.a}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Related Guides */}
        <div className="mt-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Related Guides</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { href: "/items", label: "Items Guide", desc: "Full item catalog & priority rankings" },
              { href: "/events", label: "Events Guide", desc: "Night event counter table" },
              { href: "/endings/rescue", label: "Rescue Route", desc: "Make yourself visible strategy" },
              { href: "/events/giant-squid", label: "Giant Squid Guide", desc: "Anchor & Pay Debt strategies" },
              { href: "/characters/captain-whiskers", label: "Captain Whiskers", desc: "Cat companion details" },
              { href: "/achievements", label: "Achievements & Records", desc: "Completion & highest day tracker" },
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

        <div className="mt-6 text-xs" style={{ color: "rgba(122,146,170,0.75)", ...NUNITO }}>
          Unofficial fan guide &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">Official game on itch.io <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
