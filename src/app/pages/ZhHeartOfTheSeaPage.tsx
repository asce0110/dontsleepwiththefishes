"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { AlertTriangle, ChevronRight, Sparkles, ExternalLink, Gem } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const faq = [
  { q: "什么是海洋之心？", a: "海洋之心是一个特殊物品，社区认为与真结局路线和还债机制相关。它不是普通生存物品——似乎有剧情/结局意义。" },
  { q: "如何获得海洋之心？", a: "获取方法仍在社区追踪中。理论涉及收集碎片或完成特定游戏内条件。尚未有确认的获取步骤。" },
  { q: "海洋之心有什么用？", a: "社区理论认为已完成的海洋之心可能在巨型鱿鱼遭遇中使用，以触发还债选项或推进真结局路线。这未经确认。" },
  { q: "海洋之心和还债有关联吗？", a: "理论认为是的。还债提示出现在巨型鱿鱼遭遇中，海洋之心可能是解决该提示所需的关键物品。" },
  { q: "海洋之心在哪里可以找到？", a: "具体位置未知。社区正在追踪线索。查看社区讨论和本页面获取最新信息。" },
];

export function ZhHeartOfTheSeaPage() {
  return (
    <>
      <SEO
        title="海洋之心攻略"
        description="追踪 Don't Sleep With The Fishes 中海洋之心的线索、可能的真结局关联、巨型鱿鱼路线笔记以及来源可信度标签。"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Gem className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">特殊物品</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 海洋之心攻略</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            海洋之心是一个<strong className="text-text-primary">特殊物品</strong>，社区认为与真结局路线相关。获取方法、具体用途和结局条件仍在社区追踪中。大部分信息是社区理论——在游戏内确认前请谨慎对待。
          </p>
        </div>

        <InfoCard variant="warning" className="mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
            <div>
              <h3 className="text-sm font-semibold text-amber mb-1">页面状态：社区追踪</h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.75)" }}>海洋之心的大部分信息来自社区理论和报告。在没有可靠游戏内确认之前，不要将任何内容视为已确认攻略。</p>
            </div>
          </div>
        </InfoCard>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>已知线索</h2>
            <ul className="space-y-2 text-sm text-text-secondary" style={NUNITO}>
              <li><strong>物品类型：</strong>特殊/剧情物品，非标准生存工具。</li>
              <li><strong>真结局关联：</strong>强烈认为与真结局路线相关。</li>
              <li><strong>巨型鱿鱼：</strong>可能在遭遇中使用以触发还债选项。</li>
              <li><strong>完成要求：</strong>可能需要收集碎片或满足条件才能"完成"。</li>
            </ul>
          </InfoCard>

          <InfoCard variant="danger">
            <h2 className="text-sm font-bold mb-2" style={{ color: "rgba(248,113,113,1)", ...NUNITO }}>未验证的理论</h2>
            <ul className="space-y-1.5 text-xs" style={{ color: "rgba(248,113,113,0.85)" }}>
              <li>确切的获取步骤——未确认</li>
              <li>是否消耗品或可重复使用——未确认</li>
              <li>是否在 v1.1.2 中完全可获取——未确认</li>
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
              { href: "/zh/endings/true-ending", label: "真结局指南", desc: "结局路线追踪" },
              { href: "/zh/endings/pay-debt", label: "还债路线", desc: "债务解决方案追踪" },
              { href: "/zh/events/giant-squid", label: "巨型鱿鱼攻略", desc: "遭遇对策" },
              { href: "/zh/items", label: "物品指南", desc: "完整物品目录" },
            ].map(({ href, label, desc }) => (
              <Link key={label} href={href} className="group flex items-center justify-between gap-2 rounded-xl border px-4 py-3 transition-all duration-200" style={{ borderColor: "rgba(245,158,11,0.09)", background: "rgba(8,14,28,1)" }}
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
