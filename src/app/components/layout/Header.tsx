import { Fish, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PIRATA: React.CSSProperties = { fontFamily: "'Pirata One', cursive" };
const NUNITO: React.CSSProperties = { fontFamily: "'Nunito', sans-serif" };

const navLinks = [
  { label: "Guide",        href: "/getting-started" },
  { label: "Walkthrough",  href: "/walkthrough" },
  { label: "Items",        href: "/items" },
  { label: "Endings",      href: "/endings" },
  { label: "Events",       href: "/events" },
  { label: "Achievements", href: "/achievements" },
  { label: "Tips",         href: "/tips-tricks" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: "rgba(4,8,15,0.97)", backdropFilter: "blur(12px)" }}>

      <div className="absolute inset-x-0 top-0 h-px" style={{
        background: "linear-gradient(to right, transparent 0%, rgba(245,158,11,0.50) 25%, rgba(245,158,11,0.90) 50%, rgba(245,158,11,0.50) 75%, transparent 100%)",
      }} />
      <div className="absolute inset-x-0 top-0 h-4 pointer-events-none" style={{
        background: "linear-gradient(to bottom, rgba(245,158,11,0.07), transparent)",
      }} />

      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="flex items-center justify-between gap-6" style={{ height: "64px" }}>

          <Link to="/" className="group flex shrink-0 items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300"
              style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Fish className="h-4 w-4 text-amber transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_7px_rgba(245,158,11,0.95)]" />
            </div>

            <div className="hidden sm:flex flex-col" style={{ gap: "3px" }}>
              <div className="relative leading-none select-none" style={{ ...PIRATA, fontSize: "1.5rem" }}>
                <span className="absolute inset-0" style={{
                  WebkitTextStroke: "1px rgba(245,158,11,0.28)",
                  WebkitTextFillColor: "transparent",
                  filter: "blur(0.4px)",
                }}>DSWTF</span>
                <span className="relative" style={{
                  background: "linear-gradient(135deg, #fde68a 0%, #f59e0b 50%, #d97706 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 10px rgba(245,158,11,0.50))",
                }}>DSWTF</span>
              </div>
              <span style={{
                ...NUNITO,
                fontSize: "0.46rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(245,158,11,0.32)",
              }} className="group-hover:!text-amber/55">Don't Sleep With The Fishes</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative flex flex-col items-center px-3 py-4 group"
                  style={{ transition: "color 0.15s" }}
                  onMouseEnter={e => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}
                  onMouseLeave={e => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)";
                  }}
                >
                  {active ? (
                    <span className="leading-none" style={{
                      ...PIRATA,
                      fontSize: "1rem",
                      background: "linear-gradient(135deg, #fde68a 0%, #f59e0b 55%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 9px rgba(245,158,11,0.75))",
                    }}>{link.label}</span>
                  ) : (
                    <span style={{ ...NUNITO, fontSize: "0.72rem", fontWeight: 700, color: "var(--text-tertiary)" }}>
                      {link.label}
                    </span>
                  )}

                  {active && (
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 h-px rounded-full" style={{
                      width: "75%",
                      background: "linear-gradient(to right, transparent, rgba(245,158,11,0.75) 30%, rgba(245,158,11,1) 50%, rgba(245,158,11,0.75) 70%, transparent)",
                      boxShadow: "0 0 8px rgba(245,158,11,0.65)",
                    }} />
                  )}

                  {!active && (
                    <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 h-0.5 w-0.5 rounded-full bg-text-muted opacity-0 group-hover:opacity-60 transition-opacity" />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            className="lg:hidden flex items-center gap-1.5 rounded-xl border px-3 py-2 transition-all duration-200"
            style={{
              borderColor: mobileOpen ? "rgba(245,158,11,0.35)" : "rgba(15,25,48,1)",
              background: mobileOpen ? "rgba(245,158,11,0.08)" : "rgba(8,13,24,1)",
              color: mobileOpen ? "#f59e0b" : "var(--text-secondary)",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X className="h-4 w-4" />
              : <><Menu className="h-4 w-4" /><ChevronDown className="h-3 w-3 opacity-50" /></>
            }
          </button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px" style={{
        background: "linear-gradient(to right, transparent 0%, rgba(245,158,11,0.10) 20%, rgba(245,158,11,0.18) 50%, rgba(245,158,11,0.10) 80%, transparent 100%)",
      }} />

      {mobileOpen && (
        <div style={{ background: "rgba(4,8,15,0.99)", borderTop: "1px solid rgba(15,25,48,1)" }}>
          <div className="mx-auto max-w-5xl px-5 py-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-px flex-1" style={{ background: "rgba(245,158,11,0.14)" }} />
              <span style={{ ...NUNITO, fontSize: "0.5rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,158,11,0.38)", fontWeight: 900 }}>Navigate</span>
              <div className="h-px flex-1" style={{ background: "rgba(245,158,11,0.14)" }} />
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 transition-all duration-150"
                    style={active
                      ? { background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.22)" }
                      : { background: "rgba(8,13,24,1)", border: "1px solid rgba(15,25,48,1)", color: "var(--text-secondary)" }
                    }
                  >
                    {active
                      ? <span style={{
                          ...PIRATA,
                          fontSize: "0.88rem",
                          background: "linear-gradient(135deg, #fde68a, #f59e0b)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          filter: "drop-shadow(0 0 5px rgba(245,158,11,0.55))",
                        }}>{link.label}</span>
                      : <span style={{ ...NUNITO, fontSize: "0.75rem", fontWeight: 700 }}>{link.label}</span>
                    }
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
