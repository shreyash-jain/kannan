import Link from "next/link";
import Image from "next/image";
import { whatsappLink } from "@/lib/site";

// ---------------------------------------------------------------------
// Kanaan blog block library — used by every Guide and (over time) by
// the Story chapters. The grammar is locked: TLDR at the top, prose in
// a max-w-prose column, a callout / stat grid / numbered list every
// 250–400 words, a closing gradient block as the second-to-last
// element, then a WhatsApp CTA. Reading rhythm > visual variety.
//
// Width: prose stays in `prose-kanaan max-w-prose`; the data blocks
// (StatGrid, NumberedList) break OUT to the wider max-w-5xl band and so
// must be rendered OUTSIDE the prose div. Figures use max-w-5xl too.
// ---------------------------------------------------------------------

// --- TL;DR -----------------------------------------------------------
export function TLDR({ items }: { items: string[] }) {
  return (
    <aside className="not-prose my-10 rounded-2xl border-l-4 border-ochre bg-sand/70 p-6 md:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-ochre">
        In this Article
      </p>
      <ul className="mt-4 space-y-2 text-base leading-relaxed text-ink/85">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-ochre" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// --- Callout (the single most quotable line per blog) ----------------
export function Callout({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="not-prose my-12 rounded-2xl border-l-4 border-ochre bg-sand/70 p-7 md:p-9">
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ochre">
          {eyebrow}
        </p>
      )}
      <p
        className={`font-display text-2xl leading-snug text-forest-deep md:text-3xl ${
          eyebrow ? "mt-3" : ""
        }`}
      >
        {children}
      </p>
    </aside>
  );
}

