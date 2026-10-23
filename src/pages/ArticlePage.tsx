import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin, Link2, MessageCircle, Mail, Check } from 'lucide-react';
import { articles, categories, getTrendingArticles } from '../data/articles';
import { useState, useEffect } from 'react';
import { SectionHead, StandardStory, CompactStory, RankedList, NewsletterBox } from '../components/news';
import Seo from '../seo/Seo';
import { buildArticleSeo } from '../seo/builders';
import { toISODate } from '../seo/config';
import NotFoundPage from './NotFoundPage';
import { imageSrcSet } from '../lib/images';

function ReadingProgress() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);
    return (
        <div className="fixed top-0 inset-x-0 h-[3px] z-[55] pointer-events-none" aria-hidden="true">
            <div className="h-full bg-primary origin-left" style={{ transform: `scaleX(${progress})` }} />
        </div>
    );
}

function initials(name: string) {
    return name.replace(/^Dr\.\s*/, '').split(/\s+/).map(p => p[0]).slice(0, 2).join('').toUpperCase();
}

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
        if (platform === 'email') {
            window.location.assign(shareLinks.email);
            return;
        }
        window.open(shareLinks[platform], '_blank', 'width=600,height=400');
    };

    const relatedArticles = articles
        .filter(a => a.category === article.category && a.id !== article.id)
        .slice(0, 3);
    const mostRead = getTrendingArticles().filter(a => a.id !== article.id).slice(0, 5);

    const currentIdx = articles.findIndex(a => a.id === articleId);
    const prevArticle = currentIdx > 0 ? articles[currentIdx - 1] : null;
    const nextArticle = currentIdx < articles.length - 1 ? articles[currentIdx + 1] : null;

    const imageCredit = article.imageCredit || 'The Fista';
    const heroSrcSet = imageSrcSet(article);
    const sectionName = category?.name || article.category;
    const sectionPath = `/category/${category?.slug || article.category}`;

    const shareButtons = (
        <div className="flex items-center gap-1.5">
            {[
                { platform: 'facebook' as const, icon: Facebook, label: 'Facebook' },
                { platform: 'twitter' as const, icon: Twitter, label: 'X (Twitter)' },
                { platform: 'whatsapp' as const, icon: MessageCircle, label: 'WhatsApp' },
                { platform: 'linkedin' as const, icon: Linkedin, label: 'LinkedIn' },
                { platform: 'email' as const, icon: Mail, label: 'email' },
            ].map(({ platform, icon: Icon, label }) => (
                <button
                    key={platform}
                    aria-label={`Share on ${label}`}
                    onClick={() => handleShare(platform)}
                    className="w-9 h-9 border border-neutral-300 text-neutral-700 hover:border-secondary hover:bg-secondary hover:text-white flex items-center justify-center transition-colors"
                >
                    <Icon className="w-4 h-4" />
                </button>
            ))}
            <button
                aria-label="Copy link"
                onClick={copyToClipboard}
                className={`w-9 h-9 border flex items-center justify-center transition-colors ${copySuccess ? 'border-green-700 bg-green-700 text-white' : 'border-neutral-300 text-neutral-700 hover:border-secondary hover:bg-secondary hover:text-white'}`}
            >
                {copySuccess ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
            </button>
        </div>
    );

    return (
        <div>
            <Seo {...buildArticleSeo(article, category)} />
            <ReadingProgress />

            <div className="container-page pt-6 lg:pt-10">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
                    <article className="lg:col-span-8 min-w-0">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px]">
                            <Link to="/" className="text-neutral-500 hover:text-primary">Home</Link>
                            <span className="text-neutral-300">/</span>
                            <Link to={sectionPath} className="kicker hover:text-primary-dark">{sectionName}</Link>
                        </nav>

                        <header className="mt-4">
                            <h1 className="font-bold text-secondary leading-[1.08] tracking-[-0.01em] text-[2.1rem] sm:text-[2.7rem] lg:text-[3.1rem]">
                                {article.title}
                            </h1>
                            <p className="text-[1.25rem] sm:text-[1.35rem] leading-[1.45] text-neutral-600 mt-4">
                                {article.excerpt}
                            </p>

                            <div className="mt-6 py-4 border-y border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="w-11 h-11 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-[15px] shrink-0" aria-hidden="true">
                                        {initials(article.author)}
                                    </span>
                                    <div className="leading-tight">
                                        <p className="text-[15px]">By <span className="font-bold">{article.author}</span></p>
                                        <p className="meta mt-1">
                                            <time dateTime={toISODate(article.publishedAt)}>{article.publishedAt}</time>
                                            <span className="mx-1.5">·</span>{article.readTime}
                                        </p>
                                    </div>
                                </div>
                                {shareButtons}
                            </div>
                        </header>

                        <figure className="mt-6 -mx-4 sm:mx-0">
                            <div className="aspect-[16/9] bg-neutral-100 overflow-hidden">
                                <img
                                    src={article.imageUrl}
                                    srcSet={heroSrcSet}
                                    sizes={heroSrcSet ? '(min-width: 1024px) 780px, 100vw' : undefined}
                                    alt={article.imageAlt || article.title}
                                    width={article.imageWidth}
                                    height={article.imageHeight}
                                    className="w-full h-full object-cover"
                                    fetchPriority="high"
                                    decoding="sync"
                                />
                            </div>
                            <figcaption className="px-4 sm:px-0 mt-2 text-[13px] text-neutral-500 leading-snug">
                                {article.imageAlt && <span className="text-neutral-700">{article.imageAlt}. </span>}
                                <span className="italic">
                                    Photograph:{' '}
                                    {article.imageSourceUrl
                                        ? <a href={article.imageSourceUrl} target="_blank" rel="noopener nofollow" className="underline decoration-neutral-300 underline-offset-2 hover:text-primary">{imageCredit}</a>
                                        : imageCredit}
                                    {article.imageLicenseUrl && <>{' '}(<a href={article.imageLicenseUrl} target="_blank" rel="noopener nofollow license" className="underline decoration-neutral-300 underline-offset-2 hover:text-primary">licence</a>)</>}
                                </span>
                            </figcaption>
                        </figure>

                        <div
                            className="article-prose max-w-[680px] mt-8"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Topics + share */}
                        <div className="max-w-[680px] mt-10 pt-5 border-t-[3px] border-secondary flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center flex-wrap gap-2">
                                <span className="text-[13px] italic text-neutral-500 mr-1">Topics</span>
                                <Link to={sectionPath} className="px-3 py-1 text-[13px] border border-neutral-300 hover:border-secondary hover:bg-secondary hover:text-white transition-colors">
                                    {sectionName}
                                </Link>
                            </div>
                            {shareButtons}
                        </div>

                        {/* Prev / Next */}
                        <div className="max-w-[680px] mt-8 grid sm:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">
                            {prevArticle ? (
                                <Link to={`/article/${prevArticle.id}`} className="story-link group bg-white p-5">
                                    <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-neutral-500 flex items-center gap-1 mb-2">
                                        <ArrowLeft className="w-3.5 h-3.5" /> Previous
                                    </span>
                                    <span className="headline-sm block transition-colors">{prevArticle.title}</span>
                                </Link>
                            ) : <div className="bg-white hidden sm:block" />}
                            {nextArticle ? (
                                <Link to={`/article/${nextArticle.id}`} className="story-link group bg-white p-5 sm:text-right">
                                    <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-neutral-500 flex items-center gap-1 sm:justify-end mb-2">
                                        Next <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                    <span className="headline-sm block transition-colors">{nextArticle.title}</span>
                                </Link>
                            ) : <div className="bg-white hidden sm:block" />}
                        </div>
                    </article>

                    {/* Rail */}
                    <aside className="lg:col-span-4" aria-label="More stories">
                        <div className="lg:sticky lg:top-16 space-y-10">
                            {/* Desktop only — on mobile the full-width section below covers it */}
                            {relatedArticles.length > 0 && (
                                <div className="hidden lg:block">
                                    <SectionHead title={`More in ${sectionName}`} to={sectionPath} as="h3" />
                                    <ul className="divide-y divide-neutral-200 -mt-1">
                                        {relatedArticles.map(related => (
                                            <li key={related.id} className="py-4 first:pt-0">
                                                <CompactStory article={related} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div>
                                <SectionHead title="Most Read" as="h3" />
                                <div className="-mt-3.5">
                                    <RankedList articles={mostRead} />
                                </div>
                            </div>
                            <NewsletterBox />
                        </div>
                    </aside>
                </div>
            </div>

            {/* More from the section */}
            {relatedArticles.length > 0 && (
                <section className="container-page mt-16" aria-label={`More in ${sectionName}`}>
                    <SectionHead title={`More from ${sectionName}`} to={sectionPath} />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                        {relatedArticles.map(related => (
                            <StandardStory key={related.id} article={related} size="md" excerpt />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
