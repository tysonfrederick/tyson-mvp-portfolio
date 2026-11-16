"use client";

import { useEffect, useState } from "react";

const STAGES = [
  {
    label: "1/4 · Surplus Supply",
    color: "#10B981",
    proof: "Tax Math",
    href: "#section-1",
  },
  {
    label: "2/4 · 4-Way Lock",
    color: "#F59E0B",
    proof: "Redis SQL",
    href: "#section-4",
  },
  {
    label: "3/4 · 30m Rescue",
    color: "#10B981",
    proof: "Android UI",
    href: "#section-3",
  },
  {
    label: "4/4 · Patron Loop",
    color: "#3B82F6",
    proof: "Growth A/B",
    href: "#section-5",
  },
] as const;

export default function FoodShareStageTicker() {
  const [stage, setStage] = useState(0);
  const current = STAGES[stage] ?? STAGES[0];

  useEffect(() => {
    function onStageChange(event: Event) {
      const next = (event as CustomEvent<{ stage?: number }>).detail?.stage;
      if (typeof next !== "number" || next < 0 || next >= STAGES.length) return;
      setStage(next);
    }
    window.addEventListener("foodshare-stage-change", onStageChange);
    return () => window.removeEventListener("foodshare-stage-change", onStageChange);
  }, []);

  function stepBy(delta: number) {
    const next = (stage + delta + STAGES.length) % STAGES.length;
    setStage(next);
    window.dispatchEvent(
      new CustomEvent("foodshare-set-stage", { detail: { stage: next } }),
    );
  }

  return (
    <nav
      aria-label="Live orchestration stage"
      className="sticky top-3 z-30 mx-auto mt-8 mb-12 flex h-10 w-full max-w-3xl items-center justify-between gap-2 overflow-hidden rounded-full border border-white/15 bg-zinc-950/90 px-3 text-xs shadow-lg backdrop-blur-md"
    >
      <div className="flex min-w-0 items-center gap-1.5">
        <button
          type="button"
          aria-label="Previous stage"
          onClick={() => stepBy(-1)}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-zinc-200 transition-colors duration-500 ease-in-out hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          ◂
        </button>
        <button
          type="button"
          aria-label="Next stage"
          onClick={() => stepBy(1)}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-zinc-200 transition-colors duration-500 ease-in-out hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          ▸
        </button>
        <span
          aria-hidden
          className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full motion-reduce:animate-none"
          style={{ backgroundColor: current.color }}
        />
        <span
          aria-live="polite"
          className="min-w-0 truncate font-medium tracking-tight text-zinc-100"
        >
          {current.label}
        </span>
      </div>
      <a
        href={current.href}
        className="shrink-0 font-medium tracking-tight whitespace-nowrap text-zinc-200 transition-colors duration-500 ease-in-out hover:text-white"
      >
        ↗ {current.proof}
      </a>
    </nav>
  );
}
