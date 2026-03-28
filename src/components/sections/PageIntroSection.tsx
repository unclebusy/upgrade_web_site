import { HomePageContent } from '../../types/content';
import { useSiteContent } from '../../context/SiteContentContext';
import { PageIntroContent } from '../../types/content';
import { SectionWrapper } from '../ui/SectionWrapper';

type PageIntroSectionProps = { page: keyof HomePageContent['pageIntros'] };

export function PageIntroSection({ page }: PageIntroSectionProps) {
  const { content: siteContent } = useSiteContent();
  const content: PageIntroContent = siteContent.pageIntros[page];

  return (
    <SectionWrapper surface="accent" className="page-intro">
      <div className={`page-intro__layout ${content.image ? 'page-intro__layout--media' : ''}`}>
        <div className="page-intro__content">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="page-intro__description">{content.description}</p>
        </div>
        {content.image ? (
          <div className="page-intro__media">
            <img src={content.image.src} alt={content.image.alt} />
          </div>
        ) : null}
      </div>
    </SectionWrapper>
  );
}
