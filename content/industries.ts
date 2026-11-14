import type { Industry } from "./types";
import { coils } from "./coils";

/**
 * Industry groups from the old site (home "Industries We Serve" + /choose-by-coil-type).
 * The old site had NO descriptive copy for any industry — names only.
 * `copy.summary` drafts are built only from the coil list; they need review.
 */
export const industries: Industry[] = [
  {
    slug: "automotive",
    name: "Automotive",
    oldAnchor: "automotive",
    copy: { summary: { value: "Ignition, relay, solenoid, horn, sensor and magneto coils, plus magneto stators for two- and three-wheelers and BLDC and hub motor stators.", status: "needs-review" } },
  },
  {
    slug: "consumer-electronics",
    name: "Consumer Electronics",
    oldAnchor: "consumer",
    copy: { summary: { value: "Coils for chargers, LED drivers, inverters, ballasts, speakers and appliance motor stators.", status: "needs-review" } },
  },
  {
    slug: "defence-aerospace",
    name: "Defence & Aerospace",
    oldAnchor: "defence",
    copy: { summary: { value: "LVDT windings, sensor, torquer and thruster coils, submarine temperature sensors and BLDC motor stators.", status: "needs-review" } },
  },
  {
    slug: "electrical-power",
    name: "Electrical Power",
    oldAnchor: "electrical",
    copy: { summary: { value: "HV and LV coils for distribution transformers, PT/VT and traction transformer coils, and capacitor elements for HT capacitors, grading capacitors and CVTs.", status: "needs-review" } },
  },
  {
    slug: "switchgear",
    name: "Switchgear",
    oldAnchor: "swithgear", // sic — typo in old anchor, keep for redirect matching
    copy: { summary: { value: "Contactor, micro relay, drum core, ferrite, SMPS and small transformer coils.", status: "needs-review" } },
  },
  {
    slug: "others",
    name: "Others",
    oldAnchor: "other",
    copy: { summary: { value: "Buzzer, pump, RFID, resistor and synchronous motor coils, drone motor stators, health care coils and solder wire.", status: "needs-review" } },
  },
];

export const coilsByIndustry = (slug: Industry["slug"]) => coils.filter((c) => c.industries.includes(slug));
