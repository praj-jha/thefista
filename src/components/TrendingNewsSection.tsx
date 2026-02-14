import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import type { Article } from '../types';

interface TrendingNewsSectionProps {
    articles: Article[];
}

export default function TrendingNewsSection({ articles }: TrendingNewsSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const displayArticles = articles.slice(0, 9);
    const totalSlides = Math.ceil(displayArticles.length / 3);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startAutoSlide = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 4000);
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

    return (
        <section className="py-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary">Trendy News</h2>
                    <p className="text-neutral-500 text-sm mt-1">Stay updated with the latest trends</p>
                </div>
                <div className="flex items-center gap-4">
                    {/* Slide indicators */}
                    <div className="hidden sm:flex gap-2">
                        {Array.from({ length: totalSlides }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                                    i === currentIndex ? 'bg-secondary w-8' : 'bg-neutral-300 hover:bg-neutral-400 w-2'
                                }`}
                            />
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 border border-neutral-200 hover:border-secondary hover:bg-secondary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 border border-neutral-200 hover:border-secondary hover:bg-secondary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative overflow-hidden">
                <div 
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div key={slideIndex} className="w-full flex-shrink-0">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {displayArticles.slice(slideIndex * 3, slideIndex * 3 + 3).map((article) => (
                                    <Link 
                                        to={`/article/${article.id}`} 
                                        key={article.id} 
                                        className="bg-white rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        {/* Large Image */}
                                        <div className="relative h-56 md:h-64 overflow-hidden">
                                            <img
                                                src={article.imageUrl}
                                                alt={article.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="p-5">
                                            {/* Source & Time */}
                                            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                                                <img src="/1.png" alt="Fista" className="h-4 w-auto" />
                                                <span className="font-medium">The Fista</span>
                                                <span>•</span>
                                                <span>{article.publishedAt}</span>
                                            </div>
                                            
                                            {/* Title */}
                                            <h3 className="font-bold text-lg text-neutral-800 line-clamp-3 group-hover:text-secondary transition-colors leading-snug mb-4">
                                                {article.title}
                                            </h3>
                                            
                                            {/* Excerpt */}
                                            <p className="text-neutral-500 text-sm line-clamp-2 mb-4">
                                                {article.excerpt}
                                            </p>
                                            
                                            {/* Category & Read Time */}
                                            <div className="flex items-center justify-between">
                                                <span className="text-primary font-semibold text-sm capitalize">{article.category}</span>
                                                <span className="text-neutral-400 text-sm">{article.readTime} min read</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Mobile slide indicators */}
            <div className="flex sm:hidden justify-center gap-2 mt-6">
                {Array.from({ length: totalSlides }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`h-2 rounded-full transition-all duration-500 ease-out ${
                            i === currentIndex ? 'bg-secondary w-8' : 'bg-neutral-300 w-2'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
