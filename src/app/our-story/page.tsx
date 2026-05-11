import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story — Anneli & Matthew at Kanaan Guest Farm",
  description: `In August 2025 we bought a guest farm near Kruger. This is what we found, what we changed, and what we are building next. A family-run guesthouse ${site.distances.kmiaMinutes} minutes from KMIA, in Hazyview, Mpumalanga.`,
  alternates: { canonical: "/our-story" },
  openGraph: {
    title: "Our Story · Kanaan Guest Farm",
    description:
      "Anneli and Matthew on buying a tired old farm near Kruger — and what came next.",
    images: [{ url: img.hosts.src, alt: img.hosts.alt }],
  },
};

export default function OurStoryPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Our Story", href: "/our-story" },
        ]}
      />
      <PageHero
        eyebrow="Our Story"
        title="We bought a guest farm near Kruger. This is what happened next."
        lede={`${site.hosts.join(" & ")}. Owners since ${site.ownedSince}.`}
      />

      {/* Hosts portrait — brief: people in shots wherever possible */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
            <Image
              src={img.hosts.src}
              alt={img.hosts.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="prose-kanaan max-w-prose">
            <Eyebrow>Chapter 1 · The Discovery</Eyebrow>
            <H2 className="mt-3 mb-5">A tired old farm, and what nobody else was looking at.</H2>
            <p>
              We bought Kanaan in August 2025. From the road it didn&apos;t
              look like much — sagging fences, paint going thin, the kind of
              place travellers tend to drive past without slowing down. But we
              got out and walked it, and the more we walked, the more we saw.
            </p>
            <p>
              Mango trees that had been here for forty years. Bushveld
              stretching on until the light gave out. A river that runs cold
              even in summer. And the kind of location —{" "}
              {site.distances.kmiaMinutes} minutes from Kruger Mpumalanga
              International Airport — that no amount of renovation can give
              you if you don&apos;t already have it.
            </p>
            <p className="text-sm italic text-muted">
              Video 01 — <em>The Story</em> (5 min) will live here once
              delivered.
            </p>
          </div>
        </div>
      </Section>

      {/* Chapter 2 */}
      <Section className="pt-0!">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl md:order-1">
            <Image
              src={img.veranda.src}
              alt={img.veranda.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="prose-kanaan max-w-prose md:order-2">
            <Eyebrow>Chapter 2 · The Promise</Eyebrow>
            <H2 className="mt-3 mb-5">We read every review, then started fixing.</H2>
            <p>
              Before we picked up a paintbrush, we sat down and read every
              review the place had ever received. The complaints were never
              about the views or the price — they were always about small
              things. A tap that wasn&apos;t quite right. Breakfast that
              needed more thought. A gate that stuck. WiFi that came and went.
            </p>
            <p>
              But small is what decides whether a stay feels generous or
              grudging. So we went after them, one at a time, and we&apos;re
              still going. The Kanaan you walk into today isn&apos;t the one
              we bought — and a year from now it won&apos;t be this one
              either.
            </p>
          </div>
        </div>
      </Section>

      {/* Chapter 3 */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center lg:px-8">
          <div className="relative aspect-5/4 overflow-hidden rounded-2xl">
            <Image
              src={img.kruger.src}
              alt={img.kruger.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="prose-kanaan max-w-prose">
            <Eyebrow>Chapter 3 · The Land</Eyebrow>
            <H2 className="mt-3 mb-5">
              {site.distances.kmiaMinutes} minutes from Kruger — the
              geography does most of the work.
            </H2>
            <p>
              Land at KMIA in the morning and you can be on our veranda by
              lunch. The Phabeni and Numbi gates of Kruger are{" "}
              {site.distances.krugerGateMinutesMin}–{site.distances.krugerGateMinutesMax}{" "}
              minutes away, depending on which suits your route. The Sabie
              River is a short drive in one direction. The Panorama Route —
              God&apos;s Window, Bourke&apos;s Luck Potholes, the Three
              Rondavels — is a day&apos;s outing in the other.
            </p>
            <p>
              <Link
                href="/the-land"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Read more on The Land →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Chapters 4 & 5 — side by side */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="prose-kanaan max-w-prose">
            <Eyebrow>Chapter 4 · The Welcome</Eyebrow>
            <H2 className="mt-3 mb-5">
              R{site.pricing.fromZAR} a person, sharing — and that&apos;s the
              base.
            </H2>
            <p>
              It&apos;s well below what most places around here charge. We
              didn&apos;t pick that price to be cheap; it&apos;s just what we
              think a fair stay should cost.
            </p>
            <p>
              The lodge rooms have their own bathrooms and a small kitchen.
              The basic twin rooms have two single beds and an en-suite —
              nothing fancy, just clean and quiet. The backpackers has{" "}
              {site.capacity.backpackersBeds} beds and a kitchen everyone
              shares. The camping sits under trees that have been here longer
              than most of the people who pitch under them.
            </p>
            <p>
              If you&apos;d like breakfast or dinner, we&apos;ll cook. A R{site.meals.breakfast.pricePerPersonZAR}{" "}
              continental set menu in the morning, or local Lowveld dishes and
              a braai in the evening. Just tell us the day before. We
              don&apos;t run a halaal option.
            </p>
            <p>
              <Link
                href="/stay"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                See where you sleep →
              </Link>
            </p>
          </div>

          <div className="prose-kanaan max-w-prose">
            <Eyebrow>Chapter 5 · The Celebration</Eyebrow>
            <H2 className="mt-3 mb-5">A weekend that ends on a Sunday.</H2>
            <p>
              We like weddings that last more than a day. Friday is for
              arriving — drinks under the lights, people finding each other, a
              rehearsal dinner that doesn&apos;t end on time. Saturday is
              yours. Sunday morning, nobody hurries — there&apos;s coffee,
              there&apos;s the last of the cake, and people drift home when
              they&apos;re ready.
            </p>
            <p>
              The farm holds up to {site.capacity.wedding.withCamping}+ guests
              when we open the camping ground. We do the same for family
              reunions, for school groups, for company retreats — same farm,
              just sized to the gathering.
            </p>
            <p>
              <Link
                href="/weddings"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Weddings &amp; gatherings →
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {/* Chapter 6 — closing */}
      <section className="bg-forest text-bone">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
          <Eyebrow>
            <span className="text-bone/70">Chapter 6 · The Future</span>
          </Eyebrow>
          <H2 className="mt-3 text-bone">We&apos;re not finished.</H2>
          <Lede>
            <span className="text-bone/90">
              The vegetable garden goes in this season. The fire pit is being
              rebuilt before winter. We&apos;re levelling the wedding lawn.
              Come back in a year and you&apos;ll see.
            </span>
          </Lede>
          <p className="mt-7 font-display text-lg italic text-bone/85">
            — {site.hosts.join(" & ")}
          </p>
          <div className="mt-8">
            <Link
              href={whatsappLink("ourStory")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
            >
              Say hello on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
