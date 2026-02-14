import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin } from 'lucide-react';
import { categories } from '../data/articles';

export default function Footer() {
    return (
        <footer className="bg-secondary text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center mb-4">
                            <img src="/2.png" alt="The Fista" className="h-14 w-auto" />
                        </Link>
                        <p className="text-neutral-400 text-sm mb-6">
                            Your trusted source for the latest news from India and around the world. Stay informed with The Fista.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white hover:text-secondary rounded-full flex items-center justify-center transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white hover:text-secondary rounded-full flex items-center justify-center transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white hover:text-secondary rounded-full flex items-center justify-center transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white hover:text-secondary rounded-full flex items-center justify-center transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Categories</h3>
                        <ul className="space-y-2">
                            {categories.map((cat) => (
                                <li key={cat.id}>
                                    <Link
                                        to={`/category/${cat.slug}`}
                                        className="text-neutral-400 hover:text-white transition-colors"
                                    >
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-neutral-400 hover:text-white transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-400 hover:text-white transition-colors">Contact</a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-400 hover:text-white transition-colors">Advertise</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-neutral-400">
                                <MapPin className="w-5 h-5 flex-shrink-0 text-white" />
                                <span>New Delhi, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-400">
                                <Mail className="w-5 h-5 flex-shrink-0 text-white" />
                                <span>info@fista.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-400 text-sm">
                        © {new Date().getFullYear()} The Fista. All rights reserved.
                    </p>
                    <p className="text-neutral-500 text-sm">
                        Made with ❤️ in India
                    </p>
                </div>
            </div>
        </footer>
    );
}
