"use client";

import { useState } from "react";

type Mode = "ambient" | "triage";

const STEPS = [
  {
    id: "01",
    title: "Dashboard & Auth",
    system:
      'firebase_auth + Mandatory "Loc, Bag, Gas" Check-In',
    note: "SplashScreen → login-signup-Activity.java",
  },
  {
    id: "02",
    title: "Triage Agenda",
    system: "Santa Cruz / San Jose Map Vector",
    note: "hasAddress → openMapDriveTo",
  },
  {
    id: "03",
    title: "Pickup Checklist",
    system: "Somatic UI Bottom Thumb Bar",
    note: "appcompat.NavDrawer · Recycler/adapter/View",
  },
  {
    id: "04",
    title: "Double-Action Confirmed",
    system: "Mistake-Proof Cognitive Justice Modal",
    note: "CONFIRM ITEMS / GO BACK",
  },
  {
    id: "05",
    title: "Delivery Handshake",
    system: "Haversine GPS ≤50m Auto-Verify",
    note: "Zero-input drop-off confirmation",
  },
  {
    id: "06",
    title: "Impact Validation",
    system: '"You Just Fed 100 People!" Dopamine Loop',
    note: "1 lb. rescued = 10 people fed",
  },
] as const;

const CHECKS = ["Loc", "Bag", "Gas"] as const;

function sceneForStep(step: number): { mode: Mode; modal: boolean } {
  if (step === 0) return { mode: "ambient", modal: false };
  if (step === 3) return { mode: "triage", modal: true };
  return { mode: "triage", modal: false };
}

