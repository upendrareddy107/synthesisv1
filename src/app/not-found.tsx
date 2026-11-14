import Link from "next/link";

export default function NotFound() {
  return (
    <section className="theme-dark bg-blueprint">
      <div className="page-x flex min-h-[70svh] flex-col justify-center py-10">
        <p className="label flex items-center gap-1 text-muted">
          <span className="marker" aria-hidden="true" />
          Error 404 · Wire break detected
        </p>
        <h1 className="display mt-3 text-display-l">
          This page has come off the bobbin<span className="text-accent">.</span>
        </h1>
        <p className="mt-3 max-w-[52ch] text-muted md:text-lead">
          The page may have moved when we rebuilt the site. Try the machine range, find your coil — or send us an enquiry directly.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/machines" className="bg-accent px-3 py-2 text-small font-medium text-accent-fg">
            Machine range →
          </Link>
          <Link href="/coil-types" className="border border-fg/40 px-3 py-2 text-small font-medium hover:border-accent hover:text-accent">
            Choose by coil
          </Link>
          <Link href="/contact" className="border border-fg/40 px-3 py-2 text-small font-medium hover:border-accent hover:text-accent">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
