import { SITE } from './config';
import type { MetaTag, SeoData } from './types';

// Build the flat list of <meta> descriptors for a page. Shared by the client
// (imperative DOM application) and the server (HTML string generation) so the
// prerendered head and the hydrated head stay identical.
export function buildMetaTags(data: SeoData): MetaTag[] {
  const image = data.image || SITE.defaultImage;
  const ogType = data.ogType || 'website';

  const tags: MetaTag[] = [
    { name: 'description', content: data.description },
    { name: 'robots', content: data.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

    // Open Graph
    { property: 'og:type', content: ogType },
    { property: 'og:site_name', content: SITE.name },
    { property: 'og:locale', content: SITE.locale },
    { property: 'og:title', content: data.title },
    { property: 'og:description', content: data.description },
    { property: 'og:url', content: data.canonical },
    { property: 'og:image', content: image },
    { property: 'og:image:alt', content: data.imageAlt || data.title },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: SITE.twitter },
    { name: 'twitter:title', content: data.title },
    { name: 'twitter:description', content: data.description },
    { name: 'twitter:image', content: image },
  ];

  if (data.keywords) tags.push({ name: 'keywords', content: data.keywords });

  if (ogType === 'article') {
    if (data.publishedTime) tags.push({ property: 'article:published_time', content: data.publishedTime });
    tags.push({ property: 'article:modified_time', content: data.modifiedTime || data.publishedTime || '' });
    if (data.author) tags.push({ property: 'article:author', content: data.author });
    if (data.section) tags.push({ property: 'article:section', content: data.section });
    tags.push({ property: 'article:publisher', content: SITE.url });
  }

  return tags.filter((t) => t.content);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Serialise SeoData into a head-fragment HTML string for prerendering.
export function renderHeadToString(data: SeoData): string {
  const parts: string[] = [];
  parts.push(`<title>${escapeHtml(data.title)}</title>`);
  parts.push(`<link rel="canonical" href="${escapeHtml(data.canonical)}" />`);

  for (const tag of buildMetaTags(data)) {
    const attr = tag.name ? `name="${escapeHtml(tag.name)}"` : `property="${escapeHtml(tag.property!)}"`;
    parts.push(`<meta ${attr} content="${escapeHtml(tag.content)}" />`);
  }

  for (const block of data.jsonLd || []) {
    // JSON is safe inside a script tag as long as we neutralise closing tags.
    const json = JSON.stringify(block).replace(/</g, '\\u003c');
    parts.push(`<script type="application/ld+json">${json}</script>`);
  }

  return parts.join('\n    ');
}
