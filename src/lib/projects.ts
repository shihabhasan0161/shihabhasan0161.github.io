interface Project {
  name: string;
  description?: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    name: "Student Expense Tracker",
    description:
      "A web application that helps students track their expenses and manage their budgets effectively.",
    tech: ["Spring Boot", "React", "MongoDB", "CSS", "Docker", "Render", "Netlify"],
    link: "https://github.com/shihabhasan0161/Student-Expense-Tracker---Backend",
  },
  {
    name: "CommuterBuddy",
    description:
      "A perfect student companion finder app that helps students find study buddies, and friends for commuting with. Built it for the Hack404 Hackathon.",
    tech: ["React-TypeScript", "Supabase", "TailwindCSS", "Netlify"],
    link: "https://github.com/shihabhasan0161/CommuterBuddy",
  },
  {
    name: "Dental AI",
    description: "AI-powered dental clinic management platform to streamline operations. Also, it can detect dental issues from images using Gemini AI. Built it for the Hack the brain Hackathon.",
    tech: ["React", "Firebase", "TailwindCSS", "Gemini AI", "GCP"],
    link: "https://github.com/erohsikero/HackTheBrain-AiMazing",
  },
];

export default projects;
