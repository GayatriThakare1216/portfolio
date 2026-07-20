function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">

      <p className="text-blue-400 uppercase tracking-widest text-sm">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-2">
        {title}
      </h2>

    </div>
  );
}

export default SectionTitle;