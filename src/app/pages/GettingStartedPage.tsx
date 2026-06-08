import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { Link } from "react-router-dom";
import { AlertTriangle, ChevronRight } from "lucide-react";

function SectionBar({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="h-4 w-0.5 rounded-full bg-amber" />
      <h3 className="text-sm font-semibold text-text-primary">{children}</h3>
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
      <SEO title="Getting Started Guide" description="Learn the basics of Don't Sleep With The Fishes — controls, mechanics, survival tips, and first-playthrough guide." keywords="getting started, beginner guide, controls, mechanics, survival tips, dswtf guide" />
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber">Beginner Guide</span>
          </div>
          <h1 className="text-text-primary mb-2" style={{ fontFamily: "'Pirata One', cursive", fontSize: "2rem", letterSpacing: "0.02em" }}>Getting Started</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-lg">Your complete first-playthrough guide to surviving at sea.</p>
        </div>
        <div className="space-y-4">
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
              <h3 className="text-sm font-semibold text-amber">Essential Survival Tips</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                "Always bring a fishing rod — your primary food source",
                "Medical supplies can save your life during dangerous events",
                "Track your health and hunger levels closely",
                "Not all crew members are equally useful — choose wisely",
                "Some items have multiple uses — experiment!",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(245,158,11,0.75)" }}>
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                  {tip}
                </li>
              ))}
            </ul>
          </InfoCard>
          <div className="pt-2">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>What's Next?</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { href: "/items",       label: "Items Database",  desc: "All available items" },
                { href: "/walkthrough", label: "Walkthrough",     desc: "Step-by-step guide" },
                { href: "/events",      label: "Events Guide",    desc: "Prepare for the night" },
              ].map(({ href, label, desc }) => (
                <Link key={href} to={href} className="group flex items-center justify-between gap-2 rounded-xl border px-4 py-3 transition-all duration-200" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,14,28,1)" }}
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
        </div>
      </div>
    </>
  );
}
