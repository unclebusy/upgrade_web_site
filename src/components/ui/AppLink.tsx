import { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type AppLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children' | 'className'> &
  Omit<LinkProps, 'to' | 'children' | 'className'>;

export function AppLink({
  href,
  children,
  className,
  ariaLabel,
  ...rest
}: AppLinkProps) {
  const isRoute = href.startsWith('/');

  if (isRoute) {
    return (
      <Link to={href} className={className} aria-label={ariaLabel} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} aria-label={ariaLabel} {...rest}>
      {children}
    </a>
  );
}
