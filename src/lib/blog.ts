import type { Metadata } from "next";
import { site } from "./site";

export interface BlogPostMetadataParams {
  slug: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  datePublished: string;
  category: "story" | "guide";
  chapterNumber?: number;
  chapterName?: string;
}

export function createBlogPostMetadata(
  params: BlogPostMetadataParams,
): Metadata {
  const {
    slug,
    title,
    description,
    image,
    datePublished,
    category,
    chapterNumber,
    chapterName,
  } = params;

  const fullTitle =
    category === "story" && chapterNumber
      ? `${title} · Chapter ${chapterNumber} · Journal & Guides`
      : `${title} · Guide · Journal & Guides`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: fullTitle,
      description,
      images: [{ url: image.src, alt: image.alt }],
      type: "article",
      publishedTime: datePublished,
      authors: [...site.hosts],
    },
  };
}
