import { thesisChapters } from "./chapters";

export default function ThesisSidebar() {
  return (
    <nav
      aria-label="Thesis chapters"
      className="flex w-full min-w-0 max-w-full gap-2 overflow-x-auto border-b border-zinc-800 pb-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:w-64 lg:shrink-0 lg:flex-col lg:self-start lg:overflow-x-hidden lg:overflow-y-auto lg:border-b-0 lg:pb-0"
    >
      <p className="hidden px-4 pb-4 text-xs font-medium tracking-tight text-zinc-400 lg:block">
        Contents
      </p>
      {thesisChapters.map((chapter) => (
        <a
          key={chapter.id}
          href={`#${chapter.id}`}
          className="shrink-0 rounded-xl px-4 py-2 text-sm whitespace-nowrap text-zinc-400 hover:text-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 lg:shrink lg:whitespace-normal"
        >
          {chapter.label}
        </a>
      ))}
    </nav>
  );
}
