import { ContactSection } from '../components/sections/ContactSection';
import { CoreBankingSection } from '../components/sections/CoreBankingSection';
import { DigitalBankingSection } from '../components/sections/DigitalBankingSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { NotificationSection } from '../components/sections/NotificationSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';
import { PaymentsSection } from '../components/sections/PaymentsSection';
import { RemoteOnboardingSection } from '../components/sections/RemoteOnboardingSection';
import { SolutionsSection } from '../components/sections/SolutionsSection';

export function SolutionsPage() {
  return (
    <>
      <PageIntroSection page="solutions" />
      <SolutionsSection />
      <CoreBankingSection />
      <DigitalBankingSection />
      <RemoteOnboardingSection />
      <PaymentsSection />
      <NotificationSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}
