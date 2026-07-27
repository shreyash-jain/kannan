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
// Woven into the H1, section headings, intro, FAQ and meta — never stuffed.
// Anneli's warm first-person voice comes first; search second.
//
// Link budget (deliberate, per brief): 5 contextual INTERNAL links —
//   /stay · /camping · /blog/kruger-from-hazyview ·
//   /blog/panorama-route-from-hazyview · /blog/cost-of-a-kruger-lowveld-week-2026
// and 5 contextual EXTERNAL links (5 distinct authority domains) —
//   sanparks.org · krugerpark.co.za · kmiairport.co.za · mpumalanga.com ·
//   sa-venues.com — each repeated in the Sources block at the foot.
// ---------------------------------------------------------------------

const datePublished = "2026-07-27";
const headline =
  "Accommodation near Kruger National Park: an honest guide to where to stay, and why a Hazyview guest farm works";

const faqs = [
  {
    q: "Where is the best place to stay near Kruger National Park?",
    a: `For most first-time visitors it is one of the towns just outside the southern gates, and Hazyview is the pick of them. From here you are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Phabeni and Numbi gates, about forty minutes from the start of the Panorama Route, and ${site.distances.kmiaMinutes} minutes from the Kruger Mpumalanga International Airport. You get early game drives without paying in-park camp rates, and you can swap between wildlife days and waterfall days without ever changing accommodation.`,
  },
  {
    q: "Is it better to stay inside Kruger or just outside the park?",
    a: "Both are lovely, and they are honestly different holidays. Inside the park you wake up to the bush and can be at a waterhole before the gates even open to day visitors — but the rest camps book out months ahead, cost more, and there is very little to do on a rest day. Staying just outside gives you comfortable rooms, a kitchen, a pool, better value and the whole Panorama Route within reach, at the price of a thirty-to-forty-five-minute drive to the gate each morning. Many guests do a night or two inside and base the rest of the week out here.",
  },
  {
    q: "How far is Kanaan Guest Farm from the Kruger gates?",
    a: `We are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from Kruger's Phabeni and Numbi gates, on the R40 side of Hazyview. That means leaving the farm in the dark and being through the boom at opening time is genuinely doable — which is the whole point of sleeping this close to the park, because the first two hours after the gate opens are the best game viewing of the day.`,
  },
  {
    q: "Is there affordable accommodation near Kruger National Park?",
    a: `Yes, and it is one of the reasons people base themselves in Hazyview rather than inside the park. Our rooms start at R${site.pricing.fromZAR} per person sharing per night, which is well below the regional average, and camping is cheaper again. Add a self-catering kitchenette so you are not eating out three times a day, and a week in the Lowveld stops being an expensive trip and starts being a very reasonable one.`,
  },
  {
    q: "Do you have self-catering accommodation in Hazyview?",
    a: "We do. Most of our lodge units have their own kitchenette — a kettle, a two-plate hob, a fridge, plates and mugs — plus a private en-suite bathroom, so you can make an early coffee before a dawn drive and cook a simple supper when you get back. There are braai facilities on the farm too, which is how most South African families would rather end a day in the bush anyway.",
  },
  {
    q: "What kinds of accommodation does Kanaan Guest Farm offer?",
    a: `Four, on one farm. Self-catering lodge rooms with en-suite bathrooms and kitchenettes; simple twin rooms with two single beds for friends sharing or a parent and child; an ${site.capacity.backpackersBeds}-bed wooden-house backpacker dorm; and ${site.capacity.campsitePitches} shaded campsites under the forty-year-old mango grove, each with power and water at the pitch. Altogether the farm sleeps around ${site.capacity.sleepingTotal} guests in rooms, with room for many more camping.`,
  },
  {
    q: "Is a guest farm a good base for families and for backpackers?",
    a: "That mix is exactly what a working farm handles well. Families get space — open lawns, the pool, a kitchen, and rooms that are not stacked on top of strangers. Backpackers and overlanders get a bed or a pitch at a price that leaves money for the park fees. Couples get quiet, because we are far enough off the main road that the evenings are properly still. Everybody eats around the same braai if they feel like it.",
  },
  {
    q: "How far is the airport, and do we need a car?",
    a: `Kruger Mpumalanga International Airport (KMIA) is about ${site.distances.kmiaMinutes} minutes away, with daily flights from Johannesburg and Cape Town. We would strongly suggest hiring a car: self-driving Kruger is half the pleasure of it, the Panorama Route is a driving route, and public transport out here is not built for visitors. If you would rather not drive, tell us and we will point you at the local guided-drive operators we trust.`,
  },
  {
    q: "What else is there to do besides Kruger?",
    a: "More than a week's worth. The Panorama Route — God's Window, the Blyde River Canyon, Bourke's Luck Potholes and a string of waterfalls — starts about forty minutes from our gate. Closer to home there are zip-lines and canopy tours, river rafting, wildlife sanctuaries, the Graskop gorge lift, and the slow farm things: the trails, the waterfall on our own land, and the pool at the end of the afternoon.",
  },
  {
    q: "When should we book?",
    a: "Earlier than you think for the South African school holidays and the dry-winter peak (June to September), when everything near the southern gates fills up. Shoulder months are much easier and, we would argue, nicer. Send us your dates on WhatsApp and Anneli or Matthew will answer personally — we will tell you honestly if a quieter week nearby would suit you better.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "accommodation-near-kruger-national-park",
  title:
    "Accommodation near Kruger National Park: where to stay, and why Hazyview works",
  description:
    "An honest guide to accommodation near Kruger National Park. Staying inside the park versus just outside it, why Hazyview is the base that works, and the four ways to stay at Kanaan Guest Farm — self-catering lodge rooms, twin rooms, a backpacker dorm and camping under forty-year-old mango trees. From R250 per person sharing, 30–45 minutes from the gate.",
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
            "A practical, honest guide to choosing accommodation near Kruger National Park, written by the family who run Kanaan Guest Farm outside Hazyview. The real trade-off between in-park rest camps and staying just outside the gates, why Hazyview is the most useful base in the Lowveld, the four ways to stay on a working guest farm — self-catering lodge rooms, twin rooms, a backpacker dorm and shaded camping — what it costs, who it suits, and what else is on the doorstep. From R250 per person sharing, 30 to 45 minutes from the Kruger gate.",
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
          title="Accommodation near Kruger National Park — and why a Hazyview farm makes the best base."
          intro="Where you sleep decides how your safari week actually feels. An honest look at staying inside the park versus just outside it, why Hazyview works, and the four ways to stay with us — from R250 per person sharing."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={11}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "Kruger is the reason you are coming — but where you sleep decides how much of it you actually see, and what the week costs.",
                `Hazyview is the practical base: ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Phabeni and Numbi gates, about forty minutes from the Panorama Route, ${site.distances.kmiaMinutes} minutes from the KMIA airport.`,
                "In-park camps are wonderful but book out months ahead, cost more, and leave you with little to do on a rest day. Just outside the gate you get space, a kitchen, a pool and change.",
                `Kanaan is a working guest farm with four ways to stay — self-catering lodge rooms, simple twin rooms, an ${site.capacity.backpackersBeds}-bed backpacker dorm and ${site.capacity.campsitePitches} shaded campsites under the mango grove.`,
                `From R${site.pricing.fromZAR} per person sharing per night, well below the regional average — and self-catering keeps the food bill in your hands.`,
                "It suits families, couples, backpackers and campers equally, which is unusual — and it means a mixed group can all stay in one place.",
              ]}
            />

            <p>
              Almost every message we get starts the same way. Someone has
              booked the flights, circled a week on the calendar, and then hit
              the genuinely confusing part: there are hundreds of options for{" "}
              <strong>accommodation near Kruger National Park</strong>, they all
              claim to be close to the gate, and it is impossible to tell from a
              listing which ones actually are.
            </p>
            <p>
              So this is the guide we would give a friend. Not a sales page —
              the honest version, written by two people who live thirty minutes
              from Phabeni gate and who send guests off to the park most
              mornings of the year. Where to stay, what the real trade-off is
              between sleeping inside Kruger and sleeping just outside it, and
              why a farm in the beautiful heart of Hazyview turns out to be one
              of the most useful bases in the Lowveld.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Inside the park, or just outside it? The honest trade-off.
            </H2>
            <p>
              The rest camps inside Kruger are special, and we will never tell
              you otherwise — waking up to hyena calls behind the fence is
              something everyone should do once. But they are booked out months
              in advance, they cost more per night than most guest farms
              outside, and the day you decide to rest, there is very little to
              rest into. You are also committed: once you are in, you are in.
            </p>
            <p>
              Staying just outside the gate flips all of that. You still make
              the opening-time drive — the two hours after the gate lifts are
              the best game viewing of the day, and a base like ours puts them
              well within reach. Then you come home to a room with a kitchen, a
              pool, a lawn and a braai, and on the day nobody wants to see
              another impala, the whole Panorama Route is waiting instead. You
              can check gate times and the current conditions on{" "}
              <a
                href="https://www.sanparks.org/parks/kruger"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                SANParks&rsquo; official Kruger National Park pages
              </a>{" "}
              before you plan your mornings — they shift with the season.
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
                The other option: dusk inside a park rest camp, the fence and the
                bushveld right there. Worth doing once — and booked out months
                ahead, with very little to do on the day you want to rest.
              </figcaption>
            </figure>
          </div>
          <StatGrid
            stats={[
              {
                value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`,
                label: "To the Kruger gates",
                body: "Phabeni and Numbi, the two southern gates that open onto the best-stocked corner of the park. Close enough to be through the boom at opening time.",
              },
              {
                value: `${site.distances.kmiaMinutes} min`,
                label: "To the KMIA airport",
                body: "Kruger Mpumalanga International, with daily flights from Johannesburg and Cape Town. Land at lunchtime, be on the farm for sundowners.",
              },
              {
                value: `From R${site.pricing.fromZAR}`,
                label: "Per person sharing",
                body: "Per night, well below the regional average — and with a kitchenette, so the food bill stays yours to control rather than a restaurant's.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Why Hazyview is the base that works.</H2>
            <p>
              There are several towns you could choose along the southern edge
              of the park, and they each have their case. Hazyview&rsquo;s is
              simple: it is the only one that sits between the Kruger gates
              <em> and</em> the escarpment, so you never have to pick a side of
              your holiday. Here is what that means in practice.
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
                The whole argument in one frame — the escarpment on the left, the
                flat bushveld that becomes Kruger on the right, and the orchard
                valley in between. That is where Hazyview sits, and why you only
                have to unpack once.
              </figcaption>
            </figure>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Two Kruger gates on your doorstep",
                body: `Phabeni and Numbi are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes away, which makes an opening-time arrival realistic rather than heroic. Skukuza and the southern loops are an easy morning from either.`,
              },
              {
                title: "The Panorama Route on the other side",
                body: "God's Window, Bourke's Luck Potholes, the Blyde River Canyon and the waterfall cluster around Sabie all start about forty minutes up the road — so your rest days are as good as your safari days.",
              },
              {
                title: "A real town for the practical things",
                body: "Supermarkets, fuel, a pharmacy, cash and the Perry's Bridge shops are ten minutes from the farm gate. Self-catering only works when you can actually buy groceries, and here you can.",
              },
              {
                title: "One base for the whole week",
                body: "This is the quiet one that saves the most. Because both the park and the escarpment are reachable from here, you unpack once. No mid-week move, no second check-in, no hour lost to repacking the car.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Why choose Kanaan Guest Farm — the honest case.
            </H2>
            <p>
              We took over Kanaan in {site.ownedSince}, and we have spent the
              time since rebuilding it slowly: the water, the WiFi, the gate,
              then the rooms, one at a time. What we cannot renovate is the part
              guests actually mention afterwards — the forty-year-old mango
              grove, the view down the valley, and the fact that when you arrive
              it is Anneli or Matthew who meets you rather than a front desk.
            </p>
            <p>
              We are a working farm on the edge of Hazyview, which means space:
              open lawns, macadamia rows, hiking and cycling trails, a waterfall
              on our own land, and a pool that has ended a great many hot Kruger
              afternoons. It also means quiet. We are far enough off the main
              road that the evenings are properly still, and close enough to
              town that a forgotten bag of charcoal is a ten-minute problem.
            </p>
          </div>
          <Callout eyebrow="What we are, and what we are not">
            We are not a five-star lodge, and we do not price like one. We are a
            comfortable, genuinely affordable, family-run farm half an hour from
            the Kruger gate — and for most people planning a week in the
            Lowveld, that is the better trade.
          </Callout>
        </Section>

        {/* Inline images — a lodge room and its self-catering kitchenette */}
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
                A renovated lodge room — crisp linen, a wooden-beamed ceiling
                and a fan, with the bush outside the window.
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
              A guest farm can do something a hotel cannot: hold four very
              different budgets on one property, under the same trees. Tell us
              who is coming and we will put you in the right one — the bedding
              setup differs from room to room, so it is worth a message rather
              than a guess. Everything below, with photographs and the current
              rates, sits on our{" "}
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
                body: "Each stands on its own with a private en-suite bathroom and a kitchenette — kettle, two-plate hob, fridge, plates and mugs — plus a TV, free WiFi, linen and towels. The best pick for a family or a longer stay, because you cook when you want to and eat out when you want to.",
              },
              {
                title: "Simple twin rooms",
                body: "Two single beds, a private en-suite, a wall fan and a small table for a slow morning coffee. Straightforward, fairly priced, and ideal for friends sharing or a parent and child on their first safari.",
              },
              {
                title: `The wooden-house backpackers · ${site.capacity.backpackersBeds} beds`,
                body: "A sociable pine-clad dorm house with a lounge, a shared kitchenette and a long table people actually sit around. For overlanders, slow travellers and anyone who would rather spend their money on park fees than thread count.",
              },
              {
                title: `Camping under the mango grove · ${site.capacity.campsitePitches} pitches`,
                body: "Shaded grass under forty-year-old mango trees, with power and water at every pitch and a timber ablution block with hot showers. The cheapest bed near the gate, and on a warm Lowveld night, arguably the best one.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              If it is the camping that appeals — rooftop tent, ground tent or a
              small camper — the pitches, the ablutions and what is included are
              all laid out on our{" "}
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
                The camping ground under the forty-year-old mango grove — power
                and water at the pitch, and shade all afternoon.
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
              This is the part that surprises people. Because the farm offers
              all four kinds of accommodation, a group that would normally be
              split across three price brackets can stay in one place. We have
              had grandparents in a lodge unit, the parents in a family room and
              the students in the dorm, all eating at the same braai. Try that
              at a hotel.
            </p>
            <p>
              For families it is the space that matters — lawns to run on, the
              pool, a kitchen for fussy eaters and the pace of a farm rather
              than a lobby. For couples it is the quiet: a veranda, the valley
              going pink, no corridor noise. For backpackers and campers it is
              simply the sums, because a cheap bed thirty minutes from the gate
              is what makes the whole trip possible. One honest note: we are not
              set up for pets, so plans for the family dog need to be made
              elsewhere.
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
                The shape of a farm evening — a lit unit on one side, tents on
                the other, and everybody at the same fire. This is the part a
                hotel cannot do.
              </figcaption>
            </figure>
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
              Quarter to five, and the reason a kitchenette matters more than a
              breakfast buffet: your own coffee in a flask, the keys, the map,
              and the gate half an hour away.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              What is on your doorstep: Kruger and the Panorama Route.
            </H2>
            <p>
              A good base is really just a good starting point. From here the
              park is a morning: through Phabeni or Numbi at opening, the
              southern loops, a picnic site for coffee, and home for lunch. We
              wrote the whole thing up — which gate to use, what the drive
              actually takes, and the half-day plan that works — in our{" "}
              <Link
                href="/blog/kruger-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Kruger-from-Hazyview guide
              </Link>
              , and{" "}
              <a
                href="https://www.krugerpark.co.za/Kruger_Park_Travel_Advisory-travel/conservation-fees.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                the current conservation fees are published here
              </a>{" "}
              — check them before you budget, because they are reviewed
              annually.
            </p>
            <p>
              The other direction is the escarpment. God&rsquo;s Window, the
              Blyde River Canyon, Bourke&rsquo;s Luck Potholes, the Graskop
              gorge lift and a string of waterfalls make up one of the most
              beautiful drives in the country; our{" "}
              <Link
                href="/blog/panorama-route-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Panorama Route guide
              </Link>{" "}
              sets out both the half-day and the full-day loop, and{" "}
              <a
                href="https://www.sa-venues.com/maps/mpumalanga-panorama-route.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                this route map
              </a>{" "}
              is a useful thing to have open beside it. For everything else in
              the region — sanctuaries, canopy tours, rafting, cultural villages
              — the{" "}
              <a
                href="https://www.mpumalanga.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Mpumalanga tourism site
              </a>{" "}
              is the broadest listing there is.
            </p>
            <p>
              Getting here is easy enough that a good few guests fly.{" "}
              <a
                href="https://www.kmiairport.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Kruger Mpumalanga International Airport (KMIA)
              </a>{" "}
              is {site.distances.kmiaMinutes} minutes from our gate, with daily
              flights from Johannesburg and Cape Town. Hire a car at the airport
              — you will want it for the park and for the Panorama Route — and
              you will be on the farm before the light goes.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What a week here actually costs.</H2>
            <p>
              The bed is only one line of it. Gate fees, fuel, the odd activity
              and food all add up, and a cheap room can quietly cost you more if
              it is an hour further from the gate or has nowhere to cook. Our
              rooms start at R{site.pricing.fromZAR} per person sharing per
              night; camping is less; and because most units have a kitchenette,
              the food bill stays yours rather than a restaurant&rsquo;s.
            </p>
          </div>
          <Callout eyebrow="Every real number, in one place">
            We laid out the whole 2026 arithmetic — gate fees by tier, the Wild
            Card break-even, flights, fuel, food and three worked weekly budgets
            — in the{" "}
            <Link
              href="/blog/cost-of-a-kruger-lowveld-week-2026"
              className="text-ochre hover:text-ochre-deep"
            >
              cost-of-a-Lowveld-week guide
            </Link>
            . It is the most useful thing we have written, and it will tell you
            plainly where to spend less.
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
              thesis="The best accommodation near Kruger National Park is not the grandest — it is the one close enough to make the dawn drive, comfortable enough to come home to, and honest enough about its price that the rest of the week is still affordable."
              body={
                <>
                  That is what we have tried to build here: a real farm, half an
                  hour from the gate, with a bed for whichever kind of traveller
                  you are. Send us your dates and who is coming, and Anneli or
                  Matthew will reply personally with what we would put you in
                  and why. No forms, no auto-responses — just a straight answer
                  from the people who will meet you at the gate.
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
          body={`Send Anneli or Matthew your dates and party — a family, a couple, a car full of friends or a tent — and we'll tell you honestly which of the four ways to stay suits you, what it costs, and how the Kruger mornings work from here. From R${site.pricing.fromZAR} per person sharing.`}
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
                  All twelve months, honestly — the weather, the wildlife, the
                  views and the crowds, and how to find the week that is yours.
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
                  The single best morning of any Kruger trip — and why you can
                  only catch it when you sleep half an hour from the gate.
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
