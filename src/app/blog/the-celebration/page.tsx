import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { img, wedding } from "@/lib/images";
import { articleLd } from "@/lib/jsonld";
import { site, whatsappLink } from "@/lib/site";

const datePublished = "2026-05-31";
const headline = "An unforgettable wedding weekend in the beautiful Lowveld — at Kanaan Guest Farm, Hazyview";

export const metadata: Metadata = {
  title: `An intimate wedding weekend in the Lowveld · Kanaan Guest Farm, Hazyview · Journal`,
  description:
    "An intimate, multi-day wedding venue in Hazyview, Mpumalanga. A weekend at Kanaan where everything slows down and the only thing that matters is the two of you and the people who know your story best.",
  alternates: { canonical: "/blog/the-celebration" },
  openGraph: {
    title: `An intimate wedding weekend at Kanaan · Lowveld wedding venue`,
    description:
      "A multi-day wedding weekend at Kanaan Guest Farm in Hazyview — rehearsal nights, a relaxed ceremony, Sunday morning slow. Up to 150 guests on the farm.",
    images: [{ url: img.viewpointGazebo.src, alt: img.viewpointGazebo.alt }],
    type: "article",
    publishedTime: datePublished,
    authors: [...site.hosts],
  },
};

export default function CelebrationPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleLd({
              headline,
              description:
                "An intimate, multi-day wedding weekend at Kanaan Guest Farm in Hazyview — rehearsal dinners around the fire, a relaxed ceremony under the African sky, a Sunday morning no one is in a hurry to leave. Up to 150 guests on the farm.",
              path: "/blog/the-celebration",
              image: img.viewpointGazebo.src,
              datePublished,
            }),
          ),
        }}
      />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal & Guides", href: "/blog" },
          { label: "The Celebration", href: "/blog/the-celebration" },
        ]}
      />

      <article>
        {/* Hero */}
        <header className="bg-sand">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
            <Eyebrow>Chapter 5 · The Celebration · Journal</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-tight text-forest-deep sm:text-5xl">
              An intimate wedding weekend, in the beautiful Lowveld.
            </h1>
            <Lede>
              Imagine a wedding where everything slows down and the only
              thing that truly matters is the two of you. A celebration
              filled with meaning, connection, and the people who know your
              story best — at Kanaan Guest Farm in Hazyview.
            </Lede>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
              Anneli &amp; Matthew ·{" "}
              {new Date(datePublished).toLocaleDateString("en-ZA", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </header>

        {/* Lead image — the picnic gazebo at the viewpoint, the literal
            ceremony spot above the Lowveld valley. */}
        <div className="mx-auto max-w-5xl px-5 pt-12 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={img.viewpointGazebo.src}
              alt={img.viewpointGazebo.alt}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* A weekend, not a day */}
        <Section>
          <div className="mx-auto max-w-prose">
            <div className="prose-kanaan">
              <H2 className="mb-5">A weekend, not a single day.</H2>
              <p>
                Imagine an intimate wedding weekend where everything slows
                down and the only thing that truly matters is the two of
                you. A celebration filled with meaning, connection, and the
                people who know your story best. Not a rushed wedding day,
                but a carefully curated experience where every moment feels
                personal, relaxed, and completely your own.
              </p>
              <p>
                Set against the beauty of a rustic guest farm in Hazyview,
                your wedding becomes more than a single day. It becomes a
                shared escape. A place where family and lifelong friends
                arrive early, settle into cosy twin-share rooms, family
                accommodation, or camping spots beneath the stars, and spend
                meaningful time together before the celebration even begins.
              </p>
              <p>
                Picture your bachelor and bachelorette celebrations hosted
                right there on the farm. No travelling, no schedules, no
                pressure. Just laughter echoing through the evening air, old
                friends reconnecting around a crackling fire, stories being
                shared late into the night, and the quiet excitement of
                knowing tomorrow changes everything.
              </p>
            </div>

            {/* Supporting image — the campfire grass under the mango grove,
                the literal "crackling fire" the copy promises. */}
            <figure className="mt-10">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.campfire.src}
                  alt={img.campfire.alt}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-xs text-muted">
                The communal fire pit at Kanaan, under the forty-year-old mango grove.
              </figcaption>
            </figure>
          </div>
        </Section>

        {/* The night before */}
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
            <Eyebrow>The night before</Eyebrow>
            <H2 className="mt-3 mb-5">A rehearsal dinner that feels like the wedding itself.</H2>
            <div className="prose-kanaan max-w-prose">
              <p>
                The night before your wedding feels just as special as the
                day itself. An intimate rehearsal dinner under soft lights
                and open skies. Glasses clinking. Barefoot conversations.
                The warmth of a family-managed farm that feels as though it
                was set aside just for your people, your memories, and your
                love story.
              </p>
            </div>

            {/* Supporting image — long-table reception under Edison bulbs,
                the literal "soft lights, glasses clinking" scene. */}
            <figure className="mt-10 max-w-prose">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={wedding.reception.src}
                  alt={wedding.reception.alt}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-xs text-muted">
                A long-table dinner under warm bulbs strung between the mango trees.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* The wedding day itself */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-5">Then comes the wedding day itself.</H2>
            <p>
              A relaxed morning surrounded by your closest people. No
              overwhelming crowds. No performances. Just genuine emotion
              and the comfort of being fully present with each other.
              Every detail intentionally chosen to reflect who you are as
              a couple, from the setting and atmosphere to the way your
              guests experience the weekend alongside you.
            </p>
            <p>
              This is the kind of wedding where love takes centre stage.
              Where your guests are not simply attending an event but
              becoming part of something deeply personal. A celebration
              where every face in the crowd matters, because they helped
              shape your journey together.
            </p>
            <p>
              It is quiet moments before the ceremony. Hands finding each
              other instinctively. Shared glances across the room. Sunset
              photographs in the Lowveld landscape. Music carrying through
              the night while your favourite people dance beneath the
              stars.
            </p>
            <p className="mt-8 text-center font-display text-xl italic text-forest-deep">
              A wedding designed not around expectations, but around
              feeling.
            </p>
          </div>
        </Section>

        {/* Inline mid-page image */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={wedding.bridesmaids.src}
              alt={wedding.bridesmaids.alt}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Mid-page CTA */}
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center lg:px-8">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              Whenever you are ready
            </p>
            <p className="mt-4 font-display text-2xl text-forest-deep">
              Let&apos;s start planning your weekend.
            </p>
            <div className="mt-7">
              <Link
                href={whatsappLink("weddings")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
              >
                Start a wedding enquiry on WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* PRACTICAL SECTION — what's included */}
        <section className="bg-sand">
          <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
            <Eyebrow>Practical information</Eyebrow>
            <H2 className="mt-3 mb-5">
              What a wedding weekend at Kanaan includes.
            </H2>
            <div className="prose-kanaan max-w-prose">
              <p>
                A Kanaan wedding is built around the weekend, not the day.
                Friday evening is for arrivals, the rehearsal dinner and
                the first fire of the weekend. Saturday is yours — the
                ceremony, the celebration, the dancing under the African
                sky. Sunday morning is slow on purpose: coffee, the last
                of the cake, and the people who slept on the farm last
                night drifting down for one more meal together.
              </p>
              <p>
                You and your guests sleep on the property. The lodge units
                hold {site.capacity.sleepingTotal}+ guests across our
                renovated double rooms, twin rooms with two single beds,
                and the larger family units. Camping under the forty-year-
                old mango grove takes care of the rest — there are{" "}
                {site.capacity.campsitePitches} pitches with power and
                water, and on a wedding weekend we open the wider camping
                ground for up to {site.capacity.campingPeople} guests.
              </p>
              <p>
                The venue itself flexes to your guest list. We host
                intimate weddings of under{" "}
                {site.capacity.wedding.indoor} guests indoors in our main
                venue, weddings of{" "}
                {site.capacity.wedding.indoor}–{site.capacity.wedding.withMarquee}{" "}
                guests under a marquee on the wedding lawn, and weddings of{" "}
                {site.capacity.wedding.withMarquee}–{site.capacity.wedding.withCamping}{" "}
                guests when we open the camping ground for the whole
                weekend. The setting is the rest of the work — the mango
                grove, the river, the Lowveld escarpment behind it, the
                road back to Kruger {site.distances.krugerGateMinutesMin}–
                {site.distances.krugerGateMinutesMax} minutes away.
              </p>
              <p>
                We are flexible about how you bring the weekend to life:
                you can bring your own caterers and decor, or work from
                the local recommendations we have built up over our first
                year here. Breakfast and dinner can be put on for your
                guests on request, including a traditional South African
                braai.
              </p>
              <p>
                Detailed wedding packages are being finalised and will be
                announced soon — until then, please reach out on WhatsApp
                and we will share the current options personally with
                you.
              </p>
            </div>

            {/* Supporting image — the real covered venue at Kanaan, the
                literal indoor space the practical copy is about. */}
            <figure className="mt-10 max-w-prose">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.venueCovered.src}
                  alt={img.venueCovered.alt}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-xs text-muted">
                The covered main venue at Kanaan, open to the Lowveld valley.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Closing — Anneli's poetic four lines, intact */}
        <Section>
          <div className="mx-auto max-w-prose">
            <div className="prose-kanaan text-center">
              <H2 className="mb-8">Your story, honoured.</H2>
              <p className="font-display text-2xl leading-relaxed text-forest-deep">
                A place where your story is honoured.
              </p>
              <p className="font-display text-2xl leading-relaxed text-forest-deep">
                A space where your people feel at home.
              </p>
              <p className="font-display text-2xl leading-relaxed text-forest-deep">
                And a weekend that feels entirely, unmistakably yours.
              </p>
              <p className="mt-10 text-base text-ink/80">
                If any of that sounds like the kind of wedding you have been
                imagining, send us a message on WhatsApp — Anneli or Matthew
                will reply personally, and we will start sketching the
                weekend with you.
              </p>
            </div>

            {/* Closing image — Sunday-morning breakfast table on the
                wedding lawn, the slow bookend of the weekend. */}
            <figure className="mt-12">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={wedding.morningAfter.src}
                  alt={wedding.morningAfter.alt}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-center text-xs text-muted">
                Sunday morning at Kanaan, when nobody is in a hurry.
              </figcaption>
            </figure>
          </div>
        </Section>

        {/* Sign-off + CTA */}
        <section className="bg-forest text-bone">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
            <Eyebrow>
              <span className="text-bone/70">Start the conversation</span>
            </Eyebrow>
            <H2 className="mt-3 text-bone">Let us talk about your weekend.</H2>
            <p className="mt-6 text-bone/85">
              WhatsApp is the easiest, warmest way to reach us. You will
              get a personal reply — no forms, no auto-responders, just a
              real conversation about your celebration.
            </p>
            <p className="mt-7 font-display text-lg italic text-bone/85">
              — Anneli &amp; Matthew
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={whatsappLink("weddings")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
              >
                Start a wedding enquiry on WhatsApp
              </Link>
              <Link
                href="/weddings"
                className="inline-flex items-center rounded-full border border-bone/40 px-6 py-3 text-sm font-medium text-bone hover:bg-bone/10"
              >
                See the wedding page →
              </Link>
            </div>
          </div>
        </section>

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
                  Chapter 3 · The Land
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Africa, from the gate of Kanaan
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Kruger, Sabie, Graskop — everything your wedding guests
                  can do in the days around the celebration.
                </p>
              </Link>
              <Link
                href="/blog/the-future"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Chapter 6 · The Future
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  What we are building next
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  How the wedding lawn, the lodge units and the wider farm
                  are being shaped in the years ahead.
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
