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

const datePublished = "2026-07-16";
const headline =
  "Where to eat around Hazyview — an honest food guide, from pocket-money plates to a proper treat";

const faqs = [
  {
    q: "Where are the best places to eat in Hazyview?",
    a: "Most roads lead to Perry's Bridge Trading Post on the R40 — it holds Kuka Café (a broad all-day menu and sushi), Pioneer's Butcher & Grill (serious aged steak) and Topolino's (wood-fired pizza), all in one shaded spot. Beyond it, Red Litchi Farm Café does a lovely farm-to-table lunch, Summerfields is the fine-dining treat, and the Blue Haze Mall and Hazyview Junction cover the familiar chains — Spur, Nando's, KFC and Mugg & Bean. And you can eat very well without leaving the farm at all.",
  },
  {
    q: "Is there fine dining near Hazyview and Kruger?",
    a: "Yes. Summerfields Rose Retreat, about twenty minutes away, is the genuine fine-dining option — a small, seasonal menu that changes with what their gardens are giving that day, worth booking and worth dressing up for. For a big steak night with a proper wine list, Pioneer's Butcher & Grill at Perry's Bridge is the other one to book.",
  },
  {
    q: "Where can I get breakfast near Hazyview before a Kruger day?",
    a: "For an early gate, the honest answer is to eat on the farm — we do an on-request continental breakfast, or you self-cater one before you leave in the dark, because most Hazyview kitchens don't open early enough for a dawn drive. For a later, sit-down breakfast on a slower morning, Kuka Café at Perry's Bridge and Red Litchi Farm Café are both good.",
  },
  {
    q: "Are there family-friendly restaurants around Hazyview?",
    a: "Plenty, and easy ones. Topolino's wood-fired pizza at Perry's Bridge is the kid-proof default; the Blue Haze Mall and Hazyview Junction have a Spur, Nando's, KFC and a Mugg & Bean — familiar names, quick service, and menus children already know. After a big Kruger morning, familiar and fast is often exactly right.",
  },
  {
    q: "Can we self-cater at Kanaan?",
    a: "Absolutely — it's how a lot of our guests keep the week affordable. The lodge units have kitchenettes, every site has a braai, and the camping ground sits right under the mango trees. Buy your meat from Pioneer's butchery or the supermarkets at the Blue Haze Mall, and cook it over a fire here. Tell us you're self-catering and we'll make sure your braai is ready.",
  },
  {
    q: "Does Kanaan serve meals?",
    a: `We do, on request — you just let us know the day before. Breakfast is a set continental menu at around ${site.pricing.currencySymbol}${site.meals.breakfast.pricePerPersonZAR} a person, and dinner is a set menu of local Lowveld dishes and a braai. It's home cooking, not a restaurant, and it's the easiest option on a Kruger day when nobody wants to drive out again. We don't currently offer a halaal menu — ask us and we'll point you to the right option in town.`,
  },
  {
    q: "Do I need to book restaurants in advance around Hazyview?",
    a: "For the casual places — the Perry's Bridge cluster, the mall chains, a lunch café — no, just walk in. For the two treat nights, yes: book Pioneer's Grill and especially Summerfields ahead, particularly over weekends and in the busy seasons. Tell us the night before and we'll help you get the table — we know who to phone.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "where-to-eat-around-hazyview",
  title: "Where to eat around Hazyview — an honest food guide",
  description:
    "An honest, price-graded guide to eating around Hazyview near Kruger: the Perry's Bridge cluster (Kuka Café, Pioneer's Butcher & Grill, Topolino's), Red Litchi Farm Café, fine dining at Summerfields, the familiar mall chains — and how to eat brilliantly on the farm itself, from a braai under the mango trees to our on-request meals.",
  image: img.hazyviewFoodHero,
  datePublished,
  category: "guide",
});

