import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
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

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const currentArticle = featuredArticles[currentSlide];

    return (
        <section className="max-w-350 mx-auto px-6 py-8">
            <div className="grid lg:grid-cols-12 gap-6">
                {/* Main Featured Article — 8 cols */}
                <div className="lg:col-span-8">
                    <div className="relative h-72 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[34rem] overflow-hidden group">
                        <Link to={`/article/${currentArticle.id}`} className="block h-full">
                            <img
                                src={currentArticle.imageUrl}
                                alt={currentArticle.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="category-badge">
                                        {currentArticle.category}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-white/70 text-xs">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{currentArticle.publishedAt}</span>
                                    </div>
                                </div>
                                <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 max-w-3xl">
                                    {currentArticle.title}
                                </h1>
                                <p className="text-white/60 text-sm max-w-2xl line-clamp-2 hidden md:block">
                                    {currentArticle.excerpt}
                                </p>
                            </div>
                        </Link>

                        {/* Navigation */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                            <button
                                onClick={(e) => { e.preventDefault(); prevSlide(); }}
                                className="pointer-events-auto w-10 h-10 bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={(e) => { e.preventDefault(); nextSlide(); }}
                                className="pointer-events-auto w-10 h-10 bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 right-8 flex gap-1.5">
                            {featuredArticles.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-1 transition-all duration-300 ${i === currentSlide ? 'bg-primary w-8' : 'bg-white/40 hover:bg-white/60 w-4'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar — 4 cols */}
                <div className="lg:col-span-4">
                    <div className="bg-white border border-neutral-200 h-full flex flex-col">
                        {/* Tabs */}
                        <div className="flex border-b border-neutral-200">
                            <button
                                onClick={() => setActiveTab('recent')}
                                className={`flex-1 py-3.5 text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === 'recent'
                                    ? 'text-primary border-b-2 border-primary bg-primary/5'
                                    : 'text-neutral-500 hover:text-secondary'
                                    }`}
                            >
                                Recent
                            </button>
                            <button
                                onClick={() => setActiveTab('top')}
                                className={`flex-1 py-3.5 text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === 'top'
                                    ? 'text-primary border-b-2 border-primary bg-primary/5'
                                    : 'text-neutral-500 hover:text-secondary'
                                    }`}
                            >
                                Top Stories
                            </button>
                        </div>

                        {/* News List */}
                        <div className="flex-1 divide-y divide-neutral-100">
                            {recentArticles.slice(0, 5).map((article, idx) => (
                                <Link to={`/article/${article.id}`} key={article.id} className="flex gap-4 p-4 group hover:bg-neutral-50 transition-colors">
                                    <span className="text-3xl font-display font-bold text-neutral-200 group-hover:text-primary/30 transition-colors leading-none mt-0.5">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                                            {article.category}
                                        </span>
                                        <h3 className="text-sm font-semibold text-neutral-800 line-clamp-2 group-hover:text-primary transition-colors leading-snug mt-1">
                                            {article.title}
                                        </h3>
                                        <span className="text-[11px] text-neutral-400 mt-1.5 block">{article.publishedAt}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* View All */}
                        <Link to="/category/cricket" className="flex items-center justify-center gap-2 py-3 border-t border-neutral-200 text-[11px] font-bold uppercase tracking-widest text-primary hover:bg-primary/5 transition-colors">
                            View All Stories <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
