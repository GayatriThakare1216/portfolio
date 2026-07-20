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

const skills = [
  {
    category: "Frontend Development",
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
        name: "Figma",
        icon: FaFigma,
        level: 70,
      },
      {
        name: "Vercel",
        icon: SiVercel,
        level: 80,
      },
    ],
  },
];

export default skills;