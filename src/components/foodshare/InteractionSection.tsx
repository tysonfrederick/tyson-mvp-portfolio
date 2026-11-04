import FoodShareHandshakeModule from "@/components/FoodShareHandshakeModule";
import {
  Body,
  Kicker,
  Lead,
  Mono,
  Numbered,
  NumberedItem,
  SectionTitle,
  StudyFigure,
} from "@/components/foodshare/prose";

export default function InteractionSection() {
  return (
    <section id="interaction" className="flex flex-col gap-8 border-t border-zinc-800">
      <SectionTitle>
        3. Interaction Design & Native Android Architecture (<Mono>v0.2.3</Mono> Flow Map)
      </SectionTitle>
      <Lead>
        Because <Kicker>Time-Poor Altruist</Kicker> volunteers are the logistical lynchpin of the ecosystem, their mobile workflow had to be push-based, mistake-proof, and executable in under 30 seconds. Rather than drawing static screens in isolation, I architected the original{" "}
        <Kicker>v0.2.3 Volunteer Flow Map</Kicker> around native Android OS lifecycle primitives—directly evolving the geo-locative Android Lollipop codebase I built for <em>SafeDeliver</em> at Vendus Labs (<Mono>SafeDeliver Host</Mono> layers in <Mono>foodsdiagram.sketch</Mono>) and mapping out Java/XML execution states by hand (<Mono>SplashScreen -&gt; Run Asynctask?</Mono>, <Mono>LoginApi, GCS, login-signup-Activity.java</Mono>, <Mono>dashboard/welcome-page.java / xml / appcompat / menu</Mono>, <Mono>Recycler/adapter/View</Mono>, and <Mono>hasAddress -&gt; openMapDriveTo</Mono>) to account for physical-world failure constraints:
      </Lead>
      <Numbered>
        <NumberedItem>
          <Kicker>
            Epistemic Onboarding (<Mono>firebase_auth</Mono>) & The &quot;Pilot&apos;s Checklist&quot; (<Mono>Loc, Bag, Gas Check-In</Mono>):
          </Kicker>
          <Body>
            In a trustless 4-sided network, identity and physical readiness come first. After authenticating via <Mono>firebase_auth</Mono> (<Mono>LoginApi / login-signup-Activity.java</Mono>), my v0.2.3 state machine enforced a mandatory{" "}
            <Kicker>&quot;Loc, Bag, Gas Check-In&quot;</Kicker> before a driver could enter the active pool. If a volunteer accepts perishable food without gas in their tank or thermal insulated bags in their trunk, the perishability clock fails. Designing for physical failure states ensured digital logic never outpaced street reality.
          </Body>
        </NumberedItem>
        <NumberedItem>
          <Kicker>
            The Triage Loop (&quot;The Breathing UI&quot; & Somatic Minimum — A Heads-Up Spatial Primitive):
          </Kicker>
          <Body>
            During <Mono>Volunteer No Share</Mono> states, the interface contracts into a quiet, low-distraction{" "}
            <Kicker>Somatic Minimum</Kicker> (Ambient Mode). When a nearby donor posts surplus (<em>&quot;New Share available near you: 15 lbs of baked goods from The Corner Bakery&quot;</em>), the UI dynamically &quot;inhales&quot; (expands) into a map-centric triage view (<Mono>hasAddress -&gt; openMapDriveTo</Mono>) allowing a one-tap decision in under 3 seconds. This{" "}
            <Kicker>Breathing UI</Kicker> pattern establishes a foundational interaction primitive not only for eyes-up mobile drivers, but for{" "}
            <Kicker>lightweight XR smart glasses and heads-up multimodal displays</Kicker> where persistent UI chrome cannot obstruct the physical field of view.
          </Body>
        </NumberedItem>
        <NumberedItem>
          <Kicker>
            The 6-Step Frictionless Micro-Volunteering Pipeline & &quot;Cognitive Justice&quot;:
          </Kicker>
          <Body>
            Progressing through <Kicker><Mono>01: Dashboard & Menu</Mono> → <Mono>02: Triage Agenda</Mono> → <Mono>03: Pickup Checklist</Mono> → <Mono>04: Double-Action Confirmed</Mono> → <Mono>05: Delivery Handshake</Mono> → <Mono>06: Impact Validation</Mono></Kicker>, all primary triggers sit in a{" "}
            <Kicker>Fitts&apos;s Law bottom-anchored thumb bar</Kicker>.
          </Body>
          <Body>
            To prevent accidental pocket-taps while carrying heavy food trays, Step 04 enforces a high-contrast{" "}
            <Kicker>Double-Action Confirmation modal</Kicker> (<Mono>ARE YOU SURE YOU WANT TO CONFIRM THE PICKUP? [CONFIRM ITEMS] / [GO BACK]</Mono>)—applying <em>Cognitive Justice</em> mistake-proofing before locking the transaction state.
          </Body>
        </NumberedItem>
        <NumberedItem>
          <Kicker>The Dopamine Loop (&quot;Share Complete&quot;):</Kicker>
          <Body>
            Replacing the sterile <em>&quot;End Shift&quot;</em> screen, completion triggers an immediate psychological reward quantifying human impact via the{" "}
            <Kicker>1 lb. = 10 people (100 people fed per hour)</Kicker> formula (<em>&quot;Tyson, your 15-minute journey from Iguana&apos;s just saved 12 lbs of fresh food, effectively feeding 120 people tonight&quot;</em>).
          </Body>
        </NumberedItem>
        <NumberedItem>
          <Kicker>
            Material Design <Mono>sp</Mono> Typography & <Mono>RecyclerView</Mono> Engineering (&quot;Building in Public&quot;):
          </Kicker>
          <Body>
            Documented live across 69 build-in-public engineering posts, the native Android implementation enforced strict Material Design scalable pixel (<Mono>sp</Mono>) hierarchy (<Mono>56sp</Mono> display down to <Mono>16sp</Mono> body), <Mono>RecyclerView</Mono> (<Mono>ViewHolder index: 0–3</Mono>) list virtualization, Firebase Realtime Database (<Mono>FriendlyChat</Mono> / <Mono>Friendly Eats</Mono> prototyping where I logged the test string <em>&quot;FoodShare will succeed.&quot;</em>), and live geo-pinned Recipient directories across{" "}
            <Kicker>San Jose and Milpitas</Kicker> (<em>First Christian Church on S. 5th St, CityTeam / Vision... The Way Home on W. Julian St, and Milpitas Food Pantry</em>) as well as{" "}
            <Kicker>Lake Tahoe</Kicker> (<em>Genoa Peak, Spooner Creek, South Lake Tahoe</em>).
          </Body>
        </NumberedItem>
      </Numbered>
      <FoodShareHandshakeModule />
      <div className="grid grid-cols-1 gap-6">
        <StudyFigure
          src="/images/foodshare/foodshare-v023-flowmap.jpg"
          alt="Photograph of the FoodShare volunteer mobile app flow map, version 0.2.3"
          width={750}
          height={1000}
          caption={
            <>
              Physical primary-source photograph of the{" "}
              <Kicker>FoodShare Volunteer Mobile App Diagram/Map v0.2.3</Kicker> showing the{" "}
              <Mono>Loc, Bag, Gas Check-in</Mono> node and handwritten Java/XML lifecycle annotations (<Mono>Run Asynctask?</Mono>, <Mono>login-signup-Activity.java</Mono>, <Mono>Recycler/adapter/View</Mono>).
            </>
          }
        />
        <StudyFigure
          src="/images/foodshare/sketch-volunteer-ui-canvas.png"
          alt="Sketch artboard of FoodShare volunteer mobile screens"
          width={1856}
          height={1708}
          caption={
            <>
              Native <Mono>foodsdiagram.sketch</Mono> vector artboard canvas (<Mono>Android...ashboard</Mono> through <Mono>Copy 16</Mono>) showing the bottom-anchored Fitts&apos;s Law action bars and mistake-proof confirmation modals.
            </>
          }
        />
        <StudyFigure
          src="/images/foodshare/foodshare-android-dev-grid.png"
          alt="Six-panel grid of FoodShare Android development screens"
          width={1870}
          height={1646}
          caption={
            <>
              Curated 3x2 build-in-public engineering grid showcasing the native{" "}
              <Mono>Volunteer Dashboard</Mono> navigation drawer, Material Design{" "}
              <Mono>56sp–16sp</Mono> typography scale, and Firebase <Mono>FriendlyChat</Mono> test payload (<em>&quot;FoodShare will succeed.&quot;</em>).
            </>
          }
        />
      </div>
    </section>
  );
}
