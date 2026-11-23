import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { img } from "@/lib/images";
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
// SEO focus for this Guide:
//   • Focus keyword:  kids' birthday party in Hazyview
//   • Secondary:      kids' party venues in Hazyview · children's birthday
//                      party ideas · family-friendly venues Hazyview
//   • Supporting:     outdoor birthday parties · kids' activities in
//                      Hazyview · birthday party planning tips
//
// Editorial correction made to the brief this was written from: the brief
// asked for Kanaan to be positioned as a bookable day-only party venue for
// non-resident guests ("hire the hall for an afternoon"). Nothing on the
// site supports that — /facilities is explicit that the pool and
// entertainment room come with a stay ("No day passes, no extras, no
// asking"), and every /group-functions page (including the existing
// milestone-birthday guide) is written around guests who sleep over. So
// this post is honest instead: the birthday is part of an overnight farm
// stay, not a hall hire. Confirmed with marketing (chat, 2026-11-23)
// before writing.
//
// Distinct from /blog/milestone-birthday-venues-kruger-national-park,
// which compares lodges for an ADULT milestone birthday across five areas.
// This one is a single-property, children's-party planning guide.
// Perry's Bridge Reptile Park and Shangana Cultural Village are already
// covered in depth in /blog/perrys-bridge-market-hazyview and
// /blog/things-to-do-with-kids-hazyview-kruger, so this post links to both
// rather than repeating them.
//
// Imagery: every frame is a real, existing photograph of Kanaan already in
// the library (poolReal, venueShadeLawn, poolSecond, entertainmentPoolTable,
// kidsSafariBinoculars, campingMango) — no generated images for this post.
//
// Prices are 2026 figures from site.ts / rooms.ts, repeated in the Sources
// block where external (the Kruger conservation fee).
// ---------------------------------------------------------------------

const datePublished = "2026-11-23";
const headline =
  "Planning a Kids' Birthday Party in Hazyview? Bring It to the Farm for a Weekend";

const faqs = [
  {
    q: "Can I book a kids' birthday party at Kanaan Guest Farm?",
    a: "Not as a stand-alone afternoon hire — we don't sell the pool or the venue on their own. Book a stay, even a single night, and the birthday is part of it: the pool, the entertainment room and the covered venue all come with your room or pitch. Tell us the date and the numbers on WhatsApp and we'll check what's open.",
  },
  {
    q: "What outdoor activities can kids do at a birthday party in Hazyview?",
    a: "Swimming at the play structure, the pool table and foosball in the entertainment room, a wander through the mango grove, and — for children old enough to sit still in a car for a couple of hours — an early self-drive into Kruger, about 30–45 minutes from our gate. None of it needs booking ahead; it's included once you're staying.",
  },
  {
    q: "What should I look for in a kids' party venue near Hazyview?",
    a: "A single, secure gate rather than an open car park; enough beds that the whole family can stay rather than drive home after dark; a real kitchen or kitchenette for the cake and the fussy eaters; and cover for the afternoon storms that roll in most summer evenings. Ask plainly whether the pool is supervised — ours isn't, by a lifeguard or otherwise.",
  },
  {
    q: "Is there anything else to do nearby for a family celebration?",
    a: "Perry's Bridge Reptile Park and the Perry's Bridge Trading Post are a short drive away and undercover, which makes them a good half-day either side of the party. We've written both up properly, with Shangana Cultural Village and the rest of what works with children, in our family activities guide.",
  },
  {
    q: "What's the best time of year for an outdoor birthday at Kanaan?",
    a: "May to September is dry and easy — short grass, cool mornings, no storm plan needed. The pool is kept ready year-round regardless. November to March is green and warm but prone to afternoon thunderstorms, so plan the cake and the games under the covered venue rather than out on the lawn.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "kids-birthday-party-hazyview",
  title: "Kids' Birthday Party in Hazyview: A Family Weekend Guide",
  description:
    "Planning a kids' birthday party in Hazyview? Bring it to Kanaan Guest Farm for a weekend — the pool, the entertainment room, a covered venue, real 2026 prices and honest safety notes.",
  image: img.poolReal,
  datePublished,
  category: "guide",
});

export default function KidsBirthdayPartyHazyviewPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical guide to a kids' birthday party in Hazyview, written by the family who run Kanaan Guest Farm: why the party works better as a weekend stay than a hall hire, what to look for in a venue, real 2026 prices, a simple budget, honest safety notes, and the nearby attractions worth adding on.",
          path: "/blog/kids-birthday-party-hazyview",
          image: img.poolReal.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />
      <JsonLd
        data={eventVenueLd({
          name: "Kanaan Guest Farm — family celebrations & group functions venue",
          description: `A covered, open-sided venue seating ${site.capacity.wedding.indoor} (${site.capacity.wedding.withMarquee} with a marquee) on a fenced family-run guest farm in Hazyview, with a pool, an entertainment room and camping for ${site.capacity.campingPeople} under the mango trees. Children's birthdays and family celebrations, ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Kruger National Park gates.`,
          path: "/group-functions/team-family",
          image: img.venueShadeLawn.src,
          maximumAttendeeCapacity: site.capacity.wedding.withCamping,
        })}
      />

      <article>
        <BlogHero
          image={img.poolReal.src}
          alt={img.poolReal.alt}
          eyebrow="Guide · Family celebrations near Kruger"
          title={headline}
          intro="Skip the function room and the balloon arch delivery fee. A pool, a mango grove, a covered venue and a bed for every cousin — here's how a kids' birthday works at Kanaan, and what it actually costs."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={6}
        />

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl [&>aside]:mb-4">
            <TLDR
              items={[
                "A kids' birthday at Kanaan works as part of a stay, not a stand-alone venue hire — the pool, entertainment room and covered venue all come with a booked room or pitch.",
                "On-farm activities: a pool with a play structure, a pool table and foosball, the mango grove, and (for older kids) an early self-drive into Kruger, 30–45 minutes away.",
                `From R${site.pricing.fromZAR} per person sharing; the covered venue seats ${site.capacity.wedding.indoor}, ${site.capacity.wedding.withMarquee} with a marquee, if the party grows into a wider family gathering.`,
                "Self-catering kitchenettes for the cake, or a continental breakfast and braai dinner on order — we don't sell a décor or entertainer package.",
                "Honest safety note: the pool is not lifeguard-supervised, so bring an adult whose job for the afternoon is watching the water.",
              ]}
            />
            <p>
              Most birthday-venue searches turn up a function room with a
              hired bouncy castle and a four-hour slot that ends whether the
              cake has been cut or not. That is not what we do. We run a
              working guest farm in Hazyview, and when a family messages us
              about a seventh birthday, what we offer is a weekend: a room or
              a pitch, a pool the kids won&rsquo;t want to leave, and a fence
              around the whole property so nobody is chasing a four-year-old
              across a car park.
            </p>
            <p className="not-prose">
              <Link
                href={whatsappLink("groupFunctions")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-bone hover:bg-forest-deep"
              >
                Ask us about a birthday weekend on WhatsApp
              </Link>
            </p>
          </div>
        </Section>

        <div className="mx-auto my-10 max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.venueShadeLawn.src}
                alt={img.venueShadeLawn.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The lawn and the open-sided shade structure, photographed as
              they are — plenty of room to spread tables and chairs before
              everyone moves under cover for cake.
            </figcaption>
          </figure>
        </div>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              What to look for in a kids&rsquo; party venue in Hazyview
            </H2>

            <h3 className="mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl">
              Indoor, outdoor, or both
            </h3>
            <p>
              An outdoor party gives small children room to run that a hall
              never does, but Hazyview gets real afternoon storms between
              November and March, so the good venues have a roofed fallback
              rather than a tent that becomes a liability in a downpour. Our
              covered venue is open-sided — the Lowveld stays part of the
              party rather than something seen through a window — and it
              seats {site.capacity.wedding.indoor} if the guest list runs
              wider than one family.
            </p>

            <h3 className="mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl">
              What actually matters once you&rsquo;re there
            </h3>
            <p>
              Fewer things than the Pinterest boards suggest. A single gate
              you can watch, so a toddler can&rsquo;t wander off toward a
              road. Enough beds that grandparents and cousins stay rather
              than drive home at nine with an overtired child. A kitchen or
              kitchenette for the cake, the snacks the fussy eater will
              actually touch, and the bottles that need warming. And
              somewhere covered for when the sky does what it does most
              summer afternoons here.
            </p>
          </div>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              What there is for kids to do at a Kanaan birthday weekend
            </H2>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Swim",
                body: "The pool is kept ready year-round, with a play structure, shade and seating around it — where most birthday afternoons here actually end up.",
              },
              {
                title: "Pool table & foosball",
                body: "The entertainment room, under its own wooden-beamed ceiling, free to anyone staying. Reliably where the older cousins disappear to.",
              },
              {
                title: "Explore the mango grove",
                body: "Forty-year-old mango trees, open grass and enough shade for a self-run treasure hunt — bring your own clue list, we don't run one.",
              },
              {
                title: "An early game drive, for the older ones",
                body: `A self-drive into Kruger, ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from our gate, works as a birthday-morning outing once a child can sit still for a couple of hours.`,
              },
              {
                title: "Fire and stars",
                body: "A communal braai in the evening, and a sky dark enough that the stars do the work a games console can't.",
              },
              {
                title: "Walking trails",
                body: "Marked trails from the gate, out through the macadamias — a good length for an energetic school-age child, less so for a toddler.",
              },
            ]}
          />
        </Section>

        <div className="mx-auto my-10 max-w-5xl px-5 lg:px-8">
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
                The play structure at the pool — the first place most
                children head once the car is unpacked.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.entertainmentPoolTable.src}
                  alt={img.entertainmentPoolTable.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The entertainment room — pool table, foosball, a television
                and a fridge. Nothing to book and nothing to pay.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              A theme and a table, without a décor delivery
            </H2>
            <p>
              A jungle or safari theme needs almost nothing bought in here —
              the mango grove and the bushveld beyond the fence do most of
              the work, and a Kruger drive the next morning turns the theme
              into something the birthday child actually saw. We don&rsquo;t
              sell a décor or entertainer package, so bring your own balloons
              and banner; what we provide is the kitchenette for the cake,
              and the space to put it all up without worrying about a time
              slot.
            </p>
            <p>
              For food, most families self-cater — the lodge rooms have a
              kitchenette with a kettle, a two-plate hob and a fridge, and
              the wooden house has a shared kitchen. If you&rsquo;d rather
              not cook, we do a set continental breakfast on request at R
              {site.meals.breakfast.pricePerPersonZAR} a person, and a South
              African braai dinner, both arranged the day before. We
              don&rsquo;t currently offer a halaal option.
            </p>
          </div>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Real 2026 prices for a kids&rsquo; birthday weekend
            </H2>
            <p>
              A simple example: two families, four adults and three children,
              in two twin rooms for two nights. At R{site.pricing.fromZAR}{" "}
              per person sharing, that&rsquo;s roughly R3,500 for the rooms
              across the weekend, before any meals. A single-night version —
              say, grandparents coming just for the Saturday — is R
              {site.pricing.singleNightZAR} pps instead of R
              {site.pricing.fromZAR}. We don&rsquo;t publish a separate rate
              for young children; ask us when you enquire and we&rsquo;ll
              give you a straight answer.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: `R${site.pricing.fromZAR}`,
                label: "Per person sharing, from",
                body: "Twin rooms, two nights or more. Lodge rooms sleeping 2–7 are R300–R350, each with its own kitchenette.",
              },
              {
                value: `${site.capacity.wedding.indoor} / ${site.capacity.wedding.withMarquee}`,
                label: "Seated under cover / with a marquee",
                body: "If the birthday turns into a wider family reunion, the venue scales with it.",
              },
              {
                value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`,
                label: "To a Kruger gate",
                body: "An early drive makes a good birthday morning for children old enough to sit through it.",
              },
            ]}
          />
        </Section>

        <div className="mx-auto my-10 max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.kidsSafariBinoculars.src}
                  alt={img.kidsSafariBinoculars.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                A self-drive Kruger morning works well for the older kids at
                the party — see our{" "}
                <Link
                  href="/blog/early-morning-kruger-safari-from-hazyview"
                  className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
                >
                  First Light dawn-drive guide
                </Link>{" "}
                for how to plan one.
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
                If the guest list is really a family reunion, camping under
                the mango trees is the cheapest bed on the property.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Keeping a farm birthday safe</H2>
          </div>
          <NumberedList
            items={[
              {
                title: "One gate, and it's watched",
                body: "The property is fully fenced with a single motorised gate, and Anneli and Matthew live on site — there is one way in and out, not a car park to keep an eye on.",
              },
              {
                title: "The pool is not lifeguard-supervised",
                body: "Ours, like most farm pools, relies on the adults who come with the party. Appoint one before the cake comes out, not after.",
              },
              {
                title: "Shade and sun cream",
                body: "The Lowveld sun is stronger than it looks under cloud. The covered venue and the trees around the pool help, but pack sun cream regardless of season.",
              },
              {
                title: "Tell us about allergies and dietary needs",
                body: "Before we cook a breakfast or a braai, or if you're bringing your own caterer into the kitchen — a message the day before is enough.",
              },
              {
                title: "Have a roofed plan B",
                body: "November to March brings real afternoon thunderstorms. Keep the cake and the games under the covered venue rather than fully out on the lawn.",
              },
            ]}
          />
        </Section>

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
            <Callout eyebrow="The honest bit">
              We&rsquo;re not a party-hire venue with a laminated package
              list. We&rsquo;re a farm with a pool, a fence and a kitchen,
              and a birthday fits into that very naturally — once you&rsquo;re
              staying.
            </Callout>
            <ClosingBlock
              title="In closing — the stay is the party"
              thesis="A kids' birthday at Kanaan isn't a four-hour slot in a hired hall. It's a weekend where the party simply keeps going — the pool before lunch, the braai after, the mango grove in between — and nobody has to pack the car and drive home while the cake is still out."
              body={
                <>
                  Tell us the birthday date, how many of you there are and
                  roughly how many are children, and Anneli or Matthew will
                  reply personally with which rooms are free and an honest
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
                  label: "SANParks — Kruger conservation fees, 2026/27 rate card",
                  href: "https://www.sanparks.org/parks/kruger/rates-entry-fees",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Ask us about a birthday weekend at Kanaan"
          body="Tell us the date, how many of you are coming and how many are children. We'll come back with which rooms are free and an honest price."
          buttonLabel="Enquire on WhatsApp"
          pageKey="groupFunctions"
        />

        <Section>
          <div className="mx-auto max-w-5xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/things-to-do-with-kids-hazyview-kruger"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Family trip planning
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  A family guide to Hazyview, Kruger &amp; the Panorama Route
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Perry&rsquo;s Bridge, Shangana, zip-lines and the farm-and-pool
                  rhythm that keeps kids happy for longer than a week.
                </p>
              </Link>
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
                  If the birthday grows into a bigger reunion, this is the
                  page for whoever is organising it.
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
