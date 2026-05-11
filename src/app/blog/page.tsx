import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal · Stories from Kanaan Guest Farm",
  description:
    "The journal of a guest farm near Kruger. Six chapters from Anneli and Matthew — what they found, what they changed, and what they are building next.",
  alternates: { canonical: "/blog" },
};

// Brief Section 5 — six planned May 2026 posts, one chapter each.
// Posts are added one at a time when explicitly requested; this index
// shows the planned arc as a teaser until each lands.
const planned = [
  { n: 1, chapter: "The Discovery", title: "Why we bought a guest farm we had never seen" },
  { n: 2, chapter: "The Promise", title: "Every review we read. Every thing we changed." },
  { n: 3, chapter: "The Land", title: "What 48 minutes from Kruger actually feels like" },
  { n: 4, chapter: "The Welcome", title: "What R250 a night near Kruger actually buys you" },
  { n: 5, chapter: "The Celebration", title: "An intimate wedding weekend in Hazyview" },
  { n: 6, chapter: "The Future", title: "What we are building next at Kanaan" },
] as const;

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/blog" },
        ]}
      />
      <PageHero
        eyebrow="Journal"
        title="A six-part story from the farm."
        lede="Our first chapter lands soon. Until then, here is the arc we are working on — written by us, slowly, one chapter at a time."
      />

      <Section>
        <ol className="space-y-2">
          {planned.map((p) => (
            <li
              key={p.n}
              className="flex items-baseline gap-6 border-t border-black/5 pt-6 first:border-t-0 first:pt-0"
            >
              <span className="font-display text-3xl text-ochre">{String(p.n).padStart(2, "0")}</span>
              <div>
                <Eyebrow>Chapter {p.n} · {p.chapter}</Eyebrow>
                <h3 className="mt-2 font-display text-2xl text-forest-deep">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">Coming soon.</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
          <Eyebrow>While you wait</Eyebrow>
          <H2 className="mt-3">Come stay with us.</H2>
          <Lede>
            The story is more fun to read after you&apos;ve already been.
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
