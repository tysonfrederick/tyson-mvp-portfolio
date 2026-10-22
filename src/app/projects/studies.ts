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

export interface CaseStudyCode {
  caption?: string;
  source: string;
}

export interface CaseStudyTable {
  headers: string[];
  rows: string[][];
}

export interface CaseStudyBlock {
  title?: string;
  paragraphs?: string[];
  points?: string[];
  /** Render `points` as a numbered list. */
  ordered?: boolean;
  code?: CaseStudyCode;
}

export interface CaseStudyPhase {
  id: string;
  title: string;
  paragraphs: string[];
  points?: string[];
  blocks?: CaseStudyBlock[];
  table?: CaseStudyTable;
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
  /** Article heading for `outcome`. Defaults to "The Outcome". */
  outcomeHeading?: string;
  outcome: string[];
  outcomePoints?: string[];
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
      "A Creative Process: Glass-Box Generative Systems, Epistemic Deconstruction & Cyber-Physical Interaction",
    summary:
      "Engineering deterministic and stochastic algorithms, procedural video pipelines, and computer-vision installations to interrogate how computational systems construct, flatten, and transform human meaning.",
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
    role: "Principal Creative Technologist, Systems Researcher & Solo Author (First & Sole Graduate of SJSU's MFA in Digital Media: Art & Technology)",
    client:
      "San Jose State University — School of Art & Design / CADRE Laboratory for New Media",
    clientLabel: "Institution",
    timeline: "2011–2014",
    effort:
      "Editor's Choice Award — 2014 Bay Area Maker Faire; Phi Kappa Phi Academic Honor Society Inductee (3.88 GPA)",
    effortLabel: "Recognition",
    stack: [
      "Processing 2.0 (Java)",
      "ActionScript 3.0",
      "OpenNI / Kinect",
      "Unity3D",
      "MAX/MSP",
      "Ableton Live 9",
      "After Effects",
      "Premiere Pro",
      "Illustrator",
      "Photoshop",
    ],
    deliverable:
      "48-page peer-reviewed thesis and catalog, 50+ generative code sketches, 28 cataloged plates, 20 procedural HD videos, 150 high-resolution digital prints (up to 12,000 × 9,000 px), and 8+ public exhibitions",
    challengeHeading: "Executive Summary",
    challenge: [
      "Long before the current wave of Large Language Models and diffusion-based video generators, computational systems faced a foundational epistemic and design problem: when algorithms optimize for mass consensus, they flatten complex human edge cases into generic, predictable outputs.",
      "Conducted over three years at San Jose State University's CADRE Laboratory for New Media, A Creative Process was a first-principles R&D investigation into the ontology of software, generative aesthetics, and human-computer interaction. Rather than treating algorithmic media as an inscrutable black box, or evaluating it solely through abstract critical theory, I built the generative engines from scratch. Writing raw Java (Processing 2.0) and ActionScript 3.0 alongside OpenNI/Kinect computer-vision pipelines, I engineered over 50 executable sketches, 20 procedural HD videos, and interactive spatial installations to observe how deterministic rules and stochastic variables behave across thousands of iterations in real time.",
      "This research established the foundational principles that govern my work today as a Creative Technologist and Systems Architect: non-destructive state simulation (undo/redo as the essence of software), human-in-the-loop epistemic curation, and transparent Glass-Box system design.",
    ],
    architectureHeading: "",
    architectureIntro: "",
    phases: [
      {
        id: "1",
        title:
          "1. The Epistemic & Design Problem: Hypermediacy, Flattening & The Black Box",
        paragraphs: [
          "Modern digital interfaces and generative pipelines often suffer from two compounding failures: epistemic opacity (hiding structural rules and source biases behind a confident surface) and aesthetic deadening (remediating the same commercial tropes until human perception becomes numb).",
          "In analyzing why mainstream digital media and automated outputs so frequently feel sterile or coercive, my thesis identified three structural root causes.",
        ],
        blocks: [
          {
            title: 'The Illusion of the "Universal Ideal" (Category Error)',
            paragraphs: [
              'Algorithmic and commercial systems frequently operate on the hidden premise that a single, unified model of "normalcy" can represent all human experience. When a system optimizes exclusively for the statistical center, it commits a category error — erasing outlier perspectives, cultural nuances, and edge-case human realities.',
            ],
          },
          {
            title: "Hypermediated Sensory Deadening",
            paragraphs: [
              "Drawing on Jay David Bolter and Richard Grusin's *Immediacy, Hypermediacy, and Remediation*, I examined how continuous bombardment by extreme, repetitive commercial imagery deadens human cognitive response. Interfaces that shout for attention with high-saturation templates look attractive on the surface but fail to provoke genuine cognitive engagement.",
            ],
          },
          {
            title: "Result-Obsession Over Process Transparency",
            paragraphs: [
              'Traditional evaluation judges an artifact solely by its static final frame while ignoring the underlying algorithmic process that generated it. When users and operators cannot inspect the procedural logic — the "why" behind the output — trust and agency collapse.',
            ],
          },
          {
            title: "Core Research Thesis",
            paragraphs: [
              "Computing's unique contribution to human thought is not its ability to mimic static traditional media. It is the capacity to execute a single structural variation across thousands or millions of iterations while preserving non-destructive state traversal (undo/redo). To prevent algorithmic flattening, generative systems must be architected as transparent Glass Boxes that expose their underlying code, embrace controlled stochastic variance, and require mindful human-in-the-loop curation.",
            ],
          },
        ],
      },
      {
        id: "2",
        title:
          "2. Theoretical & Humanities Framework: Steel-Manning the Canon",
        paragraphs: [
          "To ground my computational prototypes in rigorous humanistic scholarship, I evaluated my generative outputs against three intersecting canons: 20th-century art history (Modernism vs. Postmodernism), political economy of information, and Eastern epistemology.",
          "Rather than dismissing historical paradigms, I analyzed what each movement got right before diagnosing where its logic failed.",
        ],
        table: {
          headers: [
            "Paradigm",
            "Steel-Man Case",
            "Failure Mode",
            "Resolution",
          ],
          rows: [
            [
              "Contemporary Modernism (Picasso, Matisse, Pollock, Kandinsky)",
              "Disrupted rigid realist representation. Introduced process, abstraction, and formal geometric primitives (lines, circles, polygons) as universal visual languages.",
              '**The Fallacy of the Unified Theory:** Modernism claimed a front-facing, singular "ultimate truth" that supposedly fit everyone.',
              'Retains Modernism\'s high-contrast geometric clarity and process-driven emergence while rejecting the idea that there is only one "correct" final output.',
            ],
            [
              "Postmodernism (70s–90s anti-establishment and feminist critique)",
              'Justifiably dismantled Modernism\'s elitist monopoly on "right vs. wrong," proving that institutional narratives excluded marginalized voices.',
              '**Reactive Binary Inversion:** By fighting fire with fire, Postmodernism often replaced one rigid orthodoxy with a single opposing viewpoint, getting stuck in "right vs. wrong" arguments.',
              "Moves beyond binary opposition into probabilistic pluralism — building generative systems where a single codebase generates thousands of unique, valid outcomes depending on context.",
            ],
          ],
        },
        blocks: [
          {
            title:
              "Primary & Secondary Lineage: Cybernetics, Intervention & Epistemology",
            points: [
              "*Subversive systems intervention (Joseph DeLappe).* Studying under Professor Joseph DeLappe at the University of Nevada, Reno, shaped my understanding of process as the primary artifact. Analyzing DeLappe's *dead-in-iraq* (2006–2011) — where he logged into the US Army's official recruiting game *America's Army* to manually type the names, ages, and dates of service members killed in Iraq — and *The Salt Satyagraha Online* (2008) — walking 240 miles on a customized physical treadmill mapped into Second Life — demonstrated how entering and perturbing an existing digital system exposes its hidden institutional mechanics.",
              "*Closed-loop cybernetics and real-time participation (Nam June Paik & G. Craig Hobbs).* I contrasted Nam June Paik's *TV Buddha* (1974) — a closed cybernetic loop where the observer contemplates their own real-time mediated reflection — with SJSU Professor G. Craig Hobbs's *The Hoop Mandala* (2011/2014), where real-time projection transforms the viewer from a passive consumer into an active generative participant anchored entirely in the present moment.",
              "*Information consolidation vs. distributed awakening (Marx & Engels applied to network theory).* Evaluating *The Communist Manifesto* through the lens of 21st-century information theory highlighted a central paradox: capital accumulation drives tech monopolies to acquire breakthrough technologies and narrow them into a finite set of standardized consumer products. The same globalized communication networks — the internet, social video, distributed databases — hand everyday users the tools to compare notes at scale and expose systemic blind spots.",
              '*Eastern epistemology and śūnyatā (emptiness as variable state).* Mentored in Eastern studies by Scott Nanamura ("Buddhism as a radical change of perspective"), I mapped the Buddhist concept of emptiness directly to object-oriented programming. External objects and data structures are like empty vessels — variables whose semantic meaning is not fixed in stone, but dynamically instantiated by the observer\'s context, actions, and cognitive state.',
            ],
          },
        ],
      },
      {
        id: "3",
        title: "3. Computational Architecture & Procedural Video Pipeline",
        paragraphs: [
          "To test these philosophical propositions empirically, I engineered custom generative applications across Processing 2.0 (Java) and Adobe Flash CS6 / ActionScript 3.0, alongside interactive node graphs and computer-vision pipelines.",
        ],
        blocks: [
          {
            title:
              "theta2 — Deterministic Trigonometry & Emergent Moiré Architecture",
            paragraphs: [
              "In works such as *theta2* (Plates 23 & 24, 2012–2013) and *16x16_2pi* (Plate 17, 2011), I investigated how minimal mathematical rules generate complex spatial depth and organic curvature without manual illustration.",
            ],
            points: [
              "**Algorithmic mechanics.** Rather than drawing curves with Bézier handles, theta2 initializes a 1920 × 1080 black canvas (background(0.0)) and executes a for loop across 2,600 discrete iterations (i < 2600), incrementing angle a by 2π/13 (TWO_PI/13) on every pass.",
              "**Non-linear spatial scaling.** By pairing linear index progression (i, i × 6, i × 10) against quadratic growth (i × i and i × (3 × 3)) and modulating endpoints with cos(a) and sin(a), straight 2D vector lines self-organize into a translucent, three-dimensional parabolic veil with semi-transparent alpha layering (stroke(80, 50) and stroke(70, 100, 100, 90)).",
              '**Commented state traceability.** As preserved in the primary codebase snapshot (Fig. 24), commented-out experimental branches (// stroke(255, 0, 0, 180); and // println("The angle = " + a)) served as live telemetry logs and non-destructive state checkpoints before invoking saveFrame() for high-resolution output.',
            ],
            code: {
              caption:
                "Primary source excerpt: theta2 (Processing 2.0b5 / Java, 2013)",
              source: `size(1920, 1080);
background(0.0);
float a = 0.0;
float inc = TWO_PI / 13;

println(" The inc = " + inc);
for (int i = 0; i < 2600; i += 1) {
  stroke(80, 50);
  line(350, i, i * 6, 1050 + cos(a) * .3);
  line(850, 520 + (i * 10), (i * (3 * 3)), cos(a) * 25);
  stroke(70, 100, 100, 90);
  line(800, i + 350, i * i, 50 + sin(a) * -10);
  line(1600, i + 1400, i * i, 50 + sin(a) * -10);
  a = a + inc;
}
saveFrame();`,
            },
          },
          {
            title: "Stochastic Simulation & Associative Node Graphs",
            paragraphs: [
              "Beyond pure trigonometric geometry, I wrote applied algorithmic studies to test how code models human systems.",
            ],
            points: [
              "**Bull vs. Bear (stochastic market volatility).** Engineered dynamic data arrays driven by stochastic variables to simulate the emotional and structural volatility of financial markets in real time.",
              "**What's Important to You (associative path-finding node graphs).** Built interactive path-finding node graphs to test associative logic and visualize how individual human priorities diverge from standardized societal templates.",
            ],
          },
          {
            title:
              "Search-Engine Dataset Remediation & Destructive / Non-Destructive Pruning",
            paragraphs: [
              "A recurring failure in modern AI training is uncritically ingesting biased web-scraped datasets. In 2007–2012, I ran a series of experiments interrogating how search engines categorize reality.",
            ],
            points: [
              '**Querying semantic labels ("lawrence" and "random").** I queried Google Images for the token "lawrence" (yielding lawrence_of_arabia_3.jpeg, Fig. 15) and the token "random" (yielding grapes.jpg, Fig. 19).',
              "**Algorithmic deconstruction pipeline.** Rather than accepting the search engine's taxonomic label, I passed these raw dataset images through multi-stage vector and raster transformations (*Lawrence of Arabia*, Fig. 14; *landscape-grape*, Fig. 20; *Landscapes of Grapes*, Fig. 21 at 12,000 × 9,000 px; and *abstract landscape 4*, Fig. 27). By systematically deleting 50% of the data array, rotating spatial coordinates, stripping semantic contours, and imposing new rule sets mid-process, I tested how far source data can be compressed or mutated before human pattern-recognition breaks down.",
            ],
          },
        ],
      },
      {
        id: "4",
        title: "4. Design Critique & Audio-Visual Systems Taxonomy",
        paragraphs: [
          "Evaluating generative output requires distinguishing between mere visual noise and resolved compositional tension. Across the 28 cataloged works, I established strict evaluative criteria across procedural video and motion, ultra-high-resolution print, and somatic spatial installation.",
        ],
        blocks: [
          {
            title:
              "Procedural Video & Audio-Visual Counterpoint (20 HD Video Works)",
            points: [
              '**Our voices can\'t be heard. (Plates 7 & 12, Processing 2.0 HD video, 1920 × 1080 px, 2014).** The application renders a dense vertical cadence of dark structural bars on the left anchor against high-velocity diagonal vector trajectories sweeping across a muted pastel field (Figs. 7 & 12). Visually, the kinetic rhythm and ecstatic velocity of the strokes demand an aggressive audio track — yet the video is engineered to run in complete silence. This audio-visual dissonance was a deliberate structural critique of modern institutional censorship: in contemporary media, the obscene is amplified while genuinely outlier or non-conformist perspectives are muted.',
              "**Blue Rain (Plate 1, ActionScript 3.0 HD video, 1920 × 1080 px, 2014) and untitled (inspired by skrillex) (Plate 18, ActionScript 3.0 video and 12,000 × 9,000 px print, 2013).** Both systems pit rigid vertical architectural columns against fractured, high-chroma diagonal planes (cobalt blue and neon mint in *Blue Rain*; electric lime and cyan against charcoal in *untitled (inspired by skrillex)*). Translating audio frequency and tempo dynamics into procedural ActionScript 3.0 particle physics created a sense of controlled structural fragmentation.",
            ],
          },
          {
            title: "Vector Density, Topology & Scale Modulations",
            points: [
              "**Ladders and Chutes (Plate 9, 2013) vs. Untitled Flash Project (Plate 10, 2013).** A comparative study in visual weight and negative space. *Ladders and Chutes* balances heavy, varied stroke weights across triangular and ladder-like structural trusses against open white space, preserving clear figure-ground hierarchy. By contrast, *Untitled Flash Project* pushes line-iteration density to the threshold of chaotic entanglement — demonstrating how unconstrained loop counts rapidly degrade visual legibility into uniform gray noise if not governed by halting constraints.",
              "**How we move together so well. (Plate 16, Processing 2.0, 2011) and The Transformative Pond (Plate 22, 3,600 × 3,600 px, 2014).** Explored cellular, ribbed path-weaving (crimson and cobalt striated vectors interlocking across a neutral plane in Fig. 16) versus organic topological contour mapping (*The Transformative Pond*, Fig. 22), demonstrating mastery across both hard-edge algorithmic cellular automata and fluid topographical gradients.",
              "**The Steps to Freedom (Plate 28, Processing 2.0, 1,200 × 800 px, 2012).** Uses a single diagonal vector trajectory radiating stepped golden-amber rectangular bounding boxes from the top-left origin toward the bottom-right frame — a minimalist study in progressive spatial expansion and directional momentum.",
            ],
          },
        ],
      },
      {
        id: "5",
        title: '5. Academic Defense & "Glass-Box" Public Exhibition',
        paragraphs: [
          "A central tension discovered during my research was the Reception Gap between traditional gallery viewers and new-media technologists.",
        ],
        points: [
          "When I exhibited algorithmic outputs strictly as traditionally framed, flat 2D archival prints (Fig. 25), general audiences praised their bold Modernist aesthetics — while digital media peers critiqued static prints as stripping away the interactive, temporal soul of the software.",
          "Conversely, presenting raw unframed screens alienated traditional viewers who looked only for a finished object rather than an ongoing computational process.",
        ],
        blocks: [
          {
            title:
              'The "Glass-Box" Resolution (SJSU CADRE Defense & 2014 Bay Area Maker Faire)',
            paragraphs: [
              "To resolve this dichotomy for my formal thesis defense before the SJSU CADRE faculty committee and subsequent public exhibitions (over 8 gallery shows culminating at the 2014 Bay Area Maker Faire), I designed a hybrid cyber-physical installation architecture.",
            ],
            ordered: true,
            points: [
              "**Embodied computer vision (OpenNI / Microsoft Kinect).** Rather than confining the algorithms to pre-rendered loops, I integrated real-time depth-sensor skeletal tracking via OpenNI and Microsoft Kinect. As attendees stepped into the physical space, their somatic movement directly modulated the generative parameters on screen — turning the viewer into a live co-creator in the present moment.",
              '**Radical code transparency.** Refusing to hide the generative logic behind a black box, I printed and displayed the raw Processing (Java) and ActionScript 3.0 source code directly alongside the live digital projections and framed artifacts. Viewers could trace the exact for loops, trigonometric functions (cos(a), sin(a)), and stochastic variables driving the visual transformations in real time.',
              "**Validation.** This transparent, human-in-the-loop installation won an Editor's Choice Award at the 2014 Bay Area Maker Faire, validating that demystifying complex algorithmic processes increases both public engagement and epistemic trust.",
            ],
          },
        ],
      },
    ],
    outcomeHeading:
      "6. The 12-Year Architectural Lineage: From 2014 MFA R&D to 2026 Enterprise AI Systems",
    outcome: [
      "A Creative Process was not an isolated academic exercise. It was the three-year R&D crucible that established the core architectural principles I deploy today across enterprise AI, spatial computing, and cyber-physical hardware.",
    ],
    outcomePoints: [
      '**From undo/redo theory (2014) to air-gapped digital twins ("The Shadow Map," 2026).** My 2014 thesis identified non-destructive state traversal — stepping backward and forward to undo and redo across thousands of iterations — as the defining superpower of software. Today, that principle powers my Shadow Map Digital Twin architecture for high-hazard environments (such as Lawrence Livermore National Laboratory) — streaming one-way telemetry into an air-gapped virtual sandbox to run Monte Carlo simulations before any physical action is authorized on the floor.',
      "**From printed source code (2014) to Glass-Box compound agentic systems (2026).** Exhibiting printed Java/Processing code beside live projections to combat black-box opacity evolved directly into my current work building deterministic RAG pipelines (pgvector), layout-aware document parsing, Model Context Protocol (MCP) throttling, and chain-of-thought reasoning traces that force LLMs to show their primary sources rather than hallucinating.",
      '**From Kinect embodied presence (2014) to Flow Experience Design (FXD) and the Somatic UI Spectrum (2026).** Observing how real-time computer vision anchored gallery participants in a meditative flow state (eliminating past regret and future anxiety) laid the groundwork for Flow Experience Design (FXD) and "The Breathing UI" — interfaces that rest at a quiet Somatic Minimum and expand only when live telemetry demands human intervention — as well as my hardware R&D (GameTrigger/ErgoClick) and Parkinson\'s Zero-UI voice accessibility research.',
    ],
  },
  {
    slug: "switch-journal",
    title: "SWITCH: New Media Journal (Vol. 28)",
    summary:
      "Academic publishing, editorial curation, and digital archiving for the CADRE Laboratory for New Media.",
    hero: {
      src: "/switch-issue-28-hero.jpg",
      alt: "SWITCH Issue 28 masthead and staff list, naming Tyson Frederick as Assistant Editor, head of Process, and Web Development",
      width: 1960,
      height: 2956,
      caption:
        "Issue 28 masthead and staff. Assistant Editor, Process: The Pixels of an Image, and Web Development.",
    },
    interstitial: {
      src: "/switch-issue-28-article.jpg",
      afterPhaseId: "3",
      alt: "Published essay A Human's Job by Tyson Frederick in SWITCH Issue 28",
      width: 1960,
      height: 2188,
      caption:
        "“A Human's Job,” filed October 28, 2013 under Process: The Pixels of an Image.",
    },
    figures: [
      {
        src: "/switch-issue-28-process.jpg",
        afterPhaseId: "2",
        alt: "Process: The Pixels of an Image department index for SWITCH Issue 28",
        width: 1960,
        height: 2124,
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
