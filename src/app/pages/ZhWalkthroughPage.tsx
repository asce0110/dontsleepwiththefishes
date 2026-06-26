"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { Map, Sparkles, ChevronRight, AlertTriangle, ShieldCheck } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

export function ZhWalkthroughPage() {
  return (
    <>
      <SEO
        title="流程攻略：按天生存路线"
        description="Don't Sleep With The Fishes 流程攻略：从船只撤离到获救的按天生存路线。含剧透标注，附带新手友好路径。更新至 v1.1.2。"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Map className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">流程攻略</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-2" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 流程攻略</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-xl">从船只撤离到获救的剧透意识生存路线。本攻略正在通过游戏内验证进行完善。以下核心生存原则基于官方游戏机制。</p>
        </div>

        {/* Quick Answer */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>快速答案</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            本攻略为你提供一条安全路线，涵盖开局船只撤离、早期生存天数、中期夜间事件以及后期救援（Rescue）条件。重度剧透的结局路线已单独链接，方便你自行选择透露程度。
          </p>
        </InfoCard>

        {/* Spoiler option */}
        <InfoCard variant="warning" className="mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
            <div>
              <h2 className="text-sm font-semibold text-amber mb-1">剧透意识模式</h2>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.75)" }}>
                本攻略侧重于<strong>生存原则</strong>，而非剧透具体故事结局。
                如需查看特定结局路线，请参阅{" "}
                <Link href="/endings" className="underline hover:text-amber">结局攻略</Link>。
              </p>
            </div>
          </div>
        </InfoCard>

        {/* Phase structure */}
        <div className="space-y-4">
          <InfoCard>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)", color: "#f59e0b" }}>1</span>
              <h2 className="text-base font-bold text-text-primary" style={NUNITO}>船只撤离 — 首次搜刮</h2>
            </div>
            <div className="space-y-2 text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              <p>在船沉没之前你的时间有限。目标：抓取必要物品并扔进救生艇。</p>
              <ul className="space-y-1.5">
                {[
                  "优先拿取：Fishing Rod(钓竿)、Bait(鱼饵)、Flare Gun(信号枪)、Anchor(锚)、Duct Tape(胶带)、Flashlight(手电筒)",
                  "食物和水是次要的——你可以之后钓鱼获取食物",
                  "医疗用品对危险事件非常有价值",
                  "你只能带一名船员——关于船员选择请参阅新手攻略",
                  "除非还有空间，否则不要在装饰品或不明物品上浪费时间",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </InfoCard>

          <InfoCard>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)", color: "#f59e0b" }}>2</span>
              <h2 className="text-base font-bold text-text-primary" style={NUNITO}>第1–3天 — 建立生存</h2>
            </div>
            <div className="space-y-2 text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              <p>前三天的工作重点是稳定食物、健康和船只状况。</p>
              <ul className="space-y-1.5">
                {[
                  "白天行动：钓鱼（如果你有Bait和Fishing Rod）、进食、船只受损时修理",
                  "与船员聊天——他们提供士气提升，并可能提供支援行动",
                  "在 v1.1.2 中，Bait 只在真正钓到鱼时才消耗（之前是始终消耗）",
                  "v1.1.2 中 Duct Tape 修理现在是可选的——如果船只状态良好，留到 Leak(漏水) / Eerie Melody(诡异旋律) 事件再用",
                  "如果你没有 Bait，优先寻找或交易获取",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </InfoCard>

          <InfoCard>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)", color: "#f59e0b" }}>3</span>
              <h2 className="text-base font-bold text-text-primary" style={NUNITO}>第4–10天 — 中期与事件</h2>
            </div>
            <div className="space-y-2 text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              <p>夜间事件变得更加频繁和危险。请将最好的物品留到关键遭遇战中使用。</p>
              <ul className="space-y-1.5">
                {[
                  "将 Flare Gun 和 Flashlight 留到 Hope(希望信号) / Other People 事件使用（救援路线）",
                  "随时准备好 Anchor 应对 Giant Squid(巨型鱿鱼) 和 Whirlpool(漩涡)——这些能摧毁你的船",
                  "Duct Tape 应对 Leak 和 Eerie Melody——不要浪费在小修小补上",
                  "如果听到诡异旋律，使用 Duct Tape、Bucket(水桶) 或 Umbrella——不要用 Spyglass(望远镜) 或 Flashlight（社区报告）",
                  "追踪食物供应——饥饿是常见死因",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </InfoCard>

          <InfoCard>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)", color: "#f59e0b" }}>4</span>
              <h2 className="text-base font-bold text-text-primary" style={NUNITO}>后期 — 救援条件</h2>
            </div>
            <div className="space-y-2 text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              <p>一旦稳定下来，集中精力满足救援条件。在 v1.1.2 中，救援结局概率略微提高。</p>
              <ul className="space-y-1.5">
                {[
                  "在 Hope 事件中使用 Flare Gun 发出求救信号",
                  "Flashlight 也可用于发信号——作为备选保留",
                  "如果追求 True Ending(真结局)，调查 Heart of the Sea(海洋之心) 和 Giant Squid 的互动",
                  "保持船只维修和士气——两者都可能影响结局资格",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </InfoCard>
        </div>

        {/* Callout */}
        <InfoCard variant="amber" className="mt-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
            <div>
              <h2 className="text-sm font-semibold text-amber mb-1">验证状态</h2>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>
                本攻略正在游戏中针对 v1.1.2 进行验证。以上生存原则基于官方游戏机制（itch 页面 + v1.1.2 开发日志）。
                具体事件计数和最佳物品搭配正在测试中。详见{" "}
                <Link href="/events" className="underline hover:text-amber">事件攻略</Link>{" "}
                和{" "}
                <Link href="/items" className="underline hover:text-amber">物品攻略</Link>{" "}
                获取带有来源可信度标签的详细对策表。
              </p>
            </div>
          </div>
        </InfoCard>

        {/* Common failure points */}
        <InfoCard variant="danger" className="mt-6">
          <div className="flex items-start gap-3 mb-3">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-red" />
            <h2 className="text-sm font-semibold" style={{ color: "rgba(248,113,113,1)" }}>常见失败点</h2>
          </div>
          <ul className="space-y-2">
            {[
              "忘记带 Bait 或 Fishing Rod 导致饥饿",
              "船只被 Giant Squid 或 Whirlpool 摧毁——始终保留 Anchor",
              "Eyes(眼睛) 事件中船员死亡——保持清醒",
              "在非 Hope 事件中使用 Flare Gun 导致错过救援",
              "浪费 Duct Tape 在小修小补上而不是留给 Eerie Melody",
              "不注意健康——某些事件会造成隐藏伤害",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(248,113,113,0.85)" }}>
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red/60" />
                {item}
              </li>
            ))}
          </ul>
        </InfoCard>

        {/* Related links */}
        <div className="mt-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>相关攻略</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { href: "/guide", label: "新手攻略", desc: "首次游玩必备要点" },
              { href: "/events", label: "事件攻略", desc: "夜间事件对策表" },
              { href: "/items", label: "物品攻略", desc: "带什么以及为什么" },
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
      </div>
    </>
  );
}
