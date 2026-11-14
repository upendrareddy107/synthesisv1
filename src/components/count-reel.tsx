"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Numeral that rolls each digit into place when scrolled into view.
 * Non-digit characters (≈, :, +) render static. Transform-only.
 */
export function CountReel({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reduced motion: globals.css shortens the transition to 1ms, so digits simply appear.
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const chars = [...value];
  return (
    <span ref={ref} className={`inline-flex ${className}`}>
      <span className="sr-only">{value}</span>
      {chars.map((c, i) =>
        /\d/.test(c) ? (
          <span key={i} aria-hidden="true" className="relative inline-block h-[0.9em] overflow-hidden">
            <span
              className="flex flex-col transition-transform ease-(--ease-out)"
              style={{
                transform: `translateY(-${on ? Number(c) * 10 : 0}%)`,
                transitionDuration: `${1200 + i * 180}ms`,
              }}
            >
              {Array.from({ length: 10 }, (_, d) => (
                <span key={d} className="block h-[0.9em] leading-[0.9]">
                  {d}
                </span>
              ))}
            </span>
          </span>
        ) : (
          <span key={i} aria-hidden="true" className="inline-block leading-[0.9]">
            {c}
          </span>
        ),
      )}
    </span>
  );
}
