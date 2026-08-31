import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { livePosts } from "@/lib/posts";
import { roomPages } from "@/data/rooms";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

/** Fixed pages. Blog posts are NOT listed here — see below. */
const staticRoutes: {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/our-story", priority: 0.7, changeFrequency: "monthly" },
  { path: "/stay", priority: 0.9, changeFrequency: "monthly" },
  { path: "/packages", priority: 0.9, changeFrequency: "monthly" },
  { path: "/weddings", priority: 0.9, changeFrequency: "monthly" },
  { path: "/the-land", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Every live post is derived from the shared registry, so publishing a post
  // submits it to Google automatically. This list was previously typed out by
  // hand and drifted out of sync with /blog — one post shipped unsubmitted.
  const postEntries = livePosts.map((p) => ({
    url: `${site.url}${p.href}`,
    lastModified: p.datePublished ? new Date(p.datePublished) : now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Room pages come from the same registry the catalogue renders from, so a
  // new room is submitted to Google the moment it is added.
  const roomEntries = roomPages.map((room) => ({
    url: `${site.url}/stay/${room.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...roomEntries, ...postEntries];
}
