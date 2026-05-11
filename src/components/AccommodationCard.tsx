import Image from "next/image";
import Link from "next/link";
import type { Img } from "@/lib/images";

export function AccommodationCard({
  href,
  name,
  summary,
  image,
  meta,
}: {
  href: string;
  name: string;
  summary: string;
  image: Img;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl bg-bone shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        {meta && (
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-ochre">
            {meta}
          </p>
        )}
        <h3 className="font-display text-2xl leading-tight text-forest-deep">
          {name}
        </h3>
        <p className="text-sm leading-relaxed text-ink/80">{summary}</p>
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-ochre">
          Explore
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
