import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { categories } from '../data/articles';

const breakingHeadlines = [
    "India Clinch Asia Cup 2026 Title with Nerveless Chase in the Dubai Final",
    "GST 2.0 Goes Live: Simplified Two-Slab Structure Takes Effect Nationwide",
    "ISRO Confirms Gaganyaan Crewed Flight Window After Successful Systems Review",
    "Monsoon Session Wraps Up: Data Rules and Skilling Push Cleared in Parliament",
    "India–EU Free Trade Agreement Clears Ratification, Set to Boost Exports",
    "RBI Holds Repo Rate and Lifts Growth Outlook as Inflation Stays Benign",
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const lastScrollY = useRef(0);

    const navItems = [
        { name: 'Home', path: '/' },
        ...categories.map(cat => ({ name: cat.name, path: `/category/${cat.slug}` })),
    ];

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            // Hysteresis: go scrolled at 80, un-scroll at 20 to prevent flicker
            if (!isScrolled && y > 80) setIsScrolled(true);
            else if (isScrolled && y < 20) setIsScrolled(false);
            lastScrollY.current = y;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    return (
        <header className="sticky top-0 z-50">
            {/* Breaking News Ticker — always rendered, animated height */}
            <div
                className={`bg-primary text-white overflow-hidden transition-all duration-300 ease-in-out ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
                    }`}
            >
                <div className="max-w-350 mx-auto flex items-center">
                    <div className="bg-primary-dark px-4 py-2 flex items-center gap-2 shrink-0 z-10">
                        <span className="w-2 h-2 bg-white rounded-full breaking-pulse" />
                        <span className="text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">Breaking</span>
                    </div>
                    <div className="overflow-hidden flex-1">
                        <div className="ticker-scroll flex items-center gap-12 py-2 px-4 whitespace-nowrap">
                            {[...breakingHeadlines, ...breakingHeadlines].map((headline, i) => (
                                <span key={i} className="text-[12px] font-medium flex items-center gap-3">
                                    <ChevronRight className="w-3 h-3 opacity-60" />
                                    {headline}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Masthead */}
            <div className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-neutral-200'}`}>
                {/* Top utility bar — animated height */}
                <div
                    className={`border-b border-neutral-100 overflow-hidden transition-all duration-300 ease-in-out ${isScrolled ? 'max-h-0 opacity-0 border-transparent' : 'max-h-12 opacity-100'
                        }`}
                >
                    <div className="container-page py-2 flex justify-between items-center">
                        <div className="flex items-center gap-4 text-[11px] text-neutral-500 uppercase tracking-wider">
                            <span className="font-semibold text-secondary">
                                {new Date().toLocaleDateString('en-IN', {
                                    weekday: 'long',
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </span>
                            <span className="text-neutral-300">|</span>
                            <span>New Delhi, India</span>
                        </div>
                        <a href="mailto:info@fista.in" className="text-[11px] text-neutral-500 hover:text-primary transition-colors uppercase tracking-wider font-medium">
                            info@fista.in
                        </a>
                    </div>
                </div>

                {/* Logo + Navigation */}
                <div className="container-page">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-5'}`}>
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img
                                src="/1.png"
                                alt="The Fista"
                                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10 md:h-12'}`}
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-4 py-2 text-[13px] font-semibold uppercase tracking-wider transition-all duration-200 border-b-2 ${location.pathname === item.path
                                        ? 'text-primary border-primary'
                                        : 'text-neutral-700 border-transparent hover:text-primary hover:border-primary/30'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Right Section */}
                        <div className="flex items-center gap-3">
                            <button className="p-2.5 hover:bg-neutral-100 rounded-md transition-colors">
                                <Search className="w-4.5 h-4.5 text-neutral-600" />
                            </button>
                            <button
                                className="lg:hidden p-2.5 hover:bg-neutral-100 rounded-md transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? (
                                    <X className="w-5 h-5 text-neutral-700" />
                                ) : (
                                    <Menu className="w-5 h-5 text-neutral-700" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-neutral-200 shadow-xl">
                    <nav className="container-page py-6 flex flex-col">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`py-3 text-sm font-semibold uppercase tracking-wider border-b border-neutral-100 last:border-0 transition-colors ${location.pathname === item.path
                                    ? 'text-primary'
                                    : 'text-neutral-700 hover:text-primary'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
