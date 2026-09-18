import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { img } from "@/lib/images";
import { pro } from "@/data/proPhotos";
import { articleLd, faqLd, eventVenueLd } from "@/lib/jsonld";
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
// SEO focus for this cornerstone (search-optimised Guide):
//   • Focus keyword (1):  milestone birthday party venues near Kruger
//                         National Park
//   • Secondary:          birthday celebration venues Kruger · safari lodge
//                         birthday party South Africa · private game reserve
//                         venue hire Mpumalanga · boma dinner birthday
//                         celebration · Kruger National Park event venues ·
//                         luxury lodge party venue South Africa
//   • Long-tail / geo:    Hazyview · Marloth Park · Sabi Sand · Hoedspruit ·
//                         White River · Mbombela (Nelspruit) · Greater Kruger ·
//                         exclusive-use lodge hire Kruger · group accommodation
//                         Kruger for celebrations · family reunion venue
// Woven into the H1, headings, intro, FAQ and meta — never stuffed.
// Anneli's warm first-person voice comes first; search second.
//
// Editorial stance: we run one of the venues in this guide and say so in
// the first paragraph. The honest map of the five areas — including the
// R29,600-a-night end of it — is the whole point.
//
// Length: the marketing lead asked for under 1,500 words (2026-09-15), so
// this is deliberately tighter than the other guides. Resist re-inflating it.
//
// Width: at the marketing lead's request (2026-09-15) the prose column on
// THIS post is max-w-5xl — the same width as the photos and data blocks —
// instead of the site-wide max-w-prose. Other posts keep the narrow column.
//
// Two corrections to the brief this was written from:
//   1. Sabi Sand is reached from the HAZYVIEW side (Shaw's Gate is ~37 km
//      up the R536 from town), not from Hoedspruit. Hoedspruit's reserves
//      are Timbavati, Klaserie, Thornybush, Balule and Kapama.
//   2. Kanaan has no boma. Boma dinners are described as what lodges offer;
//      ours is a fire and an open-sided venue, and the copy says so.
//
// Every figure is a 2026 number from a primary source (Sabi Sabi's own
// rate sheet, SANParks, the airports' own pages) and is repeated in the
// Sources block. Kanaan prices come from site.ts / rooms.ts only.
//
// Imagery: every frame is a real photograph of Kanaan. Owner rule (Sept
// 2026): no AI render may depict a scene on this farm; the generation
// account also had no credit for off-farm scenes when this was written.
// ---------------------------------------------------------------------

const datePublished = "2026-09-15";
const headline =
  "Best Venues for Milestone Birthday Parties Near Kruger National Park";

const faqs = [
  {
    q: "How much does it cost to host a birthday party near Kruger National Park?",
    a: `From a few hundred rand a head to the price of a small car. A suite at Sabi Sabi's Bush Lodge in the Sabi Sand is R29,600 per person per night in 2026/27, all-inclusive, plus a R450 reserve levy. A twin room on our farm in Hazyview is R${site.pricing.fromZAR} per person sharing, a lodge room R300–R350, and a day in Kruger adds R134 per South African adult.`,
  },
  {
    q: "Can you host a large group birthday at a lodge near Kruger?",
    a: `Count beds first. The private-reserve camps that offer exclusive use typically sleep twelve to twenty-four. For thirty to a hundred and fifty guests you need a Marloth Park group house, a White River estate, or a farm like ours: around ${site.capacity.sleepingTotal} beds under roof, camping for ${site.capacity.campingPeople}, ${site.capacity.wedding.indoor} seated under cover and ${site.capacity.wedding.withMarquee} with a marquee.`,
  },
  {
    q: "What is the best time of year for a bush birthday celebration?",
    a: "May to September: dry, crisp mornings, short grass, easy game viewing and no thunderstorm plan needed. Summer is green and dramatic but stormy in the late afternoon, so book a roof. For a December birthday, pre-book the group's Kruger day online — SANParks now caps day visitors at each gate over the festive season.",
  },
  {
    q: "Do lodges near Kruger offer décor and catering packages?",
    a: `Private-reserve lodges include the boma dinner, the cake and the game drives in the rate. White River and Mbombela estates sell function packages by the head. Marloth Park houses leave it to you. We sit in the middle: bring your own caterer and décor, or let us cook — breakfast at R${site.meals.breakfast.pricePerPersonZAR} a person and a South African braai for dinner, both on order. We do not sell a décor package.`,
  },
];

