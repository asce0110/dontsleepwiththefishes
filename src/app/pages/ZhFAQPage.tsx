"use client";

import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import { SourceBadge } from "../components/ui/SourceBadge";
import Link from "next/link";
import { HelpCircle, ExternalLink, ChevronRight, Sparkles, ShieldCheck } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

const generalFaq: FAQItem[] = [
  {
    q: "什么是 Don't Sleep With The Fishes？",
    a: <>Don't Sleep With The Fishes 是 DopplerGhost 开发的一款海洋主题点击式生存恐怖游戏。你扮演一名船长，你的船已受损——迅速将物品打捞到救生艇上，选择一名船员，然后通过钓鱼、进食、维修和处理夜间事件日复一日地生存下去。游戏有多个结局。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>来源：官方 itch.io 页面</span></>,
  },
  {
    q: "如何下载和安装游戏？",
    a: <>在官方 itch.io 页面购买游戏（$1.99）。购买后，点击 itch 页面顶部的 <strong>Download（下载）</strong>按钮获取 Windows 可执行文件。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>来源：官方 itch.io 页面及社区下载说明</span></>,
  },
  {
    q: "游戏支持哪些平台？",
    a: <>目前<strong>仅支持 Windows</strong>。官方 itch 页面列出的平台为 Windows。目前没有原生的 Mac、Linux 或移动端版本。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>来源：官方 itch.io 页面</span></>,
  },
  {
    q: "Don't Sleep With The Fishes 会上线 Steam 吗？",
    a: <>是的！Don't Sleep With The Fishes <strong>将于2026年6月26日登陆 Steam</strong>。{" "}
      <a href="https://store.steampowered.com/app/4834070/Dont_Sleep_With_The_Fishes/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors underline">立即添加愿望单</a>{" "}
      以上线当天获取通知。Steam 版可能包含自定义成就。查看{" "}
      <Link href="/steam" className="underline hover:text-amber">Steam 页面</Link>{" "}
      了解完整详情及 Steam 与 itch.io 对比。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>来源：官方 Steam 商店页面 + v1.1.2 开发日志</span></>,
  },
  {
    q: "itch.io 购买者能获得 Steam 密钥吗？",
    a: <>开发者<strong>尚未确认</strong>。一些游戏开发者确实会在 Steam 发布后向 itch.io 购买者提供 Steam 密钥，但这并非保证。请等待 DopplerGhost 的官方公告。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(251,191,36,0.7)" }}>来源：尚未确认——社区猜测</span></>,
  },
  {
    q: "可以免费获取游戏吗？",
    a: <>本指南不提供或链接盗版副本。游戏在 itch.io 上售价 <strong>$1.99</strong>，支持独立开发者。如果暂时无法负担，可以添加愿望单并关注折扣或 Steam 发布。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>来源：官方 itch.io 定价</span></>,
  },
];

