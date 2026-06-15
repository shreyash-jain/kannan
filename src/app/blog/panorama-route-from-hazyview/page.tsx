import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { img } from "@/lib/images";
import { articleLd, faqLd } from "@/lib/jsonld";
import { createBlogPostMetadata } from "@/lib/blog";
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

const datePublished = "2026-06-15";
const headline =
  "The Panorama Route from Hazyview: God's Window, the Blyde River Canyon, and the loop that actually works";

const faqs = [
  {
    q: "How far is the Panorama Route from Hazyview?",
    a: "The nearest stops — the Sabie and Graskop waterfalls — are about thirty-five minutes from our gate. God's Window and Graskop sit roughly forty-five minutes to an hour away, and the far end of the loop at the Three Rondavels above the Blyde River Canyon is about an hour and a half. The whole thing is a comfortable day trip; you never have to pack a bag.",
  },
  {
    q: "Can you do the Panorama Route in one day?",
    a: "Yes, easily. A half-day covers the waterfalls, God's Window and the Graskop Gorge Lift. A full day adds Bourke's Luck Potholes and the Three Rondavels at the head of the Blyde River Canyon. Start early either way — the long escarpment views are clearest in the morning.",
  },
  {
    q: "Is the Panorama Route or Kruger better?",
    a: "They are different days, not rivals. Kruger is a slow wildlife morning; the Panorama Route is big scenery — waterfalls, viewpoints and a canyon you can see from space. Most of our guests do one of each in the same week, and that combination is exactly why people base themselves in Hazyview.",
  },
  {
    q: "What is the best time of year to drive the Panorama Route?",
    a: "The dry winter months, May to August, give you the clearest escarpment views — God's Window earns its name when the air is crisp. Summer fills the waterfalls but afternoon mist often closes the long views, so go early. Winter is also peak Kruger season, which is why it is our favourite time to host a Lowveld week.",
  },
  {
    q: "Do you need a 4x4 for the Panorama Route?",
    a: "No. The whole loop runs on good tar roads and an ordinary car handles it comfortably. Keep an eye on your fuel — fill up in Hazyview or Graskop — and take the mountain passes slowly.",
  },
  {
    q: "How much does the Panorama Route cost?",
    a: "The drive itself is free. A handful of sites charge a small entry fee — Bourke's Luck Potholes and the Graskop Gorge Lift are the main ones — so carry some cash and a card. Add fuel and a stop for pancakes in Graskop and you have budgeted the day.",
  },
  {
    q: "Can you visit Kruger and the Panorama Route on the same trip?",
    a: "That is the whole idea of staying in Hazyview. From Kanaan, Kruger's Phabeni gate is thirty to forty-five minutes one way and the Panorama Route begins about thirty-five minutes the other way. One base, two of South Africa's greatest days out.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "panorama-route-from-hazyview",
  title: "The Panorama Route from Hazyview",
  description:
    "God's Window, the Blyde River Canyon, the waterfalls and the Graskop Gorge Lift — the half-day and full-day loops from Hazyview, when to go for the clearest views, and how to pair a Panorama day with a Kruger morning.",
  image: img.panoramaGodsWindow,
  datePublished,
  category: "guide",
});

