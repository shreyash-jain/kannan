"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Stay = "Lodge" | "Backpackers" | "Camping" | "Group / event" | "Not sure yet";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [arrive, setArrive] = useState("");
  const [depart, setDepart] = useState("");
  const [guests, setGuests] = useState("2");
  const [stay, setStay] = useState<Stay>("Lodge");
  const [notes, setNotes] = useState("");

  const subject = `Booking request — ${stay} — ${arrive || "TBC"} to ${depart || "TBC"}`;
  const body = [
    `Hi ${site.hosts[0]},`,
    "",
    `I'd like to enquire about a stay at ${site.name}.`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Stay type: ${stay}`,
    `Arrival: ${arrive}`,
    `Departure: ${depart}`,
    `Guests: ${guests}`,
    "",
    "Notes:",
    notes,
  ].join("\n");

  const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  const whatsapp = `https://wa.me/${site.contact.whatsapp.replace(
    "+",
    "",
  )}?text=${encodeURIComponent(body)}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            autoComplete="name"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            autoComplete="email"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Arrival" htmlFor="arrive">
          <input
            id="arrive"
            type="date"
            value={arrive}
            onChange={(e) => setArrive(e.target.value)}
            className="input"
          />
        </Field>
        <Field label="Departure" htmlFor="depart">
          <input
            id="depart"
            type="date"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
            className="input"
          />
        </Field>
        <Field label="Guests" htmlFor="guests">
          <input
            id="guests"
            type="number"
            min={1}
            max={50}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="input"
          />
        </Field>
      </div>

      <Field label="Stay type" htmlFor="stay">
        <select
          id="stay"
          value={stay}
          onChange={(e) => setStay(e.target.value as Stay)}
          className="input"
        >
          <option>Lodge</option>
          <option>Backpackers</option>
          <option>Camping</option>
          <option>Group / event</option>
          <option>Not sure yet</option>
        </select>
      </Field>

      <Field label="Notes (optional)" htmlFor="notes">
        <textarea
          id="notes"
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="input min-h-28 resize-y"
          placeholder="Anything we should know — group makeup, dietary needs, arrival method, activities you're hoping for…"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          className="inline-flex items-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-cream hover:bg-clay-deep"
        >
          Send by email
        </button>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-bush/30 px-6 py-3 text-sm font-medium text-bush-deep hover:bg-bush/5"
        >
          Send on WhatsApp
        </a>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          background: var(--color-cream);
          border: 1px solid color-mix(in srgb, var(--color-ink) 14%, transparent);
          padding: 0.65rem 0.85rem;
          font-size: 0.95rem;
          color: var(--color-ink);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input:focus {
          outline: none;
          border-color: var(--color-bush);
          box-shadow: 0 0 0 3px
            color-mix(in srgb, var(--color-bush) 25%, transparent);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-mute">
        {label}
      </span>
      {children}
    </label>
  );
}
