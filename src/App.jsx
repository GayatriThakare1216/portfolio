import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "../components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";



function App() {

  return (
    <>

      {/* SEO Meta Data */}

      <Helmet>

        <title>
          Gayatri Thakare | Frontend Developer
        </title>


        <meta
          name="description"
          content="
          Gayatri Thakare is a Frontend Developer specializing in React.js,
          Next.js, JavaScript and Tailwind CSS.
          Explore modern web applications, projects and experience.
          "
        />


        <meta
          name="keywords"
          content="
          Frontend Developer,
          React Developer,
          Next.js Developer,
          JavaScript Developer,
          Tailwind CSS,
          Web Developer Portfolio
          "
        />


        <meta
          name="author"
          content="Gayatri Thakare"
        />


        {/* Open Graph - LinkedIn / Social Share */}

        <meta
          property="og:title"
          content="Gayatri Thakare | Frontend Developer"
        />


        <meta
          property="og:description"
          content="
          Frontend Developer portfolio showcasing React.js,
          Next.js and modern web applications.
          "
        />


        <meta
          property="og:type"
          content="website"
        />


        <meta
          property="og:image"
          content="/profile.png"
        />


      </Helmet>



      <ScrollProgress />

      <Loader />

      <CursorGlow />


      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Certificates />

      <Experience />

      <Education />

      <Contact />

      <Footer />


      <BackToTop />



      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1e293b",
            color: "#fff",
            border: "1px solid #3b82f6",
          },
        }}
      />


    </>
  );
}


export default App;