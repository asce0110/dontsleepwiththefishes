import type { Metadata } from "next";
import { ItemsPage } from "../pages/ItemsPage";
export const metadata: Metadata = {
  alternates: { canonical: "./" },
  title: "Don't Sleep With The Fishes Items Guide",
  description: "Compare item sources, best uses, event counters, ending value, break risks, and v1.1.2 item changes.",
  openGraph: { title: "Items Guide", description: "Every item, source, best use, event counter, ending priority, and v1.1.2 changes." },
  twitter: { card: "summary_large_image", title: "Items Guide", description: "Every item, source, best use, event counter, ending priority." },
};
export default ItemsPage;
