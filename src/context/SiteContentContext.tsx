import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLocale, siteContentByLocale } from '../data/content';
import { HomePageContent, Locale } from '../types/content';

type SiteContentContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: HomePageContent;
};

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    const stored = window.localStorage.getItem('c-technology-locale') as Locale | null;
    return stored ?? defaultLocale;
  });

  useEffect(() => {
    window.localStorage.setItem('c-technology-locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      content: siteContentByLocale[locale],
    }),
    [locale],
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const context = useContext(SiteContentContext);

  if (!context) {
    throw new Error('useSiteContent must be used within SiteContentProvider');
  }

  return context;
}
