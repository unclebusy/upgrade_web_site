import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';

export function Header() {
  const { content, locale, setLocale } = useSiteContent();
  const { navigation, ui } = content;
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contextualActiveMap: Record<string, string> = {
    '/services': '/solutions',
    '/case-studies': '/solutions',
    '/industries': '/customers',
  };

  const scrollToTopIfCurrentRoute = (href: string) => {
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container site-header__frame">
        <div className="site-header__inner">
          <AppLink className="site-brand" href="/" ariaLabel="C Technology home">
            <img
              className="site-brand__logo"
              src="/ctechnology-logo-full.webp"
              alt="C Technology"
            />
            <span className="site-brand__text site-brand__text--sr">
              <strong>C Technology</strong>
              <small>{ui.brandTagline}</small>
            </span>
          </AppLink>
          <nav className="site-nav" aria-label="Primary navigation">
            {navigation.map((item) => {
              const contextualHref = contextualActiveMap[location.pathname];
              const isContextualActive = contextualHref === item.href;

              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => scrollToTopIfCurrentRoute(item.href)}
                  className={({ isActive }) =>
                    `site-nav__link ${(isActive || isContextualActive) ? 'site-nav__link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
          <button
            type="button"
            className={`menu-toggle ${isMenuOpen ? 'menu-toggle--active' : ''}`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? ui.closeLabel : ui.menuLabel}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="locale-switcher" aria-label="Language switcher">
            <button
              type="button"
              className={`locale-switcher__button ${locale === 'en' ? 'locale-switcher__button--active' : ''}`}
              onClick={() => setLocale('en')}
            >
              {ui.localeSwitcher.en}
            </button>
            <button
              type="button"
              className={`locale-switcher__button ${locale === 'ru' ? 'locale-switcher__button--active' : ''}`}
              onClick={() => setLocale('ru')}
            >
              {ui.localeSwitcher.ru}
            </button>
          </div>
          <AppLink className="button button--primary header-cta" href="/contact">
            {ui.headerCta}
          </AppLink>
        </div>
        <div
          id="mobile-navigation"
          className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <nav className="mobile-menu__section" aria-label="Mobile primary navigation">
            {navigation.map((item) => {
              const contextualHref = contextualActiveMap[location.pathname];
              const isContextualActive = contextualHref === item.href;

              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => scrollToTopIfCurrentRoute(item.href)}
                  className={({ isActive }) =>
                    `mobile-menu__link ${(isActive || isContextualActive) ? 'mobile-menu__link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
          <div className="mobile-menu__footer">
            <div className="locale-switcher" aria-label="Language switcher">
              <button
                type="button"
                className={`locale-switcher__button ${locale === 'en' ? 'locale-switcher__button--active' : ''}`}
                onClick={() => setLocale('en')}
              >
                {ui.localeSwitcher.en}
              </button>
              <button
                type="button"
                className={`locale-switcher__button ${locale === 'ru' ? 'locale-switcher__button--active' : ''}`}
                onClick={() => setLocale('ru')}
              >
                {ui.localeSwitcher.ru}
              </button>
            </div>
            <AppLink className="button button--primary" href="/contact">
              {ui.headerCta}
            </AppLink>
          </div>
        </div>
      </div>
    </header>
  );
}
