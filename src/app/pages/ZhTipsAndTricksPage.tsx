"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import type { Confidence } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Lightbulb, Sparkles, ChevronRight, Anchor, ShieldCheck, ExternalLink } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface QuickTip {
  tip: string;
  why: string;
  confidence: Confidence;
}

const quickTips: QuickTip[] = [
  { tip: "至少携带一件夜间事件对策物品", why: "夜间事件可能打断睡眠；没有物品你只能冒险睡过去", confidence: "Official" },
  { tip: "不要过早浪费 Flare Gun(信号枪)", why: "Flare Gun / Flashlight(手电筒) 是 Hope(希望信号) 和 Other People 等救援相关事件所必需的", confidence: "Community" },
  { tip: "尽可能保留 Anchor(锚)", why: "Anchor 应对 Whirlpool(漩涡)；社区也用它应对 Giant Squid(巨型鱿鱼) 生存", confidence: "Community" },
  { tip: "留 Duct Tape(胶带) 用于维修或危险事件", why: "v1.1.2 中，Duct Tape 的维修使用可选的——留到关键对策再用", confidence: "Official" },
  { tip: "v1.1.2 中可以更放心使用 Bait(鱼饵)", why: "Bait 现在只在真正钓到鱼时才消耗", confidence: "Official" },
  { tip: "Captain Whiskers(威斯克船长) 现在对钓鱼稍微有用了", why: "v1.1.2 赋予 Captain Whiskers +1% 钓鱼捕获几率", confidence: "Official" },
  { tip: "当天计划匹配时使用船员支援", why: "Frederik、Laurel 和 Row 各有不同的支援行动效果", confidence: "Official" },
  { tip: "仅从 v1.1.2 开始追踪最高天数记录", why: "记录功能在 v1.1.2 中添加；v1.1.1 的运行不被记录", confidence: "Official" },
  { tip: "不要假设每条社区结局路线都已确认", why: "Heart of the Sea(海洋之心) / Pay Debt(还债) / Giant Squid 路线仍需游戏内验证", confidence: "Community" },
];

const shipmateTable = [
  { name: "Frederik", support: "白天帮助 Bait 保证钓到鱼", bestDay: "钓鱼日", confidence: "Official" as Confidence },
  { name: "Laurel", support: "白天食物恢复更多饥饿值", bestDay: "恢复日", confidence: "Official" as Confidence },
  { name: "Row", support: "白天维修消耗更少体力", bestDay: "维修日", confidence: "Official" as Confidence },
];

const faqData = [
  { q: "Don't Sleep With The Fishes 的最佳技巧是什么？", a: "携带能解决多种问题的多功能物品（Anchor、Duct Tape、Flare Gun），谨慎管理体力，为夜间事件保留关键工具，高效钓鱼——特别是在 v1.1.2 中 Bait 只在成功捕获时才消耗。" },
  { q: "我应该首先带什么物品？", a: "Fishing Rod(钓竿) 和 Bait 用于食物，Anchor 应对船只威胁事件，Flare Gun 用于救援机会，Duct Tape 应对危险事件。这些覆盖了最常见的失败点。" },
  { q: "v1.1.2 中 Bait 值得使用吗？", a: "值得。官方 v1.1.2 补丁说明确认 Bait 只在真正钓到鱼时才消耗，使其成为食物策略中更安全的投资。" },
  { q: "Captain Whiskers 有用吗？", a: "在 v1.1.2 中有用——但效果有限。猫咪提供 +1% 钓鱼捕获几率。短期游玩影响很小，但在长期生存尝试中累积效果可观。" },
  { q: "哪个船员的支援最好？", a: "取决于你的当日计划。钓鱼日用 Frederik，恢复日用 Laurel，维修繁重日用 Row。没有单一\"最优\"——将支援与你的计划匹配。" },
  { q: "如何存活更久？", a: "保留 Anchor 应对 Whirlpool 和 Giant Squid，留 Flare Gun 用于救援事件，策略性使用 Duct Tape（不要自动使用），高效利用 Bait 钓鱼，在船只濒危前维修，追踪食物与体力平衡。" },
  { q: "应该保留 Flare Gun 吗？", a: "应该，如果你以救援路线为目标。社区策略建议在早期 Hope 事件中使用 Flashlight，将 Flare Gun 留到更强的救援机会。" },
  { q: "Anchor 值得保留吗？", a: "值得——它是最高价值的生存物品之一。社区报告确认它应对 Whirlpool，并广泛用于 Giant Squid。没有 Anchor，这两个事件都可能摧毁你的船。" },
  { q: "如何避免浪费 Duct Tape？", a: "在 v1.1.2 中，Duct Tape 的维修使用是可选的。不要对每次维修自动使用——留到 Eerie Melody(诡异旋律) 和 Leak(漏水) 事件，这些事件的对策至关重要。" },
  { q: "如何获得记录在案的最高天数？", a: "在 v1.1.2 或更新版本游玩。最高天数记录功能是在 v1.1.2 中添加的，不会追踪 v1.1.1 的运行。运行结束后查看主菜单。" },
];

function TipsFAQSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": typeof item.a === "string" ? item.a : "" },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function ZhTipsAndTricksPage() {
  return (
    <>
      <SEO title="技巧与窍门" description="" />
      <TipsFAQSchema />

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Lightbulb className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">技巧与窍门</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> 更新至 v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 技巧与窍门</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            在 Don't Sleep With The Fishes 中存活更久的最安全方法是携带多功能物品、谨慎管理体力、高效钓鱼、在船只濒危前维修，以及为夜间事件和救援机会保留关键工具。本攻略将官方 v1.1.2 改动与社区测试策略区分开来。
          </p>
        </div>

        {/* Quick Tips Table */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>快速技巧</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>技巧</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>为什么有帮助</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>来源</th>
                </tr>
              </thead>
              <tbody>
                {quickTips.map((row, i) => (
                  <tr key={row.tip} style={{ borderBottom: i < quickTips.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                    <td className="py-3 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.tip}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.why}</td>
                    <td className="py-3"><SourceBadge source={row.confidence} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* Official Tips */}
        <div className="space-y-4 mb-8">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>v1.1.2 中更积极使用 Bait</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-2" style={NUNITO}>
              在 v1.1.2 中，Bait 比之前使用更安全，因为它<strong className="text-text-primary">只在真正钓到鱼时才消耗</strong>。这使得 Bait 成为你食物策略中更重要的组成部分，尤其是在长期生存尝试中。
            </p>
            <SourceBadge source="Official" />
          </InfoCard>

          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>留 Duct Tape 用于高价值用途</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-2" style={NUNITO}>
              Duct Tape 在 v1.1.2 中变得更加战略性。因为<strong className="text-text-primary">维修使用现在是可选的</strong>，且宝箱掉落不再那么慷慨，除非维修或事件对策值得，否则不要自动使用 Duct Tape。
            </p>
            <SourceBadge source="Official" />
          </InfoCard>

          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Captain Whiskers 效果虽小但不再无用</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-2" style={NUNITO}>
              Captain Whiskers 不是巨大的战力提升，但在 v1.1.2 中，猫咪终于将<strong className="text-text-primary">钓鱼几率提高了 1%</strong>。对于普通游玩这很微小；但对于长期生存尝试，微小的钓鱼改善仍然可能重要。
            </p>
            <SourceBadge source="Official" />
          </InfoCard>

          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>根据你的当日计划使用船员支援</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              当你已经知道当日计划时，船员支援效果最强。钓鱼前用 Frederik，食物恢复重要时用 Laurel，维修繁重日之前用 Row。
            </p>
            <div className="overflow-x-auto mb-2">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 500 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>船员</th>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>支援用途</th>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>最佳当日计划</th>
                    <th className="py-2 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>来源</th>
                  </tr>
                </thead>
                <tbody>
                  {shipmateTable.map((row) => (
                    <tr key={row.name}>
                      <td className="py-2.5 pr-3 text-sm font-bold text-text-primary" style={NUNITO}>{row.name}</td>
                      <td className="py-2.5 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.support}</td>
                      <td className="py-2.5 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.bestDay}</td>
                      <td className="py-2.5"><SourceBadge source={row.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <SourceBadge source="Official" />
          </InfoCard>

          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>使用 v1.1.2 获得最高天数记录</h2>
            <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              如果你想要记录在案的最高天数，请在 v1.1.2 或更新版本游玩。官方补丁说明指出 v1.1.1 的运行不被记录，因为记录功能是后来添加的。
            </p>
            <SourceBadge source="Official" />
          </InfoCard>
        </div>

        {/* Community Tips */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full" style={{ background: "rgba(251,191,36,0.6)" }} />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>社区报告策略</h2>
          </div>
          <div className="space-y-4">
            <InfoCard>
              <h3 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>Anchor 是 S 级安全物品</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-1" style={NUNITO}>
                Anchor 是最值得保留的安全物品之一，因为社区报告称它是危险船只事件的对策，尤其是 Whirlpool。它也可能对 Giant Squid 生存路线重要，但这应在确认为准之前进行验证。
              </p>
              <SourceBadge source="Community" />
            </InfoCard>

            <InfoCard>
              <h3 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>保留 Flashlight 和 Flare Gun 用于救援</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-1" style={NUNITO}>
                如果你正尝试走救援路线，避免浪费你的 Flare Gun。社区报告建议先使用 Flashlight，将 Flare Gun 留到更强的救援机会。官方 v1.1.2 说明确认救援结局概率略微提高。
              </p>
              <div className="flex items-center gap-2">
                <SourceBadge source="Community" /> <span className="text-xs text-text-secondary">+ 官方救援概率更新</span>
              </div>
            </InfoCard>

            <InfoCard>
              <h3 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>不要喂食每只 Seagull(海鸥)</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-1" style={NUNITO}>
                除非你在测试那条路线，否则不要喂食每只海鸥。社区报告说海鸥会留在船上，吃掉你的食物，如果太多则会变得危险。
              </p>
              <SourceBadge source="Community" />
            </InfoCard>

            <InfoCard>
              <h3 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>只有承受得起体力消耗时才开宝箱</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-1" style={NUNITO}>
                宝箱可能有价值，但并非免费。当你能承受体力消耗且缺少的实用物品能改善夜间事件覆盖时才开启。官方 v1.1.2 说明确认宝箱掉落池有所调整。
              </p>
              <div className="flex items-center gap-2">
                <SourceBadge source="Community" /> <span className="text-xs text-text-secondary">+ 官方宝箱池更新</span>
              </div>
            </InfoCard>
          </div>
        </div>

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
              { href: "/items", label: "物品攻略", desc: "完整物品目录与优先级排名" },
              { href: "/events", label: "事件攻略", desc: "夜间事件对策表" },
              { href: "/endings/rescue", label: "救援路线", desc: "让自己可见策略" },
              { href: "/events/giant-squid", label: "Giant Squid 攻略", desc: "Anchor 与还债策略" },
              { href: "/characters/captain-whiskers", label: "Captain Whiskers", desc: "猫同伴详情" },
              { href: "/achievements", label: "成就与记录", desc: "完成度与最高天数追踪" },
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
          非官方粉丝指南 &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">itch.io 官方游戏 <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
