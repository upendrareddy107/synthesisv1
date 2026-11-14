"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * Hero instrument.
 *  - "Pick your coil": four setups (relay bobbin, HV transformer coil with
 *    interlayer paper, BLDC stator with flyer + core indexing, capacitor
 *    element from film + foil). Each names the Synthesis machine that winds it.
 *  - "Wind it yourself" (bobbin setups): the pointer drives the traverse;
 *    pitch error is measured live. "Let the machine wind it" takes over.
 *
 * Canvas drawing; DOM readouts via refs. Pauses off-screen.
 * Reduced motion: one static, fully wound frame per setup; no manual mode.
 */

export type PresetKey = "relay" | "hv" | "stator" | "capacitor";
export type PresetMeta = { key: PresetKey; label: string; feed: string; machine: string; href: string };

type Spec = { total: number; perLayer: number; layers: number; turnMs: number };
const SPEC: Record<PresetKey, Spec> = {
  relay: { total: 36 * 9, perLayer: 36, layers: 9, turnMs: 34 },
  hv: { total: 22 * 7, perLayer: 22, layers: 7, turnMs: 90 },
  stator: { total: 12 * 14, perLayer: 14, layers: 12, turnMs: 60 }, // layers = poles, perLayer = turns per pole
  capacitor: { total: 150, perLayer: 150, layers: 1, turnMs: 70 },
};
const HOLD_MS = 1600;
const DOFF_MS = 600;
const MANUAL_RESET_MS = 4500;
const MANUAL_TURN_MS = 80; // slower spindle when a person drives the traverse

