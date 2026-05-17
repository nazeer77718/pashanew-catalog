import { useEffect, useCallback } from 'react';
import OptimizedImage from './OptimizedImage';

const Lightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(1);
      if (e.key === 'ArrowLeft') onNavigate(-1);
    },
    [onClose, onNavigate]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const src = images[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Design preview"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
        aria-label="Close"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(-1);
          }}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20 sm:left-6"
          aria-label="Previous image"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(1);
          }}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-6"
          aria-label="Next image"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div
        className="relative max-h-[90vh] max-w-5xl w-full animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <OptimizedImage
          src={src}
          alt={`Design ${currentIndex + 1} of ${images.length}`}
          loading="eager"
          className="rounded-lg"
          imgClassName="mx-auto max-h-[85vh] w-full object-contain"
        />
        <p className="mt-3 text-center text-sm text-slate-400">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default Lightbox;

