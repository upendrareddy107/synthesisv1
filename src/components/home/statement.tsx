"use client";

import { HoverColorImage } from "@/components/hover-color-image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { CountReel } from "@/components/count-reel";
import { SectionLabel } from "@/components/section-label";

export type Stat = { label: string; value: string; prefix?: string; note: string };

/** Statement whose words fill in as you scroll (opacity scrub), then a figure + stats. */
export function Statement({ text, highlight = [], stats, figure }: { text: string; highlight?: string[]; stats: Stat[]; figure: { src: string; caption: string } }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const words = el.querySelectorAll<HTMLElement>("[data-w]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.16 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
        },
      );
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section aria-labelledby="who-title" className="theme-light py-10 lg:py-16">
      <div className="page-grid gap-y-4">
        <div className="col-span-full lg:col-span-3">
          <SectionLabel n="01">Who we are</SectionLabel>
          <h2 id="who-title" className="sr-only">
            Who we are
          </h2>
        </div>
        <p ref={ref} className="display col-span-full text-statement lg:col-span-9">
          {text.split(" ").map((w, i) => (
            <span key={i} data-w className={highlight.includes(w) ? "inline text-accent" : "inline"}>
              {w}{" "}
            </span>
          ))}
        </p>
      </div>

      <div className="page-grid mt-10 gap-y-6 lg:mt-14">
        <figure className="col-span-full md:col-span-5 lg:col-span-3">
          <div className="bg-photo">
            <HoverColorImage src={figure.src} alt="" width={1000} height={667} className="h-auto w-full mix-blend-multiply" sizes="(min-width: 1024px) 25vw, 100vw" />
          </div>
          <figcaption className="label mt-1.5 text-muted">{figure.caption}</figcaption>
        </figure>

        <dl className="col-span-full grid gap-x-3 gap-y-6 sm:grid-cols-2 md:col-span-7 lg:col-span-8 lg:col-start-5">
          {stats.map((s) => (
            <div key={s.label} className="border-t border-line pt-2">
              <dt className="label text-muted">{s.label}</dt>
              <dd className="mt-2">
                <span className="display flex items-start text-numeral">
                  {s.prefix && <span className="mr-0.5 text-accent">{s.prefix}</span>}
                  <CountReel value={s.value} />
                </span>
                <span className="mt-2 block max-w-[36ch] text-small text-muted">{s.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
