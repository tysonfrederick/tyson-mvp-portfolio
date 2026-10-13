"use client";

import { useRef, type KeyboardEvent } from "react";

export const archiveViews = [
  {
    id: "executive",
    label: "Executive Summary",
    panelId: "executive-summary",
  },
  {
    id: "primary-source",
    label: "Primary Source: 2014 MFA Thesis",
    panelId: "primary-source-archive",
  },
] as const;

export type ArchiveView = (typeof archiveViews)[number]["id"];

type StateToggleProps = {
  view: ArchiveView;
  onChange: (view: ArchiveView) => void;
};

export default function StateToggle({ view, onChange }: StateToggleProps) {
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);

  function select(index: number) {
    const next = archiveViews[index];
    if (!next) return;
    onChange(next.id);
    tabsRef.current[index]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const current = archiveViews.findIndex((item) => item.id === view);
    if (current < 0) return;

    let next = current;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = (current + 1) % archiveViews.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = (current - 1 + archiveViews.length) % archiveViews.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = archiveViews.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    select(next);
  }

  return (
    <div
      role="tablist"
      aria-label="Case study view"
      aria-orientation="horizontal"
      onKeyDown={onKeyDown}
      className="mt-8 flex w-full flex-col gap-2 rounded-2xl border border-zinc-800 bg-zinc-950 p-2 md:inline-flex md:w-auto md:flex-row"
    >
      {archiveViews.map((item, index) => {
        const selected = item.id === view;
        return (
          <button
            key={item.id}
            ref={(node) => {
              tabsRef.current[index] = node;
            }}
            id={`tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={item.panelId}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(item.id)}
            className={`cursor-pointer rounded-xl px-4 py-2 text-left text-sm font-medium tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 ${
              selected
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
