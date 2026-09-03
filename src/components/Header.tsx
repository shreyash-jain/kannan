"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { rooms, spaces, roomPhotos } from "@/data/rooms";

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

        <nav aria-label="Primary" className="hidden min-w-0 lg:block">
          <ul className="flex items-center gap-4 overflow-x-auto text-sm font-medium whitespace-nowrap text-ink/80 [scrollbar-width:none] xl:gap-6">
            {nav.slice(1).map((n) =>
              n.href === "/stay" ? (
                <li key={n.href} className="group relative">
                  <Link
                    href={n.href}
                    className="inline-flex items-center gap-1 transition-colors hover:text-ochre"
                  >
                    {n.label}
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
                  </Link>
                  <RoomsMenu />
                </li>
              ) : (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="transition-colors hover:text-ochre"
                  >
                    {n.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${site.contact.whatsapp.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-forest px-4 py-2 text-sm font-medium text-bone transition-colors hover:bg-forest-deep sm:inline-block"
          >
            Book on WhatsApp
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
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-base font-medium text-ink/85 hover:text-ochre"
                >
                  {n.label}
                </Link>
                {n.href === "/stay" && (
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
                    <li>
                      <Link
                        href="/facilities"
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-ink/75 hover:text-ochre"
                      >
                        Facilities
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-2">
              <a
                href={`https://wa.me/${site.contact.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-forest px-4 py-2 text-sm font-medium text-bone"
              >
                Book on WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

/**
 * The panel that drops from the "Rooms" tab. Clicking Rooms goes straight
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
          <Link
            href="/facilities"
            className="text-sm font-medium text-ink/75 hover:text-ochre"
          >
            Facilities — what is on the farm
          </Link>
          <Link
            href="/stay"
            className="flex-none text-sm font-medium text-ochre hover:text-ochre-deep"
          >
            See every room →
          </Link>
        </div>
      </div>
    </div>
  );
}
