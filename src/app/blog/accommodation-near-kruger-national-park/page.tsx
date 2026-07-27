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

// ---------------------------------------------------------------------
// SEO focus for this cornerstone (search-optimised Guide):
//   • Focus keyword (1):  accommodation near Kruger National Park
//   • Primary keywords:   places to stay near Kruger National Park ·
//                         Kruger National Park accommodation ·
//                         accommodation in Hazyview · Kanaan Guest Farm
//   • Secondary / long-tail: best places to stay near Kruger National Park ·
//                         affordable accommodation near Kruger National Park ·
//                         where to stay near Kruger National Park ·
//                         guest farm near Kruger National Park ·
//                         self-catering accommodation Hazyview ·
//                         best accommodation in Hazyview for a Kruger safari
//
// OWNER REVIEW (Anneli, voice notes 2026-07-27) — this revision applied:
//   1. "Hazyview" is the town, so the copy says "why Hazyview", never "a
//      Hazyview farm". Clunky phrases ("makes the best base", "the honest
//      case") are gone; sentences are shorter and read aloud naturally.
//   2. The word "honest" was doing the opposite of its job. Intent is now
//      stated ONCE, up top ("not a sales pitch") and never repeated.
//   3. Trimmed hard — 11 min → 7 min. The cost section no longer opens on a
//      stranded one-liner; every section is shorter.
//   4. Keywords stay (they carry the SEO) but are woven into short sentences
//      rather than repeated — readability first.
//
// Link budget (per brief): 5 contextual INTERNAL links — /stay · /camping ·
//   /blog/kruger-from-hazyview · /blog/panorama-route-from-hazyview ·
//   /blog/cost-of-a-kruger-lowveld-week-2026 — and 5 EXTERNAL links across 5
//   domains: sanparks.org · krugerpark.co.za · kmiairport.co.za ·
//   mpumalanga.com · sa-venues.com, each repeated in the Sources block.
// ---------------------------------------------------------------------

const datePublished = "2026-07-27";
const headline =
  "Accommodation near Kruger National Park: where to stay, and why Hazyview makes the week easier";

const faqs = [
  {
    q: "Where is the best place to stay near Kruger National Park?",
    a: `One of the towns just outside the southern gates, and we would pick Hazyview. From here it is ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes to the Phabeni and Numbi gates, about forty minutes to the start of the Panorama Route, and ${site.distances.kmiaMinutes} minutes to the airport. You get early game drives without in-park camp rates, and you never have to change accommodation mid-week.`,
  },
  {
    q: "Is it better to stay inside Kruger or just outside the park?",
    a: "They are different holidays. Inside, you sleep in the bush and can be at a waterhole before the day visitors arrive — but the rest camps book out months ahead, cost more, and there is little to do on a rest day. Outside, you get a room with a kitchen, a pool and the Panorama Route within reach, for a thirty-to-forty-five-minute drive to the gate each morning. Plenty of guests do a night or two inside and base the rest of the week with us.",
  },
  {
    q: "Is there affordable accommodation near Kruger National Park?",
    a: `Yes — it is one of the reasons people base themselves in Hazyview. Our rooms start at R${site.pricing.fromZAR} per person sharing per night, well below the regional average, and camping costs less again. With a kitchenette you are not eating out three times a day either, which is usually the bigger saving.`,
  },
  {
    q: "Do you have self-catering accommodation in Hazyview?",
    a: "Most of our lodge units have their own kitchenette — kettle, two-plate hob, fridge, plates and mugs — plus a private en-suite bathroom. So you can make coffee before a dawn drive and cook something simple when you get back. There are braai facilities on the farm too.",
  },
  {
    q: "What kinds of accommodation does Kanaan Guest Farm offer?",
    a: `Four, on one farm: self-catering lodge rooms; simple twin rooms with two single beds; an ${site.capacity.backpackersBeds}-bed wooden-house backpacker dorm; and ${site.capacity.campsitePitches} shaded campsites under the forty-year-old mango grove, each with power and water at the pitch. The rooms sleep around ${site.capacity.sleepingTotal} guests, with room for many more camping.`,
  },
  {
    q: "How far are the Kruger gates and the airport, and do we need a car?",
    a: `The Phabeni and Numbi gates are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes away and Kruger Mpumalanga International Airport (KMIA) is ${site.distances.kmiaMinutes} minutes, with daily flights from Johannesburg and Cape Town. Hire a car — self-driving Kruger is half the pleasure, and the Panorama Route is a driving route. If you would rather not drive, we will point you at guided-drive operators we trust.`,
  },
];

