import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { AmenityList } from "@/components/AmenityList";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Amenities · Pool, WiFi, trails, secure stay",
  description:
    "Amenities at Kanaan Guest Farm: free WiFi, swimming pool, hiking and mountain biking trails, entertainment area with pool table and foosball, fenced property with motorised gate, and laundry on request.",
  alternates: { canonical: "/amenities" },
};

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="At Kanaan"
        title="Comfort meets nature."
        lede="Practical amenities to make a working stay feel easy — without getting in the way of why you came: the bushveld, the quiet, and the sky."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img.pool.src}
              alt={img.pool.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Recreation</Eyebrow>
            <H2 className="mt-3">A pool, trails, and a place to play.</H2>
            <Lede>
              The pool is the guest favourite — open daily during daylight
              hours, with children supervised at all times. The entertainment
              area has a TV, pool table and foosball for the long evenings.
            </Lede>
          </div>
        </div>
      </Section>

      <Section className="pt-0!">
        <Eyebrow>Everything on offer</Eyebrow>
        <H2 className="mt-3 mb-10">Full list of amenities.</H2>
        <AmenityList
          items={[
            { title: "Free WiFi in all rooms", body: "Wireless internet in lodge units, the backpackers and around the main areas." },
            { title: "Swimming pool", body: "A guest favourite. Open daily during daylight hours; kids supervised; no alcohol at the pool." },
            { title: "Hiking trails", body: "On-farm trails with sweeping Lowveld views. Bring proper walking shoes and water." },
            { title: "Mountain biking", body: "Trails for cyclists across the property — head out early or late to avoid the heat." },
            { title: "Entertainment area", body: "Television, pool table and foosball near the pool area." },
            { title: "Self-catering kitchens", body: "Fully equipped kitchenettes in lodge units; communal kitchen at the backpackers." },
            { title: "Laundry service", body: "Available on request. Inquire at reception — separate fees apply." },
            { title: "Housekeeping", body: "Available weekdays (excluding public holidays). Extra cleaning on other days for a small fee." },
            { title: "Fenced property", body: "Fully fenced, with a motorised gate. Call ahead at the gate for entry." },
            { title: "Free parking", body: "Free, secure on-property parking." },
            { title: "Veranda areas", body: "Shaded outdoor seating to read, work, or watch the day end." },
            { title: "Group catering on request", body: "For schools, corporates and event groups — see the Groups page." },
          ]}
        />
      </Section>

      <Section className="pt-0!">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
          <div>
            <Eyebrow>House rules</Eyebrow>
            <H2 className="mt-3">Quiet, clean, friendly.</H2>
            <Lede>
              A small set of rules keeps the farm relaxed for everyone.
            </Lede>
          </div>
          <ul className="space-y-3 text-ink/85">
            <li className="border-t border-black/10 pt-3">
              <strong className="font-medium text-forest-deep">Check-in</strong>
              {" "}— 14:00–22:00. Please call ahead at the gate.
            </li>
            <li className="border-t border-black/10 pt-3">
              <strong className="font-medium text-forest-deep">Check-out</strong>
              {" "}— 05:00–10:00. Rooms must be vacated by 10:00.
            </li>
            <li className="border-t border-black/10 pt-3">
              <strong className="font-medium text-forest-deep">Quiet hours</strong>
              {" "}— After 23:00.
            </li>
            <li className="border-t border-black/10 pt-3">No smoking inside the rooms.</li>
            <li className="border-t border-black/10 pt-3">No parties or events without prior arrangement.</li>
            <li className="border-t border-black/10 pt-3">No unregistered guests or visitors.</li>
            <li className="border-t border-black/10 pt-3">No alcohol at the swimming pool.</li>
            <li className="border-t border-black/10 pt-3">Children must be supervised in and around the pool.</li>
            <li className="border-t border-black/10 pt-3">Please dispose of trash in the bins provided.</li>
          </ul>
        </div>
      </Section>

      <Section className="pt-0!">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
          <div>
            <Eyebrow>Getting here</Eyebrow>
            <H2 className="mt-3">Plan your transport.</H2>
          </div>
          <div className="prose-kanaan">
            <p>
              Uber and other e-hailing services don't operate in the area —
              please arrange your own transport or contact us in advance to
              help. Regional shuttle options include CityBug Shuttle, Safari
              Link and Bushveld Link.
            </p>
            <p>
              The closest airport is Kruger Mpumalanga International (MQP),
              with regular flights from Johannesburg and Cape Town. From the
              airport, the farm is roughly 45 minutes by road.
            </p>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
