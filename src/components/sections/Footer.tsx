import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';

export function Footer() {
  const { content } = useSiteContent();
  const { footer } = content;

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img
            className="site-footer__logo"
            src="/ctechnology-logo-full.png"
            alt={footer.brand}
          />
          <p>{footer.description}</p>
        </div>
        <div className="site-footer__links">
          <div className="site-footer__group">
            <p className="site-footer__label">Company</p>
            <nav className="site-footer__nav" aria-label="Footer navigation">
              {footer.links.map((item) => (
                <AppLink key={item.href} href={item.href}>
                  {item.label}
                </AppLink>
              ))}
            </nav>
          </div>
          {footer.exploreLinks ? (
            <div className="site-footer__group">
              <p className="site-footer__label">Explore</p>
              <nav className="site-footer__nav site-footer__nav--secondary" aria-label="Explore navigation">
                {footer.exploreLinks.map((item) => (
                  <AppLink key={item.href} href={item.href}>
                    {item.label}
                  </AppLink>
                ))}
              </nav>
            </div>
          ) : null}
        </div>
        <p className="site-footer__copy">{footer.copyright}</p>
      </div>
    </footer>
  );
}
