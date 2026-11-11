"use client";

import { useState } from "react";

export default function SchemaDisclosure({
  caption,
  source,
}: {
  caption: string;
  source: string;
}) {
  const [open, setOpen] = useState(true);

  return (
    <details
      open={open}
      className="group my-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50"
    >
      <summary
        onClick={(event) => {
          event.preventDefault();
          setOpen((current) => !current);
        }}
        className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-sm font-medium tracking-tight text-zinc-100 [&::-webkit-details-marker]:hidden"
      >
        <span>{caption}</span>
        <svg
          aria-hidden
          viewBox="0 0 16 16"
          className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-500 ease-in-out group-open:rotate-180"
        >
          <path
            d="M4 6l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <pre className="overflow-x-auto border-t border-white/10 p-6 font-mono text-xs leading-relaxed text-zinc-300 md:text-sm">
        <code>{source}</code>
      </pre>
    </details>
  );
}
