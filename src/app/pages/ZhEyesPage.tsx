"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Eye, ChevronRight, Sparkles, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const counterTable = [
  { choice: "保持清醒", outcome: "同伴存活；你醒来时体力较低", bestFor: "保护同伴", confidence: "Community" as const },
  { choice: "回去睡觉", outcome: "同伴可能死亡", bestFor: "有同伴时不推荐", confidence: "Community" as const },
  { choice: "无同伴在场", outcome: "需要更多测试", bestFor: "单人路线", confidence: "Unverified" as const },
];

const faq = [
  { q: "眼睛事件期间应该保持清醒吗？", a: "是的，根据社区报告。保持清醒可以保护你的同伴，但第二天你会体力较低。" },
  { q: "如果在眼睛事件中睡觉会怎样？", a: "社区报告称，如果你去睡觉，同伴可能会死亡。这是有同伴时风险最高的选择。" },
  { q: "眼睛事件能杀死你的同伴吗？", a: "是的，社区报告表明，如果你去睡觉，眼睛事件可能导致同伴死亡。" },
  { q: "如果没有同伴呢？", a: "单人路线的结果记录不足。标记为未验证——请谨慎对待。" },
  { q: "低体力后如何恢复？", a: "保持清醒后，你第二天会体力较低。优先进食和休息。在体力恢复之前避免额外任务。" },
];

export function ZhEyesPage() {
  return (
    <>
      <SEO
        title="眼睛事件攻略：保持清醒还是睡觉？"
        description="了解在 Don't Sleep With The Fishes 的眼睛事件中应该保持清醒还是睡觉，以及如何保护你的同伴。"
       
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Eye className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">夜间事件</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 眼睛事件攻略</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            在眼睛事件期间，社区报告中最安全的选择是<strong className="text-text-primary">保持清醒</strong>，尤其是当你有同伴时。回去睡觉可能导致同伴死亡，而保持清醒可以保护他们，但会让你体力较低。
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>选择对照表</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 550 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>选择</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>结果</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>最适合</th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>来源</th>
                  </tr>
                </thead>
                <tbody>
                  {counterTable.map((row, i) => (
                    <tr key={row.choice} style={{ borderBottom: i < counterTable.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.choice}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.outcome}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.bestFor}</td>
                      <td className="py-3"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          <InfoCard variant="warning">
            <h2 className="text-sm font-semibold text-amber mb-2">同伴风险</h2>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
              社区来源（Fandom）报告称眼睛事件通常针对<strong>同伴</strong>。如果你有同伴，强烈建议保持清醒。该事件在单人路线中的结果尚未独立验证——任何单人策略建议在测试前都应标记为未验证。
            </p>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>常见错误</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li>有同伴时去睡觉——同伴死亡风险最高</li>
              <li>认为保持清醒没有代价——第二天你会体力较低</li>
              <li>没有为眼睛事件后的低体力日做计划</li>
              <li>将单人路线结果视为已确认（它们是未验证的）</li>
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
              { href: "/zh/guide", label: "新手指南", desc: "同伴选择与生存" },
              { href: "/zh/characters/captain-whiskers", label: "威斯克船长", desc: "猫咪同伴详情" },
              { href: "/zh/events", label: "所有事件", desc: "完整夜间事件对策表" },
              { href: "/zh/walkthrough", label: "通关攻略", desc: "逐日生存路线" },
              { href: "/zh/endings", label: "结局指南", desc: "所有结局及条件" },
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
