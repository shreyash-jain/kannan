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
// SEO focus for this Guide (commercial intent — site agents and project
// managers booking a crew near Kruger):
//   • Focus keyword (1):  contractor accommodation Hazyview
//   • Primary:            affordable self-catering rooms near Kruger ·
//                         group rates for work crews · Hazyview
//                         accommodation for contractors
//   • Secondary:          secure parking · self-catering lodge rooms Kruger ·
//                         Wi-Fi guest house Hazyview · long-stay accommodation
//                         Mpumalanga · crew accommodation Mpumalanga · work
//                         team lodging near Kruger Mpumalanga airport
// Woven into the H1, intro, headings, FAQ and meta — never stuffed.
//
// Editorial stance: the number a site agent manages is the all-in cost per
// head per night, not the room rate. We put a kitchenette and a R60
// breakfast next to SARS's tax-free meals-and-incidentals figure
// (R595/day from 1 March 2026) and let the reader do the sum. We also say plainly what we are not: a hotel with a
// bar and a night porter, or a roof for sixty.
//
// Length: the marketing lead asked for 1,200 words (2026-09-21). H1 and
// tab title are the brief's full Topic line, verbatim, per the standing
// instruction (marketing confirmed it again on this post).
//
// Rates: no contractor or long-stay discount has been confirmed by the
// owner, so group and long-stay bookings are described as "quoted
// individually". Every Kanaan price comes from site.ts / rooms.ts.
//
// Imagery: every frame is a real photograph of Kanaan (owner rule, Sept
// 2026: no AI render may depict a scene on this farm).
//
// Width: max-w-5xl reading column, matching the milestone-birthday post,
// at the marketing lead's standing preference for the wide column.
// ---------------------------------------------------------------------

const datePublished = "2026-09-21";
const headline =
  "Contractor accommodation in Hazyview: affordable self-catering rooms near Kruger, with secure parking, Wi-Fi and group rates for work crews";

const linkClass =
  "font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep";

const faqs = [
  {
    q: "Do you offer discounted rates for long-term contractor bookings?",
    a: `We quote every group and long-stay booking individually rather than off a rate card. Send us crew size, how many rooms you need and the project dates, and Anneli or Matthew will come back with the room mix and a number in writing. Our standard rates are R${site.pricing.fromZAR} per person sharing in a twin room and R300–R350 in a self-catering lodge room.`,
  },
  {
    q: "Is there secure, fenced parking for company vehicles and trailers?",
    a: "Yes. The whole farm is fenced with a motorised gate at the R40 entrance, and parking inside the fence is free. Bakkies, trailers and small plant park next to the rooms overnight. Give us a call when you reach the gate on the first evening.",
  },
  {
    q: "Is Wi-Fi included for daily reporting?",
    a: "Free wireless internet covers the whole property, and each room has a QR code with the login on the wall. It is fine for timesheets, photos to head office, video calls and the evening's admin. If your project needs a guaranteed line for something heavier, tell us and we will be honest about whether the farm can carry it.",
  },
  {
    q: "Can you accommodate a large crew of ten or more in one booking?",
    a: `Comfortably. We sleep around ${site.capacity.sleepingTotal} under roof across lodge rooms (2–7 each), twin rooms and the ${site.capacity.backpackersBeds}-bed wooden house, with ${site.capacity.campsitePitches} powered campsites for up to ${site.capacity.campingPeople} beyond that. A crew of twelve usually lands as four twin rooms and a lodge room for the foreman.`,
  },
  {
    q: "How far is Kanaan Guest Farm from Hazyview town and Kruger Mpumalanga Airport?",
    a: `We are on the R40 just outside Hazyview — a few minutes to the shops, fuel and hardware stores in town. Kruger Mpumalanga International Airport is ${site.distances.kmiaMinutes} minutes, White River about forty kilometres and Mbombela (Nelspruit) roughly an hour. The Kruger gates at Phabeni and Numbi are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes away.`,
  },
];

export const metadata = createBlogPostMetadata({
  slug: "contractor-accommodation-hazyview",
  title: headline,
  description:
    "Affordable self-catering contractor accommodation in Hazyview with secure parking, free Wi-Fi and group rates for work crews. 48 min from Kruger's airport. Book at Kanaan Guest Farm.",
  image: pro(5782),
  datePublished,
  category: "guide",
});

export default function ContractorAccommodationHazyviewPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "Contractor accommodation in Hazyview for work crews, site teams and engineers near Kruger: self-catering lodge rooms, twin rooms, an 8-bed wooden house and powered campsites on a fenced farm with a motorised gate, free Wi-Fi and free parking. From R250 per person sharing, 48 minutes from Kruger Mpumalanga International Airport. Group and long-stay bookings quoted individually.",
          path: "/blog/contractor-accommodation-hazyview",
          image: pro(5782).src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={pro(5782).src}
          alt="Contractor accommodation in Hazyview — a row of numbered lodge room doors under a shaded walkway at Kanaan Guest Farm, self-catering rooms near Kruger for a work crew."
          eyebrow="Guide · Work crews near Kruger"
          title={headline}
          intro="Where a site team sleeps well, parks behind a gate, cooks its own supper and keeps the day rate honest — written by the family who run the farm."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={5}
          titleSize="compact"
        />

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl [&>aside]:mb-4">
            <TLDR
              items={[
                `Contractor accommodation in Hazyview from R${site.pricing.fromZAR} per person sharing: self-catering lodge rooms sleeping 2–7, twin rooms, an ${site.capacity.backpackersBeds}-bed wooden house and ${site.capacity.campsitePitches} powered campsites.`,
                "A fully fenced farm with a motorised gate and free parking inside — bakkies, trailers and plant stay next to the rooms overnight.",
                "Free Wi-Fi across the property, a kitchenette in every lodge room and a shared kitchen in the wooden house, so the crew controls its own food costs.",
                `${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport, minutes from Hazyview town, about an hour from Mbombela. Group and long-stay bookings quoted individually.`,
              ]}
            />
            <p>
              If you are the site agent, the project manager or the person in
              the office who has to find contractor accommodation in Hazyview
              for eight people by Monday, this is written for you. We run
              Kanaan Guest Farm on the R40, a few minutes outside town and{" "}
              {site.distances.kmiaMinutes} minutes from Kruger&rsquo;s
              airport, and we would far rather have a crew of eight for six
              weeks than a row of empty rooms between holiday seasons.
              Self-catering rooms, secure parking behind a motorised gate,
              free Wi-Fi, and a rate a project budget can carry. That is the
              whole offer, and the rest of this page is the detail.
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
              Why Hazyview works as a base for contractor teams
            </H2>
            <p>
              Hazyview sits where the Lowveld&rsquo;s work is. The banana and
              macadamia estates start at the edge of town; the Sabie timber
              plantations are forty minutes up the hill; the Kruger rest camps
              and their endless maintenance are through Phabeni gate; and{" "}
              <a
                href="https://www.nra.co.za/sanral-pages/view/upgrade-of-the-r40-national-road-gets-thumbs-up-from-the-traditional-leadership-in-bushbuckridge-local-municipality-sanral-stop-over"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                SANRAL&rsquo;s upgrade of the R40
              </a>{" "}
              from Hazyview towards Bushbuckridge runs past our gate. A crew
              based here reaches White River in about forty minutes and
              Mbombela in an hour, without paying city hotel rates to sleep
              near the site. For rotating teams, Kruger Mpumalanga
              International Airport is one straight road away — fly a
              specialist in on Monday, drive them to the gate on Friday.
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
                value: `R${site.pricing.fromZAR}`,
                label: "Per person sharing, per night",
                body: "Twin rooms. Self-catering lodge rooms sleeping 2–7 are R300–R350.",
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
                src={pro(6076).src}
                alt="Secure parking accommodation in Hazyview — the motorised security gate at the R40 entrance to Kanaan Guest Farm, the only way on or off the fenced property."
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The gate on the R40. Everything behind it — rooms, vehicles,
              trailers — is inside the fence.
            </figcaption>
          </figure>
        </div>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              What a work crew actually needs from Hazyview accommodation for
              contractors
            </H2>
            <p>
              Not a spa. Four things, in this order, and we have built the
              farm around them.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "A kitchen, to control food costs",
                body: "Every lodge room has a kitchenette — kettle, two-plate hob, fridge, plates and mugs. The wooden house has a full shared kitchen. A crew on a six-week posting eats for far less than restaurant prices, and eats when the shift ends, not when a dining room opens.",
              },
              {
                title: "Secure parking for bakkies and trailers",
                body: "The farm is fully fenced with a motorised gate, and parking inside is free. Vehicles, trailers and small plant stay next to the rooms, not on a town street.",
              },
              {
                title: "Wi-Fi that works for reporting",
                body: "Free wireless internet across the property, with a QR code in every room. Timesheets, site photos, invoices and the evening call to head office all go through without a data bundle.",
              },
              {
                title: "Room mixes that fit a crew",
                body: `Twin rooms for pairs, lodge rooms sleeping 2–7 for the foreman or a small team who want their own door, ${site.capacity.backpackersBeds} beds in the wooden house for the bigger group. Tell us the crew and we build the mix.`,
              },
            ]}
          />
          <Callout eyebrow="The number that matters">
            SARS allows an employee away overnight R595 a day, tax-free, for
            meals and incidentals. A crew with a kitchenette and a R
            {site.meals.breakfast.pricePerPersonZAR} breakfast spends a
            fraction of that — and the bed itself is R{site.pricing.fromZAR}.
          </Callout>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Contractor accommodation options at Kanaan Guest Farm
            </H2>
            <p>
              Four kinds of bed inside one fence. All of it is photographed
              room by room on our{" "}
              <Link href="/stay" className={linkClass}>
                Stay page
              </Link>
              , so nobody arrives surprised.
            </p>

            <h3 className="mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl">
              Self-catering lodge rooms (sleeps 2–7) — R300–R350 pps
            </h3>
            <p>
              Free-standing{" "}
              <Link href="/stay/lodge" className={linkClass}>
                lodge rooms
              </Link>{" "}
              with a private en-suite, a kitchenette, a TV and Wi-Fi. The
              right room for a foreman, an engineer or a small team who want
              privacy after a long shift. The bedding differs from room to
              room — some are doubles, some sleep a family of seven — so say
              who is coming.
            </p>

            <h3 className="mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl">
              Twin rooms (sleeps 2) — R{site.pricing.fromZAR} pps
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
              The wooden house ({site.capacity.backpackersBeds} beds)
            </h3>
            <p>
              Singles and timber bunks across a few small rooms, a shared
              bathroom, a proper shared kitchen and a lounge. For a larger
              crew,{" "}
              <Link href="/stay/wooden-house" className={linkClass}>
                the wooden house
              </Link>{" "}
              is the most cost-effective roof on the farm.
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
              is how a very large or short-term crew fits when the rooms are
              full.
            </p>
          </div>
        </Section>

        <div className="mx-auto my-10 max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.lodgeKitchenClassic.src}
                  alt="Self-catering kitchenette in a lodge room at Kanaan Guest Farm, Hazyview — cabinets, microwave, oven, kettle and a dining table, so a crew cooks its own supper."
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
                  src={img.twinRoomPair.src}
                  alt="Twin room for a pair of crew members at Kanaan Guest Farm, Hazyview — two single beds, en-suite bathroom, from R250 per person sharing."
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
                  src={img.woodenHouseKitchen.src}
                  alt="The shared self-catering kitchen in the 8-bed wooden house at Kanaan Guest Farm — budget crew accommodation near Kruger with a kitchen the team runs itself."
                  fill
                  sizes="(min-width: 1024px) 340px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The wooden house kitchen, where a crew of eight feeds itself.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Group rates for work crews and longer stays
            </H2>
            <p>
              We do not run a discount table, and we would rather not pretend
              to. What we do is quote every group and long-stay booking
              individually: the more rooms and the more weeks, the harder we
              work on the number. Our standard rates are R
              {site.pricing.fromZAR} per person sharing in a twin room and
              R300–R350 in a lodge room, and nothing is bundled in that you
              did not ask for. A continental breakfast is R
              {site.meals.breakfast.pricePerPersonZAR} a person on order the
              day before; a braai dinner is on request for whoever wants it.
              Laundry is available at a small charge, which matters on a
              multi-week rotation.
            </p>
            <p>
              Now the honest part. We are a family farm, not a hotel. There
              is no bar, no night porter and no room service; check-in is
              14:00 to 22:00, so tell us if the crew lands late. We do not
              offer a halaal menu. And past about{" "}
              {site.capacity.sleepingTotal} people the rest of the team is in
              tents, which suits some contracts and not others. If none of
              that is a problem, the{" "}
              <Link href="/stay/entertainment-room" className={linkClass}>
                pool table
              </Link>
              , the swimming pool and the fire are yours after knock-off.
            </p>
          </div>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              How to book contractor accommodation at Kanaan Guest Farm
            </H2>
          </div>
          <NumberedList
            items={[
              {
                title: "Send the crew size, rooms and dates",
                body: "On WhatsApp, or through the contact page on this site. How many people, how many need their own room, first and last night, and whether anyone flies in.",
              },
              {
                title: "We confirm the mix and the rate in writing",
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
            <H2 className="mb-4">FAQs for contractor and work-crew bookings</H2>
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
              title="Book your crew's stay near Kruger"
              thesis="Contractor accommodation in Hazyview comes down to four things: a bed the budget can carry, a gate the bakkie sleeps behind, a kitchen, and Wi-Fi that carries the day's report. We have all four on one farm, and a family at the gate who will tell you straight whether we fit your contract."
              body={
                <>
                  Send us the crew size and the project dates on WhatsApp, or
                  through the{" "}
                  <Link href="/contact" className={linkClass}>
                    contact page
                  </Link>
                  , and Anneli or Matthew will come back with the room mix and
                  an honest number — from R{site.pricing.fromZAR} per person
                  sharing. If the team is staying long enough to see a
                  weekend, our{" "}
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
              — Anneli &amp; Matthew
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
                  label: "SANRAL — Upgrade of the R40 national road, Hazyview to Arthur Seat",
                  href: "https://www.nra.co.za/sanral-pages/view/upgrade-of-the-r40-national-road-gets-thumbs-up-from-the-traditional-leadership-in-bushbuckridge-local-municipality-sanral-stop-over",
                },
                {
                  label: "Kruger Mpumalanga International Airport — airlines and routes",
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
          title="Get a group quote for your crew"
          body="Tell us how many you are, how many rooms you need and the project dates. We reply personally, with the room mix and the rate in writing."
          buttonLabel="Enquire on WhatsApp"
          pageKey="groupFunctions"
        />

        <Section>
          <div className="mx-auto max-w-5xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/stay"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Stay · Every room, photographed
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  This is where your crew will stay
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
