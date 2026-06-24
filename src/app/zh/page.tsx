import type { Metadata } from "next";
import { BookOpen, Package, Trophy, AlertTriangle, Target, HelpCircle, ExternalLink, ArrowRight, Fish, Sparkles } from "lucide-react";
import Link from "next/link";
import { SteamCountdown } from "../components/steam-countdown";
import { Card } from "../components/ZhCard";

export const metadata: Metadata = {
  alternates: { canonical: "/zh" },
  title: "Don't Sleep With The Fishes 攻略百科 — Steam 6月26日上线",
  description: "Don't Sleep With The Fishes（深海勿眠）完整中文生存攻略。35+ 物品、12+ 结局、夜间事件对策。v1.1.2 已更新，Steam 6月26日上线。",
  openGraph: {
    title: "Don't Sleep With The Fishes 攻略百科（中文）",
    description: "完整中文生存攻略。35+ 物品、12+ 结局、夜间事件对策。"
  },
};

const gameImage = "/Don_t_Sleep_With_The_Fishes_by_DopplerGhost.png";
const PIRATA: React.CSSProperties = { fontFamily: "'Fredoka', sans-serif", fontWeight: 600 };
const NUNITO: React.CSSProperties = { fontFamily: "'Nunito', sans-serif" };

export default function ZhHomePage() {
  return (
    <div className="min-h-screen" style={{ background: "#04080f" }}>
      <SteamCountdown lang="zh" />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" style={{ minHeight: "460px" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 120% 80% at 30% 110%, rgba(245,158,11,0.08) 0%, transparent 55%), #04080f" }} />
        </div>

        {/* Game cover on the right (desktop only, matches English layout) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden md:block" style={{ width: "42%" }}>
          <img src={gameImage} alt="封面" className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #04080f 0%, rgba(4,8,15,0.82) 28%, rgba(4,8,15,0.35) 65%, rgba(4,8,15,0.10) 100%)" }} />
          <div className="absolute inset-x-0 top-0 h-20" style={{ background: "linear-gradient(to bottom, #04080f, transparent)" }} />
          <div className="absolute inset-x-0 bottom-0 h-28" style={{ background: "linear-gradient(to top, #04080f, transparent)" }} />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 md:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-xl">
            {/* Badge row */}
            <div className="mb-5 flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1" style={{ background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.22)" }}>
                <Fish className="h-3 w-3 text-amber" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber/70" style={NUNITO}>攻略百科</span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)", ...NUNITO }}>
                <Sparkles className="h-3 w-3" /> v1.1.2
              </span>
            </div>

            {/* H1 */}
            <h1 className="mb-5 leading-none" style={PIRATA}>
              <span className="block" style={{ fontSize: "clamp(2.2rem, 6vw, 3.8rem)", color: "#edf2f7", textShadow: "0 0 40px rgba(245,158,11,0.14)" }}>
                Don't Sleep With The Fishes{" "}
                <span style={{ background: "linear-gradient(135deg, #f59e0b 0%, #fde68a 40%, #d97706 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 18px rgba(245,158,11,0.32))" }}>深海勿眠</span>
              </span>
              <span className="block mt-2" style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", background: "linear-gradient(135deg, #7a92aa 0%, #bccfe0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 500 }}>完整生存攻略</span>
            </h1>

            {/* Subtitle */}
            <p className="mb-6 text-sm leading-relaxed max-w-md" style={{ ...NUNITO, color: "rgba(122,146,170,1)" }}>
              夜间事件对策、物品使用策略、结局路线图、通关流程攻略。v1.1.2 最新版本。<strong style={{ color: "rgba(26,159,255,0.9)" }}>Steam 6月26日上线。</strong>
            </p>

            {/* Stats pills */}
            <div className="mb-7 flex flex-wrap gap-2">
              {[
                { value: "35+", label: "物品" },
                { value: "12+", label: "结局" },
                { value: "20+", label: "事件" },
                { value: "v1.1.2", label: "最新", highlight: true },
              ].map(({ value, label, highlight }) => (
                <div key={label} className="flex flex-col items-center rounded-2xl border px-4 py-3" style={{
                  borderColor: highlight ? "rgba(52,211,153,0.30)" : "rgba(245,158,11,0.15)",
                  background: highlight ? "rgba(52,211,153,0.06)" : "rgba(245,158,11,0.05)",
                }}>
                  <span className="text-lg font-black leading-none" style={{
                    ...PIRATA,
                    background: highlight ? "linear-gradient(135deg,#2dd4bf,#22c55e)" : "linear-gradient(135deg,#f59e0b,#fde68a)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>{value}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest mt-0.5" style={{
                    color: highlight ? "rgba(52,211,153,0.60)" : "rgba(245,158,11,0.50)",
                  }}>{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/zh/guide" className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-black transition-all hover:brightness-110"
                style={{ ...NUNITO, background: "linear-gradient(135deg,#f59e0b,#d97706)", color: "#04080f", boxShadow: "0 4px 24px rgba(245,158,11,0.28)" }}>开始攻略 <ArrowRight className="h-3.5 w-3.5" /></Link>
              <Link href="/zh/items" className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-bold transition-all"
                style={{ ...NUNITO, borderColor: "rgba(245,158,11,0.22)", background: "rgba(245,158,11,0.06)", color: "#f59e0b" }}>物品攻略</Link>
              <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-all"
                style={{ ...NUNITO, borderColor: "rgba(21,37,68,1)", background: "rgba(11,17,32,0.8)", color: "rgba(122,146,170,1)" }}>itch.io 购买 <ExternalLink className="h-3.5 w-3.5" /></a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-14 pointer-events-none" style={{ background: "linear-gradient(to top, #04080f, transparent)" }} />
      </section>

      {/* ===== INTRO TEXT ===== */}
      <section className="px-5 md:px-8 pb-10">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(122,146,170,0.85)", ...NUNITO }}>
              <strong style={{ color: "#edf2f7" }}>Don't Sleep With The Fishes</strong> 是一款由 <strong style={{ color: "#edf2f7" }}>DopplerGhost</strong> 开发的 point-and-click 生存恐怖游戏。你被困在一艘正在下沉的船上——迅速收集物品、选择一名船员同伴，在海上度过每一个致命的夜晚。
            </p>
            <p className="text-xs" style={{ color: "rgba(122,146,170,0.5)", ...NUNITO }}>
              平台：Windows · 当前版本：v1.1.2 · <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/60 transition-colors">itch.io 官方</a> · <a href="https://store.steampowered.com/app/4834070/Dont_Sleep_With_The_Fishes/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400/60 transition-colors">Steam 6月26日上线</a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== BROWSE WIKI ===== */}
      <section className="px-5 md:px-8 pb-12">
        <div className="mx-auto max-w-5xl">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(245,158,11,0.22), transparent)" }} />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-amber/40" style={NUNITO}>浏览攻略</span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(245,158,11,0.22), transparent)" }} />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Card href="/zh/guide" icon={<BookOpen className="h-4 w-4" />} title="新手指南" desc="操作、核心机制、撤离策略——出海前必读。" />
            <Card href="/zh/items" icon={<Package className="h-4 w-4" />} title="物品攻略" desc="35+ 物品用途、获取方式和最佳选择。" />
            <Card href="/zh/endings" icon={<Trophy className="h-4 w-4" />} title="结局攻略" desc="救援、死亡、隐藏结局——全部解锁路线。" />
            <Card href="/zh/events" icon={<AlertTriangle className="h-4 w-4" />} title="夜间事件" desc="Giant Squid、Whirlpool 等事件对策。" />
            <Card href="/zh/steam" icon={<Target className="h-4 w-4" />} title="Steam 上线" desc="Steam vs itch.io 对比 & FAQ。" />
            <Card href="/zh/faq" icon={<HelpCircle className="h-4 w-4" />} title="常见问题" desc="下载、平台、操作、退款。" />
          </div>
        </div>
      </section>

      {/* ===== ITCH.IO EMBED ===== */}
      <section className="px-5 md:px-8 pb-12">
        <div className="mx-auto max-w-5xl flex justify-center">
          <div className="w-full max-w-[552px] overflow-hidden rounded-xl border" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,13,24,1)" }}>
            <iframe src="https://itch.io/embed/4537532?dark=true" width="552" height="167" frameBorder="0" title="itch.io 游戏" loading="lazy" className="w-full max-w-full" />
          </div>
        </div>
        <p className="text-center mt-3 text-xs" style={{ color: "rgba(122,146,170,0.4)", ...NUNITO }}>直接在 itch.io 购买游玩 · $1.99 · 支持开发者</p>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t px-5 py-6 text-center" style={{ borderColor: "rgba(12,20,38,1)" }}>
        <p className="text-xs mb-2" style={{ color: "rgba(188,207,230,0.65)", ...NUNITO }}>
          Don't Sleep With The Fishes &copy; DopplerGhost · 非官方粉丝攻略站
        </p>
        <p className="text-xs flex items-center justify-center gap-2" style={{ color: "rgba(122,146,170,0.5)", ...NUNITO }}>
          <a href="/" className="hover:text-amber/60 transition-colors">English</a>
          <span>·</span>
          <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/60 transition-colors">itch.io</a>
          <span>·</span>
          <a href="https://store.steampowered.com/app/4834070/Dont_Sleep_With_The_Fishes/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400/60 transition-colors">Steam</a>
        </p>
      </footer>
    </div>
  );
}
