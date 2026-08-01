import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p
        className="
        inline-block
        px-4
        py-1
        rounded-full
        bg-blue-100
        dark:bg-blue-500/10
        text-blue-600
        dark:text-blue-400
        text-sm
        font-semibold
        tracking-widest
        uppercase
        mb-4
        "
      >
        {subtitle}
      </p>

      <h2
        className="
        text-4xl
        md:text-5xl
        font-extrabold
        text-slate-900
        dark:text-white
        "
      >
        {title}
      </h2>

      <div
        className="
        w-24
        h-1
        bg-gradient-to-r
        from-blue-600
        to-cyan-400
        rounded-full
        mx-auto
        mt-5
        "
      />
    </motion.div>
  );
}

export default SectionTitle;