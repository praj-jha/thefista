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
        <section className="max-w-350 mx-auto px-6 py-10">
            <div className="grid lg:grid-cols-12 gap-8">
                {/* Main Featured Article — 8 cols */}
                <div className="lg:col-span-8">
                    <Link to={`/article/${currentArticle.id}`} className="block group">
                        {/* Image — clean, no overlay */}
                        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                            <img
                                src={currentArticle.imageUrl}
                                alt={currentArticle.title}
                                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                            />
                        </div>

                        {/* Text content below image */}
                        <div className="pt-5">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                                    {currentArticle.category}
                                </span>
                                <span className="text-neutral-300">·</span>
                                <div className="flex items-center gap-1.5 text-neutral-400 text-xs">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>{currentArticle.publishedAt}</span>
                                </div>
                            </div>
                            <h1 className="font-display text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-secondary leading-tight mb-3 group-hover:text-primary transition-colors">
                                {currentArticle.title}
                            </h1>
                            <p className="text-neutral-500 text-[15px] leading-relaxed max-w-2xl line-clamp-2 hidden md:block">
                                {currentArticle.excerpt}
                            </p>
                        </div>
                    </Link>

                    {/* Navigation & Indicators */}
                    <div className="flex items-center gap-4 mt-5 pt-5 border-t border-neutral-200">
                        <button
                            onClick={prevSlide}
                            className="w-9 h-9 border border-neutral-300 hover:border-primary hover:text-primary flex items-center justify-center transition-all"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <div className="flex gap-2">
                            {featuredArticles.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-primary w-8' : 'bg-neutral-300 hover:bg-neutral-400 w-4'}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextSlide}
                            className="w-9 h-9 border border-neutral-300 hover:border-primary hover:text-primary flex items-center justify-center transition-all"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
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
