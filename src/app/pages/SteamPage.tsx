"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";
import { ExternalLink, ChevronRight, Sparkles, Monitor, Globe } from "lucide-react";
import { SteamCountdown } from "../components/steam-countdown";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;
const PIRATA: React.CSSProperties = { fontFamily: "'Fredoka', sans-serif", fontWeight: 600 };

const faqData = [
  {
    q: "When did Don't Sleep With The Fishes release on Steam?",
    a: "June 26, 2026. Now available for $1.99 — same price as itch.io.",
  },
  {
    q: "How much does it cost on Steam?",
    a: "$2.15 during the -10% launch sale (regular $2.39). Slightly more than itch.io ($1.99), but the launch discount brings it close.",
  },
  {
    q: "Will Steam have achievements?",
    a: "Yes, the Steam version includes achievements. The exact achievement list is available on the Steam store page.",
  },
  {
    q: "Does Steam support cloud saves?",
    a: "Not confirmed by the developer yet. Steam Cloud support is common for new releases but has not been explicitly stated for this game.",
  },
  {
    q: "Will it run on Steam Deck?",
    a: "The game is a Windows point-and-click title with low system requirements. It should run on Steam Deck via Proton, but official Steam Deck verification status is not yet confirmed.",
  },
  {
    q: "I bought it on itch.io — do I get a free Steam key?",
    a: "This has not been confirmed by the developer. Some indie developers do provide Steam keys to itch.io purchasers, but wait for an official announcement from DopplerGhost.",
  },
  {
    q: "Any differences between Steam and itch.io versions?",
    a: "The core game (v1.1.2) is identical. Steam adds achievements, cloud saves, and automatic updates. itch.io gives more revenue directly to the developer.",
  },
];

const comparisonRows = [
  { feature: "Price", steam: "$2.15 (-10% launch sale, reg $2.39)", itch: "$1.99" },
  { feature: "Game Version", steam: "v1.1.2", itch: "v1.1.2" },
  { feature: "DRM-Free", steam: "No (Steam DRM)", itch: "Yes" },
  { feature: "Auto Updates", steam: "Yes (Steam auto-update)", itch: "Manual download" },
  { feature: "Achievements", steam: "Yes (Steam achievements)", itch: "Not applicable" },
  { feature: "Cloud Saves", steam: "Steam Cloud", itch: "Manual backup" },
  { feature: "Steam Deck", steam: "Playable (Proton)", itch: "Manual install" },
  { feature: "Developer Revenue", steam: "~70% (Steam cut)", itch: "~90%+ (lower platform fee)" },
  { feature: "Refund Policy", steam: "Steam refund (< 2 hrs / 14 days)", itch: "Developer discretion" },
];

const trailerVideos = [
  "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4834070/extras/b65b93df1bf498a032c16164e1282574.mp4?t=1782468658",
  "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4834070/extras/ebbe78bd8d6fbc86a51614906622ae97.mp4?t=1782468658",
  "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4834070/extras/b22d56a786e8bb9306686050e1a70bb9.mp4?t=1782468658",
];

