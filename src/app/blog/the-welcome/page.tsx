import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { Video } from "@/components/Video";
import { img, video } from "@/lib/images";
import { articleLd } from "@/lib/jsonld";
import { site, whatsappLink } from "@/lib/site";

const datePublished = "2026-05-31";
const headline = "The welcome at Kanaan — what a stay at our Hazyview guest farm actually feels like";

export const metadata: Metadata = {
  title: `The welcome at Kanaan — what a stay actually includes · Journal`,
  description:
    "What a stay at Kanaan Guest Farm in Hazyview actually feels like — the dust road in, the room you arrive to, the morning at the breakfast table, the long afternoon under the mango trees.",
  alternates: { canonical: "/blog/the-welcome" },
  openGraph: {
    title: `The welcome at Kanaan · Kanaan Guest Farm`,
    description:
      "The arrival, the rooms, the breakfast, the grounds, the campsite under the mango trees, the wooden house — and an honest line about the kind of traveller Kanaan was built for.",
    images: [{ url: img.veranda.src, alt: img.veranda.alt }],
    type: "article",
    publishedTime: datePublished,
    authors: [...site.hosts],
  },
};

export default function WelcomePostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleLd({
              headline,
              description:
                "What a stay at Kanaan Guest Farm in Hazyview actually feels like — the arrival, the room, the morning, the grounds, the camping under the mango trees, and the kind of traveller the farm was quietly built for.",
              path: "/blog/the-welcome",
              image: img.veranda.src,
              datePublished,
            }),
          ),
        }}
      />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal & Guides", href: "/blog" },
          { label: "The Welcome", href: "/blog/the-welcome" },
        ]}
      />

      <article>
        {/* Hero */}
        <header className="bg-sand">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
            <Eyebrow>Chapter 4 · The Welcome · Journal</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-tight text-forest-deep sm:text-5xl">
              The welcome at Kanaan.
            </h1>
            <Lede>
              The dust road in. The trees opening up around the lodge. The
              first breath of bushveld off the warm air. This is what a stay
              at Kanaan actually feels like, from the moment you turn off the
              R40.
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

        {/* Lead image — lodge veranda (the welcome) */}
        <div className="mx-auto max-w-5xl px-5 pt-12 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={img.veranda.src}
              alt="A lodge unit at Kanaan Guest Farm in Hazyview — brick-paved patio, built-in braai under shade, the bushveld just beyond. The first view many guests have after the dust road in."
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* The arrival */}
        <Section>
          <div className="mx-auto max-w-prose">
            <div className="prose-kanaan">
              <H2 className="mb-5">The arrival.</H2>
              <p>
                You turn off the R40 onto a dust road. There are signs the
                whole way in now — we put them up early, because more than one
                guest told us in their own words that they had nearly driven
                past us on the first try. The track winds for a couple of
                hundred metres through the bush and then the canopy lifts and
                the mango grove appears, and behind it the lodge.
              </p>
              <p>
                The motorised gate opens. You roll in slowly because there is
                no reason to do anything quickly at Kanaan. The first sound
                you hear — once the car door closes and the engine sighs off
                — is usually a bird. Sometimes it is the wind moving through
                the old mango leaves. There is no traffic noise. There is no
                pool music. Whoever you are, whatever week you have just had
                before you got here, this is the moment Kanaan starts to do
                its quiet work on you.
              </p>
              <p>
                {site.distances.kmiaMinutes} minutes ago, you were at Kruger
                Mpumalanga International Airport. It is hard to believe.
              </p>
            </div>

            {/* Supporting image — the front gate and the Kanaan signboard,
                the literal first thing a guest sees when they roll in. */}
            <figure className="mt-10">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
                <Image
                  src={img.gateSign.src}
                  alt={img.gateSign.alt}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-xs text-muted">
                The front gate at Kanaan — the sign we put up early.
              </figcaption>
            </figure>
          </div>
        </Section>

        {/* Your room */}
        <section className="bg-bone">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <Eyebrow>Your room</Eyebrow>
                <H2 className="mt-3 mb-5">Real beds, real linen, real space.</H2>
                <div className="prose-kanaan max-w-prose">
                  <p>
                    The room we hand you the keys to has been recently
                    renovated, or is about to be — we are working our way
                    through the lodge units one at a time. What that means
                    in practice is a wooden-beamed ceiling, an en-suite
                    bathroom with a proper walk-in shower, soft white linen
                    on the bed, a ceiling fan that actually moves the air,
                    a small kitchenette with a kettle, a two-plate hob and
                    a fridge, and free WiFi that does not give up at the
                    door.
                  </p>
                  <p>
                    The lodge has a few different shapes of room — a quiet
                    double, twin singles with scalloped headboards, and a
                    larger unit that fits a small family — so when you tell
                    us who is coming we can put you in the right one. Linen
                    and towels are provided. The room is yours to live in
                    the way you would live in your own; we are not
                    precious about it.
                  </p>
                  <p>
                    If you would rather be closer to the trees and the
                    night sky, the camping ground sits under the
                    forty-year-old mango grove with power and water at
                    every pitch — a different kind of room, but a room
                    nonetheless.
                  </p>
                </div>
              </div>
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
                <Image
                  src={img.lodgeBedroomEnsuite.src}
                  alt="A renovated lodge bedroom at Kanaan with the en-suite shower visible through the doorway — wooden ceiling, soft linen, a small rug at the foot of the bed."
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Breakfast and the morning */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-5">Breakfast and the morning.</H2>
            <p>
              Mornings at Kanaan move at their own pace. There is no rush
              and there is no buffet bell. If you want breakfast, tell us
              the night before — a proper continental spread, locally
              prepared, on the table whenever you are ready for it. Some
              guests take it on the lodge veranda. Some take it at the
              campsite. Some are out the gate at sunrise to catch a Kruger
              morning and eat the breakfast we wrapped up for them in the
              car on the way.
            </p>
            <p>
              The same goes for dinner. We will happily put on a
              traditional South African braai or a set menu of local
              Lowveld dishes when you would like it — just give us the
              afternoon to set it up. Most evenings we eat with whoever is
              around, and you are always welcome to pull up a chair.
            </p>
          </div>
        </Section>

        {/* The grounds */}
        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
              <div className="md:order-2">
                <Eyebrow>The grounds</Eyebrow>
                <H2 className="mt-3 mb-5">Plenty of farm, without ever needing to leave.</H2>
                <div className="prose-kanaan max-w-prose">
                  <p>
                    A swimming pool kept ready year-round, lined by palm
                    trees and a brick-paved deck. Hiking and mountain-
                    biking trails that begin at our gate and run out into
                    the wider farm. A communal fire pit that sees more use
                    than anything else we have built. An entertainment area
                    with a pool table and foosball for the evenings nobody
                    wants to be inside yet. And the mango grove itself —
                    forty years old, the kind of dappled shade you want to
                    read an afternoon away under.
                  </p>
                  <p>
                    A small river runs along the edge of the property and
                    keeps the trees company. The fire pit gets lit most
                    evenings. The night sky, far enough from town, still
                    feels like a proper African sky.
                  </p>
                </div>
              </div>
              <div className="md:order-1 relative aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src={img.poolSunset.src}
                  alt={img.poolSunset.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center lg:px-8">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              When you are ready
            </p>
            <p className="mt-4 font-display text-2xl text-forest-deep">
              Tell us when you would like to come — we will plan it with you.
            </p>
            <div className="mt-7">
              <Link
                href={whatsappLink("stay")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
              >
                Start a stay on WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* Campsite tour clip + real camping photo */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-sand">
              <Video
                video={video.tourCamping}
                narrated
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative aspect-[16/9] md:aspect-auto overflow-hidden rounded-2xl">
              <Image
                src={img.campingTents.src}
                alt={img.campingTents.alt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted">
            A walk through the camping ground at Kanaan, under the
            forty-year-old mango grove.
          </p>
        </div>

        {/* The campsite under the mango trees */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-5">The campsite under the mango trees.</H2>
            <p>
              The camping ground at Kanaan sits in the shade of the
              forty-year-old mango grove. There are{" "}
              {site.capacity.campsitePitches} peaceful pitches with power
              and water at every one — tents, rooftop tents, small
              campers, the lot. The ablution block is shared, the fire pit
              is communal, and the property is fenced and gated, which
              matters when you are travelling with kit you do not want to
              think about overnight.
            </p>
            <p>
              The camp ground is also where Kanaan gets its sociable
              evenings. Overlanders trade route notes around the fire.
              People who arrived as strangers ride into Kruger together
              the next morning. When we open the camp ground for a wedding
              or a school group, we can welcome up to{" "}
              {site.capacity.campingPeople} guests on it.
            </p>
          </div>
        </Section>

        {/* The wooden house */}
        <section className="bg-bone">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <Eyebrow>The wooden house</Eyebrow>
                <H2 className="mt-3 mb-5">A backpackers, nearly open.</H2>
                <div className="prose-kanaan max-w-prose">
                  <p>
                    When we bought Kanaan there was no backpacker
                    accommodation here. We are changing that. The wooden
                    house on the property is being renovated into a small
                    dorm with{" "}
                    {site.capacity.backpackersBeds} beds, a shared kitchen
                    and the kind of sociable common room a long traveller
                    looks for after a hard week on the road.
                  </p>
                  <p>
                    It is not quite finished, but it is close. It will be
                    the affordable, social side of Kanaan — built for the
                    kind of international budget traveller we were
                    ourselves, not so long ago. The first packages built
                    around it are already on the site —{" "}
                    <Link
                      href="/packages"
                      className="font-medium text-ochre hover:text-ochre-deep"
                    >
                      have a look at the packages page →
                    </Link>{" "}
                    to see what is taking shape.
                  </p>
                </div>
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src={img.lodgeMultiBed.src}
                  alt="A larger room at Kanaan with multiple beds — the kind of layout the wooden-house backpackers will pick up when it opens."
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's nearby */}
        <Section>
          <div className="mx-auto max-w-prose">
            <div className="prose-kanaan">
              <H2 className="mb-5">What is just outside the gate.</H2>
              <p>
                The Phabeni and Numbi gates of the Kruger National Park are{" "}
                {site.distances.krugerGateMinutesMin} to{" "}
                {site.distances.krugerGateMinutesMax} minutes away by road —
                close enough for an unhurried early-morning game drive and
                back for lunch. The Panorama Route — God&apos;s Window, the
                Three Rondavels, Bourke&apos;s Luck Potholes — is a beautiful
                day out in the other direction. Sabie&apos;s waterfalls and
                Graskop&apos;s gorge lift are an easy half-day each. There
                is more in the Lowveld than a single trip can take in.
              </p>
              <p>
                We wrote a longer letter about everything within reach of
                the farm —{" "}
                <Link
                  href="/blog/africa"
                  className="font-medium text-ochre hover:text-ochre-deep"
                >
                  read our invitation to Africa →
                </Link>{" "}
                for the full picture.
              </p>
            </div>

            {/* Three small context shots — Kruger, Panorama, Sabie — sized
                to the same prose column as the text above. */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <figure>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={img.kruger.src}
                    alt={img.kruger.alt}
                    fill
                    sizes="(min-width: 768px) 220px, 30vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-center text-[10px] uppercase tracking-[0.18em] text-muted">
                  Kruger · {site.distances.krugerGateMinutesMin}–{site.distances.krugerGateMinutesMax} min
                </figcaption>
              </figure>
              <figure>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={img.panorama.src}
                    alt={img.panorama.alt}
                    fill
                    sizes="(min-width: 768px) 220px, 30vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-center text-[10px] uppercase tracking-[0.18em] text-muted">
                  Panorama · ~90 min
                </figcaption>
              </figure>
              <figure>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={img.sabieRiver.src}
                    alt={img.sabieRiver.alt}
                    fill
                    sizes="(min-width: 768px) 220px, 30vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-center text-[10px] uppercase tracking-[0.18em] text-muted">
                  Sabie · ~45 min
                </figcaption>
              </figure>
            </div>
          </div>
        </Section>

        {/* Who Kanaan is for */}
        <section className="bg-sand">
          <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
            <Eyebrow>Who Kanaan is for</Eyebrow>
            <H2 className="mt-3 mb-5">An honest line about who will love it.</H2>
            <div className="prose-kanaan max-w-prose">
              <p>
                Kanaan is for travellers who want time to slow down. For
                families who would rather their children spent a week
                running around under mango trees than checking in and out
                of three hotels. For couples who want the Kruger trip but
                also a quiet evening on a veranda. For overlanders. For
                people who travel because they want to see a place
                properly, not because they want it served to them through
                glass.
              </p>
              <p>
                Kanaan is not for guests who want a five-star resort. It
                is not polished in that way and it does not want to be. If
                what you are looking for is a working farm with comfortable
                rooms on it, a fire most evenings, and people who will
                remember your name on day two — that is us. We would love
                to have you.
              </p>
            </div>

            {/* Supporting image — the campfire grass under the mango grove,
                the literal "fire most evenings" the copy above promises.
                Sized to the same prose column so the section reads tight. */}
            <figure className="mt-10 max-w-prose">
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
                The fire pit at Kanaan, ringed by the forty-year-old mango grove.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Sign-off */}
        <section className="bg-forest text-bone">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
            <Eyebrow>
              <span className="text-bone/70">Whenever you are ready</span>
            </Eyebrow>
            <H2 className="mt-3 text-bone">Come and stay.</H2>
            <p className="mt-6 text-bone/85">
              Tell us when you would like to come and we will plan it with
              you — the room, the breakfast, the day in Kruger if you want
              one. A real conversation, not a form.
            </p>
            <p className="mt-7 font-display text-lg italic text-bone/85">
              — Anneli &amp; Matthew
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={whatsappLink("stay")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
              >
                Start a stay on WhatsApp
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center rounded-full border border-bone/40 px-6 py-3 text-sm font-medium text-bone hover:bg-bone/10"
              >
                See the packages →
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
                  Kruger, Sabie, Graskop and the wonders of the Lowveld —
                  the longer letter about what is just outside the gate.
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
                  The wooden-house backpackers, multi-day Kruger packages,
                  trails and a slow vision for the wider farm.
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
