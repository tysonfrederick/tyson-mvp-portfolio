import { Figure, Prose, Rich, Section, SourceQuote, Subhead, DataTable } from "../prose";

const FISCAL_HEADERS = [
  "Business Dimension",
  "Trashing Surplus Food (Taking a Loss)",
  "Donating via FoodShare (The Strategic Winner)",
];

const FISCAL_ROWS = [
  [
    "**End-of-Year Tax Math (PATH Act of 2015)**",
    "**Standard COGS Write-Off Only:** If a business trashes a case of food that cost **$50** (with a $90 retail price), it only deducts the **$50** base cost.",
    "**Enhanced Tax Deduction:** Under the permanent **PATH Act of 2015**, businesses deduct the lesser of *2x base cost* ($100) or *base cost + 50% of profit margin* (`$50 + $20 = $70`)—yielding a **$70 deduction** (+40% fiscal benefit over trashing) plus lower dumpster weight fees.",
  ],
  [
    "**Legal Liability Reality**",
    'Zero liability, which makes trashing feel "safe" to uninformed managers.',
    "**Full Federal Protection:** Protected from civil and criminal liability under the **Bill Emerson Good Samaritan Food Donation Act (1996)** when donating wholesome food in good faith.",
  ],
  [
    "**The Real Barrier (Why 85% Still Gets Trashed)**",
    "**Path of Least Resistance:** Takes 10 seconds to toss into a dumpster.",
    '**Logistical Friction & The "DoorDash Insight":** Managers lack staff time to sort/transport small batches, fear liability, and told me bluntly in interviews: *tax write-offs aren\'t enough—we stay on 3rd-party platforms for **new customer acquisition**.*',
  ],
];

export default function OriginSection() {
  return (
    <Section
      id="section-1"
      title="1. The Origin Story: A Silicon Valley Paradox & The Economics of Trashing vs. Donating"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <Prose text="FoodShare wasn't born in a boardroom—it was born on the pavement of San Jose. While completing my MFA at San Jose State University and driving for three major on-demand platforms (DoorDash, Lyft, and Postmates), I lived inside the mechanics of geo-locative logistics—deconstructing their multi-sided routing flows and filing UI bug reports from the driver's seat. One week, I was distributing blankets and socks to unhoused neighbors surviving a freezing cold snap in downtown San Jose; the next, I was delivering $50 lunches in Los Gatos while watching restaurants throw away pans of fresh, untouched food at closing time." />
          <SourceQuote
            quote={`"Looking around, we have many conflicts saturating complex world problems. A 99-cent soda is packaged in a bottle that won't degrade for thousands of years, to eventually becoming food for water life within the very seas that it erodes... The problem is much grimmer for many humans, and it's our job to take waste and re-use it for greater purposes."`}
            source="**Primary Source Excerpt: FoodShare Creator Story (2016 Kickstarter Draft)**"
          />
          <Prose text="The problem wasn't a lack of food or goodwill—it was a **systemic failure of last-mile logistics and misaligned incentives**." />
        </div>
        <div className="lg:col-span-5">
          <Figure
            src="/images/foodshare/Eatenbeforewepass.jpg"
            alt="Four-stage decaying carrot campaign still. The carrot asks to be eaten before it is thrown out."
            width={1080}
            height={1080}
            caption={
              <>
                <p className="text-zinc-300">
                  <Rich text={`"All I want is to be eaten... before I'm thrown out."`} />
                </p>
                <p className="mt-2">
                  <Rich text="**The Perishable Spoilage Clock (2016 Campaign Artifact):** Unlike palletized dry goods, prepared restaurant food operates on a strict biological countdown. With less than 2% of edible surplus rescued and 85% sent to landfills, any platform that cannot coordinate supply, transport, and shelter intake before the fourth stage of decay loses the asset to landfill methane." />
                </p>
              </>
            }
          />
        </div>
      </div>
      <Subhead>
        Founder-Led Discovery: Gap Analysis & The Fiscal Math of Donating vs. Trashing
      </Subhead>
      <Prose text="Conducting a competitive gap analysis revealed why traditional food banks couldn't solve this: legacy rescue operations are built around heavy box trucks and pallet-sized warehouse pickups, leaving local establishments with **5 to 20 lbs of daily surplus** completely unserved. Furthermore, interviewing restaurant owners and food bank managers exposed the exact fiscal and operational trade-offs between **Trashing vs. Donating**:" />
      <DataTable headers={FISCAL_HEADERS} rows={FISCAL_ROWS} />
      <Prose text={`**The "Aha!" Moment:** To make donating just as effortless as throwing food away—and financially irresistible—FoodShare had to combine **30-second on-demand pickup** with a **new customer acquisition engine**.`} />
    </Section>
  );
}
