"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { AlertTriangle, ChevronRight, Sparkles, ExternalLink, DollarSign } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const faq = [
  { q: "\"还清你的债务\"是什么意思？", a: "这是巨型鱿鱼遭遇中出现的一个提示。社区玩家正在追踪如何解决它——可能与海洋之心物品和真结局路线相关。" },
  { q: "如何还债？", a: "目前没有确认的方法。社区理论认为可能需要已完成的海洋之心物品在巨型鱿鱼事件中使用。这尚未在游戏内验证。" },
  { q: "还债与真结局有关联吗？", a: "社区理论认为是的。还债提示、海洋之心和巨型鱿鱼可能都是真结局路线的一部分。目前这是推测。" },
  { q: "需要携带什么物品？", a: "根据社区报告，锚是巨型鱿鱼的基础生存对策。海洋之心可能在还债路线中发挥作用，但这是未验证的。" },
  { q: "还债是必需的结局步骤吗？", a: "不确定。一些社区路线暗示还债是解锁真结局之前的必要步骤。将其视为社区追踪的主题。" },
];

export function ZhPayDebtPage() {
  return (
    <>
      <SEO
        title="还债攻略：追踪债务解决方案"
        description="追踪 Don't Sleep With The Fishes 中的还债笔记、巨型鱿鱼关联、海洋之心碎片线索、真结局理论与验证状态。"
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <DollarSign className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">结局路线</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 还债攻略</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            还债提示出现在<strong className="text-text-primary">巨型鱿鱼</strong>遭遇中。社区仍在追踪如何解决它——可能与海洋之心物品和真结局路线相关。本页追踪已知线索、社区理论和验证状态。
          </p>
        </div>

        <InfoCard variant="warning" className="mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
            <div>
              <h3 className="text-sm font-semibold text-amber mb-1">页面状态：社区追踪</h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.75)" }}>本页面追踪社区理论和未验证路线。在没有可靠游戏内确认之前，不要将任何内容视为已确认攻略。</p>
            </div>
          </div>
        </InfoCard>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>已知线索</h2>
            <ul className="space-y-2 text-sm text-text-secondary" style={NUNITO}>
              <li><strong>巨型鱿鱼遭遇：</strong>事件中出现"还清你的债务"提示。</li>
              <li><strong>海洋之心：</strong>可能需要在遭遇前完成此物品。</li>
              <li><strong>真结局关联：</strong>社区理论认为还债是真结局的前置步骤。</li>
              <li><strong>食物/鱼理论：</strong>有玩家猜测给鱿鱼食物可以还债——未经确认。</li>
            </ul>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>未验证的理论（请勿依赖）</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li>"给鱿鱼食物即可还债"——未经确认，纯玩家理论</li>
              <li>"还债会自动触发真结局"——未经确认</li>
              <li>"还债后可以跳过其他结局条件"——未经验证</li>
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
              { href: "/zh/events/giant-squid", label: "巨型鱿鱼攻略", desc: "基础遭遇对策" },
              { href: "/zh/items/heart-of-the-sea", label: "海洋之心", desc: "关键物品追踪" },
              { href: "/zh/endings/true-ending", label: "真结局指南", desc: "结局路线追踪" },
              { href: "/zh/endings", label: "结局指南", desc: "所有结局及条件" },
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
