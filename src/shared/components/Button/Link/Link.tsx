import NextLink from 'next/link';
import React from 'react';

export interface ILink extends React.PropsWithChildren {
  href: string;
  onClick?: () => void;
  className?: string;
}

export const Link: React.FunctionComponent<ILink> = ({ children, href, onClick, className }) => (
  <NextLink
    href={href}
    scroll={false}
    onClick={onClick}
    className={`Link mx-4 inline-block text-xl ${className ?? ''}`}>
    {children}
  </NextLink>
);
