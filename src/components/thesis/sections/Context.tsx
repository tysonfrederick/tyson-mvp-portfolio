import ThesisSection from "../ThesisSection";

const paragraphs = [
  "Introduction into art history and the study of traditional and non-traditional art will place an artist within the art field as long as they have the proper understanding and historical literacy of the past and present, i.e. an artist of any type or quality, with the proper understanding of the study of art and art history, can be placed relative to other artists, similar or different. Their artwork can relate to anything, absolutely anything. Being an artist means knowing where you stand in relation to art and what has been done in relation to you; it is often a reflection of society and culture, the greatest value of art.",
  "Keep each source paragraph in its own string when you add the text.",
] as const;

export default function Context() {
  return (
    <ThesisSection id="context" title="An Analysis of Artistic Context" paragraphs={paragraphs} />
  );
}
