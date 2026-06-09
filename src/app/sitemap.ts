import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.dontsleepwiththefishes.net";

  const routes = [
    { path: "/", priority: 1.0, changefreq: "weekly" as const },
    { path: "/guide/", priority: 0.9, changefreq: "weekly" as const },
    { path: "/walkthrough/", priority: 0.9, changefreq: "weekly" as const },
    { path: "/items/", priority: 0.9, changefreq: "weekly" as const },
    { path: "/endings/", priority: 0.9, changefreq: "weekly" as const },
    { path: "/events/", priority: 0.9, changefreq: "weekly" as const },
    { path: "/achievements/", priority: 0.7, changefreq: "monthly" as const },
    { path: "/tips-tricks/", priority: 0.7, changefreq: "monthly" as const },
    { path: "/faq/", priority: 0.8, changefreq: "weekly" as const },
    { path: "/changelog/", priority: 0.6, changefreq: "weekly" as const },
    { path: "/about/", priority: 0.5, changefreq: "monthly" as const },
    { path: "/events/giant-squid/", priority: 0.8, changefreq: "monthly" as const },
    { path: "/events/seagull/", priority: 0.7, changefreq: "monthly" as const },
    { path: "/events/eerie-melody/", priority: 0.7, changefreq: "monthly" as const },
    { path: "/events/eyes/", priority: 0.7, changefreq: "monthly" as const },
    { path: "/events/whirlpool/", priority: 0.7, changefreq: "monthly" as const },
    { path: "/endings/rescue/", priority: 0.8, changefreq: "monthly" as const },
    { path: "/endings/true-ending/", priority: 0.8, changefreq: "monthly" as const },
    { path: "/endings/pay-debt/", priority: 0.8, changefreq: "monthly" as const },
    { path: "/items/best-items/", priority: 0.7, changefreq: "monthly" as const },
    { path: "/items/heart-of-the-sea/", priority: 0.7, changefreq: "monthly" as const },
    { path: "/speedrun/", priority: 0.6, changefreq: "monthly" as const },
  ];

  return routes.map(({ path, priority, changefreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: changefreq,
    priority,
  }));
}
