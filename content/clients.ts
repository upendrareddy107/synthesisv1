import type { Client } from "./types";

/**
 * "Our Valuable Customer" logos from the old home page (36).
 * Old file names were abbreviations; names below are read from the logo artwork.
 * All logos are 165x88 PNG thumbnails — the only size on the old site.
 */
const c = (slug: string, name: string, flags?: string[]): Client => ({
  slug,
  name,
  logo: `/images/clients/${slug}.png`,
  identifiedBy: "logo-text",
  ...(flags ? { flags } : {}),
});

export const clients: Client[] = [
  c("abb", "ABB"),
  c("aditya", "Aditya", ["Logo reads 'ADITYA' only — full company name unknown."]),
  c("anu", "ANU", ["Logo reads 'ANU' only — full company name unknown."]),
  c("bhel", "BHEL"),
  c("bosch", "Bosch"),
  c("cg-power", "CG", ["Logo is the CG mark ('Smart solutions. Strong relationships.') — likely CG Power and Industrial Solutions."]),
  c("denso", "Denso"),
  c("drdo-drdl", "DRDO / DRDL", ["Old file name 'DRDL'; logo shows the DRDO emblem. Confirm whether to name DRDO or DRDL."]),
  c("ducati-energia", "Ducati Energia"),
  c("enerlux", "Enerlux"),
  c("energi", "Energi", ["Logo reads 'ENERGI' — full name unknown."]),
  c("feipl", "FEIPL", ["Acronym only — full name unknown."]),
  c("honeywell", "Honeywell"),
  c("indo-nippon-electricals", "Indo-Nippon Electricals Ltd."),
  c("isro", "ISRO"),
  c("itasca", "Itasca Automation Systems", ["Also listed as an overseas associate on the Contacts page — confirm it should appear as a customer."]),
  c("kotsons", "Kotsons"),
  c("leyden", "Leyden"),
  c("larsen-toubro", "Larsen & Toubro"),
  c("luminous", "Luminous"),
  c("mitsuba", "Mitsuba"),
  c("nissin-electric-wuxi", "Nissin Electric Wuxi"),
  c("oen", "OEN"),
  c("pcm", "PCM", ["Acronym only — full name unknown."]),
  c("philips", "Philips"),
  c("samwha", "Samwha"),
  c("schneider-electric", "Schneider Electric"),
  c("shreem", "Shreem"),
  c("shilchar", "Shilchar"),
  c("siemens", "Siemens"),
  c("skipper", "Skipper (SEIL)"),
  c("su-kam", "Su-Kam"),
  c("varroc", "Varroc"),
  c("videocon", "Videocon"),
  {
    slug: "unidentified-lv",
    name: "UNIDENTIFIED",
    logo: "/images/clients/unidentified-lv.png",
    identifiedBy: "unidentified",
    flags: ["Old file 'lv.png' — oval 'LMP'-like mark, cannot read name. Client to identify or drop."],
  },
  {
    slug: "unidentified-p",
    name: "UNIDENTIFIED",
    logo: "/images/clients/unidentified-p.png",
    identifiedBy: "unidentified",
    flags: ["Old file 'p.png' — red circled 'P' mark, no text. Client to identify or drop."],
  },
];

/** Only clients safe to publish without further confirmation. */
export const publishableClients = clients.filter((x) => x.identifiedBy !== "unidentified");
