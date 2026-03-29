import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSiteContent } from '../../context/SiteContentContext';
import { SeoManager } from '../seo/SeoManager';
import { Footer } from '../sections/Footer';
import { Header } from '../sections/Header';

export function SiteLayout() {
  const { content } = useSiteContent();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element instanceof HTMLElement) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.hash, location.pathname]);

  return (
    <>
      <SeoManager />
      <a className="skip-link" href="#main-content">
        {content.ui.skipToContent}
      </a>
      <div className="page-shell">
        <Header />
        <main id="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
