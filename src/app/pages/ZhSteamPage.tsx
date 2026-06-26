"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import Link from "next/link";
import { ExternalLink, ChevronRight, Sparkles, ArrowRight, Monitor, Globe, ShieldCheck, Download } from "lucide-react";
import { SteamCountdown } from "../components/steam-countdown";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;
const PIRATA: React.CSSProperties = { fontFamily: "'Fredoka', sans-serif", fontWeight: 600 };

const faqData = [
  {
    q: "Don't Sleep With The Fishes 什么时候上线 Steam？",
    a: "2026年6月26日。立即添加愿望单，上线当天获取通知。",
  },
  {
    q: "Steam 版价格是多少？",
    a: "$1.99 美元，与 itch.io 价格相同。",
  },
  {
    q: "Steam 版会有成就吗？",
    a: "开发者提到 Steam 版可能会添加自定义 Steam 成就。具体的成就列表尚未公开。",
  },
  {
    q: "Steam 支持云存档吗？",
    a: "开发者尚未确认。Steam 云存档支持在新发布游戏中很常见，但本游戏尚未明确说明。",
  },
  {
    q: "能在 Steam Deck 上运行吗？",
    a: "本游戏是一款系统要求低的 Windows 点击式游戏。应该可以通过 Proton 在 Steam Deck 上运行，但官方 Steam Deck 验证状态尚未确认。",
  },
  {
    q: "我在 itch.io 购买了——能获得免费 Steam 密钥吗？",
    a: "开发者尚未确认。一些独立开发者确实会向 itch.io 购买者提供 Steam 密钥，但请等待 DopplerGhost 的官方公告。",
  },
  {
    q: "Steam 版和 itch.io 版有什么不同？",
    a: "核心游戏（v1.1.2）完全相同。Steam 可能添加成就和自动更新。itch.io 将更多收入直接给到开发者。",
  },
];

const comparisonRows = [
  { feature: "价格", steam: "$1.99", itch: "$1.99" },
  { feature: "游戏版本", steam: "v1.1.2", itch: "v1.1.2" },
  { feature: "无 DRM", steam: "否（Steam DRM）", itch: "是" },
  { feature: "自动更新", steam: "是（Steam 自动更新）", itch: "手动下载" },
  { feature: "成就", steam: "可能（自定义 Steam 成就）", itch: "不适用" },
  { feature: "云存档", steam: "未确认", itch: "手动备份" },
  { feature: "Steam Deck", steam: "可能可行（Proton）", itch: "手动安装" },
  { feature: "开发者收入", steam: "约70%（Steam 抽成）", itch: "约90%以上（平台费用更低）" },
  { feature: "退款政策", steam: "Steam 退款（< 2小时 / 14天）", itch: "开发者自行决定" },
];

export function ZhSteamPage() {
  return (
    <>
      <SEO
        title="Steam 上线 — 发布日期、价格与 FAQ"
        description="Don't Sleep With The Fishes 将于2026年6月26日登陆 Steam。价格、系统要求、Steam 与 itch.io 对比、成就、Steam Deck 及常见问题。"
      />
      <SteamCountdown />

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(23,86,184,0.12)", border: "1px solid rgba(23,86,184,0.22)" }}>
              <Monitor className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Steam</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> 2026年6月26日
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ ...PIRATA, fontSize: "2rem", letterSpacing: "0.02em" }}>
            Don't Sleep With The Fishes{" "}
            <span style={{ background: "linear-gradient(135deg, #1a9fff 0%, #60a5fa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Steam 上线</span>
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-xl" style={NUNITO}>
            Don't Sleep With The Fishes 将于<strong className="text-text-primary">2026年6月26日</strong>登陆 Steam。
            同样的游戏（v1.1.2），现在拥有 Steam 成就、自动更新，以及 Steam 库的便利。
          </p>
        </div>

        {/* CTA */}
        <InfoCard className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h2 className="text-base font-bold text-text-primary mb-1" style={NUNITO}>在 Steam 上添加愿望单</h2>
              <p className="text-xs text-text-secondary" style={NUNITO}>上线即刻获得通知。立即添加到你的 Steam 愿望单。</p>
            </div>
            <a
              href="https://store.steampowered.com/app/4834070/Dont_Sleep_With_The_Fishes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-black transition-all hover:brightness-110 shrink-0"
              style={{ background: "linear-gradient(135deg, #1a9fff, #176fb8)", color: "#fff", fontFamily: "'Nunito', sans-serif", boxShadow: "0 4px 20px rgba(26,159,255,0.30)" }}
            >
              立即添加愿望单 <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </InfoCard>

        {/* Steam vs itch.io comparison */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-blue-400" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>Steam 对比 itch.io</h2>
          </div>
          <InfoCard>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 500 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-4 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>功能</th>
                    <th className="py-2.5 pr-4 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>
                      <span className="inline-flex items-center gap-1.5">
                        <Monitor className="h-3 w-3 text-blue-400" /> Steam
                      </span>
                    </th>
                    <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>
                      <span className="inline-flex items-center gap-1.5">
                        <Globe className="h-3 w-3 text-amber/60" /> itch.io
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} style={{ borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-4 text-xs font-bold text-text-primary" style={NUNITO}>{row.feature}</td>
                      <td className="py-3 pr-4 text-xs text-text-secondary" style={NUNITO}>{row.steam}</td>
                      <td className="py-3 text-xs text-text-secondary" style={NUNITO}>{row.itch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-blue-400" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>常见问题</h2>
          </div>
          <div className="space-y-3">
            {faqData.map((faq) => (
              <InfoCard key={faq.q}>
                <h3 className="text-sm font-bold text-text-primary mb-2" style={NUNITO}>{faq.q}</h3>
                <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{faq.a}</p>
              </InfoCard>
            ))}
          </div>
        </div>

        {/* Related links */}
        <div className="mt-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>相关链接</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { href: "/guide", label: "新手指南", desc: "从这里开始你的首次游玩" },
              { href: "/faq", label: "常见问题", desc: "下载、平台、操作及更多" },
              { href: "/tips-tricks", label: "技巧与窍门", desc: "高级策略与最佳物品" },
              { href: "/achievements", label: "成就与记录", desc: "追踪你的完成进度" },
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
      </div>
    </>
  );
}
