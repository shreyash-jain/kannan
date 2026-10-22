import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { img } from "@/lib/images";
import { pro } from "@/data/proPhotos";
import { articleLd, faqLd, eventVenueLd } from "@/lib/jsonld";
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
// SEO focus (search-optimised Guide, brief from marketing, Oct 2026):
//   • Focus keyword:  year-end functions in Hazyview
//   • Secondary:      year-end function venues in Hazyview · corporate
//                     year-end parties in Hazyview · group accommodation in
//                     Hazyview · team-building activities in Hazyview ·
//                     company celebration venues near Kruger National Park ·
//                     year-end getaway in Mpumalanga
//
// Editorial stance: a practical planning guide first, with Kanaan as one
// honest option. We say in the first paragraph that we run a venue, and we
// say plainly what we do NOT sell (no corporate package, décor or
// coordinator; no published venue-hire price).
//
// Imagery: every frame is a real photograph of Kanaan — no AI renders
// (marketing instruction, and the owner rule in CLIENT.md). The two
// graphics are built in code (InfographicGlance, InfographicCountdown), so
// they cannot drift from site.ts and stay crisp at any width.
//
// Facts checked against primary sources, Oct 2026:
//   • Kruger conservation fees reset on 1 Nov each year and the 2026/27
//     South African rate could not be confirmed — so NO gate fee is quoted.
//   • Festive-season day-visitor quotas: SANParks' last notice is Dec 2025;
//     the post says "check", it does not repeat 2025 fees.
//   • Drink-drive limit 0.05 g/100 ml blood, 0.24 mg/1000 ml breath
//     (NRTA s65). Zero tolerance is proposed, NOT law — worded that way.
//   • SARS fringe-benefit guide: no value on meals supplied to employees
//     "on special occasions".
//   • Klein et al. 2009: moderate positive effect, strongest on affective
//     and process outcomes. The role-clarification finding belongs to the
//     1999 review and is deliberately NOT claimed.
//   • 16 Dec 2026 is a Wednesday; 25 Dec a Friday; 26 Dec a Saturday (no
//     day in lieu).
//
// Length: the brief asked for 1,500–2,000 words; this is ~1,700.
// ---------------------------------------------------------------------

const datePublished = "2026-10-22";
const slug = "year-end-functions-hazyview";
const headline =
  "Year-End Functions in Hazyview: How to Plan the Perfect Celebration";

const linkCls =
  "font-medium text-ochre underline decoration-ochre/50 underline-offset-4 hover:text-ochre-deep";
const h3Cls = "mt-8 mb-3 font-display text-xl text-forest-deep md:text-2xl";

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkCls}>
      {children}
    </a>
  );
}

const faqs = [
  {
    q: "What is the best time to book a year-end function in Hazyview?",
    a: "As early as you can, and for a November or December date that means now. Companies all want the same few weeks, and this year 16 December is a Wednesday and Christmas Day a Friday. A date in the first half of December, or a Friday in late November, is easier to get than the last working day.",
  },
  {
    q: "How do I choose a year-end function venue in Hazyview?",
    a: "Start with beds, not seats. Count how many people need a roof for the night, then check the covered space, the catering arrangement, whether you may bring your own caterer, and what happens in a thunderstorm. Budget and location come after that.",
  },
  {
    q: "Can I combine a corporate year-end function with accommodation?",
    a: "Yes, and in the Lowveld we would say you should. It is a long drive from Gauteng and the Lowveld summer is hot. Staying over turns a dinner into a weekend and takes the drive home out of the evening.",
  },
  {
    q: "What activities can companies include in a year-end function?",
    a: "Awards and speeches, a braai, a few games, a morning walk or a swim, and for groups who want more, a day in Kruger, the Panorama Route or one of the adventure activities around Hazyview. Fewer is better than more.",
  },
  {
    q: "Does Kanaan Guest Farm accommodate group functions?",
    a: `Yes. We seat ${site.capacity.wedding.indoor} under a covered, open-sided venue and ${site.capacity.wedding.withMarquee} with a marquee on the lawn, and exclusive use of the farm is possible, subject to dates. We do not sell a corporate package, décor or an event coordinator, so tell us your date and numbers and we will say honestly what is open and what is not.`,
  },
  {
    q: "Can guests stay overnight at Kanaan Guest Farm?",
    a: `Yes: self-catering lodge rooms, twin rooms, an ${site.capacity.backpackersBeds}-bed backpackers room, and camping under the mango trees. In all, around ${site.capacity.sleepingTotal} beds under roof and camping for ${site.capacity.campingPeople}.`,
  },
];

