import type { Metadata } from "next";
import { ZhAchievementsPage } from "../../pages/ZhAchievementsPage";
export const metadata: Metadata = {
  alternates: { canonical: "/zh/achievements" },
  title: "Don't Sleep With The Fishes 成就 & 记录",
  description: "完成清单——全部成就与解锁条件。",
  openGraph: { title: "成就 & 记录", description: "全部成就与解锁条件。" },
};
export default ZhAchievementsPage;
