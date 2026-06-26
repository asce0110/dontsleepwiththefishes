"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import type { Confidence } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Package, Sparkles, ChevronRight, AlertTriangle } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface ItemRow {
  item: string;
  source: string;
  bestUse: string;
  eventCounter: string;
  endingUse: string;
  priority: "S" | "A" | "B" | "C";
  confidence: Confidence;
  v112Change?: string;
}

const items: ItemRow[] = [
  { item: "Anchor (锚)", source: "船上 / 箱子", bestUse: "船只安全 & 怪物防御", eventCounter: "Giant Squid, Whirlpool", endingUse: "True Ending 替代路线", priority: "S", confidence: "Community", v112Change: "未确认变更" },
  { item: "Flare Gun (信号枪)", source: "船上 / 箱子", bestUse: "发出救援信号", eventCounter: "Hope, Other People", endingUse: "Rescue 路线", priority: "S", confidence: "Official", v112Change: "救援结局概率略微提升" },
  { item: "Flashlight (手电筒)", source: "船上", bestUse: "发信号 & 阴影防御", eventCounter: "Hope, Shadow Figure", endingUse: "救援路线替代方案", priority: "S", confidence: "Community" },
  { item: "Duct Tape (胶带)", source: "船上 / 箱子", bestUse: "修理 & 事件防御", eventCounter: "Leak, Eerie Melody", endingUse: "生存", priority: "A", confidence: "Official", v112Change: "修理使用现为可选; 箱子刷新率降低" },
  { item: "Bucket (水桶)", source: "船上", bestUse: "收集水 & 事件对策", eventCounter: "Leak, Eerie Melody", endingUse: "Heart 路线 (社区报告)", priority: "A", confidence: "Community" },
  { item: "Bait (鱼饵)", source: "船上 / 事件", bestUse: "钓鱼 — 主要食物来源", eventCounter: "日间生存", endingUse: "生存", priority: "A", confidence: "Official", v112Change: "仅在钓到鱼时消耗 (原: 每次尝试都消耗)" },
  { item: "Fishing Rod (钓竿)", source: "船上", bestUse: "获取食物", eventCounter: "每日食物", endingUse: "生存", priority: "A", confidence: "Official" },
  { item: "Swim Ring (游泳圈)", source: "宝箱", bestUse: "水上安全", eventCounter: "未知", endingUse: "未知", priority: "B", confidence: "Official", v112Change: "加入宝箱掉落池" },
  { item: "Scuba Gear (潜水装备)", source: "船上 / 箱子", bestUse: "风险路线探索", eventCounter: "Red, Arms and Fingers", endingUse: "资源路线", priority: "B", confidence: "Community" },
  { item: "Harpoon Gun (鱼叉枪)", source: "船上", bestUse: "怪物防御", eventCounter: "Anglerfish, Sharks", endingUse: "生存", priority: "B", confidence: "Community" },
  { item: "Spyglass (望远镜)", source: "船上", bestUse: "观察 & 侦查", eventCounter: "Fog, Moon", endingUse: "有限", priority: "C", confidence: "Community" },
  { item: "Heart Piece / Heart Note (心之碎片/心之笔记)", source: "未知", bestUse: "未知", eventCounter: "未知", endingUse: "可能隐藏路线", priority: "C", confidence: "Unverified" },
  { item: "Message in a Bottle (漂流瓶)", source: "未知", bestUse: "未知", eventCounter: "未知", endingUse: "未知", priority: "C", confidence: "Unverified" },
  { item: "Captain Whiskers (威斯克船长)", source: "船上 (船员)", bestUse: "钓鱼加成", eventCounter: "N/A (被动)", endingUse: "独特剧情互动", priority: "A", confidence: "Official", v112Change: "钓鱼捕获概率 +1%" },
];

