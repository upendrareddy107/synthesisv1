"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { PhotoCard } from "@/components/cards";
import { duration, ease } from "@/lib/motion";

export type CoilLite = { slug: string; name: string; industries: string[]; image?: string; machines: number };
export type IndustryLite = { slug: string; name: string };

/** Industry filter for the coil catalogue. State lives in ?industry= so links are shareable. */
export function CoilExplorer({ coils, industries }: { coils: CoilLite[]; industries: IndustryLite[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const active = industries.some((i) => i.slug === params.get("industry")) ? params.get("industry")! : "all";

  const set = (slug: string) => {
    const q = slug === "all" ? "" : `?industry=${slug}`;
    router.replace(`${pathname}${q}`, { scroll: false });
  };

  const list = active === "all" ? coils : coils.filter((c) => c.industries.includes(active));
  const nameOf = (slug: string) => industries.find((i) => i.slug === slug)?.name ?? slug;
  const tabs = [{ slug: "all", name: "All industries" }, ...industries];

  return (
    <div>
      <div role="tablist" aria-label="Filter by industry" className="flex gap-1 overflow-x-auto pb-1">
        {tabs.map((t) => {
          const on = t.slug === active;
          const count = t.slug === "all" ? coils.length : coils.filter((c) => c.industries.includes(t.slug)).length;
          return (
            <button
              key={t.slug}
              role="tab"
              aria-selected={on}
              onClick={() => set(t.slug)}
              className={`label flex shrink-0 items-center gap-1 border px-1.5 py-1 whitespace-nowrap transition-colors duration-(--duration-fast) ${
                on ? "border-accent bg-accent text-accent-fg" : "border-line text-fg/80 hover:border-fg/60"
              }`}
            >
              {t.name}
              <span className={on ? "opacity-80" : "text-muted"}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="label mt-3 text-muted" aria-live="polite">
        Showing {list.length} coil types{active !== "all" ? ` in ${nameOf(active)}` : ""}
      </p>

      <ul className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((c) => (
            <motion.li
              key={c.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: duration.base, ease: ease.out }}
            >
              <PhotoCard
                href={`/coil-types/${c.slug}`}
                image={c.image}
                imageAlt={c.name}
                imageAspect="aspect-[16/10]"
                meta={c.industries.map(nameOf).join(" · ")}
                title={c.name}
                footer={c.machines ? `${c.machines} machine${c.machines > 1 ? "s" : ""}` : "Enquire"}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
