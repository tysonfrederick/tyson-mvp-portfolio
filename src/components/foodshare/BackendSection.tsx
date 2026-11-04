import {
  Body,
  Kicker,
  Mono,
  Numbered,
  NumberedItem,
  Quote,
  RichTable,
  SectionTitle,
  SqlBlock,
  SubTitle,
} from "@/components/foodshare/prose";

const SHARE_SCHEMA = `-- Production PostgreSQL / PostGIS Core Schema Excerpt
CREATE TYPE user_role AS ENUM ('donor', 'volunteer', 'recipient', 'patron');
CREATE TYPE share_status AS ENUM ('pending_match', 'scheduled', 'en_route_pickup', 'picked_up', 'delivered', 'cancelled');
CREATE TYPE food_category AS ENUM ('raw_vegetables', 'unperishable_cans', 'unperishable_meat', 'baked_goods', 'prepared_meals');

CREATE TABLE shares (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_id UUID REFERENCES organizations(id) NOT NULL,
  recipient_id UUID REFERENCES organizations(id),
  volunteer_id UUID REFERENCES users(id),
  status share_status NOT NULL DEFAULT 'pending_match',
  pickup_deadline TIMESTAMPTZ NOT NULL,
  dropoff_deadline TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE share_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  share_id UUID REFERENCES shares(id) ON DELETE CASCADE NOT NULL,
  category food_category NOT NULL,
  item_name TEXT NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0),
  weight_lbs NUMERIC(6, 2) NOT NULL CHECK (weight_lbs > 0.00)
);

CREATE INDEX idx_org_location ON organizations USING gist (location);
CREATE INDEX idx_shares_status ON shares (status);`;

export default function BackendSection() {
  return (
    <section id="backend" className="flex flex-col gap-8 border-t border-zinc-800">
      <SectionTitle>
        4. Production Backend: The Atomic 4-Way Handshake & 2026 AI Retrofit
      </SectionTitle>
      <Quote
        source={
          <Kicker>
            Primary Source Excerpt: The Original 4-Way Handshake Spec (2016 Kickstarter Draft)
          </Kicker>
        }
      >
        &quot;The software will only allow for the transaction to be approved upon having all of our roles available at the same time... Tablet to receive and confirm available shares and access dashboard (only when a share, driver, and recipient is available).&quot;
      </Quote>
      <Body>
        To prevent race conditions (for example, two volunteers simultaneously claiming the same 10 lbs of beef at{" "}
        <Kicker>Iguana&apos;s</Kicker> in downtown San Jose) and eliminate manual coordination, I evolved my 2016 synchronous availability rule into a distributed transaction engine paired with a 3-pillar{" "}
        <Kicker>2026 AI & Telemetry Retrofit</Kicker>:
      </Body>
      <SubTitle>
        1. The 4-Way Handshake Engine (Redis Geospatial Atomic Locks + PostGIS)
      </SubTitle>
      <Body>
        A rescue share cannot be finalized unless four real-world dependencies align simultaneously:
      </Body>
      <Numbered>
        <NumberedItem>
          <Kicker>Geospatial Indexing:</Kicker> When a Donor posts surplus, the item is written to a Redis geospatial index (<Mono>GEOADD available_shares longitude latitude share_id</Mono>) as <Mono>PENDING_MATCH</Mono>.
        </NumberedItem>
        <NumberedItem>
          <Kicker>30-Second Atomic Lock:</Kicker> When a volunteer taps claim, the matching engine establishes an isolated Redis distributed lock (<Mono>SET lock:share_id volunteer_id NX PX 30000</Mono>), granting a strict 30-second window to validate the matrix.
        </NumberedItem>
        <NumberedItem>
          <Kicker>Snapshot Isolation Check:</Kicker> Inside a single PostgreSQL/PostGIS transaction (<Mono>USING gist (location)</Mono>), the engine verifies: <em>(a) Donor item unexpired/unallocated</em>, <em>(b) Volunteer authenticated inside the geo-fenced block</em>, <em>(c) Recipient shelter inbound queue below max capacity</em>, and <em>(d) Patron sponsorship slot active</em>. If all four pass, the state commits to <Mono>SCHEDULED</Mono>; if any check fails, it safely rolls back without dropping telemetry.
        </NumberedItem>
      </Numbered>
      <SqlBlock source={SHARE_SCHEMA} />
      <SubTitle>2. The 2026 AI & Operational Telemetry Matrix</SubTitle>
      <Body>
        Informed by my frontline experience auditing physical-to-digital inventory exceptions at{" "}
        <Kicker>Amazon&apos;s SCK4 Inbound Cross-Dock</Kicker>, the 2026 architecture replaces manual triage with three automated pipelines:
      </Body>
      <RichTable
        headers={[
          "System Pillar",
          "Core Operational Problem",
          "Technical Architecture",
          "Target Impact Metric",
        ]}
        rows={[
          [
            <Kicker key="p1">1. Predictive Logistics Engine</Kicker>,
            <>Reactive last-mile alerts cause missed pickups and spoiled food.</>,
            <>
              Apache Kafka telemetry ingest + Python <Kicker>ARIMA time-series regression</Kicker> computing spatial probability density (<em>V<sub>pred</sub></em>) 24 hours in advance (&quot;Virtual Donations&quot;).
            </>,
            <>
              <Kicker>+20% increase</Kicker> in lbs of food rescued per volunteer hour.
            </>,
          ],
          [
            <Kicker key="p2">2. Generative Engagement & Nutritional Matching</Kicker>,
            <>
              Volunteer churn from generic alerts & shelters getting buried in carbs instead of protein.
            </>,
            <>
              <Kicker>
                Supabase (<Mono>pgvector</Mono>) Bipartite Matching
              </Kicker>{" "}
              routing protein/produce to food deserts + asynchronous webhook triggering LLM/NLG personalized Impact Cards (<em>Weight × 10 People Fed</em>).
            </>,
            <>
              <Kicker>-15% reduction</Kicker> in 90-day volunteer churn rate.
            </>,
          ],
          [
            <Kicker key="p3">3. Epistemic Telemetry & SROI Dashboard</Kicker>,
            <>
              Biased 5-star ratings cause friction; non-profits spend hundreds of hours on grant reports.
            </>,
            <>
              WebSocket GPS tracking verifying <Kicker>Haversine distance (<em>D ≤ 50 meters</em>)</Kicker> for zero-input drop-off confirmation + NLP corporate Social Return on Investment (SROI) reporting (<em>CO₂</em> averted, meals funded).
            </>,
            <>
              <Kicker>-50% reduction</Kicker> in staff reporting time & zero rating bias.
            </>,
          ],
        ]}
      />
    </section>
  );
}
