"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import type { Confidence } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Trophy, Sparkles, ChevronRight, Target, ExternalLink, ShieldCheck } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface StatusRow {
  feature: string;
  status: string;
  confidence: Confidence;
}

const statusTable: StatusRow[] = [
  { feature: "Steam 成就", status: "尚未公开列出；Steam 移植已规划", confidence: "Official" },
  { feature: "自定义 Steam 成就", status: "开发者提到可能随 Steam 移植推出", confidence: "Official" },
  { feature: "传说物品追踪", status: "钓鱼后保存到结局标签页", confidence: "Official" },
  { feature: "最高天数记录", status: "从 v1.1.2 起在主菜单中追踪", confidence: "Official" },
  { feature: "v1.1.1 记录追踪", status: "新功能不记录旧版本数据", confidence: "Official" },
  { feature: "结局清单", status: "存在多种结局，但完整列表尚待验证", confidence: "Official" },
  { feature: "社区世界纪录", status: "需要证据；没有官方排行榜", confidence: "Community" },
];

interface GoalRow {
  goal: string;
  category: string;
  howToTrack: string;
  guideUrl: string;
  guideLabel: string;
  confidence: Confidence;
}

const goals: GoalRow[] = [
  { goal: "获救", category: "结局路线", howToTrack: "触发救援结局", guideUrl: "/endings/rescue", guideLabel: "救援攻略", confidence: "Official" },
  { goal: "达到最高天数记录", category: "纪录", howToTrack: "v1.1.2 运行后查看主菜单", guideUrl: "/speedrun", guideLabel: "速通攻略", confidence: "Official" },
  { goal: "找到传说物品", category: "传说", howToTrack: "钓到传说物品；在结局标签页查看", guideUrl: "/items", guideLabel: "物品攻略", confidence: "Official" },
  { goal: "完成全部结局", category: "完成度", howToTrack: "使用下方结局清单", guideUrl: "/endings", guideLabel: "结局攻略", confidence: "Official" },
  { goal: "Pay Debt(还债) 路线", category: "秘密路线", howToTrack: "用来源标签追踪", guideUrl: "/endings/pay-debt", guideLabel: "还债攻略", confidence: "Community" },
  { goal: "Ghost Ship(幽灵船) / 飞翔的荷兰人", category: "秘密结局", howToTrack: "需要验证路线", guideUrl: "/endings", guideLabel: "结局攻略", confidence: "Community" },
  { goal: "Steam 成就", category: "Steam", howToTrack: "等待 Steam 发布", guideUrl: "/faq/steam-release", guideLabel: "Steam 常见问题", confidence: "Official" },
];

interface EndingTracker {
  ending: string;
  confirmed: string;
  spoiler: string;
  guideUrl: string;
  guideLabel: string;
}

const endingTracker: EndingTracker[] = [
  { ending: "救援结局 (Rescue)", confirmed: "官方路线类型；细节经社区测试", spoiler: "中", guideUrl: "/endings/rescue", guideLabel: "救援攻略" },
  { ending: "真结局 (True Ending)", confirmed: "社区报告，待验证", spoiler: "重", guideUrl: "/endings/true-ending", guideLabel: "真结局攻略" },
  { ending: "Pay Debt 路线", confirmed: "社区报告", spoiler: "重", guideUrl: "/endings/pay-debt", guideLabel: "还债攻略" },
  { ending: "Seagull(海鸥) 坏结局", confirmed: "社区报告", spoiler: "中", guideUrl: "/events/seagull", guideLabel: "海鸥攻略" },
  { ending: "Ghost Ship / 飞翔的荷兰人", confirmed: "社区疑问；需要验证", spoiler: "重", guideUrl: "/endings", guideLabel: "结局攻略" },
];

const faqData = [
  { q: "Don't Sleep With The Fishes 有成就系统吗？", a: "itch.io 版本没有正式的成就系统，但 v1.1.2 添加了完成度追踪：传说物品保存到结局标签页，最高天数记录在主菜单中追踪。Steam 成就已规划但尚未发布。" },
  { q: "有 Steam 成就吗？", a: "还没有。公开的 Steam 成就列表不可用。开发者已确认 Steam 移植已规划，itch 评论提到自定义 Steam 成就可能是移植的一部分。在 Steam 页面上线之前，没有确认的成就列表。" },
  { q: "在哪里查看最高天数记录？", a: "在 v1.1.2 或更新版本的主菜单中。此功能在 v1.1.2 中添加，不会追踪更早版本的运行记录。" },
  { q: "v1.1.1 的记录算数吗？", a: "不算。官方 v1.1.2 补丁说明指出 v1.1.1 的运行不会被记录，因为最高天数记录功能在该版本中不存在。" },
  { q: "如何追踪 100% 完成度？", a: "使用本页的完成清单追踪结局、传说物品、记录和秘密路线。标记为\"社区\"或\"未经验证\"的条目是线索而非已确认的完成目标。" },
  { q: "传说物品会被保存吗？", a: "是的。官方 v1.1.2 说明确认，当你钓到传说物品时，它会保存到结局标签页供以后查看。" },
  { q: "如何解锁所有结局？", a: "官方确认存在多种结局。使用结局攻略了解已知路线。某些路线（真结局、Pay Debt、Ghost Ship）来自社区报告，仍在验证中。" },
  { q: "有官方排行榜吗？", a: "没有。一些玩家在 itch 评论和 Reddit 上自我报告了天数（52、68、75 天），但没有官方排行榜或验证标准。" },
  { q: "什么算经过验证的记录？", a: "在 v1.1.2 中显示最高天数记录界面的截图或视频。没有证据的记录在本攻略中标记为社区报告或未经验证。" },
];

function AchievementsFAQSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function ZhAchievementsPage() {
  return (
    <>
      <SEO title="成就与记录" description="" />
      <AchievementsFAQSchema />

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Trophy className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">完成度追踪</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 成就与完成度指南</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            Don't Sleep With The Fishes 目前还没有确认的公开 Steam 成就列表，但 v1.1.2 添加了重要的完成度追踪：传说物品保存在结局标签页中，最高天数记录现在从主菜单追踪。使用本页作为结局、传说、救援路线、秘密路线和长期生存记录的完成清单。
          </p>
        </div>

        {/* Quick Answer */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>快速答案</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            Don't Sleep With The Fishes 目前还没有确认的公开 Steam 成就列表，但 v1.1.2 添加了完成度追踪，如传说物品保存和最高天数记录。使用本页追踪结局、记录、传说物品以及未来的 Steam 成就状态。
          </p>
        </InfoCard>

        {/* Current Status Table */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>当前成就状态</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>功能</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>当前状态</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>来源</th>
                </tr>
              </thead>
              <tbody>
                {statusTable.map((row, i) => (
                  <tr key={row.feature} style={{ borderBottom: i < statusTable.length - 1 ? "1px solid rgba(245,158,11,0.06)" : "none" }}>
                    <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.feature}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.status}</td>
                    <td className="py-3"><SourceBadge source={row.confidence} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* Completion Checklist */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>完成清单</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 650 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>目标</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>类别</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>如何追踪</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>攻略</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>来源</th>
                </tr>
              </thead>
              <tbody>
                {goals.map((row, i) => (
                  <tr key={row.goal} style={{ borderBottom: i < goals.length - 1 ? "1px solid rgba(245,158,11,0.06)" : "none" }}>
                    <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.goal}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.category}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.howToTrack}</td>
                    <td className="py-3 pr-3">
                      <Link href={row.guideUrl} className="text-xs font-bold text-amber/80 hover:text-amber transition-colors" style={NUNITO}>{row.guideLabel}</Link>
                    </td>
                    <td className="py-3"><SourceBadge source={row.confidence} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* Endings Tracker */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>结局追踪</h2>
          <p className="text-xs text-text-secondary leading-relaxed mb-3" style={NUNITO}>
            本清单将已确认、已验证和社区报告的结局分开追踪。如果某结局路线标记为\"社区\"或\"未经验证\"，请将其视为线索而非已完成的攻略。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 550 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(245,158,11,0.09)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>结局 / 路线</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>已确认？</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>剧透</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>攻略</th>
                </tr>
              </thead>
              <tbody>
                {endingTracker.map((row, i) => (
                  <tr key={row.ending} style={{ borderBottom: i < endingTracker.length - 1 ? "1px solid rgba(245,158,11,0.06)" : "none" }}>
                    <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.ending}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.confirmed}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.spoiler}</td>
                    <td className="py-3">
                      <Link href={row.guideUrl} className="text-xs font-bold text-amber/80 hover:text-amber transition-colors" style={NUNITO}>{row.guideLabel}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* Steam Achievement Status */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Steam 成就状态</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            公开的 Steam 成就列表<strong className="text-text-primary">尚未发布</strong>。开发者表示下一个主要目标是 Steam 移植，itch 页面的一条评论提到自定义 Steam 成就可能是移植的一部分。在 Steam 页面上线之前，本节仅追踪状态，不将成就列为已确认。
          </p>
          <div className="mt-2 flex items-center gap-2">
            <SourceBadge source="Official" /> <span className="text-xs text-text-secondary">尚未发布</span>
          </div>
        </InfoCard>

        {/* Highest Day Reached */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>最高天数记录</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-1" style={NUNITO}>
            最高天数记录现已在 v1.1.2 中追踪，可从主菜单查看。v1.1.1 的运行不包括在内，因为追踪功能在该版本中不存在。
          </p>
          <SourceBadge source="Official" />
        </InfoCard>

        {/* FAQ */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-4" style={NUNITO}>常见问题</h2>
          <div className="space-y-5">
            {faqData.map((item) => (
              <div key={item.q}>
                <h3 className="text-xs font-bold text-text-primary mb-1" style={NUNITO}>{item.q}</h3>
                <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{item.a}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Related Guides */}
        <div className="mt-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>相关攻略</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { href: "/endings", label: "结局攻略", desc: "全部结局与条件" },
              { href: "/endings/rescue", label: "救援路线", desc: "让自己可见策略" },
              { href: "/endings/pay-debt", label: "还债路线", desc: "社区追踪页面" },
              { href: "/speedrun", label: "速通与记录", desc: "世界纪录与生存天数" },
              { href: "/faq/steam-release", label: "Steam 发布常见问题", desc: "Steam 移植状态与时间线" },
              { href: "/tips-tricks", label: "技巧与窍门", desc: "最佳生存策略" },
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
          非官方粉丝指南 &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">itch.io 官方游戏 <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
