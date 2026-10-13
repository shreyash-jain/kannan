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
  NumberedList,
  ClosingBlock,
  WhatsAppCTA,
  BlogHero,
  Sources,
} from "@/components/blog/Blocks";

// ---------------------------------------------------------------------
// SEO focus (search-optimised Guide, marketing brief 2026-10-05):
//   • Focus keyword:  Johannesburg to Kruger National Park
//   • Secondary:      Johannesburg to Kruger road trip · where to stay
//                     between Johannesburg and Kruger · Hazyview
//                     accommodation · Hazyview to Kruger National Park ·
//                     things to do in Hazyview · Hazyview guest farm
// Marketing asked for under 1,300 words, simple language, and infographics,
// and (2026-10-05, on localhost) for the text to fill the side margins: the
// reading column is max-w-5xl, the same width as the photos and data blocks,
// as on the milestone-birthday post.
// The four infographics (route, two ways, one base, seasons) are built in
// code, not images, so every number on them matches the body exactly.
//
// Brief correction: the brief calls Hazyview a stop "between" Johannesburg
// and Kruger. It is not halfway — it is the last town before the Phabeni,
// Numbi and Paul Kruger gates. The post says so plainly and argues for
// stopping at the END of the drive instead.
//
// Verified figures (2026-10-05):
//   394 km / ~4½ hrs Johannesburg–Hazyview, 57 km Mbombela–Hazyview
//     (same Rome2Rio figures as the contractor pillar)
//   Phabeni 12 km from Hazyview; gates 05:30 summer / 06:00 winter
//     (as published in kruger-from-hazyview + early-morning posts)
//   N4 tolls, Class 1 from 1 March 2026: Middelburg R84, Machadodorp R126
//     (SANRAL increase as reported by Pretoria News, 2026-03-11)
//   Single night R275 pps / 2+ nights R250 pps — site.pricing (Anneli,
//     2026-10-03)
// ---------------------------------------------------------------------

const slug = "johannesburg-to-kruger-national-park-hazyview";
const datePublished = "2026-10-05";
const headline =
  "Why Hazyview Is an Ideal Stop Between Johannesburg and Kruger National Park";

const link =
  "font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep";

const gateMin = `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`;

const faqs = [
  {
    q: "Is Hazyview on the way from Johannesburg to Kruger?",
    a: "Yes. It's the last town before the Phabeni, Numbi and Paul Kruger gates, 394 km from Johannesburg.",
  },
  {
    q: "How long does it take to drive from Johannesburg to Hazyview?",
    a: "About 4½ hours on the N4, or around six through Dullstroom and Sabie.",
  },
  {
    q: "Which Kruger gate is closest to Hazyview?",
    a: `Phabeni, 12 km from town and ${gateMin}utes from our farm.`,
  },
  {
    q: "Where should I stay between Johannesburg and Kruger?",
    a: "At the end of the drive, not halfway. Hazyview puts you near the gates and lets you unpack once.",
  },
];

export const metadata = createBlogPostMetadata({
  slug,
  title: "Johannesburg to Kruger: Why Hazyview Is the Perfect Stop",
  description:
    "Travelling from Johannesburg to Kruger National Park? Discover why Hazyview is the ideal stop for Kruger, the Panorama Route, waterfalls and a relaxed Lowveld stay.",
  image: img.jhbKrugerEscarpment,
  datePublished,
  category: "guide",
});

// --- Infographic 1: the two routes, Johannesburg to Hazyview --------
// Scenic-route legs from OpenStreetMap routing (OSRM), 2026-10-13, between
// the towns marketing pinned (Dullstroom, Lydenburg/Mashishing, Sabie). It
// leaves the N4 at Belfast, before the Machadodorp plaza, so only the
// Middelburg toll applies.
type Stop = { place: string; note: string; home?: boolean };

const n4Route: Stop[] = [
  { place: "Johannesburg / OR Tambo", note: "Head east for eMalahleni" },
  { place: "N4 east", note: "Tolls: Middelburg R84 · Machadodorp R126" },
  { place: "Mbombela (Nelspruit)", note: "Turn north onto the R40" },
  { place: "Hazyview · Kanaan", note: "57 km later, on the R40", home: true },
  { place: "Phabeni Gate", note: "12 km from Hazyview" },
];

const scenicRoute: Stop[] = [
  { place: "Belfast", note: "Leave the N4 here, after the Middelburg toll" },
  { place: "Dullstroom", note: "35 km on the R540" },
  { place: "Lydenburg", note: "56 km on, also called Mashishing" },
  { place: "Sabie", note: "55 km over the Long Tom Pass" },
  { place: "Hazyview · Kanaan", note: "45 km down the R536", home: true },
];

