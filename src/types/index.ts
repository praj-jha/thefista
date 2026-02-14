export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  imageUrl: string;
  author: string;
  publishedAt: string;
  readTime: string;
  isFeatured?: boolean;
  isTrending?: boolean;
}

export type Category = 
  | 'cricket'
  | 'politics'
  | 'health'
  | 'bollywood'
  | 'business'
  | 'education'
  | 'technology';

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
}
