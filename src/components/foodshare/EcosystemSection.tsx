import FoodShareOrchestrationDiagram from "@/components/FoodShareOrchestrationDiagram";
import {
  Body,
  Bullet,
  BulletList,
  Kicker,
  Lead,
  Mono,
  Quote,
  RichTable,
  SectionTitle,
  StudyFigure,
  SubTitle,
} from "@/components/foodshare/prose";

function Channel({ children }: { children: string }) {
  return <em>[{children}]</em>;
}

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="flex flex-col gap-8 border-t border-zinc-800">
      <SectionTitle>
        2. Ecosystem Architecture: The 4-Sided Marketplace & Hybrid Social Enterprise
      </SectionTitle>
      <Quote
        source={
          <Kicker>
            Foundational Thesis Mantra (2016 FoodShare Kickstarter Draft)
          </Kicker>
        }
      >
        &quot;All projects are archetypes of a new successful fusion of resource efficiency, environmental sensitivity, attention to human well-being, and financial success that has been called &apos;Natural Capitalism.&apos;&quot;
      </Quote>
      <Lead>
        Classic gig platforms like Uber, Lyft, and DoorDash are{" "}
        <Kicker>3-sided marketplaces</Kicker> (<em>Customer, Driver, Merchant</em>). To solve the &quot;Non-Profit Starvation Cycle&quot; without relying on endless grant writing, I codified a{" "}
        <Kicker>
          Periodic Table of 4 User Roles (<Mono>Fd, Fi, Fv, Fr</Mono>)
        </Kicker>{" "}
        orchestrated by a dual-entity API gateway:
      </Lead>
      <BulletList>
        <Bullet>
          <Kicker>
            <Mono>FoodShare.co</Mono> (The For-Profit SaaS & Patron Engine):
          </Kicker>{" "}
          Powered by Next.js Serverless Functions, Prisma ORM, Stripe B2B subscriptions, and PostgreSQL. Donors pay a{" "}
          <Kicker>monthly SaaS fee tiered by business size</Kicker> to unlock official physical storefront badging (
          <em>&quot;Donates Unused Food to Those in Need&quot;</em>), automated annual tax/CSR statements, placement in the{" "}
          <Kicker>Patron Discovery Marketplace</Kicker>, and a{" "}
          <Kicker>&quot;DoorDash-Lite&quot; on-demand delivery service</Kicker> where a percentage of every full-price Patron food order directly subsidizes free rescue logistics.
        </Bullet>
        <Bullet>
          <Kicker>
            <Mono>FoodShare.work</Mono> / <Mono>.org</Mono> (The 501(c)(3) Logistical Engine):
          </Kicker>{" "}
          Powered by Node.js (Fastify), Redis geospatial caching, and Supabase Realtime WebSockets. Manages high-frequency driver telemetry, Good Samaritan liability tracking, and atomic rescue dispatch for establishments contributing{" "}
          <Kicker>even 5 lbs of food a week</Kicker>.
        </Bullet>
      </BulletList>
      <FoodShareOrchestrationDiagram />
      <SubTitle>The 3-Loop Value Exchange Matrix</SubTitle>
      <Quote
        source={
          <Kicker>Primary Source Excerpt: The Patron Thesis (2016 Kickstarter Draft)</Kicker>
        }
      >
        &quot;To make a difference, become a Patron and support FoodShare businesses by purchasing at their establishment. If we want a voice in the modern times, we need to put our wallets where our minds and mouths are.&quot;
      </Quote>
      <Body>
        Every stakeholder node exchanges value across three color-coded system channels (
        <Kicker>Green = Physical Sustenance</Kicker>, <Kicker>Blue = Economic Capital</Kicker>,{" "}
        <Kicker>Orange = Telemetry & Status</Kicker>):
      </Body>
      <RichTable
        headers={[
          "Stakeholder Node",
          "System Archetype",
          "What They Give (Input)",
          "What They Get (Incentive Alignment)",
        ]}
        rows={[
          [
            <>
              <Kicker>1. Donors (<Mono>Fd</Mono>)</Kicker>{" "}
              <em>(Restaurants, Markets, Schools/Venues)</em>
            </>,
            <Kicker key="roi">The ROI-Driven Business</Kicker>,
            <>
              <Channel>Green</Channel> Surplus food (from 5 lbs/wk up) tagged by macro-category (<em>Protein, Carb, Produce</em>) + size-tiered monthly SaaS fee.
            </>,
            <>
              <Channel>Blue</Channel> <Kicker>New Customer Acquisition</Kicker> from Patrons + physical storefront window badging. <Channel>Orange</Channel> Automated PATH Act Tax ID receipts & CSR media statements.
            </>,
          ],
          [
            <>
              <Kicker>2. Patrons (<Mono>Fi</Mono>)</Kicker> <em>(Conscious Consumers)</em>
            </>,
            <Kicker key="wallet">The Wallet Voter (Capital Engine)</Kicker>,
            <>
              <Channel>Blue</Channel> Dining spend at Donor venues, paid delivery fees, feedback/appreciation, & $10/$25/$50 pledges.
            </>,
            <>
              <Channel>Blue</Channel> Storefront <Kicker>2-for-1s and 5%–15% discounts</Kicker>. <Channel>Orange</Channel> Real-time restaurant waste-saved tracking, leaderboards, & <Kicker>city-expansion voting</Kicker>.
            </>,
          ],
          [
            <>
              <Kicker>3. Volunteers (<Mono>Fv</Mono>)</Kicker> <em>(Last-Mile Fleet)</em>
            </>,
            <Kicker key="time">The Time-Poor Altruist</Kicker>,
            <>
              <Channel>Green</Channel> 20–30 minute hyper-local pickup and delivery execution.
            </>,
            <>
              <Channel>Orange</Channel> Quantified Dopamine Hit (<em>&quot;Feed up to 100 people per hour&quot;</em>) + official accreditation pin. <Channel>Blue</Channel> Donor coupons + $50 reward unlocked via sweat-equity.
            </>,
          ],
          [
            <>
              <Kicker>4. Recipients (<Mono>Fr</Mono>)</Kicker>{" "}
              <em>(Shelters, Food Banks, Churches)</em>
            </>,
            <Kicker key="demand">The Community Partner (Dignified Demand)</Kicker>,
            <>
              <Channel>Orange</Channel> Real-time storage capacity & intake confirmation via dedicated tablet.
            </>,
            <>
              <Channel>Green</Channel> A curated <Kicker>&quot;Menu&quot; instead of a mystery dumping box</Kicker> (targeted protein/produce) + <Kicker>automated annual Donor weight/value tax statements</Kicker>.
            </>,
          ],
        ]}
      />
      <SubTitle>
        Architectural Nuance: Role-Based Design & Cross-Side Network Effects (Volunteer ↔ Patron)
      </SubTitle>
      <Body>
        While the <em>Volunteer</em> and the <em>Patron</em> can often be the same person, I intentionally architected them as{" "}
        <Kicker>distinct system roles</Kicker> because their operational constraints differ (
        <Kicker>Volunteers</Kicker> spend <em>Time & Mobility</em> for logistics;{" "}
        <Kicker>Patrons</Kicker> spend <em>Capital</em> for consumption). Keeping the roles structurally distinct prevented UI cognitive overload while enabling{" "}
        <Kicker>Cross-Side Network Effect gamification loops</Kicker>:
      </Body>
      <BulletList>
        <Bullet>
          <Kicker>Volunteer → Patron Conversion:</Kicker> Completing a rescue run unlocks a 20% Patron discount coupon for lunch at the exact Donor restaurant the volunteer just served.
        </Bullet>
        <Bullet>
          <Kicker>Patron → Volunteer Conversion:</Kicker> Ordering dinner from a partner café prompts the diner:{" "}
          <em>
            &quot;The Corner Bakery donates 50 lbs of food a week—claim a 20-minute rescue run next time you&apos;re nearby!&quot;
          </em>
        </Bullet>
      </BulletList>
      <StudyFigure
        src="/images/foodshare/sketch-webapp-iterations.png"
        alt="Six side-by-side FoodShare landing page iterations on a Sketch canvas"
        width={2856}
        height={1786}
        caption={
          <>
            <Kicker>
              Iterative Systems Design in <Mono>foodsdiagram.sketch</Mono>:
            </Kicker>{" "}
            Six side-by-side full-height web app iterations (<Mono>Landing Page v mvp1_1</Mono> through <Mono>Desktop HD Copy 5</Mono>) testing color-contrast hypotheses (yellow → burnt orange → high-contrast white) and codifying the{" "}
            <Kicker>
              Periodic Table of Roles (<Mono>Fi, Fv, Fd, Fr</Mono>)
            </Kicker>
            .
          </>
        }
      />
    </section>
  );
}
