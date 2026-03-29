import { useEffect, useState } from 'react';
import { useSiteContent } from '../../context/SiteContentContext';
import { AppLink } from '../ui/AppLink';
import { SectionHeading } from '../ui/SectionHeading';
import { SectionWrapper } from '../ui/SectionWrapper';

export function IndustriesSection() {
  const { content, locale } = useSiteContent();
  const { industriesPage } = content;
  const segments =
    locale === 'ru'
      ? [
          {
            needs: ['Цифровые каналы', 'Онбординг и активация', 'Непрерывность сервиса'],
            solutions: ['Mobile & Internet Banking', 'Remote Customer Acquisition', 'Notification Service'],
            value: 'Помогаем выстроить customer-facing banking stack без разрыва между каналами и backend-логикой.',
          },
          {
            needs: ['Core-операции', 'Платёжные интеграции', 'Согласованность enterprise-систем'],
            solutions: ['Core Banking System', 'Card & Payment Solutions'],
            value: 'Делаем ставку на операционную устойчивость, integration clarity и enterprise-ready delivery.',
          },
          {
            needs: ['Быстрое привлечение', 'Снижение branch dependency', 'Гибкий цифровой рост'],
            solutions: ['Remote Customer Acquisition', 'Mobile & Internet Banking', 'Notification Service'],
            value: 'Ускоряем digital-first рост без разрастания разрозненных процессов и каналов.',
          },
          {
            needs: ['Shared services', 'Кросс-системная координация', 'Инфраструктурная готовность'],
            solutions: ['Core Banking System', 'Card & Payment Solutions'],
            value: 'Полезно для внутренних банковских программ, где delivery и operations должны двигаться синхронно.',
          },
        ]
      : [
          {
            needs: ['Digital channels', 'Onboarding and activation', 'Service continuity'],
            solutions: ['Mobile & Internet Banking', 'Remote Customer Acquisition', 'Notification Service'],
            value: 'Build a customer-facing banking stack without disconnecting channels from backend logic.',
          },
          {
            needs: ['Core operations', 'Payment integrations', 'Enterprise system alignment'],
            solutions: ['Core Banking System', 'Card & Payment Solutions'],
            value: 'Focus on operational resilience, integration clarity, and enterprise-ready execution.',
          },
          {
            needs: ['Faster acquisition', 'Lower branch dependency', 'Flexible digital growth'],
            solutions: ['Remote Customer Acquisition', 'Mobile & Internet Banking', 'Notification Service'],
            value: 'Support digital-first growth without adding fragmented processes and channels.',
          },
          {
            needs: ['Shared services', 'Cross-system coordination', 'Infrastructure readiness'],
            solutions: ['Core Banking System', 'Card & Payment Solutions'],
            value: 'Useful for internal banking programs where delivery and operations need to move together.',
          },
        ];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = industriesPage.items[activeIndex];
  const activeSegment = segments[activeIndex];
  const needsLabel = locale === 'ru' ? 'Типовые задачи' : 'Typical tasks';
  const solutionsLabel = locale === 'ru' ? 'Подходящие решения' : 'Relevant solutions';
  const valueLabel = locale === 'ru' ? 'Коммерческая ценность' : 'Commercial value';
  const ctaLabel = locale === 'ru' ? 'Перейти к решениям' : 'Go to solutions';

  useEffect(() => {
    setActiveIndex(0);
  }, [locale]);

  return (
    <SectionWrapper id={industriesPage.id} className="industries-strategy-section">
      <SectionHeading
        eyebrow={industriesPage.eyebrow}
        title={industriesPage.title}
        description={industriesPage.description}
      />
      <div className="industries-strategy">
        <div className="industries-strategy__nav" role="tablist" aria-label={industriesPage.title}>
          {industriesPage.items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`industry-tab ${index === activeIndex ? 'industry-tab--active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span>{item.title}</span>
              <small>{item.description}</small>
            </button>
          ))}
        </div>
        <article className="industry-panel">
          <div className="industry-panel__hero">
            <p className="industry-panel__label">{activeItem.title}</p>
            <h3>{activeItem.description}</h3>
            <p>{activeSegment.value}</p>
          </div>
          <div className="industry-panel__clusters">
            <div className="industry-panel__cluster">
              <p className="industry-panel__cluster-label">{needsLabel}</p>
              <div className="industry-panel__chips">
                {activeSegment.needs.map((need) => (
                  <span key={need}>{need}</span>
                ))}
              </div>
            </div>
            <div className="industry-panel__cluster">
              <p className="industry-panel__cluster-label">{solutionsLabel}</p>
              <div className="industry-panel__chips">
                {activeSegment.solutions.map((solution) => (
                  <span key={solution}>{solution}</span>
                ))}
              </div>
            </div>
            <div className="industry-panel__cluster">
              <p className="industry-panel__cluster-label">{valueLabel}</p>
              <p>{activeSegment.value}</p>
            </div>
          </div>
          <AppLink href="/solutions" className="button button--ghost">
            {ctaLabel}
          </AppLink>
        </article>
      </div>
    </SectionWrapper>
  );
}
