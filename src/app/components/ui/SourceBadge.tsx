type Confidence = "Official" | "Verified" | "Community" | "Unverified";

const config: Record<Confidence, { bg: string; border: string; color: string; label: string }> = {
  Official: {
    bg: "rgba(52,211,153,0.10)",
    border: "rgba(52,211,153,0.25)",
    color: "rgba(52,211,153,0.90)",
    label: "Official",
  },
  Verified: {
    bg: "rgba(96,165,250,0.10)",
    border: "rgba(96,165,250,0.25)",
    color: "rgba(96,165,250,0.90)",
    label: "Verified",
  },
  Community: {
    bg: "rgba(251,191,36,0.10)",
    border: "rgba(251,191,36,0.25)",
    color: "rgba(251,191,36,0.90)",
    label: "Community",
  },
  Unverified: {
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.20)",
    color: "rgba(239,68,68,0.85)",
    label: "Unverified",
  },
};

const tooltips: Record<Confidence, string> = {
  Official: "Confirmed by official itch.io page or developer devlog",
  Verified: "Personally tested and confirmed in-game",
  Community: "Reported by players on Reddit, itch comments, or Fandom — not independently verified",
  Unverified: "Mentioned but not confirmed — use with caution",
};

export function SourceBadge({ source }: { source: Confidence }) {
  const c = config[source];
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider cursor-help"
      style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}
      title={tooltips[source]}
    >
      {c.label}
    </span>
  );
}

export type { Confidence };
