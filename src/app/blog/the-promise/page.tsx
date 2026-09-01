import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { img } from "@/lib/images";
import { articleLd } from "@/lib/jsonld";
import { createBlogPostMetadata } from "@/lib/blog";
import { site, whatsappLink } from "@/lib/site";

const datePublished = "2026-05-31";
const headline = "The promise we made ourselves at Kanaan Guest Farm";

export const metadata = createBlogPostMetadata({
  slug: "the-promise",
  title: "The promise we made ourselves",
  description:
    "New owners at Kanaan Guest Farm in Hazyview. We read every old review, listened, and started the long, careful work of putting Kanaan back together — one room, one tap, one gate at a time.",
  image: img.lodgeBathroom,
  datePublished,
  category: "story",
  chapterNumber: 2,
  chapterName: "The Promise",
});

export default function PromisePostPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "The day we took the keys at Kanaan Guest Farm in Hazyview, what the old reviews told us, what we changed first, what is still in progress, and the promise we made ourselves to listen to every guest who walks through the gate.",
          path: "/blog/the-promise",
          image: img.lodgeBathroom.src,
          datePublished,
        })}
      />

      <article>
        {/* Hero */}
        <header className="bg-sand">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
            <Eyebrow>Chapter 2 · The Promise · Journal</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-tight text-forest-deep sm:text-5xl">
              The promise we made ourselves.
            </h1>
            <Lede>
              We took the keys in August 2025. We read every review the farm
              had ever received — the kind ones and the hard ones — and then
              we got to work. Slowly. Carefully. Room by room.
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

        {/* Lead image — a freshly renovated bathroom, the most visible
            symbol of the promise being kept */}
        <div className="mx-auto max-w-5xl px-5 pt-12 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={img.lodgeBathroom.src}
              alt="A renovated en-suite bathroom at Kanaan Guest Farm in Hazyview — concrete-finish walls, walk-in glass shower, a vessel basin on a concrete vanity. The most visible symbol of the promise we made ourselves."
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* The day we took the keys */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-5">The day we took the keys.</H2>
            <p>
              We took ownership of Kanaan in August 2025. The previous owner
              was an older man who had loved the place for a long time and,
              honestly, had not quite been able to keep up with it for the
              last few years of his time here. The bones of the farm were
              still there — the forty-year-old mango grove, the river, the
              wide bushveld running out toward the Kruger gates — but the
              little things had drifted. Taps that did not run clean. WiFi
              that did not reach the rooms. A property without a working
              gate. Rooms that had not been refreshed in a long time.
            </p>
            <p>
              You feel it the moment you walk through a place like that.
              Nothing is broken, exactly. The farm is still beautiful. But
              there is a quiet sense that no one has been listening for a
              while. That was the Kanaan we inherited.
            </p>
            <p>
              The first decision we made — before we ever picked up a tool,
              before we wrote a single new sign — was to listen first and
              act second.
            </p>
          </div>
        </Section>

        {/* What the reviews told us */}
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
            <Eyebrow>What the reviews told us</Eyebrow>
            <H2 className="mt-3 mb-5">We read every single one.</H2>
            <div className="prose-kanaan max-w-prose">
              <p>
                Before we changed anything, we sat down and read every review
                Kanaan had ever received. The five-star ones. The two-star
                ones. The ones that were patient and the ones that were
                clearly written from frustration on a long drive home.
              </p>
              <p>
                We did not read them as attacks. We did not read them as a
                judgement of the farm we now owned. We read them as a
                roadmap. People who had spent time at Kanaan were telling us,
                in their own words, exactly what needed our attention — and
                most of them were telling us about the same things. There is
                a quiet generosity in that, when you sit with it long enough.
              </p>
              <p>
                Most of what we read was about small things. Taps and
                signal and breakfast and gates. The big things — the
                location, the mango grove, the warmth of the place — almost
                everyone agreed on. Our work was clear. The bones were
                already loved. We just needed to look after the rest.
              </p>
            </div>
          </div>
        </section>

        {/* What we changed first */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-5">What we changed first.</H2>
            <p>
              We did not try to fix everything at once. We made a list, in
              the order the guests had told us mattered most, and we worked
              through it.
            </p>
            <p>
              <strong className="font-medium text-forest-deep">The water.</strong>{" "}
              Our borehole water in this part of the Lowveld is mineral-rich,
              and over time the mineral content collects in the showerheads
              and the taps until the flow runs salty or the spray jams. The
              previous management had let it build up. We put a regular
              cleaning schedule in place for every tap and every showerhead
              on the property. A guest should never have to think about
              this; we keep on top of it so that they do not have to.
            </p>
            <p>
              <strong className="font-medium text-forest-deep">The WiFi.</strong>{" "}
              For a property that hosts overlanders, remote workers and
              international travellers, a network that drops at the lodge
              door is not really a network. We rebuilt it. Free WiFi now
              reaches every room and across the camping ground. It is one of
              the first things people thank us for, and we are quietly very
              pleased about that.
            </p>
            <p>
              <strong className="font-medium text-forest-deep">The gate.</strong>{" "}
              When we arrived, there was no real gate. You could turn off
              the R40 and drive straight up to the lodge. Not many guests
              loved that. We installed a proper motorised gate, secured the
              perimeter, and put up clear signage so guests know where to
              call when they arrive. The whole property now feels like
              somewhere you can leave your bags in a parked car.
            </p>
            <p>
              <strong className="font-medium text-forest-deep">Breakfast.</strong>{" "}
              There used to be no breakfast on offer at all — guests arrived
              hungry in the morning with nowhere on the property to eat. We
              now have a proper continental breakfast on request from R
              {site.meals.breakfast.pricePerPersonZAR} per person — let us
              know the day before and it is ready for you. The same goes
              for dinner: a traditional South African braai and local
              Lowveld dishes whenever you would like them.
            </p>
            <p>
              <strong className="font-medium text-forest-deep">The rooms.</strong>{" "}
              The lodge units had not been touched in a long time. We are
              refurbishing them one at a time — wooden ceilings exposed,
              concrete-finish bathrooms, real linen, a quiet space to come
              back to after a day in Kruger. The first units are done and
              they look the way we always wanted them to.
            </p>
          </div>

          {/* Lodge renovation walk-through — the work as it actually was */}
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-sand">
            </div>
            <p className="mt-3 text-center text-xs text-muted">
              A walk past one of the lodge units mid-renovation, in the
              first weeks after we took the keys.
            </p>
          </div>
        </Section>

        {/* Mid-page CTA — softly */}
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center lg:px-8">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              If you have stayed before
            </p>
            <p className="mt-4 font-display text-2xl text-forest-deep">
              And there is something we should know — please tell us.
            </p>
            <div className="mt-7">
              <Link
                href={whatsappLink("ourStory")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
              >
                Tell us on WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* What we learned about ourselves */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-5">What we learned about ourselves.</H2>
            <p>
              We had not run a guest farm before. We had read the
              hospitality books and we had stayed in enough places ourselves
              to have opinions on every one of them. But you do not really
              know what it means to run a place like Kanaan until you are
              the person a guest tells about the broken kettle at half-past
              ten at night.
            </p>
            <p>
              What we have learned, more than anything, is that running a
              guest farm well is mostly about paying attention. It is the
              walked-around-the-property-every-morning attention. It is
              noticing the loose plug, the tap that ran a little salty, the
              guest who looks like they have not eaten since lunchtime. The
              farm itself is generous; it just needs us to keep paying
              attention to it.
            </p>
            <p>
              We have also learned that vulnerability does not cost
              anything. When something is not perfect, the honest thing is
              to say so. People are kinder than the internet makes them seem,
              and a place that admits its work is in progress is a place
              that people want to root for.
            </p>
          </div>
        </Section>

        {/* What is still in progress */}
        <section className="bg-sand">
          <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
            <Eyebrow>Still in progress</Eyebrow>
            <H2 className="mt-3 mb-5">We are not finished yet.</H2>
            <div className="prose-kanaan max-w-prose">
              <p>
                We are not. The renovations are working their way through the
                lodge units one at a time, in the order the bookings allow.
                The gardens are being replanted. New paths are being cleared.
                The pool is the next big project after the rooms. The
                wedding lawn is being levelled and tended. The wooden house
                that will become our backpackers is nearly there, and that
                is the next piece we cannot wait to open.
              </p>
              <p>
                If you come to stay this season, you will see some of this.
                A bit of paint drying. A patch of garden that is freshly
                planted rather than fully grown in. You might pass a wheel-
                barrow on its way somewhere on the property. That is what
                a farm being loved back into shape looks like, and we have
                decided not to hide it. If anything, we are quietly proud of
                it.
              </p>
              <p>
                <Link
                  href="/blog/the-future"
                  className="font-medium text-ochre hover:text-ochre-deep"
                >
                  Read what we are building next at Kanaan →
                </Link>
              </p>
            </div>

            {/* Pool tour — honest documentation of the pool area as it is */}
            <div className="mt-10">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-bone">
              </div>
              <p className="mt-3 text-center text-xs text-muted">
                The pool area — the next big project on the list after the
                lodge rooms.
              </p>
            </div>
          </div>
        </section>

        {/* The promise we keep */}
        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-5">The promise we keep.</H2>
            <p>
              Kanaan is not just a place to stay. It is a place that
              listens. Every guest matters here. Every review — kind, hard,
              quiet, generous — teaches us something we did not quite know
              the day before. We made that promise to ourselves before we
              ever printed a new sign, and it is the promise we keep.
            </p>
            <p>
              The Kanaan you arrive at today is a place that has been loved
              back into shape, and that is still being loved back into
              shape. Every guest who comes now is part of an honest chapter,
              not an apology for an old one. We would love you to come and
              see for yourself.
            </p>
          </div>
        </Section>

        {/* Sign-off */}
        <section className="bg-forest text-bone">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
            <Eyebrow>
              <span className="text-bone/70">Come and see</span>
            </Eyebrow>
            <H2 className="mt-3 text-bone">There is a room here with your name on it.</H2>
            <p className="mt-6 text-bone/85">
              Whether you have heard about Kanaan from a friend, or read the
              older reviews, or just stumbled across us looking for a place
              near Kruger — we would love to host you. The work is
              continuing. Come and be part of it.
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
                Enquire on WhatsApp
              </Link>
              <Link
                href="/our-story"
                className="inline-flex items-center rounded-full border border-bone/40 px-6 py-3 text-sm font-medium text-bone hover:bg-bone/10"
              >
                Read the full story →
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
                  Multi-day Kruger packages, the wooden-house backpackers,
                  trails and a long view of the wider farm.
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
