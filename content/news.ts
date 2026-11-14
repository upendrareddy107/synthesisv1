/**
 * News & Events from the old site (/news-events/).
 * The old page was image galleries with headings only — no dates or body text
 * except where noted. Images saved under /public/images/news/<section>/.
 *
 * NOT migrated (internal staff galleries, ~130 photos; kept on old server):
 * Dussehra celebrations (30th, 31st, 32nd year), Annual Meet 2024 & 2025,
 * 25th and 30th year celebration events. Decide if any should come across.
 */

export interface NewsItem {
  slug: string;
  kind: "award" | "exhibition" | "notice";
  title: string;
  year?: number;
  /** Verbatim text from the old site, if any. */
  sourceText?: string;
  details?: Record<string, string>;
  images: string[];
  flags?: string[];
}

const imgs = (dir: string, files: string[]) => files.map((f) => `/images/news/${dir}/${f}`);

export const news: NewsItem[] = [
  {
    slug: "elcia-tech-summit-2025",
    kind: "exhibition",
    title: "ELCIA Tech Summit 2025",
    year: 2025,
    images: imgs("elcia-tech-summit-2025", ["01.jpg", "02.jpg", "03.jpg", "04.jpg"]),
  },
  {
    slug: "elecrama-2025",
    kind: "exhibition",
    title: "ELECRAMA 2025",
    year: 2025,
    details: { stand: "Hall No: 14, Stall E10", dates: "February 22–26, 2025", venue: "India Expo Mart, Greater Noida, Delhi NCR" },
    images: [...imgs("elecrama-2025-announcement", ["01.jpg", "02.jpg", "03.png", "04.jpg"]), ...imgs("elecrama-2025", ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.jpg"])],
    flags: ["Old site still lists this as an 'Upcoming Event'. It is past — show as participated."],
  },
  {
    slug: "awards-and-recognitions",
    kind: "award",
    title: "Awards and Recognitions",
    images: ["/images/news/awards-and-recognitions/01.png", "/images/news/awards-and-recognitions/02.png", "/images/news/awards-and-recognitions/03.png"],
    flags: ["Three award images (2025) with no captions — need titles."],
  },
  {
    slug: "india-design-summit-2024",
    kind: "award",
    title: "Awards at the 24th India Design Summit 2024",
    year: 2024,
    images: [
      "/images/news/india-design-summit-2024/01.jpg",
      "/images/news/india-design-summit-2024/02.png",
      "/images/news/india-design-summit-2024/03.jpg",
      "/images/news/india-design-summit-2024/04.jpg",
    ],
    flags: ["Award name/category not stated."],
  },
  {
    slug: "cii-customer-obsession-2020",
    kind: "award",
    title: "CII Award for Customer Obsession 2020 Survey",
    year: 2020,
    images: ["/images/news/cii-customer-obsession-2020/01.png", "/images/news/cii-customer-obsession-2020/02.jpg"],
  },
  { slug: "make-in-india-award", kind: "award", title: "Make in India Award", images: ["/images/news/make-in-india-award/01.jpg"], flags: ["Year not stated."] },
  {
    slug: "denso-certificate-of-excellence",
    kind: "award",
    title: "Denso — Certificate of Excellence",
    images: ["/images/news/denso-certificate-of-excellence/01.png"],
    flags: ["Year not stated."],
  },
  { slug: "best-product-award", kind: "award", title: "Best Product Award", images: ["/images/news/best-product-award/01.jpg"], flags: ["Awarding body and year not stated."] },
  {
    slug: "participated-events",
    kind: "exhibition",
    title: "Participated Events",
    images: imgs("participated-events", ["01.png", "02.png", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.png"]),
    flags: ["12 event logos/photos with no captions — need event names to be useful."],
  },
  {
    slug: "exhibition-events",
    kind: "exhibition",
    title: "Exhibition Events",
    images: ["/images/news/exhibition-events/01.jpg", "/images/news/exhibition-events/02.jpg"],
    flags: ["Two photos, no captions. Old site only had cropped thumbnails (no originals) — low resolution."],
  },
  {
    slug: "covid-19",
    kind: "notice",
    title: "COVID-19",
    sourceText:
      "Ensuring all Country laws, State and Local on-going directives, World Health Organisation (WHO) guidelines, we continue to be safety first, ensure the health of our workers AND we are meeting our contractual and order obligations, despite supply chain interruptions and logistics challenges. Our years of leadership and collective experience is helping us meet customer expectations, even in these un-precedented time.",
    images: [],
    flags: ["Outdated notice. Recommend not publishing."],
  },
];
