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
const headline = "How we found Kanaan: a waterfall, an old man, and a farm that found us back";

export const metadata: Metadata = {
  title: `How we found Kanaan · Anneli's story · Journal`,
  description:
    "The story of how Anneli and Matthew found Kanaan Guest Farm — a birthday at the waterfall, an old man catching them snooping, and a tired farm in Hazyview that turned out to be exactly what they were looking for.",
  alternates: { canonical: "/blog/the-discovery" },
  openGraph: {
    title: `How we found Kanaan · Kanaan Guest Farm`,
    description:
      "Anneli on travelling the world, almost buying a vineyard in Argentina, and the day Matthew took her to a waterfall on a farm that quietly turned out to be for sale.",
    images: [{ url: img.waterfall.src, alt: img.waterfall.alt }],
    type: "article",
    publishedTime: datePublished,
    authors: [...site.hosts],
  },
};

export default function DiscoveryPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleLd({
              headline,
              description:
                "Anneli's first-person account of how she and Matthew found Kanaan — the Argentine vineyard that did not work out, the birthday at the waterfall, the old man, and the offer that started everything.",
              path: "/blog/the-discovery",
              image: img.waterfall.src,
              datePublished,
            }),
          ),
        }}
      />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/blog" },
          { label: "The Discovery", href: "/blog/the-discovery" },
        ]}
      />

      <article>
        {/* Hero */}
        <header className="bg-sand">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
            <Eyebrow>Chapter 1 · The Discovery · Journal</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-tight text-forest-deep sm:text-5xl">
              How we found Kanaan.
            </h1>
            <Lede>
              A vineyard in Argentina that did not work out. A birthday at the
              waterfall. An old man catching us snooping on land that turned
              out to be his. This is how it really happened.
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

        {/* Lead image — the waterfall on Kanaan, where Matthew took Anneli
            on his birthday. The literal first image of the story. */}
        <div className="mx-auto max-w-5xl px-5 pt-12 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={img.waterfall.src}
              alt="The waterfall on Kanaan — the place Matthew took Anneli on his birthday, the afternoon the whole story began."
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Body — Part 1: the traveller */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              For most of my adult life I was a traveller. More than thirty
              countries, give or take, before any of this began. I had been on
              the road, on and off, for years — and I had reached the point
              every traveller eventually reaches, where you start to feel
              that it might be time to come to rest somewhere. Not stop
              moving entirely. Just to have a place to come back to.
            </p>
            <p>
              I spent close to a year in Argentina. I loved it there. I was
              looking, quite seriously, at buying a small vineyard — somewhere
              I could put down roots and pour myself into a long, slow
              project. I have always loved projects. The two other homes I
              have owned were both run-down places that I rebuilt, room by
              room. There is something about the transformation of a place
              that fits me. You walk in, you see what it could be, and then
              you spend years quietly making it true.
            </p>
            <p>
              The vineyard did not work out. Things rarely do when you push
              them too hard. I came back to South Africa to be near my
              family, with the project still rattling around in my head and
              no idea yet where it would land. And around the same time —
              quietly, without much announcement — I met Matthew.
            </p>
          </div>
        </Section>

        {/* Pull quote — the moment */}
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-5 py-12 lg:px-8">
            <p className="font-display text-2xl italic leading-relaxed text-forest-deep sm:text-3xl">
              &ldquo;Then he said, almost casually: my boss mentioned this
              farm — the one we&rsquo;re sitting on — is for sale.&rdquo;
            </p>
          </div>
        </section>

        {/* Body — Part 2: the birthday */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              I knew Hazyview, of course. Most South Africans do. It sits at
              the edge of the Lowveld, where the highveld escarpment falls
              away into bushveld and the Kruger National Park begins. It is a
              beautiful corner of the country. But I had never thought of
              living there. I had a hometown. I had family. Hazyview was a
              place you went on holiday, not a place you moved to.
            </p>
            <p>
              Then it was Matthew&rsquo;s birthday.
            </p>
            <p>
              He took me to a waterfall on a farm he knew the owner of — the
              kind of detour you make when you are still in the early,
              generous days of a relationship. We brought drinks. We sat at
              the edge of the water for sundown. The afternoon ran long. And
              somewhere in the middle of it, I started telling him what I had
              been telling everyone that year — that I was looking for a
              project, that I wanted to settle, that I knew the shape of what
              I wanted but not yet the place.
            </p>
            <p>
              He listened the way he always does. Then he said, almost
              casually: <em>my boss mentioned this farm — the one we&rsquo;re
              sitting on — is for sale.</em>
            </p>
          </div>
        </Section>

        {/* Inline image — the land */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={img.mtb.src}
              alt={img.mtb.alt}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Body — Part 3: walking the land */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              The next day, we drove in.
            </p>
            <p>
              There was no gate then. You could just turn off the R40 and
              roll quietly up the track, past the mango trees, all the way to
              the lodge. We were not exactly invited. We were not exactly
              trespassing either — there was nothing to keep us out. So we
              walked the property. I could see the work. The rooms inside
              were very, very old, the kind of run-down that intimidates most
              buyers. But I could also see a project. A real one.
            </p>
            <p>
              The bones were good. The land was extraordinary. The mango
              grove must have been forty years old. There was a river running
              cold through the property, even in the summer heat. There was
              space — proper, breathing space — and the bushveld stretched
              all the way to the horizon. From the road, you would never
              have looked twice. From inside the gate, it was something
              else entirely.
            </p>
            <p>
              As we were driving back out — past the same gate-less entrance
              we had come in through — the old man caught us.
            </p>
            <p>
              He was the owner. He came over and asked, fairly enough, what
              we were doing on his farm. We were caught off guard. We said we
              were tourists, just in the area, just curious. It was not
              entirely a lie. We were curious. We just were not exactly
              tourists.
            </p>
            <p>
              The day after that, we went back. This time we knocked. We told
              him we wanted to make an offer.
            </p>
            <p>
              He took us through the property properly, room by room. I
              confirmed everything I had seen the first time — plenty of
              work, everything needing attention, but underneath it all a
              place that had been loved once and could be loved again. We
              made an offer that was significantly below market value. We
              were taking a chance. He thought about it. He accepted.
            </p>
            <p>
              The rest, as they say, is history. We bought Kanaan in August
              2025.
            </p>
          </div>
        </Section>

        {/* Body — Part 4: the deeper why */}
        <section className="bg-sand">
          <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
            <Eyebrow>The deeper why</Eyebrow>
            <H2 className="mt-3 mb-5">Why Hazyview.</H2>
            <div className="prose-kanaan max-w-prose">
              <p>
                That is the short version of how we found it. The longer
                version — the one I think about more — is why.
              </p>
              <p>
                Hazyview is extraordinarily well positioned. You are{" "}
                {site.distances.kmiaMinutes} minutes from Kruger Mpumalanga
                International Airport. You are {site.distances.krugerGateMinutesMin}{" "}
                to {site.distances.krugerGateMinutesMax} minutes from the
                gates of the world-famous Kruger National Park. Sabie&rsquo;s
                waterfalls are a short scenic drive away. The Panorama Route —
                God&rsquo;s Window, Bourke&rsquo;s Luck Potholes, the Three
                Rondavels — is just over the escarpment. You can spend a week
                in the Lowveld and barely see the same landscape twice.
              </p>
              <p>
                But the deeper reason was something I had not quite known I
                was looking for. My hometown is wonderful, and my family is
                there, and I love it for what it is — but there was a part
                of me that always felt a little trapped by it. Hazyview felt
                the opposite. It felt open. Close to airports, close to
                Mozambique, close enough to home and far enough away to start
                something. Everything feels more accessible from here.
              </p>
              <p>
                And the property itself fit a project I had been carrying
                around for years. A guest farm. Not a hotel. Not a boutique.
                A working farm with rooms on it — a place where someone like
                the traveller I used to be could land for a few nights
                without breaking the budget, drink a cold drink under the
                mango trees, and feel like they had arrived at someone&rsquo;s
                home.
              </p>
              <p>That has been the brief, from day one.</p>
            </div>
          </div>
        </section>

        {/* Inline CTA — midway */}
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center lg:px-8">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              Come and see what we mean
            </p>
            <p className="mt-4 font-display text-2xl text-forest-deep">
              The story makes more sense once you have stood on the land.
            </p>
            <div className="mt-7">
              <Link
                href={whatsappLink("ourStory")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
              >
                Say hello on WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* Body — Part 5: a year later */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              The renovation has cost more than we thought. It always does.
              There is always more to do than you realise at the start. Walls
              that come apart when you touch them. Pipes nobody knew existed.
              Trees that need attention you only notice in the second season.
              We are nearly a year in, and we are still going.
            </p>
            <p>
              But it has been an extraordinary year. The mango grove has been
              hosting campers under its branches all summer. The lodge units
              are starting to look the way I always saw them. Travellers are
              finding us — quietly at first, then more — and many of them
              are exactly the kind of person I was hoping would come. People
              who travel because they want to see a place properly, not
              because they want it served to them through glass.
            </p>
            <p>
              It turns out the farm was not really for sale, and we were not
              really tourists. We found each other anyway.
            </p>
          </div>
        </Section>

        {/* Hosts portrait + sign-off */}
        <section className="bg-forest text-bone">
          <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
                <Image
                  src={img.hosts.src}
                  alt={img.hosts.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <Eyebrow>
                  <span className="text-bone/70">A welcome from the farm</span>
                </Eyebrow>
                <H2 className="mt-3 text-bone">Come and find us.</H2>
                <p className="mt-5 text-bone/90 leading-relaxed">
                  If any of this sounds like the kind of place you would like
                  to spend a few nights, we would love to hear from you.
                  Whether you are coming for Kruger, for a quiet escape, for
                  a wedding, or simply because the Lowveld has been on your
                  list for a long time — there is a room here, or a tent
                  pitch under the mangos, with your name on it.
                </p>
                <p className="mt-5 font-display text-lg italic text-bone/85">
                  — Anneli &amp; Matthew
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={whatsappLink("ourStory")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
                  >
                    Say hello on WhatsApp
                  </Link>
                  <Link
                    href="/blog/the-future"
                    className="inline-flex items-center rounded-full border border-bone/40 px-6 py-3 text-sm font-medium text-bone hover:bg-bone/10"
                  >
                    Read what we are building next →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related posts */}
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
                  An invitation to a warm family holiday — Kruger, Sabie,
                  Graskop and the wonders of the Lowveld.
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
                  A year in, here is what is coming next at Kanaan — packages,
                  the wooden-house backpackers, weddings, trails and a slow
                  vision for the wider farm.
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
