import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";


function ProjectModal({ project, closeModal }) {

  if (!project) return null;


  return (

<div
onClick={closeModal}
className="
fixed inset-0 z-[999]
bg-black/70
backdrop-blur-sm
flex items-start justify-center
px-6 py-10
overflow-y-auto
"
>


      <motion.div

        initial={{
          scale:0.8,
          opacity:0
        }}

        animate={{
          scale:1,
          opacity:1
        }}

        transition={{
          duration:0.3
        }}

        onClick={(e)=>e.stopPropagation()}

className="
relative
max-w-4xl
w-full
max-h-[90vh]
overflow-y-auto
bg-white
dark:bg-slate-900
border
border-slate-200
dark:border-slate-700
rounded-3xl
p-8
"

      >


        {/* Close Button */}

        <button
          onClick={closeModal}
          className="
          absolute
          right-5
          top-5
          text-gray-500
          dark:text-gray-400
          hover:text-red-500
          text-xl
          "
        >

          <FaTimes/>

        </button>



        {/* Image */}

        <img
          src={project.image}
          alt={project.title}
className="
w-full
h-72
object-cover
rounded-2xl
mb-6
"
        />



        {/* Title */}

        <h2
        className="
        text-3xl
        font-bold
        mt-6
        text-blue-500
        "
        >

          {project.title}

        </h2>

        <div className="flex flex-wrap gap-3 mt-3">
  <span className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
    {project.type}
  </span>

  <span className="px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
    {project.category}
  </span>
</div>



        {/* Description */}

        <p
        className="
        mt-4
        leading-7
        text-slate-600
        dark:text-slate-300
        "
        >

          {project.description}

        </p>




        {/* Overview */}

        <div className="mt-6">

          <h3 className="text-xl font-semibold text-blue-500">
            🚀 Project Overview
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-300 leading-7">
            {project.overview}
          </p>

        </div>




        {/* Features */}

        <div className="mt-6">

          <h3 className="text-xl font-semibold text-blue-500">
            ✨ Key Features
          </h3>


          <ul className="mt-3 space-y-2">

          {
            project.features?.map((feature,index)=>(

              <li
              key={index}
              className="flex gap-2 text-slate-600 dark:text-slate-300"
              >

                <span className="text-blue-500">
                  ✓
                </span>

                {feature}

              </li>

            ))
          }

          </ul>

        </div>





        {/* Extra Details */}


        <div className="grid md:grid-cols-3 gap-5 mt-6">


          <div
          className="
          bg-slate-100
          dark:bg-slate-800
          p-4
          rounded-xl
          "
          >

            <h4 className="font-semibold text-blue-500">
              My Role
            </h4>

            <p className="mt-2 text-sm">
              {project.role}
            </p>

          </div>




          <div
          className="
          bg-slate-100
          dark:bg-slate-800
          p-4
          rounded-xl
          "
          >

            <h4 className="font-semibold text-blue-500">
              Duration
            </h4>

            <p className="mt-2 text-sm">
              {project.duration}
            </p>

          </div>


          <div
  className="
  bg-slate-100
  dark:bg-slate-800
  p-4
  rounded-xl
  "
>
  <h4 className="font-semibold text-blue-500">
    Project Type
  </h4>

  <p className="mt-2 text-sm">
    {project.type}
  </p>
</div>


        </div>





        {/* Challenges */}

        <div className="mt-6">

          <h3 className="text-xl font-semibold text-blue-500">
           🛠 Challenges
          </h3>


          <p className="mt-2 text-slate-600 dark:text-slate-300 leading-7">

            {project.challenges}

          </p>

        </div>





        {/* Technologies */}

        <h3 className="text-xl font-semibold mt-6 text-blue-500">
          💻 Technologies
        </h3>


        <div className="flex flex-wrap gap-3 mt-3">


        {
          project.tech.map((item)=>(

            <span
            key={item}
className="
bg-blue-500/10
border
border-blue-500
px-4
py-2
rounded-full
text-sm
font-medium
transition-all
duration-300
hover:bg-blue-600
hover:text-white
hover:border-blue-600
"
            >

              {item}

            </span>

          ))
        }


        </div>





        {/* Buttons */}


        <div className="flex gap-4 mt-8">


          <a
          onClick={(e)=>e.stopPropagation()}
          href={project.github}
          target="_blank"
          rel="noreferrer"

className="
flex-1
flex
justify-center
items-center
gap-2
bg-blue-600
text-white
px-6
py-3
rounded-xl
hover:bg-blue-700
transition
"
          >

            <FaGithub/>

            Github

          </a>




{project.live && project.live !== "#" && (
  <a
    onClick={(e) => e.stopPropagation()}
    href={project.live}
    target="_blank"
    rel="noreferrer"
className="
flex-1
flex
justify-center
items-center
gap-2
border
border-blue-500
px-6
py-3
rounded-xl
hover:bg-blue-600
hover:text-white
transition
"
  >
    <FaExternalLinkAlt />
    Live Demo
  </a>
)}


        </div>



      </motion.div>


    </div>

  );

}


export default ProjectModal;