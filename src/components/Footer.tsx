import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { getActiveCategories } from '../data/articles';
import type { Desk } from '../types';

const deskOrder: Desk[] = ['News', 'World', 'Business', 'Science & Tech', 'Sport', 'Culture'];

export default function Footer() {
    const sections = getActiveCategories();
    const desks = deskOrder
        .map(desk => ({ desk, sections: sections.filter(s => s.desk === desk) }))
        .filter(d => d.sections.length > 0);

    return (
        <footer className="mt-16">
            {/* Newsletter band */}
            <div id="newsletter" className="bg-paper border-t border-neutral-200 scroll-mt-16">
                <div className="container-page py-10 lg:py-12 grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    <div className="lg:col-span-7">
                        <p className="kicker">The Morning Briefing</p>
                        <h2 className="text-[1.9rem] sm:text-[2.3rem] font-bold leading-[1.1] mt-3">
                            The stories that matter, explained — before your first cup of chai.
                        </h2>
                        <p className="text-neutral-600 text-[1.05rem] mt-2">A free daily newsletter from The Fista newsroom. Unsubscribe any time.</p>
                    </div>
                    <form className="lg:col-span-5 flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            required
                            placeholder="Your email address"
                            aria-label="Email address"
                            className="flex-1 min-w-0 px-4 py-3 bg-white border border-neutral-300 text-[16px] placeholder-neutral-400 focus:outline-none focus:border-secondary"
                        />
                        <button type="submit" className="btn-primary py-3 whitespace-nowrap">Sign up</button>
                    </form>
                </div>
            </div>

            <div className="bg-white">
                <div className="container-page pt-10 pb-8">
                    <div className="double-rule pt-8 grid gap-8 lg:grid-cols-12">
                        <div className="lg:col-span-3">
                            <Link to="/" aria-label="The Fista — Home">
                                <img src="/fistaa.png" alt="The Fista" width={810} height={360} className="h-14 w-auto -ml-2" />
                            </Link>
                            <p className="text-neutral-600 text-[15px] leading-relaxed mt-3 max-w-xs">
                                Independent reporting and analysis on politics, the world, business, science, sport and culture.
                            </p>
                            <div className="flex gap-1 mt-4 -ml-2">
                                {[
                                    { icon: Facebook, label: 'Facebook' },
                                    { icon: Twitter, label: 'X (Twitter)' },
                                    { icon: Instagram, label: 'Instagram' },
                                    { icon: Youtube, label: 'YouTube' },
                                ].map(({ icon: Icon, label }) => (
                                    <a key={label} href="#" aria-label={label} className="p-2 text-neutral-600 hover:text-primary transition-colors">
                                        <Icon className="w-[18px] h-[18px]" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
                            {desks.map(({ desk, sections: deskSections }) => (
                                <div key={desk}>
                                    <h3 className="kicker text-secondary">{desk}</h3>
                                    <ul className="mt-3 space-y-2">
                                        {deskSections.map(cat => (
                                            <li key={cat.slug}>
                                                <Link to={`/category/${cat.slug}`} className="text-[15px] text-neutral-700 hover:text-primary">{cat.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-3 grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="kicker text-secondary">The Fista</h3>
                                <ul className="mt-3 space-y-2">
                                    {['About Us', 'Editorial Standards', 'Contact', 'Careers', 'Advertise'].map(item => (
                                        <li key={item}><a href="#" className="text-[15px] text-neutral-700 hover:text-primary">{item}</a></li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="kicker text-secondary">Legal</h3>
                                <ul className="mt-3 space-y-2">
                                    {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Corrections'].map(item => (
                                        <li key={item}><a href="#" className="text-[15px] text-neutral-700 hover:text-primary">{item}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rule mt-10 pt-5 flex flex-col sm:flex-row justify-between gap-2 text-[13px] text-neutral-500">
                        <p>&copy; {new Date().getFullYear()} The Fista Media Group. All rights reserved.</p>
                        <p>New Delhi, India · info@fista.in</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
