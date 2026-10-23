import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { Article } from '../types';
import { getCategory } from '../data/articles';
import { toISODate } from '../seo/config';
import { imageSrcSet } from '../lib/images';

// Shared building blocks for story listings. Each story is a single link so
// the whole block is clickable; headlines pick up the accent on hover via
// the .story-link class.

export function Kicker({ article, className = '' }: { article: Article; className?: string }) {
    return <span className={`kicker ${className}`}>{getCategory(article.category)?.name ?? article.category}</span>;
}

export function StoryMeta({ article, author = true, readTime = false, className = '' }: {
    article: Article;
    author?: boolean;
    readTime?: boolean;
    className?: string;
}) {
    return (
        <p className={`meta ${className}`}>
            {author && <><span className="not-italic font-bold text-neutral-700">{article.author}</span><span className="mx-1.5">·</span></>}
            <time dateTime={toISODate(article.publishedAt)}>{article.publishedAt}</time>
            {readTime && <><span className="mx-1.5">·</span>{article.readTime}</>}
        </p>
    );
}

// `sizes` is the rendered width hint for srcset; the default suits cards in a
// multi-column grid. Pass `eager` for images visible on first paint.
export function StoryImage({ article, className = 'aspect-[3/2]', priority = false, eager = false, sizes = '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw' }: {
    article: Article;
    className?: string;
    priority?: boolean;
    eager?: boolean;
    sizes?: string;
}) {
    const srcSet = imageSrcSet(article);
    return (
        <div className={`overflow-hidden bg-neutral-100 ${className}`}>
            <img
                src={article.imageUrl}
                srcSet={srcSet}
                sizes={srcSet ? sizes : undefined}
                alt={article.imageAlt || article.title}
                width={article.imageWidth}
                height={article.imageHeight}
                loading={priority || eager ? 'eager' : 'lazy'}
                decoding={priority ? 'sync' : 'async'}
                fetchPriority={priority ? 'high' : undefined}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
        </div>
    );
}

export function SectionHead({ title, to, as: Tag = 'h2' }: { title: string; to?: string; as?: 'h2' | 'h3' }) {
    return (
        <div className="section-head">
            <Tag className="section-head-title">
                {to ? <Link to={to} className="hover:text-primary transition-colors">{title}</Link> : title}
            </Tag>
            {to && (
                <Link to={to} className="text-[13px] font-bold text-neutral-600 hover:text-primary inline-flex items-center gap-0.5 shrink-0">
                    More <ChevronRight className="w-3.5 h-3.5" />
                </Link>
            )}
        </div>
    );
}

// Image on top, kicker, headline, optional standfirst and meta.
export function StandardStory({ article, size = 'md', excerpt = false, image = true, priority = false, eager = false }: {
    article: Article;
    size?: 'xl' | 'lg' | 'md' | 'sm';
    excerpt?: boolean;
    image?: boolean;
    priority?: boolean;
    eager?: boolean;
}) {
    return (
        <Link to={`/article/${article.id}`} className="story-link group block">
            {image && <StoryImage article={article} priority={priority} eager={eager} className="aspect-[3/2] mb-3" />}
            <Kicker article={article} />
            <h3 className={`headline-${size} mt-2 transition-colors`}>{article.title}</h3>
            {excerpt && <p className="standfirst mt-2 line-clamp-3">{article.excerpt}</p>}
            <StoryMeta article={article} className="mt-2" />
        </Link>
    );
}

// Text on the left, small thumbnail on the right — for dense lists.
export function CompactStory({ article, image = true }: { article: Article; image?: boolean }) {
    return (
        <Link to={`/article/${article.id}`} className="story-link group flex gap-4 items-start">
            <div className="flex-1 min-w-0">
                <Kicker article={article} />
                <h3 className="headline-sm mt-1.5 transition-colors">{article.title}</h3>
                <StoryMeta article={article} author={false} className="mt-1.5" />
            </div>
            {image && <StoryImage article={article} sizes="112px" className="w-24 sm:w-28 aspect-[3/2] shrink-0" />}
        </Link>
    );
}

// Numbered "Most read" list.
export function RankedList({ articles }: { articles: Article[] }) {
    return (
        <ol className="divide-y divide-neutral-200">
            {articles.map((article, idx) => (
                <li key={article.id}>
                    <Link to={`/article/${article.id}`} className="story-link group flex gap-4 py-3.5">
                        <span className="text-[2rem] leading-[0.9] font-bold text-primary w-7 shrink-0 tabular-nums">{idx + 1}</span>
                        <div className="min-w-0">
                            <h3 className="headline-sm transition-colors">{article.title}</h3>
                            <StoryMeta article={article} author={false} className="mt-1" />
                        </div>
                    </Link>
                </li>
            ))}
        </ol>
    );
}

export function NewsletterBox({ title = 'The Morning Briefing', blurb = 'The day’s essential stories and analysis, in your inbox before breakfast.' }: {
    title?: string;
    blurb?: string;
}) {
    return (
        <div className="bg-paper border-t-[3px] border-secondary p-5">
            <p className="kicker">Newsletter</p>
            <h3 className="text-[1.35rem] font-bold leading-tight mt-2">{title}</h3>
            <p className="text-[15px] text-neutral-600 leading-snug mt-1.5 mb-4">{blurb}</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
                <input
                    type="email"
                    required
                    aria-label="Email address"
                    placeholder="Your email address"
                    className="w-full px-3 py-2.5 bg-white border border-neutral-300 text-[15px] placeholder-neutral-400 focus:outline-none focus:border-secondary"
                />
                <button type="submit" className="btn-primary w-full">Sign up</button>
            </form>
        </div>
    );
}
