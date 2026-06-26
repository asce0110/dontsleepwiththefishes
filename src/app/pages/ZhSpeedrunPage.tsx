"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { ChevronRight, Sparkles, ExternalLink, Timer } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const faq = [
  { q: "最高到达天数是多少？", a: "社区记录各不相同。官方 v1.1.2 现在在游戏中追踪最高到达天数。社区报告的最高天数通常需要截图/视频证据才能被验证。" },
  { q: "如何提交世界纪录？", a: "要提交纪录，请提供：游戏版本、到达天数、结局类型（如适用）、截图或视频证据以及游玩条件描述。纪录需要验证才能被接受。" },
  { q: "速通有分类吗？", a: "社区尚未为 Don't Sleep With The Fishes 建立正式的速通分类。目前的追踪主要集中在最高到达天数而非速度。" },
  { q: "v1.1.2 改变了纪录追踪吗？", a: "是的。官方 v1.1.2 添加了游戏内最高到达天数追踪器。这使得验证最高天数运行比依赖截图更加容易。" },
  { q: "最佳生存策略是什么？", a: "查看通关攻略和技巧与窍门页面获取逐日生存路线。关键物品：锚（对抗危险事件）、胶带（对抗诡异旋律）、信号枪（救援路线）。" },
];

export function ZhSpeedrunPage() {
  return (
    <>
      <SEO
        title="速通与世界纪录指南"
        description="追踪 Don't Sleep With The Fishes 的最高存活天数、社区生存纪录、验证要求、版本、截图、视频和已验证的通关纪录。"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Timer className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">纪录</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
            <SourceBadge source="Community" />
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 速通与世界纪录</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            追踪最高存活天数、社区生存纪录和已验证的通关。v1.1.2 现在包含<strong className="text-text-primary">游戏内最高到达天数追踪器</strong>。
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>纪录提交要求</h2>
            <ul className="space-y-2 text-sm text-text-secondary" style={NUNITO}>
              <li><strong>游戏版本：</strong>必须注明（如 v1.1.2）。</li>
              <li><strong>到达天数：</strong>最终死亡或结局天数。</li>
              <li><strong>结局类型：</strong>死亡、救援或其他。</li>
              <li><strong>证据：</strong>强烈推荐截图或视频。</li>
              <li><strong>条件：</strong>使用的物品、同伴、重要选择。</li>
            </ul>
          </InfoCard>

          <InfoCard variant="warning">
            <h2 className="text-sm font-semibold text-amber mb-2">v1.1.2 变更</h2>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
              官方 v1.1.2 添加了游戏内最高到达天数追踪。这使纪录验证更加可靠——现在游戏本身会追踪你到达的最高天数。社区纪录仍应附带证据进行交叉验证。
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
              { href: "/zh/achievements", label: "成就与记录", desc: "完成度与纪录追踪" },
              { href: "/zh/walkthrough", label: "通关攻略", desc: "逐日生存路线" },
              { href: "/zh/tips-tricks", label: "技巧与窍门", desc: "高级生存策略" },
              { href: "/zh/items/best-items", label: "最佳物品", desc: "物品等级列表" },
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
