import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
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

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            if (!isScrolled && y > 60) setIsScrolled(true);
            else if (isScrolled && y < 12) setIsScrolled(false);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    return (
        <header className="sticky top-0 z-50">
            {/* Breaking News Ticker */}
            <div
                className={`bg-secondary text-white overflow-hidden transition-all duration-300 ease-in-out ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'}`}
            >
                <div className="container-page flex items-center">
                    <div className="flex items-center gap-2 shrink-0 pr-4 py-2.5">
                        <span className="w-2 h-2 bg-primary rounded-full breaking-pulse" />
                        <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary whitespace-nowrap">Breaking</span>
                    </div>
                    <div className="ticker-track overflow-hidden flex-1 border-l border-white/10 pl-4">
                        <div className="ticker-scroll flex items-center gap-10 py-2.5 whitespace-nowrap">
                            {[...breakingHeadlines, ...breakingHeadlines].map((headline, i) => (
                                <span key={i} className="text-[12.5px] font-medium flex items-center gap-2.5 text-white/80">
                                    <ChevronRight className="w-3 h-3 text-primary" />
                                    {headline}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Masthead */}
            <div className={`bg-white/90 backdrop-blur-xl transition-all duration-300 ${isScrolled ? 'shadow-[0_8px_30px_-14px_rgba(10,14,20,0.25)] border-b border-neutral-200' : 'border-b border-neutral-200'}`}>
                <div className="container-page">
                    <div className={`flex items-center justify-between gap-6 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
                        {/* Logo */}
                        <Link to="/" className="flex items-center shrink-0">
                            <img
                                src="/2.png"
                                alt="The Fista"
                                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-8' : 'h-9 md:h-11'}`}
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1 mx-auto">
                            {navItems.map((item) => {
                                const active = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={`relative px-3.5 py-2 text-[13.5px] font-semibold rounded-full transition-all duration-200 ${active ? 'text-primary' : 'text-neutral-600 hover:text-secondary hover:bg-neutral-100'}`}
                                    >
                                        {item.name}
                                        {active && <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 bg-primary rounded-full" />}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Right Section */}
                        <div className="flex items-center gap-2 shrink-0">
                            <button aria-label="Search" className="p-2.5 hover:bg-neutral-100 rounded-full transition-colors">
                                <Search className="w-4.5 h-4.5 text-neutral-600" />
                            </button>
                            <a
                                href="#newsletter"
                                className="hidden sm:inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-[13px] font-bold px-4 py-2.5 rounded-full transition-all duration-200 shadow-[0_8px_20px_-8px_rgba(240,38,60,0.6)]"
                            >
                                Subscribe <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                            <button
                                aria-label="Menu"
                                className="lg:hidden p-2.5 hover:bg-neutral-100 rounded-full transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X className="w-5 h-5 text-neutral-700" /> : <Menu className="w-5 h-5 text-neutral-700" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-neutral-200 shadow-xl">
                    <nav className="container-page py-4 flex flex-col">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`py-3.5 text-[15px] font-bold border-b border-neutral-100 last:border-0 flex items-center justify-between transition-colors ${location.pathname === item.path ? 'text-primary' : 'text-neutral-700 hover:text-primary'}`}
                            >
                                {item.name}
                                <ChevronRight className="w-4 h-4 text-neutral-300" />
                            </Link>
                        ))}
                        <a href="#newsletter" onClick={() => setIsMenuOpen(false)} className="btn-primary mt-4 w-full">
                            Subscribe <ArrowRight className="w-4 h-4" />
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
