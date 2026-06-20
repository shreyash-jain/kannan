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
  NumberedList,
  ClosingBlock,
  WhatsAppCTA,
  BlogHero,
  Sources,
} from "@/components/blog/Blocks";

const datePublished = "2026-06-18";
const headline =
  "The Lowveld Almanac: when to visit Kruger & Hazyview, month by month";

// --- The twelve-month almanac (the heart of the piece) ----------------
// Verified, rounded climatological averages measured from Hazyview/Kanaan
// (~600 m) and the Kruger interior at Skukuza. Gate times are SANParks
// entrance-gate times that shift by season — readers are told to confirm.
type Month = {
  name: string;
  season: string;
  glance: string;
  weather: string;
  wildlife: string;
  panorama: string;
  crowds: string;
  bestFor: string;
};

const months: Month[] = [
  {
    name: "January",
    season: "Green Summer",
    glance:
      "Peak green season — lush, hot and stormy, then quiet once the early-January festive rush clears.",
    weather:
      "~28 °C high / ~18 °C low; ~150 mm, the wettest month, in afternoon storms; humidity ~75–80%. Skukuza 33 °C+. No frost.",
    wildlife:
      "Fair–good. Thick bush and full waterholes scatter the game, but November's impala lambs are everywhere — and draw wild dogs and lions. Peak birding, migrants in. Gates ~05:30–18:30.",
    panorama:
      "Poorest long-view clarity — misty by midday, so go at sunrise. Waterfalls near their thunderous peak, the canyon emerald.",
    crowds:
      "The festive peak holds until schools return (Term 1 starts 14 Jan 2026), then prices fall sharply. Late January is one of the cheapest, quietest windows of the year.",
    bestFor:
      "Birders, green-season photographers, value-seekers.",
  },
  {
    name: "February",
    season: "Green Summer",
    glance:
      "The greenest, stickiest, best-value month — superb birding and patient game viewing.",
    weather:
      "~28 °C / ~18 °C; ~150 mm and the highest humidity of the year (~79%). Skukuza ~33 °C. No frost.",
    wildlife:
      "Fair. Greenest and thickest, so sightings take patience. Excellent birding — migrants in breeding plumage, weavers nesting. Gates ~05:30–18:30.",
    panorama:
      "Mostly misty mornings — go early. Waterfalls at maximum flow.",
    crowds:
      "Low season, and genuinely the cheapest stretch of the year — lodges often discount around 25%.",
    bestFor: "Birders, photographers, budget travellers.",
  },
  {
    name: "March",
    season: "Green Summer",
    glance:
      "The turn — rains taper, the bush starts to open and comfort returns. A lovely transition month.",
    weather:
      "~27 °C / ~17 °C; rain dropping to ~90–100 mm, humidity easing. No frost.",
    wildlife:
      "Good and improving. Bush thinning; kudu and buffalo breeding peak in big, rutting herds. The last migrants are still present. Gates ~05:30–18:00.",
    panorama:
      "Clarity improving as the mist eases while the falls still run strong after the rains — one of the best all-round Panorama months.",
    crowds:
      "Quiet and good value until schools break (Term 1 ends 27 Mar); the week after is calm before Easter. Green-season rates.",
    bestFor:
      "Green-season photographers, waterfall-chasers, value travellers.",
  },
  {
    name: "April",
    season: "Autumn Shoulder",
    glance:
      "Autumn arrives and the Lowveld turns gentle — one of the most comfortable, rewarding months of all.",
    weather:
      "~25–26 °C / ~15–16 °C; rain ~45–66 mm as the dry season begins and the skies clear. No frost.",
    wildlife:
      "Very good — the standout shoulder month. The impala rut begins (most intense in the south); cooler, drier, thinning cover makes for easy sightings. Last migrants depart. Gates ~06:00–18:00 (confirm closing time).",
    panorama:
      "Among the best of the year — clear long views and the falls still strong. The rare both-at-once window.",
    crowds:
      "A sharp spike over Easter (Good Friday 3 Apr – Family Day 6 Apr 2026) and the Term 1–2 break (28 Mar–7 Apr) — book early. Otherwise quiet and good value.",
    bestFor:
      "Couples and families wanting warm days, cool evenings and easy sightings — and anyone doing both Kruger and the Panorama Route.",
  },
  {
    name: "May",
    season: "Autumn Shoulder",
    glance:
      "Early winter and, for our money, the best all-round value month of the year.",
    weather:
      "~24–25 °C days / chilly ~11 °C nights; low rain (~20 mm) under reliably blue skies. Frost essentially unknown at the farm.",
    wildlife:
      "Excellent. The impala rut is at its loud peak; the bush thins fast and water concentrates the game. Wild dogs begin denning (~May–Sep), so those elusive predators are far easier to find. Gates ~06:00–17:30.",
    panorama:
      "Very clear — cold nights bring glass-clear air — and the last strong month for waterfall flow before winter thins them.",
    crowds:
      "Arguably the best value of the year: Easter is over, the July peak hasn't begun, and conditions are already excellent. Low crowds, soft pricing.",
    bestFor:
      "Honeymooners, couples, value travellers and term-time families.",
  },
  {
    name: "June",
    season: "Dry Winter",
    glance:
      "Midwinter — the driest, clearest time of year and the start of classic Big Five season.",
    weather:
      "~22–23 °C days / cold ~8 °C nights (Skukuza ~6 °C); minimal rain (~13 mm, the driest month) and low humidity. Frost only on the higher escarpment, never at Hazyview.",
    wildlife:
      "Excellent. Game congregates at the remaining water — reliable and concentrated; leopard and lion peak in the bare bush; wild-dog denning continues. Gates ~06:00–17:30 — pack warm layers for the dark start.",
    panorama:
      "The clearest, driest month of all, with the best long views of the year. Forest-fed falls hold up even as overall flow declines.",
    crowds:
      "Demand climbs toward the winter holidays (Term 2 ends 26 Jun; the 15 Jun special and 16 Jun Youth Day cluster into an early long weekend). Mid-term weekdays are calmer.",
    bestFor:
      "Big-cat seekers, first-timers wanting the easiest sightings, and clear-view chasers. Dress for cold dawns.",
  },
  {
    name: "July",
    season: "Dry Winter",
    glance:
      "The coldest month and the heart of the dry-season peak — prime Big Five, busiest gates.",
    weather:
      "Cold pre-dawn, mild sunny days. ~22–23 °C / coldest ~8 °C nights (Skukuza ~6 °C); negligible rain (~10–16 mm) and exceptionally clear air. No meaningful frost in the Lowveld.",
    wildlife:
      "Excellent — one of the very best months. Thin bush and scarce water make for hugely rewarding elephant, buffalo, lion and leopard, especially along the Sabie and the permanent rivers. Wild dogs still denning. Gates ~06:00–17:30.",
    panorama:
      "Second-best clarity of the year; the falls are dropping further — come for the views, not the falls.",
    crowds:
      "Peak. The winter school holiday (27 Jun–20 Jul), the MacMac Ultra (1–5 Jul) and the Innibos festival in Mbombela (2–5 Jul 2026) book out lodging. Reserve well ahead.",
    bestFor:
      "Big-cat seekers and Big Five first-timers tied to the winter holiday who don't mind sharing the roads. Warm layers essential.",
  },
  {
    name: "August",
    season: "Dry Winter",
    glance:
      "Late winter — water at its scarcest, game concentrations at their highest, and the gates quieter again.",
    weather:
      "Warming but dry. ~24–25 °C / ~10 °C nights; low rain (~22 mm) under clear skies. Late August brings the first warm, dusty days. No frost.",
    wildlife:
      "Excellent. Very limited water clusters animals predictably — superb for predators, elephant and big cats. Wild-dog pups emerging. The most open, dusty bush of the year. Gates ~06:00–18:00.",
    panorama:
      "Clear, though the first spring haze can soften the longest views; the falls are among the lowest of the year.",
    crowds:
      "Quieter after the July holidays and good value. Women's Day (Sun 9 Aug, observed Mon 10 Aug 2026) lifts that long weekend.",
    bestFor:
      "Serious big-cat and Big Five seekers, and photographers wanting peak concentrations with thinner crowds than July. Excellent winter value.",
  },
  {
    name: "September",
    season: "Dry Winter",
    glance:
      "Spring — many guides' single favourite month: scarce water, open bush and surging activity.",
    weather:
      "Warming and dry. ~26–27 °C / ~13 °C nights; rain ticking up (~30–40 mm) with the first late storms. Trees flush green and knobthorns flower. No frost.",
    wildlife:
      "Excellent — arguably the best of the year. The last waterholes draw huge concentrations, the bare bush gives maximum visibility, predators are highly active and the first newborns appear late in the month. Gates ~06:00–18:00.",
    panorama:
      "Clear but increasingly hazy; the waterfalls are at their weakest before the rains.",
    crowds:
      "Moderate to high around Heritage Day (Thu 24 Sep) and the spring break (24 Sep–5 Oct 2026). Term-time weekdays earlier in the month are quiet and high-quality.",
    bestFor:
      "The connoisseur's pick — couples, photographers and keen safari-goers wanting top dry-season viewing with milder mornings than midwinter.",
  },
  {
    name: "October",
    season: "Spring Build-up",
    glance:
      "The hot, dry crescendo — intense waterhole action just before the rains break.",
    weather:
      "Warming fast and often hot. ~26–27 °C / ~15 °C nights; rain ~45–65 mm in dramatic late-afternoon storms as the first humidity returns. Skukuza hotter. No frost.",
    wildlife:
      "Very good to excellent. Game is packed at the last water — drive early to beat the fierce midday heat. The first impala lambs drop toward month-end and the first migrants arrive. Gates ~05:30–18:00.",
    panorama:
      "Transitional — cloud building and the first storms, but the falls begin recovering. Mornings can still be clear.",
    crowds:
      "The spring break runs to 5 Oct; thereafter it's quiet and good shoulder value before the festive build-up.",
    bestFor:
      "Heat-tolerant game-viewers and photographers wanting dust-gold light and intense waterhole sightings. Dawn drives to beat the heat.",
  },
  {
    name: "November",
    season: "Green Summer",
    glance:
      "Early summer — an underrated month of newborns everywhere, returning migrants and active predators.",
    weather:
      "The rains establish. ~27 °C / warm ~16 °C nights; rain ~60–70 mm in afternoon storms. The bush turns lush. No frost.",
    wildlife:
      "Very good and underrated. The big synchronised impala lambing pulse floods the park with newborns and outstanding predator action — wild dogs feeding pups, lions hunting; wildebeest and zebra calve. Migrants pour back (woodland kingfishers from mid-November). Gates ~05:30–18:30.",
    panorama:
      "Wet mornings and afternoon mist (start early), but the waterfalls strengthen fast — water over views.",
    crowds:
      "A low-crowd, best-value shoulder before the mid-December spike. A one-off local-government election holiday (Wed 4 Nov 2026) makes a mid-week long weekend.",
    bestFor:
      "Couples, photographers and value travellers wanting greening bush, baby animals and dramatic skies — soft rates, quiet roads.",
  },
  {
    name: "December",
    season: "Green Summer",
    glance:
      "Full summer — hot, humid, lush and full of young animals. The festive peak.",
    weather:
      "Hot, humid and wet. ~28 °C / muggy ~17 °C nights; Skukuza 33 °C+. Among the wettest months (~85–95 mm) with frequent heavy storms, full rivers and falls. No frost.",
    wildlife:
      "Good. Calving continues (impala, wildebeest, zebra young) and birding is excellent with all migrants breeding. Predators are busy, but thick bush and full waterholes disperse the game — drive early and slow. Gates ~05:30–18:30 (camp gates from ~04:30).",
    panorama:
      "Cloudiest and wettest — the least reliable long views (go at first light); waterfalls very high and the canyon at its greenest.",
    crowds:
      "The year's peak. Festive holidays plus Reconciliation Day (Wed 16 Dec), Christmas (Fri 25 Dec) and the Day of Goodwill (Sat 26 Dec 2026). Top rates — book 6–12 months ahead.",
    bestFor:
      "Families tied to the festive break, birders and green-scenery photographers who'll accept the heat and crowds for lush drama and powerful waterfalls. Book very early.",
  },
];

