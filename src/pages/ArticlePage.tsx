import { useParams, Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, Link2, Mail, MessageCircle } from 'lucide-react';
import { articles, categories } from '../data/articles';
import { useState } from 'react';

export default function ArticlePage() {
    const { articleId } = useParams<{ articleId: string }>();
    const [copySuccess, setCopySuccess] = useState(false);

    const article = articles.find(a => a.id === articleId);
    const category = categories.find(c => c.id === article?.category);

    if (!article) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold text-secondary mb-4">Article Not Found</h1>
                <p className="text-neutral-600 mb-8">The article you're looking for doesn't exist.</p>
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

    // Get related articles from the same category
    const relatedArticles = articles
        .filter(a => a.category === article.category && a.id !== article.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero Image */}
            <div className="relative h-[300px] md:h-[450px] w-full">
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Back Button */}
                <Link
                    to="/"
                    className="absolute top-6 left-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-32 relative z-10">
                {/* Article Card */}
                <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-6 md:p-10">
                        {/* Category Badge */}
                        <div
                            className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold mb-4"
                            style={{ backgroundColor: category?.color || '#FF6B35' }}
                        >
                            {category?.name || article.category}
                        </div>

                        {/* Title */}
                        <h1 className="text-2xl md:text-4xl font-bold text-secondary leading-tight mb-6">
                            {article.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-neutral-500 text-sm mb-8 pb-8 border-b">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{article.publishedAt} ago</span>
                            </div>
                            <span className="text-primary font-medium">{article.readTime}</span>
                        </div>

                        {/* Share Section */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 p-4 bg-neutral-50 rounded-xl">
                            <span className="font-semibold text-secondary">Share this article:</span>
                            <div className="flex flex-wrap items-center gap-2">
                                <button
                                    onClick={() => handleShare('facebook')}
                                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                                    title="Share on Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => handleShare('twitter')}
                                    className="w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center transition-colors"
                                    title="Share on Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => handleShare('linkedin')}
                                    className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors"
                                    title="Share on LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => handleShare('whatsapp')}
                                    className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors"
                                    title="Share on WhatsApp"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                </button>
                                <a
                                    href={shareLinks.email}
                                    className="w-10 h-10 bg-neutral-600 hover:bg-neutral-700 text-white rounded-full flex items-center justify-center transition-colors"
                                    title="Share via Email"
                                >
                                    <Mail className="w-5 h-5" />
                                </a>
                                <button
                                    onClick={copyToClipboard}
                                    className={`w-10 h-10 ${copySuccess ? 'bg-green-500' : 'bg-neutral-400 hover:bg-neutral-500'} text-white rounded-full flex items-center justify-center transition-colors`}
                                    title={copySuccess ? 'Copied!' : 'Copy Link'}
                                >
                                    <Link2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Excerpt */}
                        <p className="text-xl text-neutral-600 leading-relaxed mb-8 font-medium">
                            {article.excerpt}
                        </p>

                        {/* Article Content */}
                        <div
                            className="prose prose-lg max-w-none text-neutral-700"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Bottom Share Section */}
                        <div className="mt-12 pt-8 border-t">
                            <h3 className="font-bold text-secondary mb-4">Enjoyed this article? Share it with your network:</h3>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => handleShare('facebook')}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                >
                                    <Facebook className="w-4 h-4" />
                                    Facebook
                                </button>
                                <button
                                    onClick={() => handleShare('twitter')}
                                    className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                                >
                                    <Twitter className="w-4 h-4" />
                                    Twitter
                                </button>
                                <button
                                    onClick={() => handleShare('whatsapp')}
                                    className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    WhatsApp
                                </button>
                                <button
                                    onClick={() => handleShare('linkedin')}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="mt-12 mb-8">
                        <h2 className="text-2xl font-bold text-secondary mb-6">Related Articles</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedArticles.map((related) => (
                                <Link
                                    key={related.id}
                                    to={`/article/${related.id}`}
                                    className="card group cursor-pointer"
                                >
                                    <div className="relative h-40 overflow-hidden">
                                        <img
                                            src={related.imageUrl}
                                            alt={related.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="text-xs text-primary font-semibold capitalize mb-2">
                                            {related.category}
                                        </div>
                                        <h3 className="font-bold text-neutral-800 line-clamp-2 group-hover:text-primary transition-colors">
                                            {related.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
