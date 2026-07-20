import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

return (
  <button
    onClick={scrollTop}
    aria-label="Back to Top"
    className="
    fixed
    bottom-8
    right-8
    z-50
    w-14
    h-14
    rounded-full
    flex
    items-center
    justify-center
    bg-gradient-to-r
    from-blue-600
    to-cyan-500
    text-white
    shadow-xl
    shadow-blue-500/30
    hover:scale-110
    hover:shadow-blue-500/50
    active:scale-95
    transition-all
    duration-300
    animate-pulse
    "
  >
    <FaArrowUp size={18} />
  </button>
);
}

export default BackToTop;