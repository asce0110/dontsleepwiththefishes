"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import Link from "next/link";
import { AlertTriangle, ChevronRight, ExternalLink, Monitor } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const faq = [
  { q: "Don't Sleep With The Fishes 能在 Mac 上运行吗？", a: "该游戏是 Windows 独占游戏。没有原生 macOS 版本。可以通过 Wine、CrossOver 或虚拟机在 Mac 上运行，但性能和安全结果因设置而异。" },
  { q: "如何在 Mac 上游玩？", a: "选项包括：使用 Boot Camp 双启动 Windows、使用 Parallels/VMware 等虚拟机、或通过 Wine/CrossOver 兼容层。这些方法均未得到官方支持。" },
  { q: "有 Mac 移植计划吗？", a: "开发者 DopplerGhost 尚未宣布 Mac 移植计划。目前所有精力都在 Windows 版本和 Steam 发售上。" },
  { q: "在 Mac 上的已知问题？", a: "社区报告在使用 Wine/CrossOver 时可能出现图形故障、性能问题或崩溃。没有官方兼容性保证。" },
  { q: "Mac 的替代方案？", a: "如果你无法在 Windows 上或通过兼容层游玩，请关注官方 itch.io 页面和 Steam 页面以获取未来平台公告。" },
];

export function ZhMacPage() {
  return (
    <>
      <SEO
        title="Mac 常见问题"
        description="Don't Sleep With The Fishes 的 Mac 兼容性说明、安全的解决方法以及在尝试 Windows 专用游戏文件前需要检查的事项。"
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Monitor className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">平台</span>
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes Mac 常见问题</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            Don't Sleep With The Fishes 是<strong className="text-text-primary">Windows 独占</strong>游戏。没有原生 macOS 版本。本页解释当前平台状态、解决方法和兼容性说明。
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>平台状态</h2>
            <ul className="space-y-2 text-sm text-text-secondary" style={NUNITO}>
              <li><strong>Windows：</strong>完全支持（itch.io 和 Steam）。</li>
              <li><strong>macOS：</strong>无原生支持。</li>
              <li><strong>Steam Deck / Linux：</strong>可通过 Proton 运行（未官方验证）。</li>
              <li><strong>iOS / Android：</strong>不支持。</li>
            </ul>
          </InfoCard>

          <InfoCard variant="warning">
            <AlertTriangle className="h-4 w-4 mb-2 text-amber" />
            <h3 className="text-sm font-semibold text-amber mb-2">兼容性免责声明</h3>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,158,11,0.85)" }}>通过兼容层（Wine、CrossOver）或虚拟机运行游戏未得到官方支持。可能出现崩溃、性能问题或图形故障。本攻略不提供这些工具的安装支持。</p>
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
              { href: "/zh/faq", label: "FAQ 主页", desc: "一般常见问题" },
              { href: "/zh/faq/mobile", label: "手机版 FAQ", desc: "移动平台状态" },
              { href: "/zh/faq/steam-release", label: "Steam 发售 FAQ", desc: "Steam 移植信息" },
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

        <div className="mt-6 text-xs" style={{ color: "rgba(42,62,90,0.7)", ...NUNITO }}>
          非官方粉丝攻略 &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">itch.io 官方游戏 <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
