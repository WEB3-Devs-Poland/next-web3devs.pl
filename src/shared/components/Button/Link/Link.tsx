import NextLink from 'next/link';
import React from 'react';

export interface LinkProps extends React.PropsWithChildren {
  href: string;
  onClick?: () => void;
}

export const Link: React.FunctionComponent<LinkProps> = ({ children, href, onClick }) => (
  <NextLink href={href} className="Link mx-4 inline-block text-xl" onClick={onClick}>
    {children}
  </NextLink>
);
