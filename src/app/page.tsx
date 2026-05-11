import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { AccommodationCard } from "@/components/AccommodationCard";
import { AmenityList } from "@/components/AmenityList";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { site, whatsappLink } from "@/lib/site";
import { faqLd } from "@/lib/jsonld";

export default function HomePage() {
  const faqs = [
    {
      q: "Where is Kanaan Guest Farm?",
      a: `On the R40 in Hazyview, Mpumalanga, in South Africa's Lowveld. ${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport (KMIA) and ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Phabeni and Numbi gates of the Kruger National Park.`,
    },
    {
      q: "What does it cost?",
      a: `From R${site.pricing.fromZAR} per person sharing, per night (pps). That is well below the regional average — we kept the pricing honest because that is the kind of place we wanted to build.`,
    },
    {
      q: "Is breakfast included?",
      a: `No — breakfast is a set menu on request, at R${site.meals.breakfast.pricePerPersonZAR} per person for a continental spread. Tell us the day before and we'll have it ready. Dinner is also a set menu on request — local Lowveld dishes and braai. We do not have a halaal option.`,
    },
    {
      q: "What kinds of accommodation do you offer?",
      a: `Self-catering lodge units with en-suite bathrooms and kitchenettes; basic twin rooms with two single beds and an en-suite bathroom; an ${site.capacity.backpackersBeds}-bed backpackers hostel with shared facilities; and ${site.capacity.campsitePitches} shaded campsites under mango trees with power and water at every pitch.`,
    },
    {
      q: "Do you host weddings or large gatherings?",
      a: `Yes — Kanaan is a flexible wedding and events venue. Up to ${site.capacity.wedding.indoor}+ indoor, ${site.capacity.wedding.withMarquee}+ with a marquee, and ${site.capacity.wedding.withCamping}+ when we include the camping ground. We also host family reunions, school excursions, corporate retreats and team-building weekends.`,
    },
    {
      q: "How close is the Kruger National Park?",
      a: `Hazyview is one of the closest gateway towns to Kruger. Phabeni and Numbi gates are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes by road, so an early-morning game drive is easy from the farm.`,
    },
    {
      q: "What is included in a stay?",
      a: "Free WiFi across the property, the swimming pool, hiking and mountain biking trails on the farm, an entertainment area, and secure parking inside a fully fenced and gated property. Breakfast and dinner are available as set menus on request, at extra cost.",
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
            In August 2025, we bought{" "}
            <br className="hidden sm:block" />
            a guest farm near Kruger.
          </>
        }
        lede="This is what happened next. A working farm, slowly rebuilt — self-catering lodge rooms, basic twin rooms, an 8-bed backpackers and shaded camping under forty-year-old mango trees. Honest pricing, and the people who run it answering the phone."
        image={img.heroFarm}
        primaryCta={{ href: whatsappLink("home"), label: "Enquire on WhatsApp" }}
        secondaryCta={{ href: "/stay", label: "See where you sleep" }}
      />

      {/* Founder credit — brief Section 10, trust signal above the fold */}
      <div className="border-b border-black/5 bg-sand">
        <p className="mx-auto max-w-7xl px-5 py-3 text-center text-xs uppercase tracking-[0.18em] text-muted lg:px-8">
          Built by {site.hosts.join(" & ")} · Owners since {site.ownedSince}
        </p>
      </div>

      {/* Chapter 1 — The Discovery */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img.hosts.src}
              alt={img.hosts.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Chapter 1 · The Discovery</Eyebrow>
            <H2 className="mt-3">A tired old farm, and what nobody else saw.</H2>
            <div className="prose-kanaan mt-5">
              <p>
                We bought Kanaan in August 2025. From the road it looked like
                every other Lowveld farm that had drifted out of love. We
                walked it once and knew.
              </p>
              <p>
                Forty-year-old mango trees. Bushveld that stretched until it
                ran out of light. A river that ran cold in winter. And a
                position — {site.distances.kmiaMinutes} minutes from the
                airport — that no amount of renovation can buy you if you
                don&apos;t already have it.
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
            <H2 className="mt-3">Every review we read. Every thing we changed.</H2>
            <div className="prose-kanaan mt-5">
              <p>
                Before we touched a single wall, we read every review the
                property had ever received. Taps. Breakfast. The gate. The
                WiFi. The small things that decide whether a stay feels
                generous or grudging.
              </p>
              <p>
                We worked through them, one by one. We are still working
                through them. The farm we hand you today is not the farm we
                bought.
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
              {site.distances.kmiaMinutes} minutes from the airport. The
              geography does the heavy lifting.
            </H2>
            <Lede>
              Fly into KMIA. Be on the farm before lunch. Phabeni and Numbi gates
              are {site.distances.krugerGateMinutesMin}–{site.distances.krugerGateMinutesMax}{" "}
              minutes away — an early-morning self-drive is easy from here. The
              Panorama Route is a day. The Sabie River and its waterfalls a
              short drive.
            </Lede>
            <Link
              href="/the-land"
              className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-ochre hover:text-ochre-deep"
            >
              What 48 minutes from Kruger actually feels like{" "}
              <span aria-hidden>→</span>
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
              From R{site.pricing.fromZAR} per person sharing, per night.
            </H2>
            <p className="mt-4 max-w-2xl text-ink/80">
              Well below the regional average. Real beds. Real people
              answering the phone. Four honest ways to stay on one fenced,
              family-run farm — and a breakfast or dinner set menu on request
              when you want them.
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
            name="Self-catering lodge units"
            summary="Free-standing units with en-suite bathrooms and kitchenettes. Quiet rooms designed for rest after a day in the bush."
            image={img.lodgeRoom}
            meta="Lodge"
          />
          <AccommodationCard
            href="/stay#twin"
            name="Basic twin rooms"
            summary="Two single beds, en-suite bathroom, wall fan. Honest comfort for travellers who want a clean place to sleep and nothing they don't need."
            image={img.twinRoom}
            meta="Twin"
          />
          <AccommodationCard
            href="/stay#backpackers"
            name="Backpackers hostel"
            summary={`An ${site.capacity.backpackersBeds}-bed dorm with shared bathroom, communal kitchen and a laid-back lounge. Built for hikers, overlanders and slow travellers.`}
            image={img.backpackers}
            meta={`Hostel · ${site.capacity.backpackersBeds} beds`}
          />
          <AccommodationCard
            href="/stay#camping"
            name="Camping under mango trees"
            summary={`${site.capacity.campsitePitches} shaded pitches with running water and power. Suits tents, rooftop campers and overlanding vehicles.`}
            image={img.campingMango}
            meta={`${site.capacity.campsitePitches} pitches`}
          />
        </div>
      </Section>

      {/* Amenities glance */}
      <section className="bg-bone">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center lg:px-8">
          <div className="relative aspect-5/4 overflow-hidden rounded-2xl">
            <Image
              src={img.pool.src}
              alt={img.pool.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>What every stay includes</Eyebrow>
            <H2 className="mt-3">No fine print.</H2>
            <Lede>
              Breakfast. Free WiFi. A pool kept ready year-round. An
              entertainment area with pool table and foosball. Hiking and
              mountain biking trails on the farm. Laundry on request.
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
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <Eyebrow>Chapter 5 · The Celebration</Eyebrow>
            <H2 className="mt-3">A wedding weekend, in the Lowveld.</H2>
            <Lede>
              A celebration that begins on a Friday and ends on a Sunday.
              Guests sleeping on-site. The fire crackling late. Up to{" "}
              {site.capacity.wedding.withCamping}+ people across the lodge, the
              wedding lawn, the marquee and the camping ground.
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
            Spacious. Clean. Safe. Quiet. Warm hosts and bushveld views that
            go on forever — that last part is just geography.
          </p>
          <p className="mt-6 text-sm text-bone/70">
            Real guest reviews from Google and Booking.com will land here
            shortly.
          </p>
        </div>
      </section>

      {/* Chapter 6 — The Future */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Chapter 6 · The Future</Eyebrow>
          <H2 className="mt-3">We are not done.</H2>
          <div className="prose-kanaan mx-auto mt-6">
            <p>
              The vegetable garden goes in this season. The communal fire pit
              is being rebuilt before winter. The wedding lawn is being
              levelled. If you stayed with us last year, you will notice a few
              things. If you come back next year, you will notice more.
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
