import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { AccommodationCard } from "@/components/AccommodationCard";
import { EditorialSplit, ChipRow, ThumbQuad, StatStrip } from "@/components/Blocks";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Land — Kruger, the Panorama Route and the Lowveld from Kanaan",
  description: `Kanaan Guest Farm is ${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport and ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Phabeni and Numbi gates of the Kruger National Park, with the Panorama Route, Sabie and Graskop all day trips from the farm gate.`,
  alternates: { canonical: "/the-land" },
  openGraph: {
    title: "The Land · Kanaan Guest Farm",
    description: "Kruger before breakfast, the escarpment by lunch, the fire lit by dark.",
    images: [{ url: img.lowveldViewReal.src, alt: img.lowveldViewReal.alt }],
  },
};

export default function TheLandPage() {
  return (
    <>

      {/* The distances are the whole point of this page, so they are
          answered in the hero rather than three scrolls down. */}
      <Hero
        eyebrow="The Land"
        title="A whole world of wonder, right at our doorstep."
        lede="Kruger before breakfast, the escarpment by lunch, and the fire lit by dark. Everything worth seeing in the Lowveld is a day trip from the farm gate."
        image={img.lowveldViewReal}
        primaryCta={{ href: whatsappLink("theLand"), label: "Plan your days with us" }}
        secondaryCta={{ href: "/stay", label: "See where you will sleep" }}
      >
        <StatStrip
          items={[
            {
              value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax}`,
              unit: "min",
              label: "Kruger · Phabeni & Numbi",
            },
            { value: String(site.distances.kmiaMinutes), unit: "min", label: "Kruger Mpumalanga Airport" },
            { value: "~90", unit: "min", label: "Panorama Route" },
            { value: "~45", unit: "min", label: "Sabie & Graskop" },
          ]}
        />
      </Hero>

      <Section>
        <Eyebrow>Days out from the farm</Eyebrow>
        <H2 className="mt-2">Three directions, three completely different days.</H2>
        <Lede>
          Leave after coffee, be back for a swim. None of these need an early
          night before or a long drive home after.
        </Lede>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AccommodationCard
            href="/blog/kruger-from-hazyview"
            name="Phabeni & Numbi gates"
            meta={`Kruger · ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`}
            summary="Set off before sunrise, find the Big Five as the bushveld wakes, and be back for a swim before lunch. Phabeni means shelter in Sotho — a fitting welcome."
            image={img.krugerEntranceGate}
          />
          <AccommodationCard
            href="/blog/panorama-route-from-hazyview"
            name="God's Window, Blyde Canyon"
            meta="Panorama Route · ~90 min"
            summary="A day along the escarpment — God's Window, Bourke's Luck Potholes, the Three Rondavels and the Blyde River Canyon. Scenery you will remember for a lifetime."
            image={img.bourkesLuck}
          />
          <AccommodationCard
            href="/blog/things-to-do-around-hazyview"
            name="Misty mountains & waterfalls"
            meta="Sabie & Graskop · ~45 min"
            summary="Sabie waits one way with Lone Creek, Horseshoe and Bridal Veil Falls. Graskop — grassy hillock — offers the Big Swing and the Gorge Lift."
            image={img.graskopGorgeLift}
          />
        </div>
      </Section>

      <section className="fluid-band bg-sand">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <EditorialSplit
            eyebrow="The wider farm"
            title="More than the lodge."
            image={img.hilltopViewpoint}
            pull="In time, a quieter eco-camp on the further property."
          >
            <p>
              Kanaan sits on agricultural ground that runs out into bushveld
              long after the lodge ends. We are slowly bringing that land back
              into use — macadamia trees planted in rows, hiking and cycling
              routes opening up again.
            </p>
            <p>
              Walk far enough and the rows give way to a rocky outcrop, a
              waterfall, and a view that runs all the way to the escarpment.
              Most guests never expect the farm to be this big.
            </p>
          </EditorialSplit>
        </div>
      </section>

      <Section>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="lg:order-2">
            <ThumbQuad
              photos={[img.gateSign, img.rockCascade, img.macGrove, img.heroFarm]}
            />
          </div>
          <div className="lg:order-1">
            <Eyebrow>Getting here</Eyebrow>
            <H2 className="mt-2">Easy to find, wonderfully tucked away.</H2>
            <dl className="measure-tight mt-5 grid gap-4 text-ink/85">
              <div className="border-t border-black/10 pt-3">
                <dt className="font-display text-base text-forest-deep">From Kruger Mpumalanga International Airport</dt>
                <dd className="mt-1 text-sm">Just {site.distances.kmiaMinutes} minutes by road, on the scenic R40 north toward Hazyview.</dd>
              </div>
              <div className="border-t border-black/10 pt-3">
                <dt className="font-display text-base text-forest-deep">From Johannesburg (OR Tambo)</dt>
                <dd className="mt-1 text-sm">Around 4½ wonderful hours on the N4 east, with breathtaking Lowveld scenery as you exit toward Hazyview.</dd>
              </div>
              <div className="border-t border-black/10 pt-3">
                <dt className="font-display text-base text-forest-deep">From the Kruger gates</dt>
                <dd className="mt-1 text-sm">Just {site.distances.krugerGateMinutesMin} to {site.distances.krugerGateMinutesMax} minutes from Phabeni or Numbi — straight back after a morning game drive.</dd>
              </div>
            </dl>
            <p className="measure-tight mt-5 text-sm text-muted">
              Our fully fenced and secure property has a motorised gate — please
              give us a call when you arrive and we will welcome you in.
            </p>
          </div>
        </div>
      </Section>

      <section className="fluid-band bg-sand">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Eyebrow>Without leaving the farm</Eyebrow>
          <H2 className="mt-2">Wonderful days, without ever getting in the car.</H2>
          <ChipRow
            items={[
              "Hiking trails from the gate",
              "Mountain-biking routes",
              "The waterfall & rock pool",
              "Swimming pool",
              "The mango grove",
              "Braai under the stars",
              "The macadamia rows",
              "Hilltop viewpoint",
              "African night sky",
            ]}
          />
        </div>
      </section>

      <CTA />
    </>
  );
}
