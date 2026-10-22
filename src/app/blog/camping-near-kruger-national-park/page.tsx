import type { Metadata } from "next";
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
  NumberedList,
  ClosingBlock,
  WhatsAppCTA,
  BlogHero,
  Sources,
} from "@/components/blog/Blocks";

// ---------------------------------------------------------------------
// SEO focus (search-optimised Guide):
//   • Focus keyword:  camping near Kruger National Park
//   • Secondary:      camping inside vs outside Kruger · Kruger camping
//                     prices · Hazyview camping · Lowveld camping ·
//                     campsites near Kruger · affordable camping near Kruger
// H1 and tab title are the brief's topic line verbatim (standing marketing
// rule).
//
// Revision 2026-10-22 (marketing): the whole post is now camping INSIDE
// Kruger vs camping just OUTSIDE it, with a worked cost example.
//   • Kruger campsites are priced per site (two people) on top of the
//     per-person daily conservation fee. SANParks quotes accommodation on
//     request only, so site rates come from krugerpark.co.za's 2026/27
//     tables: Pretoriuskop R411 (1 Nov–8 Dec 2026) to R536, Skukuza R423 to
//     R551. Conservation fees are the SANParks 1 Nov 2026–31 Oct 2027 sheet.
//   • Inside, the fee is counted for each of the three nights in the park
//     (SANParks: payable for every day/night stayed). That is the low
//     reading, so the saving shown is, if anything, understated.
//   • Our camping rate is per pitch: site.pricing.campingTwoZAR /
//     campingSoloZAR. The R275/R250 pps rate is for rooms.
//   • No claim that we are the cheapest campsite near Hazyview — there are
//     cheaper caravan parks. We position on value.
//
// Width: marketing asked for the text to fill the space (2026-10-05), so
// this post reads at max-w-5xl, like the birthday post. Others stay narrow.
//
// Images: real farm photographs only. We have no real photograph from
// inside Kruger, so the two AI frames from the first draft were removed.
// ---------------------------------------------------------------------

const datePublished = "2026-10-17";
const headline =
  "Camping in the Lowveld: The Ultimate Guide to Camping Near Kruger National Park";

const gateMin = site.distances.krugerGateMinutesMin;
const gateMax = site.distances.krugerGateMinutesMax;
const campTwo = site.pricing.campingTwoZAR;
const campSolo = site.pricing.campingSoloZAR;
const roomOne = site.pricing.singleNightZAR;
const roomTwoPlus = site.pricing.fromZAR;

// SANParks daily conservation fees, 1 Nov 2026 – 31 Oct 2027, per adult per day.
const fee = { sa: 140, sadc: 296, intl: 692 };
// Kruger campsite, per site per night for two (krugerpark.co.za, 2026/27).
const site_ = { pkLow: 411, pkHigh: 536, skLow: 423, skHigh: 551 };

// The worked example: a couple, 3 nights, 2 days in Kruger.
const nights = 3;
const krugerDays = 2;
const insideSite = site_.pkLow * nights;
const ourPitch = campTwo * nights;
function scenario(perAdult: number) {
  const insideFees = perAdult * 2 * nights;
  const outsideFees = perAdult * 2 * krugerDays;
  const inside = insideSite + insideFees;
  const outside = ourPitch + outsideFees;
  return { insideFees, outsideFees, inside, outside, saving: inside - outside };
}
const sa = scenario(fee.sa);
const intl = scenario(fee.intl);
const r = (n: number) => `R${n.toLocaleString("en-US")}`;

const linkClass =
  "font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep";

const faqs = [
  {
    q: "Is camping included in the Kruger entry fee?",
    a: `No. Inside Kruger you pay for the campsite (about ${r(site_.pkLow)} to ${r(site_.skHigh)} a night for two, depending on camp and season) and, separately, the daily conservation fee per person for every day you're in the park.`,
  },
  {
    q: "Can I do Kruger and the Panorama Route from one campsite?",
    a: `Yes, that's the main reason to base yourself in Hazyview. Phabeni gate is ${gateMin}–${gateMax} minutes one way, and Graskop and God's Window about 45 minutes to an hour the other. You pitch once and don't pack up mid-trip.`,
  },
  {
    q: "How much is camping at Kanaan?",
    a: `${r(campTwo)} a night for two people sharing a pitch, or ${r(campSolo)} a night on your own. Ask us about pensioner and long-stay discounts.`,
  },
  {
    q: "Can I leave my camp set up while I'm in Kruger?",
    a: "Yes. The farm is fenced with a motorised gate, so your tent and chairs stay put while you're on a game drive.",
  },
];

