import type { Metadata } from "next";
import { ZhCharactersPage } from "../../pages/ZhCharactersPage";
export const metadata: Metadata = {
  alternates: { canonical: "/zh/characters" },
  title: "Don't Sleep With The Fishes 角色介绍",
  description: "四名可营救角色对比，选择最佳船员同伴。",
  openGraph: { title: "角色介绍", description: "四名可营救角色对比。" },
};
export default ZhCharactersPage;
