import type { Metadata } from "next";
import { AchievementsPage } from "../pages/AchievementsPage";

export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Achievements & Records",
  description: "Track completion goals, lore items, Highest Day Reached, ending checklist, community records, and future Steam achievements.",
  openGraph: { title: "Achievements, Records & Completion Guide", description: "Completion checklist, endings tracker, lore items, highest day records, and Steam achievement status." },
  twitter: { card: "summary_large_image", title: "Achievements & Completion Guide", description: "Track endings, records, lore items, and future Steam achievements." },
};

export default AchievementsPage;