export const metadata = createBlogPostMetadata({
  slug: "milestone-birthday-venues-kruger-national-park",
  title: "Best Milestone Birthday Venues Near Kruger National Park",
  description:
    "Planning a milestone birthday? Discover the best safari lodges & boma venues near Kruger National Park for unforgettable celebrations.",
  image: img.venueCovered,
  datePublished,
  category: "guide",
});

export default function MilestoneBirthdayVenuesKrugerPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "The best milestone birthday party venues near Kruger National Park, compared honestly by the family who run Kanaan Guest Farm in Hazyview: the five areas (Hazyview, Sabi Sand and the Greater Kruger concessions, Hoedspruit, Marloth Park, White River–Mbombela), the venue types from exclusive-use safari lodges and boma dinners to self-catering group houses, real 2026 prices from R250 to R29,600 a night, and the questions to ask before booking.",
          path: "/blog/milestone-birthday-venues-kruger-national-park",
          image: img.venueCovered.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />
      <JsonLd
        data={eventVenueLd({
          name: "Kanaan Guest Farm — celebrations & group functions venue",
          description: `A covered, open-sided venue seating ${site.capacity.wedding.indoor} (${site.capacity.wedding.withMarquee} with a marquee) on a fenced family-run guest farm in Hazyview, with around ${site.capacity.sleepingTotal} beds under roof and camping for ${site.capacity.campingPeople}. Milestone birthdays, reunions and group gatherings, ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Kruger National Park gates.`,
          path: "/group-functions",
          image: img.venueLawnWide.src,
          maximumAttendeeCapacity: site.capacity.wedding.withCamping,
        })}
      />

      <article>
        <BlogHero
          image={img.venueCovered.src}
          alt="Milestone birthday party venue near Kruger National Park — the covered, open-sided venue at Kanaan Guest Farm in Hazyview, long tables under the roof with the Lowveld valley beyond."
          eyebrow="Guide · Celebrations near Kruger"
          title="Best Venues for Milestone Birthday Parties Near Kruger National Park"
          intro="We run one of the venues in this guide, so read it knowing that. Five areas, real 2026 prices from R250 to R29,600 a night, and the one question that matters more than the thread count."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={6}
        />

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl [&>aside]:mb-4">
            <TLDR
              items={[
                "Milestone birthday party venues near Kruger National Park sit in five areas: Hazyview, the Sabi Sand and Greater Kruger concessions, Hoedspruit, Marloth Park, and White River–Mbombela.",
                "The price range runs from R29,600 per person per night at Sabi Sabi (2026/27) to R250 per person sharing on our farm.",
                "Past twenty guests, beds decide the venue. Safari lodges sleep 12–24; a group house, an estate or a farm takes 30 to 150.",
                `Kanaan: ${site.capacity.wedding.indoor} seated under cover, ${site.capacity.wedding.withMarquee} with a marquee, camping for ${site.capacity.campingPeople}, ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from a Kruger gate.`,
              ]}
            />
            <p>
              The reason we own this farm is a birthday. Matthew&rsquo;s. He
              took me to a waterfall on land he knew the owner of, the
              afternoon ran long, and somewhere in it he mentioned the
              property was for sale. We took the keys in August 2025. So when
              someone messages us about a sixtieth in the bush, we understand
              the instinct completely.
            </p>
            <p>
              What the brochure round-ups never tell that person is what
              anything costs, who it suits, or how many beds it has. This
              guide does — and it puts us in the right place on the ladder,
              with the R29,600-a-night lodges above us, because for the right
              party they are the right answer.
            </p>
            <p className="not-prose">
              <Link
                href={whatsappLink("groupFunctions")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-bone hover:bg-forest-deep"
              >
                Ask us about a celebration on WhatsApp
              </Link>
            </p>
          </div>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Why celebrate a milestone birthday near Kruger National Park?
            </H2>
            <p>
              Because nobody has to leave at ten. A function room in town ends
              when the chairs get stacked and the car keys come out. A
              celebration out here ends when the fire does, and the cousins
              who flew in from Cape Town are still there at breakfast. Most
              bush venues, ours included, will give a group the whole
              property, and a{" "}
              <Link
                href="/blog/early-morning-kruger-safari-from-hazyview"
                className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
              >
                dawn drive through Phabeni gate
              </Link>{" "}
              on the morning of the party suits an eight-year-old and an
              eighty-year-old equally. The honest cost: the Lowveld is four and
              a half hours from Johannesburg by road, or a flight into Kruger
              Mpumalanga International Airport. Weigh that before anything
              else.
            </p>
          </div>
          <Callout eyebrow="The question that matters">
            Not &ldquo;how beautiful is the deck?&rdquo; but &ldquo;where
            does everyone sleep, and does anyone have to drive home?&rdquo;
          </Callout>
        </Section>

        <div className="mx-auto my-10 max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={pro(5708).src}
                alt="The viewpoint on Kanaan's high ground above Hazyview — chairs and a braai stand on a paved ledge with the Lowveld hills running to the escarpment, where a birthday sundowner happens on the farm."
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Our viewpoint, photographed as it is. Walk up with a cooler box
              and this is where the sundowners happen.
            </figcaption>
          </figure>
        </div>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Top areas near Kruger to host a birthday celebration
            </H2>

            <h3 className="mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl">
              Hazyview — lodges and farms with function spaces
            </h3>
            <p>
              Our town, and the closest to the southern gates: Phabeni and
              Numbi are {site.distances.krugerGateMinutesMin}–
              {site.distances.krugerGateMinutesMax} minutes away. Hazyview has
              the widest spread of prices on this list — river lodges on the
              Sabie with function decks, mid-range hotels, and working farms
              like ours with a covered venue and four kinds of bed. The{" "}
              <Link
                href="/blog/panorama-route-from-hazyview"
                className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
              >
                Panorama Route
              </Link>{" "}
              starts forty minutes up the hill. The limit: the animals are a
              drive away, not on the lawn.
            </p>

            <h3 className="mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl">
              Sabi Sand & the Greater Kruger — exclusive-use luxury lodges
            </h3>
            <p>
              The famous end: Sabi Sabi, Londolozi, Singita, Lion Sands, on an
              unfenced boundary with Kruger. One correction the brochures get
              wrong — Sabi Sand is reached from <em>our</em> side, Shaw&rsquo;s
              Gate being about 37 km up the R536 from Hazyview, not from
              Hoedspruit.{" "}
              <a
                href="https://www.sabisabi.com/rates"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
              >
                Sabi Sabi&rsquo;s Bush Lodge is R29,600 per person sharing
              </a>{" "}
              per night for 2026/27, plus a R450 levy; Earth Lodge is R44,000.
              For a fiftieth for six with money set aside, nothing touches it.
              For thirty guests it is close to R900,000 a night, and few camps
              have thirty beds.
            </p>

            <h3 className="mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl">
              Hoedspruit — Timbavati, Klaserie, Thornybush and Balule
            </h3>
            <p>
              Ninety minutes to two hours north on the R40, with its own
              runway at{" "}
              <a
                href="https://eastgateairport.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
              >
                Eastgate Airport
              </a>
              . Lodges run from genuinely luxurious down to family-run bush
              camps in the Balule that will hand you the whole camp for a
              weekend — the exclusive-use safari lodge without the Sabi Sand
              price. The trade is distance from KMIA and the Panorama Route.
            </p>

            <h3 className="mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl">
              Marloth Park — self-catering group houses
            </h3>
            <p>
              Two hours south-east on the N4, a wildlife conservancy on the
              Crocodile River with giraffe and kudu between the houses and
              Crocodile Bridge gate minutes away. Thatched homes sleeping eight
              to sixteen, hired by the house. Brilliant for a family that wants
              to be left alone with the animals; the wrong shape for a party
              that wants staff.
            </p>

            <h3 className="mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl">
              White River & Mbombela (Nelspruit) — event estates and gardens
            </h3>
            <p>
              Conference hotels, golf estates, the Casterbridge complex with
              its boutique hotel, and the Lowveld National Botanical Garden for
              daytime events — full function packages, a florist down the
              road, KMIA twenty minutes away. A garden party with a safari
              added on. For an eightieth where mobility matters and the list
              runs to a hundred, it may be exactly right.
            </p>
          </div>
        </Section>

        <div className="mx-auto my-10 max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={pro(5751).src}
                  alt="A whitewashed lodge unit at Kanaan Guest Farm, door number 12, lawn and garden chairs in front — the en-suite room grandparents get on a family birthday weekend near Kruger."
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                Where the grandparents sleep: a lodge unit with its own
                bathroom and kitchenette, close to the parking.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.venueLawnWide.src}
                  alt={img.venueLawnWide.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                Where the party is: sixty under the roof, a hundred once a
                marquee goes up on the lawn.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Best venue types for milestone birthdays</H2>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Exclusive-use safari lodge",
                body: "Twelve to twenty-four beds, a boma, rangers and a chef, all yours. The best birthday money can buy for a close family — if the guest list fits the lodge.",
              },
              {
                title: "Boma dinner & bush braai",
                body: "The reed-walled fire circle is the private lodges' signature, and most Hazyview and Hoedspruit lodges do a version for groups. We do not have a boma. We have a fire and a roof, and would rather say so.",
              },
              {
                title: "Riverside lodges and decks",
                body: "The Sabie at Hazyview, the Crocodile at Marloth Park. Lovely for a long lunch — ask where the deck goes in a January storm, and where the beds are.",
              },
              {
                title: "Self-catering group houses",
                body: "Marloth Park's speciality and the cheapest way to sleep a big family together. You bring everything and do everything.",
              },
              {
                title: "Venues with an event coordinator",
                body: "The White River estates and bigger hotels. Someone else worries about the florist and the seating plan; you pay by the head and trade the bush for a garden.",
              },
              {
                title: "The working farm — us",
                body: `Four kinds of bed inside one fence, a covered venue for ${site.capacity.wedding.indoor}, a marquee lawn for ${site.capacity.wedding.withMarquee}, exclusive use on request. Bring a caterer or let us braai.`,
              },
            ]}
          />
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              What to look for when booking a milestone birthday venue
            </H2>
          </div>
          <NumberedList
            items={[
              {
                title: "Beds, before capacity",
                body: `A venue that seats 120 and sleeps 24 is a venue for 24. Ours: around ${site.capacity.sleepingTotal} under roof across lodge rooms (sleeping 2–7), twin rooms and an ${site.capacity.backpackersBeds}-bed wooden house, plus camping for ${site.capacity.campingPeople} under the mango trees.`,
              },
              {
                title: "Catering, bar and décor",
                body: `Lodges include it, estates sell it by the head, houses leave it to you. Ask if you can bring your own caterer and whether there is a real kitchen. At Kanaan, yes to both — or we cook: breakfast at R${site.meals.breakfast.pricePerPersonZAR} a person and a braai dinner, on order.`,
              },
              {
                title: "Game drives and getting there",
                body: `Outside a private reserve the birthday safari is a self-drive into Kruger — R134 per South African adult, R602 international, per day. Guests fly Airlink or FlySafair into Kruger Mpumalanga International Airport, ${site.distances.kmiaMinutes} minutes from our gate.`,
              },
              {
                title: "Budget tier and weather",
                body: "Luxury from about R30,000 a person a night; mid-range lodges and estates a few thousand a head for the weekend; self-catering from R250 per person sharing. Between November and March, make sure the dinner has a roof.",
              },
            ]}
          />
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Sample milestone celebration packages — real 2026 numbers
            </H2>
            <p>
              <strong>Intimate luxury lodge weekend.</strong> Six of you, two
              nights, exclusive use of a small Sabi Sand camp, boma dinner on
              the night. At Sabi Sabi&rsquo;s published rate, about R360,000
              before flights. The safari most people picture, and the one most
              cannot justify. Both are true.
            </p>
            <p>
              <strong>Large family self-catering bush house.</strong> Fourteen
              of you in a thatched Marloth Park house for three nights. You
              bring the food and the banner; the kudu bring themselves. A
              morning through Crocodile Bridge costs each South African adult
              R134 in{" "}
              <a
                href="https://www.sanparks.org/parks/kruger/rates-entry-fees"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
              >
                SANParks conservation fees
              </a>
              .
            </p>
            <p>
              <strong>Fire, farm and game drive — ours.</strong> Thirty of you
              across three generations, Friday and Saturday. Grandparents in
              lodge rooms at R300–R350 per person sharing, cousins in twin
              rooms at R{site.pricing.fromZAR}, the rest in the wooden house
              and under the mango trees: roughly R15,000–R21,000 for every
              bed, both nights. A convoy through Phabeni on Saturday, a braai
              under the covered venue that night, breakfast at R
              {site.meals.breakfast.pricePerPersonZAR} on Sunday. We hold the
              whole farm if the dates are open.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: `R${site.pricing.fromZAR}`,
                label: "Per person sharing, from",
                body: "Twin rooms. Lodge rooms sleeping 2–7 are R300–R350, each with a kitchenette.",
              },
              {
                value: `${site.capacity.wedding.indoor} / ${site.capacity.wedding.withMarquee}`,
                label: "Seated under cover / with a marquee",
                body: `Up to ${site.capacity.wedding.withCamping} on the property when the camping ground opens.`,
              },
              {
                value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`,
                label: "To a Kruger gate",
                body: `Phabeni and Numbi. ${site.distances.kmiaMinutes} minutes from the airport on the R40.`,
              },
            ]}
          />
        </Section>

        <div className="mx-auto my-10 max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.campingAvenueWide.src}
                alt="The avenue of forty-year-old mango trees over the camping ground at Kanaan Guest Farm — group accommodation near Kruger for a birthday weekend where everyone sleeps on the property."
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The mango avenue over the camping ground — power and water at
              every pitch, a short walk from the lodge rooms.
            </figcaption>
          </figure>
        </div>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Frequently asked questions</H2>
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
              title="In closing — the bed decides the birthday"
              thesis="A milestone birthday near Kruger is not made by the deck or the boma. It is made by whether everyone you love can sleep within a hundred metres of the fire, and whether the number on the invoice lets them all come."
              body={
                <>
                  If it is six people and a once-in-a-lifetime budget, go to
                  the Sabi Sand and send us a photograph. If it is thirty
                  people and three generations, send us the date and the
                  numbers, and Anneli or Matthew will reply personally with
                  which rooms, whether the whole farm is free, and an honest
                  price — from R{site.pricing.fromZAR} per person sharing.
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
                  label: "Sabi Sabi Private Game Reserve — 2026/27 rates (official)",
                  href: "https://www.sabisabi.com/rates",
                },
                {
                  label: "Sabi Sabi — directions: Shaw's Gate via the R536 from Hazyview",
                  href: "https://www.sabisabi.com/application/files/3316/5770/3775/Getting-to-Sabi-Sabi-2022-2023.pdf",
                },
                {
                  label: "SANParks — Kruger conservation fees (valid to 31 October 2026)",
                  href: "https://www.sanparks.org/parks/kruger/rates-entry-fees",
                },
                {
                  label: "SANParks — festive-season day-visitor quotas at Kruger gates",
                  href: "https://www.sanparks.org/news/access-for-day-visitors-at-kruger-national-park-during-the-festive-season",
                },
                {
                  label: "Kruger Mpumalanga International Airport — airlines",
                  href: "https://www.kmiairport.co.za/airlines/",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Enquire about availability for your celebration"
          body="Tell us the date, how many of you there are and who it is for. We will come back with which rooms, whether the whole farm is free, and an honest number."
          buttonLabel="Enquire on WhatsApp"
          pageKey="groupFunctions"
        />

        <Section>
          <div className="mx-auto max-w-5xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/group-functions/team-family"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Group Functions · Reunions &amp; milestones
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Team &amp; family gatherings at Kanaan
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  The venue, the beds and the fire, laid out for the organiser.
                </p>
              </Link>
              <Link
                href="/blog/cost-of-a-kruger-lowveld-week-2026"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Planning your budget
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  What a Kruger &amp; Lowveld week really costs
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Gate fees, the Wild Card break-even and three worked budgets.
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
