import { useContext, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import personalInfo from "../data/personalInfo";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, setDarkMode } = useContext(ThemeContext);


  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Projects", to: "projects" },
    { name: "Certificates", to: "certificates" },
    { name: "Contact", to: "contact" },
  ];


  return (

<header className="fixed top-0 left-0 w-full z-[999] backdrop-blur-lg border-b
bg-white/90 dark:bg-slate-950/90
border-gray-200 dark:border-slate-800">


<nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


{/* Logo */}

<Link
to="home"
smooth={true}
duration={500}
offset={-70}
className="cursor-pointer"
>

<h1 className="text-2xl font-bold">
  <span className="text-blue-600">Gayatri</span>
  <span className="text-slate-900 dark:text-white"></span>
</h1>

</Link>



{/* Desktop Menu */}

<ul className="hidden lg:flex gap-8 font-medium
text-slate-700 dark:text-gray-300">

{
navLinks.map((item)=>(
<li key={item.to}>

<Link
  to={item.to}
  smooth={true}
  duration={500}
  offset={-70}
  spy={true}
activeClass="!text-blue-600 dark:!text-blue-400 font-semibold"
className="
cursor-pointer
text-slate-700
dark:text-gray-300
hover:text-blue-600
dark:hover:text-blue-400
transition-all
duration-300
relative
after:absolute
after:left-0
after:-bottom-2
after:h-[2px]
after:w-0
after:bg-blue-600
hover:after:w-full
after:transition-all
"
>
  {item.name}
</Link>



</li>
))
}

</ul>





<div className="flex items-center gap-4">


{/* Theme */}

<button
  onClick={() => setDarkMode(!darkMode)}
  className="p-2 rounded-full
  border border-gray-300 dark:border-slate-700
  bg-white dark:bg-slate-900
  text-slate-700 dark:text-white
  hover:bg-blue-600 hover:text-white
  transition"
>
  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
</button>




{/* Resume */}
<a
  href={personalInfo.resume}
  target="_blank"
  rel="noreferrer"
className="
hidden
lg:block
bg-gradient-to-r
from-blue-600
to-cyan-500
text-white
px-5
py-2
rounded-lg
shadow-lg
shadow-blue-500/30
hover:scale-105
hover:shadow-blue-500/50
transition-all
duration-300
"
>
  Resume
</a>




{/* Hamburger */}

<button
  type="button"
  className="lg:hidden
  text-slate-900
  dark:text-white
  text-3xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>


</div>


</nav>





{/* Mobile Menu */}


<div
  className={`lg:hidden fixed top-[72px] left-0 w-full z-[998]
  bg-white dark:bg-slate-900
  border-t border-gray-200 dark:border-slate-800
  transition-all duration-300
  ${menuOpen ? "block" : "hidden"}`}
>


<ul className="flex flex-col items-center gap-7 py-10
text-slate-700 dark:text-white">


{
navLinks.map((item)=>(

<li key={item.to}>

<Link
  to={item.to}
  smooth={true}
  duration={500}
  offset={-70}
  onClick={() => setMenuOpen(false)}
className="
cursor-pointer
text-lg
text-slate-700
dark:text-white
hover:text-blue-600
dark:hover:text-blue-400
transition
"
>
  {item.name}
</Link>


</li>

))
}



<li>

<a
href={personalInfo.resume}
target="_blank"
rel="noreferrer"

className="bg-blue-600 px-6 py-2 rounded-lg"

>

Resume

</a>

</li>



</ul>


</div>



</header>

  );
}


export default Navbar;