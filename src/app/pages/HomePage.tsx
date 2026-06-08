import { SEO } from "../components/SEO";
import {
  BookOpen, Map, Package, Trophy,
  AlertTriangle, Target, HelpCircle, Lightbulb,
  ExternalLink, Fish, ArrowRight, Anchor, ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import gameImage from "../../imports/Don_t_Sleep_With_The_Fishes_by_DopplerGhost.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useIsDesktop } from "../components/BentoGrid";

const PIRATA: React.CSSProperties = { fontFamily: "'Pirata One', cursive" };
const NUNITO: React.CSSProperties = { fontFamily: "'Nunito', sans-serif" };

const stats = [
  { value: "35+", label: "Items" },
  { value: "12+", label: "Endings" },
  { value: "20+", label: "Events" },
  { value: "25+", label: "Achiev." },
];

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border px-4 py-3" style={{ borderColor: "rgba(245,158,11,0.15)", background: "rgba(245,158,11,0.05)" }}>
      <span className="text-lg font-black leading-none" style={{ ...PIRATA, background: "linear-gradient(135deg,#f59e0b,#fde68a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{value}</span>
      <span className="text-[9px] font-semibold uppercase tracking-widest mt-0.5" style={{ color: "rgba(245,158,11,0.50)" }}>{label}</span>
    </div>
  );
}

function OceanBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 120% 80% at 30% 110%, rgba(245,158,11,0.08) 0%, transparent 55%), #04080f" }} />
      {[0.2, 0.38, 0.55].map((y, i) => (
        <div key={i} className="absolute inset-x-0" style={{ top: `${y * 100}%`, height: "1px", background: `linear-gradient(to right, transparent, rgba(245,158,11,${0.05 - i * 0.01}) 35%, rgba(245,158,11,${0.09 - i * 0.02}) 50%, rgba(245,158,11,${0.05 - i * 0.01}) 65%, transparent)` }} />
      ))}
    </div>
  );
}

function CardGettingStarted({ style }: { style?: React.CSSProperties }) {
  return (
    <Link to="/getting-started" className="group relative flex flex-col justify-between overflow-hidden rounded-2xl h-full" style={{ minHeight: 260, border: "1px solid rgba(245,158,11,0.20)", ...style }}>
      <div className="absolute inset-0">
        <ImageWithFallback src={gameImage} alt="" className="h-full w-full object-cover object-top" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(4,8,15,0.92) 0%, rgba(4,8,15,0.75) 50%, rgba(4,8,15,0.55) 100%)" }} />
      </div>
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-52 w-52" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.22) 0%, transparent 65%)", filter: "blur(20px)" }} />
      <div className="relative flex flex-col justify-between p-6 h-full">
        <div>
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5" style={{ background: "rgba(245,158,11,0.14)", border: "1px solid rgba(245,158,11,0.30)" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-amber" style={NUNITO}>Start Here</span>
          </div>
          <h3 className="mb-3 leading-tight text-text-primary group-hover:text-amber transition-colors duration-200" style={{ ...PIRATA, fontSize: "clamp(1.6rem, 3vw, 2.1rem)" }}>Getting Started</h3>
          <p className="text-xs leading-relaxed text-text-secondary max-w-xs" style={NUNITO}>Controls, core mechanics, evacuation strategy, and everything you need before your first night at sea.</p>
        </div>
        <div className="mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black transition-all duration-200 group-hover:gap-3 w-fit" style={{ ...NUNITO, background: "linear-gradient(135deg, #f59e0b, #d97706)", color: "#04080f", boxShadow: "0 4px 20px rgba(245,158,11,0.30)" }}>
          Begin Guide <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </Link>
  );
}

function CardWalkthrough({ style }: { style?: React.CSSProperties }) {
  return (
    <Link to="/walkthrough" className="group relative flex flex-col justify-between overflow-hidden rounded-2xl h-full" style={{ background: "rgba(9,14,26,1)", border: "1px solid rgba(245,158,11,0.12)", ...style }}>
      <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ background: "linear-gradient(to bottom, transparent 5%, rgba(245,158,11,0.55) 30%, rgba(245,158,11,0.80) 50%, rgba(245,158,11,0.55) 70%, transparent 95%)" }} />
      <div className="pointer-events-none absolute top-0 inset-x-0 h-24" style={{ background: "linear-gradient(to bottom, rgba(245,158,11,0.05), transparent)" }} />
      <div className="relative p-5 flex flex-col h-full">
        <div className="mb-auto" style={{ ...PIRATA, fontSize: "4.5rem", lineHeight: 1, color: "rgba(245,158,11,0.10)", userSelect: "none" }}>01</div>
        <div>
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.18)" }}>
            <Map className="h-5 w-5 text-amber" />
          </div>
          <h3 className="mb-1.5 text-text-primary group-hover:text-amber transition-colors" style={{ ...PIRATA, fontSize: "1.2rem" }}>Walkthrough</h3>
          <p className="text-xs text-text-tertiary leading-relaxed" style={NUNITO}>Ship to rescue — complete step-by-step</p>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber/40" style={NUNITO}>Full Guide</span>
          <ChevronRight className="h-4 w-4 text-amber/30 group-hover:text-amber group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </Link>
  );
}

