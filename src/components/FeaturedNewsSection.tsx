import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Share2, Facebook, Twitter } from 'lucide-react';
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

    const handleShare = (e: React.MouseEvent, platform: string, article: Article) => {
        e.preventDefault();
        e.stopPropagation();
        const url = `${window.location.origin}/article/${article.id}`;
        const encodedUrl = encodeURIComponent(url);
        const encodedTitle = encodeURIComponent(article.title);

        let shareUrl = '';
        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
                break;
        }
        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold text-secondary">Featured News</h2>

                {/* Category Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                    {categoryTabs.slice(0, 5).map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat.id
                                ? 'bg-secondary text-white'
                                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                    <div className="flex gap-1">
                        <button className="w-8 h-8 border border-neutral-200 hover:border-primary rounded-full flex items-center justify-center">
                            <ChevronLeft className="w-4 h-4 text-neutral-600" />
                        </button>
                        <button className="w-8 h-8 border border-neutral-200 hover:border-primary rounded-full flex items-center justify-center">
                            <ChevronRight className="w-4 h-4 text-neutral-600" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Large Featured Card */}
                {filteredArticles[0] && (
                    <Link to={`/article/${filteredArticles[0].id}`} className="lg:row-span-2 card group cursor-pointer">
                        <div className="relative h-64 lg:h-full overflow-hidden">
                            <img
                                src={filteredArticles[0].imageUrl}
                                alt={filteredArticles[0].title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="flex items-center gap-2 text-xs text-white/80 mb-2">
                                    <span className="font-semibold text-primary capitalize">{filteredArticles[0].category}</span>
                                    <span>•</span>
                                    <span>{filteredArticles[0].publishedAt}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                    {filteredArticles[0].title}
                                </h3>
                            </div>
                        </div>
                    </Link>
                )}

                {/* Smaller Cards */}
                <div className="lg:col-span-2 space-y-4">
                    {filteredArticles.slice(1, 4).map((article) => (
                        <Link to={`/article/${article.id}`} key={article.id} className="flex gap-4 group cursor-pointer bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-28 h-28 shrink-0 rounded-lg overflow-hidden">
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                                        <span className="font-semibold text-primary capitalize">{article.category}</span>
                                        <span>•</span>
                                        <span>{article.publishedAt}</span>
                                    </div>
                                    <h3 className="font-bold text-neutral-800 line-clamp-2 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>
                                </div>
                                {/* Social Share Buttons */}
                                <div className="flex items-center gap-2 mt-2">
                                    <button
                                        onClick={(e) => handleShare(e, 'facebook', article)}
                                        className="p-1.5 rounded-full bg-neutral-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                                    >
                                        <Facebook className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                        onClick={(e) => handleShare(e, 'twitter', article)}
                                        className="p-1.5 rounded-full bg-neutral-100 hover:bg-sky-100 hover:text-sky-500 transition-colors"
                                    >
                                        <Twitter className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                        onClick={(e) => handleShare(e, 'whatsapp', article)}
                                        className="p-1.5 rounded-full bg-neutral-100 hover:bg-green-100 hover:text-green-600 transition-colors"
                                    >
                                        <Share2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
