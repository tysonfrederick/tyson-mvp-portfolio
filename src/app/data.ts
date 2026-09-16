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
  videoSrc: string;
  imagePath: string;
  tags: string[];
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
      id: "biofilm-sim",
      title: "Interactive 3D Mechanical Simulation",
      role: "Lead Creative Technologist & 3D Modeler",
      description:
        "Translated engineering schematics into high-fidelity 3D visual prototypes in Unreal Engine 4.",
      videoSrc: "/videos/sim-intro.mp4",
      imagePath: "/sim.png",
      tags: ["Unreal Engine 4", "Blender", "3D Simulation"],
    },
    {
      id: "generative-art",
      title: "Algorithmic Generative Media",
      role: "Interactive Systems Lead",
      description:
        "Interactive installations driven by computer vision (OpenNI/Kinect) and real-time algorithmic generation.",
      videoSrc: "/videos/mfa-generative.mp4",
      imagePath: "/theta-2.jpg",
      tags: ["Processing", "Computer Vision", "Systems Architecture"],
    },
    {
      id: "foodshare-ecosystem",
      title: "Multi-Sided Cyber-Physical Logistics",
      role: "Lead Product Designer & Founder",
      description:
        "Architected a 4-sided value exchange ecosystem mapping donors, volunteers, and distribution nodes.",
      videoSrc:
        "https://cdn.coverr.co/videos/coverr-clouds-and-mountains-5675/1080p.mp4",
      imagePath: "/foodshare.png",
      tags: ["Systems Architecture", "Logistics", "Product Strategy"],
    },
    {
      id: "ergoclick",
      title: "Ergonomic Accessory for Creators",
      role: "Lead Product Designer (Hardware & Digital UX)",
      description:
        "Engineered a physical computing accessory targeting repetitive tendon strain, validating rapid iterations from foam models to 3D prints.",
      videoSrc: "/videos/ergoclick-loop.mp4",
      imagePath: "/foodshare.png",
      tags: ["Hardware Prototyping", "Biomechanics", "Business Strategy"],
    },
  ],
};
