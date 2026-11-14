import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { machineBySlug, machineCategories } from "@content/machines";
import { FAMILY_SUMMARY } from "@content/copy";
import { categoryBySlug, coilHref, coilsForCategory, machineHref, shortName } from "@content/relations";
import { PageHero } from "@/components/page-hero";
import { EnquireBand, PhotoCard } from "@/components/cards";
import Image from "next/image";
import { SectionLabel } from "@/components/section-label";

/** Whole page depends on the slug; every slug is prerendered by generateStaticParams. */
export const instant = false;

export function generateStaticParams() {
  return machineCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/machines/[category]">): Promise<Metadata> {
  const c = categoryBySlug((await params).category);
  if (!c) return {};
  return { title: c.name, description: FAMILY_SUMMARY[c.slug], alternates: { canonical: `/machines/${c.slug}` } };
}

export default async function CategoryPage({ params }: PageProps<"/machines/[category]">) {
  const c = categoryBySlug((await params).category);
  if (!c) notFound();
  const coils = coilsForCategory(c.slug);

  return (
    <>
      <PageHero
        crumbs={[{ href: "/machines", label: "Machines" }, { label: c.name }]}
        eyebrow="Machine family"
        title={c.name}
        intro={FAMILY_SUMMARY[c.slug]}
        aside={
          <div className="border border-line bg-photo">
            <div className="relative aspect-[4/3]">
              <Image src={c.image} alt={c.name} fill priority sizes="(min-width: 1024px) 30vw, 90vw" className="object-contain p-2 mix-blend-multiply" />
            </div>
          </div>
        }
      />

      {c.sourceDescription.length > 0 && (
        <section className="theme-light py-8 lg:py-12" aria-labelledby="overview">
          <div className="page-grid gap-y-3">
            <div className="col-span-full lg:col-span-3">
              <SectionLabel n="01">Overview</SectionLabel>
              <h2 id="overview" className="sr-only">
                Overview
              </h2>
            </div>
            <div className="col-span-full space-y-2 lg:col-span-8 lg:col-start-5">
              {c.sourceDescription.map((p, i) => (
                <p key={i} className={i === 0 ? "display text-title md:text-[1.75rem] md:leading-tight" : "text-muted md:text-lead"}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {c.groups.map((g, gi) => (
        <section key={g.label} className={`${gi % 2 === 0 ? "theme-dark" : "theme-light"} py-8 lg:py-12`} aria-labelledby={`g-${gi}`}>
          <div className="page-x flex flex-wrap items-end justify-between gap-2">
            <h2 id={`g-${gi}`} className="display text-display-m">
              {g.label}
            </h2>
            <p className="label text-muted">{g.machines.length} models</p>
          </div>
          <ul className="page-x mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {g.machines.map((slug) => {
              const m = machineBySlug(slug)!;
              return (
                <li key={slug}>
                  <PhotoCard
                    href={machineHref(m)}
                    image={m.image}
                    imageAlt={m.name}
                    meta={m.status === "under-development" ? "Under development" : m.datasheet ? "Datasheet available" : "Enquire for details"}
                    title={shortName(m.name)}
                    chips={m.variants.slice(0, 6).map((v) => v.replace(/^(Smart Winder|Automatic|Semi Automatic)\s*–?\s*/i, ""))}
                    footer="View machine"
                  />
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      {c.accessories && c.accessories.length > 0 && (
        <section className="theme-light py-8 lg:py-12" aria-labelledby="acc">
          <div className="page-x">
            <h2 id="acc" className="display text-display-m">
              Accessories
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {c.accessories.map((a) => (
                <li key={a.name} className="border border-line bg-panel">
                  <div className="relative aspect-square bg-photo">
                    {a.image && <Image src={a.image} alt={a.name} fill sizes="25vw" className="object-contain p-2 mix-blend-multiply" />}
                  </div>
                  <p className="label border-t border-line px-1.5 py-1 text-fg">{a.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {coils.length > 0 && (
        <section className="theme-dark py-8 lg:py-12" aria-labelledby="coils">
          <div className="page-grid gap-y-3">
            <div className="col-span-full lg:col-span-4">
              <h2 id="coils" className="display text-display-m">
                Coils wound on this family
              </h2>
              <p className="mt-2 text-muted">{coils.length} coil types, from the old catalogue’s application pages.</p>
            </div>
            <ul className="col-span-full flex flex-wrap content-start gap-1 lg:col-span-8">
              {coils.map((k) => (
                <li key={k.slug}>
                  <Link href={coilHref(k)} className="label inline-block border border-line px-1.5 py-1 text-fg/85 transition-colors hover:border-accent hover:text-accent">
                    {k.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <EnquireBand
        title={`Need a ${c.name.toLowerCase()}?`}
        body="Tell us the coil, wire and output you need. Our engineers will recommend a model — or a machine built to order."
        href={`/contact?family=${c.slug}`}
      />
    </>
  );
}
