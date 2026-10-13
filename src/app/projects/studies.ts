export interface CaseStudyImage {
  /** Swap `src` for a file in /public when the final still is ready. */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Printed under the still. */
  caption?: string;
  /** Keep a narrow archival column near its native size. */
  contained?: boolean;
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
  /** Article heading for the phase section. Defaults to "The Architecture & Pipeline". */
  architectureHeading?: string;
  architectureIntro: string;
  phases: CaseStudyPhase[];
  /** Extra stills, each rendered after the phase whose `id` matches `afterPhaseId`. */
  figures?: (CaseStudyImage & { afterPhaseId: string })[];
  outcome: string[];
}

export const mfaThesisSlug = "algorithmic-art-systems";

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
    slug: mfaThesisSlug,
    title:
      "Algorithmic Art Systems: Early Research in Creative AI Interaction",
    summary:
      "Engineered, peer-reviewed, and publicly exhibited algorithmic systems evaluating human-computer interaction.",
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
      "Modern algorithmic systems are often treated as objective black boxes. My MFA research challenged this premise. Before the current era of LLMs, I wanted to understand how computational systems process, generate, and sometimes corrupt human meaning. To do this, I didn't just write a theoretical critique—I built the deterministic systems from scratch to observe the logic in real-time.",
    ],
    architectureIntro:
      "Four phases of distinction. Each phase brings an insight about the acceptance or understanding of algorithmic systems.",
    phases: [
      {
        id: "1",
        title: "Phase 1: Epistemic Deconstruction",
        paragraphs: [
          "I began by analyzing the hidden premises in modern media and historical art movements. I looked for category errors in how systems present information—specifically, how algorithms often flatten complex human experiences into generic, manufactured outputs.",
        ], 
      },
      {
        id: "2",
        title: "Phase 2: Computational Prototyping",
        paragraphs: [
          "To test these theories, I moved from textual analysis to applied software engineering. I wrote raw Processing (Java) and ActionScript 3.0 scripts to build dynamic, real-time algorithms. Projects like Bull vs. Bear utilized stochastic variables and data arrays to simulate market volatility, while What's Important to You utilized path-finding node graphs to test associative logic.",
        ],
      },
      {
        id: "3",
        title: "Phase 3: Academic Peer Review & Defense",
        paragraphs: [
          "The research was subjected to rigorous academic peer review. I successfully defended the underlying computational architecture and humanistic thesis before a formal faculty committee at the San Jose State University CADRE Laboratory for New Media.",
        ],
      },
      {
        id: "4",
        title: "Phase 4: Public Execution & Transparency",
        paragraphs: [
          "The research culminated in a cyber-physical gallery exhibition and an interactive Kinect installation that won an Editor's Choice award at the Bay Area Maker Faire. Rather than hiding the mechanics, I displayed the raw, printed codebase directly alongside the digital projections.",
        ],
      },
    ],
    outcome: [
      "This three-year project established my core framework for evaluating generative models. It proved that to ensure logical coherence and factual accuracy, systems must remain transparent Glass Boxes. They must reveal their structural rules and source data, rather than hiding behind confident hallucinations.",
    ],
  },
  {
    slug: "switch-journal",
    title: "SWITCH: New Media Journal (Vol. 28)",
    summary:
      "Academic publishing, editorial curation, and digital archiving for the CADRE Laboratory for New Media.",
    hero: {
      src: "/switch-issue-28-staff.png",
      alt: "SWITCH Issue 28 masthead and staff list, naming Tyson Frederick as Assistant Editor, head of Process, and Web Development",
      width: 432,
      height: 641,
      contained: true,
      caption:
        "Issue 28 masthead and staff. Assistant Editor, Process: The Pixels of an Image, and Web Development.",
    },
    interstitial: {
      src: "/switch-issue-28-article.jpg",
      afterPhaseId: "3",
      alt: "Published essay A Human's Job by Tyson Frederick in SWITCH Issue 28",
      width: 939,
      height: 1024,
      caption:
        "“A Human's Job,” filed October 28, 2013 under Process: The Pixels of an Image.",
    },
    figures: [
      {
        src: "/switch-issue-28-process.png",
        afterPhaseId: "2",
        alt: "Process: The Pixels of an Image department index for SWITCH Issue 28",
        width: 1024,
        height: 755,
        caption:
          "Process: The Pixels of an Image, the department index for Issue 28.",
      },
    ],
    role: "Assistant Editor, Process Department Head, and Web Developer",
    client: "San Jose State University, CADRE Laboratory for New Media",
    clientLabel: "Institution",
    timeline: "October 28, 2013",
    effort: "Issue 28 publishing cycle",
    effortLabel: "Scope",
    stack: [
      "Academic Peer Review",
      "Archival Research",
      "CMS Architecture",
      "Editorial Curation",
    ],
    deliverable:
      "Published Issue 28, including the Process department and the essay “A Human's Job”",
    challengeHeading: "The Problem",
    challenge: [
      "The CADRE Laboratory required a modern, scalable digital architecture to publish Issue 28 of *SWITCH*, an academic journal dedicated to digital humanism, generative systems, and the intersection of art and technology. The challenge was twofold: engineering the web infrastructure while maintaining rigorous editorial standards across multiple contributing scholars.",
    ],
    architectureHeading: "The Execution",
    architectureIntro:
      "Operating in a dual capacity as Assistant Editor and Web Developer, I managed the end-to-end publishing pipeline.",
    phases: [
      {
        id: "1",
        title: "Systems Architecture",
        paragraphs: [
          "I spearheaded the platform migration and deployment using WordPress, establishing a structured CMS to handle complex academic formatting and rich media.",
        ],
      },
      {
        id: "2",
        title: "Editorial Curation",
        paragraphs: [
          "I took on managerial editorial duties, specifically sourcing, interviewing, and curating authors for the \"Process: The Pixels of an Image\" department.",
        ],
      },
      {
        id: "3",
        title: "Textual Analysis",
        paragraphs: [
          "I contributed original, published scholarship (\"A Human's Job\"), analyzing the epistemology of the artistic process and the systemic interaction between human intent and material application.",
        ],
      },
    ],
    outcome: [
      "The successful launch of Issue 28 preserved the institution's digital archive and demonstrated a seamless integration of humanistic textual criticism with robust web development. It established a framework for evaluating, editing, and publishing complex arguments on digital culture.",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudyParams(): { slug: string }[] {
  return caseStudies.map((study) => ({ slug: study.slug }));
}
