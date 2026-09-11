import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Flame, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import type { Article } from '../types';

interface TrendingNewsSectionProps {
    articles: Article[];
}

function useItemsPerSlide() {
    const [itemsPerSlide, setItemsPerSlide] = useState(1);
    useEffect(() => {
        const update = () => {
            if (window.innerWidth >= 1024) setItemsPerSlide(3);
            else if (window.innerWidth >= 768) setItemsPerSlide(2);
            else setItemsPerSlide(1);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    return itemsPerSlide;
}

export default function TrendingNewsSection({ articles }: TrendingNewsSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const displayArticles = articles.slice(0, 9);
    const itemsPerSlide = useItemsPerSlide();
    const totalSlides = Math.max(1, Math.ceil(displayArticles.length / itemsPerSlide));
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startAutoSlide = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 5500);
    }, [totalSlides]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
        startAutoSlide();
    }, [totalSlides, startAutoSlide]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
        startAutoSlide();
    }, [totalSlides, startAutoSlide]);

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index);
        startAutoSlide();
    }, [startAutoSlide]);

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [startAutoSlide]);

    // Clamp at render so a resize (fewer slides) never leaves us out of range.
    const activeIndex = Math.min(currentIndex, totalSlides - 1);

    return (
        <section className="py-2">
            {/* Section Header */}
            <div className="flex items-end justify-between mb-7">
                <div>
                    <span className="section-eyebrow">
                        <Flame className="w-4 h-4" /> Trending Now
                    </span>
                    <h2 className="section-heading mt-2">What's Hot</h2>
                    <div className="section-rule" />
                </div>
                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex gap-1.5">
                        {Array.from({ length: totalSlides }).map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Slide ${i + 1}`}
                                onClick={() => goToSlide(i)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'bg-primary w-8' : 'bg-neutral-300 hover:bg-neutral-400 w-3'}`}
                            />
                        ))}
                    </div>
                    <div className="flex gap-1.5">
                        <button onClick={prevSlide} aria-label="Previous" className="w-10 h-10 rounded-full border border-neutral-300 hover:border-secondary hover:bg-secondary hover:text-white flex items-center justify-center transition-all duration-200">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button onClick={nextSlide} aria-label="Next" className="w-10 h-10 rounded-full border border-neutral-300 hover:border-secondary hover:bg-secondary hover:text-white flex items-center justify-center transition-all duration-200">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div key={slideIndex} className="w-full shrink-0">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {displayArticles.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((article) => (
                                    <Link
                                        to={`/article/${article.id}`}
                                        key={article.id}
                                        className="card group flex flex-col"
                                    >
                                        <div className="relative aspect-16/10 overflow-hidden">
                                            <img
                                                src={article.imageUrl}
                                                alt={article.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="chip">{article.category}</span>
                                            </div>
                                        </div>
                                        <div className="p-5 flex flex-col flex-1">
                                            <h3 className="font-display text-lg text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                                {article.title}
                                            </h3>
                                            <p className="text-neutral-500 text-sm line-clamp-2 mt-2 mb-4">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between pt-3 border-t border-neutral-100 mt-auto">
                                                <span className="text-neutral-400 text-xs font-medium">{article.publishedAt} · {article.readTime}</span>
                                                <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-primary transition-colors" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile indicators */}
            <div className="flex sm:hidden justify-center gap-1.5 mt-6">
                {Array.from({ length: totalSlides }).map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Slide ${i + 1}`}
                        onClick={() => goToSlide(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'bg-primary w-8' : 'bg-neutral-300 w-3'}`}
                    />
                ))}
            </div>
        </section>
    );
}
