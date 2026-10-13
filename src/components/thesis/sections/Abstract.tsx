import ThesisSection from "../ThesisSection";

const paragraphs = [
  "Insert the abstract of the 2014 MFA thesis here. Replace this paragraph with the author's original text.",
  "Add the next paragraph of the abstract here.",
] as const;

export default function Abstract() {
  return (
    <ThesisSection id="abstract" title="Abstract" paragraphs={paragraphs} />
  );
}
