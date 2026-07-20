import { motion } from "framer-motion";
import { Link } from "react-scroll";

import personalInfo from "../data/personalInfo";
import profile from "../assets/images/profile.png";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

import {
  FaUser,
  FaEnvelope,
  FaLocationDot,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa6";


function About() {


const stats = [
  {
    number:"3+",
    title:"Projects"
  },
  {
    number:"1+",
    title:"Internship"
  },
  {
    number:"10+",
    title:"Technologies"
  },
  {
    number:"100%",
    title:"Responsive"
  }
];



  return (

<section
id="about"
className="
py-24
px-6
bg-gradient-to-br
from-white
via-slate-50
to-blue-50
dark:from-slate-950
dark:via-slate-900
dark:to-black
text-slate-900
dark:text-white
transition-colors
duration-500
"
>


<motion.div

className="max-w-7xl mx-auto"

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.7
}}

viewport={{
once:true
}}

>


<SectionTitle
subtitle="Who I Am"
title="About Me"
/>



<div className="grid lg:grid-cols-2 gap-16 items-center">



{/* IMAGE */}


<motion.div

className="flex justify-center"

whileHover={{
scale:1.05
}}

>


<div className="relative">


<div
className="
absolute
inset-0
bg-blue-500
blur-[100px]
opacity-30
rounded-3xl
"
/>



<div

className="
relative
w-80
h-80
rounded-3xl
overflow-hidden
border-4
border-white
dark:border-blue-500
shadow-2xl
"

>


<img

src={profile}

alt={personalInfo.name}

className="
w-full
h-full
object-cover
"

/>


</div>


</div>


</motion.div>





{/* CONTENT */}



<motion.div

initial={{
opacity:0,
x:80
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.7
}}

viewport={{
once:true
}}

>



<h3

className="
text-4xl
font-bold
mb-5
"

>

{personalInfo.title}

</h3>




<p

className="
leading-8
text-lg
mb-8
text-slate-600
dark:text-slate-300
"

>

{personalInfo.about}

</p>





{/* STATS */}



<div className="
grid
grid-cols-2
gap-5
mb-10
">


{
stats.map((item,index)=>(


<motion.div

key={index}

whileHover={{
y:-8
}}

className="
p-5
rounded-2xl
bg-white
dark:bg-slate-900
border
border-slate-200
dark:border-slate-700
text-center
shadow-md
"

>


<h4

className="
text-3xl
font-bold
text-blue-600
dark:text-blue-400
"

>

{item.number}

</h4>


<p

className="
text-sm
mt-2
text-slate-500
dark:text-slate-400
"

>

{item.title}

</p>


</motion.div>


))
}


</div>







{/* DETAILS */}



<div className="
grid
sm:grid-cols-2
gap-4
">


<div className="info-card">

<FaUser className="text-blue-500"/>

<span>
{personalInfo.name}
</span>

</div>




<div className="info-card">

<FaEnvelope className="text-blue-500"/>

<span>
{personalInfo.email}
</span>

</div>




<div className="info-card">

<FaLocationDot className="text-blue-500"/>

<span>
{personalInfo.location}
</span>

</div>





<div className="info-card">

<FaGraduationCap className="text-blue-500"/>

<span>
MCA - University of Mumbai
</span>

</div>




<div className="
info-card
sm:col-span-2
">

<FaBriefcase className="text-blue-500"/>

<span>
Frontend Developer Intern - Smart Access
</span>


</div>



</div>






{/* BUTTONS */}


<div className="
flex
gap-5
mt-10
flex-wrap
">


<Link

to="contact"

smooth={true}

duration={500}

offset={-70}

>


<Button>

Let's Connect

</Button>


</Link>



<Button

variant="outline"

href={personalInfo.resume}

>

Download Resume

</Button>


</div>



</motion.div>



</div>



</motion.div>


</section>

  );

}


export default About;