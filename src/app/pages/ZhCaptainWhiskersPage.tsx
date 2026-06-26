"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { ChevronRight, Sparkles, ExternalLink, Cat } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const faq = [
  { q: "Captain Whiskers（威斯克船长）有什么作用？", a: "在 v1.1.2 中，Captain Whiskers 提供 +1% 钓鱼几率加成。这是一只猫咪同伴，如果你选择带上船，会提供一个小小的钓鱼优势。" },
  { q: "应该带上威斯克船长吗？", a: "如果你计划经常钓鱼，+1% 的加成虽然很小但免费。如果你优先考虑其他物品且空间有限，猫咪是可以跳过的。这纯粹是可选的。" },
  { q: "v1.1.2 中猫咪有什么变化？", a: "官方 v1.1.2 开发日志确认 Captain Whiskers 现在提供 +1% 钓鱼几率。在此之前，猫咪可能没有游戏机制上的好处。" },
  { q: "威斯克船长有剧情互动吗？", a: "有限的剧情互动可能存在，但猫咪的主要游戏机制效果是钓鱼加成。社区尚未报告任何重大剧情线。" },
  { q: "威斯克船长会占用物品栏吗？", a: "猫咪被视为同伴，可能不会占用标准物品栏位。具体机制取决于你的游戏选择和同伴系统。" },
];

export function ZhCaptainWhiskersPage() {
  return (
    <>
      <SEO
        title="Captain Whiskers（威斯克船长）攻略"
        description="了解 Don't Sleep With The Fishes 中 Captain Whiskers 的作用、v1.1.2 对钓鱼几率的改动以及这只猫是否值得带上船。"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Cat className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">同伴</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Official" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Captain Whiskers（威斯克船长）攻略</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            在 v1.1.2 中，Captain Whiskers 提供<strong className="text-text-primary">+1% 钓鱼几率加成</strong>。这是一个小的免费优势，如果你计划钓鱼的话——但猫咪是完全可选的。
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>快速概览</h2>
            <ul className="space-y-2 text-sm text-text-secondary" style={NUNITO}>
              <li><strong>类型：</strong>猫咪同伴</li>
              <li><strong>加成：</strong>+1% 钓鱼几率（v1.1.2 新增）</li>
              <li><strong>消耗：</strong>无已知消耗</li>
              <li><strong>占用空间：</strong>不占用物品栏位（同伴槽位）</li>
              <li><strong>推荐度：</strong>可选——小加成，无负面影响</li>
            </ul>
          </InfoCard>

          <InfoCard variant="warning">
            <h2 className="text-sm font-semibold text-amber mb-2">v1.1.2 变更</h2>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
              官方 v1.1.2 开发日志（DopplerGhost）确认 Captain Whiskers 现在提供 +1% 钓鱼几率。在此之前，猫咪可能主要是装饰性的或剧情向的。此变更是官方确认的机制添加。
            </p>
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
              { href: "/zh/characters", label: "角色指南", desc: "所有角色与同伴" },
              { href: "/zh/items", label: "物品指南", desc: "鱼竿等钓鱼物品" },
              { href: "/zh/guide", label: "新手指南", desc: "同伴选择与生存" },
              { href: "/zh/events/eyes", label: "眼睛事件攻略", desc: "同伴保护策略" },
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
