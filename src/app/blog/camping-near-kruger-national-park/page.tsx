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
  StatGrid,
  NumberedList,
  ClosingBlock,
  WhatsAppCTA,
  BlogHero,
  Sources,
} from "@/components/blog/Blocks";

// ---------------------------------------------------------------------
// SEO focus (search-optimised Guide, brief supplied 2026-10-05):
//   • Focus keyword:  camping near Kruger National Park
//   • Secondary:      Lowveld camping · camping in the Lowveld · camping near
//                     Kruger · Hazyview camping · campsites near Kruger ·
//                     affordable camping near Kruger · family camping near
//                     Kruger · camping accommodation Hazyview
// H1 and tab title are the brief's topic line verbatim (standing marketing
// rule). Length: marketing asked for under 1,300 words on this one.
//
// The angle: Kruger's daily conservation fee is charged for every day you
// are in the park, so a camper based outside pays it only on drive days.
// Figures are the SANParks 1 Nov 2026 – 31 Oct 2027 fee sheet; the
// concession (Wild Card holders, every-day drivers) is stated plainly.
//
// Brief corrections: price is R275 pps for one night, R250 for 2+ nights
// (site.pricing, Anneli 2026-10-03), not a flat R250. The 30–45 minutes is
// to Phabeni; Numbi is the alternative, a little further.
//
// Width: marketing asked for the text to fill the space (2026-10-05), so
// this post reads at max-w-5xl, like the birthday post. Others stay narrow.
//
// Images: every frame of the farm is a real photograph (owner rule,
// 2026-09-03). The two generated frames show places we cannot photograph —
// a rest-camp campsite inside Kruger and a packing flat-lay — and are
// captioned as illustrations.
// ---------------------------------------------------------------------

const datePublished = "2026-10-17";
const headline =
  "Camping in the Lowveld: The Ultimate Guide to Camping Near Kruger National Park";

const gateMin = site.distances.krugerGateMinutesMin;
const gateMax = site.distances.krugerGateMinutesMax;
const rate = site.pricing.fromZAR;
const oneNight = site.pricing.singleNightZAR;

// SANParks daily conservation fees, 1 Nov 2026 – 31 Oct 2027, per adult per day.
const fee = { sa: 140, sadc: 296, intl: 692 };

const linkClass =
  "font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep";

const faqs = [
  {
    q: "Where is the best place to camp near Kruger National Park?",
    a: "For Kruger plus the Panorama Route, Hazyview: outside the southern gates, on the road to the escarpment, with shops and fuel in town. For a park-only trip, a SANParks rest camp such as Pretoriuskop or Skukuza.",
  },
  {
    q: "Do your campsites have power and water?",
    a: `All ${site.capacity.campsitePitches} pitches have their own plug point and tap, with hot showers a short walk away.`,
  },
  {
    q: "Can I camp with a rooftop tent, caravan or overland truck?",
    a: "Yes. Tell us what you're bringing and we'll point you to the right spot.",
  },
  {
    q: "Can I leave my campsite set up while I'm in Kruger?",
    a: "Yes. The farm is fenced with a motorised gate, so your camp stays put.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "camping-near-kruger-national-park",
  title: headline,
  description:
    "Planning a camping trip near Kruger National Park? Lowveld camping tips, what to pack, when to go, camping near vs inside Kruger, and why Hazyview makes an ideal base.",
  image: img.campingAvenueWide,
  datePublished,
  category: "guide",
});

// --- The infographic: near vs inside, plus drive times from our gate ---
const compareRows: { label: string; inside: string; near: string }[] = [
  {
    label: "Daily park fee",
    inside: "Every day you're in the park",
    near: "Only the days you drive in",
  },
  {
    label: "Dawn in the bush",
    inside: "You're already in",
    near: `${gateMin}–${gateMax} min to Phabeni gate`,
  },
  {
    label: "Shops & fuel",
    inside: "Camp shop basics",
    near: "Hazyview, a short drive",
  },
  {
    label: "Panorama Route",
    inside: "A long day out and back",
    near: "Graskop 45 min to an hour",
  },
];

const driveTimes: { place: string; minutes: number; label: string }[] = [
  { place: "Phabeni gate, Kruger", minutes: gateMax, label: `${gateMin}–${gateMax} min` },
  { place: "Kruger Mpumalanga airport", minutes: site.distances.kmiaMinutes, label: `${site.distances.kmiaMinutes} min` },
  { place: "Graskop & God's Window", minutes: 60, label: "45–60 min" },
  { place: "Three Rondavels", minutes: 90, label: "~90 min" },
];

