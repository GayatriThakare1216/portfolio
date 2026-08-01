import { motion } from "framer-motion";
import skills from "../data/skills";
import SectionTitle from "./SectionTitle";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 transition-colors duration-500
      bg-gradient-to-br from-white via-slate-50 to-blue-50
      dark:from-slate-950 dark:via-slate-900 dark:to-black
      text-slate-900 dark:text-white"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <SectionTitle
          subtitle="My Skills"
          title="Technical Skills"
        />

        <div className="
flex
justify-center
gap-3
flex-wrap
mt-6
mb-12
">

<span className="
px-4 py-2
rounded-full
bg-blue-100
dark:bg-blue-500/10
text-blue-600
dark:text-blue-400
text-sm
">
⚛ React Ecosystem
</span>

<span className="
px-4 py-2
rounded-full
bg-blue-100
dark:bg-blue-500/10
text-blue-600
dark:text-blue-400
text-sm
">
🚀 Modern UI Development
</span>

<span
  className="
  px-4 py-2
  rounded-full
  bg-blue-100
  dark:bg-blue-500/10
  text-blue-600
  dark:text-blue-400
  text-sm
  "
>
🤖 AI Assisted Development
</span>

<span className="
px-4 py-2
rounded-full
bg-blue-100
dark:bg-blue-500/10
text-blue-600
dark:text-blue-400
text-sm
">
🔗 REST API Integration
</span>

<span className="
px-4 py-2
rounded-full
bg-blue-100
dark:bg-blue-500/10
text-blue-600
dark:text-blue-400
text-sm
">
📱 Responsive Design
</span>

<span className="
px-4 py-2
rounded-full
bg-blue-100
dark:bg-blue-500/10
text-blue-600
dark:text-blue-400
text-sm
">
🧩 Component-Based Architecture
</span>

</div>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((category) => (

            <motion.div
              key={category.category}
              whileHover={{
                 y: -6,
                 scale: 1.01,
                }}
              transition={{ duration: 0.3 }}
              className="
              bg-white
              dark:bg-slate-900
              rounded-2xl
              p-8
              border border-slate-200
              dark:border-slate-700
              shadow-lg
              hover:border-blue-500
              hover:shadow-xl
              transition-all duration-300"
            >

              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                {category.category}
              </h3>

              <p className="
text-sm
text-slate-500
dark:text-slate-400
mb-6
">
{category.description}
</p>

              <div className="space-y-5">

                {category.items.map((skill) => {

                  const Icon = skill.icon;

                  return (

<div
key={skill.name}
className="
group
bg-slate-50
dark:bg-slate-800
rounded-xl
p-4
border
border-slate-200
dark:border-slate-700
hover:border-blue-500
hover:shadow-lg
hover:shadow-blue-500/10
transition-all
duration-300
"
>

                      <div className="flex justify-between items-center">

                        <div className="flex items-center gap-3">

<Icon
 size={32}
 className="
 text-blue-600
 dark:text-blue-400
 group-hover:scale-125
 transition-transform
 duration-300
 "
/>

                          <span className="font-medium text-slate-700 dark:text-slate-200">
                            {skill.name}
                          </span>

                        </div>

<span className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
  Experienced
</span>

                      </div>

                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full mt-3 overflow-hidden">

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        />

                      </div>

                    </div>

                  );

                })}

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>
    </section>
  );
}

export default Skills;