import ThesisSection from "../ThesisSection";

const paragraphs = [
  "Insert the introduction here. This chapter opens the thesis in its original sequence.",
  "Add further paragraphs as additional strings in this list when the source text is transcribed.",
] as const;

export default function Introduction() {
  return (
    <ThesisSection
      id="introduction"
      title="Introduction"
      paragraphs={paragraphs}
    />
  );
}
