import Link from "next/link";
import { site } from "@/lib/site";
import { breadcrumbLd } from "@/lib/jsonld";

export function Breadcrumbs({
  trail,
}: {
  trail: { label: string; href: string }[];
}) {
  const ld = breadcrumbLd(
    trail.map((t) => ({ name: t.label, url: `${site.url}${t.href}` })),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-5 pt-6 lg:px-8"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-mute">
          {trail.map((t, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={t.href} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="text-ink/70">
                    {t.label}
                  </span>
                ) : (
                  <Link href={t.href} className="hover:text-clay">
                    {t.label}
                  </Link>
                )}
                {!last && <span aria-hidden>/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
