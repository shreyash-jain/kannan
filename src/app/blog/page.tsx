import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogPostList, type Post } from "@/components/BlogPostList";
import { img, wedding } from "@/lib/images";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal & Guides · Stories from Kanaan Guest Farm",
  description:
    "The journal of a family-run guest farm in the beautiful heart of Hazyview, Mpumalanga. Heart-felt stories from Anneli and Matthew about Kanaan, Kruger, the Lowveld and the wonderful experiences we are building for you.",
  alternates: { canonical: "/blog" },
};

const posts: Post[] = [
  // ----- Stories: the six-part founder narrative ----------------------
  {
    n: 1,
    chapter: "The Discovery",
    title: "How we found Kanaan",
    category: "story",
    status: "live",
    href: "/blog/the-discovery",
    image: img.hosts.src,
    imageAlt: img.hosts.alt,
    datePublished: "2026-05-22",
    readingMinutes: 6,
    excerpt:
      "A vineyard in Argentina that did not work out. A birthday at the waterfall. An old man catching us snooping on land that turned out to be his. Anneli on how she and Matthew found Kanaan.",
  },
  {
    n: 2,
    chapter: "The Promise",
    title: "The promise we made ourselves",
    category: "story",
    status: "live",
    href: "/blog/the-promise",
    image: img.gateSign.src,
    imageAlt: img.gateSign.alt,
    datePublished: "2026-05-31",
    readingMinutes: 5,
    excerpt:
      "We took the keys in August 2025, read every review the farm had ever received, and started rebuilding Kanaan the slow, honest way — water, WiFi, the gate, the rooms, one thing at a time.",
  },
  {
    n: 3,
    chapter: "The Land",
    title:
      "Africa: a family holiday at Kanaan Guest Farm in the beautiful heart of Hazyview",
    category: "story",
    status: "live",
    href: "/blog/africa",
    image: img.campingTents.src,
    imageAlt: img.campingTents.alt,
    datePublished: "2026-05-12",
    readingMinutes: 7,
    excerpt:
      "Africa is a place where your heart beats a little faster. An invitation to a warm family holiday based at Kanaan — Kruger, Sabie, Graskop and the wonders of the Lowveld.",
  },
  {
    n: 4,
    chapter: "The Welcome",
    title: "The welcome at Kanaan",
    category: "story",
    status: "live",
    href: "/blog/the-welcome",
    image: img.veranda.src,
    imageAlt: img.veranda.alt,
    datePublished: "2026-05-31",
    readingMinutes: 6,
    excerpt:
      "What a stay at Kanaan actually feels like — the dust road in, the room you arrive to, the morning at the breakfast table, the long afternoon under the mango trees and the honest line about the kind of traveller the farm was built for.",
  },
  {
    n: 5,
    chapter: "The Celebration",
    title: "An intimate wedding weekend in the beautiful Lowveld",
    category: "story",
    status: "live",
    href: "/blog/the-celebration",
    image: wedding.bridesmaids.src,
    imageAlt: wedding.bridesmaids.alt,
    datePublished: "2026-05-31",
    readingMinutes: 6,
    excerpt:
      "A multi-day wedding weekend at Kanaan in Hazyview — rehearsal nights around the fire, a relaxed ceremony under the African sky, a Sunday morning no one is in a hurry to leave. Up to 150 guests on the farm.",
  },
  {
    n: 6,
    chapter: "The Future",
    title: "What we are building next at Kanaan",
    category: "story",
    status: "live",
    href: "/blog/the-future",
    image: img.macGrove.src,
    imageAlt: img.macGrove.alt,
    datePublished: "2026-05-22",
    readingMinutes: 5,
    excerpt:
      "A year of renovations later, Anneli on what is coming next — multi-day Kruger packages, the new wooden-house backpackers, affordable weddings, on-request meals, hiking and cycling trails, and a longer ecotourism vision for the wider farm.",
  },

  // ----- Guides: practical, search-friendly cornerstones --------------
  {
    chapter: "Kruger",
    title: "Kruger from Hazyview: a first-timer's guide",
    category: "guide",
    status: "live",
    href: "/blog/kruger-from-hazyview",
    image: img.kruger.src,
    imageAlt: img.kruger.alt,
    datePublished: "2026-06-08",
    readingMinutes: 7,
    excerpt:
      "Phabeni vs Numbi vs Paul Kruger gates, opening times by season, and the half-day plan that gets you back to Kanaan for lunch. The Kruger guide we wish we had on our first visit.",
  },
  {
    chapter: "Panorama Route",
    title:
      "The Panorama Route from Hazyview: God's Window, the Blyde Canyon and the loop that works",
    category: "guide",
    status: "live",
    href: "/blog/panorama-route-from-hazyview",
    image: img.panoramaGodsWindow.src,
    imageAlt: img.panoramaGodsWindow.alt,
    datePublished: "2026-06-15",
    readingMinutes: 9,
    excerpt:
      "God's Window, the Blyde River Canyon, a string of waterfalls and a gorge lift into the rainforest — the whole Panorama Route begins about forty minutes from our gate. The half-day loop, the full-day loop, and why a clear winter morning is the one to do it on.",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal & Guides", href: "/blog" },
        ]}
      />
      <PageHero
        eyebrow="Journal & Guides"
        title="Stories from the farm, and guides to the Lowveld."
        lede="Six warm chapters from Anneli and Matthew about Kanaan, Hazyview, Kruger and the wonders of the Lowveld — and a growing set of practical guides for the week you are planning around your stay."
      />

      <Section>
        <BlogPostList posts={posts} />
      </Section>

      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
          <Eyebrow>While you wait for the next chapter</Eyebrow>
          <H2 className="mt-3">Come and see Kanaan for yourself.</H2>
          <Lede>
            The story is even more wonderful to read after you have already
            spent a night under the African sky.
          </Lede>
          <div className="mt-7">
            <Link
              href={whatsappLink("blog")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-bone hover:bg-forest-deep"
            >
              Say hello on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
