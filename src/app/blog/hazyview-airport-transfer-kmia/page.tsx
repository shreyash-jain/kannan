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

const datePublished = "2026-11-16";
const headline =
  "Hazyview Airport Transfer: Book Your Kanaan Transfers Pickup Before You Land at KMIA";
const t = site.transfers;

// Kanaan Transfers' own WhatsApp handset, same one used on /transfers and
// the cab guide. The message is pre-filled with the exact details this post
// asks readers to send, so the chat starts already half-answered.
const kmiaWhatsappNumber = site.contact.whatsappRide.replace(/\D/g, "");
const kmiaWhatsappHref = `https://wa.me/${kmiaWhatsappNumber}?text=${encodeURIComponent(
  "Hi, I'm flying into KMIA and would like to book a Kanaan Transfers pickup. My flight number is ___, landing at ___ on ___. There will be ___ of us with ___ bags, heading to Kanaan Guest Farm.",
)}`;

const faqs = [
  {
    q: "What exactly should I send Kanaan Transfers before my flight?",
    a: "Your flight number and airline, the date and expected landing time, how many passengers there are, roughly how much luggage you're bringing, and your destination — Kanaan Guest Farm, on the R40 in Hazyview. Send it as soon as your flight is booked, not the morning you fly.",
  },
  {
    q: "Is there Uber or Bolt at Kruger Mpumalanga International Airport?",
    a: "No. Neither has built a driver network in Hazyview or at KMIA — the nearest reliable app coverage is Nelspruit, over 40 minutes away. A pickup arranged before you land is the dependable way to leave the airport, not an app you open once you're through arrivals.",
  },
  {
    q: "How much does the KMIA to Hazyview transfer cost?",
    a: `KMIA sits just outside ${t.name}'s standard ${t.radiusKm}km radius, so it isn't covered by the automatic quote — the fare is confirmed directly over WhatsApp before you fly. Send your flight details and you'll have a number before anything is booked.`,
  },
  {
    q: "What if my flight is delayed or lands early?",
    a: "Message your driver with the new time as soon as you know it. Because the pickup was arranged directly rather than through an app, the time simply moves with your flight — there's no booking to cancel and rebook.",
  },
  {
    q: "How many passengers and how much luggage can the vehicle take?",
    a: `Up to ${t.seats} passengers comfortably. Mention your bag count when you first message us — a bigger group or a lot of luggage is worth flagging upfront so the driver can plan for it.`,
  },
  {
    q: "Does the transfer go straight into Kruger, or to the farm first?",
    a: "Straight to Kanaan in Hazyview, on the R40. The park itself is a separate, much shorter trip from the farm — most guests settle in first and sort out their Kruger gate for another morning.",
  },
  {
    q: "Is it cheaper to rent a car than book a transfer?",
    a: "It depends on the rest of your trip, not just the airport leg. A transfer is usually the simpler choice if Kanaan and a guided Kruger drive are the plan — a rental mostly earns its cost back if you're using it for more than that one run from KMIA.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "hazyview-airport-transfer-kmia",
  title: "Hazyview Airport Transfer",
  description:
    "Landing at Kruger Mpumalanga International Airport? Here's exactly what to send Kanaan Transfers before you fly, and what happens the moment you land.",
  image: img.cabHazyviewAirportPickup,
  datePublished,
  category: "guide",
});

