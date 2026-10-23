import type { Article } from '../types';

// Self-hosted article images live in public/images/articles as <id>.jpg
// (16:9, up to 1600px wide) with -800 (16:9), -4x3 and -1x1 renditions.
const LOCAL_IMAGE = /^(\/images\/articles\/.+)\.jpg$/;

export type ImageVariant = '800' | '4x3' | '1x1';

export function imageVariant(article: Article, variant: ImageVariant): string | undefined {
  const match = article.imageUrl.match(LOCAL_IMAGE);
  return match ? `${match[1]}-${variant}.jpg` : undefined;
}

// srcset for responsive <img>; undefined for images without renditions.
export function imageSrcSet(article: Article): string | undefined {
  const small = imageVariant(article, '800');
  if (!small || !article.imageWidth) return undefined;
  return `${small} 800w, ${article.imageUrl} ${article.imageWidth}w`;
}
