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

const datePublished = "2026-09-18";
const headline = "Need a cab in Hazyview? Here's the easiest way to get around";

// A dedicated WhatsApp number for this post only, so organic-search leads
// from this guide can be counted separately from the farm's main enquiry
// line. Not part of site.ts — do not reuse this number on any other post.
const CAB_LEADS_WHATSAPP_NUMBER = "27642116345";
const cabLeadsWhatsappHref = `https://wa.me/${CAB_LEADS_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I found your guide on getting a cab in Hazyview and would love a hand arranging a lift.",
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
                "A Hazyview taxi service works on an agreed fare, not a meter, so confirm the price and the pickup point before you get in.",
                "The fastest route to a trustworthy driver is your guesthouse, not a street corner — ask before you land.",
                "Fares depend mostly on distance and time of day; a KMIA airport run costs more than a hop into town.",
                "Once you have a driver who shows up on time, save the number — you won't need to look twice.",
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
              {`That catches out a lot of first-time visitors. You land at Kruger Mpumalanga International Airport, ${site.distances.kmiaMinutes} minutes from Hazyview, phone in hand, and there is no app to open. The honest answer is that a taxi Hazyview South Africa visitor can rely on isn't a tap-and-go service — it's a person, usually recommended by whoever you're staying with.`}
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What to Expect From a Local Hazyview Taxi Service</H2>
            <p>
              A local Hazyview transport service looks nothing like a
              metered city cab. Once you know the difference, it stops
              feeling risky and starts feeling simple.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "No meter, an agreed fare",
                body: "The price is set before you leave, not calculated on arrival. Ask, agree, then go — don't climb in first and negotiate after.",
              },
              {
                title: "The driver knows the back roads",
                body: "Good local drivers know which Kruger gate opens when, which shortcut avoids the school-run traffic, and where the potholes are on the R536.",
              },
              {
                title: "Door-to-door, not a rank",
                body: "Most drivers will fetch you from your gate rather than expect you to find them. There isn't a formal taxi rank for visitors in the way a city has one.",
              },
              {
                title: "Cash first, card sometimes",
                body: "Carry cash as your default. A few drivers take EFT or a card machine, but don't assume it — ask when you book.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">How to Book a Cab in Hazyview in Minutes</H2>
            <p>
              There is no single Hazyview cab booking app to download, and
              that's really the whole trick to understand. Booking is a
              phone call or a WhatsApp message, and it takes less time than
              searching for an app that isn't going to appear.
            </p>
          </div>
          <NumberedList
            items={[
              {
                title: "Ask your accommodation first",
                body: "Most guesthouses in Hazyview — us included — know a driver personally and can call one on your behalf before you've even unpacked.",
              },
              {
                title: "Confirm the fare and the exact pickup point",
                body: "\"Pick me up in Hazyview\" is too vague. Give a gate, a business name or a landmark, and agree the rand amount out loud.",
              },
              {
                title: "Save the number for the rest of your stay",
                body: "One driver who arrives on time beats renegotiating with a stranger every morning. Most guests use the same person for their whole trip.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Cab Fares and What Affects the Price</H2>
            <p>
              Nobody in Hazyview quotes one flat rate, because the honest
              answer is "it depends." Three things move the number most.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: "Shortest",
                label: "A hop into town",
                body: "The Spar, a pharmacy, a restaurant on the R40 — this is the cheapest trip, and still worth agreeing the fare before you climb in.",
              },
              {
                value: "Longest",
                label: "The KMIA airport run",
                body: `About ${site.distances.kmiaMinutes} minutes each way to or from Kruger Mpumalanga International Airport. Distance is the single biggest factor in the price.`,
              },
              {
                value: "Variable",
                label: "Odd hours",
                body: "A 04:30 pickup for a Kruger gate opening, or a late arrival off a delayed flight, often costs more than the same trip at midday.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              We won't pretend a 24 hour cab Hazyview visitors can summon on
              demand is guaranteed — some drivers will take a late-night
              call, but a 2am airport arrival is exactly the trip worth
              arranging a day ahead, not hoping to flag down on the R40.
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
              A cab isn't the right tool for every part of a Lowveld
              holiday — you still need your own vehicle to self-drive inside
              Kruger. Where it earns its keep is everything around that.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Airport transfers",
                body: "The obvious one. If you flew into KMIA without hiring a car, a pre-arranged transfer is simpler than trying to find one on arrival.",
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
              thesis="A cab in Hazyview isn't an app you open — it's a person you ask for, ideally before you land."
              body={
                <>
                  That is the one honest thing worth remembering about
                  transport in a small Lowveld town: the system runs on
                  referrals, not algorithms.{" "}
                  <Link
                    href="/blog/kruger-from-hazyview"
                    className="font-medium text-ochre hover:text-ochre-deep"
                  >
                    Once you're sorted for a lift
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
          body="Message us before you land and we'll point you to a driver we already trust — the same person can fetch you from the airport and run you around for the rest of your stay."
          buttonLabel="Ask us about getting around"
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
