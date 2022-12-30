import NextLink from 'next/link';
import React from 'react';

export interface LinkProps extends React.PropsWithChildren {
  href: string;
  onClick?: () => void;
  className?: string;
}

export const Link: React.FunctionComponent<LinkProps> = ({ children, href, onClick, className }) => (
  <NextLink href={href} className={`Link mx-4 inline-block text-xl ${className ?? ''}`} onClick={onClick}>
    {children}
  </NextLink>
);
