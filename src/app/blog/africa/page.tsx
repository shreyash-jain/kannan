import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { articleLd } from "@/lib/jsonld";
import { site, whatsappLink } from "@/lib/site";

const datePublished = "2026-05-12";
const headline =
  "Africa: a family holiday at Kanaan Guest Farm in the beautiful heart of Hazyview";

export const metadata: Metadata = {
  title: `${headline} · Journal`,
  description:
    "Welcome to Africa. A warm, unforgettable family holiday based at Kanaan Guest Farm in Hazyview, Mpumalanga — gateway to the Kruger National Park, Sabie, Graskop, and the wonders of the Lowveld.",
  alternates: { canonical: "/blog/africa" },
  openGraph: {
    title: `${headline} · Kanaan Guest Farm`,
    description:
      "A heart-felt invitation from Anneli — discover Hazyview, Kruger, Sabie and Graskop from a warm family-run guest farm in the Lowveld.",
    images: [{ url: img.hiking.src, alt: img.hiking.alt }],
    type: "article",
    publishedTime: datePublished,
    authors: [...site.hosts],
  },
};

export default function AfricaPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleLd({
              headline,
              description:
                "An invitation to an African family holiday based at Kanaan Guest Farm in Hazyview, Mpumalanga — Kruger, Sabie, Graskop and the wonders of the Lowveld.",
              path: "/blog/africa",
              image: img.hiking.src,
              datePublished,
            }),
          ),
        }}
      />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal & Guides", href: "/blog" },
          { label: "Africa", href: "/blog/africa" },
        ]}
      />

      <article>
        {/* Hero */}
        <header className="bg-sand">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
            <Eyebrow>Chapter 3 · The Land · Journal</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-tight text-forest-deep sm:text-5xl">
              Africa.
            </h1>
            <Lede>
              A place where your heart beats a little faster, where the rhythm
              of excitement builds with every passing moment as you prepare
              for a family holiday filled with discovery, adventure, laughter,
              and unforgettable memories.
            </Lede>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
              Written by Anneli · {new Date(datePublished).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </header>

        {/* Lead image — the wider Lowveld escarpment from Kanaan, the land
            this destination guide sits inside. */}
        <div className="mx-auto max-w-5xl px-5 pt-12 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={img.hiking.src}
              alt="The Lowveld around Kanaan — rolling forest and farmland running toward the escarpment that hides Kruger on one side and the Panorama Route on the other."
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Intro body */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              This is more than just a getaway. It is an opportunity to
              reconnect with your loved ones, bond with your children and
              siblings, and experience South Africa in a fun, engaging, and
              inspiring way that will leave lasting memories for years to
              come.
            </p>
            <p>
              Make your perfect holiday base at Kanaan Guest Farm, in the
              beautiful heart of Hazyview, Mpumalanga. Family managed and
              proudly welcoming guests with genuine South African
              hospitality, the team at Kanaan Guest Farm always goes the
              extra mile to ensure every visitor feels at home.
              Cost-effective, warm, friendly, and perfectly located, it is
              the ideal destination for families, couples, solo travellers,
              groups and team building all wanting to explore the wonders of
              Mpumalanga without breaking the budget.
            </p>
            <p>
              Choose from comfortable self-catering family rooms, twin
              rooms, triple rooms, backpacker accommodation, or peaceful
              campsites surrounded by nature. Unpack your bags, put your
              feet up, and relax beneath the African sky as the evening
              sounds drift through the air. Enjoy the crackle of a
              traditional braai while the aroma of delicious food tempts
              your taste buds. Here, peace and tranquillity meet adventure,
              creating the perfect place to recharge your batteries and
              simply enjoy life at a slower pace.
            </p>
          </div>
        </Section>

        {/* Kruger */}
        <section className="bg-bone">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div className="prose-kanaan max-w-prose">
                <Eyebrow>Kruger National Park</Eyebrow>
                <H2 className="mt-3 mb-5">The gateway to extraordinary wildlife.</H2>
                <p>
                  Just approximately 12 km from Hazyview lies the
                  world-famous Kruger National Park, one of Africa&apos;s
                  greatest wildlife destinations. Whether you choose a
                  thrilling self-drive safari or a guided game drive
                  adventure, entering through the nearby Phabeni Gate places
                  you at the gateway to extraordinary wildlife encounters.
                </p>
                <p>
                  The name Phabeni comes from the Sotho word meaning{" "}
                  <em>shelter</em>, a fitting introduction to the magic
                  that awaits within the park. Imagine spotting the
                  legendary Big Five in their natural habitat and stopping
                  for a scenic picnic lunch surrounded by the beauty of the
                  African bushveld.
                </p>
              </div>

              <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src={img.kruger.src}
                  alt={img.kruger.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hazyview cultural evening */}
        <Section>
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div className="md:order-2">
              <div className="prose-kanaan max-w-prose">
                <Eyebrow>Hazyview, by evening</Eyebrow>
                <H2 className="mt-3 mb-5">The vibrant spirit of the Lowveld.</H2>
                <p>
                  As the sun sets, immerse yourself in the vibrant spirit of
                  Hazyview with an evening cultural festival and traditional
                  dinner experience. Walk alongside gentle giants at
                  Elephant Whispers, browse local arts and crafts, and
                  discover the warmth and creativity of the local
                  community. Every moment offers something new, exciting,
                  and deeply memorable.
                </p>
              </div>
            </div>

            <div className="md:order-1 relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src={img.hazyviewEvening.src}
                alt={img.hazyviewEvening.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Sabie */}
        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div className="prose-kanaan max-w-prose">
                <Eyebrow>Sabie</Eyebrow>
                <H2 className="mt-3 mb-5">A misty mountain town of waterfalls.</H2>
                <p>
                  Take a scenic drive to the misty and mysterious town of
                  Sabie, where breathtaking mountain landscapes and
                  waterfalls await. Enjoy local cuisine, explore the beauty
                  of Lone Creek Falls, Horseshoe Falls, and Bridal Veil
                  Falls, or add some adrenaline to your adventure with white
                  water tubing, canyoning, and abseiling experiences.
                </p>
              </div>

              <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
                <Image
                  src={img.sabieRiver.src}
                  alt={img.sabieRiver.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Graskop */}
        <Section>
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div className="md:order-2 relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src={img.panorama.src}
                alt={img.panorama.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <div className="prose-kanaan max-w-prose">
                <Eyebrow>Graskop</Eyebrow>
                <H2 className="mt-3 mb-5">A grassy hillock with spectacular views.</H2>
                <p>
                  Another must visit destination is Graskop, located only 39
                  km from Hazyview. Originally founded in the 1880s as a
                  gold mining camp, Graskop is famous for its spectacular
                  scenery and endless adventure opportunities. The name
                  Graskop translates to <em>grassy hillock</em> in
                  Afrikaans, perfectly describing the lush rolling
                  landscapes surrounding the town.
                </p>
                <p>
                  Adventure seekers will be spoiled for choice with
                  attractions such as Graskop Gorge Lift Company, the
                  thrilling Cliff Walk, suspension bridges, Skyway trails,
                  and the famous Big Swing. For a more relaxed experience,
                  spend time exploring the local community craft centre and
                  discover handmade treasures and local artistry.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Closing */}
        <section className="bg-forest text-bone">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
            <Eyebrow>
              <span className="text-bone/70">An unforgettable African experience</span>
            </Eyebrow>
            <H2 className="mt-3 text-bone">A journey filled with wonder.</H2>
            <div className="prose-kanaan mx-auto mt-6 text-left">
              <p className="text-bone/90">
                Whether you are planning an affordable family holiday, a
                romantic escape, a solo adventure, or a team-building
                weekend, this remarkable region offers a destination with
                many faces that will amaze and inspire you every single
                day. From wildlife safaris and mountain adventures to
                peaceful evenings under the stars, Kanaan Guest Farm places
                you at the centre of it all.
              </p>
              <p className="text-bone/90">
                This is not simply a holiday. It is an unforgettable
                African experience waiting to be discovered. A journey
                filled with wonder, excitement, connection, and memories
                too precious to miss.
              </p>
            </div>
            <p className="mt-8 font-display text-lg italic text-bone/85">
              — Anneli
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={whatsappLink("blog")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
              >
                Say hello on WhatsApp
              </Link>
              <Link
                href="/stay"
                className="inline-flex items-center rounded-full border border-bone/40 px-6 py-3 text-sm font-medium text-bone hover:bg-bone/10"
              >
                Find your room
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </article>
    </>
  );
}
