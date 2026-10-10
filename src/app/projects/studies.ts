export interface CaseStudyImage {
  /** Swap `src` for a file in /public when the final still is ready. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CaseStudyPhase {
  id: string;
  title: string;
  paragraphs: string[];
  points?: string[];
  gate?: string;
  artifact?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  hero: CaseStudyImage;
  /** Rendered after the phase whose `id` matches `afterPhaseId`. */
  interstitial: CaseStudyImage & { afterPhaseId: string };
  role: string;
  client: string;
  /** Sidebar label for `client`. Defaults to "Client". */
  clientLabel?: string;
  timeline: string;
  effort: string;
  /** Sidebar label for `effort`. Defaults to "Effort". */
  effortLabel?: string;
  stack: string[];
  deliverable: string;
  /** Article heading for `challenge`. Defaults to "The Challenge". */
  challengeHeading?: string;
  challenge: string[];
  architectureIntro: string;
  phases: CaseStudyPhase[];
  outcome: string[];
}

const simulationStill: Pick<CaseStudyImage, "src" | "width" | "height"> = {
  src: "/sim.png",
  width: 3292,
  height: 1848,
};

const caseStudies: CaseStudy[] = [
  {
    slug: "simulation",
    title: "Real-Time 3D Simulation Pipeline for Industrial R&D",
    summary:
      "Autonomous translation of unfinished solid CAD into a 4.5-minute executive simulation of a proprietary mechanical system.",
    hero: {
      ...simulationStill,
      alt: "Real-time simulation of the proprietary mechanical system",
    },
    interstitial: {
      ...simulationStill,
      afterPhaseId: "3",
      alt: "Viewport capture from the live Unreal Engine 4 simulation",
    },
    role: "Lead Creative Technologist (3D Modeler, UE4 Simulation Developer, Video Producer, UX Storyboarder)",
    client: "Confidential R&D client — industrial technology firm",
    timeline: "3-month freelance contract",
    effort: "200-hour baseline, 240-hour ceiling, fixed scope",
    stack: [
      "Unreal Engine 4",
      "Blender",
      "CAD",
      "FRAPS",
      "Premiere Pro",
      "After Effects",
      "Photoshop",
      "Illustrator",
    ],
    deliverable:
      "4.5-minute real-time simulation and concept film for C-suite and investor review",
    challenge: [
      "Engineering held unfinished solid CAD for a complex hardware prototype. The geometry described a fluid-dynamics device, but it did not explain the device. Internal motion, process order, and the reason the mechanism mattered stayed invisible inside dense solids that a game engine could not run and an executive audience could not read.",
      "The firm needed one film that carried three jobs at once: show core function, state the value proposition, and give leadership a feasibility artifact they could screen internally and with investors. Voiceover and caption copy would come from the engineering team. Everything else — models, simulation, capture, edit, annotation — had to come from a single contractor.",
      "I bid that scope before production started. The estimate collapsed four production seats into one owner: product storyboard, 3D modeling, Unreal Engine 4 development, and picture finishing. I set a 200-hour baseline, a 240-hour ceiling for rendering and tooling bottlenecks, and a fixed price through that ceiling. Phase gates required engineering review before the next stage opened. That forecast was the risk control. Hardware limits, mesh cost, Blueprint complexity, and capture throughput were named in the bid, not discovered at the deadline.",
    ],
    architectureIntro:
      "Each phase closed on a reviewable artifact. Engineering signed the gate. I carried the asset forward.",
    phases: [
      {
        id: "1",
        title: "Phase 1: Ingestion & Alignment",
        paragraphs: [
          "I sat with the core engineering team and extracted the value proposition from the mechanism itself: what moves, in what order, and what an investor must see to believe the system works. Storyboard flows (Sketch, Photoshop, Illustrator) locked scene order before any mesh work began, including future form-factor studies so the simulation would not freeze an unfinished industrial design.",
          "In parallel I specified and built a dedicated digital-media workstation against Unreal Engine 4's GPU floor. The bid required a discrete NVIDIA-class card at or above the engine minimum, with a faster NVIDIA GPU (GTX 660 / GTX 750 Ti class or higher) held in reserve for dense solids, viewport capture, and particle load. Unfinished CAD does not survive a laptop GPU. The workstation existed so ingestion, re-mesh, and real-time preview could run on one machine without a render-farm handoff.",
        ],
        gate: "approved storyboard and a reusable UE4 component set.",
      },
      {
        id: "2",
        title: "Phase 2: Asset Generation (Blender)",
        paragraphs: [
          "I deconstructed the raw CAD. Solids that were correct for engineering were wrong for real time: uncontrolled triangle counts, non-manifold joins, and materials with no game-engine equivalent. I re-meshed the assemblies, rebuilt primitives where the source mesh would not deform or instance cleanly, and assigned first-pass textures and light-mass proxies so every part imported as a stable UE4 static or skeletal mesh.",
        ],
        gate: "captured stills and motion tests of the optimized models.",
        artifact: "UE4-importable geometry of the proprietary mechanical system.",
      },
      {
        id: "3",
        title: "Phase 3: Cyber-Physical Simulation (Unreal Engine 4)",
        paragraphs: [
          "I imported the optimized assets into a dedicated UE4 map and built the runtime, not a pre-render.",
          "The simulation shipped as a runnable map. Reviewers could scrub it live or watch an mp4 of that same runtime. That split mattered: the film is evidence of a working real-time system, not an offline illustration of one.",
        ],
        points: [
          "Rigged mechanical components so motion followed the engineering sequence.",
          "Authored Blueprints for event-based triggers: process start, state changes, and camera cues.",
          "Lit the interior so occluded volumes read on screen.",
          "Drove particle and material systems that stand in for the physics the CAD never drew — flow, transfer, and the path through the device.",
          "Rigged cameras for repeatable viewport coverage of the same beats the storyboard defined.",
        ],
        gate: "live simulation plus in-engine recordings.",
        artifact: "completed UE4 map.",
      },
      {
        id: "4",
        title: "Phase 4: Cinematic Capture (FRAPS) & Narrative Sequencing (Premiere Pro)",
        paragraphs: [
          "I captured high-fidelity viewport footage with FRAPS so the recorded frames were the simulation, including lighting, particles, and triggered motion. Premiere Pro then cut that footage to the storyboard. Pacing, shot order, and the handoff between mechanism beats were locked here, before any graphic layer competed with the picture.",
        ],
        gate: "assembly cut with engineering on story order.",
      },
      {
        id: "5",
        title: "Phase 5: Epistemic Annotation (After Effects)",
        paragraphs: [
          "I overlaid the annotation system in After Effects: motion-graphic callouts, feature descriptors, and on-screen labels timed to the mechanical events. The engineering team supplied voiceover and caption text. I timed, designed, and placed the graphics so each invisible step inside the fluid-dynamics device had a visible name at the frame it occurred. The annotations explain the simulation. They do not decorate it.",
        ],
        gate: "annotated picture locked to the simulation beats.",
      },
      {
        id: "6",
        title: "Phase 6: Final Delivery",
        paragraphs: [
          "I returned to Premiere Pro, integrated the firm's corporate branding, mixed the supplied voiceover against the captured simulation audio, and delivered the 4.5-minute film. A final screening included a scheduled polish window. Clear deliverables across the contract were the mockups, the UE4-ready models, the completed simulation map with recordings, and the finished concept film. A contingency of up to 40 hours remained available after delivery for executive-presentation tweaks, outside the 240-hour production ceiling.",
        ],
      },
    ],
    outcome: [
      "Leadership received a 4.5-minute film that makes the internal process of a proprietary mechanical system readable. Unfinished CAD entered one end of the pipeline. A runtime UE4 simulation and an executive cut came out the other.",
      "The contract proved the forecast. One person bid, staffed, and shipped the seats the scope actually required — modeler, simulation developer, storyboarder, and picture editor — inside a 200-hour baseline on a 3-month engagement. Bottlenecks were priced before they appeared: GPU class, mesh compatibility, Blueprint-driven events, and capture from the live viewport. Investors and the internal team could see the mechanism work, in order, with the physics labeled. That alignment was the product.",
    ],
  },
  {
    slug: "algorithmic-art-systems",
    title:
      "Algorithmic Art Systems: Early Research in Creative AI Interaction",
    summary:
      "Peer-reviewed at the CADRE Laboratory for New Media and executed in public at the 2014 Bay Area Maker Faire, with the source beside the image.",
    hero: {
      src: "/theta-2.jpg",
      alt: "Generative coordinate field from theta2, a Processing sketch, 2012",
      width: 1677,
      height: 938,
    },
    interstitial: {
      src: "/iterations-2012.png",
      afterPhaseId: "3",
      alt: "Processing sketch Iterations, 2012, source and rendered title in one frame",
      width: 1024,
      height: 731,
    },
    role: "MFA Researcher, Lead Interactive Systems Designer",
    client: "San Jose State University, CADRE Laboratory for New Media",
    clientLabel: "Institution",
    timeline: "Three years, 2011–2014",
    effort: "Advancement to Candidacy, April 2013. MFA catalog, May 2014.",
    effortLabel: "Record",
    stack: [
      "Processing 2.0",
      "Java",
      "ActionScript 3.0",
      "Algorithmic Prototyping",
      "Historiography",
      "Kinect / OpenNI",
      "Public Exhibition",
    ],
    deliverable:
      "MFA catalog, A Creative Process, and a public Kinect installation",
    challengeHeading: "The Scholarly Problem",
    challenge: [
      "A deterministic system and a humanistic reading answer different questions. The system reports the rule it executed. The reading supplies a meaning the rule never stored. I took that gap as the problem of a three-year MFA at the CADRE Laboratory for New Media, and I built generative systems that keep the two answers separable.",
      "The catalog, A Creative Process (May 2014), works from three instruments, and each instrument carries a limited warrant. I read the Communist Manifesto of Marx and Engels as a structural hypothesis: capital accumulates by turning interpretations into products, and alienation names the moment a maker meets that product as a foreign object. The Manifesto supplies the premise I tested, that a finished appearance can conceal the process which produced it. Bolter and Grusin, in Immediacy, Hypermediacy, and Remediation, supply the perceptual companion. Remediation spends its effort on feeling immediate. From Buddhist instruction I took śūnyatā in a working sense: an external object is empty of inherent meaning, and every label on it is imputed. The catalog argues that working sense. A scholarly edition of the Madhyamaka sources lies outside its claim.",
      "Saturated media hides a premise inside repetition. Exposure arrives dressed as knowledge. Exposure and knowledge are different categories. Exposure establishes that a surface returned. Knowledge still requires an argument.",
      "The systems themselves are rule machines. I wrote them as loops, stochastic variables, and vector arrays in Processing and ActionScript. The same failure mode meets a trained model. A reader treats a generated surface as a claim about the world. The surface records a procedure. The claim needs a warrant of its own. The prototypes hold that distinction where a committee and a public room can inspect it.",
    ],
    architectureIntro:
      "Five phases. Each phase closes on an artifact a reader can check.",
    phases: [
      {
        id: "1",
        title: "Phase 1: Epistemic Deconstruction",
        paragraphs: [
          "I separated primary experience from secondary interpretation before I wrote a generative rule. Primary experience, here, is the operation: an index drawn from a table, a coordinate written to a buffer, a frame committed to the screen. Secondary interpretation is the story attached after the frame: urgency, authenticity, a market verdict, an authorial mood, an institutional blessing.",
          "Alienation gives the structural account of that attachment. The producer loses the process. The consumer receives an appearance. I turned that account onto media saturation and named the hidden premise: repetition has already done the verifying. Remediation locates the same premise in the interface, which labors to feel unmediated. Śūnyatā blocks the last step. The reader makes the label. The object stores the operation, and the label arrives from outside it.",
          "I kept each warrant inside its domain. A theory of capital explains a production relation. A theory of remediation explains a perceptual effect. A doctrine of emptiness explains why a label needs a maker. Together they identify the gap. Assigning a meaning to any single frame takes an argument the three instruments, by themselves, withhold. The prototypes exist to expose that remainder.",
        ],
        artifact:
          "A distinction between the operation a system performs and the meaning a reader imputes.",
      },
      {
        id: "2",
        title: "Phase 2: Steel-Manning Historical Frameworks",
        paragraphs: [
          "I stated each historical program at full strength before I named where it breaks. A steel man gives the claim its best warrant, so the failure belongs to the claim.",
          "Modernism, at that strength, holds that a disciplined procedure can reach a form binding on every case. The procedure is a real achievement. The universal quantifier is a further claim, and it changes the category. A style is a generator with constrained variance. A truth that covers the domain has to survive the cases it would rather drop. The catalog names those cases. A harmony that cannot register sexism, unequal rights, or racism has left the standard it announced. The category error is the promotion of a method into a universal. Variance is the term the method defined away.",
          "Postmodernism, at that strength, holds that the modern universal lacked warrant, and that excluded viewpoints stand as counterexamples. The objection is sound. The catalog then follows the next step: postmodernism specifies a new single viewpoint as the ideal. A single viewpoint still fails to scale across the variance that justified the revolt. Negating a false universal yields no decision procedure for the descriptions that remain. Historical narrative restates the conflict. A running algorithm shows a reader the difference between a rule and a reading. I needed a test that could fail in public.",
        ],
        artifact: "Two category errors, stated so a program can miss them.",
      },
      {
        id: "3",
        title: "Phase 3: Computational Prototyping (Processing & ActionScript)",
        paragraphs: [
          "I wrote the logic myself. Processing 2.0 sketches, in Java, and ActionScript 3.0 applications, in Flash, put loops, stochastic variables, and vector arrays between the premise and the frame. I ran the iterations at interactive speed so the corruption of meaning stayed visible across time. A still settles into one reading. A live loop keeps the rule present while that reading forms.",
          "The MFA catalog documents the wider corpus in plates: theta2 and The Steps to Freedom, both Processing, 2012; Ladders and Chutes, ActionScript 3.0, 2013; Blue Rain, ActionScript 3.0, 2014; Our voices can't be heard, Processing, 2014. Three prototypes state the evaluation in its most direct form.",
          "Bull vs. Bear (2012). I wrote a script that executes stochastic volatility inside a market simulation, and I used it to evaluate logical data flow. The settled output is a sequence of state, perturbation, and next state. The sequence has the shape of a verdict. A bullish or bearish reading treats the trace as if it had weighed evidence. Volatility is a perturbation rule. A warrant about the world is a separate argument. The prototype makes the hidden premise available for inspection: a coherent path presents itself as a conclusion.",
          "What's Important to You (2012). I built a path-finding node graph to test associative meaning. An edge stores proximity between terms. A traversal can finish, and every step can be legal, while the path still lacks entailment. Entailment asks for an inference the edge leaves unstored. The graph holds the smuggled premise up to view. Linkage feels like reason because each node arrives already beside the last.",
          "Iterations and San Francisco (2012–2013). I built generative coordinate-mapping systems to test visual noise and systemic rendering. Iterations, 2012, leaves the mechanism in the frame. The sketch opens a 1920×1080 stage at 80 frames per second, loads poll.txt, splits the first line on commas into an integer array, and on each pass selects a random index from that array against the coordinate tables declared in the source. The numerals record selections. San Francisco, in the same series, maps coordinates into a rendered field and poses the question at the scale of the picture. Density, overlap, and noise recruit the eye into a scene. The renderer commits vectors. I treated visual noise as a corruption channel. The system generates a field. The viewer processes the field into a scene. The scene takes the place of the rule. That replacement is how meaning corrupts: a secondary interpretation occupies the position of the primary operation and then speaks as the system.",
        ],
        artifact:
          "Three running tests, plus the catalog plates that surround them.",
      },
      {
        id: "4",
        title: "Phase 4: Academic Peer Review & Defense",
        paragraphs: [
          "I placed the outputs and the humanistic argument before the CADRE faculty. In April 2013 I defended the Advancement to Candidacy before G. Craig Hobbs, Shannon Wright, and Stan Welsh, Department of Fine Arts, San Jose State University. I answered three questions: whether the historical claims were sound, whether each program tested the claim I had attached to it, and whether the rule stayed distinct from the reading. In May 2014 the School of Art and Design accepted A Creative Process toward the MFA.",
          "The defense narrowed the result to a standard. The algorithms hold a generative rule still. A reader can check an ideological reading against the operation that committed the frame. The faculty examined that standard. The candidacy and the degree record that the standard held.",
        ],
        artifact:
          "Advancement to Candidacy, April 2013. MFA catalog, May 2014.",
      },
      {
        id: "5",
        title: "Phase 5: Public Execution & Epistemic Transparency (Glass Box)",
        paragraphs: [
          "I carried the same distinction into a public room at the resolution the committee had examined. The closing form was a cyber-physical installation. Through OpenNI, a Kinect took gestural input, and the generative systems rendered a live field in the gallery, so a visitor's movement met the rule while it ran. At the 2014 Bay Area Maker Faire, the CADRE exhibition Litewall and Interactive Projects included this installation. The Faire awarded that exhibition an Editor's Choice.",
          "I exhibited the raw source in the same room as the generative image. From that pairing I define good model behavior. A generative system behaves well when a visitor can recover the rule without a docent: which values the random draw produced, which coordinates the arrays fixed, which tokens the file supplied, and which meanings the reader imputed after the fact. This standard of transparency publishes the structural rule. An ideological reading has to survive contact with the rule. Where the reading runs past the procedure, the excess stands as interpretation, and the visible code is what marks it.",
        ],
        artifact: "A public room in which source and image share one view.",
      },
    ],
    outcome: [
      "The research leaves a rubric for generative media. The same three tests apply to a trained model's output, because the failure mode lives in the reading.",
      "Factual accuracy. Name the operation before naming the world. An index selection is a draw from a table. A coordinate is a position in a buffer. A step of stochastic volatility is a perturbation of state. Each sentence states a fact about the program. A fact about the world needs evidence the program leaves out.",
      "Logical coherence. Test the inference the surface proposes. An edge records association, and entailment still wants its own warrant. A style records a constrained generator, and a universal wants coverage the generator defined away. The collapse of that universal records a failed quantifier, and any viewpoint offered in its place still needs a procedure if the viewpoint claims to scale. A loop can be valid, in the strict sense that it does what it specifies, while the interpretation attached to it stays unsound. The hidden premise, that the picture is the argument, stays outside the source.",
      "Public transparency. Publish the rule with the output. The Maker Faire installation is that requirement in public form. Source and image share a room, and the secondary story meets the primary procedure in front of a visitor. I call the arrangement a glass box. A glass box resists ideological flattening because an imputation has to show itself as an imputation once the rule is readable. The rubric holds one separation: settled computational fact, humanistic interpretation, and a visible rule that lets a reader tell them apart.",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudyParams(): { slug: string }[] {
  return caseStudies.map((study) => ({ slug: study.slug }));
}
