import Link from "next/link";
import { MagneticLink } from "@/components/magnetic";
import type { CSSProperties } from "react";
import { machineBySlug } from "@content/machines";
import { WindingInstrument, type PresetMeta } from "./winding-instrument";

/** Each setup links to a machine the old site lists for that coil (content/coils.ts). */
const setup = (key: PresetMeta["key"], label: string, feed: string, slug: string): PresetMeta => {
  const m = machineBySlug(slug)!;
  return { key, label, feed, machine: m.name.replace(" — ", " · "), href: `/machines/${m.category}/${m.slug}` };
};
const PRESETS: PresetMeta[] = [
  setup("relay", "Relay coil", "Fine enamelled wire", "optima-1100"),
  setup("hv", "Transformer HV coil", "Round conductor + paper", "hv-series"),
  setup("stator", "BLDC stator", "Enamelled wire", "smart-winder-st1"),
  setup("capacitor", "HT capacitor element", "Film + foil", "ht-capacitor-automatic"),
];

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/** Server component; only the instrument hydrates. Entrances are CSS (paint before JS). */
const LINES = ["Smart winding", "for an electric future."];

export function Hero({ intro }: { intro: string }) {
  let letterIndex = 0;
  return (
    <section aria-labelledby="hero-title" className="theme-dark bg-blueprint relative overflow-hidden">
      <div className="page-x enter-fade flex flex-wrap justify-between gap-x-3 gap-y-0.5 pt-3">
        <p className="label flex items-center gap-1 text-muted">
          <span className="marker" aria-hidden="true" />
          <span className="hidden sm:inline">Synthesis Winding Technologies Pvt. Ltd. — </span>Est. 1993
        </p>
        <p className="label hidden text-muted md:block">12.84° N · 77.66° E — Bengaluru, India</p>
      </div>

      <div className="page-grid gap-y-4 pt-4 pb-3 lg:pt-5 lg:pb-4">
        <h1 id="hero-title" aria-label="Smart winding for an electric future." className="display col-span-full text-hero [perspective:800px] lg:col-span-9">
          {LINES.map((line, li) => (
            <span key={li} className={`block pb-[0.08em] ${li === 0 ? "text-accent" : ""}`} aria-hidden="true">
              {line.split(" ").map((word, wi, words) => (
                <span key={wi} className="inline-block whitespace-nowrap">
                  {[...word].map((ch, ci) => {
                    const i = letterIndex++;
                    return (
                      <span key={ci} className={`enter-turn ${ch === "." ? "text-accent" : ""}`} style={delay(60 + i * 28)}>
                        {ch}
                      </span>
                    );
                  })}
                  {wi < words.length - 1 && " "}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div className="enter-fade col-span-full flex flex-col gap-3 md:col-span-8 lg:col-span-3 lg:pt-1" style={delay(700)}>
          <p className="text-muted md:text-lead">{intro}</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <MagneticLink
              href="/contact"
              className="group inline-flex items-center gap-2 bg-accent px-3 py-2 text-small font-medium text-accent-fg"
            >
              Send an enquiry
              <span aria-hidden="true" className="transition-transform duration-(--duration-fast) group-hover:translate-x-0.5">
                →
              </span>
            </MagneticLink>
            <Link href="/machines" className="text-small font-medium underline decoration-fg/40 underline-offset-[6px] hover:decoration-accent">
              Machine range
            </Link>
          </div>
        </div>
      </div>

      <div className="enter-fade" style={delay(820)}>
        <WindingInstrument presets={PRESETS} />
      </div>

      <div className="page-x flex items-center justify-between border-t border-line py-2">
        <p className="label hidden items-center gap-1 text-muted md:flex">
          Pick a coil above — or wind one yourself <span aria-hidden="true">↑</span>
        </p>
        <p className="label text-muted md:hidden">Live schematic</p>
        <p className="label flex items-center gap-1.5 text-muted">
          Scroll <span aria-hidden="true" className="inline-block h-2 w-px bg-fg/50" />
        </p>
      </div>
    </section>
  );
}