function TrailerPlayer() {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState<0 | 1>(0);
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);

  const nextVideo = (index + 1) % trailerVideos.length;
  // "active" is which DOM element is visible
  const activeRef = active === 0 ? videoA : videoB;

  // Play the active video when it changes
  useEffect(() => {
    const v = activeRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  }, [index]);

  const handleEnded = useCallback(() => {
    const next = (index + 1) % trailerVideos.length;
    setIndex(next);
    setActive((a) => (a === 0 ? 1 : 0));
  }, [index]);

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="h-5 w-0.5 rounded-full bg-blue-400" />
        <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Official Trailer</h2>
        <span className="text-xs text-text-secondary" style={NUNITO}>({index + 1}/{trailerVideos.length})</span>
      </div>
      <div
        className="relative overflow-hidden rounded-xl grid"
        style={{ background: "#000" }}
      >
        {/* Always render both videos; only one visible via opacity */}
        <video
          ref={videoA}
          muted
          autoPlay
          playsInline
          onEnded={handleEnded}
          preload="auto"
          className="w-full [grid-area:1/1]"
          style={{
            opacity: active === 0 ? 1 : 0,
            transition: "opacity 0.35s ease",
            zIndex: active === 0 ? 1 : 0,
          }}
        >
          <source src={trailerVideos[active === 0 ? index : nextVideo]} type="video/mp4" />
        </video>
        <video
          ref={videoB}
          muted
          autoPlay
          playsInline
          onEnded={handleEnded}
          preload="auto"
          className="w-full [grid-area:1/1]"
          style={{
            opacity: active === 1 ? 1 : 0,
            transition: "opacity 0.35s ease",
            zIndex: active === 1 ? 1 : 0,
          }}
        >
          <source src={trailerVideos[active === 1 ? index : nextVideo]} type="video/mp4" />
        </video>

        {/* Controls overlay */}
        <div
          className="absolute bottom-2 right-2 z-10 flex gap-1"
          onClick={(e) => e.stopPropagation()}
        >
          {trailerVideos.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i === index) return;
                setIndex(i);
                setActive((a) => (a === 0 ? 1 : 0));
              }}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                background: i === index ? "#60a5fa" : "rgba(255,255,255,0.35)",
                boxShadow: i === index ? "0 0 6px rgba(96,165,250,0.6)" : "none",
              }}
              aria-label={`Video ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <p className="mt-2 text-xs text-text-secondary" style={NUNITO}>
        Don&apos;t Sleep With The Fishes — official Steam trailers. Point-and-click survival horror by DopplerGhost.
      </p>
    </div>
  );
}

export function SteamPage() {
  return (
    <>
      <SEO
        title="on Steam — Release Date, Price & FAQ"
        description="Don't Sleep With The Fishes launches on Steam June 26, 2026. Price, system requirements, Steam vs itch.io differences, achievements, Steam Deck, and FAQ."
      />
      <SteamCountdown />

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(23,86,184,0.12)", border: "1px solid rgba(23,86,184,0.22)" }}>
              <Monitor className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Steam</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> June 26, 2026
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ ...PIRATA, fontSize: "2rem", letterSpacing: "0.02em" }}>
            Don't Sleep With The Fishes{" "}
            <span style={{ background: "linear-gradient(135deg, #1a9fff 0%, #60a5fa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>on Steam</span>
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-xl" style={NUNITO}>
            Don't Sleep With The Fishes is <strong className="text-text-primary">now available on Steam</strong> as of June 26, 2026.
            Same game (v1.1.2), now with Steam achievements, cloud saves, automatic updates, and the convenience of your Steam library.
          </p>
        </div>

        {/* CTA */}
        <InfoCard className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h2 className="text-base font-bold text-text-primary mb-1" style={NUNITO}>Buy on Steam</h2>
              <p className="text-xs text-text-secondary" style={NUNITO}>Now available at -10% launch discount ($2.15). Steam achievements, cloud saves, and auto-updates included.</p>
            </div>
            <a
              href="https://store.steampowered.com/app/4834070/Dont_Sleep_With_The_Fishes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-black transition-all hover:brightness-110 shrink-0"
              style={{ background: "linear-gradient(135deg, #1a9fff, #176fb8)", color: "#fff", fontFamily: "'Nunito', sans-serif", boxShadow: "0 4px 20px rgba(26,159,255,0.30)" }}
            >
              Buy on Steam <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </InfoCard>

        {/* Game Trailer */}
        <TrailerPlayer />

        {/* Steam vs itch.io comparison */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-blue-400" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Steam vs itch.io</h2>
          </div>
          <InfoCard>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 500 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                    <th className="py-2.5 pr-4 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>Feature</th>
                    <th className="py-2.5 pr-4 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>
                      <span className="inline-flex items-center gap-1.5">
                        <Monitor className="h-3 w-3 text-blue-400" /> Steam
                      </span>
                    </th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>
                      <span className="inline-flex items-center gap-1.5">
                        <Globe className="h-3 w-3 text-amber/60" /> itch.io
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} style={{ borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(245,158,11,0.06)" : "none" }}>
                      <td className="py-3 pr-4 text-xs font-bold text-text-primary" style={NUNITO}>{row.feature}</td>
                      <td className="py-3 pr-4 text-xs text-text-secondary" style={NUNITO}>{row.steam}</td>
                      <td className="py-3 text-xs text-text-secondary" style={NUNITO}>{row.itch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-blue-400" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqData.map((faq) => (
              <InfoCard key={faq.q}>
                <h3 className="text-sm font-bold text-text-primary mb-2" style={NUNITO}>{faq.q}</h3>
                <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{faq.a}</p>
              </InfoCard>
            ))}
          </div>
        </div>

        {/* Related links */}
        <div className="mt-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>Related</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { href: "/guide", label: "Beginner Guide", desc: "Start here for your first playthrough" },
              { href: "/faq", label: "General FAQ", desc: "Download, platforms, controls & more" },
              { href: "/tips-tricks", label: "Tips & Tricks", desc: "Advanced strategies & best items" },
              { href: "/achievements", label: "Achievements & Records", desc: "Track your completion" },
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
      </div>
    </>
  );
}
