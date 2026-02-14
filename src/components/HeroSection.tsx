import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Article } from '../types';

interface HeroSectionProps {
    featuredArticle: Article;
    recentArticles: Article[];
}

export default function HeroSection({ featuredArticle, recentArticles }: HeroSectionProps) {
    const [activeTab, setActiveTab] = useState<'recent' | 'top'>('recent');
    const [currentSlide, setCurrentSlide] = useState(0);
    const featuredArticles = [featuredArticle, ...recentArticles.slice(0, 2)];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
    }, [featuredArticles.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
    }, [featuredArticles.length]);

    // Auto-slide every 4 seconds for hero
    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const currentArticle = featuredArticles[currentSlide];

    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Featured Article */}
                <div className="lg:col-span-2">
                    <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group">
                        <Link to={`/article/${currentArticle.id}`} className="block h-full">
                            <img
                                src={currentArticle.imageUrl}
                                alt={currentArticle.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                                <span className="inline-block bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                                    {currentArticle.category}
                                </span>
                                <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                                    <Clock className="w-4 h-4" />
                                    <span>{currentArticle.publishedAt}</span>
                                </div>
                                <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight group-hover:text-white/90 transition-colors">
                                    {currentArticle.title}
                                </h1>
                            </div>
                        </Link>

                        {/* Navigation Arrows */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                            <button
                                onClick={(e) => { e.preventDefault(); prevSlide(); }}
                                className="pointer-events-auto w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={(e) => { e.preventDefault(); nextSlide(); }}
                                className="pointer-events-auto w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {featuredArticles.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent News Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6 h-full">
                        {/* Tabs */}
                        <div className="flex gap-4 mb-6 border-b border-neutral-100">
                            <button
                                onClick={() => setActiveTab('recent')}
                                className={`pb-3 font-medium transition-colors ${activeTab === 'recent'
                                    ? 'text-secondary border-b-2 border-secondary'
                                    : 'text-neutral-500 hover:text-secondary'
                                    }`}
                            >
                                Recent News
                            </button>
                            <button
                                onClick={() => setActiveTab('top')}
                                className={`pb-3 font-medium transition-colors ${activeTab === 'top'
                                    ? 'text-secondary border-b-2 border-secondary'
                                    : 'text-neutral-500 hover:text-secondary'
                                    }`}
                            >
                                Top Story
                            </button>
                        </div>

                        {/* News List */}
                        <div className="space-y-5">
                            {recentArticles.slice(0, 4).map((article, index) => (
                                <Link to={`/article/${article.id}`} key={article.id} className="flex gap-4 group cursor-pointer">
                                    <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                                        <img
                                            src={article.imageUrl}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1.5">
                                            <span className="font-semibold text-primary capitalize bg-primary/10 px-2 py-0.5 rounded">{article.category}</span>
                                        </div>
                                        <h3 className="text-sm font-semibold text-neutral-800 line-clamp-2 group-hover:text-secondary transition-colors leading-snug">
                                            {article.title}
                                        </h3>
                                        <span className="text-xs text-neutral-400 mt-1 block">{article.publishedAt}</span>
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
