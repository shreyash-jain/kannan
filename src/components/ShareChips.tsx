"use client";

import { useEffect, useState } from "react";

/**
 * One tap, one destination. These sit on the card itself rather than
 * behind a menu, because the whole job is "someone asked for pictures,
 * send them the room" — a popover would double every share to two taps.
 *
 * A note on Instagram: it has no endpoint for sharing a link from the web.
 * The honest options are the phone's native share sheet (which lists
 * Instagram) or copying the link to paste into a story or DM, so that chip
 * does the first where it exists and the second everywhere else.
 */
export function ShareChips({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const [flash, setFlash] = useState<string | null>(null);

  useEffect(() => {
    if (!flash) return;
    const t = setTimeout(() => setFlash(null), 2000);
    return () => clearTimeout(t);
  }, [flash]);

  const message = `${title} at Kanaan Guest Farm — have a look: ${url}`;

  async function copyLink(note = "Link copied") {
    try {
      await navigator.clipboard.writeText(url);
      setFlash(note);
    } catch {
      setFlash("Could not copy the link");
    }
  }

  async function toInstagram() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: message, url });
        return;
      } catch {
        // Cancelled, or the sheet refused — fall through to copying.
      }
    }
    await copyLink("Copied — paste into your story");
  }

  return (
    <div className={`flex items-center gap-1.5 ${className ?? ""}`}>
      <ChipLink
        href={`https://wa.me/?text=${encodeURIComponent(message)}`}
        label={`Share ${title} on WhatsApp`}
      >
        <WhatsAppIcon />
      </ChipLink>

      <ChipLink
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        label={`Share ${title} on Facebook`}
      >
        <FacebookIcon />
      </ChipLink>

      <ChipButton label={`Share ${title} on Instagram`} onClick={toInstagram}>
        <InstagramIcon />
      </ChipButton>

      <ChipButton label={`Copy the link to ${title}`} onClick={() => copyLink()}>
        {flash ? <CheckIcon /> : <LinkIcon />}
      </ChipButton>

      {flash && (
        <span
          role="status"
          className="pointer-events-none absolute right-0 top-11 whitespace-nowrap rounded-full bg-forest-deep px-3 py-1.5 text-[11px] font-medium text-bone shadow-sm"
        >
          {flash}
        </span>
      )}
    </div>
  );
}

const chipClass =
  "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-bone/92 text-forest-deep shadow-sm backdrop-blur-sm transition-colors hover:bg-bone hover:text-ochre";

function ChipLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      onClick={(e) => e.stopPropagation()}
      className={chipClass}
    >
      {children}
    </a>
  );
}

function ChipButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      className={chipClass}
    >
      {children}
    </button>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 20.5l1.3-4A8 8 0 1 1 8 19.2z" />
      <path d="M9 9.4c0 3 2.6 5.6 5.6 5.6l.9-1.4-1.9-1-.9.9a5 5 0 0 1-2.2-2.2l.9-.9-1-1.9z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M14.8 8.2h-1.4a1.6 1.6 0 0 0-1.6 1.6v10.7" />
      <path d="M9.7 12.6h4.6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 14a4 4 0 0 0 5.7 0l2.6-2.6a4 4 0 1 0-5.7-5.7L11.4 7" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-2.6 2.6a4 4 0 1 0 5.7 5.7L12.6 17" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}
