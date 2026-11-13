import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { img } from "@/lib/images";
import { articleLd, faqLd } from "@/lib/jsonld";
import { createBlogPostMetadata } from "@/lib/blog";
import { site, whatsappLink } from "@/lib/site";
import { pro } from "@/data/proPhotos";
import {
  TLDR,
  NumberedList,
  ClosingBlock,
  WhatsAppCTA,
  BlogHero,
  Sources,
} from "@/components/blog/Blocks";

// ---------------------------------------------------------------------
// SEO focus (search-optimised Guide, marketing brief 2026-11-11):
//   • Focus keyword:  early morning Kruger game drive
//   • Secondary:      Hazyview to Kruger National Park transfers · Kruger
//                     safari from Hazyview · Hazyview to Phabeni Gate ·
//                     early morning safari transport · Kruger National Park
//                     sunrise safari · taxi from Hazyview to Kruger
//   • Intent:         informational + commercial investigation
//
// The angle: the dawn drive is easy; getting to the gate in the dark
// without a car is the hard part. Siblings it must not repeat:
//   /blog/early-morning-kruger-safari-from-hazyview — the morning itself,
//        minute by minute ("First Light"). This post links to it.
//   /blog/cab-in-hazyview — how a Hazyview cab works, fares, the radius
//   /blog/getting-around-hazyview-without-a-car — the whole car-free week
//
// H1 and tab title are the brief's topic line verbatim (standing rule).
// The three infographics are built in code, not images, so every figure
// matches the body. Every photo is REAL farm photography (client rule,
// 2026-10-27 and 2026-11-03); there is no real Kruger photo in the library.
//
// Facts and where they come from:
//   Entrance gates open 05:30 Oct–Mar, 06:00 Apr–Sep (krugerpark.co.za;
//     no official SANParks timetable found 2026-11-11, so the post says to
//     confirm with SANParks)
//   Phabeni about 10 km from Hazyview on the R536 (SANParks distances page)
//   SANParks morning drives leave half an hour before gate opening, from
//     camp or entrance gate (sanparks.org game-drives page, checked in the
//     getting-around post 2026-11-03)
//   No Uber/Bolt in Hazyview (/transfers, South Africa Spirit)
//   Transfers, seats, radius, farm-to-gate minutes, room rates: site.ts
// No Kanaan Transfers gate-run fare is published, so none is quoted.
// Numbi is kept short on purpose: one source advises Phabeni over Numbi
// and we could not confirm why, so the post just defaults to Phabeni.
// ---------------------------------------------------------------------

const slug = "early-morning-kruger-game-drive-hazyview";
const datePublished = "2026-11-11";
const headline =
  "Early-Morning Kruger Game Drive From Hazyview: Reach the Gate Before Sunrise With Kanaan Transfers";

const t = site.transfers;
const gateMins = `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax}`;

// Real farm photography (portrait frames, shown at 4:5).
const farmGate = pro(6071); // the signed entrance gate on the R40
const farmViewpoint = pro(5694); // braai stand at the lookout, valley beyond

const link =
  "font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep";
const h3 = "mt-8 mb-2 font-display text-xl text-forest-deep md:text-2xl";

const faqs = [
  {
    q: "Is an early-morning game drive worth it in Kruger National Park?",
    a: "Yes, if you can face the alarm. The bush is cool and busy, and the light is kind. No sighting is guaranteed, but the first hours give the best odds.",
  },
  {
    q: "What time does Kruger National Park open?",
    a: "Entrance gates open at 05:30 from October to March and 06:00 from April to September. Check SANParks for your dates.",
  },
  {
    q: "How early should I leave Hazyview for Phabeni Gate?",
    a: `Allow ${gateMins} minutes from our farm, plus the queue: about 04:30 for a 05:30 gate. A guided drive needs an earlier start, so ask for the check-in time.`,
  },
  {
    q: "Is there Uber in Hazyview early in the morning?",
    a: "No, at any hour. Uber and Bolt have no driver network here. Book a local lift the day before.",
  },
  {
    q: "Can I book transport from Hazyview to Kruger National Park?",
    a: `Yes. Kanaan Transfers runs to Phabeni and Numbi from anywhere inside our ${t.radiusKm} km radius. Message us your pin and time on WhatsApp and we quote first.`,
  },
  {
    q: "How many passengers can Kanaan Transfers accommodate?",
    a: `Up to ${t.seats} in one vehicle. For a bigger group, message us first.`,
  },
  {
    q: "Can I book a transfer without booking a safari?",
    a: "Yes. But a lift can't take you into the park, so know what you'll do at the boom: your own car, or a guided drive.",
  },
  {
    q: "What should I wear for a sunrise game drive?",
    a: "Layers you can take off. Lowveld mornings are properly cold, even in months that turn hot by ten.",
  },
];

