import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { AccommodationCard } from "@/components/AccommodationCard";
import { AmenityList } from "@/components/AmenityList";
import { CTA } from "@/components/CTA";
import { Video } from "@/components/Video";
import { img, video, wedding } from "@/lib/images";
import { site, whatsappLink } from "@/lib/site";
import { faqLd } from "@/lib/jsonld";

export default function HomePage() {
  const faqs = [
    {
      q: "Where is Kanaan Guest Farm?",
      a: `We're on the R40 in the beautiful heart of Hazyview, Mpumalanga, in South Africa's Lowveld — just ${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport, and only ${site.distances.krugerGateMinutesMin} to ${site.distances.krugerGateMinutesMax} minutes from the Phabeni and Numbi gates of the world-famous Kruger National Park.`,
    },
    {
      q: "What does a stay cost?",
      a: `Our rates start from R${site.pricing.fromZAR} per person sharing, per night — genuinely affordable, and well below the regional average. Cost-effective comfort in a place that always goes the extra mile to make you feel at home.`,
    },
    {
      q: "Is breakfast included?",
      a: `Breakfast isn't bundled in — we love giving our guests the freedom to eat when and how they like. If you'd love breakfast or dinner sorted while you're here, simply let us know the day before. Our continental breakfast is R${site.meals.breakfast.pricePerPersonZAR} per person, and dinner is a set menu of local Lowveld dishes and a proper South African braai. (We don't offer a halaal option.)`,
    },
    {
      q: "What kinds of rooms do you have?",
      a: `Four wonderful ways to stay. Comfortable self-catering lodge rooms with their own bathrooms and kitchenettes, simple twin rooms with two single beds and an en-suite, an ${site.capacity.backpackersBeds}-bed backpacker dorm with shared facilities, and ${site.capacity.campsitePitches} peaceful campsites under forty-year-old mango trees, with power and water at every pitch.`,
    },
    {
      q: "Do you host weddings or large gatherings?",
      a: `Absolutely. Kanaan is a wonderfully flexible venue for weddings and gatherings of every kind — up to ${site.capacity.wedding.indoor}+ guests indoors, ${site.capacity.wedding.withMarquee}+ under a marquee, and ${site.capacity.wedding.withCamping}+ when we open the camping ground for guests staying the whole weekend. Family reunions, milestone birthdays, school groups, corporate retreats and team building all find a happy home here.`,
    },
    {
      q: "How close is the Kruger National Park?",
      a: `Wonderfully close. Hazyview is one of the closest towns to the world-famous Kruger National Park, and the Phabeni and Numbi gates are just ${site.distances.krugerGateMinutesMin} to ${site.distances.krugerGateMinutesMax} minutes away by road. Imagine an early morning game drive, spotting the legendary Big Five in their natural habitat, and being back at the farm in time for a swim before lunch.`,
    },
    {
      q: "What's included in a stay?",
      a: "Free WiFi across the whole property, a sparkling swimming pool kept ready year-round, hiking and mountain-biking trails right at our gate, our entertainment area with a pool table and foosball, and secure parking inside a fenced and gated farm. Breakfast and dinner are happily prepared whenever you'd like to order them.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(faqs)) }}
      />

      <Hero
        eyebrow={`Hazyview · Mpumalanga · ${site.distances.kmiaMinutes} minutes from Kruger airport`}
        title={
          <>
            Where your African
            <br className="hidden sm:block" />
            holiday begins.
          </>
        }
        lede="Kanaan Guest Farm is your perfect base in the beautiful heart of Hazyview, Mpumalanga — family-managed, warmly welcoming, and just 48 minutes from Kruger Mpumalanga International Airport. Self-catering rooms, peaceful campsites under forty-year-old mango trees, and a working farm with deep South African roots."
        image={img.heroFarm}
        primaryCta={{ href: whatsappLink("home"), label: "Say hello on WhatsApp" }}
        secondaryCta={{ href: "/stay", label: "Find your room" }}
      />

      {/* Founder credit — brief Section 10, trust signal above the fold */}
      <div className="border-b border-black/5 bg-sand">
        <p className="mx-auto max-w-7xl px-5 py-3 text-center text-xs uppercase tracking-[0.18em] text-muted lg:px-8">
          Family-managed by {site.hosts.join(" & ")} · Welcoming guests since {site.ownedSince}
        </p>
      </div>

      {/* Chapter 1 — The Discovery */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-sand">
            <Video
              video={video.mangoGrove}
              className="absolute inset-0 h-full w-full object-cover"
              schemaName="A walk through the mango grove at Kanaan"
              schemaDescription="A short walk through the forty-year-old mango grove at Kanaan Guest Farm in Hazyview, where the camping ground sits under shade all summer."
              schemaUploadDate="2026-05-22"
            />
          </div>
          <div>
            <Eyebrow>Chapter 1 · The Discovery</Eyebrow>
            <H2 className="mt-3">The moment we walked onto Kanaan, we knew.</H2>
            <div className="prose-kanaan mt-5">
              <p>
                When we found Kanaan in August 2025, the farm had been quietly
                waiting a long time. The more we walked it, the more we saw.
                Mango trees that had been standing for forty years. Bushveld
                stretching all the way to the horizon. A cold river running
                through the property, even in the height of summer.
              </p>
              <p>
                And the kind of location no amount of renovation can ever buy
                — just {site.distances.kmiaMinutes} minutes from Kruger
                Mpumalanga International Airport, with the world-famous Kruger
                National Park waiting only a short drive away.
              </p>
              <p>
                <Link
                  href="/our-story"
                  className="font-medium text-ochre hover:text-ochre-deep"
                >
                  Read the full story →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Chapter 2 — The Promise */}
      <Section className="pt-0!">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="md:order-2 relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img.veranda.src}
              alt={img.veranda.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="md:order-1">
            <Eyebrow>Chapter 2 · The Promise</Eyebrow>
            <H2 className="mt-3">Reading every guest, listening to every story.</H2>
            <div className="prose-kanaan mt-5">
              <p>
                Before we ever picked up a paintbrush, we sat down and read
                every single review the farm had ever received. Guests loved
                the views, the affordable prices, the genuine warmth they
                found here. The little things that needed attention — those,
                we wrote down.
              </p>
              <p>
                And then we got to work. Slowly, carefully, with patience.
                The Kanaan you arrive at today is a place that has been loved
                back into shape — and we are not finished yet. We never quite
                will be.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Chapter 3 — The Land (Kruger gateway preview) */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center lg:px-8">
          <div className="relative aspect-5/4 overflow-hidden rounded-2xl">
            <Image
              src={img.kruger.src}
              alt={img.kruger.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Chapter 3 · The Land</Eyebrow>
            <H2 className="mt-3">
              {site.distances.kmiaMinutes} minutes from Kruger — and a whole
              world to explore.
            </H2>
            <Lede>
              Land at Kruger Mpumalanga International Airport in the morning
              and you could be sitting on our veranda by lunchtime. The
              Phabeni and Numbi gates of the world-famous Kruger National Park
              lie just {site.distances.krugerGateMinutesMin} to{" "}
              {site.distances.krugerGateMinutesMax} minutes away — close
              enough for an unhurried early-morning game drive. Phabeni means
              <em> shelter</em> in Sotho, a fitting name for the gateway to
              one of Africa&apos;s greatest wildlife destinations. The misty
              mountain town of Sabie, with its breathtaking waterfalls, lies a
              short drive in one direction; the spectacular Panorama Route —
              God&apos;s Window, Bourke&apos;s Luck Potholes, the Three
              Rondavels — waits in the other.
            </Lede>
            <Link
              href="/the-land"
              className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-ochre hover:text-ochre-deep"
            >
              Explore the Lowveld <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Chapter 4 — The Welcome (price + stays) */}
      <Section>
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <Eyebrow>Chapter 4 · The Welcome</Eyebrow>
            <H2 className="mt-3">
              From R{site.pricing.fromZAR} per person sharing — and that is
              just the beginning.
            </H2>
            <p className="mt-4 max-w-2xl text-ink/80">
              Cost-effective, warm, and welcoming. Whether you are travelling
              as a family, a couple, with friends or on your own, there is a
              place for you here. Comfortable self-catering lodge rooms, simple
              twin rooms, an eight-bed backpacker dorm and peaceful campsites
              under forty-year-old mango trees. And if you would love
              breakfast or dinner sorted while you are here, just let us know
              the day before — we will happily put on a continental breakfast
              or fire up the braai for a traditional South African dinner
              under the African sky.
            </p>
          </div>
          <Link
            href="/stay"
            className="hidden text-sm font-medium text-ochre hover:text-ochre-deep sm:inline"
          >
            See all stays →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AccommodationCard
            href="/stay#lodge"
            name="Self-catering lodge rooms"
            summary="Comfortable, free-standing units with their own bathrooms and kitchenettes — your private base for unforgettable Kruger adventures."
            image={img.lodgeRoom}
            meta="Lodge"
          />
          <AccommodationCard
            href="/stay#twin"
            name="Simple twin rooms"
            summary="Two single beds and an en-suite — fairly priced, comfortable, and welcoming, for travellers who want somewhere lovely to rest."
            image={img.twinRoom}
            meta="Twin"
          />
          <AccommodationCard
            href="/stay#backpackers"
            name="Backpacker dorm"
            summary={`An ${site.capacity.backpackersBeds}-bed dorm with a shared kitchen and a relaxed communal lounge — perfect for hikers, overlanders and adventurers exploring at their own pace.`}
            image={img.backpackers}
            meta={`Hostel · ${site.capacity.backpackersBeds} beds`}
          />
          <AccommodationCard
            href="/stay#camping"
            name="Camping under mango trees"
            summary={`${site.capacity.campsitePitches} peaceful pitches in the shade of forty-year-old mango trees, with power and water at every one — for tents, rooftop campers and overlanders alike.`}
            image={img.campingMango}
            meta={`${site.capacity.campsitePitches} pitches`}
          />
        </div>
      </Section>

      {/* Glimpses — a strip of distinct property photos */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Glimpses of Kanaan</Eyebrow>
              <H2 className="mt-3">A wander through the farm.</H2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {[
              img.lodgeKitchen,
              img.lodgeBathroom,
              img.lodgeBedroomEnsuite,
              img.waterfall,
              img.mangoRoad,
              img.veranda,
            ].map((g) => (
              <div
                key={g.src}
                className="relative aspect-4/5 overflow-hidden rounded-xl"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities glance */}
      <section className="bg-bone">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center lg:px-8">
          <div className="relative aspect-5/4 overflow-hidden rounded-2xl bg-sand">
            <Video
              video={video.lodgeWalk}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <Eyebrow>What every stay includes</Eyebrow>
            <H2 className="mt-3">Everything you need, all included.</H2>
            <Lede>
              Free WiFi across the whole property, a sparkling swimming pool
              kept ready year-round, an entertainment area with a pool table
              and foosball, and hiking and mountain-biking trails that begin
              right at our gate. We will happily do your laundry too — just
              ask.
            </Lede>
            <Link
              href="/stay"
              className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-ochre hover:text-ochre-deep"
            >
              See the full list <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Chapter 5 — The Celebration */}
      <Section>
        {/* Wide ceremony image — the iconic shot under the mango grove */}
        <div className="mb-12 relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={wedding.ceremony.src}
            alt={wedding.ceremony.alt}
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <Eyebrow>Chapter 5 · The Celebration</Eyebrow>
            <H2 className="mt-3">A wedding weekend, in the beautiful Lowveld.</H2>
            <Lede>
              The most memorable weddings we have hosted are the ones that
              last more than a day. Friday evening, family and friends arrive,
              drift toward the fire, and find each other again. Saturday is
              yours — the ceremony, the celebration, the dancing under the
              African sky. Sunday morning, nobody is in a hurry. There is
              coffee, the last of the cake, and people heading home full of
              stories. Kanaan can hold up to{" "}
              {site.capacity.wedding.withCamping}+ guests across the lodge,
              the wedding lawn, the marquee area and the camping ground — a
              whole farm, sized to your gathering.
            </Lede>
            <Link
              href="/weddings"
              className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-ochre hover:text-ochre-deep"
            >
              Weddings &amp; gatherings <span aria-hidden>→</span>
            </Link>
          </div>
          <AmenityList
            items={[
              {
                title: "Indoor",
                body: `Up to ${site.capacity.wedding.indoor}+ guests in the main venue.`,
              },
              {
                title: "With marquee",
                body: `Up to ${site.capacity.wedding.withMarquee}+ on the wedding lawn under canvas.`,
              },
              {
                title: "With camping",
                body: `Up to ${site.capacity.wedding.withCamping}+ when guests stay the whole weekend on-site.`,
              },
              {
                title: "Multi-day",
                body: "Friday rehearsal dinner. Saturday celebration. Sunday slow morning.",
              },
            ]}
          />
        </div>
      </Section>

      {/* What we are aiming for. Real Google / Booking reviews will replace
          this section once Google Business verification completes. */}
      <section className="bg-forest text-bone">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-ochre">
            What we are aiming for
          </p>
          <p className="mt-6 font-display text-2xl leading-relaxed sm:text-3xl">
            Spacious. Genuinely welcoming. Warmly looked after. And views that
            stretch on forever — though that last part we cannot take credit
            for. That is the magic of the place.
          </p>
          <p className="mt-6 text-sm text-bone/70">
            Real guest reviews from Google and Booking.com will land here once
            our Google profile is verified.
          </p>
        </div>
      </section>

      {/* Chapter 6 — The Future */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Chapter 6 · The Future</Eyebrow>
          <H2 className="mt-3">We are not finished — and we never quite will be.</H2>
          <div className="prose-kanaan mx-auto mt-6">
            <p>
              The vegetable garden goes in this season. The fire pit is being
              rebuilt before winter. We are levelling the wedding lawn. If you
              stayed with us last year, you will already see how much has
              changed. Come back next year and you will see more — and more
              beautiful things waiting for you to discover.
            </p>
          </div>
          <p className="mt-6 font-display text-lg italic text-muted">
            — {site.hosts.join(" & ")}
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="pt-0!">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <Eyebrow>Frequently asked</Eyebrow>
            <H2 className="mt-3">Good things to know.</H2>
          </div>
          <dl className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-t border-black/10 pt-5">
                <dt className="font-display text-lg text-forest-deep">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/80">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <CTA />
    </>
  );
}
