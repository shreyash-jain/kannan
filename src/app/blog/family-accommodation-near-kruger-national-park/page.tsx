import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { img } from "@/lib/images";
import { articleLd, faqLd } from "@/lib/jsonld";
import { createBlogPostMetadata } from "@/lib/blog";
import { site } from "@/lib/site";
import {
  TLDR,
  Callout,
  StatGrid,
  NumberedList,
  ClosingBlock,
  WhatsAppCTA,
  BlogHero,
  Sources,
} from "@/components/blog/Blocks";

// ---------------------------------------------------------------------
// SEO focus for this cornerstone (search-optimised Guide):
//   • Focus keyword (1):  family accommodation near Kruger National Park
//   • Secondary:          family-friendly Kruger accommodation ·
//                         Kruger National Park with kids · family safari
//                         Hazyview · kid-friendly guest farm Kruger ·
//                         self-catering family accommodation Hazyview
//   • Long-tail:          best family accommodation near Kruger National Park ·
//                         is Kruger National Park good for kids ·
//                         family-friendly places to stay in Hazyview ·
//                         Kanaan Guest Farm family rooms ·
//                         planning a family safari to Kruger ·
//                         farm stay for kids near Kruger
// Woven into the H1, section headings, intro, FAQ and meta — never stuffed.
// Anneli's warm first-person voice comes first; search second.
//
// Sibling post: /blog/things-to-do-with-kids-hazyview-kruger answers "what do
// we DO with the children". This one answers "where do we SLEEP with them" —
// the accommodation and trip-shape question. They cross-link, not overlap.
//
// Link budget (deliberate, per brief): 5 contextual INTERNAL links —
//   /stay · /blog/things-to-do-with-kids-hazyview-kruger ·
//   /blog/kruger-from-hazyview · /blog/panorama-route-from-hazyview ·
//   /blog/cost-of-a-kruger-lowveld-week-2026
// and 5 contextual EXTERNAL links (5 distinct authority domains) —
//   sanparks.org · krugerpark.co.za · nicd.ac.za · education.gov.za ·
//   kmiairport.co.za — each repeated in the Sources block at the foot.
//
// HARD CONTENT RULE (owner correction, Anneli): Hazyview is NOT a malaria
// area. The health FAQ below scopes the note to Kruger only and never frames
// malaria as a farm or Hazyview risk.
// ---------------------------------------------------------------------

const datePublished = "2026-07-27";
const headline =
  "Family safari holidays near Kruger National Park: why a guest farm works better than a hotel room";

const faqs = [
  {
    q: "Is Kruger National Park good for kids?",
    a: "One of the easiest big safari destinations in Africa to do with children, because you self-drive it: you set the pace and turn back the moment the mood breaks. There is no minimum age, though from about four or five children enjoy the animals rather than just endure the car. The caveat is patience — go early and keep the drives short.",
  },
  {
    q: "What is the best family accommodation near Kruger National Park?",
    a: `The one that lets you do a dawn drive and still have somewhere for the children to run at four in the afternoon — in practice, just outside the southern gates rather than inside the park, with space and a kitchen. We are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Phabeni and Numbi gates, with self-catering family units, open lawns and a pool.`,
  },
  {
    q: "Do you have self-catering family accommodation in Hazyview?",
    a: "We do. Most lodge units have a kitchenette — kettle, two-plate hob, fridge, plates and mugs — plus a private en-suite. For a family that is the most useful thing in the room: a 4:45am coffee before a dawn drive, milk for a toddler, and a supper the fussy eater will actually eat. We also have larger multi-bed layouts, and units close enough together that children are next door rather than down a corridor.",
  },
  {
    q: "Do we need to worry about malaria on a Kruger family trip?",
    a: "Not here — Hazyview is not a malaria area, and neither is the farm, so nothing about your base needs planning around it. Kruger itself sits in a low-risk, seasonal zone. Because guidance for young children differs from the guidance for adults and does change, ask your GP or a travel clinic before you fly and check the current position with the NICD.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "family-accommodation-near-kruger-national-park",
  title:
    "Family accommodation near Kruger National Park: a farm stay that works with kids",
  description:
    "Planning a family safari near Kruger National Park? An honest guide to whether Kruger is good for kids, why a farm stay beats a hotel room, and the self-catering family accommodation at Kanaan Guest Farm in Hazyview — 30–45 minutes from the gates, from R250 per person sharing.",
  image: img.familySafariHero,
  datePublished,
  category: "guide",
});

export default function FamilyAccommodationNearKrugerPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical guide to family safari holidays near Kruger National Park, written by the family who run Kanaan Guest Farm outside Hazyview. Whether Kruger is genuinely good for children, why a farm stay beats a hotel room, the self-catering family accommodation and open space at Kanaan, how to pace a family safari week, combining Kruger with the easy Panorama Route stops, and honest answers on ages, safety, health and cost. From R250 per person sharing, 30 to 45 minutes from the Kruger gates.",
          path: "/blog/family-accommodation-near-kruger-national-park",
          image: img.familySafariHero.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal & Guides", href: "/blog" },
          {
            label: "Family accommodation near Kruger",
            href: "/blog/family-accommodation-near-kruger-national-park",
          },
        ]}
      />

      <article>
        <BlogHero
          image={img.familySafariHero.src}
          alt={img.familySafariHero.alt}
          eyebrow="Guide · Family safari"
          title="Family accommodation near Kruger National Park — and why a farm works better than a hotel room."
          intro="Planning a safari with children asks a different set of questions. How long can they really sit in a car, is the accommodation actually set up for a family, and what happens on the day nobody wants to see another impala? Here is the honest version."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={7}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "Kruger is one of the easiest big safari destinations to do with children — because you self-drive it and set your own pace.",
                `We are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Phabeni and Numbi gates, so an early morning does not mean a brutal one.`,
                "A farm gives you what a hotel room cannot: open ground for children to burn off a morning in the car, and a kitchen so mealtimes bend around them.",
                `From R${site.pricing.fromZAR} per person sharing per night, with children's gate fees at roughly half the adult rate.`,
              ]}
            />

            <p>
              Almost every family message we get carries the same worries
              underneath it. How long can a six-year-old really sit still in a
              game-viewing car. Is the{" "}
              <strong>
                family accommodation near Kruger National Park
              </strong>{" "}
              actually set up for children, or does it just say so. And what is
              there to do on the days you are not in the park? Nobody answers
              that honestly in a listing, so here is the version we would give a
              friend.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Is Kruger National Park good for kids?</H2>
            <p>
              Yes, for one specific reason: you drive it yourself. You set the
              pace, you stop when someone needs the loo, and you take the short
              loop when the mood in the back seat turns — none of which a fixed
              guided drive lets you do. Rest camps and picnic sites are used to
              young visitors, the roads suit an ordinary hire car, and the
              smaller species around the camps hold a child&rsquo;s attention
              better than a lion asleep two hundred metres away. Gate times
              shift with the season, so check the current ones on{" "}
              <a
                href="https://www.sanparks.org/parks/kruger"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                SANParks&rsquo; official Kruger pages
              </a>{" "}
              before planning a dawn start.
            </p>
            <p>
              The honest caveat: Kruger rewards patience, and patience is not a
              renewable resource at four years old. Manage that and the park is
              a gift; ignore it and you will spend a lot of money on a hot car.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`,
                label: "Farm gate to park gate",
                body: "Phabeni and Numbi, the two southern gates onto the best-stocked corner of the park. Close enough that an early start is a normal morning, not a 3am ordeal.",
              },
              {
                value: "2–3 hrs",
                label: "The right first drive",
                body: "Through the gate at opening, one short loop, a picnic site for breakfast, home by late morning. Build up from there.",
              },
              {
                value: `From R${site.pricing.fromZAR}`,
                label: "Per person sharing",
                body: "Per night, with a kitchenette in most units — what keeps a family week affordable once you add gate fees, fuel and four sets of meals.",
              },
            ]}
          />
        </Section>

        {/* Inline image — the sighting the whole trip is planned around */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.kidsSafariBinoculars.src}
                alt={img.kidsSafariBinoculars.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Give a child a pair of binoculars and a checklist and the quiet
              stretches between sightings stop being dead time. This is most of
              the trick.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Why a farm stay beats a hotel room for a family.
            </H2>
            <p>
              A hotel room is fine for one night. For a family safari week it
              quietly works against you, because it gives children nowhere to
              be: you come back from three hours of sitting still in a car and
              hand them a room with two beds and a bathroom. A farm solves that
              without anyone organising anything. Children walk out of the door
              and are somewhere — lawns, trails, groves, animals, a pool at the
              end of a hot afternoon. The accommodation stops being where you
              sleep between excursions and becomes half the holiday.
            </p>
          </div>
          <Callout eyebrow="The whole argument, in one line">
            With children, the best base is not the smartest one. It is the one
            close enough for a dawn drive and open enough that they can run when
            you get back.
          </Callout>
        </Section>

        {/* Inline images — a real family room and its real kitchenette */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.lodgeFamilyTwin.src}
                  alt={img.lodgeFamilyTwin.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                One of the larger family layouts — two singles, a fan, a beamed
                ceiling and room to put a case down without climbing over it.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.lodgeKitchen.src}
                  alt={img.lodgeKitchen.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                And the kitchenette that does the real work on a family week —
                the 4:45am kettle, the toddler&rsquo;s milk, the supper nobody
                has to argue about.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Family-friendly accommodation at Kanaan Guest Farm.
            </H2>
            <p>
              The part families mention afterwards is the one thing we could
              never have built: the space. Here is what we would put a family
              in. Photographs and current rates live on our{" "}
              <Link
                href="/stay"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                stay page
              </Link>
              .
            </p>
          </div>
          <NumberedList
            items={[
              {
                title: "Self-catering family units",
                body: "A kitchenette — kettle, two-plate hob, fridge, plates and mugs — plus an en-suite, a fan and free WiFi. The kitchen is what makes mealtimes bend around nap schedules and 5am starts instead of fighting them.",
              },
              {
                title: "Multi-bed and adjoining layouts",
                body: "Larger units that put everyone in one room, and units close enough together that children are next door rather than down a corridor. Message us the ages and we will match you properly.",
              },
              {
                title: "Open space, the pool, and the braai after it",
                body: "Lawns, trails, the groves and a waterfall on our own land — plus the pool, with a play structure beside it. Braai facilities mean supper happens outside while the children are still running around.",
              },
              {
                title: "Camping under the mango grove",
                body: `${site.capacity.campsitePitches} shaded pitches with power and water at each, and hot showers in a timber ablution block. Children take to a tent under forty-year-old mango trees faster than to any room — and it is the cheapest bed near the gate.`,
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              Two honest notes: we are not set up for pets; and breakfast and
              dinner can be put on for you on request, though they are set menus
              rather than an à la carte kitchen.
            </p>
          </div>
        </Section>

        {/* Inline images — the two places children actually end up */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.poolSecond.src}
                  alt={img.poolSecond.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The pool, and the play structure beyond it — where every hot
                Kruger afternoon on this farm ends up.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.campingMango.src}
                  alt={img.campingMango.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                And the camping ground under the mango grove, for the families
                who would rather be in a tent. Most children would.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Planning a family safari to Kruger: the tips that actually help.
            </H2>
            <p>
              None of this is complicated — it is simply what we find ourselves
              saying to families over coffee before their first morning. If you
              want the gates and the loops in detail, our{" "}
              <Link
                href="/blog/kruger-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                first-timer&rsquo;s guide to Kruger from Hazyview
              </Link>{" "}
              covers which gate to use and what each drive really takes.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Go early, and go short",
                body: "The first two hours after the gate opens are the best game viewing of the day and the coolest part of it. Do a two-hour loop with young children and save the long drives for the older ones.",
              },
              {
                title: "Build in a picnic site",
                body: "You may not leave the car except at designated picnic sites and rest camps, so put one in every drive. Half an hour of running around at the halfway point resets the whole morning.",
              },
              {
                title: "Pack for the quiet stretches",
                body: "Snacks, more water than you think, a laminated animal checklist and cheap binoculars each. Children hunting for something on a list are engaged; children waiting for a lion are bored. Lowveld sun does the real damage, so hats and high-factor sunscreen too.",
              },
              {
                title: "Give it five nights, and alternate the pace",
                body: "Five is the sweet spot, four the minimum worth flying for: two Kruger mornings, a Panorama day, a rest day on the farm and a day of slack. Squeeze it into three and every day becomes a drive.",
              },
            ]}
          />
        </Section>

        {/* Inline images — the kit for the quiet stretches, and the leg-stretch */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.kidsCarSafariKit.src}
                  alt={img.kidsCarSafariKit.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The unglamorous kit that makes three hours in a car work —
                checklist, binoculars, rusks, and something to hold onto.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.krugerPicnicSiteFamily.src}
                  alt={img.krugerPicnicSiteFamily.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                And a designated picnic site — one of the few places you may get
                out of the car, and the halfway point that saves a morning.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Combining Kruger with the Panorama Route.
            </H2>
            <p>
              Not every day needs to be a game drive, and the week is better
              when it is not. Forty minutes up the road the escarpment starts,
              and the Panorama Route is full of stops five minutes from a car
              park — God&rsquo;s Window, Bourke&rsquo;s Luck Potholes, the
              Graskop gorge lift, waterfalls with short forest walks in. Big
              scenery, little effort, everybody out of the car. That is the real
              reason Hazyview works as a family base: you sit between the two,
              so you never move accommodation mid-week. Our{" "}
              <Link
                href="/blog/panorama-route-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Panorama Route guide
              </Link>{" "}
              lays out both the half-day and the full-day loop — with children,
              take the half-day and stop for lunch. And for the closer stuff —
              zip-lines, sanctuaries, rafting, the reptile park — our{" "}
              <Link
                href="/blog/things-to-do-with-kids-hazyview-kruger"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                things-to-do-with-kids guide
              </Link>{" "}
              is the full menu.
            </p>
          </div>
        </Section>

        {/* Inline images — the two easy off-park days */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.panoramaFamilyViewpoint.src}
                  alt={img.panoramaFamilyViewpoint.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                Five minutes from the car park, and a view a child will
                genuinely remember. This is what an easy day looks like.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.sabieWaterfallFamilyWalk.src}
                  alt={img.sabieWaterfallFamilyWalk.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                And a ten-minute walk in to a waterfall near Sabie — cool,
                green and completely different from a morning in the bushveld.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Getting here, health and the practical bits.
            </H2>
            <p>
              Plenty of families fly.{" "}
              <a
                href="https://www.kmiairport.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Kruger Mpumalanga International Airport (KMIA)
              </a>{" "}
              is {site.distances.kmiaMinutes} minutes from our gate with daily
              flights from Johannesburg and Cape Town — a small, calm airport to
              land at with tired children. Hire a car there, and bring your own
              car seats if you can; hire-car ones are not guaranteed.
            </p>
            <p>
              On health, the short answer for your base is: nothing to plan
              around. Hazyview is not a malaria area and neither is the farm.
              Kruger itself sits in a low-risk, seasonal zone, and because the
              advice for young children differs from the advice for adults,
              speak to your GP or a travel clinic before you fly and check the
              current position with{" "}
              <a
                href="https://www.nicd.ac.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                the NICD
              </a>{" "}
              rather than a forum post from years ago.
            </p>
            <p>
              On timing, the dry winter is easiest with children — but South
              African school holidays fall inside it and the gates get busy. If
              you are not tied to a school calendar, check the{" "}
              <a
                href="https://www.education.gov.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Department of Basic Education&rsquo;s school calendar
              </a>{" "}
              and aim for the shoulder weeks either side. Quieter, cheaper, and
              the animals have not read the calendar.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What a family week actually costs.</H2>
            <p>
              The bed is one line of it; gate fees, fuel, activities and four
              people&rsquo;s meals are the rest. Children&rsquo;s conservation
              fees at the Kruger gate run at roughly half the adult rate — worth
              checking against{" "}
              <a
                href="https://www.krugerpark.co.za/Kruger_Park_Travel_Advisory-travel/conservation-fees.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                the current published conservation fees
              </a>
              , because they are reviewed annually — and a kitchenette turns
              three restaurant meals a day into one.
            </p>
          </div>
          <Callout eyebrow="Every real number, in one place">
            The whole 2026 arithmetic — gate fees by tier, the Wild Card
            break-even, flights, fuel and three worked weekly budgets — is in
            the{" "}
            <Link
              href="/blog/cost-of-a-kruger-lowveld-week-2026"
              className="text-ochre hover:text-ochre-deep"
            >
              cost-of-a-Lowveld-week guide
            </Link>
            .
          </Callout>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Questions families ask us before they book.
            </H2>
            <div className="not-prose mt-8 divide-y divide-black/10 border-t border-black/10">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <h3 className="font-display text-lg text-forest-deep md:text-xl">
                    {f.q}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/85">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Inline image — where a family day is supposed to end */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.poolSunset.src}
                alt={img.poolSunset.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Six o&rsquo;clock on the farm after a Kruger morning — everyone
              still damp, supper on the braai, nobody in a car. This is the part
              families remember.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="In closing — a base that works for both halves of the family"
              thesis="A family safari is not made or broken by the animals. It is made by whether the children still have somewhere to be at four in the afternoon, and whether the adults still have the energy to go again tomorrow."
              body={
                <>
                  That is the whole case for staying out here rather than in a
                  room in town — the dawn drive within reach, and open ground to
                  come back to, from R{site.pricing.fromZAR} per person sharing.
                  <br />
                  <br />
                  Send us your dates, the ages of the children and how many of
                  you there are, and Anneli or Matthew will reply personally
                  with which unit we would put you in and how we would shape the
                  week. No forms, no auto-responses — just a straight answer
                  from the people who will meet you at the gate.
                </>
              }
            />
            <p className="font-display text-base italic text-forest-deep">
              — Anneli &amp; Matthew
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <Sources
              items={[
                {
                  label:
                    "SANParks — Kruger National Park: gates, opening times and rest camps",
                  href: "https://www.sanparks.org/parks/kruger",
                },
                {
                  label:
                    "Kruger Park — conservation (gate) fees, including children's rates",
                  href: "https://www.krugerpark.co.za/Kruger_Park_Travel_Advisory-travel/conservation-fees.html",
                },
                {
                  label:
                    "NICD — current South African malaria risk areas and guidance (Kruger, not Hazyview)",
                  href: "https://www.nicd.ac.za/",
                },
                {
                  label:
                    "Department of Basic Education — South African school calendar and holiday dates",
                  href: "https://www.education.gov.za/",
                },
                {
                  label:
                    "Kruger Mpumalanga International Airport (KMIA) — flights & car hire",
                  href: "https://www.kmiairport.co.za/",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Tell us the ages, and we'll pick your room."
          body={`Send Anneli or Matthew your dates, how many of you there are and how old the children are — we'll tell you which family unit suits you and how we'd pace the Kruger mornings around them. From R${site.pricing.fromZAR} per person sharing.`}
          buttonLabel="Check family availability on WhatsApp"
          pageKey="stay"
        />

        {/* Related */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/things-to-do-with-kids-hazyview-kruger"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Family &amp; Kids
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Hazyview &amp; Kruger with kids
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  The full menu of things to actually do — zip-lines, a glass
                  lift into a rainforest, sanctuaries — and how to pace a family
                  week around them.
                </p>
              </Link>
              <Link
                href="/blog/when-to-visit-kruger-hazyview-month-by-month"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Seasonal almanac
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  When to visit Kruger &amp; Hazyview
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  All twelve months, honestly — and how to find the quieter
                  shoulder weeks either side of the school holidays.
                </p>
              </Link>
            </div>
          </div>
        </Section>

        <CTA />
      </article>
    </>
  );
}
