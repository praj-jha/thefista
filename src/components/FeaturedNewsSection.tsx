import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
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

    const lead = filteredArticles[0];
    const side = filteredArticles.slice(1, 4);

    return (
        <section className="container-page py-14 lg:py-20">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
                <div>
                    <span className="section-eyebrow">Editor's Picks</span>
                    <h2 className="section-heading mt-2">The Stories That Matter</h2>
                    <div className="section-rule" />
                </div>

                {/* Category Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                    {categoryTabs.slice(0, 6).map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 text-[12.5px] font-bold rounded-full whitespace-nowrap transition-all duration-200 ${activeCategory === cat.id ? 'bg-secondary text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
                {/* Lead Story — 6 cols */}
                {lead && (
                    <Link to={`/article/${lead.id}`} className="lg:col-span-6 group flex flex-col">
                        <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-neutral-100">
                            <img
                                src={lead.imageUrl}
                                alt={lead.title}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="chip">{lead.category}</span>
                            </div>
                        </div>
                        <div className="pt-5">
                            <h3 className="font-display text-2xl lg:text-3xl text-secondary leading-tight group-hover:text-primary transition-colors">
                                {lead.title}
                            </h3>
                            <p className="text-neutral-500 text-[15px] line-clamp-2 mt-3 leading-relaxed">
                                {lead.excerpt}
                            </p>
                            <div className="flex items-center gap-3 text-neutral-400 text-xs mt-4 font-medium">
                                <span>{lead.author}</span>
                                <span className="w-1 h-1 rounded-full bg-neutral-300" />
                                <span>{lead.publishedAt}</span>
                                <span className="w-1 h-1 rounded-full bg-neutral-300" />
                                <span>{lead.readTime}</span>
                            </div>
                        </div>
                    </Link>
                )}

                {/* Side Cards — 6 cols */}
                <div className="lg:col-span-6 flex flex-col gap-4">
                    {side.map((article) => (
                        <Link to={`/article/${article.id}`} key={article.id} className="flex gap-5 group rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:shadow-[0_18px_40px_-28px_rgba(10,14,20,0.35)] p-3 transition-all bg-white">
                            <div className="w-32 sm:w-40 aspect-4/3 shrink-0 overflow-hidden rounded-xl bg-neutral-100">
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
                                <span className="category-badge">{article.category}</span>
                                <h3 className="font-display text-base sm:text-lg text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug mt-1">
                                    {article.title}
                                </h3>
                                <span className="text-[11px] text-neutral-400 mt-2 font-medium">{article.publishedAt} · {article.readTime}</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-primary transition-colors shrink-0 self-center" />
                        </Link>
                    ))}

                    <div className="flex justify-end pt-1">
                        <Link to="/category/politics" className="inline-flex items-center gap-2 text-[13px] font-bold text-secondary hover:text-primary transition-colors">
                            More stories <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
