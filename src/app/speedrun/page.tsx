import type { Metadata } from "next";
import { PlaceholderPage } from "../pages/PlaceholderPage";

export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes World Record Tracker",
  description: "Track Highest Day Reached, community survival records, proof requirements, versions, screenshots, videos, and verified runs.",
};

export default function Page() {
  return <PlaceholderPage title="Speedrun & World Record Guide" description="Speedrun routes, world records, and survival record strategies." />;
}
