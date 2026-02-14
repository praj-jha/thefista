import { useParams, Link } from 'react-router-dom';
import { Facebook, Twitter, Share2 } from 'lucide-react';
import { categories, getArticlesByCategory } from '../data/articles';
import type { Article } from '../types';

export default function CategoryPage() {
    const { categorySlug } = useParams<{ categorySlug: string }>();

    const category = categories.find(c => c.slug === categorySlug);
    const categoryArticles = categorySlug ? getArticlesByCategory(categorySlug) : [];

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

    if (!category) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold text-secondary mb-4">Category Not Found</h1>
                <p className="text-neutral-600">The category you're looking for doesn't exist.</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Category Header */}
            <div className="mb-8">
                <div
                    className="inline-block px-4 py-2 rounded-full text-white text-sm font-bold mb-4"
                    style={{ backgroundColor: category.color }}
                >
                    {category.name}
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-secondary">
                    Latest {category.name} News
                </h1>
                <p className="text-neutral-600 mt-2">
                    Stay updated with the latest {category.name.toLowerCase()} news from India and around the world.
                </p>
            </div>

            {/* Articles Grid */}
            {categoryArticles.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryArticles.map((article, index) => (
                        <Link
                            to={`/article/${article.id}`}
                            key={article.id}
                            className={`card group cursor-pointer ${index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                                }`}
                        >
                            <div className={`relative overflow-hidden ${index === 0 ? 'h-64 lg:h-full' : 'h-48'
                                }`}>
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {index === 0 && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                )}
                                {index === 0 && (
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="flex items-center gap-2 text-xs text-white/80 mb-2">
                                            <span className="font-semibold text-primary">{article.category}</span>
                                            <span>•</span>
                                            <span>{article.publishedAt}</span>
                                        </div>
                                        <h2 className="text-xl lg:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h2>
                                    </div>
                                )}
                            </div>
                            {index !== 0 && (
                                <div className="p-5">
                                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                                        <span className="font-semibold" style={{ color: category.color }}>
                                            {article.category}
                                        </span>
                                        <span>•</span>
                                        <span>{article.publishedAt}</span>
                                    </div>
                                    <h3 className="font-bold text-neutral-800 line-clamp-2 group-hover:text-primary transition-colors mb-3">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 line-clamp-2 mb-4">
                                        {article.excerpt}
                                    </p>
                                    {/* Social Share Buttons */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={(e) => handleShare(e, 'facebook', article)}
                                            className="p-2 rounded-full bg-neutral-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                                        >
                                            <Facebook className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={(e) => handleShare(e, 'twitter', article)}
                                            className="p-2 rounded-full bg-neutral-100 hover:bg-sky-100 hover:text-sky-500 transition-colors"
                                        >
                                            <Twitter className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={(e) => handleShare(e, 'whatsapp', article)}
                                            className="p-2 rounded-full bg-neutral-100 hover:bg-green-100 hover:text-green-600 transition-colors"
                                        >
                                            <Share2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-neutral-600 text-lg">No articles found in this category.</p>
                </div>
            )}
        </div>
    );
}
