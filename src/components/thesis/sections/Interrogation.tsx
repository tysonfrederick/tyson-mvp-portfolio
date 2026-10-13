import ThesisSection from "../ThesisSection";

const paragraphs = [
  "Insert the interrogation chapter here. This section presses the central questions of the thesis.",
  "Add the remaining source paragraphs as further strings beneath this placeholder.",
] as const;

export default function Interrogation() {
  return (
    <ThesisSection
      id="interrogation"
      title="Interrogation"
      paragraphs={paragraphs}
    />
  );
}
