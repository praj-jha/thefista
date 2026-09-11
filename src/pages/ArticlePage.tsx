import { useParams, Link } from 'react-router-dom';
import { User, ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin, Link2, MessageCircle, Calendar, Clock, Check } from 'lucide-react';
import { articles, categories } from '../data/articles';
import { useState } from 'react';
import Seo from '../seo/Seo';
import { buildArticleSeo } from '../seo/builders';
import { toISODate } from '../seo/config';
import NotFoundPage from './NotFoundPage';

export default function ArticlePage() {
    const { articleId } = useParams<{ articleId: string }>();
    const [copySuccess, setCopySuccess] = useState(false);

    const article = articles.find(a => a.id === articleId);
    const category = categories.find(c => c.id === article?.category);

    if (!article) {
        return <NotFoundPage />;
    }

    const articleUrl = typeof window !== 'undefined' ? window.location.href : `https://thefista.in/article/${article.id}`;
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

    const currentIdx = articles.findIndex(a => a.id === articleId);
    const prevArticle = currentIdx > 0 ? articles[currentIdx - 1] : null;
    const nextArticle = currentIdx < articles.length - 1 ? articles[currentIdx + 1] : null;

    return (
        <div className="min-h-screen bg-white">
            <Seo {...buildArticleSeo(article, category)} />

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="border-b border-neutral-200">
                <div className="container-page py-3 flex items-center gap-2 text-[12px]">
                    <Link to="/" className="text-neutral-400 hover:text-primary transition-colors font-medium">Home</Link>
                    <span className="text-neutral-300">/</span>
                    <Link to={`/category/${category?.slug || article.category}`} className="text-neutral-400 hover:text-primary transition-colors font-medium capitalize">{category?.name || article.category}</Link>
                    <span className="text-neutral-300">/</span>
                    <span className="text-neutral-600 font-semibold truncate max-w-xs">{article.title}</span>
                </div>
            </nav>

            <article>
                {/* Hero Image */}
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[34rem] overflow-hidden">
                    <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0">
                        <div className="container-page pb-9 lg:pb-14">
                            <span className="chip mb-4">{category?.name || article.category}</span>
                            <h1 className="font-display text-white text-[1.9rem] md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.04] max-w-4xl mt-4">
                                {article.title}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Meta Bar */}
                <div className="bg-white/90 backdrop-blur-xl border-b border-neutral-200 sticky top-0 z-30">
                    <div className="container-page py-3 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                                    <User className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <span className="block font-bold text-secondary text-sm leading-tight">{article.author}</span>
                                    <span className="block text-[11px] text-neutral-400">The Fista</span>
                                </div>
                            </div>
                            <div className="hidden sm:flex items-center gap-4 text-xs text-neutral-400 font-medium">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <time dateTime={toISODate(article.publishedAt)}>{article.publishedAt}</time>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                        </div>

                        {/* Share */}
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-neutral-300 hidden sm:block">Share</span>
                            {[
                                { platform: 'facebook' as const, icon: Facebook, hoverBg: 'hover:bg-blue-600' },
                                { platform: 'twitter' as const, icon: Twitter, hoverBg: 'hover:bg-sky-500' },
                                { platform: 'linkedin' as const, icon: Linkedin, hoverBg: 'hover:bg-blue-700' },
                                { platform: 'whatsapp' as const, icon: MessageCircle, hoverBg: 'hover:bg-green-500' },
                            ].map(({ platform, icon: Icon, hoverBg }) => (
                                <button
                                    key={platform}
                                    aria-label={`Share on ${platform}`}
                                    onClick={() => handleShare(platform)}
                                    className={`w-9 h-9 bg-neutral-100 ${hoverBg} hover:text-white text-neutral-500 rounded-full flex items-center justify-center transition-all duration-200`}
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                </button>
                            ))}
                            <button
                                aria-label="Copy link"
                                onClick={copyToClipboard}
                                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${copySuccess ? 'bg-green-500 text-white' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                            >
                                {copySuccess ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="container-page py-12 lg:py-16">
                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8">
                            <p className="font-display text-xl lg:text-[1.6rem] text-secondary leading-snug mb-10 border-l-4 border-primary pl-6">
                                {article.excerpt}
                            </p>

                            <div
                                className="article-prose max-w-[68ch]"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />

                            {/* Tags / Share Footer */}
                            <div className="mt-12 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div className="flex items-center flex-wrap gap-2">
                                        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-neutral-400">Tags</span>
                                        <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-primary-light text-primary">
                                            {category?.name}
                                        </span>
                                        <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-white border border-neutral-200 text-neutral-500 rounded-full">India</span>
                                        <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-white border border-neutral-200 text-neutral-500 rounded-full">2026</span>
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
                                                className={`px-4 py-2 rounded-full ${bg} text-white text-[11px] font-bold uppercase tracking-wider transition-colors`}
                                            >
                                                {label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Prev / Next */}
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                {prevArticle ? (
                                    <Link to={`/article/${prevArticle.id}`} className="group p-5 rounded-2xl bg-white border border-neutral-200 hover:border-primary/40 hover:shadow-sm transition-all">
                                        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-neutral-400 flex items-center gap-1 mb-2">
                                            <ArrowLeft className="w-3 h-3" /> Previous
                                        </span>
                                        <h4 className="font-display font-bold text-sm text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                            {prevArticle.title}
                                        </h4>
                                    </Link>
                                ) : <div />}
                                {nextArticle ? (
                                    <Link to={`/article/${nextArticle.id}`} className="group p-5 rounded-2xl bg-white border border-neutral-200 hover:border-primary/40 hover:shadow-sm transition-all text-right">
                                        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-neutral-400 flex items-center gap-1 justify-end mb-2">
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
                            <div className="sticky top-24 space-y-6">
                                <div className="rounded-2xl border border-neutral-200 overflow-hidden">
                                    <div className="px-5 py-4 border-b border-neutral-200 bg-neutral-50">
                                        <h2 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">Related Stories</h2>
                                    </div>
                                    <div className="divide-y divide-neutral-100">
                                        {relatedArticles.map((related) => (
                                            <Link
                                                key={related.id}
                                                to={`/article/${related.id}`}
                                                className="flex gap-4 p-4 group hover:bg-neutral-50 transition-colors"
                                            >
                                                <div className="w-20 h-16 shrink-0 overflow-hidden rounded-lg">
                                                    <img src={related.imageUrl} alt={related.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-sm font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                                        {related.title}
                                                    </h3>
                                                    <span className="text-[11px] text-neutral-400 mt-1 block">{related.publishedAt}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    {category && (
                                        <Link
                                            to={`/category/${category.slug}`}
                                            className="flex items-center justify-center gap-2 py-3 border-t border-neutral-200 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary hover:bg-primary-light transition-colors"
                                        >
                                            More {category.name} <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    )}
                                </div>

                                {/* Newsletter Sidebar */}
                                <div className="rounded-2xl bg-secondary p-6">
                                    <h2 className="font-display text-lg text-white mb-2">Stay Updated</h2>
                                    <p className="text-white/50 text-sm mb-4">Get the latest stories delivered to your inbox.</p>
                                    <input
                                        type="email"
                                        aria-label="Email address"
                                        placeholder="Your email"
                                        className="w-full px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm mb-3 focus:outline-none focus:border-primary transition-colors"
                                    />
                                    <button className="w-full py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-[11px] font-extrabold uppercase tracking-[0.16em] transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            {/* More From Category */}
            {relatedArticles.length > 0 && (
                <section className="bg-neutral-50 border-t border-neutral-200" aria-label={`More in ${category?.name}`}>
                    <div className="container-page py-16">
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <span className="section-eyebrow">More in {category?.name}</span>
                                <h2 className="section-heading mt-2">Keep Reading</h2>
                                <div className="section-rule" />
                            </div>
                            {category && (
                                <Link to={`/category/${category.slug}`} className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary hover:text-primary-dark transition-colors flex items-center gap-1.5">
                                    View All <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            )}
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedArticles.map((related) => (
                                <Link
                                    key={related.id}
                                    to={`/article/${related.id}`}
                                    className="card group"
                                >
                                    <div className="relative aspect-16/10 overflow-hidden">
                                        <img
                                            src={related.imageUrl}
                                            alt={related.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="chip">{related.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-display text-lg text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                            {related.title}
                                        </h3>
                                        <p className="text-neutral-500 text-sm mt-2 line-clamp-2">{related.excerpt}</p>
                                        <div className="flex items-center gap-3 mt-4 pt-3 border-t border-neutral-100 text-[11px] text-neutral-400 font-medium">
                                            <span>{related.publishedAt}</span>
                                            <span className="w-1 h-1 rounded-full bg-neutral-300" />
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
