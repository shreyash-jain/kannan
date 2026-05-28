import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmenityList } from "@/components/AmenityList";
import { CTA } from "@/components/CTA";
import { Video } from "@/components/Video";
import { img, video } from "@/lib/images";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lodges near Kruger National Park · The Land at Kanaan",
  description: `Just ${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport and only ${site.distances.krugerGateMinutesMin} to ${site.distances.krugerGateMinutesMax} minutes from the Kruger gates, with the spectacular Panorama Route close by. Discover the wonders of the Lowveld from Kanaan Guest Farm in the beautiful heart of Hazyview, Mpumalanga.`,
  alternates: { canonical: "/the-land" },
  openGraph: {
    title: "The Land · Kanaan Guest Farm",
    description: `Lodges near the world-famous Kruger National Park — discover what ${site.distances.kmiaMinutes} minutes from the airport actually feels like.`,
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
        title="A whole world of wonder, right at our doorstep."
        lede={`We are just ${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport, and only ${site.distances.krugerGateMinutesMin} to ${site.distances.krugerGateMinutesMax} minutes from the Phabeni and Numbi gates of the world-famous Kruger National Park. The spectacular Panorama Route, the misty mountain town of Sabie and the breathtaking Lowveld waterfalls are all wonderful days out from the farm.`}
      />

      {/* Property tour video — a wide look at the farm before the place cards */}
      <div className="mx-auto max-w-7xl px-5 pt-12 lg:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-sand">
          <Video
            video={video.propertyTour}
            className="absolute inset-0 h-full w-full object-cover"
            schemaName="A tour around Kanaan Guest Farm"
            schemaDescription="A short walk around Kanaan Guest Farm in Hazyview, Mpumalanga — the mango grove, the lodge units, the camp site, and the Lowveld around them."
            schemaUploadDate="2026-05-22"
          />
        </div>
      </div>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <PlaceCard
            image={img.kruger}
            eyebrow="Kruger National Park"
            title="Phabeni & Numbi gates"
            body={`Just ${site.distances.krugerGateMinutesMin} to ${site.distances.krugerGateMinutesMax} minutes by road, depending on the gate you choose. Imagine setting off before sunrise, spotting the legendary Big Five as the bushveld wakes, and being back at the farm for a swim before lunch. Phabeni means shelter in Sotho — a fitting welcome to one of Africa's greatest wildlife destinations.`}
          />
          <PlaceCard
            image={img.panorama}
            eyebrow="Panorama Route"
            title="God's Window, Blyde Canyon"
            body="A spectacular day along the escarpment — God's Window, Bourke's Luck Potholes, the Three Rondavels and the breathtaking Blyde River Canyon. The kind of scenery you will remember for a lifetime."
          />
          <PlaceCard
            image={img.sabieRiver}
            eyebrow="Sabie & Graskop"
            title="Misty mountains & waterfalls"
            body="The misty mountain town of Sabie waits in one direction with Lone Creek, Horseshoe and Bridal Veil Falls, while Graskop — grassy hillock in Afrikaans — offers the famous Big Swing and the Graskop Gorge Lift. Adventure or peaceful exploring, the choice is yours."
          />
        </div>
      </Section>

      <Section className="pt-0!">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <Eyebrow>Getting here</Eyebrow>
            <H2 className="mt-3 mb-5">Easy to find, wonderfully tucked away.</H2>
            <dl className="space-y-5 text-ink/85">
              <div>
                <dt className="font-display text-lg text-forest-deep">From Kruger Mpumalanga International Airport</dt>
                <dd className="mt-1">Just {site.distances.kmiaMinutes} minutes by road, on the scenic R40 north toward Hazyview.</dd>
              </div>
              <div>
                <dt className="font-display text-lg text-forest-deep">From Johannesburg (OR Tambo)</dt>
                <dd className="mt-1">Around 4½ wonderful hours on the N4 east, with breathtaking Lowveld scenery as you exit toward Hazyview.</dd>
              </div>
              <div>
                <dt className="font-display text-lg text-forest-deep">From the Kruger gates</dt>
                <dd className="mt-1">Just {site.distances.krugerGateMinutesMin} to {site.distances.krugerGateMinutesMax} minutes from Phabeni or Numbi — straight back to the farm after an unforgettable morning game drive.</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-muted">
              Our fully fenced and secure property has a motorised gate — please give us a call when you arrive and we will welcome you in.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Image
                src={img.waterfall.src}
                alt={img.waterfall.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Image
                src={img.hiking.src}
                alt={img.hiking.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Image
                src={img.mangoRoad.src}
                alt={img.mangoRoad.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Image
                src={img.trailView.src}
                alt={img.trailView.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0!">
        <Eyebrow>On the farm</Eyebrow>
        <H2 className="mt-3 mb-10">Wonderful days, without ever leaving Kanaan.</H2>
        <AmenityList
          items={[
            { title: "Hiking trails", body: "Beautifully marked trails meandering through the farm and into the bushveld beyond." },
            { title: "Mountain biking", body: "Single-track and farm roads through stunning Lowveld scenery — bring your own bike." },
            { title: "Swimming pool", body: "Sparkling and kept ready year-round, with shade and seating around it." },
            { title: "Entertainment area", body: "Pool table, foosball, and a communal braai for a memorable evening with family or new friends." },
            { title: "Mango grove", body: "Forty-year-old mango trees shading the camping ground and a quiet corner where guests often end up reading the afternoon away." },
            { title: "African night sky", body: "Far enough from town that the stars still feel truly magical — a wonderful way to end the day." },
          ]}
        />
      </Section>

      <section className="bg-bone">
        <div className="mx-auto max-w-3xl px-5 py-12 text-center lg:px-8">
          <Eyebrow>From the journal</Eyebrow>
          <H2 className="mt-3">Read Anneli&apos;s invitation to Africa.</H2>
          <Lede>
            Anneli has written a heart-felt introduction to a family holiday
            based at Kanaan — Kruger, Sabie, Graskop and the wonders of the
            Lowveld, in her own warm words.
          </Lede>
          <div className="mt-6">
            <Link
              href="/blog/africa"
              className="inline-flex items-center gap-1 text-sm font-medium text-ochre hover:text-ochre-deep"
            >
              Read the story <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
          <Eyebrow>Plan your African adventure</Eyebrow>
          <H2 className="mt-3">Tell us what you would love to see.</H2>
          <Lede>
            Send us a wish list of what you are hoping to experience and we
            will happily sketch a day-by-day — Kruger, Panorama, Sabie,
            Graskop — that fits beautifully into the days you are here.
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
