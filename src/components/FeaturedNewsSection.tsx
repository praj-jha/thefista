import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Article, Category } from '../types';
import { categories } from '../data/articles';

interface FeaturedNewsSectionProps {
    articles: Article[];
}

export default function FeaturedNewsSection({ articles }: FeaturedNewsSectionProps) {
    const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

    const filteredArticles = activeCategory === 'all'
        ? articles
        : articles.filter(a => a.category === activeCategory);

    const categoryTabs: { id: Category | 'all'; name: string }[] = [
        { id: 'all', name: 'All' },
        ...categories.map(c => ({ id: c.id, name: c.name })),
    ];

    return (
        <section className="max-w-350 mx-auto px-6 py-12">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
                <div>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-secondary">Editor's Picks</h2>
                    <div className="section-rule" />
                </div>

                {/* Category Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-hide">
                    {categoryTabs.slice(0, 5).map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-200 border-b-2 ${activeCategory === cat.id
                                ? 'text-primary border-primary'
                                : 'text-neutral-500 border-transparent hover:text-secondary hover:border-neutral-300'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
                {/* Lead Story — 5 cols */}
                {filteredArticles[0] && (
                    <Link to={`/article/${filteredArticles[0].id}`} className="lg:col-span-5 lg:row-span-2 group flex flex-col">
                        <div className="aspect-[4/3] lg:aspect-auto lg:flex-1 overflow-hidden bg-neutral-100">
                            <img
                                src={filteredArticles[0].imageUrl}
                                alt={filteredArticles[0].title}
                                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                            />
                        </div>
                        <div className="pt-5">
                            <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                                {filteredArticles[0].category}
                            </span>
                            <h3 className="font-display text-xl lg:text-2xl font-bold text-secondary leading-snug mt-2 mb-2 group-hover:text-primary transition-colors">
                                {filteredArticles[0].title}
                            </h3>
                            <p className="text-neutral-500 text-sm line-clamp-2 hidden lg:block leading-relaxed">
                                {filteredArticles[0].excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-neutral-400 text-xs mt-3">
                                <span>{filteredArticles[0].publishedAt}</span>
                                <span>·</span>
                                <span>{filteredArticles[0].readTime}</span>
                            </div>
                        </div>
                    </Link>
                )}

                {/* Side Cards — 7 cols */}
                <div className="lg:col-span-7 space-y-4">
                    {filteredArticles.slice(1, 4).map((article) => (
                        <Link to={`/article/${article.id}`} key={article.id} className="flex gap-5 group bg-white border border-neutral-100 hover:border-neutral-200 p-4 transition-all">
                            <div className="w-32 h-24 shrink-0 overflow-hidden bg-neutral-100">
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-[10px] mb-2">
                                    <span className="font-semibold uppercase tracking-widest text-primary">{article.category}</span>
                                    <span className="text-neutral-300">·</span>
                                    <span className="text-neutral-400">{article.publishedAt}</span>
                                </div>
                                <h3 className="font-display font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug text-base">
                                    {article.title}
                                </h3>
                            </div>
                        </Link>
                    ))}

                    {/* View More */}
                    <div className="flex justify-end pt-2">
                        <Link to="/category/politics" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors">
                            More Stories <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