function CardItems({ style }: { style?: React.CSSProperties }) {
  return (
    <Link to="/items" className="group relative overflow-hidden rounded-2xl p-4 flex flex-col justify-between transition-all duration-200"
      style={{ background: "rgba(6,11,22,1)", border: "1px solid rgba(30,50,90,1)", ...style }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,96,160,0.50)"; (e.currentTarget as HTMLElement).style.background = "rgba(9,15,30,1)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,50,90,1)"; (e.currentTarget as HTMLElement).style.background = "rgba(6,11,22,1)"; }}>
      <div className="pointer-events-none absolute top-0 right-0 h-16 w-16" style={{ background: "radial-gradient(circle at top right, rgba(56,96,180,0.15), transparent 70%)" }} />
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "rgba(40,70,140,0.18)", border: "1px solid rgba(56,96,180,0.25)" }}>
          <Package className="h-[18px] w-[18px] text-blue-400" />
        </div>
        <span className="rounded-full px-2 py-0.5 text-[9px] font-black" style={{ ...NUNITO, background: "rgba(40,70,140,0.20)", color: "rgba(147,197,253,0.90)", border: "1px solid rgba(56,96,180,0.25)" }}>35+ items</span>
      </div>
      <div>
        <h3 className="mb-0.5 text-text-primary group-hover:text-blue-300 transition-colors" style={{ ...PIRATA, fontSize: "1.05rem" }}>Items Database</h3>
        <p className="text-[11px] text-text-muted leading-relaxed" style={NUNITO}>Weight, uses &amp; strategy</p>
      </div>
    </Link>
  );
}

