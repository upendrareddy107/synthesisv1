import type { Machine, MachineCategory } from "./types";

/**
 * Machines from /choose-by-machine and every category / model page on the old site,
 * merged with the PDF datasheets (transcribed verbatim, image-only values checked against renders).
 * GENERATED from the crawl — hand edits are fine, but keep `source*` fields verbatim.
 */

export const machineCategories: MachineCategory[] = [
  {
    "slug": "semi-automatic-coil-winding",
    "name": "Semi-Automatic Programmable Coil Winding Machine",
    "image": "/images/machines/categories/semi-automatic-coil-winding.png",
    "sourceDescription": [
      "The Smart Winder range of versatile & user friendly Semi-Automatic Winding Machines are available in several configurations, offering optimum and comprehensive winding solutions based on coil complexity, size and productivity; leading to minimum stat up time and cost-effective solutions."
    ],
    "groups": [
      {
        "label": "Single Spindle",
        "machines": [
          "optima-1100",
          "optima-1100-smps",
          "optima-1100-300t",
          "optima-1160",
          "optima-1250",
          "optima-mp-01",
          "optima-1470"
        ]
      },
      {
        "label": "Dual Spindle",
        "machines": [
          "optima-280",
          "optima-2100"
        ]
      },
      {
        "label": "Four Spindle",
        "machines": [
          "optima-475"
        ]
      }
    ],
    "oldUrl": "/semi-automatic-programmable-coil-winding-machine/",
    "accessories": [
      {
        "name": "Wire Tensioner",
        "image": "/images/machines/semi-automatic-coil-winding/wire-tensioner.jpg"
      },
      {
        "name": "Wire Twister",
        "image": "/images/machines/semi-automatic-coil-winding/wire-twister.jpg"
      },
      {
        "name": "Dereeler (Friction Type)",
        "image": "/images/machines/semi-automatic-coil-winding/dereeler-friction-type.jpg"
      }
    ]
  },
  {
    "slug": "automatic-multispindle-winding",
    "name": "Automatic Multispindle Winding Machine",
    "image": "/images/machines/categories/automatic-multispindle.jpg",
    "sourceDescription": [
      "Automatic Multi-spindle CNC controlled Coil Winding Machines are designed to wind various types of coils having linear winding like Relay coils, Solenoid coils, Rotor Coils, Contactor Coils, Ferrite Core Transformers, Ignition Coils, etc. With Multi-axes movement, these machines are capable of executing critical operations like Terminal Wrapping, Wire Routing, Winding, Wire Gripping & Cutting automatically with an exceptional ease.",
      "The optimum combination of mechanical, pneumatic and electronic systems incorporated in the machines provide high performance coupled with reliable operations and simplicity in maintenance.",
      "These machines deliver high level of accuracies using the AC Servo motors for each axes coupled with precise mechanics.",
      "By utilizing the latest technologies, materials and the manufacturing techniques, these machines offer several benefits such as high productivity, repeat accuracies and reliability."
    ],
    "groups": [
      {
        "label": "Two / Four / Six Spindle",
        "machines": [
          "smart-winder-a-series"
        ]
      },
      {
        "label": "Four / Six / Eight Spindle",
        "machines": [
          "smart-winder-at-series"
        ]
      }
    ],
    "oldUrl": "/automatic-multispindle-winding-machine/",
    "accessories": [
      {
        "name": "Wire Tensioner",
        "image": "/images/machines/automatic-multispindle/wire-tensioner.jpg"
      },
      {
        "name": "Wire Twister",
        "image": "/images/machines/automatic-multispindle/wire-twister.jpg"
      },
      {
        "name": "Toolings",
        "image": "/images/machines/automatic-multispindle/toolings.jpg"
      }
    ]
  },
  {
    "slug": "automatic-stator-winding",
    "name": "Automatic Stator Winding Machine",
    "image": "/images/machines/categories/automatic-stator.jpg",
    "sourceDescription": [
      "These are flyer-type stand-alone machines designed to address winding of various types of Multi-Pole Stators (Radially outward facing poles) with an exceptional ease and convenience.",
      "The machine ergonomics are designed to grant high degree of accessibility and it is furthermore coupled with flexible dynamics through multi-axes movements to make it suitable to handle complex stators with as high as 60-Poles.",
      "These machines facilitates automatic Core indexing, tap pulling and cutting and contribute to better productivity. Few examples are Portable Generator alternators, Automobile Magneto, BLDC Stators etc."
    ],
    "groups": [
      {
        "label": "Flyer Stator Winders",
        "machines": [
          "smart-winder-st1",
          "smart-winder-st-2t"
        ]
      },
      {
        "label": "Needle Winders",
        "machines": [
          "needle-winder"
        ]
      }
    ],
    "oldUrl": "/automatic-stator-winding-machine/"
  },
  {
    "slug": "transformer-winding",
    "name": "Transformer Winding Machine",
    "image": "/images/machines/categories/transformer.png",
    "sourceDescription": [
      "The machine is designed and equipped to produce high and low voltage coils for power transformers. This machine is built to automate the winding process using either strip or round conductors. It can also carry out layer insulation and end-filling of the coils with minimal operator intervention."
    ],
    "groups": [
      {
        "label": "Distribution Transformer",
        "machines": [
          "hv-series",
          "gli-series",
          "flv-series",
          "strip-winding-machine"
        ]
      },
      {
        "label": "PT / VT / EMVT",
        "machines": [
          "pt-vt-emvt-hv-machine",
          "pt-vt-emvt-lv-machine"
        ]
      },
      {
        "label": "Customized Machines",
        "machines": [
          "smart-winder-600s",
          "excel-1500",
          "core-taping-machine",
          "mandrel-preparation-machine"
        ]
      }
    ],
    "oldUrl": "/transformer-winding-machine/"
  },
  {
    "slug": "capacitor-winding",
    "name": "Capacitor Winding Machine",
    "image": "/images/machines/categories/capacitor.png",
    "sourceDescription": [
      "Synthesis Capacitor Winding Machines comprises of Automatic and Semi-Automatic Winding machines, used to wind elements for H T Capacitors (Extended Foil type), CVTs (Tab Type) and GC (Extended Foil type). These machines have an optimal mix of automation coupled with robust design resulting in excellent performance, consistency, better productivity and high precision handling of film & foil."
    ],
    "groups": [
      {
        "label": "Grading Capacitor (GC)",
        "machines": [
          "gc-100",
          "gc-120",
          "gc-cvt"
        ]
      },
      {
        "label": "CVT (Capacitor Voltage Transformer)",
        "machines": [
          "cvt-200i",
          "tpm-150"
        ]
      },
      {
        "label": "Capacitor (HT)",
        "machines": [
          "ht-capacitor-automatic",
          "ht-350-semi-automatic"
        ]
      }
    ],
    "oldUrl": "/capacitor-winding-machine/"
  },
  {
    "slug": "special-purpose-winding",
    "name": "Special Purpose Winding Machine",
    "image": "/images/machines/categories/special-purpose.jpg",
    "sourceDescription": [],
    "groups": [
      {
        "label": "Special Purpose",
        "machines": [
          "special-bushing",
          "special-narrow-band",
          "special-straight-coil"
        ]
      },
      {
        "label": "Under Development",
        "machines": [
          "special-curved-coil"
        ]
      }
    ],
    "oldUrl": "/special-purpose-winding-machines/",
    "flags": [
      "Old category page has NO description text — only three captioned images.",
      "'Motor Winding for EV' is also listed as 'Under Development' here (placeholder image) — duplicate of the EV category; dropped."
    ]
  },
  {
    "slug": "ev-motor-winding",
    "name": "Motor Winding for EV",
    "image": "/images/machines/categories/ev-motor.jpg",
    "sourceDescription": [],
    "groups": [
      {
        "label": "EV Motor",
        "machines": [
          "hub-motor-winding-machine",
          "segmented-coil-winding-machine",
          "needle-winder",
          "linear-stator-winding-machine"
        ]
      }
    ],
    "oldUrl": "/motor-winding-for-ev/",
    "flags": [
      "Old category page has NO description text.",
      "'Curved Coil' and 'Motor Winding for EV' shown as 'Under Development' here too — dropped as duplicates."
    ]
  }
];

