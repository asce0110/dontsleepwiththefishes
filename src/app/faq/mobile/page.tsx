import type { Metadata } from "next";
import { PlaceholderPage } from "../../pages/PlaceholderPage";

export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Mobile FAQ",
  description: "Mobile version status, official platform notes, community demand, and safe alternatives while the game remains Windows-focused.",
};

export default function Page() {
  return <PlaceholderPage title="Mobile Version FAQ" description="Android, iOS, and mobile version status for Don't Sleep With The Fishes." />;
}
