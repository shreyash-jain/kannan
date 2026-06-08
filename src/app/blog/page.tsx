import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogPostList, type Post } from "@/components/BlogPostList";
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
    excerpt:
      "A year of renovations later, Anneli on what is coming next — multi-day Kruger packages, the new wooden-house backpackers, affordable weddings, on-request meals, hiking and cycling trails, and a longer ecotourism vision for the wider farm.",
  },

  // ----- Guides will be added here as they're written. The Guides tab
  // is hidden on the index until the first one lands.
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
        title="A six-part story from the farm."
        lede="Six warm chapters from Anneli and Matthew about Kanaan, Hazyview, Kruger and the wonders of the Lowveld — how we found this farm, what we have lovingly changed, and what we are building next. Practical guides to the wider Lowveld will follow."
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
