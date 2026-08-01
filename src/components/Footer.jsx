import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

import { Link } from "react-scroll";

import personalInfo from "../data/personalInfo";


function Footer() {


const links = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Certificates", to: "certificates" },
  { name: "Contact", to: "contact" },
];



const tech = [
  {
    name:"React",
    icon:FaReact
  },
  {
    name:"Next.js",
    icon:SiNextdotjs
  },
  {
    name:"Tailwind",
    icon:SiTailwindcss
  },
  {
    name:"JavaScript",
    icon:SiJavascript
  }
];



return (

<footer
className="
bg-gradient-to-br
from-white
via-slate-50
to-blue-50
dark:from-slate-950
dark:via-slate-900
dark:to-black
border-t
border-slate-200
dark:border-slate-800
transition-colors
duration-500
"
>


<div
className="
max-w-7xl
mx-auto
px-6
py-14
grid
md:grid-cols-3
gap-10
"
>



{/* Brand */}


<div>


<h2
className="
text-3xl
font-bold
text-blue-600
dark:text-blue-400
"
>

Gayatri<span className="text-slate-900 dark:text-white">.</span>

</h2>



<p
className="
mt-4
leading-7
text-slate-600
dark:text-slate-400
"
>

Frontend Developer specializing in React.js, Next.js and modern frontend technologies. Passionate about building fast, responsive and user-friendly web applications.
</p>



<div className="flex gap-4 mt-6">


<a
href={personalInfo.github}
target="_blank"
rel="noreferrer"
className="
w-11 h-11
rounded-full
flex
items-center
justify-center
bg-slate-100
dark:bg-slate-800
text-slate-700
dark:text-white
hover:bg-blue-600
hover:text-white
transition-all
duration-300
"
>

<FaGithub/>

</a>




<a
href={personalInfo.linkedin}
target="_blank"
rel="noreferrer"
className="
w-11 h-11
rounded-full
flex
items-center
justify-center
bg-slate-100
dark:bg-slate-800
text-slate-700
dark:text-white
hover:bg-blue-600
hover:text-white
transition-all
duration-300
"
>

<FaLinkedin/>

</a>




<a
href={`mailto:${personalInfo.email}`}
className="
w-11 h-11
rounded-full
flex
items-center
justify-center
bg-slate-100
dark:bg-slate-800
text-slate-700
dark:text-white
hover:bg-blue-600
hover:text-white
transition-all
duration-300
"
>

<FaEnvelope/>

</a>



</div>


<div className="mt-8">

<p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
Interested in my profile?
</p>

<a
  href={personalInfo.resume}
  target="_blank"
  rel="noreferrer"
  className="
  inline-flex
  items-center
  gap-3
  px-6
  py-3
  rounded-2xl
  bg-gradient-to-r
  from-blue-600
  to-cyan-500
  text-white
  font-semibold
  hover:scale-105
  transition-all
  duration-300
  shadow-xl
  "
>
  📄 Download Resume
</a>

</div>

</div>







{/* Quick Links */}


<div>


<h3
className="
text-xl
font-bold
mb-5
text-slate-900
dark:text-white
"
>

Quick Links

</h3>



<ul className="space-y-3">


{
links.map((item)=>(

<li key={item.to}>


<Link

to={item.to}

smooth={true}

duration={500}

offset={-70}

className="
cursor-pointer
text-slate-600
dark:text-slate-400
hover:text-blue-500
transition
"

>

{item.name}

</Link>


</li>


))
}


</ul>


</div>








{/* Tech Stack */}



<div>


<h3
className="
text-xl
font-bold
mb-5
text-slate-900
dark:text-white
"
>

Built With

</h3>



<div className="flex flex-wrap gap-3">


{
tech.map((item,index)=>{


const Icon=item.icon;


return (

<div

key={index}

className="
flex
items-center
gap-2
px-4
py-2
rounded-full
bg-white
dark:bg-slate-900
border
border-slate-200
dark:border-slate-700
text-sm
text-slate-700
dark:text-slate-300
hover:border-blue-500
hover:-translate-y-1
hover:shadow-lg
transition-all
duration-300
transition
"

>


<Icon className="text-blue-500"/>

{item.name}


</div>


)


})
}


</div>


</div>




</div>





{/* Bottom */}


<div
className="
border-t
border-slate-200
dark:border-slate-800
py-5
text-center
text-sm
text-slate-500
dark:text-slate-400
"
>


© 2026 
<span className="text-blue-500 font-semibold">
{" "}
{personalInfo.name}
</span>

. All Rights Reserved.

<br/>

<span>
Designed & Developed using React, Tailwind CSS and modern frontend technologies.
</span>


</div>



</footer>


);


}


export default Footer;