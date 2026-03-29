import { AboutSection } from '../components/sections/AboutSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { MetricsStripSection } from '../components/sections/MetricsStripSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';

export function AboutPage() {
  return (
    <>
      <PageIntroSection page="about" />
      <AboutSection />
      <MetricsStripSection />
      <WhyChooseSection />
      <FinalCtaSection />
    </>
  );
}
