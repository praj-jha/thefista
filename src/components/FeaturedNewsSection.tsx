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
    const side = filteredArticles.slice(1, 5);

    return (
        <section className="container-page py-10 lg:py-14">
            {/* Section Header */}
            <div className="section-bar">
                <span className="section-tab">Top Picks</span>
                <div className="flex-1" />
                <div className="hidden md:flex items-center gap-1 overflow-x-auto scrollbar-hide">
                    {categoryTabs.slice(0, 6).map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-3 py-1.5 text-[12px] font-bold uppercase tracking-wide font-cond whitespace-nowrap transition-colors rounded-[3px] ${activeCategory === cat.id ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:text-neutral-900'}`}
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
                        <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-neutral-200">
                            <img
                                src={lead.imageUrl}
                                alt={lead.title}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                            />
                            <div className="absolute top-0 left-0">
                                <span className="chip rounded-none">{lead.category}</span>
                            </div>
                        </div>
                        <div className="pt-4">
                            <h3 className="font-display text-2xl lg:text-[1.9rem] text-secondary leading-tight group-hover:text-primary transition-colors">
                                {lead.title}
                            </h3>
                            <p className="text-neutral-500 text-[14.5px] line-clamp-2 mt-2 leading-relaxed">
                                {lead.excerpt}
                            </p>
                            <div className="flex items-center gap-3 text-neutral-400 text-[11px] mt-3 font-cond uppercase tracking-wide">
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
                <div className="lg:col-span-6 flex flex-col divide-y divide-neutral-200 border-t border-neutral-200 lg:border-t-0">
                    {side.map((article) => (
                        <Link to={`/article/${article.id}`} key={article.id} className="flex gap-4 group py-4 first:lg:pt-0">
                            <div className="w-32 sm:w-40 aspect-4/3 shrink-0 overflow-hidden rounded-sm bg-neutral-200">
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                                <span className="category-badge">{article.category}</span>
                                <h3 className="text-base sm:text-[17px] font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug mt-0.5">
                                    {article.title}
                                </h3>
                                <span className="text-[11px] text-neutral-400 mt-1.5 font-cond uppercase tracking-wide">{article.publishedAt} · {article.readTime}</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-primary transition-colors shrink-0 self-center" />
                        </Link>
                    ))}

                    <div className="flex justify-end pt-3">
                        <Link to="/category/politics" className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide font-cond text-secondary hover:text-primary transition-colors">
                            More Stories <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
