"use client";

import Link from "next/link";
import { useRef } from "react";

/** Link that leans toward the pointer (transform only). Fine pointers only. */
export function MagneticLink({ href, className, children, strength = 0.28 }: { href: string; className?: string; children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transition = "transform var(--duration-fast) var(--ease-out)";
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const leave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform var(--duration-slow) var(--ease-out)";
    el.style.transform = "translate(0, 0)";
  };
  return (
    <Link ref={ref} href={href} onPointerMove={move} onPointerLeave={leave} className={className}>
      {children}
    </Link>
  );
}