export default function FoodShareHandshakeModule() {
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState<Mode>("ambient");
  const [modal, setModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  function selectStep(index: number) {
    const scene = sceneForStep(index);
    setStep(index);
    setMode(scene.mode);
    setModal(scene.modal);
    setConfirmed(index === 5);
  }

  function selectMode(next: Mode) {
    setMode(next);
    setModal(false);
    if (next === "ambient") setConfirmed(false);
  }

  const active = STEPS[step];
  const showImpact = confirmed || step === 5;
  const showGps = mode === "triage" && step === 4 && !modal;
  const showChecklist = mode === "triage" && (step === 2 || step === 3);
  const showMap = mode === "triage" && step === 1 && !modal;

  return (
    <div className="rounded-2xl border border-slate-800/80 bg-[#080B16] p-6 md:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:items-start">
        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              aria-pressed={mode === "ambient"}
              onClick={() => selectMode("ambient")}
              className={`rounded-xl px-3 py-3 text-left transition-all duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                mode === "ambient"
                  ? "bg-slate-800 text-white"
                  : "border border-dashed border-slate-800 text-slate-500"
              }`}
            >
              <span className="block text-[10px] font-medium tracking-[0.14em] uppercase">
                State A
              </span>
              <span className="mt-1 block text-xs font-medium tracking-tight">
                Ambient · Somatic Minimum
              </span>
            </button>
            <button
              type="button"
              aria-pressed={mode === "triage"}
              onClick={() => selectMode("triage")}
              className={`rounded-xl px-3 py-3 text-left transition-all duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                mode === "triage"
                  ? "bg-amber-500/15 text-amber-50 shadow-lg shadow-amber-500/20"
                  : "border border-dashed border-slate-800 text-slate-500"
              }`}
            >
              <span className="block text-[10px] font-medium tracking-[0.14em] uppercase">
                State B
              </span>
              <span className="mt-1 block text-xs font-medium tracking-tight">
                Triage · 30-Second Share
              </span>
            </button>
          </div>

          <div
            className={`relative mt-4 overflow-hidden rounded-[1.6rem] border border-slate-800 bg-black transition-all duration-500 ease-in-out ${
              mode === "ambient" ? "min-h-[460px]" : "min-h-[560px]"
            }`}
          >
            <div className="flex h-full min-h-[inherit] flex-col bg-[linear-gradient(to_right,#1e293b22_1px,transparent_1px),linear-gradient(to_bottom,#1e293b22_1px,transparent_1px)] bg-[size:24px_24px] p-4">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] tracking-[0.18em] text-slate-500">
                  FOODSHARE.WORK
                </p>
                <p className="font-mono text-[10px] text-slate-600">v0.2.3</p>
              </div>

              {mode === "ambient" ? (
                <div className="flex flex-1 flex-col justify-center gap-6 px-2">
                  <p className="text-center text-[10px] font-medium tracking-[0.18em] text-slate-500 uppercase">
                    {step === 0 ? "Pilot's Checklist" : "Volunteer No Share"}
                  </p>
                  <ul className="grid grid-cols-3 gap-2">
                    {CHECKS.map((check) => (
                      <li
                        key={check}
                        className="rounded-xl border border-slate-800 bg-slate-950/80 py-4 text-center"
                      >
                        <span className="block font-mono text-[10px] text-emerald-400/80">
                          READY
                        </span>
                        <span className="mt-2 block text-sm font-medium tracking-tight text-slate-200">
                          {check}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-center text-sm leading-relaxed text-slate-500">
                    {step === 0
                      ? "firebase_auth held until Loc, Bag, and Gas are confirmed."
                      : "Persistent chrome stays out of the field of view."}
                  </p>
                </div>
              ) : (
                <div className="mt-4 flex flex-1 flex-col gap-3">
                  {!showImpact && !showGps ? (
                    <div className="rounded-xl border border-amber-400/40 bg-amber-500/10 px-3 py-3">
                      <p className="text-[10px] font-medium tracking-[0.16em] text-amber-200 uppercase">
                        New share
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-amber-50">
                        New Share available near you: 15 lbs of baked goods
                        from The Corner Bakery
                      </p>
                    </div>
                  ) : null}

                  {showImpact ? (
                    <div className="flex flex-1 flex-col justify-center rounded-xl border border-emerald-400/50 bg-emerald-500/10 px-4 py-6 text-center">
                      <p className="text-[10px] font-medium tracking-[0.16em] text-emerald-200 uppercase">
                        Share complete
                      </p>
                      <p className="mt-3 text-lg font-medium tracking-tight text-white">
                        You Just Fed 100 People!
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-emerald-50">
                        Tyson, your 15-minute journey from Iguana&apos;s just
                        saved 12 lbs of fresh food, effectively feeding 120
                        people tonight.
                      </p>
                    </div>
                  ) : null}

                  {showGps ? (
                    <div className="flex flex-1 flex-col justify-center rounded-xl border border-amber-400/40 bg-slate-950/80 px-4 py-6 text-center">
                      <p className="font-mono text-xs tracking-[0.14em] text-amber-200">
                        D ≤ 50m
                      </p>
                      <p className="mt-3 text-sm font-medium tracking-tight text-white">
                        Haversine geofence verified
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400">
                        Drop-off confirmed without a star rating.
                      </p>
                    </div>
                  ) : null}

                  {showMap ? (
                    <div className="relative min-h-40 flex-1 overflow-hidden rounded-xl border border-slate-800 bg-[#0c1224]">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b55_1px,transparent_1px),linear-gradient(to_bottom,#1e293b55_1px,transparent_1px)] bg-[size:24px_24px]" />
                      <div className="absolute top-1/3 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_16px_#10B981]" />
                      <p className="absolute right-3 bottom-3 left-3 text-[10px] font-medium tracking-[0.14em] text-slate-400 uppercase">
                        Santa Cruz / San Jose
                      </p>
                    </div>
                  ) : null}

                  {showChecklist ? (
                    <ul className="flex flex-col gap-2 text-sm text-slate-200">
                      {["15 lbs of baked goods", "The Corner Bakery", "Thermal insulated bags"].map(
                        (item) => (
                          <li
                            key={item}
                            className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-2"
                          >
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  ) : null}

                  {!showImpact && !showGps && !showMap && !showChecklist ? (
                    <div className="relative min-h-36 flex-1 overflow-hidden rounded-xl border border-slate-800 bg-[#0c1224]">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b55_1px,transparent_1px),linear-gradient(to_bottom,#1e293b55_1px,transparent_1px)] bg-[size:24px_24px]" />
                      <p className="absolute right-3 bottom-3 left-3 text-xs leading-relaxed text-slate-400">
                        hasAddress → openMapDriveTo
                      </p>
                    </div>
                  ) : null}

                  {!showImpact && !showGps ? (
                    <button
                      type="button"
                      onClick={() => {
                        setModal(true);
                        setStep(3);
                      }}
                      className="mt-auto rounded-xl bg-emerald-500 px-4 py-4 text-sm font-medium tracking-tight text-slate-950 transition-all duration-500 ease-in-out hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      TAP TO CONFIRM PICKUP...
                    </button>
                  ) : null}
                </div>
              )}
            </div>

            {modal && mode === "triage" ? (
              <div className="absolute inset-0 flex items-end bg-slate-950/80 p-4 backdrop-blur-md">
                <div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="pickup-confirm-title"
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950 p-4"
                >
                  <p
                    id="pickup-confirm-title"
                    className="text-sm leading-relaxed font-medium tracking-tight text-white"
                  >
                    ARE YOU SURE YOU WANT TO CONFIRM THE PICKUP?
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setModal(false);
                        setConfirmed(true);
                        setStep(5);
                      }}
                      className="rounded-xl bg-white px-3 py-3 text-xs font-medium tracking-tight text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      CONFIRM ITEMS
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setModal(false);
                        setStep(2);
                      }}
                      className="rounded-xl border border-white/15 px-3 py-3 text-xs font-medium tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      GO BACK
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium tracking-tight text-zinc-400">
            Native Android lifecycle · v0.2.3
          </p>
          <p className="mt-2 text-lg font-medium tracking-tight text-white">
            6-Step Micro-Volunteering
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Step {active.id} is live in the handset: {active.system}.
          </p>
          <ol className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {STEPS.map((item, index) => {
              const selected = index === step;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-current={selected ? "step" : undefined}
                    onClick={() => selectStep(index)}
                    className={`flex h-full w-full flex-col rounded-2xl px-4 py-4 text-left transition-all duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      selected
                        ? "bg-white text-slate-950 shadow-lg"
                        : "border border-dashed border-slate-800 bg-slate-900/30 text-slate-300 hover:border-slate-600"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] tracking-[0.16em] ${
                        selected ? "text-slate-500" : "text-slate-500"
                      }`}
                    >
                      {item.id}
                    </span>
                    <span className="mt-2 text-sm font-medium tracking-tight">
                      {item.title}
                    </span>
                    <span
                      className={`mt-2 text-xs leading-relaxed ${
                        selected ? "text-slate-600" : "text-slate-500"
                      }`}
                    >
                      {item.system}
                    </span>
                    <span
                      className={`mt-2 font-mono text-[10px] leading-relaxed ${
                        selected ? "text-slate-500" : "text-slate-600"
                      }`}
                    >
                      {item.note}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
