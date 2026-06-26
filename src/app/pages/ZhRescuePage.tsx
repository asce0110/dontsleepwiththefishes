"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { AlertTriangle, ChevronRight, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const counterTable = [
  { item: "手电筒 (Flashlight)", when: "早期希望事件或想保存信号枪时", result: "可能引起注意，不保证成功", confidence: "Community" as const },
  { item: "信号枪 (Flare Gun)", when: "更强的救援尝试，尤其是留到后期使用时", result: "有救援几率", confidence: "Community" as const },
  { item: "无物品/忽略", when: "保留资源但失去救援机会", result: "不推荐用于救援路线", confidence: "Community" as const },
  { item: "v1.1.2 救援几率", when: "官方补丁说明", result: "救援结局几率略微提高", confidence: "Official" as const },
];

const faq = [
  { q: "如何让自己被看到？", a: "在希望事件期间，使用手电筒或信号枪向经过的飞机发出信号。事件文字会指示何时有飞机飞过头顶。" },
  { q: "应该用信号枪还是手电筒？", a: "可以在第一次希望事件使用手电筒，将信号枪留给后面可能更重要的救援机会。信号枪信号更强但是一次性使用的。" },
  { q: "救援是保证的吗？", a: "不是。救援是基于几率的。即使你使用了正确的物品，游戏也不保证救援。官方 v1.1.2 说明称救援几率略有提高，但并未变为保证。" },
  { q: "可以多次被救援吗？", a: "这尚未确认。救援结局是一个结局——一旦被救援，本次游戏就结束了。" },
  { q: "v1.1.2 改变了救援几率吗？", a: "是的。官方 v1.1.2 开发日志确认获得救援结局的几率略有提高。确切的百分比变化未公布。" },
];

export function ZhRescuePage() {
  return (
    <>
      <SEO
        title="让自己被看到攻略：希望、信号枪与救援"
        description="如何在 Don't Sleep With The Fishes 的希望事件中获得救援。了解何时使用信号枪、手电筒，以及 v1.1.2 中救援几率的运作方式。"
       
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.18)" }}>
              <ShieldCheck className="h-3.5 w-3.5" style={{ color: "rgba(52,211,153,0.9)" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(52,211,153,0.9)" }}>救援路线</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Official" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 让自己被看到救援攻略</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            在<strong className="text-text-primary">希望</strong>事件期间，可能有飞机飞过海面。社区报告称你可以使用<strong className="text-text-primary">手电筒或信号枪</strong>来让自己被看到，但救援<strong>不保证成功</strong>。官方 v1.1.2 说明确认获得救援结局的几率略有提高。
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>物品选择表</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 600 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>物品</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>使用时机</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>预期结果</th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>来源</th>
                  </tr>
                </thead>
                <tbody>
                  {counterTable.map((row, i) => (
                    <tr key={row.item} style={{ borderBottom: i < counterTable.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.item}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.when}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.result}</td>
                      <td className="py-3"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          <InfoCard variant="amber">
            <h2 className="text-sm font-semibold text-amber mb-2">关键策略：第一次希望 vs 后续希望</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(245,158,11,0.85)" }}>
              <li><strong>第一次希望事件（游戏早期）：</strong>考虑使用手电筒，将信号枪留到后面。</li>
              <li><strong>后续希望事件（游戏中后期）：</strong>如果你有信号枪，这是使用它的时机。</li>
              <li><strong>多次希望事件：</strong>社区报告表明希望可能多次出现。至少保留一个信号物品。</li>
            </ul>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>常见错误</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li>在非希望事件上使用信号枪，导致救援时无物可用</li>
              <li>认为信号枪一定等于救援（并非如此——它是基于几率的）</li>
              <li>完全忽视希望事件，认为救援不可能</li>
              <li>因为计划了不同结局路线而不携带任何信号物品</li>
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
              { href: "/zh/items", label: "信号枪", desc: "物品详情及所有用途" },
              { href: "/zh/items", label: "手电筒", desc: "物品详情及所有用途" },
              { href: "/zh/walkthrough", label: "通关攻略", desc: "逐日生存路线" },
              { href: "/zh/events", label: "所有事件", desc: "完整夜间事件对策表" },
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

        <div className="mt-6 text-xs" style={{ color: "rgba(42,62,90,0.7)", ...NUNITO }}>
          非官方粉丝攻略 &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">itch.io 官方游戏 <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
