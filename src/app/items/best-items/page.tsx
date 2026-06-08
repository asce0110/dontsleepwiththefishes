import type { Metadata } from "next";
import { PlaceholderPage } from "../../pages/PlaceholderPage";

export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Best Items",
  description: "Rank the best survival items for early runs, night events, rescue routes, long survival, and ending attempts.",
};

export default function Page() {
  return <PlaceholderPage title="Best Items Tier List" description="S-tier to C-tier rankings, event counters, and ending priorities." />;
}
