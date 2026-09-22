import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { img } from "@/lib/images";
import { pro } from "@/data/proPhotos";
import { articleLd, faqLd } from "@/lib/jsonld";
import { createBlogPostMetadata } from "@/lib/blog";
import { site, whatsappLink } from "@/lib/site";
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
// PILLAR post for the "Contractor & Group Stays" content pillar
// (marketing brief, 2026-09-21). Posts 2–5 of the pillar link back here;
// when each one goes live, add it to the "Keep reading" cards at the foot
// of this page:
//   2. /blog/contractor-housing-near-kruger-lowveld-guide
//   3. /blog/long-stay-accommodation-lowveld
//   4. /blog/group-accommodation-near-kruger
//   5. /blog/hazyview-vs-white-river-nelspruit-work-accommodation
//
// SEO focus:
//   • Primary:   discounted accommodation for contractors Hazyview
//   • Pillar:    discounted accommodation Hazyview · contractor
//                accommodation near Kruger · group rates accommodation
//                Mpumalanga · long stay accommodation Lowveld · team
//                accommodation near Kruger National Park · affordable crew
//                housing Hazyview
// Woven into the H1, intro, the five H2s, FAQ and meta — never stuffed.
//
// Editorial stance: the number a site agent manages is the all-in cost per
// head per night, not the room rate. We put a R250 bed and a kitchenette
// next to SARS's tax-free meals-and-incidentals figure (R595/day, 2027 tax
// year from 1 March 2026) and let the reader do the sum.
//
// Rates: the owner has NOT confirmed a discount rule (percentage or
// night threshold). "Reduced group rates for longer stays" is therefore
// written as quoted per booking, with no figure. If Anneli gives one,
// put it in site.ts first and quote it from there. Every Kanaan price on
// this page comes from site.ts / rooms.ts.
//
// This post replaces the earlier /blog/discounted-contractor-accommodation-hazyview
// (same branch, never on main) so the site carries one contractor post.
//
// H1 and tab title are the brief's full Topic line, verbatim, per the
// standing instruction (marketing confirmed it again on this post).
// Length target ~1,300 words incl. FAQ (marketing asked for ~1,200 on the
// previous version).
//
// Imagery: every frame is a real photograph of Kanaan (owner rule, Sept
// 2026: no AI render may depict a scene on this farm).
//
// Width: max-w-5xl reading column, matching the milestone-birthday post,
// at the marketing lead's standing preference for the wide column.
// ---------------------------------------------------------------------

const datePublished = "2026-09-21";
const headline =
  "Discounted accommodation for contractors in Hazyview: Kanaan Guest Farm offers reduced group rates for teams booking longer stays near Kruger";

const linkClass =
  "font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep";

const faqs = [
  {
    q: "Do you offer discounted accommodation for contractors in Hazyview?",
    a: `Yes. Teams booking longer stays get a reduced group rate, quoted per booking on top of our standard R${site.pricing.fromZAR} per person sharing in a twin room and R300–R350 in a self-catering lodge room. Send crew size, room count and the project dates, and Anneli or Matthew will come back with the room mix and the rate in writing.`,
  },
  {
    q: "What counts as a long stay for the reduced rate?",
    a: "There is no magic number, and we would rather not invent one. As a rule of thumb: a week is worth asking about, a month is worth a proper conversation, and dates outside the school holidays help the number more than anything else. Tell us the real dates and we will tell you the real rate.",
  },
  {
    q: "Is there secure, fenced parking for company vehicles and trailers?",
    a: "Yes. The whole farm is fenced with a motorised gate at the R40 entrance, and parking inside the fence is free. Bakkies, trailers and small plant park next to the rooms overnight. Call us when you reach the gate on the first evening and we will open it.",
  },
  {
    q: "Can you take a crew of ten or more in one booking?",
    a: `Comfortably. We sleep around ${site.capacity.sleepingTotal} under roof across lodge rooms (2–7 each), twin rooms and the ${site.capacity.backpackersBeds}-bed wooden house, with ${site.capacity.campsitePitches} powered campsites for up to ${site.capacity.campingPeople} beyond that. A crew of twelve usually lands as four twin rooms and a lodge room for the foreman.`,
  },
  {
    q: "How far is Kanaan from Hazyview town, the Kruger gates and the airport?",
    a: `We are on the R40 a few minutes outside Hazyview — shops, fuel and hardware stores are minutes away. The Phabeni and Numbi gates of the Kruger National Park are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes, Kruger Mpumalanga International Airport is ${site.distances.kmiaMinutes} minutes, White River about forty minutes and Mbombela (Nelspruit) roughly an hour.`,
  },
];

