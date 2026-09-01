import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FilterGallery, type GalleryItem } from "@/components/FilterGallery";
import { CTA } from "@/components/CTA";
import { img } from "@/lib/images";
import { rooms, spaces, roomPhotos } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Gallery — the whole farm in photographs · Kanaan Guest Farm",
  description:
    "Every room, the camping ground, the venue and the land around it at Kanaan Guest Farm in Hazyview — photographed exactly as it is.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery · Kanaan Guest Farm",
    description: "The whole farm, in photographs.",
    images: [{ url: img.heroFarm.src, alt: img.heroFarm.alt }],
  },
};

const categories = [
  { id: "rooms", label: "Rooms" },
  { id: "camping", label: "Camping" },
  { id: "venue", label: "Venue & groups" },
  { id: "land", label: "The land" },
  { id: "facilities", label: "Facilities" },
];

/** Room photography comes straight from the catalogue, so the gallery can
 *  never drift from what the room pages show. */
const roomItems: GalleryItem[] = [...rooms, ...spaces]
  .filter((r) => r.slug !== "camping")
  .flatMap((r) => roomPhotos(r).slice(0, 4))
  .map((photo) => ({ photo, category: "rooms" }));

const items: GalleryItem[] = [
  ...roomItems,
  ...[
    img.campingAvenueWide,
    img.campingGround,
    img.campingAvenue,
    img.campingTents,
    img.campingMango,
    img.campfire,
    img.campingWaterTank,
  ].map((photo) => ({ photo, category: "camping" })),
  ...[
    img.venueLawnWide,
    img.venueCovered,
    img.venueTables,
    img.farmBraaiMixedGroup,
    img.viewpointGazebo,
  ].map((photo) => ({ photo, category: "venue" })),
  ...[
    img.lowveldViewReal,
    img.hilltopViewpoint,
    img.rockCascade,
    img.goldenVista,
    img.macGrove,
    img.macGroveFramed,
    img.heroFarm,
    img.waterfall,
    img.lowveldWildflowers,
    img.goldenShed,
    img.trailView,
  ].map((photo) => ({ photo, category: "land" })),
  ...[
    img.poolReal,
    img.entertainmentPoolTable,
    img.entertainmentRoomWide,
    img.campingAblutions,
    img.campingAblutionsExterior,
    img.gateSign,
  ].map((photo) => ({ photo, category: "facilities" })),
];

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />
      <PageHero
        eyebrow="Gallery"
        title="The whole farm, in photographs."
        lede="Every room, the camping ground, the venue and the land around it — photographed exactly as it is."
      />
      <Section>
        <FilterGallery items={items} categories={categories} />
      </Section>
      <CTA />
    </>
  );
}
