import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, ArrowRight } from 'lucide-react';
import { categories } from '../data/articles';

export default function Footer() {
    return (
        <footer className="bg-secondary text-white">
            {/* Newsletter Bar */}
            <div className="bg-primary">
                <div className="max-w-350 mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="font-display text-xl font-bold text-white">Stay Informed</h3>
                        <p className="text-white/80 text-sm mt-1">Get breaking news delivered to your inbox</p>
                    </div>
                    <div className="flex w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 md:w-72 px-5 py-3 bg-white/20 backdrop-blur-sm text-white placeholder-white/60 text-sm border border-white/30 focus:outline-none focus:border-white focus:bg-white/25 transition-all"
                        />
                        <button className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                            Subscribe <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-350 mx-auto px-6 py-14">
                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="flex items-center mb-5">
                            <img src="/2.png" alt="The Fista" className="h-12 w-auto -ml-6" />
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
                            India's trusted news platform delivering credible journalism across cricket, politics, health, business, and more.
                        </p>
                        <div className="flex gap-2">
                            {[
                                { icon: Facebook, label: 'Facebook' },
                                { icon: Twitter, label: 'Twitter' },
                                { icon: Instagram, label: 'Instagram' },
                                { icon: Youtube, label: 'YouTube' },
                            ].map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    className="w-9 h-9 bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-200"
                                    aria-label={label}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="lg:col-span-2">
                        <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5">Sections</h3>
                        <ul className="space-y-2.5">
                            {categories.map((cat) => (
                                <li key={cat.id}>
                                    <Link
                                        to={`/category/${cat.slug}`}
                                        className="text-white/60 hover:text-white text-sm transition-colors"
                                    >
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5">Company</h3>
                        <ul className="space-y-2.5">
                            {['About Us', 'Contact', 'Careers', 'Advertise'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:col-span-2">
                        <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5">Legal</h3>
                        <ul className="space-y-2.5">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-2">
                        <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5">Reach Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2.5 text-white/60 text-sm">
                                <MapPin className="w-4 h-4 shrink-0 text-primary mt-0.5" />
                                <span>New Delhi, India</span>
                            </li>
                            <li className="flex items-center gap-2.5 text-white/60 text-sm">
                                <Mail className="w-4 h-4 shrink-0 text-primary" />
                                <span>info@fista.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs uppercase tracking-wider">
                        &copy; {new Date().getFullYear()} The Fista Media Group. All rights reserved.
                    </p>
                    <p className="text-white/20 text-xs">
                        Crafted with precision in India
                    </p>
                </div>
            </div>
        </footer>
    );
}
