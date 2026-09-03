import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { BlogPostList } from "@/components/BlogPostList";
import { posts } from "@/lib/posts";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal & Guides · Stories from Kanaan Guest Farm",
  description:
    "The journal of a family-run guest farm in the beautiful heart of Hazyview, Mpumalanga. Heart-felt stories from Anneli and Matthew about Kanaan, Kruger, the Lowveld and the wonderful experiences we are building for you.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal & Guides"
        title="Stories from the farm, and guides to the Lowveld."
        lede="Six warm chapters from Anneli and Matthew about Kanaan, Hazyview, Kruger and the wonders of the Lowveld — and a growing set of guides and blogs for the week you are planning around your stay."
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
