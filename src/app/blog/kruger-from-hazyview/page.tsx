import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { articleLd } from "@/lib/jsonld";
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

const datePublished = "2026-06-08";
const headline =
  "Kruger from Hazyview: a first-timer's guide to gates, timing and the morning that works";

export const metadata: Metadata = {
  title: "Kruger from Hazyview · A first-timer's guide · Journal & Guides",
  description:
    "Phabeni vs Numbi vs Paul Kruger gates, opening times, and the half-day plan that gets you back to Kanaan for lunch. The Kruger guide we wish we had on our first visit.",
  alternates: { canonical: "/blog/kruger-from-hazyview" },
  openGraph: {
    title: "Kruger from Hazyview · A first-timer's guide",
    description:
      "The gates, the timing and the half-day plan that gets you back to the farm for lunch — Anneli and Matthew's first-timer's guide to Kruger from Hazyview.",
    images: [{ url: img.kruger.src, alt: img.kruger.alt }],
    type: "article",
    publishedTime: datePublished,
    authors: [...site.hosts],
  },
};

export default function KrugerGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleLd({
              headline,
              description:
                "A practical, distance-anchored guide to visiting the Kruger National Park from Hazyview — Phabeni vs Numbi vs Paul Kruger gates, gate-opening times by season, the hour-by-hour morning plan, and the five mistakes we see first-timers make.",
              path: "/blog/kruger-from-hazyview",
              image: img.kruger.src,
              datePublished,
            }),
          ),
        }}
      />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal & Guides", href: "/blog" },
          { label: "Kruger from Hazyview", href: "/blog/kruger-from-hazyview" },
        ]}
      />

      <article>
        <BlogHero
          image={img.kruger.src}
          alt={img.kruger.alt}
          eyebrow="Guide · Kruger"
          title="Kruger from Hazyview."
          intro="The gates, the timing, and the half-day plan that gets you back to the farm for lunch. The Kruger guide we wish we had on our first visit."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={7}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                `The closest Kruger gate is Phabeni, about 15 minutes from Hazyview and roughly ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from our gate at Kanaan.`,
                "Gates open at 05:30 or 06:00 depending on the month — aim to be there within the first thirty minutes for the best sightings.",
                "Plan to be back at the farm by 11:30 if you want a quiet lunch and an afternoon swim.",
                "Bring water, a hat, breakfast in the car, fuel in the tank, and patience — that is the whole packing list.",
              ]}
            />

            <p>
              The Phabeni gate of the Kruger National Park sits about twelve
              kilometres from the centre of Hazyview, and a little less than
              forty-five minutes by road from our gate at Kanaan. From the
              moment you turn off the R536 you are inside one of the great
              wildlife landscapes on earth, and one of the best things about
              staying with us is that the whole adventure can happen between
              breakfast and lunch.
            </p>
            <p>
              Most first-timers we meet have spent months planning Kruger as
              a separate holiday — five nights in a private camp, a long
              drive in, a long drive out. That is a perfectly good way to
              see the park. It is also expensive, and it crowds out the
              slower South African week most travellers actually want.
            </p>
            <p>
              This guide is for the other kind of visit. A family or a
              couple based at Kanaan for four or five nights, doing Kruger
              as one or two relaxed half-days, and spending the rest of the
              week at the waterfall, on the Panorama Route, and under the
              mango grove with a cold drink. Here is how to make those
              Kruger mornings count.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Which gate to use, and why it changes your morning.</H2>
            <p>
              There are nine gates into Kruger. Three of them are realistic
              from Hazyview, and the choice between them is mostly a
              question of how early you want to wake up.
            </p>
            <StatGrid
              stats={[
                {
                  value: "~15 min",
                  label: "Phabeni Gate",
                  body: "Twelve km from Hazyview, the closest gate to Kanaan and our default for a half-day. Phabeni means shelter in Sotho.",
                },
                {
                  value: "~40 min",
                  label: "Numbi Gate",
                  body: "A slightly longer drive but a beautiful one, and a less-crowded gate on busy days. Good plan B in school holidays.",
                },
                {
                  value: "~60 min",
                  label: "Paul Kruger Gate",
                  body: "Further out, near Skukuza camp — a strong call if you want to spend the whole day in the south of the park.",
                },
              ]}
            />
            <p>
              For a single Kruger morning, Phabeni is almost always the
              right answer. You leave Kanaan with the first hint of light,
              you are at the gate inside an hour, and the part of the park
              you drive into is genuinely good for early sightings —
              waterholes, river crossings, a road network you can read at a
              glance from the SANParks map.
            </p>
          </div>
        </Section>

        {/* Inline image — the drive in at first light */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.lowveldSunriseRoad.src}
                alt={img.lowveldSunriseRoad.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The road from Kanaan to the Phabeni gate at first light.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What a good Kruger morning looks like from Kanaan.</H2>
            <p>
              The shape of a productive Kruger half-day is honestly very
              simple. Wildlife is active in the cool of the morning. You
              want to be at the gate as it opens, and you want to be back
              out before the heat shuts everything down at about ten.
            </p>
          </div>
          <NumberedList
            variant="timeline"
            items={[
              {
                time: "04:30",
                title: "Wake up",
                body: "Coffee on. Breakfast packed the night before. The bird call outside your room is the only alarm clock that actually matters.",
              },
              {
                time: "05:00",
                title: "Leave Kanaan",
                body: "The road to Phabeni is empty at this hour. Forty-five quiet minutes through the Lowveld, mostly downhill, with the escarpment lifting behind you.",
              },
              {
                time: "05:45",
                title: "Arrive at the gate",
                body: "Card payments work; SANParks Wild Card holders queue separately. Have ID ready. Check the gate-opening time for the month you are visiting.",
              },
              {
                time: "06:00",
                title: "Drive slowly until ~09:30",
                body: "The slower the better. Most first-timers drive too fast. The animals are already there; you just have to be patient enough to see them.",
              },
              {
                time: "10:00",
                title: "Coffee at a picnic spot",
                body: "Tshokwane and Skukuza camp both have proper coffee and rest rooms. A thirty-minute break resets the morning.",
              },
              {
                time: "11:30",
                title: "Back at Kanaan",
                body: "Pool, lunch, a long afternoon under the mango trees, the Lowveld light deepening into gold. The day is yours from here.",
              },
            ]}
          />
        </Section>

        {/* Inline image — the 10am coffee beat */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.krugerPicnicCoffee.src}
                alt={img.krugerPicnicCoffee.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              A picnic stop inside the park — the ten-o&rsquo;clock break that resets the morning.
            </figcaption>
          </figure>
        </div>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What to pack, and what to leave at the lodge.</H2>
            <p>
              Kruger does not need a kit list the way a multi-day camp
              does. You are driving in your own car, four hours from
              breakfast, and you are coming back to a real bed. Pack like
              that.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Water and breakfast",
                body: "Two litres of water per person and something easy to eat in the car. We can pack a continental breakfast the night before for R60 a head.",
              },
              {
                title: "Binoculars and a long lens",
                body: "If you only bring one thing, bring binoculars. Sightings are often further away than your phone camera can save.",
              },
              {
                title: "Hat, sunscreen, light jacket",
                body: "It is cold at the gate at sunrise and very warm by ten. A jacket you can shed and a hat that does not blow off the bakkie roof.",
              },
              {
                title: "Cash and card both",
                body: "Gate payments accept card; small picnic stops sometimes do not. R200 in cash covers any small thing the day throws at you.",
              },
              {
                title: "The SANParks app, downloaded the night before",
                body: "Park map, real-time sightings, gate times. Signal is spotty inside the park — download everything at the farm.",
              },
            ]}
          />
        </Section>

        <Callout eyebrow="The single biggest call you make">
          Be at the gate within thirty minutes of opening, or you have
          already lost the morning. Everything else is a detail.
        </Callout>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Self-drive or guided drive: when each is the right call.</H2>
            <p>
              Both work. They are different experiences and they cost
              different amounts of money, and the right choice depends on
              how many people are in the car and how much you want to
              learn.
            </p>
            <p>
              <strong>Self-drive</strong> is the right call for families
              with their own vehicle, for couples who want to set their own
              pace, and for anyone who has been to Kruger before. The cost
              is your park entry fee (current SANParks rates are linked
              below) plus fuel. You move when you want, you stop when you
              want, and a quiet hour at a waterhole is yours to spend.
            </p>
            <p>
              <strong>A guided drive</strong> is the right call for first
              visits where wildlife knowledge matters, for groups of four
              or more where the per-person cost works out reasonable, and
              for the days when nobody at the table wants to drive. We can
              arrange a half-day guided drive from Kanaan at R2,427 per
              person, including park entry — the guide reads the bush for
              you, finds sightings you would have driven past, and knows
              the back roads that the SANParks map does not show.
            </p>
            <p>
              On a first visit with two adults and two children, we
              usually recommend one guided morning and one self-drive,
              spread across the week. The guided morning teaches you how to
              look; the self-drive is when you go back and look properly.
            </p>
          </div>
        </Section>

        {/* Inline image — the place you come back to */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.heroFarm.src}
                alt={img.heroFarm.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The mango grove at Kanaan, where the Kruger morning ends.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What you might see, by season.</H2>
            <p>
              Kruger is good year-round. It is not all the same kind of
              good. Here is what we tell guests who ask us when to come.
            </p>
            <StatGrid
              stats={[
                {
                  value: "May–Sep",
                  label: "Dry winter",
                  body: "The best wildlife months. Cool mornings, thin bush, animals concentrated at remaining waterholes. Big-cat sightings peak. Pack warm layers for sunrise.",
                },
                {
                  value: "Oct–Nov",
                  label: "Shoulder",
                  body: "Warmer, greener, fewer people. The first rains bring the bush back to life. Migratory birds arrive. A favourite if you can travel outside school terms.",
                },
                {
                  value: "Dec–Apr",
                  label: "Wet summer",
                  body: "Lush and beautiful, hot and humid, the bush thick. Newborn antelope, dramatic skies. Sightings are harder but the park is at its most photogenic.",
                },
              ]}
            />
            <p>
              For a first visit with children, the dry-winter months are
              the easiest entry point — animals are easier to spot, the
              mornings are crisp rather than baking, and the long South
              African school holiday in June and July is built around it.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Five first-timer mistakes we hear most.</H2>
            <p>
              We hear the same regrets at the dinner table from guests who
              have just come back from Kruger. Avoid these and you have
              done it right.
            </p>
          </div>
          <NumberedList
            variant="dark"
            items={[
              {
                title: "Leaving too late",
                body: "If you are not on the road by 05:30, you are missing the best two hours of the day. Sleep in tomorrow, not today.",
              },
              {
                title: "Driving too fast",
                body: "Kruger has a 50 km/h tar speed limit and 40 km/h on gravel. Drive slower than that. The animals are already there.",
              },
              {
                title: "Booking a five-day Kruger trip on a first visit",
                body: "Two half-days teach you whether Kruger is for you. Build the longer trip on the second visit, when you know what you want.",
              },
              {
                title: "Forgetting the SANParks app",
                body: "Real-time sightings, gate times, the park map. Download it the night before — signal inside the park is unreliable.",
              },
              {
                title: "Skipping the picnic stops",
                body: "Tshokwane, Skukuza, Lower Sabie — these camps are part of the experience, not breaks from it. Coffee with a view of the river is half the point.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="Two mornings, one good week"
              thesis="Two relaxed Kruger half-days, three days at Kanaan, one Panorama Route day. That is a South African week most families never forget."
              body={
                <>
                  The mistake most first-timers make is treating Kruger as
                  the holiday. The better move is treating it as the
                  centrepiece of a wider Lowveld week.{" "}
                  <Link
                    href="/blog/africa"
                    className="font-medium text-ochre hover:text-ochre-deep"
                  >
                    Anneli wrote a longer letter about that week
                  </Link>{" "}
                  if you would like the full picture.
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
            <Sources
              items={[
                {
                  label: "SANParks · Kruger National Park (gate times, fees, sightings)",
                  href: "https://www.sanparks.org/parks/kruger",
                },
                {
                  label: "Mpumalanga Tourism · Hazyview and surrounds",
                  href: "https://www.mpumalanga.com/",
                },
                {
                  label: "SANParks app · iOS and Android",
                  href: "https://www.sanparks.org/about/app",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Want help planning your Kruger morning?"
          body="WhatsApp Anneli or Matthew — we'll help you pick the gate, the day and the morning that fits the rest of your stay. No forms, no auto-responses, just a real conversation about your week."
          buttonLabel="Plan a Kruger morning on WhatsApp"
          pageKey="theLand"
        />

        {/* Related */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/africa"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Story · The Land
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Africa, from the gate of Kanaan
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Anneli&rsquo;s wider letter about a South African week —
                  Kruger, Sabie, Graskop and the rhythm of the Lowveld.
                </p>
              </Link>
              <Link
                href="/blog/the-welcome"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Story · The Welcome
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  The welcome at Kanaan
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  What a stay at the farm actually feels like — the dust
                  road in, the room, the morning, the long afternoon.
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
