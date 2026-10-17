import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
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
// SEO focus (search-optimised Guide):
//   • Focus keyword:  best guest farms near Kruger National Park
//   • Secondary:      Kanaan Guest Farm · guest farm near Kruger ·
//                     Hazyview guest farm · Hazyview accommodation near
//                     Kruger · safari / family / affordable accommodation
//                     near Kruger · camping near Kruger National Park
//
// The angle: a buyer's checklist for a guest farm near the southern gates
// (distance, beds, kitchen, afternoons, a gate that closes), then Kanaan
// scored against it honestly — including what we are not (no game on the
// farm, set menus rather than a restaurant). Siblings it must not repeat:
//   /blog/accommodation-near-kruger-national-park  — which TOWN to base in
//   /blog/family-accommodation-near-kruger-national-park — stays with kids
//   /blog/camping-near-kruger-national-park (in progress) — the fee sum
//
// Every farm photo here is a real photograph (owner rule, 2026-09-03).
// Brief asked for under 1,300 words: body, tables, FAQ and captions count.
//
// Fees: SANParks daily conservation fees 1 Nov 2026 – 31 Oct 2027
// (R140 SA adult, R692 international adult). Waterfalls: Lisbon and Berlin
// just north of Graskop off the R532, Mac Mac on the R532 towards Sabie.
// ---------------------------------------------------------------------

const datePublished = "2026-10-17";
const headline =
  "Best Guest Farms Near Kruger National Park for a Safari Holiday";
const slug = "best-guest-farms-near-kruger-national-park";

const gateMins = `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax}`;

const linkClass =
  "font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep";

const faqs = [
  {
    q: "What are the best guest farms near Kruger National Park?",
    a: `The best one is the one that fits your trip: under an hour from a gate, with the right beds for your group, a kitchen and space outdoors. Hazyview, just outside the southern gates, has several. Kanaan Guest Farm is one of them, ${gateMins} minutes from the Phabeni and Numbi gates.`,
  },
  {
    q: "Which Kruger gate is closest to Kanaan Guest Farm?",
    a: `Phabeni and Numbi, both ${gateMins} minutes from our gate. Paul Kruger Gate, on the road to Skukuza, is further.`,
  },
  {
    q: "Is Kanaan Guest Farm suitable for families?",
    a: "Yes. There are multi-bed rooms, kitchenettes, lawns, a pool and farm trails, so children have somewhere to go after a morning in the car.",
  },
  {
    q: "Can I camp at Kanaan Guest Farm?",
    a: `Yes. We have ${site.capacity.campsitePitches} shaded pitches under the mango trees with power and water at each, hot showers and private toilet cubicles. Tents, rooftop tents and overland trucks are all welcome.`,
  },
  {
    q: "Is Hazyview a good base for a Kruger safari?",
    a: "One of the best, because it sits between Kruger's southern gates and the Panorama Route, with shops, fuel and restaurants in town. You can do both without changing where you sleep.",
  },
];

export const metadata = createBlogPostMetadata({
  slug,
  title: headline,
  description:
    "Looking for the best guest farms near Kruger National Park? Discover why Kanaan Guest Farm in Hazyview is an ideal base for your Lowveld safari holiday.",
  image: img.lowveldViewReal,
  datePublished,
  category: "guide",
});

