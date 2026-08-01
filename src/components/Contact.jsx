import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

import SectionTitle from "./SectionTitle";
import toast from "react-hot-toast";

import {
  FaEnvelope,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import personalInfo from "../data/personalInfo";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_j4jshsi",
        "template_oip1lbv",
        form.current,
        "ZGZSldMtjU-GHTNIY"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        toast.error(error.text || "Failed to send message");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
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
      dark:text-white"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Get In Touch"
          title="Contact Me"
        />

        <div className="grid lg:grid-cols-2 gap-14 mt-14">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div>
              <span
  className="
  inline-flex
  items-center
  gap-2
  px-4
  py-2
  rounded-full
  bg-green-100
  dark:bg-green-500/10
  text-green-700
  dark:text-green-400
  text-sm
  font-medium
  mb-5
  "
>
🟢 Available for Frontend Developer Roles
</span>

              <h3 className="text-4xl font-bold mb-4">
                Let's Work Together 🚀
              </h3>

              <p className="leading-8 text-slate-600 dark:text-slate-300">
                I'm currently looking for Frontend Developer opportunities.
                Feel free to contact me for internships, freelance work or
                full-time roles.
              </p>

            </div>

            <div className="space-y-5">

              <div
                className="
                flex items-center gap-4
                p-4 rounded-xl
                bg-white
                dark:bg-slate-900
                border border-slate-200
                dark:border-slate-700
                shadow-md"
              >
                <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
<a
  href={`mailto:${personalInfo.email}`}
  className="text-slate-700 dark:text-slate-200 hover:text-blue-600 transition"
>
  {personalInfo.email}
</a>
              </div>

              <div
                className="
                flex items-center gap-4
                p-4 rounded-xl
                bg-white
                dark:bg-slate-900
                border border-slate-200
                dark:border-slate-700
                shadow-md"
              >
                <FaLocationDot className="text-blue-600 dark:text-blue-400 text-xl" />
                <span className="text-slate-700 dark:text-slate-200">
                  {personalInfo.location}
                </span>
              </div>

            </div>

            <div className="flex gap-5 text-2xl">

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12
                flex items-center justify-center
                rounded-full
                bg-white
                dark:bg-slate-900
                border border-slate-200
                dark:border-slate-700
                hover:bg-blue-600
                hover:text-white
                transition-all
                duration-300"
              >
                <FaGithub />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12
                flex items-center justify-center
                rounded-full
                bg-white
                dark:bg-slate-900
                border border-slate-200
                dark:border-slate-700
                hover:bg-blue-600
                hover:text-white
                transition-all
                duration-300"
              >
                <FaLinkedin />
              </a>

              <a
  href={personalInfo.resume}
  target="_blank"
  rel="noreferrer"
  className="
  w-12 h-12
  flex items-center justify-center
  rounded-full
  bg-white
  dark:bg-slate-900
  border border-slate-200
  dark:border-slate-700
  hover:bg-blue-600
  hover:text-white
  transition-all
  duration-300
  "
>
  <FaFileAlt />
</a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
            bg-white
            dark:bg-slate-900
            p-8
            rounded-3xl
            border border-slate-200
            dark:border-slate-700
            shadow-xl
            space-y-5"
          >

            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="
              w-full
              p-4
              rounded-xl
              border border-slate-300
              dark:border-slate-700
              bg-slate-50
              dark:bg-slate-800
              text-slate-900
              dark:text-white
              outline-none
              focus:border-blue-500"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className="
              w-full
              p-4
              rounded-xl
              border border-slate-300
              dark:border-slate-700
              bg-slate-50
              dark:bg-slate-800
              text-slate-900
              dark:text-white
              outline-none
              focus:border-blue-500"
            />

            <textarea
              name="message"
              rows="6"
              required
              placeholder="Tell me about your project or opportunity..."
              className="
              w-full
              p-4
              rounded-xl
              border border-slate-300
              dark:border-slate-700
              bg-slate-50
              dark:bg-slate-800
              text-slate-900
              dark:text-white
              outline-none
              focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-4
              rounded-xl
              font-semibold
              transition
              disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;