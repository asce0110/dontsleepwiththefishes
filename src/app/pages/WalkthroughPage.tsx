"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Map, Sparkles, ChevronRight, AlertTriangle, ShieldCheck } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

export function WalkthroughPage() {
  return (
    <>
      <SEO
        title="Walkthrough: Day-by-Day Survival Route"
        description="Don't Sleep With The Fishes walkthrough: day-by-day survival route from ship evacuation to rescue. Spoiler-aware with beginner-friendly paths. Updated for v1.1.2."
       
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Map className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Walkthrough</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-2" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Walkthrough</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-xl">A spoiler-aware survival route from ship evacuation to rescue. This walkthrough is being built with in-game verification. Core survival principles below are based on official game mechanics.</p>
        </div>

        {/* Quick Answer */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Quick Answer</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            This walkthrough gives you a safe route through the opening ship evacuation, early survival days, mid-game night events, and late-game rescue conditions. Spoiler-heavy ending routes are linked separately so you can choose how much you want to reveal.
          </p>
        </InfoCard>

        {/* Spoiler option */}
        <InfoCard variant="warning" className="mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
            <div>
              <h2 className="text-sm font-semibold text-amber mb-1">Spoiler-Aware Mode</h2>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.75)" }}>
                This walkthrough focuses on <strong>survival principles</strong> rather than spoiling specific story outcomes.
                For ending-specific routes, see the{" "}
                <Link href="/endings" className="underline hover:text-amber">Endings Guide</Link>.
              </p>
            </div>
          </div>
        </InfoCard>

        {/* Phase structure */}
        <div className="space-y-4">
          <InfoCard>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)", color: "#f59e0b" }}>1</span>
              <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Ship Evacuation — First Scavenge</h2>
            </div>
            <div className="space-y-2 text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              <p>You have limited time before the ship sinks. Your goal: grab essential items and throw them into your lifeboat.</p>
              <ul className="space-y-1.5">
                {[
                  "Prioritize: Fishing Rod, Bait, Flare Gun, Anchor, Duct Tape, Flashlight",
                  "Food and water items are secondary — you can fish for food later",
                  "Medical supplies are valuable for dangerous events",
                  "You can only bring ONE crew member — see the Beginner Guide for shipmate choices",
                  "Don't waste time on decorative or unknown items unless you have space",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </InfoCard>

          <InfoCard>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)", color: "#f59e0b" }}>2</span>
              <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Days 1–3 — Establish Survival</h2>
            </div>
            <div className="space-y-2 text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              <p>Your first three days are about stabilizing food, health, and boat condition.</p>
              <ul className="space-y-1.5">
                {[
                  "Day actions: Fish (if you have Bait + Rod), Eat, Repair boat if damaged",
                  "Chat with your shipmate — they provide morale and may offer support actions",
                  "In v1.1.2, Bait is only consumed when you actually catch a fish (was: always consumed)",
                  "Duct Tape repair is now optional in v1.1.2 — save it for Leak/Eerie Melody events if boat is in good condition",
                  "If you don't have Bait, prioritize finding or trading for it",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </InfoCard>

          <InfoCard>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)", color: "#f59e0b" }}>3</span>
              <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Days 4–10 — Mid-Game &amp; Events</h2>
            </div>
            <div className="space-y-2 text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              <p>Night events become more frequent and dangerous. Conserve your best items for critical encounters.</p>
              <ul className="space-y-1.5">
                {[
                  "Save Flare Gun and Flashlight for Hope / Other People events (rescue route)",
                  "Keep Anchor ready for Giant Squid and Whirlpool — these can destroy your boat",
                  "Duct Tape counters Leak and Eerie Melody — don't waste it on minor repairs",
                  "If you hear eerie melody, use Duct Tape, Bucket, or Umbrella — NOT Spyglass or Flashlight (community report)",
                  "Track your food supply — starvation is a common death cause",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </InfoCard>

          <InfoCard>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)", color: "#f59e0b" }}>4</span>
              <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Late Game — Rescue Conditions</h2>
            </div>
            <div className="space-y-2 text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              <p>Once stable, focus on meeting rescue conditions. In v1.1.2, rescue ending chance was slightly increased.</p>
              <ul className="space-y-1.5">
                {[
                  "Use Flare Gun during Hope events to signal for rescue",
                  "Flashlight can also work for signaling — save it as a backup",
                  "If pursuing True Ending, investigate Heart of the Sea and Giant Squid interactions",
                  "Keep your boat repaired and morale up — both may affect ending eligibility",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </InfoCard>
        </div>

        {/* Callout */}
        <InfoCard variant="amber" className="mt-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
            <div>
              <h2 className="text-sm font-semibold text-amber mb-1">Verification Status</h2>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
                This walkthrough is being verified in-game for v1.1.2. The survival principles above are based on official game mechanics (itch page + v1.1.2 devlog).
                Specific event counters and optimal item pairings are being tested. See the{" "}
                <Link href="/events" className="underline hover:text-amber">Events Guide</Link>{" "}
                and{" "}
                <Link href="/items" className="underline hover:text-amber">Items Guide</Link>{" "}
                for detailed counter tables with source confidence labels.
              </p>
            </div>
          </div>
        </InfoCard>

        {/* Common failure points */}
        <InfoCard variant="danger" className="mt-6">
          <div className="flex items-start gap-3 mb-3">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-red" />
            <h2 className="text-sm font-semibold" style={{ color: "rgba(248,113,113,1)" }}>Common Failure Points</h2>
          </div>
          <ul className="space-y-2">
            {[
              "Starving because you forgot Bait or a Fishing Rod",
              "Boat destroyed by Giant Squid or Whirlpool — always keep Anchor",
              "Shipmate killed during Eyes event — stay awake",
              "Missing rescue because you used Flare Gun on non-Hope events",
              "Wasting Duct Tape on minor repairs instead of saving for Eerie Melody",
              "Not tracking health — some events deal hidden damage",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(248,113,113,0.85)" }}>
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red/60" />
                {item}
              </li>
            ))}
          </ul>
        </InfoCard>

        {/* Related links */}
        <div className="mt-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { href: "/guide", label: "Beginner Guide", desc: "First-playthrough essentials" },
              { href: "/events", label: "Events Guide", desc: "Night event counter table" },
              { href: "/items", label: "Items Guide", desc: "What to bring & why" },
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
      </div>
    </>
  );
}
