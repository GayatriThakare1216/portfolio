import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl font-bold text-blue-500"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
          >
            Gayatri<span className="text-white">.</span>
          </motion.h1>

          <motion.p
            className="text-gray-400 mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Frontend Developer
          </motion.p>

          <motion.div
            className="mt-8 h-1 bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;