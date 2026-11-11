import FoodShareOrchestrationDiagram from "@/components/FoodShareOrchestrationDiagram";
import {
  BulletList,
  DataTable,
  Figure,
  Prose,
  Rich,
  Section,
  SourceQuote,
  Subhead,
} from "../prose";

const LOOP_HEADERS = [
  "Stakeholder Node",
  "System Archetype",
  "What They Give (Input)",
  "What They Get (Incentive Alignment)",
];

const LOOP_ROWS = [
  [
    "**1. Donors (`Fd`)** *(Restaurants, Markets, Schools/Venues)*",
    "**The ROI-Driven Business**",
    "*[Green]* Surplus food (from 5 lbs/wk up) tagged by macro-category (*Protein, Carb, Produce*) + size-tiered monthly SaaS fee.",
    "*[Blue]* **New Customer Acquisition** from Patrons + physical storefront window badging. *[Orange]* Automated PATH Act Tax ID receipts & CSR media statements.",
  ],
  [
    "**2. Patrons (`Fi`)** *(Conscious Consumers)*",
    "**The Wallet Voter (Capital Engine)**",
    "*[Blue]* Dining spend at Donor venues, paid delivery fees, feedback/appreciation, & $10/$25/$50 pledges.",
    "*[Blue]* Storefront **2-for-1s and 5%–15% discounts**. *[Orange]* Real-time restaurant waste-saved tracking, leaderboards, & **city-expansion voting**.",
  ],
  [
    "**3. Volunteers (`Fv`)** *(Last-Mile Fleet)*",
    "**The Time-Poor Altruist**",
    "*[Green]* 20–30 minute hyper-local pickup and delivery execution.",
    '*[Orange]* Quantified Dopamine Hit (*"Feed up to 100 people per hour"*) + official accreditation pin. *[Blue]* Donor coupons + $50 reward unlocked via sweat-equity.',
  ],
  [
    "**4. Recipients (`Fr`)** *(Shelters, Food Banks, Churches)*",
    "**The Community Partner (Dignified Demand)**",
    "*[Orange]* Real-time storage capacity & intake confirmation via dedicated tablet.",
    '*[Green]* A curated **"Menu" instead of a mystery dumping box** (targeted protein/produce) + **automated annual Donor weight/value tax statements**.',
  ],
];

export default function EcosystemSection() {
  return (
    <Section
      id="section-2"
      title="2. Ecosystem Architecture: The 4-Sided Marketplace & Hybrid Social Enterprise"
    >
      <SourceQuote
        quote={`"All projects are archetypes of a new successful fusion of resource efficiency, environmental sensitivity, attention to human well-being, and financial success that has been called 'Natural Capitalism.'"`}
        source="**Foundational Thesis Mantra (2016 FoodShare Kickstarter Draft)**"
      />
      <Prose text='Classic gig platforms like Uber, Lyft, and DoorDash are **3-sided marketplaces** (*Customer, Driver, Merchant*). To solve the "Non-Profit Starvation Cycle" without relying on endless grant writing, I codified a **Periodic Table of 4 User Roles (`Fd, Fi, Fv, Fr`)** orchestrated by a dual-entity API gateway:' />
      <BulletList
        items={[
          '**`FoodShare.co` (The For-Profit SaaS & Patron Engine):** Powered by Next.js Serverless Functions, Prisma ORM, Stripe B2B subscriptions, and PostgreSQL. Donors pay a **monthly SaaS fee tiered by business size** to unlock official physical storefront badging (*"Donates Unused Food to Those in Need"*), automated annual tax/CSR statements, placement in the **Patron Discovery Marketplace**, and a **"DoorDash-Lite" on-demand delivery service** where a percentage of every full-price Patron food order directly subsidizes free rescue logistics.',
          "**`FoodShare.work` / `.org` (The 501(c)(3) Logistical Engine):** Powered by Node.js (Fastify), Redis geospatial caching, and Supabase Realtime WebSockets. Manages high-frequency driver telemetry, Good Samaritan liability tracking, and atomic rescue dispatch for establishments contributing **even 5 lbs of food a week**.",
        ]}
      />
      <FoodShareOrchestrationDiagram />
      <Subhead>The 3-Loop Value Exchange Matrix</Subhead>
      <SourceQuote
        quote={`"To make a difference, become a Patron and support FoodShare businesses by purchasing at their establishment. If we want a voice in the modern times, we need to put our wallets where our minds and mouths are."`}
        source="**Primary Source Excerpt: The Patron Thesis (2016 Kickstarter Draft)**"
      />
      <Prose text="Every stakeholder node exchanges value across three color-coded system channels (**Green = Physical Sustenance**, **Blue = Economic Capital**, **Orange = Telemetry & Status**):" />
      <DataTable headers={LOOP_HEADERS} rows={LOOP_ROWS} />
      <Subhead>
        Architectural Nuance: Role-Based Design & Cross-Side Network Effects
        (Volunteer ↔ Patron)
      </Subhead>
      <Prose text="While the *Volunteer* and the *Patron* can often be the same person, I intentionally architected them as **distinct system roles** because their operational constraints differ (**Volunteers** spend *Time & Mobility* for logistics; **Patrons** spend *Capital* for consumption). Keeping the roles structurally distinct prevented UI cognitive overload while enabling **Cross-Side Network Effect gamification loops**:" />
      <BulletList
        items={[
          "**Volunteer → Patron Conversion:** Completing a rescue run unlocks a 20% Patron discount coupon for lunch at the exact Donor restaurant the volunteer just served.",
          '**Patron → Volunteer Conversion:** Ordering dinner from a partner café prompts the diner: *"The Corner Bakery donates 50 lbs of food a week—claim a 20-minute rescue run next time you\'re nearby!"*',
        ]}
      />
      <Figure
        src="/images/foodshare/sketch-webapp-iterations.png"
        alt="Six side-by-side FoodShare landing-page iterations on the foodsdiagram.sketch canvas, including the Fi, Fv, Fd, Fr periodic table."
        width={2856}
        height={1786}
        caption={
          <Rich text="**Iterative Systems Design in `foodsdiagram.sketch`:** Six side-by-side full-height web app iterations (`Landing Page v mvp1_1` through `Desktop HD Copy 5`) testing color-contrast hypotheses (yellow → burnt orange → high-contrast white) and codifying the **Periodic Table of Roles (`Fi, Fv, Fd, Fr`)**." />
        }
      />
    </Section>
  );
}
