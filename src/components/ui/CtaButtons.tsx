import { LinkAction } from '../../types/content';
import { AppLink } from './AppLink';

type CtaButtonsProps = {
  actions: LinkAction[];
};

export function CtaButtons({ actions }: CtaButtonsProps) {
  return (
    <div className="cta-group">
      {actions.map((action) => (
        <AppLink
          key={`${action.label}-${action.href}`}
          className={`button button--${action.variant ?? 'primary'}`}
          href={action.href}
        >
          {action.label}
        </AppLink>
      ))}
    </div>
  );
}
