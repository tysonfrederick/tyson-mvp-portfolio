"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import type { LabExperimentView, LabStatusTone } from "@/data/labs";

type ViewportMode = "handset" | "canvas";

const toneClass: Record<LabStatusTone, string> = {
  amber: "bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.85)]",
  emerald: "bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.85)]",
  cyan: "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.85)]",
};

type LabsShowcaseProps = {
  experiments: LabExperimentView[];
};

function subscribeToHash(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);
  return () => window.removeEventListener("hashchange", onStoreChange);
}

function readHash() {
  return window.location.hash.replace(/^#/, "");
}

function StatusDot({ tone }: { tone: LabStatusTone }) {
  return (
    <span
      className={`inline-flex h-2 w-2 shrink-0 rounded-full ${toneClass[tone]}`}
      aria-hidden="true"
    />
  );
}

function LabStill({
  experiment,
}: {
  experiment: LabExperimentView;
}) {
  if (!experiment.imageSrc) {
    return (
      <div className="absolute inset-0 flex items-end bg-zinc-950 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.14),transparent_36%)] p-6">
        <p className="text-sm font-medium tracking-tight text-zinc-300">
          {experiment.title}
        </p>
      </div>
    );
  }

  return (
    <Image
      src={experiment.imageSrc}
      alt={`${experiment.title} instrument screenshot`}
      fill
      className="object-cover object-top"
      sizes="(min-width: 1024px) 33vw, 100vw"
    />
  );
}

export default function LabsShowcase({ experiments }: LabsShowcaseProps) {
  const hash = useSyncExternalStore(subscribeToHash, readHash, () => "");
  const [chosenId, setChosenId] = useState<string | null>(null);
  const [viewport, setViewport] = useState<ViewportMode>("handset");
  const hashed = experiments.some((experiment) => experiment.id === hash)
    ? hash
    : "";
  const activeId = chosenId ?? (hashed || experiments[0]?.id || "");

  const active =
    experiments.find((experiment) => experiment.id === activeId) ??
    experiments[0];

  if (!active) return null;

  function selectLab(id: string, scroll: boolean) {
    setChosenId(id);
    const nextHash = `#${id}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
    if (scroll) {
      document.getElementById("live-theater")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <div className="mt-16">
      <section
        id="live-theater"
        aria-label="Live Instrument Theater"
        className="scroll-mt-28"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-tight text-zinc-400">
              Live Instrument Theater
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
              {active.title}
            </h2>
          </div>
          <p className="flex items-center gap-2 text-sm text-zinc-300">
            <StatusDot tone={active.statusTone} />
            {active.status}
          </p>
        </div>

        <div
          className="mt-6 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Lab instruments"
        >
          {experiments.map((experiment) => {
            const selected = experiment.id === active.id;
            return (
              <button
                key={experiment.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => selectLab(experiment.id, false)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm tracking-tight transition-all duration-500 ${
                  selected
                    ? "border-white/20 bg-white text-black"
                    : "border-white/10 bg-zinc-900/50 text-zinc-300 hover:border-white/20 hover:text-white"
                }`}
              >
                <StatusDot tone={experiment.statusTone} />
                {experiment.title}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/10 bg-zinc-900/50 p-3 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Viewport"
          >
            <button
              type="button"
              aria-pressed={viewport === "handset"}
              onClick={() => setViewport("handset")}
              className={`rounded-full px-4 py-2 text-sm tracking-tight transition-all duration-500 ${
                viewport === "handset"
                  ? "bg-white text-black"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              📱 Mobile Handset (412×860)
            </button>
            <button
              type="button"
              aria-pressed={viewport === "canvas"}
              onClick={() => setViewport("canvas")}
              className={`rounded-full px-4 py-2 text-sm tracking-tight transition-all duration-500 ${
                viewport === "canvas"
                  ? "bg-white text-black"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              🖥️ Full Canvas (100% Width)
            </button>
          </div>
          <a
            href={active.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm tracking-tight text-zinc-200 transition-all duration-500 hover:border-white/30 hover:text-white"
          >
            ↗ Open Standalone App
          </a>
        </div>

        <div className="mt-4">
          {viewport === "handset" ? (
            <div className="mx-auto w-full max-w-[436px]">
              <div className="rounded-[2.75rem] border border-slate-800/80 bg-[#080B16] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <div className="mb-3 flex items-center justify-center">
                  <span className="h-1.5 w-16 rounded-full bg-white/15" />
                </div>
                <div className="relative aspect-[412/860] w-full overflow-hidden rounded-[2rem] bg-black ring-1 ring-white/10">
                  <iframe
                    key={`${active.id}-handset`}
                    src={active.liveUrl}
                    title={`${active.title} live handset`}
                    className="absolute inset-0 h-full w-full border-0 bg-black"
                    loading="eager"
                    allow="fullscreen"
                  />
                </div>
                <div className="mt-3 flex justify-center">
                  <span className="h-1.5 w-24 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080B16] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <iframe
                key={`${active.id}-canvas`}
                src={active.liveUrl}
                title={`${active.title} live canvas`}
                className="h-[min(860px,78vh)] min-h-[32rem] w-full border-0 bg-black"
                loading="eager"
                allow="fullscreen"
              />
            </div>
          )}
        </div>
      </section>

      <section aria-label="Architectural breakdown" className="mt-24">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          Architectural Breakdown
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {experiments.map((experiment) => {
            const selected = experiment.id === active.id;
            return (
              <article
                key={experiment.id}
                id={experiment.id}
                className={`flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border bg-zinc-900/50 transition-all duration-500 ${
                  selected ? "border-white/30" : "border-white/10"
                }`}
              >
                <div className="relative aspect-[16/10] bg-zinc-950">
                  <LabStill experiment={experiment} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium tracking-tight text-zinc-400">
                    {experiment.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                    {experiment.title}
                  </h3>
                  <p className="mt-3 flex items-center gap-2 text-sm text-zinc-300">
                    <StatusDot tone={experiment.statusTone} />
                    {experiment.status}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {experiment.thesis}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
                    {experiment.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${toneClass[experiment.statusTone]}`}
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {experiment.stack.map((pill) => (
                      <li
                        key={pill}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs tracking-tight text-zinc-300"
                      >
                        {pill}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => selectLab(experiment.id, true)}
                      className="rounded-full bg-white px-4 py-2 text-sm tracking-tight text-black transition-all duration-500 hover:bg-zinc-200"
                    >
                      Load in Live Theater ↑
                    </button>
                    <a
                      href={experiment.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 px-4 py-2 text-sm tracking-tight text-zinc-200 transition-all duration-500 hover:border-white/30 hover:text-white"
                    >
                      Launch Standalone ↗
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
