import { AppLink } from '../components/ui/AppLink';
import { useSiteContent } from '../context/SiteContentContext';
import { SectionWrapper } from '../components/ui/SectionWrapper';

export function NotFoundPage() {
  const { content } = useSiteContent();
  const { notFound } = content.ui;

  return (
    <SectionWrapper surface="accent" className="not-found">
      <div className="not-found__content">
        <img
          className="not-found__mark"
          src="/ctechnology-logo-mark.png"
          alt="C Technology brand mark"
        />
        <p className="eyebrow">404</p>
        <h1>{notFound.title}</h1>
        <p>{notFound.description}</p>
        <div className="cta-group">
          <AppLink href="/" className="button button--primary">
            {notFound.home}
          </AppLink>
          <AppLink href="/contact" className="button button--ghost">
            {notFound.contact}
          </AppLink>
        </div>
      </div>
    </SectionWrapper>
  );
}
