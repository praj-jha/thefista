import { Link } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';
import type { Article } from '../types';

interface BigStoryProps {
    article: Article;
}

export default function BigStory({ article }: BigStoryProps) {
    return (
        <section className="bg-neutral-900 text-white" aria-label="The Big Story">
            <div className="container-page py-10 lg:py-14">
                <div className="flex items-center gap-3 mb-6">
                    <span className="section-tab">The Big Story</span>
                </div>

                <Link to={`/article/${article.id}`} className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center group">
                    <div className="relative aspect-4/3 lg:aspect-video overflow-hidden rounded-sm bg-white/5">
                        <img
                            src={article.imageUrl}
                            alt={article.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        />
                        <div className="absolute top-0 left-0">
                            <span className="chip rounded-none">{article.category}</span>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-[3rem] leading-[1.04] group-hover:text-primary transition-colors">
                            {article.title}
                        </h2>
                        <p className="text-white/70 text-base lg:text-lg leading-relaxed mt-4 max-w-xl">
                            {article.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-white/50 text-xs font-cond uppercase tracking-wide mt-5">
                            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {article.author}</span>
                            <span className="w-1 h-1 rounded-full bg-white/30" />
                            <span>{article.publishedAt}</span>
                            <span className="w-1 h-1 rounded-full bg-white/30" />
                            <span>{article.readTime}</span>
                        </div>
                        <span className="btn-primary mt-6">
                            Read Full Story <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
}
