import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { AmenityList } from "@/components/AmenityList";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "School groups, corporate retreats & team-building",
  description:
    "Kanaan Guest Farm hosts school excursions, corporate retreats, workshops and team-building groups in Hazyview, Mpumalanga. Flexible accommodation, on-site catering on request, and wide open spaces.",
  alternates: { canonical: "/groups" },
};

export default function GroupsPage() {
  return (
    <>
      <PageHero
        eyebrow="Groups & retreats"
        title="A working farm built for groups that want room to think."
        lede="Schools, corporates and team-building groups settle into the farm easily — flexible accommodation, on-site catering on request, and wide open spaces a long way from a meeting room."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img.groups.src}
              alt={img.groups.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>What we host</Eyebrow>
            <H2 className="mt-3">Retreats, excursions and gatherings.</H2>
            <div className="prose-kanaan mt-5">
              <p>
                Whether it's a school's outdoor education trip, a corporate
                strategy off-site, a workshop weekend or a small private
                gathering, the farm flexes to fit.
              </p>
              <p>
                Group sizes vary — chat to us about dates and numbers, and
                we'll suggest the right mix of lodge units, the backpackers
                dorm, and camping pitches.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0!">
        <Eyebrow>How groups typically use Kanaan</Eyebrow>
        <H2 className="mt-3 mb-10">Things we set up regularly.</H2>
        <AmenityList
          items={[
            { title: "School excursions", body: "Outdoor education and adventure trips with secure, supervised lodging." },
            { title: "Corporate retreats", body: "Strategy off-sites and team weekends in a quiet, focused setting." },
            { title: "Team-building", body: "Use the trails, pool and entertainment area for activities and downtime." },
            { title: "Workshops", body: "Ideal for slow, focused work over two or three days." },
            { title: "Group getaways", body: "Friends and family taking over a stretch of the farm." },
            { title: "Catering", body: "Breakfast, lunch and dinner on request — tell us numbers and dietary needs." },
          ]}
        />
      </Section>

      <Section className="pt-0!">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
          <div>
            <Eyebrow>Plan with us</Eyebrow>
            <H2 className="mt-3">A few details, and we'll come back with options.</H2>
            <Lede>
              Send us your dates, group size and what you're trying to do.
              We'll respond with the right combination of rooms, pitches and
              catering.
            </Lede>
          </div>
          <div className="prose-kanaan">
            <p>
              Helpful things to share when you enquire:
            </p>
            <ul className="ml-5 mt-3 list-disc space-y-1.5 text-sm leading-relaxed text-ink/80">
              <li>Dates and number of nights</li>
              <li>Headcount and any sub-groups (e.g. learners + chaperones)</li>
              <li>Sleeping preference — private rooms, dorm, camping or a mix</li>
              <li>Catering needs and dietary requirements</li>
              <li>Activities you'd like (hiking, MTB, Kruger day trip, Panorama Route)</li>
              <li>Arrival method (own transport / shuttle / airport pickup needed)</li>
            </ul>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
