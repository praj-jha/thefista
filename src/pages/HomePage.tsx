import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LiveScoreWidget from '../components/LiveScoreWidget';
import { Kicker, StoryMeta, StoryImage, SectionHead, StandardStory, CompactStory, RankedList, NewsletterBox } from '../components/news';
import Seo from '../seo/Seo';
import { buildHomeSeo } from '../seo/builders';
import { getActiveCategories, getLatestArticles, getFeaturedArticles, getTrendingArticles, liveMatches } from '../data/articles';
import type { Article } from '../types';

export default function HomePage() {
    const latest = getLatestArticles();
    const used = new Set<string>();
    // Take the next `n` stories from `pool` that haven't appeared higher up the page.
    const take = (pool: Article[], n: number) => {
        const picked: Article[] = [];
        for (const a of pool) {
            if (picked.length === n) break;
            if (used.has(a.id)) continue;
            used.add(a.id);
            picked.push(a);
        }
        return picked;
    };

    const featuredPool = [...getFeaturedArticles(), ...latest];
    const [lead] = take(featuredPool, 1);
    const leadRelated = take(latest.filter(a => a.category === lead.category), 2);
    const [secondary, ...leftText] = take(featuredPool, 3);
    const latestRail = take(latest, 6);
    const topStories = take([...getTrendingArticles(), ...latest], 4);
    const [inDepth] = take(latest, 1);
    const mostRead = getTrendingArticles().slice(0, 5);

    const sectionBlocks = getActiveCategories().map(category => {
        const inSection = latest.filter(a => a.category === category.id);
        // Prefer stories not yet shown on the page, then fall back to the rest.
        const ordered = [...inSection.filter(a => !used.has(a.id)), ...inSection.filter(a => used.has(a.id))];
        return { category, stories: ordered.slice(0, 4) };
    });

    return (
        <div>
            <Seo {...buildHomeSeo()} />
            <h1 className="sr-only">The Fista — News, analysis and opinion from India and the world</h1>

            {/* Lead package */}
            <section className="container-page pt-6 lg:pt-8" aria-label="Top news">
                <div className="grid lg:grid-cols-12">
                    {/* Lead story */}
                    <div className="lg:col-span-6 lg:order-2 lg:px-6 pb-6 lg:pb-0">
                        <Link to={`/article/${lead.id}`} className="story-link group block">
                            <StoryImage article={lead} priority sizes="(min-width: 1024px) 560px, 100vw" className="aspect-[3/2] mb-4" />
                            <Kicker article={lead} />
                            <h2 className="headline-xl mt-2.5 transition-colors">{lead.title}</h2>
                            <p className="standfirst text-[1.15rem] mt-3">{lead.excerpt}</p>
                            <StoryMeta article={lead} readTime className="mt-3" />
                        </Link>
                        {leadRelated.length > 0 && (
                            <ul className="mt-5 pt-4 rule grid sm:grid-cols-2 gap-4">
                                {leadRelated.map(a => (
                                    <li key={a.id}>
                                        <Link to={`/article/${a.id}`} className="story-link group block">
                                            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-500">Related</span>
                                            <h3 className="headline-sm mt-1 transition-colors">{a.title}</h3>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Secondary stories */}
                    <div className="lg:col-span-3 lg:order-1 lg:pr-6 lg:border-r border-neutral-200 border-t lg:border-t-0 pt-5 lg:pt-0 pb-6 lg:pb-0 divide-y divide-neutral-200">
                        {secondary && (
                            <div className="pb-5">
                                <StandardStory article={secondary} size="md" excerpt eager />
                            </div>
                        )}
                        {leftText.map(a => (
                            <div key={a.id} className="py-5 last:pb-0">
                                <StandardStory article={a} size="sm" image={false} excerpt />
                            </div>
                        ))}
                    </div>

                    {/* Latest rail */}
                    <aside className="lg:col-span-3 lg:order-3 lg:pl-6 lg:border-l border-neutral-200 border-t lg:border-t-0 pt-5 lg:pt-0" aria-label="Latest">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-primary breaking-pulse" />
                            <h2 className="text-[1.15rem] font-bold">The Latest</h2>
                        </div>
                        <ol className="relative border-l border-neutral-200 ml-1 mt-3">
                            {latestRail.map(a => (
                                <li key={a.id} className="relative pl-4 pb-4 last:pb-0">
                                    <span className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-white border-2 border-primary" />
                                    <Link to={`/article/${a.id}`} className="story-link group block">
                                        <span className="text-[12px] italic text-neutral-500">{a.publishedAt} · <span className="not-italic font-bold uppercase tracking-[0.1em] text-[10.5px] text-primary">{a.category}</span></span>
                                        <h3 className="headline-sm text-[1rem] mt-0.5 transition-colors">{a.title}</h3>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </aside>
                </div>
            </section>

            {/* Top stories row */}
            {topStories.length > 0 && (
                <section className="container-page mt-10 lg:mt-12" aria-label="Top stories">
                    <SectionHead title="Top Stories" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                        {topStories.map(a => (
                            <StandardStory key={a.id} article={a} size="sm" eager />
                        ))}
                    </div>
                </section>
            )}

            {/* In depth feature */}
            {inDepth && (
                <section className="bg-paper mt-12 lg:mt-14" aria-label="In depth">
                    <div className="container-page py-10 lg:py-14">
                        <Link to={`/article/${inDepth.id}`} className="story-link group grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                            <StoryImage article={inDepth} sizes="(min-width: 1024px) 680px, 100vw" className="lg:col-span-7 aspect-[16/10]" />
                            <div className="lg:col-span-5">
                                <p className="kicker">In Depth · <span className="text-neutral-600">{inDepth.category}</span></p>
                                <h2 className="headline-xl mt-3 transition-colors">{inDepth.title}</h2>
                                <p className="standfirst text-[1.15rem] mt-4">{inDepth.excerpt}</p>
                                <StoryMeta article={inDepth} readTime className="mt-4" />
                                <span className="inline-flex items-center gap-1.5 mt-5 font-bold text-[15px] border-b-2 border-secondary pb-0.5 group-hover:text-primary group-hover:border-primary transition-colors">
                                    Read the full story <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Section fronts + rail */}
            <div className="container-page mt-12 lg:mt-14">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
                    <div className="lg:col-span-8 space-y-12">
                        {sectionBlocks.map(({ category, stories }) => {
                            const [first, ...rest] = stories;
                            if (!first) return null;
                            return (
                                <section key={category.id} aria-label={category.name}>
                                    <SectionHead title={category.name} to={`/category/${category.slug}`} />
                                    {rest.length > 0 ? (
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <StandardStory article={first} size="md" excerpt />
                                            <ul className="divide-y divide-neutral-200 -mt-4 sm:mt-0">
                                                {rest.map(a => (
                                                    <li key={a.id} className="py-4 sm:first:pt-0">
                                                        <CompactStory article={a} />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        // A lone story sits side by side so it doesn't balloon to full width.
                                        <Link to={`/article/${first.id}`} className="story-link group grid gap-5 sm:grid-cols-2 items-center">
                                            <StoryImage article={first} />
                                            <div>
                                                <Kicker article={first} />
                                                <h3 className="headline-md mt-2 transition-colors">{first.title}</h3>
                                                <p className="standfirst mt-2 line-clamp-3">{first.excerpt}</p>
                                                <StoryMeta article={first} className="mt-2" />
                                            </div>
                                        </Link>
                                    )}
                                </section>
                            );
                        })}
                    </div>

                    <aside className="lg:col-span-4" aria-label="Most read and scores">
                        <div className="lg:sticky lg:top-16 space-y-10">
                            <div>
                                <SectionHead title="Most Read" />
                                <div className="-mt-3.5">
                                    <RankedList articles={mostRead} />
                                </div>
                            </div>
                            <LiveScoreWidget matches={liveMatches} />
                            <NewsletterBox />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
