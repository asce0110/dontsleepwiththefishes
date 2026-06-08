import type { Metadata } from "next";
import { EventsPage } from "../pages/EventsPage";
export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Night Event Counters",
  description: "Find night event counters for Giant Squid, Hope, Seagull, Eerie Melody, Eyes, Whirlpool, and other survival threats.",
  openGraph: { title: "Night Event Counters Guide", description: "What to do against Giant Squid, Hope, Seagull, Eerie Melody, Eyes, Whirlpool, and more." },
  twitter: { card: "summary_large_image", title: "Night Event Counters", description: "What to do against every major night event." },
};
export default EventsPage;
