import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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

const datePublished = "2026-07-07";
const headline =
  "First Light: an early-morning Kruger safari, done properly from the farm gate";

const faqs = [
  {
    q: "What time do the Kruger gates open in the morning?",
    a: "The entrance gates — including Phabeni, the closest one to Hazyview — open at 05:30 in the summer months (roughly October to March) and 06:00 in winter (April to September). Sunrise shifts with the season too, so in winter you often drive in while it is still twilight and watch first light break inside the park. Gate times are set by SANParks and can change, so confirm the current time for your dates before you set the alarm.",
  },
  {
    q: "Is an early-morning Kruger safari really worth getting up for?",
    a: "Yes — it is the best game viewing of the whole day, by a distance. The first two to three hours after the gate opens are when the bush is cool and awake: predators are still moving after the night, elephants and buffalo come to water, and the light is soft and golden for both seeing and photographing. By mid-morning the heat climbs and much of it lies up in the shade. If you do one thing properly in Kruger, make it a dawn drive.",
  },
  {
    q: "What is the best time of day for a game drive in Kruger?",
    a: "Dawn to mid-morning, and again the last hour or two before the gates close. The dawn window is the stronger of the two — cooler, quieter and with the night's activity still winding down. The middle of the day is the slow stretch, which is exactly when a dawn-driver is back at the farm having a late breakfast by the pool.",
  },
  {
    q: "How far is the Phabeni Gate from Hazyview and Kanaan?",
    a: `About ${site.distances.krugerGateMinutesMin} minutes by road from us — Phabeni is the closest Kruger gate to Hazyview. That short distance is the whole trick: you can leave the farm in the dark, be first in the short queue at the boom, and drive through the moment it lifts. From a lodge two hours away, first light happens while you are still on the road.`,
  },
  {
    q: "Can I self-drive at dawn, or do I need a guide?",
    a: "A self-drive dawn is perfect, and it is what we send most guests off to do — your own car, your own pace, windows down, no one else's schedule. If it is your first time and you would like to learn to read the bush, book one guided sunrise drive early in your stay and self-drive the rest of the mornings once your eye is in.",
  },
  {
    q: "What should I take on an early Kruger morning?",
    a: "Warm layers you can peel off — a Lowveld winter dawn is genuinely cold before the sun does its work. A full tank of fuel, a flask of coffee and something to nibble, binoculars, and the SANParks or an offline map since there is no reliable signal inside. Most of all, patience: the best sightings come to those who switch the engine off and wait. You do not need to book anything.",
  },
  {
    q: "Can I do a dawn drive and still be back for breakfast?",
    a: "Easily, and it is the loveliest way to do it. Through the gate at opening, the golden window until mid-morning, then back out through the boom and home to Kanaan for a late breakfast — the good kind of tired, with the whole afternoon still ahead of you. Being 30 minutes away is what makes a half-day dawn drive relaxed rather than a two-hour commute each way.",
  },
  {
    q: "What is the best month for a Kruger dawn drive?",
    a: "There is no bad one, only different mornings. Winter (May to August) gives you crisp cold air, low mist, thinner bush and animals gathered at the shrinking water — the classic, easy-sighting dawn. Summer brings green grass, dramatic skies and newborn impala, with an earlier, warmer sunrise. We help guests pick the morning that suits what they are hoping to see.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "early-morning-kruger-safari-from-hazyview",
  title: "First Light: an early-morning Kruger safari from Hazyview",
  description:
    "A minute-by-minute, sensory account of the single best morning of any Kruger trip — the dawn drive from Hazyview through the Phabeni Gate. Gate opening times by season, the golden first-light window, what to take, and why sleeping 30 minutes from the gate at Kanaan is the only way to do it properly.",
  image: img.krugerDawnDriveHero,
  datePublished,
  category: "guide",
});

