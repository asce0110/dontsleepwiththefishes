"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Anchor, AlertTriangle, ChevronRight, Siren, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const counterTable = [
  { choice: "使用锚 (Anchor)", outcome: "存活；船只可能受到严重损坏；锚可能断裂", useWhen: "正常生存路线", confidence: "Community" as const },
  { choice: "使用已完成的海洋之心", outcome: "可能触发真结局/还债路线", useWhen: "隐藏结局路线", confidence: "Community" as const },
  { choice: "回去睡觉", outcome: "高死亡风险", useWhen: "不推荐", confidence: "Community" as const },
  { choice: "给鱼/食物", outcome: "仅玩家理论", useWhen: "暂不作为攻略呈现", confidence: "Unverified" as const },
  { choice: "使用鱼叉枪", outcome: "证据不足", useWhen: "暂不推荐", confidence: "Unverified" as const },
];

const faq = [
  { q: "遇到巨型鱿鱼该怎么办？", a: "社区报告称使用锚来生存。已完成的海洋之心可能开启真结局路线，但这尚未被独立验证。" },
  { q: "\"还清你的债务\"是什么意思？", a: "这个提示似乎与巨型鱿鱼遭遇相关。社区玩家仍在追踪如何解决它——请参阅还债追踪页面。" },
  { q: "锚能对付巨型鱿鱼吗？", a: "是的，根据社区报告。一位 Reddit 回复明确说向它投掷锚。本攻略尚未在游戏中进行验证。" },
  { q: "巨型鱿鱼与真结局有关联吗？", a: "社区理论认为已完成的海洋之心物品和巨型鱿鱼遭遇可能是真结局路线的一部分。这尚未得到官方确认。" },
  { q: "能给鱿鱼鱼或食物吗？", a: "这是来自 Reddit 的玩家理论。没有确认的证据表明给鱿鱼食物能解决遭遇或触发任何结局路线。不要依赖此方法。" },
  { q: "如果回去睡觉会怎样？", a: "社区报告表明在巨型鱿鱼事件中回去睡觉有高死亡风险。这是最不推荐的选项。" },
];

export function ZhGiantSquidPage() {
  return (
    <>
      <SEO
        title="巨型鱿鱼攻略：锚、还债与真结局"
        description="了解在 Don't Sleep With The Fishes 中巨型鱿鱼出现时该怎么做，包括锚对策、还债提示、海洋之心路线和真结局笔记。"
       
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">

        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Siren className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">夜间事件</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 巨型鱿鱼攻略</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            社区报告中最安全的巨型鱿鱼对策是<strong className="text-text-primary">锚</strong>。该事件似乎也与"还清你的债务"提示和已完成的海洋之心路线相关，但这些结局细节在游戏内验证前应被视为社区报告。
          </p>
        </div>

        <InfoCard variant="warning" className="mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
            <div>
              <h3 className="text-sm font-semibold text-amber mb-1">剧透警告</h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.75)" }}>本页讨论结局路线。如果你想自己探索巨型鱿鱼遭遇，请从<Link href="/zh/events" className="underline hover:text-amber">事件总览</Link>开始获取无剧透摘要。</p>
            </div>
          </div>
        </InfoCard>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>最佳对策表</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 600 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>选择</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>预期结果</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>使用场景</th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>来源</th>
                  </tr>
                </thead>
                <tbody>
                  {counterTable.map((row, i) => (
                    <tr key={row.choice} style={{ borderBottom: i < counterTable.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.choice}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.outcome}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.useWhen}</td>
                      <td className="py-3"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>不应做的事</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li>不要回去睡觉——社区报告显示高死亡风险</li>
              <li>不要认为给鱿鱼食物就能解决还债——这是未验证的玩家理论</li>
              <li>不要在缺乏证据的情况下对鱿鱼使用鱼叉枪</li>
              <li>除非接受高风险，否则不要在没有锚的情况下进入此事件</li>
            </ul>
          </InfoCard>

          <InfoCard variant="warning">
            <h2 className="text-sm font-semibold text-amber mb-2">常见错误</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(245,158,11,0.85)" }}>
              <li>在小事件上使用锚，然后对付鱿鱼或漩涡时没有锚可用</li>
              <li>认为还债 = 给鱼（这是猜测，未确认）</li>
              <li>将真结局路线视为保证已知的路径，而实际上仍在社区追踪中</li>
            </ul>
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
              { href: "/zh/endings/pay-debt", label: "还债路线", desc: "追踪债务解决路径" },
              { href: "/zh/items/heart-of-the-sea", label: "海洋之心", desc: "真结局路线的关键物品" },
              { href: "/zh/endings/true-ending", label: "真结局指南", desc: "社区理论与条件" },
              { href: "/zh/events/whirlpool", label: "漩涡攻略", desc: "另一个需要锚的事件" },
              { href: "/zh/events", label: "所有事件", desc: "完整夜间事件对策表" },
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

        <div className="mt-6 text-xs" style={{ color: "rgba(42,62,90,0.7)", ...NUNITO }}>
          非官方粉丝攻略 &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">itch.io 官方游戏 <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
