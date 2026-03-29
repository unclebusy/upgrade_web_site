import { ContactSection } from '../components/sections/ContactSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';

export function ContactPage() {
  return (
    <>
      <PageIntroSection page="contact" />
      <ContactSection showHeading={false} pageMode />
    </>
  );
}
