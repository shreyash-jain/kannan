export type Amenity = { title: string; body: string };

export function AmenityList({ items }: { items: Amenity[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <li key={it.title} className="border-t border-black/10 pt-5">
          <h3 className="font-display text-lg text-forest-deep">{it.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/80">{it.body}</p>
        </li>
      ))}
    </ul>
  );
}
