import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight } from 'lucide-react';
import type { Article } from '../types';

interface HeroSectionProps {
    featuredArticle: Article;
    recentArticles: Article[];
}

export default function HeroSection({ featuredArticle, recentArticles }: HeroSectionProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [featuredArticle, ...recentArticles.filter(a => a.id !== featuredArticle.id).slice(0, 2)];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const current = slides[currentSlide];
    const railArticles = recentArticles.filter(a => a.id !== current.id).slice(0, 6);

    return (
        <section className="container-page pt-5 pb-8 lg:pt-6 lg:pb-10">
            <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">
                {/* Main Featured — 8 cols */}
                <div className="lg:col-span-8">
                    <Link to={`/article/${current.id}`} key={current.id} className="block group rise-in">
                        <div className="relative aspect-16/10 lg:aspect-video overflow-hidden rounded-[4px] bg-neutral-200">
                            <img
                                src={current.imageUrl}
                                alt={current.title}
                                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                fetchPriority="high"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="chip">{current.category}</span>
                                    <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{current.publishedAt}</span>
                                    </div>
                                </div>
                                <h1 className="font-display text-white text-2xl sm:text-4xl lg:text-[3rem] leading-[1.03] max-w-3xl group-hover:text-primary transition-colors">
                                    {current.title}
                                </h1>
                                <p className="text-white/80 text-[15px] leading-relaxed max-w-2xl mt-3 line-clamp-2 hidden sm:block">
                                    {current.excerpt}
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Slide indicators */}
                    <div className="flex items-center gap-2 mt-3">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Slide ${i + 1}`}
                                onClick={() => setCurrentSlide(i)}
                                className={`h-1 transition-all duration-300 ${i === currentSlide ? 'bg-primary w-10' : 'bg-neutral-300 hover:bg-neutral-400 w-5'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Top Stories Rail — 4 cols */}
                <div className="lg:col-span-4">
                    <div className="h-full flex flex-col border border-neutral-200 bg-white rounded-[4px]">
                        <div className="section-bar mb-0 border-b-2 border-primary px-4 pt-3 pb-2">
                            <h2 className="section-bar-title text-primary">Top Stories</h2>
                            <span className="ml-auto w-2 h-2 rounded-full bg-primary breaking-pulse" />
                        </div>
                        <div className="flex flex-col divide-y divide-neutral-200 flex-1">
                            {railArticles.map((article, idx) => (
                                <Link
                                    to={`/article/${article.id}`}
                                    key={article.id}
                                    className="flex gap-3 px-4 py-3 group hover:bg-neutral-50 transition-colors"
                                >
                                    <span className="font-display text-xl text-neutral-300 group-hover:text-primary transition-colors leading-none pt-0.5">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-[14px] font-bold text-secondary line-clamp-3 group-hover:text-primary transition-colors leading-snug">
                                            {article.title}
                                        </h3>
                                        <span className="text-[11px] text-neutral-400 mt-1 block font-cond uppercase tracking-wide">{article.category} · {article.publishedAt}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link
                            to="/category/cricket"
                            className="flex items-center justify-center gap-2 py-3 border-t-2 border-neutral-900 text-[12px] font-bold uppercase tracking-wide text-secondary hover:bg-neutral-900 hover:text-white transition-colors font-cond"
                        >
                            More Top Stories <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
