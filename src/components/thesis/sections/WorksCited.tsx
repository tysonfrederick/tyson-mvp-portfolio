import ThesisSection from "../ThesisSection";

const paragraphs = [
  "Insert the works cited entries below. One citation belongs in each list item.",
] as const;

const citations = [
  "Citation to be inserted.",
  "Citation to be inserted.",
] as const;

export default function WorksCited() {
  return (
    <ThesisSection
      id="works-cited"
      title="Works Cited"
      paragraphs={paragraphs}
    >
      <ul>
        {citations.map((citation, index) => (
          <li key={`citation-${index}`}>{citation}</li>
        ))}
      </ul>
    </ThesisSection>
  );
}
