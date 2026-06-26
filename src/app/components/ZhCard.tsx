"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const NUNITO: React.CSSProperties = { fontFamily: "'Nunito', sans-serif" };

export function Card({ href, icon, title, desc }: { href: string; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Link href={href} className="group flex items-start gap-3 rounded-xl border p-4 transition-all duration-200"
      style={{ borderColor: "rgba(245,158,11,0.09)", background: "rgba(8,14,28,1)" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.28)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.09)"; }}>
      <span className="mt-0.5 shrink-0 text-amber">{icon}</span>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-sm text-text-primary group-hover:text-amber transition-colors" style={NUNITO}>{title}</h3>
        <p className="mt-1 text-[11px] leading-relaxed" style={{ ...NUNITO, color: "rgba(148,163,184,0.85)" }}>{desc}</p>
      </div>
      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-text-secondary group-hover:text-amber transition-colors" />
    </Link>
  );
}
