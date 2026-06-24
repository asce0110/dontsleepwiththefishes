import type { Metadata } from "next";
import { ZhChangelogPage } from "../../pages/ZhChangelogPage";

export const metadata: Metadata = {
  alternates: { canonical: "/zh/changelog" },
  title: "Don't Sleep With The Fishes 攻略百科更新日志",
  description: "最近的攻略更新、新增指南、来源验证变更、勘误以及官方补丁对攻略的影响。",
  openGraph: { title: "攻略更新日志", description: "最近攻略更新、新页面、验证变更以及 v1.1.2 补丁影响。" },
};

export default ZhChangelogPage;
