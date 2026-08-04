"use client";

import { usePathname } from "next/navigation";

/**
 * Wraps the public site in its header, footer and WhatsApp button — and skips
 * all three under /admin, which supplies its own full-screen shell.
 *
 * The chrome is passed in as elements rather than imported here so that Footer
 * can stay a server component; importing it into this client boundary would
 * quietly pull it into the client bundle.
 */
export function SiteChrome({
  header,
  footer,
  fab,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  fab: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
      {fab}
    </>
  );
}
