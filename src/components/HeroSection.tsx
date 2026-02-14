import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Article } from '../types';

interface HeroSectionProps {
    featuredArticle: Article;
    recentArticles: Article[];
}

export default function HeroSection({ featuredArticle, recentArticles }: HeroSectionProps) {
    const [activeTab, setActiveTab] = useState<'recent' | 'top'>('recent');

    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Featured Article */}
                <div className="lg:col-span-2">
                    <Link to={`/article/${featuredArticle.id}`} className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group cursor-pointer block">
                        <img
                            src={featuredArticle.imageUrl}
                            alt={featuredArticle.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                            <span className="category-badge mb-4 inline-block">
                                {featuredArticle.category}
                            </span>
                            <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                                <Clock className="w-4 h-4" />
                                <span>{featuredArticle.publishedAt}</span>
                            </div>
                            <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight hover:text-primary transition-colors">
                                {featuredArticle.title}
                            </h1>
                        </div>
                        {/* Navigation Arrows */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                            <button className="pointer-events-auto w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button className="pointer-events-auto w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </Link>
                </div>

                {/* Recent News Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow-sm p-6 h-full">
                        {/* Tabs */}
                        <div className="flex gap-4 mb-6 border-b">
                            <button
                                onClick={() => setActiveTab('recent')}
                                className={`pb-3 font-medium transition-colors ${activeTab === 'recent'
                                    ? 'text-secondary border-b-2 border-primary'
                                    : 'text-neutral-500 hover:text-secondary'
                                    }`}
                            >
                                Recent News
                            </button>
                            <button
                                onClick={() => setActiveTab('top')}
                                className={`pb-3 font-medium transition-colors ${activeTab === 'top'
                                    ? 'text-secondary border-b-2 border-primary'
                                    : 'text-neutral-500 hover:text-secondary'
                                    }`}
                            >
                                Top Story
                            </button>
                        </div>

                        {/* News List */}
                        <div className="space-y-5">
                            {recentArticles.slice(0, 3).map((article, index) => (
                                <Link to={`/article/${article.id}`} key={article.id} className="flex gap-4 group cursor-pointer">
                                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                        <img
                                            src={article.imageUrl}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
                                            <span className="font-medium text-primary capitalize">{article.category}</span>
                                            <span>•</span>
                                            <span>{article.publishedAt}</span>
                                        </div>
                                        <h3 className={`text-sm font-semibold text-neutral-800 line-clamp-2 group-hover:text-primary transition-colors ${index === 1 ? 'bg-primary/10 p-2 rounded -mx-2' : ''
                                            }`}>
                                            {article.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
