import Image from "next/image";
import Link from "next/link";
import type { Img } from "@/lib/images";
import { ShareChips } from "./ShareChips";

/**
 * A room in the catalogue. The photograph does the selling; the two things
 * a guest asks first — "will we fit?" and "are there more pictures?" — sit
 * on the image itself so they survive a fast scroll on a phone.
 *
 * The card is a plain <article> with a stretched link overlay rather than
 * one big <a>, so the share chips can be real buttons and links sitting on
 * top of it rather than anchors nested inside another anchor.
 */
export function RoomCard({
  href,
  name,
  eyebrow,
  facts,
  image,
  occupancy,
  photoCount,
  shareUrl,
  cta,
  priority,
}: {
  href: string;
  name: string;
  eyebrow: string;
  facts: string[];
  image: Img;
  occupancy?: string;
  photoCount?: number;
  shareUrl?: string;
  cta?: string;
  priority?: boolean;
}) {
  return (
    <article className="group relative flex flex-col rounded-2xl bg-bone shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-3/2 overflow-hidden rounded-t-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Both badges sit on the bottom row so the top right belongs to the
            share chips alone — on a four-up grid they would otherwise collide. */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
          {occupancy ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-bone/92 px-2.5 py-1 text-[11px] font-medium text-forest-deep backdrop-blur-sm">
              <PersonIcon />
              {occupancy}
            </span>
          ) : (
            <span />
          )}
          {photoCount != null && photoCount > 1 && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-deep/78 px-2.5 py-1 text-[11px] font-medium text-bone backdrop-blur-sm">
              <CameraIcon />
              {photoCount}
            </span>
          )}
        </div>
      </div>

      {shareUrl && (
        <ShareChips url={shareUrl} title={name} className="absolute right-3 top-3 z-30" />
      )}

      {/* Deliberately terse: this is a picker, not a brochure. The room's
          own page carries the full description. */}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ochre">
          {eyebrow}
        </p>
        <h3 className="mt-1.5 font-display text-lg leading-snug text-forest-deep">
          {name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-snug text-muted">
          {facts.slice(0, 3).join(" · ")}
        </p>

        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[13px] font-medium text-ochre">
          {cta ?? "See every photo"}
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>

      {/* Stretched link — covers the card, sits under the share button. */}
      <Link href={href} className="absolute inset-0 z-10 rounded-2xl">
        <span className="sr-only">{name}</span>
      </Link>
    </article>
  );
}

function PersonIcon() {
  return (
    <svg
      aria-hidden
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="12" cy="7" r="3.2" />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg
      aria-hidden
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2L8 5h8l1.5 2h2A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}
