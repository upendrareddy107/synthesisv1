import type { Metadata } from "next";
import { Suspense } from "react";
import { company } from "@content/company";
import { machineCategories, machines } from "@content/machines";
import { coils } from "@content/coils";
import { shortName } from "@content/relations";
import { PageHero } from "@/components/page-hero";
import { EnquiryForm, type Option } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Contact & Enquiry",
  description:
    "Send an enquiry to Synthesis Winding Technologies, Bengaluru. Tell us the coil you need to wind and we’ll recommend the machine. +91-80-30282020, info@synthesis-winding.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const families: Option[] = machineCategories.map((c) => ({ value: c.slug, label: c.name }));
  const machineOpts: Option[] = machines.map((m) => ({
    value: m.slug,
    label: shortName(m.name),
    group: machineCategories.find((c) => c.slug === m.category)?.name,
  }));
  const coilOpts: Option[] = coils.map((c) => ({ value: c.slug, label: c.name }));
  const tel = (p: string) => `tel:${p.replace(/[^+\d]/g, "")}`;
  const ho = company.offices[0];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        eyebrow="Enquiry"
        title={
          <>
            Tell us what you need to wind<span className="text-accent">.</span>
          </>
        }
        intro="The more we know about the coil — wire, dimensions, turns, output — the faster we can recommend the right machine."
      />

      <section className="theme-light py-8 lg:py-12">
        <div className="page-grid gap-y-8">
          <div className="col-span-full lg:col-span-7">
            <Suspense fallback={<p className="label text-muted">Loading form…</p>}>
              <EnquiryForm machines={machineOpts} families={families} coils={coilOpts} />
            </Suspense>
          </div>

          <aside className="col-span-full lg:col-span-4 lg:col-start-9" aria-label="Contact details">
            <div className="border-t border-fg pt-2">
              <p className="label text-muted">Call</p>
              <a href={tel(ho.phones[0])} className="display mt-1 block text-title hover:text-accent">
                {ho.phoneDisplay}
              </a>
            </div>
            <div className="mt-4 border-t border-line pt-2">
              <p className="label text-muted">Email</p>
              <ul className="mt-1 grid gap-1 text-small">
                <li>
                  <span className="text-muted">General · </span>
                  <a href={`mailto:${ho.email}`} className="hover:text-accent">
                    {ho.email}
                  </a>
                </li>
                {company.departmentEmails.map((d) => (
                  <li key={d.email}>
                    <span className="text-muted">{d.label} · </span>
                    <a href={`mailto:${d.email}`} className="hover:text-accent">
                      {d.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {company.offices.map((o) => (
              <div key={o.label} className="mt-4 border-t border-line pt-2">
                <p className="label text-muted">{o.label}</p>
                <address className="mt-1 text-small not-italic">
                  {o.lines.join(", ")}
                </address>
                <a href={tel(o.phones[0])} className="text-small hover:text-accent">
                  {"phoneDisplay" in o ? o.phoneDisplay : o.phones[0]}
                </a>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
