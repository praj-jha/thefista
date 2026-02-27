import { useParams, Link } from 'react-router-dom';
import { Facebook, Twitter, Share2, ArrowRight, Clock, User } from 'lucide-react';
import { categories, getArticlesByCategory, articles as allArticles } from '../data/articles';
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
            <div className="max-w-350 mx-auto px-6 py-20 text-center">
                <h1 className="font-display text-4xl font-bold text-secondary mb-4">Category Not Found</h1>
                <p className="text-neutral-500 mb-6">The category you're looking for doesn't exist.</p>
                <Link to="/" className="text-primary hover:text-primary-dark text-sm font-bold uppercase tracking-widest transition-colors">
                    &larr; Back to Home
                </Link>
            </div>
        );
    }

    const featuredArticle = categoryArticles[0];
    const restArticles = categoryArticles.slice(1);

    // "Latest from other sections" for sidebar
    const otherCategoryArticles = allArticles
        .filter(a => a.category !== category.id)
        .slice(0, 5);

    return (
        <div className="bg-neutral-50 min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-neutral-200">
                <div className="max-w-350 mx-auto px-6 py-3 flex items-center gap-2 text-[12px]">
                    <Link to="/" className="text-neutral-400 hover:text-primary transition-colors font-medium">Home</Link>
                    <span className="text-neutral-300">/</span>
                    <span className="font-semibold text-secondary capitalize">{category.name}</span>
                </div>
            </div>

            {/* Category Hero Banner */}
            <div className="relative bg-secondary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    {/* Abstract geometric pattern */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)`,
                    }} />
                </div>
                <div className="max-w-350 mx-auto px-6 py-12 lg:py-16 relative z-10">
                    <div className="flex items-start gap-6">
                        <div
                            className="w-1.5 h-16 shrink-0 mt-1"
                            style={{ backgroundColor: category.color }}
                        />
                        <div>
                            <span
                                className="text-[10px] font-bold uppercase tracking-widest mb-2 block"
                                style={{ color: category.color }}
                            >
                                Section
                            </span>
                            <h1 className="font-display text-3xl lg:text-5xl font-bold text-white leading-tight mb-3">
                                {category.name}
                            </h1>
                            <p className="text-white/50 text-sm lg:text-base max-w-xl">
                                Stay updated with the latest {category.name.toLowerCase()} news from India and around the world.
                            </p>
                            <div className="flex items-center gap-6 mt-5 text-white/30 text-xs">
                                <span>{categoryArticles.length} Articles</span>
                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                <span>Updated {categoryArticles[0]?.publishedAt || 'Recently'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Lead Story */}
            {featuredArticle && (
                <div className="max-w-350 mx-auto px-6 -mt-6 relative z-10 mb-10">
                    <Link
                        to={`/article/${featuredArticle.id}`}
                        className="block group"
                    >
                        <div className="grid lg:grid-cols-12 bg-white border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="lg:col-span-7 relative h-64 lg:h-96 overflow-hidden">
                                <img
                                    src={featuredArticle.imageUrl}
                                    alt={featuredArticle.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span
                                        className="px-3 py-1.5 text-white text-[10px] font-bold uppercase tracking-widest"
                                        style={{ backgroundColor: category.color }}
                                    >
                                        Featured
                                    </span>
                                </div>
                            </div>
                            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center">
                                <span
                                    className="text-[10px] font-bold uppercase tracking-widest mb-3"
                                    style={{ color: category.color }}
                                >
                                    {featuredArticle.category}
                                </span>
                                <h2 className="font-display text-2xl lg:text-3xl font-bold text-secondary group-hover:text-primary transition-colors leading-tight mb-4">
                                    {featuredArticle.title}
                                </h2>
                                <p className="text-neutral-500 text-sm lg:text-base leading-relaxed mb-6 line-clamp-3">
                                    {featuredArticle.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-neutral-400">
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5" />
                                        <span className="font-medium">{featuredArticle.author}</span>
                                    </div>
                                    <span className="text-neutral-200">|</span>
                                    <span>{featuredArticle.publishedAt}</span>
                                    <span className="text-neutral-200">|</span>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{featuredArticle.readTime}</span>
                                    </div>
                                </div>
                                <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center gap-2">
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary group-hover:gap-3 flex items-center gap-1.5 transition-all">
                                        Read Full Story <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )}

            {/* Main Content Area */}
            <div className="max-w-350 mx-auto px-6 pb-14">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Articles Grid */}
                    <div className="lg:col-span-8">
                        {restArticles.length > 0 ? (
                            <>
                                <div className="flex items-end justify-between mb-6">
                                    <div>
                                        <h2 className="font-display text-xl font-bold text-secondary">Latest Stories</h2>
                                        <div className="section-rule" />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {restArticles.map((article) => (
                                        <Link
                                            to={`/article/${article.id}`}
                                            key={article.id}
                                            className="bg-white border border-neutral-200 overflow-hidden group hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="relative h-44 overflow-hidden">
                                                <img
                                                    src={article.imageUrl}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute top-3 left-3">
                                                    <span
                                                        className="px-2.5 py-1 text-white text-[9px] font-bold uppercase tracking-widest"
                                                        style={{ backgroundColor: category.color }}
                                                    >
                                                        {article.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-5">
                                                <h3 className="font-display font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors mb-2 leading-snug">
                                                    {article.title}
                                                </h3>
                                                <p className="text-sm text-neutral-500 line-clamp-2 mb-4">
                                                    {article.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                                                    <div className="flex items-center gap-3 text-[11px] text-neutral-400">
                                                        <span>{article.publishedAt}</span>
                                                        <span className="text-neutral-200">|</span>
                                                        <span>{article.readTime}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <button
                                                            onClick={(e) => handleShare(e, 'facebook', article)}
                                                            className="p-1.5 bg-neutral-50 hover:bg-blue-50 hover:text-blue-600 text-neutral-400 transition-colors rounded-sm"
                                                        >
                                                            <Facebook className="w-3 h-3" />
                                                        </button>
                                                        <button
                                                            onClick={(e) => handleShare(e, 'twitter', article)}
                                                            className="p-1.5 bg-neutral-50 hover:bg-sky-50 hover:text-sky-500 text-neutral-400 transition-colors rounded-sm"
                                                        >
                                                            <Twitter className="w-3 h-3" />
                                                        </button>
                                                        <button
                                                            onClick={(e) => handleShare(e, 'whatsapp', article)}
                                                            className="p-1.5 bg-neutral-50 hover:bg-green-50 hover:text-green-600 text-neutral-400 transition-colors rounded-sm"
                                                        >
                                                            <Share2 className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-20 bg-white border border-neutral-200">
                                <p className="text-neutral-500 text-lg font-display">No more articles in this section.</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 space-y-6">
                            {/* Browse other categories */}
                            <div className="bg-white border border-neutral-200">
                                <div className="px-5 py-4 border-b border-neutral-200">
                                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary">Browse Sections</h3>
                                </div>
                                <div className="p-4 grid grid-cols-2 gap-2">
                                    {categories
                                        .filter(c => c.slug !== categorySlug)
                                        .map((cat) => (
                                            <Link
                                                key={cat.slug}
                                                to={`/category/${cat.slug}`}
                                                className="px-3 py-2.5 text-[11px] font-bold uppercase tracking-wider text-neutral-600 border border-neutral-100 hover:border-neutral-300 hover:text-primary text-center transition-all"
                                            >
                                                {cat.name}
                                            </Link>
                                        ))}
                                </div>
                            </div>

                            {/* Latest from other sections */}
                            <div className="bg-white border border-neutral-200">
                                <div className="px-5 py-4 border-b border-neutral-200">
                                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary">From Other Sections</h3>
                                </div>
                                <div className="divide-y divide-neutral-100">
                                    {otherCategoryArticles.map((article) => (
                                        <Link
                                            key={article.id}
                                            to={`/article/${article.id}`}
                                            className="flex gap-3 p-4 group hover:bg-neutral-50 transition-colors"
                                        >
                                            <div className="w-16 h-14 shrink-0 overflow-hidden">
                                                <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-primary block mb-1">{article.category}</span>
                                                <h4 className="text-xs font-semibold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                                    {article.title}
                                                </h4>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="bg-secondary p-6">
                                <h3 className="font-display text-lg font-bold text-white mb-2">Stay Updated</h3>
                                <p className="text-white/50 text-sm mb-4">Get the latest {category.name.toLowerCase()} stories in your inbox</p>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-4 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm mb-3 focus:outline-none focus:border-primary transition-colors"
                                />
                                <button className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-[11px] font-bold uppercase tracking-widest transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
