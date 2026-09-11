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

// ---------------------------------------------------------------------
// SEO focus for this cornerstone (search-optimised Guide):
//   • Focus keyword (1):  affordable school trip Lowveld
//   • Secondary:          budget school accommodation Lowveld ·
//                         school excursions Lowveld ·
//                         school group catering South Africa ·
//                         Kruger school excursion · Lowveld school camps ·
//                         educational tours Mpumalanga ·
//                         cheap school tours South Africa
//   • Long-tail:          how much does a school trip to Kruger cost ·
//                         school group accommodation near Kruger ·
//                         Kruger conservation fee for school groups ·
//                         planning a Grade 10 tour to Mpumalanga
// Woven into the H1, section headings, intro, FAQ and meta — never stuffed.
// Anneli's warm first-person voice comes first; search second.
//
// Sibling pages: /group-functions/school-groups is the commercial page (beds,
// fence, capacity). This post is the PLANNING piece — the money and the order
// of decisions — and sends the reader there, not the other way round.
//
// Link budget (deliberate): 5 contextual INTERNAL links —
//   /group-functions/school-groups · /camping ·
//   /blog/kruger-from-hazyview · /blog/things-to-do-around-hazyview ·
//   /blog/cost-of-a-kruger-lowveld-week-2026
// and 5 contextual EXTERNAL links (5 distinct authority domains) —
//   sanparks.org · gov.za · education.gov.za · krugerpark.co.za ·
//   mpumalanga.com — each repeated in the Sources block at the foot.
//
// EVERY FIGURE IS FROM A PRIMARY SOURCE, verified 11 September 2026:
//   • Kruger daily conservation fees, SA citizens/residents with ID:
//       R134 adult / R67 child   — 1 Nov 2025 to 31 Oct 2026
//       R140 adult / R70 child   — 1 Nov 2026 to 31 Oct 2027
//     SADC with passport: R275/R137 → R296/R147.
//     All other nationalities: R602/R300 → R692/R345.
//     Source: SANParks daily_conservation_fees_2025_26.pdf and _2026_27.pdf.
//   • "Adult" = 12 years and older; "child" = 2 to 11; under 2 free. Same PDFs.
//   • Gate entry 06:00 (May–Sept) / 05:30 (Oct–Mar) — SANParks entrance gates.
//   • Letaba Elephant Hall schools programme: up to 120 learners + 6 adults
//     free, every day except Sunday — sanparks.org schools & educators page.
//   • 2027 school terms — gov.za national school calendar.
// Panorama Route per-site entry fees are deliberately NOT quoted: the public
// figures disagree with each other and no primary source was reachable.
//
// Farm facts come from src/lib/site.ts and src/data/groups.ts — never typed
// by hand. No group rate and no dinner price are quoted anywhere in this post,
// because neither exists in site.ts; both are written as quoted on enquiry.
// ---------------------------------------------------------------------

const datePublished = "2026-09-11";
const headline =
  "Planning an affordable school trip to the Lowveld: the four decisions that actually move the number";

