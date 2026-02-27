import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { categories } from '../data/articles';

const breakingHeadlines = [
    "India Innovates 2026: 5000+ Developers to Break Guinness World Record at Bharat Mandapam on March 28",
    "T20 World Cup Super 8: India Thrash Zimbabwe by 72 Runs, Virtual QF vs West Indies in Kolkata",
    "Ranji Trophy Final: J&K Seize Control, Lead Karnataka by 477 Runs on Day 4 in Hubballi",
    "Court Clears Kejriwal & Sisodia in Delhi Excise Case — CBI Moves High Court",
    "PM Modi's Historic Israel Visit: Signs Key Defence, AI and AgroTech MoUs with Netanyahu",
    "India's GDP Surges 7.8% in Q3 FY26 — Fastest Growing Major Economy",
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
                    <div className="max-w-350 mx-auto px-6 py-2 flex justify-between items-center">
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
                <div className="max-w-350 mx-auto px-6">
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
                    <nav className="max-w-350 mx-auto px-6 py-6 flex flex-col">
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
