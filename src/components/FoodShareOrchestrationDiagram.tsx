"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Tone = "emerald" | "blue" | "amber" | "indigo";

const STAGES = [
  {
    id: 0,
    name: "Predictive Supply",
    line: "ARIMA 24h & Smart Post",
    short: "Supply",
    stroke: "#10B981",
  },
  {
    id: 1,
    name: "4-Way Handshake",
    line: "Redis SET NX PX 30000",
    short: "Lock",
    stroke: "#6366F1",
  },
  {
    id: 2,
    name: "Last-Mile Dispatch",
    line: "Haversine GPS ≤50m",
    short: "Dispatch",
    stroke: "#F59E0B",
  },
  {
    id: 3,
    name: "Patron Capital Loop",
    line: "Fv → Fi cross-side conversion",
    short: "Patron",
    stroke: "#3B82F6",
  },
] as const;

const TONE_CLASS: Record<Tone, string> = {
  emerald:
    "scale-[1.02] border border-emerald-400/80 bg-emerald-500/15 text-emerald-50 shadow-lg shadow-emerald-500/25",
  blue: "scale-[1.02] border border-blue-400/80 bg-blue-500/15 text-blue-50 shadow-lg shadow-blue-500/25",
  amber:
    "scale-[1.02] border border-amber-400/80 bg-amber-500/15 text-amber-50 shadow-lg shadow-amber-500/25",
  indigo:
    "scale-[1.02] border border-indigo-400/80 bg-indigo-500/15 text-indigo-50 shadow-lg shadow-indigo-500/25",
};

const GHOST =
  "border border-dashed border-slate-800 bg-slate-900/30 text-slate-600";

const INGRESS = [
  { id: "restaurants", label: "Restaurants (5+ lbs/wk)", row: 1 },
  { id: "grocers", label: "Grocers & Markets", row: 1 },
  { id: "patrons", label: "Patron Diners (Fi)", row: 1 },
  { id: "schools", label: "Schools & Venues", row: 2 },
  { id: "pledges", label: "$10/$25/$50 Micro-Pledges", row: 2 },
] as const;

const TILES: { id: string; label: string; hint: string; tone: Tone }[] = [
  { id: "Fd", label: "Fd", hint: "Donor", tone: "emerald" },
  { id: "Fi", label: "Fi", hint: "Patron", tone: "blue" },
  { id: "Fv", label: "Fv", hint: "Volunteer", tone: "emerald" },
  { id: "Fr", label: "Fr", hint: "Recipient", tone: "emerald" },
  { id: "GPS", label: "GPS ≤50m", hint: "Haversine", tone: "amber" },
  { id: "PATH", label: "PATH +40%", hint: "Tax receipt", tone: "amber" },
];

const SOMATIC: { title: string; tone: Tone }[] = [
  { title: "1. Loc/Bag/Gas Check", tone: "amber" },
  { title: "2. <3s Fitts's Claim", tone: "emerald" },
  { title: "3. Haversine GPS ≤50m", tone: "amber" },
  {
    title: '4. "100 Fed" Card + 20% Donor Coupon (Fv → Fi)',
    tone: "blue",
  },
];

const RECIPIENTS = [
  { id: "shelters", label: "Shelters (Fr)" },
  { id: "banks", label: "Food Banks (Fr)" },
  { id: "churches", label: "Churches (Fr)" },
] as const;

function ingressOn(id: string, stage: number) {
  if (stage === 0) return id === "restaurants" || id === "grocers";
  if (stage === 1) {
    return id === "restaurants" || id === "patrons" || id === "schools";
  }
  if (stage === 3) return id === "patrons" || id === "pledges";
  return false;
}

function ingressTone(id: string): Tone {
  if (id === "patrons" || id === "pledges") return "blue";
  return "emerald";
}

