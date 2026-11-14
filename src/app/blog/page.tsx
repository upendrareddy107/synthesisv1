import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, formatDate } from "@content/blog";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Blog — Winding Technology Guides",
  description: "Guides to coil, transformer, stator, capacitor and EV motor winding: machine types, processes and how to choose the right winding machine.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const [lead, ...rest] = blogPosts;
  return (
    <>
      <PageHero
        crumbs={[{ label: "Blog" }]}
        eyebrow="Blog"
        title={
          <>
            Winding, explained<span className="text-accent">.</span>
          </>
        }
        intro={`${blogPosts.length} guides on coils, transformers, stators, capacitors and the machines that wind them.`}
      />

      <section className="theme-light py-8 lg:py-12" aria-label="Articles">
        <div className="page-x">
          <Link href={`/blog/${lead.slug}`} className="group grid gap-3 border-y border-fg py-4 md:grid-cols-12 md:gap-x-3">
            <p className="label text-accent md:col-span-3">
              Latest · {formatDate(lead.date)} · {lead.minutes} min
            </p>
            <div className="md:col-span-9">
              <h2 className="display text-display-m transition-colors group-hover:text-accent">{lead.title}</h2>
              <p className="mt-2 max-w-[70ch] text-muted">{lead.excerpt}</p>
            </div>
          </Link>

          <ol className="mt-2">
            {rest.map((p) => (
              <li key={p.slug} className="border-b border-line">
                <Link href={`/blog/${p.slug}`} className="group grid gap-1 py-2.5 md:grid-cols-12 md:gap-x-3">
                  <p className="label text-muted md:col-span-3">
                    {formatDate(p.date)} · {p.minutes} min
                  </p>
                  <h3 className="display text-title transition-transform duration-(--duration-base) ease-(--ease-out) group-hover:translate-x-0.5 group-hover:text-accent md:col-span-8">
                    {p.title}
                  </h3>
                  <span aria-hidden="true" className="hidden text-right text-muted group-hover:text-accent md:col-span-1 md:block">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
