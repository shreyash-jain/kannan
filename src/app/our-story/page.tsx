import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { Video } from "@/components/Video";
import { img, video } from "@/lib/images";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story — Anneli & Matthew at Kanaan Guest Farm",
  description: `Welcome to our family-run guest farm in the beautiful heart of Hazyview, Mpumalanga — just ${site.distances.kmiaMinutes} minutes from Kruger. This is the story of how we found Kanaan, what we have lovingly changed, and the wonderful experiences we are building for you.`,
  alternates: { canonical: "/our-story" },
  openGraph: {
    title: "Our Story · Kanaan Guest Farm",
    description:
      "Anneli and Matthew on finding Kanaan in the beautiful heart of Hazyview — and the warm, family-run welcome that came next.",
    images: [{ url: img.hosts.src, alt: img.hosts.alt }],
  },
};

export default function OurStoryPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Our Story", href: "/our-story" },
        ]}
      />
      <PageHero
        eyebrow="Our Story"
        title="A family farm near Kruger, lovingly brought back to life."
        lede={`Family-managed by ${site.hosts.join(" and ")}. Welcoming guests since ${site.ownedSince}.`}
      />

      {/* Hosts portrait — brief: people in shots wherever possible */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
            <Image
              src={img.hosts.src}
              alt={img.hosts.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="prose-kanaan max-w-prose">
            <Eyebrow>Chapter 1 · The Discovery</Eyebrow>
            <H2 className="mt-3 mb-5">A waterfall, an old man, and a farm that found us back.</H2>
            <p>
              Anneli had spent years travelling — more than thirty countries,
              an Argentine vineyard that nearly happened, the long
              traveller&rsquo;s search for somewhere to settle. The
              afternoon Matthew took her to a waterfall on a farm he knew —
              his birthday, the long sundown, the drinks at the water&rsquo;s
              edge — he mentioned, almost in passing, that the place was
              for sale.
            </p>
            <p>
              The next day we drove in. There was no gate. We walked the
              land — the forty-year-old mango grove, the cold river running
              through even in summer, the bushveld stretching to the
              horizon — and we saw, plainly, what nobody else had stopped
              to see. The old owner caught us on the way out. The day after
              that, we made an offer. He accepted. We bought Kanaan in{" "}
              {site.ownedSince}.
            </p>
            <p>
              <Link
                href="/blog/the-discovery"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Read the full story →
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {/* Chapter 2 */}
      <Section className="pt-0!">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-sand md:order-1">
            <Video
              video={video.lodgeRoomWalk}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="prose-kanaan max-w-prose md:order-2">
            <Eyebrow>Chapter 2 · The Promise</Eyebrow>
            <H2 className="mt-3 mb-5">Reading every guest, listening to every story.</H2>
            <p>
              Before we ever picked up a paintbrush, we sat down and read
              every single review the farm had ever received — and we
              listened. Guests loved the wonderful views, the affordable
              prices, the genuine South African warmth they found here. The
              little things that needed attention, we wrote down.
            </p>
            <p>
              And then we got to work — slowly, carefully, and with patience.
              The Kanaan you arrive at today is a place that has been loved
              back into shape, and a year from now it will be even more
              beautiful. We are not finished yet. We never quite will be.
            </p>
          </div>
        </div>
      </Section>

      {/* Chapter 3 */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center lg:px-8">
          <div className="relative aspect-5/4 overflow-hidden rounded-2xl">
            <Image
              src={img.kruger.src}
              alt={img.kruger.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="prose-kanaan max-w-prose">
            <Eyebrow>Chapter 3 · The Land</Eyebrow>
            <H2 className="mt-3 mb-5">
              A world of wonder, all within easy reach.
            </H2>
            <p>
              Land at Kruger Mpumalanga International Airport in the morning
              and you could be sitting on our veranda by lunchtime. The
              Phabeni and Numbi gates of the world-famous Kruger National
              Park lie just {site.distances.krugerGateMinutesMin} to{" "}
              {site.distances.krugerGateMinutesMax} minutes away — perfect
              for an unhurried early-morning game drive in search of the
              legendary Big Five. Phabeni means <em>shelter</em> in Sotho,
              and feels like the warmest welcome to one of Africa&apos;s
              greatest wildlife destinations.
            </p>
            <p>
              The misty mountain town of Sabie, with its breathtaking
              waterfalls, lies a short and scenic drive in one direction; the
              spectacular Panorama Route — God&apos;s Window, Bourke&apos;s
              Luck Potholes, the Three Rondavels — waits in the other.
            </p>
            <p>
              <Link
                href="/the-land"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Explore the Lowveld →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Chapters 4 & 5 — side by side */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="prose-kanaan max-w-prose">
            <Eyebrow>Chapter 4 · The Welcome</Eyebrow>
            <H2 className="mt-3 mb-5">
              From R{site.pricing.fromZAR} per person sharing — and that is
              just the beginning.
            </H2>
            <p>
              Genuinely affordable, well below the regional average. Our
              comfortable self-catering lodge rooms have their own bathrooms
              and kitchenettes, perfect for families and couples alike. The
              simple twin rooms have two single beds and an en-suite, fairly
              priced and welcoming. The backpacker dorm has{" "}
              {site.capacity.backpackersBeds} beds and a sociable shared
              kitchen, and the peaceful campsites sit in the shade of
              forty-year-old mango trees with power and water at every pitch.
            </p>
            <p>
              And if you would love a breakfast or dinner sorted while you
              are here, we will happily cook for you. A R
              {site.meals.breakfast.pricePerPersonZAR} continental breakfast
              in the morning, or a traditional South African dinner — local
              Lowveld dishes and a proper braai — in the evening, under the
              African sky. (We do not offer a halaal option.)
            </p>
            <p>
              <Link
                href="/stay"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Find your room →
              </Link>
            </p>
          </div>

          <div className="prose-kanaan max-w-prose">
            <Eyebrow>Chapter 5 · The Celebration</Eyebrow>
            <H2 className="mt-3 mb-5">A wedding weekend that ends on a Sunday morning.</H2>
            <p>
              The most memorable weddings we have ever hosted are the ones
              that last more than a single day. Friday is for arriving —
              drinks under the lights, family and friends finding each other
              again, a rehearsal dinner that runs on its own gentle clock.
              Saturday is yours, the ceremony, the celebration, the dancing
              under the African sky. Sunday morning, no one is in a hurry —
              there is coffee, there is the last of the cake, and people
              drift home full of stories.
            </p>
            <p>
              Kanaan holds up to {site.capacity.wedding.withCamping}+ guests
              when we open the camping ground for the whole weekend. The
              same wonderful welcome awaits family reunions, milestone
              birthdays, school groups, corporate retreats and team building —
              a whole farm, lovingly sized to the gathering.
            </p>
            <p>
              <Link
                href="/weddings"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Weddings &amp; gatherings →
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {/* The wider farm — agricultural land Anneli mentions in Chapter 6 */}
      <section className="bg-bone">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src={img.macGrove.src}
                alt={img.macGrove.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow>The wider farm</Eyebrow>
              <H2 className="mt-3 mb-5">More than the lodge.</H2>
              <Lede>
                Kanaan sits on agricultural ground that runs out into bushveld
                long after the lodge ends. We are slowly bringing that land
                back into use — macadamia trees planted in rows, hiking and
                cycling routes opening up again, and in time, a quieter
                eco-camp on the further property.
              </Lede>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 6 — closing */}
      <section className="bg-forest text-bone">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
          <Eyebrow>
            <span className="text-bone/70">Chapter 6 · The Future</span>
          </Eyebrow>
          <H2 className="mt-3 text-bone">We had a million ideas. Now we have a plan.</H2>
          <Lede>
            <span className="text-bone/90">
              The wooden-house backpackers is nearly open. Multi-day Kruger
              packages launch in the coming weeks. On-request breakfast and
              dinner are coming next. And the longer view — hiking and
              cycling routes across the wider farm, low-impact eco-camping on
              the further land — is taking shape, piece by piece, the way
              everything here gets built.
            </span>
          </Lede>
          <p className="mt-7 font-display text-lg italic text-bone/85">
            — {site.hosts.join(" & ")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/blog/the-future"
              className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
            >
              Read what we are building next →
            </Link>
            <Link
              href={whatsappLink("ourStory")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-bone/40 px-6 py-3 text-sm font-medium text-bone hover:bg-bone/10"
            >
              Say hello on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
