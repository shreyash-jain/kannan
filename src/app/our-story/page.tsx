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
            <H2 className="mt-3 mb-5">A tired old farm, and what nobody else saw.</H2>
            <p>
              We bought Kanaan in August 2025. From the road it looked like
              every other Lowveld farm that had drifted out of love — fences
              sagging, paint thin, the kind of place travellers pass without
              slowing down.
            </p>
            <p>
              What we saw was different. Forty-year-old mango trees. Bushveld
              that stretched until it ran out of light. A river that ran cold
              in winter. And a position — {site.distances.kmiaMinutes} minutes
              from Kruger Mpumalanga International Airport — that no amount of
              renovation can buy you if you don&apos;t already have it.
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
            <H2 className="mt-3 mb-5">Every review we read. Every thing we changed.</H2>
            <p>
              Before we touched a single wall, we read every review the
              property had ever received. Taps. Breakfast. The gate. The WiFi.
              The small things that decide whether a stay feels generous or
              grudging.
            </p>
            <p>
              We worked through them, one by one. We are still working through
              them. The farm we hand to guests today is not the farm we
              bought — and the farm a year from now will not be this one
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
              {site.distances.kmiaMinutes} minutes from Kruger. The geography does the heavy lifting.
            </H2>
            <p>
              You can fly into KMIA and be on the farm before lunch. The
              Phabeni and Numbi gates of the Kruger National Park sit{" "}
              {site.distances.krugerGateMinutesMin}–{site.distances.krugerGateMinutesMax}{" "}
              minutes away. The Sabie River is a short drive. The Panorama
              Route — God&apos;s Window, Bourke&apos;s Luck Potholes, Three
              Rondavels — is a day.
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
              From R{site.pricing.fromZAR} per person, per night.
            </H2>
            <p>
              Real beds. Real people answering the phone. Honest pricing
              because that is the kind of place we wanted to build, not because
              we were trying to undercut someone else.
            </p>
            <p>
              The lodge rooms have en-suite bathrooms and kitchenettes. The
              basic twin rooms have two single beds and an en-suite. The
              backpackers has {site.capacity.backpackersBeds} beds and a
              kitchen everyone shares. The camping is shaded by trees older
              than most of the people who pitch under them.
            </p>
            <p>
              Breakfast and dinner are on request — R{site.meals.breakfast.pricePerPersonZAR} for a continental
              spread, local Lowveld dishes and braai for dinner. Tell us the
              day before. We do not have a halaal option.
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
              We host weddings the way we like to host friends: slowly. A
              Friday rehearsal dinner under soft lights. A Saturday
              celebration. A Sunday breakfast where nobody is rushing anyone
              out the door. Up to{" "}
              {site.capacity.wedding.withCamping}+ guests when we open the
              camping ground.
            </p>
            <p>
              Family reunions, school groups, corporate retreats — the same
              farm, sized to the gathering.
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
          <H2 className="mt-3 text-bone">We are not done.</H2>
          <Lede>
            <span className="text-bone/90">
              The vegetable garden goes in this season. The communal fire pit
              is being rebuilt before winter. The wedding lawn is being
              levelled. Come back in a year and you will notice.
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
