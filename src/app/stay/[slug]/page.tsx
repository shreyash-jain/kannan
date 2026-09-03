import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Eyebrow, H1, H2 } from "@/components/Section";
import { RoomCard } from "@/components/RoomCard";
import { LightboxGallery } from "@/components/Lightbox";
import { CTA } from "@/components/CTA";
import { roomBySlug, roomPages, roomPhotos, roomRateLabel } from "@/data/rooms";
import { lodgingTypeLd } from "@/lib/jsonld";
import { site, whatsappAbout } from "@/lib/site";
import { thumbOf } from "@/lib/images";

export function generateStaticParams() {
  return roomPages.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = roomBySlug(slug);
  if (!room) return {};

  return {
    title: `${room.name} — ${room.occupancy} · Kanaan Guest Farm`,
    description: `${room.summary} ${room.occupancy}, ${roomRateLabel(room)} per person sharing at Kanaan Guest Farm in Hazyview, ${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport.`,
    alternates: { canonical: `/stay/${room.slug}` },
    openGraph: {
      title: `${room.name} · Kanaan Guest Farm`,
      description: room.summary,
      images: [{ url: room.hero.src, alt: room.hero.alt }],
    },
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = roomBySlug(slug);
  if (!room) notFound();

  const photos = roomPhotos(room);
  const others = roomPages.filter((r) => r.slug !== room.slug).slice(0, 3);
  const enquire = whatsappAbout(room.name);

  return (
    <>
      {room.ldType && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              lodgingTypeLd({
                type: room.ldType,
                name: `${site.name} — ${room.name}`,
                description: room.ldDescription,
                path: `/stay/${room.slug}`,
                image: room.hero.src,
              }),
            ),
          }}
        />
      )}

      {/* The room itself: one big photograph, and the facts beside it. */}
      <section className="border-b border-black/5 bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src={room.hero.src}
                alt={room.hero.alt}
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 inline-flex items-center rounded-full bg-forest-deep/78 px-3.5 py-1.5 text-xs font-medium text-bone backdrop-blur-sm">
                {photos.length} photos below
              </span>
            </div>

            <div>
              <Eyebrow>{room.eyebrow}</Eyebrow>
              <H1 className="mt-3 text-4xl! sm:text-5xl!">{room.name}</H1>
              <p className="mt-5 text-lg leading-relaxed text-ink/85">
                {room.lede}
              </p>

              <ul className="mt-7 grid gap-2.5 text-sm text-ink/80 sm:grid-cols-2">
                {room.facts.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-ochre"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={enquire}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-bone transition-colors hover:bg-forest-deep"
                >
                  Enquire about this room
                </Link>
                {room.ldType && (
                  <span className="text-sm text-muted">
                    <strong className="font-semibold text-forest-deep">
                      {roomRateLabel(room)}
                    </strong>{" "}
                    {site.pricing.unit}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="max-w-3xl! pb-0!">
        <div className="prose-kanaan">
          {room.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      {/* The reason the page exists — every photograph we have of this room. */}
      <Section>
        <Eyebrow>Every photograph</Eyebrow>
        <H2 className="mt-3 mb-8">
          {room.name}, from every angle.
        </H2>
        {/* Smaller, uniform tiles, and each one loads a 520px crop rather
            than the full frame. Clicking opens the full-resolution file —
            the viewer reads data-full and eases it in over the thumbnail. */}
        <LightboxGallery>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {photos.map((photo) => (
              <button
                key={photo.src}
                type="button"
                className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-lg bg-sand"
              >
                <Image
                  src={thumbOf(photo)}
                  data-full={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="260px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </button>
            ))}
          </div>
        </LightboxGallery>
        <p className="mt-5 text-sm text-muted">
          Tap any photograph to see it full screen.
        </p>
      </Section>

      <section className="bg-forest-deep text-bone">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:py-16 md:grid-cols-2 md:items-center lg:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-ochre">
              {room.name}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight">
              Shall we hold it for your dates?
            </h2>
            <p className="mt-4 max-w-xl text-bone/85">
              Send us the nights you are after and who is travelling, and{" "}
              {site.hosts.join(" or ")} will reply personally.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href={enquire}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
            >
              WhatsApp about {room.name}
            </Link>
            <Link
              href="/stay"
              className="inline-flex items-center rounded-full border border-bone/40 px-6 py-3 text-sm font-medium text-bone hover:bg-bone/10"
            >
              See the other rooms
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <Eyebrow>The other ways to stay</Eyebrow>
        <H2 className="mt-3 mb-10">There is probably something that fits better.</H2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other) => (
            <RoomCard
              key={other.slug}
              href={`/stay/${other.slug}`}
              name={other.name}
              eyebrow={other.eyebrow}
              facts={other.facts}
              image={other.hero}
              occupancy={other.ldType ? other.occupancy : undefined}
              photoCount={roomPhotos(other).length}
              shareUrl={`${site.url}/stay/${other.slug}`}
            />
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
