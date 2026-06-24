import type { Metadata } from "next";
import { ZhAboutPage } from "../../pages/ZhAboutPage";

export const metadata: Metadata = {
  alternates: { canonical: "/zh/about" },
  title: "关于 Don't Sleep With The Fishes 攻略百科",
  description: "了解这个非官方攻略百科如何验证信息来源、标记社区报告、处理剧透、链接官方下载并接受勘误。",
  openGraph: { title: "关于本攻略百科", description: "来源可信度、版本策略以及这个粉丝攻略站是如何运作的。" },
};

export default ZhAboutPage;
