"use client";

import { useEffect, useState } from "react";

/**
 * Share the whole page. One quiet button, one tap: on a phone it opens the
 * system share sheet (WhatsApp, Instagram, Messages — whatever they have),
 * and everywhere else it copies the link, which is what a browser can
 * actually do. No menu, no label.
 */
export function SharePage({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function share() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // Cancelled, or refused — fall through to copying.
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Nothing sensible left to do; the address bar still has the link.
    }
  }

  return (
    <div className={`relative ${className ?? ""}`}>
      <button
        type="button"
        onClick={share}
        aria-label="Share this page"
        title="Share this page"
        className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-ink/15 text-ink/55 transition-colors hover:border-ochre hover:text-ochre"
      >
        {copied ? <CheckIcon /> : <ShareNodesIcon />}
      </button>

      {copied && (
        <span
          role="status"
          className="pointer-events-none absolute right-0 top-11 z-20 whitespace-nowrap rounded-full bg-forest-deep px-3 py-1.5 text-[11px] font-medium text-bone shadow-sm"
        >
          Link copied
        </span>
      )}
    </div>
  );
}

/** Three connected nodes — the one glyph everybody reads as "share". */
function ShareNodesIcon() {
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
      <circle cx="18" cy="5" r="2.6" />
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="18" cy="19" r="2.6" />
      <path d="M8.4 10.8l7.2-4.2" />
      <path d="M8.4 13.2l7.2 4.2" />
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
