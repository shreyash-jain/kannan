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
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  image: Img;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  /** Optional block under the buttons — used for the stat strips. */
  children?: React.ReactNode;
}) {
  return (
    <section className="hero-fit relative isolate flex items-end overflow-hidden">
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

      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-bone/90">
            {eyebrow}
          </span>
          <H1 className="fluid-h1 hero-gap-sm !text-bone">{title}</H1>
          <p className="fluid-lede hero-gap-md hero-lede max-w-2xl text-bone">
            {lede}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="hero-gap-lg flex flex-wrap gap-3">
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
          {children}
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
    // An inset card rather than a full-bleed band — the sharp-cornered
    // strip running edge to edge read as a stray block of colour.
    <section className="px-5 pt-5 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-sand px-6 pb-[clamp(1.25rem,3svh,2rem)] pt-[clamp(1.25rem,3.5svh,2.25rem)] sm:px-9">
        <Eyebrow>{eyebrow}</Eyebrow>
        <H1 className="page-h1 mt-2">{title}</H1>
        {lede && <p className="page-lede mt-2 text-ink/85">{lede}</p>}
      </div>
    </section>
  );
}
