import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import TrendingNewsSection from '../components/TrendingNewsSection';
import FeaturedNewsSection from '../components/FeaturedNewsSection';
import LiveScoreWidget from '../components/LiveScoreWidget';
import BigStory from '../components/BigStory';
import Seo from '../seo/Seo';
import { buildHomeSeo } from '../seo/builders';
import { articles, categories, liveMatches, getTrendingArticles, getFeaturedArticles } from '../data/articles';

export default function HomePage() {
    const featured = getFeaturedArticles();
    const featuredArticle = featured[0] || articles[0];
    const bigStory = featured[1] || articles.find(a => a.id !== featuredArticle.id) || articles[0];
    const recentArticles = articles.slice(0, 7);
    const trendingArticles = getTrendingArticles();
    const moreHeadlines = articles.slice(6, 16);

    return (
        <div className="bg-neutral-50">
            <Seo {...buildHomeSeo()} />

            {/* Hero */}
            <HeroSection featuredArticle={featuredArticle} recentArticles={recentArticles} />

            {/* Category quick strip */}
            <div className="border-y border-neutral-200 bg-white">
                <div className="container-page py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-hide">
                    <span className="font-cond text-[12px] font-bold uppercase tracking-wide text-primary shrink-0">Sections</span>
                    <span className="w-px h-4 bg-neutral-200 shrink-0" />
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            to={`/category/${cat.slug}`}
                            className="shrink-0 px-3 py-1.5 font-cond text-[13px] font-bold uppercase tracking-wide text-neutral-600 hover:text-primary transition-colors"
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Latest + Live Score */}
            <section className="container-page py-8 lg:py-10" aria-label="Latest stories">
                <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8">
                        <TrendingNewsSection articles={trendingArticles} />

                        {/* More Headlines — dense list to fill the column */}
                        <div className="mt-10">
                            <div className="section-bar">
                                <span className="section-tab">More Headlines</span>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-x-6">
                                {moreHeadlines.map((article) => (
                                    <Link
                                        key={article.id}
                                        to={`/article/${article.id}`}
                                        className="flex gap-3 py-4 border-b border-neutral-200 group"
                                    >
                                        <div className="w-28 h-20 shrink-0 overflow-hidden rounded-sm bg-neutral-200">
                                            <img
                                                src={article.imageUrl}
                                                alt={article.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="category-badge">{article.category}</span>
                                            <h3 className="text-[15px] font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug mt-0.5">
                                                {article.title}
                                            </h3>
                                            <span className="text-[11px] text-neutral-400 mt-1 block font-cond uppercase tracking-wide">{article.publishedAt} · {article.readTime}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 space-y-6">
                            <LiveScoreWidget matches={liveMatches} />

                            {/* Trending list */}
                            <div className="border border-neutral-200 bg-white rounded-sm overflow-hidden">
                                <div className="section-bar mb-0 border-b-2 border-primary px-4 pt-3 pb-2">
                                    <h2 className="section-bar-title text-primary">Trending</h2>
                                </div>
                                <div className="divide-y divide-neutral-100">
                                    {trendingArticles.slice(0, 5).map((article, idx) => (
                                        <Link
                                            key={article.id}
                                            to={`/article/${article.id}`}
                                            className="flex gap-3 px-4 py-3 group hover:bg-neutral-50 transition-colors"
                                        >
                                            <span className="font-display text-2xl text-primary leading-none">{idx + 1}</span>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-[13.5px] font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                                    {article.title}
                                                </h3>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* The Big Story */}
            <BigStory article={bigStory} />

            {/* Top Picks */}
            <div className="bg-white border-t border-neutral-200">
                <FeaturedNewsSection articles={articles} />
            </div>

            {/* Explore all sections */}
            <div className="bg-neutral-900 text-white">
                <div className="container-page py-8 flex flex-wrap items-center gap-3">
                    <span className="section-tab">Explore</span>
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            to={`/category/${cat.slug}`}
                            className="inline-flex items-center gap-1 font-cond text-[13px] font-bold uppercase tracking-wide text-white/80 hover:text-primary transition-colors"
                        >
                            {cat.name} <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