// --- 3-card stat grid (parallel facts: distances, prices, capacity) --
// Like NumberedList, this breaks out of the prose column to the wider
// max-w-5xl band, so render it OUTSIDE the `prose-kanaan max-w-prose`
// div (close the prose div first), or the cards stay cramped.
export type Stat = { value: string; label: string; body?: string };

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="not-prose my-12 mx-auto grid w-full max-w-5xl gap-4 px-5 md:grid-cols-3 lg:px-0">
      {stats.map((s, i) => (
        <article
          key={i}
          className="rounded-2xl border border-black/5 bg-bone p-7"
        >
          <p className="font-display text-4xl leading-none tracking-tight text-forest-deep">
            {s.value}
          </p>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ochre">
            {s.label}
          </p>
          {s.body && (
            <p className="mt-3 text-sm leading-relaxed text-ink/80">
              {s.body}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}

// --- Numbered list — four variants, all break out to max-w-5xl ------
export type NumberedItem = {
  title: string;
  body: string;
  /** Used by the `timeline` variant as the big left label, e.g. "04:30". */
  time?: string;
};

export function NumberedList({
  items,
  variant = "light",
}: {
  items: NumberedItem[];
  variant?: "light" | "dark" | "timeline" | "grid";
}) {
  // Every variant renders inside the same wider wrapper so the list
  // breaks out of the prose column and uses the available canvas. The
  // page is responsible for closing its prose div before rendering this.
  const wrapper = "not-prose my-12 mx-auto w-full max-w-5xl px-5 lg:px-0";

  if (variant === "timeline") {
    return (
      <div className={wrapper}>
        <ol className="relative space-y-10 border-l-2 border-ochre/40 pl-8 md:pl-12">
          {items.map((item, i) => (
            <li key={i} className="relative">
              <span
                aria-hidden
                className="absolute -left-[2.6rem] flex h-10 w-10 items-center justify-center rounded-full bg-ochre text-bone font-display text-base md:-left-[3.4rem]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="grid gap-x-8 gap-y-2 md:grid-cols-[10rem_1fr] md:items-baseline">
                <p className="font-display text-3xl leading-none text-ochre md:text-4xl">
                  {item.time ?? item.title}
                </p>
                <div>
                  <h4 className="font-display text-lg text-forest-deep md:text-xl">
                    {item.time ? item.title : ""}
                  </h4>
                  <p className="mt-2 text-base leading-relaxed text-ink/85">
                    {item.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <ol className={`${wrapper} grid gap-4 md:grid-cols-2`}>
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-5 rounded-2xl border border-black/5 bg-bone p-6 md:p-7"
          >
            <span className="font-display text-3xl leading-none text-ochre">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <h4 className="font-display text-lg text-forest-deep">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (variant === "dark") {
    return (
      <ol className={`${wrapper} rounded-3xl bg-forest p-6 md:p-10`}>
        <div className="space-y-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex gap-5 rounded-2xl bg-forest-deep/40 p-6"
            >
              <span className="font-display text-3xl leading-none text-ochre">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h4 className="font-display text-lg text-bone md:text-xl">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-bone/85">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </div>
      </ol>
    );
  }

  // light (default)
  return (
    <ol className={`${wrapper} space-y-3`}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-5 rounded-2xl bg-sand/70 p-6">
          <span className="font-display text-3xl leading-none text-ochre">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex-1">
            <h4 className="font-display text-lg text-forest-deep">
              {item.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">
              {item.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

// --- Closing gradient block (always second-to-last) -----------------
export function ClosingBlock({
  title,
  thesis,
  body,
}: {
  title: string;
  thesis: string;
  body: React.ReactNode;
}) {
  return (
    <aside className="not-prose my-12 rounded-3xl bg-gradient-to-br from-sand to-bone p-8 md:p-12">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-ochre">
        {title}
      </p>
      <p className="mt-4 font-display text-2xl leading-snug text-forest-deep md:text-3xl">
        {thesis}
      </p>
      <p className="mt-5 text-base leading-relaxed text-ink/80">{body}</p>
    </aside>
  );
}

// --- WhatsApp CTA (forest band with ochre button) -------------------
export function WhatsAppCTA({
  title,
  body,
  buttonLabel = "Start a stay on WhatsApp",
  pageKey = "blog",
}: {
  title: string;
  body: string;
  buttonLabel?: string;
  pageKey?: Parameters<typeof whatsappLink>[0];
}) {
  return (
    <section className="bg-forest text-bone">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-bone/70">
          Start the conversation
        </p>
        <h2 className="mt-3 font-display text-3xl text-bone md:text-4xl">
          {title}
        </h2>
        <p className="mt-5 text-bone/85">{body}</p>
        <div className="mt-7">
          <Link
            href={whatsappLink(pageKey)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- Full-bleed blog hero with overlay + H1 + meta strip -----------
export function BlogHero({
  image,
  alt,
  eyebrow,
  title,
  intro,
  byline,
  datePublished,
  readingMinutes,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  intro: string;
  byline: string;
  datePublished: string;
  readingMinutes: number;
}) {
  return (
    <header className="relative w-full overflow-hidden bg-forest-deep">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/40 via-forest-deep/55 to-forest-deep/85" />
      {/* The height lives on this in-flow layer, not on the header, so a long
          H1 grows the hero instead of overflowing it — the eyebrow used to get
          clipped off the top when the title ran to four lines. The image is
          `fill`, so it stretches to whatever height this ends up being. */}
      <div className="relative z-10 flex min-h-[max(70vh,560px)] flex-col items-center justify-end pt-24 pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center text-bone lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-bone/75">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl leading-tight text-bone md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-bone/85 md:text-lg">
            {intro}
          </p>
          <p className="mt-7 text-xs uppercase tracking-[0.18em] text-bone/65">
            {byline} ·{" "}
            {new Date(datePublished).toLocaleDateString("en-ZA", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {readingMinutes} min read
          </p>
        </div>
      </div>
    </header>
  );
}

// --- Source citation block (bottom of every guide) ------------------
export function Sources({ items }: { items: { label: string; href: string }[] }) {
  return (
    <aside className="not-prose my-12 border-t border-black/10 pt-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        Sources & further reading
      </p>
      <ul className="mt-4 space-y-2 text-sm text-ink/80">
        {items.map((s, i) => (
          <li key={i}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ochre underline-offset-4 hover:underline"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted">
        Times, fees and conditions change. Verify each source against its
        live page before relying on a specific figure.
      </p>
    </aside>
  );
}