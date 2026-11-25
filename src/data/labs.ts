export type LabStatusTone = "amber" | "emerald" | "cyan";

export type LabExperiment = {
  id: string;
  title: string;
  category: string;
  status: string;
  statusTone: LabStatusTone;
  liveUrl: string;
  screenshot: string;
  thesis: string;
  points: string[];
  stack: string[];
};

export type LabExperimentView = LabExperiment & {
  imageSrc: string | null;
};

export const labExperiments: LabExperiment[] = [
  {
    id: "shadow-telemetry",
    title: "Shadow Telemetry",
    category: "Operational QA · Field Instrumentation",
    status: "Live Wedge App",
    statusTone: "amber",
    liveUrl: "https://shadow-telemetry.vercel.app",
    screenshot: "/images/labs/shadow-telemetry.png",
    thesis:
      "Zero-typing somatic field logger that captures non-standard floor exceptions, radio triage, and invisible operational friction in <4 seconds.",
    points: [
      "Captures \"dark labor\" invisible to standard WMS scanners across 4 complexity tiers and 3 channels (Floor, Radio/Talk, Scanner/System).",
      "Replaces text input with Fitts's Law thumb pills, a continuous \"By the Book <-> Not Standard Work\" deviation slider, and real-time stopped-time accumulation.",
    ],
    stack: ["Next.js", "Somatic UI", "Operational QA", "Local State Persistence"],
  },
  {
    id: "wage-odometer",
    title: "Wage Odometer",
    category: "Behavioral Economics · Real-Time Telemetry",
    status: "Live Wedge App",
    statusTone: "emerald",
    liveUrl: "https://wage-odometer.vercel.app",
    screenshot: "/images/labs/wage-odometer.png",
    thesis:
      "High-precision 4-decimal shift earnings ticker mapping real-time labor and overtime multipliers against tangible household & maker milestones.",
    points: [
      "Streams sub-second earnings ($0.0000 precision, +$0.41/min) across Base (1x), OT (1.5x), and DT (2x) shift states.",
      "Includes retroactive shift-start compensators (-15m, -30m, -1h) and live progress bars tied to real-world utility (Groceries $150, Electric $220, 3D Filament $310).",
    ],
    stack: ["React", "60fps RequestAnimationFrame", "Micro-Incentive UX", "Tailwind CSS"],
  },
  {
    id: "fxd-sandbox",
    title: "FXD Sandbox Live",
    category: "Multimodal RAG · Career Telemetry",
    status: "Frontend Live · Vector Wiring",
    statusTone: "cyan",
    liveUrl: "https://fxd-sandbox.vercel.app",
    screenshot: "/images/labs/fxd-sandbox.jpg",
    thesis:
      "Interactive career trace console querying 64,000 lines of longitudinal engineering & design archives via guided prompt seeds.",
    points: [
      "Eliminates blank-canvas recruiter paralysis with one-tap architectural trace seeds (FoodShare 4-Sided Flywheel, GameTrigger, Somatic UI, MFA Computer Vision).",
      "Features somatic state transitions between ambient Online standby and emerald Knowledge Base Active trace execution.",
    ],
    stack: ["Next.js", "Supabase pgvector", "RAG Architecture", "Vercel"],
  },
];
