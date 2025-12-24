export interface Experience {
  company: string;
  role: string;
  period: string;
  logoUrl: string;
  description?: string[];
}

const experiences: Experience[] = [
  {
    company: "Vosyn",
    role: "Backend Developer Intern",
    period: "May 2025 – Aug 2025",
    logoUrl: "/assets/icons/vosyn_logo.jpg",
    description: [
      "Designed and delivered microservices-based REST APIs using Python (Django).",
      "Reduced deployment-related failures by ~15% by stabilizing backend services and refactoring FastAPI components.",
      "Increased release reliability by ~30% by testing and validating APIs with Postman and cURL, catching edge cases.",
      "Streamlined CI/CD workflows using Docker , GitHub Actions, and Terraform , for continous deployment.",
      "Participated in Agile sprints, sprint planning, and weekly code reviews.",
    ],
  },
  {
    company: "AI for Impact Club",
    role: "AI/ML Engineer",
    period: "Oct 2025 – Present",
    logoUrl: "/assets/icons/ai_for_impact.jpg",
    description: [
      "Working with a student club research team on healthcare-focused machine learning initiatives for social impact.",
      "Supporting data preprocessing, exploratory data analysis (EDA), and experiment design for model development.",
      "Collaborating with cross-disciplinary members to define problem scope, evaluation metrics, and research goals.",
    ],
  },
];

export default experiences;
