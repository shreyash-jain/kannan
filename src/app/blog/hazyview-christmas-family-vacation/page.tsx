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
  ClosingBlock,
  WhatsAppCTA,
  BlogHero,
  Sources,
} from "@/components/blog/Blocks";

// ---------------------------------------------------------------------
// SEO focus (seasonal, booking-intent Guide):
//   • Focus keyword:  Hazyview Christmas family vacation
//   • Secondary:      Christmas in Hazyview · Hazyview family holiday ·
//                     Lowveld Christmas holiday · family vacation in Hazyview ·
//                     things to do in Hazyview with kids · Christmas holiday
//                     in Kruger · Hazyview accommodation for families
//   • Long-tail:      Hazyview December weather · can you visit Kruger on
//                     Christmas Day · how many days in Hazyview
//
// The five infographics are built in HTML/SVG, not as image files, so every
// figure inside them is crawlable text (marketing asked for "searchable"
// infographics). They are one-offs, defined inline per BLOG_PLAYBOOK.
//
// Facts checked 2026-10-05:
//   • Kruger gates Nov–Feb 05:30–18:30 (SANParks).
//   • Festive day-visitor quotas per gate, pre-booking prioritised, three
//     arrival slots; last season's admin fee R59 adult / R29 child.
//   • Conservation fee from 1 Nov 2026: R140 SA adult / R70 child per day
//     (SANParks 2026/27 tariff; was R134 to 31 Oct 2026).
//   • December climate reuses the month-by-month almanac's figures.
//   • 2026 holidays: Wed 16 Dec, Fri 25 Dec, Sat 26 Dec.
//
// HARD RULES: Hazyview is not a malaria area (never framed here). No AI
// render depicts the farm — the two generated frames are a Kruger road and a
// Kruger picnic site; every farm image is a real photograph.
// ---------------------------------------------------------------------

const slug = "hazyview-christmas-family-vacation";
const datePublished = "2026-10-05";
const headline =
  "Planning Your Lowveld Christmas Family Vacation: A Complete Hazyview Guide";

const link =
  "font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep";

const faqs = [
  {
    q: "Is Hazyview a good place for a Christmas family holiday?",
    a: "Yes, if you like your Christmas warm and outdoors. You are a short drive from Kruger's southern gates and the Panorama Route, so you can do both without moving accommodation. The trade-off is that December is the busiest month of the year, so book early.",
  },
  {
    q: "What is Hazyview like in December?",
    a: "Hot, green and stormy. Days reach about 28 °C, nights stay around 17 °C, and December is one of the wettest months, usually as a heavy afternoon storm rather than all-day rain. The sun is up a little after five, so mornings are the best part of the day.",
  },
  {
    q: "Can families visit Kruger on Christmas Day?",
    a: "Yes, Kruger is open every day of the year, Christmas included. Over the festive season SANParks caps day visitors at each gate and gives priority to people who pre-book online, so book a gate time slot for 25 December rather than just turning up.",
  },
  {
    q: "How far is Kruger from Hazyview?",
    a: `Phabeni Gate is about 12 km from Hazyview town, and ${site.distances.krugerGateMinutesMin} to ${site.distances.krugerGateMinutesMax} minutes from our gate at Kanaan. Numbi Gate is a similar drive the other way.`,
  },
  {
    q: "How many days should you spend in Hazyview at Christmas?",
    a: "Four or five nights. That's enough for a Kruger morning, a Panorama Route day and a Hazyview outing, with slow days between them and room to move a plan when the weather turns.",
  },
  {
    q: "Is Hazyview suitable for young children?",
    a: "Very. Keep Kruger drives to two or three hours, pick Panorama stops that are a short walk from the car, and save the afternoons for the pool. The real things to manage with small children here are sun, heat and water, not animals.",
  },
];

