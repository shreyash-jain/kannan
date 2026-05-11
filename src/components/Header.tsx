"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-bone/85 backdrop-blur supports-[backdrop-filter]:bg-bone/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="flex items-baseline gap-2"
        >
          <span className="font-display text-2xl tracking-tight text-forest-deep">
            Kanaan
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-muted sm:inline">
            Guest Farm · Hazyview
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-ink/80">
            {nav.slice(1).map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="transition-colors hover:text-ochre"
                >
                  {n.label}
                </Link>
              </li>
            ))}
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
