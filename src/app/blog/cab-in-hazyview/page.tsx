import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { img } from "@/lib/images";
import { articleLd } from "@/lib/jsonld";
import { createBlogPostMetadata } from "@/lib/blog";
import { site } from "@/lib/site";
import {
  TLDR,
  StatGrid,
  NumberedList,
  ClosingBlock,
  WhatsAppCTA,
  BlogHero,
  Sources,
} from "@/components/blog/Blocks";

const datePublished = "2026-10-20";
const headline = "Need a cab in Hazyview? Here's the easiest way to get around";

// Kanaan Transfers' own WhatsApp number — a separate local transport service,
// distinct from the farm's main enquiry line. Not part of site.ts — do not
// reuse this number on any other post.
const CAB_LEADS_WHATSAPP_NUMBER = "27642116345";
const cabLeadsWhatsappHref = `https://wa.me/${CAB_LEADS_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I found your guide on getting a cab in Hazyview — I'd like to book a ride with Kanaan Transfers.",
)}`;

export const metadata = createBlogPostMetadata({
  slug: "cab-in-hazyview",
  title: "Cab in Hazyview",
  description:
    "Need a cab in Hazyview? Here's how to get a reliable local taxi for airport transfers, day trips and town errands — what shapes the fare, and how to book one in minutes.",
  image: img.cabHazyviewRoadHero,
  datePublished,
  category: "guide",
});

