import ThesisSection from "../ThesisSection";

const paragraphs = [
  "Insert the material process chapter here. This section records how the work was made.",
  "Plate figures in the reading column mark where images belong beside the paragraph that discusses them.",
] as const;

export default function MaterialProcess() {
  return (
    <ThesisSection
      id="material-process"
      title="Material Process"
      paragraphs={paragraphs}
    />
  );
}
