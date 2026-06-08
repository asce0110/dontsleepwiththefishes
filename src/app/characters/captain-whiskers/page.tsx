import type { Metadata } from "next";
import { PlaceholderPage } from "../../pages/PlaceholderPage";

export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Captain Whiskers Guide",
  description: "Learn what Captain Whiskers does, how v1.1.2 changed fishing odds, and whether the cat is worth bringing.",
};

export default function Page() {
  return <PlaceholderPage title="Captain Whiskers Guide" description="+1% fishing bonus in v1.1.2, lore interactions, and how to use the cat companion." />;
}
