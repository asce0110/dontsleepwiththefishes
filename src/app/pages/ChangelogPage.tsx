"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { ChevronRight, ExternalLink, Clock, FileText, RefreshCw, AlertTriangle, CheckCircle, Sparkles } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface ChangelogEntry {
  date: string;
  type: "Guide Added" | "Guide Updated" | "Wiki Update" | "Game Patch Impact" | "Verification Updated" | "Community Report Added" | "Correction";
  title: string;
  summary: string;
  affectedPages: { href: string; label: string }[];
  source: string;
  status: string;
  officialLink?: string;
}

const typeColors: Record<ChangelogEntry["type"], string> = {
  "Guide Added": "rgba(52,211,153,0.9)",
  "Guide Updated": "rgba(96,165,250,0.9)",
  "Wiki Update": "rgba(122,146,170,0.9)",
  "Game Patch Impact": "rgba(251,191,36,0.9)",
  "Verification Updated": "rgba(52,211,153,0.9)",
  "Community Report Added": "rgba(251,191,36,0.9)",
  "Correction": "rgba(239,68,68,0.9)",
};

const entries: ChangelogEntry[] = [
  {
    date: "2026-06-08",
    type: "Wiki Update",
    title: "Changelog Page Added",
    summary: "Added this changelog to track new guides, content updates, verification changes, and official game patch impacts for the Don't Sleep With The Fishes Guide & Wiki.",
    affectedPages: [
      { href: "/changelog", label: "Changelog" },
      { href: "/about", label: "About This Wiki" },
    ],
    source: "Wiki update",
    status: "Active",
  },
  {
    date: "2026-06-08",
    type: "Guide Added",
    title: "About This Wiki",
    summary: "Added the About This Wiki page to explain the source confidence system, spoiler policy, version update policy, copyright boundaries, and unofficial fan-guide status.",
    affectedPages: [
      { href: "/about", label: "About This Wiki" },
    ],
    source: "Wiki update",
    status: "Active",
  },
  {
    date: "2026-06-08",
    type: "Guide Added",
    title: "Tips & Tricks Guide",
    summary: "Added the Tips & Tricks guide for practical survival advice, including bait strategy, Duct Tape use, shipmate support, Captain Whiskers, Anchor priority, rescue planning, and common mistakes.",
    affectedPages: [
      { href: "/tips-tricks", label: "Tips & Tricks" },
      { href: "/items", label: "Items Guide" },
      { href: "/events", label: "Events Guide" },
      { href: "/characters/captain-whiskers", label: "Captain Whiskers" },
    ],
    source: "Official v1.1.2 notes + community strategy",
    status: "Updated for v1.1.2",
  },
  {
    date: "2026-06-08",
    type: "Guide Added",
    title: "Achievements, Records & Completion Guide",
    summary: "Added the Achievements & Completion guide to track endings, lore items, Highest Day Reached, community records, and future Steam achievement status.",
    affectedPages: [
      { href: "/achievements", label: "Achievements & Records" },
      { href: "/endings", label: "Endings Guide" },
      { href: "/speedrun", label: "Speedrun Guide" },
      { href: "/faq/steam-release", label: "Steam Release FAQ" },
    ],
    source: "Official v1.1.2 notes",
    status: "Steam achievements not publicly listed yet",
  },
  {
    date: "2026-06-08",
    type: "Guide Added",
    title: "Night Event Counters Guide",
    summary: "Added the Night Event Counters guide with source-labeled counters for Giant Squid, Hope, Seagull, Eerie Melody, Eyes, and Whirlpool, plus six individual event detail pages.",
    affectedPages: [
      { href: "/events", label: "Events Guide" },
      { href: "/events/giant-squid", label: "Giant Squid Guide" },
      { href: "/events/seagull", label: "Seagull Guide" },
      { href: "/events/eerie-melody", label: "Eerie Melody Guide" },
      { href: "/events/eyes", label: "Eyes Guide" },
      { href: "/events/whirlpool", label: "Whirlpool Guide" },
      { href: "/endings/rescue", label: "Rescue Guide" },
    ],
    source: "Official night-event mechanics + community reports",
    status: "Community counters need in-game verification",
  },
  {
    date: "2026-06-08",
    type: "Guide Added",
    title: "Core Content Pages Launched",
    summary: "Launched the Items Guide, Walkthrough, Endings Guide, FAQ, and Beginner Guide with full content tables, source confidence labels, and SEO metadata.",
    affectedPages: [
      { href: "/items", label: "Items Guide" },
      { href: "/walkthrough", label: "Walkthrough" },
      { href: "/endings", label: "Endings Guide" },
      { href: "/faq", label: "FAQ" },
      { href: "/guide", label: "Beginner Guide" },
    ],
    source: "Official + Community data",
    status: "Active — ongoing verification",
  },
  {
    date: "2026-06-08",
    type: "Wiki Update",
    title: "Site Migrated to Next.js for SEO",
    summary: "Migrated the entire site from a Vite SPA to Next.js App Router with server-side rendering. All page content is now crawlable by search engines directly from the HTML source.",
    affectedPages: [
      { href: "/", label: "Homepage" },
    ],
    source: "Wiki update",
    status: "Complete",
  },
  {
    date: "2026-06-06",
    type: "Game Patch Impact",
    title: "Version 1.1.2 Mechanics Changed",
    summary: "Official version 1.1.2 changed several mechanics. Bait is now consumed only when a fish is caught, Duct Tape repair is optional, rescue chances increased, Captain Whiskers +1% fishing, Highest Day Reached tracked, 3 new night events added, and shipmate Support actions introduced.",
    affectedPages: [
      { href: "/items", label: "Items Guide" },
      { href: "/events", label: "Events Guide" },
      { href: "/endings/rescue", label: "Rescue Guide" },
      { href: "/characters/captain-whiskers", label: "Captain Whiskers" },
      { href: "/achievements", label: "Achievements" },
      { href: "/tips-tricks", label: "Tips & Tricks" },
      { href: "/version-112", label: "v1.1.2 Patch Notes" },
    ],
    source: "Official DopplerGhost v1.1.2 devlog",
    status: "Official",
    officialLink: "https://dopplerghost.itch.io/dont-sleep-with-the-fishes/devlog/1546268/version-112",
  },
];

