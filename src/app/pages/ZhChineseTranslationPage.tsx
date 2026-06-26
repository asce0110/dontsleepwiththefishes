"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { AlertTriangle, ChevronRight, ExternalLink, Languages } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const faq = [
  { q: "Don't Sleep With The Fishes 有中文翻译吗？", a: "目前官方没有中文翻译。有社区制作的翻译补丁可用，但使用时请自行承担风险——第三方补丁可能包含恶意软件或损坏游戏文件。" },
  { q: "如何安装社区翻译补丁？", a: "社区补丁通常涉及替换游戏文件或使用第三方工具。在安装任何未经官方验证的补丁之前，请务必备份你的游戏文件。下载来源的信誉和病毒扫描至关重要。" },
  { q: "翻译补丁安全吗？", a: "社区补丁未经官方验证。与任何第三方修改一样，存在风险。始终从已知社区来源下载，使用病毒扫描工具，并在安装前备份文件。" },
  { q: "官方会支持中文吗？", a: "开发者 DopplerGhost 尚未就未来的语言支持发表声明。可关注官方 itch.io 开发日志获取更新。" },
  { q: "字体问题怎么办？", a: "社区报告称中文文本在某些游戏版本中可能出现字体渲染问题。一些翻译补丁包含字体修复。查看社区论坛获取当前解决方案。" },
];

export function ZhChineseTranslationPage() {
  return (
    <>
      <SEO
        title="中文翻译指南"
        description="追踪 Don't Sleep With The Fishes 的中文翻译笔记、社区工具、字体问题、安全警告以及官方兼容性评论。"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Languages className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">翻译</span>
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 中文翻译指南</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            目前<strong className="text-text-primary">没有官方中文翻译</strong>。社区翻译补丁可用，但请自行承担使用风险。本页追踪可用选项、安装说明和安全注意事项。
          </p>
        </div>

        <InfoCard variant="danger" className="mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "rgba(248,113,113,1)" }} />
            <div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: "rgba(248,113,113,1)" }}>安全警告</h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(248,113,113,0.85)" }}>社区翻译补丁是第三方修改。在安装任何未经官方验证的补丁之前，请务必备份游戏文件并进行病毒扫描。本攻略不托管或直接链接翻译补丁。</p>
            </div>
          </div>
        </InfoCard>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>当前状态</h2>
            <ul className="space-y-2 text-sm text-text-secondary" style={NUNITO}>
              <li><strong>官方中文：</strong>不提供。游戏只有英文版。</li>
              <li><strong>社区补丁：</strong>存在，但质量和安全性各异。</li>
              <li><strong>字体问题：</strong>部分游戏版本中文文本渲染有问题。</li>
              <li><strong>本攻略中文版：</strong>本攻略百科提供中文界面，但这是攻略翻译，不是游戏翻译。</li>
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
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>相关链接</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { href: "/zh/faq", label: "FAQ", desc: "一般常见问题" },
              { href: "/zh/guide", label: "新手指南", desc: "首次游玩提示" },
              { href: "/zh/about", label: "关于本百科", desc: "攻略策略与来源" },
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
