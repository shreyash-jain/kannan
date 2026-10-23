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
  NumberedList,
  ClosingBlock,
  WhatsAppCTA,
  BlogHero,
  Sources,
} from "@/components/blog/Blocks";

// ---------------------------------------------------------------------
// SEO focus (search-optimised Guide, marketing brief 2026-10-19):
//   • Focus keyword:  Perry's Bridge Market Hazyview
//   • Secondary:      Perry's Bridge Trading Post · Hazyview shopping ·
//                     craft market Hazyview · restaurants at Perry's
//                     Bridge · things to do in Hazyview
// Marketing asked for about 1,300 words and infographics, and (on
// localhost) for the text to fill the side margins: the reading column
// is max-w-5xl, the same width as the photos and data blocks. The four
// infographics (what's inside, a Saturday, how long, from our gate) are
// built in code, not images, so every name and number matches the body.
//
// Brief correction: "Perry's Bridge Market" is not the name of the place.
// The complex is Perry's Bridge Trading Post; The Market at Perry's Bridge
// is the Saturday craft market inside it. The post keeps the keyword and
// says so in the first section.
//
// Verified facts (2026-10-19):
//   Directory of 28 businesses, names and categories — perrysbridge.co.za.
//     Left out on purpose: SKY 420, Perry's Bridge Hollow (a hotel), and
//     the offices and services (optometrist, estate agent, medical aid,
//     charity office, vet).
//   Trading Post hours Mon–Fri 08:00–16:00, Sat 08:30–16:00, Sun
//     09:00–14:00; "old citrus farm"; corner of Main Rd & Sabie Rd —
//     sa-venues.com.
//   Saturday market: Tripadvisor 09:00–15:00 vs Visit Hazyview
//     08:00–16:00. They disagree, so the post prints neither and gives the
//     market's WhatsApp line (081 361 9277, Visit Hazyview + directory).
//   Reptile park 10:00–17:00, closed Fridays except public and school
//     holidays, 45-minute shows at 11:00 and 15:00, crocodile feeding
//     Sundays 14:00, 42 snake enclosures — southafrica.net.
//   Skyway Trails durations — skywaytrails.com: Aerial Cable Trail 8
//     ziplines / 10 platforms / ~2.5 h with transfer, under-10s with a
//     guide; Rope Adventure Park 35 obstacles / ~45 min; Perry's Zipline
//     120 m / ~10 min; Tower Jump 13 m / ~10 min a jump.
//   Ten minutes from our gate — same figure as the where-to-stay guide.
// ---------------------------------------------------------------------

const slug = "perrys-bridge-market-hazyview";
const datePublished = "2026-10-19";
const headline =
  "Perry's Bridge Market Hazyview: A Complete Guide to Local Crafts, Food & Shopping";

const link =
  "font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Perry%27s+Bridge+Trading+Post+Hazyview";

const gateMin = `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`;

const faqs = [
  {
    q: "What is Perry's Bridge Market in Hazyview known for?",
    a: "It's really Perry's Bridge Trading Post: more than 25 shops, restaurants and attractions on an old citrus farm on the R40. The craft market is a separate Saturday event inside it.",
  },
  {
    q: "Is there a craft market at Perry's Bridge?",
    a: "Yes. The Market at Perry's Bridge runs on Saturdays. Published hours disagree, so WhatsApp the market on 081 361 9277 to check before you go.",
  },
  {
    q: "What can you buy at Perry's Bridge Trading Post?",
    a: "Art and curios, woven silk, handstitched leather shoes and bags, outdoor and everyday clothing, vintage gifts, photographic prints, Belgian and handmade chocolates, and home-industry preserves.",
  },
  {
    q: "Are there restaurants and coffee shops at Perry's Bridge?",
    a: "Kuka Restaurant & Cocktail Lounge, Pioneers Grill and Topolinos for meals, and Plato for coffee. Each keeps its own hours, so phone ahead for an early breakfast or a late supper.",
  },
  {
    q: "Is Perry's Bridge suitable for families?",
    a: "Very. The reptile park is under cover and the Skyway rope park suits older children. Check the age rules for each activity when you book.",
  },
  {
    q: "How do I find the latest opening hours?",
    a: "Start with the official Perry's Bridge directory, which lists a phone number for every business, and phone the ones you've set your heart on.",
  },
];

