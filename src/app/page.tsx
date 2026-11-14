import { company } from "@content/company";
import { machineCategories, machinesInCategory } from "@content/machines";
import { industries, coilsByIndustry } from "@content/industries";
import { coils } from "@content/coils";
import { publishableClients } from "@content/clients";
import { Hero } from "@/components/home/hero";
import { Ticker } from "@/components/home/ticker";
import { Statement, type Stat } from "@/components/home/statement";
import { Process, type Stage } from "@/components/home/process";
import { MachineRange, type Family } from "@/components/home/machine-range";
import { Industries } from "@/components/home/industries";
import { TrackRecord, type RecordCard } from "@/components/home/track-record";
import { Customers } from "@/components/home/customers";
import { WindingDivider } from "@/components/winding-divider";

/*
 * REVIEW: every string written in this file is rewritten copy (status: needs-review).
 * Facts come from content/*.ts; nothing here adds a number or claim not on the old site.
 */

const HERO_INTRO =
  "Coil, transformer, capacitor, film and foil, and EV motor winding machines — designed and built in Bengaluru for manufacturers in close to 40 countries.";

const STATEMENT =
  "Since 1993, Synthesis has designed and built the machines that wind coils for power, automotive, electronics, healthcare, aerospace and defence manufacturers. Every machine is engineered in-house — mechanical, electrical, PLC, CNC motion and embedded — around the coil it has to wind.";

const TICKER = [
  "ISO 9001:2015",
  "Semi-automatic coil winding",
  "Automatic multi-spindle winding",
  "Stator winding",
  "Transformer winding — HV · GLI · LV foil",
  "Capacitor winding — HT · GC · CVT",
  "EV motor winding",
  "Special purpose machines",
  "Est. 1993 · Bengaluru",
];

const STAGES: Stage[] = [
  {
    key: "Specify",
    title: "Start from the coil.",
    body: "Your coil drawing, wire and production target are the brief. We study the part and the requirement before proposing a machine.",
    tags: ["Coil drawing", "Wire & insulation", "Target output"],
  },
  {
    key: "Design",
    title: "Designed in-house.",
    body: "Mechanical, electrical, PLC, CNC motion control and embedded systems — all designed by our own engineering team.",
    tags: ["Mechanical", "Electrical", "PLC", "CNC motion", "Embedded"],
  },
  {
    key: "Build",
    title: "Built for a long working life.",
    body: "Precision-machined components and standard parts from the best sources worldwide, built under an ISO 9001:2015 quality system.",
    tags: ["Precision machining", "ISO 9001:2015"],
  },
  {
    key: "Install",
    title: "Installed and handed over.",
    body: "We install the machine at your plant and train your operators to run it.",
    tags: ["Installation", "Operator training"],
  },
  {
    key: "Support",
    title: "Supported in service.",
    body: "Maintenance, service and spares from our team, so production keeps running.",
    tags: ["Maintenance", "Service & spares"],
  },
];

const FAMILY_SUMMARY: Record<string, string> = {
  "semi-automatic-coil-winding":
    "Programmable single, dual and four-spindle Optima winders for relay, ignition, SMPS, solenoid, horn and small transformer coils.",
  "automatic-multispindle-winding":
    "CNC multi-spindle machines that wrap terminals, route, wind, grip and cut wire automatically, with AC servo control on every axis.",
  "automatic-stator-winding":
    "Flyer and needle winders for multi-pole stators — up to 60 poles — with automatic core indexing, tap pulling and cutting.",
  "transformer-winding":
    "HV, graded-layer, LV foil and strip winders for distribution transformers, plus traction transformer and custom machines.",
  "capacitor-winding":
    "Film and foil element winders for HT capacitors, grading capacitors and CVTs, with closed-loop servo tension control.",
  "special-purpose-winding": "Machines built around one customer part: bushing, narrow band and straight coil winders.",
  "ev-motor-winding": "Hub motor, segmented coil, needle and linear stator winders for electric vehicle motors.",
};

const short = (n: string) => n.replace(/^Smart Winder\s*/i, "").replace(/ (Winding|Coil Winding|Stator Winding) Machine$/, "");

export default function HomePage() {
  const families: Family[] = machineCategories.map((c) => {
    const ms = machinesInCategory(c.slug);
    return {
      slug: c.slug,
      name: c.name,
      summary: FAMILY_SUMMARY[c.slug],
      image: c.image,
      models: ms.slice(0, 6).map((m) => short(m.name)),
      count: ms.length,
    };
  });

  const stats: Stat[] = [
    { label: "Founded", value: String(company.founded), note: "Designing and building winding machines in Bengaluru for over three decades." },
    { label: "Customers in", value: "40", prefix: "≈", note: "Close to 40 countries across power, automotive, electronics, healthcare, aerospace and defence." },
    { label: "Machine families", value: String(machineCategories.length).padStart(2, "0"), note: "From semi-automatic coil winders to special purpose machines built to order." },
    { label: "Coil types", value: String(coils.length), note: "Across six industries — each matched to the machines that wind it." },
  ];

  const records: RecordCard[] = [
    { tag: "Milestone", meta: "2005", mark: "BHEL", title: "Our largest bushing winding machine, supplied to BHEL" },
    { tag: "Award", meta: "2020 · CII", image: "/images/news/cii-customer-obsession-2020/01.png", title: "CII Award for Customer Obsession — 2020 survey" },
    { tag: "Award", meta: "Make in India", image: "/images/news/make-in-india-award/01.jpg", title: "Make in India Award" },
    { tag: "Recognition", meta: "2006–07 · Denso", image: "/images/news/denso-certificate-of-excellence/01.png", title: "Certificate of Excellence from Denso" },
    { tag: "Award", meta: "Product", image: "/images/news/best-product-award/01.jpg", title: "Best Product Award" },
    { tag: "Milestone", meta: "2007", mark: "GLI", title: "India’s first automatic graded-layer winding for transformers" },
    { tag: "Award", meta: "2024", image: "/images/news/india-design-summit-2024/01.jpg", title: "Awards at the 24th India Design Summit" },
    {
      tag: "Exhibition",
      meta: "Feb 2025",
      image: "/images/news/elecrama-2025/01.jpg",
      title: "ELECRAMA 2025 — Hall 14, Stall E10",
      body: "India Expo Mart, Greater Noida, Delhi NCR.",
    },
    { tag: "Exhibition", meta: "2025", image: "/images/news/elcia-tech-summit-2025/01.jpg", title: "ELCIA Tech Summit 2025" },
  ];

  return (
    <>
      <Hero intro={HERO_INTRO} />
      <Ticker items={TICKER} />
      <Statement text={STATEMENT} highlight={["1993,", "in-house", "coil"]} stats={stats} figure={{ src: "/images/machines/transformer/hv-800.jpg", caption: "Fig. 01 — Smart Winder HV series, distribution transformer HV coils" }} />
      <div className="theme-light">
        <WindingDivider label="Winding 01 — from brief to machine" />
      </div>
      <Process stages={STAGES} />
      <div className="theme-light">
        <WindingDivider label="Winding 02 — the machine range" />
      </div>
      <MachineRange families={families} />
      <Industries items={industries.map((i) => ({ slug: i.slug, name: i.name, coils: coilsByIndustry(i.slug).map((c) => c.name) }))} totalCoils={coils.length} />
      <TrackRecord cards={records} />
      <div className="theme-light">
        <WindingDivider label="Winding 03 — who we wind for" />
      </div>
      <Customers logos={publishableClients.map((c) => ({ name: c.name, src: c.logo }))} />
    </>
  );
}
