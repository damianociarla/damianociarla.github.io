import { readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from '../dist-ssr/entry-server.js';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const pages = [
  { file: 'index.html', language: 'it' },
  { file: 'en.html', language: 'en' },
];

for (const page of pages) {
  const outputPath = resolve(projectRoot, 'dist', page.file);
  const html = await readFile(outputPath, 'utf8');
  const rendered = `<div id="root">${render(page.language)}</div>`;

  if (!html.includes('<div id="root"></div>')) {
    throw new Error(`Unable to find the root placeholder in ${page.file}`);
  }

  await writeFile(outputPath, html.replace('<div id="root"></div>', rendered));
}

await rm(resolve(projectRoot, 'dist-ssr'), { recursive: true, force: true });
