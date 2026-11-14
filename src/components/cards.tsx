import Link from "next/link";
import Image from "next/image";

/** Product / coil card: full-colour photo on a light plate, mono meta, title. (Inner pages show photos in colour; grey-until-hover is home-page only.) */
export function PhotoCard({
  href,
  image,
  imageAlt,
  index,
  meta,
  title,
  body,
  chips,
  footer,
  imageAspect = "aspect-[4/3]",
}: {
  href: string;
  image?: string;
  imageAlt: string;
  index?: string;
  meta?: string;
  title: string;
  body?: string;
  chips?: string[];
  footer?: string;
  imageAspect?: string;
}) {
  return (
    <Link href={href} className="group flex h-full flex-col border border-line bg-panel transition-colors duration-(--duration-base) hover:border-accent">
      <div className={`bg-blueprint relative ${imageAspect} overflow-hidden border-b border-line`}>
        {image ? (
          <div className="absolute inset-3 bg-photo">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-contain p-1.5 mix-blend-multiply transition-transform duration-(--duration-slow) ease-(--ease-out) group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="label text-muted">Photo to follow</span>
          </div>
        )}
        {index && <span className="label absolute top-1.5 left-1.5 bg-bg/80 px-0.5 text-muted">{index}</span>}
      </div>
      <div className="flex flex-1 flex-col p-2 md:p-2.5">
        {meta && <p className="label text-accent">{meta}</p>}
        <h3 className="display mt-1 text-title">{title}</h3>
        {body && <p className="mt-1.5 text-small text-muted">{body}</p>}
        {chips && chips.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-0.5">
            {chips.map((c) => (
              <li key={c} className="label border border-line px-0.5 py-px text-[0.6875rem] text-fg/80">
                {c}
              </li>
            ))}
          </ul>
        )}
        <span className="label mt-auto flex items-center gap-1 pt-2 text-muted transition-colors group-hover:text-accent">
          {footer ?? "View"} <span aria-hidden="true" className="transition-transform duration-(--duration-fast) group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}

/** Contextual enquiry band shown at the end of product pages. */
export function EnquireBand({ title, body, href, cta = "Send an enquiry" }: { title: string; body: string; href: string; cta?: string }) {
  return (
    <section className="theme-dark border-y border-line">
      <div className="page-grid items-end gap-y-3 py-6 lg:py-8">
        <div className="col-span-full lg:col-span-8">
          <p className="label flex items-center gap-1 text-muted">
            <span className="marker" aria-hidden="true" />
            Enquiry
          </p>
          <h2 className="display mt-2 text-display-m">{title}</h2>
          <p className="mt-2 max-w-[56ch] text-muted">{body}</p>
        </div>
        <div className="col-span-full lg:col-span-4 lg:text-right">
          <Link href={href} className="group inline-flex items-center gap-2 bg-accent px-3 py-2 text-small font-medium text-accent-fg">
            {cta}
            <span aria-hidden="true" className="transition-transform duration-(--duration-fast) group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
