import Image from "next/image";
import FoodShareHandshakeModule from "@/components/FoodShareHandshakeModule";
import { Figure, Prose, Rich, Section } from "../prose";

const HANDSET_PILLS = [
  {
    k: "01",
    title: "Loc, Bag, Gas",
    detail: "firebase_auth gate before a driver enters the pool.",
  },
  {
    k: "02",
    title: "Breathing UI",
    detail: "Somatic minimum expands to a <3s map triage.",
  },
  {
    k: "03",
    title: "Cognitive Justice",
    detail: "Thumb bar plus a double-action pickup confirm.",
  },
  {
    k: "04",
    title: "1 lb = 10 people",
    detail: "Impact receipt replaces a sterile end-of-shift.",
  },
];

const MOBILE_ARTIFACTS = [
  {
    src: "/images/foodshare/mover-volunteer-home.png",
    width: 720,
    height: 1280,
    alt: "Mover home screen greeting Mover Tyson, with four upcoming shares across Santa Cruz, Capitola/Soquel, and South San Jose, Campbell, and Los Gatos.",
    caption:
      "**1. Multi-Region Dispatch (2x UI):** Mover shift queue across Santa Cruz, Capitola/Soquel, and South San Jose/Campbell/Los Gatos.",
  },
  {
    src: "/images/foodshare/mover-task-sequence.png",
    width: 720,
    height: 1280,
    alt: "Location-synced mover task list showing a completed pickup at Iguana's by 10:30pm and a drop-off at San Jose Church of Good Things by 11:15pm.",
    caption:
      "**2. Time-Boxed Handoff State:** Location-synced sequential pickup (Iguana's by 10:30pm) and drop-off (San Jose Church of Good Things by 11:15pm).",
  },
  {
    src: "/images/foodshare/mover-pickup-confirm.png",
    width: 720,
    height: 1280,
    alt: "Pickup confirmation screen listing 1.75 lbs of broccoli, 96 oz of corn, and 10 lbs of shredded beef behind a Confirm Items and Go Back modal.",
    caption:
      "**3. Mistake-Proof Intake Gate:** Itemized weight verification (1.75 lbs broccoli, 96 oz corn, 10 lbs shredded beef) with high-contrast CONFIRM ITEMS / GO BACK modal.",
  },
  {
    src: "/images/foodshare/android-implicit-intents-maps.jpg",
    width: 1440,
    height: 2960,
    alt: "Compiled Android Implicit Intents prototype opening the system resolver so Maps or Uber can take the turn-by-turn handoff.",
    caption:
      "**4. Native Android Implicit Intents:** Compiled prototype triggering the OS-level geo-routing resolver (Maps / Uber) for zero-friction turn-by-turn handoff.",
  },
];

export default function InteractionSection() {
  return (
    <Section
      id="section-3"
      title={
        <>
          3. Interaction Design & Native Android Architecture (
          <code className="rounded border border-white/10 bg-zinc-900 px-1.5 py-0.5 font-mono text-[0.85em] text-emerald-300/90">
            v0.2.3
          </code>{" "}
          Flow Map)
        </>
      }
    >
      <Prose text="Because **Time-Poor Altruist** volunteers are the logistical lynchpin, the **v0.2.3** flow had to be push-based and executable in under 30 seconds—evolving the *SafeDeliver* Android lifecycle (`SplashScreen`, `login-signup-Activity.java`, `Recycler/adapter/View`, `hasAddress -> openMapDriveTo`) into a state machine that refuses a run until **Loc, Bag, and Gas** are real. A Fitts's Law thumb bar steps **Dashboard → Triage → Pickup → Double-Action Confirm → Delivery Handshake → Impact**, with a breathing somatic UI for heads-up driving and a **1 lb = 10 people** receipt you can step on the handset below." />
      <ul className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-2 text-left">
        {HANDSET_PILLS.map((pill) => (
          <li
            key={pill.k}
            className="rounded-xl border border-white/10 bg-zinc-900/50 px-3 py-3"
          >
            <p className="font-mono text-[10px] tracking-[0.14em] text-zinc-500">
              {pill.k}
            </p>
            <p className="mt-1 text-sm font-medium tracking-tight text-white">
              {pill.title}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-400">
              {pill.detail}
            </p>
          </li>
        ))}
      </ul>
      <FoodShareHandshakeModule />
      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        <Figure
          sheet
          src="/images/foodshare/foodshare-v023-flowmap.jpg"
          alt="Photograph of the FoodShare Volunteer Mobile App Diagram and Map v0.2.3, with the Loc, Bag, Gas check-in node and handwritten Java and XML notes."
          width={750}
          height={1000}
          caption={
            <Rich text="Physical primary-source photograph of the **FoodShare Volunteer Mobile App Diagram/Map v0.2.3** showing the `Loc, Bag, Gas Check-in` node and handwritten Java/XML lifecycle annotations (`Run Asynctask?`, `login-signup-Activity.java`, `Recycler/adapter/View`)." />
          }
        />
        <Figure
          viewport
          src="/images/foodshare/sketch-volunteer-ui-canvas.png"
          alt="foodsdiagram.sketch artboard of the volunteer Android screens, from the dashboard through later copies, with bottom action bars and confirmation modals."
          width={1856}
          height={1708}
          caption={
            <Rich text="Native `foodsdiagram.sketch` vector artboard canvas (`Android...ashboard` through `Copy 16`) showing the bottom-anchored Fitts's Law action bars and mistake-proof confirmation modals." />
          }
        />
      </div>
      <Figure
        src="/images/foodshare/foodshare-android-dev-grid.png"
        alt="Six-panel build-in-public grid of the volunteer dashboard drawer, Material Design type scale, and a Firebase FriendlyChat message reading FoodShare will succeed."
        width={1870}
        height={1646}
        caption={
          <Rich text='Curated 3x2 build-in-public engineering grid showcasing the native `Volunteer Dashboard` navigation drawer, Material Design `56sp–16sp` typography scale, and Firebase `FriendlyChat` test payload (`"FoodShare will succeed."`).' />
        }
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MOBILE_ARTIFACTS.map((artifact) => (
          <figure
            key={artifact.src}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60"
          >
            <div className="p-2">
              <Image
                src={artifact.src}
                alt={artifact.alt}
                width={artifact.width}
                height={artifact.height}
                loading="lazy"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full rounded-xl"
              />
            </div>
            <figcaption className="mt-auto border-t border-white/10 bg-zinc-950 px-6 py-4 text-sm leading-relaxed text-zinc-400">
              <Rich text={artifact.caption} />
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
