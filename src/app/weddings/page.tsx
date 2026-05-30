import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { eventVenueLd } from "@/lib/jsonld";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wedding & Events — Lowveld wedding venue · Kanaan",
  description: `A warm, family-managed wedding and events venue in the beautiful heart of Hazyview, Mpumalanga. Indoor, marquee and on-site camping options for up to ${site.capacity.wedding.withCamping} guests. Just ${site.distances.kmiaMinutes} minutes from Kruger.`,
  alternates: { canonical: "/weddings" },
  openGraph: {
    title: "Wedding & Events · Kanaan Guest Farm",
    description: `A breathtaking Lowveld wedding venue for up to ${site.capacity.wedding.withCamping} guests — intimate weekends, family events, school groups, corporate retreats.`,
    images: [{ url: img.goldenShed.src, alt: img.goldenShed.alt }],
  },
};

export default function WeddingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            eventVenueLd({
              name: `${site.name} — Wedding & Events`,
              description:
                "A flexible Lowveld wedding and events venue with on-site accommodation, camping and marquee-ready outdoor space, in Hazyview, Mpumalanga.",
              path: "/weddings",
              image: img.goldenShed.src,
              maximumAttendeeCapacity: site.capacity.wedding.withCamping,
            }),
          ),
        }}
      />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Wedding & Events", href: "/weddings" },
        ]}
      />
      <PageHero
        eyebrow="Wedding & Events"
        title="An unforgettable weekend, in the beautiful Lowveld."
        lede="A celebration that begins on a Friday and ends on a Sunday morning. Family and friends sleeping on-site, the fire crackling late into the night, and a venue designed around feeling and memory rather than the clock."
      />

      {/* Wide hero — golden hour over the wider farm. The light a Saturday
          evening ceremony rolls into. */}
      <div className="mx-auto max-w-7xl px-5 pt-12 lg:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={img.goldenShed.src}
            alt="Golden hour over the wider Kanaan farm — the light a Saturday-evening ceremony rolls into."
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* The setting + gathering grass */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="prose-kanaan max-w-prose">
            <Eyebrow>The setting</Eyebrow>
            <H2 className="mt-3 mb-5">A whole farm, for a whole wonderful weekend.</H2>
            <p>
              The kind of weekend where no one is in a hurry. Where the only
              thing that really matters is the two of you, and the people you
              have asked to be there beside you.
            </p>
            <p>
              Family and friends arrive on Friday and settle into the lodge
              rooms or pitch a tent in the shade of the mango trees, and the
              weekend gently begins long before the ceremony does. A rehearsal
              dinner around the fire, the crackle of a traditional braai, the
              aroma of delicious food drifting through the warm evening air,
              and people who have not seen each other in years finding each
              other again. And then the wedding day itself, in its own
              beautiful time — relaxed, heartfelt, and unmistakably yours.
            </p>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img.campfire.src}
              alt="Open grass at Kanaan ringed by the mango grove — the lawn the marquee goes up on and the long table that fills it for a wedding dinner."
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Capacity — new realistic bands */}
      <Section className="pt-0!">
        <Eyebrow>Capacity</Eyebrow>
        <H2 className="mt-3 mb-10">Lovingly sized for your guest list.</H2>

        <div className="grid gap-6 md:grid-cols-3">
          <CapacityCard
            label="Intimate"
            range={`Under ${site.capacity.wedding.indoor} guests`}
            note="Indoor in our welcoming main venue — close, warm, every face in the room."
          />
          <CapacityCard
            label="With a marquee"
            range={`${site.capacity.wedding.indoor}–${site.capacity.wedding.withMarquee} guests`}
            note="A beautiful outdoor marquee on the wedding lawn, under the African sky."
            highlight
          />
          <CapacityCard
            label="With camping"
            range={`${site.capacity.wedding.withMarquee}–${site.capacity.wedding.withCamping} guests`}
            note="Marquee plus on-site camping for guests who stay the whole magical weekend."
          />
        </div>
      </Section>

      {/* Pull quote — Anneli's own wedding-blog draft */}
      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
          <p className="font-display text-2xl italic leading-relaxed text-forest-deep sm:text-3xl">
            &ldquo;A wedding designed not around expectations, but around
            feeling. A place where your story is honoured.&rdquo;
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
            — Anneli, on the Kanaan wedding
          </p>
        </div>
      </section>

      {/* Two-photo strip — golden hour + lodge interior (real Kanaan) */}
      <Section>
        <div className="grid gap-6 md:grid-cols-[1.6fr_1fr]">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={img.goldenShed.src}
              alt="Golden hour over the wider Kanaan farm — the sky guests dance under on a Saturday night."
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
            <Image
              src={img.lodgeBedroomEnsuite.src}
              alt="A renovated lodge bedroom at Kanaan — where the wedding party and out-of-town guests stay over the weekend."
              fill
              sizes="(min-width: 768px) 35vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Practical info + also a venue for */}
      <Section className="pt-0!">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="prose-kanaan max-w-prose">
            <Eyebrow>Practical information</Eyebrow>
            <H2 className="mt-3 mb-5">How a magical weekend usually unfolds.</H2>
            <ul className="mt-4 space-y-3 text-ink/85">
              <li><strong className="font-medium text-forest-deep">Two- and three-day weekends.</strong> A warm Friday arrival, a Saturday of celebration, and a Sunday morning when nobody is in a hurry.</li>
              <li><strong className="font-medium text-forest-deep">On-site sleeping</strong> for {site.capacity.sleepingTotal}+ guests across the lodge rooms, plus peaceful camping for many more.</li>
              <li><strong className="font-medium text-forest-deep">Indoor and outdoor</strong> — our main venue, the wedding lawn, and open space ready for a beautiful marquee.</li>
              <li><strong className="font-medium text-forest-deep">Breakfast and dinner happily prepared</strong> — continental breakfast from R{site.meals.breakfast.pricePerPersonZAR} per person, and a traditional South African braai for dinner.</li>
              <li><strong className="font-medium text-forest-deep">Catering and bar</strong> warmly arranged on request.</li>
              <li><strong className="font-medium text-forest-deep">Fully fenced</strong> property with a motorised gate and secure parking, so everyone feels at ease.</li>
            </ul>
          </div>

          <div className="prose-kanaan max-w-prose">
            <Eyebrow>Also a venue for</Eyebrow>
            <H2 className="mt-3 mb-5">Events of every wonderful kind.</H2>
            <p>
              Family reunions, milestone birthdays, school groups, corporate
              retreats and team building all find a warm and welcoming home
              here at Kanaan. The same beautiful farm, lovingly sized to your
              event, with the same genuine South African hospitality.
            </p>
            <p>
              Tell us what you are putting together and we will happily talk
              through what works — bedding, marquee or no marquee, catering
              ideas, and how to make the weekend feel truly yours.
            </p>
          </div>
        </div>
      </Section>

      {/* Sunday morning — quiet finish */}
      <section className="bg-bone">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <Eyebrow>Sunday morning</Eyebrow>
              <H2 className="mt-3 mb-5">No one in a hurry.</H2>
              <Lede>
                Coffee that takes its time. The last of the cake. People who
                slept on the farm last night drifting down for breakfast. The
                kind of ending that turns a weekend into a memory.
              </Lede>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={img.veranda.src}
                alt="A lodge veranda at Kanaan — the brick-paved patio and built-in braai where Sunday morning unwinds."
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest text-bone">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
          <Eyebrow>
            <span className="text-bone/70">Start a conversation</span>
          </Eyebrow>
          <H2 className="mt-3 text-bone">Let us talk about your wonderful weekend.</H2>
          <p className="mt-6 text-bone/85">
            WhatsApp is the easiest, warmest way to reach us. You will get a
            personal reply from Anneli or Matthew — no forms, no
            auto-responders, just a real conversation about your event.
          </p>
          <div className="mt-7">
            <Link
              href={whatsappLink("weddings")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
            >
              Start a wedding enquiry on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function CapacityCard({
  label,
  range,
  note,
  highlight,
}: {
  label: string;
  range: string;
  note: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        highlight
          ? "border-ochre/40 bg-ochre/5"
          : "border-black/10 bg-bone"
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <p className="mt-3 font-display text-3xl leading-tight text-forest-deep">
        {range}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink/80">{note}</p>
    </div>
  );
}
