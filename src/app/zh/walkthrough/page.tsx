import type { Metadata } from "next";
import { ZhWalkthroughPage } from "../../pages/ZhWalkthroughPage";
export const metadata: Metadata = {
  alternates: { canonical: "/zh/walkthrough" },
  title: "Don't Sleep With The Fishes 流程攻略",
  description: "按天数的生存路线攻略，含剧透标注。v1.1.2 最新版本。",
  openGraph: { title: "流程攻略", description: "按天数的生存路线攻略。" },
};
export default ZhWalkthroughPage;
