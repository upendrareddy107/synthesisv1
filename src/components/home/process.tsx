"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { duration, ease, prefersReducedMotion } from "@/lib/motion";
import { SectionLabel } from "@/components/section-label";

export type Stage = { key: string; title: string; body: string; tags: string[] };

/**
 * Pinned on lg+: scrolling advances five stages; the general-arrangement
 * drawing gains one layer per stage (opacity only). Below lg: no pin, all
 * stages listed under the finished drawing.
 */
export function Process({ stages }: { stages: Stage[] }) {
  const section = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 64rem)", () => {
      setPinned(true);
      const st = ScrollTrigger.create({
        trigger: pin.current,
        start: "top top+=80",
        end: `+=${stages.length * 50}%`,
        pin: true,
        onUpdate: (self) => setActive(Math.min(stages.length - 1, Math.floor(self.progress * stages.length * 0.999))),
      });
      return () => {
        st.kill();
        setPinned(false);
        setActive(0);
      };
    });
    return () => mm.revert();
  }, [stages.length]);

  const shown = pinned ? active : stages.length - 1;
  const s = stages[active];

  return (
    <section ref={section} aria-labelledby="process-title" className="theme-dark pt-10 pb-8 lg:py-0">
      {/* lg+: the whole block (heading, stage text, drawing) is pinned and fills the viewport — no empty band. */}
      <div ref={pin} className="page-grid gap-y-5 lg:h-[calc(100svh-80px)] lg:content-center lg:gap-y-4">
        <div className="col-span-full lg:col-span-5 lg:row-start-1 lg:self-end">
          <SectionLabel n="02">How a machine is built</SectionLabel>
          <h2 id="process-title" className="display mt-3 text-display-l">
            Engineered around
            <br />
            your coil<span className="text-accent">.</span>
          </h2>
        </div>

        {/* drawing panel */}
        <div className="col-span-full border border-line bg-panel lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:self-center">
          <div className="flex items-center justify-between border-b border-line px-2 py-1.5">
            <p className="label text-muted">DWG · SWT-GA-01 — General arrangement</p>
            <p className="label tabular-nums text-muted">
              Stage <span className="text-fg">{String(shown + 1).padStart(2, "0")}</span> / {String(stages.length).padStart(2, "0")}
            </p>
          </div>
          <MachineDrawing stage={shown} />
          <ol className="grid grid-cols-5 border-t border-line">
            {stages.map((st, i) => (
              <li key={st.key} className="label flex items-center gap-1 px-1.5 py-1.5 text-[0.625rem] sm:text-label">
                <span
                  aria-hidden="true"
                  className={`inline-block h-1 w-1 border ${i <= shown ? "border-accent bg-accent" : "border-muted"}`}
                />
                <span className={i === shown ? "text-fg" : "text-muted"}>{st.key}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* stage text */}
        <div className="col-span-full lg:col-span-5 lg:row-start-2 lg:self-start">
          {pinned ? (
            <div aria-live="polite" className="min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: duration.base, ease: ease.out }}
                >
                  <StageText i={active} s={s} />
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <ol className="grid gap-5">
              {stages.map((st, i) => (
                <li key={st.key} className="border-t border-line pt-3">
                  <StageText i={i} s={st} />
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}

function StageText({ i, s }: { i: number; s: Stage }) {
  return (
    <>
      <p className="label text-accent">
        {String(i + 1).padStart(2, "0")} / {s.key}
      </p>
      <h3 className="display mt-2 text-display-m">{s.title}</h3>
      <p className="mt-2 max-w-[44ch] text-muted md:text-lead">{s.body}</p>
      <ul className="mt-3 flex flex-wrap gap-1">
        {s.tags.map((t) => (
          <li key={t} className="label border border-line px-1 py-0.5 text-fg/80">
            {t}
          </li>
        ))}
      </ul>
    </>
  );
}

/** General arrangement of a winding machine, built up in five layers. */
function MachineDrawing({ stage }: { stage: number }) {
  const L = (i: number) => ({
    style: { opacity: stage >= i ? 1 : 0.06, transition: "opacity var(--duration-slow) var(--ease-out)" },
  });
  const fg = "var(--fg)";
  const mu = "var(--muted)";
  const ac = "var(--accent)";
  const t = { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", fill: mu } as const;

  return (
    <svg viewBox="0 0 760 540" className="block h-auto w-full lg:h-[calc(100svh-80px-150px)] lg:max-h-[620px]" role="img" aria-label="General arrangement drawing of a winding machine, built up stage by stage.">
      <defs>
        <pattern id="ga-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke={ac} strokeWidth="1" />
        </pattern>
        <pattern id="ga-floor" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke={mu} strokeWidth="1" />
        </pattern>
      </defs>

      {/* 1 — SPECIFY: the coil */}
      <g {...L(0)} fill="none" stroke={fg} strokeWidth={1}>
        <line x1={190} y1={250} x2={560} y2={250} stroke={mu} strokeDasharray="14 4 2 4" />
        <rect x={260} y={160} width={8} height={180} fill="var(--panel)" />
        <rect x={500} y={160} width={8} height={180} fill="var(--panel)" />
        <rect x={268} y={230} width={232} height={40} />
        <rect x={268} y={200} width={232} height={30} fill="url(#ga-hatch)" />
        <rect x={268} y={270} width={232} height={30} fill="url(#ga-hatch)" />
        <g stroke={mu}>
          <line x1={268} y1={186} x2={500} y2={186} />
          <line x1={268} y1={180} x2={268} y2={192} />
          <line x1={500} y1={180} x2={500} y2={192} />
          <line x1={528} y1={200} x2={528} y2={300} />
          <line x1={522} y1={200} x2={534} y2={200} />
          <line x1={522} y1={300} x2={534} y2={300} />
        </g>
        <text x={384} y={178} textAnchor="middle" {...t} stroke="none">W</text>
        <text x={538} y={254} {...t} stroke="none">ØD</text>
        <text x={268} y={322} {...t} stroke="none">COIL — FROM CUSTOMER DRAWING</text>
      </g>

      {/* 2 — DESIGN: controls + motion */}
      <g {...L(1)} fill="none" stroke={fg} strokeWidth={1}>
        <rect x={100} y={440} width={120} height={50} />
        <rect x={250} y={440} width={220} height={50} />
        <rect x={500} y={440} width={160} height={50} />
        <text x={160} y={469} textAnchor="middle" {...t} fill={fg} stroke="none">HMI</text>
        <text x={360} y={469} textAnchor="middle" {...t} fill={fg} stroke="none">PLC · CNC MOTION</text>
        <text x={580} y={469} textAnchor="middle" {...t} fill={fg} stroke="none">SERVO DRIVES</text>
        <line x1={220} y1={465} x2={250} y2={465} />
        <line x1={470} y1={465} x2={500} y2={465} />
        <path d="M 540 440 V 420 H 145 V 318" stroke={mu} />
        <path d="M 620 440 V 420 H 700 V 120 H 576" stroke={mu} />
        <circle cx={145} cy={300} r={18} />
        <text x={145} y={304} textAnchor="middle" {...t} fill={fg} stroke="none">M1</text>
        <circle cx={560} cy={120} r={14} />
        <text x={560} y={124} textAnchor="middle" {...t} fill={fg} stroke="none">M2</text>
        <text x={100} y={514} {...t} stroke="none">CONTROL CABINET — MECH · ELEC · PLC · CNC · EMBEDDED</text>
      </g>

      {/* 3 — BUILD: frame, spindle, traverse, tensioner, wire path */}
      <g {...L(2)} fill="none" stroke={fg} strokeWidth={1}>
        <rect x={90} y={360} width={580} height={22} fill="var(--panel)" />
        <rect x={100} y={196} width={90} height={164} />
        <line x1={190} y1={244} x2={260} y2={244} />
        <line x1={190} y1={256} x2={260} y2={256} />
        <rect x={570} y={226} width={70} height={134} />
        <line x1={508} y1={250} x2={570} y2={250} />
        <line x1={240} y1={128} x2={540} y2={128} strokeWidth={1.5} />
        <rect x={410} y={112} width={22} height={16} fill="var(--panel)" />
        <line x1={730} y1={360} x2={730} y2={70} />
        <circle cx={716} cy={70} r={14} fill="var(--panel)" />
        <path d="M 702 70 L 421 120 L 421 200" stroke={ac} strokeWidth={1.5} />
        <text x={240} y={110} {...t} stroke="none">TRAVERSE</text>
        <text x={106} y={190} {...t} stroke="none">HEADSTOCK</text>
        <text x={640} y={60} {...t} stroke="none" textAnchor="end">TENSIONER</text>
      </g>

      {/* 4 — INSTALL: floor, anchors, trial tag */}
      <g {...L(3)}>
        <line x1={70} y1={392} x2={690} y2={392} stroke={fg} />
        <rect x={70} y={393} width={620} height={10} fill="url(#ga-floor)" />
        <rect x={120} y={382} width={14} height={10} fill={fg} />
        <rect x={626} y={382} width={14} height={10} fill={fg} />
        <rect x={100} y={30} width={196} height={30} fill="none" stroke={ac} />
        <rect x={110} y={42} width={6} height={6} fill={ac} />
        <text x={124} y={49} {...t} fill={fg}>INSTALLATION · TRAINING</text>
      </g>

      {/* 5 — SUPPORT: service tag */}
      <g {...L(4)}>
        <rect x={100} y={70} width={196} height={30} fill="none" stroke={fg} />
        <text x={110} y={89} {...t} fill={fg}>SERVICE &amp; SPARES</text>
        <path d="M 296 85 H 330 V 150 H 410" fill="none" stroke={mu} strokeDasharray="3 3" />
      </g>
    </svg>
  );
}