type Colors = { fg: string; muted: string; line: string; accent: string; panel: string; bg: string };
const readColors = (el: HTMLElement): Colors => {
  const cs = getComputedStyle(el);
  const v = (n: string) => cs.getPropertyValue(n).trim();
  return { fg: v("--fg"), muted: v("--muted"), line: v("--line"), accent: v("--accent"), panel: v("--panel"), bg: v("--bg") };
};
const pad = (n: number, w = 4) => String(n).padStart(w, "0");
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function WindingInstrument({ presets }: { presets: PresetMeta[] }) {
  const [presetKey, setPresetKey] = useState<PresetKey>("relay");
  const [manual, setManual] = useState(false);
  const [reduce, setReduce] = useState(false);
  const preset = presets.find((p) => p.key === presetKey)!;
  const bobbin = presetKey === "relay" || presetKey === "hv";

  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const r1 = useRef<HTMLSpanElement>(null);
  const r2 = useRef<HTMLSpanElement>(null);
  const rPay = useRef<HTMLSpanElement>(null);
  const state = useRef({ preset: presetKey as PresetKey, manual: false, reset: true });

  // push UI choices into the animation loop without restarting it
  useEffect(() => {
    state.current.preset = presetKey;
    state.current.manual = manual && bobbin;
    state.current.reset = true;
  }, [presetKey, manual, bobbin]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    mq.addEventListener("change", sync);
    const id = requestAnimationFrame(sync);
    return () => {
      cancelAnimationFrame(id);
      mq.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    const el = wrap.current;
    const cv = canvas.current;
    if (!el || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    let C = readColors(el);
    const mono = getComputedStyle(el).getPropertyValue("--font-plex-mono") || "monospace";

    let W = 0, H = 0;
    const resize = () => {
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      W = r.width;
      H = r.height;
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(cv);

    const pointer = { x: -1, y: -1, energy: 0, inside: false };
    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      const nx = e.clientX - r.left, ny = e.clientY - r.top;
      const dx = pointer.x < 0 ? 0 : Math.abs(nx - pointer.x);
      pointer.x = nx;
      pointer.y = ny;
      pointer.inside = true;
      if (!state.current.manual) pointer.energy = Math.min(1, pointer.energy + dx / 120);
    };
    const onLeave = () => (pointer.inside = false);
    cv.addEventListener("pointermove", onMove);
    cv.addEventListener("pointerdown", onMove);
    cv.addEventListener("pointerleave", onLeave);

    // ---------- simulation ----------
    const sim = { turns: [] as number[], start: 0, lastTurn: 0, doneAt: 0, guideX: 0, errSum: 0 };

    const mobile = () => W < 640;
    const dancer = () => ({ x: W * (mobile() ? 0.3 : 0.42), y: H * 0.24 });

    const bobbinGeom = (k: PresetKey) => {
      const s = SPEC[k];
      const m = mobile();
      const g =
        k === "relay"
          ? { x0: W * (m ? 0.5 : 0.62), x1: W * (m ? 0.92 : 0.86), core: H * 0.07, flange: H * 0.22, axis: H * 0.6 }
          : { x0: W * (m ? 0.42 : 0.55), x1: W * (m ? 0.97 : 0.95), core: H * 0.09, flange: H * 0.33, axis: H * 0.62 };
      const pitch = (g.x1 - g.x0) / s.perLayer;
      const paper = k === "hv" ? 2.5 : 0;
      const lt = Math.min(pitch * 0.62 + paper, (g.flange - g.core - 6) / s.layers);
      return { ...g, pitch, lt, paper, rail: g.axis - g.flange - H * 0.06 };
    };
    const idealX = (k: PresetKey, i: number) => {
      const s = SPEC[k];
      const g = bobbinGeom(k);
      const layer = Math.floor(i / s.perLayer);
      const p = i % s.perLayer;
      const xi = layer % 2 === 0 ? p : s.perLayer - 1 - p;
      return g.x0 + g.pitch * (xi + 0.5);
    };
    /** Spacing error between consecutive turns in a layer: an even, steady hand scores well. */
    const pitchError = (k: PresetKey) => {
      const s = SPEC[k];
      const g = bobbinGeom(k);
      let e = 0, c = 0;
      for (let i = 1; i < sim.turns.length; i++) {
        if (i % s.perLayer === 0) continue; // traverse reverses between layers
        e += Math.min(1, Math.abs(Math.abs(sim.turns[i] - sim.turns[i - 1]) - g.pitch) / g.pitch);
        c++;
      }
      return c ? (e / c) * 100 : 0;
    };

    // ---------- drawing helpers ----------
    const label = (t: string, x: number, y: number, align: CanvasTextAlign = "left", color = C.muted) => {
      ctx.fillStyle = color;
      ctx.textAlign = align;
      ctx.fillText(t, x, y);
    };

    const drawPayoff = (time: number, k: PresetKey) => {
      const D = dancer();
      const disturb = pointer.energy;
      const baseAt = (x: number) => H * 0.5 + (D.y - H * 0.5) * (x / D.x);
      const amp = (x: number) => {
        const q = 1 - x / D.x;
        let a = H * 0.14 * Math.pow(q, 1.2) * (1 + disturb * 1.6);
        if (pointer.x >= 0 && pointer.x < D.x) a += H * 0.12 * disturb * Math.exp(-((x - pointer.x) ** 2) / 7200) * q;
        return a;
      };
      const wave = (x: number, ph: number) =>
        baseAt(x) + amp(x) * (0.72 * Math.sin(x * 0.018 - time * 0.0042 + ph) + 0.28 * Math.sin(x * 0.047 - time * 0.0071 + ph * 2));
      const traces: [number, number, string, number][] =
        k === "capacitor"
          ? [[-0.9, 0.3, C.fg, 0], [0, 1, C.fg, -5], [0.4, 1, C.accent, 5]]
          : [[-1.9, 0.18, C.fg, 0], [-0.9, 0.32, C.fg, 0], [0, 1, C.fg, 0]];
      for (const [ph, alpha, col, off] of traces) {
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = col;
        ctx.lineWidth = alpha === 1 ? 1.5 : 1;
        ctx.beginPath();
        for (let x = 0; x <= D.x; x += 3) {
          const y = wave(x, ph) + off * (1 - x / D.x);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      // dancer pulley + arm
      const arm = 18 + disturb * 10 * Math.sin(time * 0.02);
      ctx.strokeStyle = C.fg;
      ctx.lineWidth = 1;
      ctx.fillStyle = C.panel;
      ctx.beginPath();
      ctx.arc(D.x, D.y, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(D.x, D.y);
      ctx.lineTo(D.x + Math.cos(-0.6) * arm, D.y + Math.sin(-0.6) * arm + disturb * 6);
      ctx.stroke();
      ctx.fillStyle = C.accent;
      ctx.fillRect(D.x - 3, D.y - 3, 6, 6);
      label(k === "capacitor" ? "FILM + FOIL PAY-OFF" : "PAY-OFF", 8, H * 0.26);
      label("DANCER", D.x + 18, D.y - 14);
    };

    const drawBobbin = (k: PresetKey, time: number, doff: number, manualMode: boolean) => {
      const s = SPEC[k];
      const g = bobbinGeom(k);
      const D = dancer();
      const n = sim.turns.length;
      const curLayer = Math.min(s.layers - 1, Math.floor(Math.max(0, n - 1) / s.perLayer));
      const surface = (layer: number) => g.core + (layer + 1) * g.lt;

      ctx.globalAlpha = doff;
      if (n > 0) {
        const sf = surface(curLayer);
        ctx.fillStyle = C.panel;
        ctx.fillRect(g.x0, g.axis - sf, g.x1 - g.x0, sf * 2);
      }
      // interlayer paper (HV)
      if (k === "hv") {
        ctx.strokeStyle = C.muted;
        ctx.setLineDash([3, 3]);
        for (let L = 0; L < curLayer; L++) {
          const y = surface(L);
          ctx.beginPath();
          ctx.moveTo(g.x0, g.axis - y);
          ctx.lineTo(g.x1, g.axis - y);
          ctx.moveTo(g.x0, g.axis + y);
          ctx.lineTo(g.x1, g.axis + y);
          ctx.stroke();
        }
        ctx.setLineDash([]);
        if (curLayer > 0) label("- - INTERLAYER PAPER", g.x0, Math.min(H - 10, g.axis + g.flange + 14));
      }
      for (let i = 0; i < n; i++) {
        const layer = Math.floor(i / s.perLayer);
        if (layer < curLayer - 1) continue;
        const isCur = layer === curLayer;
        const x = sim.turns[i];
        const sf = surface(layer);
        ctx.strokeStyle = isCur ? C.accent : C.fg;
        ctx.globalAlpha = doff * (isCur ? 0.95 : 0.16);
        ctx.lineWidth = isCur ? 1.25 : 1;
        ctx.beginPath();
        ctx.moveTo(x - g.pitch * 0.35, g.axis - sf);
        ctx.lineTo(x + g.pitch * 0.35, g.axis + sf);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // bobbin, flanges, shaft
      ctx.strokeStyle = C.fg;
      ctx.lineWidth = 1;
      ctx.strokeRect(g.x0, g.axis - g.core, g.x1 - g.x0, g.core * 2);
      const fw = 7;
      ctx.fillStyle = C.panel;
      for (const fx of [g.x0 - fw, g.x1]) {
        ctx.fillRect(fx, g.axis - g.flange, fw, g.flange * 2);
        ctx.strokeRect(fx, g.axis - g.flange, fw, g.flange * 2);
      }
      ctx.strokeRect(g.x0 - fw - 34, g.axis - 8, 34, 16);
      ctx.strokeStyle = C.line;
      ctx.setLineDash([14, 4, 2, 4]);
      ctx.beginPath();
      ctx.moveTo(g.x0 - 60, g.axis);
      ctx.lineTo(W, g.axis);
      ctx.stroke();
      ctx.setLineDash([]);
      const rot = (n + (time % s.turnMs) / s.turnMs) * Math.PI * 2;
      ctx.fillStyle = C.accent;
      ctx.beginPath();
      ctx.arc(g.x0 - fw - 17, g.axis + Math.sin(rot) * 5, 2, 0, Math.PI * 2);
      ctx.fill();

      // traverse
      const gx = sim.guideX;
      const lay = n === 0 ? -1 : Math.floor((n - 1) / s.perLayer);
      const contact = g.axis - surface(lay);
      ctx.strokeStyle = C.fg;
      ctx.beginPath();
      ctx.moveTo(g.x0 - fw, g.rail);
      ctx.lineTo(g.x1 + fw, g.rail);
      ctx.stroke();
      ctx.strokeStyle = C.accent;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(D.x + 12, D.y);
      ctx.lineTo(gx, g.rail - 10);
      ctx.lineTo(gx, contact);
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.fillStyle = C.panel;
      ctx.fillRect(gx - 9, g.rail - 18, 18, 14);
      ctx.strokeStyle = manualMode ? C.accent : C.fg;
      ctx.strokeRect(gx - 9, g.rail - 18, 18, 14);
      ctx.fillStyle = C.accent;
      ctx.fillRect(gx - 2.5, g.rail - 13.5, 5, 5);
      if (!mobile()) label(manualMode ? "TRAVERSE · YOUR HAND" : "TRAVERSE", g.x0 - fw, g.rail - 30, "left", manualMode ? C.accent : C.muted);
      if (!mobile()) label("SPINDLE", W - 8, g.axis - 12, "right");
    };

    const drawStator = (time: number, n: number, doff: number) => {
      const s = SPEC.stator;
      const N = s.layers;
      const TPP = s.perLayer;
      const D = dancer();
      const m = mobile();
      const cx = W * (m ? 0.68 : 0.76);
      const cy = H * 0.6;
      const R = H * (m ? 0.1 : 0.12);
      const L = H * 0.15;
      const w = H * 0.045;
      const p = Math.min(N - 1, Math.floor(Math.max(0, n - 1) / TPP));
      const k = n === 0 ? 0 : ((n - 1) % TPP) + 1;
      const step = (Math.PI * 2) / N;
      const into = clamp((k - 0.5) / 2.5, 0, 1);
      const rot = -(p - 1 + easeOut(p === 0 ? 1 : into)) * step;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.globalAlpha = doff;
      // core
      ctx.strokeStyle = C.fg;
      ctx.lineWidth = 1;
      ctx.fillStyle = C.panel;
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, R * 0.45, 0, Math.PI * 2);
      ctx.stroke();
      for (let i = 0; i < N; i++) {
        ctx.save();
        ctx.rotate(i * step - Math.PI / 2);
        // pole: along +x from R to R+L
        ctx.globalAlpha = doff;
        ctx.fillStyle = C.panel;
        ctx.strokeStyle = C.fg;
        ctx.fillRect(R, -w / 2, L, w);
        ctx.strokeRect(R, -w / 2, L, w);
        ctx.fillRect(R + L, -w * 0.95, 5, w * 1.9);
        ctx.strokeRect(R + L, -w * 0.95, 5, w * 1.9);
        const c = i < p ? TPP : i === p ? k : 0;
        const perRow = 7;
        for (let j = 0; j < c; j++) {
          const layer = Math.floor(j / perRow);
          const pos = layer % 2 === 0 ? j % perRow : perRow - 1 - (j % perRow);
          const rr = R + 5 + pos * ((L - 10) / (perRow - 1));
          const half = w / 2 + 2 + layer * 3;
          ctx.strokeStyle = i === p ? C.accent : C.fg;
          ctx.globalAlpha = doff * (i === p ? 0.95 : 0.35);
          ctx.beginPath();
          ctx.moveTo(rr - 1.5, -half);
          ctx.lineTo(rr + 1.5, half);
          ctx.stroke();
        }
        ctx.restore();
      }
      ctx.restore();
      ctx.globalAlpha = 1;

      // flyer above the indexed pole (which now points up)
      const spin = (n + (time % s.turnMs) / s.turnMs) * Math.PI * 2;
      const perRow = 7;
      const j = Math.max(0, k - 1);
      const layer = Math.floor(j / perRow);
      const pos = layer % 2 === 0 ? j % perRow : perRow - 1 - (j % perRow);
      const ty = cy - (R + 5 + pos * ((L - 10) / (perRow - 1)));
      const hub = { x: cx, y: cy - R - L - H * 0.1 };
      const nx = cx + Math.cos(spin) * (w / 2 + 12);
      ctx.strokeStyle = C.fg;
      ctx.beginPath();
      ctx.moveTo(hub.x, hub.y);
      ctx.lineTo(nx, ty - 6);
      ctx.stroke();
      ctx.fillStyle = C.panel;
      ctx.beginPath();
      ctx.arc(hub.x, hub.y, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = C.accent;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(D.x + 12, D.y);
      ctx.lineTo(hub.x, hub.y);
      ctx.lineTo(nx, ty - 6);
      ctx.lineTo(cx, ty);
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.fillStyle = C.accent;
      ctx.fillRect(nx - 3, ty - 9, 6, 6);
      label("FLYER", hub.x + 16, hub.y);
      if (!m) label("STATOR · INDEXING", cx + R + L + 22, cy);
    };

    const drawCapacitor = (time: number, n: number, doff: number) => {
      const s = SPEC.capacitor;
      const D = dancer();
      const m = mobile();
      const cx = W * (m ? 0.7 : 0.76);
      const cy = H * 0.58;
      const r0 = H * 0.035;
      const rMax = H * (m ? 0.24 : 0.28);
      const r = r0 + (rMax - r0) * (n / s.total);
      const spin = (n + (time % s.turnMs) / s.turnMs) * Math.PI * 2;
      const turnsVis = Math.max(1, Math.round((n / s.total) * 30));

      ctx.save();
      ctx.translate(cx, cy);
      ctx.globalAlpha = doff;
      ctx.fillStyle = C.panel;
      ctx.beginPath();
      ctx.arc(0, 0, r + 2, 0, Math.PI * 2);
      ctx.fill();
      const spiral = (color: string, alpha: number, phase: number) => {
        ctx.strokeStyle = color;
        ctx.globalAlpha = doff * alpha;
        ctx.beginPath();
        const thMax = turnsVis * Math.PI * 2;
        for (let th = 0; th <= thMax; th += 0.12) {
          const rr = r0 + (r - r0) * (th / thMax);
          const a = th + phase - spin;
          const x = Math.cos(a) * rr, y = Math.sin(a) * rr;
          if (th === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      };
      if (n > 0) {
        spiral(C.fg, 0.4, 0);
        spiral(C.accent, 0.95, Math.PI);
      }
      ctx.globalAlpha = 1;
      ctx.strokeStyle = C.fg;
      ctx.fillStyle = C.bg;
      ctx.beginPath();
      ctx.arc(0, 0, r0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      // feeds: film + foil to the top tangent
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = C.fg;
      ctx.beginPath();
      ctx.moveTo(D.x + 12, D.y - 3);
      ctx.lineTo(cx, cy - r - 3);
      ctx.stroke();
      ctx.strokeStyle = C.accent;
      ctx.beginPath();
      ctx.moveTo(D.x + 12, D.y + 3);
      ctx.lineTo(cx, cy - r);
      ctx.stroke();
      ctx.lineWidth = 1;
      label("MANDREL", cx, cy + rMax + 22, "center");
      if (!m) {
        label("FILM", (D.x + cx) / 2, (D.y + cy - r) / 2 - 12);
        label("FOIL", (D.x + cx) / 2, (D.y + cy - r) / 2 + 16, "left", C.accent);
      }
    };

    // ---------- loop ----------
    const reduceNow = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0, running = false, last = "";

    const frame = (now: number) => {
      const st = state.current;
      const k = st.preset;
      const s = SPEC[k];
      const isBobbin = k === "relay" || k === "hv";
      if (st.reset) {
        st.reset = false;
        sim.turns = [];
        sim.start = now;
        sim.lastTurn = now;
        sim.doneAt = 0;
        if (isBobbin) sim.guideX = idealX(k, 0);
        pointer.energy = 0;
      }
      const t = now - sim.start;
      let doff = 1;
      let n: number;

      if (st.manual && isBobbin) {
        const g = bobbinGeom(k);
        if (pointer.inside && pointer.x >= 0) {
          const target = clamp(pointer.x, g.x0 + g.pitch / 2, g.x1 - g.pitch / 2);
          sim.guideX += (target - sim.guideX) * 0.35;
        }
        if (sim.turns.length < s.total && now - sim.lastTurn >= Math.max(s.turnMs, MANUAL_TURN_MS)) {
          sim.turns.push(sim.guideX);
          sim.lastTurn = now;
          if (sim.turns.length === s.total) sim.doneAt = now;
        }
        if (sim.doneAt && now - sim.doneAt > MANUAL_RESET_MS) st.reset = true;
        n = sim.turns.length;
      } else {
        const cycle = s.total * s.turnMs + HOLD_MS + DOFF_MS;
        const tc = reduceNow ? s.total * s.turnMs : t % cycle;
        if (!reduceNow && t >= cycle && tc < s.turnMs) st.reset = true;
        const windEnd = s.total * s.turnMs;
        n = tc < windEnd ? Math.floor(tc / s.turnMs) + 1 : s.total;
        if (tc > windEnd + HOLD_MS) doff = Math.max(0, 1 - (tc - windEnd - HOLD_MS) / DOFF_MS);
        if (isBobbin) {
          if (n < sim.turns.length) sim.turns = [];
          while (sim.turns.length < n) sim.turns.push(idealX(k, sim.turns.length));
          sim.guideX = sim.turns.length ? sim.turns[sim.turns.length - 1] : idealX(k, 0);
        }
      }
      pointer.energy *= 0.965;

      ctx.clearRect(0, 0, W, H);
      ctx.font = `10px ${mono}`;
      ctx.textBaseline = "middle";
      ctx.lineCap = "round";
      ctx.strokeStyle = C.line;
      ctx.lineWidth = 1;
      const D = dancer();
      ctx.beginPath();
      ctx.moveTo(D.x, 0);
      ctx.lineTo(D.x, H);
      ctx.stroke();
      drawPayoff(reduceNow ? 0 : now, k);
      if (isBobbin) drawBobbin(k, reduceNow ? 0 : now, doff, st.manual);
      else if (k === "stator") drawStator(reduceNow ? 0 : now, n, doff);
      else drawCapacitor(reduceNow ? 0 : now, n, doff);

      // readouts
      let a = "", b = "";
      if (isBobbin) {
        const layer = Math.min(s.layers, Math.floor(Math.max(0, n - 1) / s.perLayer) + 1);
        a = `TURN ${pad(n)} · LAYER ${layer}/${s.layers}`;
        b = `PITCH ERROR ${st.manual ? pitchError(k).toFixed(1) : "0.0"}%`;
      } else if (k === "stator") {
        const p = Math.min(s.layers, Math.floor(Math.max(0, n - 1) / s.perLayer) + 1);
        a = `POLE ${pad(p, 2)}/${s.layers} · TURN ${pad(n === 0 ? 0 : ((n - 1) % s.perLayer) + 1, 2)}`;
        b = "CORE INDEXING · AUTO";
      } else {
        a = `TURN ${pad(n)} / ${s.total}`;
        b = "FILM + FOIL · ELEMENT GROWING";
      }
      const key = a + b;
      if (key !== last) {
        last = key;
        if (r1.current) r1.current.textContent = a;
        if (r2.current) r2.current.textContent = b;
      }
      const ps = st.manual ? "IN YOUR HANDS" : pointer.energy > 0.25 ? "DISTURBED" : "SETTLING";
      if (rPay.current && rPay.current.textContent !== ps) rPay.current.textContent = ps;

      if (running) raf = requestAnimationFrame(frame);
    };

    const play = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    let staticTimer = 0;
    if (reduceNow) {
      // render a static frame whenever the setup changes
      const tick = () => {
        frame(performance.now());
        staticTimer = window.setTimeout(tick, 250);
      };
      tick();
    }
    const io = new IntersectionObserver(([e]) => (e.isIntersecting && !reduceNow ? play() : pause()), { threshold: 0.05 });
    io.observe(cv);
    const onVis = () => (document.hidden ? pause() : !reduceNow && play());
    document.addEventListener("visibilitychange", onVis);
    const mo = new MutationObserver(() => (C = readColors(el)));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      pause();
      clearTimeout(staticTimer);
      io.disconnect();
      ro.disconnect();
      mo.disconnect();
      cv.removeEventListener("pointermove", onMove);
      cv.removeEventListener("pointerdown", onMove);
      cv.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const manualOn = manual && bobbin && !reduce;

  return (
    <div ref={wrap} className="relative">
      {/* controls */}
      <div className="page-x flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-line py-2">
        <div className="flex min-w-0 items-center gap-2">
          <p className="label shrink-0 text-muted">Wind a</p>
          <div role="radiogroup" aria-label="Coil to wind" className="flex gap-1 overflow-x-auto">
            {presets.map((p) => {
              const on = p.key === presetKey;
              return (
                <button
                  key={p.key}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setPresetKey(p.key)}
                  className={`label shrink-0 border px-1.5 py-1 whitespace-nowrap transition-colors duration-(--duration-fast) ${
                    on ? "border-accent bg-accent text-accent-fg" : "border-line text-fg/80 hover:border-fg/60"
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>
        {!reduce && (
          <button
            type="button"
            aria-pressed={manualOn}
            disabled={!bobbin}
            onClick={() => setManual((v) => !v)}
            title={bobbin ? undefined : "Hand winding is available for bobbin coils"}
            className={`label flex shrink-0 items-center gap-1 border px-1.5 py-1 transition-colors duration-(--duration-fast) disabled:cursor-not-allowed disabled:opacity-40 ${
              manualOn ? "border-accent text-accent" : "border-fg/40 text-fg hover:border-accent hover:text-accent"
            }`}
          >
            <span aria-hidden="true" className={`inline-block h-1 w-1 ${manualOn ? "bg-accent" : "border border-current"}`} />
            {manualOn ? "Let the machine wind it" : "Wind it yourself"}
          </button>
        )}
      </div>

      <div className="relative">
        <canvas
          ref={canvas}
          className={`block h-[320px] w-full touch-pan-y md:h-[380px] xl:h-[420px] ${manualOn ? "cursor-ew-resize" : ""}`}
          role="img"
          aria-label={`Animated schematic: ${preset.label} being wound on the ${preset.machine}.`}
        />
        {manualOn && (
          <p className="label pointer-events-none absolute top-2 right-(--margin) bg-bg/80 px-1 py-0.5 text-accent">
            Move across the bobbin to guide the wire
          </p>
        )}
      </div>

      {/* readouts */}
      <div className="page-grid border-t border-line pt-2 pb-2">
        <div className="col-span-2 md:col-span-4">
          <p className="label text-muted">Ch 1 · Pay-off</p>
          <p className="label mt-0.5 text-fg">{preset.feed}</p>
          <p className="label mt-0.5 text-muted">
            <span ref={rPay}>SETTLING</span>
          </p>
        </div>
        <div className="hidden text-center md:col-span-4 md:block">
          <p className="label text-muted">Wound on</p>
          <p className="label mt-0.5 text-fg">{preset.machine}</p>
          <Link href={preset.href} className="label mt-0.5 inline-flex items-center gap-1 text-accent hover:underline">
            View machine <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="col-span-2 text-right md:col-span-4" aria-hidden="true">
          <p className="label text-muted">Ch 2 · Spindle</p>
          <p className="label mt-0.5 tabular-nums text-fg">
            <span ref={r1}>TURN 0000</span>
          </p>
          <p className="label mt-0.5 tabular-nums text-accent">
            <span ref={r2}>PITCH ERROR 0.0%</span>
          </p>
        </div>
        {/* mobile: machine link */}
        <div className="col-span-full mt-2 flex items-center justify-between border-t border-line pt-2 md:hidden">
          <p className="label text-fg">
            <span className="text-muted">Wound on · </span>
            {preset.machine}
          </p>
          <Link href={preset.href} className="label text-accent">
            View →
          </Link>
        </div>
      </div>
    </div>
  );
}
