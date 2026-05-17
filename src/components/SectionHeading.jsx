const SectionHeading = ({ label, title, subtitle, dark = false }) => (
  <div className="mb-12 text-center animate-fade-up">
    {label && (
      <p
        className={`mb-2 text-sm font-semibold uppercase tracking-widest ${
          dark ? 'text-amber-400' : 'text-amber-600'
        }`}
      >
        {label}
      </p>
    )}
    <h2
      className={`font-display text-3xl font-bold sm:text-4xl ${
        dark ? 'text-white' : 'text-slate-900'
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`mx-auto mt-3 max-w-2xl ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
