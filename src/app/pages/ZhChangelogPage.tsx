"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { ChevronRight, ExternalLink, Clock, FileText, RefreshCw, AlertTriangle, CheckCircle, Sparkles } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface ChangelogEntry {
  date: string;
  type: "新增指南" | "更新指南" | "百科更新" | "游戏补丁影响" | "验证状态更新" | "添加社区报告" | "修正";
  title: string;
  summary: string;
  affectedPages: { href: string; label: string }[];
  source: string;
  status: string;
  officialLink?: string;
}

const typeColors: Record<ChangelogEntry["type"], string> = {
  "新增指南": "rgba(52,211,153,0.9)",
  "更新指南": "rgba(96,165,250,0.9)",
  "百科更新": "rgba(122,146,170,0.9)",
  "游戏补丁影响": "rgba(251,191,36,0.9)",
  "验证状态更新": "rgba(52,211,153,0.9)",
  "添加社区报告": "rgba(251,191,36,0.9)",
  "修正": "rgba(239,68,68,0.9)",
};

const entries: ChangelogEntry[] = [
  {
    date: "2026-06-08",
    type: "百科更新",
    title: "更新日志页面添加",
    summary: "添加此更新日志以追踪新攻略、内容更新、验证变更和官方游戏补丁对 Don't Sleep With The Fishes 攻略百科的影响。",
    affectedPages: [
      { href: "/zh/changelog", label: "更新日志" },
      { href: "/zh/about", label: "关于本百科" },
    ],
    source: "百科更新",
    status: "活跃",
  },
  {
    date: "2026-06-08",
    type: "新增指南",
    title: "关于本百科",
    summary: "添加关于本百科页面，解释来源可信度系统、剧透政策、版本更新策略、版权界限和非官方粉丝攻略身份。",
    affectedPages: [
      { href: "/zh/about", label: "关于本百科" },
    ],
    source: "百科更新",
    status: "活跃",
  },
  {
    date: "2026-06-08",
    type: "新增指南",
    title: "技巧与窍门指南",
    summary: "添加技巧与窍门指南，提供实用生存建议，包括鱼饵策略、胶带使用、同伴支援、威斯克船长、锚优先级、救援计划和常见错误。",
    affectedPages: [
      { href: "/zh/tips-tricks", label: "技巧与窍门" },
      { href: "/zh/items", label: "物品指南" },
      { href: "/zh/events", label: "事件指南" },
      { href: "/zh/characters/captain-whiskers", label: "威斯克船长" },
    ],
    source: "官方 v1.1.2 说明 + 社区策略",
    status: "已更新至 v1.1.2",
  },
  {
    date: "2026-06-08",
    type: "新增指南",
    title: "成就、记录与完成度指南",
    summary: "添加成就与完成度指南，追踪结局、剧情物品、最高到达天数、社区记录和未来 Steam 成就状态。",
    affectedPages: [
      { href: "/zh/achievements", label: "成就与记录" },
      { href: "/zh/endings", label: "结局指南" },
      { href: "/zh/speedrun", label: "速通指南" },
      { href: "/zh/faq/steam-release", label: "Steam 发售 FAQ" },
    ],
    source: "官方 v1.1.2 说明",
    status: "Steam 成就尚未公开列出",
  },
  {
    date: "2026-06-08",
    type: "新增指南",
    title: "夜间事件对策指南",
    summary: "添加夜间事件对策指南，包含带来源标签的对策，涵盖巨型鱿鱼、希望、海鸥、诡异旋律、眼睛和漩涡，以及六个独立事件详情页。",
    affectedPages: [
      { href: "/zh/events", label: "事件指南" },
      { href: "/zh/events/giant-squid", label: "巨型鱿鱼攻略" },
      { href: "/zh/events/seagull", label: "海鸥攻略" },
      { href: "/zh/events/eerie-melody", label: "诡异旋律攻略" },
      { href: "/zh/events/eyes", label: "眼睛攻略" },
      { href: "/zh/events/whirlpool", label: "漩涡攻略" },
      { href: "/zh/endings/rescue", label: "救援攻略" },
    ],
    source: "官方夜间事件机制 + 社区报告",
    status: "社区对策需要游戏内验证",
  },
  {
    date: "2026-06-08",
    type: "新增指南",
    title: "核心内容页面上线",
    summary: "上线物品指南、通关攻略、结局指南、FAQ 和新手指南，包含完整内容表格、来源可信度标签和 SEO 元数据。",
    affectedPages: [
      { href: "/zh/items", label: "物品指南" },
      { href: "/zh/walkthrough", label: "通关攻略" },
      { href: "/zh/endings", label: "结局指南" },
      { href: "/zh/faq", label: "FAQ" },
      { href: "/zh/guide", label: "新手指南" },
    ],
    source: "官方 + 社区数据",
    status: "活跃 — 持续验证中",
  },
  {
    date: "2026-06-08",
    type: "百科更新",
    title: "网站迁移至 Next.js 以提升 SEO",
    summary: "将整个站点从 Vite SPA 迁移到 Next.js App Router，支持服务端渲染。所有页面内容现在可直接从 HTML 源代码被搜索引擎抓取。",
    affectedPages: [
      { href: "/zh", label: "首页" },
    ],
    source: "百科更新",
    status: "已完成",
  },
  {
    date: "2026-06-06",
    type: "游戏补丁影响",
    title: "版本 1.1.2 机制变更",
    summary: "官方版本 1.1.2 变更了多项机制。鱼饵现在仅在钓到鱼时消耗、胶带修复变为可选、救援几率提高、威斯克船长钓鱼+1%、最高到达天数被追踪、新增3个夜间事件、引入同伴支援动作。",
    affectedPages: [
      { href: "/zh/items", label: "物品指南" },
      { href: "/zh/events", label: "事件指南" },
      { href: "/zh/endings/rescue", label: "救援攻略" },
      { href: "/zh/characters/captain-whiskers", label: "威斯克船长" },
      { href: "/zh/achievements", label: "成就" },
      { href: "/zh/tips-tricks", label: "技巧与窍门" },
      { href: "/zh/version-112", label: "v1.1.2 补丁说明" },
    ],
    source: "DopplerGhost 官方 v1.1.2 开发日志",
    status: "官方",
    officialLink: "https://dopplerghost.itch.io/dont-sleep-with-the-fishes/devlog/1546268/version-112",
  },
];

