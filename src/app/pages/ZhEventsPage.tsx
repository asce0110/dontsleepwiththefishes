"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import type { Confidence } from "../components/ui/SourceBadge";
import Link from "next/link";
import { AlertTriangle, Sparkles, ChevronRight, Siren, Anchor, ShieldCheck } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface EventRow {
  event: string;
  bestCounter: string;
  backup: string;
  avoid: string;
  result: string;
  searchIntent: string;
  confidence: Confidence;
  href: string;
}

const events: EventRow[] = [
  {
    event: "Giant Squid(巨型鱿鱼)",
    bestCounter: "用 Anchor(锚) 生存；完成 Heart of the Sea(海洋之心) 走真结局(True Ending)路线",
    backup: "如果受损，第二天维修船只",
    avoid: "回去睡觉",
    result: "死亡风险、船只受损或真结局路线",
    searchIntent: "还债、真结局、巨型鱿鱼",
    confidence: "Community",
    href: "/events/giant-squid",
  },
  {
    event: "Hope(希望信号)",
    bestCounter: "Flashlight(手电筒) 或 Flare Gun(信号枪)",
    backup: "如果预期后续有救援机会，保留 Flare Gun",
    avoid: "忽视飞机",
    result: "概率性救援路线",
    searchIntent: "让自己可见、救援路线",
    confidence: "Community",
    href: "/endings/rescue",
  },
  {
    event: "Seagull(海鸥)",
    bestCounter: "若想避免坏结局就驱赶它",
    backup: "只有接受食物消耗时才喂食",
    avoid: "让太多海鸥停留",
    result: "可能导致坏结局 / 资源消耗",
    searchIntent: "避免海鸥结局",
    confidence: "Community",
    href: "/events/seagull",
  },
  {
    event: "Eerie Melody(诡异旋律)",
    bestCounter: "Duct Tape(胶带)",
    backup: "Bucket(水桶) / Umbrella",
    avoid: "Flashlight / Spyglass(望远镜)",
    result: "避免塞壬伤害或死亡",
    searchIntent: "诡异旋律、塞壬、胶带",
    confidence: "Community",
    href: "/events/eerie-melody",
  },
  {
    event: "Eyes(眼睛)",
    bestCounter: "保持清醒",
    backup: "暂无已知",
    avoid: "有同伴时去睡觉",
    result: "船员存活，但你醒来时体力低下",
    searchIntent: "眼睛事件、保护船员",
    confidence: "Community",
    href: "/events/eyes",
  },
  {
    event: "Whirlpool(漩涡)",
    bestCounter: "Anchor",
    backup: "受损后立即维修",
    avoid: "没有锚 / 睡着不管",
    result: "防止或减少严重的船只损坏",
    searchIntent: "漩涡、锚的使用、船只损坏",
    confidence: "Community",
    href: "/events/whirlpool",
  },
];

const riskColors: Record<string, string> = {
  Extreme: "rgba(239,68,68,0.90)",
  High: "rgba(248,113,113,0.85)",
  Medium: "rgba(251,191,36,0.85)",
  Low: "rgba(52,211,153,0.85)",
};

function EventFAQSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Don't Sleep With The Fishes 中的夜间事件是什么？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "夜间事件会打断你的睡眠，迫使你选择物品、保持清醒、发出求救信号或冒险回去睡觉。每个事件考验你库存的不同部分：Anchor 抵御船只损毁威胁，Flare Gun 和 Flashlight 帮助救援事件，Duct Tape 和 Bucket 解决某些危险事件，保持清醒有时可以保护船员。"
        }
      },
      {
        "@type": "Question",
        "name": "在 Don't Sleep With The Fishes 中遇到 Giant Squid 该怎么办？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "社区报告建议使用 Anchor 作为最安全的生存对策。完成的 Heart of the Sea 可能与 True Ending 路线相关，但该路线应在被确认为准之前进行验证。"
        }
      },
      {
        "@type": "Question",
        "name": "如何在 Don't Sleep With The Fishes 中让自己可见？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "在 Hope 事件中使用 Flashlight 或 Flare Gun 向经过的飞机发出信号。救援是概率性的，并非保证。官方 v1.1.2 补丁说明确认救援结局概率略微提高。"
        }
      },
      {
        "@type": "Question",
        "name": "如何避免 Seagull 坏结局？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "驱赶海鸥，而不是让太多海鸥留在船上。喂食海鸥可能让它留下来，但会消耗食物。太多海鸥可能导致坏结局。"
        }
      },
      {
        "@type": "Question",
        "name": "应对 Eerie Melody 应该使用什么？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "社区报告推荐使用 Duct Tape 作为最安全的对策。Bucket 或 Umbrella 是备选方案。避免使用 Flashlight 或 Spyglass，因为这些可能触发危险的塞壬后果。"
        }
      },
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function ZhEventsPage() {
  return (
    <>
      <SEO
        title="夜间事件对策攻略"
        description="完整的 Don't Sleep With The Fishes 夜间事件对策攻略，更新至 v1.1.2。了解面对 Giant Squid、Hope、Seagull、Eerie Melody、Eyes、Whirlpool 等事件该如何应对。"
        ogType="website"
      />
      <EventFAQSchema />

      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <AlertTriangle className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">事件数据库</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> 更新至 v1.1.2
            </span>
            <span className="text-xs font-medium" style={{ color: "rgba(122,146,170,0.75)", ...NUNITO }}>最后验证：2026-06-08</span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 夜间事件对策</h1>

          {/* Short answer */}
          <div className="mb-4 max-w-3xl">
            <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              Don't Sleep With The Fishes 中的夜间事件会打断你的睡眠，迫使你选择物品、保持清醒、发出求救信号或冒险回去睡觉。本攻略列出了每个主要事件最安全的已知对策，更新至 v1.1.2，带有官方说明、已验证测试和社区报告的来源标签。
            </p>
          </div>

          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(245,158,11,0.55)" }}>剧透等级：中等</span>
            <span className="text-xs text-text-secondary">|</span>
            <SourceBadge source="Official" />
            <SourceBadge source="Community" />
            <SourceBadge source="Unverified" />
          </div>
        </div>

        {/* Quick Answer */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>快速答案</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            夜间事件会打断你的睡眠，迫使你选择物品、保持清醒、发出求救信号或冒险回去睡觉。本攻略列出了每个主要事件的已知对策，并将每个答案标记为官方、已验证、社区或未经验证。
          </p>
        </InfoCard>

        {/* SEO body text */}
        <InfoCard className="mb-6">
          <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
            夜间事件是 Don't Sleep With The Fishes 中最重要的生存考验之一。官方游戏页面说明，如果你的睡眠被打断，你必须使用你带来的物品来处理情况，或者在没有更好答案时尝试回去睡觉。实际上，每个夜间事件考验你库存的不同部分：<strong className="text-text-primary">Anchor</strong> 抵御船只损毁威胁，<strong className="text-text-primary">Flare Gun 和 Flashlight</strong> 帮助救援事件，<strong className="text-text-primary">Duct Tape 和 Bucket</strong> 解决某些危险事件，保持清醒有时可以保护船员。
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.70)" }}>
            由于许多事件的解决方案仍在由社区测试中，本攻略将官方补丁说明、已验证路线测试和社区报告对策区分开来。如果某项对策标记为<strong>社区</strong>或<strong>未经验证</strong>，请将其视为有用但非最终结论。
          </p>
        </InfoCard>

        {/* Event Counter Table */}
        <InfoCard>
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>夜间事件对策表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 800 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>事件</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>最佳对策</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>备选</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden lg:table-cell" style={NUNITO}>避免</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden xl:table-cell" style={NUNITO}>搜索意图</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>来源</th>
                </tr>
              </thead>
              <tbody>
                {events.map((row, i) => (
                  <tr key={row.event}
                    style={{ borderBottom: i < events.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.03)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                    <td className="py-3 pr-3">
                      <Link href={row.href} className="flex items-center gap-2 group">
                        <Siren className="h-3.5 w-3.5 shrink-0" style={{ color: "rgba(245,158,11,0.4)" }} />
                        <span className="text-sm font-bold text-text-primary group-hover:text-amber transition-colors" style={NUNITO}>{row.event}</span>
                      </Link>
                    </td>
                    <td className="py-3 pr-3 text-xs text-text-secondary" style={NUNITO}>{row.bestCounter}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.backup}</td>
                    <td className="py-3 pr-3 text-xs hidden lg:table-cell" style={{ color: "rgba(248,113,113,0.80)", ...NUNITO }}>{row.avoid}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden xl:table-cell" style={NUNITO}>{row.searchIntent}</td>
                    <td className="py-3"><SourceBadge source={row.confidence} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* Official confirmation callout */}
        <InfoCard variant="amber" className="mt-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
            <div>
              <h2 className="text-sm font-semibold text-amber mb-1">已确认 vs 社区报告</h2>
              <div className="space-y-2 text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
                <p><strong>官方：</strong>游戏有夜间事件，会打断睡眠并需要物品应对。v1.1.2 新增了 3 个夜间事件，并略微提高了救援结局概率。</p>
                <p><strong>社区：</strong>特定物品对策（Anchor 应对 Squid、Duct Tape 应对 Eerie Melody、保持清醒应对 Eyes 等）基于 Reddit、Fandom 和 itch 评论的玩家报告。这些尚未全部经过独立验证。</p>
                <p><strong>未经验证：</strong>某些理论（给鱿鱼喂鱼、确切的坏结局触发条件、单人路线结果）是玩家推测，未经确认结果证实。</p>
              </div>
            </div>
          </div>
        </InfoCard>

        {/* Event FAQ */}
        <InfoCard className="mt-6">
          <h2 className="text-base font-bold text-text-primary mb-4" style={NUNITO}>事件常见问题</h2>
          <div className="space-y-4">
            {[
              { q: "遇到 Giant Squid 该怎么办？", a: "社区报告建议使用 Anchor 生存。Heart of the Sea 可能开启真结局路线，但这未经独立验证。详情请参阅 Giant Squid 攻略。" },
              { q: "如何让自己可见？", a: "在 Hope 事件中使用 Flashlight 或 Flare Gun 向经过的飞机发出信号。救援是概率性的。官方 v1.1.2 说明确认救援概率略微提高。" },
              { q: "如何避免 Seagull 结局？", a: "驱赶海鸥，而不是喂食太多。社区报告说让太多海鸥停留可能导致坏结局。请参阅海鸥攻略。" },
              { q: "应对 Eerie Melody 应该使用什么？", a: "使用 Duct Tape、Bucket 或 Umbrella。避免使用 Flashlight 和 Spyglass——社区报告说它们会触发危险的塞壬反应。" },
              { q: "遇到 Eyes 应该保持清醒吗？", a: "是的，如果你有船员的话。保持清醒可以保护你的同伴，但会让你体力低下。去睡觉可能导致船员死亡。" },
              { q: "遇到 Whirlpool 应该使用什么？", a: "使用 Anchor。没有 Anchor，船只将遭受严重损坏。Anchor 是 S 级物品，因为它同时应对 Whirlpool 和 Giant Squid。" },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="text-xs font-bold text-text-primary mb-1" style={NUNITO}>{item.q}</h3>
                <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{item.a}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Deep dive links */}
        <div className="mt-10">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>事件详情页</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              { href: "/events/giant-squid", label: "Giant Squid 攻略", desc: "Anchor、还债与真结局路线", icon: <Anchor className="h-3.5 w-3.5" /> },
              { href: "/endings/rescue", label: "让自己可见", desc: "Flare Gun、Flashlight 与救援概率", icon: <ShieldCheck className="h-3.5 w-3.5" /> },
              { href: "/events/seagull", label: "Seagull 攻略", desc: "喂食 vs 驱赶与坏结局预防", icon: <Siren className="h-3.5 w-3.5" /> },
              { href: "/events/eerie-melody", label: "Eerie Melody 攻略", desc: "Duct Tape、Bucket 与塞壬对策", icon: <Siren className="h-3.5 w-3.5" /> },
              { href: "/events/eyes", label: "Eyes 事件攻略", desc: "保持清醒策略与船员风险", icon: <Siren className="h-3.5 w-3.5" /> },
              { href: "/events/whirlpool", label: "Whirlpool 攻略", desc: "Anchor 使用与船只损坏恢复", icon: <Anchor className="h-3.5 w-3.5" /> },
            ].map(({ href, label, desc, icon }) => (
              <Link key={label} href={href} className="group flex items-center justify-between gap-2 rounded-xl border px-4 py-3 transition-all duration-200" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,14,28,1)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.30)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,31,56,1)"; }}>
                <div className="flex items-center gap-2.5">
                  <span style={{ color: "rgba(245,158,11,0.4)" }}>{icon}</span>
                  <div>
                    <div className="text-sm font-medium text-text-primary group-hover:text-amber transition-colors">{label}</div>
                    <div className="text-xs text-text-secondary">{desc}</div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-text-secondary group-hover:text-amber transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Related item links */}
        <div className="mt-6">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>事件关键物品</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/items", label: "Anchor" },
              { href: "/items", label: "Flare Gun" },
              { href: "/items", label: "Flashlight" },
              { href: "/items", label: "Duct Tape" },
              { href: "/items", label: "Bucket" },
              { href: "/items/heart-of-the-sea", label: "Heart of the Sea" },
            ].map(({ href, label }) => (
              <Link key={label} href={href} className="rounded-full px-3 py-1 text-xs font-bold transition-all hover:brightness-110" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.15)", color: "rgba(245,158,11,0.75)", ...NUNITO }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
