"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { ChevronRight, Sparkles, ExternalLink, FileText } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const changes = [
  { change: "鱼饵仅在钓到鱼时消耗", impact: "钓鱼更经济；鱼饵现在可以多次使用直到成功", confidence: "Official" as const },
  { change: "胶带修复使用变为可选", impact: "修复不再强制消耗胶带；可以选择不修复以节省胶带", confidence: "Official" as const },
  { change: "宝箱中胶带出现几率降低", impact: "胶带更难从宝箱中获得；优先考虑其他获取方式", confidence: "Official" as const },
  { change: "游泳圈加入宝箱", impact: "新物品；可能提供漂浮或安全相关的好处", confidence: "Official" as const },
  { change: "救援结局几率提高", impact: "通过希望事件获得救援的几率略微增加", confidence: "Official" as const },
  { change: "威斯克船长钓鱼+1%几率", impact: "猫咪同伴现在提供小的钓鱼加成", confidence: "Official" as const },
  { change: "剧情物品保存在结局标签页中", impact: "有助于追踪完成度；已收集的剧情物品现在被记录", confidence: "Official" as const },
  { change: "最高到达天数被追踪", impact: "游戏现在记录你到达的最高天数，方便速通和纪录追踪", confidence: "Official" as const },
  { change: "新增3个夜间事件", impact: "新的夜间事件增加挑战性；对策仍在社区追踪中", confidence: "Official" as const },
  { change: "引入同伴支援动作", impact: "同伴现在可以在某些情况下提供支援动作", confidence: "Official" as const },
];

const faq = [
  { q: "v1.1.2 改变了什么？", a: "主要变更：鱼饵仅在成功时消耗、胶带修复变为可选、救援几率提高、威斯克船长钓鱼+1%、最高天数追踪、3个新夜间事件以及同伴支援动作。查看上方完整表格。" },
  { q: "这是官方补丁说明吗？", a: "这是基于 DopplerGhost 官方 v1.1.2 开发日志的概述，并附带了本攻略的策略影响分析。" },
  { q: "v1.1.2 后我应该改变策略吗？", a: "是的。鱼饵现在更经济——更频繁地钓鱼。胶带修复可选，降低了日常消耗压力。救援几率提高，使信号枪更具价值。查看受影响的攻略页面。" },
  { q: "在哪里可以阅读官方补丁说明？", a: "前往 DopplerGhost 的 itch.io 开发日志：https://dopplerghost.itch.io/dont-sleep-with-the-fishes/devlog/1546268/version-112" },
];

export function ZhVersion112Page() {
  return (
    <>
      <SEO
        title="v1.1.2 更新说明详解"
        description="了解 Don't Sleep With The Fishes v1.1.2 补丁对鱼饵、胶带、宝箱、救援几率、威斯克船长、纪录、夜间事件和支援的改动。"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <FileText className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">补丁说明</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> 官方
            </span>
            <SourceBadge source="Official" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes v1.1.2 更新说明详解</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            版本 1.1.2 引入了多项机制变更，影响物品策略、生存路线和结局几率。所有变更均来自<strong className="text-text-primary">DopplerGhost 的官方开发日志</strong>。
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>完整变更列表</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 600 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>变更</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>策略影响</th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>来源</th>
                  </tr>
                </thead>
                <tbody>
                  {changes.map((row, i) => (
                    <tr key={row.change} style={{ borderBottom: i < changes.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.change}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.impact}</td>
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
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>受影响的攻略页面</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { href: "/zh/items", label: "物品指南", desc: "更新物品优先级" },
              { href: "/zh/events", label: "事件指南", desc: "新事件与新对策" },
              { href: "/zh/endings/rescue", label: "救援攻略", desc: "更新救援几率" },
              { href: "/zh/characters/captain-whiskers", label: "威斯克船长", desc: "猫咪钓鱼加成" },
              { href: "/zh/achievements", label: "成就与记录", desc: "天数追踪与纪录" },
              { href: "/zh/tips-tricks", label: "技巧与窍门", desc: "更新策略建议" },
              { href: "/zh/changelog", label: "更新日志", desc: "百科变更历史" },
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
          非官方粉丝攻略 &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">itch.io 官方游戏 <ExternalLink className="inline h-3 w-3" /></a> &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes/devlog/1546268/version-112" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">官方 v1.1.2 开发日志 <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
