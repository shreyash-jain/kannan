import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & book · Kanaan Guest Farm",
  description:
    "Book your stay at Kanaan Guest Farm in Hazyview. WhatsApp, phone and email — Anneli and Matt reply personally with availability and the right room or pitch for you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <PageHero
        eyebrow="Reach us"
        title="Tell us your dates."
        lede="WhatsApp is the fastest way to reach us. We'll come back personally with availability and the right room, dorm bed or campsite for your trip."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <aside className="space-y-8">
            <div>
              <Eyebrow>Direct</Eyebrow>
              <ul className="mt-4 space-y-3 text-base">
                <li>
                  <a
                    href={`https://wa.me/${site.contact.whatsapp.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-bone hover:bg-forest-deep"
                  >
                    WhatsApp {site.contact.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <Link
                    href={`tel:${site.contact.phonePrimary}`}
                    className="text-ink/85 hover:text-ochre"
                  >
                    Call {site.contact.phonePrimaryDisplay}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`tel:${site.contact.phoneSecondary}`}
                    className="text-ink/85 hover:text-ochre"
                  >
                    Call {site.contact.phoneSecondaryDisplay}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${site.contact.email}`}
                    className="text-ink/85 hover:text-ochre"
                  >
                    Email {site.contact.email}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <Eyebrow>Find us</Eyebrow>
              <p className="mt-4 text-sm leading-relaxed text-ink/85">
                {site.address.street}
                <br />
                {site.address.city} {site.address.postalCode}
                <br />
                {site.address.region}, {site.address.country}
              </p>
              <p className="mt-3 text-xs text-muted">
                Fully fenced property with a motorised gate — please call
                ahead on arrival.
              </p>
            </div>

            <div>
              <Eyebrow>Hours</Eyebrow>
              <ul className="mt-4 space-y-2 text-sm text-ink/85">
                <li>
                  Check-in <span className="text-muted">{site.policies.checkIn}</span>
                </li>
                <li>
                  Check-out <span className="text-muted">{site.policies.checkOut}</span>
                </li>
                <li>
                  Quiet hours <span className="text-muted">{site.policies.quietHours}</span>
                </li>
              </ul>
            </div>

            <div>
              <Eyebrow>Social</Eyebrow>
              <ul className="mt-4 space-y-2 text-sm text-ink/85">
                <li>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ochre"
                  >
                    Instagram {site.social.instagramHandle}
                  </a>
                </li>
                <li>
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ochre"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <div>
            <H2>Send a booking request.</H2>
            <p className="mt-3 max-w-prose text-ink/80">
              The form opens an email pre-filled with your trip details. We
              reply personally — usually the same day.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
