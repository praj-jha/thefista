import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { categories } from '../data/articles';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        ...categories.map(cat => ({ name: cat.name, path: `/category/${cat.slug}` })),
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-secondary text-white text-xs py-2">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <img src="/2.png" alt="Fista" className="h-4 w-auto" />
                        <span>•</span>
                        <span>{new Date().toLocaleDateString('en-IN', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                        })}</span>
                    </div>
                    <a href="mailto:info@fista.in" className="hover:text-neutral-300 transition-colors">
                        ✉ info@fista.in
                    </a>
                </div>
            </div>

            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src="/1.png" alt="The Fista" className="h-9 md:h-11 lg:h-11 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`font-medium transition-colors hover:text-primary ${location.pathname === item.path
                                    ? 'text-primary font-semibold'
                                    : 'text-neutral-700'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                            <Search className="w-5 h-5 text-neutral-600" />
                        </button>
                        <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                            <User className="w-5 h-5 text-neutral-600" />
                        </button>
                        <button
                            className="lg:hidden p-2 hover:bg-neutral-100 rounded-full transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="w-5 h-5 text-neutral-600" />
                            ) : (
                                <Menu className="w-5 h-5 text-neutral-600" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t">
                    <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`font-medium py-2 transition-colors hover:text-primary ${location.pathname === item.path
                                    ? 'text-primary font-semibold'
                                    : 'text-neutral-700'
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
