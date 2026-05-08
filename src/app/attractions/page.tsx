import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Nearby attractions · Kruger, Panorama Route & Sabie",
  description:
    "Kanaan Guest Farm sits in Hazyview, the closest gateway town to the Kruger National Park and a working base for the Panorama Route, Sabie River and the waterfalls and gorges of Mpumalanga.",
  alternates: { canonical: "/attractions" },
};

const attractions: {
  name: string;
  drive: string;
  body: string;
  image: keyof typeof img;
}[] = [
  {
    name: "Kruger National Park",
    drive: "30–45 min to Phabeni & Numbi gates",
    body: "Africa's flagship park. Self-drive at gate-opening for the best sightings, or book a guided drive. Stay long enough — the Big Five reveal themselves slowly.",
    image: "kruger",
  },
  {
    name: "Panorama Route",
    drive: "45–90 min depending on stop",
    body: "God's Window, the Three Rondavels, Bourke's Luck Potholes and Blyde River Canyon. A full day, ideally with an early start and a packed lunch.",
    image: "panorama",
  },
  {
    name: "Sabie River & waterfalls",
    drive: "30–45 min",
    body: "Subtropical greenery, the Sabie waterfalls cluster (Mac Mac, Lone Creek, Bridal Veil), and easy river walks.",
    image: "sabieRiver",
  },
  {
    name: "Skyway Trails canopy tours",
    drive: "20 min",
    body: "Ziplines and platforms through the Drakensberg foothills — the best way to see the forest from the inside.",
    image: "hiking",
  },
  {
    name: "Shangana Cultural Village",
    drive: "5 min",
    body: "Walks, meals and storytelling at a working cultural village, just down the road from the farm.",
    image: "hosts",
  },
  {
    name: "Hiking & MTB on the farm",
    drive: "0 min — at the gate",
    body: "Marked routes through the property for a morning before the heat or a sunset cool-down.",
    image: "mtb",
  },
];

export default function AttractionsPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Attractions", href: "/attractions" },
        ]}
      />
      <PageHero
        eyebrow="Around Kanaan"
        title="The Kruger on one side, the Panorama Route on the other."
        lede="Hazyview is one of the few places where Africa's flagship national park and one of its most spectacular scenic drives are both within an hour. Most days, you can do one before lunch and the other after."
      />

      <Section>
        <ul className="grid gap-8 md:grid-cols-2">
          {attractions.map((a) => (
            <li
              key={a.name}
              className="overflow-hidden rounded-2xl bg-cream ring-1 ring-black/5"
            >
              <div className="relative aspect-16/9">
                <Image
                  src={img[a.image].src}
                  alt={img[a.image].alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-clay">
                  {a.drive}
                </p>
                <h3 className="mt-2 font-display text-2xl text-bush-deep">
                  {a.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                  {a.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="pt-0!">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Suggested first day</Eyebrow>
            <H2 className="mt-3">A simple way to start.</H2>
            <Lede>
              Arrive by mid-afternoon, settle in, walk a farm trail, swim, then
              dinner on the stoep. Up early for the Phabeni gate, back by lunch,
              afternoon on the Panorama Route — Bourke's Luck Potholes and the
              Three Rondavels — home before sunset.
            </Lede>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img.veranda.src}
              alt={img.veranda.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
