import { CustomersSection } from '../components/sections/CustomersSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { PageIntroSection } from '../components/sections/PageIntroSection';

export function CustomersPage() {
  return (
    <>
      <PageIntroSection page="customers" />
      <CustomersSection />
      <FinalCtaSection />
    </>
  );
}
