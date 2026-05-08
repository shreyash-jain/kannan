import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { AmenityList } from "@/components/AmenityList";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { lodgingTypeLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Camping in Hazyview · Shaded sites under mango trees",
  description:
    "10 shaded campsites at Kanaan Guest Farm in Hazyview, beneath towering mango trees. Power and water at every pitch — tents, rooftop campers and overlanders welcome.",
  alternates: { canonical: "/camping" },
  openGraph: {
    title: "Camping · Kanaan Guest Farm",
    description:
      "Shaded campsites under mango trees in the Lowveld, near the Kruger National Park.",
    images: [{ url: img.campingMango.src, alt: img.campingMango.alt }],
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
              description:
                "10 shaded campsites under mango trees, with power and water at every pitch. Suitable for tents, rooftop campers and overlanding vehicles.",
              path: "/camping",
              image: img.campingMango.src,
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
      <PageHero
        eyebrow="Stays · Camping"
        title="Quiet nights under towering mango trees."
        lede="Ten individual campsites in dappled shade — kind on hot Lowveld afternoons, with running water and power at every pitch."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img.campingMango.src}
              alt={img.campingMango.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>The campground</Eyebrow>
            <H2 className="mt-3">Back-to-nature, with the basics sorted.</H2>
            <div className="prose-kanaan mt-5">
              <p>
                Ten pitches sit beneath the canopy of large mango trees,
                spaced for privacy. Tents, rooftop tents, caravans and
                overlanding rigs are all welcome.
              </p>
              <p>
                Shared ablutions and a dedicated washing-up area keep things
                practical, while electrical points and running water at each
                site mean you can stay set up for as long as the trip needs.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0!">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="md:order-2 relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img.campfire.src}
              alt={img.campfire.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>The vibe</Eyebrow>
            <H2 className="mt-3">Stars, fire, slow mornings.</H2>
            <Lede>
              The bush gets dark in a way most cities have forgotten. Cook
              outside, watch the stars, sleep with the windows open.
            </Lede>
          </div>
        </div>
      </Section>

      <Section className="pt-0!">
        <Eyebrow>At every pitch</Eyebrow>
        <H2 className="mt-3 mb-10">What you can expect.</H2>
        <AmenityList
          items={[
            { title: "Shaded pitch", body: "Beneath mature mango trees, kind on hot Lowveld days." },
            { title: "Power & water", body: "Electrical points and running water at each site." },
            { title: "Shared ablutions", body: "Clean, well-kept bathroom block." },
            { title: "Wash-up area", body: "Dedicated communal washing-up area." },
            { title: "Tents & rigs", body: "Suitable for tents, rooftop campers, caravans and overlanders." },
            { title: "Pool access", body: "Cool off after a hot drive." },
            { title: "Trails on-site", body: "Hiking and MTB trails start at the gate." },
            { title: "Fenced property", body: "Fully fenced, with motorised gate access." },
          ]}
        />
      </Section>

      <CTA />
    </>
  );
}