export default function CabInHazyviewPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical guide to getting around Hazyview without Uber or Bolt — what a local taxi service actually looks like, how to book one, what affects the fare, and the trips it's genuinely good for.",
          path: "/blog/cab-in-hazyview",
          image: img.cabHazyviewRoadHero.src,
          datePublished,
        })}
      />

      <article>
        <BlogHero
          image={img.cabHazyviewRoadHero.src}
          alt={img.cabHazyviewRoadHero.alt}
          eyebrow="Guide · Getting Around"
          title="Need a Cab in Hazyview? Here's the Easiest Way to Get Around."
          intro="No Uber, no Bolt, no rank on the corner. Here's how a cab in Hazyview actually works, and how to book one without the guesswork."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={4}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "Uber and Bolt don't cover Hazyview — the nearest reliable app coverage is Nelspruit, over 40 minutes away.",
                "Kanaan Transfers is a local car service you book over WhatsApp — share your pin, get a fare upfront, no meter and no app to download.",
                "Trips start from R50 and cover a 50km radius around Hazyview — town errands, activities, the Panorama Route.",
                "The vehicle seats up to four, so it suits couples, small families and solo travellers well.",
                "KMIA airport is just outside that 50km radius, so airport transfers are arranged directly rather than through the automatic quote.",
              ]}
            />

            <H2 className="mb-4">Why Getting a Cab in Hazyview Can Be Tricky</H2>
            <p>
              Open the Uber app in Hazyview and it will sit there, spinning,
              looking for cars that aren&rsquo;t coming. Bolt does the same.
              Both work well in Johannesburg, Cape Town and Nelspruit — but
              Hazyview is a small Lowveld town on the R40, not a metro, and
              the ride-hailing apps simply haven&rsquo;t built a driver
              network here.
            </p>
            <p>
              {`That catches out a lot of first-time visitors. You land at Kruger Mpumalanga International Airport, ${site.distances.kmiaMinutes} minutes from Hazyview, phone in hand, and there is no app to open. The honest answer is that a taxi Hazyview South Africa visitor can rely on isn't a tap-and-go service — it's Kanaan Transfers, a local car service you reach on WhatsApp.`}
            </p>
            <p>
              Everything below is the long version. If you would rather just
              see the fares, the coverage and the booking steps on one page,
              that lives on our{" "}
              <Link href="/transfers">Hazyview transfers page</Link>.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What to Expect From a Local Hazyview Taxi Service</H2>
            <p>
              Getting around the Lowveld just got easier. Kanaan Transfers
              offers safe, comfortable and affordable transport within a
              50km radius of Hazyview, with trips starting from only R50.
              Whether you need a quick ride into town, a day trip to
              explore the Panorama Route or a Kruger gate, or a transfer to
              or from the airport, it&rsquo;s a service built for exactly
              this. The vehicle seats up to four passengers — comfortable
              for couples, small families and solo travellers.
            </p>
            <p>
              It&rsquo;s a growing local business, with more vehicles on
              the way. What stays constant is local knowledge, on-time
              pickups and fair pricing.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "A fare before you confirm",
                body: "You get a quote before you commit to anything — no meter running, no surprise at the end of the trip.",
              },
              {
                title: "The driver knows the back roads",
                body: "Good local drivers know which Kruger gate opens when, which shortcut avoids the school-run traffic, and where the potholes are on the R536.",
              },
              {
                title: "Door-to-door, not a rank",
                body: "Your driver fetches you from exactly where you are. There isn't a formal taxi rank for visitors in the way a city has one.",
              },
              {
                title: "A 50km radius, not everywhere",
                body: "Kanaan Transfers covers a 50km radius around Hazyview. Outside that — like the airport — it's arranged directly rather than through the standard quote.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose overflow-hidden">
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
                Booking starts with one WhatsApp message.
              </figcaption>
            </figure>
            <H2 className="mb-4">How to Book a Cab in Hazyview in Minutes</H2>
            <p>
              There is no app to download. Hazyview cab booking online
              means one WhatsApp chat, and the whole thing takes less time
              than it would to find an app that isn't coming.
            </p>
          </div>
          <NumberedList
            items={[
              {
                title: "Message Kanaan Transfers and share your pin",
                body: "Say where you're headed, or drop a location pin. You'll get the distance and a fare confirmed before anything is booked.",
              },
              {
                title: "Confirm the time and add a card",
                body: "Now or a set day and time — your choice. It's a cash-free service, so a card is added on file; nothing is charged until the trip is done.",
              },
              {
                title: "Get your driver's name and plate",
                body: "Once it's confirmed you're told exactly who's coming and what they're driving, so you know who to look for.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Cab Fares and What Affects the Price</H2>
            <p>
              Trips with Kanaan Transfers start from R50, and the exact
              fare is quoted upfront, before you confirm anything. Distance
              is what moves the number most.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: "From R50",
                label: "A hop into town",
                body: "The Spar, a pharmacy, a restaurant on the R40 — the shortest trips, and the fare is confirmed in the same chat before you book.",
              },
              {
                value: "By distance",
                label: "Day trips and gate runs",
                body: "Panorama Route viewpoints and Kruger gates within the 50km radius — the quote scales with the kilometres, shown before you confirm.",
              },
              {
                value: "Outside 50km",
                label: "The KMIA airport run",
                body: `Kruger Mpumalanga International Airport is about ${site.distances.kmiaMinutes} minutes and roughly 62km from Hazyview — just past the standard radius, so it's arranged directly rather than auto-quoted.`,
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              We won't pretend a 24 hour cab Hazyview visitors can summon on
              demand is guaranteed — Kanaan Transfers is a growing local
              business with a small, expanding fleet, so a late-night or
              early-morning trip is worth booking a day ahead rather than
              messaging on the spot.
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
              An arranged pickup beats hunting for a ride once you've landed.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Best Uses for a Hazyview Cab (Airport, Safari, Town Trips)
            </H2>
            <p>
              A cab isn&rsquo;t the right tool for every part of a Lowveld
              holiday — you still need your own vehicle to self-drive inside
              Kruger. Where it earns its keep is everything around that.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Airport transfers",
                body: "KMIA sits just past the standard 50km radius, so message Kanaan Transfers directly to arrange a pickup rather than expecting the instant quote.",
              },
              {
                title: "Activity pickups",
                body: "Zip-lining, gorge swings, river rafting — most operators have a meeting point in town, and a cab gets you there without needing your own car for the day.",
              },
              {
                title: "Panorama Route day trips",
                body: "Hiring a driver for a full day to God's Window and Bourke's Luck Potholes works well for a couple without a rental car.",
              },
              {
                title: "Town errands",
                body: "A forgotten charger, sunscreen, cash from an ATM — small trips that don't justify renting a car for the whole week.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="The easiest way to get around"
              thesis="A cab in Hazyview isn't an app you open — it's Kanaan Transfers, one WhatsApp chat away."
              body={
                <>
                  That is the one honest thing worth remembering about
                  transport in a small Lowveld town: no meter, no rank, just
                  a chat and a quote.{" "}
                  <Link
                    href="/blog/kruger-from-hazyview"
                    className="font-medium text-ochre hover:text-ochre-deep"
                  >
                    Once you&rsquo;re sorted for a lift
                  </Link>
                  , the rest of the logistics — which Kruger gate, which
                  morning — get a lot easier.
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
          title="Need a hand arranging a lift?"
          body="Getting around the Lowveld just got easier. Kanaan Transfers offers safe, comfortable and affordable transport within a 50km radius of Hazyview, from only R50 a trip — town rides, Panorama Route days, Kruger gates and more, in a vehicle that seats up to four. Message us to book your ride."
          buttonLabel="Message Kanaan Transfers"
          href={cabLeadsWhatsappHref}
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
                  The gates, the timing and the half-day plan that gets you
                  back to the farm for lunch.
                </p>
              </Link>
              <Link
                href="/blog/panorama-route-from-hazyview"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Panorama Route
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  The Panorama Route from Hazyview
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  God&rsquo;s Window, Bourke&rsquo;s Luck and the day that
                  ties the whole route together.
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
