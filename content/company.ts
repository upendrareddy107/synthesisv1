import type { Reviewed } from "./types";

const review = <T,>(value: T): Reviewed<T> => ({ value, status: "needs-review" });

export const company = {
  legalName: "Synthesis Winding Technologies Pvt. Ltd.",
  shortName: "Synthesis",
  tagline: "Smart Winding for an Electric Future", // verbatim, old home page H1
  founded: 1993, // About page milestones: "1993 — Beginning of Journey"
  website: "https://synthesis-winding.com",

  /**
   * Verified facts. `source` says where each one was confirmed.
   * Only facts with `verified: true` may be published.
   */
  facts: {
    experience: {
      value: "30+ years",
      verified: true,
      source: "Founded 1993 (About milestones); About text says 'close to three decades' (written c. 2021).",
    },
    countries: {
      value: "close to 40 countries",
      verified: true,
      source: "About page: 'leading MNCs in Close to 40 countries'. Home FAQ #5 says 'more than 40 countries' — conflict, see flags.",
    },
    iso: { value: "ISO 9001:2015", verified: true, source: "About page; home FAQ #7. Datasheets carry a TÜV NORD ISO 9001 mark." },
    inHouseDesign: {
      value: "In-house design team: mechanical, electrical, PLC, CNC motion control and embedded systems",
      verified: true,
      source: "About page.",
    },
    machineTypes: {
      value: "150+ machine types",
      verified: false,
      source: "NOT on About page. Appears only in blog posts (e.g. 'top-20-motor-winding-machine-manufacturers-in-2026'). Needs client confirmation.",
    },
    manYears: {
      value: "700+ man-years of experience",
      verified: false,
      source: "About page text says 'over 700+ Man year's of experience'. Same number as the unreliable home counter — confirm before publishing.",
    },
  },

  /** Old home-page counters. DO NOT PUBLISH until the client confirms each number. */
  pendingStats: [
    { label: "Years serving the winding industry", sourceValue: 30, publish: false },
    { label: "Man-years of experience", sourceValue: 700, publish: false },
    { label: "Machine installations", sourceValue: 10000, publish: false },
    { label: "Customers", sourceValue: 1000, publish: false },
    { label: "Countries", sourceValue: 38, publish: false },
  ],

  capabilities: [
    "Coil winding machines",
    "Transformer winding machines",
    "Capacitor winding machines",
    "Film and foil winding",
    "EV motor winding",
    "Custom-built special purpose machines",
  ],

  sourceAbout: [
    "We introduce ourselves as the leading manufacturer and exporter of Automatic Coil Winding machines, Transformers Winding machines, Capacitor Winding machines and Custom built machines. With close to three decades of experience in the field, we address to critical requirements of leading MNCs in Close to 40 countries catering to various sectors like power, automobile, electrical & electronics, healthcare, aerospace, military and many more. We have a strong in-house design team having high level of domain expertise and capabilities in mechanical, electrical, PLC, CNC motion control end embedded systems.",
    "With over 700+ Man year’s of experience, Enthusiastic and very Creative team, equipped with latest design facilities, we specialise in integrating advanced technologies to derive effective winding solutions. Our ability to work closely with customers has helped us improve our own competitive position by helping improve that of theirs. Being ISO 9001:2015 certified company, we have all the essential quality processes to ensure highest quality, on par with International standards. Our Quality centric approach and belief in complete customer satisfaction has helped us attain a highly regarded position in our business.",
    "The right blend of ergonomic design, advanced technology, combined with robust construction, precision manufactured components and standard parts procured from the best sources world-wide ensures excellent performance, reliability and long operational life of our machines.",
    "Our enduring relationship, over the years with our customers, proves our commitment to the business and industry. A large customer base built in a relatively short span of time, across various sectors worldwide, showcases our unparalleled commitment to the customer and their success.",
  ],

  copy: {
    intro: review(
      "Synthesis designs and builds winding machines for coils, transformers, capacitors, film and foil, and EV motors, plus special purpose machines engineered to a customer's own part. Since 1993 we have supplied manufacturers in close to 40 countries across power, automotive, electronics, healthcare, aerospace and defence.",
    ),
    about: review([
      "Synthesis Winding Technologies has designed and manufactured winding machines in Bengaluru since 1993. The range covers automatic and semi-automatic coil winders, distribution and instrument transformer winders, capacitor element winders, and custom machines built around a specific coil.",
      "Every machine is designed in-house. The engineering team covers mechanical design, electrical design, PLC programming, CNC motion control and embedded systems, so a winding problem can be solved at whichever level it lives.",
      "Machines are built from precision-machined parts and standard components sourced worldwide, and produced under an ISO 9001:2015 quality system.",
    ]),
  },

  vision:
    "To be the world’s most customer-centric Company and trusted partner by providing the most affordable, reliable and compelling winding machine Technologies that create new opportunities for the Industry through Infrastructure development",
  mission:
    "Building an Organisation driven by Human assets with values to provide the highest quality of winding solutions through Technology, Design, Manufacturing and Services that would delight our customers with pride",

  /** Verbatim from About page. Wording of `copy` is a light edit for review. */
  milestones: [
    { year: 1993, source: "Begining of Journey", copy: review("Company founded in Bengaluru") },
    { year: 1996, source: "Automatic solution for HT Capacitor Windings", copy: review("Automatic winding solution for HT capacitor elements") },
    { year: 1999, source: "1st Indian Coil winding manufacturer to provide Indigenous solution for automatic 4 Axis winding machine", copy: review("First Indian coil winding machine maker to build an indigenous automatic 4-axis winder") },
    { year: 2001, source: "1st Indian Manufacture to introduce Flyer type winding machine for magneto coil", copy: review("First Indian manufacturer of a flyer-type winding machine for magneto coils") },
    { year: 2005, source: "Supplied largest Bushing winding machine for BHEL", copy: review("Supplied our largest bushing winding machine, to BHEL") },
    { year: 2007, source: "1st Indian Winding machine manufacturer to introduce automatic graded Layer winding technique for manufacturing transformers", copy: review("First Indian winding machine maker to introduce automatic graded-layer winding for transformers") },
    { year: 2010, source: "Introduction of Auto LV foil winding machine", copy: review("Automatic LV foil winding machine introduced") },
    { year: 2013, source: "Technology breakthrough with throughput > 99%", copy: review("Technology breakthrough: throughput above 99%") },
    { year: 2018, source: "Celebrated glorious 25 Years of Manufacturing winding Machines with exports to 35 countries.", copy: review("25 years of building winding machines; exports to 35 countries") },
    { year: 2021, source: "Smart Winding Machine using Artificial Intelligence on Anvil", copy: review("AI-assisted smart winding machine in development") },
  ],

  offices: [
    {
      kind: "head-office",
      label: "Head Office & Works",
      lines: ["No 14/A, Shantipura Road", "Electronics City Phase II", "Bengaluru 560 100", "India"],
      phones: ["+91-80-30282020", "+91-80-30282035", "+91-80-30282036"],
      phoneDisplay: "+91-80-30282020 / 35 / 36",
      email: "info@synthesis-winding.com",
    },
    {
      kind: "regional",
      label: "Regional Office (West)",
      lines: ["#12, Symphony C", "Range Hills Road (Off Ganeshkhind Road)", "Pune 411 020", "India"],
      phones: ["+91-9371052975"],
      email: "info@synthesis-winding.com",
      flags: ["Datasheets (2021) list Pune phone as +91-20-25560661; Contacts page lists +91 9371052975. Using Contacts page."],
    },
    {
      kind: "regional",
      label: "Regional Office (North)",
      lines: ["UG-11, Ansal Imperial Tower", "C-Block, Naraina Vihar, Community Centre", "New Delhi 110 028", "India"],
      phones: ["+91-9540229911"],
      email: "info@synthesis-winding.com",
      flags: ["Datasheets (2021) list Delhi phone as +91-11-41530848; Contacts page lists +91 9540229911. Using Contacts page."],
    },
  ],

  departmentEmails: [
    { label: "Sales & Marketing", email: "marketing@synthesis-winding.com" },
    { label: "Service & Spares", email: "service@synthesis-winding.com" },
    { label: "Purchases", email: "materials@synthesis-winding.com" },
    { label: "Careers & General Info", email: "admin@synthesis-winding.com" },
  ],

  /** "Our Associates" on the Contacts page: overseas/regional representatives. */
  associates: [
    { name: "Hind Plant & Machinery", country: "India", lines: ["Tasnim, Friends Avenue, Off 10th Road", "Juhu Scheme, Mumbai 400049"], phone: "+91 (22) 65707200", email: "valia@synthesis-winding.com" },
    { name: "Intertec Equipamentos Ltda", country: "Brazil", lines: ["R. da Paz, 1344 - Chacara Santo Antonio (Zona Sul)", "São Paulo - SP, 04713-001"], phone: "+55-11-5183 2444", email: "akoehnke@intertecequip.com.br" },
    { name: "Itasca Automation Systems", country: "USA", lines: ["4602 County Road T", "Egg Harbor, WI 54209"], phone: "920-868-3266 ext 104", email: "sales@itascaautosys.com" },
    { name: "Sarcem America, Inc.", country: "USA", lines: ["825 Mohr Ave, Ste. B", "Waterford, WI 53185"], phone: "262-534-7394", email: "bobh@sarcem.com" },
    { name: "Tecnovi Corporation", country: "Vietnam", lines: ["Yen Phuc Group, Bien Giang Ward", "Ha Dong Dist, Hanoi"], phone: "+84 90 444 6648", email: "nhtoan@tecnovi.com.vn" },
    { name: "Zenithar Dış Ticaret ve Danışmanlık Limited Şirketi", country: "Turkey", lines: ["Bağlıca Mahallesi Kepir Caddesi Ozan City No:32 A2 Blok Daire:1", "Etimesgut, Ankara"], phone: "+90 536 226 0045", email: "info@zenithar.net", website: "https://www.zenithar.net" },
  ],

  socials: {
    facebook: "https://www.facebook.com/Synthesis.WTPL",
    linkedin: "https://www.linkedin.com/company/synthesis-winding-technologies-pvt-ltd/",
    youtube: "https://www.youtube.com/channel/UCRQYxZkzOZ9_5Y7ahkdw-NQ",
  },

  logo: {
    primary: "/images/brand/logo-synthesis.jpg", // 900x200 JPG incl. "30 Years" badge
    alt: "/images/brand/logo-synthesis-alt.jpg",
    flags: ["Only raster JPG logos found (900x200, white background, with '30 Years' badge). Need a vector (SVG/AI/EPS) master for the new site."],
  },
} as const;
