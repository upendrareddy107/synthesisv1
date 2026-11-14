import type { Coil } from "./types";

/**
 * Coil types from /choose-by-coil-type on the old site, grouped by industry.
 * Coils listed under several industries appear once with multiple `industries`.
 * `machines` are slugs in machines.ts, taken from each old coil page's 'Main Products' list.
 * NOTE: every old coil page had only a placeholder intro ("Introduction to equipment related to X.").
 * There is no source description copy for any coil — `copy` is intentionally empty until approved.
 */
export const coils: Coil[] = [
  {
    "slug": "antenna-coil",
    "name": "Antenna Coil",
    "sourceName": "Antenna Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/antenna-coil.jpg",
    "machines": [
      "smart-winder-a-series"
    ],
    "sourceModelMentions": [
      "SW A4",
      "SW A6"
    ],
    "oldUrl": "/antenna-coil/"
  },
  {
    "slug": "bldc-motor-coil",
    "name": "BLDC Motor Coil",
    "sourceName": "BLDC Motor Coil",
    "industries": [
      "automotive",
      "consumer-electronics",
      "defence-aerospace"
    ],
    "image": "/images/coils/bldc-motor-coil.png",
    "machines": [
      "smart-winder-st-2t",
      "smart-winder-st1"
    ],
    "sourceModelMentions": [
      "ST 2T",
      "ST 1"
    ],
    "oldUrl": "/bldc-motor-stator/"
  },
  {
    "slug": "brake-coil",
    "name": "Brake Coil",
    "sourceName": "Brake Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/brake-coil.png",
    "machines": [
      "optima-1100",
      "optima-1160",
      "optima-1250"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1160",
      "Optima 1250"
    ],
    "oldUrl": "/brake-coils/"
  },
  {
    "slug": "exciter-coil",
    "name": "Exciter Coil",
    "sourceName": "Exciter Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/exciter-coil.png",
    "machines": [
      "optima-280",
      "optima-2100",
      "smart-winder-a-series"
    ],
    "sourceModelMentions": [
      "Optima 280",
      "Optima 2100",
      "SW A 4"
    ],
    "oldUrl": "/exciter-coil/"
  },
  {
    "slug": "flasher-coil",
    "name": "Flasher Coil",
    "sourceName": "Flasher Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/flasher-coil.png",
    "machines": [
      "optima-1100",
      "optima-280",
      "optima-475",
      "smart-winder-a-series",
      "smart-winder-at-series"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 280",
      "Optima 475",
      "SW A4",
      "SW AT 4"
    ],
    "oldUrl": "/flasher-coil/"
  },
  {
    "slug": "fuel-gauge-coil",
    "name": "Fuel Gauge Coil",
    "sourceName": "Fuel Guage Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/fuel-guage-coil.png",
    "machines": [
      "optima-1100",
      "optima-475",
      "optima-mp-01"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 475",
      "Optima MP-01"
    ],
    "oldUrl": "/fuel-guage-coil/",
    "flags": [
      "Spelling corrected from 'Fuel Guage Coil'."
    ]
  },
  {
    "slug": "horn-coil",
    "name": "Horn Coil",
    "sourceName": "Horn Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/horn-coil.png",
    "machines": [
      "optima-1100",
      "optima-1160",
      "optima-1250",
      "optima-280",
      "optima-2100",
      "smart-winder-at-series"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1160",
      "Optima 1250",
      "Optima 280",
      "Optima 2100",
      "SW AT 6",
      "SW AT 8"
    ],
    "oldUrl": "/horn-coil/"
  },
  {
    "slug": "hub-motor-coil",
    "name": "Hub Motor Coil",
    "sourceName": "Hub Motor Coil",
    "industries": [
      "automotive"
    ],
    "machines": [
      "smart-winder-st-2t",
      "smart-winder-st1"
    ],
    "sourceModelMentions": [
      "ST 2T",
      "ST 1"
    ],
    "oldUrl": "/hub-motor/",
    "flags": [
      "No real image (old site used 'no image' placeholder or none).",
      "Old coil page links stator winders ST 1 / ST 2T, not the EV 'Hub Motor Winding Machine'. Confirm which machine(s) to link."
    ]
  },
  {
    "slug": "ignition-coil",
    "name": "Ignition Coil",
    "sourceName": "Ignition Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/ignition-coil.png",
    "machines": [
      "optima-1100",
      "optima-1160",
      "smart-winder-a-series",
      "smart-winder-at-series"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1160",
      "SW A2/A4",
      "SW AT 4",
      "SW A6",
      "SW AT8"
    ],
    "oldUrl": "/ignition-coil/"
  },
  {
    "slug": "magneto-coil",
    "name": "Magneto Coil",
    "sourceName": "Magneto Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/magneto-coil.png",
    "machines": [
      "smart-winder-st-2t",
      "smart-winder-st1"
    ],
    "sourceModelMentions": [
      "ST 2T",
      "ST 1"
    ],
    "oldUrl": "/2-3-wheeler-magneto-stator/"
  },
  {
    "slug": "pick-up-coil",
    "name": "Pick Up Coil",
    "sourceName": "Pick Up Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/pick-up-coil.png",
    "machines": [
      "smart-winder-a-series",
      "smart-winder-at-series"
    ],
    "sourceModelMentions": [
      "SW A4",
      "SW A6",
      "SW AT8"
    ],
    "oldUrl": "/pick-up-coils/"
  },
  {
    "slug": "pulser-coil",
    "name": "Pulser Coil",
    "sourceName": "Pulser Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/pulser-coil.png",
    "machines": [
      "optima-1100-smps"
    ],
    "sourceModelMentions": [
      "Optima 1100 SMPS"
    ],
    "oldUrl": "/pulsar-coil/"
  },
  {
    "slug": "purge-valve-fuel-injector-coil",
    "name": "Purge Valve / Fuel Injector Coil",
    "sourceName": "Purge Valve / Fuel Injector Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/purge-valve-fuel-injector-coil.png",
    "machines": [
      "smart-winder-a-series"
    ],
    "sourceModelMentions": [
      "SW A 4"
    ],
    "oldUrl": "/purge-valve-in-fuel-tank/"
  },
  {
    "slug": "rotor-coil",
    "name": "Rotor Coil",
    "sourceName": "Rotor Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/rotor-coil.jpg",
    "machines": [
      "optima-1100",
      "optima-1160",
      "optima-1250",
      "smart-winder-at-series"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1160",
      "Optima 1250",
      "SW AT 4"
    ],
    "oldUrl": "/rotor-coils/"
  },
  {
    "slug": "sensor-coil",
    "name": "Sensor Coil",
    "sourceName": "Sensor Coil",
    "industries": [
      "automotive",
      "defence-aerospace"
    ],
    "image": "/images/coils/sensor-coil.png",
    "machines": [
      "optima-1100",
      "optima-1160",
      "optima-280",
      "optima-475",
      "smart-winder-a-series",
      "smart-winder-at-series"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1160",
      "Optima 280",
      "Optima 475",
      "SW A4",
      "SW A6",
      "SW AT8"
    ],
    "oldUrl": "/sensor-coil/"
  },
  {
    "slug": "solenoid-coil",
    "name": "Solenoid Coil",
    "sourceName": "Solenoid Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/solenoid-coil.png",
    "machines": [
      "optima-1100",
      "optima-1160",
      "optima-280",
      "optima-2100",
      "optima-475",
      "smart-winder-a-series",
      "smart-winder-at-series"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1160",
      "Optima 280",
      "Optima 2100",
      "Optima 475",
      "SW A2/A4",
      "SW AT8"
    ],
    "oldUrl": "/solenoid-coils/"
  },
  {
    "slug": "relay-coil",
    "name": "Relay Coil",
    "sourceName": "Relay Coil",
    "industries": [
      "automotive"
    ],
    "image": "/images/coils/relay-coil.png",
    "machines": [
      "optima-1100",
      "optima-1160",
      "optima-280",
      "optima-2100",
      "optima-475",
      "smart-winder-a-series",
      "smart-winder-at-series"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1160",
      "Optima 280",
      "Optima 2100",
      "Optima 475",
      "SW A4",
      "SW AT4"
    ],
    "oldUrl": "/starter-relay-coil/"
  },
  {
    "slug": "ballast-coil",
    "name": "Ballast Coil",
    "sourceName": "Ballast Coil",
    "industries": [
      "consumer-electronics"
    ],
    "image": "/images/coils/ballast-coil.png",
    "machines": [
      "optima-1100",
      "optima-1160",
      "optima-1250",
      "optima-280"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1160",
      "Optima 1250",
      "Optima 280"
    ],
    "oldUrl": "/ballast-coil/"
  },
  {
    "slug": "cfl-coil",
    "name": "CFL Coil",
    "sourceName": "CFL Coil",
    "industries": [
      "consumer-electronics"
    ],
    "image": "/images/coils/cfl-coil.png",
    "machines": [
      "optima-1100",
      "optima-280",
      "optima-2100"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 280",
      "Optima 2100"
    ],
    "oldUrl": "/cfl/"
  },
  {
    "slug": "door-bell-coil",
    "name": "Door Bell Coil",
    "sourceName": "Door Bell Coil",
    "industries": [
      "consumer-electronics"
    ],
    "machines": [
      "optima-1100",
      "optima-280",
      "optima-475"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 280",
      "Optima 475"
    ],
    "oldUrl": "/door-bell/",
    "flags": [
      "No real image (old site used 'no image' placeholder or none)."
    ]
  },
  {
    "slug": "heater-coil",
    "name": "Heater Coil",
    "sourceName": "Heater Coil",
    "industries": [
      "consumer-electronics"
    ],
    "image": "/images/coils/heater-coil.png",
    "machines": [
      "optima-1100-300t",
      "optima-1250"
    ],
    "sourceModelMentions": [
      "Optima 1100-300T",
      "Optima 1250"
    ],
    "oldUrl": "/heater/"
  },
  {
    "slug": "inverter-coil",
    "name": "Inverter Coil",
    "sourceName": "Inverter Coil",
    "industries": [
      "consumer-electronics"
    ],
    "image": "/images/coils/inverter-coil.png",
    "machines": [
      "optima-1250"
    ],
    "sourceModelMentions": [
      "Optima 1250"
    ],
    "oldUrl": "/inverter/"
  },
  {
    "slug": "lawn-mower-coil",
    "name": "Lawn Mower Coil",
    "sourceName": "Lawn Mover Coil",
    "industries": [
      "consumer-electronics"
    ],
    "machines": [
      "smart-winder-st-2t",
      "smart-winder-st1"
    ],
    "sourceModelMentions": [
      "ST 2T",
      "ST 1"
    ],
    "oldUrl": "/lawn-movers-stators/",
    "flags": [
      "No real image (old site used 'no image' placeholder or none).",
      "Spelling corrected from 'Lawn Mover Coil'."
    ]
  },
  {
    "slug": "led-driver-coil",
    "name": "LED Driver Coil",
    "sourceName": "LED Driver Coil",
    "industries": [
      "consumer-electronics"
    ],
    "image": "/images/coils/led-driver-coil.jpg",
    "machines": [
      "optima-1100",
      "optima-1100-smps",
      "smart-winder-a-series"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1100 SMPS",
      "SW A4",
      "SW A6"
    ],
    "oldUrl": "/led-driver-coil/"
  },
  {
    "slug": "mobile-charger-coil",
    "name": "Mobile Charger Coil",
    "sourceName": "Mobile Charger Coil",
    "industries": [
      "consumer-electronics"
    ],
    "image": "/images/coils/mobile-charger-coil.png",
    "machines": [
      "optima-1100",
      "optima-1160",
      "optima-280",
      "optima-2100",
      "optima-1100-smps",
      "smart-winder-a-series"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1160",
      "Optima 280",
      "Optima 2100",
      "Optima 1100 SMPS",
      "SW A4",
      "SW A6"
    ],
    "oldUrl": "/mobile-charger/"
  },
  {
    "slug": "portable-washing-machine-coil",
    "name": "Portable Washing Machine Coil",
    "sourceName": "Portable Washing Machine Coil",
    "industries": [
      "consumer-electronics"
    ],
    "image": "/images/coils/portable-washing-machine-coil.png",
    "machines": [
      "smart-winder-st-2t",
      "smart-winder-st1"
    ],
    "sourceModelMentions": [
      "ST 2T",
      "ST 1"
    ],
    "oldUrl": "/portable-washing-machine-stator/"
  },
  {
    "slug": "speaker-voice-coil",
    "name": "Speaker Coil / Voice Coil",
    "sourceName": "Speaker Coil / Voice Coil",
    "industries": [
      "consumer-electronics"
    ],
    "image": "/images/coils/speaker-coil-voice-coil.png",
    "machines": [
      "optima-1100",
      "optima-1160",
      "optima-1250"
    ],
    "sourceModelMentions": [
      "Optima 1100 F",
      "Optima 1160 F",
      "Optima 1250"
    ],
    "oldUrl": "/speaker-coil-voice-coil/"
  },
  {
    "slug": "lvdt-winding",
    "name": "LVDT Winding",
    "sourceName": "LVDT Winding",
    "industries": [
      "defence-aerospace"
    ],
    "flags": [
      "Listed on old site with no page and no linked machine.",
      "No real image (old site used 'no image' placeholder or none)."
    ]
  },
  {
    "slug": "temperature-sensor-in-submarine",
    "name": "Temperature Sensor in Submarine",
    "sourceName": "Temperature Sensor in Submarine",
    "industries": [
      "defence-aerospace"
    ],
    "flags": [
      "Listed on old site with no page and no linked machine.",
      "No real image (old site used 'no image' placeholder or none)."
    ]
  },
  {
    "slug": "thruster-coil",
    "name": "Thruster Coil",
    "sourceName": "Thruster Coil",
    "industries": [
      "defence-aerospace"
    ],
    "flags": [
      "Listed on old site with no page and no linked machine.",
      "No real image (old site used 'no image' placeholder or none)."
    ]
  },
  {
    "slug": "torquer-coil",
    "name": "Torquer Coil",
    "sourceName": "Torquer Coil",
    "industries": [
      "defence-aerospace"
    ],
    "flags": [
      "Listed on old site with no page and no linked machine.",
      "No real image (old site used 'no image' placeholder or none)."
    ]
  },
  {
    "slug": "condenser-bushing",
    "name": "Condenser Bushing",
    "sourceName": "Condenser Bushing",
    "industries": [
      "electrical-power"
    ],
    "flags": [
      "Listed on old site with no page and no linked machine.",
      "No real image (old site used 'no image' placeholder or none).",
      "Probably wound on the Special Purpose 'Bushing' machine (2005 BHEL milestone) — not linked on old site. Confirm."
    ]
  },
  {
    "slug": "capacitor-voltage-transformer",
    "name": "CVT (Capacitor Voltage Transformer)",
    "sourceName": "CVT (Capacitor Voltage Transformer)",
    "industries": [
      "electrical-power"
    ],
    "image": "/images/coils/cvt-capacitor-voltage-transformer.png",
    "machines": [
      "cvt-200i"
    ],
    "sourceModelMentions": [
      "CVT 200i"
    ],
    "oldUrl": "/constant-voltage-transformer/"
  },
  {
    "slug": "distribution-transformer-hv-coil",
    "name": "Distribution Transformer HV Coil",
    "sourceName": "Distribution Transformer HV Coil",
    "industries": [
      "electrical-power"
    ],
    "image": "/images/coils/distribution-transformer-hv-coil.jpg",
    "machines": [
      "hv-series",
      "gli-series"
    ],
    "oldUrl": "/distribution-transformer-hv-coil/",
    "flags": [
      "Old page embeds HV + GLI machine content instead of a 'Main Products' list; mapped to HV and GLI series."
    ]
  },
  {
    "slug": "distribution-transformer-lv-coil",
    "name": "Distribution Transformer LV Coil",
    "sourceName": "Distribution Transformer LV Coil",
    "industries": [
      "electrical-power"
    ],
    "image": "/images/coils/distribution-transformer-lv-coil.png",
    "machines": [
      "flv-series"
    ],
    "oldUrl": "/distribution-transformer-lv-coil/",
    "flags": [
      "Old page embeds LV foil machine content; mapped to FLV series."
    ]
  },
  {
    "slug": "grading-capacitor",
    "name": "Grading Capacitor",
    "sourceName": "Grading Capacitor",
    "industries": [
      "electrical-power"
    ],
    "image": "/images/coils/grading-capacitor.jpg",
    "machines": [
      "gc-100",
      "gc-120"
    ],
    "sourceModelMentions": [
      "GC 100",
      "Auto Line - GC 120"
    ],
    "oldUrl": "/grading-capacitor/"
  },
  {
    "slug": "ht-mv-capacitor",
    "name": "HT Capacitor / MV Capacitor",
    "sourceName": "HT Capacitor / MV Capacitor",
    "industries": [
      "electrical-power"
    ],
    "image": "/images/coils/ht-capacitor-mv-capacitor.png",
    "machines": [
      "ht-capacitor-automatic"
    ],
    "sourceModelMentions": [
      "HT Capacitor – Automatic"
    ],
    "oldUrl": "/high-tension-medium-voltage-capacitor/"
  },
  {
    "slug": "portable-generator-coil",
    "name": "Portable Generator Coil",
    "sourceName": "Portable Generator Coil",
    "industries": [
      "electrical-power"
    ],
    "image": "/images/coils/portable-generator-coil.png",
    "machines": [
      "smart-winder-st1"
    ],
    "sourceModelMentions": [
      "ST 1"
    ],
    "oldUrl": "/portable-generator-stator/"
  },
  {
    "slug": "potential-voltage-transformer-coil",
    "name": "Potential / Voltage Transformer Coil",
    "sourceName": "Potential / Voltage Transformer Coil",
    "industries": [
      "electrical-power"
    ],
    "image": "/images/coils/potential-voltage-transformer-coil.png",
    "machines": [
      "optima-1250"
    ],
    "sourceModelMentions": [
      "Optima 1250"
    ],
    "oldUrl": "/potential-transformer/"
  },
  {
    "slug": "traction-transformer-coil",
    "name": "Traction Transformer Coil",
    "sourceName": "Traction Transformer Coil",
    "industries": [
      "electrical-power"
    ],
    "image": "/images/coils/traction-transformer-coil.png",
    "machines": [
      "smart-winder-600s"
    ],
    "sourceModelMentions": [
      "600S"
    ],
    "oldUrl": "/traction-transformer/"
  },
  {
    "slug": "contactor-coil",
    "name": "Contactor Coil",
    "sourceName": "Contactor Coil",
    "industries": [
      "switchgear"
    ],
    "image": "/images/coils/contactor-coil.png",
    "machines": [
      "optima-1160",
      "optima-1250",
      "optima-280",
      "optima-2100",
      "optima-475",
      "smart-winder-a-series",
      "smart-winder-at-series"
    ],
    "sourceModelMentions": [
      "Optima 1160",
      "Optima 1250",
      "Optima 280",
      "Optima 2100",
      "Optima 475",
      "SW A4",
      "SW AT 4",
      "SW AT 8"
    ],
    "oldUrl": "/contactor-coils/"
  },
  {
    "slug": "drum-core-coil",
    "name": "Drum Core Coil",
    "sourceName": "Drum Core Coil",
    "industries": [
      "switchgear"
    ],
    "image": "/images/coils/drum-core-coil.png",
    "machines": [
      "optima-1100",
      "optima-280",
      "optima-475",
      "smart-winder-a-series"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 280",
      "Optima 475",
      "SW A4",
      "SW A 6"
    ],
    "oldUrl": "/drum-core/"
  },
  {
    "slug": "ferrite-transformer-coil",
    "name": "Ferrite Transformer Coil",
    "sourceName": "Ferrite Transformer Coil",
    "industries": [
      "switchgear"
    ],
    "image": "/images/coils/ferrite-transformer-coil.png",
    "machines": [
      "optima-1100",
      "optima-1100-smps",
      "optima-1160",
      "smart-winder-a-series"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1100 SMPS",
      "Optima 1160",
      "SW A4",
      "SW A6"
    ],
    "oldUrl": "/ferrite-transformers/"
  },
  {
    "slug": "micro-relay-coil",
    "name": "Micro Relay Coil",
    "sourceName": "Micro Relay Coil",
    "industries": [
      "switchgear"
    ],
    "image": "/images/coils/micro-relay-coil.png",
    "machines": [
      "optima-1100",
      "optima-1160",
      "optima-280",
      "optima-2100",
      "optima-475",
      "smart-winder-a-series"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1160",
      "Optima 280",
      "Optima 2100",
      "Optima 475",
      "SW A4",
      "SW A6"
    ],
    "oldUrl": "/micro-relay-coils/"
  },
  {
    "slug": "small-transformer-coil",
    "name": "Small Transformer Coil",
    "sourceName": "Small Transformer Coil",
    "industries": [
      "switchgear"
    ],
    "image": "/images/coils/small-transformer-coil.png",
    "machines": [
      "optima-1100",
      "optima-1100-smps",
      "optima-1160",
      "smart-winder-a-series",
      "smart-winder-at-series"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1100 SMPS",
      "Optima 1160",
      "SW A4",
      "SW AT8-80"
    ],
    "oldUrl": "/small-transformers/"
  },
  {
    "slug": "smps-coil",
    "name": "SMPS Coil",
    "sourceName": "SMPS Coil",
    "industries": [
      "switchgear"
    ],
    "image": "/images/coils/smps-coil.png",
    "machines": [
      "optima-1100",
      "optima-1100-smps",
      "optima-1160",
      "optima-1250",
      "optima-280",
      "smart-winder-a-series"
    ],
    "sourceModelMentions": [
      "Optima 1100 F",
      "Optima 1100 CB",
      "Optima 1100 SMPS",
      "Optima 1160",
      "Optima 1250",
      "Optima 280",
      "SW A4",
      "SW A6"
    ],
    "oldUrl": "/smps-coil/"
  },
  {
    "slug": "buzzer-coil",
    "name": "Buzzer Coil",
    "sourceName": "Buzzer Coil",
    "industries": [
      "others"
    ],
    "image": "/images/coils/buzzer-coil.png",
    "machines": [
      "optima-1100",
      "optima-280",
      "optima-475"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 280",
      "Optima 475"
    ],
    "oldUrl": "/buzzer-coil/"
  },
  {
    "slug": "drone-motor-coil",
    "name": "Drone Motor Coil",
    "sourceName": "Drone Motor Coil",
    "industries": [
      "others"
    ],
    "image": "/images/coils/drone-motor-coil.png",
    "machines": [
      "smart-winder-st-2t",
      "smart-winder-st1"
    ],
    "sourceModelMentions": [
      "ST 2T",
      "ST 1"
    ],
    "oldUrl": "/drone-motors-stators/"
  },
  {
    "slug": "health-care-coil",
    "name": "Health Care",
    "sourceName": "Health Care",
    "industries": [
      "others"
    ],
    "image": "/images/coils/health-care.png",
    "machines": [
      "optima-1100"
    ],
    "sourceModelMentions": [
      "Optima 1100"
    ],
    "oldUrl": "/medical-appliances/"
  },
  {
    "slug": "pump-coil",
    "name": "Pump Coil",
    "sourceName": "Pump Coil",
    "industries": [
      "others"
    ],
    "image": "/images/coils/pump-coil.png",
    "machines": [
      "optima-1250"
    ],
    "sourceModelMentions": [
      "Optima 1250"
    ],
    "oldUrl": "/pump-coil/"
  },
  {
    "slug": "resistor-coil",
    "name": "Resistor Coil",
    "sourceName": "Resistor Coil",
    "industries": [
      "others"
    ],
    "image": "/images/coils/resistor-coil.png",
    "machines": [
      "optima-1100",
      "optima-1160"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1160"
    ],
    "oldUrl": "/resistors/"
  },
  {
    "slug": "rfid-coil",
    "name": "RFID Coil",
    "sourceName": "RFID Coil",
    "industries": [
      "others"
    ],
    "image": "/images/coils/rfid-coil.jpg",
    "machines": [
      "optima-1100",
      "optima-1160",
      "optima-280"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1160",
      "Optima 280"
    ],
    "oldUrl": "/rfid-coil/"
  },
  {
    "slug": "solder-wire",
    "name": "Solder Wire",
    "sourceName": "Solder Wire",
    "industries": [
      "others"
    ],
    "image": "/images/coils/solder-wire.jpg",
    "machines": [
      "optima-1100",
      "optima-1250",
      "optima-2100"
    ],
    "sourceModelMentions": [
      "Optima 1100",
      "Optima 1250",
      "Optima 2100"
    ],
    "oldUrl": "/solder-wire-2/"
  },
  {
    "slug": "synchronous-motor-coil",
    "name": "Synchronous Motor Coil",
    "sourceName": "Synchronous Motor Coil",
    "industries": [
      "others"
    ],
    "image": "/images/coils/synchronous-motor-coil.jpg",
    "machines": [
      "smart-winder-a-series"
    ],
    "sourceModelMentions": [
      "SW A 4"
    ],
    "oldUrl": "/synchronous-motor/"
  }
];
