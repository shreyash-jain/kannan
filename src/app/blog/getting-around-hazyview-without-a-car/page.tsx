import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { img } from "@/lib/images";
import { articleLd, faqLd } from "@/lib/jsonld";
import { createBlogPostMetadata } from "@/lib/blog";
import { site, whatsappAbout } from "@/lib/site";
import { pro } from "@/data/proPhotos";
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
// SEO focus (search-optimised Guide, marketing brief 2026-11-03):
//   • Focus keyword:  Hazyview accommodation without a car
//   • Secondary:      getting around Hazyview without a car · Hazyview
//                     shuttle services · Hazyview airport transfers ·
//                     places to stay in Hazyview · accommodation near
//                     Kruger National Park · Kruger National Park
//                     transfers · Hazyview taxi services
//   • Intent:         informational + commercial investigation
//
// The angle: the whole car-free WEEK (airport, bed, Kruger, Panorama,
// home), ending in a stay enquiry. Siblings it must not repeat:
//   /blog/cab-in-hazyview — how to book a cab, fares, the 50 km radius
//   /transfers            — the Kanaan Transfers landing page
// This post links to both rather than re-explaining the booking flow.
//
// Marketing asked for a human-written post with infographics. The three
// infographics (the week, the five options, the three ways into Kruger)
// are built in code, not images, so every figure matches the body.
// H1 and tab title are the brief's topic line verbatim (standing rule).
//
// Verified 2026-11-03:
//   SANParks conservation fees 1 Nov 2026 – 31 Oct 2027: Kruger R692
//     international adult, R140 SA adult (SANParks rate card PDF)
//   SANParks game drives: morning drives leave half an hour before gate
//     opening, 3–3½ h, from camp OR entrance gate; sunset ~3 h, back
//     after dark; no under-6s (sanparks.org game-drives page)
//   Entrance gates open 05:30 Oct–Mar, 06:00 Apr–Sep (krugerpark.co.za)
//   No ride-hailing in Hazyview / Kruger (South Africa Spirit)
//   KMIA lists six shuttle operators (kmiairport.co.za, not named here)
//   Airlink Gqeberha–Mbombela from 16 Nov 2026 (Travelnews, 25 Aug 2026)
//   Transfers, distances and room rates come from site.ts.
// The safari package price (R2,427 in PackageConfigurator) is built on
// the OLD R602 fee, so it is deliberately not quoted here.
// ---------------------------------------------------------------------

const slug = "getting-around-hazyview-without-a-car";
const datePublished = "2026-11-03";
const headline =
  "No Uber in the Lowveld? How to Get Around Hazyview Without Your Own Car";

const t = site.transfers;
const kmiaMin = site.distances.kmiaMinutes;
const gateMins = `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax}`;

// Real farm photography (portrait frames, shown at 4:5).
const farmGate = pro(6071); // the signed entrance gate on the R40
const farmViewpoint = pro(5694); // braai stand at the lookout, valley beyond

const link =
  "font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep";
const h3 = "mt-8 mb-2 font-display text-xl text-forest-deep md:text-2xl";

const faqs = [
  {
    q: "Is Uber available in Hazyview?",
    a: "Not reliably. Uber and Bolt work in the cities, but Hazyview has no driver network, so the app just keeps searching. Visitors book local car services on WhatsApp instead.",
  },
  {
    q: "How do tourists travel around Hazyview?",
    a: "Mostly by pre-booked lift: a local car service for short trips, an airport transfer at each end, and guided tours for Kruger and the Panorama Route.",
  },
  {
    q: "Can I visit Kruger without a rental car?",
    a: "Yes. Book a guided open-vehicle drive, either a SANParks drive from the gate or a full-day safari through your accommodation. A taxi can drop you at the gate, but it can't take you on a game drive.",
  },
  {
    q: "Where should I stay in Hazyview without a car?",
    a: `Near Kruger's southern gates, with hosts who arrange your lifts and a kitchen or meals on site. We're biased, but Kanaan is ${gateMins} minutes from two gates and runs its own transfers.`,
  },
  {
    q: "Can I book airport transfers to Hazyview?",
    a: `Yes. Kruger Mpumalanga International is about ${t.kmiaKm} km from Hazyview, roughly ${kmiaMin} minutes. Book before you fly and send your flight number; we arrange ours on WhatsApp.`,
  },
];

