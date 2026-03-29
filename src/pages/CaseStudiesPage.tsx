import { CaseStudiesSection } from '../components/sections/CaseStudiesSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';

export function CaseStudiesPage() {
  return (
    <>
      <PageIntroSection page="caseStudies" />
      <CaseStudiesSection />
      <FinalCtaSection />
    </>
  );
}
