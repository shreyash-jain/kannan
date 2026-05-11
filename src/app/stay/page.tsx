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
  title: "Stay — Lodges, twin rooms, backpackers & camping · Kanaan",
  description: `Affordable Kruger accommodation in Hazyview. Self-catering lodge units, basic twin rooms, an ${site.capacity.backpackersBeds}-bed backpackers, and shaded camping under mango trees. From R${site.pricing.fromZAR} per person sharing — well below regional average. ${site.distances.kmiaMinutes} minutes from KMIA.`,
  alternates: { canonical: "/stay" },
  openGraph: {
    title: "Stay at Kanaan Guest Farm — Lodge, Twin Rooms, Backpackers, Camping",
    description: `From R${site.pricing.fromZAR} per person sharing, per night. Four honest ways to stay near the Kruger National Park.`,
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
              type: "Hotel",
              name: `${site.name} — Basic Twin Rooms`,
              description:
                "Simple twin rooms with two single beds and an en-suite bathroom, on a family-run farm in Hazyview, Mpumalanga.",
              path: "/stay#twin",
              image: img.twinRoom.src,
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
        title="Four honest ways to stay near Kruger."
        lede={`From R${site.pricing.fromZAR} a person, sharing — well below what most places around here will ask. Pick from lodge rooms, basic twin rooms, a relaxed backpackers or a shaded camping pitch. All on one fenced, family-run farm. Breakfast and dinner are on order when you want them.`}
      />

      <Section>
        <nav aria-label="On this page" className="mb-12 flex flex-wrap gap-2 text-sm">
          <a href="#lodge" className="rounded-full border border-ink/10 bg-bone px-4 py-1.5 font-medium text-ink/80 hover:border-ochre hover:text-ochre">
            Lodge
          </a>
          <a href="#twin" className="rounded-full border border-ink/10 bg-bone px-4 py-1.5 font-medium text-ink/80 hover:border-ochre hover:text-ochre">
            Basic Twin Rooms
          </a>
          <a href="#backpackers" className="rounded-full border border-ink/10 bg-bone px-4 py-1.5 font-medium text-ink/80 hover:border-ochre hover:text-ochre">
            Backpackers · {site.capacity.backpackersBeds} beds
          </a>
          <a href="#camping" className="rounded-full border border-ink/10 bg-bone px-4 py-1.5 font-medium text-ink/80 hover:border-ochre hover:text-ochre">
            Camping · {site.capacity.campsitePitches} pitches
          </a>
          <a href="#dining" className="rounded-full border border-ink/10 bg-bone px-4 py-1.5 font-medium text-ink/80 hover:border-ochre hover:text-ochre">
            Dining
          </a>
        </nav>

        <StaySection
          id="lodge"
          eyebrow="Lodge · Self-catering"
          title="Free-standing lodge units, simply done."
          body={
            <>
              <p>
                Each unit stands on its own, with its own bathroom and a small
                kitchen that has what you need — a kettle, a two-plate hob, a
                fridge, plates and mugs. Quiet rooms, set apart enough that
                you don&apos;t really hear each other.
              </p>
              <p>
                The bedding setup is different from one unit to the next, so
                tell us who&apos;s coming and we&apos;ll pick the right one
                for you.
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
          id="twin"
          eyebrow="Basic Twin Rooms · Two single beds"
          title="Honest rooms, fairly priced."
          body={
            <>
              <p>
                Two single beds, an en-suite, a wall fan and a small table for
                a morning coffee. No kitchen, no extras — just a clean,
                private room.
              </p>
              <p>
                They suit friends sharing, or a parent and child on a Kruger
                trip — anyone who wants somewhere proper to sleep without
                paying for things they&apos;re not going to use.
              </p>
            </>
          }
          image={img.twinRoom}
          flip
          facts={[
            "Two single beds",
            "En-suite bathroom",
            "Wall fan",
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
                {site.capacity.backpackersBeds} beds, a shared bathroom, a
                kitchen everyone uses, and a lounge where you&apos;ll usually
                find someone reading or making coffee. It&apos;s built for
                hikers, overlanders, and travellers moving through the
                Lowveld at their own pace.
              </p>
              <p>
                Bring food from Hazyview when you arrive — the closest big
                supermarkets are a short drive into town.
              </p>
            </>
          }
          image={img.backpackers}
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
          title="Camping under the mango trees."
          body={
            <>
              <p>
                {site.capacity.campsitePitches} pitches in the shade of the
                mango trees, with water and power at every one. Tents,
                rooftop campers, big overlanders — they all fit.
              </p>
              <p>
                When the camping ground opens up for a wedding, a school
                group or a family reunion, we can put up to{" "}
                {site.capacity.campingPeople} people on it.
              </p>
            </>
          }
          image={img.campingMango}
          flip
          facts={[
            `${site.capacity.campsitePitches} pitches, power + water`,
            "Shared ablution block",
            "Communal fire pit",
            "Fenced + gated property",
          ]}
        />
      </Section>

      {/* Dining — owner confirmed 2026-05-11: breakfast R60 continental on
          request, dinner on request (local dishes / braai), no halaal */}
      <section id="dining" className="scroll-mt-24 bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Dining</Eyebrow>
            <H2 className="mt-3">Set menus on order, not assumptions.</H2>
            <Lede>
              We don&apos;t bundle meals into the room price — you eat when
              you feel like it. If you&apos;d like breakfast or dinner, just
              order it the day before and we&apos;ll cook. Otherwise
              there&apos;s a kitchen in your unit, or the supermarkets in
              Hazyview when you head into town.
            </Lede>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <DiningCard
              label={`Breakfast · R${site.meals.breakfast.pricePerPersonZAR} pp`}
              title="Continental set menu, on order"
              body="A continental spread — bread, cold cuts, cheese, fruit, proper coffee. R60 a person. Let Anneli know the day before."
            />
            <DiningCard
              label="Dinner · on order"
              title="Set menu — local dishes and braai"
              body="Tell us how many you are and we'll cook. It's a set menu — local Lowveld dishes and a proper South African braai. We don't have a halaal option."
            />
          </div>

          <p className="mt-10 max-w-2xl text-sm text-muted">
            Lodge units have their own kitchen if you&apos;d rather cook. The
            backpackers has a shared one. And Hazyview town is a short drive
            for groceries.
          </p>
        </div>
      </section>

      <Section>
        <Eyebrow>What every stay includes</Eyebrow>
        <H2 className="mt-3 mb-10">No fine print.</H2>
        <AmenityList
          items={[
            { title: "Free WiFi", body: "Wireless internet across the property; QR code with credentials in-room." },
            { title: "Swimming pool", body: "Kept ready year-round." },
            { title: "Fenced & gated", body: "Fully fenced property with a motorised gate. Call ahead for entry." },
            { title: "On-farm trails", body: "Hiking and mountain biking trails — no driving required." },
            { title: "Entertainment area", body: "Pool table, foosball, communal braai." },
            { title: "Free parking", body: "Free, secure parking on the property." },
            { title: "Laundry on request", body: "Ask at reception — separate fees apply." },
            { title: "Set menus on request", body: `R${site.meals.breakfast.pricePerPersonZAR} continental breakfast set menu; dinner set menu — local dishes and braai.` },
          ]}
        />
      </Section>

      <section className="bg-bone">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
          <Eyebrow>Not sure which suits you?</Eyebrow>
          <H2 className="mt-3">Send us your dates.</H2>
          <Lede>
            Tell us when you&apos;re coming and who&apos;s with you. We&apos;ll
            pick the right room, bed or pitch — and ask whether you&apos;d
            like breakfast and dinner sorted while we&apos;re at it.
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

function DiningCard({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-bone p-6">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-ochre">
        {label}
      </p>
      <h3 className="mt-3 font-display text-2xl text-forest-deep">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/80">{body}</p>
    </div>
  );
}
