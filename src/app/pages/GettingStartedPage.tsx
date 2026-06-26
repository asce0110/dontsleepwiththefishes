"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import Link from "next/link";
import { AlertTriangle, ChevronRight, Sparkles } from "lucide-react";

function SectionBar({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="h-4 w-0.5 rounded-full bg-amber" />
      <h2 className="text-sm font-semibold text-text-primary">{children}</h2>
    </div>
  );
}

function KeyBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-lg px-2.5 py-1 font-mono text-xs font-semibold" style={{ background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.20)", color: "#f59e0b" }}>
      {children}
    </span>
  );
}

export function GettingStartedPage() {
  return (
    <>
      <SEO
        title="Beginner Survival Guide"
        description="Don't Sleep With The Fishes beginner guide: controls, core mechanics, evacuation strategy, shipmate choices, and first 7 days survival route. Updated for v1.1.2."
       
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Beginner Guide</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-2" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Beginner Guide</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-lg">Your complete first-playthrough guide to surviving at sea. Controls, ship scavenging priorities, shipmate choices, and day-by-day survival strategy.</p>
        </div>
        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={{ fontFamily: "'Nunito', sans-serif" }}>Quick Answer</h2>
            <p className="text-sm text-text-secondary leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
              In Don't Sleep With The Fishes, your first goal is to grab useful items before the ship sinks, then survive each day by managing food, energy, repairs, shipmates, and night events. New players should prioritize flexible items like Fishing Rod, Anchor, and Duct Tape, avoid wasting rescue tools like Flare Gun, and learn which events require specific counters.
            </p>
          </InfoCard>

          <InfoCard>
            <SectionBar>Game Overview</SectionBar>
            <p className="text-sm text-text-secondary leading-relaxed">You're trapped on a sinking ship. Quickly gather what you can and throw it into your lifeboat before the ship goes under. Choose one crew member to bring along, then survive the nights at sea by fishing, eating, and managing your energy.</p>
          </InfoCard>
          <InfoCard>
            <SectionBar>Basic Controls</SectionBar>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { key: "WASD",  desc: "Move around" },
                { key: "E",     desc: "Pick up and throw items" },
                { key: "Click", desc: "Interact with objects" },
                { key: "ESC",   desc: "Pause menu" },
              ].map(({ key, desc }) => (
                <div key={key} className="flex items-center gap-3">
                  <KeyBadge>{key}</KeyBadge>
                  <span className="text-sm text-text-secondary">{desc}</span>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard>
            <SectionBar>Phase 1 — Emergency Evacuation</SectionBar>
            <p className="text-sm text-text-secondary leading-relaxed">You have limited time to collect items and throw them into your lifeboat. Prioritize essential survival items: food, water, and tools. You can only bring <strong className="text-text-primary">one</strong> crew member — choose wisely.</p>
          </InfoCard>
          <InfoCard>
            <SectionBar>Phase 2 — Sea Survival</SectionBar>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">During the day, spend your energy on:</p>
            <ul className="space-y-2 mb-5">
              {["Fishing for food", "Eating to maintain health", "Completing small tasks", "Chatting with your shipmate"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-text-secondary leading-relaxed">When energy runs out, night falls. You'll rest, but sleep may be interrupted by events. Use the items you brought to handle each encounter.</p>
          </InfoCard>
          <InfoCard variant="warning">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
              <h2 className="text-sm font-semibold text-amber">Essential Survival Tips</h2>
            </div>
            <ul className="space-y-2.5">
              {[
                "Always bring a fishing rod — your primary food source",
                "Medical supplies can save your life during dangerous events",
                "Track your health and hunger levels closely — starvation is a common death cause",
                "Not all crew members are equally useful — Laurel, Frederik, Row, and Captain Whiskers have different effects",
                "Some items have multiple uses — experiment but don't waste rare items like Flare Gun",
                "Duct Tape repair is optional in v1.1.2, so weigh repair vs. event defense",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(245,158,11,0.75)" }}>
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                  {tip}
                </li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard>
            <SectionBar>Shipmates — Who to Bring</SectionBar>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">You can bring <strong className="text-text-primary">one crew member</strong> onto your lifeboat. Each has different strengths:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { name: "Laurel", role: "Morale & support", effect: "Improves mood recovery, helps during Hope events" },
                { name: "Frederik", role: "Repair & crafting", effect: "Better repair efficiency, useful for Leak events" },
                { name: "Row", role: "Combat & defense", effect: "Helps counter monster events like Eyes and Anglerfish" },
                { name: "Captain Whiskers", role: "Fishing & luck", effect: "Fishing chance +1% in v1.1.2, unique lore interactions" },
              ].map((mate) => (
                <div key={mate.name} className="rounded-xl border p-3" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,14,28,1)" }}>
                  <div className="text-sm font-bold text-text-primary mb-0.5">{mate.name}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber/60 mb-1">{mate.role}</div>
                  <div className="text-xs text-text-secondary leading-relaxed">{mate.effect}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard>
            <SectionBar>Common Beginner Mistakes</SectionBar>
            <ul className="space-y-2.5">
              {[
                "Not bringing an Anchor — you'll need it for Squid and Whirlpool events that can destroy your boat",
                "Wasting Flare Gun or Flashlight early — these are critical for the Rescue ending route",
                "Ignoring Bait — without it, fishing fails and you starve. In v1.1.2, Bait is only consumed when you actually catch a fish",
                "Forgetting to repair — a damaged boat sinks regardless of your health",
                "Bringing the wrong shipmate for your planned ending",
              ].map((mistake) => (
                <li key={mistake} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red/60" />
                  {mistake}
                </li>
              ))}
            </ul>
          </InfoCard>
          <div className="pt-2">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Next Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { href: "/items",       label: "Items Database",  desc: "All available items" },
                { href: "/walkthrough", label: "Walkthrough",     desc: "Step-by-step guide" },
                { href: "/events",      label: "Events Guide",    desc: "Prepare for the night" },
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
        </div>
      </div>
    </>
  );
}
