import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { SiteContentProvider, useSiteContent } from './context/SiteContentContext';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CustomersPage } from './pages/CustomersPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { HomePage } from './pages/HomePage';
import { IndustriesPage } from './pages/IndustriesPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PartnersPage } from './pages/PartnersPage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { TechnologyPage } from './pages/TechnologyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'solutions', element: <SolutionsPage /> },
      { path: 'infrastructure', element: <InfrastructurePage /> },
      { path: 'customers', element: <CustomersPage /> },
      { path: 'partners', element: <PartnersPage /> },
      { path: 'technology', element: <TechnologyPage /> },
      { path: 'industries', element: <IndustriesPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'case-studies', element: <CaseStudiesPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return (
    <SiteContentProvider>
      <AppRouter />
    </SiteContentProvider>
  );
}

function AppRouter() {
  const { content } = useSiteContent();
  const { siteMeta } = content;

  useEffect(() => {
    document.title = siteMeta.title;

    const metaUpdates: Array<[string, string, string]> = [
      ['name', 'description', siteMeta.description],
      ['property', 'og:title', siteMeta.title],
      ['property', 'og:description', siteMeta.description],
      ['name', 'twitter:title', siteMeta.title],
      ['name', 'twitter:description', siteMeta.description],
    ];

    metaUpdates.forEach(([attr, key, value]) => {
      const tag = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (tag) {
        tag.setAttribute('content', value);
      }
    });
  }, [siteMeta.description, siteMeta.title]);

  return <RouterProvider router={router} />;
}

export default App;
