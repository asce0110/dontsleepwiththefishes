import type { Metadata } from "next";
import { AboutPage } from "../pages/AboutPage";

export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "About This Don't Sleep With The Fishes Wiki",
  description: "Learn how this unofficial wiki verifies sources, labels community reports, handles spoilers, links official downloads, and accepts corrections.",
  openGraph: { title: "About This Don't Sleep With The Fishes Wiki", description: "How this guide verifies sources, labels community reports, and updates for new versions." },
  twitter: { card: "summary_large_image", title: "About This Wiki", description: "Source confidence, version policy, and how this fan guide works." },
};

export default AboutPage;
