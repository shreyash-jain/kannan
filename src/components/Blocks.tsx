import Image from "next/image";
import type { Img } from "@/lib/images";

/**
 * The shared building blocks for the redesigned pages.
 *
 * Every one of them is height-aware: media is capped by viewport height
 * rather than driven by aspect ratio, because a 16:9 box in a 1280px
 * column is 720px tall and cannot be seen whole on a 13" laptop.
 */

/** Facts answered inside the hero, so nobody scrolls to learn the one
 *  thing they came for. */
export function StatStrip({
  items,
}: {
  items: { value: string; unit?: string; label: string }[];
}) {
  return (
    <dl className="mt-7 grid max-w-2xl grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] gap-px overflow-hidden rounded-2xl border border-bone/20 bg-bone/20">
      {items.map((s) => (
        <div key={s.label} className="bg-forest-deep/45 px-4 py-3 backdrop-blur-sm">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="block font-display text-2xl leading-none text-bone">
              {s.value}
              {s.unit && (
                <span className="ml-1 text-sm font-normal">{s.unit}</span>
              )}
            </span>
            <span className="mt-1 block text-xs text-bone/75">{s.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** A photo beside prose. The story kept, but given a shape so a long
 *  passage does not read as a wall. */
export function EditorialSplit({
  eyebrow,
  title,
  image,
  flip,
  pull,
  children,
}: {
  eyebrow: string;
  title: string;
  image: Img;
  flip?: boolean;
  pull?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
      <div className={flip ? "lg:order-2" : undefined}>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ochre">
          {eyebrow}
        </p>
        <h2 className="fluid-h2 mt-2 font-display tracking-tight text-forest-deep">
          {title}
        </h2>
        <div className="measure mt-3 space-y-3 text-ink/85 [&>p]:leading-[1.7]">
          {children}
        </div>
        {pull && (
          <p className="mt-5 border-l-2 border-ochre pl-4 font-display text-xl leading-snug text-forest-deep">
            {pull}
          </p>
        )}
      </div>
      <div
        className={`relative aspect-4/3 overflow-hidden rounded-2xl ${
          flip ? "lg:order-1" : ""
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

/** A list of eight short things does not need eight boxes. */
export function ChipRow({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((c) => (
        <li
          key={c}
          className="rounded-full border border-ink/12 bg-bone px-4 py-2 text-sm text-ink/80"
        >
          {c}
        </li>
      ))}
    </ul>
  );
}

/** Height-capped photo grid, so portrait tiles never build a tower. */
export function PhotoGrid({
  photos,
  cols = 5,
}: {
  photos: Img[];
  cols?: 3 | 4 | 5;
}) {
  const at = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" }[
    cols
  ];
  return (
    <div className={`grid grid-cols-2 gap-3 md:grid-cols-3 ${at}`}>
      {photos.map((p) => (
        <div
          key={p.src}
          className="tile-cap relative aspect-4/5 overflow-hidden rounded-xl"
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes="(min-width: 1024px) 18vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

/** Four square thumbs beside a column of text. */
export function ThumbQuad({ photos }: { photos: Img[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {photos.slice(0, 4).map((p) => (
        <div
          key={p.src}
          className="relative aspect-square overflow-hidden rounded-xl"
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes="(min-width: 1024px) 22vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
