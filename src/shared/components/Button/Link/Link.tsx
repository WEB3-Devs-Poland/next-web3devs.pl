import NextLink from 'next/link';
import React from 'react';

export interface ILink extends React.PropsWithChildren {
  href: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Link: React.FunctionComponent<ILink> = ({ children, href, onClick, className, disabled }) => (
  <NextLink
    href={href}
    scroll={false}
    onClick={onClick}
    className={`${
      disabled ? 'pointer-events-none cursor-not-allowed text-grayScale-grey1' : 'Link'
    } mx-4 inline-block select-none text-xl ${className ?? ''}`}>
    {children}
  </NextLink>
);
