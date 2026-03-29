import { FormEvent, useState } from 'react';
import { useSiteContent } from '../../context/SiteContentContext';
import { submitContactForm } from '../../lib/contactApi';

export function ContactForm() {
  const { content } = useSiteContent();
  const { contactForm } = content.ui;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    const formData = new FormData(event.currentTarget);
    const website = String(formData.get('website') ?? '');

    if (website.trim()) {
      setIsSubmitting(false);
      return;
    }

    try {
      await submitContactForm({
        name: String(formData.get('name') ?? ''),
        workEmail: String(formData.get('workEmail') ?? ''),
        company: String(formData.get('company') ?? ''),
        role: String(formData.get('role') ?? ''),
        country: String(formData.get('country') ?? ''),
        projectType: String(formData.get('projectType') ?? ''),
        timeline: String(formData.get('timeline') ?? ''),
        message: String(formData.get('message') ?? ''),
      });

      event.currentTarget.reset();
      setStatusType('success');
      setStatusMessage(contactForm.success);
    } catch {
      setStatusType('error');
      setStatusMessage(contactForm.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__signals" aria-label="Contact form signals">
        {contactForm.helperSignals.map((signal) => (
          <span key={signal}>{signal}</span>
        ))}
      </div>
      <label htmlFor="contact-name">
        {contactForm.name}
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder={contactForm.placeholders.name}
          required
        />
      </label>
      <label htmlFor="contact-company">
        {contactForm.company}
        <input
          id="contact-company"
          type="text"
          name="company"
          placeholder={contactForm.placeholders.company}
        />
      </label>
      <label htmlFor="contact-work-email">
        {contactForm.workEmail}
        <input
          id="contact-work-email"
          type="email"
          name="workEmail"
          placeholder={contactForm.placeholders.email}
          required
        />
      </label>
      <div className="contact-form__grid">
        <label htmlFor="contact-role">
          {contactForm.role}
          <input
            id="contact-role"
            type="text"
            name="role"
            placeholder={contactForm.placeholders.role}
          />
        </label>
        <label htmlFor="contact-country">
          {contactForm.country}
          <input
            id="contact-country"
            type="text"
            name="country"
            placeholder={contactForm.placeholders.country}
          />
        </label>
      </div>
      <div className="contact-form__grid">
        <label htmlFor="contact-project-type">
          {contactForm.projectType}
          <select id="contact-project-type" name="projectType" defaultValue="" required>
            <option value="" disabled>
              {contactForm.projectTypePlaceholder}
            </option>
            {contactForm.projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="contact-timeline">
          {contactForm.timeline}
          <select id="contact-timeline" name="timeline" defaultValue="" required>
            <option value="" disabled>
              {contactForm.timelinePlaceholder}
            </option>
            {contactForm.timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label htmlFor="contact-message">
        {contactForm.message}
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder={contactForm.placeholders.message}
          required
        />
      </label>
      <label className="contact-form__honeypot" aria-hidden="true" tabIndex={-1}>
        Website
        <input type="text" name="website" autoComplete="off" tabIndex={-1} />
      </label>
      <button type="submit" className="button button--primary" disabled={isSubmitting}>
        {isSubmitting ? contactForm.sending : contactForm.send}
      </button>
      <p className="contact-form__note">{contactForm.privacyNote}</p>
      {statusMessage ? (
        <p
          className={`form-status form-status--${statusType ?? 'success'}`}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
