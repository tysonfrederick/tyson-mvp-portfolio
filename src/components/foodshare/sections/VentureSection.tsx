import {
  BulletList,
  DataTable,
  Figure,
  Prose,
  Rich,
  Section,
  Subhead,
} from "../prose";

const BUDGET_HEADERS = [
  "Budget Allocation",
  "Amount ($100,000 Total)",
  "Strategic & Technical Deliverables",
];

const BUDGET_ROWS = [
  [
    "**Core App Engineering**",
    "**$40,000 (40%)**",
    "Native mobile (Android/iOS), web platform, and 4-role dashboard development.",
  ],
  [
    "**UX/UI & Systems Design**",
    "**$15,000 (15%)**",
    "Multi-sided interaction design across Web, Mobile, and Partner Dashboards.",
  ],
  [
    "**Backend & Spatial Infrastructure**",
    "**$15,000 (15%)**",
    "Database architecture, geospatial matching, Tax ID ledger, and server maintenance.",
  ],
  [
    "**Hardware Tablet Fleet & GTM**",
    "**$10,000 (10%)**",
    "**Dedicated fleet of Donor/Recipient Android tablets** + local B2B/B2C marketing.",
  ],
  [
    "**Sweat-Equity Rewards & Platform Fees**",
    "**$20,000 (20%)**",
    "$10k Kickstarter/volunteer reward packages (unlockable via volunteer hours) + $10k transaction fees.",
  ],
];

const GTM_HEADERS = [
  "2017 Cohort & Experiment Variant",
  "Ad Format & Targeting Hook",
  "Micro-Spend",
  "Empirical Telemetry Result",
  "Strategic GTM Takeaway",
];

const GTM_ROWS = [
  [
    "**Cohort 1A (Mar 9, 2017)**",
    '*Boosted Content Post* (Emotional Hook: *"Scary stuff out there..."*)',
    "**$3.89**",
    "**441 Reached** • **29 Post Engagements** ($0.13 / engagement)",
    "High emotional resonance and comment/like velocity for B2C Volunteer/Patron awareness.",
  ],
  [
    "**Cohort 1B (Mar 9, 2017)**",
    '*Local Business Promotion* (Product Hook: *"Our on-demand mobile and web apps help businesses..."*)',
    "**$7.53** ($3/day)",
    "**2,969 Reached** • **3,157 Local Impressions** (**$2.38 CPM**)",
    "**6.7x more local reach** than standard posts; proved hyper-local radius targeting is the most capital-efficient way to acquire Donors.",
  ],
  [
    "**Cohort 2A (Oct 21, 2017)**",
    '*Boosted Content Post* (Status Hook: *"BACK and GOING at FoodShare..."*)',
    "**$2.00**",
    "**104 Reached** • **3 Post Engagements**",
    "Confirmed generic status updates underperform without a localized utility hook.",
  ],
  [
    "**Cohort 2B (Oct 21, 2017)**",
    '*Local Business Promotion* (CTA Hook: *"Connect for good — On-demand mobile apps..."*)',
    "**$3.99** ($2/day)",
    "**1,623 Reached** • **1,635 Local Impressions** (**$2.44 CPM**)",
    'Replicated Cohort 1B\'s sub-$2.50 CPM efficiency (**15.6x reach multiplier** over Variant 2A), validating the geo-fenced "Bowling Pin" launch model.',
  ],
];

