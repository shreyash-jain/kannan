import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmenityList } from "@/components/AmenityList";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { lodgingTypeLd } from "@/lib/jsonld";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stay — Lodges, backpackers & camping near Kruger · Kanaan",
  description: `Affordable Kruger accommodation in Hazyview. Self-catering lodge units, an 8-bed backpackers, and shaded camping under mango trees. From R${site.pricing.fromZAR} a night, breakfast included. ${site.distances.kmiaMinutes} minutes from KMIA.`,
  alternates: { canonical: "/stay" },
  openGraph: {
    title: "Stay at Kanaan Guest Farm — Lodge, Backpackers, Camping",
    description: `From R${site.pricing.fromZAR} a night, breakfast included. Three honest ways to stay near the Kruger National Park.`,
    images: [{ url: img.lodgeRoom.src, alt: img.lodgeRoom.alt }],
  },
};

export default function StayPage() {
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
              path: "/stay#lodge",
              image: img.lodgeRoom.src,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            lodgingTypeLd({
              type: "Hostel",
              name: `${site.name} — Backpackers`,
              description: `${site.capacity.backpackersBeds}-bed backpackers hostel with shared facilities, near the Kruger National Park.`,
              path: "/stay#backpackers",
              image: img.backpackers.src,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            lodgingTypeLd({
              type: "Campground",
              name: `${site.name} — Camping`,
              description: `${site.capacity.campsitePitches} shaded campsites under mango trees, with power and water at every pitch.`,
              path: "/stay#camping",
              image: img.campingMango.src,
            }),
          ),
        }}
      />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Stay", href: "/stay" },
        ]}
      />
      <PageHero
        eyebrow="Stay"
        title="Three honest ways to stay near Kruger."
        lede={`From R${site.pricing.fromZAR} a night with breakfast included. Self-catering rooms, a relaxed backpackers, and shaded camping — all on one fenced, family-run farm.`}
      />

      <Section>
        <nav aria-label="On this page" className="mb-12 flex flex-wrap gap-2 text-sm">
          <a href="#lodge" className="rounded-full border border-ink/10 bg-bone px-4 py-1.5 font-medium text-ink/80 hover:border-ochre hover:text-ochre">
            Lodge
          </a>
          <a href="#backpackers" className="rounded-full border border-ink/10 bg-bone px-4 py-1.5 font-medium text-ink/80 hover:border-ochre hover:text-ochre">
            Backpackers · {site.capacity.backpackersBeds} beds
          </a>
          <a href="#camping" className="rounded-full border border-ink/10 bg-bone px-4 py-1.5 font-medium text-ink/80 hover:border-ochre hover:text-ochre">
            Camping · {site.capacity.campsitePitches} pitches
          </a>
        </nav>

        <StaySection
          id="lodge"
          eyebrow="Lodge · Self-catering"
          title="Free-standing lodge units, simply done."
          body={
            <>
              <p>
                Free-standing units with private en-suite bathrooms and a
                working kitchenette — kettle, hob, fridge, basic crockery.
                Quiet rooms designed for rest after a day in the bush.
              </p>
              <p>
                Sleeping configurations vary across the units, so tell us your
                group and we&apos;ll match the best fit.
              </p>
            </>
          }
          image={img.lodgeRoom}
          facts={[
            "En-suite bathroom",
            "Kitchenette (kettle, hob, fridge)",
            "TV + free WiFi",
            "Linen and towels provided",
          ]}
        />

        <StaySection
          id="backpackers"
          eyebrow={`Backpackers · ${site.capacity.backpackersBeds}-bed hostel`}
          title="A relaxed dorm for hikers and slow travellers."
          body={
            <>
              <p>
                An {site.capacity.backpackersBeds}-bed dorm with shared
                bathroom, a communal kitchen and a laid-back living space.
                Built for hikers, overlanders, and travellers moving through
                the Lowveld at their own pace.
              </p>
              <p>
                Stock up in Hazyview before you arrive — the closest large
                supermarkets are a short drive away.
              </p>
            </>
          }
          image={img.backpackers}
          flip
          facts={[
            `${site.capacity.backpackersBeds} bunk beds`,
            "Shared bathroom",
            "Communal kitchen + lounge",
            "Free WiFi · secure parking",
          ]}
        />

        <StaySection
          id="camping"
          eyebrow={`Camping · ${site.capacity.campsitePitches} shaded pitches`}
          title="Camping under mango trees."
          body={
            <>
              <p>
                {site.capacity.campsitePitches} shaded campsites under
                forty-year-old mango trees, with running water and power at
                every pitch. Suits tents, rooftop campers and overlanding
                vehicles.
              </p>
              <p>
                For large gatherings we can pitch{" "}
                up to {site.capacity.campingPeople} people across the camping
                ground — useful for school groups, family reunions, and
                wedding overflow.
              </p>
            </>
          }
          image={img.campingMango}
          facts={[
            `${site.capacity.campsitePitches} pitches, power + water`,
            "Shared ablution block",
            "Communal fire pit",
            "Fenced + gated property",
          ]}
        />
      </Section>

      <Section className="pt-0!">
        <Eyebrow>What every stay includes</Eyebrow>
        <H2 className="mt-3 mb-10">No fine print.</H2>
        <AmenityList
          items={[
            { title: "Breakfast", body: `Included with every stay — proper breakfast, not a granola bar in a bag.` },
            { title: "Free WiFi", body: "Wireless internet across the property; QR code with credentials in-room." },
            { title: "Swimming pool", body: "Kept ready year-round." },
            { title: "Fenced & gated", body: "Fully fenced property with a motorised gate. Call ahead for entry." },
            { title: "On-farm trails", body: "Hiking and mountain biking trails — no driving required." },
            { title: "Entertainment area", body: "Pool table, foosball, communal braai." },
            { title: "Free parking", body: "Free, secure parking on the property." },
            { title: "Laundry on request", body: "Ask at reception — separate fees apply." },
          ]}
        />
      </Section>

      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
          <Eyebrow>Not sure which suits you?</Eyebrow>
          <H2 className="mt-3">Send us your dates.</H2>
          <Lede>
            We&apos;ll suggest the right room, dorm bed or pitch for your group
            and your trip.
          </Lede>
          <div className="mt-7">
            <Link
              href={whatsappLink("stay")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-bone hover:bg-forest-deep"
            >
              Enquire on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function StaySection({
  id,
  eyebrow,
  title,
  body,
  image,
  facts,
  flip,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: React.ReactNode;
  image: { src: string; alt: string };
  facts: string[];
  flip?: boolean;
}) {
  return (
    <article
      id={id}
      className="scroll-mt-24 border-t border-black/5 py-16 first:border-t-0 first:pt-0"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className={`relative aspect-4/3 overflow-hidden rounded-2xl ${flip ? "md:order-2" : ""}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <H2 className="mt-3">{title}</H2>
          <div className="prose-kanaan mt-5">{body}</div>
          <ul className="mt-6 grid gap-2 text-sm text-ink/80 sm:grid-cols-2">
            {facts.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-ochre" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
