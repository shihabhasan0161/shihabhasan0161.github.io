export interface Experience {
  company: string;
  role: string;
  period: string;
  logoUrl: string;
  description?: string[];
}

const experiences: Experience[] = [
  {
    company: "Trillium Health Partners",
    role: "Information Systems Co-op",
    period: "May 2026 – Aug 2026",
    logoUrl: "/assets/icons/thp_logo.jpeg",
    description: [
      "Developing automation scripts/workflows for enterprise applications validating monthly patching cycle."
    ],
  },
  {
    company: "AI for Impact (Club)",
    role: "Machine Learning Engineer",
    period: "Oct 2025 – April 2026",
    logoUrl: "/assets/icons/ai_for_impact.jpg",
    description: [
      "Worked with student-led research team on prototyping Machine Learning Models for social impact."
    ],
  },
  {
    company: "Vosyn",
    role: "Backend Developer Intern",
    period: "May 2025 – Aug 2025",
    logoUrl: "/assets/icons/vosyn_logo.jpg",
    description: [
      "Designed and developed production-grade REST APIs using Python Django Backend Framework.",
      "Directly collaborated with Frontend Developers to build end to end features within a Agile team.",
    ],
  },
];

export default experiences;
