import type { Metadata } from "next";
import { GettingStartedPage } from "../pages/GettingStartedPage";
export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Beginner Guide",
  description: "Start here: learn controls, salvaging, energy, food, shipmates, and the safest first-run survival plan for v1.1.2.",
  openGraph: { title: "Don't Sleep With The Fishes Beginner Guide", description: "Controls, ship scavenging priorities, shipmate choices, and day-by-day survival strategy." },
  twitter: { card: "summary_large_image", title: "Beginner Survival Guide", description: "Controls, ship scavenging priorities, shipmate choices, and day-by-day survival strategy." },
};
export default GettingStartedPage;
