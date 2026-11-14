import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, formatDate, postBySlug } from "@content/blog";
import { PageHero } from "@/components/page-hero";
import { EnquireBand } from "@/components/cards";

/** Whole page depends on the slug; every slug is prerendered by generateStaticParams. */
export const instant = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const p = postBySlug((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt.slice(0, 158),
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", publishedTime: p.date, modifiedTime: p.modified },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const p = postBySlug((await params).slug);
  if (!p) notFound();
  const i = blogPosts.findIndex((x) => x.slug === p.slug);
  const newer = blogPosts[i - 1];
  const older = blogPosts[i + 1];

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    datePublished: p.date,
    dateModified: p.modified,
    publisher: { "@type": "Organization", name: "Synthesis Winding Technologies Pvt. Ltd." },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero
        size="m"
        crumbs={[{ href: "/blog", label: "Blog" }, { label: "Article" }]}
        eyebrow={`${formatDate(p.date)} · ${p.minutes} min read`}
        title={p.title}
      />
      <section className="theme-light py-8 lg:py-12">
        <div className="page-grid">
          {/* Content is the company's own migrated WordPress HTML, cleaned at migration (no scripts/styles). */}
          <article className="prose-post col-span-full lg:col-span-8 lg:col-start-3" dangerouslySetInnerHTML={{ __html: p.html }} />
        </div>
        <nav aria-label="More articles" className="page-x mt-10 grid gap-2 border-t border-line pt-3 md:grid-cols-2">
          {older ? (
            <Link href={`/blog/${older.slug}`} className="group">
              <span className="label text-muted">← Older</span>
              <span className="display mt-1 block text-title group-hover:text-accent">{older.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link href={`/blog/${newer.slug}`} className="group md:text-right">
              <span className="label text-muted">Newer →</span>
              <span className="display mt-1 block text-title group-hover:text-accent">{newer.title}</span>
            </Link>
          )}
        </nav>
      </section>
      <EnquireBand
        title="Planning a winding line?"
        body="Tell us the coil you need to wind and the output you need. We’ll recommend the machine."
        href="/contact"
      />
    </>
  );
}
