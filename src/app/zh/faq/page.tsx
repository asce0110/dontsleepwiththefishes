import type { Metadata } from "next";
import { ZhFAQPage } from "../../pages/ZhFAQPage";
export const metadata: Metadata = {
  alternates: { canonical: "/zh/faq" },
  title: "Don't Sleep With The Fishes 常见问题",
  description: "下载、平台、操作、退款、Steam 相关 FAQ。",
  openGraph: { title: "常见问题", description: "下载、平台、操作、退款 FAQ。" },
};
export default ZhFAQPage;
