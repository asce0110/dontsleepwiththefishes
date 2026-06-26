"use client";

import { Fish, Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PIRATA: React.CSSProperties = { fontFamily: "'Fredoka', sans-serif", fontWeight: 600 };
const NUNITO: React.CSSProperties = { fontFamily: "'Nunito', sans-serif" };

const navLinks = [
  { label: "Guide",        href: "/guide" },
  { label: "Walkthrough",  href: "/walkthrough" },
  { label: "Characters",   href: "/characters" },
  { label: "Items",        href: "/items" },
  { label: "Endings",      href: "/endings" },
  { label: "Events",       href: "/events" },
  { label: "Achievements", href: "/achievements" },
  { label: "Tips",         href: "/tips-tricks" },
];

function Bubbles() {
  const bubbles = [
    { size: 3, left: "5%",  duration: "4s", delay: "0s" },
    { size: 2, left: "15%", duration: "5s", delay: "1.2s" },
    { size: 4, left: "28%", duration: "3.5s", delay: "0.6s" },
    { size: 2, left: "44%", duration: "4.8s", delay: "2s" },
    { size: 3, left: "58%", duration: "3.8s", delay: "0.3s" },
    { size: 2, left: "70%", duration: "5.2s", delay: "1.6s" },
    { size: 4, left: "82%", duration: "4.2s", delay: "0.9s" },
    { size: 2, left: "93%", duration: "3.6s", delay: "1.8s" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            bottom: "-4px",
            background: "rgba(245,158,11,0.18)",
            boxShadow: "0 0 3px rgba(245,158,11,0.15)",
            animation: `bubbleRise ${b.duration} ${b.delay} infinite ease-in`,
          }}
        />
      ))}
      <style>{`
        @keyframes bubbleRise {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          15%  { opacity: 0.7; }
          85%  { opacity: 0.2; }
          100% { transform: translateY(-72px) scale(0.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function WaveBorder() {
  return (
    <div aria-hidden className="absolute inset-x-0 bottom-0 pointer-events-none" style={{ height: "3px" }}>
      <div className="absolute inset-0" style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.15) 15%, rgba(245,158,11,0.55) 35%, rgba(245,158,11,0.75) 50%, rgba(245,158,11,0.55) 65%, rgba(245,158,11,0.15) 85%, transparent 100%)",
        boxShadow: "0 0 14px rgba(245,158,11,0.30), 0 0 32px rgba(245,158,11,0.12)",
      }} />
      <div className="absolute inset-x-0 -bottom-px" style={{
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.25) 30%, rgba(245,158,11,0.50) 50%, rgba(245,158,11,0.25) 70%, transparent)",
      }} />
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isZh = pathname.startsWith("/zh");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = isZh
    ? navLinks.map(l => ({ ...l, href: "/zh" + l.href, label: ({ "/guide": "新手指南", "/walkthrough": "流程攻略", "/characters": "角色", "/items": "物品", "/endings": "结局", "/events": "事件", "/achievements": "成就", "/tips-tricks": "技巧" } as Record<string,string>)[l.href] || l.label }))
    : navLinks;

  const langLink = isZh ? "/" : "/zh";
  const langLabel = isZh ? "EN" : "中文";

  return (
    <header className="sticky top-0 z-50 w-full transition-shadow duration-300" style={{
      background: scrolled
        ? "rgba(4,8,15,0.98)"
        : "rgba(4,8,15,0.94)",
      backdropFilter: "blur(14px)",
      boxShadow: scrolled
        ? "0 1px 20px rgba(0,0,0,0.45), 0 1px 4px rgba(245,158,11,0.08)"
        : "0 1px 8px rgba(0,0,0,0.20)",
    }}>

      {/* Top amber glow line */}
      <div className="absolute inset-x-0 top-0 h-px" style={{
        background: "linear-gradient(to right, transparent 0%, rgba(245,158,11,0.55) 25%, rgba(245,158,11,0.95) 50%, rgba(245,158,11,0.55) 75%, transparent 100%)",
      }} />
      <div className="absolute inset-x-0 top-0 h-6 pointer-events-none" style={{
        background: "linear-gradient(to bottom, rgba(245,158,11,0.10), transparent)",
      }} />

      {/* Depth atmosphere lines */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {[0.25, 0.50, 0.75].map((y, i) => (
          <div key={i} className="absolute inset-x-0" style={{
            top: `${y * 100}%`,
            height: "1px",
            background: `linear-gradient(90deg, transparent, rgba(245,158,11,${0.03 + i * 0.015}) 40%, rgba(245,158,11,${0.05 + i * 0.02}) 50%, rgba(245,158,11,${0.03 + i * 0.015}) 60%, transparent)`,
          }} />
        ))}
      </div>

      <Bubbles />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-center justify-between gap-6" style={{ height: "68px" }}>

          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-500"
              style={{
                background: "rgba(245,158,11,0.06)",
                border: "1px solid rgba(245,158,11,0.14)",
              }}>
              <Fish className="h-[18px] w-[18px] text-amber transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.90)]" style={{
                animation: "fishBob 3s ease-in-out infinite",
              }} />
              <style>{`
                @keyframes fishBob {
                  0%, 100% { transform: translateY(0) rotate(0deg); }
                  25%  { transform: translateY(-1.5px) rotate(-2deg); }
                  75%  { transform: translateY(1px) rotate(2deg); }
                }
              `}</style>
            </div>

            <div className="hidden sm:flex flex-col" style={{ gap: "2px" }}>
              <div className="relative leading-none select-none" style={{ ...PIRATA, fontSize: "1.55rem" }}>
                <span className="absolute inset-0" style={{
                  WebkitTextStroke: "2px rgba(245,158,11,0.22)",
                  WebkitTextFillColor: "transparent",
                  filter: "blur(0.5px)",
                }}>DSWTF</span>
                <span className="relative" style={{
                  background: "linear-gradient(135deg, #fde68a 0%, #f59e0b 45%, #d97706 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 14px rgba(245,158,11,0.55))",
                }}>DSWTF</span>
              </div>
              <span style={{
                ...NUNITO,
                fontSize: "0.44rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "rgba(245,158,11,0.28)",
                transition: "color 0.3s",
              }} className="group-hover:!text-amber/45">Don't Sleep With The Fishes</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative flex flex-col items-center px-3.5 py-5 group"
                >
                  {/* Hover glow background */}
                  <span className="absolute inset-x-1 inset-y-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(245,158,11,0.08), transparent 70%)" }} />

                  {active ? (
                    <span className="relative leading-none" style={{
                      ...PIRATA,
                      fontSize: "1rem",
                      background: "linear-gradient(135deg, #fde68a 0%, #f59e0b 55%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 12px rgba(245,158,11,0.80))",
                    }}>{link.label}</span>
                  ) : (
                    <span className="relative text-[0.88rem] font-bold transition-all duration-200 group-hover:scale-105"
                      style={{ ...NUNITO, color: "var(--text-secondary)" }}>
                      {link.label}
                    </span>
                  )}

                  {/* Active indicator bar */}
                  {active && (
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full" style={{
                      width: "60%",
                      height: "2.5px",
                      background: "linear-gradient(to right, transparent, rgba(245,158,11,0.90) 30%, #f59e0b 50%, rgba(245,158,11,0.90) 70%, transparent)",
                      boxShadow: "0 0 10px rgba(245,158,11,0.70), 0 0 20px rgba(245,158,11,0.30)",
                      animation: "glowPulse 2s ease-in-out infinite",
                    }} />
                  )}

                  {/* Hover underline */}
                  {!active && (
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        width: "40%",
                        height: "2px",
                        background: "linear-gradient(to right, transparent, rgba(245,158,11,0.35), transparent)",
                      }} />
                  )}
                </Link>
              );
            })}
            <Link href={langLink} className="ml-3 flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold transition hover:bg-white/5"
              style={{ borderColor: "rgba(245,158,11,0.2)", color: "rgba(245,158,11,0.65)", ...NUNITO }}>
              <Globe className="h-3 w-3" /> {langLabel}
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden relative flex items-center gap-1.5 rounded-xl border px-3 py-2 transition-all duration-200"
            style={{
              borderColor: mobileOpen ? "rgba(245,158,11,0.40)" : "rgba(15,25,48,1)",
              background: mobileOpen ? "rgba(245,158,11,0.10)" : "rgba(8,13,24,1)",
              color: mobileOpen ? "#f59e0b" : "var(--text-secondary)",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X className="h-4 w-4" />
              : <><Menu className="h-4 w-4" /><ChevronDown className="h-3 w-3 opacity-40" /></>
            }
          </button>
        </div>
      </div>

      <WaveBorder />

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: "rgba(4,8,15,0.995)",
          borderTop: "1px solid rgba(15,25,48,1)",
          backdropFilter: "blur(16px)",
        }}>
          <div className="mx-auto max-w-7xl px-5 py-5">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(245,158,11,0.20))" }} />
              <span style={{ ...NUNITO, fontSize: "0.5rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(245,158,11,0.45)", fontWeight: 900 }}>Navigate</span>
              <span className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(245,158,11,0.20))" }} />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200"
                    style={active
                      ? { background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.28)", boxShadow: "0 0 12px rgba(245,158,11,0.08)" }
                      : { background: "rgba(8,13,24,1)", border: "1px solid rgba(15,25,48,1)", color: "var(--text-secondary)" }
                    }
                  >
                    <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{
                      background: active ? "#f59e0b" : "rgba(15,31,56,1)",
                      boxShadow: active ? "0 0 6px rgba(245,158,11,0.50)" : "none",
                    }} />
                    {active
                      ? <span style={{
                          ...PIRATA,
                          fontSize: "0.92rem",
                          background: "linear-gradient(135deg, #fde68a, #f59e0b)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          filter: "drop-shadow(0 0 6px rgba(245,158,11,0.55))",
                        }}>{link.label}</span>
                      : <span style={{ ...NUNITO, fontSize: "0.9rem", fontWeight: 700 }}>{link.label}</span>
                    }
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes glowPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }
      `}</style>
    </header>
  );
}