export const metadata = createBlogPostMetadata({
  slug,
  title: "Year-End Functions in Hazyview | Celebration Guide",
  description:
    "Planning year-end functions in Hazyview? Discover venue ideas, team-building activities, accommodation tips and ways to create a memorable celebration.",
  image: img.venueCovered,
  datePublished,
  category: "guide",
});

// --- Infographic 1: the farm at a glance ------------------------------
// Bars are scaled against the largest number (everyone on the property).
// All values come from site.ts so the graphic cannot disagree with the page.
function InfographicGlance() {
  const max = site.capacity.wedding.withCamping;
  const rows: { label: string; value: number; note: string; tone: string }[] = [
    {
      label: "Seated under the roof",
      value: site.capacity.wedding.indoor,
      note: "Covered, open-sided, long tables",
      tone: "bg-forest",
    },
    {
      label: "Seated with a marquee",
      value: site.capacity.wedding.withMarquee,
      note: "Marquee on the lawn, by arrangement",
      tone: "bg-forest",
    },
    {
      label: "Beds under a roof",
      value: site.capacity.sleepingTotal,
      note: "Lodge rooms, twin rooms, backpackers",
      tone: "bg-ochre",
    },
    {
      label: "Camping",
      value: site.capacity.campingPeople,
      note: "Under the mango trees",
      tone: "bg-ochre",
    },
    {
      label: "On the property, all told",
      value: site.capacity.wedding.withCamping,
      note: "With camping, confirmed with us",
      tone: "bg-forest-deep",
    },
  ];
  return (
    <figure className="not-prose my-12 mx-auto w-full max-w-5xl px-5 lg:px-0">
      <div className="rounded-2xl border border-black/5 bg-sand/60 p-6 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ochre">
          The farm at a glance
        </p>
        <h3 className="mt-2 font-display text-2xl text-forest-deep md:text-3xl">
          Seats are one number. Beds are the other.
        </h3>
        <dl className="mt-8 space-y-5">
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid items-center gap-x-6 gap-y-1 md:grid-cols-[15rem_1fr]"
            >
              <dt>
                <span className="block font-display text-base text-forest-deep md:text-lg">
                  {r.label}
                </span>
                <span className="block text-xs text-muted">{r.note}</span>
              </dt>
              <dd className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="block h-7 rounded-full bg-black/5"
                  style={{ width: "100%" }}
                >
                  <span
                    className={`block h-7 rounded-full ${r.tone}`}
                    style={{ width: `${(r.value / max) * 100}%` }}
                  />
                </span>
                <span className="w-14 shrink-0 text-right font-display text-2xl text-forest-deep">
                  {r.value}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <ul className="mt-8 grid gap-3 border-t border-black/10 pt-6 text-sm text-ink/85 sm:grid-cols-3">
          <li>
            <span className="font-display text-xl text-ochre">
              {site.distances.krugerGateMinutesMin}–
              {site.distances.krugerGateMinutesMax} min
            </span>{" "}
            to a Kruger gate
          </li>
          <li>
            <span className="font-display text-xl text-ochre">
              {site.distances.kmiaMinutes} min
            </span>{" "}
            from the airport
          </li>
          <li>
            <span className="font-display text-xl text-ochre">4½ hrs</span>{" "}
            from OR Tambo
          </li>
        </ul>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Capacities as we publish them. A function this size is always
        confirmed with us for your dates.
      </figcaption>
    </figure>
  );
}