export const metadata = createBlogPostMetadata({
  slug,
  title: "Perry's Bridge Market Hazyview: Crafts, Food & Shopping",
  description:
    "Explore Perry's Bridge Market in Hazyview, South Africa, with local crafts, food, shopping tips and nearby attractions for your Mpumalanga trip.",
  image: img.perrysBridgeCraftStall,
  datePublished,
  category: "guide",
});

// --- Infographic 1: what's inside, from the official directory -------
const inside = [
  {
    group: "Eat & drink",
    names: ["Kuka Restaurant & Cocktail Lounge", "Pioneers Grill", "Topolinos", "Plato (coffee)"],
  },
  {
    group: "Art & crafts",
    names: ["The Market (Saturdays)", "Africa Silks", "Artefunto", "Runako Arts and Gallery", "Creative Nature"],
  },
  {
    group: "Clothes & gifts",
    names: ["Tsonga", "Senqu", "Wear Necessities", "World of Things"],
  },
  {
    group: "Food to take home",
    names: ["Shautany Chocolatiers", "The Harvest Table"],
  },
  {
    group: "Things to do",
    names: ["Perry's Bridge Reptile Park", "Skyway Trails", "Tours and Tickets", "Ilios"],
  },
  {
    group: "Pampering",
    names: ["Dee's African Spa", "The Hair Studio"],
  },
];

const insideTotal = inside.reduce((n, g) => n + g.names.length, 0);

