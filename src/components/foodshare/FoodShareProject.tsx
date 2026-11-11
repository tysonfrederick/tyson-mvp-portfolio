import Image from "next/image";
import ProjectStudyFrame from "@/components/ProjectStudyFrame";
import { foodshareMeta } from "@/app/projects/studies";
import { BulletList, MetaField, Rich } from "./prose";
import OriginSection from "./sections/OriginSection";
import EcosystemSection from "./sections/EcosystemSection";
import InteractionSection from "./sections/InteractionSection";
import BackendSection from "./sections/BackendSection";
import VentureSection from "./sections/VentureSection";

const QUICK_SCAN = [
  {
    label: "Role",
    value:
      "Founder, Principal Systems Architect & Lead Product Designer (0-to-1 Strategy, Unit Economics, Brand/GTM, UX/UI, Native Android & Next.js/Supabase Architecture)",
  },
  {
    label: "System Scope",
    value:
      "4-Sided Marketplace (`Fd, Fi, Fv, Fr`), Dual-Entity Hybrid Business Model, Somatic Mobile UI (`v0.2.3`), Heads-Up Multimodal Interaction Primitives, and Agentic AI Logistics Retrofit",
  },
  {
    label: "Tech Stack",
    value:
      "Next.js, React, TypeScript, Tailwind CSS, Supabase (PostgreSQL / PostGIS / `pgvector`), Redis Geospatial Atomic Locks, Native Android (`appcompat.NavDrawer`, Java/XML, `AsyncTask`, `firebase_auth`, `RecyclerView`, Google Maps API), ARIMA Time-Series Forecasting",
  },
  {
    label: "Validation",
    value:
      "508 Organic Instagram Followers & 5,137 Local Users Reached in a 60-Day Pre-Launch GTM Sprint (~$2.40 CPM); Bay Area Maker Faire Exhibition; $100k Venture & Hardware Fleet Model; 1,000 lbs/wk Alpha Target (33 partner venues) scaling to 10,000 lbs/wk (40,000+ lbs/mo — up to 100,000 meals/wk) at v1.0",
  },
];

const CHAPTERS = [
  { href: "#section-1", label: "01 Origin & Tax Math" },
  { href: "#section-2", label: "02 4-Sided Ecosystem" },
  { href: "#section-3", label: "03 Somatic Android UI" },
  { href: "#section-4", label: "04 PostGIS & 2026 AI" },
  { href: "#section-5", label: "05 Venture & Provenance" },
];

const SKIM = [
  "**The Lived Problem & Macro Gap:** While finishing my MFA at SJSU and working as a driver across three major geo-locative delivery platforms (DoorDash, Lyft, and Postmates/Google Express), I witnessed a stark daily paradox: handing out blankets and socks during a freezing downtown San Jose cold snap, then delivering **$50 lunches in affluent Los Gatos** days later while restaurants trashed trays of fresh surplus food. Nationally, **31%–38% of the U.S. food supply ($382B / 73.9M tons, or 442 lbs per person)** goes uneaten while **47.4 million Americans (13.5% of households)** face food insecurity. Crucially, **less than 2% of edible surplus food is donated while 85% goes to landfills**, because traditional food banks are optimized for pallet-sized grocery loads—leaving a massive gap in **hyper-local, small-batch last-mile logistics (down to 5 lbs/week)**.",
  '**The Economic Breakthrough ("The Patron Loop" & Natural Capitalism):** Most charity apps fail because they rely purely on altruism and tax write-offs, falling victim to the "Non-Profit Starvation Cycle". My field interviews with restaurant owners revealed that what they value most from apps like DoorDash is **new customer acquisition**. Grounded in *Natural Capitalism*, I architected a **4-sided hybrid marketplace** where `FoodShare.co` (For-Profit SaaS with size-tiered monthly subscriptions and "DoorDash-lite" paid delivery kickbacks) drives paying, socially conscious diners (**Patrons**) to local restaurants, directly subsidizing `FoodShare.work` (501(c)(3) free rescue logistics).',
  '**The Engineering & UX Architecture:** Built around an atomic **4-Way Handshake** (originated in my 2016 spec and modernized with Redis `NX PX 30000` geospatial locks), a **6-Step Somatic UI** pipeline with a physical **"Loc, Bag, Gas" Pilot\'s Checklist**, **Haversine GPS Epistemic Metrics** (D ≤ 50m), and a **2026 AI Retrofit** (ARIMA predictive "Virtual Donations" and Supabase `pgvector` macro-nutritional matching).',
];

export default function FoodShareProject() {
  return (
    <ProjectStudyFrame
      title={foodshareMeta.title}
      belowTitle={
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          <Rich text="From Seed to Scale: How lived experience across three gig-economy delivery platforms and industrial logistics auditing led me to architect a self-sustaining economy—bridging a for-profit SaaS customer-acquisition engine (`FoodShare.co`) with a 501(c)(3) last-mile rescue network (`FoodShare.work`)." />
        </p>
      }
    >
      <figure className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
        <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:p-8">
          <div className="inline-flex shrink-0 self-start rounded-2xl bg-white p-2 shadow-md">
            <Image
              src="/images/foodshare/fs-logo4.2.1.png"
              alt="FoodShare fs monogram, a continuous ribbon in four segments."
              width={514}
              height={744}
              priority
              className="h-28 w-auto"
            />
          </div>
          <figcaption className="max-w-3xl text-sm leading-relaxed text-zinc-400">
            <Rich text="The original 2016 FoodShare monogram (`fs`): a single continuous ribbon divided into four color-coded segments representing Donors (`Fd`), Volunteers (`Fv`), Recipients (`Fr`), and Patrons (`Fi`)." />
          </figcaption>
        </div>
      </figure>

      <div className="mt-16 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className="h-full rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
            <p className="text-xs font-medium tracking-tight text-zinc-400">
              Quick-Scan Metadata
            </p>
            <dl className="mt-8 flex flex-col gap-8">
              {QUICK_SCAN.map((field) => (
                <MetaField
                  key={field.label}
                  label={field.label}
                  value={field.value}
                />
              ))}
            </dl>
          </div>
        </aside>

        <section
          id="skim"
          className="flex h-full flex-col rounded-2xl border border-white/10 bg-zinc-900/50 p-8 lg:col-span-8"
        >
          <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
            The 30-Second Skim (Executive Summary)
          </h2>
          <div className="mt-6">
            <BulletList items={SKIM} />
          </div>
        </section>
      </div>

      <nav
        aria-label="Case study chapters"
        className="sticky top-4 z-30 mb-12 mt-8 flex items-center gap-2 overflow-x-auto rounded-full border border-white/10 bg-zinc-950/85 px-4 py-2 no-scrollbar backdrop-blur-md"
      >
        {CHAPTERS.map((chapter) => (
          <a
            key={chapter.href}
            href={chapter.href}
            className="shrink-0 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-zinc-300 transition-colors duration-500 ease-in-out hover:bg-white/10 hover:text-white"
          >
            {chapter.label}
          </a>
        ))}
      </nav>

      <div className="mx-auto w-full min-w-0 max-w-6xl">
        <OriginSection />
        <EcosystemSection />
        <InteractionSection />
        <BackendSection />
        <VentureSection />
      </div>
    </ProjectStudyFrame>
  );
}
