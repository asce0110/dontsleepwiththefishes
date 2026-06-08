import type { Metadata } from "next";
import { SeagullPage } from "../../pages/SeagullPage";
export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Seagull Guide",
  description: "Learn whether to feed or shoo seagulls, how food drain works, and how to avoid the community-reported seagull bad ending.",
  openGraph: { title: "Seagull Guide", description: "Whether to feed or shoo seagulls, and how to avoid the bad ending." },
  twitter: { card: "summary_large_image", title: "Seagull Guide", description: "Feed vs Shoo and bad ending prevention." },
};
export default SeagullPage;
