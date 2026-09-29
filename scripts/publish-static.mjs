import { cp, readdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Keep GitHub Pages root output in sync with the Vite build.
const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const allowed = new Set(['assets', 'images', 'index.html', 'favicon.svg', 'prism.svg', 'paper-grain.svg']);
const entries = await readdir(dist);
for (const name of entries) {
  if (!allowed.has(name)) throw new Error(`Unexpected build output: ${name}`);
}
for (const name of entries) {
  const target = path.join(root, name);
  await rm(target, { recursive: true, force: true });
  await cp(path.join(dist, name), target, { recursive: true });
}
await writeFile(path.join(root, '.nojekyll'), '');
console.log('Static homepage copied to the repository root for GitHub Pages.');
