"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import Link from "next/link";
import { AlertTriangle, ChevronRight, Sparkles } from "lucide-react";

function SectionBar({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="h-4 w-0.5 rounded-full bg-amber" />
      <h2 className="text-sm font-semibold text-text-primary">{children}</h2>
    </div>
  );
}

function KeyBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-lg px-2.5 py-1 font-mono text-xs font-semibold" style={{ background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.20)", color: "#f59e0b" }}>
      {children}
    </span>
  );
}

export function ZhGettingStartedPage() {
  return (
    <>
      <SEO
        title="新手生存指南"
        description="Don't Sleep With The Fishes 新手指南：操作、核心机制、撤离策略、船友选择和前7天生存路线。更新至v1.1.2。"
       
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <span className="text-xs font-bold uppercase tracking-widest text-amber">新手指南</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-2" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 新手指南</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-lg">你的完整首次游玩生存指南。包含操作、船只搜刮优先级、船友选择以及每日生存策略。</p>
        </div>
        <div className="space-y-4">
          <InfoCard>
            <h2 className="text-base font-bold text-text-primary mb-2" style={{ fontFamily: "'Nunito', sans-serif" }}>快速解答</h2>
            <p className="text-sm text-text-secondary leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
              在 Don't Sleep With The Fishes 中，你的首要目标是在船只沉没前收集有用的物品，然后通过管理食物、能量、维修、船友和夜间事件来度过每一天。新手应优先选择灵活的物品，如 Fishing Rod（钓竿）、Anchor（锚）和 Duct Tape（胶带），避免浪费 Flare Gun（信号枪）等救援工具，并了解哪些事件需要特定的应对物品。
            </p>
          </InfoCard>

          <InfoCard>
            <SectionBar>游戏概述</SectionBar>
            <p className="text-sm text-text-secondary leading-relaxed">你被困在一艘正在沉没的船上。在船完全沉没之前，迅速收集你能拿到的东西并扔进救生艇。选择一名船员同行，然后通过钓鱼、进食和管理能量在海上度过夜晚。</p>
          </InfoCard>
          <InfoCard>
            <SectionBar>基本操作</SectionBar>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { key: "WASD",  desc: "移动" },
                { key: "E",     desc: "拾取和投掷物品" },
                { key: "点击", desc: "与物体互动" },
                { key: "ESC",   desc: "暂停菜单" },
              ].map(({ key, desc }) => (
                <div key={key} className="flex items-center gap-3">
                  <KeyBadge>{key}</KeyBadge>
                  <span className="text-sm text-text-secondary">{desc}</span>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard>
            <SectionBar>第一阶段 — 紧急撤离</SectionBar>
            <p className="text-sm text-text-secondary leading-relaxed">你有有限的时间收集物品并将其扔进救生艇。优先选择必需的生存物品：食物、水和工具。你只能携带<strong className="text-text-primary">一名</strong>船员——请谨慎选择。</p>
          </InfoCard>
          <InfoCard>
            <SectionBar>第二阶段 — 海上生存</SectionBar>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">白天，将你的精力用于：</p>
            <ul className="space-y-2 mb-5">
              {["钓鱼获取食物", "进食维持健康", "完成小任务", "与船友交流"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-text-secondary leading-relaxed">当精力耗尽，夜幕降临。你将休息，但睡眠可能被事件打断。使用你带来的物品来应对各种遭遇。</p>
          </InfoCard>
          <InfoCard variant="warning">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
              <h2 className="text-sm font-semibold text-amber">必备生存提示</h2>
            </div>
            <ul className="space-y-2.5">
              {[
                "务必携带钓竿——你的主要食物来源",
                "医疗用品可以在危险事件中救你一命",
                "密切追踪你的健康和饥饿水平——饥饿是常见的死亡原因",
                "并非所有船员都一样有用——Laurel（劳雷尔）、Frederik（弗雷德里克）、Row（罗）和 Captain Whiskers（威斯克船长）各有不同的效果",
                "部分物品有多种用途——可以尝试探索，但不要浪费像 Flare Gun（信号枪）这样的稀有物品",
                "v1.1.2 中 Duct Tape（胶带）维修是可选的，请权衡维修与事件防御",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(245,158,11,0.75)" }}>
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber/60" />
                  {tip}
                </li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard>
            <SectionBar>船友——该带谁</SectionBar>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">你可以带<strong className="text-text-primary">一名船员</strong>上救生艇。每位船员各有不同的优势：</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { name: "Laurel", role: "士气与支援", effect: "改善情绪恢复，在 Hope（希望信号）事件中提供帮助" },
                { name: "Frederik", role: "维修与制作", effect: "更高的维修效率，在漏水事件中有用" },
                { name: "Row", role: "战斗与防御", effect: "帮助对抗像 Eyes（眼睛）和 Anglerfish（鮟鱇鱼）这样的怪物事件" },
                { name: "Captain Whiskers", role: "钓鱼与运气", effect: "v1.1.2 中钓鱼几率+1%，独特的剧情互动" },
              ].map((mate) => (
                <div key={mate.name} className="rounded-xl border p-3" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,14,28,1)" }}>
                  <div className="text-sm font-bold text-text-primary mb-0.5">{mate.name}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber/60 mb-1">{mate.role}</div>
                  <div className="text-xs text-text-secondary leading-relaxed">{mate.effect}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard>
            <SectionBar>常见新手错误</SectionBar>
            <ul className="space-y-2.5">
              {[
                "没有携带 Anchor（锚）——你需要它来应对会摧毁船只的 Giant Squid（巨型鱿鱼）和 Whirlpool（漩涡）事件",
                "过早浪费 Flare Gun（信号枪）或 Flashlight（手电筒）——这些对于 Rescue（救援）结局路线至关重要",
                "忽视 Bait（鱼饵）——没有它，钓鱼会失败，你将挨饿。v1.1.2 中，Bait（鱼饵）只在实际钓到鱼时才会消耗",
                "忘记维修——损坏的船无论你健康如何都会沉没",
                "为你计划中的结局带了错误的船友",
              ].map((mistake) => (
                <li key={mistake} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red/60" />
                  {mistake}
                </li>
              ))}
            </ul>
          </InfoCard>
          <div className="pt-2">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>下一篇指南</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { href: "/items",       label: "物品数据库",  desc: "所有可用物品" },
                { href: "/walkthrough", label: "流程攻略",     desc: "逐步指南" },
                { href: "/events",      label: "事件指南",    desc: "为夜晚做好准备" },
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
      </div>
    </>
  );
}
