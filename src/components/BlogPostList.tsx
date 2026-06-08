"use client";

import { useState } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";

type PostBase = {
  chapter: string;
  title: string;
  category: "story" | "guide";
  n?: number;
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
  // Hide the tab strip entirely until at least two categories have posts —
  // a lone "Stories (6)" tab next to nothing looks broken. The bar auto-
  // reappears the moment the first guide goes live.
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

      <ol className="space-y-2">
        {filtered.map((p) => (
          <li
            key={`${p.category}-${p.title}`}
            className="flex items-baseline gap-6 border-t border-black/5 pt-6 first:border-t-0 first:pt-0"
          >
            {p.n !== undefined ? (
              <span className="font-display text-3xl text-ochre">
                {String(p.n).padStart(2, "0")}
              </span>
            ) : (
              <span className="w-10" aria-hidden />
            )}
            <div className="flex-1">
              <Eyebrow>
                {p.category === "story"
                  ? `Chapter ${p.n} · ${p.chapter}`
                  : `Guide · ${p.chapter}`}
              </Eyebrow>
              {p.status === "live" ? (
                <>
                  <h3 className="mt-2 font-display text-2xl text-forest-deep">
                    <Link href={p.href} className="hover:text-ochre">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink/80">
                    {p.excerpt}
                  </p>
                  <Link
                    href={p.href}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ochre hover:text-ochre-deep"
                  >
                    {p.category === "story" ? "Read the story" : "Read the guide"}{" "}
                    <span aria-hidden>→</span>
                  </Link>
                </>
              ) : (
                <>
                  <h3 className="mt-2 font-display text-2xl text-forest-deep">
                    {p.title}
                  </h3>
                  {p.excerpt && (
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink/70">
                      {p.excerpt}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-muted">Coming soon.</p>
                </>
              )}
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}