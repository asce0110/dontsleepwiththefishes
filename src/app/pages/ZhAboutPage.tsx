"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { ExternalLink, ShieldCheck, ChevronRight, BookOpen, Sparkles } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const doesAndDoesnt = [
  ["撰写攻略和解释机制", "托管游戏文件"],
  ["链接到官方 itch.io 页面", "提供破解、种子或镜像"],
  ["追踪官方更新", "声称代表 DopplerGhost"],
  ["标注社区报告", "将猜测呈现为已确认事实"],
  ["接受勘误", "逐字复制 Fandom 或 Reddit 内容"],
];

const sourceLabels = [
  { label: "Official", meaning: "由 DopplerGhost 通过 itch.io 页面、开发日志或官方评论确认", example: "v1.1.2 改动、Steam 移植状态、威斯克船长钓鱼加成" },
  { label: "Verified", meaning: "通过本攻略的直接游戏测试确认", example: "已测试的物品对策或结局路线" },
  { label: "Community", meaning: "由 Reddit、itch.io 评论、Fandom 或视频中的玩家报告", example: "巨型鱿鱼锚报告、海洋之心碎片理论" },
  { label: "Unverified", meaning: "玩家提及但未可靠确认", example: "测试前的确切还债路线" },
] as const;

const spoilerLevels = [
  { level: "无", meaning: "操作、下载帮助、基础生存" },
  { level: "轻度", meaning: "物品效果、非结局事件对策" },
  { level: "中度", meaning: "事件结果和坏结局预防" },
  { level: "重度", meaning: "真结局、还债、海洋之心、幽灵船" },
];

const versionPriority = [
  { pageType: "事件", priority: "最高" },
  { pageType: "物品", priority: "最高" },
  { pageType: "结局", priority: "最高" },
  { pageType: "通关攻略", priority: "高" },
  { pageType: "技巧与窍门", priority: "高" },
  { pageType: "成就与记录", priority: "高" },
  { pageType: "FAQ / Steam 发售", priority: "高" },
  { pageType: "关于页面", priority: "低" },
];

function AboutSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "关于 Don't Sleep With The Fishes 攻略百科",
    "description": "一份非官方粉丝制作的攻略，解释来源标注、版本更新、剧透政策和官方下载链接。",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Don't Sleep With The Fishes 攻略百科",
    },
    "about": {
      "@type": "VideoGame",
      "name": "Don't Sleep With The Fishes",
      "sameAs": "https://dopplerghost.itch.io/dont-sleep-with-the-fishes",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function ZhAboutPage() {
  return (
    <>
      <SEO title="关于本攻略百科" description="" />
      <AboutSchema />

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <BookOpen className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">关于</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>关于本攻略百科</h1>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            一份非官方粉丝制作的 Don't Sleep With The Fishes 攻略，旨在清晰标注路线、事件、物品、结局和社区报告。
          </p>
        </div>

        <div className="space-y-4">

          {/* Short Statement */}
          <InfoCard variant="amber">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
              <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
                这是一个<strong className="text-text-primary">非官方粉丝制作的百科</strong>和策略指南。它<strong className="text-text-primary">与 DopplerGhost 无关</strong>，也不托管游戏文件。所有下载链接指向官方 itch.io 页面。
              </p>
            </div>
          </InfoCard>

          {/* What This Wiki Is */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>本百科是什么</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              本百科帮助玩家生存更久、理解夜间事件、比较物品用途、追踪结局，并关注 Don't Sleep With The Fishes 的版本特定变化。目标是将 Reddit、itch.io 评论和游戏测试中零散的社区问题转化为清晰、注意剧透的指南。
            </p>
            <ul className="space-y-1.5 text-sm" style={NUNITO}>
              {["夜间事件对策", "物品用途和优先级", "结局和路线笔记", "通关攻略和生存技巧", "完成度、记录和剧情追踪", "Steam 发售和下载 FAQ"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                  {item}
                </li>
              ))}
            </ul>
          </InfoCard>

          {/* What This Wiki Is Not */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>本百科不是什么</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              本百科<strong className="text-text-primary">不是</strong>官方网站、不是下载镜像、不是破解或免费下载来源，也不是购买游戏的替代品。如果你想玩 Don't Sleep With The Fishes，请从 DopplerGhost 官方 itch.io 页面购买或下载。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 450 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest" style={{ color: "rgba(52,211,153,0.7)", ...NUNITO }}>本百科会做</th>
                    <th className="py-2 text-xs font-black uppercase tracking-widest" style={{ color: "rgba(239,68,68,0.7)", ...NUNITO }}>本百科不会做</th>
                  </tr>
                </thead>
                <tbody>
                  {doesAndDoesnt.map(([does, doesnt], i) => (
                    <tr key={does} style={{ borderBottom: i < doesAndDoesnt.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-2.5 pr-3 text-xs" style={{ color: "rgba(52,211,153,0.8)", ...NUNITO }}>{does}</td>
                      <td className="py-2.5 text-xs" style={{ color: "rgba(239,68,68,0.7)", ...NUNITO }}>{doesnt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          {/* Source Confidence System */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>来源可信度系统</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              由于 Don't Sleep With The Fishes 仍在被玩家积极讨论中，并非每条路线或事件对策都已完全确认。每份指南都使用来源可信度标签，以便读者区分官方说明、已测试信息、社区报告和未验证的理论。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 500 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>标签</th>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>含义</th>
                    <th className="py-2 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>示例</th>
                  </tr>
                </thead>
                <tbody>
                  {sourceLabels.map((row, i) => (
                    <tr key={row.label} style={{ borderBottom: i < sourceLabels.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-2.5 pr-3"><SourceBadge source={row.label as "Official" | "Verified" | "Community" | "Unverified"} /></td>
                      <td className="py-2.5 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.meaning}</td>
                      <td className="py-2.5 text-xs text-text-secondary hidden md:table-cell" style={NUNITO}>{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          {/* Verification Standards */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>我们如何验证攻略</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-2" style={NUNITO}>
              在路线被标记为已验证之前，应尽可能在当前游戏版本中进行测试。如果某个机制在补丁后发生变化，相关页面将被审查，来源标签可能被降级直到重新测试。
            </p>
            <ul className="space-y-1.5 text-xs text-text-secondary" style={NUNITO}>
              {["在所列游戏版本上测试", "结果可复现或已记录", "尽可能提供截图/视频证据", "与官方补丁说明进行对比", "将仅限社区的声明分开处理"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                  {item}
                </li>
              ))}
            </ul>
          </InfoCard>

          {/* Version Update Policy */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>版本更新策略</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              攻略带有版本标签。当 DopplerGhost 发布新更新时，核心页面如事件、物品、结局、技巧和成就会优先审查。
            </p>
            <div className="overflow-x-auto mb-2">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 350 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>页面类型</th>
                    <th className="py-2 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>优先级</th>
                  </tr>
                </thead>
                <tbody>
                  {versionPriority.map((row, i) => (
                    <tr key={row.pageType} style={{ borderBottom: i < versionPriority.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-2.5 pr-3 text-xs text-text-secondary" style={NUNITO}>{row.pageType}</td>
                      <td className="py-2.5 text-xs font-bold" style={{ color: row.priority === "最高" ? "rgba(52,211,153,0.9)" : row.priority === "高" ? "rgba(96,165,250,0.9)" : "rgba(122,146,170,0.7)", ...NUNITO }}>{row.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-text-secondary" style={NUNITO}>当前攻略目标版本：v1.1.2 &middot; 最后审核：2026-06-08</p>
          </InfoCard>

          {/* Spoiler Policy */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>剧透政策</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              部分 Don't Sleep With The Fishes 页面包含结局剧透。主要结局路线、真结局笔记、还债、海洋之心碎片和幽灵船内容标有剧透警告。一般生存技巧和物品页面尽量将主要路线剧透排除在首屏之外。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 400 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>级别</th>
                    <th className="py-2 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>含义</th>
                  </tr>
                </thead>
                <tbody>
                  {spoilerLevels.map((row, i) => (
                    <tr key={row.level} style={{ borderBottom: i < spoilerLevels.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-2.5 pr-3 text-xs font-bold" style={{ color: row.level === "重度" ? "rgba(239,68,68,0.8)" : row.level === "中度" ? "rgba(251,191,36,0.8)" : "rgba(52,211,153,0.8)", ...NUNITO }}>{row.level}</td>
                      <td className="py-2.5 text-xs text-text-secondary" style={NUNITO}>{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>

          {/* Copyright */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>版权与官方链接</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              Don't Sleep With The Fishes 由 <strong className="text-text-primary">DopplerGhost</strong> 开发。本攻略是粉丝制作的资源，除非明确说明，否则与开发者无关或未获得其认可。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              <strong className="text-text-primary">我们不托管</strong>游戏、游戏压缩包、破解、种子或下载镜像。
            </p>
            <div className="space-y-1.5 text-sm" style={NUNITO}>
              <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-amber/80 hover:text-amber transition-colors">
                <ExternalLink className="h-3.5 w-3.5" /> 官方 itch.io 页面
              </a>
            </div>
            <div className="mt-3 pt-3 border-t" style={{ borderColor: "rgba(15,31,56,0.5)" }}>
              <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>
                截图用于攻略说明，应限制在必要范围内。社区百科页面可作为研究线索，但本站不会复制 Fandom 文章。社区来源的机制被重写，适当标注出处，并在可能时单独验证。
              </p>
            </div>
          </InfoCard>

          {/* Community Contributions */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>社区贡献</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>
              玩家可以通过报告错误、提交截图、分享测试过的路线或在当前游戏版本中确认事件对策来帮助改进本百科。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {["提交修正", "报告未验证路线", "提交最高天数记录", "建议缺失的事件"].map((item) => (
                <div key={item} className="rounded-xl border px-4 py-3 text-sm font-medium text-text-primary" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,14,28,1)", ...NUNITO }}>
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-text-secondary" style={NUNITO}>
              如需修正、路线证明或来源更新，请通过网站联系表单联系我们，或在相关攻略页面评论区可用时留言。
            </p>
          </InfoCard>

          {/* Contact and Corrections */}
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>联系与勘误</h2>
            <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
              如果你发现过时信息、未验证路线或缺失的事件对策，请发送游戏版本、事件名称、使用物品、结果，以及尽可能提供截图或视频证据。
            </p>
            <p className="mt-2 text-xs text-text-secondary" style={NUNITO}>
              如需修正、路线证明或来源更新，请通过网站联系表单联系我们，或在相关攻略页面评论区可用时留言。
            </p>
          </InfoCard>
        </div>

        {/* Related Links */}
        <div className="mt-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>相关链接</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { href: "/zh/guide", label: "新手指南", desc: "从这里开始你的首次游玩" },
              { href: "/zh/events", label: "事件指南", desc: "夜间事件对策表" },
              { href: "/zh/items", label: "物品指南", desc: "完整物品目录与排名" },
              { href: "/zh/endings", label: "结局指南", desc: "所有结局及条件" },
              { href: "/zh/tips-tricks", label: "技巧与窍门", desc: "最佳生存策略" },
              { href: "/zh/achievements", label: "成就与记录", desc: "完成度与最高天数追踪" },
              { href: "/zh/faq/steam-release", label: "Steam 发售 FAQ", desc: "Steam 移植状态" },
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
          <div className="mt-4 text-center">
            <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-bold transition-all" style={{ ...NUNITO, borderColor: "rgba(245,158,11,0.20)", background: "rgba(245,158,11,0.06)", color: "#f59e0b" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.14)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.06)"; }}>
              <ExternalLink className="h-4 w-4" /> itch.io 官方游戏
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