export default function VentureSection() {
  return (
    <Section
      id="section-5"
      title="5. Venture Economics, Growth Telemetry & The 2017–2026 Architectural Evolution"
    >
      <Prose text="A four-sided marketplace cannot scale globally on day one; it requires localized **Marketplace Liquidity** across all four nodes simultaneously. In my original Kickstarter specification, I engineered a transparent **$100,000 Cap-Ex / Op-Ex Venture Budget** paired with a **3-Phase Geo-Fenced Rollout Strategy** and empirical **A/B Paid Acquisition Testing**:" />
      <Subhead>
        1. The $100,000 0-to-1 Venture Allocation & Dedicated Hardware Fleet
      </Subhead>
      <Prose text="Rather than assuming busy restaurant cooks or shelter workers would use personal phones on the line, I budgeted **$10,000 for a dedicated fleet of kitchen/shelter Android tablets** pre-configured to wake and alert staff *only* when the 4-Way Handshake condition (Share + Driver + Recipient) was active:" />
      <DataTable headers={BUDGET_HEADERS} rows={BUDGET_ROWS} />
      <Subhead>2. The 3-Phase &quot;Bowling Pin&quot; Liquidity Roadmap</Subhead>
      <BulletList
        items={[
          "**Phase 1 — Santa Cruz County & Silicon Valley Alpha (`1,000 lbs/wk` Target):** Designed around two structured test phases across **Santa Cruz County** (Santa Cruz, Capitola, Soquel) and **Silicon Valley** (Winter 2016 – Fall 2017) to connect an initial alpha cohort of **25 restaurants, 5 markets, and 3 public venues/schools** rescuing **1,000 lbs of food per week (4,000 lbs/month)**.",
          "**Phase 2 — Version 1.0 & South Bay Expansion (`10,000 lbs/wk` Target):** Scaling to **10,000 lbs/week (40,000+ lbs/month)** across **South San Jose, Campbell, and Santa Clara** ($500k stretch goal), validated publicly through an exhibition at the **Bay Area Maker Faire** and 3D spatial concept visualization methodologies.",
          "**Phase 3 — Crowdsourced West Coast Expansion & The 2026 AI Retrofit:** Empowering Patrons to vote in-app on which target city (**San Francisco, Seattle, Reno, Lake Tahoe, Eugene, or Salt Lake City**) unlocks the next physical orientation hub for every $250k milestone—now architected for autonomous scale on **Next.js, Vercel, Redis, and Supabase**.",
        ]}
      />
      <Subhead>
        3. Pre-Launch Growth Engineering: 60-Day Sprint, Google Analytics, SEO
        & Micro-Budget A/B Testing (2016–2017)
      </Subhead>
      <Prose text="During a concentrated two-month pre-launch growth sprint, I treated customer and partner acquisition as an empirical engineering problem—wiring `foodshare.co` and `foodshare.co/partner.html` into **Google Analytics** (`Active Users` real-time funnel tracking), optimizing search-index SEO keywords around food insecurity and commercial waste, and running structured A/B paid acquisition experiments across Facebook and Instagram/X (`@foodshareco`):" />
      <DataTable headers={GTM_HEADERS} rows={GTM_ROWS} />
      <Figure
        src="/images/foodshare/foodshare-fb-ab-test-analytics.png"
        alt="2017 Facebook Promotions dashboard showing the FoodShare local ad tests, reach, and cost per thousand impressions."
        width={2012}
        height={1126}
        caption={
          <Rich text="**2017 Growth Telemetry & A/B Ad Matrix:** Primary-source capture of the 2017 Facebook Promotions dashboard validating the 2x2 A/B experiment ($17.41 micro-spend → 5,137 local users reached and 4,792+ local impressions at ~$2.40 CPM), paired with Google Analytics (`Active Users`) real-time funnel tracking." />
        }
      />
      <BulletList
        items={[
          "**Total Micro-Test Efficiency & Institutional Validation:** Across just **$17.41 in validation ad spend**, the campaigns reached **5,137 local users** and generated **4,792+ targeted local impressions** (~$2.40 CPM), building a pre-launch community of **508 followers on Instagram** and **70 followers on Facebook**—and organically attracting verified institutional followers including **Marc Perrone** (International President of the 1.3-million-member **United Food & Commercial Workers / UFCW** union representing grocery and food-retail workers across North America) and **StartUp Mindset** (Top 50 Entrepreneurship publication).",
        ]}
      />
      <Subhead>
        4. The 2018–2021 Caregiving Pivot & The Somatic UI Continuum
      </Subhead>
      <Prose text="In late 2017—right as the 60-day GTM sprint concluded and the $100,000 Kickstarter campaign awaited its final launch video—life circumstances required an immediate, decisive pivot:" />
      <BulletList
        items={[
          '**Stepping Away for End-of-Life Care & Zero-UI Research (2018–2021):** I placed the FoodShare Kickstarter launch on hold to move to Lake Tahoe as the full-time caregiver for my 81-year-old father battling advanced Parkinson\'s disease. Over those four years, as Parkinson\'s systematically degraded his physical motor control ("freezing" states), traditional screen interfaces became inaccessible—turning ambient voice assistants (Alexa and Google Home "Drop-In" lifelines) into his sole cyber-physical bridge to safety.',
          "**Closing the Architectural Loop (2023–2026 — From Mobile & Voice to Spatial XR):** That 4-year longitudinal study in **Zero-UI / Voice accessibility** and responsive microphone behaviors, followed by nearly three years auditing high-velocity physical-to-digital logistics telemetry and optical camera/scanner ergonomics at **Amazon's SCK4 Inbound Cross-Dock**, completed my **Somatic UI Spectrum**. Today, those hard-won lessons in ambient computing, heads-up multimodal orchestration, mistake-proof human factors, and industrial exception handling directly power FoodShare's **2026 Next.js, Redis, and Supabase Agentic Architecture**.",
        ]}
      />
      <div className="mx-auto w-full max-w-4xl">
        <Figure
          src="/images/foodshare/foodshare-logo-evolution-grid.png"
          alt="Six-panel grid of the FoodShare mark, from Post-it sketches through the final four-segment fs ribbon."
          width={1862}
          height={1656}
          caption={
            <Rich text="**Brand Evolution Matrix:** Curated 3x2 grid documenting the industrial design progression from raw analog Post-it note ideation (top row: fusing a heart, upward growth arrow, and `f`/`s` ligature) to digital vector synthesis and the final 4-segment `fs` continuous ribbon (bottom row)." />
          }
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Figure
          src="/images/foodshare/Social-Partner-Hero.JPG"
          alt="foodshare.co partner page banner. Illustrated neighbors stand together under the line Let's be friends."
          width={1229}
          height={796}
          caption={
            <Rich text={'Original `foodshare.co/partner.html` community onboarding banner (*"Let\'s be friends... Sharing our networks together"*) showcasing inclusive Material Design character illustration.'} />
          }
        />
        <Figure
          src="/images/foodshare/expandyourreach.jpg"
          alt="Donor acquisition poster reading Expand your reach. Up your reputation. Fight hunger and poverty."
          width={1080}
          height={1080}
          caption={
            <Rich text='B2B Donor acquisition creative (*"Expand your reach. Up your reputation. Fight hunger and poverty."*).' />
          }
        />
        <Figure
          src="/images/foodshare/one-lb-of-food.jpg"
          alt="Impact poster stating one pound of food can help feed up to ten people."
          width={1080}
          height={1080}
          caption={
            <Rich text='B2C unit-economics impact creative (*"One lb. of food can help feed up to TEN PEOPLE at a non-profit serving those in NEED."*).' />
          }
        />
      </div>
    </Section>
  );
}
