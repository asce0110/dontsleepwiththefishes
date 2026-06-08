import { Construction } from "lucide-react";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  keywords?: string;
}

export function PlaceholderPage({ title, description, keywords }: PlaceholderPageProps) {
  return (
    <>
      <SEO title={title} description={description} keywords={keywords || "dswtf, game guide, wiki"} />
      <div className="mx-auto max-w-2xl px-5 md:px-8 py-20 text-center">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border" style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.18)" }}>
          <Construction className="h-6 w-6 text-amber" />
        </div>
        <h1 className="mb-2 text-text-primary" style={{ fontFamily: "'Pirata One', cursive", fontSize: "1.75rem", letterSpacing: "0.02em" }}>{title}</h1>
        <p className="mb-10 text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">{description}</p>
        <div className="rounded-2xl border p-8 mb-6" style={{ borderColor: "rgba(15,31,56,1)", background: "rgba(8,14,28,1)" }}>
          <p className="text-sm text-text-tertiary mb-6 leading-relaxed">This section is being written. The deep is vast — check back soon.</p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all hover:brightness-110" style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", color: "#04080f" }}>← Back to Wiki Home</Link>
        </div>
      </div>
    </>
  );
}
