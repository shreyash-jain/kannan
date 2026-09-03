import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { img } from "@/lib/images";
import { articleLd, faqLd } from "@/lib/jsonld";
import { createBlogPostMetadata } from "@/lib/blog";
import { site } from "@/lib/site";
import {
  TLDR,
  Callout,
  StatGrid,
  NumberedList,
  ClosingBlock,
  WhatsAppCTA,
  BlogHero,
  Sources,
} from "@/components/blog/Blocks";

const datePublished = "2026-07-27";
const headline =
  "The ultimate Kruger National Park travel guide — the Big 5, safari tips, and where to stay near Hazyview";

const faqs = [
  {
    q: "How many days should you spend in Kruger National Park?",
    a: "Three to four days is the sweet spot — enough to explore more than one region of the park and to give yourself a real chance at all of the Big Five. Two days works as a taster near a single gate. Five or more is for wildlife enthusiasts who want to move between Kruger's different ecosystems, from riverine bush to open savanna. Sightings compound: the more mornings you spend on the roads, the better the trip gets.",
  },
  {
    q: "Is it better to self-drive Kruger or take a guided safari?",
    a: "For most travellers on a multi-day trip, self-drive wins. The tar and gravel roads are well maintained, an ordinary car copes fine — you do not need a 4x4 — and you set your own pace, tied to nobody's schedule. A guided drive earns its keep on a first safari, when you want someone to teach you how to read the bush, or when you are short on time. For a week-long trip the honest answer is both: one guided morning early, then self-drive the rest with your eye in.",
  },
  {
    q: "What are Kruger's own sunrise and sunset drives, and how do you book them?",
    a: "The park runs its own open-vehicle sunrise drives, sunset drives, night drives and guided morning walks from various rest camps and gates. They are operated by the park rather than a private company, which is why they are considerably cheaper — roughly R450 to R900 per person. The catch is that they generally cannot be booked online in advance: you book in person at a Kruger gate or camp reception, usually closer to the date. Treat them as a flexible add-on rather than something you lock in weeks ahead.",
  },
  {
    q: "Where should you stay for a Kruger safari — inside the park or outside?",
    a: `Rest camps inside the park book out months ahead, cost more, and lock you into one region. Basing just outside in Hazyview gives you access to more than one gate, the Panorama Route on non-safari days, and a far kinder nightly rate. Kanaan Guest Farm is ${site.distances.krugerGateMinutesMin} to ${site.distances.krugerGateMinutesMax} minutes from the Phabeni gate, with self-catering units, guest rooms, backpacker beds and camping from R${site.pricing.fromZAR} per person sharing.`,
  },
];

export const metadata = createBlogPostMetadata({
  slug: "ultimate-kruger-national-park-travel-guide",
  title:
    "The ultimate Kruger National Park travel guide: Big 5, safari tips & where to stay",
  description:
    "A complete Kruger National Park travel guide — what to expect from a Big 5 safari, how many days to spend, self-drive vs guided safari, Kruger's own sunrise and sunset drives (and why you have to book them at the gate), what to pack, and where to stay near Hazyview from R250 per person sharing.",
  image: img.krugerGuideHero,
  datePublished,
  category: "guide",
});

