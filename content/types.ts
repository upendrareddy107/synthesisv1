/**
 * Content model for the Synthesis Winding Technologies site.
 *
 * Conventions
 * - `source*` fields hold text copied verbatim from the old site
 *   (synthesis-winding.com) or its PDF datasheets. Never edit these.
 * - `copy` fields hold rewritten wording. Every rewritten string is wrapped in
 *   `Reviewed<T>` with `status: "needs-review"` until the client signs it off.
 * - `oldUrl` is the path on the old site; used to generate 301 redirects.
 * - Anything uncertain is listed in `flags` so it can be surfaced, not hidden.
 */

export type ReviewStatus = "needs-review" | "approved";

export interface Reviewed<T = string> {
  value: T;
  status: ReviewStatus;
}

export type IndustrySlug =
  | "automotive"
  | "consumer-electronics"
  | "defence-aerospace"
  | "electrical-power"
  | "switchgear"
  | "others";

export type MachineCategorySlug =
  | "semi-automatic-coil-winding"
  | "automatic-multispindle-winding"
  | "automatic-stator-winding"
  | "transformer-winding"
  | "capacitor-winding"
  | "special-purpose-winding"
  | "ev-motor-winding";

export interface SpecRow {
  /** Table section heading as printed in the datasheet, e.g. "Coil", "Conductor". */
  section?: string;
  label: string;
  /** Keyed by variant/model name exactly as printed in the datasheet column header. */
  values: Record<string, string>;
}

export interface Datasheet {
  /** Path under /public, e.g. "/datasheets/optima-1100.pdf". */
  file: string;
  /** Original URL on the old site. */
  sourceUrl: string;
  docCode?: string;
}

export interface Machine {
  slug: string;
  /** Product name as used on the old site. */
  name: string;
  category: MachineCategorySlug;
  /** Sub-group label from the old category page, e.g. "Single Spindle", "Distribution Transformer". */
  group?: string;
  /** Variant / model numbers covered by this product, as listed under "Choose by Model". */
  variants: string[];
  image?: string;
  /** Extra images (accessories, alternate views). */
  gallery?: string[];
  datasheet?: Datasheet;
  sourceTitle?: string;
  sourceSubtitle?: string;
  /** Paragraphs from the old web page(s) for this product. */
  sourceDescription: string[];
  /** Short spec lines printed on the old web page (may differ from the datasheet — see flags). */
  sourceWebSpecs?: string[];
  /** Description paragraphs from the PDF datasheet. */
  sourceDatasheetDescription?: string[];
  sourceFeatures?: string[];
  sourceApplications?: string[];
  sourceStandardAccessories?: string[];
  sourceOptionalAccessories?: string[];
  /** Spec table; values keyed by variant column. */
  specs?: SpecRow[];
  specNotes?: string[];
  copy?: { summary?: Reviewed; description?: Reviewed<string[]> };
  /** "listed" = named on the old site but no page, datasheet or image. */
  completeness: "full" | "partial" | "listed";
  status?: "available" | "under-development";
  oldUrl?: string;
  flags?: string[];
}

export interface MachineCategory {
  slug: MachineCategorySlug;
  name: string;
  image: string;
  sourceDescription: string[];
  copy?: { summary?: Reviewed; description?: Reviewed<string[]> };
  /** Ordered groups as they appear on the old category page. */
  groups: { label: string; machines: string[] }[];
  accessories?: { name: string; image?: string }[];
  oldUrl: string;
  flags?: string[];
}

export interface Coil {
  slug: string;
  name: string;
  /** Name exactly as on the old site (kept when `name` corrects spelling). */
  sourceName: string;
  industries: IndustrySlug[];
  image?: string;
  /** Machine slugs (see machines.ts) that wind this coil, from the old coil page. */
  machines?: string[];
  /** Specific variants named on the old coil page, e.g. "Optima 1100 SMPS", "SW AT 8". */
  sourceModelMentions?: string[];
  copy?: { summary?: Reviewed };
  oldUrl?: string;
  flags?: string[];
}

export interface Industry {
  slug: IndustrySlug;
  name: string;
  /** Anchor used on the old site: /choose-by-coil-type#<anchor>. */
  oldAnchor: string;
  copy?: { summary?: Reviewed };
}

export interface Faq {
  sourceQuestion: string;
  sourceAnswer: string;
  copy: { question: Reviewed; answer: Reviewed };
}

export interface Client {
  slug: string;
  name: string;
  logo: string;
  /** How the name was determined. */
  identifiedBy: "logo-text" | "unidentified";
  flags?: string[];
}
