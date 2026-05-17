/**
 * Design photos: drop images into public/images/<folder>/ then run npm run dev (or npm run images).
 * Folders: gates | bathroom | autobody | others
 */
import imageManifest from '../generated/imageManifest.json';
import { imageUrl, HERO_IMAGE, PLACEHOLDER_IMAGE } from '../utils/images';

const categories = [
  {
    slug: 'gates',
    name: 'Main Gates',
    tagline: 'Grand entrances built to last',
    folder: 'gates',
    accent: 'from-slate-700 to-slate-900',
  },
  {
    slug: 'bathroom',
    name: 'Bathroom Doors',
    tagline: 'Sleek, moisture-resistant finishes',
    folder: 'bathroom',
    accent: 'from-teal-700 to-cyan-800',
  },
  {
    slug: 'autobody',
    name: 'Auto Body Works',
    tagline: 'Precision metalwork for vehicles',
    folder: 'autobody',
    accent: 'from-amber-700 to-orange-800',
  },
  {
    slug: 'others',
    name: 'Other Designs',
    tagline: 'Railings, grills & bespoke metalwork',
    folder: 'others',
    accent: 'from-violet-700 to-purple-900',
  },
];

/** Filenames in this category folder (from auto-generated manifest). */
export function getCategoryFilenames(category) {
  return imageManifest[category.folder] ?? [];
}

/** Full public URLs for gallery — safe for Netlify (lowercase paths). */
export function getCategoryImagePaths(category) {
  return getCategoryFilenames(category).map((file) => imageUrl(category.folder, file));
}

export function getCategoryCover(category) {
  const files = getCategoryFilenames(category);
  if (files.length > 0) return imageUrl(category.folder, files[0]);
  return PLACEHOLDER_IMAGE;
}

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

export { categories, HERO_IMAGE, imageManifest };
