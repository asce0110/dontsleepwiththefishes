"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import Link from "next/link";
import { ChevronRight, ExternalLink, Smartphone } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

const faq = [
  { q: "Don't Sleep With The Fishes 有手机版吗？", a: "目前没有。该游戏是 Windows 独占的 PC 游戏。没有官方的 Android 或 iOS 版本。" },
  { q: "会有手机版吗？", a: "开发者 DopplerGhost 尚未宣布任何手机移植计划。目前开发重点在 Windows 和即将到来的 Steam 发售。" },
  { q: "可以在手机上通过串流游玩吗？", a: "技术上可以通过 Steam Link 或远程桌面将 PC 游戏串流到手机，但这需要一台运行游戏的 Windows PC。这不是原生手机版。" },
  { q: "为什么没有手机版？", a: "该游戏是用 RPG Maker 制作的，传统上专注于 Windows。移植到移动平台需要大量额外开发工作。" },
  { q: "社区需求如何？", a: "部分玩家在 itch.io 评论中表达了对手机版的兴趣，但开发者尚未回应这些请求或宣布计划。" },
];

export function ZhMobilePage() {
  return (
    <>
      <SEO
        title="手机版常见问题"
        description="Don't Sleep With The Fishes 手机版状态、官方平台说明、社区需求以及在游戏仍专注于 Windows 平台时的安全替代方案。"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Smartphone className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">平台</span>
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 手机版常见问题</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            目前<strong className="text-text-primary">没有官方的 Android 或 iOS 版本</strong>。该游戏是 Windows 独占的 PC 游戏。本页解释当前状态、替代方案和未来的可能性。
          </p>
        </div>

        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-3" style={NUNITO}>平台状态</h2>
            <ul className="space-y-2 text-sm text-text-secondary" style={NUNITO}>
              <li><strong>Windows：</strong>完全支持。</li>
              <li><strong>Android / iOS：</strong>不提供，无宣布计划。</li>
              <li><strong>串流：</strong>可通过 Steam Link/远程桌面从 PC 串流。</li>
              <li><strong>网页版：</strong>不适用。</li>
            </ul>
          </InfoCard>

          <InfoCard>
            <h2 className="text-sm font-bold text-text-primary mb-3" style={NUNITO}>替代方案</h2>
            <p className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>
              如果你只有移动设备：最接近的体验是通过 Steam Link 从运行游戏的 Windows PC 串流。需要：一台运行游戏的 PC、稳定的网络连接以及手机上的 Steam Link 应用。这不是原生移动体验，延迟可能会影响游玩感受。
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
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>相关链接</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { href: "/zh/faq", label: "FAQ 主页", desc: "一般常见问题" },
              { href: "/zh/faq/mac", label: "Mac FAQ", desc: "Mac 兼容性信息" },
              { href: "/zh/faq/steam-release", label: "Steam 发售 FAQ", desc: "Steam 移植信息" },
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
          非官方粉丝攻略 &middot; <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/50 transition-colors">itch.io 官方游戏 <ExternalLink className="inline h-3 w-3" /></a>
        </div>
      </div>
    </>
  );
}