function tileOn(id: string, stage: number) {
  if (stage === 0) return id === "Fd" || id === "PATH";
  if (stage === 1) return id === "Fd" || id === "Fi" || id === "Fv" || id === "Fr";
  if (stage === 2) return id === "Fv" || id === "GPS";
  return id === "Fi" || id === "Fv";
}

function recipientOn(id: string, stage: number) {
  if (stage === 0) return id === "banks";
  if (stage === 2) return true;
  return false;
}

function somaticIndex(stage: number, beat: number): number | null {
  if (stage === 1) return 0;
  if (stage === 2) return beat === 0 ? 1 : 2;
  if (stage === 3) return 3;
  return null;
}

function Slot({
  active,
  tone,
  children,
  className = "",
}: {
  active: boolean;
  tone: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl px-3 py-3 text-center text-xs leading-snug font-medium tracking-tight transition-all duration-500 ease-in-out motion-reduce:transition-none md:text-sm ${
        active ? TONE_CLASS[tone] : GHOST
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Spine({ d, color, active }: { d: string; color: string; active: boolean }) {
  return (
    <svg
      viewBox="0 0 1200 32"
      preserveAspectRatio="none"
      className="h-8 w-full"
      aria-hidden
    >
      <path
        d={d}
        fill="none"
        stroke={active ? color : "#334155"}
        strokeWidth="1.5"
        strokeDasharray="3 3"
        vectorEffect="non-scaling-stroke"
        className={active ? "fs-dash" : undefined}
      />
    </svg>
  );
}

function LayerLabel({ index, children }: { index: string; children: string }) {
  return (
    <p className="text-[10px] font-medium tracking-[0.16em] text-slate-500 uppercase">
      <span className="mr-2 font-mono text-slate-600">{index}</span>
      {children}
    </p>
  );
}

export default function FoodShareOrchestrationDiagram() {
  const rootRef = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [dispatchBeat, setDispatchBeat] = useState(0);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.28 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused) return;
    const id = window.setInterval(() => {
      setStage((current) => (current + 1) % STAGES.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [inView, paused]);

  useEffect(() => {
    if (stage !== 2) return;
    setDispatchBeat(0);
    const id = window.setTimeout(() => setDispatchBeat(1), 1600);
    return () => window.clearTimeout(id);
  }, [stage]);

  const cycle = STAGES[stage];
  const somatic = somaticIndex(stage, dispatchBeat);
  const coOn = stage === 3;
  const workOn = stage === 0;
  const hubOn = stage === 1;
  const volunteerOn = stage === 2;
  const orchestrationOn = stage === 2;
  const hungryOn = stage === 2;

  return (
    <figure
      ref={rootRef}
      className="overflow-hidden rounded-2xl border border-slate-800/80 bg-[#080B16] p-6 md:p-10"
      aria-label={`FoodShare orchestration diagram, stage ${stage}, ${cycle.name}`}
    >
      <style>{`
        @keyframes fs-dash {
          to { stroke-dashoffset: -24; }
        }
        .fs-dash {
          animation: fs-dash 1.1s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .fs-dash { animation: none; }
        }
      `}</style>

      <div
        className="rounded-2xl bg-[linear-gradient(to_right,#1e293b22_1px,transparent_1px),linear-gradient(to_bottom,#1e293b22_1px,transparent_1px)] bg-[size:24px_24px] p-4 md:p-6"
      >
        <div className="flex flex-col gap-4 border-b border-slate-800/80 pb-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-medium tracking-[0.16em] text-slate-500 uppercase">
              {inView && !paused ? "Live cycle" : "Cycle held"}
            </p>
            <p className="mt-1 text-sm font-medium tracking-tight text-white">
              Stage {stage} — {cycle.name}
            </p>
            <p className="text-xs text-slate-400">{cycle.line}</p>
            <p className="sr-only" aria-live="polite">
              Stage {stage}. {cycle.name}. {cycle.line}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {STAGES.map((item) => {
              const selected = item.id === stage;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    setStage(item.id);
                    setPaused(true);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-medium tracking-tight transition-all duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    selected
                      ? "bg-white text-slate-950"
                      : "bg-white/10 text-slate-300 hover:bg-white/15"
                  }`}
                >
                  {item.id} {item.short}
                </button>
              );
            })}
            <button
              type="button"
              aria-pressed={paused}
              onClick={() => setPaused((current) => !current)}
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-medium tracking-tight text-slate-200 transition-all duration-500 ease-in-out hover:border-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {paused ? "Auto-Cycle" : "Pause"}
            </button>
          </div>
        </div>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-medium tracking-[0.14em] text-slate-500 uppercase">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Sustenance
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Capital
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Telemetry
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            Hub
          </li>
        </ul>

        <div className="mt-6 flex flex-col">
          <LayerLabel index="01">Ingress</LayerLabel>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-6">
            {INGRESS.filter((slot) => slot.row === 1).map((slot) => (
              <Slot
                key={slot.id}
                active={ingressOn(slot.id, stage)}
                tone={ingressTone(slot.id)}
                className="sm:col-span-2"
              >
                {slot.label}
              </Slot>
            ))}
            {INGRESS.filter((slot) => slot.row === 2).map((slot, index) => (
              <Slot
                key={slot.id}
                active={ingressOn(slot.id, stage)}
                tone={ingressTone(slot.id)}
                className={
                  index === 0
                    ? "sm:col-span-2 sm:col-start-2"
                    : "sm:col-span-2"
                }
              >
                {slot.label}
              </Slot>
            ))}
          </div>

          <Spine
            active
            color={cycle.stroke}
            d="M200 0 V14 H360 V32 M1000 0 V14 H840 V32 M600 0 V32"
          />

          <LayerLabel index="02">Gateway</LayerLabel>
          <div className="mt-3 grid grid-cols-1 items-stretch gap-3 md:grid-cols-[minmax(0,1fr)_10.5rem_minmax(0,1fr)] md:items-center">
            <Slot active={coOn} tone="blue" className="px-4 py-4 text-left md:text-center">
              <p>FoodShare.co (For-Profit SaaS & Patron Engine)</p>
              <p className="mt-2 text-[10px] font-medium tracking-[0.12em] uppercase opacity-80">
                Next.js · Prisma · Stripe B2B · Customer Acquisition
              </p>
            </Slot>
            <div
              className={`rounded-full px-3 py-3 text-center text-[11px] leading-snug font-medium tracking-tight transition-all duration-500 ease-in-out ${
                coOn ? TONE_CLASS.blue : GHOST
              }`}
            >
              SaaS & Paid Delivery Revenue Subsidizes Free 501(c)(3) Rescue
            </div>
            <Slot active={workOn} tone="amber" className="px-4 py-4 text-left md:text-center">
              <p>FoodShare.work (501c3 Logistics & AI Engine)</p>
              <p className="mt-2 text-[10px] font-medium tracking-[0.12em] uppercase opacity-80">
                Node/Fastify · Redis Geospatial · ARIMA 24h Surplus
              </p>
            </Slot>
          </div>

          <Spine
            active
            color={cycle.stroke}
            d="M300 0 V14 H200 V32 M900 0 V14 H1000 V32 M600 0 V32"
          />

          <LayerLabel index="03">Core</LayerLabel>
          <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="grid grid-cols-3 gap-2">
              {TILES.map((tile) => {
                const active = tileOn(tile.id, stage);
                return (
                  <div
                    key={tile.id}
                    className={`flex aspect-square flex-col items-center justify-center rounded-xl px-1 text-center transition-all duration-500 ease-in-out motion-reduce:transition-none ${
                      active ? TONE_CLASS[tile.tone] : GHOST
                    }`}
                  >
                    <span className="text-[11px] font-medium tracking-tight md:text-xs">
                      {tile.label}
                    </span>
                    <span className="mt-1 text-[9px] tracking-[0.12em] uppercase opacity-70">
                      {tile.hint}
                    </span>
                  </div>
                );
              })}
            </div>

            <div
              className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-indigo-400/70 bg-indigo-500/15 px-4 py-6 text-center text-indigo-50 shadow-lg shadow-indigo-500/20 transition-all duration-500 ease-in-out motion-reduce:transition-none ${
                hubOn
                  ? "scale-[1.03] shadow-[0_0_42px_rgba(99,102,241,0.45)]"
                  : ""
              }`}
            >
              <div className="rounded-xl bg-white p-2">
                <Image
                  src="/images/foodshare/fs-logo4.2.1.png"
                  alt="FoodShare fs monogram"
                  width={514}
                  height={744}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-xs font-medium tracking-tight">
                .co (Profit) | .work (501c3)
              </p>
              <p
                className={`rounded-full px-3 py-2 font-mono text-[10px] leading-snug tracking-tight transition-all duration-500 ${
                  hubOn
                    ? "bg-indigo-400/30 text-white"
                    : "bg-indigo-950/60 text-indigo-100"
                }`}
              >
                ATOMIC LOCK: Redis SET NX PX 30000
              </p>
            </div>

            <div className="flex flex-col">
              <Slot active={volunteerOn} tone="emerald" className="px-4 py-4">
                Volunteer Fleet (Fv)
              </Slot>
              <svg
                viewBox="0 0 4 28"
                className="mx-auto h-7 w-4"
                aria-hidden
              >
                <line
                  x1="2"
                  y1="0"
                  x2="2"
                  y2="28"
                  stroke={volunteerOn || somatic !== null ? "#10B981" : "#334155"}
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  className={volunteerOn || somatic !== null ? "fs-dash" : undefined}
                />
              </svg>
              <div className="relative min-h-28">
                <div
                  className={`flex min-h-28 items-center justify-center rounded-xl px-3 py-4 text-center text-xs leading-snug font-medium tracking-tight transition-all duration-500 ease-in-out md:text-sm ${
                    somatic === null ? GHOST : TONE_CLASS[SOMATIC[somatic].tone]
                  }`}
                >
                  {somatic === null ? "Awaiting dispatch" : SOMATIC[somatic].title}
                </div>
              </div>
            </div>
          </div>

          <Spine
            active={orchestrationOn || volunteerOn}
            color={cycle.stroke}
            d="M200 0 V14 H600 V32 M1000 0 V14 H600 M600 0 V32"
          />

          <LayerLabel index="04">Orchestration</LayerLabel>
          <div className="mt-3">
            <Slot active={orchestrationOn} tone="indigo" className="px-4 py-4">
              Orchestration • Supabase pgvector Macro-Nutritional Matching
              (Protein / Produce / Carbs)
            </Slot>
          </div>

          <Spine
            active={orchestrationOn || stage === 0}
            color={cycle.stroke}
            d="M600 0 V14 H200 V32 M600 14 H1000 V32 M600 0 V32"
          />

          <LayerLabel index="05">Beneficiaries</LayerLabel>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {RECIPIENTS.map((slot) => (
              <Slot
                key={slot.id}
                active={recipientOn(slot.id, stage)}
                tone="emerald"
              >
                {slot.label}
              </Slot>
            ))}
          </div>
          <div
            className={`mt-3 rounded-xl px-4 py-4 text-center text-xs leading-snug font-medium tracking-tight transition-all duration-500 ease-in-out md:text-sm ${
              hungryOn ? TONE_CLASS.emerald : GHOST
            }`}
          >
            THE HUNGRY (Ultimate Beneficiary) • Dignified, Macro-Balanced Meals
            • 1 lb. Rescued = 10 People Fed (100,000 Meals/Wk Model)
          </div>
        </div>
      </div>
    </figure>
  );
}
