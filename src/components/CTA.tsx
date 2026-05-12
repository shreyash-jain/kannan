import Link from "next/link";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="bg-forest-deep text-bone">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:py-20 md:grid-cols-2 md:items-center lg:px-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-ochre">
            Plan your African holiday
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Peaceful nights, magical mornings, and Kruger on your doorstep.
          </h2>
          <p className="mt-4 max-w-xl text-bone/85">
            Tell us your dates and who is travelling with you, and {site.hosts.join(" or ")} will
            personally reply with warm availability and the right room or
            campsite for your trip.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a
            href={`https://wa.me/${site.contact.whatsapp.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-ochre px-6 py-3 text-sm font-medium text-bone hover:bg-ochre-deep"
          >
            WhatsApp {site.contact.whatsappDisplay}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-bone/40 px-6 py-3 text-sm font-medium text-bone hover:bg-bone/10"
          >
            Send a request
          </Link>
        </div>
      </div>
    </section>
  );
}
