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
// ANGLE (owner voice note, pasted 2026-10-26 — supersedes the first draft):
// year-end functions are LOCAL, people within about 50 km, so sleeping over
// is optional, not the point. The real selling points are: affordable (very
// cheap against other venues), guests may BRING THEIR OWN ALCOHOL, kitchen
// and braai facilities, room for a big crowd, nice affordable accommodation
// close by for those who want it, and the setting in the heart of the Lowveld.
//
// OPEN QUESTION — capacity: the voice note says the venue takes "comfortably
// up to 880 people". site.ts says 60 seated / 100 with a marquee / 150 on the
// property. The page uses site.ts until the owner confirms the real figure.
//
// Editorial stance: practical planning guide first, Kanaan as one honest
// option. We say up front that we run a venue and say what we do NOT sell
// (no corporate package, décor or coordinator; no published hire price).
//
// Imagery: real Kanaan photographs only — no AI renders. The two graphics
// are built in code so they cannot drift from site.ts.
//
// Facts checked against primary sources, Oct 2026:
//   • Kruger conservation fees reset 1 Nov each year; the 2026/27 South
//     African rate was not confirmed — NO gate fee is quoted.
//   • Drink-drive limit 0.05 g/100 ml blood, 0.24 mg/1000 ml breath (NRTA
//     s65); zero tolerance is proposed, NOT law.
//   • SARS fringe-benefit guide: no value on meals supplied to employees
//     "on special occasions".
//   • Klein et al. 2009: moderate positive effect of team building,
//     strongest on affective and process outcomes.
//   • 16 Dec 2026 Wednesday; 25 Dec Friday; 26 Dec Saturday (no day in lieu).
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
    a: "As early as you can, and for a November or December date that means now. Every company in the Lowveld wants the same few weeks, and this year 16 December is a Wednesday and Christmas Day a Friday. A Friday in late November or the first half of December is easier to get than the last working day.",
  },
  {
    q: "How do I choose a year-end function venue in Hazyview?",
    a: "Start with what the evening will really cost per head, then check the numbers: how many it holds, whether there is a roof for the rain, a kitchen and a braai, whether you may bring your own caterer and your own drinks, and parking. Location matters less than people think when most of your guests live within an hour.",
  },
  {
    q: "Can I combine a corporate year-end function with accommodation?",
    a: "Yes, if some of your people want it. Most year-end guests live locally and go home, but anyone coming from further, or anyone who would rather not drive after a few drinks, can stay on the farm in a lodge room, twin room, backpackers bed or tent, and the cost stays low.",
  },
  {
    q: "What activities can companies include in a year-end function?",
    a: "Awards and speeches, a braai, a few games, music, a swim before the evening, and for groups who want more, a morning walk on the farm. Fewer is better than more.",
  },
  {
    q: "Does Kanaan Guest Farm accommodate group functions?",
    a: `Yes. We seat ${site.capacity.wedding.indoor} under a covered, open-sided venue and ${site.capacity.wedding.withMarquee} with a marquee on the lawn, with a kitchen and braai facilities on site, and you may bring your own drinks. Exclusive use of the farm is possible, subject to dates. We do not sell a corporate package, décor or an event coordinator, so tell us your date and numbers and we will say honestly what is open.`,
  },
  {
    q: "Can I bring my own alcohol to a function at Kanaan?",
    a: "Yes, and it is one of the biggest ways a function here saves money. The one rule: there is no alcohol at the swimming pool. Please also arrange sober drivers or a room for anyone who needs one.",
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

// --- Infographic 1: why it costs less here -----------------------------
// What a function here asks of the budget, as a plain checklist graphic.
function InfographicSaving() {
  const items = [
    {
      head: "Bring your own drinks",
      body: "The bar is usually the biggest line on a function budget. Here it is yours to stock.",
    },
    {
      head: "Kitchen and braai on site",
      body: "Cater yourselves, hire a caterer, or ask us to cook. A braai feeds a crowd cheaply.",
    },
    {
      head: "Room for a crowd",
      body: `Seated ${site.capacity.wedding.indoor} under the roof, ${site.capacity.wedding.withMarquee} with a marquee, confirmed for your date.`,
    },
    {
      head: "Beds only for those who want them",
      body: `From R${site.pricing.fromZAR} per person sharing, so the drivers and the far-away guests are covered without a big bill.`,
    },
  ];
  return (
    <figure className="not-prose my-12 mx-auto w-full max-w-5xl px-5 lg:px-0">
      <div className="rounded-2xl border border-black/5 bg-sand/60 p-6 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ochre">
          Where the saving comes from
        </p>
        <h3 className="mt-2 font-display text-2xl text-forest-deep md:text-3xl">
          Four things that make a function here cheaper
        </h3>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <li key={s.head}>
              <span
                aria-hidden
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ochre font-display text-lg text-bone"
              >
                {i + 1}
              </span>
              <h4 className="mt-3 font-display text-lg text-forest-deep">
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
        We do not publish a venue-hire price; it depends on your date and
        numbers. Ask and we will give you an honest one.
      </figcaption>
    </figure>
  );
}

// --- Infographic 2: the farm at a glance ------------------------------
// Bars scale against the largest number. All values come from site.ts.
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
          Room for the whole company, and a bed for anyone who wants one
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
            <span className="font-display text-xl text-ochre">R40</span>{" "}
            right to our gate
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

// --- Infographic 3: the countdown --------------------------------------
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
      body: "Confirm the date, the deposit, the caterer and the drinks.",
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
      head: "Pack up kindly",
      body: "Rubbish out, borrowed things back, thank the host.",
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
        For a December date, &ldquo;now&rdquo; is already late.
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
            "A practical planning guide to year-end functions in Hazyview from the family who run Kanaan Guest Farm: how to choose an affordable venue, why bringing your own drinks and using a braai and kitchen cuts the cost, how to plan the day, and what Kanaan can and cannot offer a group.",
          path: `/blog/${slug}`,
          image: img.venueCovered.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />
      <JsonLd
        data={eventVenueLd({
          name: "Kanaan Guest Farm — year-end functions & group venue",
          description: `A covered, open-sided venue seating ${site.capacity.wedding.indoor} (${site.capacity.wedding.withMarquee} with a marquee) on a fenced, family-run guest farm in Hazyview, with a kitchen, braai facilities, around ${site.capacity.sleepingTotal} beds under roof and camping for ${site.capacity.campingPeople}. ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from the Kruger National Park gates.`,
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
          intro="Most year-end functions in the Lowveld are local, so the questions are price, space and who brings the drinks. A planning guide from the family who run a group venue on a Hazyview farm."
          byline="Matthew"
          datePublished={datePublished}
          readingMinutes={7}
        />

        <Section className="pb-0!">
          <div className="prose-kanaan mx-auto max-w-5xl [&>aside]:mb-4">
            <TLDR
              items={[
                "Year-end functions in Hazyview are mostly local, with guests coming from within about 50 km, so most people go home the same night. A bed is optional.",
                "The case for Kanaan is cost: you may bring your own alcohol, there is a kitchen and braai on site, and the venue is far cheaper than a hotel function room.",
                `Seated ${site.capacity.wedding.indoor} under cover, ${site.capacity.wedding.withMarquee} with a marquee, exclusive use of the farm possible, subject to dates.`,
                "For anyone who wants to stay, affordable lodge rooms, twin rooms, backpackers beds and camping are right there.",
                "For a November or December date, send your enquiry this week.",
              ]}
            />
            <p>
              A year-end function is the one evening when the finance team and
              the people from the yard sit at the same table. Done well, it
              says thank you and means it. Done badly (the venue that shuts at
              ten, the bar bill nobody expected, the speech that outlasts the
              dessert) it is the thing they talk about in February.
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
              Because your people are already here. A year-end function in the
              Lowveld is usually staff, partners and a few clients from
              Hazyview, White River, Sabie and the farms around, most of them
              within about 50 km. Nobody needs a flight or a hotel, so what you
              spend goes on the evening itself.
            </p>
            <p>
              Hazyview is also pleasant to be in. It sits in the heart of the
              Lowveld, with Kruger&rsquo;s Phabeni and Numbi gates{" "}
              {site.distances.krugerGateMinutesMin}–
              {site.distances.krugerGateMinutesMax} minutes away, the{" "}
              <Link href="/blog/panorama-route-from-hazyview" className={linkCls}>
                Panorama Route
              </Link>{" "}
              up the hill, and plenty more in our guide to{" "}
              <Link href="/blog/things-to-do-around-hazyview" className={linkCls}>
                things to do around Hazyview
              </Link>
              . For the few who do travel in, it makes a good excuse for a
              weekend.
            </p>
            <p>
              The honest cost: the Lowveld in December is hot, humid and given
              to afternoon thunderstorms. A roof over the long table and a
              swim before the evening solve most of it.
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
              what &ldquo;capacity&rdquo; means: seated at tables, or standing
              with a drink. Ask for both numbers.
            </p>

            <h3 className={h3Cls}>Set a realistic event budget</h3>
            <p>
              List it all: venue hire, food, drinks, sound, decorations and
              something for the weather. The bar is usually the biggest line,
              and it is where a venue that lets you bring your own drinks saves
              the most. We do. A kitchen and braai facilities are on site, so
              you can cook yourselves, bring a caterer, or ask us to cook:
              breakfast is R{site.meals.breakfast.pricePerPersonZAR} a head and
              a braai dinner is cooked to order, so we quote it on request. We
              do not publish a venue-hire price because it depends on your date
              and numbers.
            </p>
            <p>
              A word for whoever signs the invoice. SARS&rsquo;s{" "}
              <A href="https://www.sars.gov.za/guide-for-employers-in-respect-of-fringe-benefits/">
                fringe-benefit guide
              </A>{" "}
              places no taxable value on meals an employer supplies to
              employees &ldquo;on special occasions&rdquo;. Gifts, partners and
              overnight stays are different questions, so ask your accountant
              before you promise anything.
            </p>

            <h3 className={h3Cls}>Check the venue facilities</h3>
            <p>
              Ask about indoor and outdoor space, whether there is a kitchen
              and a braai, whether you may bring your own caterer and your own
              drinks, parking and Wi-Fi. If drinks are involved, ask how
              people get home. South Africa&rsquo;s limit for most drivers is{" "}
              <A href="https://www.arrivealive.co.za/print.aspx?i=1259">
                0.05 g per 100 ml of blood, or 0.24 mg per 1,000 ml of breath
              </A>
              , and the government is working towards zero. That is not the law
              yet, but it tells you where it is heading. Name the sober
              drivers beforehand, or have a few beds on hand.
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
          <Callout eyebrow="Where the saving is">
            Bring your own drinks, cook on the braai, and only pay for beds
            for the people who need them.
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
          <InfographicSaving />
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
              A braai solves the biggest catering problem, which is feeding a
              crowd who will not all sit down at once. Add music, a table of
              games and a roof over the long table, and you are done. It is
              also the cheapest way to do this well.
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

            <h3 className={h3Cls}>Year-end getaways in Mpumalanga</h3>
            <p>
              For the group that wants more than an evening, make a weekend of
              it: arrive Friday, hold the main event on Saturday and leave
              after a slow Sunday breakfast. It suits smaller teams and anyone
              travelling in, and the accommodation is there if you want it.
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
              { title: "Arrange food, drinks and dietary needs", body: "Vegetarian and allergy requirements first. Decide who supplies the drinks." },
              { title: "Organise décor, entertainment and activities", body: "Pick two. A third is where schedules collapse." },
              { title: "Confirm transport and accommodation", body: "Who is driving, who has had a drink, who needs a bed." },
              { title: "Prepare for summer rain", body: "Know where everyone goes when the sky turns black at four." },
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
              which makes a morning drive a sensible add-on for guests who
              are staying over. Two cautions. SANParks fees reset every 1
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
              fenced working farm with a covered venue and two owners who live
              on site. We are not a conference hotel. Here is what that means
              for a{" "}
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
              Larger gatherings may be possible; we confirm the capacity for
              your date.
            </p>
            <p>
              Two things set us apart on cost. You may bring your own alcohol
              (the one rule is no alcohol at the swimming pool). And there is a
              kitchen and braai facilities, so you can cater yourselves or
              bring your own caterer.
            </p>
          </div>
          <InfographicGlance />
          <div className="prose-kanaan mx-auto max-w-5xl">
            <h3 className={h3Cls}>Accommodation for different budgets</h3>
            <p>
              Most of your guests will go home. For those who want to stay,
              there are self-catering lodge rooms with an en-suite and a
              kitchenette (R300–R350 per person sharing), twin rooms (R
              {site.pricing.singleNightZAR} for one night, R
              {site.pricing.fromZAR} for longer stays), a shared backpackers
              room with {site.capacity.backpackersBeds} beds, and campsites
              under the mango trees. The spread means a director and a
              graduate can both stay, at a price that suits each of them. See
              the{" "}
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
              If your group wants to stretch it out, an arrival-day gathering,
              the main celebration and a relaxed departure morning works well.
              Meals can be arranged in advance, or you can self-cater. When you
              enquire, ask about exclusive use of the farm, availability,
              catering and suitable accommodation.
            </p>
            <p>
              What we do not offer, so nobody is surprised: no corporate
              package, no décor, no event coordinator, no boma. We have a
              fire, a roof, a kitchen and a lot of space. The rest is yours to
              bring.
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
              { time: "10:00", title: "Guests arrive", body: "Welcome refreshments, name tags, directions to the venue." },
              { time: "11:00", title: "Games and group activities", body: "Team challenges or a walk. Keep them short." },
              { time: "13:00", title: "Lunch and networking", body: "A long lunch, in the shade, with nowhere to be." },
              { time: "14:00", title: "Awards, speeches and recognition", body: "Name the specific thing each person did." },
              { time: "15:00", title: "Swim, rest, wander", body: "Pool, trails or a sit in the shade." },
              { time: "17:00", title: "Braai or group dinner", body: "Fire lit early so the meat is ready before the light goes." },
              { time: "19:00", title: "Music and celebration", body: "Drivers sorted, music on, the evening is yours." },
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
              { title: "Underestimating the budget", body: "The bar and the food are where it goes wrong. Bring your own drinks if the venue allows it." },
              { title: "Choosing a venue without checking capacity", body: "Seats and standing room are different numbers." },
              { title: "Forgetting dietary and accessibility needs", body: "Ask in the invitation, not on the night." },
              { title: "Having no wet-weather plan", body: "Lowveld summer storms arrive quickly. Know where the long table goes." },
              { title: "Scheduling too much", body: "Two activities and a good dinner beat five and a rush." },
              { title: "Leaving the drive home to chance", body: "Name the sober drivers, or keep a few beds in reserve." },
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
              thesis="A good year-end function is decided by two things you can settle this week: the date, and what it will cost per head."
              body={
                <>
                  Everything else (the games, the speeches, the menu) can be
                  fixed a fortnight before. If you are planning year-end
                  functions in Hazyview, send us the date and the rough
                  numbers, and Anneli or Matthew will reply personally with
                  what is open and an honest price.
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
          body="Tell us the date and roughly how many of you there are. We will come back with what is open and an honest number."
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
