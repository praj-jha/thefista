import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../seo/Seo';
import { buildNotFoundSeo } from '../seo/builders';

export default function NotFoundPage() {
  const { pathname } = useLocation();
  return (
    <div className="max-w-2xl mx-auto px-6 py-28 text-center">
      <Seo {...buildNotFoundSeo(pathname)} />
      <span className="font-display text-7xl font-bold text-neutral-200">404</span>
      <h1 className="font-display text-3xl font-bold text-secondary mt-4 mb-3">Page Not Found</h1>
      <p className="text-neutral-500 mb-8">The page you're looking for doesn't exist or may have been moved.</p>
      <Link to="/" className="btn-primary inline-flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </div>
  );
}
