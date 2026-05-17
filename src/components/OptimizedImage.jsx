import { useState } from 'react';
import { PLACEHOLDER_IMAGE } from '../utils/images';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  loading = 'lazy',
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const displaySrc = error ? PLACEHOLDER_IMAGE : src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-200 to-slate-300"
          aria-hidden
        />
      )}
      <img
        src={displaySrc}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        className={`${imgClassName} transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default OptimizedImage;

