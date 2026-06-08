import type { Metadata } from "next";
import { WalkthroughPage } from "../pages/WalkthroughPage";
export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Walkthrough",
  description: "Follow a spoiler-aware route from ship evacuation to daily survival, rescue attempts, endings, and common failure points.",
  openGraph: { title: "Don't Sleep With The Fishes Walkthrough", description: "Day-by-day survival route from ship evacuation to rescue. Spoiler-aware." },
  twitter: { card: "summary_large_image", title: "Walkthrough", description: "Day-by-day survival route from ship evacuation to rescue." },
};
export default WalkthroughPage;
