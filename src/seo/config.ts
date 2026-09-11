// Central SEO configuration for The Fista.
export const SITE = {
  name: 'The Fista',
  url: 'https://thefista.in',
  // Trailing-slash-free base. All canonical URLs are built from this.
  locale: 'en_IN',
  language: 'en',
  twitter: '@thefista',
  publisher: 'The Fista Media Group',
  logo: 'https://thefista.in/1.png',
  defaultImage: 'https://thefista.in/1.png',
  description:
    "The Fista is India's trusted news platform — credible, in-depth coverage of cricket, politics, business, health, Bollywood, education and technology.",
  foundingLocation: 'New Delhi, India',
} as const;

// Absolute URL helper — always produces a clean canonical from a path.
export function absoluteUrl(path = '/'): string {
  if (path.startsWith('http')) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${clean === '/' ? '/' : clean.replace(/\/$/, '')}`;
}

// Resolve an image path (local like /prj.png or already absolute) to absolute.
export function absoluteImage(src?: string): string {
  if (!src) return SITE.defaultImage;
  if (src.startsWith('http')) return src;
  return `${SITE.url}${src.startsWith('/') ? src : `/${src}`}`;
}

// Convert a display date ("Sep 11, 2026") into an ISO-8601 timestamp (IST).
export function toISODate(display: string): string {
  const parsed = new Date(`${display} 09:00:00 GMT+0530`);
  if (isNaN(parsed.getTime())) return new Date().toISOString();
  return parsed.toISOString();
}
