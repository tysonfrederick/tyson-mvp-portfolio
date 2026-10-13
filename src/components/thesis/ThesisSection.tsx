import type { ReactNode } from "react";
import type { ThesisChapterId } from "./chapters";

type ThesisSectionProps = {
  id: ThesisChapterId;
  title: string;
  paragraphs: readonly string[];
  children?: ReactNode;
};

export default function ThesisSection({
  id,
  title,
  paragraphs,
  children,
}: ThesisSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 border-t border-zinc-800 pt-16 first:border-t-0 first:pt-0"
    >
      <h2 id={`${id}-heading`} className="mt-0">
        {title}
      </h2>
      {paragraphs.map((paragraph, index) => (
        <p key={`${id}-paragraph-${index}`}>{paragraph}</p>
      ))}
      {children}
    </section>
  );
}
