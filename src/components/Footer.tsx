import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-bush-deep text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="font-display text-3xl tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-md text-cream/80">{site.tagline}</p>
          <p className="mt-6 text-sm text-cream/70">
            {site.address.street}, {site.address.city} {site.address.postalCode}
            <br />
            {site.address.region}, {site.address.country}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cream/60">
            Visit
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cream/60">
            Reach us
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={`tel:${site.contact.phonePrimary}`}
                className="hover:text-gold"
              >
                {site.contact.phonePrimaryDisplay}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.contact.phoneSecondary}`}
                className="hover:text-gold"
              >
                {site.contact.phoneSecondaryDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="hover:text-gold"
              >
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Instagram {site.social.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-5 text-xs text-cream/60 md:flex-row md:items-center lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Hosted by {site.hosts.join(" & ")} · Hazyview, Mpumalanga
          </p>
        </div>
      </div>
    </footer>
  );
}
