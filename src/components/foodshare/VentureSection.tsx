import {
  Body,
  Bullet,
  BulletList,
  Kicker,
  Lead,
  Mono,
  RichTable,
  SectionTitle,
  StudyFigure,
  SubTitle,
} from "@/components/foodshare/prose";

export default function VentureSection() {
  return (
    <section id="venture" className="flex flex-col gap-8 border-t border-zinc-800">
      <SectionTitle>
        5. Venture Economics, Growth Telemetry & The 2017–2026 Architectural Evolution
      </SectionTitle>
      <Lead>
        A four-sided marketplace cannot scale globally on day one; it requires localized{" "}
        <Kicker>Marketplace Liquidity</Kicker> across all four nodes simultaneously. In my original Kickstarter specification, I engineered a transparent{" "}
        <Kicker>$100,000 Cap-Ex / Op-Ex Venture Budget</Kicker> paired with a{" "}
        <Kicker>3-Phase Geo-Fenced Rollout Strategy</Kicker> and empirical{" "}
        <Kicker>A/B Paid Acquisition Testing</Kicker>:
      </Lead>
      <SubTitle>
        1. The $100,000 0-to-1 Venture Allocation & Dedicated Hardware Fleet
      </SubTitle>
      <Body>
        Rather than assuming busy restaurant cooks or shelter workers would use personal phones on the line, I budgeted{" "}
        <Kicker>$10,000 for a dedicated fleet of kitchen/shelter Android tablets</Kicker> pre-configured to wake and alert staff <em>only</em> when the 4-Way Handshake condition (Share + Driver + Recipient) was active:
      </Body>
      <RichTable
        headers={[
          "Budget Allocation",
          "Amount ($100,000 Total)",
          "Strategic & Technical Deliverables",
        ]}
        rows={[
          [
            <Kicker key="eng">Core App Engineering</Kicker>,
            <Kicker key="eng-amt">$40,000 (40%)</Kicker>,
            <>Native mobile (Android/iOS), web platform, and 4-role dashboard development.</>,
          ],
          [
            <Kicker key="ux">UX/UI & Systems Design</Kicker>,
            <Kicker key="ux-amt">$15,000 (15%)</Kicker>,
            <>Multi-sided interaction design across Web, Mobile, and Partner Dashboards.</>,
          ],
          [
            <Kicker key="be">Backend & Spatial Infrastructure</Kicker>,
            <Kicker key="be-amt">$15,000 (15%)</Kicker>,
            <>Database architecture, geospatial matching, Tax ID ledger, and server maintenance.</>,
          ],
          [
            <Kicker key="hw">Hardware Tablet Fleet & GTM</Kicker>,
            <Kicker key="hw-amt">$10,000 (10%)</Kicker>,
            <>
              <Kicker>Dedicated fleet of Donor/Recipient Android tablets</Kicker> + local B2B/B2C marketing.
            </>,
          ],
          [
            <Kicker key="sweat">Sweat-Equity Rewards & Platform Fees</Kicker>,
            <Kicker key="sweat-amt">$20,000 (20%)</Kicker>,
            <>
              $10k Kickstarter/volunteer reward packages (unlockable via volunteer hours) + $10k transaction fees.
            </>,
          ],
        ]}
      />
      <SubTitle>2. The 3-Phase &quot;Bowling Pin&quot; Liquidity Roadmap</SubTitle>
      <BulletList>
        <Bullet>
          <Kicker>Phase 1 — Santa Cruz County & Silicon Valley Alpha (<Mono>1,000 lbs/wk</Mono> Target):</Kicker> Designed around two structured test phases across <Kicker>Santa Cruz County</Kicker> (Santa Cruz, Capitola, Soquel) and <Kicker>Silicon Valley</Kicker> (Winter 2016 – Fall 2017) to connect an initial alpha cohort of <Kicker>25 restaurants, 5 markets, and 3 public venues/schools</Kicker> rescuing <Kicker>1,000 lbs of food per week (4,000 lbs/month)</Kicker>.
        </Bullet>
        <Bullet>
          <Kicker>Phase 2 — Version 1.0 & South Bay Expansion (<Mono>10,000 lbs/wk</Mono> Target):</Kicker> Scaling to <Kicker>10,000 lbs/week (40,000+ lbs/month)</Kicker> across <Kicker>South San Jose, Campbell, and Santa Clara</Kicker> ($500k stretch goal), validated publicly through an exhibition at the <Kicker>Bay Area Maker Faire</Kicker> and 3D spatial concept visualization methodologies.
        </Bullet>
        <Bullet>
          <Kicker>Phase 3 — Crowdsourced West Coast Expansion & The 2026 AI Retrofit:</Kicker> Empowering Patrons to vote in-app on which target city (<Kicker>San Francisco, Seattle, Reno, Lake Tahoe, Eugene, or Salt Lake City</Kicker>) unlocks the next physical orientation hub for every $250k milestone—now architected for autonomous scale on <Kicker>Next.js, Vercel, Redis, and Supabase</Kicker>.
        </Bullet>
      </BulletList>
      <SubTitle>
        3. Pre-Launch Growth Engineering: 60-Day Sprint, Google Analytics, SEO & Micro-Budget A/B Testing (2016–2017)
      </SubTitle>
      <Body>
        During a concentrated two-month pre-launch growth sprint, I treated customer and partner acquisition as an empirical engineering problem—wiring <Mono>foodshare.co</Mono> and <Mono>foodshare.co/partner.html</Mono> into <Kicker>Google Analytics</Kicker> (<Mono>Active Users</Mono> real-time funnel tracking), optimizing search-index SEO keywords around food insecurity and commercial waste, and running structured A/B paid acquisition experiments across Facebook and Instagram/X (<Mono>@foodshareco</Mono>):
      </Body>
      <RichTable
        headers={[
          "2017 Cohort & Experiment Variant",
          "Ad Format & Targeting Hook",
          "Micro-Spend",
          "Empirical Telemetry Result",
          "Strategic GTM Takeaway",
        ]}
        rows={[
          [
            <Kicker key="1a">Cohort 1A (Mar 9, 2017)</Kicker>,
            <>
              <em>Boosted Content Post</em> (Emotional Hook: <em>&quot;Scary stuff out there...&quot;</em>)
            </>,
            <Kicker key="1a-spend">$3.89</Kicker>,
            <>
              <Kicker>441 Reached</Kicker> • <Kicker>29 Post Engagements</Kicker> ($0.13 / engagement)
            </>,
            <>
              High emotional resonance and comment/like velocity for B2C Volunteer/Patron awareness.
            </>,
          ],
          [
            <Kicker key="1b">Cohort 1B (Mar 9, 2017)</Kicker>,
            <>
              <em>Local Business Promotion</em> (Product Hook: <em>&quot;Our on-demand mobile and web apps help businesses...&quot;</em>)
            </>,
            <>
              <Kicker>$7.53</Kicker> ($3/day)
            </>,
            <>
              <Kicker>2,969 Reached</Kicker> • <Kicker>3,157 Local Impressions</Kicker> (<Kicker>$2.38 CPM</Kicker>)
            </>,
            <>
              <Kicker>6.7x more local reach</Kicker> than standard posts; proved hyper-local radius targeting is the most capital-efficient way to acquire Donors.
            </>,
          ],
          [
            <Kicker key="2a">Cohort 2A (Oct 21, 2017)</Kicker>,
            <>
              <em>Boosted Content Post</em> (Status Hook: <em>&quot;BACK and GOING at FoodShare...&quot;</em>)
            </>,
            <Kicker key="2a-spend">$2.00</Kicker>,
            <>
              <Kicker>104 Reached</Kicker> • <Kicker>3 Post Engagements</Kicker>
            </>,
            <>Confirmed generic status updates underperform without a localized utility hook.</>,
          ],
          [
            <Kicker key="2b">Cohort 2B (Oct 21, 2017)</Kicker>,
            <>
              <em>Local Business Promotion</em> (CTA Hook: <em>&quot;Connect for good — On-demand mobile apps...&quot;</em>)
            </>,
            <>
              <Kicker>$3.99</Kicker> ($2/day)
            </>,
            <>
              <Kicker>1,623 Reached</Kicker> • <Kicker>1,635 Local Impressions</Kicker> (<Kicker>$2.44 CPM</Kicker>)
            </>,
            <>
              Replicated Cohort 1B&apos;s sub-$2.50 CPM efficiency (<Kicker>15.6x reach multiplier</Kicker> over Variant 2A), validating the geo-fenced &quot;Bowling Pin&quot; launch model.
            </>,
          ],
        ]}
      />
      <BulletList>
        <Bullet>
          <Kicker>Total Micro-Test Efficiency & Institutional Validation:</Kicker> Across just <Kicker>$17.41 in validation ad spend</Kicker>, the campaigns reached <Kicker>5,137 local users</Kicker> and generated <Kicker>4,792+ targeted local impressions</Kicker> (~$2.40 CPM), building a pre-launch community of <Kicker>508 followers on Instagram</Kicker> and <Kicker>70 followers on Facebook</Kicker>—and organically attracting verified institutional followers including <Kicker>Marc Perrone</Kicker> (International President of the 1.3-million-member <Kicker>United Food & Commercial Workers / UFCW</Kicker> union representing grocery and food-retail workers across North America) and <Kicker>StartUp Mindset</Kicker> (Top 50 Entrepreneurship publication).
        </Bullet>
      </BulletList>
      <SubTitle>4. The 2018–2021 Caregiving Pivot & The Somatic UI Continuum</SubTitle>
      <Body>
        In late 2017—right as the 60-day GTM sprint concluded and the $100,000 Kickstarter campaign awaited its final launch video—life circumstances required an immediate, decisive pivot:
      </Body>
      <BulletList>
        <Bullet>
          <Kicker>Stepping Away for End-of-Life Care & Zero-UI Research (2018–2021):</Kicker> I placed the FoodShare Kickstarter launch on hold to move to Lake Tahoe as the full-time caregiver for my 81-year-old father battling advanced Parkinson&apos;s disease. Over those four years, as Parkinson&apos;s systematically degraded his physical motor control (&quot;freezing&quot; states), traditional screen interfaces became inaccessible—turning ambient voice assistants (Alexa and Google Home &quot;Drop-In&quot; lifelines) into his sole cyber-physical bridge to safety.
        </Bullet>
        <Bullet>
          <Kicker>Closing the Architectural Loop (2023–2026 — From Mobile & Voice to Spatial XR):</Kicker> That 4-year longitudinal study in <Kicker>Zero-UI / Voice accessibility</Kicker> and responsive microphone behaviors, followed by nearly three years auditing high-velocity physical-to-digital logistics telemetry and optical camera/scanner ergonomics at <Kicker>Amazon&apos;s SCK4 Inbound Cross-Dock</Kicker>, completed my <Kicker>Somatic UI Spectrum</Kicker>. Today, those hard-won lessons in ambient computing, heads-up multimodal orchestration, mistake-proof human factors, and industrial exception handling directly power FoodShare&apos;s <Kicker>2026 Next.js, Redis, and Supabase Agentic Architecture</Kicker>.
        </Bullet>
      </BulletList>
      <div className="grid grid-cols-1 gap-6">
        <StudyFigure
          src="/images/foodshare/foodshare-logo-evolution-grid.png"
          alt="Six-panel grid of the FoodShare monogram, from paper sketches to the finished ribbon"
          width={1862}
          height={1656}
          caption={
            <>
              <Kicker>Brand Evolution Matrix:</Kicker> Curated 3x2 grid documenting the industrial design progression from raw analog Post-it note ideation (top row: fusing a heart, upward growth arrow, and <Mono>f</Mono>/<Mono>s</Mono> ligature) to digital vector synthesis and the final 4-segment <Mono>fs</Mono> continuous ribbon (bottom row).
            </>
          }
        />
        <StudyFigure
          src="/images/foodshare/foodshare-fb-ab-test-analytics.png"
          alt="2017 Facebook promotions dashboard for FoodShare local campaigns"
          width={2012}
          height={1126}
          caption={
            <>
              <Kicker>2017 Growth Telemetry & A/B Ad Matrix:</Kicker> Primary-source capture of the 2017 Facebook Promotions dashboard validating the 2x2 A/B experiment ($17.41 micro-spend → 5,137 local users reached and 4,792+ local impressions at ~$2.40 CPM), paired with Google Analytics (<Mono>Active Users</Mono>) real-time funnel tracking.
            </>
          }
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StudyFigure
          src="/images/foodshare/Social-Partner-Hero.JPG"
          alt="FoodShare partner page banner with a row of illustrated people"
          width={1229}
          height={796}
          caption={
            <>
              Original <Mono>foodshare.co/partner.html</Mono> community onboarding banner (<em>&quot;Let&apos;s be friends... Sharing our networks together&quot;</em>) showcasing inclusive Material Design character illustration.
            </>
          }
        />
        <StudyFigure
          src="/images/foodshare/expandyourreach.jpg"
          alt="FoodShare donor poster reading Expand your reach"
          width={1080}
          height={1080}
          caption={
            <>
              B2B Donor acquisition creative (<em>&quot;Expand your reach. Up your reputation. Fight hunger and poverty.&quot;</em>).
            </>
          }
        />
        <StudyFigure
          src="/images/foodshare/one-lb-of-food.jpg"
          alt="FoodShare poster stating one pound of food can feed ten people"
          width={1080}
          height={1080}
          caption={
            <>
              B2C unit-economics impact creative (<em>&quot;One lb. of food can help feed up to TEN PEOPLE at a non-profit serving those in NEED.&quot;</em>).
            </>
          }
        />
      </div>
    </section>
  );
}
