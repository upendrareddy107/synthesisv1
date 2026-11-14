"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const TURNS = 48;
const VB_W = 1200;
const X0 = 40;
const X1 = 1160;
const PITCH = (X1 - X0) / TURNS;
const TOP = 34;
const BOT = 98;

/**
 * Recurring motif between sections: a coil winds itself on as you scroll past.
 * Each turn grows from the top (scaleY), an accent guide tracks the active turn.
 * Transform/opacity only. Reduced motion: shown fully wound.
 */
export function WindingDivider({ label }: { label: string }) {
  const root = useRef<HTMLDivElement>(null);
  const turns = useRef<(SVGPathElement | null)[]>([]);
  const guide = useRef<SVGGElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const set = (p: number) => {
      const n = p * TURNS;
      turns.current.forEach((t, i) => {
        if (!t) return;
        const k = Math.max(0, Math.min(1, n - i));
        t.style.transform = `scaleY(${k})`;
        t.style.opacity = k > 0 ? "1" : "0";
      });
      const x = X0 + PITCH * Math.min(TURNS - 0.5, Math.max(0.5, n));
      if (guide.current) guide.current.style.transform = `translateX(${x}px)`;
      if (count.current) count.current.textContent = String(Math.round(n)).padStart(2, "0");
    };
    if (prefersReducedMotion()) {
      set(1);
      return;
    }
    set(0);
    const st = ScrollTrigger.create({
      trigger: root.current,
      start: "top 92%",
      end: "bottom 35%",
      scrub: true,
      onUpdate: (s) => set(s.progress),
    });
    return () => st.kill();
  }, []);

  return (
    <div ref={root} className="page-x py-3" aria-hidden="true">
      <div className="flex items-center justify-between pb-1">
        <p className="label text-muted">{label}</p>
        <p className="label tabular-nums text-muted">
          Turn <span ref={count} className="text-accent">00</span> / {TURNS}
        </p>
      </div>
      <svg viewBox={`0 0 ${VB_W} 120`} preserveAspectRatio="none" className="block h-[72px] w-full md:h-[96px]">
        {/* centre line + core */}
        <line x1={0} y1={66} x2={VB_W} y2={66} stroke="var(--line)" strokeDasharray="14 4 2 4" vectorEffect="non-scaling-stroke" />
        <rect x={X0} y={TOP} width={X1 - X0} height={BOT - TOP} fill="none" stroke="var(--line)" vectorEffect="non-scaling-stroke" />
        <rect x={X0 - 10} y={14} width={10} height={104} fill="var(--bg)" stroke="var(--fg)" strokeOpacity={0.6} vectorEffect="non-scaling-stroke" />
        <rect x={X1} y={14} width={10} height={104} fill="var(--bg)" stroke="var(--fg)" strokeOpacity={0.6} vectorEffect="non-scaling-stroke" />
        {/* turns */}
        {Array.from({ length: TURNS }, (_, i) => {
          const x = X0 + PITCH * i + PITCH * 0.15;
          return (
            <path
              key={i}
              ref={(el) => {
                turns.current[i] = el;
              }}
              d={`M ${x} ${TOP} L ${x + PITCH * 0.7} ${BOT}`}
              stroke="var(--accent)"
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
              style={{ transformBox: "fill-box", transformOrigin: "top", transform: "scaleY(0)", opacity: 0 }}
            />
          );
        })}
        {/* rail + guide */}
        <line x1={X0} y1={6} x2={X1} y2={6} stroke="var(--fg)" strokeOpacity={0.5} vectorEffect="non-scaling-stroke" />
        <g ref={guide} style={{ transform: `translateX(${X0}px)` }}>
          <rect x={-7} y={0} width={14} height={12} fill="var(--bg)" stroke="var(--fg)" vectorEffect="non-scaling-stroke" />
          <rect x={-2.5} y={3.5} width={5} height={5} fill="var(--accent)" />
          <line x1={0} y1={12} x2={0} y2={TOP} stroke="var(--accent)" vectorEffect="non-scaling-stroke" />
        </g>
      </svg>
    </div>
  );
}
