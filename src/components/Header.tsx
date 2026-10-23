import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { getActiveCategories, searchArticles } from '../data/articles';
import type { CategoryInfo, Desk } from '../types';

const breakingHeadlines = [
    'India Clinch Asia Cup 2026 Title with Nerveless Chase in the Dubai Final',
    'GST 2.0 Goes Live: Simplified Two-Slab Structure Takes Effect Nationwide',
    'ISRO Confirms Gaganyaan Crewed Flight Window After Successful Systems Review',
    'RBI Holds Repo Rate and Lifts Growth Outlook as Inflation Stays Benign',
    'India–EU Free Trade Agreement Clears Ratification, Set to Boost Exports',
    'India Expands National AI Compute Grid, Opens Access for Startups',
];

const deskOrder: Desk[] = ['News', 'World', 'Business', 'Science & Tech', 'Sport', 'Culture'];

function groupByDesk(sections: CategoryInfo[]) {
    return deskOrder
        .map(desk => ({ desk, sections: sections.filter(s => s.desk === desk) }))
        .filter(group => group.sections.length > 0);
}

function SectionLinks({ sections, className = '' }: { sections: CategoryInfo[]; className?: string }) {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `relative shrink-0 px-3 py-2.5 text-[15px] whitespace-nowrap transition-colors ${isActive ? 'font-bold text-secondary after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:bg-primary' : 'text-neutral-700 hover:text-primary'}`;
    return (
        <div className={`flex items-center overflow-x-auto scrollbar-hide ${className}`}>
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            {sections.map(cat => (
                <NavLink key={cat.slug} to={`/category/${cat.slug}`} className={linkClass}>{cat.name}</NavLink>
            ))}
        </div>
    );
}