function CardEndings({ style }: { style?: React.CSSProperties }) {
  return (
    <Link to="/endings" className="group relative overflow-hidden rounded-2xl p-4 flex flex-col justify-between transition-all duration-200"
      style={{ background: "rgba(14,6,6,1)", border: "1px solid rgba(100,30,30,0.50)", ...style }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(180,40,40,0.50)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(100,30,30,0.50)"; }}>
      <div className="pointer-events-none absolute -top-6 -right-6 h-28 w-28" style={{ background: "radial-gradient(circle, rgba(200,40,40,0.18) 0%, transparent 70%)", filter: "blur(10px)" }} />
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(150,30,30,0.18)", border: "1px solid rgba(200,40,40,0.25)" }}>
          <Trophy className="h-[18px] w-[18px]" style={{ color: "rgba(248,113,113,1)" }} />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { label: "Survivor",    color: "rgba(52,211,153,0.8)",  bg: "rgba(52,211,153,0.08)",  border: "rgba(52,211,153,0.20)" },
            { label: "Lost at Sea", color: "rgba(248,113,113,0.8)", bg: "rgba(248,113,113,0.08)", border: "rgba(248,113,113,0.22)" },
            { label: "Hidden",      color: "rgba(251,191,36,0.8)",  bg: "rgba(251,191,36,0.08)",  border: "rgba(251,191,36,0.20)" },
          ].map(({ label, color, bg, border }) => (
            <span key={label} className="rounded-full px-2 py-0.5 text-[9px] font-black" style={{ ...NUNITO, color, background: bg, border: `1px solid ${border}` }}>{label}</span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-0.5 group-hover:text-red-400 transition-colors" style={{ ...PIRATA, fontSize: "1.1rem", color: "rgba(252,165,165,0.95)" }}>Endings Guide</h3>
        <p className="text-[11px] text-text-muted leading-relaxed" style={NUNITO}>12+ outcomes — survival, death &amp; secrets</p>
      </div>
    </Link>
  );
}

function CardEvents({ style }: { style?: React.CSSProperties }) {
  return (
    <Link to="/events" className="group relative overflow-hidden rounded-2xl p-4 flex flex-col justify-between transition-all duration-200"
      style={{ background: "rgba(14,10,4,1)", border: "1px solid rgba(120,80,10,0.50)", ...style }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.45)"; (e.currentTarget as HTMLElement).style.background = "rgba(18,13,5,1)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(120,80,10,0.50)"; (e.currentTarget as HTMLElement).style.background = "rgba(14,10,4,1)"; }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}>
          <AlertTriangle className="h-[18px] w-[18px] text-amber" />
        </div>
        <span className="text-[9px] font-black uppercase tracking-widest" style={{ ...NUNITO, color: "rgba(245,158,11,0.45)" }}>Night</span>
      </div>
      <div>
        <h3 className="mb-0.5 text-amber/90 group-hover:text-amber transition-colors" style={{ ...PIRATA, fontSize: "1.05rem" }}>Events Guide</h3>
        <p className="text-[11px] text-text-muted leading-relaxed" style={NUNITO}>Night encounters &amp; survival</p>
      </div>
    </Link>
  );
}

function CardSmall({ href, icon, title, desc, accent = "amber", style }: {
  href: string; icon: React.ReactNode; title: string; desc: string;
  accent?: "amber" | "teal" | "grey"; style?: React.CSSProperties;
}) {
  const colors = {
    amber: { border: "rgba(15,25,48,1)", hoverBorder: "rgba(245,158,11,0.28)", iconBg: "rgba(245,158,11,0.08)", iconBorder: "rgba(245,158,11,0.15)", iconColor: "#d97706" },
    teal:  { border: "rgba(15,25,48,1)", hoverBorder: "rgba(13,148,136,0.35)",  iconBg: "rgba(13,148,136,0.08)",  iconBorder: "rgba(13,148,136,0.18)",  iconColor: "#0d9488" },
    grey:  { border: "rgba(15,25,48,1)", hoverBorder: "rgba(60,80,110,0.50)",   iconBg: "rgba(40,55,80,0.20)",    iconBorder: "rgba(50,70,100,0.25)",   iconColor: "#7a92aa" },
  }[accent];
  return (
    <Link to={href} className="group relative overflow-hidden rounded-2xl p-4 flex flex-col gap-3 transition-all duration-200"
      style={{ background: "rgba(8,13,24,1)", border: `1px solid ${colors.border}`, ...style }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = colors.hoverBorder; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = colors.border; }}>
      <div className="flex items-center justify-between">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: colors.iconBg, border: `1px solid ${colors.iconBorder}` }}>
          <span style={{ color: colors.iconColor }} className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
        </div>
        <ChevronRight className="h-3.5 w-3.5 text-text-muted group-hover:translate-x-0.5 transition-all" style={{ color: colors.iconColor + "66" }} />
      </div>
      <div>
        <div className="text-sm font-bold mb-0.5 text-text-primary" style={NUNITO}>{title}</div>
        <p className="text-[11px] text-text-muted leading-relaxed" style={NUNITO}>{desc}</p>
      </div>
    </Link>
  );
}

function BentoLayout() {
  const isDesktop = useIsDesktop();
  if (!isDesktop) {
    return (
      <motion.div className="flex flex-col gap-2.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <div style={{ minHeight: 280 }}><CardGettingStarted /></div>
        <div style={{ minHeight: 180 }}><CardWalkthrough /></div>
        <div style={{ minHeight: 110 }}><CardItems /></div>
        <div style={{ minHeight: 110 }}><CardEndings /></div>
        <div style={{ minHeight: 110 }}><CardEvents /></div>
        <CardSmall href="/achievements" icon={<Target />} title="Achievements" desc="Full unlock conditions" accent="amber" />
        <CardSmall href="/tips-tricks" icon={<Lightbulb />} title="Tips & Tricks" desc="Advanced strategies" accent="teal" />
        <CardSmall href="/faq" icon={<HelpCircle />} title="FAQ" desc="Quick answers" accent="grey" />
      </motion.div>
    );
  }
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
      style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(4, auto)", gap: "10px" }}>
      <div style={{ gridColumn: "1 / 4", gridRow: "1 / 3", minHeight: 260 }}><CardGettingStarted style={{ height: "100%" }} /></div>
      <div style={{ gridColumn: "4 / 5", gridRow: "1 / 3" }}><CardWalkthrough style={{ height: "100%" }} /></div>
      <div style={{ gridColumn: "1 / 2", gridRow: "3 / 4", minHeight: 120 }}><CardItems style={{ height: "100%" }} /></div>
      <div style={{ gridColumn: "2 / 4", gridRow: "3 / 4" }}><CardEndings style={{ height: "100%" }} /></div>
      <div style={{ gridColumn: "4 / 5", gridRow: "3 / 4" }}><CardEvents style={{ height: "100%" }} /></div>
      <div style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}><CardSmall href="/achievements" icon={<Target />} title="Achievements" desc="Full unlock conditions" accent="amber" style={{ height: "100%" }} /></div>
      <div style={{ gridColumn: "2 / 3", gridRow: "4 / 5" }}><CardSmall href="/tips-tricks" icon={<Lightbulb />} title="Tips & Tricks" desc="Advanced strategies" accent="teal" style={{ height: "100%" }} /></div>
      <div style={{ gridColumn: "3 / 5", gridRow: "4 / 5" }}><CardSmall href="/faq" icon={<HelpCircle />} title="FAQ" desc="Common questions & quick answers" accent="grey" style={{ height: "100%" }} /></div>
    </motion.div>
  );
}