function RouteInfographic({
  eyebrow,
  stats,
  stops,
  tone = "bg-forest",
}: {
  eyebrow: string;
  stats: string[];
  stops: Stop[];
  tone?: string;
}) {
  return (
    <figure className="not-prose mx-auto my-12 w-full max-w-5xl px-5 lg:px-0">
      <div className={`rounded-3xl p-6 text-bone md:p-10 ${tone}`}>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ochre">
          {eyebrow}
        </p>
        <div className="mt-3 flex flex-wrap items-baseline gap-x-8 gap-y-2">
          {stats.map((st, i) => (
            <p
              key={st}
              className={
                i === 0
                  ? "font-display text-4xl md:text-5xl"
                  : "font-display text-2xl text-bone/80 md:text-3xl"
              }
            >
              {st}
            </p>
          ))}
        </div>
        <ol className="relative mt-8 grid gap-6 md:grid-cols-5 md:gap-4">
          <span
            aria-hidden
            className="absolute left-[0.6rem] top-2 bottom-2 w-0.5 bg-ochre/50 md:left-0 md:right-0 md:top-[0.6rem] md:bottom-auto md:h-0.5 md:w-auto"
          />
          {stops.map((r) => (
            <li key={r.place} className="relative pl-9 md:pl-0 md:pt-9">
              <span
                aria-hidden
                className={`absolute left-0 top-0 h-5 w-5 rounded-full border-4 border-forest ${
                  r.home ? "bg-bone" : "bg-ochre"
                }`}
              />
              <p className="font-display text-lg leading-snug">{r.place}</p>
              <p className="mt-1 text-sm text-bone/75">{r.note}</p>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Car tolls from 1 March 2026. Times exclude stops.
      </figcaption>
    </figure>
  );
}

// --- Infographic 2: straight through vs. stopping -------------------
const twoWays = [
  {
    title: "Drive straight into Kruger",
    tone: "bg-sand/70",
    rows: [
      ["Day 1", "4½ hours driving, then a gate queue in the heat"],
      ["First game drive", "The hottest, quietest hours"],
    ],
  },
  {
    title: "Stop the night in Hazyview",
    tone: "bg-bone border border-ochre/40",
    rows: [
      ["Day 1", "Arrive mid-afternoon, swim, braai, sleep"],
      ["First game drive", "At the gate when it opens"],
    ],
  },
];

function TwoWaysInfographic() {
  return (
    <div className="not-prose mx-auto my-12 grid w-full max-w-5xl gap-4 px-5 md:grid-cols-2 lg:px-0">
      {twoWays.map((w) => (
        <div key={w.title} className={`rounded-2xl p-6 md:p-7 ${w.tone}`}>
          <p className="font-display text-xl text-forest-deep">{w.title}</p>
          <dl className="mt-4 space-y-3">
            {w.rows.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ochre">
                  {k}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink/85">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

// --- Infographic 3: the gates from Hazyview --------------------------
const gates = [
  {
    name: "Phabeni Gate",
    value: gateMin,
    body: "The closest, 12 km from Hazyview. Our pick for a morning drive.",
  },
  {
    name: "Numbi Gate",
    value: gateMin,
    body: "A good plan B on busy holiday mornings.",
  },
  {
    name: "Paul Kruger Gate",
    value: "Full day",
    body: "The furthest, near Skukuza. Best for a full day in the park.",
  },
];

function GatesInfographic() {
  return (
    <div className="not-prose mx-auto my-12 grid w-full max-w-5xl gap-4 px-5 md:grid-cols-3 lg:px-0">
      {gates.map((g) => (
        <article key={g.name} className="rounded-2xl border border-black/5 bg-bone p-7">
          <p className="font-display text-4xl leading-none tracking-tight text-forest-deep">
            {g.value}
          </p>
          <h3 className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ochre">
            {g.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">{g.body}</p>
        </article>
      ))}
    </div>
  );
}

// --- Infographic 4: one base, four directions ------------------------
const spokes = [
  { pos: "md:col-start-2 md:row-start-1", what: "Kruger gates", time: gateMin, sub: "Phabeni & Numbi" },
  { pos: "md:col-start-1 md:row-start-2", what: "Sabie waterfalls", time: "~35 min", sub: "Mac Mac, Lisbon, Berlin" },
  { pos: "md:col-start-3 md:row-start-2", what: "God's Window & Graskop", time: "45–60 min", sub: "The Panorama Route" },
  { pos: "md:col-start-2 md:row-start-3", what: "KMIA airport", time: `${site.distances.kmiaMinutes} min`, sub: "Flights to Joburg & Cape Town" },
];

function BaseInfographic() {
  return (
    <figure className="not-prose mx-auto my-12 w-full max-w-5xl px-5 lg:px-0">
      <div className="relative grid gap-3 md:grid-cols-3 md:grid-rows-3 md:gap-6">
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          viewBox="0 0 300 300"
          preserveAspectRatio="none"
        >
          <g stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-ochre/60" vectorEffect="non-scaling-stroke">
            <line x1="150" y1="150" x2="150" y2="50" vectorEffect="non-scaling-stroke" />
            <line x1="150" y1="150" x2="50" y2="150" vectorEffect="non-scaling-stroke" />
            <line x1="150" y1="150" x2="250" y2="150" vectorEffect="non-scaling-stroke" />
            <line x1="150" y1="150" x2="150" y2="250" vectorEffect="non-scaling-stroke" />
          </g>
        </svg>
        <div className="relative flex flex-col items-center justify-center rounded-2xl bg-forest p-6 text-center text-bone md:col-start-2 md:row-start-2">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ochre">
            Your base
          </p>
          <p className="mt-2 font-display text-2xl">Kanaan, Hazyview</p>
          <p className="mt-1 text-sm text-bone/75">Unpack once</p>
        </div>
        {spokes.map((s) => (
          <div
            key={s.what}
            className={`relative rounded-2xl border border-black/5 bg-bone p-5 text-center ${s.pos}`}
          >
            <p className="font-display text-3xl leading-none text-forest-deep">
              {s.time}
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-ochre">
              {s.what}
            </p>
            <p className="mt-1 text-sm text-ink/75">{s.sub}</p>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Approximate drive times from our gate.
      </figcaption>
    </figure>
  );
}

// --- Infographic 5: the two seasons ----------------------------------
const seasons = [
  {
    months: "May–September",
    name: "Dry winter",
    points: ["Thin bush, easier game viewing", "Clear Panorama Route views"],
  },
  {
    months: "October–April",
    name: "Green summer",
    points: ["Lush bush, baby animals, birds", "Full waterfalls, afternoon storms"],
  },
];

function SeasonsInfographic() {
  return (
    <div className="not-prose mx-auto my-12 grid w-full max-w-5xl gap-4 px-5 md:grid-cols-2 lg:px-0">
      {seasons.map((s, i) => (
        <div
          key={s.name}
          className={`rounded-2xl p-6 md:p-7 ${i === 0 ? "bg-sand/70" : "bg-forest text-bone"}`}
        >
          <h3
            className={`font-display text-2xl ${i === 0 ? "text-forest-deep" : "text-bone"}`}
          >
            {s.months}
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-ochre">
            {s.name}
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed">
            {s.points.map((p) => (
              <li key={p}>— {p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const h3 = "mt-8 mb-2 font-display text-xl text-forest-deep md:text-2xl";

export default function JohannesburgToKrugerPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical guide to the Johannesburg to Kruger National Park road trip, written by the family who run Kanaan Guest Farm in Hazyview: the 394 km N4 route and tolls, why to sleep in Hazyview before your first game drive, which Kruger gate to use, a four-day itinerary and the best time of year.",
          path: `/blog/${slug}`,
          image: img.jhbKrugerEscarpment.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.jhbKrugerEscarpment.src}
          alt={img.jhbKrugerEscarpment.alt}
          eyebrow="Guide · Road trip"
          title={headline}
          titleSize="compact"
          intro="Most people driving to Kruger see Hazyview as a fuel stop before the gate. We'd like to make the case for staying the night."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={6}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <TLDR
              items={[
                "Johannesburg to Hazyview is 394 km on the N4, or a scenic day through Dullstroom and Sabie.",
                "Hazyview isn't halfway. It's the last town before three Kruger gates.",
                "Sleep here and you're at the gate fresh for its 05:30 or 06:00 opening.",
                "One base covers Kruger, the Panorama Route and Sabie's waterfalls.",
              ]}
            />
            <p>
              After a year of welcoming people off the N4, we think the
              easiest way to do the{" "}
              <strong>Johannesburg to Kruger National Park</strong> trip is
              simple. Stop here first, and keep coming back to the same bed.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">How far is Hazyview from Johannesburg?</H2>
            <p>
              There are two good ways down. One is quick. The other is a day
              out in itself.
            </p>
            <h3 className={h3}>Route 1: Johannesburg to Hazyview on the N4</h3>
            <p>
              It&rsquo;s 394 km, about four and a half hours, and the route
              Google Maps will give you: the N4 east to Mbombela, then 57 km
              north on the R40. We&rsquo;re right on it.
            </p>
          </div>
          <RouteInfographic
            eyebrow="Route 1 · The quick way, on the N4"
            stats={["394 km", "about 4½ hours", "R210 in tolls"]}
            stops={n4Route}
          />
          <div className="prose-kanaan mx-auto max-w-5xl">
            <p>
              Keep R210 for the two N4 tolls, at{" "}
              <a
                href="https://pretorianews.co.za/motoring/industry-news/2026-03-11-heres-how-much-youll-pay-in-toll-fees-on-south-africas-major-routes-after-sanrals-2026-increase"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                2026 car rates
              </a>
              . Arrive before dark: the R40 has people and animals on the
              verges at night.
            </p>
            <h3 className={h3}>
              Route 2: the scenic way, through Dullstroom, Lydenburg and Sabie
            </h3>
            <p>
              This is the one we love. Leave the N4 at Belfast and climb to{" "}
              <strong>Dullstroom</strong>, a trout-fishing village about
              2,000 m up and one of the coldest towns in the country. Bring a
              jersey, and stop for breakfast.
            </p>
            <p>
              Then <strong>Lydenburg</strong> (officially Mashishing), in an
              area rich in history, and up the Long Tom Pass to more than
              2,000 m. Near the top is{" "}
              <a
                href="https://www.sa-venues.com/things-to-do/mpumalanga/hops-hollow-brewery/"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                Hops Hollow
              </a>
              , one of the highest breweries in Africa. The road drops into{" "}
              <strong>Sabie</strong> for waterfalls and pancakes, 45 km from
              our gate.
            </p>
          </div>
          <RouteInfographic
            eyebrow="Route 2 · The scenic way, from Belfast"
            stats={["About 415 km", "6 hours' driving", "R84 in tolls"]}
            stops={scenicRoute}
            tone="bg-forest-deep"
          />
          <div className="prose-kanaan mx-auto max-w-5xl">
            <p>
              The catch: it&rsquo;s only about 20 km longer but well over an
              hour slower. Leave early and cross the pass in
              daylight, as it gets thick mist. Tired children? Take the N4
              down and the scenic way home.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Why stop in Hazyview instead of driving straight to Kruger?
            </H2>
            <p>
              The honest part first: Hazyview isn&rsquo;t halfway. It&rsquo;s
              the far end of the drive. Stopping here puts you on the
              park&rsquo;s doorstep for the night.
            </p>
            <h3 className={h3}>1. Break up the Johannesburg to Kruger road trip</h3>
            <p>
              Four and a half hours feels much longer with children in the
              back, or after an overnight flight. Ending the day at a pool,
              not a gate queue, changes the holiday.
            </p>
            <h3 className={h3}>2. Start your Kruger adventure fresh</h3>
            <p>
              Kruger&rsquo;s gates open at 05:30 in summer and 06:00 in
              winter, and the first two hours are the best. Drive straight in
              and you get the hot, sleepy afternoon instead.
            </p>
            <h3 className={h3}>3. Hazyview offers more than just accommodation</h3>
            <p>
              It sits between the park and the mountains. A base, not a stop.
            </p>
          </div>
          <TwoWaysInfographic />
          <div className="prose-kanaan mx-auto max-w-5xl">
            <p>
              One exception: booked a camp inside Kruger? Drive
              straight in through Paul Kruger Gate, and check closing times
              on{" "}
              <a
                href="https://www.sanparks.org/parks/kruger"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                SANParks
              </a>
              .
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.jhbKrugerFirstMorning.src}
                alt={img.jhbKrugerFirstMorning.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The first morning. (Illustration.)
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Hazyview is close to Kruger National Park</H2>
            <p>
              More in our{" "}
              <Link href="/blog/kruger-from-hazyview" className={link}>
                Kruger from Hazyview guide
              </Link>
              .
            </p>
          </div>
          <GatesInfographic />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              What can you do in Hazyview before or after Kruger?
            </H2>
            <h3 className={h3}>Explore the Panorama Route</h3>
            <p>
              God&rsquo;s Window and Graskop are under an hour away, with
              Bourke&rsquo;s Luck Potholes and the Three Rondavels further
              along. A day trip, not a reason to move. See our{" "}
              <Link href="/blog/panorama-route-from-hazyview" className={link}>
                Panorama Route guide
              </Link>
              .
            </p>
            <h3 className={h3}>Visit the waterfalls around Sabie</h3>
            <p>
              Mac Mac, Lisbon and Berlin Falls, from about 35 minutes away.
            </p>
            <h3 className={h3}>Enjoy Hazyview&rsquo;s family attractions</h3>
            <p>
              Zip-lines, Perry&rsquo;s Bridge Reptile Park and rafting.
              Here&rsquo;s{" "}
              <Link href="/blog/things-to-do-around-hazyview" className={link}>
                everything to do around Hazyview
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Why Hazyview works better as a base than constantly changing hotels
            </H2>
            <p>
              No packing up every morning. Every day trip ends at the same
              room.
            </p>
          </div>
          <BaseInfographic />
          <Callout eyebrow="The second night is the cheaper one">
            {`One night with us is R${site.pricing.singleNightZAR} per person sharing. Stay two or more and it's R${site.pricing.fromZAR} a night.`}
          </Callout>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Why stay at Kanaan Guest Farm in Hazyview?</H2>
            <p>
              We&rsquo;re a family-run farm on the R40: self-catering lodge
              rooms, campsites under forty-year-old mango trees, a pool,
              trails, our own waterfall and a secure gate. See{" "}
              <Link href="/facilities" className={link}>
                everything on the farm
              </Link>
              .
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.poolReal.src}
                  alt={img.poolReal.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                Where the drive from Johannesburg ends.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.veranda.src}
                  alt={img.veranda.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                A lodge patio with its own braai.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              A suggested Johannesburg–Hazyview–Kruger itinerary
            </H2>
          </div>
          <NumberedList
            items={[
              {
                title: "Day 1 · Johannesburg to Hazyview",
                body: "Leave after breakfast, arrive mid-afternoon, swim, braai.",
              },
              {
                title: "Day 2 · Kruger National Park",
                body: "Phabeni Gate at opening, a morning game drive, back for lunch.",
              },
              {
                title: "Day 3 · The Panorama Route",
                body: "God's Window, Bourke's Luck, the Three Rondavels and a waterfall.",
              },
              {
                title: "Day 4 · On to your next stop",
                body: "A slow breakfast and a farm walk before you drive on.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Best time to stop in Hazyview on a Johannesburg–Kruger trip
            </H2>
            <p>
              No bad month, just different ones. Here&rsquo;s our{" "}
              <Link
                href="/blog/when-to-visit-kruger-hazyview-month-by-month"
                className={link}
              >
                month-by-month guide
              </Link>
              .
            </p>
          </div>
          <SeasonsInfographic />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Tips for planning your Johannesburg to Kruger road trip
            </H2>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Book ahead in the holidays",
                body: "School holidays and long weekends fill up fast.",
              },
              {
                title: "Check gate times",
                body: "They change with the season. Plan your first drive around them.",
              },
              {
                title: "Don't cram the days",
                body: "One big outing a day is plenty. Leave room for the pool.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0! pb-10!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              FAQs about Johannesburg, Hazyview and Kruger
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

        <Section className="pt-0! pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <ClosingBlock
              title="Plan your Johannesburg to Kruger journey with a stop in Hazyview"
              thesis="Don't rush the last stretch. Make Hazyview part of the trip, not just the road to it."
              body={
                <>
                  Send us your dates.
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
                    "SANParks — Kruger gates and times",
                  href: "https://www.sanparks.org/parks/kruger",
                },
                {
                  label:
                    "Pretoria News — 2026 N4 toll fees",
                  href: "https://pretorianews.co.za/motoring/industry-news/2026-03-11-heres-how-much-youll-pay-in-toll-fees-on-south-africas-major-routes-after-sanrals-2026-increase",
                },
                {
                  label: "Hops Hollow Brewery, Long Tom Pass",
                  href: "https://www.sa-venues.com/things-to-do/mpumalanga/hops-hollow-brewery/",
                },
                {
                  label:
                    "Rome2Rio — Johannesburg to Hazyview",
                  href: "https://www.rome2rio.com/s/Johannesburg/Hazyview",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Driving down from Joburg?"
          body={`We'll reply personally with what's free. From R${site.pricing.fromZAR} per person sharing for two nights or more.`}
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
                  Which gate to use, opening times and the half-day plan.
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
                  God&rsquo;s Window, the waterfalls and the canyon, as a day
                  trip.
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
