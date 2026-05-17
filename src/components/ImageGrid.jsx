import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
import OptimizedImage from './OptimizedImage';
import Lightbox from './Lightbox';

const ImageGrid = ({ images, categoryName, folder }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigate = useCallback(
    (direction) => {
      setLightboxIndex((prev) => {
        const next = prev + direction;
        if (next < 0 || next >= images.length) return prev;
        return next;
      });
    },
    [images.length]
  );

  if (images.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/#categories"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 transition hover:text-amber-900"
        >
          ← Back to Categories
        </Link>
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
          <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">{categoryName}</h1>
          <p className="mx-auto mt-3 max-w-md text-slate-600 leading-relaxed">
            No photos yet. Add images to{' '}
            <code className="rounded bg-slate-100 px-2 py-0.5 text-sm text-amber-800">
              public/images/{folder}/
            </code>{' '}
            then run <code className="rounded bg-slate-100 px-2 py-0.5 text-sm">npm run images</code> and refresh.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-10 animate-fade-up">
        <Link
          to="/#categories"
          className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 transition hover:text-amber-900"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Categories
        </Link>
        <h1 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">{categoryName}</h1>
        <p className="mt-2 text-slate-600">
          {images.length} design{images.length !== 1 ? 's' : ''} — tap any image to view fullscreen
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 text-left shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 animate-fade-up sm:aspect-square"
            style={{ animationDelay: `${Math.min(index * 50, 400)}ms` }}
            aria-label={`View design ${index + 1}`}
          >
            <OptimizedImage
              src={src}
              alt={`${categoryName} design ${index + 1}`}
              className="h-full w-full"
              imgClassName="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition group-hover:bg-slate-900/40">
              <span className="translate-y-2 text-sm font-semibold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                View fullscreen
              </span>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigate}
        />
      )}
    </div>
  );
};

export default ImageGrid;

