"use client";

import {
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import ProjectStudyFrame from "@/components/ProjectStudyFrame";
import { thesisChapters } from "./chapters";
import StateToggle, { archiveViews, type ArchiveView } from "./StateToggle";

const chapterIds = new Set<string>(
  thesisChapters.map((chapter) => chapter.id),
);

const [executiveView, primaryView] = archiveViews;

type MfaProjectArchiveProps = {
  title: string;
  executive: ReactNode;
  archive: ReactNode;
};

function subscribeToHash(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);
  return () => window.removeEventListener("hashchange", onStoreChange);
}

function readChapterHash(): string {
  return window.location.hash.replace(/^#/, "");
}

function readServerChapterHash(): string {
  return "";
}

export default function MfaProjectArchive({
  title,
  executive,
  archive,
}: MfaProjectArchiveProps) {
  const chapterHash = useSyncExternalStore(
    subscribeToHash,
    readChapterHash,
    readServerChapterHash,
  );
  const [override, setOverride] = useState<ArchiveView | null>(null);
  const view: ArchiveView =
    override ??
    (chapterIds.has(chapterHash) ? primaryView.id : executiveView.id);

  useEffect(() => {
    if (override !== null || !chapterIds.has(chapterHash)) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(chapterHash)?.scrollIntoView();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [override, chapterHash]);

  return (
    <ProjectStudyFrame
      title={title}
      belowTitle={<StateToggle view={view} onChange={setOverride} />}
    >
      <div
        id={executiveView.panelId}
        role="tabpanel"
        aria-labelledby={`tab-${executiveView.id}`}
        hidden={view !== executiveView.id}
        tabIndex={0}
        className="w-full min-w-0 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-zinc-400"
      >
        {executive}
      </div>
      <div
        id={primaryView.panelId}
        role="tabpanel"
        aria-labelledby={`tab-${primaryView.id}`}
        hidden={view !== primaryView.id}
        tabIndex={0}
        className="w-full min-w-0 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-zinc-400"
      >
        {archive}
      </div>
    </ProjectStudyFrame>
  );
}
