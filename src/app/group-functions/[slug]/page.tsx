import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { AmenityList } from "@/components/AmenityList";
import { EditorialSplit, StatStrip } from "@/components/Blocks";
import { LightboxGallery } from "@/components/Lightbox";
import { CTA } from "@/components/CTA";
import { groupBySlug, groupTypes } from "@/data/groups";
import { thumbOf } from "@/lib/images";
import { site, whatsappAbout } from "@/lib/site";

export function generateStaticParams() {
  return groupTypes.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const group = groupBySlug(slug);
  if (!group) return {};
  return {
    title: `${group.name} at Kanaan Guest Farm, Hazyview`,
    description: `${group.summary} ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from a Kruger gate.`,
    alternates: { canonical: `/group-functions/${group.slug}` },
    openGraph: {
      title: `${group.name} · Kanaan Guest Farm`,
      description: group.summary,
      images: [{ url: group.hero.src, alt: group.hero.alt }],
    },
  };
}

export default async function GroupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const group = groupBySlug(slug);
  if (!group) notFound();

  const others = groupTypes.filter((g) => g.slug !== group.slug);
  const enquire = whatsappAbout(group.enquiry);

  return (
    <>
      <Hero
        eyebrow={group.eyebrow}
        title={group.name}
        lede={group.lede}
        image={group.hero}
        primaryCta={{ href: enquire, label: "Enquire about your group" }}
        secondaryCta={{ href: "/gallery", label: "See the farm" }}
      >
        <StatStrip items={group.stats} />
      </Hero>

      <Section className="max-w-4xl!">
        <EditorialSplit
          eyebrow="Why here"
          title={`What makes this work for ${group.name.toLowerCase()}.`}
          image={group.bodyImage}
          pull={group.pull}
        >
          {group.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </EditorialSplit>
      </Section>

      {/* The question every organiser has after "will we fit?" */}
      <section className="fluid-band bg-sand">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Eyebrow>While you are here</Eyebrow>
          <H2 className="mt-2">Things to actually do.</H2>
          <AmenityList items={group.doing} />
        </div>
      </section>

      <Section>
        <Eyebrow>Photographs</Eyebrow>
        <H2 className="mt-2 mb-6">The parts of the farm you would be using.</H2>
        <LightboxGallery>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {group.gallery.map((photo) => (
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
      </Section>

      <section className="fluid-band bg-sand">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Eyebrow>Before you ask</Eyebrow>
          <H2 className="mt-2 mb-6">What organisers want to know.</H2>
          <dl className="grid gap-5">
            {group.faqs.map((f) => (
              <div key={f.q} className="border-t border-black/10 pt-4">
                <dt className="font-display text-lg text-forest-deep">{f.q}</dt>
                <dd className="measure mt-1.5 text-sm leading-relaxed text-ink/80">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-forest-deep text-bone">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:py-16 md:grid-cols-2 md:items-center lg:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-ochre">
              {group.name}
            </p>
            <h2 className="fluid-h2 mt-3 font-display tracking-tight">
              Tell us your numbers and your dates.
            </h2>
            <p className="mt-4 max-w-xl text-bone/85">
              How many, what ages, and which nights — {site.hosts.join(" or ")}{" "}
              will come back with what fits and what it costs.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href={enquire}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
            >
              WhatsApp {site.contact.whatsappDisplay}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-bone/40 px-6 py-3 text-sm font-medium text-bone hover:bg-bone/10"
            >
              Send a request
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <Eyebrow>Other groups we host</Eyebrow>
        <H2 className="mt-2 mb-3">Not quite what you are planning?</H2>
        <Lede>
          The farm takes all of these — the difference is mostly which beds and
          how much of the place you need.
        </Lede>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/group-functions/${o.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-bone ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-3/2 overflow-hidden">
                <Image
                  src={thumbOf(o.hero)}
                  alt={o.hero.alt}
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-ochre">
                  {o.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-xl text-forest-deep">
                  {o.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  {o.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
