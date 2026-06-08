import type { Metadata } from "next";
import { PlaceholderPage } from "../../pages/PlaceholderPage";

export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Mac FAQ",
  description: "Current platform status, Mac compatibility notes, safe workarounds, and what to check before trying Windows-only game files.",
};

export default function Page() {
  return <PlaceholderPage title="Mac Version FAQ" description="Compatibility, workarounds, and platform status for playing on macOS." />;
}
