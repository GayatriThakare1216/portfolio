import { motion } from "framer-motion";

import {
Award,
Calendar,
Building2,
BadgeCheck,
ExternalLink
} from "lucide-react";

import certificates from "../data/certificates";

function Certificates() {

return (

<section

id="certificates"

className="
py-28
bg-slate-50
dark:bg-slate-950
"

>

<div

className="
max-w-7xl
mx-auto
px-6
"

>

{/* Heading */}

<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.5
}}

className="text-center mb-16"

>

<h2

className="
text-5xl
font-black
text-slate-900
dark:text-white
"

>

Certifications

</h2>

<p

className="
mt-5
text-lg
text-slate-500
dark:text-slate-400
max-w-2xl
mx-auto
"

>

Professional certifications, internships and technical achievements
earned throughout my learning journey.

</p>

</motion.div>

{/* Cards */}

<div

className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-8
"

>

{

certificates.map((certificate,index)=>(

<motion.div

key={certificate.id}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.08
}}

whileHover={{
y:-8,
scale:1.02
}}

className="
rounded-3xl

bg-white/80
dark:bg-slate-900/80

backdrop-blur-xl

border
border-slate-200
dark:border-slate-800

shadow-xl

p-7

transition-all
duration-300
"

>

<div

className="
w-16
h-16

rounded-2xl

bg-gradient-to-br

from-indigo-600

via-purple-600

to-cyan-500

flex
items-center
justify-center

shadow-xl

mb-6
"

>

<Award

size={30}

className="text-white"

/>

</div>

<h3

className="
text-xl
font-bold
text-slate-900
dark:text-white
"

>

{certificate.title}

</h3>

<div className="mt-5 space-y-3">

<div className="flex items-center gap-3">

<Building2
size={18}
className="text-indigo-500"
/>

<p className="text-slate-600 dark:text-slate-300">

{certificate.issuer}

</p>

</div>

<div className="flex items-center gap-3">

<Calendar
size={18}
className="text-indigo-500"
/>

<p className="text-slate-600 dark:text-slate-300">

{certificate.year}

</p>

</div>

{

certificate.Credential_ID && (

<div className="flex items-start gap-3">

<BadgeCheck
size={18}
className="text-emerald-500 mt-1"
/>

<p

className="
text-sm
break-all
text-slate-600
dark:text-slate-300
"

>

{certificate.Credential_ID}

</p>

</div>

)

}

</div>

{

certificate.Certificate_url && (

<a

href={

certificate.Certificate_url}

target="_blank"

rel="noreferrer"

className="
mt-6

inline-flex

items-center

gap-2

font-semibold

text-indigo-600

dark:text-cyan-400

hover:underline
"

>

View Certificate

<ExternalLink size={17}/>

</a>

)

}

</motion.div>

))

}

</div>

</div>

</section>

);

}

export default Certificates;