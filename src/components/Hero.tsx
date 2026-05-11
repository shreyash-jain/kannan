import Image from "next/image";
import Link from "next/link";
import { Eyebrow, H1, Lede } from "./Section";
import type { Img } from "@/lib/images";

export function Hero({
  eyebrow,
  title,
  lede,
  image,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  image: Img;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Stronger overlay + left-side fade so the headline always reads
            against varied imagery (bright skies, light foliage, etc.) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent"
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:pb-32 sm:pt-44 lg:px-8 lg:pt-52">
        <div className="max-w-3xl [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-bone/90">
            {eyebrow}
          </span>
          <H1 className="mt-4 !text-bone">{title}</H1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone sm:text-xl">
            {lede}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone shadow-sm transition-colors hover:bg-ochre-deep"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center rounded-full border border-bone/40 bg-bone/5 px-6 py-3 text-sm font-medium text-bone backdrop-blur transition-colors hover:bg-bone/10"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// A lightweight version used on inner pages.
export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <section className="border-b border-black/5 bg-sand">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-20 sm:pt-24 lg:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <H1 className="mt-3">{title}</H1>
        {lede && <Lede>{lede}</Lede>}
      </div>
    </section>
  );
}
