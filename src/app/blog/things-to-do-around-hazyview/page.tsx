import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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

const datePublished = "2026-07-15";
const headline =
  "Things to do around Hazyview — the complete Lowveld activities guide, from the farm gate";

const faqs = [
  {
    q: "What is there to do in Hazyview?",
    a: "Far more than one trip can hold. Hazyview sits at the meeting point of three big things: the Kruger National Park (the Phabeni gate is about 30 to 40 minutes away), the Panorama Route up the escarpment (God's Window, Bourke's Luck Potholes, the Graskop Gorge Lift), and the waterfall country around Sabie. On top of that there are wildlife sanctuaries, zip-lines, quad biking, river rafting, a downhill toboggan run, and craft-and-restaurant villages at Perry's Bridge and Casterbridge. Most of it is a comfortable day trip from the farm.",
  },
  {
    q: "How many days do you need to see Hazyview and the Lowveld properly?",
    a: "Five days is the sweet spot, and it's how we've laid this guide out: one day in Kruger, one on the Panorama Route, one around Sabie and the waterfalls, one for adventure, and one gentler day for the sanctuaries with an afternoon back at the farm. Three days will give you Kruger and the Panorama Route without rushing. Anything less and you're choosing between the two big ones.",
  },
  {
    q: "How far is Kruger from Hazyview?",
    a: `The Phabeni Gate is about ${site.distances.krugerGateMinutesMin} to ${site.distances.krugerGateMinutesMax} minutes from us by road, which makes it the closest gate to Hazyview. That's close enough to leave in the dark, be through the boom when it opens, and be home for a late breakfast. Numbi and Paul Kruger gates are also within reach.`,
  },
  {
    q: "Can you self-drive in Kruger or do you need a guide?",
    a: "You can absolutely self-drive — the roads are good, an ordinary car copes fine, and it's how most of our guests do it. You pay the daily conservation fee at the gate and go at your own pace. If it's your first safari, a guided sunrise or sunset drive (booked through the park at the gates) is a lovely way to learn to read the bush before you head out on your own.",
  },
  {
    q: "What can you do around Hazyview when it rains?",
    a: "Plenty. Perry's Bridge Reptile Park is undercover and is the classic rainy-day winner. The Graskop Gorge Lift and its forest boardwalks are atmospheric in the drizzle. Casterbridge and Perry's Bridge both have galleries, shops and restaurants you can happily lose an afternoon in. And a wet day in Kruger is often a good game day — the bush comes alive.",
  },
  {
    q: "Which animal experiences near Hazyview are ethical?",
    a: "It's worth knowing the difference. Chimp Eden (a Jane Goodall sanctuary, about 40 minutes away) is a genuine rescue and rehabilitation centre — you view the chimps from platforms, there's no touching and no rides. Moholoholo is a wildlife rehabilitation centre in the same spirit. Elephant Whispers offers close-up interaction including feeding and touching, which is a different kind of experience — we'd rather you know honestly what each one is and choose for yourself.",
  },
  {
    q: "What is there to do around Hazyview with teenagers?",
    a: "This is where the Lowveld shines. The Graskop Big Swing (12 and up) is the headline. The Skyway Trails canopy zip-line runs about two and a half hours over the Sabie valley. There's quad biking, river rafting and tubing on the Sabie when the river is running, and the Long Tom Toboggan and Scootours — a 1.7 km downhill run through grassland and forest. Pair any of them with a Kruger morning and you'll have a very happy teenager.",
  },
  {
    q: "Do you need to book activities in advance?",
    a: "For most things, no — the Panorama Route stops, the waterfalls and a Kruger self-drive you can simply do. The ones worth booking ahead are Chimp Eden's guided tours, Elephant Whispers, the Skyway canopy tour, and rafting (which depends on the river running). Tell us the night before and we'll help you get it sorted — we know who to phone.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "things-to-do-around-hazyview",
  title: "Things to do around Hazyview — the complete Lowveld activities guide",
  description:
    "Everything there is to do around Hazyview, from the farm gate: Kruger safaris through the Phabeni gate, the Panorama Route, Sabie's waterfalls, ethical wildlife sanctuaries, zip-lines, quad biking, rafting and the toboggan run — plus a five-day plan that fits it all in without rushing.",
  image: img.panoramaGodsWindow,
  datePublished,
  category: "guide",
});

export default function ThingsToDoAroundHazyviewPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A complete guide to things to do around Hazyview in the Mpumalanga Lowveld — a Kruger National Park safari through the Phabeni gate, the Panorama Route (God's Window, Bourke's Luck Potholes, Lisbon Falls, Pinnacle Rock, the Graskop Gorge Lift), Sabie's waterfalls and forestry museum, ethical wildlife sanctuaries like Chimp Eden, and the adventure side — Skyway zip-lines, quad biking, river rafting and the Long Tom toboggan run — with a five-day plan from Kanaan Guest Farm.",
          path: "/blog/things-to-do-around-hazyview",
          image: img.panoramaGodsWindow.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal & Guides", href: "/blog" },
          {
            label: "Things to do around Hazyview",
            href: "/blog/things-to-do-around-hazyview",
          },
        ]}
      />

      <article>
        <BlogHero
          image={img.panoramaGodsWindow.src}
          alt={img.panoramaGodsWindow.alt}
          eyebrow="Guide · Things to do"
          title="Everything there is to do around Hazyview."
          intro="Three of South Africa's great days out meet within an hour of our gate — Kruger, the Panorama Route and the waterfall country around Sabie — with sanctuaries, zip-lines and a toboggan run in between. Here is the whole menu, and a five-day plan that fits it in without anyone melting down."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={11}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "Kruger's Phabeni gate is about 30–40 minutes away — close enough to be through the boom at opening and home for a late breakfast.",
                "The Panorama Route (God's Window, Bourke's Luck, the Graskop Gorge Lift) is roughly 40 minutes to an hour and a half up the escarpment — and genuinely cheap.",
                "Sabie's waterfalls and the forestry museum make an easy, gentle day in the other direction.",
                "For animals up close: Chimp Eden is a genuine sanctuary (viewing only, no touching); Elephant Whispers is hands-on. We'll tell you honestly what each is.",
                "For adrenaline: the Graskop Big Swing, Skyway zip-lines, quad biking, Sabie rafting, and the Long Tom toboggan run.",
                "A five-day plan at the bottom that fits the lot — and what to drop if you only have three.",
              ]}
            />

            <p>
              The lovely problem with the Lowveld is that there is too much of it.
              Guests arrive planning one big safari and discover that a rainforest
              gorge, a thousand-metre cliff view, a waterfall you can swim under and
              a chimp sanctuary are all sitting within an easy drive of the same
              farm gate. Nobody manages all of it in one trip. That is rather the
              point — you come back.
            </p>
            <p>
              So here is the honest, whole menu of what there is to do around
              Hazyview, grouped the way we&rsquo;d actually plan it for you, with a
              five-day shape at the end. We&rsquo;ve put what it all costs in a{" "}
              <Link
                href="/blog/cost-of-a-kruger-lowveld-week-2026"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                separate cost guide
              </Link>{" "}
              so you can plan the fun here and the budget there.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Everything, and how far it is.</H2>
            <p>
              The whole case for basing here is the driving times. Three completely
              different days out, in three different directions, all from one bed.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: "30–40 min",
                label: "To Kruger (Phabeni gate)",
                body: "The closest gate to Hazyview. Leave in the dark, be first through the boom, and be back at the farm for a late breakfast.",
              },
              {
                value: "40–90 min",
                label: "To the Panorama Route",
                body: "Up the escarpment: God's Window, Bourke's Luck Potholes, Lisbon Falls, Pinnacle Rock and the Graskop Gorge Lift.",
              },
              {
                value: "~45 min",
                label: "To Sabie & the waterfalls",
                body: "Misty mountain town, a cluster of waterfalls you can walk to, and the forestry museum.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">1. A day in Kruger.</H2>
            <p>
              This is the one nobody skips, and it is the reason most people come.
              The <strong>Phabeni gate</strong> is the closest to us, and you have
              two honest ways to do it. <strong>Self-drive</strong> is what most of
              our guests choose: you pay the daily conservation fee at the boom
              (about R134 per person for South African residents, R602 for
              international visitors), and then the day is yours — your car, your
              pace, windows down. An ordinary car copes fine; the roads are good.
            </p>
            <p>
              Or take a <strong>guided sunrise or sunset drive</strong>, booked
              through the park at the gates, at roughly R450 to R650 per adult
              (children around R350). If it is your first safari, one guided morning
              early in your stay teaches you how to read the bush — then self-drive
              the rest of the week with your eye in.
            </p>
            <p>
              Either way, go early. The first two or three hours after the gate
              opens are the best game viewing of the entire day, and being thirty
              minutes from the gate is the only reason that is comfortably possible.
            </p>
          </div>
        </Section>

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
              A dry-season waterhole in southern Kruger — thirty-odd minutes from
              the farm gate.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">2. The Panorama Route.</H2>
            <p>
              If Kruger is the headline, the Panorama Route is the surprise — a
              string of viewpoints and waterfalls along the top of the escarpment,
              most of which cost pocket money at a gate.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "God's Window",
                body: "The famous one — a near-kilometre drop to the Lowveld, about R35 for SA residents. Tip: Wonder View, a minute up the road, has the same vista with no stairs and no fee.",
              },
              {
                title: "The Graskop Gorge Lift",
                body: "A glass lift down into an indigenous rainforest, with boardwalks and swing bridges on the floor. About R205 an adult, R138 a child. The one paid showpiece worth every cent.",
              },
              {
                title: "Bourke's Luck Potholes",
                body: "Honey-coloured rock cylinders carved by two rivers, with a footbridge over the gorge. Around R75 for SA residents. Cash only — confirm the rate at the gate.",
              },
              {
                title: "Lisbon Falls & Pinnacle Rock",
                body: "Lisbon is the biggest falls on the route; Pinnacle is a lone quartzite spire rising out of the forest. Both quick, both free or near enough.",
              },
              {
                title: "The Graskop Big Swing",
                body: "For the brave: a gorge swing at about R750, a zip-line at R280, or the combo at R900. Big Swing is 12+, zip-line 7+.",
              },
              {
                title: "Blyde River Canyon cruise",
                body: "A 90-minute hippo-and-croc boat cruise (R430 adult / R220 child) at the far north end — best as a full Panorama-north day.",
              },
            ]}
          />
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.graskopGorgeLift.src}
                alt={img.graskopGorgeLift.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The Graskop Gorge — boardwalks and swing bridges through rainforest
              on the gorge floor.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">3. Sabie and the waterfall country.</H2>
            <p>
              In the other direction, about forty-five minutes away, the land turns
              green and misty and fills with water. Sabie is a forestry town ringed
              by waterfalls, and it makes the gentlest, prettiest day of the week —
              the one to do when everybody needs a slower morning.
            </p>
            <p>
              The cluster is easy to string together:{" "}
              <strong>Mac Mac Falls</strong> (with swimmable pools nearby),{" "}
              <strong>Lone Creek Falls</strong> (a short flat walk in, and the most
              accessible),
              <strong> Horseshoe Falls</strong> and <strong>Sabie Falls</strong>{" "}
              right by town. Most charge somewhere between R25 and R50 a head. Add
              the <strong>SAFCOL Forestry Museum</strong> in Sabie if you have
              curious kids — it is the story of how this whole green corner of the
              country got planted, and it is more interesting than it sounds.
            </p>
          </div>
        </Section>

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
              One of the Sabie falls — a short forest walk in, and cool water at
              the bottom.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">4. Animals up close — and doing it honestly.</H2>
            <p>
              There is a real difference between the animal experiences around here,
              and we would rather you knew it than found out afterwards.
            </p>
          </div>
          <NumberedList
            variant="light"
            items={[
              {
                title: "Chimp Eden — a genuine sanctuary",
                body: "A Jane Goodall rescue and rehabilitation centre about 40 minutes away near Nelspruit. You view the chimps from platforms on a guided tour — no touching, no rides, no performances. About R290 (SA) or R330 (international) an adult; children R150/R175, under-6 free. Book ahead.",
              },
              {
                title: "Elephant Whispers — hands-on",
                body: "A close-up interaction: feeding, touching, meeting the elephants at close range. It is a different kind of experience to a sanctuary, and a popular one — we're simply telling you plainly what it is so you can choose for yourself.",
              },
              {
                title: "Perry's Bridge Reptile Park — right in Hazyview",
                body: "Snake shows, crocodiles, and everything scaly, all undercover. R184 an adult, R103 a child, under-5 free. Central, quick, and the winner when the weather turns. Closed Fridays outside school holidays.",
              },
              {
                title: "Moholoholo — rehabilitation, further out",
                body: "A wildlife rehabilitation centre roughly two hours away. Best paired with a Panorama-north or Blyde day rather than done on its own.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">5. The adrenaline side.</H2>
            <p>
              If you are travelling with teenagers — or you simply do not want to
              spend a whole week sitting in a car looking at impala — this is where
              the Lowveld earns its keep.
            </p>
          </div>
          <NumberedList
            variant="dark"
            items={[
              {
                title: "Skyway Trails canopy zip-line",
                body: "About two and a half hours gliding between treetop platforms over the Sabie valley, transfers included. Around R695, one rate for adults and children.",
              },
              {
                title: "The Long Tom Toboggan & Scootours",
                body: "A 1.7 km downhill run through grassland and forest at Misty Mountain on the Long Tom Pass. Toboggan or scootour — pure, silly, brilliant fun, and it suits mixed ages better than almost anything else here.",
              },
              {
                title: "Quad biking",
                body: "Trails through the Lowveld bush and farmland around Hazyview. Ask us and we'll point you at the right operator for your group's ages.",
              },
              {
                title: "River rafting & tubing on the Sabie",
                body: "About two hours on the water, roughly R600 (with cheaper midweek slots from around R460), minimum age about five. Seasonal — it depends on the river actually running, so check before you set your heart on it.",
              },
              {
                title: "Hiking, straight from the gate",
                body: "You don't have to drive anywhere for this one. The trails start on the farm and run out into the wider property and the hills behind it — the free, quiet, underrated activity of the whole week.",
              },
            ]}
          />
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.hazyviewZiplines.src}
                alt={img.hazyviewZiplines.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The canopy tour over the Sabie valley — about two and a half hours
              of it.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">6. Browsing, and a good meal.</H2>
            <p>
              Not every day needs an alarm. Two spots are worth an unhurried
              afternoon: <strong>Perry&rsquo;s Bridge</strong> in Hazyview — curios,
              craft shops and a cluster of good restaurants, with the reptile park
              attached — and <strong>Casterbridge</strong> out toward White River,
              which is boutique shops, galleries, a farmers-market feel and some of
              the best eating in the Lowveld.
            </p>
            <p>
              Both are easy, both are undercover-ish, and both are exactly what you
              want on the day after a 4:45am start.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The five-day plan that fits it all in.</H2>
            <p>
              This is how we&rsquo;d actually shape a week for you — big days and
              gentle days alternating, so nobody burns out by Wednesday.
            </p>
          </div>
          <NumberedList
            variant="timeline"
            items={[
              {
                time: "Day 1",
                title: "Kruger, early.",
                body: "Through the Phabeni gate at opening, the golden window until mid-morning, then home to the farm for a late breakfast and a slow afternoon by the pool. The best day of the trip, and everyone knows it by lunchtime.",
              },
              {
                time: "Day 2",
                title: "The Panorama Route.",
                body: "Up the escarpment. God's Window (or free Wonder View), Lisbon Falls, Bourke's Luck Potholes, and the Graskop Gorge Lift down into the rainforest. Big Swing for the brave. A full, spectacular day out.",
              },
              {
                time: "Day 3",
                title: "Sabie, waterfalls and a slow one.",
                body: "The gentle day. Two or three waterfalls, a swim at Mac Mac pools, the forestry museum if the kids are curious, and back in time to do nothing at all.",
              },
              {
                time: "Day 4",
                title: "Adventure day.",
                body: "Pick your poison: the Skyway canopy tour, quad biking, rafting if the river's running, or the toboggan run on the Long Tom Pass. This is the day the teenagers remember.",
              },
              {
                time: "Day 5",
                title: "Sanctuaries, then browsing.",
                body: "Chimp Eden in the morning (book ahead), then Perry's Bridge or Casterbridge for lunch and a browse. Home for a last braai under the mango trees.",
              },
            ]}
          />
        </Section>

        <Callout eyebrow="If you only have three days">
          Do Kruger, the Panorama Route, and one slow day. Everything else on this
          list is a reason to come back — and most of our guests do.
        </Callout>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Questions about what to do.</H2>
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
          Every price here is a 2026 guideline and the operators set their own.
          Rates, ages and opening days change — and the river doesn&rsquo;t always
          run. Check the live figure before you count on it, and message us,
          because we keep ours current.
        </Callout>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="Come and use the whole of it"
              thesis="Three great days out in three directions, all from one bed — and a farm to come home to when the day is done."
              body={
                <>
                  Tell us who&rsquo;s coming and how long you have, and we&rsquo;ll
                  build the week with you — which day for Kruger, what to book
                  ahead, what to skip if the weather turns, and which of these your
                  particular crew will actually love. We live here; we&rsquo;ll give
                  you the honest version.
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
                  label: "SANParks — Kruger rates & entry fees (official)",
                  href: "https://www.sanparks.org/parks/kruger/rates-entry-fees",
                },
                {
                  label: "Graskop Gorge Lift Company — official rates",
                  href: "https://www.graskopgorgeliftcompany.co.za/rates.html",
                },
                {
                  label: "Chimp Eden — Jane Goodall Institute South Africa",
                  href: "https://www.chimpeden.com/",
                },
                {
                  label: "Blyde Canyon Adventure Centre — boat trips",
                  href: "https://blydecanyon.co.za/boat-trips/",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Tell us what your crew likes, and we'll build the week"
          body="Send Anneli your dates and who's coming — ages, energy levels, whether you want the Big Swing or a hammock — and we'll shape the five days around you. We'll tell you what to book ahead, what's free, and what to skip. No forms, just a real conversation."
          buttonLabel="Plan your days on WhatsApp"
          pageKey="theLand"
        />

        {/* Related */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
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
                  Now you know what to do — here&rsquo;s the honest, simple version
                  of what it all adds up to.
                </p>
              </Link>
              <Link
                href="/blog/things-to-do-with-kids-hazyview-kruger"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Family & Kids
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  The same week, with children
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  How to pace all of this with little ones — and what to drop
                  before anybody melts down.
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
