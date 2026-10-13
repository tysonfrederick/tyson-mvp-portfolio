import type { ReactNode } from "react";

type ThesisPlateProps = {
  caption: string;
  children?: ReactNode;
};

export default function ThesisPlate({ caption, children }: ThesisPlateProps) {
  return (
    <figure className="not-prose my-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
      <div className="flex min-h-48 items-center justify-center rounded-lg border border-dashed border-zinc-800 bg-black px-4 text-center text-sm text-zinc-400">
        {children ?? "Insert plate image"}
      </div>
      <figcaption className="mt-4 text-sm leading-relaxed text-zinc-400">
        {caption}
      </figcaption>
    </figure>
  );
}
