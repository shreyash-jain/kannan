import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { AmenityList } from "@/components/AmenityList";
import { EditorialSplit, ThumbQuad, StatStrip } from "@/components/Blocks";
import { AccommodationCard } from "@/components/AccommodationCard";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { groupTypes } from "@/data/groups";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Group functions & school groups near Kruger · Kanaan Guest Farm",
  description: `School tours, church weekends, team gatherings and family reunions on a fenced farm in Hazyview. Beds under roof, camping for ${site.capacity.campingPeople} more, a covered venue seating ${site.capacity.wedding.indoor}, and Kruger ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes away.`,
  alternates: { canonical: "/group-functions" },
  openGraph: {
    title: "Group Functions & School Groups · Kanaan Guest Farm",
    description: "A whole farm to yourselves — beds, camping and a covered venue, half an hour from Kruger.",
    images: [{ url: img.venueLawnWide.src, alt: img.venueLawnWide.alt }],
  },
};

export default function GroupFunctionsPage() {
  return (
    <>

      <Hero
        eyebrow="Group Functions & School Groups"
        title="A whole farm, to yourselves."
        lede={`School tours, church weekends, team gatherings and family reunions. Beds under roof, camping for ${site.capacity.campingPeople} more, and a covered venue in the middle of it all.`}
        image={img.venueLawnWide}
        primaryCta={{ href: whatsappLink("groupFunctions"), label: "Enquire about a group" }}
        secondaryCta={{ href: "/gallery", label: "See the venue" }}
      >
        <StatStrip
          items={[
            { value: String(site.capacity.sleepingTotal), unit: "+", label: "Beds under roof" },
            { value: String(site.capacity.campingPeople), label: "More, camping" },
            { value: String(site.capacity.wedding.indoor), label: "Seated, undercover" },
            { value: String(site.capacity.wedding.withMarquee), label: "With a marquee" },
          ]}
        />
      </Hero>

      <Section>
        <Eyebrow>Who comes here</Eyebrow>
        <H2 className="mt-2">Groups that need space, not a ballroom.</H2>
        <Lede>
          A working farm with room to spread out, a fence around all of it, and
          hosts who live on site.
        </Lede>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groupTypes.map((g) => (
            <AccommodationCard
              key={g.slug}
              href={`/group-functions/${g.slug}`}
              name={g.name}
              meta={g.eyebrow}
              summary={g.summary}
              image={g.hero}
            />
          ))}
        </div>
      </Section>

      <section className="fluid-band bg-sand">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <EditorialSplit
            eyebrow="The venue"
            title="Covered, open-sided, and looking down the valley."
            image={img.venueCovered}
            pull={`Put a marquee on the lawn and it takes ${site.capacity.wedding.withMarquee}.`}
          >
            <p>
              The entertainment area seats {site.capacity.wedding.indoor} under
              roof with long tables, a bar counter and a games corner. It is
              open on the valley side, so the Lowveld is part of the room rather
              than something you look at through a window.
            </p>
            <p>
              Bring your own caterer or let us cook — a continental breakfast for
              the morning and a South African braai for the evening, both on
              order.
            </p>
          </EditorialSplit>
        </div>
      </section>

      <Section>
        <Eyebrow>Sleeping the group</Eyebrow>
        <H2 className="mt-2">Four price points, one property.</H2>
        <Lede>
          Mixed groups rarely have one budget. Put the leaders in a lodge room,
          the students in the dorm, and the rest under canvas — all inside the
          same fence.
        </Lede>
        <AmenityList
          items={[
            { title: "Lodge rooms · sleeps 2–7", body: "En-suite, kitchenette, TV and WiFi. The rooms that suit leaders, parents and families." },
            { title: "Twin rooms · sleeps 2", body: "Two single beds and a private bathroom. Simple, and the easiest to allocate in numbers." },
            { title: `The backpackers room · ${site.capacity.backpackersBeds} beds`, body: "Singles and timber bunks in the wooden house, with a shared kitchen and lounge." },
            { title: `Camping · ${site.capacity.campsitePitches} pitches, up to ${site.capacity.campingPeople}`, body: "Power and water at every pitch, deep mango shade, and the ablution block alongside." },
          ]}
        />
      </Section>

      <section className="fluid-band bg-sand">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <Eyebrow>Practical information</Eyebrow>
            <H2 className="mt-2">What organisers ask us first.</H2>
            <dl className="measure-tight mt-5 grid gap-4 text-ink/85">
              <div className="border-t border-black/10 pt-3">
                <dt className="font-display text-base text-forest-deep">Is the property secure?</dt>
                <dd className="mt-1 text-sm">Fully fenced with a single motorised gate, and both owners live on site.</dd>
              </div>
              <div className="border-t border-black/10 pt-3">
                <dt className="font-display text-base text-forest-deep">Can we have the whole farm?</dt>
                <dd className="mt-1 text-sm">Yes — exclusive use is possible. Tell us your numbers and dates and we will check.</dd>
              </div>
              <div className="border-t border-black/10 pt-3">
                <dt className="font-display text-base text-forest-deep">Catering</dt>
                <dd className="mt-1 text-sm">We cook breakfast and a braai dinner on order, or bring your own caterer and use the kitchen.</dd>
              </div>
              <div className="border-t border-black/10 pt-3">
                <dt className="font-display text-base text-forest-deep">What is there to do?</dt>
                <dd className="mt-1 text-sm">Hiking and mountain-biking trails from the gate, a pool, a waterfall and rock pool, pool table and foosball — plus Kruger and the Panorama Route.</dd>
              </div>
              <div className="border-t border-black/10 pt-3">
                <dt className="font-display text-base text-forest-deep">Getting a bus in</dt>
                <dd className="mt-1 text-sm">The R40 runs to our gate and there is turning and parking space inside the fence.</dd>
              </div>
            </dl>
          </div>
          <ThumbQuad
            photos={[
              img.venueTables,
              img.entertainmentPoolTable,
              img.viewpointGazebo,
              img.gateSign,
            ]}
          />
        </div>
      </section>

      <CTA />
    </>
  );
}
