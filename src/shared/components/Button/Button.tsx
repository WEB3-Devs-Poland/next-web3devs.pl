import { Default } from './Default';
import { Link } from './Link';
import React from 'react';

export interface ButtonProps extends React.PropsWithChildren {
  type?: 'Default' | 'Link';
  href?: string;
  onClick?: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ children, type = 'Default', href, onClick }) => {
  if (type === 'Link' && href === undefined) {
    throw new Error('Link buttons require the ref prop');
  }

  if (href !== undefined && type === 'Link') {
    return (
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return <Default onClick={onClick}>{children}</Default>;
};
