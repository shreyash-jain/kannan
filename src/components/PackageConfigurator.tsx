"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

// ---------------------------------------------------------------------
// Pricing — Anneli, 2026-05-31
// ---------------------------------------------------------------------
// Room rates are PER ROOM PER NIGHT (not per pax). Backpackers is per
// person per night. Children are charged the same as adults for the
// room rate (Anneli has not flagged a different child rate for rooms).
// For optional activities, Anneli is confirming whether child rates
// differ; until she does, adult rates are used and a footnote calls it
// out. The form is capped at 4 guests; groups larger than 4 are nudged
// toward WhatsApp for group-discounted pricing.

type Room = "twin" | "double" | "backpackers";

const ROOM_DEFS: Record<
  Room,
  {
    name: string;
    perNight: (totalPax: number) => number;
    maxPax: number;
    pricingNote: string;
  }
> = {
  twin: {
    name: "Twin room",
    perNight: (pax) => (pax >= 2 ? 500 : 350),
    maxPax: 2,
    pricingNote: "R 350 / 1 guest · R 500 / 2 guests",
  },
  double: {
    // Anneli, 2026-09-01: "We have rooms that accommodate 4 people" — the
    // lodge rooms sleep 2 to 7. This was capped at 2, which sent every
    // family of four to the backpackers dorm.
    name: "Lodge room",
    // TODO(Anneli): confirm the rate for 3+ guests. Until then this scales
    // at the 2-guest per-person rate rather than under-quoting the room.
    perNight: (pax) => (pax >= 3 ? 325 * pax : pax === 2 ? 650 : 450),
    maxPax: 7,
    pricingNote: "R 450 / 1 guest · R 650 / 2 guests · larger rooms quoted",
  },
  backpackers: {
    name: "Backpackers",
    perNight: (pax) => 200 * pax,
    maxPax: 4,
    pricingNote: "R 200 per person per night",
  },
};

// Per-person tour costs include the relevant park / venue entry fee.
// TODO(Anneli): confirm child rates for these — currently using adult
// rates uniformly with a footnote on the page.
const TOUR_PRICES = {
  knpDay: 1825 + 602, // R 2,427 — KNP open-vehicle drive + park entry
  panorama: 1805 + 600, // R 2,405 — Panorama Route + Blyde nature-reserve entry
  shangana: 1600, // dinner + dance + drumming at Shangana Cultural Village
} as const;

// Flat fee, return trip.
const TRANSFER_FLAT = 1700;

type Nights = 2 | 3 | 5;
type Adults = 1 | 2 | 3 | 4;
type Children = 0 | 1 | 2 | 3;

const MAX_TOTAL = 4;

type DayItem = { day: string; text: string; addon: boolean };

