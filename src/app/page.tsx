import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { AccommodationCard } from "@/components/AccommodationCard";
import { AmenityList } from "@/components/AmenityList";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { site } from "@/lib/site";
import { faqLd } from "@/lib/jsonld";

export default function HomePage() {
  const faqs = [
    {
      q: "Where is Kanaan Guest Farm located?",
      a: "Kanaan Guest Farm is on the R40 in Hazyview, Mpumalanga (1242), in South Africa's Lowveld — a short drive from the Phabeni and Numbi gates of the Kruger National Park, the Sabie River and the Panorama Route.",
    },
    {
      q: "What kinds of accommodation do you offer?",
      a: "We offer self-catering lodge units with en-suite bathrooms and kitchenettes, an 8-bed backpackers hostel with shared facilities, and 10 shaded campsites under mango trees with power and water at every pitch.",
    },
    {
      q: "Is the property suitable for families and groups?",
      a: "Yes. We host families, school excursions, corporate retreats and team-building groups. Catered meals can be arranged on request, and we have flexible bedding configurations.",
    },
    {
      q: "How close is the Kruger National Park?",
      a: "Hazyview is one of the closest gateway towns to the Kruger. The Phabeni and Numbi entrance gates are roughly 30–45 minutes by road, making early-morning game drives easy from the farm.",
    },
    {
      q: "Do you have WiFi and a swimming pool?",
      a: "Yes — free WiFi throughout, a swimming pool, an entertainment area with a pool table and foosball, hiking and mountain biking trails, and a fully fenced property with a motorised gate.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(faqs)) }}
      />

      <Hero
        eyebrow="Hazyview · Mpumalanga · Gateway to the Kruger"
        title={
          <>
            A peaceful retreat in the
            <br className="hidden sm:block" />
            Lowveld bushveld.
          </>
        }
        lede="Self-catering lodge units, an 8-bed backpackers and shaded camping under towering mango trees on a working farm in Hazyview — minutes from the Kruger National Park, the Panorama Route and the Sabie River."
        image={img.heroFarm}
        primaryCta={{ href: "/contact", label: "Check availability" }}
        secondaryCta={{ href: "/lodge", label: "Browse stays" }}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <Eyebrow>The farm</Eyebrow>
            <H2 className="mt-3">
              Comfort meets nature on a working Lowveld farm.
            </H2>
          </div>
          <div className="prose-kanaan">
            <p>
              Kanaan is a small, quiet farm where unspoilt bushveld meets simple,
              well-kept rooms. Wake to birdsong, walk a trail before breakfast,
              cool off in the pool and watch the day end from the veranda.
            </p>
            <p>
              Lovingly run by {site.hosts.join(" and ")}, the property is fully
              fenced with a motorised gate, kept clean and friendly, and built
              for the way travellers actually move through this part of the
              country — slowly, with curiosity, and at their own pace.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0!">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <Eyebrow>Stays</Eyebrow>
            <H2 className="mt-3">Three ways to stay.</H2>
          </div>
          <Link
            href="/amenities"
            className="hidden text-sm font-medium text-clay hover:text-clay-deep sm:inline"
          >
            See all amenities →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <AccommodationCard
            href="/lodge"
            name="Self-catering lodge units"
            summary="Free-standing units with en-suite bathrooms and kitchenettes. Quiet, uncluttered rooms designed for rest after a day in the bush."
            image={img.lodgeRoom}
            meta="Lodge"
          />
          <AccommodationCard
            href="/backpackers"
            name="Backpackers hostel"
            summary="An 8-bed dorm with shared bathroom, communal kitchen and a laid-back living space. Built for hikers, overlanders and slow travellers."
            image={img.backpackers}
            meta="Hostel · 8 beds"
          />
          <AccommodationCard
            href="/camping"
            name="Camping under mango trees"
            summary="10 shaded campsites with running water and power at every pitch. Suits tents, rooftop campers and overlanding vehicles."
            image={img.campingMango}
            meta="10 pitches"
          />
        </div>
      </Section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center lg:px-8">
          <div className="relative aspect-5/4 overflow-hidden rounded-2xl">
            <Image
              src={img.pool.src}
              alt={img.pool.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Amenities</Eyebrow>
            <H2 className="mt-3">Practical, clean, and easy.</H2>
            <Lede>
              Free WiFi, a swimming pool kept ready year-round, an entertainment
              area with pool table and foosball, hiking and mountain biking
              trails, and laundry on request.
            </Lede>
            <Link
              href="/amenities"
              className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-clay hover:text-clay-deep"
            >
              See the full list <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-start">
          <div>
            <Eyebrow>Around Kanaan</Eyebrow>
            <H2 className="mt-3">Big country, small drive.</H2>
            <Lede>
              Hazyview is the closest town to the Kruger and a working base for
              the Panorama Route. Most of the region's icons are inside an
              hour's drive.
            </Lede>
          </div>
          <AmenityList
            items={[
              {
                title: "Kruger National Park",
                body: "Phabeni and Numbi gates are 30–45 minutes by road — early-morning self-drives are easy from the farm.",
              },
              {
                title: "Sabie River",
                body: "Subtropical greenery, river trails and waterside cafés a short drive from the property.",
              },
              {
                title: "Panorama Route",
                body: "God's Window, Bourke's Luck Potholes, Three Rondavels and Blyde River Canyon — a full day, or split over two.",
              },
              {
                title: "Adventure & culture",
                body: "Skyway Trails canopy tours, Shangana Cultural Village and the Sabie waterfalls cluster.",
              },
              {
                title: "Bourke's Luck Potholes",
                body: "Ancient water-carved rock formations at the meeting point of the Treur and Blyde rivers.",
              },
              {
                title: "On the farm",
                body: "Hiking and MTB trails, a swimming pool, sunset stoep — no driving required.",
              },
            ]}
          />
        </div>
      </Section>

      <section className="bg-bush text-cream">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Why guests come back
          </p>
          <p className="mt-6 font-display text-2xl leading-relaxed sm:text-3xl">
            “Spacious, clean, safe and quiet — Anneli and Matt are warm hosts
            and the bushveld views go on forever.”
          </p>
          <p className="mt-6 text-sm text-cream/70">— Recurring guest feedback</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <Eyebrow>Frequently asked</Eyebrow>
            <H2 className="mt-3">Good things to know.</H2>
          </div>
          <dl className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-t border-black/10 pt-5">
                <dt className="font-display text-lg text-bush-deep">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/80">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <CTA />
    </>
  );
}
