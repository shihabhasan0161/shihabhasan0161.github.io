interface Project {
  name: string;
  description?: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    name: "AI Chatbot",
    description:
      "Built a full-stack open-source chatbot with chat history, role persistence, image generation, and secure API key handling. Designed a responsive UI and clear docs and contribution guidelines, attracting contributors anenabling smooth community contributions.",
    tech: ["Spring Boot", "React", "Docker", "Render", "Render"],
    link: "https://github.com/shihabhasan0161/react-spring-chatbot",
  },
  {
    name: "SmartStudent",
    description:
      "A web application that helps students track their expenses and manage their budgets effectively.",
    tech: ["Spring Boot", "React", "MongoDB", "CSS", "Docker", "Render", "Netlify"],
    link: "https://github.com/shihabhasan0161/SmartStudent-Backend",
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
    description:
      "AI-powered dental clinic management platform to streamline operations. Also, it can detect dental issues from images using Gemini AI. Built it for the Hack the brain Hackathon.",
    tech: ["React", "Firebase", "TailwindCSS", "Gemini AI", "GCP"],
    link: "https://github.com/erohsikero/HackTheBrain-AiMazing",
  },
  {
    name: "Notion MCP Agent",
    description:
      "An AI-powered agent that helps users generate portfolio project ideas through Notion integration. Perfect for students targeting internships and building their technical portfolio.",
    tech: ["MCP", "Python", "Notion API", "OpenAI API"],
    link: "https://github.com/shihabhasan0161/notion-mcp-agent",
  },
];

export default projects;
