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

const datePublished = "2026-11-25";
const headline =
  "Airport Transfers in Hazyview: A Complete Guide for Travellers Visiting Kruger National Park";
const t = site.transfers;
const h3 =
  "mt-8 mb-2 font-display text-xl text-forest-deep md:text-2xl";

const faqs = [
  {
    q: "How far is Hazyview from Kruger Mpumalanga International Airport?",
    a: `Hazyview is about ${t.kmiaKm}km from KMIA, roughly ${site.distances.kmiaMinutes} minutes by road on the R40, depending on traffic.`,
  },
  {
    q: "Can I book an airport transfer from KMIA to Hazyview?",
    a: `Yes. ${t.name} arranges KMIA pickups directly over WhatsApp — it's just outside our standard ${t.radiusKm}km radius, so send your flight details and we'll confirm a fare before you fly.`,
  },
  {
    q: "Is Uber or Bolt available in Hazyview?",
    a: "No. Uber and Bolt have not built a driver network in Hazyview or at KMIA. Visitors arrange a local car service or a private shuttle in advance rather than opening an app after landing.",
  },
  {
    q: "What's the cheapest way to get around Hazyview without a car?",
    a: "A local minibus taxi, by a wide margin — but it comes with real trade-offs for a first-time visitor: no published timetable, no fixed stop to look up, and a vehicle that leaves once it's full.",
  },
  {
    q: "Are minibus taxis safe for tourists to use?",
    a: "Millions of South Africans use them safely every day, and it isn't our place to tell you not to. What we'd say plainly is that overloading and driver fatigue are documented, recurring problems in the industry, and routes aren't published anywhere a visitor can check in advance — worth weighing against the cost of a transfer you've arranged yourself.",
  },
  {
    q: "How many passengers can Kanaan Transfers accommodate?",
    a: `Up to ${t.seats} passengers comfortably. A larger group should message ahead so we can plan for it.`,
  },
  {
    q: "Is a private shuttle company better than Kanaan Transfers?",
    a: "It depends what you're optimising for. A private shuttle is a fixed, pre-paid, point-to-point booking with a named international operator — reliable, but the most expensive option and the least flexible if your plans change. Kanaan Transfers is booked directly with us on WhatsApp, with the fare confirmed first and no cash needed on the day.",
  },
  {
    q: "How do I book Kanaan Transfers?",
    a: "Message us on WhatsApp with your flight number, landing time, passenger count and destination. We'll confirm your fare and driver before you board, then meet you at arrivals.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "airport-transfers-hazyview-kruger",
  title: headline,
  description:
    "Planning a Kruger trip? Compare airport transfers, Kanaan Transfers and local minibus taxis for getting from KMIA to Hazyview — honest pricing, safety notes, and how to book before you fly.",
  image: img.cabHazyviewAirportPickup,
  datePublished,
  category: "guide",
});

export default function AirportTransfersHazyviewKrugerPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A complete, honest comparison of airport transfer options for travellers flying into KMIA for Hazyview and Kruger National Park: private transfer companies, Kanaan Transfers, and local minibus taxis.",
          path: "/blog/airport-transfers-hazyview-kruger",
          image: img.cabHazyviewAirportPickup.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.cabHazyviewAirportPickup.src}
          alt={img.cabHazyviewAirportPickup.alt}
          eyebrow="Guide · Getting Around"
          title={headline}
          intro="There's no Uber waiting at Kruger Mpumalanga International Airport. Here's an honest look at the three ways travellers actually get from KMIA to Hazyview — what each one costs, and what each one trades away."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={8}
          titleSize="compact"
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                `Kruger Mpumalanga International Airport (KMIA) is about ${t.kmiaKm}km and ${site.distances.kmiaMinutes} minutes from Hazyview on the R40 — and there's no Uber or Bolt waiting at either end.`,
                "There are really three ways to cover that distance: a pre-booked private transfer company, Kanaan Transfers (that's us), or the local minibus taxi network.",
                "Private transfer companies are the most expensive option and the least flexible — a fixed, pre-paid, point-to-point run booked days in advance with a named operator.",
                `${t.name} is booked over WhatsApp, with the fare confirmed before you travel. Our vehicle seats ${t.seats}; KMIA sits just outside our standard ${t.radiusKm}km radius, so that leg is quoted directly rather than through the automatic fare.`,
                "Minibus taxis are the cheapest way to travel in South Africa by a wide margin, but the trade-off is real for a first-time visitor: no published timetable, no fixed stop you can look up, and a vehicle that leaves once it's full.",
                "For a first Kruger trip, arrange the airport leg before you fly — sorting it out after you land is the one mistake that's hard to undo.",
              ]}
            />

            <H2 className="mb-4">Where Is Hazyview, and Why Transport Needs a Plan</H2>
            <p>
              {`Hazyview sits on the R40 in Mpumalanga, close enough to two of Kruger National Park's southern gates that it's become the default base for a first safari. Phabeni and Numbi are both ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes away, which is why so many Kruger itineraries start here rather than inside the park itself.`}
            </p>
            <p>
              {`What Hazyview doesn't have is a ride-hailing network. Open Uber or Bolt at KMIA's arrivals hall and the app will search, and keep searching. Neither has built driver coverage this far from Johannesburg or Cape Town — the nearest reliable pickup is in Nelspruit, over 40 minutes in the other direction. It catches out a lot of first-time visitors who reasonably assume that landing at any airport means a rank of cabs waiting outside.`}
            </p>
          </div>

          <StatGrid
            stats={[
              {
                value: `${t.kmiaKm}km`,
                label: "KMIA to Hazyview",
                body: `About ${site.distances.kmiaMinutes} minutes on the R40 — the only road in.`,
              },
              {
                value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`,
                label: "To a Kruger gate",
                body: "Phabeni and Numbi are both inside this window from Hazyview.",
              },
              {
                value: "None",
                label: "Uber or Bolt nearby",
                body: "Nearest reliable app coverage is Nelspruit, 40+ minutes away.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Three Ways to Get Around Without Renting a Car</H2>
            <p>
              Once you&rsquo;re on the ground, the choice comes down to three
              real options, and each one trades differently on price,
              flexibility and comfort. Here&rsquo;s the honest version of
              each.
            </p>
          </div>

          <NumberedList
            variant="grid"
            items={[
              {
                title: "Private transfer companies",
                body: "Pre-booked, pre-paid and point-to-point — you share a flight number and an address, and a driver meets you there. It's reliable on paper, and the most expensive: one of the operators KMIA's own site lists, GAP Tours Transfers, has a KMIA-to-Hazyview transfer listed from USD $147 through an online booking platform (Pelago). You can't share the vehicle or change the destination on the day.",
              },
              {
                title: `${t.name} (that's us)`,
                body: `A local car service booked on WhatsApp rather than an app. Fares inside our standard ${t.radiusKm}km radius start from R${t.fromZAR} and are quoted before you book; KMIA sits just outside that radius, so the airport leg is confirmed directly, in advance. Up to ${t.seats} passengers, cash-free — a card goes on file and nothing is charged until the trip is done.`,
              },
              {
                title: "Local minibus taxis",
                body: "By far the cheapest way to travel in South Africa, and a genuinely different experience to the other two. There's no app and usually no fixed, published stop — a vehicle leaves once it has enough passengers, and routes are set informally by local taxi associations rather than published anywhere a visitor can check in advance.",
              },
            ]}
          />

          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.cabHazyviewRoadHero.src}
                  alt={img.cabHazyviewRoadHero.alt}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                Whichever option you choose, the R40 is the road everyone
                arrives on.
              </figcaption>
            </figure>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <h3 className={h3}>Is Uber or Bolt Available in Hazyview?</h3>
            <p>
              {`No — worth saying plainly, because it surprises visitors used to Johannesburg or Cape Town. Uber and Bolt have not built a driver network in Hazyview or at KMIA (South Africa Spirit). Checking the app after you've landed doesn't help; the fix is arranging a lift before you fly.`}
            </p>

            <h3 className={h3}>What a Minibus Taxi Trip Actually Looks Like</h3>
            <p>
              Minibus taxis carry the majority of South Africa&rsquo;s
              public-transport commuters, and the system moves the country
              every day (Polity.org.za). It&rsquo;s informal by design: fares
              and stops are set by local taxi associations rather than a
              timetable board, and a vehicle only leaves once it&rsquo;s
              full — a decision the driver makes, not a seatbelt count.
              None of that is published anywhere a first-time visitor can
              check from a phone.
            </p>
            <p>
              There&rsquo;s a safety conversation worth having honestly,
              too — not to scaremonger, but because it&rsquo;s real.
              Overloading is a flagged, documented problem: road-safety
              researchers note that seatbelts often go unused because the
              priority is fitting in as many passengers as the vehicle will
              hold, and driver fatigue and pressure to speed are repeatedly
              named as causes of collisions (Arrive Alive; The Citizen).
              None of that makes the system unsafe for everyone who uses
              it — most trips are completely unremarkable — but it&rsquo;s
              worth weighing against the fare of a transfer you&rsquo;ve
              arranged yourself, in a vehicle and with a driver you already
              know.
            </p>

            <Callout eyebrow="Worth saying plainly">
              The cheapest option isn&rsquo;t always the right one for a
              first trip into an unfamiliar area with a flight to catch.
            </Callout>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Price, Roughly: What Each Option Costs</H2>
            <p>
              None of these fares are published to the kilometre — minibus
              taxi fares especially are set by local associations route by
              route, not advertised as a rate card. Treat the figures below
              as a rough steer rather than a quote.
            </p>
          </div>

          <StatGrid
            stats={[
              {
                value: "~R2/km",
                label: "Minibus taxi",
                body: "Our own rough estimate, not an official tariff — fares are set per route, not per kilometre, and vary with the operator and the day.",
              },
              {
                value: "~R10/km",
                label: `${t.name}`,
                body: "Also a rough figure for comparison. Your actual fare is always quoted before you book, inside or outside our radius.",
              },
              {
                value: "From $147",
                label: "Private shuttle, KMIA",
                body: "Fixed price for a dedicated vehicle, booked in advance through an operator KMIA's own site lists (GAP Tours Transfers, via Pelago).",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Booking Your Kanaan Transfers Pickup</H2>
            <p>
              {`If ${t.name} is the one you want, booking takes one WhatsApp message.`}
            </p>
          </div>

          <NumberedList
            items={[
              {
                title: "Message us on WhatsApp",
                body: "Share your flight number, landing date and time, how many of you there are, and where you're headed.",
              },
              {
                title: "Get your fare",
                body: "Confirmed before anything is booked — no meter, no surprise total at the end.",
              },
              {
                title: "Travel day",
                body: "Message us once you've landed; your driver meets you at arrivals.",
              },
              {
                title: "Settle in",
                body: `About ${site.distances.kmiaMinutes} minutes to Hazyview on the R40. Your card is charged only once the trip is done.`,
              },
            ]}
          />

          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              For the full detail — exactly what to send before you fly,
              and what to do if your flight changes — see our{" "}
              <Link
                href="/blog/hazyview-airport-transfer-kmia"
                className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
              >
                dedicated KMIA transfer guide
              </Link>
              .
            </p>

            <figure className="float-right ml-5 mb-3 w-32 sm:w-40">
              <div className="overflow-hidden rounded-xl border border-black/5 shadow-sm">
                <Image
                  src={img.cabKanaanTransfersScreenshot.src}
                  alt={img.cabKanaanTransfersScreenshot.alt}
                  width={img.cabKanaanTransfersScreenshot.width}
                  height={img.cabKanaanTransfersScreenshot.height}
                  sizes="160px"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-2 text-center text-[11px] leading-snug text-muted">
                Confirmed over WhatsApp, before you fly.
              </figcaption>
            </figure>

            <H2 className="mb-4">Best Places to Visit From Hazyview</H2>
            <p>
              Once you&rsquo;re settled, Hazyview is a genuinely good base
              rather than just a stopover.{" "}
              <Link
                href="/blog/kruger-from-hazyview"
                className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
              >
                Kruger National Park
              </Link>{" "}
              is the main reason most people come — the Big Five live here,
              and Phabeni and Numbi gates are each inside that{" "}
              {site.distances.krugerGateMinutesMin}–
              {site.distances.krugerGateMinutesMax}-minute window. The{" "}
              <Link
                href="/blog/panorama-route-from-hazyview"
                className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
              >
                Panorama Route
              </Link>{" "}
              covers God&rsquo;s Window, Bourke&rsquo;s Luck Potholes, the
              Three Rondavels and the Blyde River Canyon, usually as a full
              day out with a driver who knows the stops. Closer to home,
              Perry&rsquo;s Bridge and a handful of adventure operators cover
              zip-lining, river rafting and gorge swings for an afternoon
              that doesn&rsquo;t need a car at all. Remember that self-driving
              inside Kruger itself still needs your own vehicle or a
              licensed guided game drive — a transfer, ours or anyone
              else&rsquo;s, can only take you as far as the gate.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Frequently Asked Questions</H2>
            {faqs.map((f) => (
              <div key={f.q} className="mt-6">
                <h3 className="mb-2 font-display text-lg text-forest-deep md:text-xl">
                  {f.q}
                </h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="The lift matters more than it seems"
              thesis="The right way to get around Hazyview depends on what you're optimising for — price, flexibility, or one less thing to think about after a long flight."
              body={
                <>
                  Minibus taxis win on cost, a private shuttle wins on
                  predictability if you&rsquo;re happy to pay for it, and{" "}
                  {t.name} sits between the two: booked on WhatsApp, fare
                  confirmed first, and a driver who already knows the farm
                  you&rsquo;re heading to. Whichever you choose, arrange it
                  before you land, not after.
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
                  label: "Kruger Mpumalanga International Airport — shuttle service options",
                  href: "https://www.kmiairport.co.za/shuttle-service-options/",
                },
                {
                  label: "South Africa Spirit — where Uber and Bolt do and don't operate in South Africa",
                  href: "https://www.southafrica-spirit.com/guides/uber-and-ride-share-rsa/",
                },
                {
                  label: "Polity — taxi industry transports the majority of South Africa's public commuters",
                  href: "https://www.polity.org.za/article/taxi-industry-transports-majority-of-south-africas-public-commuters-but-exact-number-of-passengers-unclear-2021-02-03",
                },
                {
                  label: "Arrive Alive — overloading and road safety",
                  href: "https://arrivealive.co.za/print.aspx?i=1682",
                },
                {
                  label: "The Citizen — common causes of taxi accidents in South Africa explained",
                  href: "https://www.citizen.co.za/news/even-a-fool-can-get-a-permit-and-go-and-kill-people-common-causes-of-taxi-accidents-in-sa-explained/",
                },
                {
                  label: "Pelago — Kruger Mpumalanga Airport to Hazyview transfer, GAP Tours Transfers listing",
                  href: "https://www.pelago.com/en/activity/pkyahan7c-transfer-kruger-mpumalanga-international-airport-to-hazyview-hazyview",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Flying Into Hazyview?"
          body="Send your flight number, travel dates and how many of you there are, and we'll confirm your Kanaan Transfers pickup before you ever board."
          buttonLabel="Message Kanaan Transfers"
          pageKey="transfers"
        />

        {/* Related */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/hazyview-airport-transfer-kmia"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Getting Around
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Book Your KMIA Pickup
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Exactly what to send Kanaan Transfers before you fly, and
                  what happens the moment you land.
                </p>
              </Link>
              <Link
                href="/blog/getting-around-hazyview-without-a-car"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Getting Around
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Visiting Without Your Own Car?
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  The full picture for a car-free Lowveld trip, gate to
                  gate.
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
