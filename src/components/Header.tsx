import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronRight, Radio, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { categories } from '../data/articles';

const breakingHeadlines = [
    'India Clinch Asia Cup 2026 Title with Nerveless Chase in the Dubai Final',
    'GST 2.0 Goes Live: Simplified Two-Slab Structure Takes Effect Nationwide',
    'ISRO Confirms Gaganyaan Crewed Flight Window After Successful Systems Review',
    'RBI Holds Repo Rate and Lifts Growth Outlook as Inflation Stays Benign',
    'India–EU Free Trade Agreement Clears Ratification, Set to Boost Exports',
    'India Expands National AI Compute Grid, Opens Access for Startups',
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        ...categories.map(cat => ({ name: cat.name, path: `/category/${cat.slug}` })),
    ];

    const today = new Date().toLocaleDateString('en-IN', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            if (!isScrolled && y > 80) setIsScrolled(true);
            else if (isScrolled && y < 20) setIsScrolled(false);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    return (
        <header className="sticky top-0 z-50">
            {/* Top utility bar — black micro-strip */}
            <div className={`bg-neutral-900 text-white overflow-hidden transition-all duration-300 ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-9 opacity-100'}`}>
                <div className="container-page flex items-center justify-between h-9 text-[11.5px]">
                    <span className="font-cond uppercase tracking-wide text-white/70">{today} · New Delhi</span>
                    <div className="flex items-center gap-4 font-cond uppercase tracking-wide">
                        <a href="#newsletter" className="text-white/70 hover:text-white transition-colors hidden sm:inline">Newsletters</a>
                        <a href="#" className="text-white/70 hover:text-white transition-colors hidden sm:inline">Apps</a>
                        <span className="text-white/70 hidden sm:inline">English</span>
                        <a href="#livetv" className="inline-flex items-center gap-1 text-primary font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary breaking-pulse" /> Live TV
                        </a>
                    </div>
                </div>
            </div>

            {/* Masthead — white, logo + actions */}
            <div className={`bg-white border-b border-neutral-200 overflow-hidden transition-all duration-300 ${isScrolled ? 'max-h-0 opacity-0 border-transparent' : 'max-h-24 opacity-100'}`}>
                <div className="container-page flex items-center justify-between gap-4 py-3">
                    <Link to="/" className="flex items-center shrink-0">
                        <img src="/2.png" alt="The Fista" className="h-9 md:h-11 w-auto" />
                    </Link>

                    <div className="flex items-center gap-2 shrink-0">
                        <a
                            href="#livetv"
                            className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-[12px] font-bold uppercase tracking-wide px-3.5 py-2 rounded-[3px] transition-colors font-cond"
                        >
                            <Play className="w-3.5 h-3.5 fill-white" /> Live TV
                        </a>
                        <a
                            href="#newsletter"
                            className="hidden sm:inline-flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-[12px] font-bold uppercase tracking-wide px-3.5 py-2 rounded-[3px] transition-colors font-cond"
                        >
                            Subscribe
                        </a>
                        <button aria-label="Search" className="p-2.5 hover:bg-neutral-100 rounded-full transition-colors">
                            <Search className="w-4.5 h-4.5 text-neutral-700" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Category nav bar — black, always visible, horizontally scrollable */}
            <nav className="bg-neutral-900 text-white shadow-[0_6px_20px_-12px_rgba(0,0,0,0.6)]">
                <div className="container-page flex items-center">
                    <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide flex-1">
                        {navItems.map((item) => {
                            const active = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`relative shrink-0 px-3.5 py-3 text-[13px] font-bold uppercase tracking-wide whitespace-nowrap font-cond transition-colors ${active ? 'text-white bg-primary' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                    <button
                        aria-label="Menu"
                        className="lg:hidden p-3 text-white shrink-0"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Breaking News ticker — red band */}
            <div className={`bg-white border-b border-neutral-200 overflow-hidden transition-all duration-300 ${isScrolled ? 'max-h-0 opacity-0 border-transparent' : 'max-h-12 opacity-100'}`}>
                <div className="container-page flex items-center">
                    <div className="flex items-center gap-1.5 shrink-0 bg-primary text-white px-3 py-2.5">
                        <Radio className="w-3.5 h-3.5 breaking-pulse" />
                        <span className="font-cond text-[12px] font-bold uppercase tracking-wide whitespace-nowrap">Breaking</span>
                    </div>
                    <div className="ticker-track overflow-hidden flex-1 pl-4">
                        <div className="ticker-scroll flex items-center gap-10 py-2.5 whitespace-nowrap">
                            {[...breakingHeadlines, ...breakingHeadlines].map((headline, i) => (
                                <span key={i} className="text-[13px] font-medium flex items-center gap-2 text-neutral-700">
                                    <ChevronRight className="w-3.5 h-3.5 text-primary" />
                                    {headline}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-neutral-900 text-white shadow-xl">
                    <nav className="container-page py-2 flex flex-col">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`py-3 text-[14px] font-bold uppercase tracking-wide font-cond border-b border-white/10 last:border-0 flex items-center justify-between transition-colors ${location.pathname === item.path ? 'text-primary' : 'text-white/85 hover:text-white'}`}
                            >
                                {item.name}
                                <ChevronRight className="w-4 h-4 text-white/30" />
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