export default function HazyviewAirportTransferPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical guide to booking a KMIA airport transfer before you fly — the exact details Kanaan Transfers needs, the step-by-step for after you land, and what to do if your flight changes.",
          path: "/blog/hazyview-airport-transfer-kmia",
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
          intro="KMIA sits just outside our standard transfer radius, so the smoothest landing is the one you arranged from home. Here's what to send before you fly, and what happens the moment you touch down."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={7}
          titleSize="compact"
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose overflow-hidden">
            <TLDR
              items={[
                `KMIA is about ${t.kmiaKm}km and ${site.distances.kmiaMinutes} minutes from Hazyview on the R40 — just outside ${t.name}'s standard ${t.radiusKm}km radius, so airport pickups are arranged directly over WhatsApp rather than through the automatic quote.`,
                "Message us before you fly: your flight number, date, landing time, passenger count and roughly how much luggage you're bringing.",
                "There's no Uber or Bolt waiting at KMIA — Hazyview has no ride-hailing network, so a pre-arranged pickup is the sure way to leave the airport on time.",
                "It's a cash-free service: a card goes on file when you book, and nothing is charged until the trip is done.",
                "Flight delayed or early? Message your driver with the new time — the pickup moves with your flight.",
                "The drive ends at Kanaan in Hazyview, not inside Kruger itself. The park is a separate, shorter trip for another day.",
                "Renting a car instead? It's worth it if you're exploring well beyond Hazyview — self-driving inside Kruger itself still needs your own vehicle or a guided game drive either way.",
              ]}
            />

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
                Confirmed over WhatsApp, days before you fly.
              </figcaption>
            </figure>

            <H2 className="mb-4">
              Landing at KMIA? Here&rsquo;s Why You Should Book Before You Fly
            </H2>
            <p>
              {`Kruger Mpumalanga International Airport is a small regional airport, and it's easy to assume — the way you might in Johannesburg or Cape Town — that there will be a rank of taxis or an app waiting the moment you clear arrivals. There isn't. ${t.name} is the local car service that covers this part of the Lowveld, and it works over WhatsApp rather than a booking app.`}
            </p>
            <p>
              {`Most of the Hazyview area falls inside ${t.name}'s standard ${t.radiusKm}km radius, where you can message for an instant quote. The airport is the one trip that doesn't — it sits just outside that line, so a KMIA pickup is arranged directly, in advance, rather than on the spot. That's a small technicality with a simple fix: send your flight details before you board, and everything else below takes care of itself.`}
            </p>
            <p>
              For the full fare and coverage picture — town trips, the Panorama Route, Kruger gates — see our{" "}
              <Link href="/transfers">Hazyview transfers page</Link>. This
              guide is just the one trip every visitor needs sorted first:
              getting from the airport to the farm.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What to Send Before You Land</H2>
            <p>
              One WhatsApp message, sent as soon as your flight is booked,
              is all it takes. The more of this you include upfront, the
              less there is to sort out once you&rsquo;re standing in
              arrivals with your luggage.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Flight number and airline",
                body: "So we can track your flight and know if it's running early or late, without you having to tell us separately.",
              },
              {
                title: "Date and expected landing time",
                body: "The actual scheduled arrival, not when you plan to leave your luggage carousel — we build in time either way.",
              },
              {
                title: "Number of passengers",
                body: "Couples, families, a group of friends — it decides whether one trip covers everyone comfortably.",
              },
              {
                title: "How much luggage",
                body: "A rough bag count is enough. It's the detail that most often gets left out, and the one that matters most on the day.",
              },
              {
                title: "Your destination",
                body: "Kanaan Guest Farm, on the R40 in Hazyview — worth naming even though it's where most of our transfer guests are headed.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Your KMIA Transfer at a Glance</H2>
          </div>
          <StatGrid
            stats={[
              {
                value: `${site.distances.kmiaMinutes} min`,
                label: "KMIA to Hazyview",
                body: `About ${t.kmiaKm}km on the R40 — the same stretch every Kanaan guest arrives on.`,
              },
              {
                value: `Up to ${t.seats}`,
                label: "Seats in the vehicle",
                body: "Comfortable for couples, small families and solo travellers. A larger group should message ahead.",
              },
              {
                value: "Card on file",
                label: "Cash-free booking",
                body: "Nothing is charged until the trip is actually done — no cash needed at the curb.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Should You Rent a Car at KMIA Instead?</H2>
            <p>
              It&rsquo;s a fair question, and we&rsquo;d rather answer it
              honestly than just sell you the transfer. A rental gives
              you total freedom for day trips well beyond Hazyview, on
              your own schedule. The trade-off is a paperwork counter and
              an excess waiver to work through the moment you land, and a
              car you&rsquo;re paying for every day of your stay —
              including the days you don&rsquo;t actually drive it.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Book a transfer if…",
                body: "Kanaan and a guided Kruger drive are the plan. Most guests who don't self-drive inside the park book a half-day or full-day safari anyway, so a rental would mostly sit parked at the farm.",
              },
              {
                title: "Rent a car if…",
                body: "You want to explore well beyond Hazyview on your own time — the full Panorama Route at your own pace, or day trips further into Mpumalanga.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              One thing stays true either way: self-driving inside Kruger
              itself needs your own vehicle or a guided open-vehicle game
              drive. A transfer, ours or a rental, can only take you as
              far as the gate.
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.cabHazyviewAirportPickup.src}
                alt={img.cabHazyviewAirportPickup.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Arranged before you board, so there&rsquo;s someone waiting
              the moment you land.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What Happens Once You Land</H2>
            <p>
              The flight is the unpredictable part. Everything after it
              should not be.
            </p>
          </div>
          <NumberedList
            items={[
              {
                title: "Clear arrivals and collect your luggage",
                body: "KMIA is small enough that this rarely takes long, even with a full flight.",
              },
              {
                title: "Switch your phone back on and open WhatsApp",
                body: "The same chat where you sent your flight details — no new app, no new booking.",
              },
              {
                title: "Message your driver that you've landed",
                body: "If your flight was delayed or landed early, this is also when you say so. The pickup time simply moves with you.",
              },
              {
                title: "Meet at the arranged point",
                body: "You'll already have your driver's name and what they're driving, agreed before you ever left home.",
              },
              {
                title: `Settle in for the drive to Hazyview`,
                body: `About ${site.distances.kmiaMinutes} minutes on the R40, with the Lowveld opening up around you.`,
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              Here&rsquo;s what that actually looks like: a flight lands
              at 14:20, clears arrivals by about 14:40, and is on the R40
              toward Hazyview within a few minutes — pulling up at Kanaan
              in time for a sundowner, not dinner.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <Callout eyebrow="Worth remembering">
              A fare confirmed before you fly is one less thing to think
              about after a long-haul flight.
            </Callout>
            <H2 className="mb-4">If Your Flight Changes</H2>
            <p>
              We&rsquo;d rather be upfront about this than promise more
              than we can deliver: {t.name} is a growing local business
              with a small fleet, so very early or very late landings are
              worth flagging a day ahead rather than messaging on the
              spot. A delay or an early landing on the day itself is a
              simple update to the same chat — it&rsquo;s the booking
              made cold, on no notice at all, that&rsquo;s hardest to
              cover.
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
              title="Sorted before you land"
              thesis="The best time to book your Kanaan Transfers pickup is before you ever board, not after you've landed."
              body={
                <>
                  Send your flight details, get a fare and a driver
                  confirmed, and the rest of the arrival takes care of
                  itself.{" "}
                  <Link
                    href="/blog/cab-in-hazyview"
                    className="font-medium text-ochre hover:text-ochre-deep"
                  >
                    Once you&rsquo;re settled at the farm
                  </Link>
                  , the same local service covers everything else — town
                  trips, the Panorama Route, a Kruger gate.
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
                  label: "Kruger Mpumalanga International Airport — ground transport",
                  href: "https://www.kmiairport.co.za/",
                },
                {
                  label: "South Africa Spirit — where Uber and Bolt do and don't operate in South Africa",
                  href: "https://www.southafrica-spirit.com/guides/uber-and-ride-share-rsa/",
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
          title="Flying into KMIA?"
          body="Send us your flight number, landing time and how many of you there are, and we'll confirm your Kanaan Transfers pickup before you ever board."
          buttonLabel="Message Kanaan Transfers"
          href={kmiaWhatsappHref}
        />

        {/* Related */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/cab-in-hazyview"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Getting Around
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Need a Cab in Hazyview?
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Fares, coverage and booking steps for everything once
                  you&rsquo;re already here.
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
