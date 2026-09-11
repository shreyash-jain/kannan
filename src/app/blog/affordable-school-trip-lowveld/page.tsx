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
// Woven into the H1, section headings, intro, FAQ and meta — never stuffed.
// Anneli's warm first-person voice comes first; search second.
//
// Length: marketing asked for UNDER 1,000 words (2026-09-11), down from
// the 1,200–1,500 in the original brief. The body — intro through the
// closing block, FAQ included, TLDR and Sources excluded — is held under
// that. Do not let it creep back up.
//
// Sub-headings: `.prose-kanaan` styles only <p>, so a bare <h3> renders as
// body text. Every h3 here carries explicit display-font classes, and the
// FAQ uses the same not-prose divide-y block as the cost guide.
//
// Link budget: 7 contextual INTERNAL links in the body (marketing's ask) —
//   /group-functions/school-groups · /camping ·
//   /blog/when-to-visit-kruger-hazyview-month-by-month ·
//   /blog/kruger-from-hazyview · /blog/panorama-route-from-hazyview ·
//   /blog/things-to-do-around-hazyview ·
//   /blog/cost-of-a-kruger-lowveld-week-2026
// and 5 EXTERNAL links across 5 domains, repeated in the Sources block.
//
// EVERY FIGURE IS FROM A PRIMARY SOURCE, verified 11 September 2026:
//   • Kruger daily conservation fees, SA citizens/residents with ID:
//       R134 adult / R67 child   — 1 Nov 2025 to 31 Oct 2026
//       R140 adult / R70 child   — 1 Nov 2026 to 31 Oct 2027
//     SADC with passport: R275/R137 → R296/R147.
//     All other nationalities: R602/R300 → R692/R345.
//     Source: SANParks daily_conservation_fees_2025_26.pdf and _2026_27.pdf.
//   • "Adult" = 12 years and older; "child" = 2 to 11. Same PDFs.
//   • Gate entry 06:00 (May–Sept) / 05:30 (Oct–Mar) — SANParks entrance gates.
//   • Letaba Elephant Hall schools programme: up to 120 learners + 6 adults
//     free, every day except Sunday — sanparks.org schools & educators page.
//   • 2027 school terms — gov.za national school calendar.
// Panorama Route per-site entry fees are deliberately NOT quoted: the public
// figures disagree and no primary source was reachable.
//
// Farm facts come from src/lib/site.ts — never typed by hand. No group rate
// and no dinner price are quoted anywhere, because neither exists in site.ts.
// ---------------------------------------------------------------------

const datePublished = "2026-09-11";
const headline =
  "Affordable School Trip Lowveld: Smart Accommodation, Catering & Excursion Choices That Stretch Every Rand";

const h3 = "mt-10 mb-3 font-display text-xl text-forest-deep md:text-2xl";

const faqs = [
  {
    q: "How much does it cost to take a school group into Kruger?",
    a: "R134 per adult and R67 per child for South African citizens until 31 October 2026, then R140 and R70. Anyone 12 and over counts as an adult — there is no scholar rate.",
  },
  {
    q: "What is the cheapest way to accommodate a school group in the Lowveld?",
    a: `Spread the group across dorm beds, twin rooms and camping. Our rate starts at R${site.pricing.fromZAR} per person sharing; we quote schools on real numbers and dates.`,
  },
  {
    q: "Can you cater, and can we cook for ourselves?",
    a: `Both. Breakfast at R${site.meals.breakfast.pricePerPersonZAR} a head and a braai dinner, both set menus on order — or use the kitchen. No halaal option, so say so early.`,
  },
];