function SearchPanel({ onClose }: { onClose: () => void }) {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const results = searchArticles(query).slice(0, 8);

    useEffect(() => {
        inputRef.current?.focus();
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[70] bg-white/98 backdrop-blur-sm overflow-y-auto fade-in" role="dialog" aria-label="Search">
            <div className="container-page max-w-3xl py-6">
                <div className="flex justify-end">
                    <button onClick={onClose} aria-label="Close search" className="p-2 hover:bg-neutral-100">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <label htmlFor="site-search" className="kicker">Search The Fista</label>
                <input
                    id="site-search"
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Politics, cricket, markets…"
                    className="w-full mt-3 pb-3 text-[1.75rem] sm:text-[2.25rem] font-bold border-b-2 border-secondary bg-transparent focus:outline-none placeholder-neutral-300"
                />
                <ul className="mt-4 divide-y divide-neutral-200">
                    {results.map(a => (
                        <li key={a.id}>
                            <Link to={`/article/${a.id}`} onClick={onClose} className="story-link group block py-4">
                                <span className="kicker">{a.category}</span>
                                <span className="headline-md block mt-1.5">{a.title}</span>
                                <span className="meta block mt-1">{a.publishedAt}</span>
                            </Link>
                        </li>
                    ))}
                    {query.trim() && results.length === 0 && (
                        <li className="py-6 text-neutral-500 italic">No stories match “{query}”.</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [showCompact, setShowCompact] = useState(false);
    const [breakingIdx, setBreakingIdx] = useState(0);
    const location = useLocation();
    const sections = getActiveCategories();
    const closeSearch = useCallback(() => setIsSearchOpen(false), []);

    const today = new Date().toLocaleDateString('en-IN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    // Compact bar slides in once the full masthead has scrolled away.
    useEffect(() => {
        const onScroll = () => setShowCompact(window.scrollY > 220);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const id = setInterval(() => setBreakingIdx(i => (i + 1) % breakingHeadlines.length), 5000);
        return () => clearInterval(id);
    }, []);

    // Close overlays when the route changes (state reset during render, per React docs).
    const [lastPath, setLastPath] = useState(location.pathname);
    if (lastPath !== location.pathname) {
        setLastPath(location.pathname);
        setIsMenuOpen(false);
        setIsSearchOpen(false);
    }

    useEffect(() => {
        document.body.style.overflow = isMenuOpen || isSearchOpen ? 'hidden' : '';
    }, [isMenuOpen, isSearchOpen]);

    const iconButton = 'p-2 text-secondary hover:bg-neutral-100 transition-colors';

    return (
        <>
            <header className="bg-white">
                {/* Utility bar */}
                <div className="border-b border-neutral-200">
                    <div className="container-page flex items-center justify-between h-9 text-[13px]">
                        <span className="text-neutral-600" suppressHydrationWarning>{today}</span>
                        <div className="flex items-center gap-5">
                            <a href="#newsletter" className="hidden sm:inline text-neutral-600 hover:text-primary">Newsletters</a>
                            <span className="hidden sm:inline text-neutral-600">India Edition</span>
                            <a href="#newsletter" className="font-bold text-primary hover:text-primary-dark">Subscribe</a>
                        </div>
                    </div>
                </div>

                {/* Masthead */}
                <div className="container-page">
                    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-4 lg:py-6">
                        <div className="flex items-center gap-1">
                            <button aria-label="Open sections menu" onClick={() => setIsMenuOpen(true)} className={iconButton}>
                                <Menu className="w-5 h-5" />
                            </button>
                            <button aria-label="Search" onClick={() => setIsSearchOpen(true)} className={`${iconButton} hidden sm:block`}>
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                        <Link to="/" className="justify-self-center text-center" aria-label="The Fista — Home">
                            <img src="/fistaa.png" alt="The Fista" width={810} height={360} className="h-12 sm:h-16 lg:h-20 w-auto mx-auto" />
                            <span className="hidden md:block text-[13px] italic text-neutral-500 -mt-1">News, analysis and opinion from India and the world</span>
                        </Link>
                        <div className="flex items-center gap-1 justify-self-end">
                            <button aria-label="Search" onClick={() => setIsSearchOpen(true)} className={`${iconButton} sm:hidden`}>
                                <Search className="w-5 h-5" />
                            </button>
                            <a href="#newsletter" className="hidden sm:inline-flex btn-primary py-2 px-4 text-[14px]">Sign up</a>
                        </div>
                    </div>
                </div>

                {/* Section navigation */}
                <nav aria-label="Sections" className="border-y border-secondary">
                    <div className="container-page">
                        <SectionLinks sections={sections} className="lg:justify-center -mx-3" />
                    </div>
                </nav>

                {/* Breaking line */}
                <div className="border-b border-neutral-200">
                    <div className="container-page flex items-center gap-3 py-2.5 text-[15px]">
                        <span className="live-badge shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-white breaking-pulse" /> Breaking
                        </span>
                        <p key={breakingIdx} className="truncate text-secondary fade-in">
                            {breakingHeadlines[breakingIdx]}
                        </p>
                    </div>
                </div>
            </header>

            {/* Compact sticky bar */}
            <div
                className={`fixed top-0 inset-x-0 z-50 bg-white border-b border-secondary shadow-[0_2px_12px_-6px_rgba(0,0,0,0.25)] transition-transform duration-300 ${showCompact ? 'translate-y-0' : '-translate-y-full'}`}
                aria-hidden={!showCompact}
                inert={!showCompact}
            >
                <div className="container-page flex items-center gap-3 h-12">
                    <button aria-label="Open sections menu" onClick={() => setIsMenuOpen(true)} className={iconButton}>
                        <Menu className="w-5 h-5" />
                    </button>
                    <Link to="/" className="shrink-0">
                        <img src="/fistaa.png" alt="The Fista" width={810} height={360} className="h-8 w-auto" />
                    </Link>
                    <SectionLinks sections={sections} className="flex-1 hidden md:flex" />
                    <button aria-label="Search" onClick={() => setIsSearchOpen(true)} className={`${iconButton} ml-auto md:ml-0`}>
                        <Search className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Sections drawer */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[60]" role="dialog" aria-label="Sections">
                    <button aria-label="Close menu" className="absolute inset-0 bg-black/40 fade-in" onClick={() => setIsMenuOpen(false)} />
                    <div className="absolute inset-y-0 left-0 w-[86%] max-w-sm bg-white overflow-y-auto shadow-2xl fade-in">
                        <div className="flex items-center justify-between px-5 h-14 border-b border-secondary">
                            <img src="/fistaa.png" alt="The Fista" width={810} height={360} className="h-8 w-auto" />
                            <button aria-label="Close menu" onClick={() => setIsMenuOpen(false)} className={iconButton}>
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <nav className="px-5 py-4">
                            <Link to="/" className="flex items-center justify-between py-3 text-[1.15rem] font-bold border-b border-neutral-200">
                                Home <ChevronRight className="w-4 h-4 text-neutral-400" />
                            </Link>
                            {groupByDesk(sections).map(({ desk, sections: deskSections }) => (
                                <div key={desk} className="mt-5">
                                    <p className="kicker text-neutral-500">{desk}</p>
                                    <ul className="mt-1">
                                        {deskSections.map(cat => (
                                            <li key={cat.slug}>
                                                <Link
                                                    to={`/category/${cat.slug}`}
                                                    className={`flex items-center justify-between py-2.5 text-[1.1rem] border-b border-neutral-200 ${location.pathname === `/category/${cat.slug}` ? 'font-bold text-primary' : 'text-secondary hover:text-primary'}`}
                                                >
                                                    {cat.name} <ChevronRight className="w-4 h-4 text-neutral-400" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <a href="#newsletter" onClick={() => setIsMenuOpen(false)} className="btn-primary w-full mt-8">Sign up for newsletters</a>
                        </nav>
                    </div>
                </div>
            )}

            {isSearchOpen && <SearchPanel onClose={closeSearch} />}
        </>
    );
}
