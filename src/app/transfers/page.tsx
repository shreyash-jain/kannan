import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { AmenityList } from "@/components/AmenityList";
import { EditorialSplit, StatStrip } from "@/components/Blocks";
import { NumberedList, StatGrid } from "@/components/blog/Blocks";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { faqLd, taxiServiceLd } from "@/lib/jsonld";
import { site, whatsappLink } from "@/lib/site";

const t = site.transfers;

/**
 * The questions people actually type before they book a lift here, answered
 * plainly. They carry the page's search intent twice over: once for Google's
 * FAQ results, once for the assistants that answer "is there Uber in
 * Hazyview?" without anybody clicking anything.
 */
const faqs = [
  {
    q: "Is there Uber or Bolt in Hazyview?",
    a: `No. Uber and Bolt have not built a driver network in Hazyview — the nearest reliable app coverage is Nelspruit, over 40 minutes away. ${t.name} is the local alternative: you book it on WhatsApp instead of through an app, and you are quoted a fare before anything is confirmed.`,
  },
  {
    q: "How do I get from Kruger Mpumalanga International Airport to Hazyview?",
    a: `KMIA is roughly ${t.kmiaKm}km from Hazyview, about ${site.distances.kmiaMinutes} minutes by road on the R40. That is just outside our standard ${t.radiusKm}km radius, so airport transfers are arranged directly over WhatsApp rather than through the automatic quote. Message us with your flight details and we will confirm a fare and meet you at arrivals.`,
  },
  {
    q: "How much does a taxi in Hazyview cost?",
    a: `Trips start from R${t.fromZAR} for the shortest runs into town. Beyond that the fare scales with distance, and you are always told the exact figure before you confirm — there is no meter running and no surprise at the end of the trip.`,
  },
  {
    q: "How many people fit in the vehicle?",
    a: `Up to ${t.seats} passengers, which suits couples, small families and solo travellers comfortably. If you are a larger group, message us ahead of time and we will tell you honestly whether we can cover it or arrange a second vehicle.`,
  },
  {
    q: "Can you drive us into the Kruger National Park?",
    a: "We will happily run you to a Kruger gate — Phabeni and Numbi are both well inside our radius. Inside the park itself you need your own vehicle for a self-drive, or a licensed open-vehicle operator for a guided game drive, so most guests pair a transfer with a booked safari rather than a taxi.",
  },
  {
    q: "Do I pay cash?",
    a: "It is a cash-free service. A card goes on file when you book, and nothing is charged until the trip is finished.",
  },
  {
    q: "Can I book a ride late at night or very early?",
    a: `We would rather be honest than overpromise: ${t.name} is a growing local business with a small fleet, so a very early or very late trip is worth booking a day ahead rather than messaging on the spot. Dawn runs to a Kruger gate are exactly the kind of thing we plan in advance.`,
  },
];

export const metadata: Metadata = {
  title: `Transfers in Hazyview — airport taxi, Kruger gates & day trips · ${t.name}`,
  description: `There is no Uber or Bolt in Hazyview. ${t.name} is a local car service you book on WhatsApp: fares from R${t.fromZAR}, a ${t.radiusKm}km radius around Hazyview, and KMIA airport transfers arranged directly. The fare is quoted before you confirm — no meter, no app.`,
  keywords: [
    "Hazyview transfers",
    "cab in Hazyview",
    "taxi Hazyview",
    "Hazyview airport transfer",
    "KMIA airport transfer",
    "Kruger Mpumalanga International Airport shuttle",
    "Uber in Hazyview",
    "Panorama Route day trip driver",
    "Kruger gate transfer Hazyview",
  ],
  alternates: { canonical: "/transfers" },
  openGraph: {
    title: `${t.name} — getting around Hazyview without an app`,
    description: `Airport transfers, Kruger gate runs and Panorama Route days. From R${t.fromZAR}, booked on WhatsApp.`,
    images: [
      { url: img.cabHazyviewRoadHero.src, alt: img.cabHazyviewRoadHero.alt },
    ],
  },
};

