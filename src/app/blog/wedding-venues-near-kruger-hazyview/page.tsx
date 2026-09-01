import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { img, wedding } from "@/lib/images";
import { articleLd, faqLd, eventVenueLd } from "@/lib/jsonld";
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

// ---------------------------------------------------------------------
// SEO focus for this cornerstone (search-optimised Guide):
//   • Focus keyword (1):  wedding venue near Kruger
//   • Primary keywords:   Lowveld wedding venue · Hazyview wedding venue ·
//                         affordable wedding venue Mpumalanga
//   • Secondary / long-tail: intimate wedding venue near Kruger ·
//                         farm wedding venue Mpumalanga · bushveld wedding venue ·
//                         wedding venue with accommodation near Kruger ·
//                         small / marquee wedding venue Mpumalanga ·
//                         destination wedding Kruger · getting married in South Africa ·
//                         best time to get married in the Lowveld
// The keywords are woven into the H1, section headings, intro, FAQ and meta —
// never stuffed. Anneli's warm first-person voice comes first; search second.
// ---------------------------------------------------------------------

const datePublished = "2026-07-16";
const headline =
  "A wedding venue near Kruger, in the beautiful heart of Hazyview — the honest guide to getting married at Kanaan";

// --- Inline detail table (wide data block, rendered OUTSIDE the prose column) ---
type Row = { item: string; price: string; note?: string };
function DetailTable({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="not-prose mx-auto my-8 w-full max-w-5xl px-5 lg:px-0">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-ochre">
        {title}
      </p>
      <div className="overflow-hidden rounded-2xl border border-black/5 bg-bone">
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-1 gap-1 border-b border-black/5 p-4 last:border-0 md:grid-cols-[1fr_auto] md:items-baseline md:gap-6"
          >
            <div>
              <p className="font-medium text-forest-deep">{r.item}</p>
              {r.note && (
                <p className="mt-1 text-xs leading-relaxed text-ink/65">
                  {r.note}
                </p>
              )}
            </div>
            <p className="font-display text-lg leading-tight text-forest-deep md:whitespace-nowrap md:text-right">
              {r.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "Is Kanaan a good wedding venue near Kruger?",
    a: "We think so, and here is the honest case. Kanaan is a family-run guest farm in the beautiful heart of Hazyview, thirty to forty-five minutes from Kruger's Phabeni and Numbi gates and forty-eight minutes from the Kruger Mpumalanga airport. That means your guests can fly or drive in easily, sleep on the farm, and turn your wedding into a whole Lowveld weekend of safaris and waterfalls rather than a single rushed day. The setting — the forty-year-old mango grove, the viewpoint over the valley, the Drakensberg escarpment behind it — does most of the decorating for you.",
  },
  {
    q: "How many guests can the wedding venue at Kanaan hold?",
    a: `The venue flexes to your guest list. We host intimate weddings of up to ${site.capacity.wedding.indoor} guests indoors in our covered main venue, ${site.capacity.wedding.indoor}–${site.capacity.wedding.withMarquee} guests under a marquee on the wedding lawn, and up to ${site.capacity.wedding.withCamping} guests when we open the wider camping ground for the whole weekend. Small and intimate is what the farm does most beautifully, but there is real room to grow the day if your family is large.`,
  },
  {
    q: "How much does a wedding at Kanaan cost?",
    a: "Less than most Lowveld venues, which is the point of a farm wedding. Detailed wedding packages are being finalised, so the fairest thing we can do here is not quote a number we would have to caveat — instead, message us with your dates and rough guest count and we will send you the current options personally. What we can say plainly: accommodation on the farm starts at R250 per person sharing, you can bring your own caterers and décor to keep costs in your control, and because your guests sleep on-site there are no shuttles or late-night taxis to pay for.",
  },
  {
    q: "Can our wedding guests sleep at the venue?",
    a: `Yes — and this is the quiet magic of a farm wedding. The lodge units hold around ${site.capacity.sleepingTotal} guests across renovated double rooms, twin rooms and larger family units, and camping under the mango grove takes care of the rest, up to ${site.capacity.campingPeople} people on a wedding weekend. Nobody has to drive home, which means the celebration carries on around the fire and everyone is there for a slow Sunday breakfast.`,
  },
  {
    q: "Can we have an outdoor or marquee wedding?",
    a: "Absolutely. The ceremony spot is the viewpoint above the valley, with the Lowveld falling away behind you; the covered main venue handles the weather and the evening; and for larger weddings we pitch a marquee on the wedding lawn under the mango trees. You get the outdoor African wedding you are picturing, with a proper roof to fall back on if a summer thunderstorm rolls through.",
  },
  {
    q: "What is the best time of year to get married in the Lowveld?",
    a: "Our honest favourite is the dry winter to spring window, roughly April to September — mild sunny days, cool clear evenings, almost no rain, and the crisp, long views the escarpment is famous for. The green summer (November to March) is lush and dramatic but brings warm, humid afternoons and the chance of a short thundershower, so plan an indoor or marquee backup. We walk every couple through it month by month before they set a date.",
  },
  {
    q: "Do you provide catering, or can we bring our own?",
    a: "Both work. You are welcome to bring your own caterers and décor, or work from the local suppliers we have built up over our first year here. Breakfast and dinner — including a proper South African braai — can be put on for your guests on request. Plenty of couples cater the big day out and keep the rehearsal night a relaxed farm braai around the fire.",
  },
  {
    q: "What do we need to legally get married in South Africa?",
    a: "A marriage in South Africa must be conducted by a registered marriage officer, and you will each need a valid ID or passport, and if either of you was married before, proof it has ended (a divorce decree or death certificate). Foreign couples marrying here need their passports and a letter of no impediment. We are not a legal-advice service, so confirm the current requirements with the Department of Home Affairs — but many couples handle the legal signing quietly with their officer and keep the farm ceremony purely for the meaning.",
  },
  {
    q: "How far is Kanaan from Kruger and the airport?",
    a: `We are about ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from Kruger's nearest gates and ${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga International Airport (KMIA), which has daily flights from Johannesburg and Cape Town. Guests can fly in the day before, and the Panorama Route — God's Window, the Blyde Canyon, the waterfalls — is on your doorstep for the days around the wedding.`,
  },
  {
    q: "What is there for our wedding guests to do around Hazyview?",
    a: "A great deal, which is why guests happily make a weekend of it. A dawn safari into Kruger, the Panorama Route's viewpoints and waterfalls, zip-lines and river rafting, and long slow afternoons by the pool on the farm. We keep a full things-to-do guide for exactly this — send it to your guest list with the invitation and let everyone build their own trip around your day.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "wedding-venues-near-kruger-hazyview",
  title:
    "Wedding venues near Kruger: getting married at Kanaan in Hazyview",
  description:
    "An honest guide to a Lowveld wedding venue near Kruger National Park. What makes a farm wedding at Kanaan in Hazyview different — guest capacity from intimate to 150, where everyone sleeps, catering, the legal bit, the best time of year, and how to start planning. From R250 per person sharing, 30–45 minutes from the Kruger gate.",
  image: wedding.krugerHero,
  datePublished,
  category: "guide",
});

export default function WeddingVenueGuidePage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical, honest guide to choosing a wedding venue near Kruger National Park, told by the family who run Kanaan Guest Farm in Hazyview. What sets a Lowveld farm wedding apart, guest capacity from an intimate 60 indoors to 150 with the camping ground open, on-site accommodation for the whole guest list, catering and décor options, the legal requirements to marry in South Africa, the best time of year to wed in the Lowveld, and how to plan a weekend rather than a single day — from R250 per person sharing, 30 to 45 minutes from the Kruger gate.",
          path: "/blog/wedding-venues-near-kruger-hazyview",
          image: wedding.krugerHero.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />
      <JsonLd
        data={eventVenueLd({
          name: "Kanaan Guest Farm — wedding & events venue, Hazyview",
          description:
            "A family-run wedding and events venue in the beautiful heart of Hazyview, Mpumalanga, 30–45 minutes from Kruger National Park. Intimate weddings indoors, marquee weddings on the lawn, and larger celebrations with the camping ground open — up to 150 guests, all sleeping on the farm under a forty-year-old mango grove.",
          path: "/blog/wedding-venues-near-kruger-hazyview",
          image: wedding.krugerHero.src,
          maximumAttendeeCapacity: site.capacity.wedding.withCamping,
        })}
      />

      <article>
        <BlogHero
          image={wedding.krugerHero.src}
          alt={wedding.krugerHero.alt}
          eyebrow="Guide · Weddings & celebrations"
          title="A wedding venue near Kruger, in the heart of Hazyview."
          intro="An honest guide to getting married in the Lowveld — what a farm wedding at Kanaan really involves, how many guests fit, where they all sleep, and how to turn one day into a whole weekend under the mango trees."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={11}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "Kanaan is a family-run wedding venue near Kruger — in the heart of Hazyview, 30–45 minutes from the gate and 48 minutes from the KMIA airport, so guests fly or drive in and sleep on the farm.",
                "The venue flexes: up to 60 guests indoors, 60–100 under a marquee on the lawn, and up to 150 when we open the camping ground for the whole weekend.",
                "Everyone sleeps on-site — around 50 in the lodge rooms and up to 120 more camping under the forty-year-old mango grove. No shuttles, no leaving early.",
                "Bring your own caterers and décor, or use our local suppliers; a braai and breakfast can be put on for your guests on request.",
                "The best months to marry here are the dry, clear April-to-September window — but every season works with an indoor or marquee backup.",
                "Detailed packages are being finalised — message us for the current options. Accommodation starts at R250 per person sharing.",
              ]}
            />

            <p>
              We did not set out to run a wedding venue. We set out to bring an
              old Hazyview farm back to life — the mango grove, the lodge rooms,
              the road down to Kruger. But then a couple asked if they could
              marry here, under the trees, and we watched their whole family
              arrive on the Friday, sleep on the farm, and leave on the Sunday
              having had not a wedding <em>day</em> but a wedding{" "}
              <em>weekend</em>. That is when we understood what a place like this
              is really for.
            </p>
            <p>
              So this is the honest guide we wish couples had before they start
              phoning venues — what a{" "}
              <strong>wedding venue near Kruger</strong> actually offers, what a
              Lowveld farm wedding involves, and the practical answers to the
              questions we get asked most: how many guests fit, where they all
              sleep, what it costs, and how to turn one day into a weekend
              nobody wants to end. If you would rather read the feeling of it
              first, our{" "}
              <Link
                href="/blog/the-celebration"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                wedding-weekend story
              </Link>{" "}
              is the place to start; this piece is the plan behind it.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Why a Lowveld farm makes a different kind of wedding venue.
            </H2>
            <p>
              A hotel ballroom is the same in every town. A farm on the edge of
              the Lowveld is not. What sets Kanaan apart as a{" "}
              <strong>wedding venue near Kruger</strong> is not one feature —
              it is that everything happens in one place, over one unhurried
              weekend, with the whole guest list sleeping under the same
              forty-year-old trees. Here is the shape of it in three numbers.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: "Up to 150",
                label: "Guests, your way",
                body: "Intimate indoors, a marquee on the lawn, or the whole camping ground open — the venue grows to fit your family, from a handful to a hundred and fifty.",
              },
              {
                value: "30–45 min",
                label: "To the Kruger gate",
                body: "And 48 minutes from the KMIA airport. Guests fly or drive in, and the wedding becomes a safari-and-waterfalls weekend, not a single day.",
              },
              {
                value: "From R250",
                label: "Per person sharing",
                body: "On-farm accommodation, so everyone stays the night. No shuttles, no taxis, no goodbyes at 11pm — just the fire, and a slow Sunday.",
              },
            ]}
          />
        </Section>

        {/* Inline image — the real ceremony arch on the viewpoint */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.viewpointGazebo.src}
                alt={img.viewpointGazebo.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The viewpoint gazebo above the valley — the ceremony spot, with the
              Lowveld falling away behind you.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">A weekend, not a single day.</H2>
            <p>
              The thing we would change about most weddings is the clock. So
              much money and love poured into a day that is over by midnight,
              with half the guests driving home before the cake is cut. A farm
              wedding fixes that simply: everyone is already here. This is how a
              weekend at Kanaan tends to run.
            </p>
          </div>
          <NumberedList
            variant="timeline"
            items={[
              {
                time: "Friday",
                title: "Arrivals & the first fire",
                body: "Guests roll in through the afternoon, find their rooms or pitch their tents under the mango grove, and the weekend opens with a relaxed rehearsal braai around the fire. The bachelor and bachelorette nights happen right here — no travelling, no schedule.",
              },
              {
                time: "Saturday",
                title: "The day itself",
                body: "A slow morning with your closest people, the ceremony at the viewpoint over the valley, sunset photographs in the Lowveld light, and dancing under the stars in the covered venue or the marquee. Nobody has anywhere to be.",
              },
              {
                time: "Sunday",
                title: "The slow goodbye",
                body: "Coffee, the last of the cake, and a long breakfast on the wedding lawn while everyone who slept on the farm drifts down for one more meal together. The best part of the whole weekend, and the one most venues never give you.",
              },
            ]}
          />
        </Section>

        {/* Inline images — the real reception, and the evening it becomes */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={wedding.reception.src}
                  alt={wedding.reception.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                A real reception at Kanaan — a long table, candles and fairy
                lights under the covered venue.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={wedding.firstDanceNight.src}
                  alt={wedding.firstDanceNight.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                And the evening it turns into — dancing under the bulbs, with the
                grove dark behind.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">How many guests fit — the three sizes.</H2>
            <p>
              The venue is not one fixed room, and that is deliberate. It grows
              to your guest list in three honest stages, and we will tell you
              plainly which one suits the wedding you are describing.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: `Intimate · up to ${site.capacity.wedding.indoor} guests`,
                body: "In the covered main venue, open to the valley view. This is what the farm does most beautifully — a small, warm wedding where every face in the room is someone who matters.",
              },
              {
                title: `Marquee · ${site.capacity.wedding.indoor}–${site.capacity.wedding.withMarquee} guests`,
                body: "A marquee pitched on the wedding lawn under the mango trees, with the covered venue as your all-weather backup. The classic outdoor African wedding, with a roof in reserve.",
              },
              {
                title: `Whole-farm · up to ${site.capacity.wedding.withCamping} guests`,
                body: "For a big family, we open the wider camping ground for the whole weekend, so the celebration and the sleeping both scale up. The farm becomes yours for two nights.",
              },
              {
                title: "Everyone sleeps on-site",
                body: `Around ${site.capacity.sleepingTotal} guests in the lodge rooms and up to ${site.capacity.campingPeople} more camping — so no part of your guest list has to leave early or drive the R40 in the dark.`,
              },
            ]}
          />
        </Section>

        {/* Inline image — the marquee on the lawn (no real marquee photo exists) */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={wedding.marqueeLawn.src}
                alt={wedding.marqueeLawn.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The middle size — a marquee on the wedding lawn under the mango
              trees, with the valley going pink behind it.
            </figcaption>
          </figure>
        </div>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What a farm wedding costs — honestly.</H2>
            <p>
              We are not going to quote you a package price we would have to
              hedge, because our detailed wedding packages are still being
              finalised. What we can do is be straight about where the money
              actually goes at a farm wedding — and why it tends to come in
              gentler than a dedicated wedding estate. The single biggest saving
              is the one you already know: your guests sleep here, so there are
              no shuttles, no taxis and no second venue for the after-party.
            </p>
          </div>
          <DetailTable
            title="Where the money goes at a Lowveld farm wedding (2026)"
            rows={[
              {
                item: "Accommodation on the farm",
                price: "from R250 pps",
                note: "Per person sharing, per night. Everyone stays on-site — the biggest single saving over a venue where guests book hotels and shuttle in.",
              },
              {
                item: "The venue & the lawn",
                price: "Message us",
                note: "Packages are being finalised — we will send you the current venue, marquee and whole-farm options personally, matched to your guest count.",
              },
              {
                item: "Catering & drinks",
                price: "In your control",
                note: "Bring your own caterers and bar, or use our local suppliers. A braai and breakfast can be put on for your guests on request.",
              },
              {
                item: "Décor & flowers",
                price: "In your control",
                note: "The mango grove, the valley view and the escarpment do most of the decorating. Bring your own team or keep it simple — the setting carries it.",
              },
            ]}
          />
          <Callout eyebrow="A budget you can actually see">
            If you want the wider picture — flights, the drive, Kruger fees for
            the guests who make a trip of it — we laid out every real 2026 number
            in the{" "}
            <Link
              href="/blog/cost-of-a-kruger-lowveld-week-2026"
              className="text-ochre hover:text-ochre-deep"
            >
              cost-of-a-Lowveld-week guide
            </Link>
            . Send us your dates and rough numbers and we will build the wedding
            budget with you, plainly.
          </Callout>
        </Section>

        {/* Inline image — bridesmaids in the mango grove */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={wedding.bridesmaids.src}
                alt={wedding.bridesmaids.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              A real Kanaan wedding — the bride and her bridesmaids among the
              forty-year-old mango trees.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Where your guests sleep.</H2>
            <p>
              This is the part that turns a wedding into a weekend. Your people
              do not scatter to hotels the moment the music stops — they walk to
              a room or a tent a few minutes away and rejoin the fire. The lodge
              units hold around {site.capacity.sleepingTotal} guests across
              renovated double rooms, twin rooms with two single beds, and larger
              family units; the camping ground under the mango grove takes up to{" "}
              {site.capacity.campingPeople} more. You can see the rooms and what
              they cost on our{" "}
              <Link
                href="/stay"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                stay page
              </Link>
              , and we will help you block-book the right mix for your list.
            </p>
            <H2 className="mb-4 mt-10">Food, drink and the braai.</H2>
            <p>
              We are flexible about catering: bring your own team, or lean on the
              local suppliers we have built up over our first year here.
              Breakfast and dinner — including a proper South African braai — can
              be put on for your guests on request, and the rehearsal night is
              made for exactly that: a relaxed fire and good meat under the
              stars. Couples who want to cater the big day out and keep the
              Friday and Sunday informal find that balance easy here. If your
              guests want to eat out in town at some point over the weekend, our{" "}
              <Link
                href="/blog/where-to-eat-around-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                honest Hazyview food guide
              </Link>{" "}
              points them at the best of it.
            </p>
          </div>
        </Section>

        {/* Inline image — the covered venue */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.venueCovered.src}
                alt={img.venueCovered.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The covered main venue, open to the Lowveld valley — your
              all-weather heart for the celebration.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The best time of year to marry here.</H2>
            <p>
              The Lowveld gives you two very different weddings depending on the
              month. Our honest favourite is the dry season, roughly{" "}
              <strong>April to September</strong> — mild sunny days, cool clear
              evenings almost free of rain, and the long, crisp views the
              escarpment is famous for. The green summer, November to March, is
              lush and dramatic, but it brings warm, humid afternoons and the
              chance of a short thundershower, so we would plan the marquee or the
              covered venue as your backup. Whichever season calls you, we walk
              through it month by month in our{" "}
              <Link
                href="/blog/when-to-visit-kruger-hazyview-month-by-month"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                seasonal almanac
              </Link>{" "}
              before you commit to a date.
            </p>
            <H2 className="mb-4 mt-10">The legal bit, kept simple.</H2>
            <p>
              To marry legally in South Africa you need a registered marriage
              officer, valid IDs or passports, and — if either of you was married
              before — proof it has ended. Foreign couples marrying here need
              their passports and a letter of no impediment. We are not a
              legal-advice service, so please confirm the current requirements
              with the{" "}
              <a
                href="https://www.gov.za/services/services-residents/relationships/getting-married"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                South African government&rsquo;s &ldquo;getting married&rdquo; page
              </a>{" "}
              and the{" "}
              <a
                href="https://www.gov.za/faq/government-services/how-do-i-obtain-marriage-certificate"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Department of Home Affairs guidance on marriage certificates
              </a>
              . Many couples do the legal signing quietly with their officer and
              keep the farm ceremony purely for the meaning — a good way to keep
              the paperwork off the wedding day itself.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What your guests can do around the wedding.</H2>
            <p>
              Half the joy of a Lowveld wedding is that your guests build a
              little holiday around it. A dawn drive into Kruger, the Panorama
              Route&rsquo;s viewpoints and waterfalls, zip-lines and river
              rafting, and long afternoons by the pool between it all. Two of our
              guides do the heavy lifting for your invitation: send your list to
              our{" "}
              <Link
                href="/blog/things-to-do-around-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                things-to-do-around-Hazyview guide
              </Link>{" "}
              for the whole menu, and the{" "}
              <Link
                href="/blog/kruger-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Kruger-from-Hazyview guide
              </Link>{" "}
              for the guests who want a safari morning. And when the packages are
              ready, they will live on our main{" "}
              <Link
                href="/group-functions"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                weddings &amp; events page
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Questions couples ask us.</H2>
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

        {/* Inline image — Sunday-morning breakfast on the lawn */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={wedding.sundayBreakfast.src}
                alt={wedding.sundayBreakfast.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Sunday morning on the wedding lawn, when nobody is in a hurry to
              leave.
            </figcaption>
          </figure>
        </div>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="A weekend that feels entirely yours"
              thesis="The best wedding venue near Kruger is not the grandest — it is the one where your people arrive on Friday, sleep under the same trees, and leave on Sunday having lived a whole weekend of your love story."
              body={
                <>
                  We did not plan to run a wedding venue, but we have fallen in
                  love with the ones we have hosted — the fires, the marquee on
                  the lawn, the slow Sunday breakfasts. If any of that sounds like
                  the wedding you have been imagining, send us a message. Anneli
                  or Matthew will reply personally, and we will start sketching
                  the weekend with you.
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
                    "South African Government — getting married: requirements & marriage officers",
                  href: "https://www.gov.za/services/services-residents/relationships/getting-married",
                },
                {
                  label:
                    "South African Government — how to obtain a marriage certificate",
                  href: "https://www.gov.za/faq/government-services/how-do-i-obtain-marriage-certificate",
                },
                {
                  label: "SANParks — Kruger National Park (for your guests)",
                  href: "https://www.sanparks.org/parks/kruger",
                },
                {
                  label: "Kruger Mpumalanga International Airport (KMIA)",
                  href: "https://www.kmiairport.co.za/",
                },
                {
                  label:
                    "South African Weather Service — Mpumalanga climate (planning a date)",
                  href: "https://www.weathersa.co.za/",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Let's start sketching your weekend."
          body="Send Anneli or Matthew your dates and rough guest count, and we'll share the current wedding options personally — the venue, the marquee, where everyone sleeps, and how to make the weekend yours. No forms, no auto-responses, just a real conversation about your celebration."
          buttonLabel="Start a wedding enquiry on WhatsApp"
          pageKey="groupFunctions"
        />

        {/* Related */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/the-celebration"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Journal · The Celebration
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  An intimate wedding weekend in the Lowveld
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  The feeling behind the plan — a weekend where everything slows
                  down and the only thing that matters is the two of you.
                </p>
              </Link>
              <Link
                href="/blog/cost-of-a-kruger-lowveld-week-2026"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Planning your budget
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  What a Kruger &amp; Lowveld week really costs
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Every real 2026 number for the guests who make a trip of it —
                  gate fees, flights, the drive and the bed.
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
