"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Anchor, Compass, ChevronRight, Sparkles, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const counterTable = [
  { choice: "使用锚 (Anchor)", outcome: "稳定船只/防止严重损坏", risk: "锚可能后续无法使用", confidence: "Community" as const },
  { choice: "没有锚", outcome: "船只可能受到严重损坏", risk: "高", confidence: "Community" as const },
  { choice: "第二天修复", outcome: "如果资源允许则从损坏中恢复", risk: "消耗体力", confidence: "Community" as const },
];

const faq = [
  { q: "漩涡该用什么物品？", a: "锚是已知最安全的对策。没有锚，船只会受到严重损坏，你需要第二天进行修复。" },
  { q: "锚值得携带吗？", a: "是的。锚与巨型鱿鱼和漩涡相关——两个最危险的事件。将锚视为 S 级生存物品。" },
  { q: "如果没有锚会怎样？", a: "船只可能受到严重损坏。你需要消耗体力和可能的胶带在第二天进行修复。如果船只已经受损，这可能是致命的。" },
  { q: "漩涡能摧毁船只吗？", a: "是的，社区报告表明漩涡事件失败（无锚+不修复）可能导致船只被摧毁。" },
  { q: "应该把锚留给巨型鱿鱼吗？", a: "两个事件没有锚都可能导致游戏结束。这就是为什么锚是 S 级——理想情况下你需要为两者都准备一个。如果只能覆盖一个，根据你当前路线最可能遇到的事件来优先选择。" },
];

export function ZhWhirlpoolPage() {
  return (
    <>
      <SEO
        title="漩涡攻略：如何使用锚"
        description="如何在 Don't Sleep With The Fishes 中应对漩涡事件。了解何时使用锚、没有锚会怎样以及如何从船只损坏中恢复。"
       
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Compass className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">夜间事件</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 漩涡攻略</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            漩涡已知最安全的对策是<strong className="text-text-primary">锚</strong>。没有锚，船只可能受到严重损坏，因此这个事件是将锚视为高优先级生存物品的原因之一。
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>对策表</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 550 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>选择</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>结果</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>风险</th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>来源</th>
                  </tr>
                </thead>
                <tbody>
                  {counterTable.map((row, i) => (
                    <tr key={row.choice} style={{ borderBottom: i < counterTable.length - 1 ? "1px solid rgba(245,158,11,0.06)" : "none" }}>
                      <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.choice}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.outcome}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.risk}</td>
                      <td className="py-3"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          <InfoCard variant="warning">
            <h2 className="text-sm font-semibold text-amber mb-2">锚的优先级</h2>
            <p className="text-xs leading-relaxed mb-2" style={{ color: "rgba(245,158,11,0.85)" }}>
              锚与<strong>巨型鱿鱼和漩涡</strong>相关——两个最危险的夜间事件。没有锚，两者都可能摧毁你的船只。这使锚成为 S 级物品，应在每次游戏时尽可能携带。
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.65)" }}>
              社区来源（Fandom）也将锚与不安的海浪关联，但这尚未由本攻略独立验证。
            </p>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>常见错误</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li>因为没有携带锚，以为其他物品能应对漩涡</li>
              <li>在小事件上使用锚，然后对付漩涡或巨型鱿鱼时没有锚可用</li>
              <li>在没有锚的情况下从漩涡中幸存后不修复船只</li>
              <li>在漩涡期间睡觉——社区报告称这极其危险</li>
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
              { href: "/zh/events/giant-squid", label: "巨型鱿鱼攻略", desc: "另一个需要锚的事件" },
              { href: "/zh/items", label: "锚 (Anchor)", desc: "物品详情及所有用途" },
              { href: "/zh/items", label: "胶带 (Duct Tape)", desc: "用于事件后船只修复" },
              { href: "/zh/events", label: "所有事件", desc: "完整夜间事件对策表" },
              { href: "/zh/walkthrough", label: "通关攻略", desc: "逐日生存路线" },
            ].map(({ href, label, desc }) => (
              <Link key={label} href={href} className="group flex items-center justify-between gap-2 rounded-xl border px-4 py-3 active:scale-[0.98] transition-all duration-200" style={{ borderColor: "rgba(245,158,11,0.09)", background: "rgba(8,14,28,1)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.30)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.09)"; }}>
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
