import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { machineBySlug, machines, machinesInCategory } from "@content/machines";
import { categoryBySlug, categoryHref, coilHref, coilsWoundBy, machineHref, shortName } from "@content/relations";
import { PageHero } from "@/components/page-hero";
import { EnquireBand, PhotoCard } from "@/components/cards";
import Image from "next/image";
import { SpecTable } from "@/components/spec-table";

/** Whole page depends on the slug; every slug is prerendered by generateStaticParams. */
export const instant = false;

export function generateStaticParams() {
  return machines.map((m) => ({ category: m.category, machine: m.slug }));
}

const describe = (m: NonNullable<ReturnType<typeof machineBySlug>>) =>
  m.sourceDatasheetDescription?.[0] ?? m.sourceDescription[0] ?? `${m.name} from Synthesis Winding Technologies.`;

export async function generateMetadata({ params }: PageProps<"/machines/[category]/[machine]">): Promise<Metadata> {
  const { machine } = await params;
  const m = machineBySlug(machine);
  if (!m) return {};
  return {
    title: m.name,
    description: describe(m).slice(0, 158),
    alternates: { canonical: machineHref(m) },
    openGraph: m.image ? { images: [m.image] } : undefined,
  };
}

function List({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <h3 className="label text-muted">{title}</h3>
      <ul className="mt-2 grid gap-1">
        {items.map((t) => (
          <li key={t} className="flex gap-1.5 border-b border-line pb-1 text-small last:border-0">
            <span className="marker mt-[7px]" aria-hidden="true" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function MachinePage({ params }: PageProps<"/machines/[category]/[machine]">) {
  const { category, machine } = await params;
  const m = machineBySlug(machine);
  const c = categoryBySlug(category);
  if (!m || !c || m.category !== c.slug) notFound();

  const coils = coilsWoundBy(m.slug);
  const siblings = machinesInCategory(c.slug).filter((x) => x.slug !== m.slug).slice(0, 3);
  const description = [...(m.sourceDatasheetDescription ?? []), ...m.sourceDescription.filter((p) => !(m.sourceDatasheetDescription ?? []).includes(p))];

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: m.name,
    category: c.name,
    description: describe(m),
    brand: { "@type": "Brand", name: "Synthesis" },
    manufacturer: { "@type": "Organization", name: "Synthesis Winding Technologies Pvt. Ltd." },
    ...(m.image ? { image: m.image } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <PageHero
        crumbs={[{ href: "/machines", label: "Machines" }, { href: categoryHref(c), label: c.name }, { label: shortName(m.name) }]}
        eyebrow={m.status === "under-development" ? `${c.name} · Under development` : `${c.name}${m.group ? ` · ${m.group}` : ""}`}
        title={shortName(m.name)}
        intro={m.sourceSubtitle ?? undefined}
        aside={
          <div className="flex flex-col gap-2">
            <Link href={`/contact?machine=${m.slug}`} className="group inline-flex items-center justify-between gap-2 bg-accent px-3 py-2 text-small font-medium text-accent-fg">
              Enquire about this machine
              <span aria-hidden="true" className="transition-transform duration-(--duration-fast) group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            {m.datasheet && (
              <a
                href={m.datasheet.file}
                download
                className="group inline-flex items-center justify-between gap-2 border border-fg/40 px-3 py-2 text-small font-medium hover:border-accent hover:text-accent"
              >
                Download datasheet (PDF)
                <span aria-hidden="true">↓</span>
              </a>
            )}
          </div>
        }
      />

      <section className="theme-light py-8 lg:py-12" aria-labelledby="overview">
        <div className="page-grid gap-y-6">
          <div className="col-span-full self-start border border-line bg-photo lg:sticky lg:top-[calc(var(--header-h)+24px)] lg:col-span-6">
            <div className="relative aspect-[4/3]">
              {m.image ? (
                <Image src={m.image} alt={m.name} fill priority sizes="(min-width: 1024px) 45vw, 90vw" className="object-contain p-3 mix-blend-multiply" />
              ) : (
                <div className="bg-blueprint absolute inset-0 flex items-center justify-center">
                  <span className="label text-muted">Photo to follow</span>
                </div>
              )}
            </div>
            {m.gallery && m.gallery.length > 0 && (
              <ul className="grid grid-cols-3 border-t border-line">
                {m.gallery.map((g) => (
                  <li key={g} className="relative aspect-[4/3] border-r border-line last:border-0">
                    <Image src={g} alt="" fill sizes="15vw" className="object-contain p-1 mix-blend-multiply" />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="col-span-full lg:col-span-5 lg:col-start-8">
            <h2 id="overview" className="label text-muted">
              Overview
            </h2>
            {description.length > 0 ? (
              <div className="mt-2 space-y-2">
                {description.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-lead" : "text-muted"}>
                    {p}
                  </p>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-muted">
                Detailed information for this machine is available on request. Send us your coil requirement and we will share the specification.
              </p>
            )}

            {m.variants.length > 0 && (
              <div className="mt-5">
                <h3 className="label text-muted">Models</h3>
                <ul className="mt-2 flex flex-wrap gap-1">
                  {m.variants.map((v) => (
                    <li key={v} className="label border border-line px-1 py-0.5 text-fg">
                      {v.replace(/^(Smart Winder|Automatic|Semi Automatic)\s*–\s*/i, "")}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {m.sourceWebSpecs && m.sourceWebSpecs.length > 0 && !m.specs && (
              <dl className="mt-5 grid gap-1">
                {m.sourceWebSpecs.map((s) => {
                  const [k, ...v] = s.split(":");
                  return (
                    <div key={s} className="flex justify-between gap-2 border-b border-line pb-1 text-small">
                      <dt className="text-muted">{k.trim()}</dt>
                      <dd className="text-right font-mono">{v.join(":").trim()}</dd>
                    </div>
                  );
                })}
              </dl>
            )}

            <div className="mt-6 grid gap-5">
              <List title="Features" items={m.sourceFeatures} />
              <List title="Applications" items={m.sourceApplications} />
            </div>
          </div>
        </div>
      </section>

      {m.specs && m.specs.length > 0 && (
        <section className="theme-dark py-8 lg:py-12" aria-labelledby="specs">
          <div className="page-x">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <h2 id="specs" className="display text-display-m">
                Technical specifications
              </h2>
              {m.datasheet && (
                <a href={m.datasheet.file} download className="label text-accent hover:underline">
                  Full datasheet (PDF) ↓
                </a>
              )}
            </div>
            <div className="mt-4">
              <SpecTable rows={m.specs} caption={`${m.sourceTitle ?? m.name}${m.datasheet?.docCode ? ` · ${m.datasheet.docCode}` : ""}`} />
            </div>
            {m.specNotes && m.specNotes.length > 0 && (
              <ul className="mt-2 grid gap-0.5">
                {m.specNotes.map((n) => (
                  <li key={n} className="label text-muted">
                    * {n}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {(m.sourceStandardAccessories?.length || m.sourceOptionalAccessories?.length) && (
        <section className="theme-light py-8 lg:py-12" aria-label="Accessories">
          <div className="page-grid gap-y-5">
            <div className="col-span-full md:col-span-6">
              <List title="Standard accessories" items={m.sourceStandardAccessories} />
            </div>
            <div className="col-span-full md:col-span-6">
              <List title="Optional accessories" items={m.sourceOptionalAccessories} />
            </div>
          </div>
        </section>
      )}

      {coils.length > 0 && (
        <section className="theme-dark py-8 lg:py-12" aria-labelledby="coils">
          <div className="page-grid gap-y-3">
            <h2 id="coils" className="display col-span-full text-display-m lg:col-span-4">
              Coils this machine winds
            </h2>
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

      {siblings.length > 0 && (
        <section className="theme-light py-8 lg:py-12" aria-labelledby="more">
          <div className="page-x flex items-end justify-between gap-2">
            <h2 id="more" className="display text-display-m">
              More in {c.name}
            </h2>
            <Link href={categoryHref(c)} className="label text-accent hover:underline">
              All models →
            </Link>
          </div>
          <ul className="page-x mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((s) => (
              <li key={s.slug}>
                <PhotoCard href={machineHref(s)} image={s.image} imageAlt={s.name} title={shortName(s.name)} meta={s.group} footer="View machine" />
              </li>
            ))}
          </ul>
        </section>
      )}

      <EnquireBand
        title={`Enquire about the ${shortName(m.name)}`}
        body="Share your coil drawing, wire size and target output. We’ll come back to you on the right configuration."
        href={`/contact?machine=${m.slug}`}
      />
    </>
  );
}