const baseMetadata = createBlogPostMetadata({
  slug: "camping-near-kruger-national-park",
  title: headline,
  description: `Camping inside Kruger or just outside it? What each gives you: day trips beyond the park, evenings in Hazyview, rest days on a farm, and what it all costs, with a worked example. Camping at Kanaan from ${r(campSolo)} a night.`,
  image: img.campingAvenueWide,
  datePublished,
  category: "guide",
});

export const metadata: Metadata = {
  ...baseMetadata,
  // This page's own keywords, replacing the site-wide set (which carries
  // wedding and backpacker terms that don't belong on a camping post).
  keywords: [
    "camping near Kruger National Park",
    "camping inside vs outside Kruger",
    "Kruger camping prices",
    "Kruger campsite rates",
    "Hazyview camping",
    "Lowveld camping",
    "campsites near Kruger",
    "affordable camping near Kruger",
  ],
  authors: [{ name: "Matthew" }],
  openGraph: {
    ...baseMetadata.openGraph,
    type: "article",
    authors: ["Matthew"],
  } as Metadata["openGraph"],
};

// --- Infographic: inside vs outside at a glance, plus drive times ------
const compareRows: { label: string; inside: string; near: string }[] = [
  {
    label: "Dawn in the bush",
    inside: "You're already in",
    near: `${gateMin}–${gateMax} min to Phabeni gate`,
  },
  {
    label: "Day trips",
    inside: "Kruger only, realistically",
    near: "Panorama Route, Graskop, Sabie",
  },
  {
    label: "Evenings",
    inside: "Camp gates close at dusk",
    near: "Out to dinner in Hazyview if you like",
  },
  {
    label: "Shops & fuel",
    inside: "Camp shop basics",
    near: "Hazyview, a short drive",
  },
  {
    label: "Booking",
    inside: "Popular camps fill months ahead",
    near: "Usually easier at short notice",
  },
  {
    label: "Signal",
    inside: "Patchy in places",
    near: "Free WiFi on the farm",
  },
  {
    label: "Cost",
    inside: `Site ${r(site_.pkLow)}–${r(site_.skHigh)} for two, plus park fee every day`,
    near: `Pitch ${r(campTwo)} for two, park fee only on Kruger days`,
  },
];

const driveTimes: { place: string; minutes: number; label: string }[] = [
  { place: "Phabeni gate, Kruger", minutes: gateMax, label: `${gateMin}–${gateMax} min` },
  { place: "Kruger Mpumalanga airport", minutes: site.distances.kmiaMinutes, label: `${site.distances.kmiaMinutes} min` },
  { place: "Graskop & God's Window", minutes: 60, label: "45–60 min" },
  { place: "Three Rondavels", minutes: 90, label: "~90 min" },
];