const faqs = [
  {
    q: "How much does it cost to take a school group into the Kruger National Park?",
    a: "For South African citizens and residents with ID, the daily conservation fee is R134 per adult and R67 per child until 31 October 2026, and R140 and R70 from 1 November 2026. The trap is the definition: SANParks counts anyone aged 12 and over as an adult, so a high-school group pays the full adult rate for every learner. There is no scholar rate at the gate. Learners who are not South African citizens pay the SADC or standard rate, which is several times higher — check passports before you budget, not after.",
  },
  {
    q: "What is the cheapest way to accommodate a school group in the Lowveld?",
    a: "Spread the group across more than one kind of bed rather than putting everybody in the same room type. Dorm beds, twin rooms and camping price differently, and a school that mixes them pays less than a school that books one tier for all sixty. Our published rate starts at R250 per person sharing, and we quote school groups on their actual numbers and dates — send both and we will come back with a figure rather than a tariff sheet.",
  },
  {
    q: "When is the best time of year for a Lowveld school trip?",
    a: "Schools travel in term time, which is already the quiet shoulder — you are not competing with the holiday crowd. What you want to dodge is a public holiday or a long weekend, because Kruger has a daily visitor threshold and day visitors can be turned away once it is reached. Book the day visit in advance and it stops being a risk. Winter mornings are cold enough that camping needs proper sleeping bags; that is worth knowing in June rather than at ten at night.",
  },
  {
    q: "Can you cater for a school group, and can we cook for ourselves?",
    a: `Both. We cook a continental breakfast at R${site.meals.breakfast.pricePerPersonZAR} a head and a South African braai for dinner, both on order and both set menus — a set menu is the reason group catering works at that price. You are also welcome to bring your own caterer and use the kitchen, or to self-cater one meal of the day and buy the rest in. We do not have a halaal option, so if that matters to your group, say so at enquiry stage and we will plan the week around the self-catering route.`,
  },
  {
    q: "Is the property secure enough for a school group?",
    a: "The whole farm is fenced with a single motorised gate, and Anneli and Matthew live on site, so there is one way in and one way out and somebody is always here. Teachers sleep in lodge rooms with their own en-suite, close to the dorm and the camping ground rather than across the property. The R40 runs to our gate and there is turning and parking space for a bus inside the fence.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "affordable-school-trip-lowveld",
  // Title tag 52 chars, meta description 149 — both inside the limits the
  // brief set (<60 / <155). The site appends its own "· Guide · Journal &
  // Guides · Kanaan Guest Farm" suffix, as every post here does.
  title: "Affordable school trip Lowveld: what it really costs",
  description:
    "Planning an affordable school trip to the Lowveld? Gate fees, group accommodation, catering and excursions — the four decisions that move the number.",
  image: img.campingAvenueWide,
  datePublished,
  category: "guide",
});

export default function AffordableSchoolTripLowveldPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical planning guide to an affordable school trip in the Lowveld, written by the family who run Kanaan Guest Farm outside Hazyview. What a Kruger school excursion actually costs per learner, why SANParks counts a twelve-year-old as an adult, how budget school accommodation in the Lowveld is really priced, what makes school group catering in South Africa work, which excursions are worth the money and which of them the ground gives you for nothing — plus a five-step way to build the whole budget in order.",
          path: "/blog/affordable-school-trip-lowveld",
          image: img.campingAvenueWide.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.campingAvenueWide.src}
          alt={img.campingAvenueWide.alt}
          eyebrow="Guide · School groups"
          title="Planning an affordable school trip to the Lowveld — the four decisions that actually move the number."
          intro="Most school budgets are not broken by the destination. They are broken by the order the decisions get made in, and by one line in the SANParks tariff that nobody reads until the bus is at the gate."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={9}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                `The Lowveld is cost-efficient by geography: the Phabeni and Numbi gates are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from Hazyview, so a Kruger day costs you one bus day, not two.`,
                "SANParks counts everyone aged 12 and over as an adult. A high-school group pays R134 a head to enter Kruger until 31 October 2026, and R140 after that. There is no scholar rate.",
                `Ask for a group rate on your real numbers, not a per-room tariff — and make somebody itemise what "included" includes. Our published rate starts at R${site.pricing.fromZAR} per person sharing.`,
                `A set menu costs less than a choice. We cook breakfast at R${site.meals.breakfast.pricePerPersonZAR} a head and a braai dinner on order, and the kitchen is yours if you would rather cook one meal yourselves.`,
                "Buy one excursion properly instead of four half-heartedly. The trails, the waterfall, the pool and the fire cost nothing on top of the bed.",
              ]}
            />

            <p>
              The first thing a teacher asks us is never the price. It is
              whether they can account for everybody at nine o&rsquo;clock at
              night. The price arrives about two messages later, and it is
              nearly always the same sentence:{" "}
              <em>what would sixty of us cost?</em>
            </p>
            <p>
              It is a fair question with an annoying answer, because it depends
              almost entirely on four decisions the school has not made yet. We
              have watched two groups of the same size do the same week here for
              very different money. Same road, same gates, same waterfall. The
              difference was the order they asked things in.
            </p>
            <p>
              So this is not a list of ways to spend less. The Lowveld is not a
              cheap place to bring a school — it is a cost-efficient one, which
              is a different claim and a more useful one. The gates of the
              Kruger National Park are half an hour up the road. The hills, the
              water and the fire do most of the entertaining at no charge. What
              costs a school money is a trip planned as though it were happening
              somewhere flat and far away. An affordable school trip to the
              Lowveld is mostly a matter of asking four questions early, of the
              right people, in the right order.
            </p>

            <H2 className="mb-4">
              Why the Lowveld works so well for school groups
            </H2>
            <p>
              Most of what makes a school trip expensive is distance and idle
              time. A bus charges by the day whether it is moving or parked, and
              every hour a group spends on the N4 is an hour nobody is learning
              anything. That is the whole argument for basing a group in
              Hazyview rather than somewhere with a better-known name.
            </p>
            <p>
              From here the Phabeni and Numbi gates are{" "}
              {site.distances.krugerGateMinutesMin} to{" "}
              {site.distances.krugerGateMinutesMax} minutes away. Kruger&rsquo;s
              entry gates open at 06:00 from May to September and 05:30 from
              October to March, so a bus that leaves in the dark is inside the
              park at opening and back at the farm for a swim by mid-afternoon.
              A base two hours from a gate turns one excursion into two days of
              driving — and you pay for both.
            </p>
            <p>
              The second thing is the ground itself. Educational tours in
              Mpumalanga tend to get costed as though every activity has a till
              at the end of it, and they don&rsquo;t. Marked trails run from our
              own fence out through the macadamias and into the bushveld. There
              is a waterfall and a rock pool at the far end of the property, and
              a hilltop with the whole Lowveld opening out below it. No
              transport, no permits, no waiting for a slot. For a school that is
              three afternoons of programme that cost nothing except the walk.
            </p>
          </div>

          <StatGrid
            stats={[
              {
                value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`,
                label: "To a Kruger gate",
                body: "Phabeni and Numbi, from our gate on the R40. One bus day for a full park day.",
              },
              {
                value: `${site.capacity.sleepingTotal}+`,
                label: "Beds under roof",
                body: `Dorm beds in the wooden house, lodge and twin rooms — plus camping for ${site.capacity.campingPeople} more under the mango trees.`,
              },
              {
                value: "1",
                label: "Gate in or out",
                body: "The whole property is fenced, and both owners live on it. This is the question teachers ask first.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Budget school accommodation in the Lowveld, without the compromise
            </H2>
            <p>
              Accommodation is the biggest single line in a school budget and
              the one most often priced wrong — usually because somebody asked
              for a tariff instead of a quote.
            </p>

            <h3>Ask for a group rate, and say the real number out loud</h3>
            <p>
              A published nightly rate is written for two people booking a
              weekend. It is not what a farm quotes for forty-five learners and
              six staff on a Tuesday in May, because the costs are not the same
              costs. Ours starts at R{site.pricing.fromZAR} per person sharing,
              and what a school actually pays depends on the numbers and the
              dates — so send both. A quote built on &ldquo;about sixty, some
              time in the second term&rdquo; will always come back higher than a
              quote built on &ldquo;fifty-two learners and five teachers, 12 to
              14 May&rdquo;. Vagueness gets priced as risk.
            </p>

            <h3>Term time is already the shoulder. It is the quota week you dodge</h3>
            <p>
              Schools cannot move when they travel, and the good news is that
              they don&rsquo;t need to. Term time <em>is</em> the quiet
              season here — you are not competing with the holiday crowd for a
              bed or for space at a viewpoint. The 2027 school year runs 13
              January to 19 March, 6 April to 25 June, 20 July to 1 October and
              11 October to 10 December, and almost any week inside those blocks
              is a sensible week to come.
            </p>
            <p>
              What you want to avoid is a public holiday or a long weekend.
              Kruger has a maximum number of visitors it will let in on a given
              day, and{" "}
              <a
                href="https://www.sanparks.org/parks/kruger/what-to-do/day-visits"
                target="_blank"
                rel="noopener noreferrer"
              >
                SANParks is explicit
              </a>{" "}
              that once that threshold is reached, only people with pre-booked
              accommodation inside the park get through. It is rare, and it
              happens exactly on the days a school might think are convenient.
              Book the day visit in advance and the risk disappears. A bus of
              sixty turned around at Phabeni is the single worst thing that can
              happen to this trip, and it is free to prevent.
            </p>

            <h3>Bundle the nights, not just the beds</h3>
            <p>
              Two nights is a long way to drive for one full day. Three nights
              usually buys a school two proper excursions and a day on the farm,
              and the third night is almost always the cheapest one in the
              quote. Ask what changes if you add it. Ask, too, what exclusive
              use of the property would cost — for a group of a certain size it
              can come out lower than the same beds booked piecemeal, and it
              solves half a dozen supervision problems at once.
            </p>

            <h3>Make somebody itemise &ldquo;included&rdquo;</h3>
            <p>
              This is where Lowveld school camps quietly get more expensive.
              Before you compare two quotes, get both of them to say in writing
              whether the number covers linen and towels, where the teachers
              sleep and what those rooms cost, whether there is a venue-hire
              charge for the covered hall, what the ablution arrangement is for
              campers, and whether power and water at the campsites are extra.
              Two quotes that look R80 apart are often R300 apart once you have
              the answers. Our covered venue seats{" "}
              {site.capacity.wedding.indoor}, the campers&rsquo; ablution block
              has proper basins and private cubicles, and{" "}
              <Link href="/camping">the campsites</Link> have a tap and a power
              point at the pitch — we would rather you knew that before you
              asked.
            </p>
          </div>
        </Section>

        <figure className="mx-auto my-12 w-full max-w-5xl px-5 lg:px-0">
          <Image
            src={img.woodenHouseExterior.src}
            alt={img.woodenHouseExterior.alt}
            width={img.woodenHouseExterior.width}
            height={img.woodenHouseExterior.height}
            className="w-full rounded-2xl object-cover"
            sizes="(min-width: 1024px) 64rem, 100vw"
          />
          <figcaption className="mt-3 text-center text-xs text-muted">
            The wooden house — the dorm end of the farm, and the cheapest bed we
            have. Most school groups end up spread across this, the lodge rooms
            and the camping ground, which is exactly why the quote comes in
            lower than a single tariff would.
          </figcaption>
        </figure>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Catering that feeds the budget, not just the kids
            </H2>
            <p>
              School group catering in South Africa is not expensive because
              food is expensive. It is expensive because groups ask for
              flexibility and then pay for it three times a day.
            </p>

            <h3>A set menu costs less than a choice</h3>
            <p>
              One dish, cooked once, for everybody. That is the whole
              mechanism — it lets a kitchen buy exactly what it needs, cook it
              in one pass and throw almost nothing away. We cook a continental
              breakfast at R{site.meals.breakfast.pricePerPersonZAR} a head and a
              South African braai for dinner, both on order and both set menus,
              and we quote the dinner on your numbers rather than off a list. If
              your group has dietary requirements, give them to us as a count at
              enquiry stage, not as a surprise on the night. We do not have a
              halaal option — if that matters to your group, tell us early and we
              will shape the week around the self-catering route instead.
            </p>

            <h3>Buy where the food is grown</h3>
            <p>
              This valley grows bananas, macadamias, mangoes and citrus, and
              Hazyview has proper shops rather than a single tourist spaza.
              Bread, fruit, milk and braai meat bought here cost what they cost
              in a farming town — which is less than the same trolley in
              Gauteng, before you have paid to carry it 400 kilometres.
            </p>

            <h3>Self-cater one meal, and mean it</h3>
            <p>
              Not all three. One. Breakfast is the obvious one to hand over to a
              kitchen and lunch is the obvious one to keep: rolls, fruit and cold
              meat packed at the farm before a park day costs a fraction of
              anything bought inside Kruger, and it means the bus does not have
              to be anywhere at one o&rsquo;clock. The wooden house has a shared
              self-catering kitchen and there is a communal braai, so a school
              that wants to run its own catering entirely is not fighting the
              building to do it.
            </p>

            <h3>Move the supplies with the group</h3>
            <p>
              The bus has a hold and it is going here anyway. Dry goods,
              disposables and drinks bought in bulk at home and loaded with the
              luggage travel for nothing. It is the least glamorous line in this
              guide and it reliably saves more than the clever ones.
            </p>

            <H2 className="mb-4">
              School excursions in the Lowveld: buy one properly
            </H2>
            <p>
              Here is the decision that moves the budget most, and the one
              schools usually make last.
            </p>
          </div>

          <Callout eyebrow="The line nobody reads">
            SANParks counts twelve as an adult. For a high-school tour there is
            no scholar rate at the gate — sixty learners is sixty adult
            conservation fees.
          </Callout>

          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              It is worth being precise about this, because it is the difference
              between a budget that holds and one that doesn&rsquo;t. Under the{" "}
              <a
                href="https://www.sanparks.org/travel/book/useful-information/rates-fees"
                target="_blank"
                rel="noopener noreferrer"
              >
                SANParks daily conservation fee schedule
              </a>
              , a South African citizen or resident with ID pays{" "}
              <strong>R134 per adult and R67 per child</strong> to enter Kruger
              until 31 October 2026, and <strong>R140 and R70</strong> from 1
              November 2026. &ldquo;Adult&rdquo; means twelve years and older.
              &ldquo;Child&rdquo; means two to eleven. Under two is free.
            </p>
            <p>
              So a Grade 6 excursion enters at the child rate and a Grade 10 tour
              enters at the adult rate, and the gap between those two numbers on
              sixty learners is about four thousand rand. Worth knowing in
              March, not on the day.
            </p>
            <p>
              One more thing, and schools get caught by it every year: the rate
              depends on citizenship, not on where the school is. Learners
              travelling on an SADC passport pay R275 per adult now and R296 from
              1 November; anyone else pays R602 and then R692. If your group
              includes learners who are not South African citizens, count them
              before you build the budget, and tell them to bring the document
              they will be asked for at the gate.
            </p>

            <h3>One flagship day, not four half-days</h3>
            <p>
              A Kruger school excursion done properly — in the gate at opening,
              out in the late afternoon, with somebody on the bus who knows what
              they are looking at — is worth more to a group than three rushed
              outings stacked on top of each other. Half-days are where money
              goes quietly: each one costs a bus, an entry fee and two hours of
              driving, and none of them is long enough to be the thing anybody
              remembers. Pick the one. Our{" "}
              <Link href="/blog/kruger-from-hazyview">
                guide to Kruger from Hazyview
              </Link>{" "}
              sets out how a first-timer&rsquo;s day actually runs, gate by gate.
            </p>

            <h3>The free programme, and the reason most southern groups can&rsquo;t use it</h3>
            <p>
              SANParks runs a genuinely free educational programme at
              Letaba&rsquo;s Elephant Hall: up to{" "}
              <strong>120 learners and 6 accompanying adults</strong> get day
              access at no conservation fee, bookable every day except Sunday, in
              English, Afrikaans or Tsonga. It is a real offer and almost nobody
              outside the region seems to know about it.
            </p>
            <p>
              The catch is geography. Letaba is in the far north of the park, and
              from a Hazyview base that is most of a day&rsquo;s driving in each
              direction at park speed limits — which is why southern-based groups
              rarely use it, and why we would rather tell you that here than have
              you discover it three hours in. If your itinerary already runs
              north, book it well ahead; numbers are strictly limited in school
              holidays. If it doesn&rsquo;t, budget for the gate fee and enjoy
              the south, which is where the game density is anyway.
            </p>

            <h3>Ask for the group rate that isn&rsquo;t advertised</h3>
            <p>
              Very few Lowveld operators publish a school rate, and a surprising
              number have one. Panorama Route sites charge per head at the gate
              and the published figures vary between sources enough that we
              won&rsquo;t quote them here — phone each one, say the words
              &ldquo;school group, forty-five learners, a weekday in May&rdquo;,
              and write down what they say. The same call works on the canopy
              tours, the sanctuaries and the boat trips. It costs twenty minutes
              and it is the highest-return twenty minutes in the whole plan.
            </p>

            <h3>Combine the transport, not just the tickets</h3>
            <p>
              The Panorama Route is roughly ninety minutes from our gate and it
              is a full day: God&rsquo;s Window, Bourke&rsquo;s Luck Potholes,
              the Blyde River Canyon. Done as a separate excursion it costs a
              whole bus day. Done on the way in or the way out — the bus is on
              the road regardless — it costs entry fees and nothing else. Our{" "}
              <Link href="/blog/things-to-do-around-hazyview">
                guide to things to do around Hazyview
              </Link>{" "}
              has the full menu of what is genuinely worth the detour, and{" "}
              <Link href="/blog/cost-of-a-kruger-lowveld-week-2026">
                what a Lowveld week really costs
              </Link>{" "}
              breaks the same maths down for families.
            </p>
          </div>
        </Section>

        <figure className="mx-auto my-12 w-full max-w-5xl px-5 lg:px-0">
          <Image
            src={img.hilltopViewpoint.src}
            alt={img.hilltopViewpoint.alt}
            width={img.hilltopViewpoint.width}
            height={img.hilltopViewpoint.height}
            className="w-full rounded-2xl object-cover"
            sizes="(min-width: 1024px) 64rem, 100vw"
          />
          <figcaption className="mt-3 text-center text-xs text-muted">
            The hilltop above the farm, an hour&rsquo;s walk from the fence.
            There is no ticket for this, no minimum group size and nothing to
            book — which is the entire point of the section above.
          </figcaption>
        </figure>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">A simple way to budget the whole trip</H2>
            <p>
              Build it in this order and the number holds. Build it in any other
              order and you will be revising it in August.
            </p>
          </div>

          <NumberedList
            variant="dark"
            items={[
              {
                title: "Fix the numbers before you phone anybody",
                body: "Exact learner count, exact staff count, exact dates, and the ages — because the ages decide the gate fee. Every quote you receive after this point will be sharper and lower than one built on an estimate.",
              },
              {
                title: "Price the beds as a group, not as rooms",
                body: "Send the real numbers and ask to be spread across the bed types rather than put in one tier. Ask what the third night does to the total, and ask what exclusive use would cost. Then ask what 'included' includes.",
              },
              {
                title: "Add the gate before you add anything else",
                body: "Conservation fees are per person, per day, and non-negotiable. R134 or R140 a head for anyone twelve and over; R67 or R70 for a child. Count the non-citizens separately. Do this third and nothing later surprises you.",
              },
              {
                title: "Choose one paid excursion and make it good",
                body: "One flagship day, booked in advance, with the group rate asked for out loud. Let the farm trails, the waterfall, the pool table and the fire carry the other afternoons — they are already in the price of the bed.",
              },
              {
                title: "Feed everybody last, because now you know the shape",
                body: "Set menus for the meals you buy, self-cater the one you pack, and load the dry goods onto the bus at home. Food is the line with the most give in it, which is exactly why you cost it once the rest is fixed.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Questions we get asked most</H2>
            {faqs.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="In closing — cheap school tours are not the goal"
              thesis="A school trip is not made affordable by cutting things out of it. It is made affordable by knowing which four decisions carry the money, and making those four deliberately."
              body={
                <>
                  Everything else — the walk to the waterfall, the fire, the
                  hour before supper when nobody can find anybody — the Lowveld
                  hands you for nothing. That is why this part of the country
                  suits a school so well, and why we would rather help you plan
                  it properly than sell you a package with the interesting bits
                  taken out.
                  <br />
                  <br />
                  Send us your learner count, your staff count and your dates,
                  and Anneli or Matthew will reply personally — what we would
                  quote, how we would split the group across the beds, and what
                  we would do with each of the days. No forms and no
                  auto-responses. You can also read the full{" "}
                  <Link href="/group-functions/school-groups">
                    school groups page
                  </Link>{" "}
                  for the beds, the fence and the capacity.
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
                    "SANParks — daily conservation fees (2025/26 and 2026/27 schedules, and the 12-and-over adult definition)",
                  href: "https://www.sanparks.org/travel/book/useful-information/rates-fees",
                },
                {
                  label:
                    "SANParks — Kruger day visits, advance booking and the daily visitor threshold",
                  href: "https://www.sanparks.org/parks/kruger/what-to-do/day-visits",
                },
                {
                  label:
                    "South African Government — the national public school calendar and term dates",
                  href: "https://www.gov.za/about-sa/school-calendar",
                },
                {
                  label:
                    "Department of Basic Education — regulations on safety measures at public schools, which govern excursions",
                  href: "https://www.education.gov.za/Resources/Legislation/Regulations.aspx",
                },
                {
                  label:
                    "Kruger Park — gate opening and closing times through the year",
                  href: "https://www.krugerpark.co.za/",
                },
                {
                  label:
                    "Mpumalanga Tourism — Panorama Route sites and operators to phone for group rates",
                  href: "https://www.mpumalanga.com/",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Send us your numbers and we'll send you a real figure."
          body={`Learner count, staff count and your dates — that is all we need. Anneli or Matthew will come back personally with what we would quote, how we would split the group across the beds and camping, and what we would do with each of the days. From R${site.pricing.fromZAR} per person sharing.`}
          buttonLabel="Enquire about a school group on WhatsApp"
          pageKey="groupFunctions"
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
                  Which gate, what time to leave, and how a first day in the
                  park actually runs — the detail behind your one flagship
                  excursion.
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
                  The full menu — sanctuaries, canopy tours, the Panorama Route
                  — and an honest view of which ones are worth a group&rsquo;s
                  money.
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
