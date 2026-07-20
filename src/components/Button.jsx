function Button({
  children,
  href,
  variant = "primary",
}) {

  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-lg";

  const primary =
    "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/40";

const outline =
  "border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-blue-500/40 dark:bg-transparent dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white";

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