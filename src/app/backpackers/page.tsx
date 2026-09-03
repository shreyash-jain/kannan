import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { AmenityList } from "@/components/AmenityList";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { lodgingTypeLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Backpackers hostel in Hazyview · 8-bed dorm",
  description:
    "An 8-bed backpackers hostel at Kanaan Guest Farm in Hazyview — shared bathroom, communal kitchen and a laid-back living space for hikers, overlanders and travellers near the Kruger.",
  alternates: { canonical: "/backpackers" },
  openGraph: {
    title: "Backpackers · Kanaan Guest Farm",
    description:
      "Rustic 8-bed dorm on a working farm in Hazyview, minutes from the Kruger.",
    images: [{ url: img.backpackers.src, alt: img.backpackers.alt }],
  },
};

export default function BackpackersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            lodgingTypeLd({
              type: "Hostel",
              name: `${site.name} — Backpackers`,
              description:
                "An 8-bed backpackers hostel with shared bathroom, communal kitchen and a relaxed living space on a working farm in Hazyview.",
              path: "/backpackers",
              image: img.backpackers.src,
            }),
          ),
        }}
      />
      <PageHero
        eyebrow="Stays · Hostel"
        title="A back-to-basics base for travellers chasing sunsets."
        lede="An 8-bed dorm on a working farm — shared bathroom, communal kitchen and a laid-back living space for hikers, overlanders and slow travellers."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img.backpackers.src}
              alt={img.backpackers.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>The space</Eyebrow>
            <H2 className="mt-3">Eight beds, plenty of sky.</H2>
            <div className="prose-kanaan mt-5">
              <p>
                Beds are rented per person, so this works equally well for solo
                travellers and small groups passing through. The dorm is simple
                and clean, with a shared bathroom and a communal kitchen for
                self-catering.
              </p>
              <p>
                The living space is built for unplugging — a good chair, a cold
                drink, the hum of the bush. Mornings start with birdsong;
                evenings end with stars.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0!">
        <Eyebrow>What's included</Eyebrow>
        <H2 className="mt-3 mb-10">Backpackers basics, done well.</H2>
        <AmenityList
          items={[
            { title: "8-bed shared dorm", body: "Per-person bed pricing — solo or small-group friendly." },
            { title: "Shared bathroom", body: "Clean, kept ready, hot water." },
            { title: "Communal kitchen", body: "Cook your own — fridge, hob, basic crockery." },
            { title: "Laid-back lounge", body: "Books, a couch and a stoep made for ending the day on." },
            { title: "Free WiFi", body: "Connection details on the wall." },
            { title: "Pool access", body: "Use of the on-farm swimming pool." },
            { title: "Hiking & MTB", body: "Trails leave from the farm — bring shoes (and a bike)." },
            { title: "Secure & fenced", body: "Fully fenced property with motorised gate." },
          ]}
        />
      </Section>

      <CTA />
    </>
  );
}
