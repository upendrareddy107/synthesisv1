import type { Faq } from "./types";

const r = (value: string) => ({ value, status: "needs-review" as const });

/** FAQs from the old home page (9). Source kept verbatim; rewrites need review. */
export const faqs: Faq[] = [
  {
    sourceQuestion: "What types of coil winding machines can I purchase from Synthesis?",
    sourceAnswer:
      "At Synthesis, you can find a wide range of machines, including a Transformer Winding Machine, Distribution Transformer Winding Machine, Stator Winding Machine, Capacitor Winding Machine, Coil Winding Machine, Automatic Winding Machine, Inverter Transformer Winding Machine, and Foil Winding Machine to suit various industrial needs.",
    copy: {
      question: r("What machines does Synthesis make?"),
      answer: r(
        "Semi-automatic and automatic multi-spindle coil winders, automatic stator winders, transformer winders (HV, LV foil, strip and traction), capacitor element winders for HT capacitors, grading capacitors and CVTs, EV motor winders, and special purpose machines built to order.",
      ),
    },
  },
  {
    sourceQuestion: "Which machine is right for winding a transformer for power distribution?",
    sourceAnswer:
      "If you’re currently working with a transformer for power distribution, our advanced Distribution Transformer Winding Machine should be your pick because it’s precise and reliable.",
    copy: {
      question: r("Which machine winds distribution transformer coils?"),
      answer: r(
        "For HV coils, the Smart Winder HV series (full-width interlayer insulation) or GLI series (graded layer insulation). For LV coils, the FLV series foil winder. Send us your kVA range and coil dimensions and we will recommend a model.",
      ),
    },
  },
  {
    sourceQuestion: "Can Synthesis customize a winding machine for my specific requirement?",
    sourceAnswer:
      "Absolutely! Custom machines are one of our greatest strengths. We build custom-built solutions only after thoroughly understanding the needs and requirements of our clients. Moreover, these machines have one of the lowest rejection rates in the world!",
    copy: {
      question: r("Can you build a machine for my specific coil?"),
      answer: r(
        "Yes. Special purpose machines are a core part of our work. We start from your coil drawing, materials and target output, and design the machine around them.",
      ),
    },
  },
  {
    sourceQuestion: "How can an Automatic Winding Machine benefit my business?",
    sourceAnswer:
      "Automation is everywhere. Industries are making great leaps by adopting automation in their processes. The Automatic Winding Machine models we make save time, enhance precision, and give consistent performance so you can achieve higher productivity with reduced downtime.",
    copy: {
      question: r("When does an automatic winder make sense over a semi-automatic one?"),
      answer: r(
        "When volumes are high and the coil design is stable. Automatic multi-spindle machines handle terminal wrapping, wire routing, winding, gripping and cutting without operator intervention, which raises output and repeatability.",
      ),
    },
  },
  {
    sourceQuestion: "Is your machine suitable for industries other than power and distribution?",
    sourceAnswer:
      "Yes, our machines, including the Stator Winding Machine and Coil Winding Machine , are used in various critical industries like Automotive, Aerospace, Healthcare, and Defense across more than 40 countries.",
    copy: {
      question: r("Which industries use your machines?"),
      answer: r(
        "Automotive, consumer electronics, defence and aerospace, electrical power, switchgear and healthcare, among others, in close to 40 countries.",
      ),
    },
  },
  {
    sourceQuestion: "Will I get support for installation and maintenance?",
    sourceAnswer:
      "Of course! We provide full support during installation, training, and maintenance for all our machines, so you don’t have to worry about your operations facing unexpected problems.",
    copy: {
      question: r("Do you support installation and maintenance?"),
      answer: r("Yes. We support installation, operator training and maintenance for every machine we supply."),
    },
  },
  {
    sourceQuestion: "Is a Synthesis coil winding machine compliant with quality standards?",
    sourceAnswer:
      "Yes, every machine we produce, from the Transformer Winding Machine to the Automatic Winding Machine , meets ISO 9001:2015 certification standards.",
    copy: {
      question: r("What quality standard do you work to?"),
      answer: r("Our machines are designed and built under an ISO 9001:2015 certified quality management system."),
    },
  },
  {
    sourceQuestion: "How safe is a Synthesis coil winding machine to operate?",
    sourceAnswer:
      "Safety has always been our topmost priority. Each machine we manufacture will have fool-proof safety features incorporated into it to protect operators and ensure reliable operation.",
    copy: {
      question: r("How are operators protected?"),
      answer: r("Every machine includes safety features to protect operators during winding and loading."),
    },
  },
  {
    sourceQuestion: "Can Synthesis handle complex designs like a foil winding machine or an inverter winding machine?",
    sourceAnswer:
      "Yes, we offer advanced solutions ( Foil Winding Machine , Inverter Transformer Winding Machine , etc.) to various industries . These machines will help you reduce raw material wastage and handle complex winding requirements with ease.",
    copy: {
      question: r("Do you make foil and strip winding machines?"),
      answer: r(
        "Yes: the FLV series foil winder for distribution transformer LV coils, and a strip winding machine for inverter transformers.",
      ),
    },
  },
];
