"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";

type Active = { src: string; alt: string } | null;

/**
 * Wrap any block of <Image>s and tapping one opens a fullscreen viewer.
 * - Tap image to zoom 2x; tap again to reset
 * - Pinch-zoom is enabled on touch devices
 * - ESC, the close button, or tapping the backdrop closes the viewer
 *
 * Skips images that are inside an <a> (clicks should follow the link).
 */
export function LightboxGallery({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState<Active>(null);
  const [zoomed, setZoomed] = useState(false);
  // Drives the entrance transition — false on the frame the portal
  // mounts, true immediately after, so the CSS has something to move from.
  const [shown, setShown] = useState(false);

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    const img = target.closest("img") as HTMLImageElement | null;
    if (!img) return;
    if (target.closest("a")) return;
    e.preventDefault();
    setActive({ src: img.currentSrc || img.src, alt: img.alt });
    setZoomed(false);
  }

  function close() {
    setShown(false);
    // Let the exit transition play before the portal unmounts.
    window.setTimeout(() => {
      setActive(null);
      setZoomed(false);
    }, 180);
  }

  useEffect(() => {
    if (!active) return;
    const raf = requestAnimationFrame(() => setShown(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    // Safari only shipped scrollbar-gutter recently, so measure what the
    // scrollbar was actually occupying and hold that width open.
    const gutter = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (gutter > 0) document.body.style.paddingRight = `${gutter}px`;
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
    };
  }, [active]);

  return (
    <>
      <div onClick={handleClick}>{children}</div>
      {active &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink/94 p-4 transition-all duration-200 ease-out ${
              shown ? "opacity-100 backdrop-blur-md" : "opacity-0 backdrop-blur-none"
            }`}
            onClick={close}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close image viewer"
              className={`absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-bone/15 text-bone backdrop-blur-sm transition-all duration-200 hover:bg-bone/30 ${
                shown ? "opacity-100" : "opacity-0"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>

            <div
              className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full bg-bone/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-bone/70 backdrop-blur-sm md:block"
              aria-hidden
            >
              {zoomed ? "Click to reset · ESC to close" : "Click to zoom · ESC to close"}
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => !z);
              }}
              style={{
                cursor: zoomed ? "zoom-out" : "zoom-in",
                transform: zoomed
                  ? "scale(1.8)"
                  : shown
                    ? "scale(1) translateY(0)"
                    : "scale(0.94) translateY(12px)",
                opacity: shown ? 1 : 0,
                transition:
                  "transform 260ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease-out",
                touchAction: "pinch-zoom",
              }}
              className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            />
          </div>,
          document.body,
        )}
    </>
  );
}
