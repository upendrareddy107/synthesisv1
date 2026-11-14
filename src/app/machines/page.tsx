import type { Metadata } from "next";
import Link from "next/link";
import { machineCategories, machinesInCategory } from "@content/machines";
import { FAMILY_SUMMARY } from "@content/copy";
import { categoryHref, coilsForCategory, shortName } from "@content/relations";
import { PageHero } from "@/components/page-hero";
import { PhotoCard } from "@/components/cards";

export const metadata: Metadata = {
  title: "Winding Machines — Coil, Transformer, Capacitor, Stator & EV Motor",
  description:
    "Seven families of winding machines from Synthesis: semi-automatic and multi-spindle coil winders, stator winders, transformer, capacitor, EV motor and special purpose machines.",
  alternates: { canonical: "/machines" },
};

export default function MachinesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Machines" }]}
        eyebrow="Machine range"
        title={
          <>
            Seven machine families<span className="text-accent">.</span>
          </>
        }
        intro="Every family is designed and built in Bengaluru. Choose by machine below — or start from the coil you need to wind."
        aside={
          <Link href="/coil-types" className="group flex items-center justify-between border border-line bg-panel p-2 hover:border-accent">
            <span>
              <span className="label block text-muted">Not sure which machine?</span>
              <span className="display mt-1 block text-title">Choose by coil type</span>
            </span>
            <span aria-hidden="true" className="text-accent transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        }
      />

      <section className="theme-light py-8 lg:py-12" aria-label="Machine families">
        <ul className="page-x grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {machineCategories.map((c, i) => {
            const ms = machinesInCategory(c.slug);
            return (
              <li key={c.slug}>
                <PhotoCard
                  href={categoryHref(c)}
                  image={c.image}
                  imageAlt={c.name}
                  index={`Fig. ${String(i + 1).padStart(2, "0")}`}
                  meta={`${ms.length} models · ${coilsForCategory(c.slug).length} coil types`}
                  title={c.name}
                  body={FAMILY_SUMMARY[c.slug]}
                  chips={ms.slice(0, 5).map((m) => shortName(m.name))}
                  footer="View family"
                />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
