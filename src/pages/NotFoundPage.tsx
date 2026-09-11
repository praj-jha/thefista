import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import Seo from '../seo/Seo';
import { buildNotFoundSeo } from '../seo/builders';
import { categories } from '../data/articles';

export default function NotFoundPage() {
  const { pathname } = useLocation();
  return (
    <div className="max-w-2xl mx-auto px-6 py-28 text-center">
      <Seo {...buildNotFoundSeo(pathname)} />
      <span className="inline-flex items-center gap-2 section-eyebrow">
        <Compass className="w-4 h-4" /> Lost the trail
      </span>
      <div className="font-display text-[8rem] leading-none text-primary mt-4">404</div>
      <h1 className="font-display text-3xl uppercase text-secondary mt-2 mb-3">This page went off the record</h1>
      <p className="text-neutral-500 mb-8">The page you're looking for doesn't exist or may have been moved.</p>
      <Link to="/" className="btn-primary inline-flex">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.slug}`}
            className="px-4 py-2 rounded-sm border border-neutral-200 bg-white text-[12px] font-bold uppercase tracking-wide font-cond text-secondary hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