export default function UltimateKrugerTravelGuidePage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "The complete Kruger National Park travel guide from a guest farm 30 to 45 minutes from the Phabeni gate — what to expect on a Big 5 safari, how many days to spend in Kruger, self-drive versus guided safari, the park's own open-vehicle sunrise, sunset and night drives and morning walks (bookable only in person at a gate or camp), a Kruger packing list, and where to stay near Kruger in Hazyview.",
          path: "/blog/ultimate-kruger-national-park-travel-guide",
          image: img.krugerGuideHero.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.krugerGuideHero.src}
          alt={img.krugerGuideHero.alt}
          eyebrow="Guide · Kruger National Park"
          title="The ultimate Kruger National Park travel guide."
          intro="Nearly two million hectares of bushveld, the Big Five, and hundreds of other species. But a great Kruger trip takes planning: how long to stay, how to get around, and where to base yourself between the drives."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={7}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "Three to four days is the sweet spot; two is a taster, five-plus is for the wildlife obsessed.",
                "Self-drive is the most rewarding way to see the park — the roads are good and an ordinary car copes fine.",
                "The insider tip: Kruger runs its own sunrise, sunset and night drives from around R450 — bookable only in person at a gate.",
                "The first two or three hours after the gates open are the best game viewing of the day. Everything else is detail.",
                "Hazyview puts you 30–45 minutes from the Phabeni gate, with the Panorama Route on your rest days and beds from R250.",
              ]}
            />

            <p>
              Almost everyone who comes to us is coming, in the end, for Kruger.
              And almost everyone arrives with the same three questions: how long
              do we need, how do we get around in there, and where do we sleep?
              This is the whole answer, written from thirty-odd minutes down the
              road from the gate.
            </p>
            <p>
              For the gate-by-gate detail — Phabeni versus Numbi versus Paul Kruger
              — see our{" "}
              <Link
                href="/blog/kruger-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                first-timer&rsquo;s guide to Kruger from Hazyview
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What to expect from Kruger National Park.</H2>
            <p>
              All of the Big Five live here — lion, leopard, elephant, rhino and
              buffalo — alongside giraffe, hippo, cheetah, wild dog and several
              hundred bird species. Viewing varies by region, by season and, most
              of all, by time of day. What no honest guide will promise is a
              sighting. Nothing is guaranteed on a single drive, which is exactly
              why a multi-day visit beats one quick pass through the park by such a
              distance.
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.krugerBigFiveLion.src}
                alt={img.krugerBigFiveLion.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The reason everybody comes. Early light in southern Kruger, half an
              hour from the farm gate.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">How many days should you spend in Kruger?</H2>
            <p>
              The question we are asked most often, and the honest answer is: more
              than you have currently booked.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "2 days — the taster",
                body: "One or two drives near a single gate. Enough to understand the fuss, and you will leave wanting more.",
              },
              {
                title: "3 to 4 days — the sweet spot",
                body: "More than one region, a slow day and a big day, and real odds on all five of the Big Five.",
              },
              {
                title: "5+ days — the enthusiast's trip",
                body: "Riverine bush to open savanna. This is when leopard stops being luck and starts being likely.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              Still choosing dates? Our{" "}
              <Link
                href="/blog/when-to-visit-kruger-hazyview-month-by-month"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                month-by-month almanac
              </Link>{" "}
              covers the weather, the wildlife and the crowds — and how to find the
              good month that isn&rsquo;t one of the two crowded peaks.
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.krugerSelfDriveRoad.src}
                alt={img.krugerSelfDriveRoad.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Your car, your pace, windows down — the way most of our guests do
              Kruger.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Self-drive Kruger — what we&rsquo;d recommend.</H2>
            <p>
              Self-driving is affordable, flexible and easier than most first-timers
              expect. The roads are well maintained, an ordinary sedan copes fine —
              no 4x4 needed — and you set your own pace: stop where you like, sit at
              a waterhole for forty minutes because something feels imminent. Pay
              the daily conservation fee at the boom and the day is yours. Every
              real 2026 number is in our{" "}
              <Link
                href="/blog/cost-of-a-kruger-lowveld-week-2026"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                separate cost guide
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Guided tour companies.</H2>
            <p>
              Private operators run guided game drives with experienced trackers,
              usually picking up from Hazyview. A tracker sees what you will not — a
              tail in the grass, a track four minutes old. On a first safari, one
              guided drive early in your stay is the fastest way to learn how to
              look.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Kruger&rsquo;s own sunrise and sunset drives — the insider tip.
            </H2>
            <p>
              The option most visitors never hear about, and the most useful thing
              in this guide. <strong>Kruger runs its own drives</strong> —
              open-vehicle sunrise, sunset and night drives and guided morning
              walks, departing from rest camps and gates, operated by the park
              rather than a private company. Which is why they are considerably
              cheaper: roughly <strong>R450 to R900 per person</strong>. You sit
              high in an open vehicle with a Kruger-trained guide, and the height
              alone changes what you can see over the grass.
            </p>
          </div>
          <NumberedList
            variant="dark"
            items={[
              {
                title: "Sunrise drive",
                body: "Out before the general gates open, into the best two hours of the day. If you only do one, do this one.",
              },
              {
                title: "Sunset drive",
                body: "Golden-hour viewing running on into dusk, as the nocturnal animals start to stir.",
              },
              {
                title: "Night drive",
                body: "A spotlight and a real chance at species you never see by day — genets, civets, bushbabies, hunting hyena.",
              },
              {
                title: "Guided morning walk",
                body: "On foot with armed guides. At bush level the park reads differently — tracks, dung, birdsong.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              The catch — and the reason so few people know — is that these
              generally <strong>cannot be booked online</strong>. You book in person
              at a gate or camp reception. So ask on your first morning, and build
              the rest of the week around whatever you can get.
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.krugerSunsetDrive.src}
                alt={img.krugerSunsetDrive.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The park&rsquo;s own open-vehicle sunset drive — cheaper than almost
              anything private, and bookable only at the gate.
            </figcaption>
          </figure>
        </div>

        <Callout eyebrow="The one thing to remember">
          Kruger&rsquo;s own sunrise and sunset drives are cheaper than almost
          anything private — and you can only book them by standing at the gate and
          asking.
        </Callout>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.krugerMorningWalk.src}
                alt={img.krugerMorningWalk.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The guided morning walk — the park at bush level, and a completely
              different trip.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The best way to see the Big Five.</H2>
            <p>
              No trick to it, but there is a method, and it is mostly discipline.{" "}
              <strong>Go early</strong> — the first two or three hours after the
              gates open are the best game viewing of the entire day, every day;
              animals move at dawn and settle into the shade by mid-morning. (Gate
              times shift with the season, so check the hours for your month.){" "}
              <strong>Go slowly</strong> — most sightings are things you would have
              passed at speed, and other stopped cars are information.{" "}
              <strong>Then wait</strong> — waterholes in the dry season reward
              sitting still far more than covering distance.
            </p>
            <p>
              Lion, elephant, buffalo and rhino are all reasonably common in
              southern Kruger. Leopard takes luck and repetition. Our{" "}
              <Link
                href="/blog/early-morning-kruger-safari-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                account of a dawn drive through Phabeni
              </Link>{" "}
              shows what that first morning looks like.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Where to stay near Kruger: why Hazyview works.</H2>
            <p>
              Hazyview sits close to several gates, which makes it practical for
              both self-drive days and gate-booked drives — near enough to reach the
              boom early and to book activities in person.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`,
                label: "To Kruger's Phabeni gate",
                body: "The closest gate to Hazyview. Leave in the dark, be first through the boom, be back for a late breakfast.",
              },
              {
                value: `${site.distances.kmiaMinutes} min`,
                label: "From KMIA airport",
                body: "Fly into Kruger Mpumalanga International, collect a hire car, and be on the farm before dinner.",
              },
              {
                value: `R${site.pricing.fromZAR}`,
                label: "Per person sharing, per night",
                body: "Our starting rate — the reason a five-day Kruger trip stops being a splurge and starts being a plan.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              Kanaan sits just outside Hazyview under a forty-year-old mango grove,
              with self-catering units, guest rooms, backpacker beds and shaded
              camping — see the{" "}
              <Link
                href="/stay"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                accommodation options
              </Link>{" "}
              or our{" "}
              <Link
                href="/packages"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                multi-day packages
              </Link>
              . Self-catering matters more than people expect: when you leave at
              4:45am, making your own coffee at four is worth a great deal.
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.veranda.src}
                alt={img.veranda.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The patio and braai outside a lodge unit at Kanaan — where the day
              ends after the gate closes.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Your non-safari day: the Panorama Route.</H2>
            <p>
              Nobody should do five consecutive pre-dawn starts. God&rsquo;s Window,
              Bourke&rsquo;s Luck Potholes, a string of waterfalls and a glass lift
              into an indigenous rainforest all sit a short drive up the escarpment
              — and it is the cheapest great day out in this part of the country.
              Our{" "}
              <Link
                href="/blog/panorama-route-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                full Panorama Route guide
              </Link>{" "}
              has both loops.
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.panoramaGodsWindow.src}
                alt={img.panoramaGodsWindow.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              God&rsquo;s Window — the rest day, forty minutes up the escarpment.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What to pack for a Kruger safari.</H2>
          </div>
          <NumberedList
            variant="light"
            items={[
              {
                title: "Binoculars",
                body: "The difference between 'something over there' and a leopard in a marula tree. A pair per adult — sharing causes arguments.",
              },
              {
                title: "Neutral-coloured clothing",
                body: "Khaki, olive, sand. Matters most on the open-vehicle drives and the guided walks.",
              },
              {
                title: "Layers",
                body: "An open vehicle at 5am in July is genuinely freezing. A fleece you can peel off by nine.",
              },
              {
                title: "A camera with zoom",
                body: "Phones are useless at 200 metres. Real optical zoom, plus a spare battery.",
              },
              {
                title: "Sun protection and water",
                body: "Drives get hot fast and you sit still in a metal box. Hat, sunscreen, sunglasses.",
              },
              {
                title: "Snacks, a thermos and a map",
                body: "You cannot leave the car except at picnic sites. Download the offline park map — signal is patchy.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Questions people ask us about Kruger.</H2>
            <div className="not-prose mt-8 divide-y divide-black/10 border-t border-black/10">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <h3 className="font-display text-lg text-forest-deep md:text-xl">
                    {f.q}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/85">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Callout eyebrow="An honest word on the numbers">
          Every price and time here is a 2026 guideline. SANParks sets its own fees,
          rates and gate hours, and all three change. Check the live figure before
          you count on it — we keep ours current.
        </Callout>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="Ready to plan your Kruger adventure"
              thesis="Give it three or four days, self-drive most of them, and ask at the gate on your first morning about the park's own drives."
              body={
                <>
                  That one question is worth more than anything else in this guide.
                  Keep a day back for the Panorama Route, and base yourself close
                  enough that the early start is a small inconvenience rather than
                  the reason you skip it. Tell us your dates and we&rsquo;ll help
                  you shape the rest — we live half an hour from the boom.
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
                  label:
                    "SANParks — Kruger National Park (official park page, gate times & activities)",
                  href: "https://www.sanparks.org/parks/kruger",
                },
                {
                  label: "SANParks — Kruger rates & entry fees (official)",
                  href: "https://www.sanparks.org/parks/kruger/rates-entry-fees",
                },
                {
                  label:
                    "SANParks — Wild Card types & pricing (the multi-visit break-even)",
                  href: "https://www.sanparks.org/rewards/wild-card/types-pricing",
                },
                {
                  label: "SANParks — Kruger conditions of entry & park rules",
                  href: "https://www.sanparks.org/parks/kruger/tourism/conditions",
                },
                {
                  label:
                    "Kruger Park — conservation fees explained (independent cross-check)",
                  href: "https://www.krugerpark.co.za/Kruger_Park_Travel_Advisory-travel/conservation-fees.html",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Tell us your dates and we'll plan the Kruger week with you"
          body="Send Anneli how many days you have and who's coming, and we'll help you shape it — which gate, which mornings, what to ask for at the boom, and where to sleep in between. From R250 per person sharing. No forms, just a real conversation."
          buttonLabel="Plan your Kruger trip on WhatsApp"
          pageKey="theLand"
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
                  Which gate, and when
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Phabeni vs Numbi vs Paul Kruger, opening times by season, and the
                  half-day plan that gets you home for lunch.
                </p>
              </Link>
              <Link
                href="/blog/early-morning-kruger-safari-from-hazyview"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · The dawn drive
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  What 4:47am actually looks like
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  A minute-by-minute account of the single best morning of any
                  Kruger trip.
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