const gameplayFaq: FAQItem[] = [
  {
    q: "操作方式是什么？",
    a: <><strong>WASD</strong> — 移动。<strong>E</strong> — 拾取和投掷物品。<strong>鼠标左键</strong> — 与物体互动。<strong>右 Shift</strong> — 额外操作（社区提示）。<strong>ESC</strong> — 暂停菜单。部分玩家反馈在与箱子/桶互动后按空格键可以触发额外操作。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>来源：官方 itch + 社区提示</span></>,
  },
  {
    q: "有多少种结局？",
    a: <>官方 itch 页面确认有<strong>多个结局</strong>，但未给出确切数量。社区报告表明有 12 种以上不同的结局，包括救援、死亡和隐藏结局。查看{" "}
      <Link href="/endings" className="underline hover:text-amber">结局指南</Link>{" "}
      了解完整详情及来源可信度标注。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>来源：官方（确认有多个结局）+ 社区（具体数量）</span></>,
  },
  {
    q: "如何让自己被发现 / 获救？",
    a: <>在 Hope（希望信号）和 Other People（其他人）夜间事件中使用<strong> Flare Gun（信号枪）或 Flashlight（手电筒）</strong>。v1.1.2 中救援结局几率略有提高。查看{" "}
      <Link href="/endings/rescue" className="underline hover:text-amber">Rescue（救援）指南</Link>{" "}
      了解详情。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>来源：官方 v1.1.2 开发日志（救援几率提高）+ 社区（信号枪/手电筒方法）</span></>,
  },
  {
    q: "Captain Whiskers（威斯克船长）有什么作用？",
    a: <>Captain Whiskers（威斯克船长）是一只猫船员。在 <strong>v1.1.2</strong> 中，Captain Whiskers（威斯克船长）提供 <strong>+1% 钓鱼捕获几率</strong>加成。这只猫还有独特的剧情互动。查看{" "}
      <Link href="/characters/captain-whiskers" className="underline hover:text-amber">Captain Whiskers（威斯克船长）指南</Link>{" "}
      （即将推出）。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>来源：官方 v1.1.2 开发日志</span></>,
  },
  {
    q: "Giant Squid（巨型鱿鱼）是什么？如何应对？",
    a: <>Giant Squid（巨型鱿鱼）是一个可能摧毁你船只的夜间事件。Reddit 上的一条<strong>社区回复表示使用 Anchor（锚）</strong>。Harpoon Gun（鱼叉枪）也被提及为可能的应对方式，但未经证实。该事件可能与 Pay Debt（还债）和 True Ending（真结局）路线相关。查看{" "}
      <Link href="/events/giant-squid" className="underline hover:text-amber">Giant Squid（巨型鱿鱼）指南</Link>。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(251,191,36,0.7)" }}>来源：社区（Reddit）——未经独立验证</span></>,
  },
  {
    q: "'还债'是什么意思？",
    a: <>这是一个<strong>社区玩家仍在探索</strong>的游戏机制。似乎与 Giant Squid（巨型鱿鱼）遭遇以及可能的 Heart of the Sea（海洋之心）/ Heart Piece（心之碎片）物品有关。目前尚无确认的解决方案步骤。查看{" "}
      <Link href="/endings/pay-debt" className="underline hover:text-amber">Pay Debt（还债）追踪页面</Link>。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(251,191,36,0.7)" }}>来源：社区（Reddit 讨论）——路线未经确认</span></>,
  },
  {
    q: "Heart Piece（心之碎片）/ Heart Note（心之笔记）有什么用？",
    a: <>Reddit 上的玩家报告发现了 Heart Note（心之笔记）和 Heart Piece（心之碎片）物品，但其<strong>用途尚未确认</strong>。社区理论认为它们可能与隐藏路线或 True Ending（真结局）有关。我们正在追踪——查看{" "}
      <Link href="/items/heart-of-the-sea" className="underline hover:text-amber">Heart of the Sea（海洋之心）页面</Link>。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(239,68,68,0.7)" }}>来源：未经证实——仅玩家报告</span></>,
  },
  {
    q: "Message in a Bottle（瓶中信）有什么用？",
    a: <>Reddit 上的玩家询问过此物品的用途。目前<strong>其功能未知</strong>。如果你发现了它的作用，社区将受益于你的报告。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(239,68,68,0.7)" }}>来源：未经证实——仅玩家提问</span></>,
  },
  {
    q: "生存天数的世界纪录是多少？",
    a: <>没有官方的世界纪录。Reddit 玩家自我报告了 <strong>52 天、68 天和 75 天</strong>的生存记录，但这些是未经证实的声明，没有统一的证据标准。v1.1.2 为游戏添加了"最高到达天数"记录。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.7)" }}>来源：官方（记录功能已添加）+ 未经证实（玩家天数声明）</span></>,
  },
  {
    q: "有中文或韩文翻译吗？",
    a: <>目前没有官方的中文或韩文翻译。社区翻译补丁可能可用——请查看社区论坛——但这些都是<strong>非官方的，可能与当前游戏版本存在兼容性问题</strong>。请务必从可信来源下载。<br /><br /><span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(251,191,36,0.7)" }}>来源：社区——无官方翻译</span></>,
  },
];