const priorityColors: Record<string, { bg: string; border: string; color: string }> = {
  S: { bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.30)", color: "#f59e0b" },
  A: { bg: "rgba(96,165,250,0.10)", border: "rgba(96,165,250,0.25)", color: "#60a5fa" },
  B: { bg: "rgba(122,146,170,0.10)", border: "rgba(122,146,170,0.25)", color: "#7a92aa" },
  C: { bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.20)", color: "rgba(239,68,68,0.70)" },
};

function PriorityBadge({ p }: { p: string }) {
  const c = priorityColors[p] || priorityColors.C;
  return (
    <span className="inline-flex items-center justify-center rounded-md w-7 h-7 text-xs font-black" style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}>
      {p}
    </span>
  );
}

export function ZhItemsPage() {
  return (
    <>
      <SEO
        title="物品攻略: 用途、来源 & 最佳选择"
        description="Don't Sleep With The Fishes 物品攻略: 每件物品、来源、最佳用途、事件对策、结局优先级和 v1.1.2 变更。S 级到 C 级排名，附来源可信度标注。"
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Package className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">物品数据库</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-2" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 物品攻略</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">完整物品目录，含来源、事件对策、结局用途和优先级排名。来源可信度标注标明信息来自官方开发日志、社区报告或尚未验证。</p>
        </div>

        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>快速回答</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            Don't Sleep With The Fishes 中最好的物品是能解决多个问题的。<strong className="text-text-primary">Anchor、Duct Tape、Bait、Bucket、Flashlight 和 Flare Gun</strong> 通常价值最高——它们在夜间事件、食物、救援机会和长期生存方面都有帮助。部分物品用途来自社区报告，在游戏内验证前标有来源可信度。
          </p>
        </InfoCard>

        <InfoCard className="mb-6">
          <div className="flex flex-wrap items-center gap-3 text-xs" style={NUNITO}>
            <span className="text-text-secondary font-bold">优先级:</span>
            {[
              { p: "S", desc: "必备 — 每次出发都带" },
              { p: "A", desc: "强力 — 高价值" },
              { p: "B", desc: "场景型 — 取决于路线" },
              { p: "C", desc: "有限 / 未知" },
            ].map(({ p, desc }) => (
              <span key={p} className="inline-flex items-center gap-1.5"><PriorityBadge p={p} /><span className="text-text-secondary">{desc}</span></span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-3 text-xs" style={NUNITO}>
            <span className="text-text-secondary font-bold">来源:</span>
            <SourceBadge source="Official" />
            <SourceBadge source="Community" />
            <SourceBadge source="Unverified" />
          </div>
        </InfoCard>

        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>物品优先级表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 700 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>物品</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>来源</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>最佳用途</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>事件对策</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden lg:table-cell" style={NUNITO}>结局用途</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>优先级</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>来源</th>
                </tr>
              </thead>
              <tbody>
                {items.map((row, i) => (
                  <tr key={row.item} style={{ borderBottom: i < items.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.03)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                    <td className="py-3 pr-3"><div><span className="text-sm font-bold text-text-primary" style={NUNITO}>{row.item}</span>{row.v112Change && <span className="block text-xs mt-0.5" style={{ color: "rgba(52,211,153,0.7)" }}>{row.v112Change}</span>}</div></td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.source}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary" style={NUNITO}>{row.bestUse}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.eventCounter}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden lg:table-cell" style={NUNITO}>{row.endingUse}</td>
                    <td className="py-3 pr-3"><PriorityBadge p={row.priority} /></td>
                    <td className="py-3"><SourceBadge source={row.confidence} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        <div className="mt-6 mb-6">
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>物品分类</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              { href: "/zh/items/best-items", label: "新手最佳物品", desc: "新手首选推荐" },
              { href: "/zh/events", label: "夜间事件对策物品", desc: "Anchor、Duct Tape、Flare Gun 等" },
              { href: "/zh/endings/rescue", label: "救援路线物品", desc: "Flare Gun、Flashlight" },
              { href: "/zh/items/heart-of-the-sea", label: "结局路线物品", desc: "Heart of the Sea 及秘密物品" },
              { href: "/zh/items", label: "食物、钓鱼 & 修理", desc: "Bait、Fishing Rod、Duct Tape" },
              { href: "/zh/items", label: "箱子 & 限量物品", desc: "Swim Ring、稀有箱子掉落" },
            ].map(({ href, label, desc }) => (
              <Link key={label} href={href} className="group flex items-center justify-between gap-2 rounded-xl border px-4 py-3 transition-all duration-200" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,14,28,1)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.30)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,31,56,1)"; }}>
                <div><div className="text-sm font-medium text-text-primary group-hover:text-amber transition-colors">{label}</div><div className="text-xs text-text-secondary">{desc}</div></div>
                <ChevronRight className="h-4 w-4 shrink-0 text-text-secondary group-hover:text-amber transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-4" style={NUNITO}>物品 FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "最好的物品是什么？", a: "Anchor、Flare Gun、Duct Tape、Bait 和 Flashlight 价值最高，涵盖了船只安全、救援、修理、食物和夜间事件。详见上方优先级表。" },
              { q: "哪些物品能应对夜间事件？", a: "Anchor 应对 Whirlpool（社区报告也用于 Giant Squid）。Duct Tape 和 Bucket 应对 Eerie Melody 和 Leak。Flare Gun 和 Flashlight 帮助 Hope 和 Other People 救援事件。" },
              { q: "我应该保留 Anchor 吗？", a: "是的。Anchor 是 S 级生存物品，能应对两个最危险的事件——Whirlpool 和 Giant Squid。没有它，两者都可能毁掉你的船。" },
              { q: "Duct Tape 值得留吗？", a: "值得。v1.1.2 中 Duct Tape 的修理用途变为可选，可以留着应对关键事件如 Eerie Melody。箱子刷新率也降低了，更为稀缺。" },
              { q: "v1.1.2 中 Bait 有什么变化？", a: "现在鱼饵仅在成功钓到鱼时消耗。v1.1.2 之前每次尝试都会消耗。这让鱼饵成为更安全的食物策略投资。" },
              { q: "哪些物品有助于救援？", a: "Flare Gun 和 Flashlight 是主要救援路线物品。v1.1.2 官方笔记确认救援结局概率略微提升。先用 Flashlight，保留 Flare Gun 用于更强的机会。" },
            ].map((item) => (
              <div key={item.q}><h3 className="text-xs font-bold text-text-primary mb-1" style={NUNITO}>{item.q}</h3><p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{item.a}</p></div>
            ))}
          </div>
        </InfoCard>

        <InfoCard variant="warning" className="mb-6">
          <h2 className="text-sm font-semibold text-amber mb-1">来源可信度</h2>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.75)" }}>
            <strong>Official (官方)</strong> 数据来自游戏 itch.io 页面和 v1.1.2 开发日志。<strong>Community (社区)</strong> 条目来自 Reddit、Fandom 和玩家报告——未经独立验证。<strong>Unverified (未验证)</strong> 物品被玩家提及但缺乏确认机制。本攻略将在更多信息验证后更新。
          </p>
        </InfoCard>

        <div className="mt-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>相关攻略</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { href: "/zh/events", label: "夜间事件攻略", desc: "事件对策 & 最佳物品" },
              { href: "/zh/endings", label: "结局攻略", desc: "全部结局 & 物品需求" },
              { href: "/zh/items/best-items", label: "最佳物品等级表", desc: "S 级到 C 级排名" },
            ].map(({ href, label, desc }) => (
              <Link key={label} href={href} className="group flex items-center justify-between gap-2 rounded-xl border px-4 py-3 transition-all duration-200" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,14,28,1)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.30)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,31,56,1)"; }}>
                <div><div className="text-sm font-medium text-text-primary group-hover:text-amber transition-colors">{label}</div><div className="text-xs text-text-secondary">{desc}</div></div>
                <ChevronRight className="h-4 w-4 shrink-0 text-text-secondary group-hover:text-amber transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
