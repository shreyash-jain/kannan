import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { eventVenueLd } from "@/lib/jsonld";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Weddings & Gatherings — Lowveld wedding venue · Kanaan",
  description: `An intimate wedding and gatherings venue in Hazyview, Mpumalanga. Lodge, camping and marquee options for up to ${site.capacity.wedding.withCamping} guests. Affordable, family-run, and 48 minutes from Kruger.`,
  alternates: { canonical: "/weddings" },
  openGraph: {
    title: "Weddings & Gatherings · Kanaan Guest Farm",
    description: `A Lowveld wedding venue for up to ${site.capacity.wedding.withCamping} people — multi-day weekends, family reunions, school and corporate groups.`,
    images: [{ url: img.groups.src, alt: img.groups.alt }],
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
              name: `${site.name} — Weddings & Gatherings`,
              description:
                "A flexible Lowveld wedding and events venue with on-site accommodation, camping and marquee-ready outdoor space, in Hazyview, Mpumalanga.",
              path: "/weddings",
              image: img.groups.src,
              maximumAttendeeCapacity: site.capacity.wedding.withCamping,
            }),
          ),
        }}
      />

      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Weddings & Gatherings", href: "/weddings" },
        ]}
      />
      <PageHero
        eyebrow="Weddings & Gatherings"
        title="An intimate wedding weekend, in the Lowveld."
        lede="A celebration that begins on a Friday and ends on a Sunday. Guests sleeping on-site. The fire crackling late. A wedding designed around feeling, not a schedule."
      />

      {/*
        Section 6 wedding blog (Anneli's draft) will land here once polished.
        Brief 2026-05-11 specifies: preserve voice, light polish, fix "Hazy view"
        → "Hazyview", add H1, meta, practical section, soft WhatsApp CTA.
      */}

      <Section>
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div className="prose-kanaan max-w-prose">
            <Eyebrow>The setting</Eyebrow>
            <H2 className="mt-3 mb-5">A whole farm, for a whole weekend.</H2>
            <p>
              Imagine a wedding weekend where everything slows down — where the
              only thing that truly matters is the two of you, and the people
              who know your story best. Not a rushed wedding day, but a
              carefully curated experience where every moment feels personal
              and completely your own.
            </p>
            <p>
              Family and friends arrive early, settle into rooms or pitch under
              the mango trees, and spend meaningful time together before the
              celebration even begins. Bachelor and bachelorette evenings on
              the farm, a rehearsal dinner under soft lights, and the wedding
              day itself — relaxed, intentional, unmistakably yours.
            </p>
            <p className="text-sm italic text-muted">
              The longer wedding essay (drafted by Anneli) will be polished and
              published in the journal shortly.
            </p>
          </div>

          <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
            <Image
              src={img.groups.src}
              alt={img.groups.alt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="pt-0!">
        <Eyebrow>Capacity</Eyebrow>
        <H2 className="mt-3 mb-10">Sized for your guest list, not someone else&apos;s.</H2>

        <div className="grid gap-6 md:grid-cols-3">
          <CapacityCard
            label="Indoor"
            number={site.capacity.wedding.indoor}
            note="Comfortable indoor seating in the main venue."
          />
          <CapacityCard
            label="With marquee"
            number={site.capacity.wedding.withMarquee}
            note="Outdoor marquee on the wedding lawn."
            highlight
          />
          <CapacityCard
            label="With camping"
            number={site.capacity.wedding.withCamping}
            note="Marquee plus on-site camping for guests who stay the weekend."
          />
        </div>
      </Section>

      <Section className="pt-0!">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="prose-kanaan max-w-prose">
            <Eyebrow>Practical information</Eyebrow>
            <H2 className="mt-3 mb-5">What a weekend looks like.</H2>
            <ul className="mt-4 space-y-3 text-ink/85">
              <li><strong className="font-medium text-forest-deep">Two- and three-day weekends.</strong> Friday arrival, Saturday celebration, Sunday slow morning.</li>
              <li><strong className="font-medium text-forest-deep">On-site sleeping</strong> for {site.capacity.sleepingTotal}+ across the lodge rooms, plus camping for many more.</li>
              <li><strong className="font-medium text-forest-deep">Indoor + outdoor</strong> — main venue, wedding lawn, marquee-ready open space.</li>
              <li><strong className="font-medium text-forest-deep">Breakfast &amp; dinner on request</strong> — continental breakfast from R{site.meals.breakfast.pricePerPersonZAR} pp, local dishes and braai for dinner.</li>
              <li><strong className="font-medium text-forest-deep">Catering & bar</strong> arranged on request.</li>
              <li><strong className="font-medium text-forest-deep">Fully fenced, motorised gate, secure parking.</strong></li>
            </ul>
          </div>

          <div className="prose-kanaan max-w-prose">
            <Eyebrow>Also a venue for</Eyebrow>
            <H2 className="mt-3 mb-5">Gatherings of every kind.</H2>
            <p>
              Family reunions. Milestone birthdays. School excursions and
              corporate retreats. Team-building weekends. The same farm, sized
              to the group.
            </p>
            <p>
              Tell us what you&apos;re planning and we&apos;ll suggest a layout
              that fits — bedding configuration, marquee or no marquee,
              catering options.
            </p>
          </div>
        </div>
      </Section>

      <section className="bg-forest text-bone">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
          <Eyebrow>
            <span className="text-bone/70">Start a conversation</span>
          </Eyebrow>
          <H2 className="mt-3 text-bone">Let&apos;s talk about your weekend.</H2>
          <p className="mt-6 text-bone/85">
            WhatsApp is the fastest way to reach us. We reply personally — no
            forms, no auto-responders.
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
  number,
  note,
  highlight,
}: {
  label: string;
  number: number;
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
      <p className="mt-3 font-display text-5xl text-forest-deep">{number}+</p>
      <p className="mt-3 text-sm leading-relaxed text-ink/80">{note}</p>
    </div>
  );
}
