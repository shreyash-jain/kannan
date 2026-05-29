"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

// Prices from the client's October 2026 brief (rack rates).
// Accommodation is per person sharing, per night.
const ACCOMMODATION_PER_PAX_NIGHT = 450;

// Per-person tour costs include the relevant park / venue entry fee.
const TOUR_PRICES = {
  knpDay: 1825 + 602, // R2,427 — KNP full-day open-vehicle drive + park entry
  panorama: 1805 + 600, // R2,405 — Panorama Route + Blyde Canyon nature reserve entry
  shangana: 1600, // dinner + dance + drumming at Shangana Cultural Village
} as const;

// Flat fee, return trip.
const TRANSFER_FLAT = 1700;

type Nights = 2 | 3 | 5;
type Room = "twin" | "double";
type Pax = 1 | 2;

const ROOMS: Record<Room, string> = {
  twin: "Twin room",
  double: "Double room",
};

type DayItem = { day: string; text: string; addon: boolean };

function buildItinerary(
  nights: Nights,
  addons: { panorama: boolean; shangana: boolean },
): DayItem[] {
  const base: DayItem[] = (() => {
    switch (nights) {
      case 2:
        return [
          { day: "1", text: "Arrival & Kruger — settle in, then a full-day open-vehicle drive into the Kruger National Park (park entry included).", addon: false },
          { day: "2", text: "Departure — check-out and onward travel.", addon: false },
        ];
      case 3:
        return [
          { day: "1", text: "Arrival — KMIA airport pick-up, settle into your room.", addon: false },
          { day: "2", text: "Kruger National Park — full-day open-vehicle safari drive (park entry included).", addon: false },
          { day: "3", text: "Departure — check-out, KMIA airport drop-off.", addon: false },
        ];
      case 5:
        return [
          { day: "1", text: "Arrival — KMIA airport pick-up, settle into your room.", addon: false },
          { day: "2", text: "Kruger National Park — full-day open-vehicle safari drive (park entry included).", addon: false },
          { day: "3", text: "Leisure day — relax on the farm or explore Hazyview at your own pace.", addon: false },
          { day: "4", text: "Leisure day — relax on the farm or explore at your own pace.", addon: false },
          { day: "5", text: "Departure — check-out, KMIA airport drop-off.", addon: false },
        ];
    }
  })();

  const addonDays: DayItem[] = [];
  if (addons.panorama) {
    addonDays.push({
      day: "+",
      text: "Panorama Route — Blyde River Canyon, God's Window, Bourke's Luck Potholes, Berlin and Lisbon Falls.",
      addon: true,
    });
  }
  if (addons.shangana) {
    addonDays.push({
      day: "+",
      text: "Shangana Evening — Shangana Cultural Village, traditional dinner, dance show and drumming circle.",
      addon: true,
    });
  }

  // For 5-night, replace leisure days with selected add-ons.
  // For 2/3-night, insert add-on days before departure.
  const out: DayItem[] = [];
  let addonIdx = 0;
  for (let i = 0; i < base.length; i++) {
    const d = base[i];
    if (d.text.startsWith("Leisure") && addonIdx < addonDays.length) {
      out.push({ ...addonDays[addonIdx], day: d.day });
      addonIdx++;
    } else {
      out.push(d);
    }
  }
  // Pre-departure injection for shorter packages
  if ((nights === 2 || nights === 3) && addonIdx < addonDays.length) {
    const last = out.pop()!;
    while (addonIdx < addonDays.length) {
      out.push(addonDays[addonIdx]);
      addonIdx++;
    }
    out.push(last);
  }
  return out;
}

function formatZAR(n: number): string {
  return "R " + Math.round(n).toLocaleString("en-ZA");
}

