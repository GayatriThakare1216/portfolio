function Button({
  children,
  href,
  variant = "primary",
}) {

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20";

const primary =
  "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-blue-500/40 hover:scale-105";

const outline =
  "border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-blue-500/40 hover:scale-105 dark:bg-transparent dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${
          variant === "outline"
            ? outline
            : primary
        }`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${base} ${
        variant === "outline"
          ? outline
          : primary
      }`}
    >
      {children}
    </button>
  );
}

export default Button;