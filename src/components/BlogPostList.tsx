"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type PostBase = {
  chapter: string;
  title: string;
  category: "story" | "guide";
  /** Card hero image — full Cloudinary URL (use img.<slot>.src). */
  image: string;
  imageAlt: string;
  /** Sequence number for the story narrative; guides leave this blank. */
  n?: number;
  /** ISO date the post was published. */
  datePublished?: string;
  /** Estimated read time in minutes. */
  readingMinutes?: number;
  /** Byline shown at the foot of the card. Defaults to "Anneli & Matthew". */
  author?: string;
};

type LivePost = PostBase & { status: "live"; href: string; excerpt: string };
type SoonPost = PostBase & { status: "soon"; excerpt?: string };

export type Post = LivePost | SoonPost;

const TABS = [
  { id: "stories" as const, label: "Stories", category: "story" as const },
  { id: "guides" as const, label: "Guides", category: "guide" as const },
];

export function BlogPostList({ posts }: { posts: Post[] }) {
  const populatedTabs = TABS.filter((t) =>
    posts.some((p) => p.category === t.category),
  );
  const [active, setActive] = useState<(typeof TABS)[number]["id"]>(
    populatedTabs[0]?.id ?? "stories",
  );
  const activeCat = TABS.find((t) => t.id === active)!.category;
  const filtered = posts.filter((p) => p.category === activeCat);
  const showTabs = populatedTabs.length > 1;

  return (
    <>
      {showTabs && (
        <div className="mb-10 flex items-center gap-8 border-b border-black/10">
          {populatedTabs.map((t) => {
            const isActive = t.id === active;
            const count = posts.filter((p) => p.category === t.category).length;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                className={`-mb-px border-b-2 pb-3 text-sm font-medium uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "border-ochre text-forest-deep"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {t.label}{" "}
                <span className="ml-1 text-xs font-normal normal-case tracking-normal text-muted">
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <PostCard key={`${p.category}-${p.title}`} post={p} />
        ))}
      </div>
    </>
  );
}

function PostCard({ post }: { post: Post }) {
  const isLive = post.status === "live";
  const href = isLive ? post.href : undefined;
  const author = post.author ?? "Anneli & Matthew";
  const dateLabel = post.datePublished
    ? new Date(post.datePublished).toLocaleDateString("en-ZA", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  const cardInner = (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-bone transition-shadow hover:shadow-xl">
      <div className="relative aspect-4/3 overflow-hidden bg-sand">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!isLive && (
          <div className="absolute inset-0 bg-forest-deep/45" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center justify-between gap-3">
          <CategoryPill post={post} />
          {post.readingMinutes && (
            <span className="text-xs text-muted">
              {post.readingMinutes} min read
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-xl leading-tight text-forest-deep transition-colors group-hover:text-ochre md:text-2xl">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/75">
            {post.excerpt}
          </p>
        )}

        <div className="mt-auto pt-6">
          <div className="flex items-end justify-between gap-3 border-t border-black/5 pt-4 text-xs">
            <span className="text-ink/70">{author}</span>
            {isLive ? (
              dateLabel && <span className="text-muted">{dateLabel}</span>
            ) : (
              <span className="text-muted">Coming soon</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );

  if (!href) return cardInner;
  return (
    <Link href={href} className="block h-full">
      {cardInner}
    </Link>
  );
}

function CategoryPill({ post }: { post: Post }) {
  if (post.category === "story") {
    return (
      <span className="inline-flex items-center rounded-full bg-forest/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-forest-deep">
        {post.n ? `Chapter ${post.n}` : "Story"}
        <span className="ml-1.5 text-forest-deep/55">· {post.chapter}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-ochre/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ochre-deep">
      Guide
      <span className="ml-1.5 text-ochre-deep/65">· {post.chapter}</span>
    </span>
  );
}