function MonthCard({ month }: { month: Month }) {
  const rows: { label: string; value: string }[] = [
    { label: "Weather", value: month.weather },
    { label: "Wildlife", value: month.wildlife },
    { label: "Panorama", value: month.panorama },
    { label: "Crowds & value", value: month.crowds },
    { label: "Best for", value: month.bestFor },
  ];
  return (
    <article className="flex flex-col rounded-2xl border border-black/5 bg-bone p-6 md:p-7">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-ochre">
        {month.season}
      </p>
      <h3 className="mt-1 font-display text-2xl text-forest-deep md:text-3xl">
        {month.name}
      </h3>
      <p className="mt-2 font-display text-base italic leading-snug text-forest-deep/80">
        {month.glance}
      </p>
      <dl className="mt-5 space-y-3 border-t border-black/5 pt-5">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[7.5rem_1fr] gap-3">
            <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
              {r.label}
            </dt>
            <dd className="text-sm leading-relaxed text-ink/80">{r.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

const faqs = [
  {
    q: "What is the overall best time of year to visit Kruger from Hazyview?",
    a: "For most first-timers, the dry winter — roughly May to September — is the easiest, most reliable window: thin bush, game gathered at the few remaining water sources and the clearest Panorama views. Our own honest favourite is the shoulder either side of the July crowd — May or September — which gives you the same easy sightings, half the people and a softer price.",
  },
  {
    q: "What is the cheapest time to visit Kruger, and which 2026 SA school-holiday weeks should we book around?",
    a: "The cheapest and quietest stretch is the late-January-through-March green season, plus the shoulder weeks of May and November. The two peaks — mid-December to mid-January over the festive season, and late June to 20 July over the winter holiday — drive both crowds and prices. The 2026 windows to book around: Term 1 ends 27 March; Easter is 3–6 April; the winter break runs 27 June–20 July (with the 15 June special and 16 June Youth Day); the spring break is 24 September–5 October; and Term 4 ends 9 December into the festive peak. There's also a one-off election holiday on Wednesday 4 November. In-term mid-week stays are quietest — and basing at Kanaan from R250 per person sharing keeps the whole week affordable.",
  },
  {
    q: "When is the best time to visit Kruger with young children?",
    a: "The dry winter, especially April–early June and September: thin bush, animals at the water and quick sightings; crisp ~11 °C mornings warming to mild ~25 °C days; almost no rain to wash out a Panorama day; and it's also Kruger's lowest-risk malaria window, which matters most for little ones (see the malaria question below). The long winter school holiday (~late June–20 July 2026) is built around this season. From Kanaan the close Phabeni gate (~15 minutes) makes the dawn start manageable, with the pool and the mango grove waiting when you come home.",
  },
  {
    q: "Green season or dry season — what's the real difference for a first-time family?",
    a: "They're almost opposite holidays. The dry winter (May–September) is brown, dusty and cold at dawn, but the open bush makes for easy game — classic Big Five and the clearest views. The green summer (November–March) is emerald under storm skies, with impala lambing, migrants in and the falls thundering — but the thick bush scatters the game, and it's hot and humid. A first family chasing easy sightings should come in winter; if it's birds, babies, lush scenery and value you're after, the green season rewards a little patience.",
  },
  {
    q: "What's the weather like in Hazyview and the Lowveld each month?",
    a: "Hazyview sits at about 600 m on the wet foot of the escarpment. Daytime highs hold steady around 22–23 °C in midwinter and climb to about 28 °C in midsummer; nights swing from ~18 °C in summer down to ~8 °C at the coldest in July. Rain is strongly seasonal — about 800–900 mm a year, wettest in January, February and December (~95–155 mm) and near-dry in June and July (under ~15 mm). There is no frost in the Hazyview Lowveld — only on the higher escarpment. The Kruger interior at Skukuza runs hotter (~33 °C) and drier.",
  },
  {
    q: "Do we need to worry about malaria — at the farm and in Kruger?",
    a: "Two honest answers, because the farm and the park are different. Where you actually sleep, you can relax: Hazyview and Kanaan sit in a low-risk pocket of the Lowveld, and you don't need to take malaria tablets just to stay with us — the official maps put our town and its neighbours (White River, Mbombela, Sabie) in the gentlest margin of the region, well off the high-risk belt up on the Mozambique border. We won't tell you it's flatly 'malaria-free,' because that wouldn't be honest — but in practice a stay around Hazyview asks no more than a little common sense on warm summer evenings: a touch of repellent and a long-sleeved shirt at sundown. Kruger itself is a different story: it's a genuine, if generally low and seasonal, malaria area — highest in the warm, wet months (roughly September to May) and very low in the dry winter. So for a day in the park, cover up at dusk and wear repellent, and have a quick word with your doctor about preventative tablets for green-season visits — especially if you're pregnant or travelling with little ones, who should always get a doctor's advice first.",
  },
  {
    q: "What's the best month to do both Kruger and the Panorama Route in one trip?",
    a: "April and May. By then the autumn rains have eased enough for clear escarpment long views, yet the falls still run strong on leftover rain — the rare both-at-once window — while Kruger's bush thins and the game concentrates. The dry winter (June–September) still gives you superb game and the clearest views, just with thinner falls. Whenever you come, drive the escarpment in the morning, before the afternoon mist climbs.",
  },
  {
    q: "What time do the Kruger gates open and close, and does it change through the year?",
    a: "Yes, it shifts with the season. As a guide: November–March open around 05:30 (closing 18:00–18:30); April and August–October open at 06:00 or 05:30 (closing 18:00); and May–July open at 06:00 (closing 17:30). Those are entrance-gate times — camp gates differ and can open as early as 04:30 in midsummer — and SANParks can change them without notice, so confirm for your month. From Kanaan, Phabeni gate is about 15 minutes away, so you can comfortably be first in the queue.",
  },
  {
    q: "Which is the quietest month to avoid the crowds?",
    a: "February — a warm, wet, very green shoulder after the festive crowds have cleared, when even upmarket lodges discount and the roads feel empty. The trade-off is the heat, the humidity and harder big-game spotting. If you'd rather have easy winter game viewing without the winter crowds, aim for May (after Easter, before July) or term-time weekdays in September.",
  },
  {
    q: "When is the best time for birdwatching?",
    a: "Green summer, November–March, building as the migrants arrive through late September and October. Kruger has around 500 species (roughly half resident year-round), and the active list tops 400 in the wet season as the migrants pour in — woodland kingfishers (mid-November to March), cuckoos, bee-eaters and storks, with summer rains drawing herons, storks and egrets and the residents in breeding plumage. The birder's calendar is the exact inverse of the big-cat seeker's. The escarpment forests around Graskop add forest and highland species within an easy drive.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "when-to-visit-kruger-hazyview-month-by-month",
  title: "When to visit Kruger & Hazyview: a month-by-month almanac",
  description:
    "An honest, base-centric month-by-month guide to the best time to visit Kruger National Park and Hazyview — the weather, the wildlife, the Panorama Route views and the 2026 crowds for all twelve months, measured from the Lowveld, with the sweet-spot months and the value weeks nobody books.",
  image: img.lowveldGreenSeason,
  datePublished,
  category: "guide",
});

export default function SeasonalAlmanacGuidePage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical, base-centric month-by-month almanac of the best time to visit Kruger National Park and Hazyview — the weather, wildlife, Panorama Route visibility, waterfall flow and 2026 South African school-holiday crowds for every month of the year, the sweet-spot shoulder months (April–May and September), the honest case for the green season, and a clear best-month verdict for each kind of traveller.",
          path: "/blog/when-to-visit-kruger-hazyview-month-by-month",
          image: img.lowveldGreenSeason.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal & Guides", href: "/blog" },
          {
            label: "When to visit Kruger & Hazyview, month by month",
            href: "/blog/when-to-visit-kruger-hazyview-month-by-month",
          },
        ]}
      />

      <article>
        <BlogHero
          image={img.lowveldGreenSeason.src}
          alt={img.lowveldGreenSeason.alt}
          eyebrow="Guide · Seasonal Almanac"
          title="When to come, month by month."
          intro="There is no bad month in the Lowveld — only different kinds of good. Here is an honest walk through all twelve, from our breakfast table: Kruger, the Panorama Route and life on the farm, and how to find the month that's really yours."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={11}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "There is no bad month in the Lowveld — only different kinds of good. The month everyone overlooks is often the one we'd choose ourselves.",
                "Dry winter (May–Sep) is the easiest game viewing and the clearest Panorama views — and the busiest, priciest peak sits right in the middle of it.",
                "Green summer (Nov–Mar) is the best value and the best birding, with newborn animals and thundering waterfalls — you just trade thick bush and heat for them.",
                "April–May and September are the sweet spots: winter's easy sightings, half the crowds, softer prices.",
                "Book around the 2026 South African school holidays — the two peaks are mid-December → mid-January and 27 June → 20 July.",
              ]}
            />

            <p>
              Here is the thing we tell guests over the breakfast table, and we
              mean it: there is no bad month in the Lowveld, only different kinds
              of good — and the months everyone overlooks are often the ones we
              would choose for ourselves. The whole world tells you to come in
              July for the big cats, and they are not wrong; but July is also
              when the rates climb and the gates queue.
            </p>
            <p>
              So before you book around someone else&rsquo;s calendar, let us
              walk you honestly through all twelve of ours. Most people who base
              themselves here are doing the same wonderful thing — a do-both
              week of Kruger safari and the Panorama Route, with slow farm days
              in between — and every one of those three has its own seasons. The
              animals follow the water; the long escarpment views live and die
              by the mist; the waterfalls by the rain. The trick is finding the
              week where they line up for the kind of trip you actually want.
            </p>
            <p>
              This is that guide. Every figure below is measured from right here
              — Hazyview at about six hundred metres, on the wet foot of the
              escarpment, with the hotter, drier Kruger interior an hour down the
              road — so you know what your week will really feel like, not vaguely
              what &ldquo;the park&rdquo; is doing. Start with the four seasons,
              then drop into the month that is calling you.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The four seasons, at a glance.</H2>
            <p>
              The Lowveld really runs on four moods, not twelve. Before the
              month-by-month detail, here is the shape of the year — what each
              stretch does for the game, the views and your wallet.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Green Summer · Nov–Mar",
                body: "Lush, hot and quietly the best value — the months nobody books and we secretly love. The first rains turn the Lowveld emerald under thunderstorm skies; Hazyview sits at ~27–28 °C days and sticky 17–18 °C nights, the Kruger interior 33 °C+. Impala lamb in their thousands from late November, summer migrants flood in, and the falls run to thunder. The trade-offs: thick bush scatters the game, and the long Panorama views need an early start. Best for birders, photographers and value-seekers.",
              },
              {
                title: "Autumn Shoulder · Apr–May",
                body: "The connoisseur's window — easy game viewing, glass-clear escarpment air and soft prices. The rains taper and the bush thins; Hazyview gives 24–26 °C days and crisp 11–15 °C mornings as the humidity falls away. The impala rut roars to an April–May peak, water concentrates the game, and God's Window earns its name. Aside from Easter (3–6 Apr 2026), low crowds and soft rates — arguably the best all-round value before July.",
              },
              {
                title: "Dry Winter · Jun–Sep",
                body: "Classic Big Five country — the easiest, most reliable game viewing and the clearest views of the year. Cold dawns (~8 °C at Hazyview) give way to mild, sunny 22–27 °C days with negligible rain. The bare bush pins the game to the rivers and waterholes; big-cat sightings peak and wild dogs den (~May–Sep). June–July are coldest and busiest with the winter school holidays; August–September are many guides' favourite. The trade-off is brown, dusty, cold-dawn country.",
              },
              {
                title: "Spring Build-up · Oct",
                body: "The hot, dry crescendo — intense waterhole action just before the rains break. The hottest, driest run-up of the year: Hazyview around 27 °C with the first humidity and late thunderstorms. Game is still packed at the last water (drive early), and the first impala lambs and migrants arrive. Dust-gold light, building storms and the first hint of green.",
              },
            ]}
          />
        </Section>

        {/* Inline image — the dry-winter waterhole, classic Big Five season */}
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
              A dry-winter waterhole in southern Kruger — when the bush is bare,
              the game comes to the water and the sightings come easy.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">When to come, and for what — month by month.</H2>
            <p>
              Here is the heart of it. Each month answers the same five
              questions, in order: what the weather does, where the wildlife is,
              whether the Panorama Route will show you anything, what the crowds
              and the prices are doing, and — honestly — who that month is for.
              Gate times are the SANParks entrance-gate times, which shift by
              season; confirm them before a dawn start.
            </p>
          </div>

          {/* The twelve-month almanac — custom inline grid, breaks out wide.
              Split Jan–Jun / Jul–Dec around a spotlight image (the brief's
              "place ~mid-grid"). */}
          <div className="not-prose mx-auto mt-4 grid w-full max-w-5xl gap-4 px-5 md:grid-cols-2 lg:px-0">
            {months.slice(0, 6).map((m) => (
              <MonthCard key={m.name} month={m} />
            ))}
          </div>

          {/* Inline image — the clear winter Panorama view, mid-grid */}
          <div className="mx-auto mt-4 max-w-5xl px-5 lg:px-8">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={img.panoramaClearWinterView.src}
                  alt={img.panoramaClearWinterView.alt}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                God&rsquo;s Window on a clear winter morning — the dry months
                hand you the longest views of the year.
              </figcaption>
            </figure>
          </div>

          <div className="not-prose mx-auto mt-4 grid w-full max-w-5xl gap-4 px-5 md:grid-cols-2 lg:px-0">
            {months.slice(6).map((m) => (
              <MonthCard key={m.name} month={m} />
            ))}
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              The case for the green season — the months nobody books.
            </H2>
            <p>
              Every operator page sends you to winter, and winter is wonderful.
              But we want to make the quiet case for the other half of the year,
              because it is the half we would choose for ourselves — and the half
              that keeps a week here affordable.
            </p>
            <p>
              From November to March the Lowveld is at its most alive. The first
              rains break the heat into towering afternoon thunderstorms, and the
              whole world turns green almost overnight. The impala lamb in a great
              synchronised pulse — thousands of newborns dropping within a couple
              of weeks — and that flood of young animals brings the predators out:
              wild dogs feeding pups, lions hunting in the long grass. The summer
              migrants pour back in, the birding tips over four hundred active
              species, and the waterfalls on the Panorama Route run to full,
              thundering flow.
            </p>
            <p>
              Yes, the bush is thick and the game takes more patience to find. Yes,
              it is hot, and the mornings can be misty over the escarpment. But the
              roads are quiet, the rates are soft — even
              the upmarket lodges discount in February — and the light, after a
              storm, is the kind photographers drive a long way for. It is not the
              easy-mode safari of July. It is the richer, greener, cheaper one.
            </p>
          </div>
        </Section>

        <Callout eyebrow="What we tell guests at the breakfast table">
          There is no bad month in the Lowveld — only different kinds of good.
        </Callout>

        {/* Inline images — the green-season pair: full falls + newborn lambs */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src={img.sabieWaterfallFullFlow.src}
                  alt={img.sabieWaterfallFullFlow.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The Panorama Route waterfalls at full summer flow — the green
                season&rsquo;s reward.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src={img.impalaLambingSummer.src}
                  alt={img.impalaLambingSummer.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                November&rsquo;s impala lambs — the synchronised pulse of
                newborns that brings the predators out.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Booking around the 2026 calendar.</H2>
            <p>
              The single biggest lever on what you pay and how busy the roads
              feel is the South African school calendar. Here are the windows to
              book well ahead for — and the genuinely quiet weeks the deals
              hide in.
            </p>
          </div>
          <NumberedList
            items={[
              {
                title: "The festive peak — mid-December to mid-January",
                body: "The year's busiest, priciest stretch, built around Reconciliation Day (16 Dec), Christmas and the Day of Goodwill (26 Dec) and the long school break. Lush and full of young animals, but book six to twelve months ahead.",
              },
              {
                title: "The winter holiday — 27 June to 20 July 2026",
                body: "Peak dry-season game viewing meets the winter school break, and the MacMac Ultra and Innibos festival (both early July) on top of it. Superb wildlife, fully booked lodging — reserve early or aim for the shoulders.",
              },
              {
                title: "Easter and the autumn break — 28 March to 7 April 2026",
                body: "A sharp spike over Good Friday (3 Apr) and Family Day (6 Apr) in one of the loveliest months. Book the Easter week early; the weeks on either side are quiet and good value.",
              },
              {
                title: "The spring break — 24 September to 5 October 2026",
                body: "Heritage Day (24 Sep) opens a busy fortnight across superb late-dry-season viewing. The term-time weekdays just before it are quiet and high-quality.",
              },
              {
                title: "The smaller long weekends",
                body: "Watch the 15–16 June Youth Day cluster, Women's Day (9–10 Aug), the one-off election holiday (Wed 4 Nov 2026) and the December public holidays — each lifts demand for a few days around it.",
              },
              {
                title: "The quiet weeks worth chasing",
                body: "February is the cheapest of all, with May and November the best-value shoulders and in-term mid-week stays quiet almost year-round. Basing at Kanaan from R250 per person sharing keeps the whole week affordable.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">So — when should you come?</H2>
            <p>
              In the end the right month is not about the park, it is about you.
              Find yourself in the list below and let it point you at the weeks
              we would book if we were planning your kind of trip.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Big-cat seekers → June–September",
                body: "The bare winter bush and scarce water make predators easiest to find of all; August and September are the peak, with milder mornings than midwinter.",
              },
              {
                title: "First-time families → April–early June & September",
                body: "Thin bush, animals at the water, quick sightings, mild days and almost no rain to spoil a Panorama day. The winter school holiday is built around this season; from Kanaan the Phabeni gate (~15 min) makes the dawn start easy.",
              },
              {
                title: "Birders → November–March",
                body: "The summer migrants flood in from mid-November and the active list tops four hundred species. The exact inverse of the big-cat calendar — green, loud and alive.",
              },
              {
                title: "Photographers → the green season & September light",
                body: "Emerald storm-skies, dramatic light and newborn animals from November to March, then the dust-gold light and huge waterhole concentrations of September.",
              },
              {
                title: "Couples & honeymooners → May & September",
                body: "Easy sightings, glass-clear air and soft shoulder prices on either side of the July crowd — the most romantic, least hurried weeks of the year.",
              },
              {
                title: "Budget & value → February, May & November",
                body: "The cheapest, quietest stretches, with genuine low-season rates and conditions still well worth the trip. From R250 per person sharing at Kanaan.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">
              Questions we get asked about when to visit.
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

        {/* Inline image — the place every month comes home to (real farm photo) */}
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
              Whatever month you choose, the day ends here — the pool at Kanaan
              as the Lowveld light goes.
            </figcaption>
          </figure>
        </div>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="The month that's yours"
              thesis="Come in July for the big cats and the crowds; come in May or September for the same easy sightings and half the people; come in February for the green, the birds and the best rates of the year."
              body={
                <>
                  The mistake is booking around someone else&rsquo;s calendar.
                  There is no bad month in the Lowveld — only the one that fits
                  the trip you actually want, and we would happily talk it through
                  with you before you commit a cent. Find the month that&rsquo;s
                  yours, and the rest of the week falls into place around it.
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
                    "SANParks — Kruger National Park: climate, entrance-gate times & rates",
                  href: "https://www.sanparks.org/parks/kruger",
                },
                {
                  label:
                    "SafariBookings — Kruger National Park climate & best time to visit",
                  href: "https://www.safaribookings.com/kruger/climate",
                },
                {
                  label:
                    "Climates to Travel — South Africa climate (Lowveld / Skukuza)",
                  href: "https://www.climatestotravel.com/climate/south-africa",
                },
                {
                  label:
                    "Climate-Data.org — Hazyview & Lowveld monthly temperature & rainfall",
                  href: "https://en.climate-data.org",
                },
                {
                  label:
                    "Department of Basic Education — South African 2026 school calendar",
                  href: "https://www.education.gov.za",
                },
                {
                  label:
                    "Kruger birding & summer-migrant calendar — krugerpark.co.za",
                  href: "https://www.krugerpark.co.za",
                },
                {
                  label:
                    "SANParks — malaria in Kruger (risk, season & precautions)",
                  href: "https://www.sanparks.org/parks/kruger/useful-information/malaria",
                },
                {
                  label:
                    "CDC Yellow Book — South Africa malaria (Mpumalanga / Kruger, seasonal)",
                  href: "https://www.cdc.gov/yellow-book/hcp/africa-middle-east/south-africa.html",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Not sure which month is yours?"
          body="WhatsApp Anneli or Matthew — tell us who's coming and what you most want from the week, and we'll tell you honestly which month suits you, which to book around, and how to find the quiet value either side of the crowds. No forms, no auto-responses, just a real conversation about your trip."
          buttonLabel="Find your month on WhatsApp"
          pageKey="theLand"
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
                  Once you have picked your month, here are the gates, the
                  timing and the half-day plan that gets you back to the farm
                  for lunch.
                </p>
              </Link>
              <Link
                href="/blog/panorama-route-from-hazyview"
                className="group block rounded-2xl border border-black/5 bg-bone p-6 transition-colors hover:border-ochre/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Guide · Panorama Route
                </p>
                <h3 className="mt-3 font-display text-xl text-forest-deep group-hover:text-ochre">
                  The Panorama Route from Hazyview
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  The other great day of the week — God&rsquo;s Window, the
                  Blyde River Canyon and the loop that works, and the season
                  that hands you the clearest views.
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
