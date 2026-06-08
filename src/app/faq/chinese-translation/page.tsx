import type { Metadata } from "next";
import { PlaceholderPage } from "../../pages/PlaceholderPage";

export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Chinese Translation",
  description: "Track Chinese translation notes, community tools, font issues, safety warnings, and official compatibility comments.",
};

export default function Page() {
  return <PlaceholderPage title="Chinese Translation Guide" description="Community translation patches, installation instructions, and known risks." />;
}
