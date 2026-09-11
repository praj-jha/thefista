import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
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
    const railArticles = recentArticles.filter(a => a.id !== current.id).slice(0, 5);

    return (
        <section className="container-page pt-8 pb-12 lg:pt-10 lg:pb-16">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Main Featured — 8 cols */}
                <div className="lg:col-span-8">
                    <Link to={`/article/${current.id}`} key={current.id} className="block group rise-in">
                        <div className="relative aspect-16/10 lg:aspect-video overflow-hidden rounded-3xl bg-neutral-100">
                            <img
                                src={current.imageUrl}
                                alt={current.title}
                                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-900 ease-out"
                                fetchPriority="high"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/25 to-transparent" />

                            {/* Text over image */}
                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="chip">{current.category}</span>
                                    <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{current.publishedAt}</span>
                                    </div>
                                </div>
                                <h1 className="font-display text-white text-2xl sm:text-4xl lg:text-[3.25rem] leading-[1.02] max-w-3xl">
                                    {current.title}
                                </h1>
                                <p className="text-white/80 text-[15px] leading-relaxed max-w-2xl mt-4 line-clamp-2 hidden sm:block">
                                    {current.excerpt}
                                </p>
                                <span className="mt-6 inline-flex items-center gap-2 bg-primary text-white text-[13px] font-bold px-5 py-3 rounded-full group-hover:bg-white group-hover:text-secondary transition-all duration-200">
                                    Read the story <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Slide indicators */}
                    <div className="flex items-center gap-2 mt-5">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Slide ${i + 1}`}
                                onClick={() => setCurrentSlide(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-primary w-10' : 'bg-neutral-300 hover:bg-neutral-400 w-5'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Top Stories Rail — 4 cols */}
                <div className="lg:col-span-4">
                    <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <span className="section-eyebrow">Top Stories</span>
                            <span className="w-2 h-2 rounded-full bg-primary breaking-pulse" />
                        </div>
                        <div className="flex flex-col divide-y divide-neutral-200 rounded-3xl border border-neutral-200 bg-neutral-50 overflow-hidden flex-1">
                            {railArticles.map((article, idx) => (
                                <Link
                                    to={`/article/${article.id}`}
                                    key={article.id}
                                    className="flex gap-4 p-4 lg:p-[1.1rem] group hover:bg-white transition-colors"
                                >
                                    <span className="font-display text-2xl text-neutral-300 group-hover:text-primary transition-colors leading-none pt-0.5">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <span className="category-badge">{article.category}</span>
                                        <h3 className="text-[14.5px] font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug mt-1">
                                            {article.title}
                                        </h3>
                                        <span className="text-[11px] text-neutral-400 mt-1.5 block">{article.publishedAt}</span>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-primary transition-colors shrink-0" />
                                </Link>
                            ))}
                        </div>
                        <Link
                            to="/category/cricket"
                            className="mt-3 flex items-center justify-center gap-2 py-3 rounded-full border border-neutral-200 text-[12px] font-bold uppercase tracking-[0.12em] text-secondary hover:bg-secondary hover:text-white transition-colors"
                        >
                            View all stories <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
