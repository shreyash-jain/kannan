import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2, Lede } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal · Stories from Kanaan Guest Farm",
  description:
    "The journal of a family-run guest farm in the beautiful heart of Hazyview, Mpumalanga. Heart-felt stories from Anneli and Matthew about Kanaan, Kruger, the Lowveld and the wonderful experiences we are building for you.",
  alternates: { canonical: "/blog" },
};

type Post =
  | {
      n: number;
      chapter: string;
      title: string;
      status: "live";
      href: string;
      excerpt: string;
    }
  | {
      n: number;
      chapter: string;
      title: string;
      status: "soon";
    };

// Brief Section 5 — six planned posts, one per chapter, added one at a time.
// Chapter 3 (The Land) is the first live post — Anneli's AFRICA piece.
const posts: Post[] = [
  {
    n: 1,
    chapter: "The Discovery",
    title: "The moment we walked onto Kanaan, we knew",
    status: "soon",
  },
  {
    n: 2,
    chapter: "The Promise",
    title: "Reading every guest, listening to every story",
    status: "soon",
  },
  {
    n: 3,
    chapter: "The Land",
    title:
      "Africa: a family holiday at Kanaan Guest Farm in the beautiful heart of Hazyview",
    status: "live",
    href: "/blog/africa",
    excerpt:
      "Africa is a place where your heart beats a little faster. An invitation to a warm family holiday based at Kanaan — Kruger, Sabie, Graskop and the wonders of the Lowveld.",
  },
  {
    n: 4,
    chapter: "The Welcome",
    title: "From R250 per person sharing — and what that wonderful welcome includes",
    status: "soon",
  },
  {
    n: 5,
    chapter: "The Celebration",
    title: "An unforgettable wedding weekend in the beautiful Lowveld",
    status: "soon",
  },
  {
    n: 6,
    chapter: "The Future",
    title: "What we are lovingly building next at Kanaan",
    status: "soon",
  },
];

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
        lede="Six warm chapters from Anneli and Matthew about Kanaan, Hazyview, Kruger and the wonders of the Lowveld. We are publishing them slowly and lovingly, one at a time — beginning with our invitation to Africa."
      />

      <Section>
        <ol className="space-y-2">
          {posts.map((p) => (
            <li
              key={p.n}
              className="flex items-baseline gap-6 border-t border-black/5 pt-6 first:border-t-0 first:pt-0"
            >
              <span className="font-display text-3xl text-ochre">
                {String(p.n).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <Eyebrow>
                  Chapter {p.n} · {p.chapter}
                </Eyebrow>
                {p.status === "live" ? (
                  <>
                    <h3 className="mt-2 font-display text-2xl text-forest-deep">
                      <Link href={p.href} className="hover:text-ochre">
                        {p.title}
                      </Link>
                    </h3>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink/80">
                      {p.excerpt}
                    </p>
                    <Link
                      href={p.href}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ochre hover:text-ochre-deep"
                    >
                      Read the story <span aria-hidden>→</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <h3 className="mt-2 font-display text-2xl text-forest-deep">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">Coming soon.</p>
                  </>
                )}
              </div>
            </li>
          ))}
        </ol>
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
