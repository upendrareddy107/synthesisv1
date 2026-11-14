import type { Metadata } from "next";
import { company } from "@content/company";
import { publishableClients } from "@content/clients";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { Customers } from "@/components/home/customers";
import { CountReel } from "@/components/count-reel";

export const metadata: Metadata = {
  title: "About — Winding Machine Manufacturer Since 1993",
  description:
    "Synthesis Winding Technologies has designed and built winding machines in Bengaluru since 1993. In-house design, ISO 9001:2015, customers in close to 40 countries.",
  alternates: { canonical: "/about" },
};

const DISCIPLINES = ["Mechanical", "Electrical", "PLC", "CNC motion control", "Embedded systems"];

export default function AboutPage() {
  const tel = (p: string) => `tel:${p.replace(/[^+\d]/g, "")}`;
  return (
    <>
      <PageHero
        crumbs={[{ label: "Company" }]}
        eyebrow={`Est. ${company.founded} · Bengaluru`}
        title={
          <>
            Winding machines, since {company.founded}
            <span className="text-accent">.</span>
          </>
        }
        intro={company.copy.intro.value}
      />

      {/* story */}
      <section className="theme-light py-8 lg:py-14" aria-labelledby="story">
        <div className="page-grid gap-y-5">
          <div className="col-span-full lg:col-span-3">
            <SectionLabel n="01">Who we are</SectionLabel>
            <h2 id="story" className="sr-only">
              Who we are
            </h2>
          </div>
          <div className="col-span-full space-y-3 lg:col-span-8 lg:col-start-5">
            {company.copy.about.value.map((p, i) => (
              <p key={i} className={i === 0 ? "display text-statement" : "text-muted md:text-lead"}>
                {p}
              </p>
            ))}
          </div>
        </div>
        <dl className="page-x mt-8 grid gap-x-3 gap-y-5 border-t border-line pt-4 sm:grid-cols-3 lg:mt-12">
          <div>
            <dt className="label text-muted">Founded</dt>
            <dd className="display mt-1 text-numeral">
              <CountReel value={String(company.founded)} />
            </dd>
          </div>
          <div>
            <dt className="label text-muted">Customers in</dt>
            <dd className="display mt-1 flex text-numeral">
              <span className="mr-0.5 text-accent">≈</span>
              <CountReel value="40" />
            </dd>
            <dd className="mt-1 text-small text-muted">close to 40 countries</dd>
          </div>
          <div>
            <dt className="label text-muted">Quality system</dt>
            <dd className="display mt-1 text-display-m">ISO 9001:2015</dd>
          </div>
        </dl>
      </section>

      {/* design capability */}
      <section className="theme-dark bg-blueprint py-8 lg:py-14" aria-labelledby="design">
        <div className="page-grid gap-y-5">
          <div className="col-span-full lg:col-span-5">
            <SectionLabel n="02">In-house design</SectionLabel>
            <h2 id="design" className="display mt-3 text-display-l">
              Every discipline under one roof<span className="text-accent">.</span>
            </h2>
          </div>
          <ul className="col-span-full grid content-end gap-1 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {DISCIPLINES.map((d, i) => (
              <li key={d} className="flex items-baseline gap-2 border-t border-line py-2">
                <span className="label text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="display text-title">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* vision / mission */}
      <section className="theme-light py-8 lg:py-14" aria-label="Vision and mission">
        <div className="page-grid gap-y-6">
          {[
            ["Our vision", company.vision],
            ["Our mission", company.mission],
          ].map(([t, q]) => (
            <figure key={t} className="col-span-full border-t border-fg pt-3 md:col-span-6">
              <figcaption className="label text-muted">{t}</figcaption>
              <blockquote className="display mt-2 text-title md:text-[1.75rem] md:leading-snug">“{q}”</blockquote>
            </figure>
          ))}
        </div>
      </section>

      {/* milestones */}
      <section className="theme-dark py-8 lg:py-14" aria-labelledby="milestones">
        <div className="page-x">
          <SectionLabel n="03">Milestones</SectionLabel>
          <h2 id="milestones" className="display mt-3 text-display-l">
            {company.founded} → 2021<span className="text-accent">.</span>
          </h2>
        </div>
        <ol className="page-x mt-6 lg:mt-10">
          {company.milestones.map((m) => (
            <li key={m.year} className="group grid grid-cols-[88px_1fr] gap-3 border-t border-line py-2.5 md:grid-cols-[200px_1fr] md:py-3">
              <span className="display text-display-m text-muted transition-colors duration-(--duration-base) group-hover:text-accent">{m.year}</span>
              <span className="self-center md:text-lead">{m.copy.value}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* offices */}
      <section className="theme-light py-8 lg:py-14" aria-labelledby="offices">
        <div className="page-x">
          <SectionLabel n="04">Offices &amp; associates</SectionLabel>
          <h2 id="offices" className="display mt-3 text-display-m">
            Where to find us
          </h2>
        </div>
        <ul className="page-x mt-5 grid gap-3 md:grid-cols-3">
          {company.offices.map((o) => (
            <li key={o.label} className="border border-line bg-panel p-2.5">
              <p className="label text-accent">{o.label}</p>
              <address className="mt-2 text-small not-italic">
                {o.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <p className="mt-2 text-small">
                <a href={tel(o.phones[0])} className="hover:text-accent">
                  {"phoneDisplay" in o ? o.phoneDisplay : o.phones[0]}
                </a>
              </p>
              <p className="text-small">
                <a href={`mailto:${o.email}`} className="hover:text-accent">
                  {o.email}
                </a>
              </p>
            </li>
          ))}
        </ul>
        <h3 className="page-x label mt-8 block text-muted">Overseas &amp; regional associates</h3>
        <ul className="page-x mt-2 grid gap-x-3 sm:grid-cols-2 lg:grid-cols-3">
          {company.associates.map((a) => (
            <li key={a.name} className="border-t border-line py-2">
              <p className="label text-muted">{a.country}</p>
              <p className="mt-0.5 font-medium">{a.name}</p>
              <p className="mt-0.5 text-small text-muted">{a.lines.join(", ")}</p>
              <p className="mt-0.5 text-small">
                <a href={`mailto:${a.email}`} className="hover:text-accent">
                  {a.email}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <Customers n="05" grey={false} logos={publishableClients.map((c) => ({ name: c.name, src: c.logo }))} />
    </>
  );
}
