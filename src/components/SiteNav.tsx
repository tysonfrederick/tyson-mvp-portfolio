"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { labExperiments } from "@/data/labs";

const linkClass =
  "inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs tracking-tight transition-all duration-500 sm:px-4 sm:text-sm";

export default function SiteNav() {
  const pathname = usePathname();
  const onLabs = pathname === "/labs" || pathname.startsWith("/labs/");
  const labCount = labExperiments.length;

  return (
    <nav aria-label="Primary" className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-900/50 p-1">
      <Link
        href="/"
        aria-current={onLabs ? undefined : "page"}
        className={`${linkClass} ${
          onLabs
            ? "text-zinc-400 hover:text-white"
            : "bg-white text-black"
        }`}
      >
        Case Studies
      </Link>
      <Link
        href="/labs"
        aria-current={onLabs ? "page" : undefined}
        className={`${linkClass} ${
          onLabs
            ? "bg-white text-black"
            : "text-zinc-300 hover:text-white"
        }`}
      >
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
          </svg>
          Labs ({labCount})
        </span>
      </Link>
    </nav>
  );
}
