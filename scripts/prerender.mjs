// Prerender every route to a static HTML file and generate sitemaps.
// Runs after `vite build` (client) and `vite build --ssr` (server).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-server', 'entry-server.js');
const SITE_URL = 'https://thefista.in';

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const { render, getRoutes, getSitemapEntries, getNewsEntries } = await import(pathToFileURL(serverEntry).href);

function isoDate(display) {
  // Parse at midday to avoid the date slipping across a timezone boundary.
  const d = new Date(`${display} 12:00:00`);
  return isNaN(d.getTime()) ? new Date().toISOString().slice(0, 10) : d.toISOString().slice(0, 10);
}

// ---- 1. Prerender routes -------------------------------------------------
const routes = getRoutes();
let count = 0;

for (const route of routes) {
  const { html, head } = render(route);

  const page = template
    .replace(
      /<!--seo-start-->[\s\S]*?<!--seo-end-->/,
      `<!--seo-start-->\n    ${head}\n    <!--seo-end-->`
    )
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route, 'index.html');

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, page);
  count++;
}

// ---- 2. sitemap.xml ------------------------------------------------------
const urls = getSitemapEntries()
  .map(
    (e) => `  <url>
    <loc>${SITE_URL}${e.path === '/' ? '/' : e.path}</loc>
    <lastmod>${isoDate(e.lastmod)}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n');

fs.writeFileSync(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
);

// ---- 3. news-sitemap.xml (articles published within the last 2 days) -----
const now = Date.now();
const TWO_DAYS = 1000 * 60 * 60 * 48;
const newsItems = getNewsEntries()
  .filter((a) => {
    const d = new Date(`${a.publishedAt} 12:00:00`).getTime();
    return !isNaN(d) && now - d <= TWO_DAYS;
  })
  .map(
    (a) => `  <url>
    <loc>${SITE_URL}${a.path}</loc>
    <news:news>
      <news:publication>
        <news:name>The Fista</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(`${a.publishedAt} 12:00:00`).toISOString()}</news:publication_date>
      <news:title>${a.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</news:title>
    </news:news>
  </url>`
  )
  .join('\n');

fs.writeFileSync(
  path.join(distDir, 'news-sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${newsItems}
</urlset>
`
);

console.log(`✓ Prerendered ${count} routes`);
console.log(`✓ sitemap.xml (${getSitemapEntries().length} urls) + news-sitemap.xml`);
