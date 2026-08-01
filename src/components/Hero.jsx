import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet-async";

import SocialLinks from "./SocialLinks";
import Button from "./Button";
import personalInfo from "../data/personalInfo";
import profile from "../assets/images/profile.png";


function Hero() {
  return (
    <>
      <Helmet>
       <title>
            Gayatri Thakare | Frontend Developer | React.js & Next.js Developer
       </title>

        <meta
          name="description"
         content="Gayatri Thakare is a Frontend Developer specializing in React.js, Next.js, JavaScript, Tailwind CSS, responsive web applications and modern UI development."
        />

        <meta
          name="keywords"
          content="Frontend Developer, React.js Developer, Next.js Developer, JavaScript, Tailwind CSS, React, Responsive Web Design, Web Developer Portfolio, Node.js, PostgreSQL"
        />

        <meta
          name="author"
          content="Gayatri Thakare"
        />
      </Helmet>

      <section
        id="home"
        className="relative overflow-hidden min-h-screen flex items-center pt-16 md:pt-20
        bg-gradient-to-br from-white via-slate-50 to-blue-50
        dark:from-slate-950 dark:via-slate-900 dark:to-black
        text-slate-900 dark:text-white transition-colors duration-500"
      >

        


        {/* Background Glow */}

<div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none z-[1]"></div>

<div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none z-[1]"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">

          {/* Left */}

          <motion.div
             className="w-full max-w-2xl"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}

            <span
              className="
              inline-flex items-center gap-2
              px-5 py-2 rounded-full text-sm font-medium mb-6
              bg-blue-100 text-blue-700 border border-blue-300
              dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/40"
            >
              🟢 Available for Frontend Developer Roles
            </span>

            <p className="text-blue-600 dark:text-blue-400 text-lg font-medium">
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-3 leading-tight">
              {personalInfo.name}
            </h1>

            <h2 className="text-3xl mt-5 font-semibold text-blue-600 dark:text-blue-400">

              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React.js Developer",
                  2000,
                  "Next.js Developer",
                  2000,
                   "JavaScript Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />

            </h2>

            <p
className="
mt-6 leading-8 text-lg
max-w-2xl
text-slate-600
dark:text-slate-300"
            >
              {personalInfo.heroDescription}
            </p>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-5 mt-12 w-full max-w-lg">

              <div
                className="
                p-5 rounded-2xl text-center
                bg-white shadow-md border  hover:-translate-y-2
                 hover:shadow-xl
                  transition-all
                   duration-300
                dark:bg-slate-900 dark:border-slate-800"
              >
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  4+
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Projects
                </p>
              </div>

              <div
                className="
                p-5 rounded-2xl text-center
                bg-white shadow-md border hover:-translate-y-2
                 hover:shadow-xl
                  transition-all
                   duration-300
                dark:bg-slate-900 dark:border-slate-800"
              >
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  1
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Internship
                </p>
              </div>

              <div
                className="
                p-5 rounded-2xl text-center
                bg-white shadow-md border hover:-translate-y-2
                 hover:shadow-xl
                  transition-all
                   duration-300
                dark:bg-slate-900 dark:border-slate-800"
              >
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  10+
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Technologies
                </p>
              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

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
                 className="border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white dark:bg-transparent dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
              >
                Download Resume
              </Button>

            </div>

            {/* Social */}

            <div className="mt-10">
              <SocialLinks />
            </div>

          </motion.div>

          {/* Right */}

<motion.div
className="flex justify-center lg:justify-end"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-blue-500 blur-[100px] opacity-40"></div>

              <div
                className="
                relative
                w-80 h-80 md:w-96 md:h-96
                rounded-full
                overflow-hidden
                border-4 border-white
                dark:border-blue-500
                shadow-[0_20px_60px_rgba(37,99,235,0.30)]
                hover:scale-[1.03]
                transition-all duration-500 ease-out"
              >

                <img
                  src={profile}
                  alt={personalInfo.name}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </motion.div>

        </div>

        {/* Scroll */}

        <div className="hidden md:flex justify-center absolute bottom-8 left-0 right-0">

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer animate-bounce text-slate-500 dark:text-slate-400"
          >
            Explore More ↓
          </Link>

        </div>

      </section>
    </>
  );
}

export default Hero;