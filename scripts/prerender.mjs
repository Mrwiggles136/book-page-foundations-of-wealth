// After "npm run build": render the page to plain HTML and put it inside build/index.html,
// so search engines and link previews see the full text without running JavaScript.
// React then "hydrates" that HTML in the browser (see src/index.js).
import { build } from 'esbuild';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = path.join(root, 'build', '.prerender.cjs');
const pkg = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'));
const publicUrl = new URL(pkg.homepage).pathname.replace(/\/$/, '');

await build({
  stdin: {
    contents: `import { renderToString } from 'react-dom/server';
               import App from './src/App';
               export default () => renderToString(<App />);`,
    resolveDir: root,
    loader: 'jsx',
  },
  bundle: true,
  platform: 'node',
  format: 'cjs',
  outfile: out,
  jsx: 'automatic',
  loader: { '.js': 'jsx', '.css': 'empty' },
  define: {
    'process.env.PUBLIC_URL': JSON.stringify(publicUrl),
    'process.env.REACT_APP_DOWNLOAD_URL': JSON.stringify(process.env.REACT_APP_DOWNLOAD_URL || ''),
    'process.env.NODE_ENV': '"production"',
  },
  logLevel: 'warning',
});

const html = createRequire(import.meta.url)(out).default();
rmSync(out);
const file = path.join(root, 'build', 'index.html');
const page = readFileSync(file, 'utf8');
if (!page.includes('<div id="root"></div>')) throw new Error('prerender: <div id="root"></div> not found');
writeFileSync(file, page.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
console.log(`Prerendered ${html.length} characters of HTML into build/index.html`);
