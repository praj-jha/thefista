export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  imageUrl: string;
  imageWidth?: number;
  imageHeight?: number;
  // Describes what the photo shows (not the headline) — used for alt text and captions.
  imageAlt?: string;
  imageCredit?: string;
  imageSourceUrl?: string;
  imageLicenseUrl?: string;
  author: string;
  publishedAt: string;
  readTime: string;
  isFeatured?: boolean;
  isTrending?: boolean;
}

export type Category =
  | 'politics'
  | 'world'
  | 'business'
  | 'technology'
  | 'science'
  | 'health'
  | 'sports'
  | 'cricket'
  | 'education'
  | 'bollywood';

// Editorial desks group sections in navigation and the footer.
export type Desk = 'News' | 'World' | 'Business' | 'Science & Tech' | 'Sport' | 'Culture';

export interface LiveMatch {
  id: string;
  sport: string;
  tournament: string;
  venue: string;
  team1: {
    name: string;
    shortName: string;
    flag: string;
    score: string;
    overs?: string;
  };
  team2: {
    name: string;
    shortName: string;
    flag: string;
    score: string;
    overs?: string;
  };
  status: 'live' | 'completed' | 'upcoming';
  innings?: string;
}

export interface CategoryInfo {
  id: Category;
  name: string;
  slug: string;
  color: string;
  desk: Desk;
  description: string;
}
