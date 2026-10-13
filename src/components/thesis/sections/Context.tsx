import ThesisSection from "../ThesisSection";

const paragraphs = [
  "Insert the context chapter here. This section situates the work among its historical and critical references.",
  "Keep each source paragraph in its own string when you add the text.",
] as const;

export default function Context() {
  return (
    <ThesisSection id="context" title="Context" paragraphs={paragraphs} />
  );
}
