import { ExternalLink, Fish } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Getting Started", href: "/getting-started" },
  { label: "Walkthrough",     href: "/walkthrough" },
  { label: "Items Database",  href: "/items" },
  { label: "Endings Guide",   href: "/endings" },
  { label: "FAQ",             href: "/faq" },
  { label: "Changelog",       href: "/changelog" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-color bg-bg-secondary">
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border" style={{ background: "rgba(245,158,11,0.10)", borderColor: "rgba(245,158,11,0.20)" }}>
                <Fish className="h-3.5 w-3.5 text-amber" />
              </div>
              <span className="text-base text-text-primary" style={{ fontFamily: "'Pirata One', cursive", letterSpacing: "0.03em" }}>DSWTF Wiki</span>
            </div>
            <p className="text-xs text-text-tertiary leading-relaxed">Fan-made survival guide for Don't Sleep With The Fishes. Not affiliated with DopplerGhost.</p>
          </div>
          <div>
            <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-amber/60">Quick Links</div>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}><Link to={link.href} className="text-xs text-text-tertiary hover:text-amber/80 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-amber/60">Resources</div>
            <ul className="space-y-2">
              <li><a href="https://dopplerghost.itch.io/dont-sleep-with-the-fishes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-text-tertiary hover:text-amber/80 transition-colors">Official Game Page <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="https://itch.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-text-tertiary hover:text-amber/80 transition-colors">itch.io <ExternalLink className="h-3 w-3" /></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderColor: "rgba(15,31,56,1)" }}>
          <p className="text-[11px] text-text-muted">© {new Date().getFullYear()} DSWTF Wiki · Fan-made · Not affiliated with DopplerGhost</p>
          <p className="text-[11px] text-text-muted">Built with ❤ for survivors</p>
        </div>
      </div>
    </footer>
  );
}