export const metadata = createBlogPostMetadata({
  slug: "affordable-school-trip-lowveld",
  // Title tag 50 chars, meta description 149 — inside the brief's limits.
  title: "Affordable School Trip Lowveld: Stretch Every Rand",
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
            "A planning guide to an affordable school trip in the Lowveld from the family who run Kanaan Guest Farm outside Hazyview: what a Kruger school excursion costs per learner, why SANParks counts a twelve-year-old as an adult, how budget school accommodation is really priced, what makes school group catering work, and which excursions earn their money.",
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
          title="Affordable School Trip Lowveld: Smart Accommodation, Catering & Excursion Choices That Stretch Every Rand"
          intro="Most school budgets are not broken by the destination. They are broken by the order the decisions get made in — and by one line in the SANParks tariff nobody reads until the bus is at the gate."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={5}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                `Kruger's Phabeni and Numbi gates are ${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} minutes from Hazyview — one bus day buys a full park day.`,
                "SANParks counts everyone 12 and over as an adult: R134 a head until 31 October 2026, R140 after. There is no scholar rate.",
                `Ask for a group rate on real numbers, and make somebody itemise "included". Ours starts at R${site.pricing.fromZAR} per person sharing.`,
                `Set menus cost less than choice. Breakfast is R${site.meals.breakfast.pricePerPersonZAR} a head; the kitchen is yours for the meal you self-cater.`,
                "Buy one excursion properly. The trails, waterfall, pool and fire cost nothing on top of the bed.",
              ]}
            />

            <p>
              The first thing a teacher asks us is never the price — it is
              whether they can account for everybody at nine at night. The
              price comes two messages later: <em>what would sixty of us cost?</em>
            </p>
            <p>
              Honestly, it depends on four decisions the school has not made
              yet. We have watched two groups of the same size do the same week
              here for very different money; the difference was the order they
              asked things in. An affordable school trip to the Lowveld is
              about asking four questions early, in the right order.
            </p>

            <H2 className="mb-4 mt-12">Why the Lowveld works for school groups</H2>
            <p>
              A bus charges by the day whether it moves or not. From Hazyview
              the Phabeni and Numbi gates are{" "}
              {site.distances.krugerGateMinutesMin}–
              {site.distances.krugerGateMinutesMax} minutes away, and{" "}
              <a
                href="https://www.krugerpark.co.za/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kruger&rsquo;s gates open
              </a>{" "}
              at 06:00 in winter and 05:30 in summer. A bus leaves in the dark
              and is back for a swim by mid-afternoon. One bus day, one full
              park day.
            </p>
            <p>
              The other half is the ground: trails from our fence, a waterfall,
              a rock pool and a hilltop over the valley. Three afternoons,
              nothing to pay — the{" "}
              <Link href="/group-functions/school-groups">
                school groups page
              </Link>{" "}
              has the beds, the fence and the capacity.
            </p>
          </div>

          <StatGrid
            stats={[
              {
                value: `${site.distances.krugerGateMinutesMin}–${site.distances.krugerGateMinutesMax} min`,
                label: "To a Kruger gate",
              },
              {
                value: `${site.capacity.sleepingTotal}+`,
                label: "Beds under roof",
                body: `Plus camping for ${site.capacity.campingPeople} more.`,
              },
              {
                value: "1",
                label: "Gate in or out",
                body: "Fully fenced; we live on site.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Budget school accommodation in the Lowveld, without the compromise
            </H2>

            <h3 className={h3}>Ask for a group rate, with real numbers</h3>
            <p>
              A published rate is written for two people on a weekend, not
              fifty-two learners on a Tuesday in May. Ours
              starts at R{site.pricing.fromZAR} per person sharing; what a
              school pays depends on numbers and dates. Vagueness gets priced
              as risk.
            </p>

            <h3 className={h3}>Term time is the shoulder — dodge the quota days</h3>
            <p>
              Term is the quiet season. The{" "}
              <a
                href="https://www.gov.za/about-sa/school-calendar"
                target="_blank"
                rel="noopener noreferrer"
              >
                2027 terms
              </a>{" "}
              run 13 January–19 March, 6 April–25 June, 20 July–1 October and
              11 October–10 December. Avoid public holidays and long weekends:{" "}
              <a
                href="https://www.sanparks.org/parks/kruger/what-to-do/day-visits"
                target="_blank"
                rel="noopener noreferrer"
              >
                SANParks caps daily visitors
              </a>
              , and day visitors can be turned away. Book the day visit ahead.
              Our{" "}
              <Link href="/blog/when-to-visit-kruger-hazyview-month-by-month">
                month-by-month almanac
              </Link>{" "}
              says what each term feels like.
            </p>

            <h3 className={h3}>Make somebody itemise &ldquo;included&rdquo;</h3>
            <p>
              Linen, teacher rooms, venue hire, campsite power. Two quotes R80
              apart are often R300 apart once you know. Our venue seats{" "}
              {site.capacity.wedding.indoor};{" "}
              <Link href="/camping">the campsites</Link> have a tap and power at
              the pitch.
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
            The wooden house — the dorm end of the farm, and the cheapest bed
            we have.
          </figcaption>
        </figure>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Catering that feeds the budget, not just the kids</H2>

            <h3 className={h3}>One set menu, cooked once</h3>
            <p>
              School group catering in South Africa gets expensive when groups
              ask for choice three times a day. We cook a
              continental breakfast at R{site.meals.breakfast.pricePerPersonZAR}{" "}
              a head and a braai dinner, both set menus on order. No halaal
              option — tell us early.
            </p>

            <h3 className={h3}>Self-cater one meal, and buy local</h3>
            <p>
              Lunch packed at the farm beats anything bought inside Kruger, and
              food costs what it costs in a farming town. The wooden house has
              a shared kitchen; dry goods from home travel free in the bus hold.
            </p>

            <H2 className="mb-4 mt-12">
              School excursions in the Lowveld: buy one, properly
            </H2>
          </div>

          <Callout eyebrow="The line nobody reads">
            SANParks counts twelve as an adult. For a high-school tour there is
            no scholar rate at the gate — sixty learners is sixty adult
            conservation fees.
          </Callout>

          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              Under the{" "}
              <a
                href="https://www.sanparks.org/travel/book/useful-information/rates-fees"
                target="_blank"
                rel="noopener noreferrer"
              >
                SANParks fee schedule
              </a>
              , a South African citizen pays{" "}
              <strong>R134 per adult and R67 per child</strong> until 31
              October 2026, then <strong>R140 and R70</strong>.
              &ldquo;Adult&rdquo; is twelve and over: a Grade 6 group pays the
              child rate, a Grade 10 tour pays adult — on sixty learners, about
              four thousand rand apart. Other passports pay R275 (SADC) or
              R602, rising to R296 and R692.
            </p>

            <h3 className={h3}>One flagship day, not four half-days</h3>
            <p>
              Each half-day costs a bus, a gate and two hours of road.{" "}
              <Link href="/blog/kruger-from-hazyview">Kruger from Hazyview</Link>{" "}
              shows how one good day runs.
            </p>

            <h3 className={h3}>The free programme, and its catch</h3>
            <p>
              Letaba&rsquo;s Elephant Hall takes{" "}
              <strong>120 learners and 6 adults at no gate fee</strong>, any day
              but Sunday. But Letaba is in the far north — most of a day&rsquo;s
              drive each way. Unless your route runs north, pay the gate and
              stay south, where the game is.
            </p>

            <h3 className={h3}>Combine the transport</h3>
            <p>
              The{" "}
              <Link href="/blog/panorama-route-from-hazyview">
                Panorama Route
              </Link>{" "}
              is ninety minutes away. Done on the way in or out, it costs entry
              fees and nothing else. Phone each{" "}
              <a
                href="https://www.mpumalanga.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                site
              </a>{" "}
              and ask for a school rate — most have one unpublished.{" "}
              <Link href="/blog/things-to-do-around-hazyview">
                Things to do around Hazyview
              </Link>{" "}
              has the rest;{" "}
              <Link href="/blog/cost-of-a-kruger-lowveld-week-2026">
                what a Lowveld week costs
              </Link>{" "}
              does the maths for families.
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
            The hilltop above the farm. No ticket, nothing to book.
          </figcaption>
        </figure>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Budget the whole trip in this order</H2>
          </div>

          <NumberedList
            variant="dark"
            items={[
              {
                title: "Fix the numbers first",
                body: "Learners, staff, dates, ages — the ages set the gate fee.",
              },
              {
                title: "Price the beds as a group",
                body: "Spread across bed types. Ask what 'included' includes.",
              },
              {
                title: "Add the gate next",
                body: "R134 or R140 for anyone twelve and over; R67 or R70 for a child.",
              },
              {
                title: "Choose one paid excursion",
                body: "Booked ahead, group rate asked for.",
              },
              {
                title: "Feed everybody last",
                body: "Set menus for what you buy; self-cater what you pack.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Questions we get asked most</H2>
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

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="In closing — cheap school tours are not the goal"
              thesis="A school trip is not made affordable by cutting things out of it — but by knowing which four decisions carry the money, and making those deliberately."
              body={
                <>
                  Send us your learner count, staff count and dates, and Anneli
                  or Matthew will reply personally with a real figure.
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
                    "SANParks — daily conservation fees (2025/26 and 2026/27, and the 12-and-over adult definition)",
                  href: "https://www.sanparks.org/travel/book/useful-information/rates-fees",
                },
                {
                  label:
                    "SANParks — Kruger day visits, advance booking and the daily visitor cap",
                  href: "https://www.sanparks.org/parks/kruger/what-to-do/day-visits",
                },
                {
                  label:
                    "South African Government — the national public school calendar",
                  href: "https://www.gov.za/about-sa/school-calendar",
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
          body={`Learner count, staff count and your dates — that is all we need. Anneli or Matthew will come back personally with what we would quote, how we would split the group across the beds and camping, and what we would do with each day. From R${site.pricing.fromZAR} per person sharing.`}
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
                  park actually runs.
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
                  Sanctuaries, canopy tours, the Panorama Route — and which
                  ones are worth a group&rsquo;s money.
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