export function HomePage() {
  return (
    <>
      <SEO title="Home" description="Complete survival guide and wiki for Don't Sleep With The Fishes — a survival horror game by DopplerGhost." keywords="don't sleep with the fishes, dswtf, survival horror, game guide, walkthrough, wiki, itch.io" />
      <div className="min-h-screen">
        <section className="relative overflow-hidden" style={{ minHeight: "520px" }}>
          <OceanBg />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden md:block" style={{ width: "42%" }}>
            <ImageWithFallback src={gameImage} alt="" className="h-full w-full object-cover object-top" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #04080f 0%, rgba(4,8,15,0.82) 28%, rgba(4,8,15,0.35) 65%, rgba(4,8,15,0.10) 100%)" }} />
            <div className="absolute inset-x-0 top-0 h-20" style={{ background: "linear-gradient(to bottom, #04080f, transparent)" }} />
            <div className="absolute inset-x-0 bottom-0 h-28" style={{ background: "linear-gradient(to top, #04080f, transparent)" }} />
          </div>
          <div className="relative mx-auto max-w-5xl px-5 md:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
            <motion.div className="max-w-xl" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.22)" }}>
                  <Fish className="h-3.5 w-3.5 text-amber" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber/65" style={NUNITO}>Survival Guide &amp; Wiki</span>
              </div>
              <div className="mb-6 leading-none" style={PIRATA}>
                <div className="text-text-primary" style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", textShadow: "0 0 40px rgba(245,158,11,0.14)" }}>Don't Sleep</div>
                <div style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", background: "linear-gradient(135deg, #f59e0b 0%, #fde68a 40%, #d97706 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 18px rgba(245,158,11,0.32))" }}>With The Fishes</div>
              </div>
              <p className="mb-8 text-sm leading-relaxed max-w-sm" style={{ ...NUNITO, color: "rgba(122,146,170,1)" }}>You're adrift. The night is coming. Master every item, survive every event, and find a way home — or don't.</p>
              <div className="mb-8 flex flex-wrap gap-2">
                {stats.map(s => <StatPill key={s.label} {...s} />)}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/getting-started" className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-black transition-all hover:brightness-110"
                  style={{ ...NUNITO, background: "linear-gradient(135deg,#f59e0b,#d97706)", color: "#04080f", boxShadow: "0 4px 24px rgba(245,158,11,0.28)" }}>Start the Guide</Link>
                <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-all"
                  style={{ ...NUNITO, borderColor: "rgba(21,37,68,1)", background: "rgba(11,17,32,0.8)", color: "rgba(122,146,170,1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.28)"; (e.currentTarget as HTMLElement).style.color = "#edf2f7"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(21,37,68,1)"; (e.currentTarget as HTMLElement).style.color = "rgba(122,146,170,1)"; }}>
                  Play on itch.io <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-14 pointer-events-none" style={{ background: "linear-gradient(to top, #04080f, transparent)" }} />
        </section>
        <section className="px-5 md:px-8 pb-16 pt-2">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(245,158,11,0.22), transparent)" }} />
              <div className="flex items-center gap-2">
                <Anchor className="h-3 w-3 text-amber/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-amber/40" style={NUNITO}>Browse the Wiki</span>
              </div>
              <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(245,158,11,0.22), transparent)" }} />
            </div>
            <BentoLayout />
          </div>
        </section>
        <div className="border-t px-5 py-5 text-center" style={{ borderColor: "rgba(12,20,38,1)" }}>
          <p className="text-[11px]" style={{ color: "rgba(42,62,90,1)", ...NUNITO }}>
            Fan-made wiki · Not affiliated with DopplerGhost ·{" "}
            <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-amber/50">Official Game</a>
          </p>
        </div>
      </div>
    </>
  );
}
