import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { SeoCollectorContext } from './seo/Seo';
import { renderHeadToString } from './seo/head';
import { buildNotFoundSeo } from './seo/builders';
import type { SeoCollector } from './seo/types';
import { articles, categories } from './data/articles';

export interface RenderResult {
  html: string;
  head: string;
}

// Render a single route to an HTML fragment plus its serialised <head>.
export function render(url: string): RenderResult {
  const collector: SeoCollector = { data: null };

  const html = renderToString(
    <StrictMode>
      <SeoCollectorContext.Provider value={collector}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoCollectorContext.Provider>
    </StrictMode>
  );

  const seo = collector.data ?? buildNotFoundSeo(url);
  return { html, head: renderHeadToString(seo) };
}

// Every route that should be prerendered to a static HTML file.
export function getRoutes(): string[] {
  return [
    '/',
    ...categories.map((c) => `/category/${c.slug}`),
    ...articles.map((a) => `/article/${a.id}`),
  ];
}

// Data the sitemap generator needs (path + last-modified display date).
export function getSitemapEntries(): { path: string; lastmod: string; priority: number; changefreq: string }[] {
  return [
    { path: '/', lastmod: articles[0]?.publishedAt ?? '', priority: 1.0, changefreq: 'hourly' },
    ...categories.map((c) => ({
      path: `/category/${c.slug}`,
      lastmod: articles.find((a) => a.category === c.id)?.publishedAt ?? '',
      priority: 0.8,
      changefreq: 'daily',
    })),
    ...articles.map((a) => ({
      path: `/article/${a.id}`,
      lastmod: a.publishedAt,
      priority: 0.7,
      changefreq: 'weekly',
    })),
  ];
}
