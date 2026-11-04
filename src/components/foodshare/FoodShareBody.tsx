import BackendSection from "@/components/foodshare/BackendSection";
import EcosystemSection from "@/components/foodshare/EcosystemSection";
import InteractionSection from "@/components/foodshare/InteractionSection";
import OriginSection from "@/components/foodshare/OriginSection";
import VentureSection from "@/components/foodshare/VentureSection";
import {
  Bullet,
  BulletList,
  Kicker,
  Mono,
  SectionTitle,
  StudyFigure,
} from "@/components/foodshare/prose";

const META = [
  {
    label: "Role",
    value:
      "Founder, Principal Systems Architect & Lead Product Designer (0-to-1 Strategy, Unit Economics, Brand/GTM, UX/UI, Native Android & Next.js/Supabase Architecture)",
  },
  {
    label: "System Scope",
    value:
      "4-Sided Marketplace (Fd, Fi, Fv, Fr), Dual-Entity Hybrid Business Model, Somatic Mobile UI (v0.2.3), Heads-Up Multimodal Interaction Primitives, and Agentic AI Logistics Retrofit",
  },
  {
    label: "Tech Stack",
    value: (
      <>
        Next.js, React, TypeScript, Tailwind CSS, Supabase (PostgreSQL / PostGIS / <Mono>pgvector</Mono>), Redis Geospatial Atomic Locks, Native Android (<Mono>appcompat.NavDrawer</Mono>, Java/XML, <Mono>AsyncTask</Mono>, <Mono>firebase_auth</Mono>, <Mono>RecyclerView</Mono>, Google Maps API), ARIMA Time-Series Forecasting
      </>
    ),
  },
  {
    label: "Validation",
    value:
      "508 Organic Instagram Followers & 5,137 Local Users Reached in a 60-Day Pre-Launch GTM Sprint (~$2.40 CPM); Bay Area Maker Faire Exhibition; $100k Venture & Hardware Fleet Model; 1,000 lbs/wk Alpha Target (33 partner venues) scaling to 10,000 lbs/wk (40,000+ lbs/mo — up to 100,000 meals/wk) at v1.0",
  },
];

export default function FoodShareBody() {
  return (
    <>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
        <span className="font-medium text-white">Subtitle: </span>
        From Seed to Scale: How lived experience across three gig-economy delivery platforms and industrial logistics auditing led me to architect a self-sustaining economy—bridging a for-profit SaaS customer-acquisition engine (<Mono>FoodShare.co</Mono>) with a 501(c)(3) last-mile rescue network (<Mono>FoodShare.work</Mono>).
      </p>

      <div className="mt-12">
        <StudyFigure
          src="/images/foodshare/fs-logo4.2.1.png"
          alt="FoodShare monogram, a continuous four-color ribbon"
          width={514}
          height={744}
          priority
          mat
          contained
          caption={
            <>
              The original 2016 FoodShare monogram (<Mono>fs</Mono>): a single continuous ribbon divided into four color-coded segments representing Donors (<Mono>Fd</Mono>), Volunteers (<Mono>Fv</Mono>), Recipients (<Mono>Fr</Mono>), and Patrons (<Mono>Fi</Mono>).
            </>
          }
        />
      </div>

      <div className="mt-16 grid grid-cols-1 gap-16 lg:mt-24 lg:grid-cols-3">
        <aside className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:self-start lg:overflow-y-auto">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
            <h2 className="text-xl font-medium tracking-tight text-white">
              Quick-Scan Metadata
            </h2>
            <dl className="mt-8 flex flex-col gap-8">
              {META.map((field) => (
                <div key={field.label}>
                  <dt className="text-xs font-medium tracking-tight text-zinc-400">
                    {field.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>

        <article className="flex min-w-0 flex-col gap-16 lg:col-span-2">
          <section id="skim" className="flex flex-col gap-6">
            <SectionTitle>The 30-Second Skim (Executive Summary)</SectionTitle>
            <BulletList>
              <Bullet>
                <Kicker>The Lived Problem & Macro Gap:</Kicker> While finishing my MFA at SJSU and working as a driver across three major geo-locative delivery platforms (DoorDash, Lyft, and Postmates/Google Express), I witnessed a stark daily paradox: handing out blankets and socks during a freezing downtown San Jose cold snap, then delivering <Kicker>$50 lunches in affluent Los Gatos</Kicker> days later while restaurants trashed trays of fresh surplus food. Nationally, <Kicker>31%–38% of the U.S. food supply ($382B / 73.9M tons, or 442 lbs per person)</Kicker> goes uneaten while <Kicker>47.4 million Americans (13.5% of households)</Kicker> face food insecurity. Crucially, <Kicker>less than 2% of edible surplus food is donated while 85% goes to landfills</Kicker>, because traditional food banks are optimized for pallet-sized grocery loads—leaving a massive gap in <Kicker>hyper-local, small-batch last-mile logistics (down to 5 lbs/week)</Kicker>.
              </Bullet>
              <Bullet>
                <Kicker>The Economic Breakthrough (&quot;The Patron Loop&quot; & Natural Capitalism):</Kicker> Most charity apps fail because they rely purely on altruism and tax write-offs, falling victim to the &quot;Non-Profit Starvation Cycle&quot;. My field interviews with restaurant owners revealed that what they value most from apps like DoorDash is <Kicker>new customer acquisition</Kicker>. Grounded in <em>Natural Capitalism</em>, I architected a <Kicker>4-sided hybrid marketplace</Kicker> where <Mono>FoodShare.co</Mono> (For-Profit SaaS with size-tiered monthly subscriptions and &quot;DoorDash-lite&quot; paid delivery kickbacks) drives paying, socially conscious diners (<Kicker>Patrons</Kicker>) to local restaurants, directly subsidizing <Mono>FoodShare.work</Mono> (501(c)(3) free rescue logistics).
              </Bullet>
              <Bullet>
                <Kicker>The Engineering & UX Architecture:</Kicker> Built around an atomic <Kicker>4-Way Handshake</Kicker> (originated in my 2016 spec and modernized with Redis <Mono>NX PX 30000</Mono> geospatial locks), a <Kicker>6-Step Somatic UI</Kicker> pipeline with a physical <Kicker>&quot;Loc, Bag, Gas&quot; Pilot&apos;s Checklist</Kicker>, <Kicker>Haversine GPS Epistemic Metrics</Kicker> (<em>D ≤ 50m</em>), and a <Kicker>2026 AI Retrofit</Kicker> (ARIMA predictive &quot;Virtual Donations&quot; and Supabase <Mono>pgvector</Mono> macro-nutritional matching).
              </Bullet>
            </BulletList>
          </section>

          <OriginSection />
          <EcosystemSection />
          <InteractionSection />
          <BackendSection />
          <VentureSection />
        </article>
      </div>
    </>
  );
}