export function PackageConfigurator() {
  const [nights, setNights] = useState<Nights>(3);
  const [room, setRoom] = useState<Room>("twin");
  const [pax, setPax] = useState<Pax>(1);
  const [panorama, setPanorama] = useState(false);
  const [shangana, setShangana] = useState(false);
  const [transfer, setTransfer] = useState(false);

  const quote = useMemo(() => {
    const accommodation = ACCOMMODATION_PER_PAX_NIGHT * pax * nights;
    const knp = TOUR_PRICES.knpDay * pax;
    const panoramaCost = panorama ? TOUR_PRICES.panorama * pax : 0;
    const shanganaCost = shangana ? TOUR_PRICES.shangana * pax : 0;
    const transferCost = transfer ? TRANSFER_FLAT : 0;
    const total =
      accommodation + knp + panoramaCost + shanganaCost + transferCost;
    return { accommodation, knp, panoramaCost, shanganaCost, transferCost, total };
  }, [nights, pax, panorama, shangana, transfer]);

  const itinerary = useMemo(
    () => buildItinerary(nights, { panorama, shangana }),
    [nights, panorama, shangana],
  );

  const enquiryUrl = useMemo(() => {
    const parts: string[] = [];
    parts.push(
      `Hi Anneli and Matthew, I would like to enquire about a ${nights}-night package for ${pax} guest${pax > 1 ? "s" : ""} in a ${ROOMS[room].toLowerCase()}.`,
    );
    const extras: string[] = [];
    if (panorama) extras.push("Panorama Route day trip");
    if (shangana) extras.push("Shangana cultural evening");
    if (transfer) extras.push("KMIA airport transfer");
    if (extras.length > 0) {
      parts.push("Add-ons: " + extras.join(", ") + ".");
    }
    parts.push(`Indicative total: ${formatZAR(quote.total)}.`);
    const text = encodeURIComponent(parts.join(" "));
    const number = whatsappLink("contact")
      .replace("https://wa.me/", "")
      .replace(/\?.+$/, "");
    return `https://wa.me/${number}?text=${text}`;
  }, [nights, pax, room, panorama, shangana, transfer, quote.total]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
      {/* LEFT — controls + add-ons */}
      <div className="space-y-6">
        <div className="rounded-2xl border border-black/5 bg-bone p-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Build your stay
          </p>

          <div className="mt-5 space-y-5">
            <ToggleRow
              label="Package length"
              options={[
                { label: "2 nights", value: 2 },
                { label: "3 nights", value: 3 },
                { label: "5 nights", value: 5 },
              ]}
              value={nights}
              onChange={(v) => setNights(v as Nights)}
            />
            <ToggleRow
              label="Room type"
              options={[
                { label: "Twin", value: "twin" },
                { label: "Double", value: "double" },
              ]}
              value={room}
              onChange={(v) => setRoom(v as Room)}
            />
            <ToggleRow
              label="Guests"
              options={[
                { label: "1 guest", value: 1 },
                { label: "2 guests", value: 2 },
              ]}
              value={pax}
              onChange={(v) => setPax(v as Pax)}
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Optional add-ons
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <AddonCard
              title="Panorama Route"
              description="Full-day drive: Blyde River Canyon, God's Window, Bourke's Luck Potholes, Berlin and Lisbon Falls."
              price={`${formatZAR(TOUR_PRICES.panorama)} per guest`}
              priceNote="includes park entry"
              selected={panorama}
              onToggle={() => setPanorama((s) => !s)}
            />
            <AddonCard
              title="Shangana Cultural Evening"
              description="Traditional dinner, dance show and drumming circle at the Shangana Cultural Village."
              price={`${formatZAR(TOUR_PRICES.shangana)} per guest`}
              priceNote="includes dinner and show"
              selected={shangana}
              onToggle={() => setShangana((s) => !s)}
            />
            <AddonCard
              title="KMIA Airport Transfer"
              description="Return transfer between Kruger Mpumalanga International Airport and Kanaan."
              price={`${formatZAR(TRANSFER_FLAT)} return`}
              priceNote="flat fee per package"
              selected={transfer}
              onToggle={() => setTransfer((s) => !s)}
            />
          </div>
        </div>
      </div>

      {/* RIGHT — live quote */}
      <div className="rounded-2xl border-2 border-forest bg-bone overflow-hidden">
        <div className="bg-forest px-6 py-5 text-bone">
          <p className="text-xs uppercase tracking-[0.18em] text-bone/70">
            Your package
          </p>
          <h3 className="mt-1 font-display text-2xl">
            {nights}-night package — {ROOMS[room]}
          </h3>
          <p className="text-sm text-bone/85">
            {pax} {pax === 1 ? "guest" : "guests"}
            {(panorama || shangana || transfer) && ", with add-ons"}
          </p>
        </div>

        <div className="px-6 py-6">
          <div className="flex items-baseline gap-3 border-b border-black/10 pb-4">
            <span className="font-display text-4xl text-forest-deep">
              {formatZAR(quote.total)}
            </span>
            <span className="text-sm text-muted">
              {pax === 1 ? "for 1 guest" : "for 2 guests, total"}
            </span>
          </div>

          <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Package breakdown
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <LineItem
              label={`Accommodation (${nights} nights × R450/guest/night)`}
              amount={quote.accommodation}
            />
            <LineItem
              label={`Kruger full-day drive × ${pax} guest${pax > 1 ? "s" : ""}`}
              amount={quote.knp}
            />
          </ul>

          {(panorama || shangana || transfer) && (
            <>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-ochre">
                Add-ons
              </p>
              <ul className="mt-3 space-y-1 text-sm">
                {panorama && (
                  <LineItem
                    label={`Panorama Route × ${pax} guest${pax > 1 ? "s" : ""}`}
                    amount={quote.panoramaCost}
                    accent
                  />
                )}
                {shangana && (
                  <LineItem
                    label={`Shangana Evening × ${pax} guest${pax > 1 ? "s" : ""}`}
                    amount={quote.shanganaCost}
                    accent
                  />
                )}
                {transfer && (
                  <LineItem
                    label="KMIA airport transfer"
                    amount={quote.transferCost}
                    accent
                  />
                )}
              </ul>
            </>
          )}

          <div className="mt-4 flex items-baseline justify-between border-t border-black/10 pt-3">
            <span className="text-sm font-medium text-ink">Total</span>
            <span className="font-display text-xl text-forest-deep">
              {formatZAR(quote.total)}
            </span>
          </div>

          {/* Itinerary */}
          <p className="mt-7 text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Itinerary
          </p>
          <ol className="mt-3 space-y-3">
            {itinerary.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                <span
                  className={
                    "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-semibold " +
                    (d.addon
                      ? "bg-ochre/15 text-ochre-deep"
                      : "bg-forest/10 text-forest-deep")
                  }
                >
                  {d.day}
                </span>
                <span className="text-ink/85">
                  {d.text}
                  {d.addon && (
                    <span className="ml-2 inline-block rounded-full bg-ochre/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-ochre-deep">
                      add-on
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-7">
            <Link
              href={enquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
            >
              Enquire on WhatsApp
            </Link>
            <p className="mt-3 text-center text-xs text-muted">
              Indicative price — Anneli will confirm availability and final
              quote on WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleRow<T extends string | number>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { label: string; value: T }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => {
          const on = o.value === value;
          return (
            <button
              key={String(o.value)}
              type="button"
              onClick={() => onChange(o.value)}
              className={
                "rounded-full px-4 py-1.5 text-sm transition-colors " +
                (on
                  ? "bg-forest text-bone"
                  : "bg-bone text-ink/70 border border-black/10 hover:border-forest/40 hover:text-forest")
              }
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function AddonCard({
  title,
  description,
  price,
  priceNote,
  selected,
  onToggle,
}: {
  title: string;
  description: string;
  price: string;
  priceNote: string;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={
        "relative rounded-2xl border-2 p-4 text-left transition-colors " +
        (selected
          ? "border-ochre bg-ochre/5"
          : "border-black/10 bg-bone hover:border-ochre/40")
      }
    >
      {selected && (
        <span
          aria-hidden
          className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-ochre text-[11px] font-semibold text-bone"
        >
          ✓
        </span>
      )}
      <p className="font-display text-base text-forest-deep">{title}</p>
      <p className="mt-1 text-xs leading-relaxed text-ink/75">{description}</p>
      <p className="mt-2 text-sm font-medium text-ochre-deep">{price}</p>
      <p className="text-[11px] text-muted">{priceNote}</p>
    </button>
  );
}

function LineItem({
  label,
  amount,
  accent,
}: {
  label: string;
  amount: number;
  accent?: boolean;
}) {
  return (
    <li className="flex items-baseline justify-between gap-3">
      <span className="text-ink/75">{label}</span>
      <span
        className={
          "font-medium tabular-nums " +
          (accent ? "text-ochre-deep" : "text-ink")
        }
      >
        {formatZAR(amount)}
      </span>
    </li>
  );
}