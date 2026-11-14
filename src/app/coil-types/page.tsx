import type { Metadata } from "next";
import { Suspense } from "react";
import { coils } from "@content/coils";
import { industries } from "@content/industries";
import { PageHero } from "@/components/page-hero";
import { CoilExplorer, type CoilLite } from "@/components/coil-explorer";

export const metadata: Metadata = {
  title: "Coil Types — Choose a Winding Machine by Coil",
  description:
    "Find the winding machine for your coil: relay, ignition, solenoid, SMPS, transformer, stator, capacitor and more — across automotive, electronics, power, switchgear and defence.",
  alternates: { canonical: "/coil-types" },
};

export default function CoilTypesPage() {
  const lite: CoilLite[] = coils.map((c) => ({
    slug: c.slug,
    name: c.name,
    industries: c.industries,
    image: c.image,
    machines: c.machines?.length ?? 0,
  }));
  const inds = industries.map((i) => ({ slug: i.slug, name: i.name }));

  return (
    <>
      <PageHero
        crumbs={[{ label: "Coil types" }]}
        eyebrow="Choose by coil"
        title={
          <>
            {coils.length} coil types<span className="text-accent">.</span>
          </>
        }
        intro="Start from the coil you need to wind. Each coil page lists the Synthesis machines that wind it."
      />
      <section className="theme-light py-8 lg:py-12" aria-label="Coil catalogue">
        <div className="page-x">
          <Suspense fallback={<p className="label text-muted">Loading coil catalogue…</p>}>
            <CoilExplorer coils={lite} industries={inds} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
