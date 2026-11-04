import {
  Body,
  Kicker,
  Lead,
  Mono,
  Quote,
  RichTable,
  SectionTitle,
  StudyFigure,
  SubTitle,
} from "@/components/foodshare/prose";

export default function OriginSection() {
  return (
    <section id="origin" className="flex flex-col gap-8 border-t border-zinc-800">
      <SectionTitle>
        1. The Origin Story: A Silicon Valley Paradox & The Economics of Trashing vs. Donating
      </SectionTitle>
      <Lead>
        FoodShare wasn&apos;t born in a boardroom—it was born on the pavement of San Jose. While completing my MFA at San Jose State University and driving for three major on-demand platforms (DoorDash, Lyft, and Postmates), I lived inside the mechanics of geo-locative logistics—deconstructing their multi-sided routing flows and filing UI bug reports from the driver&apos;s seat. One week, I was distributing blankets and socks to unhoused neighbors surviving a freezing cold snap in downtown San Jose; the next, I was delivering $50 lunches in Los Gatos while watching restaurants throw away pans of fresh, untouched food at closing time.
      </Lead>
      <Quote
        source={
          <Kicker>
            Primary Source Excerpt: FoodShare Creator Story (2016 Kickstarter Draft)
          </Kicker>
        }
      >
        &quot;Looking around, we have many conflicts saturating complex world problems. A 99-cent soda is packaged in a bottle that won&apos;t degrade for thousands of years, to eventually becoming food for water life within the very seas that it erodes... The problem is much grimmer for many humans, and it&apos;s our job to take waste and re-use it for greater purposes.&quot;
      </Quote>
      <Body>
        The problem wasn&apos;t a lack of food or goodwill—it was a{" "}
        <Kicker>systemic failure of last-mile logistics and misaligned incentives</Kicker>.
      </Body>
      <StudyFigure
        src="/images/foodshare/Eatenbeforewepass.jpg"
        alt="Campaign poster of a carrot decaying across four stages"
        width={1080}
        height={1080}
        caption={
          <>
            <em>
              &quot;All I want is to be eaten... before I&apos;m thrown out.&quot;
            </em>{" "}
            <Kicker>The Perishable Spoilage Clock (2016 Campaign Artifact):</Kicker>{" "}
            Unlike palletized dry goods, prepared restaurant food operates on a strict biological countdown. With less than 2% of edible surplus rescued and 85% sent to landfills, any platform that cannot coordinate supply, transport, and shelter intake before the fourth stage of decay loses the asset to landfill methane.
          </>
        }
      />
      <SubTitle>
        Founder-Led Discovery: Gap Analysis & The Fiscal Math of Donating vs. Trashing
      </SubTitle>
      <Body>
        Conducting a competitive gap analysis revealed why traditional food banks couldn&apos;t solve this: legacy rescue operations are built around heavy box trucks and pallet-sized warehouse pickups, leaving local establishments with{" "}
        <Kicker>5 to 20 lbs of daily surplus</Kicker> completely unserved. Furthermore, interviewing restaurant owners and food bank managers exposed the exact fiscal and operational trade-offs between{" "}
        <Kicker>Trashing vs. Donating</Kicker>:
      </Body>
      <RichTable
        headers={[
          "Business Dimension",
          "Trashing Surplus Food (Taking a Loss)",
          "Donating via FoodShare (The Strategic Winner)",
        ]}
        rows={[
          [
            <Kicker key="tax">End-of-Year Tax Math (PATH Act of 2015)</Kicker>,
            <>
              <Kicker>Standard COGS Write-Off Only:</Kicker> If a business trashes a case of food that cost <Kicker>$50</Kicker> (with a $90 retail price), it only deducts the <Kicker>$50</Kicker> base cost.
            </>,
            <>
              <Kicker>Enhanced Tax Deduction:</Kicker> Under the permanent{" "}
              <Kicker>PATH Act of 2015</Kicker>, businesses deduct the lesser of{" "}
              <em>2x base cost</em> ($100) or <em>base cost + 50% of profit margin</em>{" "}
              (<Mono>$50 + $20 = $70</Mono>)—yielding a <Kicker>$70 deduction</Kicker>{" "}
              (+40% fiscal benefit over trashing) plus lower dumpster weight fees.
            </>,
          ],
          [
            <Kicker key="law">Legal Liability Reality</Kicker>,
            <>
              Zero liability, which makes trashing feel &quot;safe&quot; to uninformed managers.
            </>,
            <>
              <Kicker>Full Federal Protection:</Kicker> Protected from civil and criminal liability under the{" "}
              <Kicker>Bill Emerson Good Samaritan Food Donation Act (1996)</Kicker> when donating wholesome food in good faith.
            </>,
          ],
          [
            <Kicker key="barrier">The Real Barrier (Why 85% Still Gets Trashed)</Kicker>,
            <>
              <Kicker>Path of Least Resistance:</Kicker> Takes 10 seconds to toss into a dumpster.
            </>,
            <>
              <Kicker>Logistical Friction & The &quot;DoorDash Insight&quot;:</Kicker> Managers lack staff time to sort/transport small batches, fear liability, and told me bluntly in interviews:{" "}
              <em>
                tax write-offs aren&apos;t enough—we stay on 3rd-party platforms for{" "}
                <Kicker>new customer acquisition</Kicker>.
              </em>
            </>,
          ],
        ]}
      />
      <Body>
        <Kicker>The &quot;Aha!&quot; Moment:</Kicker> To make donating just as effortless as throwing food away—and financially irresistible—FoodShare had to combine{" "}
        <Kicker>30-second on-demand pickup</Kicker> with a{" "}
        <Kicker>new customer acquisition engine</Kicker>.
      </Body>
    </section>
  );
}
