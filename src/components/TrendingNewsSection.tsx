import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import type { Article } from '../types';

interface TrendingNewsSectionProps {
    articles: Article[];
}

function useItemsPerSlide() {
    const [itemsPerSlide, setItemsPerSlide] = useState(1);

    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerSlide(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerSlide(2);
            } else {
                setItemsPerSlide(1);
            }
        };

        updateItemsPerSlide();
        window.addEventListener('resize', updateItemsPerSlide);
        return () => window.removeEventListener('resize', updateItemsPerSlide);
    }, []);

    return itemsPerSlide;
}

export default function TrendingNewsSection({ articles }: TrendingNewsSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const displayArticles = articles.slice(0, 9);
    const itemsPerSlide = useItemsPerSlide();
    const totalSlides = Math.ceil(displayArticles.length / itemsPerSlide);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startAutoSlide = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 5000);
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

    useEffect(() => {
        setCurrentIndex(0);
    }, [itemsPerSlide]);

    return (
        <section className="py-8">
            {/* Section Header */}
            <div className="flex items-end justify-between mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-primary">Trending Now</span>
                    </div>
                    <h2 className="font-display text-3xl font-bold text-secondary">What's Hot</h2>
                    <div className="section-rule" />
                </div>
                <div className="flex items-center gap-3">
                    {/* Indicators */}
                    <div className="hidden sm:flex gap-1.5">
                        {Array.from({ length: totalSlides }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`h-1 transition-all duration-500 ${i === currentIndex ? 'bg-primary w-8' : 'bg-neutral-300 hover:bg-neutral-400 w-3'}`}
                            />
                        ))}
                    </div>
                    <div className="flex gap-1.5">
                        <button
                            onClick={prevSlide}
                            className="w-9 h-9 border border-neutral-300 hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-200"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-9 h-9 border border-neutral-300 hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-200"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div key={slideIndex} className="w-full shrink-0">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {displayArticles.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((article) => (
                                    <Link
                                        to={`/article/${article.id}`}
                                        key={article.id}
                                        className="bg-white border border-neutral-200 overflow-hidden group hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
                                    >
                                        {/* Image */}
                                        <div className="relative h-52 md:h-56 overflow-hidden">
                                            <img
                                                src={article.imageUrl}
                                                alt={article.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="category-badge">{article.category}</span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            {/* Source & Time */}
                                            <div className="flex items-center gap-2 text-[11px] text-neutral-400 mb-3">
                                                <span className="font-semibold text-secondary uppercase tracking-wider">The Fista</span>
                                                <span className="text-neutral-300">|</span>
                                                <span>{article.publishedAt}</span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="font-display font-bold text-lg text-secondary line-clamp-3 group-hover:text-primary transition-colors leading-snug mb-3">
                                                {article.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-neutral-500 text-sm line-clamp-2 mb-4">
                                                {article.excerpt}
                                            </p>

                                            {/* Footer */}
                                            <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{article.category}</span>
                                                <span className="text-neutral-400 text-xs">{article.readTime}</span>
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
                        onClick={() => goToSlide(i)}
                        className={`h-1 transition-all duration-500 ${i === currentIndex ? 'bg-primary w-8' : 'bg-neutral-300 w-3'}`}
                    />
                ))}
            </div>
        </section>
    );
}
