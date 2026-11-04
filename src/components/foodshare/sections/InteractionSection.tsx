import FoodShareHandshakeModule from "@/components/FoodShareHandshakeModule";
import { BulletList, Figure, Prose, Rich, Section } from "../prose";

export default function InteractionSection() {
  return (
    <Section
      id="interaction"
      title={
        <>
          3. Interaction Design & Native Android Architecture (
          <code className="font-mono text-[0.85em]">v0.2.3</code> Flow Map)
        </>
      }
    >
      <Prose text="Because **Time-Poor Altruist** volunteers are the logistical lynchpin of the ecosystem, their mobile workflow had to be push-based, mistake-proof, and executable in under 30 seconds. Rather than drawing static screens in isolation, I architected the original **v0.2.3 Volunteer Flow Map** around native Android OS lifecycle primitives—directly evolving the geo-locative Android Lollipop codebase I built for *SafeDeliver* at Vendus Labs (`SafeDeliver Host` layers in `foodsdiagram.sketch`) and mapping out Java/XML execution states by hand (`SplashScreen -> Run Asynctask?`, `LoginApi, GCS, login-signup-Activity.java`, `dashboard/welcome-page.java / xml / appcompat / menu`, `Recycler/adapter/View`, and `hasAddress -> openMapDriveTo`) to account for physical-world failure constraints:" />
      <ol className="flex list-decimal flex-col gap-6 pl-6 marker:text-zinc-400">
        <li className="pl-2 text-base leading-relaxed text-zinc-300">
          <Rich text={'**Epistemic Onboarding (`firebase_auth`) & The "Pilot\'s Checklist" (`Loc, Bag, Gas Check-In`):**'} />
          <div className="mt-4">
            <BulletList
              items={[
                'In a trustless 4-sided network, identity and physical readiness come first. After authenticating via `firebase_auth` (`LoginApi / login-signup-Activity.java`), my v0.2.3 state machine enforced a mandatory **"Loc, Bag, Gas Check-In"** before a driver could enter the active pool. If a volunteer accepts perishable food without gas in their tank or thermal insulated bags in their trunk, the perishability clock fails. Designing for physical failure states ensured digital logic never outpaced street reality.',
              ]}
            />
          </div>
        </li>
        <li className="pl-2 text-base leading-relaxed text-zinc-300">
          <Rich text='**The Triage Loop ("The Breathing UI" & Somatic Minimum — A Heads-Up Spatial Primitive):**' />
          <div className="mt-4">
            <BulletList
              items={[
                'During `Volunteer No Share` states, the interface contracts into a quiet, low-distraction **Somatic Minimum** (Ambient Mode). When a nearby donor posts surplus (*"New Share available near you: 15 lbs of baked goods from The Corner Bakery"*), the UI dynamically "inhales" (expands) into a map-centric triage view (`hasAddress -> openMapDriveTo`) allowing a one-tap decision in under 3 seconds. This **Breathing UI** pattern establishes a foundational interaction primitive not only for eyes-up mobile drivers, but for **lightweight XR smart glasses and heads-up multimodal displays** where persistent UI chrome cannot obstruct the physical field of view.',
              ]}
            />
          </div>
        </li>
        <li className="pl-2 text-base leading-relaxed text-zinc-300">
          <Rich text='**The 6-Step Frictionless Micro-Volunteering Pipeline & "Cognitive Justice":**' />
          <div className="mt-4">
            <BulletList
              items={[
                "**Progressing through `01: Dashboard & Menu` → `02: Triage Agenda` → `03: Pickup Checklist` → `04: Double-Action Confirmed` → `05: Delivery Handshake` → `06: Impact Validation`**, all primary triggers sit in a **Fitts's Law bottom-anchored thumb bar**.",
                "To prevent accidental pocket-taps while carrying heavy food trays, Step 04 enforces a high-contrast **Double-Action Confirmation modal** (`ARE YOU SURE YOU WANT TO CONFIRM THE PICKUP? [CONFIRM ITEMS] / [GO BACK]`)—applying *Cognitive Justice* mistake-proofing before locking the transaction state.",
              ]}
            />
          </div>
        </li>
        <li className="pl-2 text-base leading-relaxed text-zinc-300">
          <Rich text='**The Dopamine Loop ("Share Complete"):**' />
          <div className="mt-4">
            <BulletList
              items={[
                'Replacing the sterile *"End Shift"* screen, completion triggers an immediate psychological reward quantifying human impact via the **1 lb. = 10 people (100 people fed per hour)** formula (*"Tyson, your 15-minute journey from Iguana\'s just saved 12 lbs of fresh food, effectively feeding 120 people tonight"*).',
              ]}
            />
          </div>
        </li>
        <li className="pl-2 text-base leading-relaxed text-zinc-300">
          <Rich text='**Material Design `sp` Typography & `RecyclerView` Engineering ("Building in Public"):**' />
          <div className="mt-4">
            <BulletList
              items={[
                'Documented live across 69 build-in-public engineering posts, the native Android implementation enforced strict Material Design scalable pixel (`sp`) hierarchy (`56sp` display down to `16sp` body), `RecyclerView` (`ViewHolder index: 0–3`) list virtualization, Firebase Realtime Database (`FriendlyChat` / `Friendly Eats` prototyping where I logged the test string `"FoodShare will succeed."`), and live geo-pinned Recipient directories across **San Jose and Milpitas** (*First Christian Church on S. 5th St, CityTeam / Vision... The Way Home on W. Julian St, and Milpitas Food Pantry*) as well as **Lake Tahoe** (*Genoa Peak, Spooner Creek, South Lake Tahoe*).',
              ]}
            />
          </div>
        </li>
      </ol>
      <FoodShareHandshakeModule />
      <Figure
        src="/images/foodshare/foodshare-v023-flowmap.jpg"
        alt="Photograph of the FoodShare Volunteer Mobile App Diagram and Map v0.2.3, with the Loc, Bag, Gas check-in node and handwritten Java and XML notes."
        width={750}
        height={1000}
        caption={
          <Rich text="Physical primary-source photograph of the **FoodShare Volunteer Mobile App Diagram/Map v0.2.3** showing the `Loc, Bag, Gas Check-in` node and handwritten Java/XML lifecycle annotations (`Run Asynctask?`, `login-signup-Activity.java`, `Recycler/adapter/View`)." />
        }
      />
      <Figure
        src="/images/foodshare/sketch-volunteer-ui-canvas.png"
        alt="foodsdiagram.sketch artboard of the volunteer Android screens, from the dashboard through later copies, with bottom action bars and confirmation modals."
        width={1856}
        height={1708}
        caption={
          <Rich text="Native `foodsdiagram.sketch` vector artboard canvas (`Android...ashboard` through `Copy 16`) showing the bottom-anchored Fitts's Law action bars and mistake-proof confirmation modals." />
        }
      />
      <Figure
        src="/images/foodshare/foodshare-android-dev-grid.png"
        alt="Six-panel build-in-public grid of the volunteer dashboard drawer, Material Design type scale, and a Firebase FriendlyChat message reading FoodShare will succeed."
        width={1870}
        height={1646}
        caption={
          <Rich text='Curated 3x2 build-in-public engineering grid showcasing the native `Volunteer Dashboard` navigation drawer, Material Design `56sp–16sp` typography scale, and Firebase `FriendlyChat` test payload (`"FoodShare will succeed."`).' />
        }
      />
    </Section>
  );
}