export const metadata = createBlogPostMetadata({
  slug: "accommodation-near-kruger-national-park",
  title:
    "Accommodation near Kruger National Park: where to stay, and why Hazyview works",
  description:
    "Where to stay near Kruger National Park, explained plainly. Inside the park versus just outside it, why Hazyview sits between the gates and the escarpment, and the four ways to stay at Kanaan Guest Farm — self-catering lodge rooms, twin rooms, a backpacker dorm and camping under forty-year-old mango trees. From R250 per person sharing, 30–45 minutes from the gate.",
  image: img.stayNearKrugerArrival,
  datePublished,
  category: "guide",
});

export default function AccommodationNearKrugerPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical guide to accommodation near Kruger National Park, written by the family who run Kanaan Guest Farm outside Hazyview. The trade-off between in-park rest camps and staying just outside the gates, why Hazyview sits between Kruger and the escarpment, the four ways to stay on a working guest farm — self-catering lodge rooms, twin rooms, a backpacker dorm and shaded camping — what it costs, and what else is on the doorstep. From R250 per person sharing, 30 to 45 minutes from the Kruger gate.",
          path: "/blog/accommodation-near-kruger-national-park",
          image: img.stayNearKrugerArrival.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal & Guides", href: "/blog" },
          {
            label: "Accommodation near Kruger",
            href: "/blog/accommodation-near-kruger-national-park",
          },
        ]}
      />

      <article>
        <BlogHero
          image={img.stayNearKrugerArrival.src}
          alt={img.stayNearKrugerArrival.alt}
          eyebrow="Guide · Where to stay"
          title="Accommodation near Kruger National Park — and why Hazyview makes the week easier."
          intro="Not a sales pitch, just our real take on where to sleep near the park: inside Kruger or just outside it, why Hazyview, and the four ways to stay with us — from R250 per person sharing."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={7}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "Where you sleep decides how much of Kruger you actually see, and what the week costs.",
                `Hazyview is ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Phabeni and Numbi gates, forty from the Panorama Route, ${site.distances.kmiaMinutes} from the airport.`,
                "In-park camps are lovely, but they book out months ahead and leave you nothing to do on a rest day. Just outside, you get a kitchen, a pool and change in your pocket.",
                `Four ways to stay on one farm: self-catering lodge rooms, twin rooms, an ${site.capacity.backpackersBeds}-bed backpacker dorm and ${site.capacity.campsitePitches} shaded campsites.`,
                `From R${site.pricing.fromZAR} per person sharing — so a mixed group of families, couples and campers can all stay in the same place.`,
              ]}
            />

            <p>
              Most messages we get start the same way. The flights are booked,
              a week is circled on the calendar, and then comes the hard part:
              there are hundreds of options for{" "}
              <strong>accommodation near Kruger National Park</strong>, they all
              say they are close to the gate, and a listing never tells you
              which ones really are.
            </p>
            <p>
              So this is not a sales pitch. It is what we would tell a friend —
              from two people who live half an hour from Phabeni gate and wave
              guests off to the park most mornings of the year.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Inside the park, or just outside it?</H2>
            <p>
              The rest camps inside Kruger are special — waking to hyena calls
              behind the fence is something everyone should do once. But they
              book out months ahead, they cost more than most guest farms
              outside, and on the day you want to rest there is very little to
              rest into.
            </p>
            <p>
              Staying outside the gate flips that. You still make the
              opening-time drive, which is the best game viewing of the day, and
              then you come home to a kitchen, a pool and a braai. On the day
              nobody wants to see another impala, the Panorama Route is waiting
              instead. Gate times shift with the season, so check{" "}
              <a
                href="https://www.sanparks.org/parks/kruger"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                SANParks&rsquo; official Kruger pages
              </a>{" "}
              before you plan your mornings.
            </p>
          </div>
          {/* Inline image — dusk inside a park rest camp (the other option) */}
          <div className="my-8 mx-auto max-w-5xl px-5 lg:px-8">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.krugerRestCampDusk.src}
                  alt={img.krugerRestCampDusk.alt}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The other option — dusk inside a park rest camp, the fence and
                the bushveld right there. Worth doing once.
              </figcaption>
            </figure>
          </div>
          <StatGrid
            stats={[
              {
                value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`,
                label: "To the Kruger gates",
                body: "Phabeni and Numbi, the two southern gates into the best-stocked corner of the park. Close enough to be through the boom at opening time.",
              },
              {
                value: `${site.distances.kmiaMinutes} min`,
                label: "To the KMIA airport",
                body: "Daily flights from Johannesburg and Cape Town. Land at lunchtime, be on the farm for sundowners.",
              },
              {
                value: `From R${site.pricing.fromZAR}`,
                label: "Per person sharing",
                body: "Per night, well below the regional average — and with a kitchenette, so the food bill stays yours.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Why Hazyview, of all the towns nearby.</H2>
            <p>
              Several towns line the southern edge of the park, and they each
              have their case. Hazyview&rsquo;s is simple: it is the one that
              sits between the Kruger gates <em>and</em> the escarpment, so you
              never have to choose a side of your holiday.
            </p>
          </div>
          {/* Inline image — the valley from the air, the geography argument */}
          <div className="my-8 mx-auto max-w-5xl px-5 lg:px-8">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.hazyviewBaseAerial.src}
                  alt={img.hazyviewBaseAerial.alt}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The escarpment on the left, the flat bushveld that becomes
                Kruger on the right, and the orchard valley in between. That is
                where Hazyview sits.
              </figcaption>
            </figure>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Two Kruger gates close by",
                body: `Phabeni and Numbi are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes away, so an opening-time arrival is realistic rather than heroic.`,
              },
              {
                title: "The Panorama Route the other way",
                body: "God's Window, Bourke's Luck Potholes, the Blyde River Canyon and the Sabie waterfalls all start about forty minutes up the road.",
              },
              {
                title: "A real town for the practical things",
                body: "Supermarkets, fuel, a pharmacy and the Perry's Bridge shops are ten minutes from our gate. Self-catering only works where you can buy groceries.",
              },
              {
                title: "One base for the whole week",
                body: "Because both the park and the escarpment are reachable from here, you unpack once. No mid-week move, no second check-in.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What Kanaan is like.</H2>
            <p>
              We took over the farm in {site.ownedSince} and have been rebuilding
              it slowly — the water, the WiFi, the gate, then the rooms, one at a
              time. What we could not renovate is the part guests mention
              afterwards: the forty-year-old mango grove, the view down the
              valley, and Anneli or Matthew meeting you at the gate instead of a
              front desk.
            </p>
            <p>
              It is a working farm, which means space — lawns, macadamia rows,
              trails, a waterfall on our own land and a pool that has ended a
              great many hot Kruger afternoons. It also means quiet evenings,
              while town is still close enough that a forgotten bag of charcoal
              is a ten-minute problem.
            </p>
          </div>
          <Callout eyebrow="What we are, and what we are not">
            We are not a five-star lodge and we do not price like one. We are a
            comfortable, affordable, family-run farm half an hour from the
            Kruger gate — and for a week in the Lowveld, that is usually the
            better trade.
          </Callout>
        </Section>

        {/* Inline images — a lodge room and its real self-catering kitchenette */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.lodgeRoom.src}
                  alt={img.lodgeRoom.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                A renovated lodge room — crisp linen, a beamed ceiling and a
                fan, with the bush outside the window.
              </figcaption>
            </figure>
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
                And the kitchenette that comes with most of them — a kettle for
                the 5am coffee, a hob for the supper after.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The four ways to stay.</H2>
            <p>
              A guest farm can hold four budgets on one property, under the same
              trees. The bedding differs from room to room, so tell us who is
              coming and we will match you up. Photographs and current rates are
              on our{" "}
              <Link
                href="/stay"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                stay page
              </Link>
              .
            </p>
          </div>
          <NumberedList
            items={[
              {
                title: "Self-catering lodge rooms",
                body: "Each one stands on its own, with an en-suite bathroom, a kitchenette, a TV, free WiFi, linen and towels. Best for families and longer stays — you cook when you feel like it and eat out when you don't.",
              },
              {
                title: "Simple twin rooms",
                body: "Two single beds, an en-suite, a wall fan and a small table for a slow morning coffee. Fairly priced, and ideal for friends sharing or a parent and child on a first safari.",
              },
              {
                title: `The wooden-house backpackers · ${site.capacity.backpackersBeds} beds`,
                body: "A pine-clad dorm house with a lounge, shared kitchenette and a long table people actually sit around. For overlanders and anyone who would rather spend the money on park fees.",
              },
              {
                title: `Camping under the mango grove · ${site.capacity.campsitePitches} pitches`,
                body: "Shaded grass, power and water at every pitch, and a timber ablution block with hot showers. The cheapest bed near the gate — and on a warm Lowveld night, arguably the best.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              If it is the camping that appeals, the pitches and what is
              included are laid out on our{" "}
              <Link
                href="/camping"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                camping page
              </Link>
              . Breakfast and dinner can be put on for you on request, whichever
              way you are sleeping.
            </p>
          </div>
        </Section>

        {/* Inline images — the camping ground, and where the day ends */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.campingGround.src}
                  alt={img.campingGround.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The camping ground under the mango grove — power and water at
                the pitch, and shade all afternoon.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.poolSunset.src}
                  alt={img.poolSunset.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                And the pool at sunset — where a long, dusty day in the park is
                supposed to end.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Families, couples, backpackers, campers — all at once.
            </H2>
            <p>
              Because the farm offers all four kinds of accommodation, a group
              that would normally split across three price brackets can stay
              together. We have had grandparents in a lodge unit, parents in a
              family room and students in the dorm, all at the same braai.
              Families get space and a kitchen, couples get quiet evenings, and
              campers get a cheap bed half an hour from the gate. One thing to
              know: we are not set up for pets.
            </p>
          </div>
          {/* Inline image — the mixed-group braai a farm makes possible */}
          <div className="my-8 mx-auto max-w-5xl px-5 lg:px-8">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.farmBraaiMixedGroup.src}
                  alt={img.farmBraaiMixedGroup.alt}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                A lit unit on one side, tents on the other, everybody at the
                same fire. This is the part a hotel cannot do.
              </figcaption>
            </figure>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Kruger and the Panorama Route from here.</H2>
            <p>
              From here the park is a morning: through Phabeni or Numbi at
              opening, the southern loops, a picnic site for coffee, home for
              lunch. Which gate to use and the half-day plan that works are in
              our{" "}
              <Link
                href="/blog/kruger-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Kruger-from-Hazyview guide
              </Link>
              , and the{" "}
              <a
                href="https://www.krugerpark.co.za/Kruger_Park_Travel_Advisory-travel/conservation-fees.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                current conservation fees are published here
              </a>{" "}
              — worth checking, as they are reviewed each year.
            </p>
            <p>
              The other direction is the escarpment: God&rsquo;s Window, the
              Blyde River Canyon, the Graskop gorge lift and a string of
              waterfalls. Our{" "}
              <Link
                href="/blog/panorama-route-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Panorama Route guide
              </Link>{" "}
              sets out the half-day and full-day loops, and{" "}
              <a
                href="https://www.sa-venues.com/maps/mpumalanga-panorama-route.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                this route map
              </a>{" "}
              is useful beside it. For sanctuaries, canopy tours and rafting,
              the{" "}
              <a
                href="https://www.mpumalanga.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Mpumalanga tourism site
              </a>{" "}
              lists the lot. Flying in?{" "}
              <a
                href="https://www.kmiairport.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                KMIA
              </a>{" "}
              is {site.distances.kmiaMinutes} minutes from our gate — hire a car
              there and you will reach us before the light goes.
            </p>
          </div>
        </Section>

        {/* Inline image — the 4:45am start a self-catering kitchen makes possible */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.predawnKitchenetteCoffee.src}
                alt={img.predawnKitchenetteCoffee.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Quarter to five — your own coffee in a flask, the keys, the map,
              and the gate half an hour away.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What a week here costs.</H2>
            <p>
              The bed is only one line of the budget. Gate fees, fuel, an
              activity or two and food all add up, and a cheap room can quietly
              cost you more if it sits an hour further from the gate or has
              nowhere to cook. Ours start at R{site.pricing.fromZAR} per person
              sharing per night, camping costs less, and most units have a
              kitchenette — so the food bill stays yours rather than a
              restaurant&rsquo;s.
            </p>
          </div>
          <Callout eyebrow="Every real number, in one place">
            We laid out the whole 2026 arithmetic — gate fees by tier, the Wild
            Card break-even, flights, food and three worked weekly budgets — in
            the{" "}
            <Link
              href="/blog/cost-of-a-kruger-lowveld-week-2026"
              className="text-ochre hover:text-ochre-deep"
            >
              cost-of-a-Lowveld-week guide
            </Link>
            . It will show you plainly where to spend less.
          </Callout>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Questions we get asked before booking.</H2>
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
              title="Where to stay near Kruger"
              thesis="The best accommodation near Kruger National Park is not the grandest. It is close enough for the dawn drive, comfortable enough to come home to, and priced so the rest of the week is still affordable."
              body={
                <>
                  That is what we have built here — a real farm half an hour
                  from the gate, with a bed for whichever kind of traveller you
                  are. Send us your dates and who is coming, and Anneli or
                  Matthew will reply personally with what we would put you in
                  and why.
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
                  label:
                    "SANParks — Kruger National Park: gates, opening times and conditions",
                  href: "https://www.sanparks.org/parks/kruger",
                },
                {
                  label:
                    "Kruger Park — conservation (gate) fees for day visitors",
                  href: "https://www.krugerpark.co.za/Kruger_Park_Travel_Advisory-travel/conservation-fees.html",
                },
                {
                  label:
                    "Kruger Mpumalanga International Airport (KMIA) — flights & car hire",
                  href: "https://www.kmiairport.co.za/",
                },
                {
                  label:
                    "Mpumalanga Tourism — Hazyview, the Lowveld and the Panorama Route",
                  href: "https://www.mpumalanga.com/",
                },
                {
                  label: "SA-Venues — Panorama Route map and viewpoints",
                  href: "https://www.sa-venues.com/maps/mpumalanga-panorama-route.htm",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Tell us who's coming, and we'll pick your room."
          body={`Send Anneli or Matthew your dates and party — a family, a couple, a car full of friends or a tent — and we'll tell you which of the four ways to stay suits you, what it costs, and how the Kruger mornings work from here. From R${site.pricing.fromZAR} per person sharing.`}
          buttonLabel="Check availability on WhatsApp"
          pageKey="stay"
        />

        {/* Related */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/when-to-visit-kruger-hazyview-month-by-month"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Seasonal almanac
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  When to visit Kruger &amp; Hazyview
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  All twelve months — the weather, the wildlife, the views and
                  the crowds, and how to find the week that is yours.
                </p>
              </Link>
              <Link
                href="/blog/early-morning-kruger-safari-from-hazyview"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · The dawn drive
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  First Light: an early-morning Kruger safari
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  The best morning of any Kruger trip — and why you can only
                  catch it when you sleep half an hour from the gate.
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
