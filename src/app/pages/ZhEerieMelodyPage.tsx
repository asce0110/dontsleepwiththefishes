"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Waves, AlertTriangle, ChevronRight, Sparkles, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const counterTable = [
  { item: "胶带 (Duct Tape)", result: "已知最安全的对策", cost: "消耗", confidence: "Community" as const },
  { item: "水桶 (Bucket)", result: "可作为对策使用", cost: "可能损坏", confidence: "Community" as const },
  { item: "雨伞 (Umbrella)", result: "可应对事件", cost: "可能损坏船只", confidence: "Community" as const },
  { item: "手电筒 (Flashlight)", result: "危险反应", cost: "避免使用", confidence: "Community" as const },
  { item: "望远镜 (Spyglass)", result: "危险反应", cost: "避免使用", confidence: "Community" as const },
];

const faq = [
  { q: "诡异旋律该用什么物品？", a: "社区报告推荐使用胶带作为最安全的对策。水桶和雨伞是备选方案。" },
  { q: "胶带能阻止塞壬歌声吗？", a: "根据社区报告，是的——胶带被认为是对诡异旋律/塞壬事件的最佳对策。" },
  { q: "水桶能阻止诡异旋律吗？", a: "可以，社区报告称水桶有效，但可能会在此过程中损坏。" },
  { q: "应该用手电筒应对诡异旋律吗？", a: "不。社区报告称手电筒和望远镜会触发危险的塞壬反应。请避免使用两者。" },
  { q: "诡异旋律和漏水是同一个事件吗？", a: "不是。诡异旋律是塞壬/旋律事件，漏水是单独的漏水事件——请参阅相关指南。胶带和水桶可以应对两者，但它们是不同的事件。" },
];

export function ZhEerieMelodyPage() {
  return (
    <>
      <SEO
        title="诡异旋律攻略：胶带、水桶与塞壬对策"
        description="如何在 Don't Sleep With The Fishes 中应对诡异旋律事件。了解为什么胶带、水桶或雨伞比手电筒或望远镜更安全。"
       
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Waves className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">夜间事件</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 诡异旋律攻略</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            对于诡异旋律事件，社区报告推荐使用<strong className="text-text-primary">胶带、水桶或雨伞</strong>。避免使用手电筒或望远镜，因为这些选择可能触发危险的塞壬结局。请勿将此事件与漏水事件混淆——它们是不同的遭遇。
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>快速答案</h2>
            <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              对于诡异旋律，社区报告推荐使用<strong className="text-text-primary">胶带、水桶或雨伞</strong>。避免使用手电筒或望远镜，因为它们可能触发危险的塞壬结局。此对策来自社区报告，应在当前游戏版本中进行验证。
            </p>
          </InfoCard>

          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>物品对策表</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 550 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>物品</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-tertiary hidden sm:table-cell" style={NUNITO}>结果</th>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-tertiary hidden md:table-cell" style={NUNITO}>代价/风险</th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>来源</th>
                  </tr>
                </thead>
                <tbody>
                  {counterTable.map((row, i) => (
                    <tr key={row.item} style={{ borderBottom: i < counterTable.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.item}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.result}</td>
                      <td className="py-3 pr-3 text-xs text-text-tertiary hidden md:table-cell" style={NUNITO}>{row.cost}</td>
                      <td className="py-3"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          <InfoCard variant="warning">
            <h2 className="text-base font-bold text-amber mb-1" style={NUNITO}>为什么诡异旋律不是漏水事件</h2>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
              诡异旋律是一个<strong>塞壬/旋律事件</strong>，不是船只漏水。胶带和水桶恰好可以应对两者，但这些事件有不同的触发条件和失败结果。如果你在寻找漏水修复方法，那是另一个不同的遭遇。
            </p>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>应避免的物品</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li><strong>手电筒：</strong>社区报告称会触发危险的塞壬反应。</li>
              <li><strong>望远镜：</strong>同样——据报会造成负面结果。</li>
              <li>如果你只有这些物品，回去睡觉可能是风险较小的选择——但这一点尚未验证。</li>
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
              { href: "/zh/items", label: "胶带", desc: "物品详情及所有用途" },
              { href: "/zh/items", label: "水桶", desc: "物品详情及所有用途" },
              { href: "/zh/events", label: "所有事件", desc: "完整夜间事件对策表" },
              { href: "/zh/guide", label: "新手指南", desc: "首次游玩生存技巧" },
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
