import { useParams, Link } from 'react-router-dom';
import { User, ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin, Link2, MessageCircle, Calendar, Clock } from 'lucide-react';
import { articles, categories } from '../data/articles';
import { useState } from 'react';

export default function ArticlePage() {
    const { articleId } = useParams<{ articleId: string }>();
    const [copySuccess, setCopySuccess] = useState(false);

    const article = articles.find(a => a.id === articleId);
    const category = categories.find(c => c.id === article?.category);

    if (!article) {
        return (
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <h1 className="font-display text-4xl font-bold text-secondary mb-4">Article Not Found</h1>
                <p className="text-neutral-500 mb-8">The article you're looking for doesn't exist.</p>
                <Link to="/" className="btn-primary inline-flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </div>
        );
    }

    const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
    const encodedUrl = encodeURIComponent(articleUrl);
    const encodedTitle = encodeURIComponent(article.title);
    const encodedExcerpt = encodeURIComponent(article.excerpt);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
        email: `mailto:?subject=${encodedTitle}&body=${encodedExcerpt}%0A%0ARead more: ${encodedUrl}`,
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(articleUrl);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleShare = (platform: keyof typeof shareLinks) => {
        window.open(shareLinks[platform], '_blank', 'width=600,height=400');
    };

    const relatedArticles = articles
        .filter(a => a.category === article.category && a.id !== article.id)
        .slice(0, 3);

    // Get next & previous article for navigation
    const currentIdx = articles.findIndex(a => a.id === articleId);
    const prevArticle = currentIdx > 0 ? articles[currentIdx - 1] : null;
    const nextArticle = currentIdx < articles.length - 1 ? articles[currentIdx + 1] : null;

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Breadcrumb Nav */}
            <div className="bg-white border-b border-neutral-200">
                <div className="max-w-350 mx-auto px-6 py-3 flex items-center gap-2 text-[12px]">
                    <Link to="/" className="text-neutral-400 hover:text-primary transition-colors font-medium">Home</Link>
                    <span className="text-neutral-300">/</span>
                    <Link to={`/category/${category?.slug || article.category}`} className="text-neutral-400 hover:text-primary transition-colors font-medium capitalize">{category?.name || article.category}</Link>
                    <span className="text-neutral-300">/</span>
                    <span className="text-neutral-600 font-semibold truncate max-w-xs">{article.title}</span>
                </div>
            </div>

            {/* Hero Image — Full Width */}
            <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] overflow-hidden">
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="max-w-350 mx-auto px-6 pb-8 lg:pb-12">
                        <div
                            className="inline-block px-4 py-1.5 text-white text-[10px] font-bold uppercase tracking-widest mb-4"
                            style={{ backgroundColor: category?.color || '#DC2626' }}
                        >
                            {category?.name || article.category}
                        </div>
                        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight max-w-4xl">
                            {article.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Article Meta Bar */}
            <div className="bg-white border-b border-neutral-200 sticky top-12 z-30">
                <div className="max-w-350 mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4">
                    {/* Author & Meta */}
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                                <User className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <span className="block font-semibold text-secondary text-sm leading-tight">{article.author}</span>
                                <span className="block text-[11px] text-neutral-400">The Fista</span>
                            </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-4 text-xs text-neutral-400">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{article.publishedAt}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                    </div>

                    {/* Share */}
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 hidden sm:block">Share</span>
                        {[
                            { platform: 'facebook' as const, icon: Facebook, hoverBg: 'hover:bg-blue-600' },
                            { platform: 'twitter' as const, icon: Twitter, hoverBg: 'hover:bg-sky-500' },
                            { platform: 'linkedin' as const, icon: Linkedin, hoverBg: 'hover:bg-blue-700' },
                            { platform: 'whatsapp' as const, icon: MessageCircle, hoverBg: 'hover:bg-green-500' },
                        ].map(({ platform, icon: Icon, hoverBg }) => (
                            <button
                                key={platform}
                                onClick={() => handleShare(platform)}
                                className={`w-8 h-8 bg-neutral-100 ${hoverBg} hover:text-white text-neutral-500 rounded-md flex items-center justify-center transition-all duration-200`}
                            >
                                <Icon className="w-3.5 h-3.5" />
                            </button>
                        ))}
                        <button
                            onClick={copyToClipboard}
                            className={`w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 ${copySuccess ? 'bg-green-500 text-white' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                        >
                            <Link2 className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Article Body */}
            <div className="max-w-350 mx-auto px-6 py-10 lg:py-14">
                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        {/* Excerpt Lead */}
                        <p className="font-display text-xl lg:text-2xl text-neutral-700 leading-relaxed mb-8 border-l-4 border-primary pl-6">
                            {article.excerpt}
                        </p>

                        {/* Article Content */}
                        <article className="bg-white border border-neutral-200 p-6 lg:p-10">
                            <div
                                className="prose prose-lg max-w-none text-neutral-700
                                           prose-headings:font-display prose-headings:text-secondary prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                                           prose-p:leading-relaxed prose-p:text-neutral-600 prose-p:mb-5
                                           prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                           prose-strong:text-secondary
                                           prose-li:text-neutral-600
                                           prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic
                                           prose-img:rounded-lg prose-img:shadow-md"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />
                        </article>

                        {/* Tags / Share Footer */}
                        <div className="mt-8 p-6 bg-white border border-neutral-200">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Tags</span>
                                    <span
                                        className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-sm"
                                        style={{ backgroundColor: `${category?.color}15`, color: category?.color }}
                                    >
                                        {category?.name}
                                    </span>
                                    <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-500 rounded-sm">
                                        India
                                    </span>
                                    <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-500 rounded-sm">
                                        2026
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { platform: 'facebook' as const, label: 'Facebook', bg: 'bg-blue-600 hover:bg-blue-700' },
                                        { platform: 'twitter' as const, label: 'Twitter', bg: 'bg-sky-500 hover:bg-sky-600' },
                                        { platform: 'whatsapp' as const, label: 'WhatsApp', bg: 'bg-green-500 hover:bg-green-600' },
                                    ].map(({ platform, label, bg }) => (
                                        <button
                                            key={platform}
                                            onClick={() => handleShare(platform)}
                                            className={`px-4 py-2 ${bg} text-white text-[11px] font-bold uppercase tracking-wider transition-colors`}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Article Navigation */}
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            {prevArticle ? (
                                <Link to={`/article/${prevArticle.id}`} className="group p-5 bg-white border border-neutral-200 hover:border-primary/30 hover:shadow-sm transition-all">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-1 mb-2">
                                        <ArrowLeft className="w-3 h-3" /> Previous
                                    </span>
                                    <h4 className="font-display font-bold text-sm text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                        {prevArticle.title}
                                    </h4>
                                </Link>
                            ) : <div />}
                            {nextArticle ? (
                                <Link to={`/article/${nextArticle.id}`} className="group p-5 bg-white border border-neutral-200 hover:border-primary/30 hover:shadow-sm transition-all text-right">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-1 justify-end mb-2">
                                        Next <ArrowRight className="w-3 h-3" />
                                    </span>
                                    <h4 className="font-display font-bold text-sm text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                        {nextArticle.title}
                                    </h4>
                                </Link>
                            ) : <div />}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 space-y-6">
                            {/* Related Stories Sidebar */}
                            <div className="bg-white border border-neutral-200">
                                <div className="px-5 py-4 border-b border-neutral-200">
                                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary">Related Stories</h3>
                                </div>
                                <div className="divide-y divide-neutral-100">
                                    {relatedArticles.map((related) => (
                                        <Link
                                            key={related.id}
                                            to={`/article/${related.id}`}
                                            className="flex gap-4 p-4 group hover:bg-neutral-50 transition-colors"
                                        >
                                            <div className="w-20 h-16 shrink-0 overflow-hidden">
                                                <img src={related.imageUrl} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-semibold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                                    {related.title}
                                                </h4>
                                                <span className="text-[11px] text-neutral-400 mt-1 block">{related.publishedAt}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                {category && (
                                    <Link
                                        to={`/category/${category.slug}`}
                                        className="flex items-center justify-center gap-2 py-3 border-t border-neutral-200 text-[11px] font-bold uppercase tracking-widest text-primary hover:bg-primary/5 transition-colors"
                                    >
                                        More {category.name} <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                )}
                            </div>

                            {/* Newsletter Sidebar */}
                            <div className="bg-secondary p-6">
                                <h3 className="font-display text-lg font-bold text-white mb-2">Stay Updated</h3>
                                <p className="text-white/50 text-sm mb-4">Get the latest stories delivered to your inbox</p>
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

            {/* More From Category — Full Width Cards */}
            {relatedArticles.length > 0 && (
                <section className="bg-white border-t border-neutral-200">
                    <div className="max-w-350 mx-auto px-6 py-14">
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <h2 className="font-display text-2xl lg:text-3xl font-bold text-secondary">More in {category?.name}</h2>
                                <div className="section-rule" />
                            </div>
                            {category && (
                                <Link to={`/category/${category.slug}`} className="text-[11px] font-bold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors flex items-center gap-1.5">
                                    View All <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            )}
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedArticles.map((related) => (
                                <Link
                                    key={related.id}
                                    to={`/article/${related.id}`}
                                    className="group bg-white border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={related.imageUrl}
                                            alt={related.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="category-badge">{related.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-display font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                            {related.title}
                                        </h3>
                                        <p className="text-neutral-500 text-sm mt-2 line-clamp-2">{related.excerpt}</p>
                                        <div className="flex items-center gap-3 mt-4 pt-3 border-t border-neutral-100 text-[11px] text-neutral-400">
                                            <span>{related.publishedAt}</span>
                                            <span className="text-neutral-200">|</span>
                                            <span>{related.readTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
