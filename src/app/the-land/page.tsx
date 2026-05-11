import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmenityList } from "@/components/AmenityList";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lodges near Kruger National Park · The Land at Kanaan",
  description: `${site.distances.kmiaMinutes} minutes from KMIA, ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Kruger gates, on the Panorama Route. The Lowveld around Kanaan Guest Farm in Hazyview, Mpumalanga.`,
  alternates: { canonical: "/the-land" },
  openGraph: {
    title: "The Land · Kanaan Guest Farm",
    description: `Lodges near Kruger National Park — what ${site.distances.kmiaMinutes} minutes from the airport actually feels like.`,
    images: [{ url: img.kruger.src, alt: img.kruger.alt }],
  },
};

export default function TheLandPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "The Land", href: "/the-land" },
        ]}
      />
      <PageHero
        eyebrow="The Land"
        title="Big country, small drive."
        lede={`${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport. ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Phabeni and Numbi gates. The Panorama Route, the Sabie River and the Lowveld waterfalls are all an easy day from the farm.`}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <PlaceCard
            image={img.kruger}
            eyebrow="Kruger National Park"
            title="Phabeni & Numbi gates"
            body={`${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes by road. Early-morning self-drives leave the farm before sunrise and are back for lunch.`}
          />
          <PlaceCard
            image={img.panorama}
            eyebrow="Panorama Route"
            title="God's Window, Blyde Canyon"
            body="A full day on the escarpment — God's Window, Bourke's Luck Potholes, the Three Rondavels and the Blyde River Canyon."
          />
          <PlaceCard
            image={img.sabieRiver}
            eyebrow="Sabie River"
            title="Greenery & waterfalls"
            body="The Sabie waterfalls cluster, river trails and shaded picnic spots — a short drive from the farm."
          />
        </div>
      </Section>

      <Section className="pt-0!">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <Eyebrow>Getting here</Eyebrow>
            <H2 className="mt-3 mb-5">Driving directions, by route.</H2>
            <dl className="space-y-5 text-ink/85">
              <div>
                <dt className="font-display text-lg text-forest-deep">From KMIA (Kruger Mpumalanga International)</dt>
                <dd className="mt-1">{site.distances.kmiaMinutes} minutes by road, on the R40 north toward Hazyview.</dd>
              </div>
              <div>
                <dt className="font-display text-lg text-forest-deep">From Johannesburg (OR Tambo)</dt>
                <dd className="mt-1">Around 4½ hours on the N4 east, exiting toward Hazyview.</dd>
              </div>
              <div>
                <dt className="font-display text-lg text-forest-deep">From the Kruger gates</dt>
                <dd className="mt-1">{site.distances.krugerGateMinutesMin}–{site.distances.krugerGateMinutesMax} minutes from Phabeni or Numbi — straight back to the farm after a morning drive.</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-muted">
              Fully fenced property with a motorised gate — please call ahead on arrival.
            </p>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img.hiking.src}
              alt={img.hiking.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="pt-0!">
        <Eyebrow>On the farm</Eyebrow>
        <H2 className="mt-3 mb-10">When you don&apos;t feel like driving.</H2>
        <AmenityList
          items={[
            { title: "Hiking trails", body: "Marked trails through the farm and into the bushveld behind it." },
            { title: "Mountain biking", body: "Single-track and farm roads — bring your own bike." },
            { title: "Swimming pool", body: "Kept ready year-round, with shade and seating." },
            { title: "Entertainment area", body: "Pool table, foosball, and a communal braai for evening gatherings." },
            { title: "Mango grove", body: "Forty-year-old mango trees shade the camping ground and a quiet reading spot." },
            { title: "Stars", body: "Far enough from town that the night sky still feels like the night sky." },
          ]}
        />
      </Section>

      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
          <Eyebrow>Plan your route</Eyebrow>
          <H2 className="mt-3">Tell us what you want to see.</H2>
          <Lede>
            We&apos;ll send you a rough day-by-day plan — Kruger, Panorama,
            Sabie — that fits your stay.
          </Lede>
          <div className="mt-7">
            <Link
              href={whatsappLink("theLand")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-bone hover:bg-forest-deep"
            >
              Ask us about Kruger on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function PlaceCard({
  image,
  eyebrow,
  title,
  body,
}: {
  image: { src: string; alt: string };
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <article className="overflow-hidden rounded-2xl bg-bone ring-1 ring-black/5">
      <div className="relative aspect-5/4">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-ochre">
          {eyebrow}
        </p>
        <h3 className="mt-2 font-display text-2xl text-forest-deep">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/80">{body}</p>
      </div>
    </article>
  );
}
