import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { articleLd } from "@/lib/jsonld";
import { site, whatsappLink } from "@/lib/site";

const datePublished = "2026-05-22";
const headline = "What we are building next at Kanaan: packages, weddings, trails, and a slow farm vision";

export const metadata: Metadata = {
  title: `What we are building next at Kanaan · Journal`,
  description:
    "A year into Kanaan, Anneli and Matthew share what is next — multi-day Kruger packages, the new wooden-house backpackers, affordable weddings, hiking and cycling trails, and the long-term ecotourism vision for the wider farm.",
  alternates: { canonical: "/blog/the-future" },
  openGraph: {
    title: `What we are building next at Kanaan · Kanaan Guest Farm`,
    description:
      "One year of renovations, and a clear vision for what comes next. Multi-day packages, weddings, the wooden-house backpackers, and a long view of trails and eco-camping on the wider farm.",
    images: [{ url: img.lodgeTwinSuite.src, alt: img.lodgeTwinSuite.alt }],
    type: "article",
    publishedTime: datePublished,
    authors: [...site.hosts],
  },
};

export default function FuturePostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleLd({
              headline,
              description:
                "Anneli on the next chapter at Kanaan — multi-day packages, the wooden-house backpackers, the affordable wedding venue, on-request meals, and the longer-term vision of trails and eco-camping on the wider farm.",
              path: "/blog/the-future",
              image: img.lodgeTwinSuite.src,
              datePublished,
            }),
          ),
        }}
      />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/blog" },
          { label: "The Future", href: "/blog/the-future" },
        ]}
      />

      <article>
        {/* Hero */}
        <header className="bg-sand">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
            <Eyebrow>Chapter 6 · The Future · Journal</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-tight text-forest-deep sm:text-5xl">
              What we are building next.
            </h1>
            <Lede>
              A year of renovations later, we know exactly what we want to
              build next. A farm. An experience. And an invitation to be part
              of the journey.
            </Lede>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
              Written by Anneli ·{" "}
              {new Date(datePublished).toLocaleDateString("en-ZA", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </header>

        {/* Lead image */}
        <div className="mx-auto max-w-5xl px-5 pt-12 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={img.lodgeTwinSuite.src}
              alt={img.lodgeTwinSuite.alt}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Intro */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>When we started Kanaan, we had a million ideas.</p>
            <p>
              That is not an exaggeration. Every week brought a new one — a
              new room layout, a new event we could host, a new corner of
              the property that wanted attention. For the first few months,
              we tried to chase them all. We pretty quickly realised what
              every project eventually teaches you: you cannot finish
              anything if you are starting everything.
            </p>
            <p>
              So we narrowed. We picked one focus — the renovations, the
              bones of the place — and let everything else wait its turn.
              Almost a year in, that is starting to show. The lodge units
              are nearly where I always wanted them. The grounds are
              softening into something that feels properly cared for. There
              is still work — there will always be work — but the
              foundation has set.
            </p>
            <p>Now we can begin building on top of it. This blog is about what is next.</p>
          </div>
        </Section>

        {/* The anchor — the kind of traveller */}
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
            <Eyebrow>The anchor</Eyebrow>
            <H2 className="mt-3 mb-5">A farm experience, at an affordable price.</H2>
            <div className="prose-kanaan max-w-prose">
              <p>
                When I was travelling, the kind of place I always looked for
                was the one that did not exist often enough. Somewhere
                genuine, well-located, with comfortable beds and good
                coffee, that did not cost the budget of a five-star resort.
                That is the traveller we built Kanaan for, and that is who
                we will keep building it for. Affordable. Honest.
                Beautifully placed. A working farm with rooms on it.
              </p>
              <p>
                Every decision we make is anchored to that — <em>would the
                version of me who slept in hostels across thirty countries
                want to stay here?</em> If yes, we are on the right track.
              </p>
            </div>
          </div>
        </section>

        {/* Weddings */}
        <Section>
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div className="prose-kanaan max-w-prose">
              <Eyebrow>Weddings</Eyebrow>
              <H2 className="mt-3 mb-5">
                A beautiful venue, at a price couples can actually afford.
              </H2>
              <p>
                We did not buy Kanaan as a wedding venue, but the land told
                us something the moment we walked it. It is a beautiful
                place for two people to commit to each other. There is
                space, there are mango trees, there is sky.
              </p>
              <p>
                So weddings have become a quiet, deliberate side focus. Not
                a luxury wedding venue — there are plenty of those in the
                Lowveld already. A <em>beautiful</em> wedding venue, at a
                price that lets the kind of couple who once thought they
                had to settle for a function hall actually marry on a
                farm, with their people, under the stars. That is the
                brief. It is one we are still learning how to deliver
                well.
              </p>
              <p>
                <Link
                  href="/weddings"
                  className="font-medium text-ochre hover:text-ochre-deep"
                >
                  See the venue →
                </Link>
              </p>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src={img.groups.src}
                alt={img.groups.alt}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Meals */}
        <section className="bg-sand">
          <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
            <Eyebrow>Meals</Eyebrow>
            <H2 className="mt-3 mb-5">On request, made well.</H2>
            <div className="prose-kanaan max-w-prose">
              <p>
                One of the simplest gaps in the original Kanaan was food.
                There was nowhere to eat dinner on the property. Guests
                arrived after a long drive, settled in, and then had to go
                out again to find something to eat.
              </p>
              <p>
                We are fixing that. On-request breakfast and dinner,
                starting simple. A continental breakfast in the morning, a
                properly cooked dinner of local Lowveld dishes and a real
                braai in the evening. Nothing fancy. Just good food, made
                for the table you are already at.
              </p>
            </div>
          </div>
        </section>

        {/* The wooden-house backpackers */}
        <Section>
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div className="md:order-2 prose-kanaan max-w-prose">
              <Eyebrow>The wooden house</Eyebrow>
              <H2 className="mt-3 mb-5">A backpackers where there was never one.</H2>
              <p>
                When we bought Kanaan, there was no backpacker
                accommodation. There is now. We have been slowly renovating
                a beautiful wooden house on the property to open as a small
                dorm — {site.capacity.backpackersBeds} beds, a shared
                kitchen, the kind of place I would have stayed myself a
                decade ago.
              </p>
              <p>
                It is not finished yet, but it is close. And it is already
                drawing a new kind of traveller to the farm — international
                budget travellers, often on long trips through southern
                Africa, who do not want to spend three hundred dollars a
                night to be near Kruger. They are exactly the people we
                had in mind from the beginning.
              </p>
            </div>
            <div className="md:order-1 relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src={img.lodgeBougainvillea.src}
                alt={img.lodgeBougainvillea.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Packages */}
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
            <Eyebrow>Live now</Eyebrow>
            <H2 className="mt-3 mb-5">Multi-day packages — arrive once, see everything.</H2>
            <div className="prose-kanaan max-w-prose">
              <p>
                The other thing those travellers have shown us is what they
                actually want. Not just a bed. A <em>trip</em>. A few days
                of Kruger, the waterfalls of Sabie, the viewpoints on the
                Panorama Route, all sorted from a base they trust.
              </p>
              <p>
                So we put together multi-day packages — two, three or five
                days at Kanaan, with a full-day Kruger safari included, and
                optional add-ons for the Panorama Route, an evening at
                Shangana cultural village, and airport transfers from KMIA.
                You arrive, you unpack once, and we handle the logistics of
                seeing the Lowveld properly.
              </p>
              <p>
                <Link
                  href="/packages"
                  className="font-medium text-ochre hover:text-ochre-deep"
                >
                  Build your package →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* The longer view — trails */}
        <Section>
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div className="prose-kanaan max-w-prose">
              <Eyebrow>The two-year horizon</Eyebrow>
              <H2 className="mt-3 mb-5">Trails, cycling, and the wider farm.</H2>
              <p>
                There is more land here than the lodge itself. Kanaan sits
                on agricultural ground that runs out into bushveld, and we
                have always known we wanted to do something with it.
              </p>
              <p>
                The first move is planting. We are slowly bringing the
                agricultural land back into use — partly for the beauty of
                it, partly because a small farming income is the most
                sustainable way to fund the upkeep of the land around the
                lodge. A farm that pays for its own gardens stays beautiful
                for longer.
              </p>
              <p>
                The second move is trails. We are mountain bikers
                ourselves. There are hiking and cycling routes on Kanaan
                already — they have been on pause while we focused on the
                renovation — and we want to get them open again. The
                dream, longer term, is a cycling network that links Kanaan
                to neighbouring farms, so you can ride proper distances
                through the Lowveld without ever touching a main road.
              </p>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src={img.macGrove.src}
                alt={img.macGrove.alt}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* The longest view — eco camping */}
        <section className="bg-forest text-bone">
          <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
            <Eyebrow>
              <span className="text-bone/70">The longer view</span>
            </Eyebrow>
            <H2 className="mt-3 text-bone">A real African camping experience.</H2>
            <div className="prose-kanaan mt-6 max-w-prose">
              <p className="text-bone/90">
                Not the camping ground we already have under the mango
                trees — that one stays. We are talking about something
                further out on the property. A handful of low-impact,
                beautifully placed sites where you can have a proper African
                camping experience.
              </p>
              <p className="text-bone/90">
                Eco-lodges, eventually. Small, deliberate, sustainable. The
                kind of place that does not feel built so much as found.
                That is the two-to-three-year horizon. Not all at once.
                Piece by piece. The way we have done everything here.
              </p>
            </div>
          </div>
        </section>

        {/* Closing + sign-off */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              We are not finished. We never quite will be — and that, more
              than anything, is the point.
            </p>
            <p>
              If you have stayed with us already, you know how much has
              changed in a year. If you have not yet, please come and see.
              The Kanaan we have today is already worth the drive. The
              Kanaan we are building will be even more.
            </p>
            <p className="mt-8 font-display text-lg italic text-forest-deep">
              — Anneli &amp; Matthew
            </p>
          </div>
        </Section>

        {/* CTA */}
        <section className="bg-sand">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
            <Eyebrow>Be part of the journey</Eyebrow>
            <H2 className="mt-3">Come and stay while we build.</H2>
            <Lede>
              Every guest who arrives now is part of the story we will tell
              in three years&rsquo; time. We would love to have you here.
            </Lede>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={whatsappLink("ourStory")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-bone hover:bg-forest-deep"
              >
                Say hello on WhatsApp
              </Link>
              <Link
                href="/stay"
                className="inline-flex items-center rounded-full border border-forest/30 px-6 py-3 text-sm font-medium text-forest hover:bg-forest/10"
              >
                Find your room
              </Link>
            </div>
          </div>
        </section>

        {/* Related posts */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/the-discovery"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Chapter 1 · The Discovery
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  How we found Kanaan
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  A vineyard in Argentina that did not work out, a birthday
                  at the waterfall, and the old man who caught us snooping.
                </p>
              </Link>
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
                  An invitation to a warm family holiday — Kruger, Sabie,
                  Graskop and the wonders of the Lowveld.
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
