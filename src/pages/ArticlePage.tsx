import { useParams, Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, Link2, Mail, MessageCircle, Calendar, BookOpen } from 'lucide-react';
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
        <div className="min-h-screen bg-white">
            {/* Clean Header Bar */}
            <div className="bg-neutral-50 border-b">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Article Header */}
            <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left: Content */}
                    <div className="order-2 lg:order-1">
                        {/* Category Badge */}
                        <div
                            className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4"
                            style={{ backgroundColor: category?.color || '#FF6B35' }}
                        >
                            {category?.name || article.category}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary leading-tight mb-6">
                            {article.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-neutral-500 text-sm mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                    <User className="w-4 h-4 text-primary" />
                                </div>
                                <span className="font-medium text-neutral-700">{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-400">
                                <Calendar className="w-4 h-4" />
                                <span>{article.publishedAt}</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-400">
                                <BookOpen className="w-4 h-4" />
                                <span>{article.readTime}</span>
                            </div>
                        </div>

                        {/* Excerpt */}
                        <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                            {article.excerpt}
                        </p>

                        {/* Share Buttons - Compact */}
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-neutral-500">Share:</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleShare('facebook')}
                                    className="w-9 h-9 bg-neutral-100 hover:bg-blue-600 hover:text-white text-neutral-600 rounded-full flex items-center justify-center transition-all duration-200"
                                    title="Share on Facebook"
                                >
                                    <Facebook className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleShare('twitter')}
                                    className="w-9 h-9 bg-neutral-100 hover:bg-sky-500 hover:text-white text-neutral-600 rounded-full flex items-center justify-center transition-all duration-200"
                                    title="Share on Twitter"
                                >
                                    <Twitter className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleShare('linkedin')}
                                    className="w-9 h-9 bg-neutral-100 hover:bg-blue-700 hover:text-white text-neutral-600 rounded-full flex items-center justify-center transition-all duration-200"
                                    title="Share on LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleShare('whatsapp')}
                                    className="w-9 h-9 bg-neutral-100 hover:bg-green-500 hover:text-white text-neutral-600 rounded-full flex items-center justify-center transition-all duration-200"
                                    title="Share on WhatsApp"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={copyToClipboard}
                                    className={`w-9 h-9 ${copySuccess ? 'bg-green-500 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'} rounded-full flex items-center justify-center transition-all duration-200`}
                                    title={copySuccess ? 'Copied!' : 'Copy Link'}
                                >
                                    <Link2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Featured Image */}
                    <div className="order-1 lg:order-2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={article.imageUrl}
                                alt={article.title}
                                className="w-full h-64 lg:h-80 xl:h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="bg-neutral-50 py-12">
                <div className="max-w-3xl mx-auto px-4">
                    <article className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
                        <div
                            className="prose prose-lg max-w-none text-neutral-700 
                                       prose-headings:text-secondary prose-headings:font-bold
                                       prose-p:leading-relaxed prose-p:text-neutral-600
                                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                       prose-strong:text-secondary
                                       prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Bottom Share Section */}
                        <div className="mt-12 pt-8 border-t border-neutral-200">
                            <h3 className="font-bold text-secondary mb-4 text-lg">Enjoyed this article?</h3>
                            <p className="text-neutral-500 mb-4 text-sm">Share it with your network</p>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => handleShare('facebook')}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors"
                                >
                                    <Facebook className="w-4 h-4" />
                                    Facebook
                                </button>
                                <button
                                    onClick={() => handleShare('twitter')}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-sm font-medium transition-colors"
                                >
                                    <Twitter className="w-4 h-4" />
                                    Twitter
                                </button>
                                <button
                                    onClick={() => handleShare('whatsapp')}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm font-medium transition-colors"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    WhatsApp
                                </button>
                                <button
                                    onClick={() => handleShare('linkedin')}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-full text-sm font-medium transition-colors"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="max-w-6xl mx-auto px-4 py-12">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-secondary">Related Articles</h2>
                            <p className="text-neutral-500 text-sm mt-1">More stories you might enjoy</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {relatedArticles.map((related) => (
                            <Link
                                key={related.id}
                                to={`/article/${related.id}`}
                                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={related.imageUrl}
                                        alt={related.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="p-5">
                                    <div className="text-xs text-primary font-semibold capitalize mb-2 bg-primary/10 inline-block px-2 py-0.5 rounded">
                                        {related.category}
                                    </div>
                                    <h3 className="font-bold text-neutral-800 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                        {related.title}
                                    </h3>
                                    <p className="text-neutral-500 text-sm mt-2 line-clamp-2">{related.excerpt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
