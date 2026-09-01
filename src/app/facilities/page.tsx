import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmenityList } from "@/components/AmenityList";
import { EditorialSplit } from "@/components/Blocks";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Facilities — what is on the farm · Kanaan Guest Farm",
  description:
    "Everything included with a stay at Kanaan Guest Farm in Hazyview: swimming pool, entertainment room, hiking and mountain-biking trails from the gate, a waterfall, communal braai, free WiFi and secure parking inside a fenced property.",
  alternates: { canonical: "/facilities" },
  openGraph: {
    title: "Facilities · Kanaan Guest Farm",
    description: "What is on the farm, and what comes with every stay.",
    images: [{ url: img.poolReal.src, alt: img.poolReal.alt }],
  },
};

export default function FacilitiesPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Facilities", href: "/facilities" },
        ]}
      />

      <Hero
        eyebrow="Facilities"
        title="What is on the farm."
        lede="Everything below is included with every stay, whichever room or pitch you are in. No day passes, no extras, no asking."
        image={img.poolReal}
      />

      <Section>
        <Eyebrow>Included with every stay</Eyebrow>
        <H2 className="mt-2">Yours from the moment you arrive.</H2>
        <AmenityList
          items={[
            { title: "Swimming pool", body: "Sparkling and kept ready year-round, framed by palms, with shade and seating around it." },
            { title: "Entertainment room", body: "Pool table, foosball, a television and a fridge, under a wooden-beamed ceiling. Nothing to book and nothing to pay." },
            { title: "Hiking trails", body: "Marked trails from our own gate, out through the macadamias and into the bushveld beyond. No driving to a trailhead." },
            { title: "Mountain biking", body: "Single-track and farm roads through Lowveld scenery. Bring your own bike." },
            { title: "The waterfall & rock pool", body: "Smooth rock shelves and a clear pool on the far side of the farm, with the valley opening out below." },
            { title: "Communal braai", body: "A proper fire, and the place most evenings end up once the sun has gone." },
            { title: "Free WiFi", body: "Wireless internet across the property, with the QR code and password waiting in your room." },
            { title: "Free secure parking", body: "Inside the fence, beside your room or your pitch." },
            { title: "Fenced & gated", body: "The whole property is fenced with a motorised gate. Give us a call on arrival and we will welcome you in." },
          ]}
        />
      </Section>

      <section className="fluid-band bg-sand">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Eyebrow>On request</Eyebrow>
          <H2 className="mt-2">Things we will happily arrange.</H2>
          <AmenityList
            items={[
              { title: "Breakfast", body: `A warm continental spread — fresh bread, cold cuts, cheese, fruit and proper South African coffee. R${site.meals.breakfast.pricePerPersonZAR} a person; let us know the day before.` },
              { title: "Dinner", body: "A set menu of local Lowveld dishes and a proper South African braai under the stars. We do not offer a halaal option." },
              { title: "Laundry", body: "Just ask at reception — small additional fees apply." },
              { title: "Group & exclusive use", body: "The whole farm for a school group, a church weekend or a family reunion. Tell us your numbers." },
            ]}
          />
          <p className="measure mt-8 text-sm text-muted">
            Lodge rooms have their own kitchenette if you would rather cook for
            yourselves, and the wooden house has a shared kitchen. Hazyview town
            is a short drive for groceries.
          </p>
        </div>
      </section>

      <Section>
        <EditorialSplit
          eyebrow="In the rooms"
          title="What is waiting when you open the door."
          image={img.lodgeKitchenClassic}
          pull="The wooden house shares its bathroom, kitchen and lounge — that is rather the point of it."
        >
          <p>
            Every lodge and twin room has a private en-suite bathroom, fresh
            linen and towels folded on the bed, and a fan overhead. Lodge rooms
            add a kitchenette — kettle, two-plate hob, fridge, plates and mugs —
            and a television.
          </p>
          <p>
            Campers have power and water at the pitch and a timber ablution
            block with hot showers a short walk away.
          </p>
        </EditorialSplit>
      </Section>

      <section className="fluid-band bg-sand">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Eyebrow>Good to know</Eyebrow>
          <H2 className="mt-2">The house bits.</H2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Check in", b: `${site.policies.checkIn}. Call us at the gate.` },
              { t: "Check out", b: `${site.policies.checkOut}, so an early Kruger start is no problem.` },
              { t: "Quiet hours", b: site.policies.quietHours },
              { t: "Getting here", b: `${site.distances.kmiaMinutes} min from KMIA · ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min from a Kruger gate.` },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-bone p-5 ring-1 ring-black/5">
                <h3 className="font-display text-lg text-forest-deep">{c.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/80">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
