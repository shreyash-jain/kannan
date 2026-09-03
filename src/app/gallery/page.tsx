import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { FilterGallery, type GalleryItem } from "@/components/FilterGallery";
import { CTA } from "@/components/CTA";
import { proPhotos } from "@/data/proPhotos";

export const metadata: Metadata = {
  title: "Gallery — the whole farm in photographs · Kanaan Guest Farm",
  description:
    "Every room, the camping ground, the venue and the land around it at Kanaan Guest Farm in Hazyview — photographed exactly as it is.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery · Kanaan Guest Farm",
    description: "The whole farm, in photographs.",
    images: [{ url: proPhotos[0].src, alt: proPhotos[0].alt }],
  },
};

const categories = [
  { id: "rooms", label: "Rooms" },
  { id: "camping", label: "Camping" },
  { id: "venue", label: "Venue & groups" },
  { id: "land", label: "The land" },
  { id: "facilities", label: "Facilities" },
];

/* Every frame from the professional shoot, categorised by looking at each
   one. The gallery is the one place the whole set belongs. */
const items: GalleryItem[] = proPhotos.map((photo) => ({
  photo,
  category: photo.category,
}));

export default function GalleryPage() {
  return (
    <>
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