function InsideInfographic() {
  return (
    <figure className="not-prose mx-auto my-12 w-full max-w-5xl px-5 lg:px-0">
      <div className="rounded-3xl bg-forest p-6 text-bone md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ochre">
          What&rsquo;s inside Perry&rsquo;s Bridge
        </p>
        <p className="mt-3 font-display text-4xl md:text-5xl">
          {insideTotal} places to browse, eat and play
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inside.map((g) => (
            <div key={g.group} className="rounded-2xl bg-forest-deep/50 p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl">{g.group}</h3>
                <span className="font-display text-3xl leading-none text-ochre">
                  {g.names.length}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.names.map((n) => (
                  <li
                    key={n}
                    className="rounded-full border border-bone/20 px-3 py-1 text-xs text-bone/85"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        From the official Perry&rsquo;s Bridge directory, October 2026. We&rsquo;ve
        left out the offices and services.
      </figcaption>
    </figure>
  );
}

// --- Infographic 3: how long each activity takes ---------------------
// Single series, so one colour and direct labels; no legend.
const durations = [
  { what: "Perry's Zipline", sub: "120 m to the jump tower", min: 10, label: "10 min" },
  { what: "Tower Jump", sub: "13 m, per jump", min: 10, label: "10 min" },
  { what: "Snake show", sub: "11:00 and 15:00", min: 45, label: "45 min" },
  { what: "Rope Adventure Park", sub: "Two courses, 35 obstacles", min: 45, label: "45 min" },
  { what: "Aerial Cable Trail", sub: "8 ziplines, transfer included", min: 150, label: "2½ hours" },
];

const maxMin = Math.max(...durations.map((d) => d.min));

function DurationInfographic() {
  return (
    <figure className="not-prose mx-auto my-12 w-full max-w-5xl px-5 lg:px-0">
      <div className="rounded-3xl bg-sand/70 p-6 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ochre">
          How long to allow
        </p>
        <p className="mt-3 font-display text-3xl text-forest-deep md:text-4xl">
          From ten minutes to most of a morning
        </p>
        <ul className="mt-8 space-y-5">
          {durations.map((d) => (
            <li
              key={d.what}
              className="grid gap-2 md:grid-cols-[14rem_1fr] md:items-center md:gap-6"
            >
              <div>
                <p className="font-display text-lg leading-tight text-forest-deep">
                  {d.what}
                </p>
                <p className="text-xs text-ink/70">{d.sub}</p>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="h-4 rounded-r-[4px] bg-ochre"
                  style={{ width: `${Math.max((d.min / maxMin) * 80, 3)}%` }}
                  aria-hidden
                />
                <span className="whitespace-nowrap text-sm font-medium text-ink">
                  {d.label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Times as published by Skyway Trails and the reptile park. Browsing and
        lunch are up to you.
      </figcaption>
    </figure>
  );
}

// --- Infographic 4: from our gate ------------------------------------
const fromGate = [
  { place: "Kanaan Guest Farm", time: "Start", note: "On the R40", home: true },
  { place: "Perry's Bridge", time: "~10 min", note: "Shops, lunch, the market" },
  { place: "Sabie waterfalls", time: "~35 min", note: "Mac Mac, Lisbon, Berlin" },
  { place: "Phabeni Gate, Kruger", time: gateMin, note: "The closest gate" },
  { place: "Graskop & God's Window", time: "45–60 min", note: "The Panorama Route" },
];

function FromGateInfographic() {
  return (
    <figure className="not-prose mx-auto my-12 w-full max-w-5xl px-5 lg:px-0">
      <div className="rounded-3xl bg-forest-deep p-6 text-bone md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ochre">
          From our gate
        </p>
        <ol className="relative mt-8 grid gap-6 md:grid-cols-5 md:gap-4">
          <span
            aria-hidden
            className="absolute left-[0.6rem] top-2 bottom-2 w-0.5 bg-ochre/50 md:left-0 md:right-0 md:top-[0.6rem] md:bottom-auto md:h-0.5 md:w-auto"
          />
          {fromGate.map((r) => (
            <li key={r.place} className="relative pl-9 md:pl-0 md:pt-9">
              <span
                aria-hidden
                className={`absolute left-0 top-0 h-5 w-5 rounded-full border-4 border-forest-deep ${
                  r.home ? "bg-bone" : "bg-ochre"
                }`}
              />
              <p className="font-display text-2xl leading-none">{r.time}</p>
              <p className="mt-2 font-display text-lg leading-snug">{r.place}</p>
              <p className="mt-1 text-sm text-bone/75">{r.note}</p>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Approximate drive times from Kanaan Guest Farm.
      </figcaption>
    </figure>
  );
}

function Photo({
  slot,
  caption,
}: {
  slot: { src: string; alt: string };
  caption: string;
}) {
  return (
    <div className="mx-auto max-w-5xl px-5 lg:px-8">
      <figure>
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={slot.src}
            alt={slot.alt}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 text-center text-xs text-muted">
          {caption}
        </figcaption>
      </figure>
    </div>
  );
}

const h3 = "mt-8 mb-2 font-display text-xl text-forest-deep md:text-2xl";

export default function PerrysBridgeMarketPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical guide to Perry's Bridge Trading Post and its Saturday craft market in Hazyview, written by the family who run Kanaan Guest Farm ten minutes away: what to buy, where to eat, the reptile park and Skyway Trails, opening hours to check, and how to fit it around Kruger and the Panorama Route.",
          path: `/blog/${slug}`,
          image: img.perrysBridgeCraftStall.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.perrysBridgeCraftStall.src}
          alt={img.perrysBridgeCraftStall.alt}
          eyebrow="Guide · Hazyview"
          title={headline}
          titleSize="compact"
          intro="Ten minutes from our gate there's an old citrus farm full of craft shops, good coffee and a green mamba behind glass. Here's how we'd spend a few hours there."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={7}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <TLDR
              items={[
                "Perry's Bridge Trading Post sits on the R40 in Hazyview, with more than 25 shops, restaurants and attractions in one shaded complex.",
                "The craft market is a Saturday thing. The shops trade all week.",
                "Lunch options: Kuka, Pioneers Grill and Topolinos. Coffee at Plato.",
                "The reptile park and Skyway Trails are in the same complex.",
                "It's free to walk around. Phone ahead for anything you'd hate to miss.",
              ]}
            />
            <p>
              Guests ask us two questions on their first evening: which Kruger
              gate, and where to get lunch on the day off. The answer to the
              second one is nearly always{" "}
              <strong>Perry&rsquo;s Bridge Market in Hazyview</strong>. It&rsquo;s
              where we buy birthday presents, meet friends for coffee, and
              send families when the rain sets in.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">What is Perry&rsquo;s Bridge Market in Hazyview?</H2>
            <p>
              Strictly speaking, it&rsquo;s{" "}
              <strong>Perry&rsquo;s Bridge Trading Post</strong>, a cluster of
              low buildings and big shade trees on an old citrus farm, where
              the R40 meets the Sabie road. Local history credits the name to
              a man called Perry who kept a trading store on this stretch of
              the Sabie River in the early 1900s.
            </p>
            <p>
              The <em>market</em>{" "}people search for is the Saturday craft
              market inside it. The rest of the week, it&rsquo;s the shops,
              restaurants and attractions that do the trading. For Hazyview
              shopping, it&rsquo;s the easiest stop in town: park once and
              walk.
            </p>
          </div>
          <InsideInfographic />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">What can you buy at Perry&rsquo;s Bridge Market?</H2>
            <h3 className={h3}>African crafts and handmade souvenirs</h3>
            <p>
              Africa Silks has weavers and a showroom, and Runako Arts and
              Gallery deals in art and curios. When something looks handmade,
              ask who made it and where. Good sellers enjoy the question, and
              you take home a story along with the bowl.
            </p>
            <h3 className={h3}>Art, gifts and home décor</h3>
            <p>
              Artefunto is a contemporary gallery, Creative Nature sells
              photographic prints and clothing, and World of
              Things is all retro and vintage. Flying home? Choose flat and
              light: a print, a silk scarf, a small framed piece.
            </p>
            <h3 className={h3}>Clothing, accessories and travel essentials</h3>
            <p>
              Tsonga makes handstitched leather shoes and bags, Senqu does
              outdoor clothing, and Wear Necessities covers everyday clothes.
              Forgot something warm for an open-vehicle drive? Senqu is the
              place to look.
            </p>
          </div>
        </Section>

        <Photo
          slot={img.perrysBridgeLeatherSilk}
          caption="Leather and silk: the sort of thing worth asking about. (Illustration.)"
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Explore local food and dining at Perry&rsquo;s Bridge</H2>
            <h3 className={h3}>Restaurants and casual dining</h3>
            <p>
              There are three restaurants within a short walk of each other.{" "}
              <strong>Topolinos</strong>{" "}does Italian pizza and pasta, and
              it&rsquo;s the easy one with children. <strong>Pioneers Grill</strong>{" "}
              is the steak night. <strong>Kuka Restaurant &amp; Cocktail Lounge</strong>{" "}
              covers everything from a slow lunch to drinks at sundown. Our{" "}
              <Link href="/blog/where-to-eat-around-hazyview" className={link}>
                guide to eating around Hazyview
              </Link>{" "}
              goes further.
            </p>
            <h3 className={h3}>Coffee shops and light refreshments</h3>
            <p>
              <strong>Plato</strong> is the coffee stop. After a 05:30 gate
              and a morning in the park, a flat white in the shade is its own
              small holiday.
            </p>
            <h3 className={h3}>Chocolates, bakery treats and local food products</h3>
            <p>
              <strong>Shautany Chocolatiers</strong> sells imported Belgian and
              handmade chocolates. <strong>The Harvest Table</strong> is a
              home-industry shop (a <em>tuisbedryf</em>), the place for jams,
              rusks and chutneys. One honest warning: chocolate and a hot car
              don&rsquo;t mix, so buy it on the way out.
            </p>
          </div>
        </Section>

        <Photo
          slot={img.perrysBridgeVerandaCoffee}
          caption="Coffee in the shade after an early Kruger gate. (Illustration.)"
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              The Market at Perry&rsquo;s Bridge: what to know before visiting
            </H2>
            <p>
              The Saturday craft market is when Perry&rsquo;s Bridge is at its
              liveliest. Stalls of locally made things fill the shade, and it
              feels more like a village than a shopping centre. If you&rsquo;re
              looking for local markets in Hazyview, this is the one.
            </p>
            <p>
              Here&rsquo;s the catch. The published hours don&rsquo;t agree. One
              listing says 09:00 to 15:00, another 08:00 to 16:00, so we
              won&rsquo;t pretend to know. WhatsApp the market on{" "}
              <a href="https://wa.me/27813619277" target="_blank" rel="noopener noreferrer" className={link}>
                081 361 9277
              </a>{" "}
              before you plan around it, and go early either way: by midday
              it&rsquo;s hot.
            </p>
          </div>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-ochre">
              A Saturday at Perry&rsquo;s Bridge, the way we&rsquo;d do it
            </p>
          </div>
          <NumberedList
            variant="timeline"
            items={[
              {
                time: "08:30",
                title: "The shops open",
                body: "Find parking while it's easy and walk the shops before the heat.",
              },
              {
                time: "09:00",
                title: "The craft market is trading",
                body: "Both published timetables agree it's running by now. Browse the stalls first.",
              },
              {
                time: "11:00",
                title: "Snake show at the reptile park",
                body: "Forty-five minutes, under cover. The park opens at 10:00.",
              },
              {
                time: "12:30",
                title: "Lunch",
                body: "Pizza at Topolinos, or a long table at Kuka.",
              },
              {
                time: "15:00",
                title: "Second snake show",
                body: "Or the Skyway rope park. Some market stalls may be packing up.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Things to do at Perry&rsquo;s Bridge besides shopping</H2>
            <h3 className={h3}>Visit Perry&rsquo;s Bridge Reptile Park</h3>
            <p>
              There are forty-two snake enclosures, from the green mamba to
              the Cape file snake, plus crocodiles, alligators and, last we
              heard, an iguana called John Malkovich. It&rsquo;s open 10:00 to 17:00, with
              crocodile feeding on Sundays at 14:00. It&rsquo;s{" "}
              <strong>closed on Fridays</strong> outside public and school
              holidays, which catches people out every week.
            </p>
            <h3 className={h3}>Try an adventure activity</h3>
            <p>
              Skyway Trails runs four things from here. The big one, the
              Aerial Cable Trail, is eight ziplines and a transfer to the
              forest, and children under ten go with a guide. Book ahead and
              ask about age and weight limits when you do.
            </p>
            <h3 className={h3}>Relax with a spa treatment</h3>
            <p>
              Dee&rsquo;s African Spa does massages and treatments. Book ahead
              and keep it for the afternoon after a long Kruger day.
            </p>
          </div>
          <DurationInfographic />
        </Section>

        <Photo
          slot={img.perrysBridgeZipline}
          caption="Skyway Trails' Aerial Cable Trail runs through the forest. (Illustration.)"
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">How to plan your visit to Perry&rsquo;s Bridge Market</H2>
            <h3 className={h3}>Where is Perry&rsquo;s Bridge located?</h3>
            <p>
              It&rsquo;s on the R40 in Hazyview, at the corner of Main Road and
              the Sabie road.{" "}
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={link}>
                Open it in Google Maps
              </a>
              , and see the{" "}
              <a href="https://www.perrysbridge.co.za/" target="_blank" rel="noopener noreferrer" className={link}>
                official Perry&rsquo;s Bridge directory
              </a>{" "}
              for every business&rsquo;s phone number.
            </p>
            <h3 className={h3}>What is the best time to visit?</h3>
            <p>
              Saturday for the market. Any weekday morning for quiet browsing,
              but never a Friday if the reptile park is the point. The Trading
              Post&rsquo;s published hours are 08:00 to 16:00 on weekdays,
              08:30 to 16:00 on Saturdays and 09:00 to 14:00 on Sundays.
              Restaurants keep their own hours.
            </p>
            <h3 className={h3}>How much time should you spend there?</h3>
            <p>
              An hour is enough for coffee and a browse. Add lunch and a snake
              show and it&rsquo;s a relaxed half-day. The Aerial Cable Trail
              takes a morning on its own.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Ask what it's made of",
                body: "And who made it. Handmade pieces come with a story.",
              },
              {
                title: "Think about luggage",
                body: "Flying home? Choose flat, light and unbreakable.",
              },
              {
                title: "Check age limits",
                body: "Ziplines and rope courses have rules. Ask when you book.",
              },
              {
                title: "Carry a back-up payment",
                body: "Bring a card and a little cash. Market stalls vary.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Places to visit near Perry&rsquo;s Bridge Market in Hazyview</H2>
            <h3 className={h3}>Kruger National Park</h3>
            <p>
              Phabeni Gate is 12 km from town. Do Kruger in the morning,
              Perry&rsquo;s Bridge for lunch. Here&rsquo;s our help with{" "}
              <Link href="/blog/kruger-from-hazyview" className={link}>
                planning a Kruger National Park visit
              </Link>
              .
            </p>
            <h3 className={h3}>The Panorama Route</h3>
            <p>
              God&rsquo;s Window, Bourke&rsquo;s Luck and the waterfalls make a
              full day up the escarpment. Read our{" "}
              <Link href="/blog/panorama-route-from-hazyview" className={link}>
                Panorama Route from Hazyview
              </Link>{" "}
              guide.
            </p>
            <h3 className={h3}>Other local shopping and cultural experiences</h3>
            <p>
              Casterbridge, out towards White River, is the other good browse.
              For everything else, there&rsquo;s our list of{" "}
              <Link href="/blog/things-to-do-around-hazyview" className={link}>
                things to do in Hazyview
              </Link>
              .
            </p>
          </div>
          <FromGateInfographic />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Where to stay when exploring Hazyview</H2>
            <p>
              We&rsquo;re biased, but{" "}
              <Link href="/" className={link}>
                Kanaan Guest Farm in Hazyview
              </Link>{" "}
              is ten minutes up the road. We have self-catering lodge rooms,
              campsites under forty-year-old mango trees and a pool. Stay in
              one place and every day trip, whether it&rsquo;s Kruger, the
              Panorama Route or a lazy Saturday at the market, ends at the
              same bed.
            </p>
            <Callout eyebrow="The second night is the cheaper one">
              {`One night with us is R${site.pricing.singleNightZAR} per person sharing. Stay two or more and it's R${site.pricing.fromZAR} a night.`}
            </Callout>
          </div>
        </Section>

        <Photo
          slot={img.poolReal}
          caption="Back at the farm, after a day of shops and snakes."
        />

        <Section className="pb-10!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Frequently asked questions about Perry&rsquo;s Bridge Market Hazyview
            </H2>
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
          <div className="prose-kanaan mx-auto max-w-5xl">
            <ClosingBlock
              title="Plan your Hazyview stay"
              thesis="Perry's Bridge isn't a reason to come to Hazyview. It's the reason your day off here is a good one."
              body={
                <>
                  Tell us which Saturday you&rsquo;re here and we&rsquo;ll tell
                  you what&rsquo;s on.
                </>
              }
            />
            <p className="font-display text-base italic text-forest-deep">
              — Anneli &amp; Matthew
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <Sources
              items={[
                {
                  label: "Perry's Bridge Trading Post — official directory",
                  href: "https://www.perrysbridge.co.za/",
                },
                {
                  label: "SA-Venues — Perry's Bridge Trading Post hours and address",
                  href: "https://www.sa-venues.com/things-to-do/mpumalanga/perrys-bridge/",
                },
                {
                  label: "Visit Hazyview — the Saturday market",
                  href: "https://visithazyview.co.za/things-to-do/",
                },
                {
                  label: "South African Tourism — Perry's Bridge Reptile Park",
                  href: "https://www.southafrica.net/gl/en/travel/article/cold-blooded-love-at-perry-s-bridge-reptile-park",
                },
                {
                  label: "Skyway Trails — activities and durations",
                  href: "https://www.skywaytrails.com/",
                },
                {
                  label: "Rissington Inn — the history of Hazyview",
                  href: "https://rissingtoninn.springnest.com/pages/the-history-of-hazyview/",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Planning a trip to Hazyview?"
          body={`Make time for the market, the coffee and the snakes. We'll reply personally with what's free, from R${site.pricing.fromZAR} per person sharing for two nights or more.`}
          buttonLabel="Check availability on WhatsApp"
          pageKey="stay"
        />

        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/where-to-eat-around-hazyview"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Food
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Where to eat around Hazyview
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  From pizza with the children to the one night worth dressing
                  up for.
                </p>
              </Link>
              <Link
                href="/blog/things-to-do-around-hazyview"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Activities
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Things to do around Hazyview
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Kruger, the escarpment, waterfalls and the slow days in
                  between.
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