// --- Infographic 2: the countdown --------------------------------------
function InfographicCountdown() {
  const steps = [
    {
      when: "Now",
      head: "Date and headcount",
      body: "A best-guess number and two possible dates. Ask what is open.",
    },
    {
      when: "6 weeks out",
      head: "Lock it in",
      body: "Confirm the date, who sleeps where, the deposit and the caterer.",
    },
    {
      when: "3 weeks out",
      head: "Final list",
      body: "Names, dietary needs, lifts, and the wet-weather plan.",
    },
    {
      when: "1 week out",
      head: "The run sheet",
      body: "Send the schedule and directions. Name the sober drivers.",
    },
    {
      when: "The day",
      head: "Arrive early",
      body: "Walk the venue, test the sound, brief whoever is on the braai.",
    },
    {
      when: "Next morning",
      head: "A slow start",
      body: "Late breakfast, a swim, leave by lunch.",
    },
  ];
  return (
    <figure className="not-prose my-12 mx-auto w-full max-w-5xl px-5 lg:px-0">
      <div className="rounded-2xl border border-black/5 bg-bone p-6 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ochre">
          The planning countdown
        </p>
        <h3 className="mt-2 font-display text-2xl text-forest-deep md:text-3xl">
          Six moments that matter, working back from the date
        </h3>
        <ol className="mt-8 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((s, i) => (
            <li key={s.when} className="relative">
              <div className="flex items-center gap-3 lg:block">
                <span
                  aria-hidden
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ochre font-display text-base text-bone"
                >
                  {i + 1}
                </span>
                <span
                  aria-hidden
                  className="mt-3 hidden h-0.5 w-full bg-ochre/30 lg:block"
                />
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-ochre">
                {s.when}
              </p>
              <h4 className="mt-1 font-display text-lg text-forest-deep">
                {s.head}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-ink/85">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Left-hand step is where most of you are today. For a December date,
        &ldquo;now&rdquo; is already late.
      </figcaption>
    </figure>
  );
}

export default function YearEndFunctionsHazyviewPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical planning guide to year-end functions in Hazyview from the family who run Kanaan Guest Farm: how to choose a venue by beds before seats, set a budget, plan the day and the drive home, what to do around Kruger and the Lowveld, and what Kanaan can and cannot offer a group.",
          path: `/blog/${slug}`,
          image: img.venueCovered.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />
      <JsonLd
        data={eventVenueLd({
          name: "Kanaan Guest Farm — year-end functions & group venue",
          description: `A covered, open-sided venue seating ${site.capacity.wedding.indoor} (${site.capacity.wedding.withMarquee} with a marquee) on a fenced, family-run guest farm in Hazyview, with around ${site.capacity.sleepingTotal} beds under roof and camping for ${site.capacity.campingPeople}. ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Kruger National Park gates.`,
          path: "/group-functions",
          image: img.venueLawnWide.src,
          maximumAttendeeCapacity: site.capacity.wedding.withCamping,
        })}
      />

      <article>
        <BlogHero
          image={img.venueCovered.src}
          alt="Year-end function venue and group gathering space at Kanaan Guest Farm in Hazyview — long tables under an open-sided roof with the Lowveld valley beyond."
          eyebrow="Guide · Group functions in Hazyview"
          title="Year-End Functions in Hazyview: How to Plan the Perfect Celebration"
          titleSize="compact"
          intro="Venue, budget, the day itself and the question most organisers leave until too late: who drives home? A planning guide from the family who run a group venue on a Hazyview farm."
          byline="Matthew"
          datePublished={datePublished}
          readingMinutes={8}
        />

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl [&>aside]:mb-4">
            <TLDR
              items={[
                "Year-end functions in Hazyview are mostly overnight affairs, because the drive from Gauteng is about 4½ hours and nobody should do it after a bar tab.",
                "Choose by beds before seats. A venue that seats 120 and sleeps 24 is a venue for 24.",
                `At Kanaan: ${site.capacity.wedding.indoor} seated under cover, ${site.capacity.wedding.withMarquee} with a marquee, around ${site.capacity.sleepingTotal} beds, camping for ${site.capacity.campingPeople}. Exclusive use is possible, subject to dates.`,
                "It is the third week of October. For a November or December date, send your enquiry this week.",
                "Fewer activities, a roof for the rain, and a late breakfast the next morning will do more for the evening than any programme.",
              ]}
            />
            <p>
              Most year-end functions in Hazyview are booked or about to be,
              so if your date is still blank, you are not too late, but you are
              not early either. That shapes everything below.
            </p>
            <p>
              A year-end function is the one evening when the finance team
              and the people from the yard sit at the same table. Done well,
              it says thank you and means it. Done badly (the venue that shuts
              at ten, the speech that outlasts the dessert, half the room
              driving home after the third round) it is the thing they talk
              about in February. The Lowveld suits the first kind. It is far
              enough from the office that nobody checks email, and the evening
              ends when the fire does.
            </p>
            <p>
              We run Kanaan Guest Farm, a family-run farm on the R40 in
              Hazyview, so read this as a guide from people with a venue to
              fill. We will say plainly where we fit and where we do not.
            </p>
          </div>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">Why choose Hazyview for your year-end function?</H2>
            <p>
              Distance does the work. Hazyview is about{" "}
              {site.distances.kmiaMinutes} minutes from Kruger Mpumalanga
              International Airport and roughly 4½ hours from OR Tambo on the
              N4, and the Phabeni and Numbi gates of Kruger are{" "}
              {site.distances.krugerGateMinutesMin}–
              {site.distances.krugerGateMinutesMax} minutes away. Teams who
              come this far stay put. There is no dash back to the city, which
              is exactly why it works for a group.
            </p>
            <p>
              The area has group-friendly venues and the accommodation to
              stretch a dinner into a weekend. The{" "}
              <Link href="/blog/panorama-route-from-hazyview" className={linkCls}>
                Panorama Route
              </Link>{" "}
              starts up the hill, and our guide to{" "}
              <Link href="/blog/things-to-do-around-hazyview" className={linkCls}>
                things to do around Hazyview
              </Link>{" "}
              covers the rest.
            </p>
            <p>
              The honest cost: it is a long drive, and the Lowveld in December
              is hot, humid and given to afternoon thunderstorms. Plan for
              both. A roof and a late afternoon swim solve most of it.
            </p>
          </div>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              How to choose the right year-end function venue in Hazyview
            </H2>

            <h3 className={h3Cls}>Consider your group size</h3>
            <p>
              Estimate high. People bring partners, the intern turns out to be
              coming, and a venue that is exactly full is no fun. Then check
              what &ldquo;capacity&rdquo; means: seated at tables, standing
              with a drink, or sleeping on the property. They are three
              different numbers, and only one of them tells you whether
              everyone can stay.
            </p>

            <h3 className={h3Cls}>Set a realistic event budget</h3>
            <p>
              List it all: venue hire, beds, food, the bar, transport, sound,
              decorations and something for the weather. The lines that get
              forgotten are the rooms for people who would otherwise drive,
              and the bar. On our side, a twin room is R
              {site.pricing.singleNightZAR} per person sharing for one night
              (R{site.pricing.fromZAR} a night for two or more), lodge rooms
              are R300–R350, and breakfast is R
              {site.meals.breakfast.pricePerPersonZAR} a head. A braai dinner
              is cooked to order, so we quote it on request. We do not publish
              a venue-hire price; it depends on your date and numbers.
            </p>
            <p>
              A word for whoever signs the invoice. SARS&rsquo;s{" "}
              <A href="https://www.sars.gov.za/guide-for-employers-in-respect-of-fringe-benefits/">
                fringe-benefit guide
              </A>{" "}
              places no taxable value on meals an employer supplies to
              employees &ldquo;on special occasions&rdquo;. Overnight stays,
              gifts and partners are different questions, so ask your
              accountant before you promise anything.
            </p>

            <h3 className={h3Cls}>Check the venue facilities</h3>
            <p>
              Ask about indoor and outdoor space, who does the catering and
              whether you may bring your own, parking, Wi-Fi, and above all
              whether there is somewhere for everyone to sleep. Here is the
              reason, plainly: South Africa&rsquo;s limit for most drivers is{" "}
              <A href="https://www.arrivealive.co.za/print.aspx?i=1259">
                0.05 g per 100 ml of blood, or 0.24 mg per 1,000 ml of breath
              </A>
              , and the government is working towards zero. That is not the law
              yet, but it tells you where it is heading. A venue with beds on
              site makes the question go away.
            </p>

            <h3 className={h3Cls}>Confirm availability early</h3>
            <p>
              November and December dates go first. 16 December is a Wednesday
              this year, Christmas Day is a Friday and the Day of Goodwill
              falls on a Saturday, so there is no extra Monday off to spread
              the calendar out. Confirm the date, the numbers and what you
              need in writing, and expect to hold a date with a deposit.
            </p>
          </div>
          <Callout eyebrow="The question that decides it">
            Not &ldquo;how many does it seat?&rdquo; but &ldquo;where does
            everyone sleep, and does anyone have to drive home?&rdquo;
          </Callout>
        </Section>

        <div className="mx-auto my-10 max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.venueLawnWide.src}
                  alt="The lawn beside the covered venue at Kanaan Guest Farm — open ground under the mango trees where a marquee goes up for larger year-end functions in Hazyview."
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The lawn. This is where a marquee stands when sixty turns into
                a hundred.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.venueTables.src}
                  alt={img.venueTables.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The covered venue from the other side: bar tables, picnic
                seating and a games corner.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Creative year-end function ideas for companies and groups
            </H2>

            <h3 className={h3Cls}>Corporate year-end parties</h3>
            <p>
              Keep the formal part short. Awards, a few words from whoever
              runs the place, and then let the evening get on with itself.
              Name specific things people did this year. Generic praise is
              forgotten by the starters.
            </p>

            <h3 className={h3Cls}>Outdoor braai celebrations</h3>
            <p>
              A braai solves the biggest catering problem, which is feeding
              forty people who will not all sit down at once. Add music, a
              table of games and a roof over the long table, and you are done.
              It is also the cheapest way to do this well.
            </p>

            <h3 className={h3Cls}>Team-building activities in Hazyview</h3>
            <p>
              Team challenges and outdoor games work, up to a point. The
              best-known review of the research, by{" "}
              <A href="https://doi.org/10.1177/1046496408328821">
                Klein and colleagues (2009)
              </A>
              , found team building has a moderate positive effect on team
              outcomes, strongest on how people feel about each other and how
              they work together. That is a fair description of what a year-end
              function is for. It is also a limit: no game fixes a team that
              has been badly managed for eleven months.
            </p>

            <h3 className={h3Cls}>Multi-day year-end getaways in Mpumalanga</h3>
            <p>
              Arrive Friday afternoon, hold the main event on Saturday and
              leave after a slow Sunday breakfast. People who stay talk to
              colleagues they have never spoken to, and the evening has no
              ending time.
            </p>
          </div>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              What to include in your year-end function planning checklist
            </H2>
          </div>
          <NumberedList
            variant="grid"
            items={[
              { title: "Set the date and confirm the venue", body: "In writing, with the deposit and a named person to deal with." },
              { title: "Build the guest list and send invitations", body: "Ask about partners and dietary needs in the same message." },
              { title: "Establish the budget and track it", body: "One spreadsheet, kept honest, and a 10% buffer you do not tell anyone about." },
              { title: "Arrange food, drinks and dietary needs", body: "Vegetarian and allergy requirements first. We do not offer halaal." },
              { title: "Organise décor, entertainment and activities", body: "Pick two. A third is where schedules collapse." },
              { title: "Confirm transport and accommodation", body: "Who is sleeping where, who is driving, who has the keys." },
              { title: "Prepare for summer rain", body: "Know where sixty people go when the sky turns black at four." },
              { title: "Share the schedule and directions", body: "One page, with the address, the arrival time and a phone number." },
            ]}
          />
          <InfographicCountdown />
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Make your celebration memorable with activities around Hazyview
            </H2>

            <h3 className={h3Cls}>Explore Kruger National Park</h3>
            <p>
              Phabeni and Numbi are{" "}
              {site.distances.krugerGateMinutesMin}–
              {site.distances.krugerGateMinutesMax} minutes from the farm,
              which makes a morning drive a sensible add-on for a group that is
              staying over. Two cautions. SANParks fees reset every 1
              November, so check the live{" "}
              <A href="https://www.sanparks.org/parks/kruger/rates-entry-fees">
                conservation fees
              </A>{" "}
              before you budget. And in the festive season SANParks has
              capped day visitors at each gate, with pre-booking.{" "}
              <A href="https://www.sanparks.org/news/access-for-day-visitors-at-kruger-national-park-during-the-festive-season">
                Read its latest notice
              </A>{" "}
              before you plan a December gate day. Our{" "}
              <Link href="/blog/kruger-from-hazyview" className={linkCls}>
                Kruger from Hazyview
              </Link>{" "}
              guide has the route detail.
            </p>

            <h3 className={h3Cls}>Enjoy outdoor adventures</h3>
            <p>
              Around Hazyview there is the Panorama Route about ninety minutes
              from our gate, plus the river, waterfall and adventure
              activities that tour operators run through the area. Match the
              choice to the group. A fit sales team and a finance department
              of fifty-somethings want different afternoons, and in December
              heat the answer is usually the shorter one.
            </p>

            <h3 className={h3Cls}>Relax and reconnect in nature</h3>
            <p>
              Leave gaps. The conversations people remember happen between the
              scheduled things, at the pool, on a walk, over a second cup of
              coffee. Overcrowd the day and you remove exactly the time the
              function was for.
            </p>
          </div>
        </Section>

        <div className="mx-auto my-10 max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={pro(5708).src}
                alt="The viewpoint on Kanaan's high ground above Hazyview — chairs and a braai stand on a paved ledge with the Lowveld hills running to the escarpment, where a year-end sundowner happens."
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The viewpoint, as it is. A short walk from the venue, and where
              the sundowners end up.
            </figcaption>
          </figure>
        </div>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Why consider Kanaan Guest Farm for your year-end celebration?
            </H2>
            <p>
              We are one option among several, and a particular kind of one: a
              fenced working farm with a covered venue, four kinds of bed and
              two owners who live on site. We are not a conference hotel.
              Here is what that means for a{" "}
              <Link href="/group-functions" className={linkCls}>
                group function
              </Link>
              .
            </p>

            <h3 className={h3Cls}>Flexible spaces for group gatherings</h3>
            <p>
              The covered venue is open-sided, with long tables, a bar counter
              and a games corner, and seats around {site.capacity.wedding.indoor}.
              A marquee on the lawn takes it to about{" "}
              {site.capacity.wedding.withMarquee}, subject to arrangements.
              With camping and overnight arrangements, larger gatherings are
              possible; we confirm the capacity for your dates.
            </p>
          </div>
          <InfographicGlance />
          <div className="prose-kanaan mx-auto max-w-5xl">
            <h3 className={h3Cls}>Accommodation for different budgets</h3>
            <p>
              Self-catering lodge rooms with an en-suite and a kitchenette
              (R300–R350 per person sharing). Twin rooms (R
              {site.pricing.singleNightZAR} for one night, R
              {site.pricing.fromZAR} for longer stays). A shared backpackers
              room with {site.capacity.backpackersBeds} beds. Campsites under
              the mango trees. The point of the spread is that a director and
              a graduate can both come, at a price that suits each of them.
              See the{" "}
              <Link href="/stay" className={linkCls}>
                rooms
              </Link>{" "}
              for photographs.
            </p>

            <h3 className={h3Cls}>Facilities for relaxation and team bonding</h3>
            <p>
              A swimming pool, a pool table and foosball in the entertainment
              room, hiking and mountain-biking trails from the gate, a
              communal braai, free Wi-Fi and secure parking inside the fence.
              See the full list of{" "}
              <Link href="/facilities" className={linkCls}>
                facilities
              </Link>
              .
            </p>

            <h3 className={h3Cls}>Make it more than a one-day celebration</h3>
            <p>
              A Friday arrival, the main event on Saturday and a slow Sunday
              morning is our suggestion. Meals are arranged in advance:
              breakfast at R{site.meals.breakfast.pricePerPersonZAR} a head, a
              braai dinner on order, or bring your own caterer and use the
              kitchen. Ask about exclusive use of the farm, availability and
              catering when you enquire.
            </p>
            <p>
              What we do not offer, so nobody is surprised: no corporate
              package, no décor, no event coordinator, no boma. We have a
              fire, a roof and a lot of space. The rest is yours to bring.
            </p>
          </div>
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Sample itinerary for a year-end function in Hazyview
            </H2>
            <p>
              A sample day. Move it around to suit the venue, the season and
              your group. In December, shift the games to the morning and put
              the awards in the shade.
            </p>
          </div>
          <NumberedList
            variant="timeline"
            items={[
              { time: "10:00", title: "Guests arrive", body: "Welcome refreshments, name tags, directions to rooms." },
              { time: "11:00", title: "Games and group activities", body: "Team challenges or a walk. Keep them short." },
              { time: "13:00", title: "Lunch and networking", body: "A long lunch, in the shade, with nowhere to be." },
              { time: "14:00", title: "Awards, speeches and recognition", body: "Name the specific thing each person did." },
              { time: "15:00", title: "Swim, rest, wander", body: "Pool, trails or a sleep. Nobody needs to be anywhere." },
              { time: "17:00", title: "Braai or group dinner", body: "Fire lit early so the meat is ready before the light goes." },
              { time: "19:00", title: "Music and celebration", body: "Everyone sleeps on site, so there is no reason to stop." },
            ]}
          />
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Common mistakes to avoid when planning a year-end function
            </H2>
          </div>
          <NumberedList
            items={[
              { title: "Booking too late", body: "The good dates go first, and in the festive season they go early." },
              { title: "Underestimating the budget", body: "The bar, transport and beds for the drivers are where it goes wrong." },
              { title: "Choosing a venue without checking capacity", body: "Seats, beds and standing room are different numbers." },
              { title: "Forgetting dietary and accessibility needs", body: "Ask in the invitation, not on the night." },
              { title: "Having no wet-weather plan", body: "Lowveld summer storms arrive quickly. Know where the long table goes." },
              { title: "Scheduling too much", body: "Two activities and a good dinner beats five and a rush." },
              { title: "Leaving transport and rooms until last", body: "Confirm both at least three weeks before." },
            ]}
          />
        </Section>

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <H2 className="mb-4">
              Frequently asked questions about year-end functions in Hazyview
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

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <ClosingBlock
              title="Plan a year-end celebration to remember in Hazyview"
              thesis="A good year-end function is decided by two things you can settle this week: the date, and where everyone sleeps."
              body={
                <>
                  Everything else (the games, the speeches, the menu) can be
                  fixed a fortnight before. If you are planning year-end
                  functions in Hazyview, send us the date, the rough numbers
                  and whether anyone needs a bed, and Anneli or Matthew will
                  reply personally with what is open and an honest price.
                </>
              }
            />
            <p className="font-display text-base italic text-forest-deep">
              — Matthew
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-5xl">
            <Sources
              items={[
                {
                  label: "SARS — Guide for Employers in respect of Fringe Benefits (meals and refreshments)",
                  href: "https://www.sars.gov.za/guide-for-employers-in-respect-of-fringe-benefits/",
                },
                {
                  label: "Arrive Alive — drink-driving limits under s65 of the National Road Traffic Act",
                  href: "https://www.arrivealive.co.za/print.aspx?i=1259",
                },
                {
                  label: "Klein et al. (2009), Does team building work? Small Group Research 40(2)",
                  href: "https://doi.org/10.1177/1046496408328821",
                },
                {
                  label: "SANParks — Kruger conservation fees (reset each 1 November)",
                  href: "https://www.sanparks.org/parks/kruger/rates-entry-fees",
                },
                {
                  label: "SANParks — festive-season day-visitor access at Kruger",
                  href: "https://www.sanparks.org/news/access-for-day-visitors-at-kruger-national-park-during-the-festive-season",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Planning your next year-end function in Hazyview?"
          body="Tell us the date, roughly how many of you there are and whether anyone needs a bed. We will come back with what is open, which rooms, and an honest number."
          buttonLabel="Enquire on WhatsApp"
          pageKey="groupFunctions"
        />

        <Section>
          <div className="mx-auto max-w-5xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/group-functions/team-family"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Group Functions · Teams &amp; families
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Team &amp; family gatherings at Kanaan
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  The venue, the beds and the fire, laid out for the organiser.
                </p>
              </Link>
              <Link
                href="/blog/hazyview-christmas-family-vacation"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Festive season
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Planning your Lowveld Christmas family holiday
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  What the Lowveld is like in December, and how to plan for it.
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
