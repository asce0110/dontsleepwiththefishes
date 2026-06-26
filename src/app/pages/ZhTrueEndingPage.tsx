"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { AlertTriangle, ChevronRight, Sparkles, ExternalLink, Star } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const faq = [
  { q: "如何达成真结局？", a: "真结局路线尚未被社区完全确认。当前理论涉及海洋之心物品、还债步骤、巨型鱿鱼遭遇，可能还有幽灵船。所有这些仍在社区追踪中。" },
  { q: "真结局需要海洋之心吗？", a: "社区理论强烈认为已完成的海洋之心物品是真结局路线所必需的。确切的获取和完成步骤仍在验证中。" },
  { q: "真结局和救援结局一样吗？", a: "不一样。救援结局是通过希望事件使用信号枪/手电筒触发的。真结局是社区仍在寻找的独立隐藏结局。" },
  { q: "真结局在 v1.1.2 中可以获得吗？", a: "社区尚未确认真结局是否在当前版本中完全可达成。一些玩家认为可能需要未来的更新才能激活全部条件。" },
  { q: "哪里可以找到真结局的最新信息？", a: "查看本页面和海洋之心追踪页面。社区在 Reddit 和 itch.io 评论区活跃地讨论真结局理论。" },
];

export function ZhTrueEndingPage() {
  return (
    <>
      <SEO
        title="真结局攻略：条件、理论与追踪"
        description="追踪 Don't Sleep With The Fishes 的真结局条件、海洋之心线索、还债关联、剧透警告以及已验证路线状态。"
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Star className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">隐藏结局</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 真结局攻略</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            真结局是社区仍在积极寻找的<strong className="text-text-primary">隐藏结局</strong>。当前理论涉及海洋之心物品、还债步骤、巨型鱿鱼遭遇和可能的幽灵船。大部分信息是社区追踪的——在游戏内确认前请谨慎对待。
          </p>
        </div>

        <InfoCard variant="warning" className="mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
            <div>
              <h3 className="text-sm font-semibold text-amber mb-1">剧透警告：本页讨论结局路线</h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.75)" }}>如果你想自己探索结局，请从<Link href="/zh/endings" className="underline hover:text-amber">结局总览</Link>开始获取无剧透摘要。</p>
            </div>
          </div>
        </InfoCard>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>社区理论要件</h2>
            <ul className="space-y-2 text-sm text-text-secondary" style={NUNITO}>
              <li><strong>海洋之心：</strong>必须完成物品。可能需要在特定事件中使用。</li>
              <li><strong>还债：</strong>可能是在巨型鱿鱼遭遇中解决还债提示。</li>
              <li><strong>巨型鱿鱼：</strong>遭遇并使用已完成的海洋之心（而非锚）。</li>
              <li><strong>幽灵船：</strong>可能是真结局序列的一部分。关联尚未确认。</li>
            </ul>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>常见误区</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li>将救援结局误认为真结局——它们是不同的结局</li>
              <li>认为真结局已被社区完全确认——仍在追踪中</li>
              <li>依赖单一来源而不交叉验证——使用来源可信度标签</li>
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
              { href: "/zh/items/heart-of-the-sea", label: "海洋之心", desc: "关键物品获取与使用" },
              { href: "/zh/endings/pay-debt", label: "还债路线", desc: "债务解决方案追踪" },
              { href: "/zh/events/giant-squid", label: "巨型鱿鱼攻略", desc: "遭遇对策" },
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
