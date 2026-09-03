import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, H2 } from "@/components/Section";
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

const datePublished = "2026-06-20";
const headline =
  "Kruger, the Panorama Route and Hazyview with kids: a family guide from the farm";

const faqs = [
  {
    q: "What's the best age to take children to Kruger?",
    a: "Honestly, any age — we've watched toddlers and teenagers both have the time of their lives, because a self-drive safari bends to fit your family rather than the other way round. Little ones (even babies) do fine on short morning drives with snacks and a midday nap back at the farm; from about five or six, kids really start to engage — naming animals, ticking a spotting card, arguing over who saw the giraffe first. Note that Kruger's guided bush walks usually carry a minimum age (often around twelve), but the day drives that families do most have no age limit at all.",
  },
  {
    q: "Won't young kids get bored on a game drive?",
    a: "They can, if you treat it like an all-day marathon — so don't. Keep drives to two or three hours, give everyone a small job to do, pack a snack box, and break the morning at one of Kruger's get-out picnic sites where they can run around and stretch their legs. Then come home to the pool. Two happy hours in the bush will outlast a whole grumpy day.",
  },
  {
    q: "Is it safe to go on safari with children?",
    a: "On a self-drive day it's about as safe as a family outing gets: you stay in the car, keep the windows up near the big animals, and only get out at the designated picnic sites and camps. Back at Kanaan the whole property is securely fenced, so children can roam between the pool and the mango grove while you keep half an eye from a deck chair. The things that actually need managing with kids here aren't lions — they're sun, heat and water, so hats, sunscreen and a watchful eye at the pool are the real safety kit.",
  },
  {
    q: "What about malaria with kids?",
    a: "Good news first: Hazyview and the farm sit in a low-risk pocket — we won't call it flatly malaria-free, but in practice a stay with us asks no more than a little common sense with repellent on warm summer evenings, not a course of tablets. Kruger itself is a low, seasonal risk that's at its very lowest in the dry winter (roughly May to September) — which happens to be the easiest season for game viewing with children anyway. For a green-season park visit, or if you're travelling with very young children or pregnant, have a quick word with your doctor first. There's a fuller honest answer in our month-by-month guide.",
  },
  {
    q: "What can we do with kids on a rainy day?",
    a: "Plenty. The Graskop Gorge Lift drops you into a rainforest that's just as magical wet as dry; Perry's Bridge Reptile Park near Hazyview is undercover and a guaranteed hit; Harrie's Pancakes in Graskop is the cosiest lunch on the escarpment; and the Perry's Bridge Trading Post has shops and food to dawdle through. Failing all that, a self-catering kitchen, a stack of board games and the sound of rain on the roof make for a rather lovely afternoon off.",
  },
  {
    q: "Is there anything for teenagers, not just little ones?",
    a: "A good amount. The Big Swing and zip-line at the Graskop Gorge, the Skyway Trails canopy zip-line tour near Hazyview, and tubing or rafting on the Sabie River are exactly the kind of adrenaline teenagers travel for — and the farm's hiking and mountain-bike trails give them room to burn energy on a slow day. Pair that with a Kruger morning and most teenagers forget to be too cool for it.",
  },
  {
    q: "What about toddlers — what suits the littlest ones?",
    a: "Keep it gentle and close to water. A short early Kruger drive (home before the heat), a paddle at the Mac Mac Pools on the Panorama Route, the farm pool and its play structure, the mango grove to toddle around, the easy walk to the farm's own waterfall, and the reptile park for a bit of undercover wonder. Toddlers don't need a packed itinerary — they need a pool, some shade and an early night, all of which we have in abundance.",
  },
  {
    q: "Can we self-cater, and will fussy eaters be okay?",
    a: "Yes — most of our family units are self-catering, with a kitchen or kitchenette and a braai, so you can feed small people on their own schedule and keep the snacks they actually eat to hand. When you'd rather not cook, Harrie's Pancakes and the Perry's Bridge eateries are genuinely kid-friendly, and we do set-menu breakfasts and dinners on request if you'd like a night off. Just tell us what your family needs and we'll sort it.",
  },
  {
    q: "How many days do we need with kids?",
    a: "Four or five nights is the sweet spot. It gives you one unhurried Kruger morning, one Panorama Route day, one Hazyview-adventure day, and a slow farm-and-pool day or two threaded between them — which is exactly the rhythm that keeps children (and parents) happy. Trying to do all of it in two nights is how holidays go sideways; the whole point of basing here is that you don't have to.",
  },
  {
    q: "Are the elephant and animal interactions near Hazyview ethical?",
    a: "We'll be straight with you, because families ask us this a lot: we'd skip the elephant-back rides and any touch-it, feed-it, cuddle-the-cub attractions — they're not in the animals' interest, however sweet the photo. The better story for your kids is seeing animals living wild and free in Kruger, and visiting accredited sanctuaries that don't allow handling — places like the Jane Goodall Institute's Chimp Eden or the Moholoholo rehabilitation centre, where the lesson the children take home is the right one.",
  },
];