// --- Infographic: where the farm sits between the park and the escarpment
function BaseMap() {
  const stops = [
    {
      side: "West",
      name: "Panorama Route",
      detail: "God's Window, Graskop, the waterfalls",
      time: "About 40 min",
    },
    {
      side: "You are here",
      name: "Kanaan Guest Farm",
      detail: "On the R40, Hazyview",
      time: `${site.distances.kmiaMinutes} min to the airport`,
      home: true,
    },
    {
      side: "East",
      name: "Kruger National Park",
      detail: "Phabeni and Numbi gates",
      time: `${gateMins} min`,
    },
  ];
  return (
    <figure className="not-prose mx-auto mt-10 max-w-5xl">
      <div className="relative rounded-2xl bg-bone p-6 md:p-10">
        <div
          aria-hidden
          className="absolute left-10 right-10 top-1/2 hidden h-0.5 -translate-y-1/2 border-t-2 border-dashed border-ochre/50 md:block"
        />
        <ol className="relative grid gap-4 md:grid-cols-3 md:gap-6">
          {stops.map((s) => (
            <li
              key={s.name}
              className={`rounded-xl p-5 text-center ${
                s.home
                  ? "bg-forest-deep text-bone shadow-lg"
                  : "border border-black/10 bg-white"
              }`}
            >
              <p
                className={`text-xs uppercase tracking-[0.2em] ${
                  s.home ? "text-sand" : "text-muted"
                }`}
              >
                {s.side}
              </p>
              <p
                className={`mt-2 font-display text-xl ${
                  s.home ? "text-bone" : "text-forest-deep"
                }`}
              >
                {s.name}
              </p>
              <p className={`mt-1 text-sm ${s.home ? "text-bone/80" : "text-ink/75"}`}>
                {s.detail}
              </p>
              <p
                className={`mt-3 font-display text-lg ${
                  s.home ? "text-sand" : "text-ochre"
                }`}
              >
                {s.time}
              </p>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        The park one way, the escarpment the other. Approximate drive times from
        our gate.
      </figcaption>
    </figure>
  );
}

// --- Infographic: the five-point checklist, with Kanaan's answer
const checklist = [
  {
    look: "Location",
    why: "Under an hour to a gate, on tar. The first hours after the gate opens are the best of the day.",
    kanaan: `${gateMins} min to Phabeni or Numbi, on the R40`,
  },
  {
    look: "Accommodation options",
    why: "Rooms that fit your group. Couples, families and campers need different things.",
    kanaan: `Lodge rooms, twin rooms, ${site.capacity.backpackersBeds} backpacker beds, ${site.capacity.campsitePitches} campsites`,
  },
  {
    look: "Self-catering",
    why: "A kitchen means early coffee, packed breakfasts and cheaper suppers.",
    kanaan: "Kitchenettes in most lodge units",
  },
  {
    look: "Outdoor facilities",
    why: "Lowveld afternoons are hot. You need somewhere to be.",
    kanaan: "Pool, trails, waterfall, mango grove, braai spots",
  },
  {
    look: "Security",
    why: "Peace of mind when the car is full of kit.",
    kanaan: "Fenced farm, motorised gate, free parking",
  },
];

function Checklist() {
  return (
    <div className="not-prose mx-auto mt-10 max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-black/10">
        <div className="hidden grid-cols-[3rem_1fr_1.4fr_1.2fr] bg-forest-deep px-5 py-3 text-xs uppercase tracking-[0.2em] text-sand md:grid">
          <span>#</span>
          <span>Look for</span>
          <span>Why it matters</span>
          <span>At Kanaan</span>
        </div>
        <ol className="divide-y divide-black/10">
          {checklist.map((c, i) => (
            <li
              key={c.look}
              className="grid gap-2 bg-white px-5 py-5 md:grid-cols-[3rem_1fr_1.4fr_1.2fr] md:gap-4"
            >
              <span className="font-display text-2xl text-ochre">{i + 1}</span>
              <h3 className="font-display text-lg text-forest-deep">{c.look}</h3>
              <p className="text-sm leading-relaxed text-ink/80">{c.why}</p>
              <p className="text-sm font-medium text-forest-deep">
                <span className="mr-1 text-ochre" aria-hidden>
                  ✓
                </span>
                {c.kanaan}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

// --- Infographic: farm vs rest camp
const compareRows = [
  ["Where you sleep", "Outside the park, in Hazyview", "Inside the park fence"],
  [
    "Kruger's daily fee",
    "Only on the days you drive in",
    "Every day you stay: R140 per SA adult, R692 international (from 1 Nov 2026)",
  ],
  ["Panorama Route", "About 40 minutes away", "A long day out of the park"],
  ["Self-catering", "Kitchenettes in most units", "Depends on the camp"],
  ["Camping", `${site.capacity.campsitePitches} powered, shaded pitches`, "At many rest camps"],
  ["Pool and space", "Pool, trails, waterfall", "Depends on the camp"],
  ["Best for", "Kruger plus the wider Lowveld", "A park-only trip"],
];

function CompareTable() {
  return (
    <div className="not-prose mx-auto mt-10 max-w-5xl">
      <div className="overflow-x-auto rounded-2xl border border-black/10">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-forest-deep text-bone">
            <tr>
              <th className="px-4 py-3 font-normal text-sand" scope="col">
                <span className="sr-only">Compare</span>
              </th>
              <th className="px-3 py-3 font-display text-sm sm:px-4 sm:text-base" scope="col">
                Kanaan Guest Farm
              </th>
              <th className="px-3 py-3 font-display text-sm sm:px-4 sm:text-base" scope="col">
                Inside Kruger
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/10 bg-white">
            {compareRows.map(([label, farm, park]) => (
              <tr key={label}>
                <th scope="row" className="px-3 py-3 font-medium text-forest-deep sm:px-4">
                  {label}
                </th>
                <td className="bg-sand/30 px-3 py-3 text-ink/85 sm:px-4">{farm}</td>
                <td className="px-3 py-3 text-ink/75 sm:px-4">{park}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- Infographic: who it suits
const travellers = [
  { who: "Families", why: "Space, a kitchen and the pool." },
  { who: "Couples", why: "Quiet evenings and early drives." },
  { who: "Budget travellers", why: "Campsites, backpacker beds, self-catering." },
  { who: "Groups", why: "Several room types on one farm." },
  { who: "Overlanders", why: "Shaded, powered pitches just off the R40." },
];

function WhoItSuits() {
  return (
    <ul className="not-prose mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {travellers.map((t) => (
        <li key={t.who} className="rounded-xl border border-black/10 bg-bone p-5">
          <h3 className="font-display text-lg text-forest-deep">{t.who}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/80">{t.why}</p>
        </li>
      ))}
    </ul>
  );
}

function Photo({
  image,
  caption,
  half,
}: {
  image: { src: string; alt: string };
  caption: string;
  half?: boolean;
}) {
  return (
    <figure>
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={half ? "(min-width: 1024px) 512px, 100vw" : "(min-width: 1024px) 1024px, 100vw"}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">{caption}</figcaption>
    </figure>
  );
}

const h3Class = "mt-8 mb-2 font-display text-xl text-forest-deep";

export default function BestGuestFarmsNearKrugerPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "How to choose a guest farm near Kruger National Park, written by the family who run Kanaan Guest Farm in Hazyview: a five-point checklist, how Kanaan measures up, guest farm versus staying inside Kruger, how many nights to book and a four-day itinerary.",
          path: `/blog/${slug}`,
          image: img.lowveldViewReal.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.lowveldViewReal.src}
          alt={img.lowveldViewReal.alt}
          eyebrow="Guide · Where to stay"
          title={`${headline} | Kanaan Guest Farm`}
          titleSize="compact"
          intro="There are a handful of guest farms around Kruger's southern gates, and they are not all built for the same trip. Here is what we would look for if we were booking one, and where Kanaan fits."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={6}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <TLDR
              items={[
                "A guest farm gives you space, a kitchen and a quiet evening, and you only pay Kruger's daily fee on the days you drive in.",
                "Judge one on five things: distance to the gate, the right beds, a kitchen, somewhere to be in the afternoon, and a gate that closes.",
                `Kanaan is on the R40 in Hazyview, ${gateMins} minutes from the Phabeni and Numbi gates.`,
                `From R${site.pricing.fromZAR} per person sharing a night for two nights or more; R${site.pricing.singleNightZAR} for a single night.`,
              ]}
            />
            <p>
              Most people planning Kruger start by looking inside the park. Then
              they see how fast the rest camps fill, and realise how much of the
              trip they want to spend outside it. That is where{" "}
              <strong>guest farms near Kruger National Park</strong> come in.
            </p>
            <p>
              We are one of them, so read this as advice from people with an
              obvious interest. We have tried to make it useful even if you
              book somewhere else.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Why stay at a guest farm near Kruger National Park?
            </H2>
            <p>
              A hotel gives you a room. A guest farm gives you ground. After
              four hours sitting still in a car, that matters more than thread
              count.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "More space, slower afternoons",
                body: "Lawns, trails, a pool, trees to sit under. Children can run. Adults can do nothing at all.",
              },
              {
                title: "Kruger in the morning, quiet at night",
                body: "Be at the gate when it opens, spend the morning in the park, and come back to a farm instead of a camp fence.",
              },
              {
                title: "Beds for every budget",
                body: "Self-catering rooms, family layouts, backpacker beds and campsites on one property, so a mixed group stays together.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Why Hazyview is a great base for a Kruger safari</H2>
            <p>
              Look at a map and Hazyview explains itself. Kruger&rsquo;s
              southern gates are to the east. The Panorama Route climbs the
              escarpment to the north-west. In between is a real town with
              supermarkets, fuel, restaurants and enough to fill a day off:
              zip-lines, rafting, wildlife sanctuaries. Our guide to{" "}
              <Link href="/blog/things-to-do-around-hazyview" className={linkClass}>
                things to do around Hazyview
              </Link>{" "}
              has the full list.
            </p>
            <h3 className={h3Class}>Kanaan Guest Farm&rsquo;s location near Kruger</h3>
            <p>
              We are on the R40 in Hazyview, {gateMins} minutes from the Phabeni
              and Numbi gates and {site.distances.kmiaMinutes} minutes from
              Kruger Mpumalanga International Airport. Close enough to be at the
              boom when it lifts, without a 3am alarm.
            </p>
          </div>
          <BaseMap />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              What to look for when choosing a guest farm near Kruger
            </H2>
            <p>
              Photos tell you whether a place is pretty. These five questions
              tell you whether it suits your trip.
            </p>
          </div>
          <Checklist />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Kanaan Guest Farm: a comfortable base for your Kruger safari
            </H2>
            <p>
              We took over Kanaan in {site.ownedSince} and have been fixing it
              up the slow way ever since: water, Wi-Fi, the gate, then the rooms
              one at a time.
            </p>
            <h3 className={h3Class}>Close to Kruger National Park</h3>
            <p>
              {gateMins} minutes to the gate means a 5am start, not a 3am one.
              Do the morning in the park, come home for lunch and a swim, and go
              again tomorrow.
            </p>
            <h3 className={h3Class}>Different accommodation options at Kanaan</h3>
            <p>
              Self-catering lodge rooms with en-suites, simpler twin rooms, an{" "}
              {site.capacity.backpackersBeds}-bed wooden backpacker house and{" "}
              {site.capacity.campsitePitches} campsites. A couple, a family and
              a group of twelve can book the same weekend and all be
              comfortable. Every room is photographed on our{" "}
              <Link href="/stay" className={linkClass}>
                stay page
              </Link>
              .
            </p>
          </div>
          <div className="not-prose mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            <Photo
              half
              image={img.lodgeRoom}
              caption="A renovated lodge room: crisp white linen and a window onto the garden."
            />
            <Photo
              half
              image={img.backpackersWide}
              caption="Inside the wooden backpacker house, where groups and budget travellers stay."
            />
          </div>
          <div className="prose-kanaan mx-auto mt-10 max-w-5xl">
            <h3 className={h3Class}>Family-friendly accommodation</h3>
            <p>
              Multi-bed rooms, open lawns, the pool and a whole farm to explore.
              Our{" "}
              <Link
                href="/blog/family-accommodation-near-kruger-national-park"
                className={linkClass}
              >
                family accommodation guide
              </Link>{" "}
              goes into the detail.
            </p>
            <h3 className={h3Class}>Camping at Kanaan Guest Farm</h3>
            <p>
              If you want <strong>camping near Kruger National Park</strong>,
              ours is under forty-year-old mango trees:{" "}
              {site.capacity.campsitePitches} shaded pitches, power and water at
              each, hot showers, private toilet cubicles and a communal fire.
              More on the{" "}
              <Link href="/camping" className={linkClass}>
                camping page
              </Link>
              .
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-5xl">
            <Photo
              image={img.campingPowerWater}
              caption="A tap and a power point at the pitch, and mango shade over the whole camping ground."
            />
          </div>
          <Callout eyebrow="Two honest notes">
            We are not a game lodge, so the Big Five are in Kruger, not on the
            farm. And meals are set menus on request, not a restaurant, which is
            why most guests self-cater.
          </Callout>
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">What can you do from Kanaan Guest Farm?</H2>
            <p>
              Four kinds of day, all from the same bed. For gates and routes,
              see our{" "}
              <Link href="/blog/kruger-from-hazyview" className={linkClass}>
                guide to Kruger from Hazyview
              </Link>{" "}
              and the{" "}
              <Link href="/blog/panorama-route-from-hazyview" className={linkClass}>
                Panorama Route from Hazyview
              </Link>
              .
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Explore Kruger National Park",
                body: "Self-drive or join a guided game drive. Go early: the first hours after the gate opens are usually the best.",
              },
              {
                title: "Drive the Panorama Route",
                body: "God's Window, the Three Rondavels, Bourke's Luck Potholes and Graskop on one scenic day out.",
              },
              {
                title: "Find the waterfalls",
                body: "Lisbon and Berlin Falls are just outside Graskop. Mac Mac Falls is on the R532 towards Sabie.",
              },
              {
                title: "Stay on the farm",
                body: "Swim, walk or mountain-bike the trails, find our waterfall and rock pool, or read under the mango trees.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Kanaan Guest Farm vs staying inside Kruger</H2>
            <p>
              Both are good choices for different trips. The biggest difference
              is money: Kruger charges a{" "}
              <a
                href="https://www.sanparks.org/wp-content/uploads/2026/02/daily_conservation_fees_2026_27.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                daily conservation fee
              </a>{" "}
              for every day you are inside, including the lazy ones.
            </p>
          </div>
          <CompareTable />
          <div className="prose-kanaan mx-auto mt-10 max-w-5xl">
            <p>
              If all you want is animals, and lions calling at night, stay
              inside. If you want Kruger and the Panorama Route on one trip
              without packing up mid-week, stay out here.
            </p>
          </div>
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Which travellers should stay at Kanaan Guest Farm?</H2>
          </div>
          <WhoItSuits />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">How many nights should you stay at Kanaan Guest Farm?</H2>
            <p>
              From R{site.pricing.fromZAR} per person sharing a night when you
              stay two nights or more, and R{site.pricing.singleNightZAR} for a
              single night. One night is rarely enough anyway.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: "2 nights",
                label: "Kruger only",
                body: "One full morning in the park, and a slow afternoon on the farm.",
              },
              {
                value: "3–4 nights",
                label: "Kruger + Panorama Route",
                body: "The sweet spot. Park, escarpment and a little of Hazyview.",
              },
              {
                value: "5+ nights",
                label: "The slow Lowveld trip",
                body: "Two or three Kruger mornings, with rest days between.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Suggested Kruger &amp; Hazyview itinerary from Kanaan Guest Farm
            </H2>
          </div>
          <NumberedList
            items={[
              {
                title: "Day 1: Arrive",
                body: "Check in from 2pm, walk the farm, swim, braai.",
              },
              {
                title: "Day 2: Kruger",
                body: "Early breakfast, through the gate at opening, back for a late lunch by the pool.",
              },
              {
                title: "Day 3: Panorama Route",
                body: "God's Window, the waterfalls and Bourke's Luck Potholes. Home before dark.",
              },
              {
                title: "Day 4: Hazyview and the farm",
                body: "A local activity, the farm trails, or a second Kruger morning.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Tips for booking a guest farm near Kruger</H2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink/85">
              <li>Book early for school holidays and the festive season.</li>
              <li>Ask for the drive time to the gate, not the distance.</li>
              <li>Choose rooms by your group size, and self-cater on longer stays.</li>
              <li>Camping? Check every pitch has power and shade.</li>
              <li>
                Check{" "}
                <a
                  href="https://www.sanparks.org/parks/kruger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  gate times
                </a>{" "}
                before you plan a dawn start; they change by season.
              </li>
              <li>Give the Panorama Route a whole day.</li>
            </ul>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">FAQs about guest farms near Kruger National Park</H2>
            <div className="not-prose mt-8 divide-y divide-black/10 border-t border-black/10">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <h3 className="font-display text-lg text-forest-deep md:text-xl">
                    {f.q}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/85">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8 xl:px-0">
          <Photo
            image={img.waterfall}
            caption="Our own waterfall and rock pool, a walk across the farm. Worth it on a rest day."
          />
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <ClosingBlock
              title="Why choose Kanaan Guest Farm for your safari holiday?"
              thesis="Kruger in the morning, the Panorama Route the next day, and the same quiet farm to come home to every night."
              body={
                <>
                  Rooms for couples, families, backpackers and campers, a pool
                  and trails on the property, and Hazyview&rsquo;s shops close by.
                  From R{site.pricing.fromZAR} per
                  person sharing.
                  <br />
                  <br />
                  Send us your dates and how many of you there are, and one of
                  us will reply personally.
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
                  label: "SANParks: daily conservation fees, 1 November 2026 to 31 October 2027",
                  href: "https://www.sanparks.org/wp-content/uploads/2026/02/daily_conservation_fees_2026_27.pdf",
                },
                {
                  label: "SANParks: Kruger National Park gates, times and rest camps",
                  href: "https://www.sanparks.org/parks/kruger",
                },
                {
                  label: "SA-Venues: the Sabie waterfall route on the R532",
                  href: "https://blog.sa-venues.com/attractions/sabie-waterfall-route/",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Planning your next Kruger safari?"
          body={`Stay at Kanaan Guest Farm in Hazyview: a relaxed Lowveld base ${gateMins} minutes from Kruger and close to the Panorama Route. WhatsApp Anneli or Matthew with your dates.`}
          buttonLabel="Check availability on WhatsApp"
          pageKey="stay"
        />

        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/kruger-from-hazyview"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Kruger
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Kruger from Hazyview
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Which gate to use, when they open, and the morning plan that
                  gets you back for lunch.
                </p>
              </Link>
              <Link
                href="/blog/panorama-route-from-hazyview"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Panorama Route
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  The Panorama Route from Hazyview
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  God&rsquo;s Window, the Potholes and the waterfalls, as a half
                  day or a full one.
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