export default function WhereToEatAroundHazyviewPage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A complete, honestly price-graded guide to where to eat around Hazyview in the Mpumalanga Lowveld, near Kruger National Park — the Perry's Bridge Trading Post cluster (Kuka Café, Pioneer's Butcher & Grill, Topolino's Italian and the deli), Red Litchi Farm Café for a farm-to-table lunch, fine dining at Summerfields Rose Retreat, the Rissington Inn, and the familiar chains at the Blue Haze Mall and Hazyview Junction (Spur, Nando's, KFC, Mugg & Bean) — plus self-catering and on-request meals at Kanaan Guest Farm.",
          path: "/blog/where-to-eat-around-hazyview",
          image: img.hazyviewFoodHero.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal & Guides", href: "/blog" },
          {
            label: "Where to eat around Hazyview",
            href: "/blog/where-to-eat-around-hazyview",
          },
        ]}
      />

      <article>
        <BlogHero
          image={img.hazyviewFoodHero.src}
          alt={img.hazyviewFoodHero.alt}
          eyebrow="Guide · Where to eat"
          title="Where to eat around Hazyview — honestly."
          intro="You never have to cook a night here if you don't want to — and you can eat very well at every price, from a pocket-money pizza to a proper fine-dining supper. Here is the honest map of where to eat around Hazyview, graded by what it actually costs, and the case for a braai under our mango trees on the last night."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={10}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "Perry's Bridge Trading Post on the R40 is the easy default — Kuka Café, Pioneer's steakhouse and Topolino's pizza all in one shaded spot.",
                "For a slow lunch: Red Litchi Farm Café (farm-to-table) or the Perry's Bridge veranda.",
                "For a treat: Pioneer's Butcher & Grill for aged steak, or Summerfields for seasonal fine dining — both worth booking.",
                "For familiar and fast: Spur, Nando's, KFC and Mugg & Bean at the Blue Haze Mall and Hazyview Junction — the after-Kruger, kid-friendly option.",
                "For an early Kruger gate: eat on the farm, because town kitchens don't open early enough for a dawn drive.",
                "Or don't go out at all — kitchenettes, braais under the mango trees, and our own on-request breakfast and dinner.",
              ]}
            />

            <p>
              The nicest thing about eating around Hazyview is that you are never
              stuck. After a long day in the bush you can have a steak worth
              dressing up for, a pizza the children will actually eat, or a fire
              lit for you under the mango trees — all within a short drive of the
              same farm gate, and all at prices that won&rsquo;t frighten you.
            </p>
            <p>
              So here is the honest version: where we&rsquo;d send you, what
              it&rsquo;s really like, and roughly what it costs — graded plainly so
              you can match the night to your mood and your budget. We&rsquo;ve
              kept the <em>cost</em> of the whole week in a{" "}
              <Link
                href="/blog/cost-of-a-kruger-lowveld-week-2026"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                separate budget guide
              </Link>{" "}
              — this one is just about the food.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">How we grade it.</H2>
            <p>
              We&rsquo;ve marked every place with a simple 💲 rating, so you can
              see at a glance what a main course is likely to cost. It&rsquo;s a
              2026 guideline, not a promise — kitchens set their own prices — but
              it&rsquo;s an honest steer.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: "💲",
                label: "Easy & familiar",
                body: "Topolino's pizza and the Perry's Bridge deli, plus the chains at the malls — Spur, Nando's, KFC, Mugg & Bean. A plate for pocket money, no booking, and the kids know exactly what they're getting.",
              },
              {
                value: "💲💲",
                label: "A proper sit-down",
                body: "Kuka Café's broad all-day menu, Red Litchi's farm-to-table lunch, the Rissington Inn's relaxed supper. Mid-range, and where most of our guests eat most nights.",
              },
              {
                value: "💲💲💲",
                label: "A real treat",
                body: "Pioneer's Butcher & Grill for aged steak and a hundred-bottle cellar, and Summerfields for a small, seasonal fine-dining menu. Worth booking, and worth dressing up for.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">1. Perry&rsquo;s Bridge — the easy default.</H2>
            <p>
              If you only remember one name, make it this one. Perry&rsquo;s Bridge
              Trading Post, on the R40 in the middle of Hazyview, is an old citrus
              farm turned into a shaded cluster of shops and restaurants — so the
              whole group can want different things and still eat in the same
              place. It&rsquo;s also where the reptile park is, which makes it a
              natural lunch stop on a browsing day.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Kuka Café  💲💲",
                body: "The all-rounder — breakfast right through to dinner, a genuinely broad menu (sushi, curries, grills, plus vegetarian and vegan), good coffee and a proper cocktail list. Consistently well reviewed, and the safe bet when nobody can agree.",
              },
              {
                title: "Pioneer's Butcher & Grill  💲💲💲",
                body: "A serious steakhouse and butchery in one — aged cuts, game like kudu, fresh seafood, and a cellar of over a hundred wines. Open daily from noon, last sit-down orders around 19:30. The dinner to book for a big night.",
              },
              {
                title: "Topolino's Italian  💲",
                body: "Wood-fired pizza, pasta and big salads — the cheerful, kid-proof choice, open all day for lunch and dinner. The one to point the children at while the grown-ups have a glass of wine next door.",
              },
              {
                title: "The deli & veranda  💲",
                body: "Toasted sandwiches, salads, burgers and baked potatoes under age-old trees, with the curio shops a few steps away. The lingering-lunch spot for a day with no alarm.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">2. A slow lunch, and a good breakfast.</H2>
            <p>
              For the gentler days, when lunch <em>is</em> the plan,{" "}
              <strong>Red Litchi Farm Café</strong> is a lovely one — it sits
              within Mountain Creek Lodge and cooks farm-to-table, with produce
              grown down in the valley: think a Mediterranean couscous bowl, a good
              lamb curry, and cakes worth staying for. It&rsquo;s daytime only
              (roughly Tuesday to Saturday, nine to half-three, and Sunday
              mornings), so it&rsquo;s a lunch or a mid-morning treat rather than a
              supper.
            </p>
            <p>
              For <strong>breakfast</strong>, be honest with yourself about the
              day. If you&rsquo;re doing an early Kruger gate, the town
              won&rsquo;t be awake in time — eat on the farm before you leave in
              the dark (more on that below). On a slower morning, Kuka Café at
              Perry&rsquo;s Bridge does a broad, generous breakfast, and Red
              Litchi is a pretty spot to ease into the day.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">3. When it&rsquo;s a treat.</H2>
            <p>
              Every good trip has one night you make a bit special, and the
              Lowveld gives you two honest ways to do it. The first is{" "}
              <strong>Pioneer&rsquo;s Butcher &amp; Grill</strong> at
              Perry&rsquo;s Bridge — the best aged steak in town, a hundred-plus
              wines to choose from, and a room that feels like an occasion. The
              second, about twenty minutes out, is{" "}
              <strong>Summerfields Rose Retreat</strong>: genuine fine dining, a
              small menu that changes with whatever their gardens are giving that
              day, and the kind of quiet, careful cooking you plan an evening
              around. Book both ahead — and for Summerfields, always. For a
              relaxed middle ground, the <strong>Rissington Inn</strong> does a
              warm, unfussy supper with a good bar.
            </p>
          </div>
        </Section>

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
              The covered area at Kanaan — long tables and an open view, where an
              on-request dinner or a big braai comes together.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">4. Familiar and fast, for families.</H2>
            <p>
              There is no shame in it — after a 4:45am start and a morning of
              game viewing, sometimes everyone just wants a name they know. The{" "}
              <strong>Blue Haze Mall</strong> (on the corner of the R40 and R536,
              and the biggest mall in Mpumalanga) and the{" "}
              <strong>Hazyview Junction</strong> centre cover the familiar chains:
              a <strong>Spur</strong> for burgers and ribs and a play area, a{" "}
              <strong>Nando&rsquo;s</strong>, a <strong>KFC</strong>, and a{" "}
              <strong>Mugg &amp; Bean</strong> for coffee and a big all-day
              breakfast. Quick, easy, cheap, and exactly right on a tired night.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">5. Or don&rsquo;t go out at all.</H2>
            <p>
              Here&rsquo;s the option the restaurants won&rsquo;t tell you about:
              some of the best meals of the week are the ones you cook right here.
              The lodge units have kitchenettes, every site has a braai, and the
              camping ground sits under the same forty-year-old mango trees the
              farm is named for. Buy your meat from{" "}
              <strong>Pioneer&rsquo;s butchery</strong> or the supermarkets at the
              Blue Haze Mall, pick up a bottle of something, and let us light the
              fire.
            </p>
            <p>
              And if you&rsquo;d rather someone else did the cooking without
              leaving the farm, we do meals <strong>on request</strong> — just
              tell us the day before. Breakfast is a set continental menu at around{" "}
              {site.pricing.currencySymbol}
              {site.meals.breakfast.pricePerPersonZAR} a person, and dinner is a
              set menu of local Lowveld dishes and a braai. It&rsquo;s home
              cooking, not a restaurant — and on a Kruger night, when nobody wants
              to get back in the car, it&rsquo;s the kindest option there is.
            </p>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.campfire.src}
                alt={img.campfire.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              The gathering spot under the mango grove — where the last night of
              most trips ends up, around a fire.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">A week of eating, the way we&rsquo;d do it.</H2>
            <p>
              You don&rsquo;t need a plan for every meal — but if it helps, this is
              roughly how we&rsquo;d shape a week&rsquo;s eating so it never feels
              like a chore and never blows the budget.
            </p>
          </div>
          <NumberedList
            variant="timeline"
            items={[
              {
                time: "Night 1",
                title: "Keep it easy.",
                body: "You've just driven a long way. A pizza at Topolino's or a Spur the kids know — or braai packs picked up on the way in and eaten under the trees while you unpack slowly.",
              },
              {
                time: "Day 2",
                title: "Kruger day — eat on the farm.",
                body: "Breakfast here before the dark gate, coffee and rusks in your bag for the park, and a relaxed supper at Kuka on the way home. No cooking, no rush.",
              },
              {
                time: "Day 3",
                title: "A slow lunch out.",
                body: "After a gentle morning, a farm-to-table lunch at Red Litchi or a lingering plate on the Perry's Bridge veranda. The day lunch is the event.",
              },
              {
                time: "Day 4",
                title: "The treat night.",
                body: "Book it: aged steak at Pioneer's Grill, or fine dining at Summerfields if you're marking something. Dress up a little; it's a holiday.",
              },
              {
                time: "Night 5",
                title: "Braai under the trees.",
                body: "Buy your meat and a bottle in town, and let us light the fire. It's the cheapest night of the week and, most trips, everyone's favourite.",
              },
            ]}
          />
        </Section>

        <Callout eyebrow="An honest word on prices and hours">
          Every place here sets its own prices, and Lowveld kitchens keep their
          own time — some close on a quiet Monday, some only do lunch, and a
          small menu changes with the day. The 💲 marks are a 2026 guide to what
          a main costs, not a promise. Check before you drive out, and message us
          — we eat here, so we always know who&rsquo;s open.
        </Callout>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Questions about eating here.</H2>
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
              title="Come hungry — we&rsquo;ll point you right"
              thesis="Every price, every craving, every night of the week — sorted within a short drive of the farm, or cooked over a fire right here on it."
              body={
                <>
                  Tell us who&rsquo;s coming and how you like to eat — steak
                  people or pizza people, a treat night or a quiet braai — and
                  we&rsquo;ll tell you where to go, what to book, and which nights
                  to just let us cook. We live here; the recommendations are the
                  honest ones.
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
                  label: "Perry's Bridge Trading Post — official site",
                  href: "https://www.perrysbridge.co.za/",
                },
                {
                  label: "Pioneer's Butcher & Grill — official site",
                  href: "https://www.pioneersgrill.co.za/",
                },
                {
                  label: "Kuka Café, Hazyview — official site",
                  href: "https://www.kukasoup.co.za/",
                },
                {
                  label: "Summerfields Rose Retreat — Eat Out review",
                  href: "https://www.eatout.co.za/article/new-review-fine-food-near-kruger-national-park-summerfields-hazyview/",
                },
                {
                  label: "Restaurants in Hazyview — Tripadvisor",
                  href: "https://www.tripadvisor.co.za/Restaurants-g312630-Hazyview_Mpumalanga.html",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Tell us what you're in the mood for"
          body="Send Anneli your dates and how your crew likes to eat, and we'll build the food side of the week around you — where to book, what's good right now, which night to let us light the braai. No forms, just a real conversation with people who eat here."
          buttonLabel="Ask Anneli where to eat"
          pageKey="theLand"
        />

        {/* Related */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/blog/cost-of-a-kruger-lowveld-week-2026"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Planning your budget
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  What a Lowveld week costs
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Now you know where to eat — here&rsquo;s the honest, simple
                  version of what the whole week adds up to.
                </p>
              </Link>
              <Link
                href="/blog/things-to-do-around-hazyview"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Things to do
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  Everything there is to do
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  Kruger, the Panorama Route and Sabie&rsquo;s waterfalls — the
                  whole menu of days out, and a five-day plan.
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
