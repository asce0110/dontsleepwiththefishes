"use client";

import { useState, useEffect } from "react";
import { SEO } from "../components/SEO";
import { InfoCard } from "../components/ui/Card";
import Link from "next/link";
import { Users, Star, Fish, Shield, Wrench, Heart, Sparkles, ChevronRight, ExternalLink, Anchor, Siren } from "lucide-react";

const NUNITO = { fontFamily: "'Nunito', sans-serif" } as const;
const PIRATA: React.CSSProperties = { fontFamily: "'Fredoka', sans-serif", fontWeight: 600 };

const characters = [
  {
    name: "Laurel",
    icon: <Heart className="h-5 w-5" />,
    role: "士气与支援",
    accent: "#f59e0b",
    ability: "改善士气恢复，在 Hope(希望信号) 事件中有帮助",
    supportAction: "白天食物恢复更多饥饿值",
    bestDay: "恢复日",
    pros: ["提升士气恢复", "在 Hope 救援事件中表现强劲", "适合以救援(Rescue)为目标的路线", "有助于长时间维持理智"],
    cons: ["无直接战斗/防御帮助", "在维修繁重的日子里帮助较少", "饥饿管理仍需钓鱼"],
    bestFor: "救援结局、真结局(True Ending)路线",
    worstFor: "战斗繁重路线、Giant Squid(巨型鱿鱼) 遭遇",
  },
  {
    name: "Frederik",
    icon: <Wrench className="h-5 w-5" />,
    role: "修理与制作",
    accent: "#3b82f6",
    ability: "更好的维修效率，在 Leak(漏水) 事件中有用",
    supportAction: "白天帮助 Bait(鱼饵) 保证钓到鱼",
    bestDay: "钓鱼日",
    pros: ["更好的维修效率节省体力", "对抗 Leak 和 Eerie Melody(诡异旋律) 事件表现强劲", "支援行动保证有鱼饵时必上鱼", "适合大多数路线的全能型"],
    cons: ["无士气或战斗加成", "维修收益只在受损日才有意义", "如果你已经有 Duct Tape(胶带) 影响较小"],
    bestFor: "Pay Debt(还债) 路线、通用生存",
    worstFor: "避免维修的路线（囤积 Duct Tape）",
  },
  {
    name: "Row",
    icon: <Shield className="h-5 w-5" />,
    role: "战斗与防御",
    accent: "#ef4444",
    ability: "帮助应对 Eyes(眼睛) 和 Anglerfish(鮟鱇鱼) 等怪物事件",
    supportAction: "白天维修消耗更少体力",
    bestDay: "维修日",
    pros: ["防御 Eyes、Anglerfish 和怪物事件", "维修支援在修复日节省体力", "最适合在高威胁夜晚存活", "防止船员死亡事件"],
    cons: ["无钓鱼或食物加成", "在和平夜晚帮助较少", "士气支援极少"],
    bestFor: "怪物繁重路线、长期生存挑战",
    worstFor: "威胁较少的和平救援路线",
  },
  {
    name: "Captain Whiskers(威斯克船长)",
    icon: <Fish className="h-5 w-5" />,
    role: "钓鱼与运气",
    accent: "#22c55e",
    ability: "v1.1.2 中钓鱼几率 +1%，独特的传说互动",
    supportAction: "被动 +1% 钓鱼捕获几率（始终生效）",
    bestDay: "任意钓鱼日",
    pros: ["+1% 钓鱼捕获几率（v1.1.2 增强）", "被动加成——始终生效", "独特的传说互动和对话", "虽然微小，但在长期生存中累积效果显著"],
    cons: ["所有船员中机械影响最小", "没有主动支援行动可触发", "无防御或维修帮助", "短期游玩中 1% 可忽略不计"],
    bestFor: "长期生存记录、全收集挑战",
    worstFor: "速通、救援为主的短期游玩",
  },
];

const comparisonColumns = [
  { key: "ability" as const, label: "能力" },
  { key: "supportAction" as const, label: "支援行动 (v1.1.2)" },
  { key: "bestDay" as const, label: "最佳日期" },
  { key: "bestFor" as const, label: "最适合" },
];