function buildItinerary(
  nights: Nights,
  addons: { panorama: boolean; shangana: boolean },
): DayItem[] {
  const base: DayItem[] = (() => {
    switch (nights) {
      case 2:
        return [
          { day: "1", text: "Arrival — settle into your room at Kanaan.", addon: false },
          { day: "2", text: "Kruger National Park — full-day open-vehicle safari drive (park entry included).", addon: false },
          { day: "3", text: "Departure — check-out and onward travel.", addon: false },
        ];
      case 3:
        return [
          { day: "1", text: "Arrival — KMIA airport pick-up, settle into your room.", addon: false },
          { day: "2", text: "Kruger National Park — full-day open-vehicle safari drive (park entry included).", addon: false },
          { day: "3", text: "Leisure day — relax on the farm or explore Hazyview at your own pace.", addon: false },
          { day: "4", text: "Departure — check-out, KMIA airport drop-off.", addon: false },
        ];
      case 5:
        return [
          { day: "1", text: "Arrival — KMIA airport pick-up, settle into your room.", addon: false },
          { day: "2", text: "Kruger National Park — full-day open-vehicle safari drive (park entry included).", addon: false },
          { day: "3", text: "Leisure day — relax on the farm or explore Hazyview at your own pace.", addon: false },
          { day: "4", text: "Leisure day — relax on the farm or explore at your own pace.", addon: false },
          { day: "5", text: "Leisure day — relax on the farm or explore at your own pace.", addon: false },
          { day: "6", text: "Departure — check-out, KMIA airport drop-off.", addon: false },
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
  return "R " + Math.round(n).toLocaleString("en-ZA");
}

export function PackageConfigurator() {
  const [nights, setNights] = useState<Nights>(3);
  const [adults, setAdults] = useState<Adults>(2);
  const [children, setChildren] = useState<Children>(0);
  const [room, setRoom] = useState<Room>("double");
  const [panorama, setPanorama] = useState(false);
  const [shangana, setShangana] = useState(false);
  const [transfer, setTransfer] = useState(false);

  const totalPax = adults + children;
  const roomDef = ROOM_DEFS[room];
  const roomTooSmall = totalPax > roomDef.maxPax;

  const quote = useMemo(() => {
    const perNight = roomDef.perNight(totalPax);
    const accommodation = perNight * nights;
    const knp = TOUR_PRICES.knpDay * totalPax;
    const panoramaCost = panorama ? TOUR_PRICES.panorama * totalPax : 0;
    const shanganaCost = shangana ? TOUR_PRICES.shangana * totalPax : 0;
    const transferCost = transfer ? TRANSFER_FLAT : 0;
    const total =
      accommodation + knp + panoramaCost + shanganaCost + transferCost;
    return { accommodation, knp, panoramaCost, shanganaCost, transferCost, total, perNight };
  }, [nights, totalPax, panorama, shangana, transfer, roomDef]);

  const itinerary = useMemo(
    () => buildItinerary(nights, { panorama, shangana }),
    [nights, panorama, shangana],
  );

  const enquiryUrl = useMemo(() => {
    const parts: string[] = [];
    const guestStr =
      children > 0
        ? `${adults} adult${adults > 1 ? "s" : ""} and ${children} child${children > 1 ? "ren" : ""}`
        : `${adults} adult${adults > 1 ? "s" : ""}`;
    parts.push(
      `Hi Anneli and Matthew, I would like to enquire about a ${nights}-night package for ${guestStr} in a ${roomDef.name.toLowerCase()}.`,
    );
    const extras: string[] = [];
    if (panorama) extras.push("Panorama Route day trip");
    if (shangana) extras.push("Shangana cultural evening");
    if (transfer) extras.push("KMIA airport transfer");
    if (extras.length > 0) {
      parts.push("Add-ons: " + extras.join(", ") + ".");
    }
    if (!roomTooSmall) {
      parts.push(`Indicative total: ${formatZAR(quote.total)}.`);
    }
    const text = encodeURIComponent(parts.join(" "));
    const number = whatsappLink("contact")
      .replace("https://wa.me/", "")
      .replace(/\?.+$/, "");
    return `https://wa.me/${number}?text=${text}`;
  }, [
    nights,
    adults,
    children,
    panorama,
    shangana,
    transfer,
    quote.total,
    roomDef.name,
    roomTooSmall,
  ]);

  // For groups bigger than 4 — direct to WhatsApp with a group note.
  const groupEnquiryUrl = useMemo(() => {
    const text = encodeURIComponent(
      "Hi Anneli and Matthew, we are travelling as a group bigger than 4 — could you share group-discounted package rates for us?",
    );
    const number = whatsappLink("contact")
      .replace("https://wa.me/", "")
      .replace(/\?.+$/, "");
    return `https://wa.me/${number}?text=${text}`;
  }, []);

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
              label="Adults"
              options={[
                { label: "1", value: 1 },
                { label: "2", value: 2 },
                { label: "3", value: 3 },
                { label: "4", value: 4 },
              ]}
              value={adults}
              onChange={(v) => {
                const next = v as Adults;
                setAdults(next);
                // Cap children so total never exceeds MAX_TOTAL
                if (next + children > MAX_TOTAL) {
                  setChildren((MAX_TOTAL - next) as Children);
                }
              }}
            />

            <ToggleRow
              label="Children"
              options={([0, 1, 2, 3] as const).map((n) => ({
                label: String(n),
                value: n,
                disabled: adults + n > MAX_TOTAL,
              }))}
              value={children}
              onChange={(v) => setChildren(v as Children)}
            />

            <ToggleRow
              label="Room type"
              options={[
                { label: ROOM_DEFS.twin.name, value: "twin" },
                { label: ROOM_DEFS.double.name, value: "double" },
                { label: ROOM_DEFS.backpackers.name, value: "backpackers" },
              ]}
              value={room}
              onChange={(v) => setRoom(v as Room)}
            />

            <p className="text-[11px] text-muted">
              {roomDef.pricingNote} ·{" "}
              {roomDef.maxPax === 4
                ? "sleeps up to 4 guests"
                : `sleeps up to ${roomDef.maxPax} guests`}
            </p>
          </div>

          {/* Group-size note */}
          <p className="mt-5 rounded-xl bg-sand/60 px-3 py-2 text-[11px] leading-relaxed text-ink/70">
            This form is set up for parties of up to {MAX_TOTAL} guests.
            For a bigger group,{" "}
            <Link
              href={groupEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ochre hover:text-ochre-deep"
            >
              WhatsApp us
            </Link>{" "}
            and we will share our group-discounted rates.
          </p>
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
          <p className="mt-3 text-[11px] leading-relaxed text-muted">
            Child rates for the activities above are confirmed
            individually — Anneli will share the exact figures when you
            enquire.
          </p>
        </div>
      </div>

      {/* RIGHT — live quote */}
      <div className="rounded-2xl border-2 border-forest bg-bone overflow-hidden">
        <div className="bg-forest px-6 py-5 text-bone">
          <p className="text-xs uppercase tracking-[0.18em] text-bone/70">
            Your package
          </p>
          <h3 className="mt-1 font-display text-2xl">
            {nights}-night package — {roomDef.name}
          </h3>
          <p className="text-sm text-bone/85">
            {adults} adult{adults > 1 ? "s" : ""}
            {children > 0 && `, ${children} child${children > 1 ? "ren" : ""}`}
            {(panorama || shangana || transfer) && ", with add-ons"}
          </p>
        </div>

        <div className="px-6 py-6">
          {roomTooSmall ? (
            <div className="rounded-xl border border-ochre/40 bg-ochre/5 px-4 py-4 text-sm">
              <p className="font-medium text-ochre-deep">
                A {roomDef.name.toLowerCase()} sleeps up to {roomDef.maxPax} guests.
              </p>
              <p className="mt-2 text-ink/80">
                For {totalPax} guests, the Backpackers option also fits the
                whole party — or send us a message and we will arrange
                multiple rooms with a group rate.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setRoom("backpackers")}
                  className="rounded-full bg-forest px-4 py-1.5 text-xs font-medium text-bone hover:bg-forest-deep"
                >
                  Switch to Backpackers
                </button>
                <Link
                  href={groupEnquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-forest/30 px-4 py-1.5 text-xs font-medium text-forest hover:bg-forest/10"
                >
                  Or WhatsApp us
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-baseline gap-3 border-b border-black/10 pb-4">
                <span className="font-display text-4xl text-forest-deep">
                  {formatZAR(quote.total)}
                </span>
                <span className="text-sm text-muted">
                  total for {totalPax} guest{totalPax > 1 ? "s" : ""}
                </span>
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Package breakdown
              </p>
              <ul className="mt-3 space-y-1 text-sm">
                <LineItem
                  label={`${roomDef.name} (${nights} night${nights > 1 ? "s" : ""} × ${formatZAR(quote.perNight)} / night)`}
                  amount={quote.accommodation}
                />
                <LineItem
                  label={`Kruger full-day drive × ${totalPax} guest${totalPax > 1 ? "s" : ""}`}
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
                        label={`Panorama Route × ${totalPax} guest${totalPax > 1 ? "s" : ""}`}
                        amount={quote.panoramaCost}
                        accent
                      />
                    )}
                    {shangana && (
                      <LineItem
                        label={`Shangana Evening × ${totalPax} guest${totalPax > 1 ? "s" : ""}`}
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
                  Indicative price — Anneli will confirm availability,
                  child rates for activities, and the final quote on
                  WhatsApp.
                </p>
              </div>
            </>
          )}
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
  options: { label: string; value: T; disabled?: boolean }[];
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
          const disabled = !!o.disabled;
          return (
            <button
              key={String(o.value)}
              type="button"
              onClick={() => !disabled && onChange(o.value)}
              disabled={disabled}
              className={
                "rounded-full px-4 py-1.5 text-sm transition-colors " +
                (disabled
                  ? "cursor-not-allowed bg-bone text-ink/25 border border-black/5"
                  : on
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