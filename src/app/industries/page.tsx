import type { Metadata } from "next";
import Link from "next/link";
import { coils } from "@content/coils";
import { industries, coilsByIndustry } from "@content/industries";
import { coilHref, machineHref, machinesForIndustry, shortName } from "@content/relations";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Industries — Automotive, Electronics, Defence, Power, Switchgear",
  description:
    "Winding machines for automotive, consumer electronics, defence & aerospace, electrical power and switchgear manufacturers, with the coil types each industry winds.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Industries" }]}
        eyebrow="Industries"
        title={
          <>
            Six industries. {coils.length} coil types<span className="text-accent">.</span>
          </>
        }
        intro="From ignition coils to distribution transformers, here is what our customers wind — and the machines they wind it on."
      >
        <nav aria-label="Jump to industry" className="mt-2 flex flex-wrap gap-1">
          {industries.map((i, n) => (
            <a key={i.slug} href={`#${i.slug}`} className="label border border-line px-1.5 py-1 text-fg/85 hover:border-accent hover:text-accent">
              {String(n + 1).padStart(2, "0")} · {i.name}
            </a>
          ))}
        </nav>
      </PageHero>

      {industries.map((ind, n) => {
        const list = coilsByIndustry(ind.slug);
        const ms = machinesForIndustry(ind.slug);
        return (
          <section
            key={ind.slug}
            id={ind.slug}
            aria-labelledby={`${ind.slug}-t`}
            className={`${n % 2 === 0 ? "theme-light" : "theme-dark"} scroll-mt-[calc(var(--header-h)+16px)] py-8 lg:py-12`}
          >
            <div className="page-grid gap-y-5">
              <div className="col-span-full lg:col-span-4">
                <p className="label text-muted">{String(n + 1).padStart(2, "0")} / 06</p>
                <h2 id={`${ind.slug}-t`} className="display mt-2 text-display-m">
                  {ind.name}
                </h2>
                {ind.copy?.summary && <p className="mt-2 text-muted">{ind.copy.summary.value}</p>}
                <Link href={`/coil-types?industry=${ind.slug}`} className="label mt-3 inline-flex items-center gap-1 text-accent hover:underline">
                  Browse {list.length} coil types <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="col-span-full lg:col-span-4">
                <h3 className="label text-muted">Coil types</h3>
                <ul className="mt-2 flex flex-wrap gap-1">
                  {list.map((k) => (
                    <li key={k.slug}>
                      <Link href={coilHref(k)} className="label inline-block border border-line px-1 py-0.5 text-fg/85 transition-colors hover:border-accent hover:text-accent">
                        {k.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-full lg:col-span-4">
                <h3 className="label text-muted">Machines used</h3>
                {ms.length > 0 ? (
                  <ul className="mt-2 border-t border-line">
                    {ms.map((m) => (
                      <li key={m.slug} className="border-b border-line">
                        <Link href={machineHref(m)} className="group flex items-center justify-between gap-2 py-1 text-small hover:text-accent">
                          {shortName(m.name)}
                          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-small text-muted">Built to order — send us your coil drawing.</p>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
