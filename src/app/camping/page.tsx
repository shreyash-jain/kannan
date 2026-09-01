import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmenityList } from "@/components/AmenityList";
import { EditorialSplit, PhotoGrid, ThumbQuad, StatStrip } from "@/components/Blocks";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { lodgingTypeLd } from "@/lib/jsonld";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: `Camping near Kruger — ${site.capacity.campsitePitches} shaded pitches under mango trees · Kanaan`,
  description: `Camping at Kanaan Guest Farm in Hazyview: ${site.capacity.campsitePitches} shaded pitches under forty-year-old mango trees, power and water at every pitch, hot showers, and a fenced property ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from a Kruger gate.`,
  alternates: { canonical: "/camping" },
  openGraph: {
    title: "Camping at Kanaan Guest Farm — under the mango trees",
    description: `${site.capacity.campsitePitches} shaded pitches with power and water at every one, half an hour from Kruger.`,
    images: [{ url: img.campingAvenueWide.src, alt: img.campingAvenueWide.alt }],
  },
};

export default function CampingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            lodgingTypeLd({
              type: "Campground",
              name: `${site.name} — Camping`,
              description: `${site.capacity.campsitePitches} shaded campsites under forty-year-old mango trees, with power and water at every pitch, near the Kruger National Park.`,
              path: "/camping",
              image: img.campingAvenueWide.src,
            }),
          ),
        }}
      />
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Camping", href: "/camping" },
        ]}
      />

      <Hero
        eyebrow="Camping"
        title={`${site.capacity.campsitePitches} shaded pitches under forty-year-old mango trees.`}
        lede="Power and water at every single pitch. Tents, rooftop campers and big overlanders all find a happy home here — half an hour from a Kruger gate."
        image={img.campingAvenueWide}
        primaryCta={{ href: whatsappLink("camping"), label: "Book a pitch on WhatsApp" }}
        secondaryCta={{ href: "/gallery", label: "See every photo" }}
      >
        <StatStrip
          items={[
            { value: String(site.capacity.campsitePitches), label: "Shaded pitches" },
            { value: String(site.capacity.campingPeople), label: "Guests at full camp" },
            { value: "Every", unit: "pitch", label: "Power & water" },
            {
              value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax}`,
              unit: "min",
              label: "To a Kruger gate",
            },
          ]}
        />
      </Hero>

      <Section>
        <Eyebrow>At your pitch</Eyebrow>
        <H2 className="mt-2">Everything you need, nothing you have to ask for.</H2>
        <AmenityList
          items={[
            { title: "Power at the pitch", body: "A plug point right where you park, so no leads run across the grass to a shared box." },
            { title: "Water at the pitch", body: "Your own tap. Fill the kettle without walking to the ablutions and back." },
            { title: "Deep mango shade", body: "Forty-year-old trees over most of the ground — the difference between a Lowveld afternoon you enjoy and one you hide from." },
            { title: "Room for any rig", body: "Ground tents, rooftop tents, caravans and long overland vehicles. Tell us what you are bringing and we will point you at the right spot." },
            { title: "Hot showers", body: "A timber ablution block a short walk away, with hot water, basins and private toilet cubicles." },
            { title: "Fire & braai", body: "Bring wood and something to cook. The communal fire is where most evenings end up." },
          ]}
        />
      </Section>

      <section className="fluid-band bg-sand">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <EditorialSplit
            eyebrow="Why camp here"
            title="Leave the tent standing and go and find elephant."
            image={img.campingGround}
            pull={`Phabeni gate is ${site.distances.krugerGateMinutesMin} minutes away. Set off in the dark, be back for a swim.`}
          >
            <p>
              Most people camping near Kruger pack up every morning. You do not
              have to. The whole farm is fenced with a motorised gate, so your
              camp stays exactly as you left it while you spend the day in the
              park.
            </p>
            <p>
              Come back to a pitch that is still yours, a pool that is still
              cool, and trails that start at the gate rather than an hour up the
              road.
            </p>
          </EditorialSplit>
        </div>
      </section>

      <Section>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Eyebrow>Good to know</Eyebrow>
            <H2 className="mt-2">The practical bits.</H2>
            <dl className="measure-tight mt-5 grid gap-4 text-ink/85">
              <div className="border-t border-black/10 pt-3">
                <dt className="font-display text-base text-forest-deep">Arriving</dt>
                <dd className="mt-1 text-sm">Check in from {site.policies.checkIn.split(" ")[0]}. The gate is motorised — call us when you are outside and we will let you in.</dd>
              </div>
              <div className="border-t border-black/10 pt-3">
                <dt className="font-display text-base text-forest-deep">Groceries &amp; wood</dt>
                <dd className="mt-1 text-sm">Stock up in Hazyview on the way in; the big supermarkets are a short drive from the farm.</dd>
              </div>
              <div className="border-t border-black/10 pt-3">
                <dt className="font-display text-base text-forest-deep">Meals, if you would rather not cook</dt>
                <dd className="mt-1 text-sm">A warm continental breakfast or a proper South African braai dinner — just let us know the day before.</dd>
              </div>
              <div className="border-t border-black/10 pt-3">
                <dt className="font-display text-base text-forest-deep">Big groups</dt>
                <dd className="mt-1 text-sm">The camping ground opens up for school groups, church weekends and family reunions — up to {site.capacity.campingPeople} guests.</dd>
              </div>
              <div className="border-t border-black/10 pt-3">
                <dt className="font-display text-base text-forest-deep">Quiet hours</dt>
                <dd className="mt-1 text-sm">{site.policies.quietHours}, so everyone gets the early start they came for.</dd>
              </div>
            </dl>
          </div>
          <ThumbQuad
            photos={[
              img.campingAblutions,
              img.campingPowerWater,
              img.campingAblutionsExterior,
              img.campfire,
            ]}
          />
        </div>
      </Section>

      <section className="fluid-band bg-sand">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Eyebrow>The camping ground</Eyebrow>
          <H2 className="mt-2 mb-6">See it before you book it.</H2>
          <PhotoGrid
            cols={4}
            photos={[
              img.campingAvenue,
              img.campingGround,
              img.campingTents,
              img.campingWaterTank,
              img.campingMango,
              img.campfire,
              img.campingAblutions,
              img.campingPowerWater,
            ]}
          />
        </div>
      </section>

      <Section className="py-12!">
        <Lede>
          Would rather have a roof? The lodge rooms, twin rooms and the
          backpackers room are all inside the same fence.
        </Lede>
        <Link
          href="/stay"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ochre hover:text-ochre-deep"
        >
          See every room <span aria-hidden>→</span>
        </Link>
      </Section>

      <CTA />
    </>
  );
}
