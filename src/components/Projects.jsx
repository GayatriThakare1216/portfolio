import { useState } from "react";
import { motion } from "framer-motion";

import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import ProjectModal from "./ProjectModal";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const [filter, setFilter] = useState("All");


  const categories = [
    "All",
    "Frontend",
    "Full Stack",
    "AI",
  ];


  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.type === filter
        );



  return (

    <section
      id="projects"
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
      dark:text-white
      "
    >

      <div className="max-w-7xl mx-auto">


        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />




        {/* Filter Buttons */}


        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-4
          mt-10
          mb-12
          "
        >

          {
            categories.map((item)=>(

              <button

                key={item}

                onClick={()=>setFilter(item)}

                className={`
                  px-6
                  py-3
                  rounded-full
                  font-medium
                  transition-all
                  duration-300

                  ${
                    filter === item

                    ? 
                    "bg-blue-600 text-white shadow-lg shadow-blue-500/30"

                    :

                    "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-500"
                  }
                `}

              >

                {item}

              </button>

            ))
          }


        </div>




        {/* Projects Grid */}


        <motion.div

          layout

          className="
          grid
          lg:grid-cols-3
          md:grid-cols-2
          gap-8
          "

        >


          {
            filteredProjects.map((project)=>(

              <motion.div

                key={project.id}

                layout

                initial={{
                  opacity:0,
                  scale:0.9
                }}

                animate={{
                  opacity:1,
                  scale:1
                }}

                transition={{
                  duration:0.4
                }}

              >

<div
  onClick={() => setSelectedProject(project)}
  className="cursor-pointer"
>

<ProjectCard
 project={project}
 openModal={()=>setSelectedProject(project)}
/>

</div>


              </motion.div>

            ))
          }


        </motion.div>


      </div>

      {
 selectedProject && (

  <ProjectModal

    project={selectedProject}

    closeModal={() => setSelectedProject(null)}

  />

 )
}



    </section>

  );
}


export default Projects;