export default function FirstLightDawnDrivePage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A minute-by-minute, sensory account of an early-morning Kruger safari from Hazyview — the 4:47am kettle, the dark drive to the Phabeni Gate, the sky turning from charcoal to apricot, the first elephant in the mist, and the golden two-hour window that only guests who sleep 30 minutes from the gate at Kanaan Guest Farm can catch. Includes Kruger gate opening times by season, what to take, and the case for basing yourself close.",
          path: "/blog/early-morning-kruger-safari-from-hazyview",
          image: img.krugerDawnDriveHero.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal & Guides", href: "/blog" },
          {
            label: "First Light",
            href: "/blog/early-morning-kruger-safari-from-hazyview",
          },
        ]}
      />

      <article>
        <BlogHero
          image={img.krugerDawnDriveHero.src}
          alt={img.krugerDawnDriveHero.alt}
          eyebrow="Guide · The dawn drive"
          title="First light."
          intro="4:47am. The kettle, the cold, the gate. The road to Phabeni goes from charcoal to apricot — and the grey boulder ahead lifts its trunk. This is the single best morning of any Kruger trip, minute by minute — and the one you can only do properly from thirty minutes away."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={9}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "The first two to three hours after the gate opens are the best game viewing of the whole day — cool, quiet, and everything awake after the night.",
                "The Phabeni Gate is about 30 minutes from Kanaan. Sleep close and you are first through the boom; sleep two hours away and first light happens while you are still driving.",
                "Gates open 05:30 in summer (roughly Oct–Mar) and 06:00 in winter (Apr–Sep). Confirm the season's time before you set the alarm.",
                "Self-drive is perfect — your car, your pace, windows down. One guided sunrise drive early on is a lovely way to get your eye in.",
                "Take warm layers, a full tank, a flask of coffee, binoculars and an offline map. Book nothing. Bring patience.",
                "Do the dawn drive, then come home to the farm for a late breakfast with the whole afternoon still ahead.",
              ]}
            />

            <p>
              Everyone remembers their first Kruger morning, and almost nobody
              remembers the afternoons. There is a reason for that. The bush keeps
              office hours the opposite way round to us: it does its living in the
              cool at either end of the day and sleeps through the heat in the
              middle. Which means the single best thing you can do in the whole
              park is also the hardest to make yourself do — get up before it is
              light, and be at the gate when it opens.
            </p>
            <p>
              And here is the quiet truth the glossy lodges do not put on the
              brochure: <strong>you can only really do this if you sleep close.</strong>{" "}
              The golden window is short and it is early. From two hours away, it
              is already half gone by the time you reach the boom. From here — with
              the Phabeni Gate about {site.distances.krugerGateMinutesMin} minutes
              down the road — you can be through it at first light, in the thick of
              it, and home for breakfast. So let us take you through the morning as
              it actually goes, minute by minute.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The morning, minute by minute.</H2>
            <p>
              This is a winter dawn — the cold, misty, classic one. In summer the
              clock shifts about half an hour earlier and the sunrise is warmer, but
              the shape of the morning is the same. Set the alarm; the bush will do
              the rest.
            </p>
          </div>
          <NumberedList
            variant="timeline"
            items={[
              {
                time: "04:47",
                title: "The kettle, in the dark.",
                body: "The alarm, then the cold — a Lowveld winter morning has a real bite to it before the sun is up. One light on in the kitchen. The kettle. You fill two travel mugs and pull on more layers than you think you'll need. Outside, the farm is silent and the stars are still out.",
              },
              {
                time: "05:20",
                title: "Headlights and the farm gate.",
                body: "Out to the car with the coffee steaming on the dash. The headlights swing across the mango trees, the gate rolls open, and you turn onto the R40 with almost nobody else on it. The heater on, the dark bush sliding past — the anticipation is half the pleasure.",
              },
              {
                time: "05:40",
                title: "The road to Phabeni.",
                body: "Off the main road onto the quieter one that runs to the gate. Mist lies in the low ground and hangs between the trees; your lights pick it out in soft moving cones. The sky, when you glance up, is still charcoal — but the eastern edge of it has the faintest warmth starting to bleed in.",
              },
              {
                time: "05:55",
                title: "The boom, and the greeting.",
                body: "The Phabeni Gate. Two cars ahead of you, engines ticking in the cold — the small, happy fellowship of people who also got up. A permit, a friendly word with the ranger, the details taken down. You wait with your hands round the coffee. This is the last moment of the ordinary world.",
              },
              {
                time: "06:00",
                title: "Through — and windows down.",
                body: "The boom lifts and you roll through into the park. Windows down now, whatever the cold, because the bush comes in through your ears before your eyes — a francolin somewhere, a dove, the enormous quiet underneath it. The bush is grey-blue and dim. You slow right down. You are inside it.",
              },
              {
                time: "06:25",
                title: "Charcoal to apricot.",
                body: "It happens faster than you expect. The grey lifts, the ridgelines catch fire along their tops, and the whole sky slides from charcoal through violet to a band of apricot and rose-gold on the horizon. The mist over the grass turns to gold. And then, ahead of you on the road —",
              },
              {
                time: "06:40",
                title: "The grey boulder lifts its trunk.",
                body: "— a grey boulder that wasn't there a moment ago. Except boulders don't have that curve to them. The trunk comes up, the ears fan, and a big elephant bull walks out of the mist and straight across the road in front of you, unbothered, enormous, close. You switch the engine off. Nobody in the car says a word. This is the reason for the alarm.",
              },
              {
                time: "07:30",
                title: "The golden hour proper.",
                body: "Now the park is properly awake and the light is at its best. Impala everywhere, a tower of giraffe against the sun, a hyena trotting home, a lion flopped in the road with a yawn that goes on forever. You drive slowly from waterhole to waterhole. Every few hundred metres is something. Your coffee has gone cold and you don't care.",
              },
              {
                time: "08:30",
                title: "Coffee, engine off.",
                body: "Pull in at a designated spot, out of the car at last, and pour the flask properly. Rusks. The bush ticking and stirring around you as it warms. This — the smell of it, the sheer space, the fact that you are the only people for miles — is the part no photograph ever quite carries home.",
              },
              {
                time: "10:30",
                title: "Home to the farm, the good kind of tired.",
                body: "The heat climbs, the animals drift into the shade, and you turn back — full, quiet, a little sunburnt on one arm. Out through the boom, twenty-odd minutes down the road, and home to Kanaan for a late breakfast by the pool. It is not even eleven. The whole afternoon is still ahead of you.",
              },
            ]}
          />
        </Section>

        {/* Inline image — the road, charcoal to apricot */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.lowveldSunriseRoad.src}
                alt={img.lowveldSunriseRoad.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The road to the Phabeni Gate at first light — the sky sliding from
              charcoal to apricot as you drive in.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Why you can only do this from close.</H2>
            <p>
              Read that timeline back and notice where the magic actually lives: in
              the twenty minutes on either side of the gate opening. That is the
              window. It is short, it is early, and it does not wait. The whole case
              for basing yourself near the park is really just arithmetic done on
              that window.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: "~30 min",
                label: "Kanaan → Phabeni Gate",
                body: "The closest Kruger gate to Hazyview. Leave in the dark, be first in the short queue at the boom, and drive through the moment it lifts.",
              },
              {
                value: "05:30–06:00",
                label: "When the gate opens",
                body: "05:30 in summer (about Oct–Mar), 06:00 in winter (Apr–Sep). The animals are already moving — you want to be there for it. Confirm the season's time.",
              },
              {
                value: "The first 3 hrs",
                label: "The window that matters",
                body: "Dawn to mid-morning is the whole game. Sleep two hours away and it is gone before you arrive; sleep here and the morning is yours.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              From a safari lodge deep in a private reserve you get this handed to
              you on a guided vehicle, which is wonderful and costs accordingly.
              From a hotel two hours off, you simply cannot — by the time you reach
              the gate the sun is up, the mist has burned away and the elephant has
              gone back into the trees. From a farm bed thirty minutes out, at a
              fraction of the lodge price, you get to do it yourself, at your own
              pace, as many mornings as you like. That is the whole quiet argument.
            </p>
          </div>
        </Section>

        {/* Inline image — the first sighting */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.krugerDawnElephant.src}
                alt={img.krugerDawnElephant.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The grey boulder that lifts its trunk — a bull crossing in the
              first light, the payoff of the early start.
            </figcaption>
          </figure>
        </div>

        <Callout eyebrow="The whole case, in one line">
          You cannot book this morning. You can only sleep close enough to catch
          it.
        </Callout>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">How to give yourself the best chance.</H2>
            <p>
              None of this needs organising in advance — that is part of its charm.
              But a few small things turn a good dawn drive into a great one, and
              they are all things we will happily sort out with you the night
              before.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Fill up the night before",
                body: "There is fuel inside the park, but you do not want to spend your golden hour queuing for it. Full tank when you arrive at the gate — we will point you to the nearest pump.",
              },
              {
                title: "Layers you can shed",
                body: "A winter dawn is properly cold and by ten it is warm. Dress in layers you can peel off one at a time as the sun does its work, and keep a beanie in the door.",
              },
              {
                title: "Coffee and rusks, from us",
                body: "Tell us the night before and the flask is filled and the rusks are packed before you leave — no fumbling in a dark kitchen at quarter to five.",
              },
              {
                title: "Binoculars and an offline map",
                body: "One pair of binoculars changes everything, especially for birds and far-off cats. There is no reliable signal inside, so download the map or take the SANParks one.",
              },
              {
                title: "Switch the engine off",
                body: "The best sightings come to the patient. When you find something, stop, cut the engine, and just wait. The bush forgets you are there and carries on.",
              },
              {
                title: "Do not over-plan the route",
                body: "Pick a rough loop and let the morning surprise you. The whole point of self-driving is that you can sit with a sighting for as long as it holds you.",
              },
            ]}
          />
        </Section>

        {/* Inline image — the golden hour */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.krugerWinterWaterhole.src}
                alt={img.krugerWinterWaterhole.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The golden hour proper — a dry-season waterhole with the mist still
              lifting, everything awake and drinking.
            </figcaption>
          </figure>
        </div>

        <Callout eyebrow="A quick, honest word on the times">
          Gate opening times and sunrise both shift with the season, and SANParks
          can adjust them. Every time here is a 2026 guideline — verify the current
          gate time for your dates before you set the alarm, and message us, because
          we keep ours current.
        </Callout>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Questions about the dawn drive.</H2>
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

        {/* Inline image — coffee stop */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.krugerPicnicCoffee.src}
                alt={img.krugerPicnicCoffee.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Coffee and rusks, engine off — the part of the morning no photograph
              quite carries home.
            </figcaption>
          </figure>
        </div>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="Set one alarm you won't regret"
              thesis="The best morning in Kruger is short, early and unbookable — so the only real trick is to sleep close enough to catch it, drive in at first light, and come home to the farm for breakfast."
              body={
                <>
                  We wrote this because it is the thing we most want guests to do,
                  and the thing they most often thank us for afterwards. Tell us
                  when you are coming and which mornings you fancy, and we will have
                  the coffee on, point you at the right gate, and set the season's
                  alarm with you. The elephant we cannot promise — but the morning
                  we can.
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
                  label: "SANParks — Kruger gate & camp opening/closing times (official)",
                  href: "https://www.sanparks.org/parks/kruger/tourism/conditions",
                },
                {
                  label: "SANParks — Kruger National Park (gates & day visitors)",
                  href: "https://www.sanparks.org/parks/kruger",
                },
                {
                  label: "Time and Date — Hazyview sunrise & sunset times",
                  href: "https://www.timeanddate.com/sun/south-africa/hazyview",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Want that sunrise?"
          body="Sleep thirty minutes from the gate and the best morning in Kruger is yours — we'll have the coffee on before you leave. Send Anneli your dates and we'll help you plan the dawn drive: which gate, what time the alarm needs to be for your season, and a late breakfast waiting when you get back."
          buttonLabel="WhatsApp us your dates"
          pageKey="stay"
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
                  Kruger from Hazyview
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  The gates, the opening times by season and the half-day plan —
                  the practical companion to this dawn-drive letter.
                </p>
              </Link>
              <Link
                href="/blog/when-to-visit-kruger-hazyview-month-by-month"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Seasonal Almanac
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  When to visit, month by month
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Which month gives you the misty winter dawn and which the green
                  summer one — how to pick the morning that&rsquo;s yours.
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
