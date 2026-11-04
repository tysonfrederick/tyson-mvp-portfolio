export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  /** Looping plate. Omitted when the project is stills only. */
  videoSrc?: string;
  imagePath: string;
  tags: string[];
  /** Case-study slug. Present only when `/projects/[slug]` exists. */
  slug?: string;
}

export interface PortfolioData {
  hero: HeroData;
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  hero: {
    title: "Tyson Frederick",
    subtitle: "Cyber-Physical Architect & AI Prototyper",
    description:
      "Bridging generative digital systems with high-velocity operational QA.",
  },
  projects: [
    {
      id: "foodshare-ecosystem",
      title: "FoodShare",
      role: "Founder, Principal Systems Architect & Lead Product Designer",
      description:
        "A 4-sided logistics marketplace bridging FoodShare.co, a for-profit patron engine, with FoodShare.work, a 501(c)(3) last-mile rescue network.",
      imagePath: "/images/foodshare/sketch-webapp-iterations.png",
      tags: ["4-Sided Marketplace", "Somatic UI", "Redis Geospatial", "Supabase"],
      slug: "foodshare",
    },
    {
      id: "biofilm-sim",
      title: "Interactive 3D Mechanical Simulation",
      role: "Lead Creative Technologist & 3D Modeler",
      description:
        "Translated engineering schematics into high-fidelity 3D visual prototypes in Unreal Engine 4.",
      videoSrc: "/videos/sim.mp4",
      imagePath: "/sim.png",
      tags: ["Unreal Engine 4", "Blender", "3D Simulation"],
      slug: "simulation",
    },
    {
      id: "generative-art",
      title: "Algorithmic Art Systems",
      role: "MFA Researcher, Lead Interactive Systems Designer",
      description:
        "Three-year CADRE research. Generative rules in Processing and ActionScript, defended in committee and shown in public with the source beside the image.",
      videoSrc: "/videos/mfa-generative.mp4",
      imagePath: "/theta-2.jpg",
      tags: ["Processing", "ActionScript 3.0", "Kinect"],
      slug: "algorithmic-art-systems",
    },
    {
      id: "switch-journal",
      title: "SWITCH: New Media Journal (Vol. 28)",
      role: "Assistant Editor, Process Department Head, and Web Developer",
      description:
        "Academic publishing, editorial curation, and digital archiving for the CADRE Laboratory for New Media.",
      imagePath: "/switch-issue-28-masthead.jpg",
      tags: [
        "Academic Peer Review",
        "Archival Research",
        "CMS Architecture",
        "Editorial Curation",
      ],
      slug: "switch-journal",
    },
    {
      id: "ergoclick",
      title: "Ergonomic Accessory for Creators",
      role: "Lead Product Designer (Hardware & Digital UX)",
      description:
        "Engineered a physical computing accessory targeting repetitive tendon strain, validating rapid iterations from foam models to 3D prints.",
      videoSrc: "/videos/ergoclick-loop.mp4",
      imagePath: "/ergoclick.jpg",
      tags: ["Hardware Prototyping", "Biomechanics", "Business Strategy"],
    },
  ],
};
