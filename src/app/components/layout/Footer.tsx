"use client";

import { ExternalLink, Fish, Anchor, Waves } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const quickLinks = [
  { label: "Getting Started", href: "/guide" },
  { label: "Walkthrough",     href: "/walkthrough" },
  { label: "Items Database",  href: "/items" },
  { label: "Endings Guide",   href: "/endings" },
  { label: "FAQ",             href: "/faq" },
  { label: "Changelog",       href: "/changelog" },
];

function WaveDivider() {
  return (
    <div aria-hidden className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: "4px" }}>
      <div className="absolute inset-x-0 top-0" style={{
        height: "2px",
        background: "linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.12) 10%, rgba(245,158,11,0.45) 30%, rgba(245,158,11,0.65) 50%, rgba(245,158,11,0.45) 70%, rgba(245,158,11,0.12) 90%, transparent 100%)",
        boxShadow: "0 0 18px rgba(245,158,11,0.25), 0 0 40px rgba(245,158,11,0.08)",
      }} />
      {/* Wave dots */}
      {[0.18, 0.35, 0.52, 0.68, 0.82].map((x, i) => (
        <span key={i} className="absolute rounded-full" style={{
          width: i % 2 === 0 ? "3px" : "2px",
          height: i % 2 === 0 ? "3px" : "2px",
          left: `${x * 100}%`,
          top: "-1px",
          background: `rgba(245,158,11,${0.3 + i * 0.05})`,
          boxShadow: `0 0 ${4 + i * 1.5}px rgba(245,158,11,0.25)`,
          animation: `waveDot ${2.5 + i * 0.4}s ${i * 0.3}s ease-in-out infinite`,
        }} />
      ))}
      <style>{`
        @keyframes waveDot {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-3px); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}

function FooterBubbles() {
  const bubbles = [
    { size: 18, left: "8%",  top: "15%", delay: "0s" },
    { size: 10, left: "22%", top: "55%", delay: "1.5s" },
    { size: 24, left: "40%", top: "25%", delay: "0.8s" },
    { size: 14, left: "58%", top: "60%", delay: "2.2s" },
    { size: 20, left: "75%", top: "18%", delay: "1.1s" },
    { size: 12, left: "90%", top: "50%", delay: "0.4s" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b, i) => (
        <span key={i} className="absolute rounded-full" style={{
          width: b.size,
          height: b.size,
          left: b.left,
          top: b.top,
          background: `radial-gradient(circle at 35% 35%, rgba(245,158,11,0.06), rgba(245,158,11,0.02))`,
          border: "1px solid rgba(245,158,11,0.06)",
          animation: `footerFloat ${4 + i * 0.8}s ${b.delay} infinite ease-in-out`,
        }} />
      ))}
      <style>{`
        @keyframes footerFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-8px) scale(1.05); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  const isZh = pathname.startsWith("/zh");
  const year = new Date().getFullYear();

  const links = isZh
    ? quickLinks.map(l => ({...l, href: "/zh" + l.href, label: ({"Getting Started":"新手指南","Walkthrough":"流程攻略","Items Database":"物品数据库","Endings Guide":"结局攻略","FAQ":"常见问题","Changelog":"更新日志"} as Record<string,string>)[l.label] || l.label}))
    : quickLinks;

  const homeHref = isZh ? "/zh" : "/";
  const zhFooterText = isZh
    ? { guide: "Don't Sleep With The Fishes 粉丝攻略站。与 DopplerGhost 无关。", play: "在 itch.io 游玩", quickLinks: "快速链接", resources: "资源", official: "官方游戏", about: "关于本站", nowOn: "现已上线", copyright: "DSWTF Wiki — 粉丝制作，与 DopplerGhost 无关" }
    : { guide: "A fan-made survival guide for Don't Sleep With The Fishes. Not affiliated with DopplerGhost. Made by survivors, for survivors.", play: "Play on itch.io", quickLinks: "Quick Links", resources: "Resources", official: "Official Game", about: "About This Wiki", nowOn: "Now on", copyright: `© ${year} DSWTF Wiki — Fan-made, not affiliated with DopplerGhost` };

  return (
    <footer className="relative border-t" style={{ borderColor: "rgba(245,158,11,0.10)", background: "linear-gradient(to bottom, rgba(5,10,20,1), rgba(4,8,15,1))" }}>

      <WaveDivider />
      <FooterBubbles />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12">

          {/* Brand column */}
          <div className="sm:col-span-5">
            <Link href={homeHref} className="group inline-flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300"
                style={{ background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.18)" }}>
                <Fish className="h-[17px] w-[17px] text-amber transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="text-lg text-text-primary" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, letterSpacing: "0.02em" }}>DSWTF Wiki</span>
            </Link>
            <p className="text-xs leading-relaxed mb-5 max-w-xs" style={{ color: "rgba(188,207,230,0.7)" }}>
              {zhFooterText.guide}
            </p>
            <a
              href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-bold transition-all duration-200"
              style={{ borderColor: "rgba(245,158,11,0.20)", background: "rgba(245,158,11,0.06)", color: "#f59e0b" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.14)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.40)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.20)";
              }}
            >
              <ExternalLink className="h-3 w-3" />
              {zhFooterText.play}
            </a>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="h-3 w-3 text-amber/40" />
              <span className="text-xs font-black uppercase tracking-[0.18em] text-amber/60">{zhFooterText.quickLinks}</span>
            </div>
            <ul className="space-y-1.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 py-1.5 text-xs transition-colors duration-150"
                    style={{ color: "rgba(188,207,230,0.7)" }}
                  >
                    <span className="h-px w-0 group-hover:w-3 transition-all duration-200 rounded-full" style={{ background: "rgba(245,158,11,0.50)" }} />
                    <span className="group-hover:text-amber/80 transition-colors duration-150">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Community */}
          <div className="sm:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="h-3 w-3 text-teal/40" />
              <span className="text-xs font-black uppercase tracking-[0.18em] text-teal/55">{zhFooterText.resources}</span>
            </div>
            <ul className="space-y-1.5">
              <li>
                <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2 py-1.5 text-xs transition-colors duration-150"
                  style={{ color: "rgba(188,207,230,0.7)" }}>
                  <ExternalLink className="h-3 w-3 shrink-0 group-hover:text-amber/60 transition-colors" />
                  <span className="group-hover:text-amber/80 transition-colors">{zhFooterText.official}</span>
                </a>
              </li>
              <li>
                <a href="https://itch.io" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2 py-1.5 text-xs transition-colors duration-150"
                  style={{ color: "rgba(188,207,230,0.7)" }}>
                  <ExternalLink className="h-3 w-3 shrink-0 group-hover:text-amber/60 transition-colors" />
                  <span className="group-hover:text-amber/80 transition-colors">itch.io</span>
                </a>
              </li>
              <li className="pt-3 mt-3 border-t" style={{ borderColor: "rgba(245,158,11,0.07)" }}>
                <Link href={isZh ? "/zh/about" : "/about"} className="group flex items-center gap-2 py-1.5 text-xs transition-colors duration-150"
                  style={{ color: "rgba(188,207,230,0.7)" }}>
                  <span className="group-hover:text-amber/80 transition-colors">{zhFooterText.about}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(245,158,11,0.06)" }}>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-amber/30" />
            <p className="text-xs" style={{ color: "rgba(122,146,170,0.75)" }}>
              {isZh ? `DSWTF Wiki — 粉丝制作，与 DopplerGhost 无关` : `© ${year} DSWTF Wiki — Fan-made, not affiliated with DopplerGhost`}
            </p>
          </div>
          <p className="text-xs flex items-center gap-1.5" style={{ color: "rgba(122,146,170,0.75)" }}>
            <span className="inline-block h-1 w-1 rounded-full" style={{ background: "rgba(245,158,11,0.30)" }} />
            {isZh ? "现已上线" : "Now on"}{" "}
            <a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="hover:text-amber/60 transition-colors">itch.io</a>
            {" "}&amp;{" "}
            <a href="https://store.steampowered.com/app/4834070/Dont_Sleep_With_The_Fishes/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400/60 transition-colors">Steam</a>
          </p>
        </div>

        {/* Friend link */}
        <div className="flex justify-center pb-6">
          <a href="https://findly.tools/don-t-sleep-with-the-fishes?utm_source=don-t-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer">
            <img src="https://findly.tools/badges/findly-tools-badge-light.svg" alt="Featured on Findly.tools" width="175" height="55" />
          </a>
        </div>
      </div>
    </footer>
  );
}
