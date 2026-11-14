import Link from "next/link";
import type { ReactNode } from "react";

export type Crumb = { href?: string; label: string };

/** Dark blueprint page header used by every inner page. Server component. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  aside,
  children,
  size = "l",
}: {
  size?: "l" | "m";
  crumbs: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="theme-dark bg-blueprint border-b border-line">
      <div className="page-x pt-3">
        <nav aria-label="Breadcrumb">
          <ol className="label flex flex-wrap items-center gap-1 text-muted">
            {[{ href: "/", label: "Home" }, ...crumbs].map((c, i, arr) => (
              <li key={i} className="flex items-center gap-1">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href && i < arr.length - 1 ? (
                  <Link href={c.href} className="hover:text-accent">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current={i === arr.length - 1 ? "page" : undefined} className={i === arr.length - 1 ? "text-fg" : ""}>
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className="page-grid gap-y-4 pt-6 pb-8 lg:pt-10 lg:pb-12">
        <div className={`col-span-full ${aside ? "lg:col-span-7" : "lg:col-span-10"}`}>
          {eyebrow && (
            <p className="label enter-fade flex items-center gap-1 text-muted">
              <span className="marker" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1 className={`display mt-3 ${size === "m" ? "text-display-m" : "text-display-l"}`}>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="enter-rise block">{title}</span>
            </span>
          </h1>
          {intro && <div className="enter-fade mt-4 max-w-[60ch] text-muted md:text-lead">{intro}</div>}
        </div>
        {aside && <div className="enter-fade col-span-full lg:col-span-4 lg:col-start-9 lg:self-end">{aside}</div>}
        {children && <div className="col-span-full">{children}</div>}
      </div>
    </section>
  );
}
