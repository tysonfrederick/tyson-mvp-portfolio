import type { Metadata } from "next";
import LabsShowcase from "@/components/labs/LabsShowcase";
import { getLabViews } from "@/data/lab-assets";

export const metadata: Metadata = {
  title: "The Wedge Lab — Tyson Frederick",
  description:
    "Live wedge apps and field telemetry: Shadow Telemetry, Wage Odometer, and FXD Sandbox Live.",
};

export default function LabsPage() {
  const experiments = getLabViews();

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 pb-24 pt-16 font-sans md:px-12 md:pb-32 md:pt-20">
      <header className="max-w-5xl">
        <p className="inline-flex rounded-full border border-white/10 bg-zinc-900/50 px-4 py-2 text-xs font-medium tracking-tight text-zinc-300">
          <span className="text-emerald-400">●</span>
          <span className="ml-2">
            APPLIED R&D · WEDGE APPS · AI-ORCHESTRATED PROTOTYPES
          </span>
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
          The Wedge Lab: Rapid Field Instruments & Live Telemetry
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Alongside the deep, multi-year systems case studies, this lab houses
          focused, single-purpose wedge apps. Each instrument is architected
          and shipped through spec-driven AI orchestration to clear an
          immediate bottleneck on the physical floor, in behavior, or in data
          retrieval.
        </p>
      </header>

      <LabsShowcase experiments={experiments} />
    </main>
  );
}
