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
// SEO focus for this Guide (the short, skimmable shortlist):
//   • Focus keyword (1):  things to do in Hazyview
//   • Secondary:          Kanaan Guest Farm · Hazyview attractions ·
//                         activities in Hazyview · places to visit in Hazyview ·
//                         things to do near Kruger National Park ·
//                         Hazyview tourist attractions
//   • Long-tail:          best things to do in Hazyview South Africa ·
//                         things to do near Kruger National Park besides safari ·
//                         best places to visit near Hazyview ·
//                         activities near Hazyview for families ·
//                         where to stay in Hazyview
//
// NOTE ON CANNIBALISATION: /blog/things-to-do-around-hazyview is the deep
// ~11-minute hub for this topic. This post is deliberately the SHORT
// first-timer's shortlist (7 picks, ~7 min) and links UP to that hub twice as
// the detailed version, so the hub keeps the authority. Do not let this page
// grow into a second full activities guide.
//
// KEEP IT TIGHT: this was trimmed twice for repetition. The Kanaan pitch
// belongs in exactly three places — the StatGrid section near the top, item 7,
// and the ClosingBlock. Do not re-add a fourth "why stay with us" section, and
// do not restate the distances outside the StatGrid and the stay FAQ.
//
// FAQ IS CAPPED AT 4 (owner call). The four kept are the ones that each own a
// distinct long-tail from the brief and are NOT already answered by the body:
// best-things-to-do, besides-safari, for-families, where-to-stay. Dropped:
// how-far (the StatGrid answers it — the figure now rides in the stay answer),
// how-many-days, booking-ahead, and best-time-of-year (that keyword belongs to
// /blog/when-to-visit-kruger-hazyview-month-by-month — do not compete with it).
//
// Link budget (per brief): 5 contextual INTERNAL links —
//   /blog/kruger-from-hazyview · /blog/panorama-route-from-hazyview ·
//   /blog/things-to-do-around-hazyview · /blog/things-to-do-with-kids-hazyview-kruger ·
//   /stay
// and 5 contextual EXTERNAL links (5 distinct authority domains) —
//   sanparks.org · sa-venues.com · mpumalanga.com · blydecanyon.co.za ·
//   graskopgorgeliftcompany.co.za — each repeated in the Sources block.
// ---------------------------------------------------------------------

const datePublished = "2026-07-27";
const headline =
  "7 best things to do in Hazyview: the shortlist, from a guest farm on its doorstep";

const faqs = [
  {
    q: "What are the best things to do in Hazyview?",
    a: "Seven stand out: a day in Kruger National Park through the Phabeni gate, the Panorama Route along the escarpment, God's Window, Bourke's Luck Potholes, the waterfalls around Sabie, hiking and mountain biking in the hills, and a slow afternoon on a farm doing nothing at all. All seven are day trips from a single base.",
  },
  {
    q: "What is there to do near Kruger National Park besides a safari?",
    a: "Rather a lot, which surprises most first-time visitors. The Panorama Route is a full day of viewpoints, waterfalls and canyon scenery about forty minutes up the escarpment, and Sabie's waterfall cluster makes a gentle half-day. Closer in there are canopy zip-lines, quad biking and river rafting for teenagers, wildlife sanctuaries for a slower morning, and the craft-and-restaurant villages at Perry's Bridge and Casterbridge.",
  },
  {
    q: "What are the best places to visit near Hazyview for families?",
    a: "The Graskop Gorge Lift is the family winner — a glass lift into a rainforest, with boardwalks and swing bridges on the gorge floor. Mac Mac Pools near Sabie are a safe, shallow swim, and Perry's Bridge Reptile Park is undercover for a rainy day. A self-drive Kruger morning works better with children than people expect, provided you go early and come home before the heat.",
  },
  {
    q: "Where should we stay in Hazyview?",
    a: `Somewhere close to the Phabeni gate, with a kitchen and space to breathe. We are a family-run guest farm just outside town, from R${site.pricing.fromZAR} per person sharing per night, with self-catering lodge rooms, twin rooms, a backpacker dorm and shaded camping under a forty-year-old mango grove. The Phabeni gate is ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes away, so every attraction on this list is a day trip from the same bed.`,
  },
];

export const metadata = createBlogPostMetadata({
  slug: "things-to-do-in-hazyview",
  title:
    "7 best things to do in Hazyview: explore the area from Kanaan Guest Farm",
  description:
    "The seven best things to do in Hazyview, South Africa — Kruger National Park, the Panorama Route, God's Window, Bourke's Luck Potholes, the Sabie waterfalls, hiking and mountain biking, and a slow farm afternoon. All within easy reach of Kanaan Guest Farm, from R250 per person sharing, 30–45 minutes from the Kruger gate.",
  image: img.hazyviewThingsToDoHero,
  datePublished,
  category: "guide",
});

export default function ThingsToDoInHazyviewPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A short, honest shortlist of the seven best things to do in Hazyview, Mpumalanga, written by the family who run a guest farm just outside town: a Kruger National Park safari through the Phabeni gate, the Panorama Route, God's Window, Bourke's Luck Potholes, the Sabie waterfall cluster, hiking and mountain biking in the Lowveld hills, and the farm-stay afternoon that most itineraries forget to leave room for. Every one of them a day trip from a single base at Kanaan Guest Farm.",
          path: "/blog/things-to-do-in-hazyview",
          image: img.hazyviewThingsToDoHero.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.hazyviewThingsToDoHero.src}
          alt={img.hazyviewThingsToDoHero.alt}
          eyebrow="Guide · Things to do in Hazyview"
          title="Seven of the best things to do in Hazyview."
          intro="Hazyview is known as the gateway to Kruger, but there is a great deal more to this corner of Mpumalanga than a game drive. Waterfalls, a thousand-metre cliff view, forest trails and a farm to come home to — here are the seven we would actually send you to, all of them an easy day from our gate."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={7}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "Kruger's Phabeni gate is 30–45 minutes away — the closest gate to Hazyview, and the reason an early start is actually possible.",
                "The Panorama Route runs along the escarpment about forty minutes up the hill: viewpoints, waterfalls and canyon scenery, most of it for pocket money.",
                "God's Window and Bourke's Luck Potholes are the two stops nobody regrets — and Wonder View, a minute past God's Window, is free and quieter.",
                "The Sabie waterfall cluster is the gentle day: short forest walks, cool water, and home by mid-afternoon.",
                "Hiking and mountain biking start on the farm itself — the free, underrated half of the week.",
                "The seventh is doing nothing at all, and we mean it. Leave one afternoon empty.",
              ]}
            />

            <p>
              Guests arrive planning a safari and discover, somewhere around day
              two, that a rainforest gorge, a kilometre-deep cliff view and a
              waterfall you can swim under are all within an hour of the same
              farm gate. Nobody gets through the lot in one visit &mdash; which
              is rather the point. So here are the seven we would put on a
              first-timer&rsquo;s list, in the order we would do them. For the
              whole menu, including sanctuaries, zip-lines, rafting and a
              five-day plan, we have written that up properly in our{" "}
              <Link
                href="/blog/things-to-do-around-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                complete Hazyview activities guide
              </Link>
              . This page is the shortlist.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Why base yourself at Kanaan Guest Farm?</H2>
            <p>
              The whole case for staying here is the driving times. Three
              completely different days out, in three different directions, all
              from one bed.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: "30–45 min",
                label: "To Kruger (Phabeni gate)",
                body: "The closest gate to Hazyview. Leave in the dark, be first through the boom, and be back for a late breakfast.",
              },
              {
                value: "~40 min",
                label: "To the Panorama Route",
                body: "Up the escarpment for God's Window, Bourke's Luck Potholes, the waterfalls and the Graskop Gorge Lift.",
              },
              {
                value: "~45 min",
                label: "To Sabie & the falls",
                body: "A misty forestry town ringed by waterfalls, most of them a short, flat walk from the car.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">1. Kruger National Park</H2>
            <p>
              No list of things to do near Kruger National Park is complete
              without the park itself. Most of our guests self-drive: an
              ordinary car copes perfectly well, the roads are good, and you pay
              the daily conservation fee at the boom &mdash; roughly R134 per
              person for South African residents and R602 for international
              visitors in 2026, though{" "}
              <a
                href="https://www.sanparks.org/parks/kruger/rates-entry-fees"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                SANParks publishes the current rates here
              </a>{" "}
              and reviews them annually. If it is your first safari, one guided
              sunrise drive early in the week teaches you to read the bush, and
              you self-drive the rest with your eye in. Which gate to use and
              the half-day loop that gets you home for lunch are both in our{" "}
              <Link
                href="/blog/kruger-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Kruger-from-Hazyview guide
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* Inline image — a Kruger waterhole, thirty minutes from the gate */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.krugerWinterWaterhole.src}
                alt={img.krugerWinterWaterhole.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              A dry-season waterhole in southern Kruger &mdash; thirty-odd
              minutes from the farm gate.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">2. The Panorama Route</H2>
            <p>
              If Kruger is the headline, the Panorama Route is the surprise: a
              scenic drive along the top of the escarpment through some of the
              most dramatic landscape in South Africa, strung with viewpoints
              and waterfalls that mostly cost pocket money at a gate. It pairs
              perfectly with a rest day between safari mornings &mdash;
              different scenery, no 4:45am alarm. It helps to have{" "}
              <a
                href="https://www.sa-venues.com/maps/mpumalanga-panorama-route.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                a route map open beside you
              </a>
              , because the turnoffs come up fast and are easy to miss. Our{" "}
              <Link
                href="/blog/panorama-route-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Panorama Route guide
              </Link>{" "}
              sets out both the half-day and full-day loops.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">3. God&rsquo;s Window</H2>
            <p>
              One of the most photographed viewpoints in the country, and worth
              the queue: the escarpment drops close to a kilometre straight into
              the Lowveld, and on a clear winter morning the ridges fade blue
              into the haze for what feels like forever. Entry is about R35 for
              South African residents, and twenty minutes covers it. One honest
              local tip &mdash; <strong>Wonder View</strong>, a minute further
              up the road, has effectively the same vista with no stairs, no fee
              and usually no crowd, so if the car park is heaving, drive on. For
              the wider set of Mpumalanga attractions around it,{" "}
              <a
                href="https://www.mpumalanga.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                the provincial tourism site
              </a>{" "}
              is the broadest listing there is.
            </p>
          </div>
        </Section>

        {/* Inline image — the God's Window escarpment view */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.panoramaGodsWindow.src}
                alt={img.panoramaGodsWindow.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              God&rsquo;s Window on a clear winter morning &mdash; the
              escarpment dropping the best part of a kilometre to the Lowveld.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">4. Bourke&rsquo;s Luck Potholes</H2>
            <p>
              Where the Treur River meets the Blyde, centuries of swirling water
              and grit have drilled the rock into deep honey-coloured cylinders,
              with turquoise pools in the hollows and a footbridge arcing over
              the gorge. Boardwalks, no real walking, and it slots naturally
              into the Panorama Route day &mdash; around R75 for South African
              residents, historically cash only, so check at the gate rather
              than counting on a card machine. You are at the southern end of
              the Blyde River Canyon here; if you have a full day for it,{" "}
              <a
                href="https://blydecanyon.co.za/boat-trips/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                the boat cruises further north
              </a>{" "}
              take you in under the Three Rondavels among the hippos and crocs.
            </p>
          </div>
        </Section>

        <Callout eyebrow="The one thing we would tell every guest">
          Do the big two properly, then leave a whole afternoon completely
          empty. The empty afternoon is the one people describe when they get
          home.
        </Callout>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">5. The Sabie waterfalls</H2>
            <p>
              In the other direction the land turns green and misty and fills
              with water. Sabie is a forestry town ringed by waterfalls, and it
              makes the gentlest day of the week &mdash; the one for when
              everybody needs a slower morning. The cluster strings together
              easily: <strong>Mac Mac Falls</strong> with its swimmable pools
              just up the road, <strong>Lone Creek Falls</strong> (a short flat
              walk in, and the most accessible), <strong>Horseshoe</strong> and{" "}
              <strong>Sabie Falls</strong> right by town. Most charge between
              R25 and R50 a head. Take a picnic and a towel, and plan nothing
              for the late afternoon.
            </p>
          </div>
        </Section>

        {/* Inline image — one of the Sabie falls */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.macMacFalls.src}
                alt={img.macMacFalls.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              One of the Sabie falls &mdash; a short forest walk in, and cool
              water at the bottom.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">6. Hiking and mountain biking</H2>
            <p>
              For travellers who want to be out of the car, the hills around
              Hazyview open into trails with views over farmland, forest and the
              escarpment &mdash; and you do not have to drive anywhere for it.
              The trails start on the farm and run out into the wider property:
              a waterfall on our own land, rock shelves to sit on, a hilltop
              lookout, and the whole valley going gold at the end of the
              afternoon. It costs nothing, and it is the most underrated half of
              most people&rsquo;s week. If you would rather walk in deep forest
              than open hill,{" "}
              <a
                href="https://www.graskopgorgeliftcompany.co.za/rates.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                the Graskop Gorge Lift
              </a>{" "}
              drops you into an indigenous rainforest by glass lift, with
              boardwalks and swing bridges along the gorge floor.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">7. The farm-stay experience at Kanaan</H2>
            <p>
              Almost every itinerary we see is one day too full. Open grounds,
              the mango grove, the farm animals, a pool and a braai make an
              unhurried afternoon here one of the more memorable parts of a
              Hazyview stay &mdash; and children need no further entertainment
              than a lawn to run on. There are four ways to stay, from R
              {site.pricing.fromZAR} per person sharing: self-catering lodge
              rooms, twin rooms, a wooden-house backpacker dorm and shaded
              camping under forty-year-old mango trees. They are all laid out,
              with rates, on our{" "}
              <Link
                href="/stay"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                stay page
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* Inline image — the pool at the end of a Lowveld day */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.poolSunset.src}
                alt={img.poolSunset.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The pool at sunset &mdash; where a long, dusty day in the Lowveld
              is supposed to end.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Activities for families and couples</H2>
            <p>
              The same seven things suit very different travellers. It is mostly
              a question of how you pace them.
            </p>
          </div>
          <NumberedList
            items={[
              {
                title: "With small children",
                body: "Kruger early and home by eleven, before the heat and the boredom arrive together. Mac Mac Pools for a shallow swim, the Graskop Gorge Lift because a glass lift into a forest beats any museum, and long afternoons on the lawn. Two big outings a week is plenty.",
              },
              {
                title: "With teenagers",
                body: "Pair a Kruger morning with the adrenaline side — the Graskop gorge swing, the canopy zip-lines over the Sabie valley, quad biking, or rafting when the river is running. Give them one day where the itinerary is entirely theirs.",
              },
              {
                title: "As a couple",
                body: "The Panorama Route on a clear morning, a long lunch on the escarpment, and the waterfalls at the quiet end of the afternoon. Skip the queue at God's Window for Wonder View. Then a veranda, a braai, and the valley going pink.",
              },
              {
                title: "With a mixed group",
                body: "Split the middle of the day and meet again for supper. The walkers take the farm trails, the drivers do the escarpment, the swimmers take Mac Mac. Nobody has to agree on anything except what time the fire gets lit.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              Travelling with children specifically? We have gone into far more
              detail &mdash; ages, drive times, what to pack and what to drop
              &mdash; in our{" "}
              <Link
                href="/blog/things-to-do-with-kids-hazyview-kruger"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Hazyview and Kruger family guide
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Questions about visiting Hazyview.</H2>
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

        <Callout eyebrow="A quick, honest word on the rates">
          Every price here is a 2026 guideline and each operator sets its own.
          Fees, opening days and ages change &mdash; and the river does not
          always run. Check the live figure before you count on it, or message
          us, because we keep ours current.
        </Callout>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="Come and use the whole of it"
              thesis="Seven of South Africa's best days out, in three different directions — and one bed to come back to at the end of each of them."
              body={
                <>
                  Tell us who is coming and how long you have, and we will build
                  the week with you &mdash; which morning for Kruger, which day
                  for the escarpment, what to book ahead, and what to skip if
                  the weather turns. We live here. You will get the honest
                  version.
                </>
              }
            />
            <p className="font-display text-base italic text-forest-deep">
              &mdash; Anneli &amp; Matthew
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <Sources
              items={[
                {
                  label: "SANParks — Kruger National Park rates & entry fees (official)",
                  href: "https://www.sanparks.org/parks/kruger/rates-entry-fees",
                },
                {
                  label: "SA-Venues — Panorama Route map & stops",
                  href: "https://www.sa-venues.com/maps/mpumalanga-panorama-route.htm",
                },
                {
                  label: "Mpumalanga Tourism — regional attractions listing",
                  href: "https://www.mpumalanga.com/",
                },
                {
                  label: "Blyde Canyon Adventure Centre — Blyde River Canyon boat trips",
                  href: "https://blydecanyon.co.za/boat-trips/",
                },
                {
                  label: "Graskop Gorge Lift Company — official rates",
                  href: "https://www.graskopgorgeliftcompany.co.za/rates.html",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Plan your Hazyview adventure with us"
          body="Send Anneli your dates and who is coming — ages, energy levels, whether you want the gorge swing or a hammock — and we will shape the days around you. We will tell you what to book ahead, what is free, and what to skip. No forms, just a real conversation."
          buttonLabel="Plan your days on WhatsApp"
          pageKey="theLand"
        />

        {/* Related */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/things-to-do-around-hazyview"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Things to do
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  The complete activities guide
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  The long version of this page &mdash; sanctuaries, zip-lines,
                  rafting, the toboggan run, and a five-day plan that fits it
                  all in.
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
                  What a Lowveld week costs
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Now you know what to do &mdash; here is the honest version of
                  what it all adds up to.
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
