import HeroSection from '../components/HeroSection';
import TrendingNewsSection from '../components/TrendingNewsSection';
import FeaturedNewsSection from '../components/FeaturedNewsSection';
import LiveScoreWidget from '../components/LiveScoreWidget';
import { articles, liveMatches, getTrendingArticles } from '../data/articles';

export default function HomePage() {
    const featuredArticle = articles.find(a => a.isFeatured) || articles[0];
    const recentArticles = articles.slice(0, 5);
    const trendingArticles = getTrendingArticles();

    return (
        <div className="bg-neutral-50">
            {/* Hero Section */}
            <div className="bg-white border-b border-neutral-200">
                <HeroSection
                    featuredArticle={featuredArticle}
                    recentArticles={recentArticles}
                />
            </div>

            {/* Trending + Live Score Section */}
            <div className="max-w-350 mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Trending News — 8 cols */}
                    <div className="lg:col-span-8">
                        <TrendingNewsSection articles={trendingArticles} />
                    </div>

                    {/* Live Score Widget — 4 cols */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32">
                            <LiveScoreWidget matches={liveMatches} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured/Editor's Picks Section */}
            <div className="bg-white border-y border-neutral-200">
                <FeaturedNewsSection articles={articles} />
            </div>
        </div>
    );
}