export const machines: Machine[] = [
  {
    "slug": "optima-1100",
    "name": "Optima 1100",
    "category": "semi-automatic-coil-winding",
    "group": "Single Spindle",
    "variants": [
      "Optima 1100",
      "Optima 1100F",
      "Optima 1100CB"
    ],
    "image": "/images/machines/semi-automatic-coil-winding/optima-1100.png",
    "sourceDescription": [
      "Smart Winder Optima – 1100 is a Single Spindle, Programmable Semi-Automatic Coil Winding Machine which is available in Side or Front Loading Configuration.",
      "These machines are used to Wind coils such as Relay Coils, Horn Coils, Mobile Charger Coils, Ignition coils, Cooler Pump Coils, Line Filters Coils, Buzzer Coils, Ballast Coils and windings for SMPS, Small Transformers, Ferrite Core, Drum Core, Inductor, LED Drivers, Solenoid, Fuel Guage and many more."
    ],
    "sourceWebSpecs": [
      "Wire Size : 0.8 mm (Max. Bobbin Dia: 30 mm)",
      "Bobbin Dia : 100 mm (Max. Wire Dia: 0.4 mm)",
      "Winding Width : 90 mm"
    ],
    "datasheet": {
      "file": "/datasheets/optima-1100.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/semi-auto-wm/Optima-1100.pdf",
      "docCode": "A - Cat-1100- 01-June’21"
    },
    "sourceTitle": "Optima 1100",
    "sourceDatasheetDescription": [
      "The Optima 1100 is a single spindle machine which is designed to provide optimum winding solutions for specific applications at low capital and running cost through simple design and construction.",
      "Menu-driven programming through alpha-numeric dialogue display, a powerful set of programmable parameters and multi-program memory help in realizing complex winding programs with exceptional ease."
    ],
    "sourceApplications": [
      "Relay, IFT, Choke coils, Drum core, SMPS, RF coils",
      "Voice coils, Timer coils, Solenoid coils, Ballast coils",
      "Flasher coils, Pickup coils, Buzzer coils",
      "Small Transformer coils"
    ],
    "sourceStandardAccessories": [
      "Friction Type Tensioner (Manual adjustments through felts)",
      "Wire guides",
      "Wire cut sensors",
      "Spool container (165 mm dia. x 220 mm ht.) with Tensioner mounting stand"
    ],
    "specs": [
      {
        "label": "Spindle",
        "values": {
          "Specification": "Single (Side loading / Front loading)"
        }
      },
      {
        "label": "Winding speed",
        "values": {
          "Specification": "9000 RPM (Max.)"
        }
      },
      {
        "label": "Wire diameter",
        "values": {
          "Specification": "0.8 mm (Max. bobbin dia.: 30 mm)"
        }
      },
      {
        "label": "Bobbin diameter",
        "values": {
          "Specification": "100 mm (Max wire dia.: 0.4 mm)"
        }
      },
      {
        "label": "Winding width",
        "values": {
          "Specification": "90 mm"
        }
      },
      {
        "label": "Memory",
        "values": {
          "Specification": "100 Programmes, Non-volatile"
        }
      },
      {
        "label": "Spindle motor",
        "values": {
          "Specification": "PMDC Motor"
        }
      },
      {
        "label": "Dimensions (mm) [L x W x H]",
        "values": {
          "Specification": "300 (L) x 350 (B) x 340 (H)"
        }
      },
      {
        "label": "Weight",
        "values": {
          "Specification": "30 Kgs. (Approximately)."
        }
      },
      {
        "label": "Power supply",
        "values": {
          "Specification": "220 V, 50 Hz, Single Phase AC supply"
        }
      }
    ],
    "specNotes": [
      "Single-page datasheet; value column is headed 'Specification'."
    ],
    "completeness": "full",
    "oldUrl": "/optima-1100/",
    "flags": [
      "Variants 1100F and 1100CB share the Optima 1100 datasheet; no separate specs for F / CB.",
      "Datasheet: Dimensions label is printed 'Dimensions (mm) [L x W x H]' but the value uses '(B)' for the second dimension instead of '(W)'; the '(mm) [L x W x H]' part of the label is not in the PDF text layer (image only).",
      "Datasheet: Text layer drifts the Wire diameter / Bobbin diameter / Dimensions / Weight / Power supply labels one line from their values; alignment confirmed from page image."
    ]
  },
  {
    "slug": "optima-1100-smps",
    "name": "Optima 1100 SMPS",
    "category": "semi-automatic-coil-winding",
    "group": "Single Spindle",
    "variants": [
      "Optima 1100SMPS"
    ],
    "sourceDescription": [],
    "datasheet": {
      "file": "/datasheets/optima-1100-smps.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/semi-auto-wm/Optima-1100-SMPS.pdf",
      "docCode": "A - Cat-SMPS- 01-June’21"
    },
    "sourceTitle": "Optima 1100 SMPS",
    "sourceDatasheetDescription": [
      "The Optima 1100 SMPS is a single spindle machine which is designed to provide optimum winding solutions for SMPS application at low capital and running cost through simple design and construction.",
      "Menu-driven programming through alpha-numeric dialogue display, a powerful set of programmable parameters and multi-program memory help in realizing complex winding programs with exceptional ease."
    ],
    "sourceApplications": [
      "SMPS Coils"
    ],
    "sourceStandardAccessories": [
      "Wire Guide (Floating type)",
      "Wire routing attachment (Max 6 wires)",
      "Taping attachment (Margin tape & Layer Tape)",
      "Foot Switch (For Start / Stop Operation)",
      "Multiple wire routing arrangement"
    ],
    "specs": [
      {
        "label": "Spindle",
        "values": {
          "Specification": "Centre Bore"
        }
      },
      {
        "label": "Winding speed",
        "values": {
          "Specification": "9000 RPM (Max.)"
        }
      },
      {
        "label": "Wire diameter",
        "values": {
          "Specification": "0.13 mm"
        }
      },
      {
        "label": "Bobbin diameter",
        "values": {
          "Specification": "100 mm (Max wire dia.: 0.4 mm)"
        }
      },
      {
        "label": "Winding width",
        "values": {
          "Specification": "90 mm"
        }
      },
      {
        "label": "Memory",
        "values": {
          "Specification": "100 Programmes, Non-volatile"
        }
      },
      {
        "label": "Spindle motor",
        "values": {
          "Specification": "PMDC Motor"
        }
      },
      {
        "label": "Dimensions (mm) [L x W x H]",
        "values": {
          "Specification": "270 (L) x 300 (B) x 325 (H)"
        }
      },
      {
        "label": "Weight",
        "values": {
          "Specification": "35 Kgs. (Approximately)."
        }
      },
      {
        "label": "Power supply",
        "values": {
          "Specification": "220 V, 50 Hz, Single Phase AC supply"
        }
      }
    ],
    "specNotes": [
      "Single-page datasheet; value column is headed 'Specification'."
    ],
    "completeness": "partial",
    "flags": [
      "No product photo on old site (datasheet has one — can be extracted).",
      "Some datasheet values were transcribed from the PDF image (mixed); verified against page renders.",
      "Datasheet: Dimensions label is printed 'Dimensions (mm) [L x W x H]' but the value uses '(B)' for the second dimension instead of '(W)'; the '(mm) [L x W x H]' part of the label is not in the PDF text layer (image only).",
      "Datasheet: Wire diameter '0.13 mm' has no '(Max.)' qualifier, unlike other Optima sheets; it reads as a single fixed value. Transcribed as printed."
    ]
  },
  {
    "slug": "optima-1100-300t",
    "name": "Optima 1100-300T",
    "category": "semi-automatic-coil-winding",
    "group": "Single Spindle",
    "variants": [
      "Optima 1100-300T"
    ],
    "sourceDescription": [],
    "datasheet": {
      "file": "/datasheets/optima-1100-300t.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/semi-auto-wm/Optima-1100-300T.pdf",
      "docCode": "A - Cat-1100 300T- 01-June’21"
    },
    "sourceTitle": "Smart Winder - Optima 1100- 300T",
    "sourceApplications": [
      "Relay, IFT, Choke coils, Drum core, SMPS, RF coils",
      "Voice coils, Timer coils, Solenoid coils, Ballast coils",
      "Flasher coils, Pickup coils, Buzzer coils",
      "Small transformer coil"
    ],
    "sourceStandardAccessories": [
      "Friction Type Tensioner (Manual adjustments through felts)",
      "Wire guide",
      "Wire cut sensors",
      "Spool container (165 mm dia x 220 mm Ht) with tensioner mounting stand"
    ],
    "sourceOptionalAccessories": [
      "Self locking Tail stock (for component end support)",
      "Thick wire tensioner (Friction type) for thick wires",
      "Foot switch (for Start / Stop Operations)",
      "RS 232 PC interface port",
      "Tubular (Nozzle) wire guide",
      "Safety guard",
      "De reeler (friction type) for wire spool."
    ],
    "specs": [
      {
        "label": "Spindle",
        "values": {
          "Specification": "Single (Side Loading)"
        }
      },
      {
        "label": "Winding Speed",
        "values": {
          "Specification": "300 -  9000 RPM (in 3 steps)"
        }
      },
      {
        "label": "Wire Dia. (Max. in mm)",
        "values": {
          "Specification": "0.8 (Max. Bobbin Dia: 30 mm)"
        }
      },
      {
        "label": "Bobbin Dia. (Max. in mm)",
        "values": {
          "Specification": "100(Max. Wire Dia: 0.4 mm)"
        }
      },
      {
        "label": "Winding Width (Max. in mm)",
        "values": {
          "Specification": "300 mm"
        }
      },
      {
        "label": "Memory",
        "values": {
          "Specification": "100 Programmes; Non-volatile"
        }
      },
      {
        "label": "Spindle Motor (PMDC)",
        "values": {
          "Specification": "120 W; 4000 RPM (PMDC)"
        }
      },
      {
        "label": "Dimensions (mm)",
        "values": {
          "Specification": "860 (L) x 300 (W) x 420 (H)"
        }
      },
      {
        "label": "Power Requirements",
        "values": {
          "Specification": "220 V, 50 Hz, Single Phase AC Supply"
        }
      },
      {
        "label": "Weight*",
        "values": {
          "Specification": "100 Kgs. (approx.)"
        }
      }
    ],
    "specNotes": [
      "Single-page datasheet; the only value column is headed 'Specification' (no model name in the column header — the model is in the title)."
    ],
    "completeness": "partial",
    "flags": [
      "No product photo on old site (datasheet has one — can be extracted).",
      "Some datasheet values were transcribed from the PDF image (mixed); verified against page renders.",
      "Datasheet: Memory value ('100 Programmes; Non-volatile') is not in the PDF text layer; transcribed from page image (200 dpi).",
      "Datasheet: 'Weight*' label carries an asterisk but no footnote is printed on the page.",
      "Datasheet: Winding Speed is printed with a double space: '300 -  9000 RPM (in 3 steps)'; kept as printed.",
      "Datasheet: 'Wire Dia. (Max. in mm)' value '0.8' has no unit while the label says 'in mm'; 'Winding Width (Max. in mm)' value repeats unit '300 mm'; 'Bobbin Dia.' value '100(Max...' has no space before the parenthesis — all as printed.",
      "Datasheet: Text layer places 'De reeler (friction type) for wire spool.' near the Application list; the image confirms it is the last Optional Accessories bullet."
    ]
  },
  {
    "slug": "optima-1160",
    "name": "Optima 1160",
    "category": "semi-automatic-coil-winding",
    "group": "Single Spindle",
    "variants": [
      "Optima 1160",
      "Optima 1160F",
      "Optima 1160 (AC Motor)"
    ],
    "image": "/images/machines/semi-automatic-coil-winding/optima-1160.png",
    "sourceDescription": [
      "Smart Winder Optima – 1160 is a Single Spindle, Programmable Semi-Automatic Coil Winding Machine which is available in Side or Front Loading Configuration.",
      "These machines are used to Wind coils such as Relay Coils, Horn Coils, Ignition coils, Choke Coils, DC Brake Coils and windings for SMPS,  Small Transformers, Ferrite Core, Drum Core, Inductor, Solenoid, Motor-DC (lower range), Resistor, Potentiometer, Rotor, Fuel Guage, Contactor, HID, Home Applicances, MCB and many more."
    ],
    "sourceWebSpecs": [
      "Wire Size : 1.4 mm (Max. Bobbin Dia: 70 mm)",
      "Bobbin Dia : 160 mm (Max. Wire Dia: 0.8 mm)",
      "Winding Width : 120 mm"
    ],
    "datasheet": {
      "file": "/datasheets/optima-1160.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/semi-auto-wm/Optima-1160.pdf",
      "docCode": "A - Cat-1160- 01-June’21"
    },
    "sourceTitle": "Optima 1160",
    "sourceDatasheetDescription": [
      "The Optima 1160 is a single spindle machine which is designed to provide optimum winding solutions for specific applications at low capital and running cost through simple design and construction.",
      "Menu-driven programming through alpha-numeric dialogue display, a powerful set of programmable parameters and multi-program memory help in realizing complex winding programs with exceptional ease."
    ],
    "sourceApplications": [
      "Relay, IFT, Choke coils, Drum core, SMPS, RF coils",
      "Voice coils, Timer coils, Solenoid coils, Ballast coils",
      "Flasher coils, Pickup coils, Buzzer coils",
      "Small Transformer coils"
    ],
    "sourceStandardAccessories": [
      "Friction Type Tensioner (Manual adjustments through felts)",
      "Wire guide",
      "Wire cut sensors",
      "Spool container (165 mm dia. x 220 mm ht.) with Tensioner mounting stand"
    ],
    "specs": [
      {
        "label": "Spindle",
        "values": {
          "Specification": "Single (Side loading / Front loading)"
        }
      },
      {
        "label": "Winding speed",
        "values": {
          "Specification": "300 to 9000 RPM (Programmable)"
        }
      },
      {
        "label": "Wire diameter",
        "values": {
          "Specification": "1.4 mm (Max. bobbin dia.: 70 mm)"
        }
      },
      {
        "label": "Winding width",
        "values": {
          "Specification": "120 mm."
        }
      },
      {
        "label": "Bobbin diameter",
        "values": {
          "Specification": "160 mm (max.) (wire dia. max.: 0.8 mm)"
        }
      },
      {
        "label": "Memory",
        "values": {
          "Specification": "100 Programmes, Non-volatile"
        }
      },
      {
        "label": "Spindle motor",
        "values": {
          "Specification": "PMDC Motor / AC Induction Motor with VFD"
        }
      },
      {
        "label": "Power supply",
        "values": {
          "Specification": "220 V AC, 50 Hz, Single Phase AC supply"
        }
      },
      {
        "label": "Dimensions",
        "values": {
          "Specification": "370 (L) x 345 (B) x 370 (H)"
        }
      },
      {
        "label": "Weight",
        "values": {
          "Specification": "45 Kgs."
        }
      }
    ],
    "specNotes": [
      "Single-page datasheet; value column is headed 'Specification'."
    ],
    "completeness": "full",
    "oldUrl": "/optima-1160/",
    "flags": [
      "1160F and 1160 (AC Motor) share the 1160 datasheet.",
      "Some datasheet values were transcribed from the PDF image (mixed); verified against page renders.",
      "Datasheet: Winding width ('120 mm.') and Weight ('45 Kgs.') values are not in the PDF text layer; transcribed from page image (200 dpi).",
      "Datasheet: Dimensions value has no unit (no '(mm)' in label or value).",
      "Datasheet: Power supply printed as '220 V AC, 50 Hz, Single Phase AC supply' ('AC' appears twice) — as printed."
    ]
  },
  {
    "slug": "optima-1250",
    "name": "Optima 1250",
    "category": "semi-automatic-coil-winding",
    "group": "Single Spindle",
    "variants": [
      "Optima 1250",
      "Optima 1250-300T"
    ],
    "image": "/images/machines/semi-automatic-coil-winding/optima-1250.jpg",
    "sourceDescription": [
      "Smart Winder Optima – 1250 is a Single Spindle, Programmable Semi-Automatic Coil Winding Machine which is available in Side Loading Configuration.",
      "These machines are used to Wind coils such as Horn Coils, Choke Coils, DC Brake Coils, Speaker Coil, Stabilizer Coil, Inverter Coil, PT Coil, Pump Coil, AC Induction Motor Field Coil and windings for SMPS, Transformers, Sensors, Servo Motor, Contactors, Heater Elements, Distibution Transformer (Lower Rating) and many more."
    ],
    "sourceWebSpecs": [
      "Wire Size : 3.0 mm (Max. Bobbin Dia: 75 mm)",
      "Bobbin Dia : 250 mm (Max. Wire Dia: 1.5 mm)",
      "Winding Width : 250 mm"
    ],
    "datasheet": {
      "file": "/datasheets/optima-1250.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/semi-auto-wm/Optima-1250.pdf",
      "docCode": "A - Cat-1250- 01-June’21"
    },
    "sourceTitle": "Optima 1250",
    "sourceDatasheetDescription": [
      "The Optima 1250 is a single spindle machine which is designed to provide optimum winding solutions for specific applications at low capital and running cost through simple design and construction.",
      "Menu-driven programming through alpha-numeric dialogue display, a powerful set of programmable parameters and multi-program memory help in realizing complex winding programs with exceptional ease."
    ],
    "sourceApplications": [
      "Power Transformer Coil Winding Application",
      "Pūmp Coil",
      "Inverter Coils",
      "Stabilizer Coils"
    ],
    "sourceStandardAccessories": [
      "Friction Type Tensioner (Manual adjustments through felts)",
      "Wire guides",
      "Wire cut sensors",
      "Spool container (165 mm dia. x 220 mm ht.) with Tensioner mounting stand"
    ],
    "specs": [
      {
        "label": "Spindle",
        "values": {
          "Specification": "Single (Side loading)"
        }
      },
      {
        "label": "Winding speed",
        "values": {
          "Specification": "6000 RPM (Max.)"
        }
      },
      {
        "label": "Wire diameter",
        "values": {
          "Specification": "3.0 mm (Max. bobbin dia.: 75 mm)"
        }
      },
      {
        "label": "Winding width",
        "values": {
          "Specification": "250 mm"
        }
      },
      {
        "label": "Bobbin diameter",
        "values": {
          "Specification": "250 mm (Max.) (Wire dia.: 1.5 mm)"
        }
      },
      {
        "label": "Memory",
        "values": {
          "Specification": "100 Programmes, Non-volatile"
        }
      },
      {
        "label": "Spindle motor",
        "values": {
          "Specification": "AC Induction Motor with VFD"
        }
      },
      {
        "label": "Power supply",
        "values": {
          "Specification": "220 V, 50 Hz, Single Phase AC supply"
        }
      },
      {
        "label": "Dimensions",
        "values": {
          "Specification": "500 (L) x 525 (B) x 380 (H)"
        }
      },
      {
        "label": "Weight",
        "values": {
          "Specification": "95 Kgs. (Approximately)"
        }
      }
    ],
    "specNotes": [
      "Single-page datasheet; value column is headed 'Specification'."
    ],
    "completeness": "full",
    "oldUrl": "/optima-1250/",
    "flags": [
      "Optima 1250-300T links to the standard 1250 datasheet; no 300T specs exist.",
      "Some datasheet values were transcribed from the PDF image (mixed); verified against page renders.",
      "Datasheet: Power supply value ('220 V, 50 Hz, Single Phase AC supply') is not in the PDF text layer; transcribed from page image (200 dpi).",
      "Datasheet: Application bullet is printed 'Pūmp Coil' with a macron-u (ū) — a typo for 'Pump'; transcribed as printed.",
      "Datasheet: Dimensions value has no unit (no '(mm)' in label or value)."
    ]
  },
  {
    "slug": "optima-mp-01",
    "name": "Optima MP-01",
    "category": "semi-automatic-coil-winding",
    "group": "Single Spindle",
    "variants": [
      "Optima MP-01"
    ],
    "sourceDescription": [],
    "completeness": "listed",
    "flags": [
      "Listed under 'Choose by Model' only (link '#'). No page, datasheet or image. Keep, or drop?"
    ]
  },
  {
    "slug": "optima-1470",
    "name": "Optima 1470",
    "category": "semi-automatic-coil-winding",
    "group": "Single Spindle",
    "variants": [
      "Optima 1470"
    ],
    "image": "/images/machines/semi-automatic-coil-winding/optima-1470.jpg",
    "sourceDescription": [
      "Smart Winder Optima – 1470 is a Single Spindle, Programmable Semi-Automatic Coil Winding Machine which is available in Side Loading Configuration.",
      "These machines are used to Wind coils such as Transformer Coils & AC Induction Motor Feild Coils"
    ],
    "sourceWebSpecs": [
      "Wire Size : 5.0 mm (Max. Bobbin Dia: 200 mm)",
      "Bobbin Dia : 470 mm (Max. Wire Dia: 2.3 mm)",
      "Winding Width : 250 mm"
    ],
    "datasheet": {
      "file": "/datasheets/optima-1470.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/semi-auto-wm/Optima-1470.pdf",
      "docCode": "A - Cat-1470- 01-June’21"
    },
    "sourceTitle": "Optima 1470",
    "sourceDatasheetDescription": [
      "The Optima 1470 is a single spindle machine which is designed to provide optimum winding solutions for specific applications at low capital and running cost through simple design and construction.",
      "Menu-driven programming through alpha-numeric dialogue display, a powerful set of programmable parameters and multi-program memory help in realizing complex winding programs with exceptional ease."
    ],
    "sourceApplications": [
      "Heavy Duty Transformer Coils"
    ],
    "sourceStandardAccessories": [
      "Traverse : Ball Screw driven by AC Servo Motor",
      "Tail Stock (Mechanically Actuated)",
      "Staggered Pulley Tensioner",
      "Machine integrated to Aluminium extrusion table",
      "Foot Switch (for ‘Start/Stop’ operation)"
    ],
    "specs": [
      {
        "label": "Winding speed",
        "values": {
          "Specification": "2400 RPM (Max.)"
        }
      },
      {
        "label": "Wire diameter",
        "values": {
          "Specification": "5 mm (Max. on 120 mm winding dia.)"
        }
      },
      {
        "label": "Bobbin diameter",
        "values": {
          "Specification": "470 mm (Max. wire dia.: 2.3 mm)"
        }
      },
      {
        "label": "Winding width",
        "values": {
          "Specification": "250 mm"
        }
      },
      {
        "label": "Power supply",
        "values": {
          "Specification": "220/240V AC, 50 Hz, 2 KVA"
        }
      },
      {
        "label": "Memory",
        "values": {
          "Specification": "100 Programmes, Non-volatile"
        }
      },
      {
        "label": "Spindle Motors",
        "values": {
          "Specification": "AC Motor"
        }
      },
      {
        "label": "Spindle Drive",
        "values": {
          "Specification": "AC Variable Frequency Drive"
        }
      },
      {
        "label": "Traverse Motor",
        "values": {
          "Specification": "AC Servo Motor"
        }
      },
      {
        "label": "Brake",
        "values": {
          "Specification": "Electro-magnetic Brake"
        }
      },
      {
        "label": "Dimensions (mm)",
        "values": {
          "Specification": "1000 (L) x 560 (B) x 1370 (H)"
        }
      },
      {
        "label": "Weight",
        "values": {
          "Specification": "600 Kgs (Approximately)"
        }
      }
    ],
    "specNotes": [
      "Single-page datasheet; value column is headed 'Specification'."
    ],
    "completeness": "full",
    "oldUrl": "/optima-1470/",
    "flags": [
      "Some datasheet values were transcribed from the PDF image (mixed); verified against page renders.",
      "Datasheet: Wire diameter, Bobbin diameter, Power supply, Spindle Motors, Spindle Drive, Traverse Motor and Brake values are not in the PDF text layer; transcribed from page image (200 dpi).",
      "Datasheet: No 'Spindle' row in this table (unlike the other Optima sheets)."
    ]
  },
  {
    "slug": "optima-280",
    "name": "Optima 280",
    "category": "semi-automatic-coil-winding",
    "group": "Dual Spindle",
    "variants": [
      "Optima 280"
    ],
    "image": "/images/machines/semi-automatic-coil-winding/optima-280.jpg",
    "sourceDescription": [
      "Smart Winder Optima – 280 is a Dual Spindle, Programmable Semi-Automatic Coil Winding Machine which is available in Side Loading Configuration.",
      "These machines are used to Wind coils such as Transformer Coils, Buzzer Coils, Cooler Pump Coil, Horn coils, Meter coil, Excitor coil and windings for Drum core, Inductor, CFL choke, Sensor, Solenoid."
    ],
    "sourceWebSpecs": [
      "Wire Size : 0.5 mm (Max. Bobbin Dia: 35 mm)",
      "Bobbin Dia : 80 mm (Max. Wire Dia: 0.4 mm)",
      "Winding Width : 90 mm"
    ],
    "datasheet": {
      "file": "/datasheets/optima-280.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/semi-auto-wm/Optima-280.pdf",
      "docCode": "A - Cat-280- 01-June’21"
    },
    "sourceTitle": "Optima 280",
    "sourceDatasheetDescription": [
      "The Optima 280 is a dual spindle machine which is designed to provide optimum winding solutions for specific applications at low capital and running cost through simple design and construction.",
      "Menu-driven programming through alpha-numeric dialogue display, a powerful set of programmable parameters and multi-program memory help in realizing complex winding programs with exceptional ease."
    ],
    "sourceApplications": [
      "Relay, Charger coils, Choke coils, Drum core",
      "Timer coils, Solenoid coils, Ballast coils",
      "Flasher coils, Pickup coils",
      "Small Transformer coils"
    ],
    "sourceStandardAccessories": [
      "Friction Type Tensioner (Manual adjustments through felts)",
      "Wire guides",
      "Wire cut sensors",
      "Spool container (165 mm dia. x 220 mm ht.) with Tensioner mounting stand"
    ],
    "specs": [
      {
        "label": "Spindle",
        "values": {
          "Specification": "Dual; Side loading"
        }
      },
      {
        "label": "Winding speed",
        "values": {
          "Specification": "9000 RPM (Max.)"
        }
      },
      {
        "label": "Wire diameter",
        "values": {
          "Specification": "0.5 mm (Max. bobbin dia.: 30 mm)"
        }
      },
      {
        "label": "Bobbin diameter",
        "values": {
          "Specification": "80 mm (Max wire dia.: 0.3 mm)"
        }
      },
      {
        "label": "Winding width",
        "values": {
          "Specification": "90 mm"
        }
      },
      {
        "label": "Memory",
        "values": {
          "Specification": "100 Programmes, Non-volatile"
        }
      },
      {
        "label": "Spindle motor",
        "values": {
          "Specification": "PMDC Motor"
        }
      },
      {
        "label": "Dimensions (mm)",
        "values": {
          "Specification": "270 (L) x 300 (B) x 325 (H)"
        }
      },
      {
        "label": "Weight",
        "values": {
          "Specification": "30 Kgs. (Approximately)."
        }
      },
      {
        "label": "Power supply",
        "values": {
          "Specification": "220 V, 50 Hz, Single Phase AC supply"
        }
      }
    ],
    "specNotes": [
      "Single-page datasheet; value column is headed 'Specification'."
    ],
    "completeness": "full",
    "oldUrl": "/optima-280/",
    "flags": [
      "CONFLICT: web page says 'Wire Size 0.5 mm (Max. Bobbin Dia: 35 mm)' and 'Max. Wire Dia: 0.4 mm'; datasheet says max bobbin dia 30 mm and max wire dia 0.3 mm. Which is correct?",
      "Datasheet: 'Specification' column header is image-only (not in text layer); all values are in the text layer and match the image."
    ]
  },
  {
    "slug": "optima-2100",
    "name": "Optima 2100",
    "category": "semi-automatic-coil-winding",
    "group": "Dual Spindle",
    "variants": [
      "Optima 2100",
      "Optima 2100 (AC Motor)",
      "Optima 2100F"
    ],
    "image": "/images/machines/semi-automatic-coil-winding/optima-2100.jpg",
    "sourceDescription": [
      "Smart Winder Optima – 2100 is a Dual Spindle, Programmable Semi-Automatic Coil Winding Machine which is available in Side & Front Loading Configuration.",
      "These machines are used to Wind coils such as Transformer Coils, Horn coils, Excitor coil, Ignition Coil, Relay and windings for Stabilizers, Inductor, CFL choke, Solenoid."
    ],
    "sourceWebSpecs": [
      "Wire Size : 1.0 mm (Max. Bobbin Dia: 50 mm)",
      "Bobbin Dia : 100 mm (Max. Wire Dia: 0.7 mm)",
      "Winding Width : 120 mm"
    ],
    "datasheet": {
      "file": "/datasheets/optima-2100.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/semi-auto-wm/Optima-2100.pdf",
      "docCode": "A-Cat-2100-01-June’21"
    },
    "sourceTitle": "Optima 2100",
    "sourceDatasheetDescription": [
      "The Optima 2100 is a dual spindle machine which is designed to provide optimum winding solutions for specific applications at low capital and running cost through simple design and construction.",
      "Menu-driven programming through alpha-numeric dialogue display, a powerful set of programmable parameters and multi-program memory help in realizing complex winding programs with exceptional ease."
    ],
    "sourceApplications": [
      "Relay, IFT, Choke coils, Drum core, SMPS, RF coils",
      "Voice coils, Timer coils, Solenoid coils, Ballast coils",
      "Flasher coils, Pickup coils, Buzzer coils",
      "Small Transformer coils"
    ],
    "sourceStandardAccessories": [
      "Friction Type Tensioner (Manual adjustments through felts)",
      "Wire guides",
      "Wire cut sensors",
      "Spool container (165 mm dia. x 220 mm ht.) with Tensioner mounting stand"
    ],
    "specs": [
      {
        "label": "Spindle",
        "values": {
          "Specification": "Dual; Side loading / Front loading"
        }
      },
      {
        "label": "Winding speed",
        "values": {
          "Specification": "9000 RPM (Max.)"
        }
      },
      {
        "label": "Wire diameter",
        "values": {
          "Specification": "1 mm (Max. bobbin dia.: 50 mm)"
        }
      },
      {
        "label": "Bobbin diameter",
        "values": {
          "Specification": "100 mm (Max. wire dia.: 0.7 mm)"
        }
      },
      {
        "label": "Winding width",
        "values": {
          "Specification": "120 mm"
        }
      },
      {
        "label": "Memory",
        "values": {
          "Specification": "100 Programmes; Non-volatile"
        }
      },
      {
        "label": "Spindle motor",
        "values": {
          "Specification": "PMDC Motor / AC Induction Motor with VFD"
        }
      },
      {
        "label": "Dimensions (mm)",
        "values": {
          "Specification": "370 (L) x 345 (B) x 370 (H)"
        }
      },
      {
        "label": "Weight",
        "values": {
          "Specification": "47 Kgs. (Approximately)"
        }
      },
      {
        "label": "Power supply",
        "values": {
          "Specification": "220 V, 50 Hz, Single Phase AC supply"
        }
      }
    ],
    "specNotes": [
      "Single-page datasheet; value column is headed 'Specification'."
    ],
    "completeness": "full",
    "oldUrl": "/optima-2100/",
    "flags": [
      "Datasheet dimensions identical to Optima 1160 (370 x 345 x 370) — possibly copied; confirm.",
      "Some datasheet values were transcribed from the PDF image (mixed); verified against page renders.",
      "Datasheet: Most of the spec table (Winding speed, Wire diameter, Bobbin diameter, Winding width, Memory, Weight, Power supply, and the 'Specification' column header) is not in the PDF text layer; transcribed from page image (200 dpi). Only Spindle, Spindle motor and Dimensions values are text.",
      "Datasheet: Dimensions (370 (L) x 345 (B) x 370 (H)) are identical to the single-spindle Optima 1160 sheet — possibly copied; transcribed as printed."
    ]
  },
  {
    "slug": "optima-475",
    "name": "Optima 475",
    "category": "semi-automatic-coil-winding",
    "group": "Four Spindle",
    "variants": [
      "Optima 475",
      "Optima 475 (AC Motor)"
    ],
    "image": "/images/machines/semi-automatic-coil-winding/optima-475.jpg",
    "sourceDescription": [
      "Smart Winder Optima – 475 is a Dual Spindle, Programmable Semi-Automatic Coil Winding Machine which is available in Front Loading Configuration.",
      "These machines are used to Wind coils such as Transformer Coils, Buzzer Coils, DC Contactor Coil, Control Transformer ( low range ), Cross Coil, Pulsar Coil, Excitor Coil and windings for Drum core, Inductor, Relays, Door Bell,  Sensor, Solenoid."
    ],
    "sourceWebSpecs": [
      "Wire Size : 0.35 mm (Max. Bobbin Dia: 50 mm)",
      "Bobbin Dia : 75 mm (Max. Wire Dia: 0.2 mm)",
      "Winding Width : 120 mm"
    ],
    "datasheet": {
      "file": "/datasheets/optima-475.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/semi-auto-wm/Optima-475.pdf",
      "docCode": "A - Cat-475- 01-June’21"
    },
    "sourceTitle": "Optima 475",
    "sourceDatasheetDescription": [
      "The Optima 475 is a four spindle machine which is designed to provide optimum winding solutions for specific applications at low capital and running cost through simple design and construction.",
      "Menu-driven programming through alpha-numeric dialogue display, a powerful set of programmable parameters and multi-program memory help in realizing complex winding programs with exceptional ease."
    ],
    "sourceApplications": [
      "Relay, IFT, Choke coils, RF coils",
      "Voice coils, Timer coils, Solenoid coils",
      "Flasher coils, Pickup coils, Buzzer coils"
    ],
    "sourceStandardAccessories": [
      "Friction Type Tensioner (Manual adjustments through felts)",
      "Wire guides",
      "Wire cut sensors",
      "Spool container (165 mm dia. x 220 mm ht.) with Tensioner mounting stand"
    ],
    "specs": [
      {
        "label": "Spindle",
        "values": {
          "Specifications": "Four; Front loading"
        }
      },
      {
        "label": "Winding speed",
        "values": {
          "Specifications": "9000 RPM (Max.)"
        }
      },
      {
        "label": "Wire diameter",
        "values": {
          "Specifications": "0.35 mm (Max. wire dia 50 mm)"
        }
      },
      {
        "label": "Bobbin diameter",
        "values": {
          "Specifications": "75 mm (Max. wire dia max. 0.2 mm)"
        }
      },
      {
        "label": "Winding width",
        "values": {
          "Specifications": "120 mm"
        }
      },
      {
        "label": "Memory",
        "values": {
          "Specifications": "100 Programmes; Non-volatile"
        }
      },
      {
        "label": "Spindle motor",
        "values": {
          "Specifications": "PMDC Motor / AC Induction Motor with VFD"
        }
      },
      {
        "label": "Dimensions (mm) [L x W x H]",
        "values": {
          "Specifications": "650 (L) x 470 (B) x 450 (H)"
        }
      },
      {
        "label": "Weight",
        "values": {
          "Specifications": "65 Kgs. (Approximately)"
        }
      },
      {
        "label": "Power supply",
        "values": {
          "Specifications": "220 V, 50 Hz, Single Phase AC supply"
        }
      }
    ],
    "specNotes": [
      "Single-page datasheet; value column is headed 'Specifications' (plural, unlike other Optima sheets)."
    ],
    "completeness": "full",
    "oldUrl": "/optima-475/",
    "flags": [
      "CONFLICT: web page calls it 'a Dual Spindle' machine; category page and datasheet say four spindle. Using four spindle.",
      "Some datasheet values were transcribed from the PDF image (mixed); verified against page renders.",
      "Datasheet: Winding speed, Wire diameter, Bobbin diameter, Winding width, Memory, Weight and Power supply values (and the '(mm) [L x W x H]' part of the Dimensions label) are not in the PDF text layer; transcribed from page image (200 dpi).",
      "Datasheet: Likely error inside the PDF: Wire diameter reads '0.35 mm (Max. wire dia 50 mm)' — the qualifier says 'wire dia' where other Optima sheets say 'bobbin dia.' here; transcribed as printed.",
      "Datasheet: Bobbin diameter qualifier is redundant/garbled: '(Max. wire dia max. 0.2 mm)'; transcribed as printed.",
      "Datasheet: Dimensions label says '[L x W x H]' but the value uses '(B)' instead of '(W)'."
    ]
  },
  {
    "slug": "smart-winder-a-series",
    "name": "Smart Winder A Series",
    "category": "automatic-multispindle-winding",
    "group": "Two / Four / Six Spindle",
    "variants": [
      "Smart Winder A2",
      "Smart Winder A4",
      "Smart Winder A6"
    ],
    "image": "/images/machines/automatic-multispindle/sw-a2-a4.jpg",
    "gallery": [
      "/images/machines/automatic-multispindle/sw-a6.jpg"
    ],
    "sourceDescription": [],
    "datasheet": {
      "file": "/datasheets/smart-winder-a2-a4-a6.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/A2-A4-A6-Catalogue-Individual-Jun-21.pdf",
      "docCode": "B - Cat -A4- 01-June’21"
    },
    "sourceTitle": "Smart Winder® A Series",
    "sourceSubtitle": "Automatic Multi-Spindle Winding Machine",
    "sourceFeatures": [
      "Three axes movement of wire guide with linear, circular and helical interpolation capability for conveniently executing Wind, Wrap, Cut and Position functions.",
      "Small moving mass gives high acceleration rates resulting in higher productivity.",
      "Flexible menu driven programming through Windows* based Graphical User Interface and direct entry of coil parameters, user defined operation sequencing coupled with a powerful set of intelligent functions for achieving complex winding configurations with exceptional ease.",
      "High-performance CNC control system with acceleration and contouring with look-ahead function ensures high accuracy, speed and long life of mechanical components.",
      "Optimised design using advanced motion systems and standard precision parts reduces number of components resulting in enhanced reliability, performance & ease of maintenance.",
      "Wire wrapping unit with programmable 90° Nozzle tilt suitable for wrapping radial & axial pins.",
      "AC Servo motors for Axes and spindle control provide excellent dynamic performance and maintenance-free operations.",
      "Pneumatically operated self-cleaning wire anchors with 4-way programmable movement for flexibility in wire clamping and minimising wastage."
    ],
    "sourceOptionalAccessories": [
      "Online Wire Twisting Unit",
      "Auto Load / Unload",
      "Wire Tensioners",
      "Winding Mandrels",
      "Safety Guard with Light Sensors",
      "Component Presence Sensors",
      "Air Nipper for Wire Cutting"
    ],
    "specs": [
      {
        "label": "Number of Spindles",
        "values": {
          "Smart Winder A2": "2",
          "Smart Winder A4": "4",
          "Smart Winder A6": "6"
        }
      },
      {
        "label": "Bobbin Outer Dia.",
        "values": {
          "Smart Winder A2": "60 mm (Max.)",
          "Smart Winder A4": "40 mm (Max.)",
          "Smart Winder A6": "37.5 mm (Max.)"
        }
      },
      {
        "label": "Wire size",
        "values": {
          "Smart Winder A2": "0.5 mm (Max.)",
          "Smart Winder A4": "0.37 mm (Max.)",
          "Smart Winder A6": "0.2 mm (Max.)"
        }
      },
      {
        "label": "Spindle speed",
        "values": {
          "Smart Winder A2": "9000 RPM",
          "Smart Winder A4": "9000 RPM",
          "Smart Winder A6": "9000 RPM"
        }
      },
      {
        "label": "Machine Weight",
        "values": {
          "Smart Winder A2": "220 Kg (Approx.)",
          "Smart Winder A4": "250 Kg (Approx.)",
          "Smart Winder A6": "270 Kg (Approx.)"
        }
      }
    ],
    "specNotes": [
      "* Depicted in the Photograph",
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "oldUrl": "/automatic-multispindle-winding-machine/",
    "flags": [
      "Some datasheet values were transcribed from the PDF image (image); verified against page renders.",
      "Datasheet: All spec table values and most row labels (all except 'Bobbin Outer Dia.') are absent from the PDF text layer; transcribed from page image verified at 220 dpi.",
      "Datasheet: Asterisk on 'Smart Winder A6*' header refers to footnote '* Depicted in the Photograph'; 'Windows*' in features has no separate footnote on this page (the only footnote is the photograph one)."
    ]
  },
  {
    "slug": "smart-winder-at-series",
    "name": "Smart Winder AT Series",
    "category": "automatic-multispindle-winding",
    "group": "Four / Six / Eight Spindle",
    "variants": [
      "Smart Winder AT4",
      "Smart Winder AT6",
      "Smart Winder AT8"
    ],
    "image": "/images/machines/automatic-multispindle/sw-at-8.jpg",
    "sourceDescription": [],
    "datasheet": {
      "file": "/datasheets/smart-winder-at4-at6-at8.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/aT4-aT6-aT8-n.pdf",
      "docCode": "B - Cat - AT Series-01-June-21"
    },
    "sourceTitle": "Smart Winder® AT Series",
    "sourceSubtitle": "Automatic Multi-Spindle Winding Machine",
    "sourceFeatures": [
      "Three axes movement of wire guide with linear, circular & helical interpolation capability for conveniently executing Wind, Wrap, Cut & Routing functions.",
      "Flexible menu driven programming through Windows* based Graphical User Interface (external PC) and direct entry of coil parameters, user defined operation sequencing coupled with a powerful set of intelligent functions for achieving complex winding configurations with exceptional ease.",
      "Wire wrapping unit with programmable 90° Nozzle tilt suitable for wrapping radial & axial pins.",
      "Robust construction using precision standard linear motion elements and manufactured parts for high accuracy and long operational life.",
      "AC Servo motors for Axes & Spindle control provide excellent high speed performance and maintenance-free operation.",
      "4-way programmable movement for flexibility in wire clamping and minimising wastage.",
      "High-performance CNC control system with acceleration & contouring with look-ahead function ensures high accuracy, speed and long life of mechanical components",
      "Wide range of accessories like precision wire tensioners with integrated wire spool stand and custom designed tooling with quick change coupling facilitates easy change-over and optimum utilisation of the machine."
    ],
    "sourceOptionalAccessories": [
      "Wire tensioner",
      "Wire twister",
      "Winding mandrel",
      "Safety guard",
      "Auto load and unload"
    ],
    "specs": [
      {
        "label": "Number of Spindles",
        "values": {
          "Smart Winder AT 4": "4",
          "Smart Winder AT 6": "6",
          "Smart Winder AT 8": "8"
        }
      },
      {
        "label": "Spindle Pitch",
        "values": {
          "Smart Winder AT 4": "140 mm (Max.)",
          "Smart Winder AT 6": "84 mm (Max.)",
          "Smart Winder AT 8": "60 mm (Max.)"
        }
      },
      {
        "label": "Wire size",
        "values": {
          "Smart Winder AT 4": "0.2 mm to 1.5 mm",
          "Smart Winder AT 6": "0.025 mm to 0.75 mm",
          "Smart Winder AT 8": "0.025 mm to 0.4 mm"
        }
      },
      {
        "label": "Spindle speed",
        "values": {
          "Smart Winder AT 4": "6000 RPM",
          "Smart Winder AT 6": "12000 RPM",
          "Smart Winder AT 8": "12000 RPM"
        }
      },
      {
        "label": "Machine Weight",
        "values": {
          "Smart Winder AT 4": "500 Kgs. (Approx.)",
          "Smart Winder AT 6": "550 Kgs. (Approx.)",
          "Smart Winder AT 8": "600 Kgs (Approx.)"
        }
      }
    ],
    "specNotes": [
      "Optional accessories are printed under the heading \"Options\".",
      "Page 2 header reads 'Smart Winder® AT 4 / AT 6 / AT 8'."
    ],
    "completeness": "full",
    "flags": [
      "Old site shows the same photo (AT8-80.jpg) for AT 4 and AT 8.",
      "Some datasheet values were transcribed from the PDF image (image); verified against page renders.",
      "Datasheet: Entire spec table (labels and values) is absent from the PDF text layer; transcribed from page image verified at 220 dpi.",
      "Datasheet: Inconsistent unit punctuation inside the table: AT 4 and AT 6 weights read 'Kgs.' while AT 8 reads 'Kgs' (no period); transcribed as printed.",
      "Datasheet: 'Windows*' carries an asterisk but no matching footnote is printed on the page."
    ]
  },
  {
    "slug": "smart-winder-st1",
    "name": "Smart Winder ST-1",
    "category": "automatic-stator-winding",
    "group": "Flyer Stator Winders",
    "variants": [
      "Smart Winder ST1 – 4 Axes",
      "Smart Winder ST1 – 5 Axes",
      "Smart Winder ST1 – 6 Axes"
    ],
    "image": "/images/machines/automatic-stator/st-1.jpg",
    "gallery": [
      "/images/machines/automatic-stator/outrunner-stator.jpg"
    ],
    "sourceDescription": [
      "Outrunner Stator Winding Machine Is an automatic coil flyer-type coil winding machine mostly suitable for winding motor stators with outward facing poles. A flyer-type winding head rotates carries wire through a nozzle and rotates around the stator pole to lay the wire onto the pole that is to be wound. Machine has 3-4 functional axis – flyer, traverse, index and if required finger for precise laying the wire turn-by-turn, layer-by-layer onto the stator pole to achieve neat, good quality layer winding to achieve better slot fill factors.",
      "Application: BLDC drone motor, BLDC hub motor, 2 wheeler hub motor, BLDC ceiling fan motor, BLDC fan motor, magneto coil winding, generator coil winding."
    ],
    "datasheet": {
      "file": "/datasheets/smart-winder-st1.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/sator/ST-1-Catalogue-Individual.pdf",
      "docCode": "E-Cat--Stator-1-01-June-21"
    },
    "sourceTitle": "Smart Winder® ST-1",
    "sourceSubtitle": "Automatic Multi-pole Stator Winding Machine",
    "sourceFeatures": [
      "Flyer-type winding head.",
      "Automatic 6-Axes movement for winding helps in achieving complex winding with exceptional ease",
      "Automatic Winding, Core Indexing, Wire cutting and wire gripping.",
      "Automatic Core Height Compensation to center the pole during winding helps achieve consistency in winding quality while taking care of variations in core height.",
      "Servo Actuated Finger opening & guide axes with customized tooling",
      "High speed winding for better productivity.",
      "Electronic wire tension controller under PLC control to achieve precise tension, programmable for different stages of winding, facilitates achieving better winding quality and flexibility in routing.",
      "Material exhaust sensing with Smart-detect system - to judge adequacy of material available on the spool at the beginning of each cycle reduces material wastage (Optional).",
      "High performance multi-axes controller in stand-alone mode with multi-program memory and PC Interface.",
      "Flexible menu driven programming through Windows* based Graphical User Interface (external PC) and user defined operation sequencing coupled with a powerful set of intelligent functions for achieving complex winding configurations with exceptional ease. ."
    ],
    "sourceOptionalAccessories": [
      "Customized tooling",
      "Servo actuated core height compensation",
      "Synchronised internal guide block movement"
    ],
    "specs": [
      {
        "label": "Number of Spindles",
        "values": {
          "Smart Winder ST-1": "1"
        }
      },
      {
        "label": "Spindle Speed",
        "values": {
          "Smart Winder ST-1": "1500 RPM"
        }
      },
      {
        "label": "Wire Size",
        "values": {
          "Smart Winder ST-1": "0.7 mm - 1.4 mm Dia."
        }
      },
      {
        "label": "Core Diameter",
        "values": {
          "Smart Winder ST-1": "75 mm to 200 mm"
        }
      },
      {
        "label": "Core Stack Height",
        "values": {
          "Smart Winder ST-1": "10 mm to 50 mm"
        }
      },
      {
        "label": "Weight",
        "values": {
          "Smart Winder ST-1": "650 Kg (Approx.)"
        }
      }
    ],
    "specNotes": [
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "oldUrl": "/outrunner-stator-winding-machine/",
    "flags": [
      "Extra description + photo taken from orphan SEO page /outrunner-stator-winding-machine/ (flyer winder for outward-facing poles). Confirm it describes the ST series.",
      "Some datasheet values were transcribed from the PDF image (mixed); verified against page renders.",
      "Datasheet: Core Diameter and Core Stack Height values are not in the PDF text layer; transcribed from the page image (220 dpi). Options 2 and 3 also image-only.",
      "Datasheet: Core Diameter / Core Stack Height values are printed with a wider gap before 'to' ('75 mm  to 200 mm'); recorded with single spaces.",
      "Datasheet: Last feature ends with a doubled period 'exceptional ease. .' as printed.",
      "Datasheet: 'Windows*' carries an asterisk but no matching footnote is printed on the page."
    ]
  },
  {
    "slug": "smart-winder-st-2t",
    "name": "Smart Winder ST 2T",
    "category": "automatic-stator-winding",
    "group": "Flyer Stator Winders",
    "variants": [
      "Smart Winder ST 2T",
      "Smart Winder ST 1T"
    ],
    "image": "/images/machines/automatic-stator/st-2t.jpg",
    "sourceDescription": [],
    "datasheet": {
      "file": "/datasheets/smart-winder-st-2t.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/sator/ST-2T-Catalogue-Individual.pdf",
      "docCode": "B-Cat-ST 2T-01 June’21"
    },
    "sourceTitle": "Smart Winder® ST - 2T",
    "sourceSubtitle": "Automatic Multi-pole Stator Winding Machine",
    "sourceFeatures": [
      "Dual spindle flyer-type winding head for high productivity.",
      "Automatic core indexing driven by AC servo motor with infinitely programmable indexing angle to achieve different winding positions and wire routing paths.",
      "Programmable 4-position tap puller with wire clamp and cutter for automatic tap pulling and end termination eliminates manual intervention during winding resulting in higher productivity, consistency and safety.",
      "Positively coupled tool holder on winding head ensures precise angular positioning of wire guiding/routing fixture.",
      "Co-ordinated movement of winding head, core indexer & head traverse to achieve very complex wire routing configurations with ease.",
      "Electronic wire tension controller under PLC control to achieve precise tension programmable for different stages of winding facilitates achieving better winding quality and flexibility in routing. Retractable 4-Position wire routing guides to achieve high quality winding and routing.",
      "High performance multi-axes controller in stand-alone mode with multi-program memory and PC Interface.",
      "Flexible menu driven programming through Windows* based Graphical User Interface (external PC) and user defined operation sequencing coupled with a powerful set of intelligent functions for achieving complex winding configurations with exceptional ease."
    ],
    "sourceOptionalAccessories": [
      "Automatic core unloading unit",
      "Servo actuated finger type tooling",
      "Light Curtain with safety guard for operator safety",
      "Customized tooling"
    ],
    "specs": [
      {
        "label": "Number of Spindles",
        "values": {
          "Smart Winder ST 2T": "2"
        }
      },
      {
        "label": "Spindle Speed",
        "values": {
          "Smart Winder ST 2T": "1200 RPM"
        }
      },
      {
        "label": "Wire Size",
        "values": {
          "Smart Winder ST 2T": "0.4 mm - 1.2 mm Dia."
        }
      },
      {
        "label": "Core Diameter",
        "values": {
          "Smart Winder ST 2T": "75 mm to 200 mm"
        }
      },
      {
        "label": "Core Stack Height",
        "values": {
          "Smart Winder ST 2T": "10 mm to 50 mm"
        }
      },
      {
        "label": "Weight",
        "values": {
          "Smart Winder ST 2T": "900 Kg (Approx.)"
        }
      }
    ],
    "specNotes": [
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "flags": [
      "ST 1T shares the ST 2T datasheet.",
      "Some datasheet values were transcribed from the PDF image (mixed); verified against page renders.",
      "Datasheet: All spec values except Weight are missing from the PDF text layer; transcribed from the page image (220 dpi).",
      "Datasheet: Model name printed inconsistently: title 'ST - 2T' (spaced hyphen), table header 'Smart Winder ST 2T' (no hyphen), doc code 'ST 2T'.",
      "Datasheet: 'Windows*' carries an asterisk but no matching footnote is printed on the page."
    ]
  },
  {
    "slug": "needle-winder",
    "name": "Smart Winder Needle Winder",
    "category": "automatic-stator-winding",
    "group": "Needle Winders",
    "variants": [
      "Smart Winder ST-U",
      "Smart Winder IST-2"
    ],
    "image": "/images/machines/ev-motor/needle-winder.jpg",
    "sourceDescription": [
      "Needle Winding Machine Is a stand-alone winding machine designed specifically to wind stators that have stator poles facing radially inwards. The basic construction is such that the rotor assembly is enclosed by the stator i.e the rotor is positioned on the ID of the stator. The machine features 3 servo axes for precision wire, high dynamics and axes interpolation functionality via CNC for achieving complex, programmable winding patterns.",
      "Application: EV 2 wheeler mid-drive motor, Chassis mounted motor, Internal stator motor, In-flux motor, Automotive wiper/water pump motor, BLDC air-conditioner or air cooler motor, BLDC In-flux motor, BLDC mid-drive motor, BLDC water pump motor, steering wheel motor, generator coil winding, wind turbine generator coil winding,"
    ],
    "datasheet": {
      "file": "/datasheets/needle-winder.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/sator/Needle-Winder-Individual.pdf",
      "docCode": "B - Cat - Needle Winder-01-June-21"
    },
    "sourceTitle": "Smart Winder®",
    "sourceSubtitle": "Automatic Needle Winding Machines",
    "sourceFeatures": [
      "Completely Automatic Operations with Needle Type Winding Head (Single and Dual Station options), engineered to carry wire through the stator slots with high speeds.",
      "The machines are PLC controlled and deliver high level of accuracies with an AC Servo motors for each axis coupled with precise mechanics.",
      "Automatic core indexing driven by AC servo motor with infinitely programmable indexing angle to achieve different winding positions and wire routing paths.",
      "Coordinated movement of winding head, core indexer and head traverse to achieve very complex wire routing configurations with ease.",
      "Optimum combination of mechanical, pneumatic and electronic systems incorporated in the machine provide high performance coupled with reliable operations and simplicity in maintenance.",
      "Electronic wire tension controller under PLC control to achieve precise wire tension. The wire tension, being programmable for different stages of winding, facilitates better winding quality and flexibility in wire routing.",
      "Robust machine frame to dampen the vibrations & withstand large inertia generated during high speed winding."
    ],
    "sourceOptionalAccessories": [
      "Light Curtain with safety guard for operator safety",
      "Customized Tooling"
    ],
    "specs": [
      {
        "label": "No. of Stations",
        "values": {
          "Smart Winder ST-U": "1 No.",
          "Smart Winder IST-2": "2 Nos."
        }
      },
      {
        "label": "Component Type",
        "values": {
          "Smart Winder ST-U": "Multi-pole Stator (Internal and External Poles)",
          "Smart Winder IST-2": "Mult-pole Stator (Internal Poles)"
        }
      },
      {
        "label": "Wire Diameter",
        "values": {
          "Smart Winder ST-U": "0.7 to 2.0 mm",
          "Smart Winder IST-2": "0.5 to 1.2 mm"
        }
      },
      {
        "label": "No. of Strands",
        "values": {
          "Smart Winder ST-U": "Single",
          "Smart Winder IST-2": "Single"
        }
      },
      {
        "label": "Core Outer Diameter",
        "values": {
          "Smart Winder ST-U": "300 mm (max.)",
          "Smart Winder IST-2": "50 to 120 mm"
        }
      },
      {
        "label": "Core Inner Diameter",
        "values": {
          "Smart Winder ST-U": "20 mm",
          "Smart Winder IST-2": "20 to 50 mm"
        }
      },
      {
        "label": "Core Stack Height",
        "values": {
          "Smart Winder ST-U": "250 mm (max.)",
          "Smart Winder IST-2": "10 to 100 mm"
        }
      }
    ],
    "specNotes": [
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "oldUrl": "/needle-winding-machine/",
    "flags": [
      "Also listed under Motor Winding for EV as 'Needle Winder' (same datasheet, byte-identical PDF). Shown in both categories.",
      "Description taken from orphan SEO page /needle-winding-machine/.",
      "Datasheet: 'Mult-pole Stator (Internal Poles)' for IST-2 is printed with the typo 'Mult-pole' (ST-U column says 'Multi-pole'); transcribed as printed.",
      "Datasheet: Title on the datasheet is only 'Smart Winder®' with no model name; the file name says 'Universal Stator and Needle Winder' / 'Needle Winder' but those words do not appear as a title.",
      "Datasheet: Byte-for-byte identical duplicate of EV__Universal-Stator-and-Needle-Winder.pdf."
    ]
  },
  {
    "slug": "hv-series",
    "name": "Smart Winder HV Series",
    "category": "transformer-winding",
    "group": "Distribution Transformer",
    "variants": [
      "Smart Winder – HV 400",
      "Smart Winder – HV 600",
      "Smart Winder – HV 800",
      "Smart Winder – HV 1200",
      "Smart Winder – HV 1400",
      "Smart Winder – HV 1600"
    ],
    "image": "/images/machines/transformer/hv-800.jpg",
    "sourceDescription": [
      "HV Winding Machine with Full Width Interlayer Insulation",
      "These models are specifically designed to wind a wider range of HV coils for distribution transformers from 10 kVA to 5000 kVA Approx. with full width inter layer insulation.",
      "Rigid frame structure supports dynamic loads and vibration free winding. Servo closed control through pneumatic dancer for round conductor to achieve appropriate tension during winding at high speeds. There are different models to accommodate as per transformer ratings.",
      "Single or dual round wire and strips can be wound automatically on the machine. Inter layer insulation on this machine is with full width paper. This machine is more flexible to do a wide range of transformer ratings."
    ],
    "datasheet": {
      "file": "/datasheets/smart-winder-hv.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/tranfsormer/HV-Individual.pdf",
      "docCode": "Transformer-HV-01_Jun 21"
    },
    "sourceTitle": "Smart Winder® HV Series",
    "sourceSubtitle": "Semi Automatic Winding Machine for HV Coils",
    "sourceDatasheetDescription": [
      "The Smart Winder HV machine is designed & equipped to produce High Voltage Coils for the Distribution Transformers. This machine is built to automate certain critical processes during winding process & to feed inter layer full-width paper insulation for the coils with minimum interventions by the operator.",
      "A high performance multi-axes motion controller governs the motion of the spindle and traverse driven by asynchronous and synchronous servo motors respectively.",
      "Closed loop tension control with AC servo motor and dancer feedback delivers superior and consistent tension of conductor during winding. The inter-layer insulation paper is fed at precise tension with the help of Pneumatic Caliper Braking System.",
      "PLC Based control system enhances the productivity by precisely controlling the motion of both spindle and traverse and eliminates any operator intervention during winding, making it best suited for high volume production."
    ],
    "sourceFeatures": [
      "Closed loop servo tension control with dancer feedback mechanism for conductor.",
      "Air shaft mounted inter layer paper insulation feeders with constant tension control & tailstock support.",
      "Paper edge cutting arrangement for the full width insulation paper and edge fill paper feeder.",
      "Precise pneumatically operated tension control for the end fill tape.",
      "Adjustable Wire guide unit close to winding",
      "High performance PLC based control along with color touch-screen user interface."
    ],
    "specs": [
      {
        "section": "Coil",
        "label": "Length",
        "values": {
          "HV 400": "400 mm (max.)",
          "HV 600": "700 mm (max.)",
          "HV 800": "900 mm (max.)",
          "HV 1200": "1300 mm (max.)"
        }
      },
      {
        "section": "Coil",
        "label": "Winding Diameter",
        "values": {
          "HV 400": "400 mm (max.)",
          "HV 600": "500 mm (max.)",
          "HV 800": "700 mm (max.)",
          "HV 1200": "800 mm (max.)"
        }
      },
      {
        "section": "Coil",
        "label": "Swing Diameter",
        "values": {
          "HV 400": "450 mm (max.)",
          "HV 600": "600 mm (max.)",
          "HV 800": "800 mm (max.)",
          "HV 1200": "1000 mm (max.)"
        }
      },
      {
        "section": "Coil",
        "label": "Weight (LV + HV)",
        "values": {
          "HV 400": "50 Kgs. (max.)",
          "HV 600": "250 Kgs. (max.)",
          "HV 800": "500 Kgs. (max.)",
          "HV 1200": "800 Kgs. (max.)"
        }
      },
      {
        "section": "Conductor",
        "label": "No. of Round Conductors",
        "values": {
          "HV 400": "1",
          "HV 600": "1 or 2",
          "HV 800": "1 or 2",
          "HV 1200": "1 or 2"
        }
      },
      {
        "section": "Conductor",
        "label": "Round Wire Diameter (Cu)",
        "values": {
          "HV 400": "0.3 - 2.0 mm",
          "HV 600": "0.5 - 2.5 mm",
          "HV 800": "0.8 - 3.5 mm",
          "HV 1200": "1.2 - 4.0 mm"
        }
      },
      {
        "section": "Conductor",
        "label": "Round Wire Diameter (Al)",
        "values": {
          "HV 400": "0.5 - 2.5 mm",
          "HV 600": "0.8 - 3.0 mm",
          "HV 800": "1.0 - 4.0 mm",
          "HV 1200": "1.5 - 4.5 mm"
        }
      },
      {
        "section": "Conductor",
        "label": "Dual Round Wire Size (Cu / Al)",
        "values": {
          "HV 400": "N/A",
          "HV 600": "N/A",
          "HV 800": "2 x 3.0 mm (max.)",
          "HV 1200": "2 x 3.5 mm (max.)"
        }
      },
      {
        "section": "Conductor",
        "label": "No. of Strip Conductors",
        "values": {
          "HV 400": "N/A",
          "HV 600": "1",
          "HV 800": "1 or 2",
          "HV 1200": "1 or 2"
        }
      },
      {
        "section": "Conductor",
        "label": "Strip Wire Sizes (Cu / Al)",
        "values": {
          "HV 400": "N/A",
          "HV 600": "4 x 2 to 12 x 3 mm",
          "HV 800": "4 x 2 to 15 x 4 mm",
          "HV 1200": "4 x 2 to 15 x 5 mm"
        }
      },
      {
        "section": "Conductor",
        "label": "Double Strip Sizes (Cu / Al)",
        "values": {
          "HV 400": "N/A",
          "HV 600": "N/A",
          "HV 800": "75 Sq. mm (max.)",
          "HV 1200": "100 Sq. mm (max.)"
        }
      }
    ],
    "specNotes": [
      "Also available in customised Specifications"
    ],
    "completeness": "full",
    "oldUrl": "/hv-winding-machine/",
    "flags": [
      "HV 1400 and HV 1600 are listed on the site but the datasheet only covers HV 400 / 600 / 800 / 1200. No specs for 1400/1600.",
      "Datasheet: Text layer drifts the 'Dual Round Wire Size (Cu / Al)' and 'Strip Wire Sizes (Cu / Al)' labels one line from their values; alignment confirmed from image.",
      "Datasheet: Column headers spaced inconsistently ('Model : HV 400' vs 'Model :HV 800') — kept as printed.",
      "Datasheet: No Options / accessories section on this datasheet.",
      "Datasheet: Inconsistent with sister GLI sheet: HV 800/1200 'Dual Round Wire Size' is '2 x 3.0 mm' / '2 x 3.5 mm' here vs '2.0 x 3.0 mm' / '2.0 x 3.5 mm' on GLI; HV 600 'Double Strip Sizes' is N/A. Transcribed as printed."
    ]
  },
  {
    "slug": "gli-series",
    "name": "Smart Winder GLI Series",
    "category": "transformer-winding",
    "group": "Distribution Transformer",
    "variants": [
      "Smart Winder – GLI-600",
      "Smart Winder – GLI-800",
      "Smart Winder – GLI-1200",
      "Smart Winder – GLI-1600"
    ],
    "image": "/images/machines/transformer/gli.jpg",
    "gallery": [
      "/images/machines/transformer/gli-800.jpg"
    ],
    "sourceDescription": [
      "HV Winding Machine with Graded Interlayer Insulation",
      "These models are specifically designed to wind HV coils for distribution transformers using graded layer insulation from 63 kVA to 3500 kVA.",
      "Rigid frame structure supports dynamic loads and vibration free winding. Servo closed loop tension control through pneumatic dancer feedback for round conductor and paper strips helps to achieve appropriate tension during winding at high speeds. To cater wide range of prospects these models offer three different variants based on requirement and automation level.",
      "Single or dual round wire and strips can be wound automatically on the machine along with insulation in parallel. This machine is also suitable for higher volume production of single ratings."
    ],
    "datasheet": {
      "file": "/datasheets/smart-winder-gli.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/tranfsormer/GLI-Winding-Individual.pdf",
      "docCode": "Transformer- GLI-01-Jun 21"
    },
    "sourceTitle": "Smart Winder® GLI Series",
    "sourceSubtitle": "Graded Layer Winding Machine for HV Coil",
    "sourceFeatures": [
      "Automatic winding of distribution transformer HV coils with interlayer Insulation.",
      "Winding of conductors along with feeding of interlayer insulation & edge strips without any manual intervention.",
      "Insulation layers built in a graded profile with thickness varying in proportion to the voltage differential.",
      "Pneumatically operated collapsible mandrel & retractable tail-stock for easy component handling.",
      "High precision closed-loop servo tension controller for conductor and insulation strips.",
      "User-friendly programming and touch-screen based operations.",
      "Regenerative type drive system with common DC rail for winder & un-winder drives for lower power consumption.",
      "Provision for Wire Flatenning Unit as an optional attachment."
    ],
    "sourceOptionalAccessories": [
      "Dual Round Wire Winding",
      "Unload assist",
      "Wire flattening unit",
      "Strip De Reeler",
      "Full width paper De Reeler",
      "Customised Configurations"
    ],
    "specs": [
      {
        "section": "Coil",
        "label": "Length",
        "values": {
          "GLI-600": "700 mm (max.)",
          "GLI-800": "900 mm (max.)",
          "GLI-1200": "1300 mm (max.)"
        }
      },
      {
        "section": "Coil",
        "label": "Winding Diameter",
        "values": {
          "GLI-600": "500 mm (max.)",
          "GLI-800": "700 mm (max.)",
          "GLI-1200": "800 mm (max.)"
        }
      },
      {
        "section": "Coil",
        "label": "Swing Diameter",
        "values": {
          "GLI-600": "600 mm (max.)",
          "GLI-800": "800 mm (max.)",
          "GLI-1200": "1000 mm (max.)"
        }
      },
      {
        "section": "Coil",
        "label": "Weight (LV + HV)",
        "values": {
          "GLI-600": "250 Kgs. (max.)",
          "GLI-800": "500 Kgs. (max.)",
          "GLI-1200": "800 Kgs. (max.)"
        }
      },
      {
        "section": "Conductor",
        "label": "No. of Round Conductors",
        "values": {
          "GLI-600": "1",
          "GLI-800": "1 or 2",
          "GLI-1200": "1 or 2"
        }
      },
      {
        "section": "Conductor",
        "label": "Round Wire Diameter (Cu)",
        "values": {
          "GLI-600": "0.5 to 2.5 mm",
          "GLI-800": "0.8 to 3.5 mm",
          "GLI-1200": "1.2 to 4.0 mm"
        }
      },
      {
        "section": "Conductor",
        "label": "Round Wire Diameter (Al)",
        "values": {
          "GLI-600": "0.8 to 3.0 mm",
          "GLI-800": "1.0 to 4.0 mm",
          "GLI-1200": "1.5 to 4.5 mm"
        }
      },
      {
        "section": "Conductor",
        "label": "Dual Round Wire Size (Cu / Al)",
        "values": {
          "GLI-600": "N/A",
          "GLI-800": "2.0 x 3.0 mm (max.)",
          "GLI-1200": "2.0 x 3.5 mm (max.)"
        }
      },
      {
        "section": "Conductor",
        "label": "No. of Strip Conductors",
        "values": {
          "GLI-600": "1",
          "GLI-800": "1 or 2",
          "GLI-1200": "1 or 2"
        }
      },
      {
        "section": "Conductor",
        "label": "Strip Wire Sizes (Cu / Al)",
        "values": {
          "GLI-600": "4 x 2 to 12 x 3 mm",
          "GLI-800": "4 x 2 to 15 x 4 mm",
          "GLI-1200": "4 x 2 to 15 x 5 mm"
        }
      },
      {
        "section": "Conductor",
        "label": "Double Strip Sizes (Cu / Al)",
        "values": {
          "GLI-600": "N/A",
          "GLI-800": "75 Sq. mm (max.)",
          "GLI-1200": "100 Sq. mm (max.)"
        }
      }
    ],
    "specNotes": [
      "Benefits: Reduces winding cycle time, manual intervention & operator skill, improves consistency & quality.",
      "Benefits: Reduces insulation material significantly, since only minimum necessary thickness is provided at every position of each layer.",
      "Benefits: Reduces overall material consumption by 5 to 7% due to smaller coil dimensions.",
      "Benefits: Reduces stock materials by allowing fewer standard strip dimensions even for different coil widths.",
      "Diagram captions on page 2: 'Conventional Winding', 'Winding with Graded Insulation', 'Space Saving'.",
      "Page 2 header subtitle reads 'Graded Layer Winding Machine for HV Coils'.",
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "oldUrl": "/hv-winding-machine/",
    "flags": [
      "GLI-1600 is listed on the site but the datasheet only covers GLI-600 / 800 / 1200.",
      "Datasheet: The PDF has a 'Benefits:' list that has no field in the schema; recorded in notes with a 'Benefits: ' prefix.",
      "Datasheet: Cover subtitle 'for HV Coil' (singular) vs page-2 header 'for HV Coils' (plural).",
      "Datasheet: Feature text has typo 'Flatenning' (Options list spells it 'flattening'); transcribed as printed.",
      "Datasheet: Text layer drifts the 'Strip Wire Sizes (Cu / Al)' label one line from its values; alignment confirmed from image.",
      "Datasheet: Column headers spaced inconsistently ('Model : GLI-600' vs 'Model :GLI-1200') — kept as printed."
    ]
  },
  {
    "slug": "flv-series",
    "name": "Smart Winder FLV Series",
    "category": "transformer-winding",
    "group": "Distribution Transformer",
    "variants": [
      "Smart Winder – FLV 600",
      "Smart Winder – FLV 800",
      "Smart Winder – FLV 1200",
      "Smart Winder – FLV 1600"
    ],
    "image": "/images/machines/transformer/flv.jpg",
    "gallery": [
      "/images/machines/transformer/flv-800.jpg"
    ],
    "sourceDescription": [
      "LV Winding Machine with Full Width Interlayer Insulation",
      "Foil Winding machines are specifically designed to wind conductor foils of Cu or Al for LV coils of distribution transformers ranging from 200 kVA to 10000 kVA Approx.",
      "Rigid frame structure supports dynamic loads and vibration free winding. Accurate machined parts are assembled with proper alignment to provide consistent accuracies for a longer period. Multiple models are available to accommodate different foil widths to suit wide range of transformer ratings.",
      "Single or dual foils can be wound automatically on the machine with full width paper Inter layer insulation and edge strips. This machine is more flexible to do a wide range of transformer ratings."
    ],
    "datasheet": {
      "file": "/datasheets/smart-winder-flv.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/tranfsormer/FLV800-Individual.pdf",
      "docCode": "Transformer-Foil-01-Jun 21"
    },
    "sourceTitle": "Smart Winder® FLV",
    "sourceSubtitle": "Foil (LV Coil) Winding Machine",
    "sourceDatasheetDescription": [
      "The Foil winding machine is designed to wind a wide variety of LV Coils for Transformers using copper or aluminium foils.",
      "This machine is capable of winding large foil cross sections with high winding tensions and is designed to wind round & oval shaped coils. Insulation paper with precise tension control enables to wind insulation paper along with foil.",
      "Closed-loop tension control system for conductor foil allows very good dynamic response and wide control range. It also results in seam-less transition between winding and unwinding modes.",
      "The machine has an advanced, high efficiency, TIG welding unit which welds the bus bar / lead -out to the foil.",
      "A high performance multi-axes motion controller governs the motion of the spindle & traverse units driven by AC Induction & Servo motors respectively."
    ],
    "sourceFeatures": [
      "Robust steel structure, capable of supporting other functional units and to withstand the large forces generated during the winding of the coils.",
      "Swing-out tailstock for easy load & unload of coil.",
      "Pneumatically actuated coil pressing roller.",
      "Foil cutting position can be controlled through PLC and also through manual jog.",
      "Collapsible foil de-reeler with closed-loop tension control for dynamic response.",
      "Automatic foil edge de-burring & foil edge alignment.",
      "Air-shaft mounted Insulation Paper de- reelers and Insulation Edge Trimming mechanism.",
      "Flexible welding-gun on precision slide (servo motor driven) ensures excellent welding."
    ],
    "sourceOptionalAccessories": [
      "Automatic edge alignment for foil",
      "TIG Welding (Front / Middle)",
      "Chiller Unit",
      "Customised configurations"
    ],
    "specs": [
      {
        "section": "Unwinder [Foil]",
        "label": "Number of Foil",
        "values": {
          "FLV 600": "1",
          "FLV 800": "1 or 2",
          "FLV 1200": "1 or 2",
          "FLV 1600": "1 or 2"
        }
      },
      {
        "section": "Unwinder [Foil]",
        "label": "Width",
        "values": {
          "FLV 600": "200 - 600 mm",
          "FLV 800": "200 - 800 mm",
          "FLV 1200": "300 - 1200 mm",
          "FLV 1600": "200 - 800 mm"
        }
      },
      {
        "section": "Unwinder [Foil]",
        "label": "Foil Thickness (Cu)",
        "values": {
          "FLV 600": "0.3 - 2.0 mm",
          "FLV 800": "0.3 - 2.5 mm",
          "FLV 1200": "0.3 - 2.5 mm",
          "FLV 1600": "0.3 - 2.5"
        }
      },
      {
        "section": "Unwinder [Foil]",
        "label": "Foil Thickness (Al)",
        "values": {
          "FLV 600": "0.3 - 2.5 mm",
          "FLV 800": "0.3 - 2.5 mm",
          "FLV 1200": "0.3 - 3.0 mm",
          "FLV 1600": "0.3 - 3.0 mm"
        }
      },
      {
        "section": "Coil",
        "label": "Winding Diameter",
        "values": {
          "FLV 600": "150 - 400 mm",
          "FLV 800": "150 - 500 mm",
          "FLV 1200": "150 - 800 mm",
          "FLV 1600": "300 - 800 mm"
        }
      },
      {
        "section": "Coil",
        "label": "Swing Diameter",
        "values": {
          "FLV 600": "600 mm (max.)",
          "FLV 800": "800 mm (max.)",
          "FLV 1200": "900 mm (max.)",
          "FLV 1600": "1100 mm (max.)"
        }
      },
      {
        "section": "Coil",
        "label": "Weight",
        "values": {
          "FLV 600": "250 Kgs.",
          "FLV 800": "800 Kgs.",
          "FLV 1200": "2,000 Kgs.",
          "FLV 1600": "2,500 Kgs."
        }
      },
      {
        "section": "Welding",
        "label": "Type of Welding",
        "values": {
          "FLV 600": "TIG / Coldpress",
          "FLV 800": "TIG / Coldpress",
          "FLV 1200": "TIG / Coldpress",
          "FLV 1600": "TIG / Coldpress"
        }
      }
    ],
    "specNotes": [
      "Also available in customised Specifications",
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "oldUrl": "/lv-winding-machine/",
    "flags": [
      "Datasheet: Possible error inside the PDF: FLV 1600 Width is '200 - 800 mm' — narrower than FLV 1200 (300 - 1200 mm) and identical to FLV 800; transcribed as printed.",
      "Datasheet: FLV 1600 'Foil Thickness (Cu)' value '0.3 - 2.5' is printed without a unit (other cells have 'mm').",
      "Datasheet: Column headers spaced inconsistently: 'Model : FLV 600' / 'Model : FLV 800' vs 'Model :FLV 1200' / 'Model :FLV 1600' — kept as printed.",
      "Datasheet: File name says 'FLV800' but the datasheet covers FLV 600, 800, 1200 and 1600."
    ]
  },
  {
    "slug": "strip-winding-machine",
    "name": "Smart Winder SWM 250 Strip Winding Machine",
    "category": "transformer-winding",
    "group": "Distribution Transformer",
    "variants": [
      "SWM 250"
    ],
    "image": "/images/machines/transformer/strip-winding-machine.jpg",
    "sourceDescription": [],
    "datasheet": {
      "file": "/datasheets/strip-winding-machine-for-inverter-transformer.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/tranfsormer/Strip-Winding-machine-for-Inverter-Transformer.pdf",
      "docCode": "B-Cat Strip Winder-01 Oct’21"
    },
    "sourceTitle": "Smart Winder® SWM 250",
    "sourceSubtitle": "Strip Winding Machine for Inverter Transformer",
    "sourceFeatures": [
      "Strip Winding Machine SWM 250 is designed to wind square and rectangular conductors used in Inverter Transformers.",
      "Sturdy & robust structure with best utilization of floor space make the machine ergonomically better for higher productivity and longer life.",
      "High torque spindle coupled to AC geared motor, handles single and dual conductor at higher speeds.",
      "Pneumatically actuated pressing rollers with quick roller change over for various bobbin sizes helps in achieving compact winding and saves overall change over time.",
      "Intelligent stripe guide unit facilitates uniform winding of conductors and also enables comfortable handling space to operators for manual operations.",
      "De-reeler type tensioning through pneumatic caliper brake for uniform tension of conductors throughout the winding cycle.",
      "Tension release facility to facilitate easy anchoring of the conductor without fatigue to operators."
    ],
    "sourceOptionalAccessories": [
      "Online programming with touch screen using high performance CNC Control System.",
      "Power fail recovery system to eliminate rejection of coils.",
      "Online spindle & traverse movement through Joy stick."
    ],
    "specs": [
      {
        "label": "Swing Diameter",
        "values": {
          "SWM-250": "250 mm (max.)"
        }
      },
      {
        "label": "Winding Width",
        "values": {
          "SWM-250": "125 mm (max.)"
        }
      },
      {
        "label": "No. of Strips",
        "values": {
          "SWM-250": "2 (If Single Conductor - 65 Sq. mm; Dual Conductor - 32 Sq. mm)"
        }
      },
      {
        "section": "Conductor Size",
        "label": "Aluminium / Width",
        "values": {
          "SWM-250": "Width: 3 to 13 mm (max.)"
        }
      },
      {
        "section": "Conductor Size",
        "label": "Aluminium / Thickness",
        "values": {
          "SWM-250": "Thickness: upto 5 mm (max.)"
        }
      },
      {
        "section": "Conductor Size",
        "label": "Copper / Width",
        "values": {
          "SWM-250": "Width: 3 to 10 mm (max.)"
        }
      },
      {
        "section": "Conductor Size",
        "label": "Copper / Thickness",
        "values": {
          "SWM-250": "Thickness: upto 3.5 mm (max.)"
        }
      },
      {
        "label": "Spindle Motor",
        "values": {
          "SWM-250": "AC Geared Motor"
        }
      },
      {
        "label": "Pressing Roller",
        "values": {
          "SWM-250": "Pneumatically actuated"
        }
      },
      {
        "label": "Tension Control De-reeler",
        "values": {
          "SWM-250": "Pneumatic caliper brake"
        }
      },
      {
        "label": "Controller",
        "values": {
          "SWM-250": "PLC"
        }
      },
      {
        "label": "Traverse",
        "values": {
          "SWM-250": "Servo  Driven"
        }
      },
      {
        "label": "Power",
        "values": {
          "SWM-250": "5 kW ,415V AC, 3 Phase, 50Hz"
        }
      }
    ],
    "specNotes": [
      "Optional accessories are printed under the heading \"Options\".",
      "'Conductor Size' is a merged row-header cell spanning Aluminium and Copper sub-rows; recorded with section 'Conductor Size' and labels 'Aluminium / Width' etc. (the cell text itself begins 'Width:' / 'Thickness:')."
    ],
    "completeness": "full",
    "flags": [
      "Old site lists it under 'Distribution Transformer' but the datasheet title is 'Strip Winding Machine for Inverter Transformer'. Which group?",
      "Datasheet: Spec table has an empty, unlabelled third column (header cell blank, all cells blank) to the right of 'Model : SWM-250'.",
      "Datasheet: 'Conductor Size' row-header cell is merged/spans four sub-rows (Aluminium Width/Thickness, Copper Width/Thickness).",
      "Datasheet: 'No. of Strips' value is printed over three lines: '2' / '(If Single Conductor - 65 Sq. mm;' / 'Dual Conductor - 32 Sq. mm)'; joined with spaces.",
      "Datasheet: Traverse value has a double space 'Servo  Driven' and Power has odd spacing '5 kW ,415V AC' — kept as printed.",
      "Datasheet: Model name printed as 'SWM 250' (title/features) and 'SWM-250' (table header).",
      "Datasheet: Feature says 'Intelligent stripe guide unit' (likely 'strip'); transcribed as printed."
    ]
  },
  {
    "slug": "pt-vt-emvt-hv-machine",
    "name": "PT / VT / EMVT — HV Machine",
    "category": "transformer-winding",
    "group": "PT / VT / EMVT",
    "variants": [],
    "image": "/images/machines/transformer/pt-vt-emvt-hv-machine.jpg",
    "sourceDescription": [],
    "completeness": "partial",
    "flags": [
      "Image + caption only on old site (link '#'). No description, specs or model number."
    ]
  },
  {
    "slug": "pt-vt-emvt-lv-machine",
    "name": "PT / VT / EMVT — LV Machine",
    "category": "transformer-winding",
    "group": "PT / VT / EMVT",
    "variants": [],
    "image": "/images/machines/transformer/pt-vt-emvt-lv-machine.jpg",
    "sourceDescription": [],
    "completeness": "partial",
    "flags": [
      "Image + caption only on old site (link '#'). No description, specs or model number."
    ]
  },
  {
    "slug": "smart-winder-600s",
    "name": "Smart Winder 600-S Traction Transformer Machine",
    "category": "transformer-winding",
    "group": "Customized Machines",
    "variants": [
      "Smart Winder – 600S"
    ],
    "image": "/images/machines/transformer/traction-transformer-machine.jpg",
    "sourceDescription": [],
    "datasheet": {
      "file": "/datasheets/smart-winder-600s.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/tranfsormer/600-S-Individual.pdf",
      "docCode": "C - Cat - 600S-01-June 21"
    },
    "sourceTitle": "Smart Winder® 600-S",
    "sourceSubtitle": "Traction Transformer Winding Machine",
    "sourceDatasheetDescription": [
      "The machine is designed and equipped to produce high and low voltage coils for power transformers . This machine is built to automate the winding process using either strip or round conductors & to carry out layer insulation / end filling of the coils with minimal intervention from the operator’s part.",
      "A high performance multi-axes motion controller governs the motion of the spindle & traverse units driven by AC Induction & Servo motors respectively.",
      "Tail stock can move forward and backward, fitted with a linear rack & pinion arrangement driven by AC motor.",
      "Equipped with two synchronous wire guides, it is possible to work on two totally independent coils at the same time, thus considerably reducing the time of manufacturing of the transformer."
    ],
    "sourceFeatures": [
      "Cylindrical/ rectangular winding",
      "End filling arrangement",
      "Programmable controls",
      "Motorised tail stock (with geared brake motor)",
      "Motorized de-coiler for strips/ foils"
    ],
    "specs": [
      {
        "label": "Winding Diameter",
        "values": {
          "Smart Winder 600-S": "800 mm (Max)"
        }
      },
      {
        "label": "Winding Width",
        "values": {
          "Smart Winder 600-S": "1000 mm (Max)"
        }
      },
      {
        "label": "Coil Weight",
        "values": {
          "Smart Winder 600-S": "1500 Kgs (Max) including mandrel"
        }
      },
      {
        "label": "Centre Height",
        "values": {
          "Smart Winder 600-S": "900 mm (from ground level)"
        }
      },
      {
        "label": "Tail Stock",
        "values": {
          "Smart Winder 600-S": "Motorised adjustment with geared brake motor"
        }
      },
      {
        "label": "No. of Spindles",
        "values": {
          "Smart Winder 600-S": "One"
        }
      },
      {
        "label": "Spindle Speed",
        "values": {
          "Smart Winder 600-S": "0 -160 RPM"
        }
      },
      {
        "label": "Spindle Torque",
        "values": {
          "Smart Winder 600-S": "1200 Nm (Max)"
        }
      },
      {
        "label": "Spindle Drive",
        "values": {
          "Smart Winder 600-S": "AC Motor with Helical reduction gear box & brake. Closed loop vector drive with encoder feedback."
        }
      },
      {
        "label": "Air Supply",
        "values": {
          "Smart Winder 600-S": "5 Bar"
        }
      },
      {
        "label": "Power supply",
        "values": {
          "Smart Winder 600-S": "20 kW, 415 V AC, 3 Phase, 50Hz."
        }
      },
      {
        "label": "Floor Area (W x L x H)",
        "values": {
          "Smart Winder 600-S": "2700 x 4500 x 2800 mm (Without de-reeler)"
        }
      },
      {
        "label": "Machine Weight",
        "values": {
          "Smart Winder 600-S": "10000 Kgs (Approx)"
        }
      },
      {
        "label": "Control System",
        "values": {
          "Smart Winder 600-S": "High performance multi axes motion control & modular servo drives"
        }
      },
      {
        "section": "6 Round Conductors each of:",
        "label": "Wire Size / Round",
        "values": {
          "Smart Winder 600-S": "Ø  1.5 - 4 mm"
        }
      },
      {
        "section": "6 Round Conductors each of:",
        "label": "Wire Size / Rectangular",
        "values": {
          "Smart Winder 600-S": "3 x 1 mm  to 12 x 5 mm"
        }
      },
      {
        "section": "6 Round Conductors each of:",
        "label": "Wire Size / CTC",
        "values": {
          "Smart Winder 600-S": "6 x 4 mm  to 15 x 15 mm"
        }
      },
      {
        "label": "Conductor Spools / Weight",
        "values": {
          "Smart Winder 600-S": "600 Kgs  (Max)"
        }
      },
      {
        "label": "Conductor Spools / OD",
        "values": {
          "Smart Winder 600-S": "650 mm  (Max)"
        }
      },
      {
        "label": "Conductor Spools / ID",
        "values": {
          "Smart Winder 600-S": "75 mm"
        }
      },
      {
        "label": "Conductor Spools / Width",
        "values": {
          "Smart Winder 600-S": "650 mm (Max)"
        }
      },
      {
        "label": "Conductor Tension",
        "values": {
          "Smart Winder 600-S": "320 N (Max) control by AC servo motor"
        }
      },
      {
        "label": "Conductor De-reeler",
        "values": {
          "Smart Winder 600-S": "Common stand for 6 spools mounted on rails with motorised movement to track wire guide axis"
        }
      },
      {
        "label": "Conductor Guides",
        "values": {
          "Smart Winder 600-S": "2 sets driven by independent servo motor"
        }
      },
      {
        "label": "End Fill Guides",
        "values": {
          "Smart Winder 600-S": "2 sets driven by independent servo motor"
        }
      },
      {
        "label": "Insulation",
        "values": {
          "Smart Winder 600-S": "Simple holder for 2 Spools (W/o Brake)"
        }
      },
      {
        "label": "Insulation / Weight",
        "values": {
          "Smart Winder 600-S": "200 Kgs"
        }
      },
      {
        "label": "Insulation / OD",
        "values": {
          "Smart Winder 600-S": "540 mm (Max)"
        }
      },
      {
        "label": "Insulation / ID",
        "values": {
          "Smart Winder 600-S": "75 mm"
        }
      },
      {
        "label": "Insulation / Width",
        "values": {
          "Smart Winder 600-S": "1100 mm."
        }
      }
    ],
    "specNotes": [
      "Spec. subject to change without notice.",
      "Page 2 also has a captioned photo 'De-Reeler Carriage'.",
      "Spec table is a two-column 'Label : value' list, not a model grid; leading ': ' separators dropped. Sub-items printed indented under a parent label (Wire Size, Conductor Spools, Insulation) are recorded as 'Parent / Sub-item' labels; the ' - ' / ' : ' between sub-item and value is dropped."
    ],
    "completeness": "full",
    "flags": [
      "Datasheet: Heading '6 Round Conductors each of:' is printed above the right-hand column; it is unclear whether it applies only to Wire Size (which also lists Rectangular and CTC conductors) or to the whole right column; assigned as section for the three Wire Size rows only.",
      "Datasheet: Contradiction inside the PDF: heading says '6 Round Conductors' but Wire Size also lists Rectangular and CTC sizes.",
      "Datasheet: Insulation sub-rows (Weight 200 Kgs, OD, ID, Width) are printed indented under 'Insulation' without a label of their own — presumably insulation spool data; not confirmed by the PDF.",
      "Datasheet: Model name '600-S' appears only in the title; doc code reads '600S'. No column header — models field uses 'Smart Winder 600-S' from the title.",
      "Datasheet: Double spaces inside some values are as printed (e.g. '3 x 1 mm  to 12 x 5 mm', '600 Kgs  (Max)').",
      "Datasheet: Description contains a stray space before a full stop ('power transformers .') as printed."
    ]
  },
  {
    "slug": "excel-1500",
    "name": "Smart Winder Excel 1500",
    "category": "transformer-winding",
    "group": "Customized Machines",
    "variants": [
      "Smart Winder – Excel 1500"
    ],
    "sourceDescription": [],
    "datasheet": {
      "file": "/datasheets/smart-winder-excel-1500.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/tranfsormer/Excel-1500-individual.pdf",
      "docCode": "B - Cat -1500-01-June 21"
    },
    "sourceTitle": "Smart Winder® Excel 1500",
    "sourceSubtitle": "Transformer Winding Machine",
    "sourceDatasheetDescription": [
      "The Smart Winder Excel 1500 is capable of producing of large coils such as distribution, capable of handling round/strip type conductors.",
      "A high performance PLC operated system governs the motion of spindle & traverse driven by AC Induction & Servo & Servo Motor respectively.",
      "Tail stock with pneumatic arrangement is provided."
    ],
    "sourceFeatures": [
      "Closed loop spindle drive with high dynamic 1/100th turn positioning",
      "Computer controlled wire guide with servo motor, ball screw for excellent flexibility & high accuracy",
      "High performance PLC based control with menu driven programing",
      "Color touch screen user interface",
      "Remote diagnostic & maintenance facility",
      "PC & USB interface for transfer / archival of winding programs.",
      "Manual over ride control"
    ],
    "specs": [
      {
        "label": "Winding Diameter",
        "values": {
          "Smart Winder Excel 1500": "500 mm (max)"
        }
      },
      {
        "label": "Winding Width",
        "values": {
          "Smart Winder Excel 1500": "600 mm (max.)"
        }
      },
      {
        "label": "Wire Dia",
        "values": {
          "Smart Winder Excel 1500": "5 mm (max.)"
        }
      },
      {
        "label": "Coil Weight",
        "values": {
          "Smart Winder Excel 1500": "250 Kgs (max) including mandrel"
        }
      },
      {
        "label": "Centre Height",
        "values": {
          "Smart Winder Excel 1500": "250 mm (from ground level)"
        }
      },
      {
        "label": "Tail Stock",
        "values": {
          "Smart Winder Excel 1500": "Pneumatic Operated."
        }
      },
      {
        "label": "No. of Spindles",
        "values": {
          "Smart Winder Excel 1500": "One"
        }
      },
      {
        "label": "Spindle Speed",
        "values": {
          "Smart Winder Excel 1500": "0 -2000 RPM"
        }
      },
      {
        "label": "Spindle Torque",
        "values": {
          "Smart Winder Excel 1500": "60 Nm (max) @ 475 rpm"
        }
      },
      {
        "label": "Spindle Drive",
        "values": {
          "Smart Winder Excel 1500": "Closed loop motor driven"
        }
      },
      {
        "label": "Air Supply",
        "values": {
          "Smart Winder Excel 1500": "5 Bar"
        }
      },
      {
        "label": "Power supply",
        "values": {
          "Smart Winder Excel 1500": "230 V AC, 3 Phase, 50Hz.,"
        }
      },
      {
        "label": "Dimensions (W x L x H)",
        "values": {
          "Smart Winder Excel 1500": "1400 x 650 x 1700 mm."
        }
      },
      {
        "label": "Machine Weight",
        "values": {
          "Smart Winder Excel 1500": "500 Kgs. (Approximately)"
        }
      },
      {
        "label": "Control System",
        "values": {
          "Smart Winder Excel 1500": "PLC based"
        }
      },
      {
        "label": "Spindle Motor",
        "values": {
          "Smart Winder Excel 1500": "AC Induction Motor"
        }
      },
      {
        "label": "Traverse Motor",
        "values": {
          "Smart Winder Excel 1500": "AC Servo"
        }
      },
      {
        "label": "Traverse Speed",
        "values": {
          "Smart Winder Excel 1500": "0 to 250 mm/sec"
        }
      },
      {
        "label": "Traverse Resolution",
        "values": {
          "Smart Winder Excel 1500": "1 micrometer"
        }
      },
      {
        "label": "Component Loading Height",
        "values": {
          "Smart Winder Excel 1500": "1200 mm"
        }
      },
      {
        "label": "Speed Control",
        "values": {
          "Smart Winder Excel 1500": "Manual Foot pedal control (optional)"
        }
      },
      {
        "label": "Safety Guard",
        "values": {
          "Smart Winder Excel 1500": "Manual Operated (Optional)"
        }
      }
    ],
    "specNotes": [
      "Spec table is a two-column 'Label : value' list with no model column; leading ': ' separators dropped; models field uses the title model name."
    ],
    "completeness": "partial",
    "flags": [
      "Listed under 'Choose by Model' only; no tile/image on old site. Datasheet (image-only PDF) has a photo that could be extracted.",
      "Some datasheet values were transcribed from the PDF image (image); verified against page renders.",
      "Datasheet: PDF has no usable text layer (only the doc code is text); title, description, features and entire spec table transcribed from page images verified at 200–220 dpi.",
      "Datasheet: Label 'Component Loading Height' is printed across two lines ('Component Loading' / 'Height'), with the value on the second line; treated as one label.",
      "Datasheet: Description has a doubled phrase 'AC Induction & Servo & Servo Motor' and the wording 'capable of producing of large coils such as distribution' — as printed.",
      "Datasheet: Power supply value ends with stray punctuation '50Hz.,' and states '230 V AC, 3 Phase' — as printed (230 V with 3 phase is unusual; not verified).",
      "Datasheet: Inconsistent capitalisation of '(max)' / '(max.)' / '(optional)' / '(Optional)' within the table — as printed."
    ]
  },
  {
    "slug": "core-taping-machine",
    "name": "Core Taping Machine",
    "category": "transformer-winding",
    "group": "Customized Machines",
    "variants": [],
    "image": "/images/machines/transformer/core-taping-machine.jpg",
    "sourceDescription": [],
    "completeness": "partial",
    "flags": [
      "Image + caption only. No description or specs."
    ]
  },
  {
    "slug": "mandrel-preparation-machine",
    "name": "Mandrel Preparation Machine",
    "category": "transformer-winding",
    "group": "Customized Machines",
    "variants": [],
    "image": "/images/machines/transformer/mandrel-preparation-machine.jpg",
    "sourceDescription": [],
    "completeness": "partial",
    "flags": [
      "Image + caption only. No description or specs."
    ]
  },
  {
    "slug": "gc-100",
    "name": "Smart Winder GC 100",
    "category": "capacitor-winding",
    "group": "Grading Capacitor (GC)",
    "variants": [
      "Automatic – GC 100"
    ],
    "image": "/images/machines/capacitor/gc-100.jpg",
    "sourceDescription": [
      "Automatic Grading Capacitor (GC) Winding Machine",
      "Automatic Grading Capacitor (GC) Winding Machine is designed to wind Extended foil type elements used in HV Circuit breakers and Coupling Capacitors.",
      "The optimum combination of mechanical, pneumatic and electronic systems incorporated in the machine provides high performance coupled with reliable operation and simplicity in maintenance.",
      "By utilising the latest technology, materials & manufacturing techniques, the machine offers several features such as high productivity, repeat accuracy, reliability etc."
    ],
    "datasheet": {
      "file": "/datasheets/gc-100.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/capactor/GC-100-Individual.pdf",
      "docCode": "H-Cat-GC100-01-June’21"
    },
    "sourceTitle": "Smart Winder®",
    "sourceSubtitle": "Automatic Grading Capacitor Winding Machine (Tabless type)",
    "sourceDatasheetDescription": [
      "Automatic Grading Capacitor (GC) Winding Machine is designed to wind Extended foil type elements used in HV Circuit breakers and Coupling Capacitors.",
      "The optimum combination of mechanical, pneumatic and electronic systems incorporated in the machine provides high performance coupled with reliable operation and simplicity in maintenance.",
      "By utilising the latest technology, materials and manufacturing techniques, the machine offers several features such as high productivity, repeat accuracy, reliability etc."
    ],
    "sourceFeatures": [
      "Closed loop servo tension control for film and foil spools give uniform tension, resulting in high quality winding and higher productivity.",
      "Automatic threading and unloading using collapsible-type mandrel eliminates manual operation and gives good repeatability and higher productivity.",
      "Automatic foil cut for both foils eliminates manual intervention during winding, resulting in higher productivity and consistency.",
      "Programmable end position of Foil and Di-electric ensures perfect alignment between elements.",
      "Material exhaust sensing and Smart-detect system to judge adequacy of material available on the spool at the beginning of each cycle reduces material wastage.",
      "Integrated Dry-element tester with automatic transfer and sorting of wound elements, eliminates manual handling of delicate elements ensuring better quality."
    ],
    "sourceOptionalAccessories": [
      "Capacitance measuring unit and data logging",
      "Automatic Edge Alignment",
      "Full Machine Guarding with [CE mark] and [CSA mark] Certification"
    ],
    "specs": [
      {
        "label": "Number of Feeders",
        "values": {
          "GC 100": "Film 6; Foil 2"
        }
      },
      {
        "label": "Width of the Foil",
        "values": {
          "GC 100": "40 mm to 90 mm"
        }
      },
      {
        "label": "Width of the Dielectric",
        "values": {
          "GC 100": "50 mm to 100 mm"
        }
      },
      {
        "label": "Thickness of Foil",
        "values": {
          "GC 100": "5 μ to 8 μ"
        }
      },
      {
        "label": "Thickness of Dielectric",
        "values": {
          "GC 100": "9 μ to 18 μ"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Testing Voltage",
        "values": {
          "GC 100": "0 to 7 kV (Programmable)"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Element Thickness",
        "values": {
          "GC 100": "6 mm to 15 mm"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Element Length",
        "values": {
          "GC 100": "50 mm to 100 mm"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Controller",
        "values": {
          "GC 100": "PLC"
        }
      }
    ],
    "specNotes": [
      "Page 2 header reads 'GC-100 | Automatic Grading Capacitor Winding Machine (Tabless type)'.",
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "oldUrl": "/automatic-grading-capacitor-winding-machine/",
    "flags": [
      "Datasheet: Text layer drifts 'Element Thickness' and 'Controller' labels one line from their values; alignment confirmed from page image.",
      "Datasheet: 'Controller' row is printed under the 'Dry Element Testing and Sorting' sub-heading; it may be a general machine spec rather than part of that section.",
      "Datasheet: Option 'Full Machine Guarding with ... and ... Certification' contains two certification logos instead of text (CE mark and CSA mark, identified from the image); rendered as [CE mark] / [CSA mark] placeholders."
    ]
  },
  {
    "slug": "gc-120",
    "name": "Smart Winder GC 120 Auto Line",
    "category": "capacitor-winding",
    "group": "Grading Capacitor (GC)",
    "variants": [
      "Automatic – GC 120"
    ],
    "image": "/images/machines/capacitor/gc-120-auto-line.jpg",
    "sourceDescription": [],
    "datasheet": {
      "file": "/datasheets/gc-120.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/capactor/GC-120-Individual.pdf",
      "docCode": "H - Cat - GC Capacitor-June’21"
    },
    "sourceTitle": "Smart Winder®",
    "sourceSubtitle": "Automatic Grading Capacitor Winding Machine with Ultrasonic Welding of Foils and Stacking",
    "sourceDatasheetDescription": [
      "Automatic Grading Capacitor Winding Machine (GC 120) is integrated with a complete auto line which constitutes of winding of elements, welding elements and automatic stacking of elements as a single comprehensive solution.",
      "Automatic Grading Capacitor Winding Machine (GC 120) is designed for winding of elements (extended foil type) used in HV Circuit Breakers and Coupling Capacitors.",
      "Wound capacitor elements are automatically extracted, flattened and transferred to a high voltage tester for dry stage testing and sorting.",
      "The tested elements are then automatically transferred to Welding station where the two ends are separated by vacuum suction. One end of the first element is stitched with a pair of TABS while the other end is welded to the subsequent element and the last element is again stitched with a pair of TABS.",
      "Pre-set of Elements after welded is automatically stacked in a Stacker.",
      "The winding machine, welding and assembly station with Stacker as single comprehensive solution.",
      "The machine is controlled by PLC along with a touch panel for ease of operation."
    ],
    "sourceFeatures": [
      "Closed loop electronic tension control for film and foil spools give uniform tension, resulting in high quality winding & higher productivity.",
      "Automatic threading and unloading using collapsible-type mandrel eliminates manual operation and gives good repeatability and enhanced productivity.",
      "Programmable dielectric length and foil positions.",
      "Material exhaust sensors reduces wastage.",
      "Automatic Welding of foils and stacking of elements eliminates manual intervention resulting in faster turn arounds and consistency.",
      "Robust welded steel structure accurately machined and finished for mounting of various parts ensures perfect alignment of rollers, feeders and sub-assemblies with reference to the winding mandrel."
    ],
    "sourceOptionalAccessories": [
      "Capacitance measuring unit and data logging",
      "Automatic Edge Alignment",
      "Full Machine Guarding with [CE mark] and [CSA mark] Certification"
    ],
    "specs": [
      {
        "label": "Number of Feeders",
        "values": {
          "GC 120": "Film 6; Foil 2"
        }
      },
      {
        "label": "Width of the Foil",
        "values": {
          "GC 120": "40 mm to 110 mm"
        }
      },
      {
        "label": "Width of the Dielectric",
        "values": {
          "GC 120": "50 mm to 120 mm"
        }
      },
      {
        "label": "Thickness of Foil",
        "values": {
          "GC 120": "5 μ to 8 μ"
        }
      },
      {
        "label": "Thickness of Dielectric",
        "values": {
          "GC 120": "9 μ to 18 μ"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Testing Voltage",
        "values": {
          "GC 120": "0 to 7 kV (Programmable)"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Element Thickness",
        "values": {
          "GC 120": "6 mm to 15 mm (Programmable)"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Element Length",
        "values": {
          "GC 120": "50 mm to 120 mm"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Controller",
        "values": {
          "GC 120": "PLC"
        }
      },
      {
        "section": "Element Welding and Stacking",
        "label": "Lead TAB Width",
        "values": {
          "GC 120": "25 mm"
        }
      },
      {
        "section": "Element Welding and Stacking",
        "label": "Lead TAB Thickness",
        "values": {
          "GC 120": "0.1 mm"
        }
      },
      {
        "section": "Element Welding and Stacking",
        "label": "Lead TAB Length",
        "values": {
          "GC 120": "60 mm to 100 mm (Strip stacked in magazine)"
        }
      },
      {
        "section": "Element Welding and Stacking",
        "label": "Stack Width",
        "values": {
          "GC 120": "50 mm to 120 mm"
        }
      },
      {
        "section": "Element Welding and Stacking",
        "label": "Stack Length",
        "values": {
          "GC 120": "50 mm to 120 mm"
        }
      },
      {
        "section": "Element Welding and Stacking",
        "label": "Stack Height",
        "values": {
          "GC 120": "300 mm to 1000 mm"
        }
      }
    ],
    "specNotes": [
      "Page 2 header reads 'GC-120 | Automatic GC Winding Machine with Ultrasonic Welding of Foils & Stacking'.",
      "Cover photo captions: 'Auto Line conveyor with welding', 'Element stacker unit'.",
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "flags": [
      "Datasheet: Cover subtitle ('...Grading Capacitor... Foils and Stacking') differs from page-2 header ('...GC... Foils & Stacking').",
      "Datasheet: 'Controller' row is printed under the 'Dry Element Testing and Sorting' sub-heading; it may be a general machine spec rather than part of that section.",
      "Datasheet: Option 'Full Machine Guarding with ... and ... Certification' contains two certification logos instead of text (CE mark and CSA mark, identified from the image); rendered as [CE mark] / [CSA mark] placeholders."
    ]
  },
  {
    "slug": "gc-cvt",
    "name": "Smart Winder GC CVT",
    "category": "capacitor-winding",
    "group": "Grading Capacitor (GC)",
    "variants": [
      "Automatic – GC/CVT"
    ],
    "sourceDescription": [],
    "datasheet": {
      "file": "/datasheets/gc-cvt.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/capactor/GC-CVT-Individual.pdf",
      "docCode": "H-Cat-GC-CVT-01-June’21"
    },
    "sourceTitle": "Smart Winder®",
    "sourceSubtitle": "Automatic GC Winding Machine with Automatic Tab Insertion",
    "sourceDatasheetDescription": [
      "Automatic GC-CVT (Combo) Winding Machine is designed to wind elements of both Extended foil type and Tab type used in Power systems as Coupling Capacitors and Instrument Transformers for metering purpose.",
      "The optimum combination of mechanical, pneumatic and electronic systems incorporated in the machine provides high performance coupled with reliable operation and simplicity in maintenance.",
      "By utilising the latest technology, materials and manufacturing techniques, the machine offers several features such as high productivity, repeat accuracy, reliability, etc."
    ],
    "sourceFeatures": [
      "Closed loop servo tension control for film and foil spools give uniform tension, resulting in high quality winding and higher productivity.",
      "Automatic threading and unloading using collapsible-type mandrel eliminates manual operation and gives good repeatability and higher productivity.",
      "Automatic foil cut for both foils eliminates manual intervention during winding, resulting in higher productivity and consistency.",
      "Programmable end position of Foil and Di-electric ensures perfect alignment between elements.",
      "Automatic insertion of pre-stitched Tabs with programmable position ensures perfect alignment of Tabs with respect to Element.",
      "Material exhaust sensing and Smart-detect system to judge adequacy of material available on the spool at the beginning of each cycle reduces material wastage.",
      "Integrated Dry-element tester with automatic transfer and sorting of wound elements, eliminates manual handling of delicate elements ensuring better quality."
    ],
    "sourceOptionalAccessories": [
      "Capacitance measuring unit and data logging",
      "Automatic Edge Alignment",
      "Full Machine Guarding with [CE mark] and [CSA mark] Certification"
    ],
    "specs": [
      {
        "label": "Number of Feeders",
        "values": {
          "GC CVT": "Film 6; Foil 2; Tab 2"
        }
      },
      {
        "label": "Width of the Foil",
        "values": {
          "GC CVT": "50 mm to 190 mm"
        }
      },
      {
        "label": "Width of the Dielectric",
        "values": {
          "GC CVT": "60 mm to 200 mm"
        }
      },
      {
        "label": "Thickness of Foil",
        "values": {
          "GC CVT": "5 μ to 10 μ"
        }
      },
      {
        "label": "Thickness of Dielectric",
        "values": {
          "GC CVT": "9 μ to 18 μ"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Testing Voltage",
        "values": {
          "GC CVT": "0 to 7 kV (Programmable)"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Element Thickness",
        "values": {
          "GC CVT": "8 mm to 25 mm"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Element Length",
        "values": {
          "GC CVT": "60 mm to 200 mm"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Controller",
        "values": {
          "GC CVT": "PLC"
        }
      }
    ],
    "specNotes": [
      "Page 2 header reads 'GC CVT | Automatic GC Winding Machine with Automatic Tab Insertion'.",
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "partial",
    "flags": [
      "Listed under 'Choose by Model' only; no tile/image on old site. Datasheet has a photo that could be extracted.",
      "Datasheet: Text layer drifts 'Width of the Dielectric' and 'Thickness of Dielectric' labels one line from their values; alignment confirmed from page image.",
      "Datasheet: 'Controller' row is printed under the 'Dry Element Testing and Sorting' sub-heading; it may be a general machine spec rather than part of that section.",
      "Datasheet: Option 'Full Machine Guarding with ... and ... Certification' contains two certification logos instead of text (CE mark and CSA mark, identified from the image); rendered as [CE mark] / [CSA mark] placeholders."
    ]
  },
  {
    "slug": "cvt-200i",
    "name": "Smart Winder CVT 200i",
    "category": "capacitor-winding",
    "group": "CVT (Capacitor Voltage Transformer)",
    "variants": [
      "Automatic – CVT 200i"
    ],
    "image": "/images/machines/capacitor/cvt-200i.jpg",
    "sourceDescription": [
      "Automatic CVT Winding Machine is designed to wind Tab type elements used in Power systems as Instrument Transformers for metering purpose",
      "The optimum combination of mechanical, pneumatic and electronic systems incorporated in the machine provides high performance coupled with reliable operation and simplicity in maintenance.",
      "By utilising the latest technology, materials and manufacturing techniques, the machine offers several features such as high productivity, repeat accuracy, reliability, etc."
    ],
    "datasheet": {
      "file": "/datasheets/cvt-200i.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/capactor/CVT-Individual.pdf",
      "docCode": "H-Cat-CVT200-01-June’2021"
    },
    "sourceTitle": "Smart Winder®",
    "sourceSubtitle": "Automatic CVT Winding Machine (Tab type)",
    "sourceDatasheetDescription": [
      "Automatic CVT Winding Machine is designed to wind Tab type elements used in Power systems as Instrument Transformers for metering purpose.",
      "The optimum combination of mechanical, pneumatic and electronic systems incorporated in the machine provides high performance coupled with reliable operation and simplicity in maintenance.",
      "By utilising the latest technology, materials and manufacturing techniques, the machine offers several features such as high productivity, repeat accuracy, reliability, etc."
    ],
    "sourceFeatures": [
      "Closed loop servo tension control for film and foil spools give uniform tension, resulting in high quality winding and higher productivity.",
      "Automatic threading and unloading using collapsible-type mandrel eliminates manual operation and gives good repeatability and higher productivity.",
      "Dual Mandrel (Indexing Type), results in shorter winding cycle time and thus leading to higher productivity.",
      "Automatic foil cut for both foils eliminates manual intervention during winding, resulting in higher productivity &amp; consistency.",
      "Automatic insertion of pre-stitched Tabs with programmable position ensures perfect alignment of Tabs with respect to Element.",
      "Material exhaust sensing and Smart-detect system to judge adequacy of material available on the spool at the beginning of each cycle reduces material wastage.",
      "Integrated Dry-element tester with automatic transfer and sorting of wound elements, eliminates manual handling of delicate elements ensuring better quality."
    ],
    "sourceOptionalAccessories": [
      "Capacitance measuring unit and data logging",
      "Automatic Edge Alignment",
      "Full Machine Guarding with [CE mark] and [CSA mark] Certification"
    ],
    "specs": [
      {
        "label": "Number of Feeders",
        "values": {
          "CVT 200 i": "Film 6; Foil 2"
        }
      },
      {
        "label": "Width of the Foil",
        "values": {
          "CVT 200 i": "50 mm to 190 mm"
        }
      },
      {
        "label": "Width of the Dielectric",
        "values": {
          "CVT 200 i": "60 mm to 200 mm"
        }
      },
      {
        "label": "Thickness of Foil",
        "values": {
          "CVT 200 i": "5 μ to 10 μ"
        }
      },
      {
        "label": "Thickness of Dielectric",
        "values": {
          "CVT 200 i": "9 μ to 18 μ"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Testing Voltage",
        "values": {
          "CVT 200 i": "0 to 7 kV (Programmable)"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Element Thickness",
        "values": {
          "CVT 200 i": "8 mm to 25 mm"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Element Length",
        "values": {
          "CVT 200 i": "60 mm to 200 mm"
        }
      },
      {
        "section": "Dry Element Testing and Sorting",
        "label": "Controller",
        "values": {
          "CVT 200 i": "PLC"
        }
      }
    ],
    "specNotes": [
      "Page 2 header reads 'CVT-200 I | Automatic CVT Winding Machine (Tab Type)'.",
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "oldUrl": "/automatic-cvt-winding-machine/",
    "flags": [
      "Datasheet: Feature bullet literally prints '&amp; consistency' (an HTML-escape error baked into the PDF, visible in the rendered page); transcribed as printed.",
      "Datasheet: Model name is printed three ways: page-2 header 'CVT-200 I' (text layer reads 'CVT- 00 I'), spec table 'Model : CVT 200 i', doc code 'CVT200'.",
      "Datasheet: Cover subtitle '(Tab type)' vs page-2 header '(Tab Type)' capitalisation differs.",
      "Datasheet: 'Controller' row is printed under the 'Dry Element Testing and Sorting' sub-heading; it may be a general machine spec rather than part of that section.",
      "Datasheet: Option 'Full Machine Guarding with ... and ... Certification' contains two certification logos instead of text (CE mark and CSA mark, identified from the image); rendered as [CE mark] / [CSA mark] placeholders."
    ]
  },
  {
    "slug": "tpm-150",
    "name": "Tab Preparation Machine TPM 150",
    "category": "capacitor-winding",
    "group": "CVT (Capacitor Voltage Transformer)",
    "variants": [
      "TPM 150"
    ],
    "image": "/images/machines/capacitor/tpm.jpg",
    "sourceDescription": [
      "Automatic Tab Preparation Machine (TPM) is designed to prepare Tabs in reel form for use on Automatic Winding Machines for CVTs. The output Tab reel consists of copper strips stitched at precise intervals onto an aluminium carrier foil which can be conveniently loaded onto automatic winding machines."
    ],
    "datasheet": {
      "file": "/datasheets/tpm-150.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/capactor/TPM-Individual.pdf",
      "docCode": "H - Cat -TPM-01-June’21"
    },
    "sourceTitle": "Tab Preparation Machine",
    "sourceDatasheetDescription": [
      "Automatic Tab Preparation Machine (TPM) is designed to prepare Tabs in reel form for use on Automatic Winding Machines for CVTs. The output Tab reel consists of copper strips stitched at precise intervals onto an aluminium carrier foil which can be conveniently loaded onto automatic winding machines."
    ],
    "sourceFeatures": [
      "Welded steel structure and precision machining to mount all the assemblies ensures perfect alignment.",
      "De-Coiling Unit for aluminium carrier foil driven with servo tension control system maintains precise tension on the carrier foil during the rapid start - stop cycles.",
      "Take-Up Unit for stitched Tabs (output reel) driven by a servo motor results in precise control of Tab pitch.",
      "Tab Strip De-coiler with motorised feed unit forms the Tab and feeds pre-set length of Tab into the stitching unit ensuring perfect alignment.",
      "Tabs are automatically pierced onto Aluminium carrier foil using Specially designed profile pins and flattened by a pneumatically actuated tool."
    ],
    "sourceOptionalAccessories": [
      "Full Machine Guarding with [CE mark] and [CSA mark] Certification"
    ],
    "specs": [
      {
        "label": "Pitch",
        "values": {
          "TPM 150": "75 mm to 150 mm"
        }
      },
      {
        "label": "Tab width",
        "values": {
          "TPM 150": "12 mm to 25 mm"
        }
      },
      {
        "label": "Tab thickness",
        "values": {
          "TPM 150": "40 μ to 80 μ"
        }
      },
      {
        "label": "Tension Control",
        "values": {
          "TPM 150": "Closed loop servo tension control"
        }
      }
    ],
    "specNotes": [
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "oldUrl": "/automatic-tab-preparation-machine/",
    "flags": [
      "Datasheet: No subtitle and no 'Smart Winder' branding: cover and page-2 header both read only 'Tab Preparation Machine'.",
      "Datasheet: Option 'Full Machine Guarding with ... and ... Certification' contains two certification logos instead of text (CE mark and CSA mark, identified from the image); rendered as [CE mark] / [CSA mark] placeholders."
    ]
  },
  {
    "slug": "ht-capacitor-automatic",
    "name": "Smart Winder HT Capacitor — Automatic",
    "category": "capacitor-winding",
    "group": "Capacitor (HT)",
    "variants": [
      "Automatic – HT 350i",
      "Automatic – HT 450i",
      "Automatic – HT 650i"
    ],
    "image": "/images/machines/capacitor/ht-350i.jpg",
    "sourceDescription": [
      "Automatic High Tension Capacitor Winding Machine",
      "Automatic High Tension Capacitor Winding Machine is designed to wind Extended foil type elements used in high voltage capacitors.",
      "The optimum combination of mechanical, pneumatic and electronic systems incorporated in the machine provides high performance coupled with reliable operation and simplicity in maintenance.",
      "By utilising the latest technology, materials and manufacturing techniques, the machine offers several features such as high productivity, repeat accuracy, reliability, etc."
    ],
    "datasheet": {
      "file": "/datasheets/ht-capacitor-automatic.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/capactor/HT-Capacitor-Individual.pdf",
      "docCode": "C-Cat-HT-01 Jun’21"
    },
    "sourceTitle": "Smart Winder®",
    "sourceSubtitle": "Automatic HT Capacitor Winding Machines",
    "sourceDatasheetDescription": [
      "Automatic High Tension Capacitor Winding Machine is designed to wind Extended foil type elements used in high voltage capacitors.",
      "The optimum combination of mechanical, pneumatic and electronic systems incorporated in the machine provides high performance coupled with reliable operation and simplicity in maintenance.",
      "By utilising the latest technology, materials and manufacturing techniques, the machine offers several features such as high productivity, repeat accuracy, reliability, etc."
    ],
    "sourceFeatures": [
      "Closed loop servo tension control for film and foil spools give uniform tension, resulting in high quality winding & higher productivity.",
      "Automatic threading and unloading using collapsible-type mandrel eliminates manual operation and gives good repeatability and higher productivity.",
      "Dual Mandrel (Indexing Type), results in shorter winding cycle time and thus leading to higher productivity.",
      "Automatic foil cut & fold unit for both foils eliminates manual intervention during winding, resulting in higher productivity & consistency.",
      "Web Drive using servo motor ensures synchronised feeding of foil with the line speed and precise control of head and tail length, reducing wastage of material.",
      "Material exhaust sensing and Smart-Detect System to judge adequacy of material available on the spool at the beginning of each cycle reduces material wastage.",
      "Integrated Dry-element tester with automatic transfer and sorting of wound elements, eliminates manual handling of delicate elements ensuring better quality"
    ],
    "sourceOptionalAccessories": [
      "Motorised element stacker unit",
      "Bar Code insertion and Bar Code reader",
      "Capacitance measuring unit and data logging",
      "Automatic Edge Alignment",
      "Full Machine Guarding with [CE mark] and [CSA mark] Certification"
    ],
    "specs": [
      {
        "label": "Number of Feeders",
        "values": {
          "HT 350 i": "Film 6; Foil 2",
          "HT 450 i": "Film 6; Foil 2",
          "HT 650 i": "Film 6; Foil 2"
        }
      },
      {
        "label": "Width of Film/Foil",
        "values": {
          "HT 350 i": "200 mm to 350 mm",
          "HT 450 i": "300 mm to 450 mm",
          "HT 650 i": "400 mm to 650 mm"
        }
      },
      {
        "label": "Thickness",
        "values": {
          "HT 350 i": "6 -18 μ for film & 4 -10 μ for foil",
          "HT 450 i": "6 -18 μ for film & 4 -10 μ for foil",
          "HT 650 i": "6 -18 μ for film & 4 -10 μ for foil"
        }
      },
      {
        "label": "Winding diameter",
        "values": {
          "HT 350 i": "50 mm to 140 mm",
          "HT 450 i": "50 mm to 140 mm",
          "HT 650 i": "50 mm to 140 mm"
        }
      },
      {
        "label": "Tension Control",
        "values": {
          "HT 350 i": "Closed loop servo tensioner",
          "HT 450 i": "Closed loop servo tensioner",
          "HT 650 i": "Closed loop servo tensioner"
        }
      },
      {
        "section": "Dry Element Testing & Sorting",
        "label": "Testing Voltage",
        "values": {
          "HT 350 i": "0 to 10 kV (Programmable)",
          "HT 450 i": "0 to 10 kV (Programmable)",
          "HT 650 i": "0 to 10 kV (Programmable)"
        }
      },
      {
        "section": "Dry Element Testing & Sorting",
        "label": "Element Thickness",
        "values": {
          "HT 350 i": "8 mm to 25 mm",
          "HT 450 i": "8 mm to 25 mm",
          "HT 650 i": "8 mm to 25 mm"
        }
      },
      {
        "section": "Dry Element Testing & Sorting",
        "label": "Element Length",
        "values": {
          "HT 350 i": "210 mm to 360 mm",
          "HT 450 i": "310 mm to 460 mm",
          "HT 650 i": "410 mm to 660 mm"
        }
      },
      {
        "section": "Dry Element Testing & Sorting",
        "label": "Controller",
        "values": {
          "HT 350 i": "PLC",
          "HT 450 i": "PLC",
          "HT 650 i": "PLC"
        }
      }
    ],
    "specNotes": [
      "Machine specifications are Configurable to suit customer needs",
      "Page 2 header reads 'HT Series | Automatic High Tension Capacitor Winding Machine (Dual Mandrel)'.",
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "oldUrl": "/capacitor-automatic/",
    "flags": [
      "Datasheet: Text layer has a stray ': ' before 'Closed loop servo tensioner' in the HT 350 i column that is not visible in the rendered page; omitted per the image.",
      "Datasheet: Cover subtitle 'Automatic HT Capacitor Winding Machines' differs from page-2 header 'Automatic High Tension Capacitor Winding Machine (Dual Mandrel)'.",
      "Datasheet: 'Controller' row is printed under the 'Dry Element Testing & Sorting' sub-heading; it may be a general machine spec rather than part of that section.",
      "Datasheet: Option 'Full Machine Guarding with ... and ... Certification' contains two certification logos instead of text (CE mark and CSA mark, identified from the image); rendered as [CE mark] / [CSA mark] placeholders."
    ]
  },
  {
    "slug": "ht-350-semi-automatic",
    "name": "HT 350 — Semi-Automatic",
    "category": "capacitor-winding",
    "group": "Capacitor (HT)",
    "variants": [
      "Semi Automatic – HT 350"
    ],
    "image": "/images/machines/capacitor/ht-350-semi-automatic.jpg",
    "sourceDescription": [],
    "completeness": "partial",
    "flags": [
      "Image + caption only (link '#'). No description, specs or datasheet."
    ]
  },
  {
    "slug": "special-bushing",
    "name": "Bushing Winding Machine",
    "category": "special-purpose-winding",
    "group": "Special Purpose",
    "variants": [],
    "image": "/images/machines/special-purpose/bushing.jpg",
    "sourceDescription": [],
    "completeness": "partial",
    "flags": [
      "Old site caption is just 'Bushing' — image only, no description or specs. Name extended to 'Bushing Winding Machine' for clarity: confirm."
    ]
  },
  {
    "slug": "special-narrow-band",
    "name": "Narrow Band Winding Machine",
    "category": "special-purpose-winding",
    "group": "Special Purpose",
    "variants": [],
    "image": "/images/machines/special-purpose/narrow-band.jpg",
    "sourceDescription": [],
    "completeness": "partial",
    "flags": [
      "Old site caption is just 'Narrow Band' — image only, no description or specs. Name extended to 'Narrow Band Winding Machine' for clarity: confirm."
    ]
  },
  {
    "slug": "special-straight-coil",
    "name": "Straight Coil Winding Machine",
    "category": "special-purpose-winding",
    "group": "Special Purpose",
    "variants": [],
    "image": "/images/machines/special-purpose/straight-coil.jpg",
    "sourceDescription": [],
    "completeness": "partial",
    "flags": [
      "Old site caption is just 'Straight Coil' — image only, no description or specs. Name extended to 'Straight Coil Winding Machine' for clarity: confirm."
    ]
  },
  {
    "slug": "special-curved-coil",
    "name": "Curved Coil Winding Machine",
    "category": "special-purpose-winding",
    "group": "Under Development",
    "variants": [],
    "sourceDescription": [],
    "completeness": "listed",
    "status": "under-development",
    "flags": [
      "Listed as 'Under Development' with a placeholder image. Publish or hide?"
    ]
  },
  {
    "slug": "hub-motor-winding-machine",
    "name": "Smart Winder HMW 300 Hub Motor Winding Machine",
    "category": "ev-motor-winding",
    "group": "EV Motor",
    "variants": [
      "Smart Winder HMW 300"
    ],
    "image": "/images/machines/ev-motor/hub-motor-winding-machine.jpg",
    "sourceDescription": [],
    "datasheet": {
      "file": "/datasheets/hub-motor-winding-machine.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/EV/HUB-Motor-Winding-Machine.pdf",
      "docCode": "E-Cat--Hub Motor-March 2022"
    },
    "sourceTitle": "Smart Winder® HMW 300",
    "sourceSubtitle": "Automatic Hub Motor Winding Machine",
    "sourceFeatures": [
      "Flyer-type winding head.",
      "Automatic Winding, Core Indexing, Wire cutting and wire gripping.",
      "Servo Actuated Finger opening.",
      "Electronic wire tension controller under PLC control to achieve precise tension, programmable for different stages of winding, facilitates achieving better winding quality and flexibility in routing.",
      "Material exhaust sensing with Smart-detect system - to judge adequacy of material available on the spool at the beginning of each cycle reduces material wastage (Optional).",
      "High performance multi-axes controller in stand-alone mode with multi-program memory and PC Interface.",
      "Flexible menu driven programming through Windows* based Graphical User Interface (external PC) and user defined operation sequencing coupled with a powerful set of intelligent functions for achieving complex winding configurations with exceptional ease."
    ],
    "sourceOptionalAccessories": [
      "Customized tooling",
      "Servo actuated core height compensation",
      "Synchronised internal guide block movement",
      "Automatic 4-Axes movement for winding"
    ],
    "specs": [
      {
        "label": "Number of Spindles",
        "values": {
          "Smart Winder HMW 300": "1"
        }
      },
      {
        "label": "Spindle Speed",
        "values": {
          "Smart Winder HMW 300": "250 RPM"
        }
      },
      {
        "label": "Wire Size",
        "values": {
          "Smart Winder HMW 300": "0.5 mm to 2.0 mm (Single Strand); 5 mm² (Multi Strand)"
        }
      },
      {
        "label": "Core Diameter",
        "values": {
          "Smart Winder HMW 300": "180 mm to 300 mm"
        }
      },
      {
        "label": "Core Stack Height",
        "values": {
          "Smart Winder HMW 300": "20 mm to 60 mm"
        }
      },
      {
        "label": "Weight",
        "values": {
          "Smart Winder HMW 300": "1,400 Kg (Approx.)"
        }
      }
    ],
    "specNotes": [
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "flags": [
      "Some datasheet values were transcribed from the PDF image (image); verified against page renders.",
      "Datasheet: PDF has no text layer at all (entirely image/vector-outlined); every field including title, features, table and doc code transcribed from page images (table and doc code verified at 220/300 dpi).",
      "Datasheet: '5 mm²' is printed with a superscript 2 (mm squared).",
      "Datasheet: 'Windows*' carries an asterisk but no matching footnote is printed on the page."
    ]
  },
  {
    "slug": "segmented-coil-winding-machine",
    "name": "Smart Winder SWM 250 S Segmented Coil Winding Machine",
    "category": "ev-motor-winding",
    "group": "EV Motor",
    "variants": [
      "Smart Winder SWM 250 S"
    ],
    "image": "/images/machines/ev-motor/segmented-winding-machine.jpg",
    "sourceDescription": [
      "Segmented Winding Machine Is a compact yet sturdy linear coil winding machine designed to accommodate both round copper wire as well rectangular copper conductor or copper strips. Machine has option for de-reeler and pressing roller arrangements to achieve high fill factor and compact winding. While keeping mind that R&D requirements of motor designers, the machine is designed in a flexible manner and different configuration of the machine can accommodate various requirements from low speed high torque to high speed medium torque applications.",
      "Application: Teeth winding, Axial flux motor coil winding, Strip coil"
    ],
    "datasheet": {
      "file": "/datasheets/segmented-coil-winding-machine.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/EV/Segmented-Coil-Winding-Machine.pdf",
      "docCode": "E-Cat-Segmented Coil - Feb 2023"
    },
    "sourceTitle": "Smart Winder® SWM 250 S",
    "sourceSubtitle": "Automatic Segmented Coil Winding Machine",
    "sourceFeatures": [
      "Standalone single spindle linear winding machine capable of handling copper strip as well as round conductors.",
      "Sturdy & robust machine frame constructed of steel plates and held together by 5 pillar structure with best utilization of floor space.",
      "High torque spindle coupled to geared AC servo motor, handles single and dual conductors with ease.",
      "Servo controlled traverse arrangement aids in achieving complex winding patterns.",
      "Pneumatically actuated pressing rollers with quick roller changeover for various bobbin sizes to achieve compact winding and saves overall changeover time.",
      "Tension release facility to allow easy anchoring of the conductor without fatigue to operators."
    ],
    "sourceOptionalAccessories": [
      "Customized tooling"
    ],
    "specs": [
      {
        "label": "Number of Stations",
        "values": {
          "Smart Winder SWM 250 S": "1"
        }
      },
      {
        "label": "Winding Speed",
        "values": {
          "Smart Winder SWM 250 S": "60 RPM"
        }
      },
      {
        "label": "No. of Conductors",
        "values": {
          "Smart Winder SWM 250 S": "1"
        }
      },
      {
        "label": "Wire Size",
        "values": {
          "Smart Winder SWM 250 S": "Strip: Conductor Width: 3mm to 6mm; Conductor Thickness: Upto 3mm; Round: Ø1mm to 5mm"
        }
      },
      {
        "label": "Coil Swing Diameter",
        "values": {
          "Smart Winder SWM 250 S": "Ø250mm"
        }
      },
      {
        "label": "Winding Width",
        "values": {
          "Smart Winder SWM 250 S": "250mm"
        }
      },
      {
        "label": "Machine Size",
        "values": {
          "Smart Winder SWM 250 S": "750 x 670 x 1480 mm (L x W x H)"
        }
      },
      {
        "label": "Machine Weight",
        "values": {
          "Smart Winder SWM 250 S": "250 Kg (approx.)"
        }
      },
      {
        "label": "Power Supply",
        "values": {
          "Smart Winder SWM 250 S": "230V AC, Single Phase"
        }
      }
    ],
    "specNotes": [
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "oldUrl": "/segmented-winding-machine/",
    "flags": [
      "Description taken from orphan SEO page /segmented-winding-machine/.",
      "Datasheet: Contradiction inside the PDF: spec table says 'No. of Conductors: 1' while the features say the spindle 'handles single and dual conductors with ease'.",
      "Datasheet: In Wire Size, 'Strip:' and 'Round:' are underlined in the printed table (formatting not representable).",
      "Datasheet: Page 1 carries a 'zetta WATT' logo (co-brand) in addition to the Synthesis logo; no text about it."
    ]
  },
  {
    "slug": "linear-stator-winding-machine",
    "name": "Smart Winder LSW 350 Linear Stator Winding Machine",
    "category": "ev-motor-winding",
    "group": "EV Motor",
    "variants": [
      "Smart Winder LSW 350"
    ],
    "image": "/images/machines/ev-motor/linear-stator-winding-machine.jpg",
    "sourceDescription": [],
    "datasheet": {
      "file": "/datasheets/linear-stator-winding-machine-lsw-350.pdf",
      "sourceUrl": "https://synthesis-winding.com/pdf/EV/Linear-Stator-Winding-Machine-LSW%20350.pdf",
      "docCode": "E-Cat-Linesar_Stator - Feb 2023"
    },
    "sourceTitle": "Smart Winder® LSW 350",
    "sourceSubtitle": "Automatic Linear Stator Winding Machine",
    "sourceFeatures": [
      "Standalone dual spindle high speed flyer machine design for winding linear/opened stator motor coils with thin wire.",
      "Machine design facilitates automatic wire routing and wrapping on terminal pins of the job.",
      "Automatic wire cut & grip functionality eliminates operator intervention.",
      "Ergonomically designed component holding jigs ensure quick load and unload of the component.",
      "Base frame made of welded steel structure and casted base plate enhances vibration absorption while maintaining structural rigidity.",
      "Electro-magnetic wire tension control which can be set through PLC, can be programmed to output different tension values for different stages of winding, increasing flexibility to achieve complex winding and routing patterns."
    ],
    "sourceOptionalAccessories": [
      "Customized tooling"
    ],
    "specs": [
      {
        "label": "Number of Stations",
        "values": {
          "Smart Winder LSW 350": "2"
        }
      },
      {
        "label": "Winding Speed",
        "values": {
          "Smart Winder LSW 350": "3000 RPM"
        }
      },
      {
        "label": "Wire Size",
        "values": {
          "Smart Winder LSW 350": "Single Wire: Ø 0.3mm to 0.7mm;"
        }
      },
      {
        "label": "Core Length",
        "values": {
          "Smart Winder LSW 350": "350mm (max.)"
        }
      },
      {
        "label": "Core Inner Diameter",
        "values": {
          "Smart Winder LSW 350": "N/A"
        }
      },
      {
        "label": "Core Stack Height",
        "values": {
          "Smart Winder LSW 350": "55mm (max.)"
        }
      },
      {
        "label": "Machine Size",
        "values": {
          "Smart Winder LSW 350": "1600 x 2000 x 1800 mm (L x W x H)"
        }
      },
      {
        "label": "Machine Weight",
        "values": {
          "Smart Winder LSW 350": "1500 Kg (approx.)"
        }
      },
      {
        "label": "Power Supply",
        "values": {
          "Smart Winder LSW 350": "415Vac, 3 Phase"
        }
      }
    ],
    "specNotes": [
      "Optional accessories are printed under the heading \"Options\"."
    ],
    "completeness": "full",
    "flags": [
      "Datasheet carries a 'zetta WATT' co-brand logo — confirm relationship before showing.",
      "Datasheet: Doc code is printed 'E-Cat-Linesar_Stator - Feb 2023' (apparent typo 'Linesar' for 'Linear'); transcribed as printed.",
      "Datasheet: Wire Size value ends with a trailing semicolon ('Single Wire: Ø 0.3mm to 0.7mm;') as if a second item was dropped; transcribed as printed.",
      "Datasheet: Core Inner Diameter is printed as 'N/A' for a linear stator.",
      "Datasheet: Page 1 carries a 'zetta WATT' logo (co-brand) in addition to the Synthesis logo; no text about it."
    ]
  }
];

export const machineBySlug = (slug: string) => machines.find((m) => m.slug === slug);
export const machinesInCategory = (slug: MachineCategory["slug"]) =>
  machineCategories.find((c) => c.slug === slug)!.groups.flatMap((g) => g.machines).map((s) => machineBySlug(s)!);
