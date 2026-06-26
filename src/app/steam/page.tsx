import type { Metadata } from "next";
import { SteamPage } from "../pages/SteamPage";

export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes on Steam — Now Available",
  description: "Don't Sleep With The Fishes is now available on Steam. $1.99. Steam vs itch.io comparison, achievements, Steam Deck compatibility, and FAQ.",
  openGraph: { title: "Don't Sleep With The Fishes on Steam", description: "Now available on Steam. $1.99. Steam vs itch.io comparison, achievements, Steam Deck, and FAQ." },
  twitter: { card: "summary_large_image", title: "Don't Sleep With The Fishes on Steam", description: "Now available on Steam. Complete Steam FAQ." },
};

export default SteamPage;
