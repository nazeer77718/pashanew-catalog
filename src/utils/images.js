/**
 * Build a Netlify-safe public URL for images in /public/images/.
 * Paths are always lowercase to avoid case-sensitivity issues on Linux hosts.
 */
export function imageUrl(folder, filename) {
  const cleanFolder = folder.toLowerCase().replace(/^\/+|\/+$/g, '');
  const cleanFile = filename.replace(/^\/+/, '');
  const segments = ['images', cleanFolder, cleanFile].filter(Boolean);
  return `/${segments.map((s) => encodeURIComponent(s)).join('/')}`.replace(
    /%2F/g,
    '/'
  );
}

export const HERO_IMAGE = '/images/hero.jpg';

export const PLACEHOLDER_IMAGE =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <rect fill="#e2e8f0" width="400" height="300"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#64748b" font-family="system-ui,sans-serif" font-size="16">Image coming soon</text>
    </svg>`
  );
