import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { WhatsAppCTA, BlogHero } from "@/components/blog/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { img, wedding } from "@/lib/images";
import { articleLd } from "@/lib/jsonld";
import { createBlogPostMetadata } from "@/lib/blog";
import { whatsappLink } from "@/lib/site";

const datePublished = "2026-07-07";
const headline =
  "Under the mango trees: the forty-year-old grove that made Kanaan Guest Farm";

export const metadata = createBlogPostMetadata({
  slug: "under-the-mango-trees",
  title: "Under the mango trees",
  description:
    "The origin story of Kanaan Guest Farm, told through the forty-year-old mango grove that shades it — who planted it, the seasons of the fruit, the campfires and weddings beneath its branches, and how Anneli and Matthew came to be its keepers.",
  image: img.underMangoTreesHero,
  datePublished,
  category: "guide",
});

export default function MangoTreesPostPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "Anneli on the mango grove at the heart of Kanaan Guest Farm in Hazyview — planted forty years ago by someone who knew they would never sit in its shade. The story of the grove that made the farm: who planted it, the year in the mango, the campfires and the wedding held beneath the trees, and how Anneli and Matthew came to be its keepers.",
          path: "/blog/under-the-mango-trees",
          image: img.underMangoTreesHero.src,
          datePublished,
        })}
      />

      <article>
        <BlogHero
          image={img.underMangoTreesHero.src}
          alt={img.underMangoTreesHero.alt}
          eyebrow="Guide · The Farm's Story"
          title="Under the mango trees."
          intro="Someone pushed these saplings into the ground forty years ago, knowing they would never sit in the shade. This is the story of the grove that made the farm — and how we came to be the ones keeping it."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={7}
        />

        {/* The hook */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              A mango tree is in no hurry. Push a young one into the ground and
              it will make you wait years before it fruits properly, and the
              better part of a decade before it throws the kind of shade you can
              live under. A whole grove of them, planted in straight rows, is
              not a garden. It is a bet — a long, patient bet on a future the
              person planting it may not be around to see.
            </p>
            <p>
              Someone made that bet on this farm about forty years ago. I do not
              know exactly who first turned this red Lowveld soil, or what they
              were picturing when they did. But they planted a grove of mango
              trees knowing, the way anyone who plants a tree knows, that the
              real shade was for someone else. For people they would never meet.
            </p>
            <p>
              We are, it turns out, some of those people. When we took the keys
              to Kanaan in August 2025, we did not plant a single one of these
              trees. We arrived to a farm that a stranger had already spent
              forty years shading for us.
            </p>
          </div>
        </Section>

        {/* Featured B-roll — the slow walk through the grove */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-forest-deep">
            <Image
                src={img.underMangoTreesHero.src}
                alt={img.underMangoTreesHero.alt}
                fill
                sizes="(min-width: 768px) 900px, 100vw"
                className="object-cover"
              />
          </div>
          <p className="mt-3 text-center text-xs text-muted">
            The grove at golden hour — the oldest thing on the farm, and the
            reason there is a farm at all.
          </p>
        </div>

        {/* Pull quote — the most quotable line */}
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-5 py-12 lg:px-8">
            <p className="font-display text-2xl italic leading-relaxed text-forest-deep sm:text-3xl">
              &ldquo;You do not plant a mango grove for yourself. Forty years is
              longer than most of us dare to plan for anything — and someone
              planned it for people they would never meet.&rdquo;
            </p>
          </div>
        </section>

        {/* Who planted them */}
        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-5">Who planted them.</H2>
            <p>
              I have told the story of how we found Kanaan before — Matthew&rsquo;s
              birthday, the waterfall, the old man who caught us walking his land
              and asked, fairly enough, what we thought we were doing on it. What
              I did not dwell on in that telling was the thing that actually
              stopped me on the first walk through. It was not the buildings. The
              rooms were very old and very tired, the kind of run-down that sends
              most buyers home. Rooms, though, you can rebuild in a season.
            </p>
            <p>
              It was the grove. You cannot hurry a grove like this into being.
              Somebody had stood on this bare ground four decades ago and
              imagined shade where there was none — and then done the slow,
              unglamorous work of making it true, tree by tree, in rows straight
              enough that you can still walk down the avenue of them today and
              feel the intention in it.
            </p>
            <p>
              I do not know all of their names. The farm had a long life and
              passed through more than one pair of hands before it reached the
              old man we bought it from. But you can read a person in the trees
              they leave behind. Good spacing. Straight lines. Species chosen for
              the long haul, not the quick season. Whoever they were, they were
              planting for a farm they would not run and a shade they would not
              sit in. I think about that almost every day now.
            </p>
          </div>
        </Section>

        {/* Inline image — the avenue of mango trees */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.campingAvenue.src}
                alt={img.campingAvenue.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The avenue of forty-year-old mangoes at Kanaan — planted in
              straight, patient rows by someone who was thinking further ahead
              than we usually dare to.
            </figcaption>
          </figure>
        </div>

        {/* The year of the mango */}
        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div className="prose-kanaan max-w-prose">
                <Eyebrow>The year in the grove</Eyebrow>
                <H2 className="mt-3 mb-5">The mango keeps its own calendar.</H2>
                <p>
                  You learn to read the year by the trees. In the late winter,
                  when the mornings are still cold, the grove throws up panicles
                  of tiny cream-coloured flowers and the whole avenue hums with
                  bees. By spring the hard green fruit has set. And then, through
                  the high, hot heart of summer — from around December into
                  February — the branches hang heavy, the ground goes sticky with
                  windfalls, and everyone on the farm ends up eating mangoes over
                  the kitchen sink, because there is honestly no polite way to eat
                  one straight off the tree.
                </p>
                <p>
                  Then the season turns — but the grove never goes bare. A mango
                  is evergreen. It holds its leaves and its deep shade right
                  through the dry Lowveld winter, when the camping ground is
                  quiet, the frost sits on the open grass, and the trees keep
                  their patch of ground a few degrees kinder than the rest. It
                  gives all year. It just gives different things.
                </p>
              </div>
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
                <Image
                  src={img.pillows.src}
                  alt={img.pillows.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The fire, and the wedding beneath it */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-5">The fire, and the wedding beneath it.</H2>
            <p>
              What forty years of shade eventually gives you is a room with no
              walls. The grove is where Kanaan gathers. The fire gets lit under
              the trees most evenings, and campers who rolled in as strangers end
              up trading route notes around it and driving into Kruger together
              the next morning. Children run themselves tired between the trunks
              until the light goes. It is the most used, least built thing on the
              whole farm.
            </p>
            <p>
              And this year — this is still the part I find most extraordinary —
              a couple got married under these trees. White chairs in rows on the
              grass, the afternoon light coming down green through the leaves,
              two people saying their vows beneath branches that were older than
              their marriage by four full decades. Someone, once, planted shade
              on an empty piece of ground. Forty years later, two strangers to
              that person stood in it and promised each other a whole life. I do
              not think the planter could ever have pictured that particular
              afternoon. I like to think they would have been glad of it.
            </p>
          </div>
        </Section>

        {/* Inline images — the wedding under the canopy + the fire */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={wedding.ceremonyAlt.src}
                alt={wedding.ceremonyAlt.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              A wedding under the mango canopy at Kanaan — vows beneath branches
              four decades older than the marriage.
            </figcaption>
          </figure>
          <figure className="mt-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.campfire.src}
                alt={img.campfire.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The same grass, most other evenings — the fire pit ringed by the
              old grove, where strangers become the next morning&rsquo;s travel
              companions.
            </figcaption>
          </figure>
        </div>

        {/* Mid-page CTA */}
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center lg:px-8">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              Some stories read better from a chair in the shade
            </p>
            <p className="mt-4 font-display text-2xl text-forest-deep">
              Come and sit under the trees for a few nights.
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

        {/* How we became its keepers */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-5">How we became its keepers.</H2>
            <p>
              Here is the thing we have slowly come to believe about this place.
              We do not really own the mango grove. You cannot own a tree that
              was old before you arrived and will still be standing, we hope, long
              after you have gone. You can only look after it for a while. We are
              the current keepers of it — not the first, and not, if we do this
              right, the last.
            </p>
            <p>
              The rest of the farm has been ours to rebuild. The rooms, the gate,
              the water, the wooden house, the slow list of everything a tired
              property needs. But the grove was never a project. It was a gift we
              inherited on the day we signed, and the only rent it asks is that we
              keep it standing for whoever comes next. So we prune it. We water
              the young trees we have planted alongside the old ones, knowing
              full well we are planting those for someone else&rsquo;s shade now,
              the way it was once done for ours. We pitch tents beneath it, set
              wedding chairs under it, light the fire in it — and otherwise mostly
              let it get on with the thing it has always quietly done.
            </p>
          </div>
        </Section>

        {/* Inline image — tents under the grove, the grove doing its work */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.campingTents.src}
                alt={img.campingTents.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The grove doing what it was always for — shading whoever happens to
              be here now.
            </figcaption>
          </figure>
        </div>

        {/* Sign-off reflection */}
        <section className="bg-forest text-bone">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
            <Eyebrow>
              <span className="text-bone/70">Whenever you come</span>
            </Eyebrow>
            <H2 className="mt-3 text-bone">Take a chair into the shade.</H2>
            <div className="prose-kanaan mx-auto mt-6 text-left">
              <p className="text-bone/90">
                When you visit Kanaan, the room will be comfortable and the fire
                will be lit and Kruger will be forty-odd minutes down the road.
                All of that is true, and all of it matters. But the thing I most
                want you to do while you are here is simple, and it costs nothing
                at all.
              </p>
              <p className="text-bone/90">
                Carry a chair out into the grove in the late afternoon, when the
                light goes long and gold through the leaves. Sit down in the
                shade of trees that a stranger planted forty years ago for a
                stranger they would never meet — for you, as it turns out. That,
                more than anything Matthew and I could ever build here, is what
                the farm actually is.
              </p>
            </div>
            <p className="mt-8 font-display text-lg italic text-bone/85">
              — Anneli
            </p>
          </div>
        </section>

        <WhatsAppCTA
          title="Come sit in the shade someone planted for you."
          body="The grove has stood here for forty years, holding its shade for whoever arrives next. This year, that could be you. WhatsApp Anneli your dates and we'll find you a room — or a tent pitch under the mangoes — and keep a chair in the shade with your name on it."
          buttonLabel="WhatsApp Anneli your dates"
          pageKey="stay"
        />

        {/* Related */}
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
                  A vineyard in Argentina, a birthday at the waterfall and an old
                  man catching us snooping — the day the whole story began.
                </p>
              </Link>
              <Link
                href="/blog/the-celebration"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Chapter 5 · The Celebration
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  A wedding weekend under the trees
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  What it is like to marry beneath the mango grove — a relaxed,
                  multi-day wedding weekend in the beautiful Lowveld.
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
