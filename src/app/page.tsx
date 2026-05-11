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
      a: `We're on the R40 in Hazyview, Mpumalanga, in South Africa's Lowveld — about ${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport (KMIA), and ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Phabeni and Numbi gates of the Kruger National Park.`,
    },
    {
      q: "What does a stay cost?",
      a: `From R${site.pricing.fromZAR} per person sharing, per night — well below what most places around here ask. We didn't price it low to undercut anyone; it's just what we think a fair stay should cost.`,
    },
    {
      q: "Is breakfast included?",
      a: `It isn't bundled in — we keep the room rate clean. If you'd like breakfast, it's a R${site.meals.breakfast.pricePerPersonZAR} continental set menu when you order it the day before. Dinner is also on order: local Lowveld dishes and a proper braai. We don't have a halaal option.`,
    },
    {
      q: "What kinds of rooms do you have?",
      a: `Four, really. Self-catering lodge units with their own bathrooms and a small kitchen; basic twin rooms with two single beds and an en-suite; an ${site.capacity.backpackersBeds}-bed backpackers with shared facilities; and ${site.capacity.campsitePitches} shaded camping pitches with water and power at every one.`,
    },
    {
      q: "Do you host weddings or large gatherings?",
      a: `Yes. The farm works as a flexible wedding and events venue — up to ${site.capacity.wedding.indoor}+ indoors, ${site.capacity.wedding.withMarquee}+ with a marquee, or ${site.capacity.wedding.withCamping}+ if we open the camping ground too. We also do family reunions, school groups, corporate retreats and team-building weekends.`,
    },
    {
      q: "How close is the Kruger National Park?",
      a: `Hazyview is one of the closest towns to Kruger. The Phabeni and Numbi gates are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes by road, so an early-morning game drive is easy to do without having to leave the farm at four in the morning.`,
    },
    {
      q: "What's included in a stay?",
      a: "Free WiFi across the property, the swimming pool, hiking and mountain biking trails on the farm, the entertainment area, and secure parking inside a fenced, gated property. Breakfast and dinner are set menus you can order on the side.",
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
        lede="This is what happened next. A working farm, slowly being put back together — lodge rooms, basic twin rooms, an 8-bed backpackers and shaded camping under mango trees that are older than we are. Prices that feel fair. When you call, one of us picks up."
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
            <H2 className="mt-3">A tired old farm, and what nobody else was looking at.</H2>
            <div className="prose-kanaan mt-5">
              <p>
                We bought Kanaan in August 2025. From the road it didn&apos;t
                look like much — the kind of place travellers tend to drive
                past without slowing down. But we got out, and we walked it.
              </p>
              <p>
                The mango trees had been there forty years. The bushveld
                stretched on until the light gave out. A cold river runs
                through it even in summer. And the airport is{" "}
                {site.distances.kmiaMinutes} minutes away — a thing no amount
                of renovation can give you if you don&apos;t already have it.
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
            <H2 className="mt-3">We read every review, then started fixing.</H2>
            <div className="prose-kanaan mt-5">
              <p>
                Before we picked up a paintbrush, we sat down and read every
                review the place had ever received. The complaints were never
                about the views or the price — they were about small things.
                A tap that wasn&apos;t quite right. Breakfast that needed
                lifting. A gate that stuck. WiFi that came and went.
              </p>
              <p>
                But small is what decides whether a stay feels generous or
                grudging. So we&apos;ve been working through them, one at a
                time, and we&apos;re still going. The Kanaan you walk into
                today isn&apos;t the one we bought.
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
              {site.distances.kmiaMinutes} minutes from the airport — the
              geography does most of the work.
            </H2>
            <Lede>
              Land at KMIA in the morning and you can be on our veranda by
              lunch. The Phabeni and Numbi gates of Kruger are{" "}
              {site.distances.krugerGateMinutesMin}–{site.distances.krugerGateMinutesMax}{" "}
              minutes away, depending on which suits your route — close enough
              for an easy early-morning drive without leaving here at four.
              The Panorama Route is a day. The Sabie River and its waterfalls
              are a short drive in the other direction.
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
              That&apos;s well below what most places around here charge.
              Comfortable beds, hot showers, a real person on the other end of
              the phone. Four ways to stay — pick whichever fits your trip —
              and if you&apos;d like breakfast or dinner sorted while
              you&apos;re here, we&apos;ll put on a set menu. Just tell us the
              day before.
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
              Free WiFi across the property, a pool that&apos;s kept ready all
              year, an entertainment area with a pool table and foosball, and
              walking and mountain biking trails that start at the gate. We do
              laundry too — just ask.
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
              The best weddings we&apos;ve seen here are the ones that
              don&apos;t end on Saturday. Friday night the families arrive and
              find each other around a fire. Saturday is the day. Sunday
              nobody is in a hurry. We can hold up to{" "}
              {site.capacity.wedding.withCamping}+ people across the lodge,
              the wedding lawn, the marquee and the camping ground.
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
            What we&apos;re aiming for
          </p>
          <p className="mt-6 font-display text-2xl leading-relaxed sm:text-3xl">
            Spacious, clean, safe and quiet. Warm hosts. And views that go on
            forever — though that last part we can&apos;t take credit for.
            That&apos;s just the geography of the place.
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
          <H2 className="mt-3">We&apos;re not finished.</H2>
          <div className="prose-kanaan mx-auto mt-6">
            <p>
              The vegetable garden goes in this season. The fire pit is being
              rebuilt before winter. We&apos;re levelling the wedding lawn. If
              you stayed with us last year, you&apos;ll already see some
              things have changed. Come back next year and you&apos;ll see
              more.
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
