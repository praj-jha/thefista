import { useParams, Link } from 'react-router-dom';
import { Facebook, Twitter, Share2, ArrowRight, Clock, User, ArrowUpRight } from 'lucide-react';
import { categories, getArticlesByCategory, articles as allArticles } from '../data/articles';
import type { Article } from '../types';
import Seo from '../seo/Seo';
import { buildCategorySeo } from '../seo/builders';
import NotFoundPage from './NotFoundPage';

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
        return <NotFoundPage />;
    }

    const featuredArticle = categoryArticles[0];
    const restArticles = categoryArticles.slice(1);

    const otherCategoryArticles = allArticles
        .filter(a => a.category !== category.id)
        .slice(0, 5);

    return (
        <div className="bg-neutral-50 min-h-screen">
            <Seo {...buildCategorySeo(category, categoryArticles)} />

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="border-b border-neutral-200 bg-white">
                <div className="container-page py-2.5 flex items-center gap-2 text-[12px] font-cond uppercase tracking-wide">
                    <Link to="/" className="text-neutral-400 hover:text-primary transition-colors">Home</Link>
                    <span className="text-neutral-300">/</span>
                    <span className="font-bold text-primary">{category.name}</span>
                </div>
            </nav>

            {/* Category header band */}
            <div className="bg-neutral-900 text-white">
                <div className="container-page py-8 lg:py-10">
                    <div className="flex items-center gap-3">
                        <span className="w-1.5 h-9 rounded-full" style={{ backgroundColor: category.color }} />
                        <h1 className="font-display text-4xl lg:text-5xl uppercase leading-none">
                            {category.name}
                        </h1>
                    </div>
                    <p className="text-white/60 text-sm lg:text-base max-w-xl mt-3">
                        Latest {category.name.toLowerCase()} news, updates and analysis from India and around the world.
                    </p>
                    <div className="flex items-center gap-3 mt-4 text-white/40 text-[11px] font-cond uppercase tracking-wide">
                        <span>{categoryArticles.length} Articles</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>Updated {categoryArticles[0]?.publishedAt || 'Recently'}</span>
                    </div>
                </div>
            </div>

            {/* Featured Lead Story */}
            {featuredArticle && (
                <div className="container-page pt-8 mb-10">
                    <Link to={`/article/${featuredArticle.id}`} className="block group">
                        <div className="grid lg:grid-cols-12 bg-white border border-neutral-200 rounded-sm overflow-hidden hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.5)] transition-all duration-200">
                            <div className="lg:col-span-7 relative h-64 lg:h-[24rem] overflow-hidden">
                                <img
                                    src={featuredArticle.imageUrl}
                                    alt={featuredArticle.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-0 left-0">
                                    <span className="chip rounded-none">Featured</span>
                                </div>
                            </div>
                            <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-center">
                                <span className="category-badge">{featuredArticle.category}</span>
                                <h2 className="font-display text-2xl lg:text-[1.9rem] text-secondary group-hover:text-primary transition-colors leading-tight mt-1.5 mb-3">
                                    {featuredArticle.title}
                                </h2>
                                <p className="text-neutral-500 text-sm lg:text-[15px] leading-relaxed mb-5 line-clamp-3">
                                    {featuredArticle.excerpt}
                                </p>
                                <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-cond uppercase tracking-wide">
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5" />
                                        <span>{featuredArticle.author}</span>
                                    </div>
                                    <span className="w-1 h-1 rounded-full bg-neutral-300" />
                                    <span>{featuredArticle.publishedAt}</span>
                                    <span className="w-1 h-1 rounded-full bg-neutral-300" />
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{featuredArticle.readTime}</span>
                                    </div>
                                </div>
                                <span className="btn-primary mt-5 self-start">
                                    Read Full Story <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            )}

            {/* Main Content */}
            <div className="container-page pb-14">
                <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8">
                        {restArticles.length > 0 ? (
                            <>
                                <div className="section-bar">
                                    <span className="section-tab">More {category.name}</span>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {restArticles.map((article) => (
                                        <Link to={`/article/${article.id}`} key={article.id} className="card group flex flex-col">
                                            <div className="relative aspect-16/10 overflow-hidden">
                                                <img
                                                    src={article.imageUrl}
                                                    alt={article.title}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute top-0 left-0">
                                                    <span className="chip rounded-none">{article.category}</span>
                                                </div>
                                            </div>
                                            <div className="p-4 flex flex-col flex-1">
                                                <h3 className="text-[16px] font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                                    {article.title}
                                                </h3>
                                                <p className="text-[13.5px] text-neutral-500 line-clamp-2 mt-1.5 mb-3">
                                                    {article.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between pt-2.5 border-t border-neutral-100 mt-auto">
                                                    <span className="text-[11px] text-neutral-400 font-cond uppercase tracking-wide">{article.publishedAt} · {article.readTime}</span>
                                                    <div className="flex items-center gap-1.5">
                                                        <button aria-label="Share on Facebook" onClick={(e) => handleShare(e, 'facebook', article)} className="p-1.5 rounded-full bg-neutral-50 hover:bg-blue-50 hover:text-blue-600 text-neutral-400 transition-colors">
                                                            <Facebook className="w-3 h-3" />
                                                        </button>
                                                        <button aria-label="Share on Twitter" onClick={(e) => handleShare(e, 'twitter', article)} className="p-1.5 rounded-full bg-neutral-50 hover:bg-sky-50 hover:text-sky-500 text-neutral-400 transition-colors">
                                                            <Twitter className="w-3 h-3" />
                                                        </button>
                                                        <button aria-label="Share on WhatsApp" onClick={(e) => handleShare(e, 'whatsapp', article)} className="p-1.5 rounded-full bg-neutral-50 hover:bg-green-50 hover:text-green-600 text-neutral-400 transition-colors">
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
                            <div className="text-center py-20 rounded-sm bg-white border border-neutral-200">
                                <p className="text-neutral-500 text-lg font-display uppercase">No more articles in this section.</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 space-y-6">
                            <div className="rounded-sm border border-neutral-200 bg-white overflow-hidden">
                                <div className="section-bar mb-0 border-b-2 border-primary px-4 pt-3 pb-2">
                                    <h3 className="section-bar-title text-primary">Sections</h3>
                                </div>
                                <div className="p-3 grid grid-cols-2 gap-2">
                                    {categories.filter(c => c.slug !== categorySlug).map((cat) => (
                                        <Link
                                            key={cat.slug}
                                            to={`/category/${cat.slug}`}
                                            className="px-3 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-wide font-cond text-neutral-600 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white text-center transition-all"
                                        >
                                            {cat.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-sm border border-neutral-200 bg-white overflow-hidden">
                                <div className="section-bar mb-0 border-b-2 border-primary px-4 pt-3 pb-2">
                                    <h3 className="section-bar-title text-primary">More News</h3>
                                </div>
                                <div className="divide-y divide-neutral-100">
                                    {otherCategoryArticles.map((article) => (
                                        <Link key={article.id} to={`/article/${article.id}`} className="flex gap-3 p-4 group hover:bg-neutral-50 transition-colors">
                                            <div className="w-16 h-14 shrink-0 overflow-hidden rounded-sm">
                                                <img src={article.imageUrl} alt={article.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="category-badge block mb-0.5">{article.category}</span>
                                                <h4 className="text-[13px] font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                                    {article.title}
                                                </h4>
                                            </div>
                                            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-primary transition-colors shrink-0" />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-sm bg-neutral-900 p-6">
                                <h3 className="font-display text-xl uppercase text-white mb-2">Stay Updated</h3>
                                <p className="text-white/50 text-sm mb-4">Get the latest {category.name.toLowerCase()} stories in your inbox.</p>
                                <input
                                    type="email"
                                    aria-label="Email address"
                                    placeholder="Your email"
                                    className="w-full px-4 py-2.5 rounded-sm bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm mb-3 focus:outline-none focus:border-primary transition-colors"
                                />
                                <button className="w-full py-2.5 rounded-sm bg-primary hover:bg-primary-dark text-white text-[12px] font-bold uppercase tracking-wide font-cond transition-colors">
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
