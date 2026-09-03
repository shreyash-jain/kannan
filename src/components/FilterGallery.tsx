"use client";

import Image from "next/image";
import { useState } from "react";
import type { Img } from "@/lib/images";
import { LightboxGallery } from "./Lightbox";

export type GalleryItem = {
  photo: Img & { thumb?: string };
  category: string;
};

/**
 * A gallery is only useful if you can find ONE thing fast, so this filters
 * rather than scrolling forever. Tiles are height-capped: a wall of 4:5
 * portraits otherwise builds a tower on a laptop.
 */
export function FilterGallery({
  items,
  categories,
}: {
  items: GalleryItem[];
  categories: { id: string; label: string }[];
}) {
  const [active, setActive] = useState("all");
  const shown =
    active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {[{ id: "all", label: "Everything" }, ...categories].map((c) => {
          const on = c.id === active;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              aria-pressed={on}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                on
                  ? "bg-forest text-bone"
                  : "border border-ink/12 bg-bone text-ink/80 hover:border-ochre hover:text-ochre"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-muted">
        {shown.length} photograph{shown.length === 1 ? "" : "s"}. Tap any one to
        see it full screen.
      </p>

      <LightboxGallery>
        {/* Uniform squares, tight gaps. A 4:5 tile with a max-height cap was
            fighting its own aspect ratio, so rows came out uneven — and the
            source photos are a mix of portrait and landscape anyway. */}
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {shown.map((i) => (
            <button
              key={i.photo.src}
              type="button"
              className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-lg bg-sand"
            >
              <Image
                src={i.photo.thumb ?? i.photo.src}
                data-full={i.photo.src}
                alt={i.photo.alt}
                fill
                sizes="260px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
            </button>
          ))}
        </div>
      </LightboxGallery>
    </>
  );
}
