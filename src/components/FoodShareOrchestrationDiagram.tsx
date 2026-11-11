"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Tone = "emerald" | "blue" | "amber" | "indigo";

const STAGES = [
  {
    id: 0,
    label: "1. Supply",
    title: "Stage 1 — Surplus Food Posted (Or Predicted by AI)",
    subtitle: "Restaurants post 5+ lb batches in 30s · 24h ARIMA forecast",
    stroke: "#10B981",
  },
  {
    id: 1,
    label: "2. 4-Way Lock",
    title: "Stage 2 — 4-Way Match & 30-Second Lock",
    subtitle:
      "Locks batch only when Donor, Driver, Shelter & Patron align (Redis NX)",
    stroke: "#6366F1",
  },
  {
    id: 2,
    label: "3. Dispatch",
    title: "Stage 3 — 30-Minute Rescue & Nutritional Routing",
    subtitle: "One-tap volunteer pickup · Auto-verified within 50m GPS geofence",
    stroke: "#F59E0B",
  },
  {
    id: 3,
    label: "4. Patron Loop",
    title: "Stage 4 — Self-Funding Patron Loop (Natural Capitalism)",
    subtitle: "Diners eat at Donor venues for perks · SaaS revenue funds free rescue",
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
  { id: "restaurants", label: "Restaurants (5+ lbs/wk)" },
  { id: "grocers", label: "Grocers & Markets" },
  { id: "patrons", label: "Patron Diners (Fi)" },
  { id: "schools", label: "Schools & Venues" },
  { id: "pledges", label: "Patron Micro-Pledges ($10–$50)" },
] as const;

const TILES: { id: string; label: string; hint: string; tone: Tone }[] = [
  { id: "Fd", label: "Fd", hint: "Donor", tone: "emerald" },
  { id: "Fi", label: "Fi", hint: "Patron", tone: "blue" },
  { id: "Fv", label: "Fv", hint: "Volunteer", tone: "emerald" },
  { id: "Fr", label: "Fr", hint: "Recipient", tone: "emerald" },
  { id: "GPS", label: "GPS ≤50m", hint: "Auto-Verify", tone: "amber" },
  { id: "PATH", label: "PATH +40%", hint: "Tax Receipt", tone: "amber" },
];

const SOMATIC: { title: string; tone: Tone }[] = [
  {
    title: "1. Readiness Check (Location, Thermal Bags, Gas)",
    tone: "amber",
  },
  {
    title: "2. One-Tap Pickup Claim (<3s Thumb Bar)",
    tone: "emerald",
  },
  {
    title: "3. Auto-Verified GPS Drop-Off (≤50m)",
    tone: "amber",
  },
  {
    title: '4. "100 People Fed" Receipt + 20% Restaurant Coupon',
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
  if (stage === 3) {
    return id === "restaurants" || id === "patrons" || id === "pledges";
  }
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
  return id === "Fd" || id === "Fi" || id === "Fv";
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
  box = "px-3 py-3 text-xs md:text-sm",
}: {
  active: boolean;
  tone: Tone;
  children: ReactNode;
  className?: string;
  box?: string;
}) {
  return (
    <div
      className={`rounded-xl text-center leading-snug font-medium tracking-tight transition-all duration-500 ease-in-out motion-reduce:transition-none ${box} ${
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

function LayerLink({
  d,
  color,
  active,
}: {
  d: string;
  color: string;
  active: boolean;
}) {
  return (
    <>
      <div
        className="mx-auto my-1 h-4 w-px border-l border-dashed border-emerald-500/50 md:hidden"
        aria-hidden
      />
      <div className="hidden md:block">
        <Spine d={d} color={color} active={active} />
      </div>
    </>
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
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const stage = Math.floor(tick / 2) % STAGES.length;
  const dispatchBeat = tick % 2;

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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setTick((current) => current + 1);
    }, 1600);
    return () => window.clearInterval(id);
  }, [inView, paused]);

  const cycle = STAGES[stage];
  const somatic = somaticIndex(stage, dispatchBeat);
  const coOn = stage === 3;
  const workOn = stage === 0 || stage === 1;
  const bridgeTone: Tone | null = stage === 1 ? "amber" : stage === 3 ? "blue" : null;
  const hubOn = stage === 1;
  const volunteerOn = stage === 2;
  const orchestrationOn = stage === 2;
  const hungryOn = stage === 2;
  const topTraceOn = stage !== 2;
  const dispatchStroke = dispatchBeat === 1 ? "#F59E0B" : "#10B981";
  const bottomStroke = stage === 2 ? dispatchStroke : cycle.stroke;
  const fleetStroke =
    stage === 2 ? dispatchStroke : somatic !== null || volunteerOn ? "#10B981" : "#334155";

  return (
    <figure
      ref={rootRef}
      className="rounded-2xl border border-slate-800/80 bg-[#080B16] p-6 md:p-10"
      aria-label={`FoodShare orchestration diagram, ${cycle.title}`}
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

      <div className="rounded-2xl bg-[linear-gradient(to_right,#1e293b22_1px,transparent_1px),linear-gradient(to_bottom,#1e293b22_1px,transparent_1px)] bg-[size:24px_24px] p-4 md:p-6">
        <div className="sticky top-16 z-20 -mx-4 flex flex-col gap-4 border-b border-slate-800/80 bg-[#080B16]/95 px-4 py-3 backdrop-blur-md md:static md:mx-0 md:flex-row md:items-center md:justify-between md:border-slate-800/80 md:bg-transparent md:px-0 md:py-0 md:pb-4 md:backdrop-blur-none">
          <div>
            <p className="text-[10px] font-medium tracking-[0.16em] text-slate-500 uppercase">
              {inView && !paused ? "Live cycle" : "Cycle held"}
            </p>
            <p className="mt-1 text-sm font-medium tracking-tight text-white">
              {cycle.title}
            </p>
            <p className="text-xs text-slate-400">{cycle.subtitle}</p>
            <p className="sr-only" aria-live="polite">
              {cycle.title}. {cycle.subtitle}
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
                    setTick(item.id * 2);
                    setPaused(true);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-medium tracking-tight transition-all duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    selected
                      ? "bg-white text-slate-950"
                      : "bg-white/10 text-slate-300 hover:bg-white/15"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              aria-pressed={paused}
              onClick={() => setPaused((current) => !current)}
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-medium tracking-tight text-slate-200 transition-all duration-500 ease-in-out hover:border-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {paused ? "Resume" : "Pause"}
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
          <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-3">
            {INGRESS.map((slot, index) => (
              <Slot
                key={slot.id}
                active={ingressOn(slot.id, stage)}
                tone={ingressTone(slot.id)}
                box="px-2.5 py-2 text-xs md:px-4 md:py-3 md:text-sm"
                className={index === INGRESS.length - 1 ? "col-span-2 md:col-span-1" : ""}
              >
                {slot.label}
              </Slot>
            ))}
          </div>

          <LayerLink
            active={topTraceOn}
            color={cycle.stroke}
            d="M200 0 V14 H360 V32 M1000 0 V14 H840 V32 M600 0 V32"
          />

          <LayerLabel index="02">Gateway</LayerLabel>
          <div className="mt-3 grid grid-cols-1 items-stretch gap-3 md:grid-cols-[minmax(0,1fr)_10.5rem_minmax(0,1fr)] md:items-center">
            <Slot
              active={coOn}
              tone="blue"
              box="px-4 py-4 text-xs md:text-sm"
              className="text-left md:text-center"
            >
              <p>FoodShare.co (For-Profit SaaS & Patron Engine)</p>
              <p className="mt-2 text-[10px] font-medium tracking-[0.12em] uppercase opacity-80">
                NEW CUSTOMER ACQUISITION · B2B SAAS · PATRON PERKS
              </p>
            </Slot>
            <div
              className={`rounded-full px-3 py-3 text-center text-[11px] leading-snug font-medium tracking-tight transition-all duration-500 ease-in-out ${
                bridgeTone ? TONE_CLASS[bridgeTone] : GHOST
              }`}
            >
              SaaS & Paid Delivery Revenue Subsidizes Free 501(c)(3) Rescue.
            </div>
            <Slot
              active={workOn}
              tone="amber"
              box="px-4 py-4 text-xs md:text-sm"
              className="text-left md:text-center"
            >
              <p>FoodShare.work (501c3 Logistics & AI Engine)</p>
              <p className="mt-2 text-[10px] font-medium tracking-[0.12em] uppercase opacity-80">
                FREE LAST-MILE DISPATCH · REDIS GEO-LOCKS · 24H AI FORECAST
              </p>
            </Slot>
          </div>

          <LayerLink
            active={topTraceOn}
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
              className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-indigo-400/70 bg-indigo-500/15 p-4 text-center text-indigo-50 shadow-lg shadow-indigo-500/20 transition-all duration-500 ease-in-out motion-reduce:transition-none md:p-6 ${
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
                4-WAY ATOMIC LOCK (30s Redis Geo-Lock)
              </p>
            </div>

            <div className="flex flex-col">
              <Slot
                active={volunteerOn}
                tone="emerald"
                box="px-4 py-4 text-xs md:text-sm"
              >
                Volunteer Fleet (Fv)
              </Slot>
              <svg viewBox="0 0 4 28" className="mx-auto h-7 w-4" aria-hidden>
                <line
                  x1="2"
                  y1="0"
                  x2="2"
                  y2="28"
                  stroke={fleetStroke}
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  className={
                    volunteerOn || somatic !== null ? "fs-dash" : undefined
                  }
                />
              </svg>
              <div
                className={`flex min-h-[64px] items-center justify-center rounded-xl px-4 py-3 text-center text-xs leading-snug font-medium tracking-tight transition-all duration-500 ease-in-out motion-reduce:transition-none md:min-h-[110px] md:text-sm ${
                  somatic === null ? GHOST : TONE_CLASS[SOMATIC[somatic].tone]
                }`}
              >
                {somatic === null
                  ? "Awaiting 4-Way Match..."
                  : SOMATIC[somatic].title}
              </div>
            </div>
          </div>

          <LayerLink
            active={orchestrationOn}
            color={bottomStroke}
            d="M200 0 V14 H600 V32 M1000 0 V14 H600 M600 0 V32"
          />

          <LayerLabel index="04">Orchestration</LayerLabel>
          <div className="mt-3">
            <Slot
              active={orchestrationOn}
              tone="indigo"
              box="px-4 py-4 text-xs md:text-sm"
            >
              Smart Nutritional Routing · Matches Protein, Produce & Meals to
              Shelter Needs (Supabase pgvector)
            </Slot>
          </div>

          <LayerLink
            active={orchestrationOn || stage === 0}
            color={bottomStroke}
            d="M600 0 V14 H200 V32 M600 14 H1000 V32 M600 0 V32"
          />

          <LayerLabel index="05">Beneficiaries</LayerLabel>
          <div className="mt-3 grid grid-cols-3 gap-2 md:gap-4">
            {RECIPIENTS.map((slot) => (
              <Slot
                key={slot.id}
                active={recipientOn(slot.id, stage)}
                tone="emerald"
                box="px-1.5 py-2 text-xs md:px-3 md:py-3 md:text-sm"
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
            THE HUNGRY (Ultimate Beneficiary) · Dignified, Macro-Balanced Meals
            · 1 lb. Rescued = 10 People Fed (100,000 Meals/Wk Model)
          </div>
        </div>
      </div>
    </figure>
  );
}
