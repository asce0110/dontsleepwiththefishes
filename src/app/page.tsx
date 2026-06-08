import type { Metadata } from "next";
import { HomePage } from "./pages/HomePage";
export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Guide & Wiki",
  description: "Complete v1.1.2 guide with endings, items, night event counters, rescue routes, Steam status, and survival tips.",
  openGraph: { title: "Don't Sleep With The Fishes Guide & Wiki", description: "Complete unofficial guide updated for v1.1.2. All endings, items, events, and survival tips." },
  twitter: { card: "summary_large_image", title: "Don't Sleep With The Fishes Guide & Wiki", description: "Complete unofficial guide updated for v1.1.2." },
};
export default HomePage;
