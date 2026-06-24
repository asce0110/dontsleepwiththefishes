"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Skull, ChevronRight, Sparkles, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const counterTable = [
  { choice: "驱赶海鸥", outcome: "移除或阻止其停留", useWhen: "避免坏结局", confidence: "Community" as const },
  { choice: "喂食海鸥", outcome: "它可能留下来并消耗食物", useWhen: "仅在测试同伴路线时", confidence: "Community" as const },
  { choice: "让太多海鸥留下", outcome: "可能触发坏结局", useWhen: "避免", confidence: "Community" as const },
];

const faq = [
  { q: "应该喂食海鸥吗？", a: "只有在你接受食物消耗并想测试同伴路线时才喂。对于以生存为目标的游戏，赶走它。" },
  { q: "如何避免海鸥结局？", a: "已知最安全的策略是赶走海鸥，而不是让太多海鸥留在船上。坏结局似乎在太多海鸥聚集时触发。" },
  { q: "海鸥能帮助你吗？", a: "保留海鸥没有确认的好处。它会消耗食物，并可能导致坏结局。关于海鸥同伴的社区理论是未验证的。" },
  { q: "多少只海鸥算太多？", a: "这个阈值尚未确认。一些玩家在2-3只海鸥后报告问题，但这因人而异。最安全的方法是在你不专门测试海鸥路线时全部赶走。" },
  { q: "喂食后能赶走海鸥吗？", a: "这尚未确认。社区报告表明一旦海鸥留下，可能很难或不可能移除。" },
];

export function ZhSeagullPage() {
  return (
    <>
      <SEO
        title="海鸥攻略：如何避免坏结局"
        description="了解 Don't Sleep With The Fishes 中海鸥事件的机制，是喂食还是驱赶海鸥，以及如何避免海鸥坏结局。"
       
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Skull className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">夜间事件</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 海鸥攻略</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            如果你想避免海鸥坏结局，已知最安全的策略是<strong className="text-text-primary">赶走海鸥</strong>，而不是让太多海鸥留在船上。喂食海鸥会让它留下来，但也会消耗食物。
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>喂食 vs 驱赶对照表</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 550 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>选择</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-tertiary hidden sm:table-cell" style={NUNITO}>结果</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-tertiary hidden md:table-cell" style={NUNITO}>使用场景</th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>来源</th>
                  </tr>
                </thead>
                <tbody>
                  {counterTable.map((row, i) => (
                    <tr key={row.choice} style={{ borderBottom: i < counterTable.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.choice}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.outcome}</td>
                      <td className="py-3 pr-3 text-xs text-text-tertiary hidden md:table-cell" style={NUNITO}>{row.useWhen}</td>
                      <td className="py-3"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          <InfoCard variant="warning">
            <h2 className="text-sm font-semibold text-amber mb-2">坏结局如何发生</h2>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
              如果你持续喂食或让太多海鸥留下，海鸥会变得危险。社区报告表明坏结局在海鸥超过某个阈值时触发，但确切数量尚未确认。这不是一个即时失败事件——它会在多次遭遇中逐渐累积。
            </p>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>常见错误</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li>因为觉得可爱而喂食每只海鸥——这可能导致坏结局</li>
              <li>认为海鸥会提供好处——没有确认的好处存在</li>
              <li>忽视喂食海鸥带来的食物消耗</li>
              <li>不追踪船上有多少只海鸥</li>
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
              { href: "/zh/endings", label: "结局指南", desc: "所有结局包括坏结局" },
              { href: "/zh/events", label: "所有事件", desc: "完整夜间事件对策表" },
              { href: "/zh/guide", label: "新手指南", desc: "首次游玩生存技巧" },
              { href: "/zh/items", label: "物品指南", desc: "食物物品与资源管理" },
              { href: "/zh/walkthrough", label: "通关攻略", desc: "逐日生存路线" },
            ].map(({ href, label, desc }) => (
              <Link key={label} href={href} className="group flex items-center justify-between gap-2 rounded-xl border px-4 py-3 transition-all duration-200" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,14,28,1)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.30)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,31,56,1)"; }}>
                <div>
                  <div className="text-sm font-medium text-text-primary group-hover:text-amber transition-colors">{label}</div>
                  <div className="text-xs text-text-tertiary">{desc}</div>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-text-muted group-hover:text-amber transition-colors" />
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