// Simple localStorage-based poll
function CommunityPoll() {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [voted, setVoted] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("dswtf-character-poll");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setVotes(data.votes || {});
        setVoted(data.voted || null);
      } catch {}
    }
  }, []);

  const castVote = (name: string) => {
    if (voted) return;
    const newVotes = { ...votes, [name]: (votes[name] || 0) + 1 };
    setVotes(newVotes);
    setVoted(name);
    localStorage.setItem("dswtf-character-poll", JSON.stringify({ votes: newVotes, voted: name }));
  };

  const total = Object.values(votes).reduce((a, b) => a + b, 0) || 1;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
        {characters.map((ch) => {
          const pct = Math.round(((votes[ch.name] || 0) / total) * 100);
          return (
            <button
              key={ch.name}
              onClick={() => castVote(ch.name)}
              disabled={!!voted}
              className="group relative overflow-hidden rounded-xl border px-4 py-3 text-left transition-all duration-200"
              style={{
                borderColor: voted === ch.name ? `${ch.accent}66` : voted ? "rgba(15,31,56,0.6)" : "rgba(15,31,56,1)",
                background: voted === ch.name ? `${ch.accent}11` : "rgba(8,14,28,1)",
                cursor: voted ? "default" : "pointer",
                opacity: voted && voted !== ch.name ? 0.55 : 1,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span style={{ color: ch.accent }}>{ch.icon}</span>
                  <span className="text-sm font-bold text-text-primary" style={NUNITO}>{ch.name}</span>
                </div>
                <span className="text-xs font-bold" style={{ color: ch.accent, ...NUNITO }}>{pct}%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(15,31,56,1)" }}>
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: ch.accent, boxShadow: `0 0 6px ${ch.accent}44` }} />
              </div>
              {!voted && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" style={{ background: `${ch.accent}11` }}>
                  <span className="text-xs font-black uppercase tracking-wider" style={{ color: ch.accent, ...NUNITO }}>投票</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
      {voted && (
        <p className="text-center text-xs mb-2" style={{ color: "rgba(122,146,170,0.5)", ...NUNITO }}>
          你投票给了 <strong style={{ color: "rgba(245,158,11,0.8)" }}>{voted}</strong>。总票数：{total}。
        </p>
      )}
      <p className="text-center text-xs" style={{ color: "rgba(122,146,170,0.35)", ...NUNITO }}>
        投票仅保存在你的浏览器中。非科学投票。
      </p>
    </div>
  );
}

export function ZhCharactersPage() {
  return (
    <>
      <SEO
        title="角色与船员 — 该救谁"
        description="对比 Don't Sleep With The Fishes 中全部 4 名船员。Laurel、Frederik、Row 和 Captain Whiskers——能力、支援行动、最佳路线及社区投票。"
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)" }}>
              <Users className="h-3.5 w-3.5 text-amber" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber">角色</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)", color: "rgba(52,211,153,0.85)" }}>
              <Sparkles className="h-3 w-3" /> v1.1.2
            </span>
          </div>
          <h1 className="text-text-primary mb-3" style={{ ...PIRATA, fontSize: "2rem", letterSpacing: "0.02em" }}>
            Don't Sleep With The Fishes{" "}
            <span style={{ background: "linear-gradient(135deg, #f59e0b 0%, #fde68a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>角色与船员</span>
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl" style={NUNITO}>
            你可以带<strong className="text-text-primary">一名船员</strong>上救生艇。每名船员都有独特的能力、v1.1.2 支援行动以及针对不同结局的不同优势。明智选择——选错船员可能让你输掉一局。
          </p>
        </div>

        {/* Quick answer */}
        <InfoCard className="mb-6">
          <div className="flex items-start gap-3">
            <Star className="h-5 w-5 shrink-0 mt-0.5 text-amber" />
            <div>
              <h2 className="text-base font-bold text-text-primary mb-1" style={NUNITO}>快速选择</h2>
              <p className="text-sm text-text-secondary leading-relaxed" style={NUNITO}>
                <strong className="text-text-primary">Frederik</strong> 是大多数玩家的最佳全能选择——维修效率和保证上鱼覆盖了两个最常见的失败点。{" "}
                如果你害怕怪物事件，选 <strong className="text-text-primary">Row</strong>。{" "}
                如果你追求救援路线，选 <strong className="text-text-primary">Laurel</strong>。{" "}
                <strong className="text-text-primary">Captain Whiskers</strong> 适合完成度和长期生存炫耀。
              </p>
            </div>
          </div>
        </InfoCard>

        {/* Character detail cards */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-amber" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>认识船员</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {characters.map((ch) => (
              <InfoCard key={ch.name}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: `${ch.accent}18`, border: `1px solid ${ch.accent}33` }}>
                    <span style={{ color: ch.accent }}>{ch.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary" style={NUNITO}>{ch.name}</h3>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: `${ch.accent}99`, ...NUNITO }}>{ch.role}</span>
                  </div>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mb-3" style={NUNITO}>{ch.ability}</p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-teal/70 mb-1.5">优点</div>
                    <ul className="space-y-1">
                      {ch.pros.map((p) => (
                        <li key={p} className="flex items-start gap-1.5 text-xs text-text-secondary" style={NUNITO}>
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full" style={{ background: "#22c55e" }} />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-red/70 mb-1.5">缺点</div>
                    <ul className="space-y-1">
                      {ch.cons.map((c) => (
                        <li key={c} className="flex items-start gap-1.5 text-xs text-text-secondary" style={NUNITO}>
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full" style={{ background: "#ef4444" }} />{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full px-2 py-0.5 text-xs font-bold" style={{ background: `${ch.accent}18`, color: ch.accent, border: `1px solid ${ch.accent}33`, ...NUNITO }}>最适合：{ch.bestFor}</span>
                  <span className="rounded-full px-2 py-0.5 text-xs font-bold" style={{ background: "rgba(239,68,68,0.08)", color: "rgba(239,68,68,0.7)", border: "1px solid rgba(239,68,68,0.18)", ...NUNITO }}>不适合：{ch.worstFor}</span>
                </div>
              </InfoCard>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-amber" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>快速对比</h2>
          </div>
          <InfoCard>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "collapse", minWidth: 500 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(15,31,56,1)" }}>
                    <th className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>船员</th>
                    {comparisonColumns.map((col) => (
                      <th key={col.key} className="py-2.5 pr-3 text-xs font-black uppercase tracking-widest text-text-tertiary" style={NUNITO}>{col.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {characters.map((ch, i) => (
                    <tr key={ch.name} style={{ borderBottom: i < characters.length - 1 ? "1px solid rgba(15,31,56,0.5)" : "none" }}>
                      <td className="py-3 pr-3">
                        <div className="flex items-center gap-2">
                          <span style={{ color: ch.accent }}>{ch.icon}</span>
                          <span className="text-xs font-bold text-text-primary" style={NUNITO}>{ch.name}</span>
                        </div>
                      </td>
                      <td className="py-3 pr-3 text-xs text-text-secondary" style={NUNITO}>{ch.ability}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary" style={NUNITO}>{ch.supportAction}</td>
                      <td className="py-3 pr-3 text-xs text-text-secondary" style={NUNITO}>{ch.bestDay}</td>
                      <td className="py-3 text-xs" style={{ color: ch.accent, ...NUNITO }}>{ch.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfoCard>
        </div>

        {/* Community Poll */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-5 w-0.5 rounded-full bg-amber" />
            <h2 className="text-base font-bold text-text-primary" style={NUNITO}>社区投票：你带谁？</h2>
          </div>
          <InfoCard>
            <CommunityPoll />
          </InfoCard>
        </div>

        {/* Related */}
        <div className="mt-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(245,158,11,0.50)" }}>相关攻略</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { href: "/guide", label: "新手攻略", desc: "船员选择与撤离", icon: <Star className="h-3.5 w-3.5" /> },
              { href: "/walkthrough", label: "流程攻略", desc: "按天生存路线", icon: <Anchor className="h-3.5 w-3.5" /> },
              { href: "/endings", label: "结局攻略", desc: "哪个船员适合哪个结局", icon: <Siren className="h-3.5 w-3.5" /> },
            ].map(({ href, label, desc, icon }) => (
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
