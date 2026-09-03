import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { RoomCard } from "@/components/RoomCard";
import { AmenityList } from "@/components/AmenityList";
import { CTA } from "@/components/CTA";
import { SharePage } from "@/components/SharePage";
import { rooms, spaces, diningCard, roomPhotos } from "@/data/rooms";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stay — where you will sleep at Kanaan Guest Farm, Hazyview",
  description: `Every way to stay at Kanaan Guest Farm in Hazyview, photographed room by room: self-catering lodge rooms, twin rooms, an ${site.capacity.backpackersBeds}-bed wooden house and ${site.capacity.campsitePitches} shaded campsites under the mango trees. From R${site.pricing.fromZAR} per person sharing, ${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport.`,
  alternates: { canonical: "/stay" },
  openGraph: {
    title: "This is where you will stay · Kanaan Guest Farm",
    description: `A variety of rooms sleeping two to seven, plus dorm beds and shaded campsites. From R${site.pricing.fromZAR} per person sharing.`,
    images: [{ url: rooms[0].hero.src, alt: rooms[0].hero.alt }],
  },
};

export default function StayPage() {
  return (
    <>
      {/* A compact header, not a full page hero — the cards are the page,
          and they should be visible without scrolling. The share button
          rides alongside it rather than costing another band of height. */}
      <section className="border-b border-black/5 bg-sand">
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-x-8 gap-y-4 px-5 pb-7 pt-9 lg:px-8">
          <div>
            <Eyebrow>Stay</Eyebrow>
            <h1 className="mt-2 font-display text-3xl leading-tight tracking-tight text-forest-deep sm:text-4xl">
              This is where you will stay.
            </h1>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink/80">
              We have a lovely variety of rooms spread across the farm,
              sleeping anywhere from two to seven people in a single room — so
              a family can stay together, friends can share, and a couple on a
              Kruger trip still has somewhere quiet to land. Self-catering
              lodge rooms, simple twin rooms, beds in the wooden house and
              shaded campsites under the forty-year-old mango trees, from R
              {site.pricing.fromZAR} per person sharing.
            </p>
          </div>
          <SharePage
            url={`${site.url}/stay`}
            title="Where you will stay at Kanaan Guest Farm"
            className="flex-none"
          />
        </div>
      </section>

      <Section className="py-9!">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room, i) => (
            <RoomCard
              key={room.slug}
              href={`/stay/${room.slug}`}
              name={room.name}
              eyebrow={room.eyebrow}
              facts={room.facts}
              image={room.hero}
              occupancy={room.occupancy}
              photoCount={roomPhotos(room).length}
              shareUrl={`${site.url}/stay/${room.slug}`}
              priority={i < 2}
            />
          ))}
        </div>
      </Section>

      <Section className="pt-0! pb-12!">
        <Eyebrow>Also on the farm</Eyebrow>
        <H2 className="mt-2 mb-6">Yours to use, whichever room you are in.</H2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {spaces.map((space) => (
            <RoomCard
              key={space.slug}
              href={`/stay/${space.slug}`}
              name={space.name}
              eyebrow={space.eyebrow}
              facts={space.facts}
              image={space.hero}
              photoCount={roomPhotos(space).length}
              shareUrl={`${site.url}/stay/${space.slug}`}
            />
          ))}
          <RoomCard
            href={diningCard.href}
            name={diningCard.name}
            eyebrow={diningCard.eyebrow}
            facts={diningCard.facts}
            image={diningCard.image}
            shareUrl={`${site.url}${diningCard.href}`}
            cta="See what we cook" 
          />
        </div>
      </Section>

      {/* Dining — owner confirmed 2026-05-11: breakfast R60 continental on
          request, dinner on request (local dishes / braai), no halaal */}
      <section id="dining" className="scroll-mt-24 bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Dining</Eyebrow>
            <H2 className="mt-2">Home-cooked meals, whenever you would love them.</H2>
            <Lede>
              We love giving our guests the freedom to eat when and how they
              like, so meals are not bundled into the room rate. If you would
              love a breakfast or dinner sorted while you are here, just let
              us know the day before and we will happily cook. Otherwise
              there is a kitchen in your lodge room, or the lovely shops of
              Hazyview when you head into town.
            </Lede>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
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

          <p className="mt-8 max-w-2xl text-sm text-muted">
            Lodge rooms have their own kitchenette if you would rather cook
            for yourselves. The backpacker dorm has a sociable shared
            kitchen. And Hazyview town is just a short drive away for
            groceries.
          </p>
        </div>
      </section>

      <Section className="py-14!">
        <Eyebrow>What every stay includes</Eyebrow>
        <H2 className="mt-2 mb-8">Everything you need, all included.</H2>
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
        <div className="mx-auto max-w-3xl px-5 py-12 text-center lg:px-8">
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

