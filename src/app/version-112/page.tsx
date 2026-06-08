import type { Metadata } from "next";
import { PlaceholderPage } from "../pages/PlaceholderPage";

export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes v1.1.2 Patch Notes",
  description: "See how v1.1.2 changes bait, Duct Tape, chests, rescue chances, Captain Whiskers, records, night events, and support.",
};

export default function Page() {
  return <PlaceholderPage title="v1.1.2 Patch Notes Explained" description="All changes, new events, rebalanced items, and strategy impact from the v1.1.2 update." />;
}
