import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { SectionWrapper } from '../ui/SectionWrapper';

export function HomeJumpLinksSection() {
  const { content } = useSiteContent();
  const { jumpLinks } = content;

  return (
    <SectionWrapper id={jumpLinks.id} className="jump-links-section">
      <div className="jump-links" aria-label="Primary jump links">
        {jumpLinks.items.map((item) => (
          <AppLink key={item.href} href={item.href} className="jump-links__item">
            {item.label}
          </AppLink>
        ))}
      </div>
    </SectionWrapper>
  );
}
