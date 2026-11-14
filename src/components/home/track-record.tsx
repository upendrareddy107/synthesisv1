"use client";

import { HoverColorImage } from "@/components/hover-color-image";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { SectionLabel } from "@/components/section-label";

export type RecordCard = { tag: string; meta: string; title: string; body?: string; image?: string; mark?: string };

/**
 * Horizontal track. lg+: pinned, vertical scroll drives translateX.
 * Below lg (or reduced motion): native horizontal scroll with snap.
 */
export function TrackRecord({ cards }: { cards: RecordCard[] }) {
  const pinRef = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 64rem)", () => {
      setPinned(true);
      const el = track.current!;
      const dist = () => el.scrollWidth - el.clientWidth;
      const tw = gsap.to(el, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top+=80",
          end: () => `+=${dist()}`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (s) => setProgress(s.progress),
        },
      });
      return () => {
        tw.scrollTrigger?.kill();
        tw.kill();
        setPinned(false);
      };
    });
    ScrollTrigger.refresh();
    return () => mm.revert();
  }, []);

  const n = cards.length;
  const shown = Math.min(n, Math.max(1, Math.round(progress * (n - 1)) + 1));

  return (
    <section aria-labelledby="rec-title" className="theme-dark overflow-x-clip border-t border-line">
      <div ref={pinRef} className="py-10 lg:flex lg:min-h-[calc(100svh-80px)] lg:flex-col lg:justify-center lg:py-6">
        <div className="page-x flex flex-wrap items-end justify-between gap-3">
          <div>
            <SectionLabel n="05">Recognition</SectionLabel>
            <h2 id="rec-title" className="display mt-3 text-display-l">
              Awarded, exhibited, delivered<span className="text-accent">.</span>
            </h2>
          </div>
          <div className="label flex items-center gap-2 tabular-nums text-muted" aria-hidden="true">
            <span className="text-fg">{String(pinned ? shown : 1).padStart(2, "0")}</span>
            <span className="relative block h-px w-[120px] bg-line">
              <span className="absolute inset-y-0 left-0 w-full origin-left bg-accent" style={{ transform: `scaleX(${pinned ? progress : 0})` }} />
            </span>
            <span>{String(n).padStart(2, "0")}</span>
          </div>
        </div>

        <ul
          ref={track}
          className={`mt-5 flex gap-3 px-(--margin) lg:mt-8 ${pinned ? "" : "snap-x snap-mandatory overflow-x-auto pb-2"}`}
        >
          {cards.map((c, i) => (
            <li key={i} className="group/photo flex w-[78vw] shrink-0 snap-start flex-col border border-line bg-panel sm:w-[360px] lg:w-[380px]">
              <div className="bg-blueprint relative flex aspect-[4/3.4] items-end overflow-hidden border-b border-line">
                {c.image ? (
                  <HoverColorImage src={c.image} alt="" fill sizes="380px" className="object-cover" />
                ) : (
                  <p className="display p-2 text-[5rem] leading-[0.9] tracking-[-0.04em] text-fg md:text-[6rem]">{c.mark}</p>
                )}
              </div>
              <div className="flex flex-1 flex-col p-2 md:p-3">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="label text-accent">{c.tag}</span>
                  <span className="label text-right text-muted">{c.meta}</span>
                </div>
                <h3 className="display mt-2 text-title">{c.title}</h3>
                {c.body && <p className="mt-1.5 text-small text-muted">{c.body}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