export default function TransfersPage() {
  const book = whatsappLink("transfers");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(faqs)) }}
      />

      <Hero
        eyebrow={t.name}
        title="Transfers in Hazyview — no app, no meter, no guesswork."
        lede={`A local car service for the Lowveld. Airport pickups, Kruger gate runs, Panorama Route days and quick trips into town — booked on WhatsApp, with the fare agreed before you get in.`}
        image={img.cabHazyviewRoadHero}
        primaryCta={{ href: book, label: "Book a ride on WhatsApp" }}
        secondaryCta={{ href: "#fares", label: "See what it costs" }}
      >
        <StatStrip
          items={[
            { value: `R${t.fromZAR}`, unit: "from", label: "A trip into town" },
            { value: String(t.radiusKm), unit: "km", label: "Radius around Hazyview" },
            { value: String(t.seats), unit: "seats", label: "Per vehicle" },
            {
              value: String(site.distances.kmiaMinutes),
              unit: "min",
              label: "To KMIA airport",
            },
          ]}
        />
      </Hero>

      {/* The question almost everybody arrives with. Answering it in the first
          band is both the honest thing and the one that matches the search. */}
      <section className="fluid-band bg-sand">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <EditorialSplit
            eyebrow="Why you cannot just open an app"
            title="There is no Uber in Hazyview."
            image={img.cabHazyviewAirportPickup}
            pull="The nearest reliable app coverage is Nelspruit, over 40 minutes away."
          >
            <p>
              Open Uber here and it will sit and spin, looking for cars that are
              not coming. Bolt does the same. They work beautifully in
              Johannesburg, Cape Town and Nelspruit — but Hazyview is a small
              Lowveld town on the R40, not a metro, and the ride-hailing
              companies simply have not built a driver network this far out.
            </p>
            <p>
              That catches a lot of first-time visitors off guard. You land at
              Kruger Mpumalanga International Airport with your phone in your
              hand and there is no app to open, and no taxi rank waiting for
              visitors the way a city has one.
            </p>
            <p>
              So we run the lift ourselves. {t.name} is our own small car
              service, and you reach it the same way you reach us about a room —
              one WhatsApp message.
            </p>
          </EditorialSplit>
        </div>
      </section>

      <Section>
        <Eyebrow>How it works</Eyebrow>
        <H2 className="mt-2">Three messages and it is sorted.</H2>
        <Lede>
          There is nothing to download and no account to make. The whole thing
          takes less time than hunting for an app that is not coming.
        </Lede>
        <NumberedList
          items={[
            {
              title: "Send us your pin",
              body: "Tell us where you are headed, or just drop a location pin. We come back with the distance and the fare before a thing is booked.",
            },
            {
              title: "Pick your time, add a card",
              body: "Right now, or a set day and time — whichever suits. It is a cash-free service, so a card goes on file, and nothing is charged until the trip is done.",
            },
            {
              title: "Meet your driver by name",
              body: "Once it is confirmed we tell you exactly who is coming and what they are driving, so you know the face and the plate you are looking for.",
            },
          ]}
        />
      </Section>

      {/* Fares. Named and anchored because the hero links straight down here —
          price is the second thing every single person wants. */}
      <section id="fares" className="scroll-mt-24 fluid-band bg-sand">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Eyebrow>What it costs</Eyebrow>
          <H2 className="mt-2">Quoted upfront, every time.</H2>
          <Lede>
            Distance is what moves the number most. Whatever the trip, you see
            the figure in the chat before you agree to it — there is no meter
            ticking over in the corner of your eye.
          </Lede>
          <StatGrid
            stats={[
              {
                value: `From R${t.fromZAR}`,
                label: "A hop into town",
                body: "The Spar, a pharmacy, a restaurant on the R40. The shortest trips, confirmed in the same chat before you book.",
              },
              {
                value: "By distance",
                label: "Day trips & gate runs",
                body: `Panorama Route viewpoints and Kruger gates inside the ${t.radiusKm}km radius. The quote scales with the kilometres, and you see it first.`,
              },
              {
                value: `${t.kmiaKm}km`,
                label: "The KMIA airport run",
                body: `Kruger Mpumalanga International is about ${site.distances.kmiaMinutes} minutes away — just past the standard radius, so we arrange it directly rather than auto-quoting it.`,
              },
            ]}
          />
        </div>
      </section>

      <Section>
        <Eyebrow>What people use it for</Eyebrow>
        <H2 className="mt-2">The trips that make a holiday easier.</H2>
        <AmenityList
          items={[
            {
              title: "Airport transfers",
              body: `KMIA sits just past the standard ${t.radiusKm}km radius, so message us with your flight and we will arrange the pickup directly. An arranged lift beats hunting for a ride once you have landed.`,
            },
            {
              title: "Kruger gate runs",
              body: `Phabeni and Numbi are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the farm and well inside the radius. Worth booking the night before if you are chasing a sunrise.`,
            },
            {
              title: "Panorama Route days",
              body: "Hiring a driver for a full day to God's Window and Bourke's Luck Potholes works beautifully for a couple without a rental car — and nobody has to do the driving home.",
            },
            {
              title: "Activity pickups",
              body: "Zip-lining, the gorge swing, river rafting. Most operators have a meeting point in town, and a lift gets you there without renting a car for the whole week.",
            },
            {
              title: "Town errands",
              body: "A forgotten charger, sunscreen, cash from an ATM. Small trips that never justified a hire car in the first place.",
            },
            {
              title: "Local knowledge, included",
              body: "Which gate opens when, which shortcut dodges the school-run traffic, and where the potholes are on the R536. That part does not come with an app.",
            },
          ]}
        />
      </Section>

      {/* A screenshot of a real booking does more for trust than any promise
          we could write about how simple it is. */}
      <section className="fluid-band bg-sand">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="order-2 lg:order-1">
              <Eyebrow>Good to know</Eyebrow>
              <H2 className="mt-2">The practical bits, honestly.</H2>
              <dl className="measure-tight mt-5 grid gap-4 text-ink/85">
                <div className="border-t border-black/10 pt-3">
                  <dt className="font-display text-base text-forest-deep">
                    One vehicle, {t.seats} seats
                  </dt>
                  <dd className="mt-1 text-sm">
                    Comfortable for couples, small families and solo
                    travellers. More vehicles are on the way — if you are a
                    bigger group, ask and we will tell you straight.
                  </dd>
                </div>
                <div className="border-t border-black/10 pt-3">
                  <dt className="font-display text-base text-forest-deep">
                    Book ahead for dawn and late nights
                  </dt>
                  <dd className="mt-1 text-sm">
                    We will not pretend there is a car on standby at 4am. A day&apos;s
                    notice turns an early Kruger run into a sure thing.
                  </dd>
                </div>
                <div className="border-t border-black/10 pt-3">
                  <dt className="font-display text-base text-forest-deep">
                    Inside Kruger, you need your own wheels
                  </dt>
                  <dd className="mt-1 text-sm">
                    We can get you to the gate, but a self-drive needs your own
                    vehicle and a guided drive needs a licensed operator. Read
                    our{" "}
                    <Link
                      href="/blog/kruger-from-hazyview"
                      className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
                    >
                      guide to Kruger from Hazyview
                    </Link>
                    .
                  </dd>
                </div>
                <div className="border-t border-black/10 pt-3">
                  <dt className="font-display text-base text-forest-deep">
                    Cash-free, charged after
                  </dt>
                  <dd className="mt-1 text-sm">
                    A card goes on file when you book. Nothing is taken until
                    the trip is finished.
                  </dd>
                </div>
              </dl>
            </div>

            <figure className="order-1 lg:order-2">
              <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-black/10 bg-bone shadow-[0_16px_48px_-12px_rgba(31,26,23,0.22)]">
                <Image
                  src={img.cabKanaanTransfersScreenshot.src}
                  alt={img.cabKanaanTransfersScreenshot.alt}
                  width={img.cabKanaanTransfersScreenshot.width}
                  height={img.cabKanaanTransfersScreenshot.height}
                  sizes="(min-width: 1024px) 384px, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted">
                A real booking. It genuinely is just a message.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* The FAQ is the page's quiet workhorse: it matches the long questions
          people type, and it is what an assistant quotes back at them. */}
      <section className="fluid-band bg-sand">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Eyebrow>Questions we get asked</Eyebrow>
          <H2 className="mt-2 mb-8">Before you book.</H2>
          <div className="grid gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-black/10 bg-bone px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-lg leading-snug text-forest-deep marker:content-none">
                  {f.q}
                  <span
                    aria-hidden
                    className="mt-1.5 flex-none text-ochre transition-transform group-open:rotate-45"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/85">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Want the longer version? We wrote a full guide to{" "}
            <Link
              href="/blog/cab-in-hazyview"
              className="font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep"
            >
              getting a cab in Hazyview
            </Link>
            , including what shapes the fare and the trips it is genuinely
            good for.
          </p>
        </div>
      </section>

      <section className="bg-forest-deep text-bone">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:py-16 md:grid-cols-2 md:items-center lg:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-ochre">
              {t.name}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight">
              Tell us where you need to be.
            </h2>
            <p className="mt-4 max-w-xl text-bone/85">
              Send us a pin or the name of the place and we will come straight
              back with a fare. Staying with us as well? Mention it and we will
              line the lift up with your arrival.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href={book}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
            >
              Book a ride on WhatsApp
            </Link>
            <Link
              href="/stay"
              className="inline-flex items-center rounded-full border border-bone/40 px-6 py-3 text-sm font-medium text-bone hover:bg-bone/10"
            >
              See where you will stay
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
