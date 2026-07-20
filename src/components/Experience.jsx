import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

function Experience() {
const experience = [
  {
    title: "Frontend Developer Intern",
    company: "SMART ACCESS",
    duration: "Feb 2026 - Jun 2026",
    description:
      "Worked on responsive web applications using React.js, JavaScript and Tailwind CSS. Developed reusable components, improved UI layouts and implemented modern frontend practices.",
  },

  {
    title: "Full Stack Development Projects",
    company: "Personal Projects",
    duration: "2025 - Present",
    description:
      "Building full-stack applications including Appointment Booking SaaS and AI-powered E-commerce platforms using React, Next.js, Node.js, Express, PostgreSQL and MongoDB.",
  },

  {
    title: "Frontend Development Journey",
    company: "Self Learning",
    duration: "2024 - Present",
    description:
      "Learning and improving frontend development skills by building real-world projects, practicing responsive design and exploring modern React ecosystem.",
  },
];

  return (
    <section
      id="experience"
      className="
      py-24
      px-6
      transition-colors
      duration-500
      bg-gradient-to-br
      from-white
      via-slate-50
      to-blue-50
      dark:from-slate-950
      dark:via-slate-900
      dark:to-black
      text-slate-900
      dark:text-white"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="My Journey"
          title="Experience"
        />

        {/* Timeline */}

        <div className="relative border-l-2 border-blue-500 ml-4 mt-14 space-y-10">

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-10"
            >

              {/* Timeline Dot */}

              <div className="absolute -left-[11px] top-6 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-slate-950 shadow-lg"></div>

              {/* Card */}

              <div
                className="
                bg-white
                dark:bg-slate-900
                border border-slate-200
                dark:border-slate-700
                rounded-2xl
                p-6
                shadow-lg
                hover:border-blue-500
                hover:shadow-xl
                transition-all
                duration-300"
              >

                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {item.title}
                </h3>

                <p className="mt-2 font-medium text-slate-700 dark:text-slate-300">
                  {item.company}
                </p>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {item.duration}
                </p>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;