const patchImpactTable = [
  { change: "鱼饵仅在钓到鱼时消耗", pages: "/zh/items/, /zh/tips-tricks/, /zh/walkthrough/", action: "更新钓鱼策略" },
  { change: "胶带修复使用变为可选", pages: "/zh/items/, /zh/events/, /zh/tips-tricks/", action: "更新修复建议" },
  { change: "宝箱中胶带出现几率降低", pages: "/zh/items/", action: "更新宝箱优先级" },
  { change: "游泳圈加入宝箱", pages: "/zh/items/", action: "添加物品条目" },
  { change: "救援结局几率提高", pages: "/zh/endings/rescue/, /zh/events/", action: "更新救援路线" },
  { change: "威斯克船长钓鱼+1%几率", pages: "/zh/characters/captain-whiskers/", action: "更新猫咪攻略" },
  { change: "剧情物品保存在结局标签页中", pages: "/zh/achievements/, /zh/items/", action: "添加完成度追踪" },
  { change: "最高到达天数被追踪", pages: "/zh/achievements/, /zh/speedrun/", action: "添加记录追踪器" },
  { change: "新增3个夜间事件", pages: "/zh/events/", action: "标记事件页面待验证" },
  { change: "引入同伴支援", pages: "/zh/characters/, /zh/tips-tricks/", action: "添加支援表" },
];

const faqData = [
  { q: "这是 Don't Sleep With The Fishes 的官方更新日志吗？", a: "不是。这是本非官方攻略/百科的更新日志。官方游戏更新链接到 DopplerGhost 的 itch.io 开发日志。" },
  { q: "百科更新频率如何？", a: "核心攻略在游戏更新时、路线被验证时或玩家报告错误信息时进行审查。" },
  { q: "\"游戏补丁影响\"是什么意思？", a: "这意味着官方游戏更新改变了可能影响我们攻略的机制。我们列出哪些页面需要审查或更新。" },
  { q: "我可以提交修正吗？", a: "可以。请提交游戏版本、路线、使用物品、结果，以及尽可能提供截图或视频证据。有关贡献详情，请参阅关于页面。" },
];

function ChangelogSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Don't Sleep With The Fishes 攻略百科更新日志",
    "description": "非官方 Don't Sleep With The Fishes 攻略百科的最新更新，包括新指南、内容添加、验证更新和补丁影响说明。",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Don't Sleep With The Fishes 攻略百科",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function ZhChangelogPage() {
  return (
    <>
      <SEO title="更新日志" description="" />
      <ChangelogSchema />

      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Clock className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">更新日志</span>
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 攻略百科更新日志</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            此更新日志追踪非官方 Don't Sleep With The Fishes 攻略百科的更新。列出新页面、重写攻略、来源可信度变更、已验证路线更新以及影响我们通关攻略的官方游戏补丁说明。
          </p>
        </div>

        {/* Current Status */}
        <InfoCard className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-sm" style={NUNITO}>
            <div>
              <span className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-1">游戏版本</span>
              <span className="text-text-primary font-bold">v1.1.2</span>
            </div>
            <div>
              <span className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-1">最后百科审查</span>
              <span className="text-text-primary font-bold">2026-06-08</span>
            </div>
            <div>
              <span className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-1">来源标签</span>
              <span className="text-text-primary font-bold">官方 &middot; 已验证 &middot; 社区 &middot; 未验证</span>
            </div>
            <div>
              <span className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-1">官方页面</span>
              <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-amber/80 hover:text-amber transition-colors font-bold">
                itch.io <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </InfoCard>

        {/* Timeline */}
        <div className="space-y-4 mb-10">
          {entries.map((entry, i) => (
            <InfoCard key={`${entry.date}-${entry.title}`}>
              <div className="flex items-start gap-4">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center shrink-0 pt-1">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: typeColors[entry.type], boxShadow: `0 0 8px ${typeColors[entry.type]}` }} />
                  {i < entries.length - 1 && <span className="w-px flex-1 mt-1" style={{ background: "rgba(15,31,56,0.5)" }} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-black tracking-wider" style={{ color: "rgba(122,146,170,0.6)", ...NUNITO }}>{entry.date}</span>
                    <span className="rounded-full px-2 py-0.5 text-xs font-black uppercase tracking-wider" style={{ background: `${typeColors[entry.type]}22`, border: `1px solid ${typeColors[entry.type]}44`, color: typeColors[entry.type] }}>
                      {entry.type}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-text-primary mb-1" style={NUNITO}>{entry.title}</h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3" style={NUNITO}>{entry.summary}</p>

                  {/* Affected pages */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">影响范围：</span>
                    {entry.affectedPages.map((page) => (
                      <Link key={page.href} href={page.href} className="rounded-full px-2 py-0.5 text-xs font-bold transition-colors hover:text-amber" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.12)", color: "rgba(245,158,11,0.65)", ...NUNITO }}>
                        {page.label}
                      </Link>
                    ))}
                  </div>

                  {/* Source & Status */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-secondary" style={NUNITO}>
                    <span>来源：<strong className="text-text-secondary">{entry.source}</strong></span>
                    <span>状态：<strong className="text-text-secondary">{entry.status}</strong></span>
                    {entry.officialLink && (
                      <a href={entry.officialLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-amber/60 hover:text-amber transition-colors">
                        官方开发日志 <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </InfoCard>
          ))}
        </div>

        {/* Game Patch Impact Table */}
        <InfoCard className="mb-6">
          <div className="flex items-center gap-2.5 mb-4">
            <RefreshCw className="h-4 w-4" style={{ color: "rgba(251,191,36,0.6)" }} />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>v1.1.2 补丁影响</h2>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed mb-3" style={NUNITO}>
            当官方游戏更新时，此表追踪哪些百科页面需要审查。官方来源：{" "}
            <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes/devlog/1546268/version-112" target="_blank" rel="noopener noreferrer" className="text-amber/80 hover:text-amber transition-colors">
              v1.1.2 开发日志 <ExternalLink className="inline h-2.5 w-2.5" />
            </a>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary" style={NUNITO}>官方变更</th>
                  <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-secondary hidden sm:table-cell" style={NUNITO}>受影响页面</th>
                  <th className="py-2.5 text-xs font-black uppercase tracking-widest text-text-secondary hidden md:table-cell" style={NUNITO}>行动</th>
                </tr>
              </thead>
              <tbody>
                {patchImpactTable.map((row, i) => (
                  <tr key={row.change} style={{ borderBottom: i < patchImpactTable.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                    <td className="py-3 pr-3 text-xs font-bold text-text-primary" style={NUNITO}>{row.change}</td>
                    <td className="py-3 pr-3 text-xs text-text-secondary hidden sm:table-cell" style={NUNITO}>{row.pages}</td>
                    <td className="py-3 text-xs hidden md:table-cell" style={{ color: "rgba(52,211,153,0.8)", ...NUNITO }}>{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>

        {/* FAQ */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-4" style={NUNITO}>常见问题</h2>
          <div className="space-y-4">
            {faqData.map((item) => (
              <div key={item.q}>
                <h3 className="text-xs font-bold text-text-primary mb-1" style={NUNITO}>{item.q}</h3>
                <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{item.a}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Related Links */}
        <div className="mt-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>相关链接</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { href: "/zh/about", label: "关于本百科", desc: "来源可信度与政策" },
              { href: "/zh/version-112", label: "v1.1.2 补丁说明", desc: "完整更新详解" },
              { href: "/zh/guide", label: "新手指南", desc: "从这里开始" },
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
