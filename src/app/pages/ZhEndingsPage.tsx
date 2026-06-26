"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import type { Confidence } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Trophy, Sparkles, ChevronRight, AlertTriangle, ShieldCheck } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface EndingRow {
  type: string;
  requirement: string;
  confidence: Confidence;
  note?: string;
  accent: string;
}

const endings: EndingRow[] = [
  { type: "救援结局 (Rescue)", requirement: "使用 Flare Gun(信号枪) / Flashlight(手电筒) 发出求救信号。响应 Hope(希望信号) 和 Other People 事件。", confidence: "Official", note: "救援结局概率在 v1.1.2 中略微提高（官方开发日志）。\"让自己可见\"策略是本路线的核心。", accent: "#22c55e" },
  { type: "真结局 (True Ending)", requirement: "Heart of the Sea(海洋之心) 物品（社区报告）。可能涉及 Pay Debt(还债) 和/或特定鱿鱼互动。", confidence: "Community", note: "具体步骤未经官方来源确认。存在多种社区理论。", accent: "#f59e0b" },
  { type: "Pay Debt 路线", requirement: "可能与 Giant Squid(巨型鱿鱼) 遭遇和 Heart of the Sea 相关。社区仍在追踪。", confidence: "Community", note: "Reddit 玩家在鱿鱼和海洋之心物品的语境中讨论\"偿还债务\"。路线未确认。", accent: "#fbbf24" },
  { type: "Ghost Ship(幽灵船) / 飞翔的荷兰人", requirement: "隐藏结局。具体触发条件未知。", confidence: "Community", note: "玩家讨论中提到。确切解锁条件未经证实。", accent: "#a78bfa" },
  { type: "幸存者结局 (Survivor)", requirement: "存活足够长时间并达到救援条件。", confidence: "Official", note: "官方 itch 页面确认存在多种结局。", accent: "#22c55e" },
  { type: "葬身大海 (死亡)", requirement: "生命值归零、饿死或在关键夜间事件中失败。", confidence: "Official", note: "官方 itch 页面提到你\"可以通过多种方式死亡\"。", accent: "#ef4444" },
  { type: "Seagull(海鸥) 坏结局", requirement: "长时间保留 Seagull 而不喂食或驱赶（社区报告）。", confidence: "Community", note: "Reddit 玩家讨论如何避免此结局。", accent: "#f87171" },
  { type: "船只被毁", requirement: "在 Whirlpool(漩涡) 或 Leak(漏水) 事件中没有 Anchor(锚) / Duct Tape(胶带) 而失败。", confidence: "Community", accent: "#ef4444" },
  { type: "饥饿死亡", requirement: "食物耗尽。没有 Bait(鱼饵) 或 Fishing Rod(钓竿)。", confidence: "Official", accent: "#f97316" },
  { type: "船员死亡", requirement: "在 Eyes(眼睛) 事件或其他威胁船员的遭遇中失败。", confidence: "Community", note: "玩家报告船员可能在特定事件中死亡。", accent: "#ef4444" },
];

export function ZhEndingsPage() {
  return (
    <>
      <SEO
        title="结局攻略：全部结局与条件"
        description="Don't Sleep With The Fishes 结局攻略：12+ 种结局——救援、真结局、还债、幽灵船、坏结局和隐藏秘密。每条路线均有来源可信度标签。"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Trophy className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">结局数据库</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-2" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 全结局攻略</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">游戏有多种结局——生存、死亡和隐藏结局。官方来源确认存在多个结局，且救援结局概率在 v1.1.2 中有所提高。具体路线细节来自社区报告，除非另有标注。</p>
        </div>

        {/* Quick Answer */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>快速答案</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            Don't Sleep With The Fishes 有多种结局，包括救援路线、坏结局和社区报告的隐藏路线。本攻略追踪每种结局，包含剧透警告和来源标签，将已确认路线与玩家理论区分开来。
          </p>
        </InfoCard>

        {/* Spoiler Warning */}
        <InfoCard variant="warning" className="mb-6">
          <h2 className="text-sm font-semibold text-amber mb-1">剧透警告</h2>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.75)" }}>
            本页面列出了所有已知结局及其条件。如果你更希望自己发现结局，请从{" "}
            <Link href="/guide" className="underline hover:text-amber">新手攻略</Link>{" "}
            开始，其中有无剧透摘要。
          </p>
        </InfoCard>

        {/* All Endings Overview */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>全结局总览</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 650 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>结局</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>条件 / 路线</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>备注</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>来源</th>
                </tr>
              </thead>
              <tbody>
                {endings.map((row, i) => (
                  <tr key={row.type}
                    style={{ borderBottom: i < endings.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.03)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                    <td className="py-3 pr-3">
                      <div className="flex items-center gap-2.5">
                        <span className="h-2 w-2 rounded-full shrink-0" style={{ background: row.accent, boxShadow: `0 0 5px ${row.accent}44` }} />
                        <span className="text-sm font-bold text-text-primary" style={NUNITO}>{row.type}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-3 text-xs text-text-secondary" style={NUNITO}>{row.requirement}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.note || "—"}</td>
                    <td className="py-3"><SourceBadge source={row.confidence} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* Source Confidence */}
        <InfoCard variant="warning" className="mt-6">
          <h2 className="text-sm font-semibold text-amber mb-1">来源可信度</h2>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
                官方 itch 页面确认存在<strong>多种结局</strong>，但未指定确切数量。
                我们基于社区报告列出了<strong>12+ 种已知结局</strong>，但总数未经官方确认。
            官方结局由 itch.io 页面或开发日志确认。社区路线由玩家报告，未经独立验证。未经验证的条目被玩家提及但未经可靠确认。
          </p>
        </InfoCard>

        {/* Ending FAQ */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-4" style={NUNITO}>结局常见问题</h2>
          <div className="space-y-4">
            {[
              { q: "有多少种结局？", a: "官方 itch 页面确认存在多种结局，但未指定确切数量。我们基于社区报告列出了 12+ 种已知结局，但总数未经官方确认。某些结局可能是同一结局路径的变体。" },
              { q: "如何达成真结局？", a: "真结局条件来自社区报告，尚未独立验证。当前理论涉及 Heart of the Sea 和 Giant Squid 遭遇。请参阅真结局攻略以追踪更新。" },
              { q: "Pay Debt 是什么意思？", a: "此提示似乎与 Giant Squid 遭遇有关。社区玩家正在追踪如何解决。请参阅还债攻略了解当前理论和验证状态。" },
              { q: "如何\"让自己可见\"？", a: "在 Hope 和 Other People 夜间事件中使用 Flare Gun 或 Flashlight。官方 v1.1.2 说明确认救援结局概率略微提高。" },
              { q: "有海鸥结局吗？", a: "有，社区报告描述了在船上保留太多 Seagull 触发的海鸥坏结局。请参阅海鸥攻略了解预防策略。" },
              { q: "有幽灵船结局吗？", a: "玩家提到 Ghost Ship / 飞翔的荷兰人隐藏结局，但确切解锁条件未经证实。此项作为社区报告追踪。" },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="text-xs font-bold text-text-primary mb-1" style={NUNITO}>{item.q}</h3>
                <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{item.a}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Related links */}
        <div className="mt-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>相关攻略</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { href: "/endings/true-ending", label: "真结局攻略", desc: "Heart of the Sea 与社区理论" },
              { href: "/endings/rescue", label: "让自己可见", desc: "救援路线逐步指南" },
              { href: "/endings/pay-debt", label: "Pay Debt 路线", desc: "Giant Squid 与债务解决" },
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
    </>
  );
}
