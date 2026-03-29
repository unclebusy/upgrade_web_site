import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { ContactForm } from '../ui/ContactForm';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function ContactSection() {
  const { content, locale } = useSiteContent();
  const { contact, ui } = content;
  const addressLabel = locale === 'ru' ? 'Адрес' : 'Address';
  const businessEmailLabel = locale === 'ru' ? 'Деловой email' : 'Business email';
  const linkedInLabel = 'LinkedIn';
  const companyPageLabel = locale === 'ru' ? 'Страница компании' : 'Company page';

  return (
    <SectionWrapper id={contact.id} surface="muted">
      <div className="contact-layout">
        <div className="contact-layout__info">
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
          />
          {contact.image ? (
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
            <div>
              <span>{ui.phone}</span>
              <p>
                <AppLink href={`tel:${contact.details.phone.replace(/\s+/g, '')}`}>
                  {contact.details.phone}
                </AppLink>
              </p>
            </div>
            <div>
              <span>{linkedInLabel}</span>
              <p>
                <AppLink href={contact.details.linkedin} target="_blank" rel="noreferrer">
                  {companyPageLabel}
                </AppLink>
              </p>
            </div>
          </div>
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
