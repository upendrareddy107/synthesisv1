import Link from "next/link";
import { SectionLabel } from "@/components/section-label";

export type IndustryCard = { slug: string; name: string; coils: string[] };

export function Industries({ items, totalCoils }: { items: IndustryCard[]; totalCoils: number }) {
  return (
    <section aria-labelledby="ind-title" className="theme-dark bg-blueprint py-10 lg:py-16">
      <div className="page-grid gap-y-3">
        <div className="col-span-full lg:col-span-8">
          <SectionLabel n="04">Industries</SectionLabel>
          <h2 id="ind-title" className="display mt-3 text-display-l">
            Six industries.
            <br />
            {totalCoils} coil types<span className="text-accent">.</span>
          </h2>
        </div>
        <p className="col-span-full self-end text-muted md:col-span-6 lg:col-span-4">
          Every coil type below is wound on a Synthesis machine. Pick yours to see which machines wind it.
        </p>
      </div>

      <ul className="page-x mt-6 grid border-t border-l border-line sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
        {items.map((ind, i) => (
          <li key={ind.slug} className="border-r border-b border-line bg-bg">
            <Link href={`/coil-types?industry=${ind.slug}`} className="group flex h-full flex-col p-3 transition-colors duration-(--duration-base) hover:bg-panel">
              <div className="flex items-baseline justify-between">
                <span className="label text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="label text-muted">{ind.coils.length} coils</span>
              </div>
              <h3 className="display mt-4 text-display-m">{ind.name}</h3>
              <p className="label mt-3 leading-relaxed text-fg/70">
                {ind.coils.slice(0, 8).join(" · ")}
                {ind.coils.length > 8 && <span className="text-muted"> · +{ind.coils.length - 8} more</span>}
              </p>
              <span className="label mt-auto flex items-center gap-1 pt-4 text-muted transition-colors group-hover:text-accent">
                View coil types <span aria-hidden="true" className="transition-transform duration-(--duration-fast) group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
