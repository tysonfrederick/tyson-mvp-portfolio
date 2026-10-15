import ThesisSection from "../ThesisSection";

export type CatalogPlate = {
  plate: number;
  title: string;
  medium: string;
  dimensions: string;
};

export const catalogPlates: readonly CatalogPlate[] = [
  { plate: 1, title: "Blue Rain", medium: "digital application", dimensions: "1920 x 1080 px." },
  { plate: 2, title: "Cardboard Gandhi Title", medium: "cardboard sculpture", dimensions: "17 ft. tall" },
  { plate: 3, title: "dead-in-Iraq", medium: "digital performance", dimensions: "unknown dimensions" },
  { plate: 4, title: "The Hoop Mandala", medium: "digital performance", dimensions: "unknown dimensions" },
  { plate: 5, title: "TV Buddha", medium: "digital installation", dimensions: "unknown dimensions" },
  { plate: 6, title: "Lucifer", medium: "oil on canvas", dimensions: "unknown dimensions" },
  { plate: 7, title: "Our voices can’t be heard.", medium: "digital application", dimensions: "1920 x 1080 px." },
  { plate: 8, title: "Bustling Aquarelle", medium: "oil on canvas", dimensions: "unknown dimensions" },
  { plate: 9, title: "Ladders and Chutes", medium: "digital image", dimensions: "1920 x 1080 px." },
  { plate: 10, title: "Untitled Flash Project", medium: "digital image", dimensions: "1920 x 1080 px." },
  { plate: 11, title: "Unknown title", medium: "digital advert", dimensions: "396 x 284 px." },
  { plate: 12, title: "Our voices can’t be heard.", medium: "digital application", dimensions: "1920 x 1080 px." },
  { plate: 13, title: "That’s Quite a View", medium: "digital print", dimensions: "3600 x 3600 px." },
  { plate: 14, title: "Lawrence of Arabia", medium: "digital print", dimensions: "1920 x 1080 px." },
  { plate: 15, title: "lawrence_of_arabia_3.jpeg", medium: "digital image", dimensions: "unknown dimensions" },
  { plate: 16, title: "How we move together so well.", medium: "digital application", dimensions: "3600 x 3600 px." },
  { plate: 17, title: "16x16_2pi", medium: "digital print", dimensions: "3600 x 3600 px." },
  { plate: 18, title: "Untitled (inspired by skrillex)", medium: "digital print", dimensions: "12000 x 9000 px." },
  { plate: 19, title: "grapes.jpg", medium: "digital image", dimensions: "unknown dimensions" },
  { plate: 20, title: "landscape-grape.jpg", medium: "digital image", dimensions: "1440 x 900 px." },
  { plate: 21, title: "Landscapes of Grapes", medium: "digital print", dimensions: "9000 x 6000 px." },
  { plate: 22, title: "The Transformative Pond", medium: "digital print", dimensions: "3600 x 3600 px." },
  { plate: 23, title: "theta2", medium: "digital application", dimensions: "1920 x 1080 px." },
  { plate: 24, title: "Snapshot of a Sketch (theta2)", medium: "digital image", dimensions: "unknown dimensions" },
  { plate: 25, title: "photo of artist Tyson Frederick", medium: "digital image", dimensions: "unknown dimensions" },
  { plate: 26, title: "abstract landscape 3", medium: "digital print", dimensions: "1920 x 1080 px." },
  { plate: 27, title: "abstract landscape 4", medium: "digital print", dimensions: "1920 x 1080 px." },
  { plate: 28, title: "The Steps to Freedom.", medium: "digital application", dimensions: "1200 x 800 px." },
];

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
