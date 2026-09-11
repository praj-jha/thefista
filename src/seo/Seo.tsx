import { createContext, useContext, useEffect } from 'react';
import type { SeoCollector, SeoData } from './types';
import { buildMetaTags } from './head';

// During SSR the matched page's <Seo> writes into this collector so the
// prerender step can lift the tags into <head>. On the client it is absent.
export const SeoCollectorContext = createContext<SeoCollector | null>(null);

const MANAGED = 'data-fista-seo';

function applyToDocument(data: SeoData) {
  document.title = data.title;

  // Remove previously-managed tags before writing the new set.
  document
    .querySelectorAll(`[${MANAGED}]`)
    .forEach((el) => el.parentElement?.removeChild(el));

  const head = document.head;

  // Canonical
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = data.canonical;
  canonical.setAttribute(MANAGED, '');
  head.appendChild(canonical);

  // Meta tags
  for (const tag of buildMetaTags(data)) {
    const meta = document.createElement('meta');
    if (tag.name) meta.setAttribute('name', tag.name);
    if (tag.property) meta.setAttribute('property', tag.property);
    meta.setAttribute('content', tag.content);
    meta.setAttribute(MANAGED, '');
    head.appendChild(meta);
  }

  // JSON-LD
  for (const block of data.jsonLd || []) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(block);
    script.setAttribute(MANAGED, '');
    head.appendChild(script);
  }
}

// Declarative SEO for a page. Renders nothing; manages document head.
export default function Seo(data: SeoData) {
  const collector = useContext(SeoCollectorContext);

  // Server render: capture synchronously so prerender can read it.
  if (collector) collector.data = data;

  useEffect(() => {
    applyToDocument(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.canonical, data.title, data.description]);

  return null;
}
