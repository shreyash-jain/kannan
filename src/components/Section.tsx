import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  id,
  bleed,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-16 sm:py-20 lg:px-8",
        !bleed && "mx-auto max-w-7xl",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.22em] text-clay">
      {children}
    </p>
  );
}

export function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "font-display text-4xl leading-[1.05] tracking-tight text-bush-deep sm:text-5xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-3xl leading-tight tracking-tight text-bush-deep sm:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Lede({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-2xl text-lg leading-relaxed text-ink/85 sm:text-xl">
      {children}
    </p>
  );
}
