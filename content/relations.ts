import { coils } from "./coils";
import { industries } from "./industries";
import { machineBySlug, machineCategories, machines } from "./machines";
import type { Coil, Machine, MachineCategory } from "./types";

/** Lookups that join machines, categories, coils and industries. */

export const categoryBySlug = (slug: string) => machineCategories.find((c) => c.slug === slug);
export const coilBySlug = (slug: string) => coils.find((c) => c.slug === slug);
export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);

export const machineHref = (m: Pick<Machine, "slug" | "category">) => `/machines/${m.category}/${m.slug}`;
export const categoryHref = (c: Pick<MachineCategory, "slug">) => `/machines/${c.slug}`;
export const coilHref = (c: Pick<Coil, "slug">) => `/coil-types/${c.slug}`;

/** Coils whose old-site page lists this machine. */
export const coilsWoundBy = (machineSlug: string) => coils.filter((c) => c.machines?.includes(machineSlug));

/** Coils wound by any machine in a category. */
export const coilsForCategory = (categorySlug: string) => {
  const slugs = new Set(machines.filter((m) => m.category === categorySlug).map((m) => m.slug));
  return coils.filter((c) => c.machines?.some((s) => slugs.has(s)));
};

export const machinesForCoil = (c: Coil) => (c.machines ?? []).map((s) => machineBySlug(s)).filter((m): m is Machine => Boolean(m));

/** Distinct machines used across an industry's coils. */
export const machinesForIndustry = (industrySlug: string) => {
  const seen = new Map<string, Machine>();
  coils
    .filter((c) => c.industries.includes(industrySlug as Coil["industries"][number]))
    .forEach((c) => machinesForCoil(c).forEach((m) => seen.set(m.slug, m)));
  return [...seen.values()];
};

/** Display name without the "Smart Winder" brand prefix (kept in full on detail pages). */
export const shortName = (n: string) => n.replace(/^Smart Winder\s*/i, "");

/** Machines visible in the catalogue (everything except internal-only rows). */
export const allMachines = machines;