function CampingAtAGlance() {
  return (
    <figure className="not-prose mx-auto mt-10 max-w-5xl px-5 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-bone">
        <div className="bg-forest-deep px-6 py-6 text-bone md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-bone/70">
            At a glance
          </p>
          <p className="mt-2 font-display text-2xl md:text-3xl">
            Camping near Kruger vs camping inside Kruger
          </p>
        </div>

        {/* Fee strip — the number that decides it for most people */}
        <div className="grid gap-px bg-black/10 sm:grid-cols-3">
          {[
            { who: "South African adult", amount: fee.sa },
            { who: "SADC adult", amount: fee.sadc },
            { who: "International adult", amount: fee.intl },
          ].map((f) => (
            <div key={f.who} className="bg-sand/60 px-6 py-5 md:px-8">
              <p className="font-display text-3xl text-forest-deep">
                R{f.amount}
              </p>
              <p className="mt-1 text-sm text-ink/80">
                {f.who}, per day in the park
              </p>
            </div>
          ))}
        </div>
        <p className="border-b border-black/10 px-6 py-3 text-xs text-muted md:px-8">
          SANParks conservation fees, 1 Nov 2026 to 31 Oct 2027.
        </p>

        {/* Comparison rows */}
        <div className="hidden grid-cols-[1fr_1.4fr_1.4fr] gap-4 px-6 pt-5 text-xs font-medium uppercase tracking-[0.18em] text-muted md:grid md:px-8">
          <span />
          <span>Inside Kruger</span>
          <span className="text-ochre-deep">Near Kruger, from Hazyview</span>
        </div>
        <dl className="divide-y divide-black/10 px-6 md:px-8">
          {compareRows.map((r) => (
            <div
              key={r.label}
              className="grid gap-2 py-4 md:grid-cols-[1fr_1.4fr_1.4fr] md:gap-4"
            >
              <dt className="font-display text-lg text-forest-deep">
                {r.label}
              </dt>
              <dd className="text-sm text-ink/80">
                <span className="mr-2 text-xs uppercase tracking-[0.15em] text-muted md:hidden">
                  Inside
                </span>
                {r.inside}
              </dd>
              <dd className="text-sm text-ink">
                <span className="mr-2 text-xs uppercase tracking-[0.15em] text-ochre-deep md:hidden">
                  Near
                </span>
                {r.near}
              </dd>
            </div>
          ))}
        </dl>

        {/* Drive-time strip */}
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
        Approximate drive times. Check fees and gate times with SANParks.
      </figcaption>
    </figure>
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
            "An honest guide to camping near Kruger National Park from the family who run Kanaan Guest Farm in Hazyview: camping near versus inside the park, what a good Lowveld campsite needs, when to go, what to pack and how many nights to plan.",
          path: "/blog/camping-near-kruger-national-park",
          image: img.campingAvenueWide.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.campingAvenueWide.src}
          alt={img.campingAvenueWide.alt}
          eyebrow="Guide · Camping"
          title={headline}
          titleSize="compact"
          intro="Where to pitch your tent for Kruger, and the one sum that decides between inside the park and just outside it."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={5}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <TLDR
              items={[
                "Camp inside Kruger and you pay the park fee every day. Camp just outside and you pay it only on the days you drive in.",
                "Hazyview sits between the southern gates and the Panorama Route, so one pitch covers both.",
                `At Kanaan: ${site.capacity.campsitePitches} shaded pitches with power and water, ${gateMin}–${gateMax} minutes from Phabeni gate. R${oneNight} per person sharing for one night, R${rate} for two or more.`,
              ]}
            />

            <p>
              Quarter to five, still dark, and the only sound under the mango
              trees is a kettle on a gas ring. An hour later you&rsquo;re at the
              Phabeni gate. By lunchtime you&rsquo;re back, the tent where you
              left it and the pool still cool.
            </p>
            <p>
              That is <strong>camping near Kruger National Park</strong>{" "}
              when
              it works. Here&rsquo;s how we&rsquo;d plan it, and when camping
              inside the park is the better call.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Camping near Kruger or inside it? The honest comparison.
            </H2>
            <p>
              Kruger&rsquo;s rest camps are lovely places to camp.
              Pretoriuskop and Skukuza, the nearest to us, have campsites booked
              through{" "}
              <a
                href="https://www.sanparks.org/parks/kruger"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                SANParks
              </a>
              . You wake up inside, and the night sounds are the park&rsquo;s.
            </p>
            <p>
              The difference is a sum. Kruger charges a conservation fee for
              every day you&rsquo;re in the park: from 1 November 2026, R{fee.sa} for a South African adult, R{fee.sadc} for
              SADC nationals and R{fee.intl} for everyone else (
              <a
                href="https://www.sanparks.org/wp-content/uploads/2026/02/daily_conservation_fees_2026_27.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                SANParks fee sheet
              </a>
              ). Camp inside and you pay it on the lazy day in camp too. Camp
              outside and two Kruger days cost an overseas couple R
              {(fee.intl * 4).toLocaleString("en-US")}, with
              each extra day adding R{(fee.intl * 2).toLocaleString("en-US")}.
            </p>
            <p>
              The flip side: SANParks{" "}
              <a
                href="https://www.sanparks.org/wild-card"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Wild Card
              </a>{" "}
              holders pay no daily fee, and if you&rsquo;ll be in the park
              every day, inside saves the drive. For those trips, camp inside.
            </p>
          </div>
          <CampingAtAGlance />
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Figure
            image={img.krugerRestCampCampsite}
            caption="Camping inside the park (an illustration, not a photograph)."
          />
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Why Hazyview is the practical base for Lowveld camping.
            </H2>
            <p>
              Hazyview sits on the R40 just outside the park&rsquo;s southern
              edge. Phabeni, the closest gate, is {gateMin}–{gateMax} minutes
              from our farm gate, with Numbi as the fallback on a busy morning.
              Gates open at 05:30 in summer and 06:00 in winter. Our{" "}
              <Link href="/blog/kruger-from-hazyview" className={linkClass}>
                guide to Kruger from Hazyview
              </Link>{" "}
              has the detail.
            </p>
            <p>
              Turn the other way for God&rsquo;s Window, the Three Rondavels
              and the Mac Mac, Lisbon and Berlin falls on the{" "}
              <Link href="/blog/panorama-route-from-hazyview" className={linkClass}>
                Panorama Route
              </Link>
              . Town has the supermarkets and fuel the park doesn&rsquo;t. One
              pitch, the whole trip, and no packing up on day three.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              What to look for in a campsite near Kruger.
            </H2>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Real shade",
                body: "Lowveld summer afternoons are hot. Shade decides whether you rest at camp or hide in the car.",
              },
              {
                title: "Power and water at the pitch",
                body: "For the fridge, batteries and kettle, without long leads or walks to a shared tap.",
              },
              {
                title: "Hot, clean ablutions",
                body: "Hot showers, basins and private toilet cubicles.",
              },
              {
                title: "A fence and a gate",
                body: "So you can leave the tent standing and drive into Kruger for the day.",
              },
              {
                title: "Room for your rig",
                body: "Ground tent, rooftop tent, caravan or overlander. Say what you're bringing.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Camping at Kanaan Guest Farm: what you actually get.
            </H2>
            <p>
              We have {site.capacity.campsitePitches} pitches under
              forty-year-old mango trees, each with its own power point and
              tap. The timber ablution block has hot showers, basins and private
              toilet cubicles.
            </p>
            <p>
              Evenings end at the communal fire. Bring wood to braai, or ask
              the day before for a continental breakfast (R
              {site.meals.breakfast.pricePerPersonZAR} a person) or a braai
              dinner. The pool and the walking and mountain-biking trails from
              our gate are yours too. We&rsquo;re not set up for pets.
            </p>
            <p>
              Camping is R{oneNight} per person sharing for one night, R{rate} a
              night for two or more. More photos are on our{" "}
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
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">The best time for camping in the Lowveld.</H2>
            <p>
              <strong>Dry season, May to September.</strong> Mild days, cold
              nights, and thinner bush, so animals are easier to see. Pack a
              warm sleeping bag.
            </p>
            <p>
              <strong>Green season, October to April.</strong> Hot and green,
              with afternoon storms, full waterfalls and the migrant birds back.
              Over the festive season Kruger caps day visitors at each gate, so
              book your day entry online. See our{" "}
              <Link
                href="/blog/when-to-visit-kruger-hazyview-month-by-month"
                className={linkClass}
              >
                month-by-month guide
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              What to pack, and first-trip tips.
            </H2>
            <p>
              Beyond the tent and sleeping bags: a head torch, binoculars, a
              hat, sunscreen, insect repellent, a cooler box, an outdoor
              extension lead, a rain jacket in summer and a warm layer for the
              dark drive to the gate.
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Figure
            image={img.krugerCampingKitFlatlay}
            caption="The kit that makes the trip (an illustration, not a photograph)."
          />
        </div>

        <Section>
          <NumberedList
            items={[
              {
                title: "Arrive before dark",
                body: `Check-in runs ${site.policies.checkIn}. Phone us from the gate.`,
              },
              {
                title: "Be at the gate when it opens",
                body: "The first two hours are the coolest and the best for animals.",
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
            <H2 className="mb-4">How many nights should you camp near Kruger?</H2>
          </div>
          <StatGrid
            stats={[
              {
                value: "2 nights",
                label: "A taster",
                body: "One dawn drive. Tight, but it works.",
              },
              {
                value: "3–4 nights",
                label: "The sweet spot",
                body: "Two Kruger mornings and a Panorama Route day.",
              },
              {
                value: "5+ nights",
                label: "Families & overlanders",
                body: "Room for a rest day on the farm.",
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
              title="In closing: pitch once, see both"
              thesis="The best Kruger camping trip isn't the one closest to the animals. It's the one where you pay for the park only on the days you're in it."
              body={
                <>
                  Send us your dates and what you&rsquo;re sleeping in, and
                  we&rsquo;ll reply personally.
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
                    "SANParks: daily conservation fees, 1 November 2026 to 31 October 2027",
                  href: "https://www.sanparks.org/wp-content/uploads/2026/02/daily_conservation_fees_2026_27.pdf",
                },
                {
                  label: "SANParks: Kruger National Park gates, rest camps and campsites",
                  href: "https://www.sanparks.org/parks/kruger",
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
          title="Planning a Kruger camping trip? Pick your pitch."
          body={`A shaded pitch in Hazyview, your base for Kruger and the Panorama Route. R${oneNight} pps for one night, R${rate} for two or more.`}
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
