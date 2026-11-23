import Link from "next/link";
import Image from "next/image";
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

const datePublished = "2026-11-19";
const headline =
  "5 Reasons to Add Hazyview to Your South Africa Bucket List";

const faqs = [
  {
    q: "Is Hazyview worth visiting in South Africa?",
    a: "Yes — and not only as a stopover on the way to Kruger. It's a genuine base for a Lowveld week: the Kruger gates, the Panorama Route and the Sabie waterfalls are all within about forty-five minutes, so you spend your time outdoors instead of in the car.",
  },
  {
    q: "What are the top attractions near Hazyview?",
    a: "The Kruger National Park (Phabeni gate, 30–45 minutes), the Panorama Route (God's Window, Bourke's Luck Potholes, the Blyde River Canyon), the Mac Mac, Lisbon and Berlin waterfalls near Sabie, and a cluster of adventure activities — zip-lines, quad biking, the Graskop Big Swing — closer still.",
  },
  {
    q: "How far is Hazyview from Kruger National Park?",
    a: "The nearest gate, Phabeni, is about fifteen minutes from the town itself and 30–45 minutes from Kanaan, depending on exactly where you're staying. It's one of the closest bases to the park on this side of Mpumalanga.",
  },
  {
    q: "What is Hazyview known for?",
    a: "Being the easiest base for the Kruger Lowveld — close enough to the park for an early game drive, close enough to the escarpment for a Panorama Route day, and surrounded by banana and macadamia farms that give the valley its particular green.",
  },
  {
    q: "How many days should you spend in Hazyview?",
    a: "Four or five nights lets you do a Kruger morning, a Panorama Route day, a waterfall or adventure day, and still leave a slow day at the farm — which is usually the day guests say they enjoyed most.",
  },
  {
    q: "What's the best time of year to visit Hazyview?",
    a: "Dry winter (May to September) for the clearest skies and the best game viewing; the shoulder months of October and November for green hills and fewer people. We've laid out all twelve months, honestly, in our seasonal almanac.",
  },
  {
    q: "Where should you stay when visiting Hazyview?",
    a: "Somewhere between the park and the escarpment, so neither side of your trip costs you an extra hour on the road. We're on the R40 — lodge rooms, twin rooms, backpacker beds and camping under forty-year-old mango trees, from R250 per person sharing.",
  },
  {
    q: "How much does it cost to enter Kruger from Hazyview right now?",
    a: "The daily conservation fee went up on 1 November 2026: R140 per South African adult, R296 SADC, R692 international, valid to 31 October 2027. It's charged per person for each day you drive into the park, not per night of your stay.",
  },
  {
    q: "Do I need to book Kruger in advance over the festive season?",
    a: "For a day visit, yes — SANParks caps the number of day visitors admitted at each gate over the December holidays, with a small online pre-booking fee. Book ahead rather than risk arriving to a full quota.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "5-reasons-to-visit-hazyview-south-africa",
  title: headline,
  description:
    "Five real reasons Hazyview, South Africa belongs on a Kruger trip — the park gates, the Panorama Route, Sabie's waterfalls, Lowveld adventure, and a warm, affordable place to stay. Updated with the 1 November 2026 Kruger conservation fee and festive-season booking rules.",
  image: img.hazyviewThingsToDoHero,
  datePublished,
  category: "guide",
});

export default function FiveReasonsHazyviewPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "Why Hazyview earns more than a drive-through on the way to Kruger — the Phabeni and Numbi gates, the Panorama Route, the waterfalls around Sabie, Lowveld adventure activities, and a warm farm stay to come home to each evening.",
          path: "/blog/5-reasons-to-visit-hazyview-south-africa",
          image: img.hazyviewThingsToDoHero.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.hazyviewThingsToDoHero.src}
          alt={img.hazyviewThingsToDoHero.alt}
          eyebrow="Guide · Why Hazyview"
          title={headline}
          intro="Most itineraries treat Hazyview as the dot you drive through on the way to Kruger. Here's why it's worth stopping at — and basing yourself here for more than one night."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={6}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                `The Kruger gates (30–45 minutes), the start of the Panorama Route and the Sabie waterfalls are all within roughly forty-five minutes of Hazyview — few Lowveld towns sit this close to all three.`,
                "A genuine Big Five safari is a half-day trip, not an overnight commitment.",
                "The Panorama Route (God's Window, Bourke's Luck Potholes, the Blyde River Canyon) is one of the cheapest full days out in South Africa.",
                "Adventure activities and ethical wildlife sanctuaries sit closer still, most of them twenty to forty minutes away.",
                "It's also an affordable place to actually sleep — Kanaan Guest Farm is from R250 per person sharing.",
                "Current for the 2026/27 season: Kruger's gate fee rose on 1 November 2026, and festive-season day visitors now need to book ahead at a capped gate.",
              ]}
            />

            <p>
              Type &ldquo;Hazyview&rdquo; into a search engine and most of what
              comes back treats it as an afterthought — a fuel stop before
              Kruger, a dot on a map between Nelspruit and the escarpment.
              That undersells it badly. Hazyview sits at the one point in
              Mpumalanga where a Big Five safari, the Panorama Route and a
              string of waterfalls are all genuinely close, and that
              proximity is worth more to a trip than any single attraction.
            </p>
            <p>
              We own a small guest farm here, so we have an obvious interest
              in saying so. But the geography does the arguing for us. Here
              are five reasons we think Hazyview deserves its own days on a
              South Africa itinerary, not just a night on the way through.
            </p>
          </div>
        </Section>

        <NumberedList
          items={[
            {
              title: "Kruger National Park",
              body: "A half-day Big Five safari through the Phabeni gate, 30–45 minutes away.",
            },
            {
              title: "The Panorama Route",
              body: "God's Window, Bourke's Luck Potholes and the Blyde River Canyon, about 40 minutes up the escarpment.",
            },
            {
              title: "The Sabie waterfalls",
              body: "Mac Mac, Lisbon and Berlin Falls, each a short walk from the car park, about 35 minutes away.",
            },
            {
              title: "Lowveld adventure",
              body: "Zip-lines, the Graskop Big Swing and ethical wildlife sanctuaries, closer still.",
            },
            {
              title: "A warm place to stay",
              body: `Kanaan Guest Farm on the R40 — from R${site.pricing.fromZAR} per person sharing.`,
            },
          ]}
        />

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">1. The Kruger National Park is a half-day away, not a holiday on its own.</H2>
            <p>
              The Phabeni gate is the closest of Kruger&rsquo;s nine
              entrances to Hazyview, and most of our guests are through it
              and watching elephant at a waterhole before eight in the
              morning. You don&rsquo;t need five nights inside the park to
              see the Big Five — a single well-timed half-day, gate opening
              to around ten, does more than most first-timers expect.
            </p>
            <p>
              We&rsquo;ve written the longer version of this —{" "}
              <Link
                href="/blog/kruger-from-hazyview"
                className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
              >
                which gate to use, what time to leave, and the morning that
                actually works
              </Link>
              . The short version: you can do Kruger properly from here
              without building your whole trip around it.
            </p>
          </div>
        </Section>

        {/* Inline image — Kruger */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.krugerBigFiveLion.src}
                alt={img.krugerBigFiveLion.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The Phabeni gate puts a Kruger morning within reach without
              giving up the rest of the week.
            </figcaption>
          </figure>
        </div>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Two things that changed for the 2026/27 season.</H2>
            <p>
              Kruger isn&rsquo;t a static attraction — the gate fee and the
              festive-season rules both moved recently, and neither has
              filtered into most of the generic &ldquo;things to do in
              Hazyview&rdquo; listicles yet.
            </p>
          </div>
          <NumberedList
            items={[
              {
                title: "The conservation fee went up on 1 November 2026",
                body: "R140 per South African adult per day, R296 SADC, R692 international — valid to 31 October 2027. It's charged per person, per day you actually enter the park, not per night of your stay.",
              },
              {
                title: "Festive-season gates now cap day visitors",
                body: "SANParks limits the number of day visitors admitted at each gate over the December holidays, with a small online pre-booking fee. If you're planning a December trip, book your Kruger day online before you travel rather than risk being turned away at the gate.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">2. The Panorama Route begins about forty minutes up the road.</H2>
            <p>
              God&rsquo;s Window, Bourke&rsquo;s Luck Potholes, the Three
              Rondavels and the Blyde River Canyon — the escarpment route
              that every Mpumalanga guidebook photographs — starts about
              forty minutes from our gate. It is also, by South African
              standards, cheap: most of the viewpoints cost less than a
              takeaway coffee, and the free Wonder View gives you almost the
              same vista as the paid God&rsquo;s Window car park next door.
            </p>
            <p>
              We cover the whole loop, half-day and full-day versions, in{" "}
              <Link
                href="/blog/panorama-route-from-hazyview"
                className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
              >
                our Panorama Route guide
              </Link>
              . A clear winter morning is the one to do it on — the canyon
              view disappears into cloud more often than the brochures let
              on, so check the forecast before you commit the day.
            </p>
          </div>
        </Section>

        <StatGrid
          stats={[
            {
              value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`,
              label: "To the Kruger gates",
              body: "Phabeni and Numbi, the two closest entrances to Hazyview.",
            },
            {
              value: "~40 min",
              label: "To the Panorama Route",
              body: "God's Window and Bourke's Luck Potholes, up the escarpment.",
            },
            {
              value: "~35 min",
              label: "To the Sabie waterfalls",
              body: "Mac Mac, Lisbon and Berlin Falls, each a short walk from the car park.",
            },
          ]}
        />

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">3. Three good waterfalls sit within a short drive of each other.</H2>
            <p>
              Mac Mac Falls has picnic lawns and a swimmable pool at its
              base; Lisbon is the tallest drop on the route and the better
              photograph; Berlin Falls is the quiet one most tour buses
              skip. None of them needs more than a short, flat walk from the
              car park, which makes this the easiest full day on the whole
              list — a real point in its favour if the Kruger morning has
              left anyone in the car wanting to move slowly for a while.
            </p>
            <p>
              It isn&rsquo;t a reason to avoid the busier Blyde Canyon
              stops. It&rsquo;s a reason to add a quieter afternoon to the
              same drive.
            </p>
          </div>
        </Section>

        {/* Inline image — the waterfalls */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.sabieWaterfallFullFlow.src}
                alt={img.sabieWaterfallFullFlow.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              One of the Sabie waterfalls at full summer flow — a short walk
              from the car park, most of the year.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">4. There's a genuine adventure day in between, if anyone wants one.</H2>
            <p>
              Skyway&rsquo;s canopy zip-line runs about two and a half hours
              through indigenous forest above the Sabie valley; the Graskop
              Big Swing sends the brave out over a gorge most people would
              rather just look at; quad biking and river tubing round out a
              day that has very little to do with game viewing.
            </p>
            <p>
              A word on the wildlife encounters you&rsquo;ll see advertised
              alongside these: Chimp Eden, the Jane Goodall Institute&rsquo;s
              sanctuary about forty minutes away, is viewing-only — platforms,
              no touching, a genuine rescue operation. We&rsquo;d steer you
              away from the elephant-back or hands-on encounters also sold in
              the area; they make for a nice photograph and a worse story for
              the animal. Perry&rsquo;s Bridge Reptile Park, undercover and
              closer still, is the easy rainy-day fallback.
            </p>
          </div>
        </Section>

        <NumberedList
          variant="grid"
          items={[
            {
              title: "Skyway canopy zip-line",
              body: "About two and a half hours, treetop platforms above the Sabie valley. Guided and harnessed.",
            },
            {
              title: "Graskop Big Swing",
              body: "The headline adrenaline stop on the whole route. Twelve and up.",
            },
            {
              title: "Chimp Eden",
              body: "A genuine sanctuary — view from platforms, no touching. About forty minutes away.",
            },
            {
              title: "Perry's Bridge Reptile Park",
              body: "Undercover, close to Hazyview, the reliable wet-weather option.",
            },
          ]}
        />

        <div className="mx-auto max-w-prose px-5 lg:px-8">
          <Callout eyebrow="Being straight with you">
            Elephant-back rides and feed-and-touch encounters are sold all
            over this area. We&rsquo;d skip them — whatever the sanctuary
            that allows viewing only, the better story is the one you tell
            your kids afterwards.
          </Callout>
        </div>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">5. You still need somewhere good to come back to.</H2>
            <p>
              None of the above means much if the bed at the end of the day
              is a forgettable hotel room beside a highway. We run Kanaan
              Guest Farm on the R40 — self-catering lodge rooms, twin rooms,
              backpacker beds and camping under forty-year-old mango trees,
              from R{site.pricing.fromZAR} per person sharing. There&rsquo;s
              a pool, hiking and mountain-bike trails on the farm itself, and
              a kitchenette if you&rsquo;d rather cook than go out after a
              long day on the Panorama Route.
            </p>
            <p>
              The honest pitch is simple: everything on this list is close
              enough to do as a day trip, so the place you sleep matters more
              than it would if you were constantly packing up and moving on.
              We wrote the longer case for staying put{" "}
              <Link
                href="/blog/accommodation-near-kruger-national-park"
                className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
              >
                in our accommodation guide
              </Link>
              , if you want the detail on rooms and rates.
            </p>
          </div>
        </Section>

        {/* Inline image — the farm itself */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.poolReal.src}
                alt={img.poolReal.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The pool at Kanaan — the part of the day that has nothing to
              do with an itinerary at all.
            </figcaption>
          </figure>
        </div>

        <NumberedList
          variant="dark"
          items={[
            {
              title: "Self-catering lodge rooms",
              body: "Sleep two to seven, each with its own kitchenette — the easiest option for a family.",
            },
            {
              title: "Twin rooms",
              body: "Simple, comfortable, built for couples and smaller groups sharing the farm's facilities.",
            },
            {
              title: "Backpacker beds",
              body: "An eight-bed wooden house — the budget pick for solo travellers and small groups.",
            },
            {
              title: "Camping under the mango trees",
              body: "Ten powered pitches, room for up to eighty, under forty-year-old shade trees.",
            },
          ]}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">When to come.</H2>
            <p>
              Dry winter (May to September) gives you the clearest Panorama
              Route views and the easiest game viewing, at the cost of cold
              sunrises. The shoulder months either side are quieter and
              greener. There&rsquo;s no bad month here, only a different kind
              of good — we&rsquo;ve written{" "}
              <Link
                href="/blog/when-to-visit-kruger-hazyview-month-by-month"
                className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
              >
                a full month-by-month almanac
              </Link>{" "}
              if you want to match the season to what you actually want to
              do.
            </p>
          </div>
        </Section>

        <StatGrid
          stats={[
            {
              value: "May–Sep",
              label: "Dry winter",
              body: "Clear Panorama views, the best game viewing, cold sunrises.",
            },
            {
              value: "Oct–Nov",
              label: "Shoulder",
              body: "Warmer, greener, noticeably quieter than the peak months.",
            },
            {
              value: "Dec–Apr",
              label: "Wet summer",
              body: "Lush and dramatic, full waterfalls, thicker bush for game viewing.",
            },
          ]}
        />

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="One base, five reasons"
              thesis="Hazyview isn't a stop on the way to Kruger. It's the one place in Mpumalanga close enough to do all of this without spending the trip in the car."
              body={
                <>
                  Four or five nights is usually enough: a Kruger morning, a
                  Panorama Route day, a waterfall or adventure day, and a
                  slow day on the farm that most guests, in hindsight, say
                  they enjoyed the most.
                </>
              }
            />
            <p className="font-display text-base italic text-forest-deep">
              — Anneli &amp; Matthew
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

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <Sources
              items={[
                {
                  label: "SANParks · Kruger National Park (gates, fees)",
                  href: "https://www.sanparks.org/parks/kruger",
                },
                {
                  label:
                    "SANParks · daily conservation fees, 1 November 2026 to 31 October 2027",
                  href: "https://www.sanparks.org/wp-content/uploads/2026/02/daily_conservation_fees_2026_27.pdf",
                },
                {
                  label: "Graskop Gorge Lift Company · official rates",
                  href: "https://www.graskopgorgelift.com/",
                },
                {
                  label: "Jane Goodall Institute South Africa · Chimp Eden",
                  href: "https://www.janegoodall.org.za/",
                },
                {
                  label: "Mpumalanga Tourism · Hazyview and surrounds",
                  href: "https://www.mpumalanga.com/",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Planning a trip to Hazyview?"
          body="WhatsApp Anneli or Matthew — tell us how many days you have and who's coming, and we'll help you shape a week around Kruger, the Panorama Route and the farm. No forms, just a real conversation."
          buttonLabel="Plan your Hazyview trip on WhatsApp"
          pageKey="blog"
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
                  Things to do around Hazyview
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  The whole menu — Kruger, the Panorama Route, waterfalls,
                  sanctuaries and adventure activities — plus a five-day plan.
                </p>
              </Link>
              <Link
                href="/blog/accommodation-near-kruger-national-park"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Where to stay
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Accommodation near Kruger National Park
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  In-park rest camps or a room near the gate? What each is
                  really like, and why Hazyview sits between Kruger and the
                  escarpment.
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
