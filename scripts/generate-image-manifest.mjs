/**
 * Scans public/images/<category>/ and writes src/generated/imageManifest.json.
 * Run automatically before dev/build — add photos to folders, then restart dev server.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const imagesRoot = path.join(root, 'public', 'images');
const outFile = path.join(root, 'src', 'generated', 'imageManifest.json');

const CATEGORY_FOLDERS = ['gates', 'bathroom', 'autobody', 'others'];
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

const manifest = {};

for (const folder of CATEGORY_FOLDERS) {
  const dir = path.join(imagesRoot, folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    manifest[folder] = [];
    continue;
  }

  const files = fs
    .readdirSync(dir)
    .filter((name) => IMAGE_EXT.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true }));

  manifest[folder] = files;
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, `${JSON.stringify(manifest, null, 2)}\n`);

const total = Object.values(manifest).reduce((n, arr) => n + arr.length, 0);
console.log(`✓ imageManifest.json — ${total} image(s) across ${CATEGORY_FOLDERS.length} folders`);
