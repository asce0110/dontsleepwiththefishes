"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div className={["rounded-2xl border border-border-color bg-bg-secondary p-6", hover ? "transition-all duration-200 hover:border-amber/25 hover:bg-bg-tertiary" : "", className].join(" ")}>
      {children}
    </div>
  );
}

interface NavCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  badge?: string;
}

export function NavCard({ title, description, icon, href, badge }: NavCardProps) {
  return (
    <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.12 }}>
      <Link href={href} className="group flex items-start gap-3.5 rounded-xl border border-border-color bg-bg-tertiary px-4 py-4 transition-all duration-200 hover:border-amber/30 hover:bg-bg-surface" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 group-hover:border-amber/50" style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.15)" }}>
          <span className="text-amber-muted transition-colors duration-200 group-hover:text-amber [&>svg]:h-4 [&>svg]:w-4">{icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-sm font-medium text-text-primary group-hover:text-amber transition-colors duration-200">{title}</span>
            {badge && <span className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide" style={{ background: "rgba(245,158,11,0.12)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.25)" }}>{badge}</span>}
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">{description}</p>
        </div>
        <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-text-secondary transition-all duration-200 group-hover:text-amber group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}

interface InfoCardProps {
  children: ReactNode;
  variant?: "default" | "warning" | "danger" | "amber" | "teal";
  className?: string;
}

export function InfoCard({ children, variant = "default", className = "" }: InfoCardProps) {
  const styles: Record<string, { border: string; bg: string }> = {
    default: { border: "rgba(15,31,56,1)",      bg: "rgba(8,14,28,1)" },
    amber:   { border: "rgba(245,158,11,0.25)", bg: "rgba(245,158,11,0.06)" },
    warning: { border: "rgba(245,158,11,0.25)", bg: "rgba(245,158,11,0.06)" },
    danger:  { border: "rgba(239,68,68,0.25)",  bg: "rgba(239,68,68,0.06)" },
    teal:    { border: "rgba(13,148,136,0.25)",  bg: "rgba(13,148,136,0.06)" },
  };
  const s = styles[variant];
  return (
    <div className={["rounded-2xl border p-6", className].join(" ")} style={{ borderColor: s.border, background: s.bg }}>
      {children}
    </div>
  );
}
