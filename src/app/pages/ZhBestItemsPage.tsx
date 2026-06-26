"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { ChevronRight, Sparkles, ExternalLink, Trophy } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const tierList = [
  { tier: "S 级", items: "锚 (Anchor)", reason: "对抗巨型鱿鱼和漩涡的必需品；没有锚可能导致船只损毁", confidence: "Community" as const },
  { tier: "S 级", items: "胶带 (Duct Tape)", reason: "对抗诡异旋律的最安全对策；也可用于修复船只", confidence: "Community" as const },
  { tier: "A 级", items: "信号枪 (Flare Gun)", reason: "救援路线的最佳信号物品；单次使用但几率最高", confidence: "Community" as const },
  { tier: "A 级", items: "水桶 (Bucket)", reason: "诡异旋律的备选对策；也可帮助修复漏水", confidence: "Community" as const },
  { tier: "B 级", items: "手电筒 (Flashlight)", reason: "早中期希望事件可用，保存信号枪；也可用于救援路线", confidence: "Community" as const },
  { tier: "B 级", items: "雨伞 (Umbrella)", reason: "可应对诡异旋律；可能损坏船只", confidence: "Community" as const },
  { tier: "C 级", items: "鱼竿 (Fishing Rod)", reason: "基础食物获取；v1.1.2 中鱼饵机制改善", confidence: "Official" as const },
  { tier: "C 级", items: "望远镜 (Spyglass)", reason: "在诡异旋律中使用危险；一般探索用途有限", confidence: "Community" as const },
];

const faq = [
  { q: "什么是最好的生存物品？", a: "锚和胶带名列前茅。锚对抗最危险的两个事件（巨型鱿鱼和漩涡），胶带是诡异旋律的最安全对策，也可修复船只。" },
  { q: "应该优先带哪些物品？", a: "对于大多数游戏：锚、胶带、信号枪是第一优先级的物品。如果空间允许，加上水桶或手电筒。" },
  { q: "哪些物品应该避免？", a: "望远镜在诡异旋律中很危险。鱼叉枪对巨型鱿鱼的证据不足。选择物品时要优先考虑已知事件对策。" },
  { q: "v1.1.2 改变了物品优先级吗？", a: "是的。鱼饵仅在钓到鱼时消耗，使钓鱼更经济。胶带修复变为可选，降低了其日常使用的紧迫性。救援几率提高，使信号枪更有价值。" },
];

export function ZhBestItemsPage() {
  return (
    <>
      <SEO
        title="最佳物品等级列表"
        description="Don't Sleep With The Fishes 中为前期生存、夜间事件、救援路线、长期生存和结局挑战评选最佳生存物品。"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Trophy className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">物品排名</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 最佳物品等级列表</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            基于事件对策和生存价值排名的物品等级列表。锚和胶带是<strong className="text-text-primary">最高优先级</strong>——两者都对抗可能结束游戏的夜间事件。
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>物品等级表</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 550 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>等级</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>物品</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>理由</th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>来源</th>
                  </tr>
                </thead>
                <tbody>
                  {tierList.map((row, i) => (
                    <tr key={`${row.tier}-${row.items}`} style={{ borderBottom: i < tierList.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-3 text-sm font-bold" style={{ color: row.tier === "S 级" ? "rgba(245,158,11,0.9)" : row.tier === "A 级" ? "rgba(52,211,153,0.9)" : row.tier === "B 级" ? "rgba(96,165,250,0.9)" : "rgba(122,146,170,0.9)", ...NUNITO }}>{row.tier}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.items}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.reason}</td>
                      <td className="py-3"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          <InfoCard>
            <h2 className="text-sm font-bold text-text-primary mb-3" style={NUNITO}>常见问题</h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="text-xs font-bold text-text-primary mb-1" style={NUNITO}>{item.q}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{item.a}</p>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>

        <div className="mt-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>相关指南</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { href: "/zh/items", label: "物品指南", desc: "完整物品目录" },
              { href: "/zh/events", label: "事件指南", desc: "夜间事件对策表" },
              { href: "/zh/items/heart-of-the-sea", label: "海洋之心", desc: "特殊物品追踪" },
              { href: "/zh/tips-tricks", label: "技巧与窍门", desc: "高级生存策略" },
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

        <div className="mt-6 text-xs" style={{ color: "rgba(122,146,170,0.75)", ...NUNITO }}>
          非官方粉丝攻略 &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">itch.io 官方游戏 <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
