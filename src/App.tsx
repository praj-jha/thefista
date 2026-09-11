import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route change (no-op during SSR).
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Router is provided by the entry points (BrowserRouter on the client,
// StaticRouter during prerendering), so App itself is router-agnostic.
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
