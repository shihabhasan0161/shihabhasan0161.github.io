export interface Experience {
  company: string;
  role: string;
  period: string;
  logoUrl: string;
  description?: string[];
}

const experiences: Experience[] = [
  {
    company: "AI for Impact Club",
    role: "AI/ML Engineer",
    period: "Oct 2025 – Present",
    logoUrl: "/assets/icons/ai_for_impact.jpg",
    description: [
      "Worked with a student-led research team on healthcare-focused AI and machine learning initiatives for social impact.",
      "Conducted literature reviews (arXiv, OpenReview) to guide problem formulation, metrics, and prototyping models.",
      "Developed technical workshops on Agentic AI, demonstrating the use of GenAI tools.",
    ],
  },
  {
    company: "Vosyn",
    role: "Backend Developer Intern",
    period: "May 2025 – Aug 2025",
    logoUrl: "/assets/icons/vosyn_logo.jpg",
    description: [
      "Designed and delivered microservices-based REST APIs using Python (Django) focusing on reusability and scalability.",
      "Developed backend features across the SDLC, including API design, business logic, and service integration.",
      "Built and optimized PostgreSQL database schemas and SQL queries, improving data retrieval performance.",
      "Automated CI/CD pipelines using Docker and GitHub to streamline builds, testing and deployments.",
      "Leveraged Google Cloud Platform (GCP) to optimize cloud storage, reducing data retrieval time.",
      "Collaborated with frontend developers and participated in Agile sprints, contributing to end-to-end feature delivery.",
    ],
  },
];

export default experiences;