export const metadata = createBlogPostMetadata({
  slug,
  title: headline,
  description:
    "How to reach a Kruger gate before sunrise from Hazyview with no car: gate opening times, how long Phabeni takes, why Uber and Bolt won't help, and booking a dawn lift with Kanaan Transfers.",
  image: img.lowveldPanorama,
  datePublished,
  category: "guide",
});

// --- Infographic 1: gate times and when to leave the farm -------------
const seasons = [
  {
    months: "October to March",
    gate: "05:30",
    leave: "04:30",
  },
  {
    months: "April to September",
    gate: "06:00",
    leave: "05:00",
  },
];

function GateTimesInfographic() {
  return (
    <figure className="not-prose mx-auto my-12 w-full max-w-5xl px-5 lg:px-0">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ochre">
        Kruger gate times · and when to leave the farm
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {seasons.map((s) => (
          <article
            key={s.months}
            className="rounded-3xl bg-forest p-6 text-bone md:p-8"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-ochre">
              {s.months}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="font-display text-4xl md:text-5xl">{s.gate}</p>
                <p className="mt-1 text-sm text-bone/75">Gate opens</p>
              </div>
              <div>
                <p className="font-display text-4xl text-ochre md:text-5xl">
                  {s.leave}
                </p>
                <p className="mt-1 text-sm text-bone/75">Leave the farm</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        {`Our suggestion: ${gateMins} minutes to Phabeni, plus the queue. Gate times can change, so check SANParks.`}
      </figcaption>
    </figure>
  );
}

// --- Infographic 2: the night before, to the boom ---------------------
const nightBefore = [
  { when: "By late afternoon", what: "Message us: pickup pin, gate, time" },
  { when: "Evening", what: "Fare agreed, card on file, bag by the door" },
  { when: "04:30 or 05:00", what: "Your driver is at the door" },
  { when: "At the gate", what: "You are in the queue when the boom lifts" },
];

function NightBeforeInfographic() {
  return (
    <figure className="not-prose mx-auto my-12 w-full max-w-5xl px-5 lg:px-0">
      <div className="rounded-3xl bg-sand/70 p-6 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ochre">
          From the night before to the boom
        </p>
        <ol className="relative mt-8 grid gap-6 md:grid-cols-4 md:gap-4">
          <span
            aria-hidden
            className="absolute left-[0.6rem] top-2 bottom-2 w-0.5 bg-ochre/50 md:left-0 md:right-0 md:top-[0.6rem] md:bottom-auto md:h-0.5 md:w-auto"
          />
          {nightBefore.map((s, i) => (
            <li key={s.when} className="relative pl-9 md:pl-0 md:pt-9">
              <span
                aria-hidden
                className={`absolute left-0 top-0 h-5 w-5 rounded-full border-4 border-sand ${
                  i === nightBefore.length - 1 ? "bg-forest" : "bg-ochre"
                }`}
              />
              <p className="font-display text-lg leading-snug text-forest-deep">
                {s.when}
              </p>
              <p className="mt-1 text-sm text-ink/80">{s.what}</p>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Book the day before. Dawn runs are the one trip not to leave to chance.
      </figcaption>
    </figure>
  );
}

// --- Infographic 3: your own car, or a lift plus a guide ---------------
const ways = [
  {
    name: "Your own car",
    note: "Self-drive",
    rows: [
      ["Gate", "Drive yourself and enter the park"],
      ["Inside", "Your pace, your route"],
      ["Transfer?", "Not needed"],
    ],
  },
  {
    name: "A lift and a guided drive",
    note: "No car",
    rows: [
      ["Gate", "Kanaan Transfers drops you at the boom"],
      ["Inside", "Open vehicle and guide, booked separately"],
      ["Transfer?", "Yes, the night before"],
    ],
  },
];

function WaysInfographic() {
  return (
    <figure className="not-prose mx-auto my-12 w-full max-w-5xl px-5 lg:px-0">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ochre">
        Self-drive or guided · what you need
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {ways.map((w, i) => (
          <article
            key={w.name}
            className={`rounded-2xl p-6 md:p-7 ${
              i === 1 ? "border border-ochre/40 bg-bone" : "bg-sand/70"
            }`}
          >
            <h3 className="font-display text-2xl text-forest-deep">{w.name}</h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-ochre">
              {w.note}
            </p>
            <dl className="mt-5 space-y-3">
              {w.rows.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                    {k}
                  </dt>
                  <dd className="mt-0.5 text-sm leading-relaxed text-ink/85">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Kanaan Transfers gets you to the gate. Safari activities are booked
        separately.
      </figcaption>
    </figure>
  );
}

export default function EarlyMorningKrugerGameDriveHazyviewPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "How to reach a Kruger gate before sunrise from Hazyview without your own car, from the family who run Kanaan Guest Farm: gate opening times, the drive to Phabeni, why Uber and Bolt don't work here, and how to book a dawn lift with Kanaan Transfers.",
          path: `/blog/${slug}`,
          image: img.lowveldPanorama.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.lowveldPanorama.src}
          alt={img.lowveldPanorama.alt}
          eyebrow="Guide · The dawn lift"
          title={headline}
          titleSize="compact"
          intro="There's no Uber in Hazyview, and the Kruger gate opens at 05:30. Here is how to get there before the sun does."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={5}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "Kruger's gates open at 05:30 from October to March and 06:00 from April to September. Check SANParks for your dates.",
                `Phabeni is ${gateMins} minutes from our farm. Leave early enough for the queue.`,
                "Uber and Bolt don't work in Hazyview. Book your lift the day before.",
                "A lift gets you to the gate, not through it. Inside, you need your own car or a guided drive.",
              ]}
            />
            <p>
              The alarm goes at 04:15. The farm is dark and the only sound is
              the kettle. Binoculars by the door, jacket on the chair, and a
              Kruger gate thirty-odd minutes away that opens at 05:30. Everything
              is ready except one thing. How do you actually get there?
            </p>
            <p>
              Hazyview is a small town, not a city. There&rsquo;s no taxi rank
              at four in the morning and no app that will help. Sort it the
              night before and the morning looks after itself.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Why Is Everyone Talking About Early-Morning Safaris in Kruger?
            </H2>
            <p>
              Because the bush keeps the opposite hours to us. It does its
              living in the cool at either end of the day. Elephants come down
              to water, predators tend to still be moving after the night, and
              by mid-morning much of it has gone to shade.
            </p>
            <p>
              We won&rsquo;t promise you a lion. Anyone who does is selling
              something. But the odds are best early, and we&rsquo;ve written
              the morning itself, minute by minute, in{" "}
              <Link
                href="/blog/early-morning-kruger-safari-from-hazyview"
                className={link}
              >
                First Light
              </Link>
              . This post is about the part before it: reaching the gate.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              The Biggest Challenge: Getting From Hazyview to Kruger Before
              Sunrise
            </H2>
            <p>
              Open Uber in Hazyview and it{" "}
              <a
                href="https://www.southafrica-spirit.com/guides/uber-and-ride-share-rsa/"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                just keeps searching
              </a>
              . Bolt does the same. A local taxi at half past four is possible,
              but it works when you&rsquo;ve booked it and fails when
              you&rsquo;ve hoped for it.
            </p>
            <p>
              We run a small car service ourselves, and even we ask for a
              day&rsquo;s notice on a dawn run.
            </p>
          </div>
          <NightBeforeInfographic />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Which Kruger Gate Should You Choose for Your Morning Adventure?
            </H2>
            <h3 className={h3}>Phabeni Gate: the convenient starting point</h3>
            <p>
              <a
                href="https://www.sanparks.org/parks/kruger/travel/distances-directions"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                SANParks lists Phabeni
              </a>{" "}
              about 10 km from Hazyview on the R536. From our farm on the R40,
              allow {gateMins} minutes. It&rsquo;s the gate we send most people
              to.{" "}
              <a
                href="https://www.sanparks.org/parks/kruger/travel/entrance-gates"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                Gate times change
              </a>
              , so check yours before you set the alarm.
            </p>
          </div>
          <GateTimesInfographic />
          <div className="prose-kanaan mx-auto max-w-prose">
            <h3 className={h3}>Numbi Gate: another way in</h3>
            <p>
              Numbi is also {gateMins} minutes from the farm, on a different
              road. Unsure which to pick? Start with Phabeni.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              What Happens During the First Hour Inside Kruger National Park?
            </H2>
            <p>
              Slowly, mostly. The sky goes grey, then apricot. Birds start
              before you can see them. You drive gently, stop often, and switch
              the engine off wherever there&rsquo;s water. Some mornings it&rsquo;s
              elephants. Some mornings it&rsquo;s impala and a very good sunrise.
              Both are worth the alarm.
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { photo: farmGate, caption: "Our gate on the R40, where your driver collects you." },
              { photo: farmViewpoint, caption: "Back home with the whole day still ahead." },
            ].map(({ photo, caption }) => (
              <figure key={photo.id}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 512px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-center text-xs text-muted">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Your Early-Morning Journey Made Easier With Kanaan Transfers
            </H2>
            <p>
              Kanaan Transfers is our own car service, booked on WhatsApp.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "No taxi hunting at dawn",
                body: "Book the night before and your driver arrives at the time you chose.",
              },
              {
                title: `Room for ${t.seats}`,
                body: "One vehicle, four seats. A couple, a family, or two couples travelling light.",
              },
              {
                title: "Fare before you confirm",
                body: "We quote on WhatsApp first. No meter, and your card isn't charged until the trip is done.",
              },
              {
                title: "Booked in one message",
                body: "Send your pickup pin, the gate and the time you want to leave.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              The honest limits: we&rsquo;re a small service, so a dawn run
              needs notice, and we can&rsquo;t take you through the boom. More
              on our{" "}
              <Link href="/transfers" className={link}>
                Hazyview transfers page
              </Link>{" "}
              and in our{" "}
              <Link href="/blog/cab-in-hazyview" className={link}>
                cab guide
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Self-Drive or Guided Safari: Which Experience Is Right for You?
            </H2>
            <p>
              Decide this first: a lift can&rsquo;t take you on a drive. Got a
              car? You don&rsquo;t need us. No car? Book a guided drive.
              SANParks runs{" "}
              <a
                href="https://www.sanparks.org/parks/kruger/what-to-do/activities/game-drives"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                morning drives
              </a>{" "}
              that leave half an hour before the gate opens, so ask for the
              check-in time and work backwards.
            </p>
          </div>
          <WaysInfographic />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              7 Things to Do Before Leaving Hazyview for a Sunrise Safari
            </H2>
          </div>
          <NumberedList
            items={[
              { title: "Check the gate time", body: "For your dates, on the SANParks site." },
              { title: "Confirm your safari or park entry", body: "A booked drive, or a day permit." },
              { title: "Book your lift the day before", body: "Pin, time, party size." },
              { title: "Camera and binoculars by the door", body: "Not a 04:15 search." },
              { title: "Pack a warm jacket", body: "Dawn is colder than the afternoon suggests." },
              { title: "Take water, coffee and a snack", body: "There's no kettle at the boom." },
              { title: "Save your entry confirmation", body: "Where you can open it without signal." },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Make Hazyview Your Base for an Unforgettable Kruger Experience
            </H2>
            <p>
              Sleep close and the alarm is the hard part, not the road. Kanaan
              has lodge rooms, twin rooms, backpacker beds and campsites. A room
              is{" "}
              {`R${site.pricing.fromZAR} per person sharing a night for two nights or more, R${site.pricing.singleNightZAR} for one night.`}{" "}
              We&rsquo;re {gateMins} minutes from Phabeni and Numbi, and Anneli
              or Matthew will arrange the lift with the room.{" "}
              <Link href="/stay" className={link}>
                See the rooms
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section className="pt-0! pb-10!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Frequently Asked Questions</H2>
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

        <Section className="pt-0! pb-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Ready for a Kruger Sunrise? Arrange Your Transfer Before You Go
            </H2>
            <ClosingBlock
              title="Before you set the alarm"
              thesis="Enjoy the excitement of a sunrise safari. Let Kanaan Transfers take care of getting you to the gate."
              body={
                <>
                  Message us the day before and the morning is sorted.
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
                  label: "SANParks — Kruger entrance gates",
                  href: "https://www.sanparks.org/parks/kruger/travel/entrance-gates",
                },
                {
                  label: "SANParks — Kruger distances and directions",
                  href: "https://www.sanparks.org/parks/kruger/travel/distances-directions",
                },
                {
                  label: "SANParks — Kruger game drives",
                  href: "https://www.sanparks.org/parks/kruger/what-to-do/activities/game-drives",
                },
                {
                  label: "Krugerpark.co.za — gate opening times",
                  href: "https://www.krugerpark.co.za/Kruger_Park_Travel_Advisory-travel/kruger-park-gate-times.html",
                },
                {
                  label: "South Africa Spirit — Uber and Bolt in South Africa",
                  href: "https://www.southafrica-spirit.com/guides/uber-and-ride-share-rsa/",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Planning a sunrise safari?"
          body="Send us your pickup point, the gate and the time you'd like to leave. We'll quote the fare before you confirm."
          buttonLabel="Ask about a dawn transfer"
          href={whatsappLink("transfers")}
        />

        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/early-morning-kruger-safari-from-hazyview"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · The dawn drive
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  First Light
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  The morning itself, minute by minute, once you&rsquo;re
                  through the gate.
                </p>
              </Link>
              <Link
                href="/blog/getting-around-hazyview-without-a-car"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Getting around
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Getting around Hazyview without a car
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  The whole Lowveld week without your own wheels.
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
