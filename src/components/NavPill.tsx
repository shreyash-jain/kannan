import { cn } from "@/lib/cn";

export function NavPill({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "rounded-full border border-ink/10 bg-bone px-4 py-1.5 font-medium text-ink/80 hover:border-ochre hover:text-ochre",
        className,
      )}
    >
      {children}
    </a>
  );
}