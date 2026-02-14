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
        <div>
            {/* Hero Section */}
            <HeroSection
                featuredArticle={featuredArticle}
                recentArticles={recentArticles}
            />

            {/* Trending + Live Score Section */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Trending News */}
                    <div className="lg:col-span-2">
                        <TrendingNewsSection articles={trendingArticles} />
                    </div>

                    {/* Live Score Widget */}
                    <div className="lg:col-span-1">
                        <LiveScoreWidget matches={liveMatches} />
                    </div>
                </div>
            </div>

            {/* Featured News Section */}
            <FeaturedNewsSection articles={articles} />
        </div>
    );
}
