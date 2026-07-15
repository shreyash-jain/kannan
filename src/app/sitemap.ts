import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/our-story", priority: 0.7, changeFrequency: "monthly" },
    { path: "/stay", priority: 0.9, changeFrequency: "monthly" },
    { path: "/packages", priority: 0.9, changeFrequency: "monthly" },
    { path: "/weddings", priority: 0.9, changeFrequency: "monthly" },
    { path: "/the-land", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/blog/the-discovery", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/the-promise", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/africa", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/the-welcome", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/the-celebration", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/the-future", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/under-the-mango-trees", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/early-morning-kruger-safari-from-hazyview", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/things-to-do-around-hazyview", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/kruger-from-hazyview", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/panorama-route-from-hazyview", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/when-to-visit-kruger-hazyview-month-by-month", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/things-to-do-with-kids-hazyview-kruger", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/cost-of-a-kruger-lowveld-week-2026", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  const lastModified = new Date();

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