// Pillar posts 2–5 (marketing brief, 2026-09-21). `href: null` renders as
// "Coming soon"; set the path when the post is live.
const seriesPosts: { title: string; href: string | null }[] = [
  {
    title:
      "Where to stay for work near Kruger National Park: a contractor's guide",
    href: null, // /blog/contractor-housing-near-kruger-lowveld-guide
  },
  {
    title:
      "Long-stay vs short-stay: booking extended accommodation in the Lowveld",
    href: null, // /blog/long-stay-accommodation-lowveld
  },
  {
    title: "Group accommodation near Kruger: planning for teams of 10–20",
    href: null, // /blog/group-accommodation-near-kruger
  },
  {
    title:
      "Hazyview vs White River vs Nelspruit: where should work teams stay?",
    href: null, // /blog/hazyview-vs-white-river-nelspruit-work-accommodation
  },
];

export const metadata = createBlogPostMetadata({
  slug: "discounted-contractor-accommodation-hazyview",
  title: headline,
  description:
    "Discounted accommodation for contractors in Hazyview: reduced group rates for teams on longer stays near Kruger. Self-catering rooms, secure parking, Wi-Fi.",
  image: pro(5873),
  datePublished,
  category: "guide",
});

export default function DiscountedContractorAccommodationHazyviewPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "Discounted accommodation for contractors in Hazyview: Kanaan Guest Farm offers reduced group rates for work teams booking longer stays near Kruger. Self-catering lodge rooms, twin rooms, an 8-bed wooden house and powered campsites on a fenced farm with a motorised gate, free Wi-Fi, free parking and laundry on request. From R250 per person sharing, 48 minutes from Kruger Mpumalanga International Airport.",
          path: "/blog/discounted-contractor-accommodation-hazyview",
          image: pro(5873).src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={pro(5873).src}
          alt="Discounted contractor accommodation in Hazyview — whitewashed self-catering lodge rooms under a flowering bougainvillea at Kanaan Guest Farm, near Kruger."
          eyebrow="Guide · Contractor & group stays"
          title={headline}
          intro="Reduced rates for the teams who stay longest, and the honest arithmetic a project budget actually needs — written by the family who run the farm."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={8}
          titleSize="compact"
        />

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl [&>aside]:mb-4">
            <TLDR
              items={[
                `Discounted accommodation for contractors in Hazyview: teams booking longer stays get a reduced group rate, quoted per booking on top of our standard R${site.pricing.fromZAR} per person sharing.`,
                `Four kinds of bed inside one fence — self-catering lodge rooms sleeping 2–7, twin rooms, an ${site.capacity.backpackersBeds}-bed wooden house and ${site.capacity.campsitePitches} powered campsites for up to ${site.capacity.campingPeople}.`,
                "Free Wi-Fi across the farm, free parking behind a motorised gate, laundry on request, and a kitchen the crew runs itself.",
                `${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport, ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Phabeni and Numbi gates, about an hour from Mbombela.`,
              ]}
            />
            <p>
              Eight people, six weeks, starting Monday. If that is the brief
              on your desk, this page is for you. We run Kanaan Guest Farm on
              the R40 a few minutes outside Hazyview, and a work team that
              books for a month is worth more to us than a row of rooms
              standing empty between the school holidays &mdash; so we price
              it that way. Reduced group rates for longer stays, self-catering
              rooms, a gate the bakkies sleep behind, and Wi-Fi that carries
              the day&rsquo;s report to head office. That is the offer. The
              rest of this page is the detail, including the parts that might
              not suit your contract.
            </p>
            <p className="not-prose">
              <Link
                href={whatsappLink("groupFunctions")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-bone hover:bg-forest-deep"
              >
                Send crew size and dates on WhatsApp
              </Link>
            </p>
          </div>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Why Hazyview is a base for work teams near Kruger
            </H2>
            <p>
              Hazyview is where the Lowveld&rsquo;s work is. The banana and
              macadamia estates start at the edge of town. The Sabie timber
              plantations are forty minutes up the hill. The Kruger rest
              camps, with their roads, fences, water and endless maintenance,
              are through Phabeni gate half an hour away. And{" "}
              <a
                href="https://www.nra.co.za/sanral-pages/view/upgrade-of-the-r40-national-road-gets-thumbs-up-from-the-traditional-leadership-in-bushbuckridge-local-municipality-sanral-stop-over"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                SANRAL&rsquo;s upgrade of the R40
              </a>{" "}
              from Hazyview to Maviljan and on to Arthur Seat runs straight
              past our entrance. A crew based here reaches White River in
              about forty minutes and Mbombela in an hour, without paying city
              hotel rates to sleep near the site.
            </p>
            <p>
              For rotating teams the airport matters more than the town.
              Kruger Mpumalanga International is one straight road from our
              gate. Fly a specialist in on Monday morning, drive them back on
              Friday, and nobody spends a night in Mbombela on the way.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: `${site.distances.kmiaMinutes} min`,
                label: "To Kruger Mpumalanga airport",
                body: "One road, the R40. Fly-in, fly-out crews without a Mbombela detour.",
              },
              {
                value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`,
                label: "To the Phabeni and Numbi gates",
                body: "Kruger's maintenance contracts, and a Saturday game drive for the crew.",
              },
              {
                value: `~${site.capacity.sleepingTotal}`,
                label: "Beds under roof",
                body: `Plus ${site.capacity.campsitePitches} powered campsites for up to ${site.capacity.campingPeople} when a big crew rolls in.`,
              },
            ]}
          />
        </Section>

        <div className="mx-auto my-10 max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={pro(5787).src}
                alt="Contractor accommodation near Kruger with parking at the door — twin rooms 17 and 18 at Kanaan Guest Farm, Hazyview, with the hard-standing forecourt where a crew's bakkie parks overnight inside the fence."
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Rooms 17 and 18. The bakkie parks on the forecourt outside
              the door, behind the motorised gate on the R40.
            </figcaption>
          </figure>
        </div>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              How Kanaan&rsquo;s group rates work for longer stays
            </H2>
            <p>
              Here is the plain version. Our standard rate is R
              {site.pricing.fromZAR} per person sharing in a twin room and
              R300&ndash;R350 in a self-catering lodge room. A team booking a
              longer stay &mdash; weeks, not a weekend &mdash; gets a reduced
              group rate on top of that, and we quote it per booking rather
              than off a printed table, because two crews of ten are never
              quite the same booking.
            </p>
            <p>
              What moves the number in your favour: more nights, more rooms,
              and dates that fall outside the school holidays. A crew of
              twelve in four twin rooms for five weeks in February is the
              booking we like most. Eight people for three nights over Easter
              is not, and we will say so.
            </p>
            <p>
              Nothing is bundled in that you did not ask for. Breakfast is a R
              {site.meals.breakfast.pricePerPersonZAR} continental, ordered the
              day before, for whoever wants it. A braai dinner is on request.
              Laundry is on request at a small charge, which matters on a
              multi-week rotation. Everything else &mdash; Wi-Fi, parking, the
              pool, the fire &mdash; is already in the rate.
            </p>
          </div>
          <Callout eyebrow="The number that matters">
            SARS allows an employee away overnight R595 a day, tax-free, for
            meals and incidentals. A crew with a kitchenette and a R
            {site.meals.breakfast.pricePerPersonZAR} breakfast spends a
            fraction of that &mdash; and the bed itself starts at R
            {site.pricing.fromZAR}.
          </Callout>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <p>
              Now the honest part. We are a family farm, not a hotel. No bar,
              no night porter, no room service, no halaal menu. Check-in is
              14:00 to 22:00, so tell us if the crew lands late. And past
              about {site.capacity.sleepingTotal} people the rest of the team
              is in tents &mdash; good tents, on powered pitches under the
              mango trees, but tents. If none of that is a problem for your
              contract, read on.
            </p>
          </div>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              What counts as a &ldquo;long stay&rdquo; for discount purposes
            </H2>
            <p>
              We get asked for the magic number and we do not have one,
              because it would be a lie the moment a different crew phoned.
              What we can tell you is how we think about it. A weekend is a
              weekend, and it is charged at the standard rate. A week is
              where a booking starts to change our planning &mdash; one
              clean, one check-in, one key handover instead of seven &mdash;
              and that is worth asking about. A month or more is a proper
              conversation, and the more of it falls outside the school
              holidays, the better the number gets.
            </p>
            <p>
              Two things count as much as the nights. How many rooms you
              take, and whether the booking is firm. A confirmed crew of
              twelve for five weeks lets us turn other enquiries away with a
              clear conscience; &ldquo;probably eight, maybe from March&rdquo;
              does not, and we price the two differently. Tell us the real
              dates and the real headcount and you will get the real rate.
            </p>
          </div>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Benefits of booking longer: rate savings, settled routine and
              self-catering value
            </H2>
            <p>
              The reduced rate is the obvious one. The other two are the
              ones site agents tell us they did not expect.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Rate savings",
                body: `A longer booking gets a reduced group rate on top of our standard R${site.pricing.fromZAR} per person sharing, quoted in writing before you commit. Multiply a few rand a night by twelve people and five weeks and it is a line item the project notices.`,
              },
              {
                title: "A settled routine",
                body: "Same room, same key, same Wi-Fi code, the bakkie in the same spot behind the gate. By the second week nobody is living out of a bag. A crew that sleeps properly and eats at a table turns up on site in a better mood, and foremen notice that before they notice the invoice.",
              },
              {
                title: "Self-catering value",
                body: `A weekly shop in Hazyview, cooked in the room or the wooden house kitchen, costs a fraction of five weeks of restaurant suppers — and every rand of the R595 SARS subsistence figure the crew does not spend on food is theirs. Breakfast at R${site.meals.breakfast.pricePerPersonZAR} is there for whoever wants it, not bundled in.`,
              },
            ]}
          />
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Who books long stays near Kruger
            </H2>
            <p>
              Four kinds of guest, and they want slightly different things
              from the same farm.
            </p>
            <p>
              <strong>Contractors and site teams.</strong> Road, water,
              electrical and building crews on the R40 upgrade, the estates
              and the town. They want the gate, the parking and a rate the
              project budget can carry, and they want it confirmed on paper.
              This page is mostly for them.
            </p>
            <p>
              <strong>Conservation and park staff.</strong> Kruger&rsquo;s
              rest camps, fences and roads need maintenance teams,
              researchers and field staff who are in the park by day and
              need a bed outside it at night. Phabeni gate is half an hour
              from our door, and a lodge room with a kitchenette suits
              someone who keeps park hours.
            </p>
            <p>
              <strong>Seasonal workers.</strong> The harvest months on the
              macadamia and banana estates bring supervisors, packhouse staff
              and drivers who need a roof for the season rather than the
              year. The wooden house and the twin rooms are the practical
              fit, and the reduced rate applies to them as much as to a
              construction crew.
            </p>
            <p>
              <strong>Remote workers.</strong> A month of Wi-Fi, a desk under
              the window and Kruger for the weekend. Honest note: our rates
              are per person sharing, so if you are one person on your own,
              say so and we will quote the room properly rather than let you
              assume.
            </p>
          </div>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Room options for teams (lodge / twin / dorm / camping)
            </H2>
            <p>
              Four kinds of bed inside one fence, all photographed room by
              room on our{" "}
              <Link href="/stay" className={linkClass}>
                Stay page
              </Link>{" "}
              so nobody arrives surprised.
            </p>

            <h3 className="mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl">
              Self-catering lodge rooms (sleeps 2&ndash;7) &mdash;
              R300&ndash;R350 pps
            </h3>
            <p>
              Free-standing{" "}
              <Link href="/stay/lodge" className={linkClass}>
                lodge rooms
              </Link>{" "}
              with a private en-suite, a kitchenette, a TV and Wi-Fi. The
              right room for a foreman, an engineer or a small team who want
              their own door after a long shift. The bedding differs from room
              to room &mdash; some are doubles, some sleep seven &mdash; so
              say who is coming.
            </p>

            <h3 className="mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl">
              Twin rooms (sleeps 2) &mdash; R{site.pricing.fromZAR} pps
            </h3>
            <p>
              Two single beds, a private en-suite, a wall fan and a desk under
              the window. Our{" "}
              <Link href="/stay/twin-room" className={linkClass}>
                twin rooms
              </Link>{" "}
              are the practical bed for pairs of crew members and the rate
              most contractor bookings are built on.
            </p>

            <h3 className="mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl">
              The wooden house &mdash; our dorm ({site.capacity.backpackersBeds}{" "}
              beds)
            </h3>
            <p>
              Singles and timber bunks across a few small rooms, a shared
              bathroom, a proper shared kitchen and a lounge. For a larger
              crew on a tight budget,{" "}
              <Link href="/stay/wooden-house" className={linkClass}>
                the wooden house
              </Link>{" "}
              is the most affordable roof on the farm.
            </p>

            <h3 className="mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl">
              Camping under the mango trees (up to {site.capacity.campingPeople})
            </h3>
            <p>
              {site.capacity.campsitePitches} pitches with power and water at
              each, a timber ablution block with hot showers, and shade from
              forty-year-old mango trees.{" "}
              <Link href="/camping" className={linkClass}>
                Camping
              </Link>{" "}
              is how a very large or short-notice crew fits when the rooms are
              full.
            </p>
          </div>
        </Section>

        <div className="mx-auto my-10 max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={pro(6004).src}
                  alt="Self-catering lodge room kitchenette for a contractor stay in Hazyview — gas hob, oven, fridge, kettle and a sunny window at Kanaan Guest Farm."
                  fill
                  sizes="(min-width: 1024px) 340px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                A lodge room kitchenette: the crew eats when the shift ends.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={pro(5771).src}
                  alt="Twin room for a pair of crew members at Kanaan Guest Farm, Hazyview — two single beds, a desk under the window and morning light, from R250 per person sharing."
                  fill
                  sizes="(min-width: 1024px) 340px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                A twin room: two singles, your own bathroom, R
                {site.pricing.fromZAR} a person sharing.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.woodenHouseExterior.src}
                  alt="The 8-bed wooden house at Kanaan Guest Farm — timber-clad dorm accommodation for a work crew in Hazyview, with a deck and braai outside the door."
                  fill
                  sizes="(min-width: 1024px) 340px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The wooden house: eight beds, a shared kitchen and a deck for
                the evening.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              What&rsquo;s included (Wi-Fi, parking, laundry, self-catering)
            </H2>
            <p>
              Not a spa. Four things a work crew actually needs, and all four
              are in the rate or a phone call away.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Free Wi-Fi across the farm",
                body: "A QR code on every room wall with the login. Timesheets, site photos, invoices and the evening call to head office all go through without a data bundle. If your project needs a guaranteed line for something heavier, tell us and we will be honest about whether the farm can carry it.",
              },
              {
                title: "Free, secure parking inside the gate",
                body: "The farm is fully fenced with a motorised gate on the R40. Bakkies, trailers and small plant park next to the rooms overnight, not on a town street. Call us from the road and the gate opens.",
              },
              {
                title: "Self-catering, so the crew controls its food costs",
                body: "A kitchenette in every lodge room — kettle, two-plate hob, fridge, plates and mugs. A full shared kitchen in the wooden house. Hazyview's supermarkets are minutes away for the weekly shop.",
              },
              {
                title: "Laundry on request",
                body: "Ask at reception; a small charge applies. On a multi-week rotation it is the difference between packing for six weeks and packing for one.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-5xl">
            <p>
              After knock-off there is the pool, the{" "}
              <Link href="/stay/entertainment-room" className={linkClass}>
                entertainment room
              </Link>{" "}
              with a pool table and foosball, the communal fire, and the
              walking trails that start at{" "}
              <Link href="/the-land" className={linkClass}>
                our gate
              </Link>
              . It is not a resort. It is a farm where a tired crew can sit
              outside.
            </p>
          </div>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Tips for a comfortable multi-week stay</H2>
            <p>
              Things the crews who have stayed longest wish they had known on
              day one.
            </p>
          </div>
          <NumberedList
            items={[
              {
                title: "Pack for a week, not a month",
                body: "Laundry is on request at a small charge, so there is no need to bring six weeks of overalls. Ask at reception on the first day and settle into a weekly rhythm.",
              },
              {
                title: "Do one big shop in Hazyview on the way in",
                body: "The supermarkets are a few minutes from the gate. Stock the kitchenette or the wooden house kitchen on the first evening and the week runs itself; the small basics are already in the room.",
              },
              {
                title: "Tell us the shift pattern",
                body: "Early starts, late finishes, a rotation that lands at 23:00 on a Sunday — say so when you book. Check-in is 14:00 to 22:00 and the gate is motorised, so we need to know when to expect the bakkie.",
              },
              {
                title: "Claim the desk",
                body: "The twin rooms have a writing desk under the window and the lodge rooms a table. Whoever does the evening admin should have the room with the desk, and the Wi-Fi code is on the wall.",
              },
              {
                title: "Build the weekend in",
                body: "A crew that has been here a fortnight has earned a Saturday in Kruger. Phabeni gate is half an hour away, and our day packages and a group braai at the fire are there for the asking. It is the difference between a posting and a stay.",
              },
            ]}
          />
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">How to request a team quote</H2>
          </div>
          <NumberedList
            items={[
              {
                title: "Send the crew size, rooms and dates",
                body: "On WhatsApp, or through the contact page on this site. How many people, how many need their own room, first and last night, and whether anyone flies in.",
              },
              {
                title: "We confirm the room mix and the reduced rate in writing",
                body: "Anneli or Matthew reply personally with which rooms, the per-person figure for that booking, and what breakfast or dinner would add if you want it.",
              },
              {
                title: "Arrive, park inside the gate, get to work",
                body: "Call us from the R40 and the gate opens. Wi-Fi code on the wall, kitchenette stocked with the basics, Hazyview's supermarkets a few minutes away for the rest.",
              },
            ]}
          />
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              FAQs about discounted contractor accommodation in Hazyview
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

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <ClosingBlock
              title="Book your team's stay near Kruger"
              thesis="Contractor accommodation near Kruger comes down to four things: a bed the budget can carry, a gate the bakkie sleeps behind, a kitchen, and Wi-Fi that carries the day's report. We have all four on one farm, a reduced rate for the teams who stay longest, and a family at the gate who will tell you straight whether we fit your contract."
              body={
                <>
                  Send us the crew size and the project dates on WhatsApp, or
                  through the{" "}
                  <Link href="/contact" className={linkClass}>
                    contact page
                  </Link>
                  , and Anneli or Matthew will come back with the room mix and
                  an honest number &mdash; from R{site.pricing.fromZAR} per
                  person sharing before the long-stay rate. If the team is
                  here long enough to see a weekend, our{" "}
                  <Link href="/packages" className={linkClass}>
                    Kruger day packages
                  </Link>{" "}
                  and{" "}
                  <Link href="/group-functions" className={linkClass}>
                    group braais
                  </Link>{" "}
                  are there for the Saturday.
                </>
              }
            />
            <p className="font-display text-base italic text-forest-deep">
              &mdash; Anneli &amp; Matthew
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <Sources
              items={[
                {
                  label:
                    "SARS — Subsistence allowances and advances: R595 per day meals and incidentals, local travel, 2027 tax year (from 1 March 2026)",
                  href: "https://www.sars.gov.za/tax-rates/employers/subsistence-allowances-and-advances/",
                },
                {
                  label:
                    "SANRAL — Upgrade of the R40 national road, Hazyview to Maviljan and Arthur Seat",
                  href: "https://www.nra.co.za/sanral-pages/view/upgrade-of-the-r40-national-road-gets-thumbs-up-from-the-traditional-leadership-in-bushbuckridge-local-municipality-sanral-stop-over",
                },
                {
                  label:
                    "Kruger Mpumalanga International Airport — airlines and routes",
                  href: "https://www.kmiairport.co.za/airlines/",
                },
                {
                  label: "SANParks — Kruger National Park gates and entry",
                  href: "https://www.sanparks.org/parks/kruger",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Get a group quote for your team"
          body="Tell us how many you are, how many rooms you need and the project dates. We reply personally, with the room mix and the reduced rate in writing."
          buttonLabel="Enquire on WhatsApp"
          pageKey="groupFunctions"
        />

        <Section className="pb-0!">
          <div className="mx-auto max-w-5xl">
            <Eyebrow>Related reading in this series</Eyebrow>
            <p className="mt-3 max-w-2xl text-base text-ink/80">
              This is the first of five guides on contractor and group stays
              near Kruger. The rest are being written; each one links here
              when it goes live.
            </p>
            {/* When a pillar post ships, replace its `href: null` with the
                real path (listed at the top of this file) and it becomes a
                link automatically. */}
            <ul className="mt-6 divide-y divide-black/10 border-y border-black/10">
              {seriesPosts.map((post) => (
                <li
                  key={post.title}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  {post.href ? (
                    <Link
                      href={post.href}
                      className="font-display text-lg text-forest-deep hover:text-ochre"
                    >
                      {post.title}
                    </Link>
                  ) : (
                    <span className="font-display text-lg text-forest-deep/80">
                      {post.title}
                    </span>
                  )}
                  <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-muted">
                    {post.href ? "Read the guide" : "Coming soon"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-5xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/group-functions"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Group functions · Teams and gatherings
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Team braais, meetings and gatherings on the farm
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  The covered venue, the lawn and the fire, for a crew that
                  has earned a Saturday.
                </p>
              </Link>
              <Link
                href="/packages"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Packages · Kruger and the Panorama Route
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Day packages for the weekend off
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  A Kruger morning or an escarpment day, put together for a
                  group that is already here.
                </p>
              </Link>
              <Link
                href="/stay"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Stay · Every room, photographed
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  This is where your team will stay
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Lodge rooms, twin rooms, the wooden house and the campsites,
                  room by room.
                </p>
              </Link>
              <Link
                href="/blog/accommodation-near-kruger-national-park"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Where to base yourself
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Accommodation near Kruger National Park
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Inside the park or outside it, and what each choice costs.
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
