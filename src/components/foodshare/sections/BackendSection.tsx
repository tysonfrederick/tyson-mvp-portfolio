import {
  DataTable,
  OrderedList,
  Prose,
  SchemaBlock,
  Section,
  SourceQuote,
  Subhead,
} from "../prose";

const SCHEMA = `-- Production PostgreSQL / PostGIS Core Schema Excerpt
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

const AI_HEADERS = [
  "System Pillar",
  "Core Operational Problem",
  "Technical Architecture",
  "Target Impact Metric",
];

const AI_ROWS = [
  [
    "**1. Predictive Logistics Engine**",
    "Reactive last-mile alerts cause missed pickups and spoiled food.",
    'Apache Kafka telemetry ingest + Python **ARIMA time-series regression** computing spatial probability density (V_pred) 24 hours in advance ("Virtual Donations").',
    "**+20% increase** in lbs of food rescued per volunteer hour.",
  ],
  [
    "**2. Generative Engagement & Nutritional Matching**",
    "Volunteer churn from generic alerts & shelters getting buried in carbs instead of protein.",
    "**Supabase (`pgvector`) Bipartite Matching** routing protein/produce to food deserts + asynchronous webhook triggering LLM/NLG personalized Impact Cards (Weight × 10 People Fed).",
    "**-15% reduction** in 90-day volunteer churn rate.",
  ],
  [
    "**3. Epistemic Telemetry & SROI Dashboard**",
    "Biased 5-star ratings cause friction; non-profits spend hundreds of hours on grant reports.",
    "WebSocket GPS tracking verifying **Haversine distance (D ≤ 50 meters)** for zero-input drop-off confirmation + NLP corporate Social Return on Investment (SROI) reporting (CO₂ averted, meals funded).",
    "**-50% reduction** in staff reporting time & zero rating bias.",
  ],
];

export default function BackendSection() {
  return (
    <Section
      id="backend"
      title="4. Production Backend: The Atomic 4-Way Handshake & 2026 AI Retrofit"
    >
      <SourceQuote
        quote={`"The software will only allow for the transaction to be approved upon having all of our roles available at the same time... Tablet to receive and confirm available shares and access dashboard (only when a share, driver, and recipient is available)."`}
        source="**Primary Source Excerpt: The Original 4-Way Handshake Spec (2016 Kickstarter Draft)**"
      />
      <Prose text="To prevent race conditions (for example, two volunteers simultaneously claiming the same 10 lbs of beef at **Iguana's** in downtown San Jose) and eliminate manual coordination, I evolved my 2016 synchronous availability rule into a distributed transaction engine paired with a 3-pillar **2026 AI & Telemetry Retrofit**:" />
      <Subhead>
        1. The 4-Way Handshake Engine (Redis Geospatial Atomic Locks + PostGIS)
      </Subhead>
      <Prose text="A rescue share cannot be finalized unless four real-world dependencies align simultaneously:" />
      <OrderedList
        items={[
          "**Geospatial Indexing:** When a Donor posts surplus, the item is written to a Redis geospatial index (`GEOADD available_shares longitude latitude share_id`) as `PENDING_MATCH`.",
          "**30-Second Atomic Lock:** When a volunteer taps claim, the matching engine establishes an isolated Redis distributed lock (`SET lock:share_id volunteer_id NX PX 30000`), granting a strict 30-second window to validate the matrix.",
          "**Snapshot Isolation Check:** Inside a single PostgreSQL/PostGIS transaction (`USING gist (location)`), the engine verifies: *(a) Donor item unexpired/unallocated*, *(b) Volunteer authenticated inside the geo-fenced block*, *(c) Recipient shelter inbound queue below max capacity*, and *(d) Patron sponsorship slot active*. If all four pass, the state commits to `SCHEDULED`; if any check fails, it safely rolls back without dropping telemetry.",
        ]}
      />
      <SchemaBlock
        caption="Production PostgreSQL / PostGIS Core Schema Excerpt"
        source={SCHEMA}
      />
      <Subhead>2. The 2026 AI & Operational Telemetry Matrix</Subhead>
      <Prose text="Informed by my frontline experience auditing physical-to-digital inventory exceptions at **Amazon's SCK4 Inbound Cross-Dock**, the 2026 architecture replaces manual triage with three automated pipelines:" />
      <DataTable headers={AI_HEADERS} rows={AI_ROWS} />
    </Section>
  );
}
