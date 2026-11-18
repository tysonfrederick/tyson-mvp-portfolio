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
        <span className="whitespace-nowrap">⚡ Wedge Labs ({labCount})</span>
      </Link>
    </nav>
  );
}