export const metadata = createBlogPostMetadata({
  slug,
  title: headline,
  description:
    "No Uber in Hazyview? How to plan a Lowveld trip without a car: airport transfers, guided Kruger drives, local taxis, and Hazyview accommodation that sorts the lifts for you.",
  image: img.carFreeHazyviewHero,
  datePublished,
  category: "guide",
});

// --- Infographic 1: a car-free week, door to door ---------------------
type Stop = { place: string; note: string; home?: boolean };

const carFreeWeek: Stop[] = [
  { place: "Land at KMIA", note: "Flights from Johannesburg and Cape Town" },
  {
    place: "Kanaan, Hazyview",
    note: `${t.kmiaKm} km, about ${kmiaMin} min, by arranged lift`,
    home: true,
  },
  {
    place: "Kruger",
    note: `A guided drive, or a lift to Phabeni or Numbi (${gateMins} min)`,
  },
  {
    place: "Panorama Route",
    note: "God's Window, 45–60 min. A guided day, or a driver",
  },
  { place: "Back to KMIA", note: "Book this lift the day you arrive" },
];

function CarFreeWeekInfographic() {
  return (
    <figure className="not-prose mx-auto my-12 w-full max-w-5xl px-5 lg:px-0">
      <div className="rounded-3xl bg-forest p-6 text-bone md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ochre">
          A car-free week · door to door
        </p>
        <div className="mt-3 flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <p className="font-display text-4xl md:text-5xl">One bed</p>
          <p className="font-display text-2xl text-bone/80 md:text-3xl">
            four lifts
          </p>
          <p className="font-display text-2xl text-bone/80 md:text-3xl">
            no hire car
          </p>
        </div>
        <ol className="relative mt-8 grid gap-6 md:grid-cols-5 md:gap-4">
          <span
            aria-hidden
            className="absolute left-[0.6rem] top-2 bottom-2 w-0.5 bg-ochre/50 md:left-0 md:right-0 md:top-[0.6rem] md:bottom-auto md:h-0.5 md:w-auto"
          />
          {carFreeWeek.map((s) => (
            <li key={s.place} className="relative pl-9 md:pl-0 md:pt-9">
              <span
                aria-hidden
                className={`absolute left-0 top-0 h-5 w-5 rounded-full border-4 border-forest ${
                  s.home ? "bg-bone" : "bg-ochre"
                }`}
              />
              <p className="font-display text-lg leading-snug">{s.place}</p>
              <p className="mt-1 text-sm text-bone/75">{s.note}</p>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Drive times are approximate, from our gate. Airlink adds Gqeberha
        flights from 16 November 2026.
      </figcaption>
    </figure>
  );
}

// --- Infographic 2: the five options, compared -----------------------
const options = [
  {
    name: "Local taxi service",
    best: "Town, restaurants, activity meeting points",
    book: `On WhatsApp, fare quoted first. From R${t.fromZAR}`,
    know: `Ours seats ${t.seats}. Book dawn trips a day ahead.`,
  },
  {
    name: "Private transfers and shuttles",
    best: "Longer runs and bigger groups",
    book: "Directly with the operator",
    know: "The airport lists several on its website.",
  },
  {
    name: "Guided Kruger safaris",
    best: "The park itself",
    book: "SANParks online, or through us",
    know: "The only way to game-drive Kruger without a car.",
  },
  {
    name: "Airport transfers",
    best: "Arriving and leaving",
    book: "Before you fly, with your flight number",
    know: `KMIA is ${t.kmiaKm} km away, just past our ${t.radiusKm} km radius.`,
  },
  {
    name: "Organised sightseeing tours",
    best: "The Panorama Route and evenings out",
    book: "Through your host",
    know: "We book Panorama days and the Shangana cultural evening.",
  },
];

const optionCols = "md:grid-cols-[1.1fr_1fr_1fr_1.2fr]";

function OptionCell({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ochre md:hidden">
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-ink/85 md:mt-0">
        {children}
      </p>
    </div>
  );
}

function OptionsInfographic() {
  return (
    <figure className="not-prose mx-auto my-12 w-full max-w-5xl px-5 lg:px-0">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ochre">
        Five ways to get around Hazyview · compared
      </p>
      <div className="overflow-hidden rounded-3xl border border-black/5 bg-bone">
        <div
          className={`hidden gap-6 bg-forest px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-bone/80 md:grid ${optionCols}`}
        >
          <span>Option</span>
          <span>Best for</span>
          <span>How to book</span>
          <span>Worth knowing</span>
        </div>
        <ol className="divide-y divide-black/5">
          {options.map((o, i) => (
            <li
              key={o.name}
              className={`grid gap-3 px-6 py-6 md:gap-6 md:px-7 ${optionCols}`}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl leading-none text-ochre">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg leading-snug text-forest-deep">
                  {o.name}
                </h3>
              </div>
              <OptionCell label="Best for">{o.best}</OptionCell>
              <OptionCell label="How to book">{o.book}</OptionCell>
              <OptionCell label="Worth knowing">{o.know}</OptionCell>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}

// --- Infographic 3: three ways into Kruger without a car -------------
const krugerWays = [
  {
    name: "Sunrise drive",
    who: "SANParks, from the gate",
    rows: [
      ["Leaves", "Half an hour before the gate opens"],
      ["Lasts", "3 to 3½ hours"],
      ["Your lift", "To the gate in the dark, home by mid-morning"],
    ],
  },
  {
    name: "Sunset drive",
    who: "SANParks, from the gate",
    rows: [
      ["Leaves", "Before dusk"],
      ["Lasts", "About 3 hours"],
      ["Your lift", "Home after dark, when the drive ends"],
    ],
  },
  {
    name: "Full-day safari",
    who: "Booked through us",
    rows: [
      ["Leaves", "Early, arranged with us"],
      ["Lasts", "All day: early start, late finish"],
      ["Your lift", "Part of the booking. Park entry included"],
    ],
  },
];

function KrugerWaysInfographic() {
  return (
    <figure className="not-prose mx-auto my-12 w-full max-w-5xl px-5 lg:px-0">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ochre">
        Three ways into Kruger · no car needed
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {krugerWays.map((w, i) => (
          <article
            key={w.name}
            className={`rounded-2xl p-6 md:p-7 ${
              i === 2 ? "border border-ochre/40 bg-bone" : "bg-sand/70"
            }`}
          >
            <h3 className="font-display text-2xl text-forest-deep">{w.name}</h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-ochre">
              {w.who}
            </p>
            <dl className="mt-5 space-y-3">
              {w.rows.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                    {k}
                  </dt>
                  <dd className="mt-0.5 text-sm leading-relaxed text-ink/85">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-forest px-6 py-5 text-bone md:flex-row md:items-center md:justify-between md:px-7">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-ochre">
          Kruger day fee from 1 Nov 2026
        </p>
        <p className="font-display text-lg md:text-xl">
          R692 international adult · R140 South African adult
        </p>
        <p className="text-sm text-bone/75">Per person, per day</p>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Children under 6 can&rsquo;t join SANParks drives.
      </figcaption>
    </figure>
  );
}

export default function GettingAroundHazyviewWithoutACarPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "How to plan a Hazyview and Kruger trip without your own car, from the family who run Kanaan Guest Farm: why Uber doesn't work here, the five transport options that do, three ways into Kruger without a car, and what to look for in Hazyview accommodation when you aren't driving.",
          path: `/blog/${slug}`,
          image: img.carFreeHazyviewHero.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.carFreeHazyviewHero.src}
          alt={img.carFreeHazyviewHero.alt}
          eyebrow="Guide · Getting around"
          title={headline}
          titleSize="compact"
          intro="There's no Uber here, and you don't need one. How to plan a Lowveld week around lifts, guided drives and the right place to sleep."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={6}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <TLDR
              items={[
                "Uber and Bolt don't work in Hazyview. Book your lifts before you land.",
                `The airport is ${t.kmiaKm} km away, about ${kmiaMin} minutes. Book that transfer with your flight.`,
                "Inside Kruger you need a guided drive. A taxi can take you to the gate, not through it.",
                "Choose accommodation that arranges your lifts and has a kitchen, so evenings don't need a car.",
              ]}
            />
            <p>
              {`It's ${t.kmiaKm} km from Kruger Mpumalanga International Airport to Hazyview, most of it on the R40, and no ride-hailing app will drive it for you.`}{" "}
              That surprises people. It shouldn&rsquo;t put them off.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Planning a Hazyview Trip Without Renting a Car?</H2>
            <p>
              You can do a whole Lowveld week without touching a steering
              wheel, and plenty of people do. Some would rather not learn to
              drive on the left, after dark, with people and animals on the
              verges. Others came on holiday to look out of the window. Both
              are good reasons.
            </p>
            <p>
              What catches people out is how rural it is. Hazyview is a small
              town with no taxi rank for visitors, and{" "}
              <a
                href="https://www.southafrica-spirit.com/guides/uber-and-ride-share-rsa/"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                Uber and Bolt don&rsquo;t operate here
              </a>
              . Open the app and it just keeps searching.
            </p>
            <p>
              So plan before you land. Book the airport lift with your flight
              and the Kruger morning with your room, and the rest of the week
              is easy.
            </p>
          </div>
          <CarFreeWeekInfographic />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">5 Best Transport Options for Exploring Hazyview</H2>
            <p>
              The short version: a lift for anything outside the park, a guide
              for anything inside it.
            </p>
          </div>
          <OptionsInfographic />
          <div className="prose-kanaan mx-auto max-w-5xl">
            <p>
              The catch: you pay per trip, and you plan ahead. If there are
              five of you and you want to self-drive Kruger every morning,
              hire the car. Our vehicle seats four, and the trips add up. For
              a couple or a small family, car-free works well, and nobody
              draws the short straw to drive home after supper. Fares are on
              our{" "}
              <Link href="/transfers" className={link}>
                Hazyview transfers page
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              How to Visit Kruger National Park from Hazyview Without a Car
            </H2>
            <p>
              It&rsquo;s simpler than it sounds. A taxi can take you to the
              gate, but not on a game drive: inside the park you need your own
              car or a guided open vehicle. Book the drive first and fit the
              lift around it.
            </p>
            <h3 className={h3}>Getting to Phabeni and Numbi Gates</h3>
            <p>
              {`Phabeni is about 12 km from town, and Phabeni and Numbi are both ${gateMins} minutes from our farm.`}{" "}
              Gates open at{" "}
              <a
                href="https://www.krugerpark.co.za/Kruger_Park_Travel_Advisory-travel/kruger-park-gate-times.html"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                05:30 from October to March and 06:00 from April to September
              </a>
              , and the first hour is the best one.
            </p>
            <h3 className={h3}>Guided safari options</h3>
            <p>
              SANParks runs{" "}
              <a
                href="https://www.sanparks.org/parks/kruger/what-to-do/activities/game-drives"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                open-vehicle drives
              </a>{" "}
              from its camps and entrance gates, and we can book you a
              full-day guided safari.
            </p>
          </div>
          <KrugerWaysInfographic />
          <div className="prose-kanaan mx-auto max-w-5xl">
            <h3 className={h3}>Planning return transfers</h3>
            <p>
              The one people get wrong is the sunset drive. It ends after
              dark, so book your lift for when the drive ends, not when the
              gate closes. Coming in December? SANParks has{" "}
              <a
                href="https://www.sanparks.org/news/access-for-day-visitors-at-kruger-national-park-during-the-festive-season"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                capped day visitors at the gates
              </a>{" "}
              over recent festive seasons, so book early, whoever is driving.
              More in our{" "}
              <Link href="/blog/kruger-from-hazyview" className={link}>
                Kruger from Hazyview guide
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* Real photographs from the professional shoot (marketing, 2026-11-03:
            "remove this, add original pics" — replaced an AI drive frame). */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { photo: farmGate, caption: "Our gate on the R40, where your lift drops you." },
              { photo: farmViewpoint, caption: "Back from a sunrise drive, with the whole day ahead." },
            ].map(({ photo, caption }) => (
              <figure key={photo.id}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 512px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-center text-xs text-muted">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Where to Stay in Hazyview Without a Rental Car</H2>
            <p>
              Choosing Hazyview accommodation without a car is really choosing
              how your week goes. Here&rsquo;s what we&rsquo;d look for,
              wherever you book.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Hosts who arrange the lifts",
                body: "One message for the airport, the gate and the Panorama Route beats five bookings with five strangers.",
              },
              {
                title: "Close to the southern gates",
                body: "Every extra kilometre to the gate is one you pay for, there and back.",
              },
              {
                title: "A kitchen, or meals on site",
                body: "Supper can't be a quick drive into town. A kitchenette or a set dinner solves it.",
              },
              {
                title: "Somewhere to be in the afternoon",
                body: "After a dawn drive you'll want a pool or a shady lawn, not four walls.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-5xl">
            <p>
              Be wary of anywhere that promises &ldquo;easy access to
              Kruger&rdquo; and stops there. Ask how you&rsquo;ll reach the
              gate at five in the morning. If the answer is &ldquo;you&rsquo;ll
              need a car&rdquo;, that&rsquo;s your answer.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Why Choose Kanaan Guest Farm for Your Hazyview Stay?</H2>
            <p>
              We can&rsquo;t pretend to be objective. But we did build our
              transport around exactly this guest.
            </p>
            <h3 className={h3}>Comfortable accommodation</h3>
            <p>
              Self-catering lodge rooms that sleep two to seven, twin rooms,
              backpacker beds in the wooden house, and campsites under
              forty-year-old mango trees.{" "}
              <Link href="/stay" className={link}>
                See the rooms
              </Link>
              .
            </p>
            <h3 className={h3}>A convenient base for the Lowveld</h3>
            <p>
              {`We're on the R40, ${kmiaMin} minutes from the airport, ten minutes from the shops at Perry's Bridge and ${gateMins} minutes from Phabeni and Numbi.`}
            </p>
            <h3 className={h3}>Local transfer assistance</h3>
            <p>
              {`Kanaan Transfers is our own car service: airport pickups, gate runs and town trips from R${t.fromZAR}, with the fare agreed on WhatsApp first. More in our`}{" "}
              <Link href="/blog/cab-in-hazyview" className={link}>
                guide to getting a cab in Hazyview
              </Link>
              .
            </p>
            <h3 className={h3}>Help planning your Hazyview week</h3>
            <p>
              Anneli or Matthew will help you plan the week. Our{" "}
              <Link href="/packages" className={link}>
                packages
              </Link>{" "}
              bundle the room, a full-day Kruger safari with park entry, an
              optional Panorama Route day and the airport transfer: one
              conversation, whole trip.
            </p>
            <Callout eyebrow="What a room costs">
              {`R${site.pricing.fromZAR} a night per person sharing when you stay two nights or more. R${site.pricing.singleNightZAR} for a single night.`}
            </Callout>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
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
                Supper that doesn&rsquo;t need a lift.
              </figcaption>
            </figure>
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
                Where the afternoon goes after a dawn drive.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section className="pb-10!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Frequently Asked Questions</H2>
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
            <H2 className="mb-4">Book Your Hazyview Stay Without the Transport Stress</H2>
            <ClosingBlock
              title="Before you book the flight"
              thesis="Choose the bed first, and let the people who live here sort the lifts."
              body={
                <>
                  Send us your dates and flight times, and we&rsquo;ll take it
                  from there.
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
                    "SANParks — conservation fees, 1 November 2026 to 31 October 2027 (PDF)",
                  href: "https://www.sanparks.org/wp-content/uploads/2026/02/daily_conservation_fees_2026_27.pdf",
                },
                {
                  label: "SANParks — Kruger game drives: morning, sunset and all-day",
                  href: "https://www.sanparks.org/parks/kruger/what-to-do/activities/game-drives",
                },
                {
                  label: "SANParks — day-visitor access during the festive season",
                  href: "https://www.sanparks.org/news/access-for-day-visitors-at-kruger-national-park-during-the-festive-season",
                },
                {
                  label: "Krugerpark.co.za — entrance gate opening times",
                  href: "https://www.krugerpark.co.za/Kruger_Park_Travel_Advisory-travel/kruger-park-gate-times.html",
                },
                {
                  label: "Kruger Mpumalanga International Airport — shuttle operators",
                  href: "https://www.kmiairport.co.za/shuttle-service-options/",
                },
                {
                  label: "South Africa Spirit — where Uber and Bolt operate in South Africa",
                  href: "https://www.southafrica-spirit.com/guides/uber-and-ride-share-rsa/",
                },
                {
                  label: "Travelnews — Airlink connects Gqeberha and Mbombela",
                  href: "https://www.travelnews.co.za/article/airlink-connects-gqeberha-and-mbombela",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Planning a Hazyview trip without a car?"
          body={`Send us your dates and your flight. We'll reply personally with what's free and sort the airport lift with the room. From R${site.pricing.fromZAR} per person sharing for two nights or more.`}
          buttonLabel="Ask about a room and a lift"
          href={whatsappAbout("a stay and an airport transfer")}
        />

        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/cab-in-hazyview"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Getting around
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Need a cab in Hazyview?
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  How a local cab works, what the fare depends on, and how to
                  book one in minutes.
                </p>
              </Link>
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
            </div>
          </div>
        </Section>

        <CTA />
      </article>
    </>
  );
}
