import type { Metadata } from "next";
import { CharactersPage } from "../pages/CharactersPage";

export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "DSWTF Characters & Shipmates — Who to Save, Abilities & Best Picks",
  description: "Compare all 4 shipmates in Don't Sleep With The Fishes. Laurel, Frederik, Row, and Captain Whiskers — v1.1.2 Support actions, best endings, pros & cons, and community poll.",
  openGraph: { title: "DSWTF Characters & Shipmates Guide", description: "All 4 shipmates compared — abilities, Support actions, best routes, and community poll. Updated for v1.1.2." },
  twitter: { card: "summary_large_image", title: "DSWTF Characters & Shipmates Guide", description: "Compare all 4 shipmates — who to save and why." },
};

export default CharactersPage;
