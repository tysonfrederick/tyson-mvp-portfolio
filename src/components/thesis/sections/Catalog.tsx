import ThesisSection from "../ThesisSection";

export type CatalogPlate = {
  plate: number;
  title: string;
  medium: string;
  dimensions: string;
};

const platePlaceholder = {
  title: "To be inserted",
  medium: "To be inserted",
  dimensions: "To be inserted",
} as const;

/** Replace each row with the catalog entry for that plate. */
export const catalogPlates: readonly CatalogPlate[] = Array.from(
  { length: 28 },
  (_, index) => ({
    plate: index + 1,
    title: platePlaceholder.title,
    medium: platePlaceholder.medium,
    dimensions: platePlaceholder.dimensions,
  }),
);

const paragraphs = [
  "Insert the catalog introduction here. The table lists plates 1 through 28.",
  "Replace each placeholder cell with the title, medium, and dimensions from the thesis.",
] as const;

export default function Catalog() {
  return (
    <ThesisSection id="catalog" title="Catalog" paragraphs={paragraphs}>
      <div className="not-prose my-8 max-w-full overflow-x-auto rounded-lg border border-zinc-800">
        <table className="w-full min-w-2xl border-collapse text-left">
          <caption className="sr-only">
            Plates 1 to 28 with title, medium, and dimensions
          </caption>
          <thead className="bg-zinc-950 text-xs font-medium tracking-tight text-zinc-400">
            <tr className="border-b border-zinc-800">
              <th scope="col" className="px-4 py-4">
                Plate #
              </th>
              <th scope="col" className="px-4 py-4">
                Title
              </th>
              <th scope="col" className="px-4 py-4">
                Medium
              </th>
              <th scope="col" className="px-4 py-4">
                Dimensions
              </th>
            </tr>
          </thead>
          <tbody>
            {catalogPlates.map((row) => (
              <tr key={row.plate} className="border-t border-zinc-800">
                <th
                  scope="row"
                  className="px-4 py-4 text-sm font-medium text-zinc-200 tabular-nums"
                >
                  {row.plate}
                </th>
                <td className="px-4 py-4 text-sm text-zinc-200">{row.title}</td>
                <td className="px-4 py-4 text-sm text-zinc-400">{row.medium}</td>
                <td className="px-4 py-4 text-sm text-zinc-400">
                  {row.dimensions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ThesisSection>
  );
}
