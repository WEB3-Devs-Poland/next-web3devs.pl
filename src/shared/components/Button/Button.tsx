import { Default } from './Default';
import { Link } from './Link';
import React from 'react';

export interface IButton extends React.PropsWithChildren {
  type?: 'Default' | 'Link';
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FunctionComponent<IButton> = ({
  children,
  type = 'Default',
  href,
  onClick,
  className,
  disabled,
}) => {
  if (type === 'Link' && href === undefined) {
    throw new Error('Link buttons require the ref prop');
  }

  if (href !== undefined && type === 'Link') {
    return (
      <Link disabled={disabled} href={href} onClick={onClick} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <Default disabled={disabled} onClick={onClick} className={className}>
      {children}
    </Default>
  );
};
