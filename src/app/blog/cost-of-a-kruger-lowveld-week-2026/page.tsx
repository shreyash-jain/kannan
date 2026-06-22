import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { img } from "@/lib/images";
import { articleLd, faqLd } from "@/lib/jsonld";
import { createBlogPostMetadata } from "@/lib/blog";
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

const datePublished = "2026-06-22";
const headline =
  "What a Lowveld week really costs in 2026 — and why we base you at Kanaan from R250 a night";

// --- Inline cost table (wide data block, rendered outside the prose column) ---
type Row = { item: string; price: string; note?: string };
function CostTable({ title, rows }: { title: string; rows: Row[] }) {
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

// --- One worked weekly budget, line by line ---------------------------------
type LineItem = { label: string; calc?: string; subtotal: string };
function BudgetBuild({
  persona,
  lineItems,
  total,
  perDay,
}: {
  persona: string;
  lineItems: LineItem[];
  total: string;
  perDay: string;
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-black/5 bg-bone p-6 md:p-7">
      <h3 className="font-display text-lg leading-snug text-forest-deep md:text-xl">
        {persona}
      </h3>
      <dl className="mt-4 divide-y divide-black/5">
        {lineItems.map((li) => (
          <div
            key={li.label}
            className="flex items-baseline justify-between gap-4 py-2.5"
          >
            <div>
              <dt className="text-sm text-ink/85">{li.label}</dt>
              {li.calc && (
                <dd className="mt-0.5 text-xs text-ink/55">{li.calc}</dd>
              )}
            </div>
            <span className="font-medium text-forest-deep whitespace-nowrap">
              {li.subtotal}
            </span>
          </div>
        ))}
      </dl>
      <div className="mt-4 flex items-baseline justify-between border-t-2 border-ochre/30 pt-3">
        <span className="font-display text-base text-forest-deep">
          Week total
        </span>
        <span className="font-display text-xl text-forest-deep">{total}</span>
      </div>
      <p className="mt-2 text-xs text-muted">{perDay}</p>
    </article>
  );
}

const faqs = [
  {
    q: "How much does a week in Kruger and the Lowveld cost in 2026?",
    a: "It depends who's coming, but here are three honest worked weeks. A South African family of four, self-driving and based with us, spends roughly R12,000–R13,000 on the ground for the whole week. An international couple who fly in and hire a car run about R16,000 on the ground (before their airfare). A budget pair doing four nights can do it for around R4,000. The bed is the small part — accommodation from R250 per person sharing — and the gate fees and getting here are the bigger numbers.",
  },
  {
    q: "Is Kruger expensive to visit?",
    a: "The park itself really isn't. The gate (conservation) fee is R134 per person per day for South African residents and R602 for international visitors, and the Panorama Route stops are R25 to R150 each. What gets expensive is sleeping inside the park or at a private safari lodge. Base yourself outside at a value farm and day-trip in, and a Lowveld week is genuinely affordable.",
  },
  {
    q: "What's the cheapest way to do Kruger?",
    a: "Claim the South African resident rate with your ID, self-drive rather than booking guided drives, base outside the park (we're from R250 per person sharing), self-cater, use the free Panorama viewpoints like Wonder View, and buy a Wild Card only if you'll do four or more full days in the park. A pair travelling light can do four nights for around R4,000, excluding getting here.",
  },
  {
    q: "Do children pay Kruger entry fees?",
    a: "Under-twos are free. Children aged two to eleven pay roughly half the adult fee — about R67 for SA residents, R137 for SADC and R300 for international visitors — and from twelve they pay the adult fee. One thing to note: the guided bush walks are for ages twelve and up only, so don't budget those for younger children.",
  },
  {
    q: "Is the SANParks Wild Card worth it for a week?",
    a: "It is if you'll spend four or more full days in the park. A South African family card is around R1,870 and breaks even at about five park days; an international family card is R8,745 and pays back in roughly five to six. Wild Card holders pay no daily conservation fee at all. For one to three days, just pay the daily fee. Our rule of thumb: four-plus days, buy the card — and we'll tell you honestly which side of the line your week falls on, even though it isn't our sale.",
  },
  {
    q: "How much does it cost to get to Hazyview from Johannesburg?",
    a: "By road it's about 390 kilometres: budget roughly R900–R1,250 in fuel plus R261 in N4 tolls each way, so around R1,200–R1,500 per car one way, and a scenic four-and-a-half to five-hour drive. Or fly Johannesburg to KMIA (the Kruger Mpumalanga airport, about 48 minutes from us) from around R700 return on FlySafair up to R2,700-plus on Airlink, then hire a car or take a transfer. For a family, driving usually wins — and you arrive with your own wheels for game drives.",
  },
  {
    q: "How much does a Kruger trip cost from the UK or overseas?",
    a: "Your big variable is the long-haul flight to Johannesburg — very roughly R12,000–R25,000-plus per person depending on where you start and the season, so price your own origin. From Joburg it's a short hop to KMIA from about R700, or the scenic self-drive. On the ground, an international couple's five-night Lowveld week comes to around R16,000 including Kruger fees, a hire car and food. For reference, our R250 per person a night is about US$14, £11 or €13.",
  },
  {
    q: "Is it cheaper to stay inside Kruger or outside?",
    a: "Outside, for most families. SANParks bungalows inside the park run roughly R1,700–R2,900 a night and you pay the conservation fee for every night you're in the park. Based with us at about R1,000 a night for a family of four — with gate fees only on the days you actually drive in — a week works out clearly cheaper, and you still wake up fifteen to forty-five minutes from the gate.",
  },
  {
    q: "How much are the Panorama Route attractions?",
    a: "Cheap, which is the lovely surprise. God's Window is about R35 for SA residents, the waterfalls R25–R50, Bourke's Luck Potholes about R75, and the Graskop Gorge Lift R205. A whole self-drive Panorama day comes to roughly R300–R450 in gate fees for a South African family of four — and Wonder View, with the same vista as God's Window, is free.",
  },
  {
    q: "What does a guided game drive cost compared with self-driving?",
    a: "Self-driving costs you only your gate fee and fuel. A guided drive with a ranger is about R450–R650 per adult (children around R350), usually with the entry fee for that window included. Our suggestion: take one guided morning early in your stay to learn how to read the bush, then self-drive the rest of the week at your own pace.",
  },
  {
    q: "When is the cheapest time to visit the Lowveld?",
    a: "January to March, outside the Easter break, is the value shoulder — the swing is on private accommodation and flights, not on park fees, which barely change with the season. One date to know: conservation fees are valid to 31 October 2026 and a modest increase (around 15%) is expected from 1 November 2026, so an earlier week is genuinely a little cheaper.",
  },
  {
    q: "Are meals included, and what does food cost?",
    a: "We're self-catering, which is where families save. A continental breakfast is about R60 per person on request and dinner is on request too, but most guests cook. A week's groceries for four runs roughly R1,250–R2,500, a family braai R150–R250, and a meal out R600–R900. The kitchenette and the braai under the mango trees are quietly the biggest money-savers of the whole trip.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "cost-of-a-kruger-lowveld-week-2026",
  title: "What a Kruger & Lowveld week costs in 2026 — a transparent budget",
  description:
    "Every real 2026 cost of a Kruger and Panorama Route week, laid out plainly: gate fees by passport tier, the Wild Card break-even, activity prices, flights, car hire, fuel and food — plus three worked weekly budgets and why basing at Kanaan from R250 per person sharing wins the budget.",
  image: img.familyKrugerKidsHero,
  datePublished,
  category: "guide",
});

export default function LowveldCostGuidePage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A fully transparent 2026 cost guide to a Kruger National Park and Panorama Route week from Hazyview — the daily conservation fees by tier (SA resident, SADC, international) with child rates, the SANParks Wild Card break-even maths, every major activity and Panorama-stop price, flights and car hire and fuel and tolls, a nightly-rate comparison from Kanaan to private lodges, and three worked weekly budgets (an SA family, an international couple and a backpacker pair) showing why basing outside the park at Kanaan from R250 per person sharing wins the week.",
          path: "/blog/cost-of-a-kruger-lowveld-week-2026",
          image: img.familyKrugerKidsHero.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal & Guides", href: "/blog" },
          {
            label: "What a Lowveld week costs",
            href: "/blog/cost-of-a-kruger-lowveld-week-2026",
          },
        ]}
      />

      <article>
        <BlogHero
          image={img.familyKrugerKidsHero.src}
          alt={img.familyKrugerKidsHero.alt}
          eyebrow="Guide · Planning your budget"
          title="What a Lowveld week really costs."
          intro="Every real 2026 number, laid out plainly — gate fees, activities, getting here, food — and the one honest move that makes a Kruger week affordable. Nothing hidden, because once you can see the numbers, the fear goes."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={11}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "The gate fees are modest — R134 (SA resident) to R602 (international) per person per day. The bed is where a Lowveld week is really won or lost.",
                "Base outside the park at Kanaan from R250 per person sharing and day-trip in: you skip the in-park premium and pay Kruger fees only on the days you actually go.",
                "A whole Panorama Route day is only about R300–R450 in gate fees for an SA family — the activities are genuinely cheap.",
                "Doing four or more full days in Kruger? Buy the SANParks Wild Card — we'll tell you honestly which side of the line your week falls on.",
                "Three worked budgets below: an SA family of four ~R12,600 for the week, an international couple ~R16,100 on the ground, a backpacker pair ~R4,120.",
                "Every figure is 2026 and dated — fees valid to 31 October 2026, with a modest rise expected from 1 November. Verify the live number before you rely on it.",
              ]}
            />

            <p>
              The question guests really ask us, once the wonder has worn off and
              the planning begins, is the quiet one: <em>what will the whole week
              actually cost?</em> It is a fair question, and most travel pages
              dodge it — a vague &ldquo;from&rdquo; price here, a hidden park fee
              there, and you are left guessing. So we wrote this to do the
              opposite. Every real 2026 number, laid out plainly: what the gate
              charges, what the activities cost, what it takes to get here, and
              what a week really comes to for three different kinds of family.
            </p>
            <p>
              And here is the thing the numbers reveal, which we will say right at
              the top: <strong>Kruger itself is not expensive.</strong> The gate
              fee is modest, the Panorama Route is cheap, and the petrol is the
              petrol. Where a Lowveld week is quietly won or lost is the bed — and
              that is the one number you have the most control over. Sleep inside
              the park or at a private lodge and the cost runs away from you; base
              yourself out here on the farm and day-trip in, and the whole week
              comes back within reach.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The honest headline: where the money goes.</H2>
            <p>
              Before a single line item, here is the whole argument in three
              numbers. The bed is small and in your control; the gate is modest
              and only charged on the days you go; and basing outside the park
              costs you nothing extra — it saves you.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: "R250",
                label: "Your bed, per person",
                body: "A night at Kanaan, sharing — self-catering, with all of it a day-trip away. Around R1,000 a night for a family of four.",
              },
              {
                value: "R134–R602",
                label: "Kruger, per person per day",
                body: "The gate fee, by passport tier — and charged only on the days you actually drive into the park, not every night of your stay.",
              },
              {
                value: "R0",
                label: "Extra to base outside",
                body: "Sleeping out here skips the in-park accommodation premium and the nightly conservation charge an in-park camp bills you for.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What it costs to get here.</H2>
            <p>
              There are two ways to arrive, and for a family the cheaper one is
              usually the lovelier too. The drive from Johannesburg is a scenic
              four-and-a-half hours down the N4, and you roll up with your own car
              for game drives. Flying into KMIA — the Kruger Mpumalanga airport,
              about forty-eight minutes from our gate — is quicker but adds a hire
              car or a transfer on the far end.
            </p>
          </div>
          <CostTable
            title="Getting here & getting around (2026)"
            rows={[
              {
                item: "Petrol — 95 unleaded, inland",
                price: "R28.06 / litre",
                note: "A record high (June 2026). The price is regulated monthly, so re-check it close to your trip.",
              },
              {
                item: "Joburg → Hazyview self-drive (~390 km)",
                price: "~R1,200–R1,500 / car, one way",
                note: "Fuel ~R900–R1,250 plus R261 in N4 tolls. About 4½–5 hours. Return tolls R522.",
              },
              {
                item: "Flight Joburg ↔ KMIA — FlySafair",
                price: "R700–R1,800 return",
                note: "Budget fares; excludes a checked bag (~R210 per item each way). Fares move daily.",
              },
              {
                item: "Flight Joburg ↔ KMIA — Airlink",
                price: "R2,700–R7,500 return",
                note: "Full-service, checked bag included. About a 55-minute hop.",
              },
              {
                item: "Flight Cape Town ↔ KMIA",
                price: "R2,600–R3,200 return",
                note: "Direct on FlySafair and Airlink, about 2h40. Seasonal.",
              },
              {
                item: "Car hire at KMIA — economy",
                price: "~R350–R600 / day",
                note: "Add zero-excess insurance (~R150–R300/day) up front. A sedan copes fine on the tar roads.",
              },
              {
                item: "Car hire at KMIA — family SUV",
                price: "R900–R1,300 / day",
                note: "The most-rented class; add zero-excess cover ~R200–R350/day.",
              },
              {
                item: "KMIA → Hazyview private transfer",
                price: "~R900–R1,500 / vehicle",
                note: "Up to six people, about 75 minutes — but then you've no car for self-drive game viewing.",
              },
            ]}
          />
        </Section>

        {/* Inline image — the self-drive arrival */}
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
              The road toward the Phabeni gate at first light — drive in, and you
              arrive with your own wheels for the morning.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">What Kruger charges at the gate.</H2>
            <p>
              Kruger charges a daily <strong>conservation fee</strong> — per
              person, for every day you spend inside the park, whether you stay an
              hour or all day. It is tiered by where you are from, children pay
              about half, and there is a small one-percent community levy on top.
              Crucially, you pay it only on the days you actually go in — which is
              the quiet advantage of sleeping outside the park.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: "R134",
                label: "SA resident · per person/day",
                body: "Adults 12+. Children 2–11 about half (R67); under-2 free. Show your green ID — locals pay roughly a quarter of the international fee.",
              },
              {
                value: "R275",
                label: "SADC · per person/day",
                body: "With a passport; child ~R137. (Mozambican and Zimbabwean visitors pay the SA-resident rate, not this one.)",
              },
              {
                value: "R602",
                label: "International · per person/day",
                body: "Adults 12+. Children 2–11 R300; under-2 free. Plus the 1% levy. Valid to 31 Oct 2026 — a modest rise is expected from 1 November.",
              },
            ]}
          />
        </Section>

        {/* Inline image — Kruger game viewing */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src={img.krugerWinterWaterhole.src}
                alt={img.krugerWinterWaterhole.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              You pay the gate fee for the days you drive in — and self-driving
              costs only that fee and your fuel.
            </figcaption>
          </figure>
        </div>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The Wild Card maths, told straight.</H2>
            <p>
              Because a week based here usually means several days of game
              viewing, the SANParks Wild Card — an annual pass that waives the
              daily conservation fee entirely — flips to cheaper surprisingly
              fast. Here are the current prices and, more useful, the point at
              which the card beats paying daily.
            </p>
          </div>
          <CostTable
            title="SANParks Wild Card 2026 (annual — no daily fees at 80+ parks)"
            rows={[
              {
                item: "SA / SADC — Individual",
                price: "~R930",
                note: "Valid 365 days from purchase. Confirm the live figure on sanparks.org.",
              },
              {
                item: "SA / SADC — Couple",
                price: "~R1,525",
                note: "Two named adults. Breaks even at about six park days.",
              },
              {
                item: "SA / SADC — Family (2 adults + up to 5 kids)",
                price: "~R1,870",
                note: "Breaks even at about five park days for a family of four — the headline buy for a week of drives.",
              },
              {
                item: "International — Individual",
                price: "R4,680",
                note: "All-parks cluster. Usually only worth it on a long or multi-park trip.",
              },
              {
                item: "International — Couple",
                price: "R7,310",
                note: "Breaks even at about six park days.",
              },
              {
                item: "International — Family",
                price: "R8,745",
                note: "Two adults + up to 5 under-18s. Pays back in roughly five to six park days.",
              },
            ]}
          />
          <Callout eyebrow="Our honest rule of thumb">
            Four or more full days in Kruger? Buy the Wild Card. Three or fewer?
            Just pay at the gate. We&rsquo;ll tell you which side of the line your
            week falls on — even though it isn&rsquo;t our sale.
          </Callout>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The Panorama Route is the cheap day.</H2>
            <p>
              If Kruger is the headline, the Panorama Route is the bargain. Most of
              the famous viewpoints charge a few rand at a gate, the waterfalls are
              pocket money, and the one paid showpiece — the Graskop Gorge Lift —
              is worth every cent. Here is the menu, plus the bigger family
              activities worth budgeting for.
            </p>
          </div>
          <CostTable
            title="Activities & attractions (2026, per person unless noted)"
            rows={[
              {
                item: "Graskop Gorge Lift — glass lift + forest walk",
                price: "R205 adult / R138 child",
                note: "Under-4 free; a family of four ≈ R686. The signature Panorama family experience. Zipline add-on +R150.",
              },
              {
                item: "Graskop Big Swing / Zipline",
                price: "Swing R750 · Zip R280 · combo R900",
                note: "Big Swing 12+, zipline 7+. The teenage highlight of the week.",
              },
              {
                item: "God's Window",
                price: "~R35 SA / ~R70 international",
                note: "Cash at the gate. Free alternative up the road: Wonder View — the same vista, no stairs, no fee.",
              },
              {
                item: "Bourke's Luck Potholes",
                price: "~R75 SA / ~R150 international",
                note: "Child ~R35 (SA). Cash only; confirm the 2026 figure at the gate.",
              },
              {
                item: "Waterfalls (Lisbon, Berlin, Mac Mac)",
                price: "~R25–R50 SA",
                note: "Mac Mac Pools (swimmable) ~R50. Budget about R50 per person; it varies by access point.",
              },
              {
                item: "Blyde River Canyon boat cruise (90 min)",
                price: "R430 adult / R220 child",
                note: "The closest hippo-and-croc cruise (~120 km, a full Panorama-north day). Plus a small reserve entry (~R55 SA).",
              },
              {
                item: "Skyway Trails canopy zip-line (Hazyview)",
                price: "R695",
                note: "One rate for adults and children; ~2½ hours over the Sabie valley, transfer included.",
              },
              {
                item: "Perry's Bridge Reptile Park (Hazyview)",
                price: "R184 adult / R103 child",
                note: "Under-5 free. Central and undercover — the rainy-day winner. Closed Fridays outside school holidays.",
              },
              {
                item: "Chimp Eden guided tour (~1 hr away)",
                price: "R290 SA / R330 intl adult",
                note: "Child R150 / R175; under-6 free. An ethical Jane Goodall sanctuary — book ahead.",
              },
              {
                item: "Moholoholo Wildlife Centre (~2 hrs)",
                price: "R240 adult / R120 child",
                note: "Best paired with a Blyde / Panorama-north day rather than a casual half-day.",
              },
              {
                item: "Sabie River rafting / tubing (2 hrs)",
                price: "R600 (Wed & Fri from R460)",
                note: "One rate (no child discount), minimum age about 5. Seasonal — confirm the river is running.",
              },
              {
                item: "Kruger guided game drive (~3 hrs)",
                price: "~R450–R650 adult / ~R350 child",
                note: "Booked at the camp desks; varies by camp and usually includes that day's entry. One guided morning, then self-drive the rest.",
              },
            ]}
          />
        </Section>

        {/* Inline image — the Graskop Gorge Lift */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.graskopGorgeLift.src}
                alt={img.graskopGorgeLift.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The Graskop Gorge Lift — the one Panorama Route stop worth paying
              for, at R205 a head.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Three real weekly budgets, with the maths shown.</H2>
            <p>
              Enough principle — here is what it actually adds up to. Three honest
              weeks, three different families, every line shown so you can swap in
              your own numbers. These are illustrative and conservative; recompute
              the live figures before you rely on them, and message us and
              we&rsquo;ll build yours with you.
            </p>
          </div>
          <div className="not-prose mx-auto my-8 grid w-full max-w-5xl gap-4 px-5 lg:grid-cols-3 lg:px-0">
            <BudgetBuild
              persona="SA family of four · self-drive · 5 nights"
              lineItems={[
                { label: "Kanaan", calc: "R250 × 4 × 5 nights", subtotal: "R5,000" },
                { label: "Breakfasts", calc: "R60 × 4 × 3 mornings", subtotal: "R720" },
                { label: "Kruger — 2 self-drive days", calc: "R402/day × 2 + levy", subtotal: "~R812" },
                { label: "Panorama gate stops", calc: "God's Window + falls + Bourke's Luck", subtotal: "~R450" },
                { label: "Graskop Gorge Lift", calc: "2 × R205 + 2 × R138", subtotal: "R686" },
                { label: "Groceries (week)", calc: "mid-range self-catering", subtotal: "~R2,000" },
                { label: "Two braais", calc: "R200 × 2", subtotal: "R400" },
                { label: "One meal out", calc: "family of four", subtotal: "~R750" },
                { label: "Fuel — local touring", calc: "~600–900 km @ R28/L", subtotal: "~R1,800" },
              ]}
              total="~R12,600"
              perDay="≈ R630 per person per day — and only ~R250 of that is the bed. Excludes getting here from home."
            />
            <BudgetBuild
              persona="International couple · fly + hire car · 5 nights"
              lineItems={[
                { label: "Kanaan", calc: "R250 × 2 × 5 nights", subtotal: "R2,500" },
                { label: "Breakfasts", calc: "R60 × 2 × 5", subtotal: "R600" },
                { label: "Kruger — 3 self-drive days", calc: "R1,204/day × 3 + levy", subtotal: "~R3,648" },
                { label: "One guided morning drive", calc: "2 × ~R600", subtotal: "~R1,200" },
                { label: "Panorama day", calc: "gate stops + lift + Blyde cruise", subtotal: "~R1,700" },
                { label: "Food (self-cater + 2 meals out)", calc: "~R1,200 + ~R900", subtotal: "~R2,100" },
                { label: "Car hire (economy, 5 days)", calc: "~R550/day, excess waived", subtotal: "~R2,750" },
                { label: "Fuel — week of touring", calc: "~700 km @ R28/L", subtotal: "~R1,600" },
              ]}
              total="~R16,100"
              perDay="≈ R1,610 per person per day. Excludes international airfare to Joburg. Here the gate fees, not the bed, are the big number."
            />
            <BudgetBuild
              persona="Budget pair · self-drive · 4 nights"
              lineItems={[
                { label: "Kanaan", calc: "R250 × 2 × 4 nights", subtotal: "R2,000" },
                { label: "Kruger — 1 day (SA residents)", calc: "2 × R134 + levy", subtotal: "~R271" },
                { label: "Free/cheap Panorama loop", calc: "Wonder View free + a waterfall", subtotal: "~R50" },
                { label: "Groceries (4 days, two)", calc: "braais + basics", subtotal: "~R900" },
                { label: "Fuel — modest touring", calc: "~400 km @ R28/L", subtotal: "~R900" },
              ]}
              total="~R4,120"
              perDay="≈ R515 per person per day — barely more than a shared hostel bunk buys, for a private farm bed. Excludes getting here."
            />
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Where you sleep decides the budget.</H2>
            <p>
              This is the comparison that makes the whole case. The gate fees are
              fixed and the activities are cheap, so the one lever that genuinely
              moves a Lowveld week&rsquo;s cost is the bed — and it swings further
              than most people expect.
            </p>
          </div>
          <CostTable
            title="What a night's sleep costs (2026)"
            rows={[
              {
                item: "Kanaan — per person sharing",
                price: "R250",
                note: "≈ R500 a night for a couple, ~R1,000 for a family of four. Self-catering, fifteen to forty-five minutes from the gate.",
              },
              {
                item: "Hazyview mid-range lodge — room for two",
                price: "R1,165–R1,459",
                note: "Roughly R580–R730 per person a night.",
              },
              {
                item: "Inside Kruger — SANParks self-catering bungalow",
                price: "R1,709–R2,913",
                note: "And you pay the conservation fee for every night you're in the park.",
              },
              {
                item: "Inside Kruger — SANParks family cottage",
                price: "R3,073–R3,984",
                note: "Sleeps a family, but at three to four times the Kanaan rate.",
              },
              {
                item: "Sabi Sand private safari lodge",
                price: "from R11,500 per person",
                note: "All-inclusive — and that's per person, per night.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              Put plainly: a family of four sleeps <strong>seven nights</strong>{" "}
              at Kanaan for less than <strong>one night per person</strong> at a
              private lodge. That is the difference between a holiday you talk
              yourself out of and one you actually book.
            </p>
          </div>
        </Section>

        {/* Inline images — the actual R250 bed + the self-catering kitchen */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src={img.lodgeFamilyTwin.src}
                  alt={img.lodgeFamilyTwin.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                A family room at Kanaan — the actual bed behind the R250 figure.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src={img.lodgeKitchen.src}
                  alt={img.lodgeKitchen.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The self-catering kitchenette — quietly the biggest money-saver
                of the trip.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Honest ways to spend less.</H2>
            <p>
              None of this is sales talk — it is just what we would do ourselves.
              Here are the levers that genuinely lower the bill, in roughly the
              order they matter.
            </p>
          </div>
          <NumberedList
            variant="dark"
            items={[
              {
                title: "Base outside the park and day-trip in",
                body: "The single biggest saving. You pay the conservation fee only on the days you actually enter Kruger — not for every night of your stay, the way an in-park camp bills you.",
              },
              {
                title: "Buy the Wild Card only for 4+ park days",
                body: "An SA family card (~R1,870) breaks even at about five days; an international family card (R8,745) at five to six. For one to three days, pay the daily fee — we'll tell you honestly which your week is.",
              },
              {
                title: "Claim the rate you're entitled to",
                body: "SA residents pay R134 with an ID — roughly a quarter of the international fee. Mozambican and Zimbabwean nationals get the SA-resident rate too.",
              },
              {
                title: "Self-cater and braai",
                body: "The kitchenette turns a week's R1,250–R2,500 grocery spend into your meals, instead of restaurant mark-ups every night. Breakfast is ~R60 on request when you want a morning off.",
              },
              {
                title: "Use the free Panorama stops",
                body: "Wonder View has the same drop as God's Window with no stairs and no fee, and a whole Panorama day in gate fees is only ~R300–R450 for an SA family of four.",
              },
              {
                title: "For a family, drive rather than fly",
                body: "Once you add four air fares plus a transfer or hire car, the scenic N4 self-drive (~R1,200–R1,500 one way per car) usually wins — and you arrive with your own wheels for game drives.",
              },
              {
                title: "Travel the value shoulder",
                body: "January to March (outside Easter) is cheapest for private accommodation and flights. Park fees barely move with the season — but they rise ~15% from 1 November 2026, so an earlier week is genuinely a little cheaper.",
              },
            ]}
          />
        </Section>

        <Callout eyebrow="A quick, honest word on the numbers">
          Every figure here is dated for 2026, gate fees are valid to 31 October
          2026, and the petrol price changes monthly. Prices move — verify the
          live figure before you rely on it, and message us, because we keep ours
          current.
        </Callout>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Questions about the cost.</H2>
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

        {/* Inline image — the farm you come home to */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.poolSunset.src}
                alt={img.poolSunset.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The farm you come home to after a day of day-tripping — and the
              reason the week adds up.
            </figcaption>
          </figure>
        </div>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="The week is yours to build"
              thesis="The gate fees are modest, the activities are cheap, and the bed is the one big lever — so base yourself here, day-trip into all of it, and spend what you save on the week itself."
              body={
                <>
                  We didn&rsquo;t write this to sell you a room — we wrote it
                  because the thing that stops people booking a Lowveld holiday is
                  almost never the price, it&rsquo;s not being able to see it.
                  Now you can. Send us your dates and who&rsquo;s coming, and
                  we&rsquo;ll build the week&rsquo;s budget with you, honestly, and
                  tell you exactly where to save.
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
                  label: "SANParks — Kruger rates & entry fees (official)",
                  href: "https://www.sanparks.org/parks/kruger/rates-entry-fees",
                },
                {
                  label: "SANParks — Wild Card types & pricing",
                  href: "https://www.sanparks.org/rewards/wild-card/types-pricing",
                },
                {
                  label:
                    "KrugerPark.co.za — conservation fees (SANParks-licensed)",
                  href: "https://www.krugerpark.co.za/Kruger_Park_Travel_Advisory-travel/conservation-fees.html",
                },
                {
                  label: "Graskop Gorge Lift Company — official rates",
                  href: "https://www.graskopgorgeliftcompany.co.za/rates.html",
                },
                {
                  label: "Blyde Canyon Adventure Centre — boat trips",
                  href: "https://blydecanyon.co.za/boat-trips/",
                },
                {
                  label:
                    "BusinessTech — South African petrol price (June 2026)",
                  href: "https://businesstech.co.za/news/energy/862147/south-africans-set-to-pay-the-highest-petrol-price-in-history/",
                },
                {
                  label: "N4 toll tariffs — Gauteng to Mpumalanga",
                  href: "https://randtools.co.za/drive/gauteng-to-mpumalanga",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Want us to build your week's budget with you?"
          body="Send Anneli or Matthew your dates and who's coming, and we'll cost your Lowveld week honestly — which days for Kruger, whether a Wild Card pays off for you, the right rooms, and exactly where to save. No forms, no auto-responses, just a real conversation about your trip."
          buttonLabel="Plan your week on WhatsApp"
          pageKey="packages"
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
                  The gates, the timing and the half-day plan that turns the gate
                  fee into a brilliant morning.
                </p>
              </Link>
              <Link
                href="/blog/things-to-do-with-kids-hazyview-kruger"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Family & Kids
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Hazyview & Kruger with kids
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  What to actually do with children once you&rsquo;ve budgeted
                  the week — and how to pace it.
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
