import Image from "next/image";
import Link from "next/link";
import { MagneticLink } from "@/components/magnetic";
import { company } from "@content/company";
import { machineCategories } from "@content/machines";

const tel = (p: string) => `tel:${p.replace(/[^+\d]/g, "")}`;

export function SiteFooter() {
  const ho = company.offices[0];
  return (
    <footer className="theme-dark border-t border-line">
      {/* closing CTA */}
      <section aria-labelledby="cta-title" className="bg-blueprint border-b border-line py-10 lg:py-16">
        <div className="page-grid gap-y-4">
          <h2 id="cta-title" className="display col-span-full text-display-l lg:col-span-8">
            Have a coil
            <br />
            to wind<span className="text-accent">?</span>
          </h2>
          <div className="col-span-full flex flex-col gap-3 self-end md:col-span-8 lg:col-span-4">
            <p className="text-muted md:text-lead">
              Send us your coil drawing, wire size and production target. We’ll recommend the machine — standard or built to order.
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <MagneticLink href="/contact" className="group inline-flex items-center gap-2 bg-accent px-3 py-2 text-small font-medium text-accent-fg">
                Send an enquiry
                <span aria-hidden="true" className="transition-transform duration-(--duration-fast) group-hover:translate-x-0.5">
                  →
                </span>
              </MagneticLink>
              <a href={`mailto:${ho.email}`} className="label text-fg underline decoration-fg/40 underline-offset-4 hover:decoration-accent">
                {ho.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="page-grid gap-y-6 py-8">
        <div className="col-span-full md:col-span-4">
          <Image src="/images/brand/logo-synthesis-light.png" alt="Synthesis Winding Technologies Pvt. Ltd." width={900} height={200} className="h-auto w-[180px]" />
          <p className="mt-2 max-w-[32ch] text-small text-muted">{company.tagline}. Winding machines designed and built in Bengaluru since {company.founded}.</p>
          <p className="label mt-3 text-muted">ISO 9001:2015</p>
        </div>

        <nav aria-label="Machines" className="col-span-2 md:col-span-3">
          <p className="label text-muted">Machines</p>
          <ul className="mt-2 grid gap-1">
            {machineCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/machines/${c.slug}`} className="text-small text-fg/85 hover:text-accent">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="col-span-2 md:col-span-2">
          <p className="label text-muted">Company</p>
          <ul className="mt-2 grid gap-1">
            {[
              ["/about", "About"],
              ["/coil-types", "Coil types"],
              ["/industries", "Industries"],
              ["/news-events", "News & events"],
              ["/blog", "Blog"],
              ["/contact", "Contact"],
            ].map(([h, l]) => (
              <li key={h}>
                <Link href={h} className="text-small text-fg/85 hover:text-accent">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-full md:col-span-3">
          <p className="label text-muted">Head office</p>
          <address className="mt-2 text-small not-italic text-fg/85">
            {ho.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <p className="mt-2 text-small">
            <a href={tel(ho.phones[0])} className="hover:text-accent">
              {ho.phoneDisplay}
            </a>
          </p>
          <ul className="mt-3 flex gap-2">
            {(
              [
                ["LinkedIn", company.socials.linkedin],
                ["YouTube", company.socials.youtube],
                ["Facebook", company.socials.facebook],
              ] as const
            ).map(([l, h]) => (
              <li key={l}>
                <a href={h} target="_blank" rel="noopener noreferrer" className="label text-fg/85 hover:text-accent">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="page-x flex flex-wrap justify-between gap-2 border-t border-line py-2">
        <p className="label text-muted">© {company.legalName}</p>
        <p className="label text-muted">12.84° N · 77.66° E</p>
      </div>
    </footer>
  );
}
