import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { AmenityList } from "@/components/AmenityList";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { lodgingTypeLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Self-catering lodge units in Hazyview",
  description:
    "Free-standing self-catering lodge units at Kanaan Guest Farm in Hazyview, Mpumalanga. En-suite bathrooms, kitchenettes, free WiFi and a quiet bushveld setting near the Kruger National Park.",
  alternates: { canonical: "/lodge" },
  openGraph: {
    title: "Self-catering lodge units · Kanaan Guest Farm",
    description:
      "Quiet, en-suite, self-catering rooms on a working farm in Hazyview, minutes from the Kruger National Park.",
    images: [{ url: img.lodgeRoom.src, alt: img.lodgeRoom.alt }],
  },
};

export default function LodgePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            lodgingTypeLd({
              type: "Hotel",
              name: `${site.name} — Lodge`,
              description:
                "Self-catering lodge units with en-suite bathrooms and kitchenettes on a working farm in Hazyview, Mpumalanga.",
              path: "/lodge",
              image: img.lodgeRoom.src,
            }),
          ),
        }}
      />
      <PageHero
        eyebrow="Stays · Self-catering"
        title="Free-standing lodge units, simply done."
        lede="Quiet, uncluttered rooms with en-suite bathrooms and a working kitchenette, set across the farm so each stay feels private."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img.lodgeRoom.src}
              alt={img.lodgeRoom.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>The room</Eyebrow>
            <H2 className="mt-3">Built for rest after a day in the bush.</H2>
            <div className="prose-kanaan mt-5">
              <p>
                Each unit is free-standing, with a private en-suite bathroom and
                a kitchenette equipped for simple self-catering — kettle, hob,
                fridge, basic crockery and cutlery.
              </p>
              <p>
                Sleeping configurations vary across the units, so we can match
                couples, friends and families to the right space. Tell us your
                group and we'll suggest the best fit.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0!">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="md:order-2 relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img.lodgeKitchen.src}
              alt={img.lodgeKitchen.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>The kitchen</Eyebrow>
            <H2 className="mt-3">Self-catering, properly.</H2>
            <Lede>
              Cook breakfast before a Kruger gate-opening run or wind down the
              day with something simple on the stoep.
            </Lede>
            <p className="mt-4 text-sm text-muted">
              Tip: stock up in Hazyview before you arrive — the closest large
              supermarkets are in town, a short drive from the farm.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0!">
        <Eyebrow>What's included</Eyebrow>
        <H2 className="mt-3 mb-10">Every unit comes with…</H2>
        <AmenityList
          items={[
            { title: "Private en-suite bathroom", body: "Clean and well-maintained, with hot water and towels provided." },
            { title: "Kitchenette", body: "Kettle, hob, fridge and the essentials for cooking simple meals." },
            { title: "Free WiFi", body: "Wireless internet in every unit; QR code with credentials in-room." },
            { title: "Television", body: "TV in every unit for a quiet evening in." },
            { title: "Fenced & secure", body: "Fully fenced property with motorised gate. Call ahead for entry." },
            { title: "Pool & trails", body: "Use the swimming pool and the on-farm hiking and mountain biking trails." },
            { title: "Laundry on request", body: "Ask at reception — separate fees apply." },
            { title: "Parking", body: "Free, secure parking on the property." },
          ]}
        />
      </Section>

      <CTA />
    </>
  );
}
