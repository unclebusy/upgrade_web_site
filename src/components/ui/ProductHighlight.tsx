import { ProductHighlightContent } from '../../types/content';
import { useSiteContent } from '../../context/SiteContentContext';
import { FeatureList } from './FeatureList';

type ProductHighlightProps = {
  content: ProductHighlightContent;
  reversed?: boolean;
  tone?: 'core' | 'digital' | 'onboarding' | 'payments' | 'notifications';
};

export function ProductHighlight({
  content,
  reversed = false,
  tone = 'core',
}: ProductHighlightProps) {
  const { content: siteContent } = useSiteContent();
  const { ui } = siteContent;

  return (
    <div
      className={`product-highlight product-highlight--${tone} ${reversed ? 'product-highlight--reversed' : ''}`}
    >
      <div className="product-highlight__content">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p className="product-highlight__description">{content.description}</p>
        <p>{content.summary}</p>
        <div className="product-highlight__lists">
          <div>
            <p className="product-highlight__label">{ui.outcomes}</p>
            <FeatureList items={content.outcomes} />
          </div>
          <div>
            <p className="product-highlight__label">{ui.capabilities}</p>
            <FeatureList items={content.capabilities} />
          </div>
        </div>
      </div>
      <aside className="product-highlight__panel">
        {content.image ? (
          <div className="product-highlight__media">
            <img src={content.image.src} alt={content.image.alt} />
          </div>
        ) : null}
        <div className="product-panel">
          <p className="product-panel__label">{content.sideLabel}</p>
          <div className="product-panel__signal" aria-hidden="true" />
          <h3>{content.sideValue}</h3>
          <p>{ui.builtAsPartOfStack}</p>
        </div>
      </aside>
    </div>
  );
}
