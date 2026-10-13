import ThesisPlate from "./ThesisPlate";
import ThesisSidebar from "./ThesisSidebar";
import Abstract from "./sections/Abstract";
import Catalog from "./sections/Catalog";
import Context from "./sections/Context";
import Interrogation from "./sections/Interrogation";
import Introduction from "./sections/Introduction";
import MaterialProcess from "./sections/MaterialProcess";
import Signification from "./sections/Signification";
import WorksCited from "./sections/WorksCited";

const plateCaptions = {
  catalog: "Insert the plate image and caption here.",
  process: "Insert an additional plate image and caption here.",
} as const;

export default function ThesisViewer() {
  return (
    <div className="mt-12 flex w-full min-w-0 flex-col gap-8 lg:mt-16 lg:flex-row lg:items-start lg:gap-16">
      <ThesisSidebar />
      <article className="prose prose-invert prose-zinc w-full min-w-0 max-w-none flex-1 font-sans prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-zinc-200 prose-p:leading-relaxed prose-p:text-zinc-300 prose-li:text-zinc-300">
        <Abstract />
        <Catalog />
        <ThesisPlate caption={plateCaptions.catalog} />
        <Introduction />
        <Context />
        <Interrogation />
        <MaterialProcess />
        <ThesisPlate caption={plateCaptions.process} />
        <Signification />
        <WorksCited />
      </article>
    </div>
  );
}
