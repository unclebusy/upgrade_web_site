import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { ContactForm } from '../ui/ContactForm';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

type ContactSectionProps = {
  showHeading?: boolean;
  pageMode?: boolean;
};

export function ContactSection({ showHeading = true, pageMode = false }: ContactSectionProps) {
  const { content, locale } = useSiteContent();
  const { contact, ui } = content;
  const hasRealPhone = !/\b00\b/.test(contact.details.phone);
  const addressLabel = locale === 'ru' ? 'Адрес' : 'Address';
  const businessEmailLabel = locale === 'ru' ? 'Деловой email' : 'Business email';
  const linkedInLabel = 'LinkedIn';
  const companyPageLabel = locale === 'ru' ? 'Страница компании' : 'Company page';
  const intakeLabel = locale === 'ru' ? 'Enterprise Intake' : 'Enterprise Intake';
  const intakeTitle =
    locale === 'ru'
      ? 'Контактные данные и intake-форма для квалифицированных банковских запросов.'
      : 'Contact details and intake form for qualified banking requests.';
  const intakeDescription =
    locale === 'ru'
      ? 'Страница сфокусирована на маршрутизации инициатив по core banking, цифровым каналам, onboarding, payments, integration и infrastructure к нужной команде.'
      : 'This page is designed to route core banking, digital channels, onboarding, payments, integration, and infrastructure programs to the right team.';
  const intakeSignals = [
    contact.responseExpectation,
    contact.details.office,
    `${businessEmailLabel}: ${contact.details.businessEmail}`,
  ];
  const responseLabel = locale === 'ru' ? 'Response model' : 'Response model';

  return (
    <SectionWrapper
      id={contact.id}
      surface="muted"
      className={pageMode ? 'contact-page-section' : undefined}
    >
      {pageMode ? (
        <div className="contact-intake-strip" aria-label={intakeLabel}>
          {intakeSignals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>
      ) : null}
      <div className="contact-layout">
        <div className={`contact-layout__info ${pageMode ? 'contact-layout__info--page' : ''}`}>
          {showHeading ? (
            <SectionHeading
              eyebrow={contact.eyebrow}
              title={contact.title}
              description={contact.description}
            />
          ) : (
            <div className="contact-layout__intro">
              <p className="eyebrow">{intakeLabel}</p>
              <h2>{intakeTitle}</h2>
              <p>{intakeDescription}</p>
            </div>
          )}
          {contact.image && !pageMode ? (
            <div className="section-media section-media--contact">
              <img src={contact.image.src} alt={contact.image.alt} />
            </div>
          ) : null}
          <div className="contact-details">
            <div>
              <span>{ui.office}</span>
              <p>{contact.details.office}</p>
            </div>
            <div>
              <span>{addressLabel}</span>
              <p>{contact.details.address}</p>
            </div>
            <div>
              <span>{ui.email}</span>
              <p>
                <AppLink href={`mailto:${contact.details.email}`}>{contact.details.email}</AppLink>
              </p>
            </div>
            <div>
              <span>{businessEmailLabel}</span>
              <p>
                <AppLink href={`mailto:${contact.details.businessEmail}`}>
                  {contact.details.businessEmail}
                </AppLink>
              </p>
            </div>
            {hasRealPhone ? (
              <div>
                <span>{ui.phone}</span>
                <p>
                  <AppLink href={`tel:${contact.details.phone.replace(/\s+/g, '')}`}>
                    {contact.details.phone}
                  </AppLink>
                </p>
              </div>
            ) : null}
            <div>
              <span>{linkedInLabel}</span>
              <p>
                <AppLink href={contact.details.linkedin} target="_blank" rel="noreferrer">
                  {companyPageLabel}
                </AppLink>
              </p>
            </div>
          </div>
          {pageMode ? (
            <div className="contact-trust-band" aria-label={responseLabel}>
              <span>{contact.responseExpectation}</span>
              <span>{contact.nextSteps[0]}</span>
              <span>{contact.nextSteps[1]}</span>
            </div>
          ) : null}
        </div>
        <div className="contact-card">
          <h3>{contact.formTitle}</h3>
          <p>{contact.formDescription}</p>
          <ContactForm />
          <p className="contact-response">{contact.responseExpectation}</p>
          <div className="contact-next-steps">
            <p className="contact-next-steps__title">{contact.nextStepsTitle}</p>
            <ul className="contact-next-steps__list">
              {contact.nextSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
