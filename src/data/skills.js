import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { Bot, Sparkles, Brain } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    items: [
      {
        name: "HTML5",
        icon: FaHtml5,
        level: 98,
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        level: 98,
      },
      {
        name: "JavaScript",
        icon: FaJs,
        level: 95,
      },
      {
        name: "React.js",
        icon: FaReact,
        level: 95,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        level: 85,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: 95,
      },
    ],
  },

  {
    category: "Backend",
    description: "Developing secure REST APIs and server-side applications.",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        level: 80,
      },
      {
        name: "Express.js",
        icon: SiExpress,
        level: 75,
      },
    ],
  },

  {
    category: "Database",
    description: "Managing relational and NoSQL databases.",
    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: 80,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: 75,
      },
    ],
  },

  {
    category: "Tools",
    description: "Version control, deployment and development tools.",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        level: 90,
      },
      {
        name: "GitHub",
        icon: FaGithub,
        level: 90,
      },
      {
        name: "VS Code",
        icon: VscVscode,
        level: 95,
      },
      
      {
        name: "Vercel",
        icon: SiVercel,
        level: 80,
      },
      {
        name: "Figma",
        icon: FaFigma,
        level: 70,
      },
    ],
  },


{
  category: "AI Tools",
  items: [
    {
      name: "ChatGPT",
      icon: Bot,
      level: 95,
    },
    {
      name: "Google Gemini",
      icon: Sparkles,
      level: 90,
    },
    {
      name: "AI Assisted Development",
      icon: Brain,
      level: 92,
    },
  ],
},
];

export default skills;