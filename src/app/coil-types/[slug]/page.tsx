import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { coils } from "@content/coils";
import { coilBySlug, coilHref, industryBySlug, machineHref, machinesForCoil, shortName } from "@content/relations";
import { categoryBySlug } from "@content/relations";
import { PageHero } from "@/components/page-hero";
import { EnquireBand, PhotoCard } from "@/components/cards";
import Image from "next/image";

/** Whole page depends on the slug; every slug is prerendered by generateStaticParams. */
export const instant = false;

export function generateStaticParams() {
  return coils.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/coil-types/[slug]">): Promise<Metadata> {
  const c = coilBySlug((await params).slug);
  if (!c) return {};
  const ms = machinesForCoil(c).map((m) => shortName(m.name));
  return {
    title: `${c.name} Winding Machine`,
    description: ms.length
      ? `Machines for winding ${c.name.toLowerCase()}s: ${ms.slice(0, 4).join(", ")}. Designed and built by Synthesis Winding Technologies, Bengaluru.`
      : `Winding solutions for ${c.name.toLowerCase()}s from Synthesis Winding Technologies, Bengaluru.`,
    alternates: { canonical: coilHref(c) },
  };
}

export default async function CoilPage({ params }: PageProps<"/coil-types/[slug]">) {
  const c = coilBySlug((await params).slug);
  if (!c) notFound();
  const ms = machinesForCoil(c);
  const inds = c.industries.map((s) => industryBySlug(s)!);
  const related = coils.filter((k) => k.slug !== c.slug && k.industries.some((i) => c.industries.includes(i))).slice(0, 12);

  return (
    <>
      <PageHero
        crumbs={[{ href: "/coil-types", label: "Coil types" }, { label: c.name }]}
        eyebrow={inds.map((i) => i.name).join(" · ")}
        title={c.name}
        intro={
          ms.length > 0
            ? `${ms.length} Synthesis machine${ms.length > 1 ? "s" : ""} wind${ms.length === 1 ? "s" : ""} this coil. Compare them below, or send us your coil drawing for a recommendation.`
            : "Send us your coil drawing and production target — we’ll recommend a machine or build one to order."
        }
        aside={
          c.image ? (
            <div className="border border-line bg-photo">
              <div className="relative aspect-[16/10]">
                <Image src={c.image} alt={c.name} fill priority sizes="(min-width: 1024px) 30vw, 90vw" className="object-contain p-2 mix-blend-multiply" />
              </div>
            </div>
          ) : undefined
        }
      />

      {ms.length > 0 && (
        <section className="theme-light py-8 lg:py-12" aria-labelledby="machines">
          <div className="page-x flex flex-wrap items-end justify-between gap-2">
            <h2 id="machines" className="display text-display-m">
              Machines that wind it
            </h2>
            {c.sourceModelMentions && c.sourceModelMentions.length > 0 && (
              <p className="label max-w-[60ch] text-muted">Models listed: {c.sourceModelMentions.join(" · ")}</p>
            )}
          </div>
          <ul className="page-x mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ms.map((m) => (
              <li key={m.slug}>
                <PhotoCard
                  href={machineHref(m)}
                  image={m.image}
                  imageAlt={m.name}
                  meta={categoryBySlug(m.category)?.name}
                  title={shortName(m.name)}
                  chips={m.variants.slice(0, 5).map((v) => v.replace(/^(Smart Winder|Automatic|Semi Automatic)\s*–?\s*/i, ""))}
                  footer="View machine"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {related.length > 0 && (
        <section className="theme-dark py-8 lg:py-12" aria-labelledby="related">
          <div className="page-grid gap-y-3">
            <h2 id="related" className="display col-span-full text-display-m lg:col-span-4">
              Related coils
            </h2>
            <ul className="col-span-full flex flex-wrap content-start gap-1 lg:col-span-8">
              {related.map((k) => (
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
        title={`Winding ${c.name.toLowerCase()}s?`}
        body="Send your coil drawing, wire size and target output. We’ll recommend the right machine — standard or built to order."
        href={`/contact?coil=${c.slug}`}
      />
    </>
  );
}
