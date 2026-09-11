import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import TrendingNewsSection from '../components/TrendingNewsSection';
import FeaturedNewsSection from '../components/FeaturedNewsSection';
import LiveScoreWidget from '../components/LiveScoreWidget';
import Seo from '../seo/Seo';
import { buildHomeSeo } from '../seo/builders';
import { articles, categories, liveMatches, getTrendingArticles } from '../data/articles';

export default function HomePage() {
    const featuredArticle = articles.find(a => a.isFeatured) || articles[0];
    const recentArticles = articles.slice(0, 6);
    const trendingArticles = getTrendingArticles();

    return (
        <div className="bg-white">
            <Seo {...buildHomeSeo()} />

            {/* Hero */}
            <HeroSection featuredArticle={featuredArticle} recentArticles={recentArticles} />

            {/* Category quick strip */}
            <div className="border-y border-neutral-200 bg-neutral-50">
                <div className="container-page py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-neutral-400 shrink-0">Explore</span>
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            to={`/category/${cat.slug}`}
                            className="group flex items-center gap-1.5 shrink-0 px-4 py-2 rounded-full border border-neutral-200 bg-white text-[13px] font-bold text-secondary hover:border-secondary hover:bg-secondary hover:text-white transition-all"
                        >
                            {cat.name}
                            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white transition-colors" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Trending + Live Score */}
            <section className="container-page py-14 lg:py-16" aria-label="Trending stories">
                <div className="grid lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-8">
                        <TrendingNewsSection articles={trendingArticles} />
                    </div>
                    <div className="lg:col-span-4">
                        <div className="sticky top-28">
                            <LiveScoreWidget matches={liveMatches} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Editor's Picks */}
            <div className="bg-neutral-50 border-t border-neutral-200">
                <FeaturedNewsSection articles={articles} />
            </div>
        </div>
    );
}
