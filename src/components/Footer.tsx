import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, ArrowRight } from 'lucide-react';
import { categories } from '../data/articles';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white">
            {/* Newsletter CTA Band */}
            <div id="newsletter" className="border-b border-white/10 scroll-mt-24">
                <div className="container-page py-10 lg:py-12">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="max-w-xl">
                            <span className="section-tab">The Fista Briefing</span>
                            <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight mt-4">
                                India's biggest stories, in your inbox by 8 AM.
                            </h2>
                            <p className="text-white/60 text-[15px] mt-2">
                                Join thousands of readers. Sharp, credible, and free — every morning.
                            </p>
                        </div>
                        <form className="w-full lg:w-auto shrink-0" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col sm:flex-row gap-2 lg:w-[26rem]">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    aria-label="Email address"
                                    className="flex-1 px-4 py-3 rounded-sm bg-white text-secondary placeholder-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                />
                                <button type="submit" className="btn-primary whitespace-nowrap">
                                    Subscribe <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-white/40 text-[11px] mt-2">No spam. Unsubscribe anytime.</p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container-page py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="flex items-center mb-5">
                            <img src="/2.png" alt="The Fista" className="h-10 w-auto -ml-6" />
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
                            India's trusted news platform — credible, in-depth coverage across cricket, politics, business, health, Bollywood, education and technology.
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
                                    className="w-9 h-9 rounded-sm bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                                    aria-label={label}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sections */}
                    <div className="lg:col-span-2">
                        <h3 className="font-cond text-[12px] font-bold uppercase tracking-wide text-primary mb-4">Sections</h3>
                        <ul className="space-y-2.5">
                            {categories.map((cat) => (
                                <li key={cat.id}>
                                    <Link to={`/category/${cat.slug}`} className="text-white/60 hover:text-white text-sm transition-colors">
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h3 className="font-cond text-[12px] font-bold uppercase tracking-wide text-primary mb-4">Company</h3>
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
                        <h3 className="font-cond text-[12px] font-bold uppercase tracking-wide text-primary mb-4">Legal</h3>
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
                        <h3 className="font-cond text-[12px] font-bold uppercase tracking-wide text-primary mb-4">Reach Us</h3>
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
                <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-[11px] font-cond uppercase tracking-wide">
                        &copy; {new Date().getFullYear()} The Fista Media Group. All rights reserved.
                    </p>
                    <p className="text-white/20 text-[11px] font-cond uppercase tracking-wide">Crafted with precision in India</p>
                </div>
            </div>
        </footer>
    );
}
