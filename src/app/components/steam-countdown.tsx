"use client";

import { useState, useEffect } from "react";

const STEAM_URL = "https://store.steampowered.com/app/4834070/Dont_Sleep_With_The_Fishes/";
const STEAM_LAUNCH = new Date("2026-06-26T11:00:00Z");

const labels = {
  en: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds", coming: "COMING TO STEAM — JUNE 26", wishlist: "Wishlist Now", now: "NOW ON STEAM", play: "Play Now" },
  zh: { days: "天", hours: "时", minutes: "分", seconds: "秒", coming: "即将登陆 Steam — 6月26日", wishlist: "加入愿望单", now: "现已上线 Steam", play: "立即游玩" },
};

function calcRemaining() {
  const diff = STEAM_LAUNCH.getTime() - Date.now();
  if (diff <= 0) return { expired: true, d: 0, h: 0, m: 0, s: 0 };
  return { expired: false, d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) };
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[48px]">
      <span className="text-3xl font-bold text-white tabular-nums leading-none" style={{ fontFamily: "'Fredoka', sans-serif", textShadow: "0 0 12px rgba(255,255,255,0.15)" }} suppressHydrationWarning>
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mt-1" style={{ fontFamily: "'Nunito', sans-serif" }}>{label}</span>
    </div>
  );
}

function Separator() { return <span className="text-2xl font-bold text-white/15 pb-5">:</span>; }

export function SteamCountdown({ lang = "en" }: { lang?: "en" | "zh" }) {
  const t = labels[lang];
  const [remaining, setRemaining] = useState(calcRemaining);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setRemaining(calcRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (remaining.expired) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-4 text-center" style={{ background: "linear-gradient(135deg, rgba(23,86,184,0.18) 0%, rgba(12,20,38,0.95) 100%)", borderBottom: "1px solid rgba(23,86,184,0.25)" }}>
        <span className="text-sm font-black text-white tracking-wide" style={{ fontFamily: "'Nunito', sans-serif" }}>{t.now}</span>
        <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold transition-all hover:brightness-110" style={{ background: "linear-gradient(135deg, #1a9fff, #176fb8)", color: "#fff", fontFamily: "'Nunito', sans-serif", boxShadow: "0 0 20px rgba(26,159,255,0.35)" }}>{t.play}</a>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-5 text-center" style={{ background: "linear-gradient(135deg, rgba(23,86,184,0.12) 0%, rgba(12,20,38,0.95) 100%)", borderBottom: "1px solid rgba(23,86,184,0.2)" }}>
      <div className="flex items-center gap-2">
        <span className="text-sm font-black text-white/90 uppercase tracking-wide" style={{ fontFamily: "'Nunito', sans-serif" }}>{t.coming}</span>
      </div>
      <div className="flex items-center gap-1">
        <Digit value={remaining.d} label={t.days} /><Separator />
        <Digit value={remaining.h} label={t.hours} /><Separator />
        <Digit value={remaining.m} label={t.minutes} /><Separator />
        <Digit value={remaining.s} label={t.seconds} />
      </div>
      <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold transition-all hover:brightness-110" style={{ background: "linear-gradient(135deg, #1a9fff, #176fb8)", color: "#fff", fontFamily: "'Nunito', sans-serif", boxShadow: "0 0 20px rgba(26,159,255,0.30)" }}>{t.wishlist}</a>
    </div>
  );
}
