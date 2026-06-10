import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmenityList } from "@/components/AmenityList";
import { CTA } from "@/components/CTA";
import { LightboxGallery } from "@/components/Lightbox";
import { img } from "@/lib/images";
import { lodgingTypeLd } from "@/lib/jsonld";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stay — Lodge rooms, twin rooms, backpacker beds & camping · Kanaan",
  description: `Cost-effective Kruger accommodation in the beautiful heart of Hazyview. Comfortable self-catering lodge rooms, simple twin rooms, an ${site.capacity.backpackersBeds}-bed backpacker dorm, and peaceful camping under forty-year-old mango trees. From R${site.pricing.fromZAR} per person sharing — genuinely affordable, just ${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport.`,
  alternates: { canonical: "/stay" },
  openGraph: {
    title: "Stay at Kanaan Guest Farm — Lodge, Twin Rooms, Backpackers, Camping",
    description: `From R${site.pricing.fromZAR} per person sharing, per night. Four wonderful ways to stay near the world-famous Kruger National Park.`,
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
        title="Four wonderful ways to stay near Kruger."
        lede={`From R${site.pricing.fromZAR} per person sharing, genuinely affordable and well below the regional average. Choose from comfortable self-catering lodge rooms, simple twin rooms, a sociable backpacker dorm, or a peaceful campsite under forty-year-old mango trees — all on one warmly welcoming, family-managed farm. Breakfast and dinner are happily prepared whenever you would like to order them.`}
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
          title="Comfortable self-catering lodge rooms."
          body={
            <>
              <p>
                Each room stands on its own, with a private en-suite bathroom
                and a kitchenette that has everything you need — a kettle, a
                two-plate hob, a fridge, plates and mugs. Wonderfully quiet
                and beautifully comfortable, perfect for unwinding after a
                long day exploring Kruger or the Lowveld.
              </p>
              <p>
                The bedding setup is different from one room to the next, so
                tell us who is coming and we will lovingly pick the right one
                for your family or group.
              </p>
            </>
          }
          image={img.lodgeRoom}
          facts={[
            "Private en-suite bathroom",
            "Kitchenette (kettle, hob, fridge)",
            "TV + free WiFi",
            "Linen and towels provided",
          ]}
        />

        <StaySection
          id="twin"
          eyebrow="Twin Rooms · Two single beds"
          title="Simple twin rooms, fairly priced and welcoming."
          body={
            <>
              <p>
                Two comfortable single beds, a private en-suite, a wall fan
                and a small table for a slow morning coffee. Beautifully
                simple, with everything you need to feel at home.
              </p>
              <p>
                A lovely choice for friends sharing, or for a parent and
                child on a Kruger adventure — somewhere genuinely affordable
                and welcoming to rest after a full day on safari.
              </p>
            </>
          }
          image={img.twinRoom}
          flip
          facts={[
            "Two single beds",
            "Private en-suite bathroom",
            "Wall fan",
            "Linen and towels provided",
          ]}
        />

        <StaySection
          id="backpackers"
          eyebrow={`Backpacker dorm · ${site.capacity.backpackersBeds}-bed hostel`}
          title="A sociable wooden-house dorm for adventurers and slow travellers."
          body={
            <>
              <p>
                Pine-clad walls, slatted wooden floors and a soft cabin
                light through the curtained windows. {site.capacity.backpackersBeds}{" "}
                beds in total, spread across a few small rooms — a mix of
                single beds and sturdy wooden bunks, dressed with fresh
                linen and a folded towel waiting on each mattress.
              </p>
              <p>
                A shared bathroom, a communal kitchen and a relaxed lounge
                where you will usually find someone reading, making coffee
                or swapping safari stories. Wonderfully suited to hikers,
                overlanders and slow travellers moving through the Lowveld
                at their own pace.
              </p>
              <p>
                Pick up groceries in Hazyview on your way in — the closest
                big supermarkets are just a short drive into town.
              </p>
            </>
          }
          image={img.backpackers}
          facts={[
            `${site.capacity.backpackersBeds} beds — singles + bunks`,
            "Pine-clad cabin character",
            "Shared bathroom & kitchen + lounge",
            "Free WiFi · secure parking",
          ]}
        />

        {/* Inside the wooden house — the dorm's other rooms */}
        <section className="bg-bone">
          <div className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
            <LightboxGallery>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                <button type="button" className="relative aspect-4/3 cursor-zoom-in overflow-hidden rounded-2xl">
                  <Image
                    src={img.backpackersBeds.src}
                    alt={img.backpackersBeds.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </button>
                <button type="button" className="relative aspect-4/3 cursor-zoom-in overflow-hidden rounded-2xl">
                  <Image
                    src={img.backpackersTwin.src}
                    alt={img.backpackersTwin.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </button>
                <button type="button" className="relative aspect-4/3 cursor-zoom-in overflow-hidden rounded-2xl">
                  <Image
                    src={img.backpackersBunk.src}
                    alt={img.backpackersBunk.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </button>
                <button type="button" className="relative aspect-4/3 cursor-zoom-in overflow-hidden rounded-2xl">
                  <Image
                    src={img.backpackersWide.src}
                    alt={img.backpackersWide.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </button>
              </div>
            </LightboxGallery>
          </div>
        </section>

        <StaySection
          id="camping"
          eyebrow={`Camping · ${site.capacity.campsitePitches} peaceful pitches`}
          title="Peaceful camping under forty-year-old mango trees."
          body={
            <>
              <p>
                {site.capacity.campsitePitches} beautifully shaded pitches
                beneath mango trees that have been standing for forty years,
                with power and water at every single one. Tents, rooftop
                campers, big overlanders — they all find a happy home here.
                Unpack your bags, put your feet up, and relax beneath the
                African sky as the evening sounds drift through the air.
              </p>
              <p>
                When the camping ground opens for a wedding, a school group
                or a family reunion, we can welcome up to{" "}
                {site.capacity.campingPeople} happy guests.
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

      {/* Glimpses of the rooms — finished details */}
      <section className="bg-bone">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-8">
            <Eyebrow>Glimpses of the rooms</Eyebrow>
            <H2 className="mt-3">A closer look at the details.</H2>
          </div>
          <LightboxGallery>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
              {[
                img.lodgeKitchen,
                img.lodgeBathroom,
                img.lodgeKitchenette,
                img.lodgeBathroomPine,
                img.lodgeKitchenWood,
                img.lodgeDining,
              ].map((g) => (
                <button
                  key={g.src}
                  type="button"
                  className="relative aspect-4/5 cursor-zoom-in overflow-hidden rounded-xl"
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </LightboxGallery>
        </div>
      </section>

      {/* Inside the lodge — wider angles per room type. A mosaic so guests
          can see the variety of layouts they might be put in, plus the
          courtyard the rooms open onto. */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <Eyebrow>Inside the lodge</Eyebrow>
            <H2 className="mt-3">Room types and the spaces around them.</H2>
            <Lede>
              The lodge units come in a few different shapes — quiet doubles,
              twin singles, larger family rooms, and self-catering layouts.
              When you tell us who is coming, we put you in the right one.
            </Lede>
          </div>
          <LightboxGallery>
            <div className="grid gap-3 md:grid-cols-6 md:grid-rows-2">
              <button type="button" className="relative md:col-span-2 md:row-span-2 aspect-[3/4] md:aspect-auto cursor-zoom-in overflow-hidden rounded-2xl">
                <Image
                  src={img.lodgeCourtyardPatio.src}
                  alt={img.lodgeCourtyardPatio.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
              <button type="button" className="relative md:col-span-2 aspect-4/3 cursor-zoom-in overflow-hidden rounded-2xl">
                <Image
                  src={img.lodgeModestDouble.src}
                  alt={img.lodgeModestDouble.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
              <button type="button" className="relative md:col-span-2 aspect-4/3 cursor-zoom-in overflow-hidden rounded-2xl">
                <Image
                  src={img.lodgeDoubleDecorated.src}
                  alt={img.lodgeDoubleDecorated.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
              <button type="button" className="relative md:col-span-2 aspect-4/3 cursor-zoom-in overflow-hidden rounded-2xl">
                <Image
                  src={img.lodgeFamilyTwin.src}
                  alt={img.lodgeFamilyTwin.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
              <button type="button" className="relative md:col-span-2 aspect-4/3 cursor-zoom-in overflow-hidden rounded-2xl">
                <Image
                  src={img.lodgeKitchenClassic.src}
                  alt={img.lodgeKitchenClassic.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
            </div>
          </LightboxGallery>
        </div>
      </section>

      {/* Dining — owner confirmed 2026-05-11: breakfast R60 continental on
          request, dinner on request (local dishes / braai), no halaal */}
      <section id="dining" className="scroll-mt-24 bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Dining</Eyebrow>
            <H2 className="mt-3">Home-cooked meals, whenever you would love them.</H2>
            <Lede>
              We love giving our guests the freedom to eat when and how they
              like, so meals are not bundled into the room rate. If you would
              love a breakfast or dinner sorted while you are here, just let
              us know the day before and we will happily cook. Otherwise
              there is a kitchen in your lodge room, or the lovely shops of
              Hazyview when you head into town.
            </Lede>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <DiningCard
              label={`Breakfast · R${site.meals.breakfast.pricePerPersonZAR} pp`}
              title="A warm continental breakfast, on order"
              body="A welcoming continental spread — fresh bread, cold cuts, cheese, fruit and proper South African coffee. R60 a person. Just let Anneli know the day before."
            />
            <DiningCard
              label="Dinner · on order"
              title="A traditional South African braai"
              body="Tell us how many you are and we will happily cook. A set menu of local Lowveld dishes and a proper South African braai under the African sky — the aroma of the fire, the warmth of the evening, and a meal you will remember. (We do not offer a halaal option.)"
            />
          </div>

          <p className="mt-10 max-w-2xl text-sm text-muted">
            Lodge rooms have their own kitchenette if you would rather cook
            for yourselves. The backpacker dorm has a sociable shared
            kitchen. And Hazyview town is just a short drive away for
            groceries.
          </p>
        </div>
      </section>

      <Section>
        <Eyebrow>What every stay includes</Eyebrow>
        <H2 className="mt-3 mb-10">Everything you need, all included.</H2>
        <AmenityList
          items={[
            { title: "Free WiFi", body: "Wireless internet across the whole property; QR code with credentials in-room." },
            { title: "Swimming pool", body: "Sparkling and kept ready year-round, framed by palms." },
            { title: "Fenced & gated", body: "A fully fenced and secure farm with a motorised gate. Just give us a call on arrival." },
            { title: "On-farm trails", body: "Hiking and mountain-biking trails that begin right at our gate — no driving required." },
            { title: "Entertainment area", body: "Pool table, foosball, and a communal braai for a memorable evening together." },
            { title: "Free parking", body: "Free, secure parking inside our fenced property." },
            { title: "Laundry on request", body: "Just ask at reception — small additional fees apply." },
            { title: "Home-cooked meals on request", body: `R${site.meals.breakfast.pricePerPersonZAR} continental breakfast; a traditional South African dinner of local Lowveld dishes and a proper braai.` },
          ]}
        />
      </Section>

      <section className="bg-bone">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
          <Eyebrow>Not sure which suits you?</Eyebrow>
          <H2 className="mt-3">Send us your dates.</H2>
          <Lede>
            Tell us when you are coming and who is travelling with you, and
            we will happily pick the right room, bed or pitch — and ask
            whether you would love breakfast and dinner sorted while we are
            at it.
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
