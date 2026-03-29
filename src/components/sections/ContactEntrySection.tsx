import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { SectionWrapper } from '../ui/SectionWrapper';

export function ContactEntrySection() {
  const { content, locale } = useSiteContent();
  const { contact } = content;
  const eyebrow = locale === 'ru' ? 'Связаться с командой' : 'Talk to the team';
  const title =
    locale === 'ru'
      ? 'Для high-intent запросов оставили короткий вход, без второй полной страницы на home.'
      : 'Keep the homepage entry high-intent instead of embedding a second full contact page.';
  const cta = locale === 'ru' ? 'Перейти к enterprise intake' : 'Go to enterprise intake';

  return (
    <SectionWrapper className="contact-entry-section">
      <div className="contact-entry">
        <div className="contact-entry__content">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{contact.responseExpectation}</p>
        </div>
        <div className="contact-entry__signals" aria-label={contact.eyebrow}>
          <span>{contact.details.office}</span>
          <span>{contact.details.businessEmail}</span>
          <span>{contact.nextSteps[0]}</span>
        </div>
        <AppLink href="/contact" className="button button--ghost">
          {cta}
        </AppLink>
      </div>
    </SectionWrapper>
  );
}
