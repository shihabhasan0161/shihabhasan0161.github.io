export interface Experience {
  company: string;
  role: string;
  period: string;
  logoUrl: string;
  description?: string;
}

const experiences: Experience[] = [
  {
    company: "Vosyn",
    role: "Backend Developer Intern",
    period: "May 2025 – Aug 2025",
    logoUrl: "/assets/icons/vosyn_logo.jpg",
    description:
      "Implemented REST APIs in Python/Django to support new product features, improving backend reliability and performance. Optimized database queries and endpoints, reducing average API response time by 20–30%. Refactored potential bugs and FastAPI services used by Vosyn AI, cutting deployment issues by 15%+. Collaborated in Agile sprints and code reviews, contributing to backend design decisions for scalable feature rollouts.",
  },
  {
    company: "AI for Impact Club",
    role: "AI/ML Engineer",
    period: "Oct 2025 – Present",
    logoUrl: "/assets/icons/ai_for_impact.jpg",
    description:
    "Working with a student research team on healthcare-focused ML projects for social impact. Assisting with data preprocessing, exploratory analysis, and experiment design for upcoming model development. Collaborating across disciplines to define problem scope and evaluation metrics."
  },
];

export default experiences;
