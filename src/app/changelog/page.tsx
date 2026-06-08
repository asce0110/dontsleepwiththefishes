import type { Metadata } from "next";
import { ChangelogPage } from "../pages/ChangelogPage";

export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Wiki Changelog",
  description: "Recent wiki updates, new guides, source verification changes, corrections, and official patch impacts for the guide.",
  openGraph: { title: "Wiki Changelog", description: "Recent guide updates, new pages, verification changes, and v1.1.2 patch impact." },
  twitter: { card: "summary_large_image", title: "Wiki Changelog", description: "Recent guide updates and patch impact notes." },
};

export default ChangelogPage;