export default function PanoramaRouteGuidePage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical, distance-anchored guide to driving the Panorama Route from Hazyview — the half-day and full-day loops, God's Window, the Sabie and Graskop waterfalls, the Graskop Gorge Lift, Bourke's Luck Potholes and the Three Rondavels above the Blyde River Canyon, the season that gives the clearest views, and how to pair a Panorama day with a Kruger morning.",
          path: "/blog/panorama-route-from-hazyview",
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
            label: "Panorama Route from Hazyview",
            href: "/blog/panorama-route-from-hazyview",
          },
        ]}
      />

      <article>
        <BlogHero
          image={img.panoramaGodsWindow.src}
          alt={img.panoramaGodsWindow.alt}
          eyebrow="Guide · Panorama Route"
          title="The Panorama Route, from your driveway."
          intro="God's Window, the Blyde River Canyon and a string of waterfalls — the edge of the escarpment begins about forty minutes from our gate. Here is the loop, in the order that works, and the one piece of timing that makes or breaks the view."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={9}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "The Panorama Route begins about thirty-five minutes from our gate — God's Window and the Blyde River Canyon are a comfortable day trip, not a separate holiday.",
                "Two ways to do it: a half-day near loop (waterfalls, God's Window, the Graskop Gorge Lift) or a full-day loop out to Bourke's Luck Potholes and the Three Rondavels.",
                "Go in the morning. The long escarpment views are clearest before the afternoon cloud rolls up — and clearest of all on a dry winter's day.",
                "Pair one Panorama day with one Kruger morning and three slow farm days, and you have the whole Lowveld in a single week.",
              ]}
            />

            <p>
              When guests sit down to breakfast and ask us &ldquo;what else is
              there, besides Kruger?&rdquo; — this is the answer. The Panorama
              Route is the edge of the Drakensberg escarpment, the great green
              shelf where the Highveld falls away into our Lowveld, and it
              starts just up the road. God&rsquo;s Window, a string of
              waterfalls, and a canyon so big you can pick it out from space,
              all within a morning&rsquo;s drive of the mango grove.
            </p>
            <p>
              It catches people out that they don&rsquo;t have to move. Most
              first-timers plan the Panorama Route as a trip of its own, with a
              night or two up in Graskop. You can do it that way. But from
              Kanaan you simply don&rsquo;t need to — it is a day out and a bed
              you already know to come back to, with the kettle where you left
              it and the pool warm by the time you return.
            </p>
            <p>
              So here is the loop we send our guests on. The stops worth your
              time, in the order that actually works on the road, the season
              that hands you the clearest views, and the way to fold one
              unforgettable Panorama day into a slower South African week.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Where the Panorama Route actually starts (basically your
              driveway).
            </H2>
            <p>
              Hazyview is the southern gateway to the Panorama Route, which is a
              tidy way of saying the whole thing unrolls northwards from right
              here. The route is really a loop — up the R536 and R532 through
              Sabie and Graskop, along the lip of the Blyde River Canyon, and
              back down again — and how far you go around it is the only real
              decision you have to make.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: "~35 min",
                label: "Sabie & the waterfalls",
                body: "The nearest edge of the route — the Mac Mac, Lisbon and Berlin falls, an easy first morning out and gentle enough for small children.",
              },
              {
                value: "~45 min",
                label: "Graskop & God's Window",
                body: "The heart of the Panorama Route: the headline viewpoint, the Graskop Gorge Lift, and pancakes in town when you need them.",
              },
              {
                value: "~90 min",
                label: "Blyde River Canyon",
                body: "The far turn — Bourke's Luck Potholes and the Three Rondavels above the canyon, the reason to give the loop a whole day.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The half-day loop, or the full day out.</H2>
            <p>
              The single thing that shapes your Panorama day is how far up the
              canyon you want to drive. There are two honest versions of this
              trip, and the right one depends entirely on what else your week
              is carrying.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "The half-day near loop",
                body: "Sabie's waterfalls, God's Window and the Graskop Gorge Lift, and you are back at Kanaan for a late lunch and a swim. The right call on a week when you have also got a Kruger morning — two big days back to back is one too many.",
              },
              {
                title: "The full-day Blyde loop",
                body: "Push north past Graskop to Bourke's Luck Potholes and the Three Rondavels above the canyon. Pack a picnic, fill the tank, and give it the whole day. Home in good time for a sundowner on the veranda.",
              },
            ]}
          />
        </Section>

        {/* Inline image — the full-day payoff, the Three Rondavels */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.panorama.src}
                alt={img.panorama.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The Three Rondavels above the Blyde River Canyon — the turning
              point of the full-day loop.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The stops worth your time, in order.</H2>
            <p>
              You could spend three days on the Panorama Route and not see
              everything, and you absolutely do not need to. These are the
              stops we actually send people to, north to south as the loop runs,
              so you can read the day at a glance before you leave the
              breakfast table.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Mac Mac, Lisbon & Berlin Falls",
                body: "Three of the prettiest waterfalls in the country, each a short walk from the car park. Mac Mac has a little pool and picnic lawns; Lisbon is the tallest. A perfect, low-effort first stop.",
              },
              {
                title: "The Pinnacle",
                body: "A single free-standing quartzite spire rising out of the forested gorge. Five minutes, one photograph, and a sense of how high up the escarpment you have climbed.",
              },
              {
                title: "God's Window",
                body: "The headline view — a sheer drop of nearly a kilometre to the Lowveld floor. If the rainforest climb is too much for small legs, Wonder View a minute up the road gives you the same drop without the steps.",
              },
              {
                title: "Graskop Gorge Lift",
                body: "A glass lift drops you down the cliff into indigenous rainforest, with a boardwalk along the gorge floor. The one paid stop most people are glad they made — and Harrie's Pancakes is two minutes away in town.",
              },
              {
                title: "Bourke's Luck Potholes",
                body: "Where the Treur River meets the Blyde, the water has carved deep, smooth cylinders into the rock over thousands of years. Footbridges let you look straight down into them. A small entry fee applies.",
              },
              {
                title: "The Three Rondavels",
                body: "The image on every postcard — three round, hut-shaped peaks standing over the green sweep of the Blyde River Canyon. The natural turnaround point before the long, lovely drive home.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">God&rsquo;s Window — and how to skip the crowd.</H2>
            <p>
              If the Panorama Route has a single famous face, this is it. From
              the highest of the viewpoints you look down nearly a thousand
              metres to the Lowveld, with the Kruger lowveld hazing away to the
              horizon and, on a clear day, the suggestion of Mozambique beyond.
              There is a short, steep path up into a pocket of rainforest to the
              very top lookout — worth it if your legs are willing.
            </p>
            <p>
              Here is the local&rsquo;s trick we pass on at the table: if the
              car parks are full or the children are flagging, drive on to{" "}
              <strong>Wonder View</strong>, barely a minute further up the road.
              It sits slightly higher, the drop is just as breathtaking, and
              you will very often have it almost to yourself.
            </p>
          </div>
        </Section>

        {/* Inline image — God's Window / escarpment viewpoint */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.wonderView.src}
                alt={img.wonderView.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Wonder View, a minute up the road from God&rsquo;s Window — the
              same drop, without the crowd.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The waterfalls — Mac Mac, Lisbon and Berlin.</H2>
            <p>
              Between Sabie and Graskop the escarpment is stitched with
              waterfalls, and a handful of them sit right beside the road. Mac
              Mac Falls plunges in a double cascade — the name a leftover from
              the Scottish diggers of the gold-rush days — and the nearby Mac
              Mac Pools are a lovely, safe place for children to paddle on a
              warm afternoon. Lisbon Falls is the tallest on the route, a clean
              ninety-metre ribbon into a green amphitheatre; Berlin Falls drops
              in a single column beside it.
            </p>
            <p>
              None of these asks much of you. They are short walks from the car,
              gentle on small children and older travellers alike, and they make
              the easiest possible introduction to the route if you only have a
              half-day to spend.
            </p>
          </div>
        </Section>

        {/* Inline image — a Sabie-cluster waterfall */}
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
              A waterfall near Sabie — a short, easy walk in from the road.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The Graskop Gorge Lift — down into the rainforest.</H2>
            <p>
              This is the one paid stop that almost nobody regrets. A glass
              elevator carries you fifty-one metres down the face of the
              Graskop Gorge into a pocket of ancient indigenous forest, where a
              network of suspended boardwalks and swing bridges threads along
              the gorge floor beneath the canopy. It is gentle, it is genuinely
              beautiful, and it turns a viewpoint into something the children
              actually walk through rather than just look at.
            </p>
            <p>
              Graskop itself is the right lunch stop on either loop. Harrie&rsquo;s
              Pancakes has been feeding Panorama Route travellers for decades —
              order one savoury and one sweet, you will want both.
            </p>
          </div>
        </Section>

        {/* Inline image — the gorge lift / rainforest floor */}
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
              The indigenous rainforest at the foot of the Graskop Gorge Lift.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Bourke&rsquo;s Luck Potholes & the Blyde River Canyon.</H2>
            <p>
              The far end of the loop is where the Panorama Route earns its
              reputation. At Bourke&rsquo;s Luck Potholes, the meeting of the
              Treur and Blyde rivers has spun and scoured the rock into deep,
              smooth cylinders the colour of old honey — a short circuit of
              footbridges lets you look right down into them. It is named for a
              gold prospector who, fittingly, found very little gold here.
            </p>
            <p>
              A little further on, the road opens onto the Blyde River Canyon
              itself: twenty-six kilometres long, up to eight hundred metres
              deep, and one of the largest green canyons on earth. The Three
              Rondavels viewpoint is the classic stop — three round peaks
              standing over the dam far below — and it is the right place to
              turn the car around and start the unhurried drive back down to the
              Lowveld and home.
            </p>
          </div>
        </Section>

        {/* Inline image — Bourke's Luck Potholes */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.bourkesLuck.src}
                alt={img.bourkesLuck.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The carved rock of Bourke&rsquo;s Luck Potholes, where the Treur
              meets the Blyde.
            </figcaption>
          </figure>
        </div>

        <Callout eyebrow="The one piece of timing that matters">
          Drive the escarpment before noon. By early afternoon the cloud climbs
          up out of the Lowveld, and God&rsquo;s Window quietly becomes
          God&rsquo;s Curtain.
        </Callout>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">When to go — the season decides the view.</H2>
            <p>
              Kruger&rsquo;s seasons are about where the animals are. The
              Panorama Route&rsquo;s seasons are about whether you can see
              anything at all — the long views live and die by the mist, and
              the waterfalls by the rain. Here is what we tell guests who ask us
              when to drive it.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: "May–Aug",
                label: "Winter — clearest views",
                body: "Crisp, dry mornings and glass-clear air. The escarpment views are at their sharpest and God's Window truly opens. The waterfalls run thinner. Our favourite — and peak Kruger season too.",
              },
              {
                value: "Sep–Nov",
                label: "Spring — the sweet spot",
                body: "Warming days, greening bush, thinner crowds. Enough water still in the falls and mornings that stay clear. A lovely, in-between time to take the loop slowly.",
              },
              {
                value: "Dec–Apr",
                label: "Summer — full waterfalls",
                body: "The falls are in full thunder and the canyon is impossibly green — but afternoon cloud and mist often draw a curtain across the long views. Start at sunrise and you will beat it.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              If you are reading this in the South African winter, you have
              picked the right season twice over: the clearest escarpment views
              of the year, and the best game-viewing months in Kruger, in the
              same crisp, blue-sky week.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What to know before you turn off the R40.</H2>
            <p>
              The Panorama Route is one of the easiest great drives in the
              country — good tar the whole way, no 4x4 required — but a few
              small things make the difference between a smooth day and a
              flustered one.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Fuel up before you climb",
                body: "Fill the tank in Hazyview or Graskop. The viewpoints are remote and the passes are thirsty — you do not want to be watching the gauge instead of the canyon.",
              },
              {
                title: "Carry cash and a card",
                body: "Most stops are free, but Bourke's Luck Potholes and the Graskop Gorge Lift charge a small entry fee, and not every kiosk takes a card. A couple of hundred rand in cash covers the day.",
              },
              {
                title: "Dress in layers",
                body: "It is a thousand metres higher up there than it is at the farm. Mornings on the escarpment are genuinely cold in winter, even when the Lowveld is warm — a jacket you can shed by midday.",
              },
              {
                title: "Take the passes gently",
                body: "The mountain roads wind. If anyone in the car is prone to motion sickness, sit them in front, go slowly, and stop often — the stops are the whole point anyway.",
              },
              {
                title: "Leave early",
                body: "On the road by eight at the latest. You beat the tour buses to the viewpoints, you beat the afternoon cloud to the views, and you are home before the light goes.",
              },
              {
                title: "Eat in Graskop",
                body: "Pack water and snacks, but save lunch for Harrie's Pancakes in Graskop — it is a Panorama Route institution and a happy, warm halfway point.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Pairing it with Kruger: the perfect Lowveld week.</H2>
            <p>
              This is the part most people miss. The Panorama Route and Kruger
              are not an either-or — they are the two great days at the centre of
              a single, unhurried week, and Hazyview is the one place you can do
              both from the same bed. Here is the rhythm we watch our happiest
              guests fall into.
            </p>
          </div>
          <NumberedList
            variant="timeline"
            items={[
              {
                time: "Day 1",
                title: "Arrive and settle",
                body: "Check in, find your room, and do nothing more ambitious than a sundowner under the mango grove. The week starts slowly on purpose.",
              },
              {
                time: "Day 2",
                title: "A Kruger morning",
                body: "Out of the gate before dawn for a half-day in the park, back at the farm for lunch and a long afternoon by the pool.",
              },
              {
                time: "Day 3",
                title: "The Panorama Route",
                body: "The full-day loop — waterfalls, God's Window, the gorge lift, the canyon — pancakes in Graskop, home for a braai.",
              },
              {
                time: "Day 4",
                title: "A slow farm day",
                body: "A walk to the waterfall on Kanaan, a book under the trees, maybe a second short Kruger drive if the bug has bitten. No alarm clock.",
              },
              {
                time: "Day 5",
                title: "Home, unhurried",
                body: "A last breakfast at the long table, the road out through the Lowveld, and a week's worth of South Africa already behind you.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              The Kruger half of that week has a guide of its own —{" "}
              <Link
                href="/blog/kruger-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Kruger from Hazyview: the gates, the timing and the morning that
                works
              </Link>{" "}
              — and if you would like the feeling of the whole week rather than
              the logistics,{" "}
              <Link
                href="/blog/africa"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Anneli wrote a longer letter about it
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* Inline image — the place the day comes home to */}
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
              Back at Kanaan at the end of the loop — the bed you already knew
              to come home to.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Questions we get asked about the Panorama Route.</H2>
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
            <ClosingBlock
              title="One escarpment, one week"
              thesis="Kruger in the morning, the Panorama Route for a day, and the mango grove to come home to. That is the Lowveld week most people drive straight past."
              body={
                <>
                  The mistake is treating the Panorama Route as somewhere you
                  stay. The better move is treating it as one unforgettable day
                  in a slower week based here with us — close enough that the
                  canyon is a morning&rsquo;s drive, and far enough that coming
                  home to the farm still feels like coming home.
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
                  label: "Mpumalanga Tourism · the Panorama Route and surrounds",
                  href: "https://www.mpumalanga.com/",
                },
                {
                  label: "SA-Venues · Panorama Route map (Sabie, Graskop, Blyde River Canyon)",
                  href: "https://www.sa-venues.com/maps/mpumalanga-panorama-route.htm",
                },
                {
                  label: "South African History Online · Panorama Route, Mpumalanga",
                  href: "https://sahistory.org.za/place/panorama-route-mpumalanga",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Want help planning your Panorama day?"
          body="WhatsApp Anneli or Matthew — we'll help you decide between the half-day and the full loop, fit it around your Kruger morning, and pack the right day for the season you're visiting in. No forms, no auto-responses, just a real conversation about your week."
          buttonLabel="Plan your Panorama day on WhatsApp"
          pageKey="theLand"
        />

        {/* Related */}
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
                  The other great morning of the week — the gates, the timing,
                  and the half-day plan that gets you back to the farm for
                  lunch.
                </p>
              </Link>
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
                  Kruger, the Panorama Route, and the rhythm of the Lowveld.
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
