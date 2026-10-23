import { useParams, Link, NavLink } from 'react-router-dom';
import { getActiveCategories, getLatestArticles, getTrendingArticles } from '../data/articles';
import { Kicker, StoryMeta, StoryImage, SectionHead, StandardStory, RankedList, NewsletterBox } from '../components/news';
import Seo from '../seo/Seo';
import { buildCategorySeo } from '../seo/builders';
import NotFoundPage from './NotFoundPage';

export default function CategoryPage() {
    const { categorySlug } = useParams<{ categorySlug: string }>();

    const sections = getActiveCategories();
    const category = sections.find(c => c.slug === categorySlug);

    // Sections without published stories aren't routable yet.
    if (!category) {
        return <NotFoundPage />;
    }

    const categoryArticles = getLatestArticles().filter(a => a.category === category.id);
    const [lead, ...others] = categoryArticles;
    const secondary = others.slice(0, 2);
    const stream = others.slice(2);
    const deskSiblings = sections.filter(c => c.desk === category.desk && c.id !== category.id);
    const mostRead = getTrendingArticles().filter(a => a.category !== category.id).slice(0, 5);

    return (
        <div>
            <Seo {...buildCategorySeo(category, categoryArticles)} />

            {/* Section masthead */}
            <div className="container-page pt-8 lg:pt-10">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px]">
                    <Link to="/" className="text-neutral-500 hover:text-primary">Home</Link>
                    <span className="text-neutral-300">/</span>
                    <span className="text-neutral-500">{category.desk}</span>
                </nav>
                <div className="mt-2 pb-5 border-b-[3px] border-secondary flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                    <div>
                        <h1 className="text-[2.75rem] sm:text-[3.5rem] font-bold leading-none tracking-[-0.01em]">{category.name}</h1>
                        <p className="text-[1.1rem] text-neutral-600 italic mt-2">{category.description}</p>
                    </div>
                    {deskSiblings.length > 0 && (
                        <div className="flex items-center gap-4 text-[15px]">
                            <span className="text-neutral-400 italic">Also in {category.desk}:</span>
                            {deskSiblings.map(c => (
                                <NavLink key={c.slug} to={`/category/${c.slug}`} className="font-bold hover:text-primary">{c.name}</NavLink>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Lead package */}
            {lead && (
                <section className="container-page mt-8" aria-label={`Top ${category.name} stories`}>
                    <div className={`grid gap-8 ${secondary.length ? 'lg:grid-cols-12' : ''}`}>
                        <Link to={`/article/${lead.id}`} className={`story-link group grid gap-5 md:grid-cols-5 items-start ${secondary.length ? 'lg:col-span-8' : ''}`}>
                            <StoryImage article={lead} priority sizes="(min-width: 1024px) 480px, (min-width: 768px) 60vw, 100vw" className="md:col-span-3 aspect-[3/2]" />
                            <div className="md:col-span-2">
                                <Kicker article={lead} />
                                <h2 className="headline-lg mt-2.5 transition-colors">{lead.title}</h2>
                                <p className="standfirst mt-3">{lead.excerpt}</p>
                                <StoryMeta article={lead} readTime className="mt-3" />
                            </div>
                        </Link>
                        {secondary.length > 0 && (
                            <div className="lg:col-span-4 lg:pl-8 lg:border-l border-neutral-200 grid sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-0 lg:divide-y divide-neutral-200">
                                {secondary.map(a => (
                                    <div key={a.id} className="lg:py-5 lg:first:pt-0">
                                        <StandardStory article={a} size="sm" image={false} excerpt />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Stream + rail */}
            <div className="container-page mt-12">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
                    <div className="lg:col-span-8">
                        <SectionHead title={`Latest in ${category.name}`} />
                        {stream.length > 0 ? (
                            <ul className="divide-y divide-neutral-200 -mt-1">
                                {stream.map(a => (
                                    <li key={a.id} className="py-5 first:pt-0">
                                        <Link to={`/article/${a.id}`} className="story-link group grid grid-cols-[1fr_auto] sm:grid-cols-[8rem_1fr_auto] gap-4 sm:gap-6 items-start">
                                            <span className="hidden sm:block meta not-italic text-[13px] pt-0.5">{a.publishedAt}</span>
                                            <div className="min-w-0">
                                                <h3 className="headline-md transition-colors">{a.title}</h3>
                                                <p className="standfirst text-[1rem] mt-1.5 line-clamp-2">{a.excerpt}</p>
                                                <StoryMeta article={a} className="mt-1.5 sm:hidden" />
                                                <p className="meta mt-1.5 hidden sm:block">By {a.author}</p>
                                            </div>
                                            <StoryImage article={a} sizes="176px" className="w-28 sm:w-44 aspect-[3/2]" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-neutral-500 italic -mt-1">You're all caught up on {category.name} — the stories above are the latest.</p>
                        )}

                        <div className="mt-12">
                            <SectionHead title="Explore other sections" as="h3" />
                            <div className="flex flex-wrap gap-2 -mt-1">
                                {sections.filter(c => c.id !== category.id).map(c => (
                                    <Link key={c.slug} to={`/category/${c.slug}`} className="px-3.5 py-1.5 text-[15px] border border-neutral-300 hover:border-secondary hover:bg-secondary hover:text-white transition-colors">
                                        {c.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="lg:col-span-4" aria-label="Most read">
                        <div className="lg:sticky lg:top-16 space-y-10">
                            <div>
                                <SectionHead title="Most Read" as="h3" />
                                <div className="-mt-3.5">
                                    <RankedList articles={mostRead} />
                                </div>
                            </div>
                            <NewsletterBox blurb={`The best of ${category.name.toLowerCase()} and the day’s essential stories, in your inbox every morning.`} />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
