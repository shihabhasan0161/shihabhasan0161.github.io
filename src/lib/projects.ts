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
      "Built a full-stack open-source chatbot with chat history, role persistence, image generation, and secure API key handling. Designed a responsive UI and clear docs and contribution guidelines, attracting contributors an enabling smooth community contributions.",
    tech: ["Spring Boot", "React", "Docker", "Render"],
    link: "https://github.com/shihabhasan0161/react-spring-chatbot",
  },
  {
    name: "SmartStudent",
    description:
      "Developed a full stack smart expense tracking platform, built for student and by student.",
    tech: ["Spring Boot", "React", "MongoDB", "Docker", "Render", "Netlify"],
    link: "https://github.com/shihabhasan0161/SmartStudent-Backend",
  },
  {
    name: "CommuterBuddy",
    description:
      "A community-driven platform connecting university students and commuters who share similar routes for a more social and safer travel. Built it for Hack404 Hackathon.",
    tech: ["React", "TypeScript", "Supabase", "Netlify"],
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
