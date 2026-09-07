import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

function Experience() {
  const experience = [

{
  title: "Web Developer Intern",
  company: "Zidio Development",
  duration: "25 Jun 2026 - 25 Aug 2026",
  description:
    "Contributed to responsive web application development with exposure to UI/UX implementation, API integration, clean and modular coding, debugging, performance optimization, documentation, and Agile development practices.",
},

{
  title: "Frontend Developer Intern",
  company: "SMART ACCESS",
  duration: "7 Feb 2026 - 3 Jun 2026",
  description:
    "Developed responsive web interfaces using React.js, JavaScript and Tailwind CSS. Built reusable UI components, implemented responsive layouts, worked on frontend features and contributed to real-world web application development.",
},

    {
      title: "Web Developer Intern",
      company: "THE PIXEL MIND",
      duration: "Aug 2025 - Feb 2026",
      description:
        "Developed responsive web interfaces using Next.js, React.js and Tailwind CSS. Built reusable UI components and worked with Git, database management and deployment workflows.",
    },

    {
      title: "Full Stack Development Projects",
      company: "Personal Projects",
      duration: "2025 - Present",
      description:
        "Built and deployed real-world applications including an Appointment Booking SaaS platform, modern E-Commerce application and Expense Management system. Worked with React.js, JavaScript, Tailwind CSS, Django, PostgreSQL and modern frontend development practices.",
    },
  ];

  return (
    <section
      id="experience"
      className="
        py-24
        bg-white
        dark:bg-slate-950
        text-slate-900
        dark:text-white
        transition-colors
        duration-500
      "
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Title */}

        <SectionTitle
          subtitle="My Journey"
          title="Experience"
        />

        {/* Description */}

        <p
          className="
            text-center
            max-w-3xl
            mx-auto
            mt-4
            mb-14
            text-slate-600
            dark:text-slate-400
            leading-7
          "
        >
My professional journey includes hands-on internship experience
and building real-world applications using modern frontend and
full-stack technologies.
        </p>

        {/* Timeline */}

        <div
          className="
            relative
            border-l-2
            border-blue-500
            ml-4
            mt-14
            space-y-10
          "
        >
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

              <div
                className="
                  absolute
                  -left-[11px]
                  top-6
                  w-5
                  h-5
                  rounded-full
                  bg-blue-500
                  border-4
                  border-white
                  dark:border-slate-950
                  shadow-lg
                "
              ></div>

              {/* Experience Card */}

              <div
                className="
                  bg-white
                  dark:bg-slate-900
                  border
                  border-slate-200
                  dark:border-slate-700
                  rounded-2xl
                  p-6
                  shadow-lg
                  hover:border-blue-500
                  hover:shadow-xl
                  hover:ring-2
                  hover:ring-blue-500/20
                  transition-all
                  duration-300
                "
              >

                {/* Title */}

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-blue-600
                    dark:text-blue-400
                  "
                >
                  {item.title}
                </h3>

                {/* Company */}

                <p
                  className="
                    mt-2
                    font-medium
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  {item.company}
                </p>

                {/* Duration */}

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {item.duration}
                </p>

                {/* Description */}

                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-600
                    dark:text-slate-300
                  "
                >
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