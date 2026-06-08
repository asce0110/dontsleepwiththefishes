import type { Metadata } from "next";
import { PlaceholderPage } from "../../pages/PlaceholderPage";

export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Steam Release FAQ",
  description: "Track Steam port status, possible Steam achievements, itch buyer questions, release timing, and official update notes.",
};

export default function Page() {
  return <PlaceholderPage title="Steam Release FAQ" description="Planned Steam port, Steam key for itch buyers, release date, and achievements info." />;
}
