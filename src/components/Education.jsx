import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import education from "../data/education";

function Education() {
  return (
    <section
      id="education"
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
          subtitle="My Background"
          title="Education Journey"
        />

        {/* Timeline */}

        <div className="relative border-l-2 border-blue-500/40 ml-4 mt-14 space-y-10">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{
                once: true,
              }}
              className="relative pl-10"
            >

              {/* Timeline Circle */}

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
                shadow-lg"
              ></div>

              {/* Card */}

              <div
                className="
                bg-white
                dark:bg-slate-900
                rounded-2xl
                p-6
                border
                border-slate-200
                dark:border-slate-700
                shadow-lg
                hover:border-blue-500
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300"
              >

<div
className="
w-12
h-12
rounded-full
bg-blue-100
dark:bg-blue-500/10
flex
items-center
justify-center
mb-4
"
>
<FaGraduationCap
className="
text-blue-600
dark:text-blue-400
text-xl
"
/>
</div>

                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {item.degree}
                </h3>

                <p className="mt-3 text-slate-700 dark:text-slate-300">
                  {item.institute}
                </p>

                <p className="mt-1 text-slate-500 dark:text-slate-400">
                  {item.year}
                </p>

                <div
                  className="
                  inline-block
                  mt-5
                  px-4
                  py-2
                  rounded-full
                  bg-blue-100
                  text-blue-700
                  border
                  border-blue-300
                  dark:bg-blue-500/10
                  dark:text-blue-400
                  dark:border-blue-500/40"
                >
                  Academic Score : {item.score}
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;