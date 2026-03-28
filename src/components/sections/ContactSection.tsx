import { useSiteContent } from '../../context/SiteContentContext';
import { ContactForm } from '../ui/ContactForm';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function ContactSection() {
  const { content } = useSiteContent();
  const { contact, ui } = content;

  return (
    <SectionWrapper id={contact.id} surface="muted">
      <div className="contact-layout">
        <div>
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
              <span>{ui.email}</span>
              <p>{contact.details.email}</p>
            </div>
            <div>
              <span>{ui.phone}</span>
              <p>{contact.details.phone}</p>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <h3>{contact.formTitle}</h3>
          <p>{contact.formDescription}</p>
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
