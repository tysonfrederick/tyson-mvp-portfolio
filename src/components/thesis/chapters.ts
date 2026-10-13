export const thesisChapters = [
  { id: "abstract", label: "Abstract" },
  { id: "catalog", label: "Catalog" },
  { id: "introduction", label: "Introduction" },
  { id: "context", label: "Context" },
  { id: "interrogation", label: "Interrogation" },
  { id: "material-process", label: "Material Process" },
  { id: "signification", label: "Signification" },
  { id: "works-cited", label: "Works Cited" },
] as const;

export type ThesisChapterId = (typeof thesisChapters)[number]["id"];
