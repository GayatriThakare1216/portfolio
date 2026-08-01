import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project, openModal }) {
  return (
<div
  onClick={() => openModal(project)}
  className="
  group
  cursor-pointer
  bg-white
      dark:bg-slate-900
      border border-slate-200
      dark:border-slate-700
      rounded-3xl
      overflow-hidden
      shadow-lg
    hover:border-blue-500
hover:bg-blue-50
dark:hover:bg-blue-500/10
      hover:-translate-y-4
      hover:shadow-2xl
      hover:shadow-blue-500/20
      transition-all
      duration-500"
    >

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div
className="
absolute
inset-0
bg-black/60
opacity-0
group-hover:opacity-100
transition
duration-500
flex
items-center
justify-center
"
>

<button
onClick={openModal}
className="
bg-blue-600
text-white
px-6
py-3
rounded-xl
font-semibold
shadow-lg
hover:bg-blue-700
transition
"
>
👁 View Details
</button>

</div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

        <span className="absolute top-4 left-4 bg-blue-600 text-white backdrop-blur px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
          {project.category}
        </span>

{project.badge && (
  <span
    className="
    absolute
    top-16
    left-4
    bg-emerald-600
    text-white
    px-3
    py-1
    rounded-full
    text-xs
    font-semibold
    shadow-lg
    "
  >
    ⭐ {project.badge}
  </span>
)}

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
         {project.type}
        </p>

        <p className="leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mt-6">

          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
              bg-slate-100
              dark:bg-slate-800
              border border-slate-200
              dark:border-slate-700
              text-slate-700
              dark:text-slate-200
              px-3 py-1
              rounded-full
              text-sm
              hover:border-blue-500
hover:ring-2
hover:ring-blue-500/20
              transition"
            >
              {tech}
            </span>
          ))}

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
            hover:bg-blue-700
            text-white
            px-5 py-3
            rounded-xl
            transition"
          >
            <FaGithub />
            GitHub
          </a>

          {project.live !== "#" && (
            <a
             onClick={(e)=>e.stopPropagation()}
              href={project.live}
              target="_blank"
              rel="noreferrer"
className="
flex-1
flex
justify-center
items-center
gap-2
              border-2 border-blue-600
              bg-white
              text-blue-600
              hover:bg-blue-600
              hover:text-white
              dark:bg-transparent
              dark:border-blue-500
              dark:text-blue-400
              dark:hover:bg-blue-500
              dark:hover:text-white
              px-5 py-3
              rounded-xl
              transition"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;