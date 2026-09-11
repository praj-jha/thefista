import type { Article, CategoryInfo } from '../types';
import { SITE, absoluteImage, absoluteUrl, toISODate } from './config';
import type { SeoData } from './types';

// ---- Reusable JSON-LD nodes ---------------------------------------------

function organizationNode() {
  return {
    '@type': 'NewsMediaOrganization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: {
      '@type': 'ImageObject',
      url: SITE.logo,
    },
    sameAs: [
      'https://twitter.com/thefista',
      'https://www.facebook.com/thefista',
      'https://www.instagram.com/thefista',
    ],
  };
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: `${SITE.url}/`,
    name: SITE.name,
    description: SITE.description,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: SITE.language,
  };
}

function breadcrumbNode(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ---- Page builders -------------------------------------------------------

export function buildHomeSeo(): SeoData {
  const title = `${SITE.name} — India's Trusted News Platform`;
  return {
    title,
    description: SITE.description,
    canonical: absoluteUrl('/'),
    image: SITE.defaultImage,
    ogType: 'website',
    keywords:
      'India news, cricket news, politics, business, health, Bollywood, education, technology, breaking news India',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@graph': [organizationNode(), websiteNode()],
      },
    ],
  };
}

export function buildCategorySeo(category: CategoryInfo, articles: Article[]): SeoData {
  const url = absoluteUrl(`/category/${category.slug}`);
  const title = `${category.name} News — Latest ${category.name} Updates | ${SITE.name}`;
  const description = `Latest ${category.name.toLowerCase()} news, analysis and updates from India and around the world, curated by ${SITE.name}.`;

  return {
    title,
    description,
    canonical: url,
    image: absoluteImage(articles[0]?.imageUrl),
    ogType: 'website',
    keywords: `${category.name} news, India ${category.name.toLowerCase()}, latest ${category.name.toLowerCase()}`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${url}#collection`,
        url,
        name: title,
        description,
        isPartOf: { '@id': `${SITE.url}/#website` },
        publisher: { '@id': `${SITE.url}/#organization` },
        inLanguage: SITE.language,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: articles.slice(0, 15).map((a, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: absoluteUrl(`/article/${a.id}`),
            name: a.title,
          })),
        },
      },
      {
        '@context': 'https://schema.org',
        ...breadcrumbNode([
          { name: 'Home', url: `${SITE.url}/` },
          { name: category.name, url },
        ]),
      },
    ],
  };
}

export function buildArticleSeo(article: Article, category?: CategoryInfo): SeoData {
  const url = absoluteUrl(`/article/${article.id}`);
  const image = absoluteImage(article.imageUrl);
  const published = toISODate(article.publishedAt);
  const sectionName = category?.name || article.category;

  const newsArticle = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.excerpt,
    image: [image],
    datePublished: published,
    dateModified: published,
    articleSection: sectionName,
    inLanguage: SITE.language,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: SITE.logo },
    },
    isAccessibleForFree: true,
  };

  return {
    title: `${article.title} | ${SITE.name}`,
    description: article.excerpt,
    canonical: url,
    image,
    imageAlt: article.title,
    ogType: 'article',
    publishedTime: published,
    modifiedTime: published,
    author: article.author,
    section: sectionName,
    keywords: `${sectionName}, ${article.title}, India news, ${SITE.name}`,
    jsonLd: [
      newsArticle,
      {
        '@context': 'https://schema.org',
        ...breadcrumbNode([
          { name: 'Home', url: `${SITE.url}/` },
          { name: sectionName, url: absoluteUrl(`/category/${category?.slug || article.category}`) },
          { name: article.title, url },
        ]),
      },
    ],
  };
}

export function buildNotFoundSeo(path: string): SeoData {
  return {
    title: `Page Not Found | ${SITE.name}`,
    description: 'The page you are looking for could not be found.',
    canonical: absoluteUrl(path),
    ogType: 'website',
    robots: 'noindex, follow',
  };
}