function FaqCard({ q, a }: FAQItem) {
  return (
    <InfoCard>
      <h3 className="text-sm font-bold text-text-primary mb-2" style={NUNITO}>{q}</h3>
      <div className="text-xs text-text-secondary leading-relaxed" style={NUNITO}>{a}</div>
    </InfoCard>
  );
}

export function ZhFAQPage() {
  return (
    <>
      <SEO
        title="FAQ：Steam、Mac、移动端、下载与操作"
        description="Don't Sleep With The Fishes 常见问题：Steam 发布、Mac 和移动端兼容性、下载方式、操作、Giant Squid（巨型鱿鱼）、Pay Debt（还债）、Heart Piece（心之碎片）和世界纪录。官方+社区解答。"
       
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <HelpCircle className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">常见问题</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-2" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}>Don't Sleep With The Fishes 常见问题</h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-lg">关于 Steam 发布、平台、下载、操作和游戏机制的常见问题。答案来源于官方开发日志和社区报告。</p>
        </div>

        {/* Quick Answer */}
        <InfoCard className="mb-6">
          <h2 className="text-base font-bold text-text-primary mb-2" style={NUNITO}>快速解答</h2>
          <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
            本 FAQ 回答了关于 Don't Sleep With The Fishes 的常见问题，涵盖下载、Steam 状态、操作、结局、救援路线、Giant Squid（巨型鱿鱼）、Pay Debt（还债）、Heart Pieces（心之碎片）、翻译以及安全的官方链接。
          </p>
        </InfoCard>

        {/* General FAQ */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-amber" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>平台与下载</h2>
          </div>
          <div className="space-y-3">
            {generalFaq.map((faq) => <FaqCard key={faq.q} {...faq} />)}
          </div>
        </div>

        {/* Gameplay FAQ */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-amber" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>游戏玩法与机制</h2>
          </div>
          <div className="space-y-3">
            {gameplayFaq.map((faq) => <FaqCard key={faq.q} {...faq} />)}
          </div>
        </div>

        {/* Official links */}
        <InfoCard variant="amber" className="mt-8">
          <h2 className="text-sm font-semibold text-amber mb-2">官方链接</h2>
          <div className="space-y-1.5">
            <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-amber transition-colors" style={NUNITO}>
              <ExternalLink className="h-3 w-3" /> itch.io 官方游戏页面
            </a>
            <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes/devlog/1546268/version-112" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-amber transition-colors" style={NUNITO}>
              <ExternalLink className="h-3 w-3" /> v1.1.2 开发日志
            </a>
          </div>
        </InfoCard>

        {/* Related links */}
        <div className="mt-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>相关指南</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { href: "/guide", label: "新手指南", desc: "从这里开始你的首次游玩" },
              { href: "/faq/steam-release", label: "Steam 发布 FAQ", desc: "关于 Steam 版本的一切" },
              { href: "/faq/mac", label: "Mac 兼容性", desc: "在 Mac 上运行及解决方案" },
              { href: "/faq/mobile", label: "移动版 FAQ", desc: "Android、iOS 及移动端状态" },
            ].map(({ href, label, desc }) => (
              <Link key={label} href={href} className="group flex items-center justify-between gap-2 rounded-xl border px-4 py-3 transition-all duration-200" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,14,28,1)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.30)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,31,56,1)"; }}>
                <div>
                  <div className="text-sm font-medium text-text-primary group-hover:text-amber transition-colors">{label}</div>
                  <div className="text-xs text-text-tertiary">{desc}</div>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-text-muted group-hover:text-amber transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
