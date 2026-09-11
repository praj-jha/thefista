export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export interface SeoData {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  imageAlt?: string;
  ogType?: 'website' | 'article';
  robots?: string;
  keywords?: string;
  // Article-specific
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  // Structured data blocks (JSON-LD)
  jsonLd?: Record<string, unknown>[];
}

// Mutable collector used during server-side render to capture head data.
export interface SeoCollector {
  data: SeoData | null;
}