export const metadata = createBlogPostMetadata({
  slug,
  title: "Planning a Hazyview Christmas Family Vacation: Lowveld Guide",
  description:
    "Planning a Christmas family vacation in Hazyview? Discover family activities, Kruger safaris, Panorama Route trips and where to stay in the Lowveld.",
  image: img.hazyviewChristmasKrugerDawn,
  datePublished,
  category: "guide",
});

// --- Infographic 1: December at a glance ---------------------------
function DecemberAtAGlance() {
  const facts = [
    { value: "~05:05", label: "Sunrise", note: "Sunset is around 18:45, so you get about 13½ hours of daylight." },
    { value: "05:30–18:30", label: "Kruger gate hours", note: "Entrance gates, November to February." },
    { value: "~28 °C", label: "Average high", note: "Nights around 17 °C. Inside Kruger at Skukuza it is often 33 °C or more." },
    { value: "~85–95 mm", label: "December rain", note: "One of the wettest months, mostly in short afternoon storms." },
  ];
  return (
    <figure className="not-prose mx-auto mt-10 max-w-5xl px-5 lg:px-8">
      <div className="rounded-2xl bg-forest-deep p-6 text-bone md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-bone/70">
          Infographic · Christmas in Hazyview
        </p>
        <h3 className="mt-2 font-display text-2xl md:text-3xl">
          December in Hazyview, at a glance
        </h3>
        <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="border-t border-bone/20 pt-4">
              <dt className="text-xs uppercase tracking-[0.18em] text-bone/65">
                {f.label}
              </dt>
              <dd className="mt-2 font-display text-3xl text-ochre">{f.value}</dd>
              <dd className="mt-2 text-sm leading-relaxed text-bone/80">{f.note}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          {[
            ["Wed 16 Dec", "Day of Reconciliation"],
            ["Fri 25 Dec", "Christmas Day"],
            ["Sat 26 Dec", "Day of Goodwill"],
          ].map(([d, n]) => (
            <span key={d} className="rounded-full bg-bone/10 px-4 py-2">
              <strong className="font-medium text-bone">{d}</strong>{" "}
              <span className="text-bone/70">· {n}</span>
            </span>
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Climate figures are long-run averages; gate hours from SANParks; the
        public holidays shown are for 2026.
      </figcaption>
    </figure>
  );
}

// --- Infographic 2: the shape of a December day --------------------
function DecemberDay() {
  // 04:00 → 20:00 = 16 hours across the bar.
  const pct = (h: number) => `${((h - 4) / 16) * 100}%`;
  const bands = [
    { from: 5.5, to: 9.5, label: "Out and about", tone: "bg-forest" },
    { from: 9.5, to: 11.5, label: "Heading home", tone: "bg-forest/60" },
    { from: 11.5, to: 15, label: "Hottest hours: pool and shade", tone: "bg-ochre" },
    { from: 15, to: 18, label: "Storms are likely", tone: "bg-ink/70" },
    { from: 18, to: 20, label: "Braai", tone: "bg-rust" },
  ];
  const marks = [
    // Sunrise and the gate opening are 25 minutes apart, too close to share
    // a row, so sunrise sits above the bar and the gate times below it.
    { h: 5.08, t: "05:05", n: "sunrise", above: true },
    { h: 5.5, t: "05:30", n: "gates open", above: false },
    { h: 18.5, t: "18:30", n: "gates close", above: false },
  ];
  const markRow = (above: boolean) => (
    <div className={`relative h-10 text-xs text-ink/70 ${above ? "mb-2" : "mt-2"}`}>
      {marks
        .filter((m) => m.above === above)
        .map((m) => (
          <span
            key={m.t}
            className="absolute -translate-x-1/2 whitespace-nowrap text-center"
            style={{ left: pct(m.h) }}
          >
            {above ? (
              <>
                {m.n}
                <strong className="block font-medium text-ink">{m.t}</strong>
              </>
            ) : (
              <>
                <strong className="block font-medium text-ink">{m.t}</strong>
                {m.n}
              </>
            )}
          </span>
        ))}
    </div>
  );
  return (
    <figure className="not-prose mx-auto mt-10 max-w-5xl px-5 lg:px-8">
      <div className="rounded-2xl border border-black/10 bg-bone p-6 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
          Infographic · A Lowveld summer day
        </p>
        <h3 className="mt-2 font-display text-2xl text-forest-deep md:text-3xl">
          How we plan a December day
        </h3>
        <div className="mt-8">{markRow(true)}</div>
        <div className="relative h-12 overflow-hidden rounded-full bg-sand">
          {bands.map((b) => (
            <div
              key={b.label}
              className={`absolute top-0 h-full ${b.tone}`}
              style={{ left: pct(b.from), width: `calc(${pct(b.to)} - ${pct(b.from)})` }}
              title={b.label}
            />
          ))}
        </div>
        {markRow(false)}
        <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-5">
          {bands.map((b) => {
            const fmt = (h: number) =>
              `${String(Math.floor(h)).padStart(2, "0")}:${h % 1 ? "30" : "00"}`;
            return (
              <li key={b.label} className="flex items-start gap-2">
                <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ${b.tone}`} />
                <span>
                  <strong className="block font-medium text-ink">
                    {fmt(b.from)}–{fmt(b.to)}
                  </strong>
                  <span className="text-ink/75">{b.label}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        A typical day, not a timetable. Some days stay clear, and on others the
        storm comes early.
      </figcaption>
    </figure>
  );
}

// --- Infographic 3: drive times from the farm ----------------------
function DriveTimes() {
  const max = 95;
  const stops = [
    { name: "Kruger Mpumalanga International Airport", min: site.distances.kmiaMinutes, max: site.distances.kmiaMinutes },
    { name: "Phabeni Gate, Kruger", min: site.distances.krugerGateMinutesMin, max: site.distances.krugerGateMinutesMax },
    { name: "Start of the Panorama Route", min: 35, max: 40 },
    { name: "God's Window & Graskop Gorge Lift", min: 45, max: 60 },
    { name: "Three Rondavels, Blyde River Canyon", min: 85, max: 90 },
  ];
  return (
    <figure className="not-prose mx-auto mt-10 max-w-5xl px-5 lg:px-8">
      <div className="rounded-2xl border border-black/10 bg-bone p-6 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
          Infographic · Drive times from Kanaan Guest Farm
        </p>
        <h3 className="mt-2 font-display text-2xl text-forest-deep md:text-3xl">
          Everything in this guide is one drive from the farm
        </h3>
        <ul className="mt-8 space-y-5">
          {stops.map((s) => (
            <li key={s.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm">
                <span className="font-medium text-ink">{s.name}</span>
                <span className="text-ink/70">
                  {s.min === s.max ? `${s.min} min` : `${s.min}–${s.max} min`}
                </span>
              </div>
              <div className="relative mt-2 h-3 rounded-full bg-sand">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-forest"
                  style={{ width: `${(s.min / max) * 100}%` }}
                />
                <div
                  className="absolute inset-y-0 rounded-full bg-ochre/70"
                  style={{
                    left: `${(s.min / max) * 100}%`,
                    width: `${((s.max - s.min) / max) * 100}%`,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Approximate one-way driving times from our gate. Holiday traffic on
        the R40 and the mountain passes can add a little.
      </figcaption>
    </figure>
  );
}

// --- Infographic 4: the five-day itinerary -------------------------
function Itinerary() {
  const days = [
    { d: "Day 1", t: "Arrive", am: "Drive in, check in", pm: "Pool, a walk round the farm", eve: "First braai" },
    { d: "Day 2", t: "Kruger", am: "Leave at 05:00 for Phabeni Gate", pm: "Home for lunch, swim", eve: "Early night" },
    { d: "Day 3", t: "Panorama Route", am: "God's Window first, before the mist", pm: "Lisbon Falls, lunch in Graskop", eve: "Supper on the stoep" },
    { d: "Day 4", t: "Hazyview", am: "Reptile park or a canopy zip-line", pm: "Farm waterfall, rock pool", eve: "A restaurant night" },
    { d: "Day 5", t: "Christmas", am: "A slow breakfast and gifts", pm: "Pool, nap, cricket on the lawn", eve: "Christmas braai" },
  ];
  return (
    <figure className="not-prose mx-auto mt-10 max-w-5xl px-5 lg:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
        Infographic · 5-day Hazyview Christmas itinerary
      </p>
      <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {days.map((x, i) => (
          <li
            key={x.d}
            className={`rounded-2xl p-5 ${i === 4 ? "bg-rust text-bone" : "bg-sand text-ink"}`}
          >
            <p className={`text-xs uppercase tracking-[0.18em] ${i === 4 ? "text-bone/75" : "text-muted"}`}>
              {x.d}
            </p>
            <h3 className="mt-1 font-display text-xl">{x.t}</h3>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Morning", x.am],
                ["Afternoon", x.pm],
                ["Evening", x.eve],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className={`text-[0.7rem] uppercase tracking-[0.16em] ${i === 4 ? "text-bone/65" : "text-ink/55"}`}>
                    {k}
                  </dt>
                  <dd className="leading-snug">{v}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Swap days 2 to 4 around to suit the weather. Only Kruger needs a fixed
        booking.
      </figcaption>
    </figure>
  );
}

// --- Infographic 5: the packing checklist --------------------------
function PackingList() {
  const groups = [
    { h: "For the sun", items: ["Light, loose clothes", "Wide-brimmed hats", "High-factor sunscreen", "A refillable water bottle each"] },
    { h: "For the storms", items: ["A light rain jacket", "Shoes that can get wet", "A warm layer for 05:00 starts", "Insect repellent for the evenings"] },
    { h: "For Kruger and the pool", items: ["Binoculars, one pair each if you can", "Snacks and a cooler box", "Swimming costumes and towels", "A camera, with the battery charged"] },
  ];
  return (
    <figure className="not-prose mx-auto mt-10 max-w-5xl px-5 lg:px-8">
      <div className="rounded-2xl border border-black/10 bg-bone p-6 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
          Infographic · What to pack for Hazyview in December
        </p>
        <h3 className="mt-2 font-display text-2xl text-forest-deep md:text-3xl">
          The December packing list
        </h3>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.h}>
              <h4 className="font-display text-lg text-ochre-deep">{g.h}</h4>
              <ul className="mt-3 space-y-2 text-sm text-ink/85">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-block h-4 w-4 shrink-0 rounded border border-forest/50" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

function Photo({
  image,
  caption,
}: {
  image: { src: string; alt: string };
  caption: string;
}) {
  return (
    <figure className="mx-auto max-w-5xl px-5 lg:px-8">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

const h3 = "mt-8 mb-2 font-display text-xl text-forest-deep md:text-2xl";

export default function HazyviewChristmasFamilyVacationPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical guide to a Christmas family vacation in Hazyview from the family who run Kanaan Guest Farm: December weather, Kruger's festive-season day-visitor quotas, the Panorama Route, a five-day itinerary, a packing list and where to stay.",
          path: `/blog/${slug}`,
          image: img.hazyviewChristmasKrugerDawn.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.hazyviewChristmasKrugerDawn.src}
          alt={img.hazyviewChristmasKrugerDawn.alt}
          eyebrow="Guide · Christmas in Hazyview"
          title={headline}
          titleSize="compact"
          intro="Christmas in the Lowveld means 28 degrees, a zebra foal on the road at sunrise and a thunderstorm at three o'clock. This is how we would plan the week for a family."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={7}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <TLDR
              items={[
                "December in Hazyview is hot, green and stormy. Go out early, and keep the afternoons for the pool.",
                "Kruger is open on Christmas Day, but day visitors are capped at each gate over the festive season. Pre-book a gate time slot.",
                "Plan four or five nights: one Kruger morning, one Panorama Route day, one Hazyview outing and slow days between them.",
                `Kanaan is ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from Phabeni Gate, from R${site.pricing.fromZAR} per person sharing for stays of two nights or more. December books up first.`,
              ]}
            />
            <p>
              At five on a December morning the farm is already light, the
              bush is wet from last night&rsquo;s storm, and Phabeni Gate opens
              in half an hour. By three in the afternoon it&rsquo;s 28 degrees
              and the thunder is rolling in over the escarpment. A{" "}
              <strong>Hazyview Christmas family vacation</strong> means
              Christmas outdoors, and it works best when you plan around the
              Lowveld summer rather than against it.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Why spend Christmas in Hazyview?</H2>
            <p>
              Because December is when the Lowveld is at its most alive. The
              bush is green, the waterfalls are full, and the impala and zebra
              in Kruger have young at foot. Hazyview sits between Kruger&rsquo;s
              southern gates and the escarpment, so you can do the safari and
              the Panorama Route from one bed without packing up
              mid-holiday. Our{" "}
              <Link href="/blog/things-to-do-around-hazyview" className={link}>
                guide to things to do around Hazyview
              </Link>{" "}
              has the full list.
            </p>
            <p>
              It isn&rsquo;t a quiet Christmas, though. Schools close on 9
              December, and from the Day of Reconciliation to New Year this is
              the busiest stretch of our year. Restaurants fill, the R40 gets
              slower and Kruger&rsquo;s gates have queues. We would still
              come. You just need to book earlier than you think.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">What is Hazyview like during Christmas?</H2>
            <p>
              <strong>Hazyview&rsquo;s December weather</strong> is hot and
              humid. Days reach about 28&nbsp;°C, nights stay warm, and rain
              usually arrives as a heavy afternoon storm that clears by supper.
              The light comes early, a little after five, and the first four
              hours after sunrise are the best of the day for animals and for
              everyone&rsquo;s mood. Our{" "}
              <Link
                href="/blog/when-to-visit-kruger-hazyview-month-by-month"
                className={link}
              >
                month-by-month almanac
              </Link>{" "}
              has the whole year if you&rsquo;re still deciding.
            </p>
          </div>
          <DecemberAtAGlance />
          <DecemberDay />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Top things to do on a Hazyview family Christmas vacation
            </H2>

            <h3 className={h3}>1. A family safari in Kruger National Park</h3>
            <p>
              Phabeni Gate is about 12&nbsp;km from Hazyview town and{" "}
              {site.distances.krugerGateMinutesMin}–
              {site.distances.krugerGateMinutesMax} minutes from our gate.
              Leave at five, be through at 05:30, and do one two-to-three-hour
              loop with a stop at a picnic site. You&rsquo;re home by eleven
              before the heat sets in. Self-drive suits children because you
              can turn back as soon as they&rsquo;ve had enough; a guided open
              vehicle is the treat for older ones.{" "}
              <Link href="/blog/kruger-from-hazyview" className={link}>
                Our Kruger-from-Hazyview guide
              </Link>{" "}
              covers the gates and loops.
            </p>
          </div>
          <Callout eyebrow="The festive-season rule most families miss">
            Over the holidays SANParks caps day visitors at every gate and
            admits pre-booked cars first, in three arrival slots: 05:30–08:00,
            08:00–10:00 and 10:00 onwards. Book online, and arrive inside your
            slot.
          </Callout>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <p>
              Families staying with us count as day visitors, so this applies
              to you. Last season the booking fee was R59 per adult and R29
              per child, on top of the conservation fee. From 1 November 2026
              that fee is{" "}
              <a
                href="https://www.sanparks.org/parks/kruger/rates-entry-fees"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                R140 per South African adult and R70 per child per day
              </a>
              .
            </p>

            <h3 className={h3}>2. The Panorama Route</h3>
            <p>
              God&rsquo;s Window, Lisbon Falls, Bourke&rsquo;s Luck Potholes
              and the Graskop Gorge Lift are all short walks from a car park,
              which suits children well. In December the waterfalls run hard
              but the mist rolls in by midday, so do the viewpoints first and
              the falls after. Bourke&rsquo;s Luck and the gorge lift charge
              entry. The{" "}
              <Link href="/blog/panorama-route-from-hazyview" className={link}>
                Panorama Route guide
              </Link>{" "}
              has both loops.
            </p>
          </div>
        </Section>

        <Photo
          image={img.sabieWaterfallFullFlow}
          caption="A Panorama Route waterfall in full summer flow. December is when the escarpment falls are at their loudest."
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <h3 className={h3}>3. Hazyview&rsquo;s family attractions</h3>
            <p>
              Perry&rsquo;s Bridge Reptile Park is under cover, so it&rsquo;s
              our first suggestion when it rains. There&rsquo;s also a canopy
              zip-line through the forest, tubing on the Sabie River for older
              children, and cultural village visits nearby. Holiday hours
              change, so phone ahead. Our{" "}
              <Link
                href="/blog/things-to-do-with-kids-hazyview-kruger"
                className={link}
              >
                things to do in Hazyview with kids
              </Link>{" "}
              guide sorts them by age.
            </p>

            <h3 className={h3}>4. Waterfalls and nature</h3>
            <p>
              Around Sabie the falls are close together. Mac Mac Pools has
              picnic lawns and somewhere to paddle when the water is calm.
              After heavy rain, though, the rivers rise fast, so check
              conditions locally and keep children out of moving water.
            </p>

            <h3 className={h3}>5. Slowing down at Kanaan Guest Farm</h3>
            <p>
              This part of the holiday doesn&rsquo;t need a booking. The farm
              is fully fenced, so children can go between the pool, the play
              structure and the forty-year-old mango grove while you sit in
              the shade. There&rsquo;s a waterfall and rock pool on our own
              land, a short walk away. Most units have a kitchenette, and
              there&rsquo;s a braai for the evenings.
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { image: img.poolSecond, caption: "The pool and the play structure beside it, where most December afternoons on the farm end up." },
              { image: img.waterfall, caption: "And the waterfall on our own land, a short walk from the rooms." },
            ].map((p) => (
              <figure key={p.image.src}>
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    sizes="(min-width: 1024px) 512px, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-center text-xs text-muted">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">A 5-day Hazyview Christmas family itinerary</H2>
            <p>
              Here&rsquo;s the week we suggest to families who ask. It has one
              big outing a day, always in the morning, and nothing planned for
              Christmas itself. Arrive by the 21st and this lands neatly on
              the 25th.
            </p>
          </div>
          <Itinerary />
          <DriveTimes />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Christmas Day in Hazyview: how to plan your family day
            </H2>
            <p>
              If you want Kruger on Christmas morning, book the 05:30 slot,
              take a breakfast picnic and be back by eleven. Otherwise, leave
              the day empty. Have a long breakfast, open presents on the stoep,
              swim, and get the braai going once the afternoon storm has
              passed. If you want Christmas lunch at a restaurant, book it
              when you book your stay. Christmas Day is one of the busiest
              days of the year for restaurants here.
            </p>
          </div>
        </Section>

        <Photo
          image={img.hazyviewChristmasPicnic}
          caption="Christmas breakfast at a Kruger picnic site: mince pies, fruit and the coffee pot. A generated image of a Kruger picnic spot, not of the farm."
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              What to pack for a Christmas holiday in Hazyview
            </H2>
            <p>
              Pack for summer, with a warm layer for the early mornings, and
              bring a rain jacket even if the forecast looks clear.
            </p>
          </div>
          <PackingList />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              How many days do you need in Hazyview at Christmas?
            </H2>
            <p>
              Four nights is the minimum we&rsquo;d suggest; five is better.
              That gives you Kruger, the Panorama Route and a Hazyview day,
              plus room to swap plans when a storm settles over the escarpment.
              Three nights turns every day into a drive.
            </p>

            <H2 className="mt-12 mb-4">
              Tips for booking a Christmas family holiday in Hazyview
            </H2>
            <ul>
              <li>Book your accommodation by mid-year. December goes first.</li>
              <li>
                Book your Kruger gate slot as soon as SANParks opens
                festive-season bookings.
              </li>
              <li>
                Choose a base close to the gates. Every minute saved matters at
                five in the morning.
              </li>
              <li>
                Choose self-catering if you can. With a kitchen, the Christmas
                meal is yours.
              </li>
              <li>Keep one indoor option ready for a wet day.</li>
            </ul>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Why Kanaan Guest Farm is a convenient base for your Lowveld
              Christmas
            </H2>
            <p>
              We&rsquo;re on the R40 just outside Hazyview,{" "}
              {site.distances.krugerGateMinutesMin}–
              {site.distances.krugerGateMinutesMax} minutes from Phabeni Gate
              and about forty minutes from the start of the Panorama Route.
              Rooms are from R{site.pricing.fromZAR} per person sharing for
              stays of two nights or more, with self-catering family units and
              campsites under the mango trees. Honestly, we&rsquo;re a farm,
              not a resort: there&rsquo;s no kids&rsquo; club and no
              à la carte restaurant, though we can do set-menu breakfasts and
              dinners on request. What you get is space, a pool and a quiet evening
              after a big day. For larger family groups, see our{" "}
              <Link href="/group-functions/team-family" className={link}>
                family and group gatherings
              </Link>{" "}
              page.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              FAQs about a Christmas family vacation in Hazyview
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

        <Photo
          image={img.poolSunset}
          caption="Christmas evening on the farm: everyone still damp from the pool, and the braai lit."
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <ClosingBlock
              title="In closing: a Christmas planned around the weather"
              thesis="The families who love Christmas here plan around the Lowveld summer: out at dawn, home by the heat, and the storm watched from the stoep."
              body={
                <>
                  Send us your dates, how many of you there are and the
                  children&rsquo;s ages, and we&rsquo;ll tell you honestly
                  what&rsquo;s still free over Christmas and which unit
                  we&rsquo;d put you in.
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
                  label: "SANParks: Kruger entrance gates and opening times",
                  href: "https://www.sanparks.org/parks/kruger/travel/entrance-gates",
                },
                {
                  label:
                    "SANParks: access for day visitors during the festive season (quotas, slots, pre-booking)",
                  href: "https://www.sanparks.org/news/access-for-day-visitors-during-the-festive-season",
                },
                {
                  label:
                    "SANParks: Kruger rates and daily conservation fees, 1 Nov 2026 to 31 Oct 2027",
                  href: "https://www.sanparks.org/parks/kruger/rates-entry-fees",
                },
                {
                  label: "SAnews: Kruger day visitors reminded of gate quotas",
                  href: "https://www.sanews.gov.za/south-africa/kruger-national-park-day-visitors-reminded-gate-quotas",
                },
                {
                  label: "Climate-Data.org: long-run climate averages for the Lowveld",
                  href: "https://en.climate-data.org",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Planning Christmas in Hazyview? Ask us what's still free."
          body={`Send Anneli or Matthew your dates, how many of you there are and the children's ages. We'll reply ourselves with what's available over Christmas, from R${site.pricing.fromZAR} per person sharing for two nights or more.`}
          buttonLabel="Ask about Christmas on WhatsApp"
          pageKey="stay"
        />

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
                  Everything to do with children, sorted by age, and how to
                  pace a family week.
                </p>
              </Link>
              <Link
                href="/blog/family-accommodation-near-kruger-national-park"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Family safari
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Family accommodation near Kruger
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Why a farm works better than a hotel room when you&rsquo;re
                  travelling with children.
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
