import type { Metadata } from "next";
import { news } from "@content/news";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import Image from "next/image";

export const metadata: Metadata = {
  title: "News & Events — Awards and Exhibitions",
  description: "Awards, recognitions and exhibitions from Synthesis Winding Technologies, including ELECRAMA 2025, ELCIA Tech Summit 2025 and the CII Customer Obsession award.",
  alternates: { canonical: "/news-events" },
};

export default function NewsPage() {
  const published = news.filter((n) => n.kind !== "notice"); // outdated COVID notice not published
  const awards = published.filter((n) => n.kind === "award");
  const events = published.filter((n) => n.kind === "exhibition");

  return (
    <>
      <PageHero
        crumbs={[{ label: "News & events" }]}
        eyebrow="News & events"
        title={
          <>
            Awards and exhibitions<span className="text-accent">.</span>
          </>
        }
        intro="Recognition from customers and industry bodies, and where to meet our team."
      />

      <section className="theme-light py-8 lg:py-12" aria-labelledby="awards">
        <div className="page-x">
          <SectionLabel n="01">Awards &amp; recognition</SectionLabel>
          <h2 id="awards" className="sr-only">
            Awards and recognition
          </h2>
        </div>
        <ul className="page-x mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((a) => (
            <li key={a.slug} className="flex flex-col border border-line bg-panel">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-photo">
                {a.images[0] && <Image src={a.images[0]} alt={a.title} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover" />}
              </div>
              <div className="flex flex-1 flex-col p-2">
                <div className="flex justify-between gap-2">
                  <span className="label text-accent">Award</span>
                  {a.year && <span className="label text-muted">{a.year}</span>}
                </div>
                <h3 className="display mt-1.5 text-title">{a.title}</h3>
                {a.images.length > 1 && <p className="label mt-auto pt-2 text-muted">{a.images.length} photos</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {events.map((e, i) => (
        <section key={e.slug} className={`${i % 2 === 0 ? "theme-dark" : "theme-light"} py-8 lg:py-12`} aria-labelledby={e.slug}>
          <div className="page-grid gap-y-3">
            <div className="col-span-full lg:col-span-4">
              <p className="label text-muted">Exhibition{e.year ? ` · ${e.year}` : ""}</p>
              <h2 id={e.slug} className="display mt-2 text-display-m">
                {e.title}
              </h2>
              {e.details && (
                <dl className="mt-3 grid gap-1">
                  {Object.entries(e.details).map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-2 border-b border-line pb-1 text-small">
                      <dt className="label text-muted">{k}</dt>
                      <dd className="text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
            <ul className="col-span-full grid grid-cols-2 gap-1 md:grid-cols-3 lg:col-span-8">
              {e.images.slice(0, 9).map((src) => (
                <li key={src} className="relative aspect-[4/3] overflow-hidden bg-photo">
                  <Image src={src} alt="" fill sizes="(min-width: 1024px) 20vw, 45vw" className="object-cover" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
