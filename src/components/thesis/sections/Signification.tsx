import ThesisSection from "../ThesisSection";

const paragraphs = [
  "Insert the signification chapter here. This section reads the work and states what it means.",
  "Add the remaining source paragraphs as further strings beneath this placeholder.",
] as const;

export default function Signification() {
  return (
    <ThesisSection
      id="signification"
      title="Signification"
      paragraphs={paragraphs}
    />
  );
}
