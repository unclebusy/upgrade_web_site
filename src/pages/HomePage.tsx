import { AboutSection } from '../components/sections/AboutSection';
import { AdvantagesSection } from '../components/sections/AdvantagesSection';
import { ContactSection } from '../components/sections/ContactSection';
import { CoreBankingSection } from '../components/sections/CoreBankingSection';
import { CustomersSection } from '../components/sections/CustomersSection';
import { DigitalBankingSection } from '../components/sections/DigitalBankingSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { HeroSection } from '../components/sections/HeroSection';
import { InfrastructureSection } from '../components/sections/InfrastructureSection';
import { MetricsSection } from '../components/sections/MetricsSection';
import { NotificationSection } from '../components/sections/NotificationSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { PaymentsSection } from '../components/sections/PaymentsSection';
import { RemoteOnboardingSection } from '../components/sections/RemoteOnboardingSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { SolutionsSection } from '../components/sections/SolutionsSection';
import { TechStackSection } from '../components/sections/TechStackSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MetricsSection />
      <ServicesSection />
      <AdvantagesSection />
      <SolutionsSection />
      <CoreBankingSection />
      <DigitalBankingSection />
      <RemoteOnboardingSection />
      <PaymentsSection />
      <NotificationSection />
      <InfrastructureSection />
      <CustomersSection />
      <PartnersSection />
      <TechStackSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}