const patchImpactTable = [
  { change: "Bait only consumed when fish is caught", pages: "/items/, /tips-tricks/, /walkthrough/", action: "Update fishing strategy" },
  { change: "Duct Tape repair use is optional", pages: "/items/duct-tape/, /events/, /tips-tricks/", action: "Update repair advice" },
  { change: "Duct Tape chance decreased in Treasure Chests", pages: "/items/chest-items/", action: "Update chest priority" },
  { change: "Swim Ring added to Treasure Chests", pages: "/items/, /items/chest-items/", action: "Add item entry" },
  { change: "Rescue ending chance increased", pages: "/endings/rescue/, /events/", action: "Update rescue route" },
  { change: "Captain Whiskers +1% fishing chance", pages: "/characters/captain-whiskers/", action: "Update cat guide" },
  { change: "Lore item saved in endings tab", pages: "/achievements/, /items/", action: "Add completion tracking" },
  { change: "Highest Day Reached tracked", pages: "/achievements/, /speedrun/", action: "Add record tracker" },
  { change: "3 Night Events added", pages: "/events/", action: "Mark event pages for verification" },
  { change: "Shipmate Support added", pages: "/characters/shipmates/, /tips-tricks/", action: "Add support table" },
];

const faqData = [
  { q: "Is this the official Don't Sleep With The Fishes changelog?", a: "No. This is the update log for this unofficial guide/wiki. Official game updates are linked to DopplerGhost's itch.io devlog." },
  { q: "How often is the wiki updated?", a: "Core guides are reviewed when the game updates, when a route is verified, or when players report incorrect information." },
  { q: "What does Game Patch Impact mean?", a: "It means an official game update changed mechanics that may affect our guides. We list which pages need review or updating." },
  { q: "Can I submit corrections?", a: "Yes. Submit the game version, route, item used, outcome, and screenshot or video proof when possible. See the About page for contribution details." },
];

function ChangelogSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Don't Sleep With The Fishes Wiki Changelog",
    "description": "Recent updates to the unofficial Don't Sleep With The Fishes Guide & Wiki, including new guides, content additions, verification updates, and patch impact notes.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Don't Sleep With The Fishes Guide & Wiki",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function ChangelogPage() {
  return (
    <>
      <SEO title="Changelog" description="" />
      <ChangelogSchema />

      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Clock className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">Changelog</span>
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Wiki Changelog</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            This changelog tracks updates to the unofficial Don't Sleep With The Fishes Guide &amp; Wiki. It lists new pages, rewritten guides, source confidence changes, verified route updates, and official game patch notes that affect our walkthroughs.
          </p>
        </div>

        {/* Current Status */}
        <InfoCard className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-sm" style={NUNITO}>
            <div>
              <span className="block text-xs font-black uppercase tracking-widest text-text-tertiary mb-1">Game Version</span>
              <span className="text-text-primary font-bold">v1.1.2</span>
            </div>
            <div>
              <span className="block text-xs font-black uppercase tracking-widest text-text-tertiary mb-1">Last Wiki Review</span>
              <span className="text-text-primary font-bold">2026-06-08</span>
            </div>
            <div>
              <span className="block text-xs font-black uppercase tracking-widest text-text-tertiary mb-1">Source Labels</span>
              <span className="text-text-primary font-bold">Official &middot; Verified &middot; Community &middot; Unverified</span>
            </div>
            <div>
              <span className="block text-xs font-black uppercase tracking-widest text-text-tertiary mb-1">Official Page</span>
              <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-amber/80 hover:text-amber transition-colors font-bold">
                itch.io <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </InfoCard>

        {/* Timeline */}
        <div className="space-y-4 mb-10">
          {entries.map((entry, i) => (
            <InfoCard key={`${entry.date}-${entry.title}`}>
              <div className="flex items-start gap-4">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center shrink-0 pt-1">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: typeColors[entry.type], boxShadow: `0 0 8px ${typeColors[entry.type]}` }} />
                  {i < entries.length - 1 && <span className="w-px flex-1 mt-1" style={{ background: "rgba(15,31,56,0.5)" }} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-black tracking-wider" style={{ color: "rgba(122,146,170,0.6)", ...NUNITO }}>{entry.date}</span>
                    <span className="rounded-full px-2 py-0.5 text-xs font-black uppercase tracking-wider" style={{ background: `${typeColors[entry.type]}22`, border: `1px solid ${typeColors[entry.type]}44`, color: typeColors[entry.type] }}>
                      {entry.type}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-text-primary mb-1" style={NUNITO}>{entry.title}</h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>{entry.summary}</p>

                  {/* Affected pages */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-text-tertiary">Affected:</span>
                    {entry.affectedPages.map((page) => (
                      <Link key={page.href} href={page.href} className="rounded-full px-2 py-0.5 text-xs font-bold transition-colors hover:text-amber" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.12)", color: "rgba(245,158,11,0.65)", ...NUNITO }}>
                        {page.label}
                      </Link>
                    ))}
                  </div>

                  {/* Source & Status */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-tertiary" style={NUNITO}>
                    <span>Source: <strong className="text-text-secondary">{entry.source}</strong></span>
                    <span>Status: <strong className="text-text-secondary">{entry.status}</strong></span>
                    {entry.officialLink && (
                      <a href={entry.officialLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-amber/60 hover:text-amber transition-colors">
                        Official devlog <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </InfoCard>
          ))}
        </div>

        {/* Game Patch Impact Table */}
        <InfoCard className="mb-6">
          <div className="flex items-center gap-2.5 mb-4">
            <RefreshCw className="h-4 w-4" style={{ color: "rgba(251,191,36,0.6)" }} />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>v1.1.2 Patch Impact</h2>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed mb-3" style={NUNITO}>
            When the official game updates, this table tracks which wiki pages need review. Official source:{" "}
            <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes/devlog/1546268/version-112" target="_blank" rel="noopener noreferrer" className="text-amber/80 hover:text-amber transition-colors">
              v1.1.2 devlog <ExternalLink className="inline h-2.5 w-2.5" />
            </a>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>Official Change</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-tertiary hidden sm:table-cell" style={NUNITO}>Affected Pages</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-tertiary hidden md:table-cell" style={NUNITO}>Action</th>
                </tr>
              </thead>
              <tbody>
                {patchImpactTable.map((row, i) => (
                  <tr key={row.change} style={{ borderBottom: i < patchImpactTable.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                    <td className="py-3 pr-3 text-xs font-bold text-text-primary" style={NUNITO}>{row.change}</td>
                    <td className="py-3 pr-3 text-xs text-text-tertiary hidden sm:table-cell" style={NUNITO}>{row.pages}</td>
                    <td className="py-3 text-xs hidden md:table-cell" style={{ color: "rgba(52,211,153,0.8)", ...NUNITO }}>{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* FAQ */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-4" style={NUNITO}>FAQ</h2>
          <div className="space-y-4">
            {faqData.map((item) => (
              <div key={item.q}>
                <h3 className="text-xs font-bold text-text-primary mb-1" style={NUNITO}>{item.q}</h3>
                <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{item.a}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Related Links */}
        <div className="mt-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Related</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { href: "/about", label: "About This Wiki", desc: "Source confidence & policies" },
              { href: "/version-112", label: "v1.1.2 Patch Notes", desc: "Full update explained" },
              { href: "/guide", label: "Beginner Guide", desc: "Start here" },
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
      </div>
    </>
  );
}
