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

    try {
      await submitContactForm({
        name: String(formData.get('name') ?? ''),
        company: String(formData.get('company') ?? ''),
        email: String(formData.get('email') ?? ''),
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
      <label htmlFor="contact-email">
        {contactForm.email}
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder={contactForm.placeholders.email}
          required
        />
      </label>
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
      <button type="submit" className="button button--primary" disabled={isSubmitting}>
        {isSubmitting ? contactForm.sending : contactForm.send}
      </button>
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
