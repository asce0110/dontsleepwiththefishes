import type { Metadata } from "next";
import { FAQPage } from "../pages/FAQPage";
export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes FAQ",
  description: "Answers for Steam, download, Mac, mobile, safe files, translations, controls, rescue hints, and common player questions.",
  openGraph: { title: "FAQ", description: "Steam release, Mac and mobile compatibility, how to download, controls, and more." },
  twitter: { card: "summary_large_image", title: "FAQ", description: "Steam, Mac, Mobile, Download & Controls answers." },
};
export default FAQPage;
