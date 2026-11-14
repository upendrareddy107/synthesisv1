/**
 * Motion tokens for JS (motion / GSAP). Mirrors the CSS tokens in globals.css.
 * Rule: animate transform and opacity only (canvas drawing excepted).
 */
export const ease = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  gsapOut: "expo.out",
  gsapInOut: "power2.inOut",
};

/** Seconds. */
export const duration = {
  fast: 0.16,
  base: 0.32,
  slow: 0.72,
  draw: 1.2,
  count: 1.6,
};

export const stagger = {
  tight: 0.04,
  base: 0.08,
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
