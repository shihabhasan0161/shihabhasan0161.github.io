export interface Experience {
  company: string;
  role: string;
  period: string;
  logoUrl: string;
  description?: string[];
}

const experiences: Experience[] = [
  {
    company: "FGF Brands",
    role: "AI Solutions Engineer (Co-op)",
    period: "Sep 2026 – Apr 2027",
    logoUrl: "/assets/icons/fgf_brands_logo.jpg",
    description: [
      "Developing full-stack features for FGF's internal AI agent platform, using Python, FastAPI, FastMCP, React, TypeScript, Azure, and PostgreSQL.",
      "Building REST APIs and Model Context Protocol (MCP) integrations that enable AI agents to invoke enterprise tools, execute workflows, and interact with external services.",
      "Integrating enterprise connectors to automate business operations, including sending emails, posting Microsoft Teams messages, and generating business dashboards.",
      "Implementing backend services, database queries, and application logic using Azure PostgreSQL, including secure authentication and Microsoft 365 integrations through MSAL.",
      "Designing reusable frontend and backend components for agent configuration, tool execution, and conversational user interactions.",
      "Collaborating with software engineers using Jira to develop, test, debug, and deploy application features in an Azure-hosted production environment.",
    ],
  },
  {
    company: "Trillium Health Partners",
    role: "Information Systems (Co-op)",
    period: "May 2026 – Aug 2026",
    logoUrl: "/assets/icons/thp_logo.jpeg",
    description: [
      "Developed and deployed Python, PowerShell, and Power Automate scripts to automate monthly security patching workflows across 50 clinical applications.",
      "Automated repetitive patching tasks, saving an estimated 16 hours of manual work per month.",
      "Implemented error handling, logging, and end-to-end testing to improve the reliability of long-running automation processes.",
      "Automated the collection of application validation results, screenshots, and execution errors to support patching documentation and reporting.",
      "Collaborated with application analysts, IT teams, and external vendors to translate operational requirements into maintainable automation solutions.",
      "Deployed and documented attended and unattended automation workflows within Windows server environments.",
    ],
  },
  {
    company: "AI for Impact (Club)",
    role: "Machine Learning Engineer",
    period: "Oct 2025 – March 2026",
    logoUrl: "/assets/icons/ai_for_impact.jpg",
    description: [
      "Collaborated with a student-led research team at York University to explore machine learning and computer vision applications addressing healthcare challenges.",
      "Evaluated open-source machine learning models from Hugging Face for brain tumor detection and compared model performance for experimental research.",
      "Investigated practical applications of computer vision and deep learning models in healthcare-focused research.",
      "Developed and delivered technical workshops introducing Generative AI, AI agents, and real-world AI applications to York University students.",
    ],
  },
  {
    company: "Vosyn",
    role: "Backend Developer Intern",
    period: "May 2025 – Aug 2025",
    logoUrl: "/assets/icons/vosyn_logo.jpg",
    description: [
      "Designed and developed Python/Django microservices and REST APIs for VosynVerse, an AI-powered content platform supporting real-time translation and transcription.",
      "Engineered and documented backend features supporting an AI-powered smart video summarization widget.",
      "Designed PostgreSQL database schemas and optimized SQL queries to improve backend data retrieval performance.",
      "Built and deployed containerized backend services using Docker, Terraform, GitHub Actions CI/CD, and Google Cloud Platform (GCP).",
      "Leveraged GCP and Firebase services to optimize cloud storage and application data retrieval.",
      "Applied software development lifecycle (SDLC) and test-driven development practices, writing unit tests with pytest and validating REST API responses using Postman.",
      "Collaborated with frontend developers, QA engineers, and product team members in Agile sprints to deliver end-to-end application features.",
    ],
  },
];

export default experiences;
