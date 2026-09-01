import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { PackageConfigurator } from "@/components/PackageConfigurator";
import { img } from "@/lib/images";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Packages — Kruger safari, Panorama Route & cultural experiences · Kanaan",
  description: `Multi-day stays at Kanaan Guest Farm in Hazyview, just ${site.distances.kmiaMinutes} minutes from Kruger Mpumalanga airport. Build your own 2-, 3- or 5-night package with a full-day Kruger safari, optional Panorama Route, Shangana cultural evening and KMIA airport transfers.`,
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Packages · Kanaan Guest Farm",
    description: `Multi-day Kruger and Lowveld packages from Kanaan Guest Farm — accommodation, full-day safari, Panorama Route and cultural experiences.`,
    images: [{ url: img.lodgeRoom.src, alt: img.lodgeRoom.alt }],
  },
};

export default function PackagesPage() {
  return (
    <>
      <Hero
        eyebrow="Packages"
        title="Arrive once, see the Lowveld properly."
        lede="Unpack in one place and let the Lowveld come to you — Kruger one day, the escarpment the next, the farm in between."
        image={img.poolReal}
        primaryCta={{ href: "#build", label: "Build your stay" }}
        secondaryCta={{ href: "/stay", label: "See where you will sleep" }}
      />

      {/* Configurator */}
      <Section id="build" className="scroll-mt-24">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>Build your package</Eyebrow>
          <H2 className="mt-3 mb-5">Pick the shape that fits your trip.</H2>
          <Lede>
            Choose how long you would like to stay, the kind of room you want,
            and how many of you there are. Add the day trips you would love to
            include and we will put it all together. Every package includes a
            full-day safari into the Kruger National Park.
          </Lede>
        </div>

        <PackageConfigurator />
      </Section>

      {/* What's included */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <Eyebrow>What every package includes</Eyebrow>
            <H2 className="mt-3 mb-5">The essentials, beautifully sorted.</H2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <IncludedCard
              title="A comfortable bed"
              body="A lodge room sleeping two to seven, a twin room, a bed in the wooden house or a shaded pitch — your private base for the stay, with linen, towels and free WiFi."
            />
            <IncludedCard
              title="A full-day Kruger safari"
              body="A guided open-vehicle game drive deep into the Kruger National Park, with park entry included. Early start, late finish, plenty of stories to bring home."
            />
            <IncludedCard
              title="Real conversation, not a form"
              body="Anneli or Matthew will personally confirm your dates and any details on WhatsApp. Indicative prices online — final quote always sent by hand."
            />
          </div>
        </div>
      </section>

      {/* Add a Lowveld day — context for the add-ons */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <Eyebrow>The add-ons</Eyebrow>
            <H2 className="mt-3 mb-5">Add a Lowveld day, or two.</H2>
            <div className="prose-kanaan max-w-prose">
              <p>
                The Panorama Route is one of the most spectacular drives in
                Africa — the Blyde River Canyon, God&apos;s Window, Bourke&apos;s
                Luck Potholes and the waterfalls of Berlin and Lisbon, all
                inside a single unforgettable day.
              </p>
              <p>
                Shangana Cultural Village sits about twenty minutes from the
                farm and runs a beautiful evening programme — a traditional
                Tsonga dinner, dance and drumming circle. We can book your
                seats and send you down for the evening.
              </p>
              <p>
                And if you would rather not drive, the KMIA airport transfer
                is the easy answer — we collect you on arrival and drop you
                back when it is time to go.
              </p>
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img.krugerEntranceGate.src}
              alt={img.krugerEntranceGate.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* A four-up collage: a Lowveld day from the farm */}
      <section className="bg-bone">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <Eyebrow>What a Kanaan day looks like</Eyebrow>
            <H2 className="mt-3">From the farm, to Kruger, to the canyon.</H2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {/* Two from Kanaan — surrounds + a room — then Panorama + Kruger.
                The Panorama / Kruger slots use Cloudinary placeholders
                pending Anneli's own location shots. */}
            <CollageTile
              img={img.heroFarm}
              label="On the farm"
              cropAlt="Sunset through the forty-year-old mango grove at Kanaan."
            />
            <CollageTile
              img={img.lodgeRoom}
              label="Your room"
              cropAlt="A renovated lodge room at Kanaan — the room you come back to between days out."
            />
            <CollageTile
              img={img.bourkesLuck}
              label="Panorama Route"
              cropAlt="Bourke's Luck Potholes on the Panorama Route."
            />
            <CollageTile
              img={img.krugerEntranceGate}
              label="Kruger"
              cropAlt="A Kruger National Park entrance gate — the full-day safari every package includes."
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-forest text-bone">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
          <Eyebrow>
            <span className="text-bone/70">Ready when you are</span>
          </Eyebrow>
          <H2 className="mt-3 text-bone">
            Tell us when you would like to come.
          </H2>
          <p className="mt-6 text-bone/85">
            Build the package that fits the trip and send it across on
            WhatsApp. We will confirm availability, lock the day-trip slots
            and send you the final quote — usually within a few hours.
          </p>
          <div className="mt-8">
            <Link
              href={whatsappLink("packages")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
            >
              Start a package enquiry on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function IncludedCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-bone p-6">
      <h3 className="font-display text-xl text-forest-deep">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/80">{body}</p>
    </div>
  );
}

function CollageTile({
  img,
  label,
  cropAlt,
}: {
  img: { src: string; alt: string };
  label: string;
  cropAlt: string;
}) {
  return (
    <div className="relative aspect-4/5 overflow-hidden rounded-xl">
      <Image
        src={img.src}
        alt={cropAlt || img.alt}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-bone">
          {label}
        </p>
      </div>
    </div>
  );
}
