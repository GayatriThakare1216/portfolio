import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-[99999] origin-left"
      style={{
        scaleX: scrollYProgress,
        width: "100%",
      }}
    />
  );
}

export default ScrollProgress;