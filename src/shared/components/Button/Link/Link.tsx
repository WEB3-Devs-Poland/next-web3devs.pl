import NextLink from 'next/link';
import React from 'react';

export interface LinkProps extends React.PropsWithChildren {
  href: string;
}

export const Link: React.FunctionComponent<LinkProps> = ({ children, href }) => (
  <NextLink href={href} className="Link text-xl mx-4 inline-block">
    {children}
  </NextLink>
);
