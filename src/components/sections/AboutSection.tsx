import { useSiteContent } from '../../context/SiteContentContext';
import { FeatureList } from '../ui/FeatureList';
import { SectionWrapper } from '../ui/SectionWrapper';

export function AboutSection() {
  const { content, locale } = useSiteContent();
  const { about, advantages, metrics } = content;
  const regionTitle = locale === 'ru' ? 'Региональное присутствие' : 'Regional execution';
  const maturityTitle = locale === 'ru' ? 'Delivery maturity' : 'Delivery maturity';
  const philosophyTitle = locale === 'ru' ? 'Философия работы' : 'Operating philosophy';
  const specializationTitle = locale === 'ru' ? 'Где компания особенно сильна' : 'Where the company is strongest';
  const maturityItems = advantages.items.slice(0, 2);
  const philosophyItems = advantages.items.slice(2);

  return (
    <SectionWrapper id={about.id} className="about-editorial-section">
      <div className="about-editorial">
        <div className="about-editorial__content">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.title}</h2>
          <p className="about-editorial__lede">{about.description}</p>
          <div className="rich-text">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        {about.image ? (
          <div className="section-media section-media--about about-editorial__media">
            <img src={about.image.src} alt={about.image.alt} />
          </div>
        ) : null}
      </div>
      <div className="about-signals">
        {metrics.items.map((item) => (
          <article key={item.label} className="about-signals__item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <div className="about-story-grid">
        <article className="about-story-card about-story-card--feature">
          <p className="about-story-card__label">{specializationTitle}</p>
          <h3>{locale === 'ru' ? 'Banking-first специализация без generic IT-подачи.' : 'Banking-first specialization without generic IT positioning.'}</h3>
          <p>{about.description}</p>
          <FeatureList items={about.highlights} />
        </article>
        <article className="about-story-card">
          <p className="about-story-card__label">{maturityTitle}</p>
          <h3>{locale === 'ru' ? 'Команда продаёт не обещания, а управляемую поставку.' : 'The team sells governed delivery, not generic promises.'}</h3>
          <div className="about-story-card__stack">
            {maturityItems.map((item) => (
              <div key={item.title}>
                <p className="about-story-card__title">{item.title}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="about-story-card">
          <p className="about-story-card__label">{regionTitle}</p>
          <h3>{locale === 'ru' ? 'Бишкек и Стамбул как delivery footprint.' : 'Bishkek and Istanbul as the execution footprint.'}</h3>
          <p>{metrics.items[1]?.description}</p>
          <p>{about.paragraphs[1]}</p>
        </article>
        <article className="about-story-card">
          <p className="about-story-card__label">{philosophyTitle}</p>
          <h3>{locale === 'ru' ? 'Одна команда на discovery, integration и rollout.' : 'One team across discovery, integration, and rollout.'}</h3>
          <div className="about-story-card__stack">
            {philosophyItems.map((item) => (
              <div key={item.title}>
                <p className="about-story-card__title">{item.title}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </SectionWrapper>
  );
}
