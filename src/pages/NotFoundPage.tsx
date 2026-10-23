import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../seo/Seo';
import { buildNotFoundSeo } from '../seo/builders';
import { getActiveCategories } from '../data/articles';

export default function NotFoundPage() {
  const { pathname } = useLocation();
  return (
    <div className="container-page max-w-2xl py-20 lg:py-28 text-center">
      <Seo {...buildNotFoundSeo(pathname)} />
      <p className="kicker">Error 404</p>
      <h1 className="text-[2.5rem] sm:text-[3.25rem] font-bold leading-[1.05] mt-4">We couldn’t find that page.</h1>
      <p className="text-[1.15rem] text-neutral-600 italic mt-4 mb-8">It may have been moved, or the link may be out of date.</p>
      <Link to="/" className="btn-primary">
        <ArrowLeft className="w-4 h-4" />
        Back to the front page
      </Link>
      <div className="double-rule mt-12 pt-6">
        <p className="text-[13px] italic text-neutral-500 mb-3">Or browse a section</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {getActiveCategories().map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className="px-3.5 py-1.5 text-[15px] border border-neutral-300 hover:border-secondary hover:bg-secondary hover:text-white transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