export const metadata = createBlogPostMetadata({
  slug: "things-to-do-with-kids-hazyview-kruger",
  title: "Things to do with kids in Hazyview, Kruger & the Panorama Route",
  description:
    "A warm, practical family guide to Kruger, the Panorama Route and Hazyview with children — the easy self-drive safari, the Graskop Gorge Lift and zip-lines, Mac Mac Pools, reptile parks and cultural villages, ethical animal encounters, and the farm-and-pool rhythm that keeps kids (and parents) happy. Based at Kanaan from R250 per person sharing.",
  image: img.familyKrugerKidsHero,
  datePublished,
  category: "guide",
});

export default function FamilyKidsGuidePage() {
  return (
    <>
      <JsonLd
        data={articleLd({
          headline,
          description:
            "A practical, base-centric family guide to the Hazyview / Kruger / Panorama Route triangle with children — the easy self-drive Kruger safari and how to keep small children engaged, the Graskop Gorge Lift and Big Swing, Mac Mac Pools, Skyway zip-lines, Perry's Bridge Reptile Park, Shangana Cultural Village, Sabie River tubing, ethical wildlife sanctuaries (Chimp Eden, Moholoholo), the on-farm pool-and-mango-grove base, the best season to bring kids, and a five-night family rhythm that doesn't burn anyone out.",
          path: "/blog/things-to-do-with-kids-hazyview-kruger",
          image: img.familyKrugerKidsHero.src,
          datePublished,
        })}
      />
      <JsonLd data={faqLd(faqs)} />

      <article>
        <BlogHero
          image={img.familyKrugerKidsHero.src}
          alt={img.familyKrugerKidsHero.alt}
          eyebrow="Guide · Family & Kids"
          title="The Lowveld, at kid height."
          intro="Big Five mornings, a glass lift into a rainforest, zip-lines and reptile parks, and a pool to come home to — the Hazyview, Kruger and Panorama Route week that children actually love, and how to pace it so nobody melts down before lunch."
          byline="Anneli & Matthew"
          datePublished={datePublished}
          readingMinutes={12}
        />

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <TLDR
              items={[
                "The secret to a great family week here isn't doing more — it's rhythm: one big outing in the morning, a long pool afternoon at the farm, repeat.",
                "Kruger is a brilliant first safari for kids — easy tar roads, animals everyone knows, and get-out picnic sites — if you keep the drives short and give every child a job.",
                "The Panorama Route is secretly a kids' adventure park: a glass lift into a rainforest, a Big Swing, natural swimming pools and pancakes.",
                "Hazyview adds its own magnets — zip-lines, a reptile park, a cultural village and tubing on the Sabie — most of them ten to thirty minutes away.",
                "See animals the kind way: wild in Kruger, or at accredited sanctuaries — skip the elephant-back rides and cub-petting. The farm is fully fenced, so kids can roam.",
              ]}
            />

            <p>
              Families are some of our very favourite guests — there is nothing
              quite like watching a child see their first wild elephant from the
              car window, or come tearing up from the pool to tell you about it.
              But we have also seen how a Lowveld holiday with kids can go wrong,
              and it is almost never because there is too little to do. It is
              because there is too <em>much</em>, all crammed into too few days,
              until everyone is hot, overtired and squabbling in the back seat.
            </p>
            <p>
              So this is the guide we wish every family had before they arrived.
              It is built around one simple idea we have watched work again and
              again: <strong>one big thing a day, and the pool for the rest of
              it.</strong> One unhurried Kruger morning. One day on the Panorama
              Route. One Hazyview adventure. And in between, slow farm days where
              the only plan is the water, the mango trees and a braai when the
              light goes soft.
            </p>
            <p>
              Below is everything worth doing with children in our corner of the
              world — what the little ones love, what keeps teenagers off their
              phones, the honest age and safety notes, and the things we would
              gently steer you away from. All of it from one base, so the bed and
              the pool are always waiting at the end of the day.
            </p>
          </div>
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The one rule: one big thing a day.</H2>
            <p>
              The reason families thrive here is geography. Everything is close
              enough to be a half-day, not a whole one — which means you can do
              something wonderful in the morning and still be back at the farm,
              wet hair and ice lollies, by early afternoon. Here is how near the
              three big draws really are.
            </p>
          </div>
          <StatGrid
            stats={[
              {
                value: "~40 min",
                label: "Kruger's Phabeni gate",
                body: "Our closest gate — about forty minutes from the farm, and only fifteen from Hazyview town. A short, sleepy drive in the dark and you are first into the park for the best of the morning's game.",
              },
              {
                value: "~40 min",
                label: "Graskop & the Gorge Lift",
                body: "The near end of the Panorama Route — the Gorge Lift, the falls and pancakes — is about forty minutes up the road; the far viewpoints run closer to an hour, so we pick a handful rather than chase them all.",
              },
              {
                value: "~0 min",
                label: "The pool & the grove",
                body: "The most important attraction of all on a family holiday is the one you come home to. The afternoon belongs to the water and the trees.",
              },
            ]}
          />
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Kruger with kids — the easy first safari.</H2>
            <p>
              A self-drive morning in Kruger is one of the great things you can
              do with children, and it asks far less of them than a guided game
              drive does. You go at your own pace, in your own car, with the
              snacks you packed and the freedom to turn around the moment small
              patience runs out. The animals are the ones from every picture
              book they own — elephants, giraffe, zebra, hippo — which makes the
              spotting genuinely thrilling rather than abstract.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Give every child a job",
                body: "An animal checklist to tick, a pair of binoculars, the job of 'chief spotter' — children who are looking for something stay happy far longer than children who are just being driven around.",
              },
              {
                title: "Keep the drive short",
                body: "Two to three hours is plenty. Go in early when the animals are active and the air is cool, and be honest about when it's time to head home — one good morning beats a long, hot, fractious day.",
              },
              {
                title: "Use the get-out picnic sites",
                body: "Kruger's designated get-out spots — Nkuhlu, Afsaal and others, each with an attendant on hand — let everyone stretch, run, and use a proper loo. Some have a kiosk and hot water for a midday cuppa; a planned leg-stretch resets the whole car.",
              },
              {
                title: "Pick a camp with a pool",
                body: "A couple of the southern rest camps have a pool — sometimes for overnight guests only, so check with SANParks — which can turn a longer day into a lucky mid-drive swim. Either way, Lower Sabie and Skukuza make easy, child-friendly lunch stops by the river.",
              },
              {
                title: "The first one steals the show",
                body: "Nothing prepares a child for the moment a wild elephant actually steps out of the bush in front of the car — the gasp, then the whisper. Go slowly, get there early, and let them be the one to spot it; that single sighting is the one they'll be telling their teacher about for a term.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              One honest word on cost: Kruger charges a daily conservation fee
              per person, tiered by where you&rsquo;re from and reduced for
              children — we won&rsquo;t quote a figure that will be out of date
              by the time you visit, so check the current SANParks rates and
              tell us your family, and we&rsquo;ll help you ballpark the day.
              Half the best things here cost nothing anyway: the waterfall walk,
              the trails and the pool.
            </p>
          </div>
        </Section>

        {/* Inline image — a child on their first easy safari */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src={img.kidsSafariBinoculars.src}
                alt={img.kidsSafariBinoculars.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Give a child a pair of binoculars and a spotting card and a game
              drive becomes a treasure hunt.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">The Panorama Route, kid edition.</H2>
            <p>
              On paper the Panorama Route is a string of grand viewpoints — which
              does not sound like a children's day out. In practice it is one of
              the most fun family drives in the country, because between the
              views are a glass lift, a giant swing, natural swimming pools and
              the best pancakes in Mpumalanga. Here is how to read it for small
              (and not-so-small) travellers.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Graskop Gorge Lift",
                body: "A glass elevator drops down the cliff face into an ancient rainforest, where suspended boardwalks thread along the gorge floor. It is gentle, genuinely magical, and the single best Panorama stop for children — they walk through the forest rather than just look at it.",
              },
              {
                title: "The Big Swing & zip-line",
                body: "Right beside the lift, the brave can take a gorge swing or zip-line across the ravine — the highlight of the day for adventurous teenagers (mind the height and weight rules). Younger ones are perfectly happy watching from the deck.",
              },
              {
                title: "Mac Mac Pools",
                body: "Not the famous falls but the pools just along from them — shallow, clear natural swimming pools with picnic lawns, a perfect warm-afternoon paddle and the easiest stop on the whole route for little legs.",
              },
              {
                title: "God's Window & the falls",
                body: "Keep the viewpoints short and sweet: God's Window's drop is a thrill in itself, and the Lisbon and Berlin Falls are a two-minute walk from the car. Quick stops, big payoff, no marching.",
              },
              {
                title: "Bourke's Luck Potholes",
                body: "Strange, swirling rock cylinders carved by two rivers, with footbridges that let children peer right down into them — equal parts science lesson and adventure playground. A small entry fee applies.",
              },
              {
                title: "Pancakes in Graskop",
                body: "Harrie's Pancakes has fed Panorama travellers for decades, and a sweet-and-savoury stop is the right way to break the day. Carrot cake for the grown-ups, chocolate for negotiating purposes.",
              },
            ]}
          />
        </Section>

        {/* Inline image — the Graskop Gorge Lift / rainforest */}
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
              The rainforest at the foot of the Graskop Gorge Lift — children
              walk through it rather than just look at it.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Hazyview&rsquo;s own kid magnets.</H2>
            <p>
              You do not even have to leave Hazyview&rsquo;s doorstep to fill a
              day. Within ten to thirty minutes of the farm there is a proper
              cluster of family attractions — the kind of hands-on, slightly
              wild fun that children remember long after the viewpoints blur
              together.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Skyway Trails zip-lines",
                body: "A canopy zip-line tour that glides you between treetop platforms high in indigenous forest — guided, harnessed and surprisingly serene. A brilliant half-day for older children and teenagers — there's a minimum age and weight, so message us and we'll confirm the current cut-off for your kids before you build the day around it.",
              },
              {
                title: "Perry's Bridge Reptile Park",
                body: "Snakes, crocodiles, chameleons and tortoises, with knowledgeable handlers and regular talks — undercover, educational and a cast-iron rainy-day winner. Most children come out braver than they went in.",
              },
              {
                title: "Shangana Cultural Village",
                body: "A warm, well-run window into Shangaan culture — a guided village tour, dancing, a marketplace and a festival meal. The kind of gentle cultural day that travels well with curious children of any age.",
              },
              {
                title: "Tubing & rafting on the Sabie",
                body: "Local operators run family floats and livelier white-water sections on the Sabie River depending on the water and your nerve — a wet, giggly half-day for families with slightly older kids. Confirm age limits for the rapids.",
              },
              {
                title: "Perry's Bridge Trading Post",
                body: "A leafy little hub of craft shops, a chocolatier, restaurants and that reptile park, all in one spot on the edge of town — an easy, low-effort outing when you want a relaxed afternoon rather than a mission.",
              },
              {
                title: "Back-of-the-farm adventures",
                body: "Some of the best hours cost nothing: the walk to Kanaan's own waterfall, the hiking and mountain-bike trails, and a torch-lit hunt for the sounds of the bush after dark from the safety of the fence.",
              },
            ]}
          />
        </Section>

        {/* Inline image — Hazyview adventure / zip-lines */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src={img.hazyviewZiplines.src}
                alt={img.hazyviewZiplines.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Zip-lining through the forest canopy near Hazyview — the day older
              kids talk about for weeks.
            </figcaption>
          </figure>
        </div>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Wild animals, the kind way.</H2>
            <p>
              Children are drawn to animals like nothing else, and our corner of
              the world is full of places that promise to get them close. Some of
              those places are wonderful. Some we would quietly steer you past —
              because the lesson a child takes home matters, and a cuddled cub or
              a ridden elephant teaches the wrong one. Our rule is simple: see
              animals living wild, or visit sanctuaries that put the animals
              first and don&rsquo;t allow handling.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "Chimp Eden",
                body: "The Jane Goodall Institute's chimpanzee sanctuary near Mbombela gives rescued chimps a home and visitors a guided, respectful viewing. About an hour away, and one of the most genuinely moving days you can give a child.",
              },
              {
                title: "Moholoholo Rehabilitation Centre",
                body: "A working wildlife-rehabilitation centre out toward Hoedspruit (a longer day trip, roughly an hour and a half), where the guided tour introduces rescued raptors, big cats and more, and explains the real work of conservation.",
              },
              {
                title: "Kruger itself",
                body: "The best animal encounter of all needs no ticket booth: animals living entirely wild and free, on their own terms, seen from your car. Nothing a captive attraction offers comes close to a child's face at a wild elephant.",
              },
              {
                title: "What we'd skip",
                body: "Elephant-back rides and any 'touch it, feed it, walk with it, cuddle the cub' experience. However sweet the photo looks, it isn't in the animal's interest — and the children sense that more than we give them credit for.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              If you&rsquo;re ever unsure whether a particular outfit is doing
              right by its animals, ask us before you book — we&rsquo;d far
              rather have that conversation than see you spend your money in the
              wrong place.
            </p>
          </div>
        </Section>

        <Callout eyebrow="The one we tell every family">
          The best wildlife lesson a child can have is an animal that is wild and
          free — not one that has been taught to pose.
        </Callout>

        {/* Inline image — baby animals in the wild (ethical wildlife) */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <figure>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src={img.impalaLambingSummer.src}
                alt={img.impalaLambingSummer.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Newborn impala in the wild — the kind of sighting that needs no
              fence and teaches the right lesson.
            </figcaption>
          </figure>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Coming home to the farm.</H2>
            <p>
              For all the big days out, the part of a family holiday children
              remember most is often the unstructured one — the long, lazy
              afternoons where they make their own fun. That is exactly what the
              farm is for, and it is the half of a Kanaan week that does the
              quiet work of keeping everyone happy.
            </p>
          </div>
          <NumberedList
            variant="grid"
            items={[
              {
                title: "The pool & play structure",
                body: "The single most-used attraction of any family stay. The pool, the palms, a play structure beside it and a brick deck for the grown-ups — this is where most afternoons happily end up.",
              },
              {
                title: "A fully fenced farm",
                body: "The property is securely fenced, which means children can roam between the pool, the lawns and the mango trees with a freedom they rarely get on holiday — and you can watch from a deck chair instead of trailing behind.",
              },
              {
                title: "The mango grove & the waterfall",
                body: "Forty-year-old mango trees for shade and space to run, and an easy walk to the farm's own waterfall and clear pool — small adventures that cost nothing and tire children out beautifully.",
              },
              {
                title: "Self-catering & a braai",
                body: "Family units with a kitchen or kitchenette and a braai mean you feed small people on their own schedule, keep the snacks they like to hand, and never have to march a tired toddler through a restaurant.",
              },
              {
                title: "Room for the whole family",
                body: "Family and multi-bed rooms keep everyone together under one roof, and for bigger broods the camping ground under the mango grove is made for it.",
              },
              {
                title: "Slow mornings",
                body: "On a no-alarm day, breakfast at the long table, a book in the shade and a swim is a complete itinerary. The farm is just as much a destination as anything beyond the gate.",
              },
            ]}
          />
        </Section>

        {/* Inline images — the farm as a family base (real Kanaan photos) */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src={img.poolSecond.src}
                  alt={img.poolSecond.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The pool and the kids&rsquo; play structure — where most farm
                afternoons end up.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src={img.campingMango.src}
                  alt={img.campingMango.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted">
                Camping under the forty-year-old mango grove — made for big
                families and small adventurers.
              </figcaption>
            </figure>
          </div>
        </div>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">When to come, and what to pack.</H2>
            <p>
              If you have any flexibility, the dry winter months — roughly May to
              September — are the kindest season to bring children: easy game
              viewing, mild blue-sky days, almost no rain to wash out a plan, and
              Kruger&rsquo;s lowest-risk malaria window. The South African winter
              school holidays sit right in the middle of it. Our{" "}
              <Link
                href="/blog/when-to-visit-kruger-hazyview-month-by-month"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                month-by-month seasonal guide
              </Link>{" "}
              walks through every month if you want the detail.
            </p>
          </div>
          <NumberedList
            items={[
              {
                title: "Layers for the dawn",
                body: "Winter mornings in an open car are genuinely cold before the sun gets up, then warm by mid-morning. Pack jackets and beanies you can peel off — kids feel the cold start more than you do.",
              },
              {
                title: "Sun, hats & repellent",
                body: "Sun is the real hazard here, not the lions. High-factor sunscreen, wide-brimmed hats and insect repellent for warm summer evenings are the essentials — and on a hot summer day, start at dawn, carry far more water than feels necessary, and never leave a child in a parked car.",
              },
              {
                title: "Binoculars & a spotting book",
                body: "A cheap pair of binoculars per child and a simple printed animal checklist — honestly the best few rand you'll spend on the trip.",
              },
              {
                title: "A proper snack box",
                body: "Hunger is the enemy of a happy game drive. Pack more water and snacks than you think you need, and you'll buy yourself another hour of good cheer.",
              },
              {
                title: "Swimming kit, always",
                body: "Costumes and towels live in the car, not the suitcase. Mac Mac Pools, the farm pool and a camp pool can all appear on the same day.",
              },
              {
                title: "Patience and a loose plan",
                body: "The best family days here are half-planned. Pick the one big thing, leave room for the unexpected lion (or the unexpected nap), and let the pool catch whatever's left.",
              },
            ]}
          />
        </Section>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">A family week that actually works.</H2>
            <p>
              Put it all together and a Kanaan family week falls into an easy
              rhythm — a big morning, a soft afternoon, and just enough adventure
              to thrill the children without exhausting them. Here is the shape
              we watch our happiest families settle into.
            </p>
          </div>
          <NumberedList
            variant="timeline"
            items={[
              {
                time: "Day 1",
                title: "Arrive and unwind",
                body: "Check in, claim the room, and let the children loose on the pool while you find the shade and a cold drink. The week starts slowly on purpose — no one is going anywhere yet.",
              },
              {
                time: "Day 2",
                title: "A Kruger morning",
                body: "Through the Phabeni gate as the sun comes up for a short, thrilling game drive, a picnic-site leg-stretch, and home to the pool before the day turns fierce. The big one, done early.",
              },
              {
                time: "Day 3",
                title: "The Panorama Route",
                body: "The Graskop Gorge Lift and the Big Swing, a paddle at the Mac Mac Pools, pancakes in Graskop, and home in time for a braai. Adventure and ice cream in equal measure.",
              },
              {
                time: "Day 4",
                title: "A Hazyview adventure (or a slow day)",
                body: "Zip-lines, the reptile park or the cultural village if energy is high — or simply the farm, the waterfall walk and the pool if it isn't. Read the room; both are the right answer.",
              },
              {
                time: "Day 5",
                title: "Home, in no hurry",
                body: "A last long breakfast at the table, one more swim, and the drive out through the Lowveld with a back seat full of stories and a phone full of elephants.",
              },
            ]}
          />
          <div className="prose-kanaan mx-auto max-w-prose">
            <p>
              For the Kruger half of that week we have a guide of its own —{" "}
              <Link
                href="/blog/kruger-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Kruger from Hazyview: the gates, the timing and the morning that
                works
              </Link>{" "}
              — and the{" "}
              <Link
                href="/blog/panorama-route-from-hazyview"
                className="font-medium text-ochre hover:text-ochre-deep"
              >
                Panorama Route guide
              </Link>{" "}
              lays out the full loop.
            </p>
          </div>
        </Section>

        <Section>
          <div className="prose-kanaan mx-auto max-w-prose">
            <H2 className="mb-4">Questions families ask us.</H2>
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

        {/* Inline image — the place every family day comes home to */}
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
              However big the day, it ends here — the pool at Kanaan as the
              Lowveld light goes soft.
            </figcaption>
          </figure>
        </div>

        <Section className="pt-0!">
          <div className="prose-kanaan mx-auto max-w-prose">
            <ClosingBlock
              title="A holiday the whole family remembers"
              thesis="Give the children one wild morning, one big adventure and a long afternoon in the pool, day after gentle day, and you have the kind of family holiday they talk about for years."
              body={
                <>
                  The mistake is trying to see everything; the magic is in the
                  rhythm. Base yourselves here, do one wonderful thing a day, and
                  let the farm — the pool, the mango grove, the fence that lets
                  small people roam — do the rest. Tell us how old your children
                  are and what they love, and we&rsquo;ll help you build the week
                  around them.
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
                    "SANParks — Kruger National Park: rest camps, day visitors & family activities",
                  href: "https://www.sanparks.org/parks/kruger",
                },
                {
                  label:
                    "Mpumalanga Tourism — the Panorama Route & Lowveld family attractions",
                  href: "https://www.mpumalanga.com/",
                },
                {
                  label: "Skyway Trails — zip-line canopy tours, Hazyview",
                  href: "https://www.skywaytrails.com/",
                },
                {
                  label: "Shangana Cultural Village, Hazyview",
                  href: "https://www.shangana.co.za/",
                },
                {
                  label:
                    "Jane Goodall Institute — Chimp Eden chimpanzee sanctuary",
                  href: "https://www.chimpeden.com/",
                },
                {
                  label:
                    "Moholoholo Wildlife Rehabilitation Centre, near Hoedspruit",
                  href: "https://www.moholoholo.co.za/",
                },
              ]}
            />
          </div>
        </Section>

        <WhatsAppCTA
          title="Planning a family trip? Tell us about your kids."
          body="WhatsApp Anneli or Matthew with your children's ages and what they love, and we'll help you shape a week that fits them — which mornings for Kruger, which day for the Panorama Route, the right adventures for their age, and the rooms that keep everyone together. No forms, no auto-responses, just a real conversation about your family's holiday."
          buttonLabel="Plan a family stay on WhatsApp"
          pageKey="theLand"
        />

        {/* Related */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
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
                  The best season to bring children — easiest game viewing,
                  mildest days and the lowest-risk malaria window — laid out
                  month by month.
                </p>
              </Link>
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
                  The gates, the timing and the half-day plan that gets the whole
                  family back to the farm for lunch.
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
