import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Article } from '../types';

interface TrendingNewsSectionProps {
    articles: Article[];
}

export default function TrendingNewsSection({ articles }: TrendingNewsSectionProps) {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-secondary">Trendy News</h2>
                <div className="flex gap-2">
                    <button className="w-9 h-9 border border-neutral-200 hover:border-primary hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors">
                        <ChevronLeft className="w-5 h-5 text-neutral-600" />
                    </button>
                    <button className="w-9 h-9 border border-neutral-200 hover:border-primary hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors">
                        <ChevronRight className="w-5 h-5 text-neutral-600" />
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.slice(0, 3).map((article) => (
                    <Link to={`/article/${article.id}`} key={article.id} className="card group cursor-pointer">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={article.imageUrl}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                                <span className="font-semibold text-primary capitalize">{article.category}</span>
                                <span>•</span>
                                <span>{article.publishedAt}</span>
                            </div>
                            <h3 className="font-bold text-neutral-800 line-clamp-2 group-hover:text-primary transition-colors">
                                {article.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