function InsideVsOutside() {
  return (
    <figure className="not-prose mx-auto mt-10 max-w-5xl px-5 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-bone">
        <div className="bg-forest-deep px-6 py-6 text-bone md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-bone/70">
            At a glance
          </p>
          <p className="mt-2 font-display text-2xl md:text-3xl">
            Camping inside Kruger vs just outside it
          </p>
        </div>

        <div className="hidden grid-cols-[1fr_1.4fr_1.4fr] gap-4 px-6 pt-5 text-xs font-medium uppercase tracking-[0.18em] text-muted md:grid md:px-8">
          <span />
          <span>Inside Kruger</span>
          <span className="text-ochre-deep">Just outside, from Hazyview</span>
        </div>
        <dl className="divide-y divide-black/10 px-6 md:px-8">
          {compareRows.map((row) => (
            <div
              key={row.label}
              className="grid gap-2 py-4 md:grid-cols-[1fr_1.4fr_1.4fr] md:gap-4"
            >
              <dt className="font-display text-lg text-forest-deep">
                {row.label}
              </dt>
              <dd className="text-sm text-ink/80">
                <span className="mr-2 text-xs uppercase tracking-[0.15em] text-muted md:hidden">
                  Inside
                </span>
                {row.inside}
              </dd>
              <dd className="text-sm text-ink">
                <span className="mr-2 text-xs uppercase tracking-[0.15em] text-ochre-deep md:hidden">
                  Outside
                </span>
                {row.near}
              </dd>
            </div>
          ))}
        </dl>

        <div className="border-t border-black/10 bg-white/50 px-6 py-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Drive times from our gate
          </p>
          <ul className="mt-4 space-y-3">
            {driveTimes.map((d) => (
              <li
                key={d.place}
                className="grid gap-1.5 sm:grid-cols-[13rem_1fr] sm:items-center sm:gap-3"
              >
                <span className="text-sm text-ink">{d.place}</span>
                <span className="flex items-center gap-3">
                  <span className="flex-1">
                    <span
                      className="block h-2.5 rounded-full bg-ochre"
                      style={{ width: `${(d.minutes / 90) * 100}%` }}
                    />
                  </span>
                  <span className="w-20 shrink-0 text-sm font-medium text-forest-deep">
                    {d.label}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Kruger campsite rates are 2026/27 guide prices for Pretoriuskop and
        Skukuza; the cost section below has the full sum. Drive times are
        approximate.
      </figcaption>
    </figure>
  );
}

// --- The worked example, as a two-column cost table --------------------
function CostExample() {
  const cols = [
    { title: "South African couple", s: sa, per: fee.sa },
    { title: "International couple", s: intl, per: fee.intl },
  ];
  return (
    <div className="not-prose mx-auto mt-10 max-w-5xl px-5 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2">
        {cols.map(({ title, s, per }) => (
          <div
            key={title}
            className="overflow-hidden rounded-2xl border border-black/10 bg-bone"
          >
            <p className="bg-forest-deep px-6 py-4 font-display text-xl text-bone">
              {title}
            </p>
            <div className="divide-y divide-black/10 px-6 text-sm">
              <div className="py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Inside Kruger (Pretoriuskop)
                </p>
                <p className="mt-2 flex justify-between text-ink/85">
                  <span>Campsite, {nights} × {r(site_.pkLow)}</span>
                  <span>{r(insideSite)}</span>
                </p>
                <p className="mt-1 flex justify-between text-ink/85">
                  <span>
                    Park fees, 2 adults × {nights} days × {r(per)}
                  </span>
                  <span>{r(s.insideFees)}</span>
                </p>
                <p className="mt-2 flex justify-between font-medium text-forest-deep">
                  <span>Total</span>
                  <span>{r(s.inside)}</span>
                </p>
              </div>
              <div className="py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-ochre-deep">
                  Just outside, at Kanaan
                </p>
                <p className="mt-2 flex justify-between text-ink/85">
                  <span>Pitch for two, {nights} × {r(campTwo)}</span>
                  <span>{r(ourPitch)}</span>
                </p>
                <p className="mt-1 flex justify-between text-ink/85">
                  <span>
                    Park fees, 2 adults × {krugerDays} days × {r(per)}
                  </span>
                  <span>{r(s.outsideFees)}</span>
                </p>
                <p className="mt-2 flex justify-between font-medium text-forest-deep">
                  <span>Total</span>
                  <span>{r(s.outside)}</span>
                </p>
              </div>
            </div>
            <p className="flex justify-between bg-sand/60 px-6 py-4 font-display text-2xl text-forest-deep">
              <span>You save</span>
              <span>{r(s.saving)}</span>
            </p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-muted">
        Pretoriuskop&rsquo;s rate from 1 November 2026; over the festive
        season it is {r(site_.pkHigh)} a night. Fuel for the drive to the gate
        is not included.
      </p>
    </div>
  );
}

function Figure({
  image,
  caption,
}: {
  image: { src: string; alt: string };
  caption: string;
}) {
  return (
    <figure>
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 512px, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function CampingNearKrugerPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "Camping inside Kruger National Park versus camping just outside it in Hazyview: what each gives you, day trips beyond the park, Kruger campsite rates on top of the daily conservation fee with a worked cost example, and what camping at Kanaan Guest Farm includes.",
          path: "/blog/camping-near-kruger-national-park",
          image: img.campingAvenueWide.src,
          datePublished,
          authors: ["Matthew"],
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.campingAvenueWide.src}
          alt={img.campingAvenueWide.alt}
          eyebrow="Guide · Camping inside vs outside Kruger"
          title={headline}
          titleSize="compact"
          intro="Inside the park, or just outside on its doorstep? What each gives you, what each costs, and how to choose."
          byline="Matthew"
          datePublished={datePublished}
          readingMinutes={6}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <TLDR
              items={[
                "Camping inside Kruger puts you in the park at dawn and dusk. Camping just outside gives you Kruger plus the rest of the Lowveld from one pitch.",
                `Outside, you pay park fees only on the days you drive in. A couple doing ${nights} nights with ${krugerDays} Kruger days saves about ${r(sa.saving)} (South Africans) or ${r(intl.saving)} (international guests).`,
                `At Kanaan, camping is ${r(campTwo)} a night for two or ${r(campSolo)} on your own, ${gateMin}–${gateMax} minutes from Phabeni gate.`,
              ]}
            />

            <p>
              Quarter to five, still dark, and the only sound under the mango
              trees is a kettle on a gas ring. An hour later you&rsquo;re at
              the Phabeni gate. By lunchtime you&rsquo;re back, the tent where
              you left it and the pool still cool. Tomorrow it&rsquo;s the
              waterfalls.
            </p>
            <p>
              Anyone planning{" "}
              <strong>camping near Kruger National Park</strong> ends up with
              the same question: inside the park, or just outside on its
              doorstep? Cost is the biggest difference, but it isn&rsquo;t the
              only one.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Inside Kruger or on its doorstep?</H2>
            <p>
              Kruger&rsquo;s rest camps are lovely places to camp, and the
              nearest to us, Pretoriuskop and Skukuza, both have campsites. You
              wake up inside the park, you&rsquo;re on the road as soon as the
              camp gate opens, and the night sounds beyond the fence are the
              park&rsquo;s own. If Kruger is the whole trip, that&rsquo;s hard
              to beat.
            </p>
            <p>
              Camping just outside is a different kind of trip. Kruger is one
              part of it, alongside the escarpment, the waterfalls, a town with
              everything you need, and afternoons that aren&rsquo;t spent in a
              car. Here&rsquo;s how the two compare.
            </p>
          </div>
          <InsideVsOutside />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Why camp just outside Kruger.</H2>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "It usually costs less",
                body: "You pay park fees only on the days you go in. The sum is below.",
              },
              {
                title: "Day trips beyond Kruger",
                body: "God's Window, Graskop and the Sabie waterfalls make a full day out, and you come back to the same pitch.",
              },
              {
                title: "Hazyview on the doorstep",
                body: "Supermarkets, fuel, restaurants and a pharmacy a short drive away, not a camp shop.",
              },
              {
                title: "Evenings are your own",
                body: "Kruger's camp gates close at dusk. From here you can drive into town for dinner, or stay by the fire.",
              },
              {
                title: "Rest days that feel like holiday",
                body: "A swim, a walk or a ride on the farm trails, a braai under the mangoes. No park fees, no car.",
              },
              {
                title: "Easier to book, easier to reach",
                body: "Popular Kruger camps fill months ahead in the holidays. Phone signal is patchy in the park; we have free WiFi.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">And what it costs: inside vs outside.</H2>
            <p>
              Camping inside Kruger isn&rsquo;t included in the park fee. You
              pay twice. First the campsite: a site for two at Pretoriuskop is{" "}
              {r(site_.pkLow)} a night from 1 November 2026, rising to{" "}
              {r(site_.pkHigh)} over the festive season, and Skukuza runs from{" "}
              {r(site_.skLow)} to {r(site_.skHigh)} (
              <a
                href="https://www.krugerpark.co.za/Kruger_National_Park_Lodging_&_Camping_Guide-travel/pricing_pretoriuskop-camp.html"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                2026/27 rates
              </a>
              ; SANParks{" "}
              <a
                href="https://www.sanparks.org/parks/kruger/rates-entry-fees"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                quotes on request
              </a>
              ). Then the daily conservation fee, per person, for every day
              you&rsquo;re in the park: R{fee.sa} for a South African adult,
              R{fee.sadc} for SADC nationals and R{fee.intl} for international
              visitors (
              <a
                href="https://www.sanparks.org/wp-content/uploads/2026/02/daily_conservation_fees_2026_27.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                SANParks fee sheet
              </a>
              ).
            </p>
            <p>
              Take a couple camping for {nights} nights who spend {krugerDays}{" "}
              of those days on game drives:
            </p>
          </div>
          <CostExample />
          <div className="prose-kanaan mx-auto mt-8 max-w-5xl">
            <p>
              The gap is far bigger for international guests, because their
              daily fee is almost five times the South African one. Two honest
              caveats. Holders of a SANParks{" "}
              <a
                href="https://www.sanparks.org/wild-card"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Wild Card
              </a>{" "}
              pay no daily fee, so for them it comes down to site versus pitch.
              And if you want to be in the park every single day, waking up
              inside saves you the drive. For those trips, camp inside.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Camping at Kanaan: what you get, and what it costs.
            </H2>
            <p>
              We have {site.capacity.campsitePitches} pitches under
              forty-year-old mango trees, each with its own power point and
              tap. The timber ablution block has hot showers, basins and
              private toilet cubicles. Evenings end at the communal fire. The
              pool and the walking and mountain-biking trails from our gate
              are yours too, and so are we: you&rsquo;ll be welcomed by Anneli
              or Matthew, not a reception desk. Breakfast is{" "}
              {r(site.meals.breakfast.pricePerPersonZAR)} a person if you ask
              the day before.
            </p>
            <p>
              <strong>
                Camping is {r(campTwo)} a night for two people sharing a pitch,
                or {r(campSolo)} a night on your own.
              </strong>{" "}
              Ask us about pensioner and long-stay discounts. Prefer a room?
              Rooms are {r(roomOne)} per person for a single night and{" "}
              {r(roomTwoPlus)} per person a night for two nights or more, so{" "}
              {r(roomOne * 2)} or {r(roomTwoPlus * 2)} a night for a couple.
            </p>
            <p>
              We&rsquo;re not the only campsite around Hazyview, and some cost
              less. What we&rsquo;d point to is value: real shade, power and
              water at every pitch, the pool, the trails and personal hosting.
              More photos are on our{" "}
              <Link href="/camping" className={linkClass}>
                camping page
              </Link>
              .
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <Figure
              image={img.campingPowerWater}
              caption="Power and a tap at every pitch."
            />
            <Figure
              image={img.campingAblutions}
              caption="The timber ablution block, a short walk from the trees."
            />
            <Figure
              image={img.campingTents}
              caption="Tents under the mango grove, left standing while their owners are in Kruger."
            />
            <Figure
              image={img.poolReal}
              caption="The pool, for the afternoon after a dawn drive."
            />
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Before you go.</H2>
            <p>
              Phabeni, the closest gate, is {gateMin}–{gateMax} minutes from
              our farm gate, with Numbi as the fallback. Gates open at 05:30 in
              summer and 06:00 in winter. Our{" "}
              <Link href="/blog/kruger-from-hazyview" className={linkClass}>
                guide to Kruger from Hazyview
              </Link>{" "}
              has the loops, and our{" "}
              <Link
                href="/blog/panorama-route-from-hazyview"
                className={linkClass}
              >
                Panorama Route guide
              </Link>{" "}
              covers the day trips.
            </p>
          </div>
          <NumberedList
            items={[
              {
                title: "Arrive before dark",
                body: `Check-in runs ${site.policies.checkIn}. Phone us from the gate.`,
              },
              {
                title: "Book your Kruger day entry in the festive season",
                body: "Kruger caps day visitors at each gate over the holidays.",
              },
              {
                title: "Lock food away in the park",
                body: "Kruger's monkeys and baboons know what a cooler box is.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Questions about camping near Kruger National Park.
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

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Figure
            image={img.campfire}
            caption="Where most camping evenings at Kanaan end up."
          />
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <ClosingBlock
              title="In closing: Kruger, and everything around it"
              thesis="Camping inside Kruger is wonderful if the park is the whole trip. Camp on its doorstep and you get Kruger, the escarpment and evenings of your own, and it usually costs less."
              body={
                <>
                  Send us your dates and what you&rsquo;re sleeping in, and
                  we&rsquo;ll reply personally.
                </>
              }
            />
            <p className="font-display text-base italic text-forest-deep">
              — Matthew
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <Sources
              items={[
                {
                  label:
                    "SANParks: daily conservation fees, 1 November 2026 to 31 October 2027",
                  href: "https://www.sanparks.org/wp-content/uploads/2026/02/daily_conservation_fees_2026_27.pdf",
                },
                {
                  label: "SANParks: Kruger rates and entry fees",
                  href: "https://www.sanparks.org/parks/kruger/rates-entry-fees",
                },
                {
                  label: "Kruger Park: Pretoriuskop campsite rates 2026/27",
                  href: "https://www.krugerpark.co.za/Kruger_National_Park_Lodging_&_Camping_Guide-travel/pricing_pretoriuskop-camp.html",
                },
                {
                  label: "Kruger Park: Skukuza campsite rates 2026/27",
                  href: "https://www.krugerpark.co.za/Kruger_National_Park_Lodging_&_Camping_Guide-travel/pricing_skukuza-camp.html",
                },
                {
                  label: "SANParks: Wild Card",
                  href: "https://www.sanparks.org/wild-card",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Camping near Kruger? Pick your pitch."
          body={`A shaded pitch in Hazyview, ${gateMin}–${gateMax} minutes from Phabeni gate. ${r(campTwo)} a night for two, ${r(campSolo)} on your own.`}
          buttonLabel="Book a pitch on WhatsApp"
          pageKey="camping"
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
                  Which gate to use, and the half-day plan.
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
                  God&rsquo;s Window and the waterfalls, half-day or full.
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
