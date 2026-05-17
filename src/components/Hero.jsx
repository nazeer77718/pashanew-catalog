import { HERO_IMAGE } from '../utils/images';

const Hero = () => {
  const scrollToCategories = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center animate-fade-up">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
          Metal Fabrication &amp; Design
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Pasha Engineering Works
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl">
          Custom gates, doors, auto body work, and bespoke steel designs — crafted with precision for homes and businesses.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={scrollToCategories}
            className="rounded-full bg-amber-500 px-8 py-3.5 text-base font-semibold text-slate-900 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-amber-400/40"
          >
            View Designs
          </button>
          <a
            href="#contact"
            className="rounded-full border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

