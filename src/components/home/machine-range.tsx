"use client";

import { HoverColorImage } from "@/components/hover-color-image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { duration, ease } from "@/lib/motion";
import { SectionLabel } from "@/components/section-label";

export type Family = { slug: string; name: string; summary: string; image: string; models: string[]; count: number };

export function MachineRange({ families }: { families: Family[] }) {
  const [active, setActive] = useState(0);
  const f = families[active];

  return (
    <section aria-labelledby="range-title" className="theme-light py-10 lg:py-16">
      <div className="page-grid gap-y-3">
        <div className="col-span-full">
          <SectionLabel n="03">Machine range</SectionLabel>
          <h2 id="range-title" className="display mt-3 text-display-l">
            Seven families.
            <br />
            One workshop<span className="text-accent">.</span>
          </h2>
        </div>
      </div>

      <div className="page-grid mt-6 gap-y-6 lg:mt-10">
        <ol className="col-span-full border-t border-line lg:col-span-6">
          {families.map((m, i) => (
            <li key={m.slug} className="relative border-b border-line">
              <Link
                href={`/machines/${m.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex items-baseline gap-3 py-2 md:py-2.5"
                aria-describedby={i === active ? "range-panel" : undefined}
              >
                <span className={`label w-3 shrink-0 ${i === active ? "text-accent" : "text-muted"}`}>{String(i + 1).padStart(2, "0")}</span>
                <span
                  className={`display text-title transition-transform duration-(--duration-base) ease-(--ease-out) md:text-[1.875rem] ${
                    i === active ? "translate-x-1" : ""
                  }`}
                >
                  {m.name}
                </span>
                <span className="label ml-auto shrink-0 text-muted">{m.count} models</span>
              </Link>
              {/* indigo wire winds under the active row */}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute -bottom-px left-0 h-0.5 w-full origin-left bg-accent transition-transform duration-(--duration-slow) ease-(--ease-out) ${
                  i === active ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </li>
          ))}
        </ol>

        {/* figure panel (dark) */}
        <div id="range-panel" className="group/photo theme-dark col-span-full self-start border border-line lg:sticky lg:top-[calc(var(--header-h)+24px)] lg:col-span-5 lg:col-start-8">
          <div className="flex items-center justify-between border-b border-line px-2 py-1.5">
            <p className="label text-muted">
              Fig. <span className="text-fg">{String(active + 1).padStart(2, "0")}</span>
            </p>
            <p className="label truncate pl-2 text-muted">{f.name}</p>
          </div>
          <div className="bg-blueprint relative aspect-[4/3] overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={f.slug}
                className="absolute inset-y-4 right-4 left-[18%] bg-photo md:inset-y-6 md:right-6"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: duration.slow, ease: ease.out }}
              >
                <HoverColorImage src={f.image} alt={f.name} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-contain p-2 mix-blend-multiply" />
              </motion.div>
            </AnimatePresence>
            {/* oversized outlined figure number, overlapping the photo */}
            <div className="pointer-events-none absolute bottom-1 left-2 z-10 overflow-hidden" aria-hidden="true">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={active}
                  className="display block text-[6rem] leading-[0.85] tracking-[-0.05em] text-transparent [-webkit-text-stroke:1.5px_var(--accent)] md:text-[9rem]"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: duration.slow, ease: ease.out }}
                >
                  {String(active + 1).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          <div className="border-t border-line p-2 md:p-3">
            <p className="text-muted">{f.summary}</p>
            <ul className="mt-2 flex flex-wrap gap-1">
              {f.models.map((m) => (
                <li key={m} className="label border border-line px-1 py-0.5 text-fg/80">
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between border-t border-line px-2 py-1.5">
            <p className="label text-muted">PDF datasheets</p>
            <Link href={`/machines/${f.slug}`} className="label flex items-center gap-1 text-fg hover:text-accent">
              View family <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
