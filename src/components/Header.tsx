"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { headerNav, site, type HeaderNavItem } from "@/lib/site";
import { rooms, spaces, roomPhotos } from "@/data/rooms";

const bookHref = `https://wa.me/${site.contact.whatsapp.replace("+", "")}`;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-bone/85 backdrop-blur supports-[backdrop-filter]:bg-bone/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="flex items-center"
        >
          <Image
            src="/brand/kanaan-logo.png"
            alt={`${site.name} — Hazyview`}
            width={640}
            height={640}
            priority
            sizes="(min-width: 1024px) 56px, 44px"
            className="h-11 w-auto lg:h-14"
          />
        </Link>

        {/* Six items instead of eleven. Nothing was removed — the pages that
            used to sit in the bar now live one hover down, and all of them
            are still listed in the footer. */}
        <nav aria-label="Primary" className="hidden min-w-0 lg:block">
          <ul className="flex items-center gap-5 text-sm font-medium whitespace-nowrap text-ink/80 xl:gap-7">
            {headerNav.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 py-1 transition-colors hover:text-ochre"
                >
                  {item.label}
                  {(item.rooms || item.children) && <Caret />}
                </Link>
                {item.rooms ? <RoomsMenu /> : item.children ? <ListMenu item={item} /> : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ochre-deep px-5 py-2.5 text-sm font-medium text-bone transition-colors hover:bg-[#8a4e1d] sm:inline-flex"
          >
            Book Now
            <span aria-hidden>&rarr;</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/10 text-ink transition-colors hover:bg-sand active:bg-sand lg:hidden"
          >
            <span aria-hidden className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-5 bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-5 bg-current transition-transform ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-black/5 bg-bone lg:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {headerNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-base font-medium text-ink/85 hover:text-ochre"
                >
                  {item.label}
                </Link>

                {/* On a phone there is no hover, so the groups are simply
                    shown open rather than hidden behind a tap. */}
                {item.rooms && (
                  <ul className="mb-1 ml-3 flex flex-col border-l border-black/10 pl-4">
                    {[...rooms, ...spaces].map((room) => (
                      <li key={room.slug}>
                        <Link
                          href={`/stay/${room.slug}`}
                          onClick={() => setOpen(false)}
                          className="flex items-baseline justify-between gap-3 py-2 text-sm text-ink/75 hover:text-ochre"
                        >
                          <span>{room.name}</span>
                          <span className="flex-none text-xs text-muted">
                            {room.occupancy}
                          </span>
                        </Link>
                      </li>
                    ))}
                    {stayExtras.map((e) => (
                      <li key={e.href}>
                        <Link
                          href={e.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-ink/75 hover:text-ochre"
                        >
                          {e.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {item.children && (
                  <ul className="mb-1 ml-3 flex flex-col border-l border-black/10 pl-4">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-ink/75 hover:text-ochre"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-2">
              <a
                href={bookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ochre-deep px-5 py-2.5 text-sm font-medium text-bone"
              >
                Book Now
                <span aria-hidden>&rarr;</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function Caret() {
  return (
    <svg
      aria-hidden
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 transition-transform group-hover:rotate-180"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** The two pages that belong under Stay but are not rooms in the catalogue. */
const stayExtras = [
  { href: "/camping", label: "Camping — pitches under the mango trees" },
  { href: "/facilities", label: "Facilities — what is on the farm" },
];

/**
 * The plain dropdown, used by Our Story and Experiences. Each row carries a
 * line of explanation: a bare list of page names makes people guess, and
 * "The Land" tells a first-time visitor nothing on its own.
 */
function ListMenu({ item }: { item: HeaderNavItem }) {
  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <div className="overflow-hidden rounded-2xl border border-black/8 bg-bone p-2 shadow-[0_16px_48px_-12px_rgba(31,26,23,0.28)]">
        {item.children?.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="block rounded-xl p-3 transition-colors hover:bg-sand"
          >
            <span className="block font-display text-base leading-snug text-forest-deep">
              {c.label}
            </span>
            <span className="mt-0.5 block text-xs leading-relaxed text-muted">
              {c.blurb}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * The panel that drops from the "Stay" tab. Clicking Stay goes straight
 * to the card catalogue; hovering it is a shortcut into one room. A plain
 * list of names does not answer the question people arrive with, so every
 * row carries a thumbnail, who fits, and how many photographs wait behind it.
 */
function RoomsMenu() {
  const entries = [...rooms, ...spaces];

  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <div className="overflow-hidden rounded-2xl border border-black/8 bg-bone shadow-[0_16px_48px_-12px_rgba(31,26,23,0.28)]">
        <div className="grid grid-cols-2 gap-1 p-3">
          {entries.map((room) => (
            <Link
              key={room.slug}
              href={`/stay/${room.slug}`}
              className="group/row flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-sand"
            >
              <span className="relative h-14 w-16 flex-none overflow-hidden rounded-lg">
                <Image
                  src={room.hero.src}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-base leading-snug text-forest-deep">
                  {room.name}
                </span>
                <span className="mt-0.5 block text-xs text-muted">
                  {room.occupancy} · {roomPhotos(room).length} photos
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-black/8 bg-sand/60 px-5 py-3">
          <div className="flex min-w-0 flex-wrap gap-x-5 gap-y-1">
            {stayExtras.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="text-sm font-medium text-ink/75 hover:text-ochre"
              >
                {e.label}
              </Link>
            ))}
          </div>
          <Link
            href="/stay"
            className="flex-none text-sm font-medium text-ochre hover:text-ochre-deep"
          >
            See every room &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
