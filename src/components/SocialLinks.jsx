import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import socialLinks from "../data/socialLinks";

function SocialLinks() {
  return (
    <div className="flex gap-5 text-2xl mt-8">

      <a
        href={socialLinks.github}
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-400 transition"
      >
        <FaGithub />
      </a>

      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-400 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href={socialLinks.email}
        className="hover:text-blue-400 transition"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}

export default SocialLinks;