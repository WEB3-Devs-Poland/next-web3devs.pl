import React from 'react';

export interface IDefault extends React.PropsWithChildren {
  onClick?: () => void;
  className?: string;
}

export const Default: React.FunctionComponent<IDefault> = ({ children, onClick, className }) => (
  <button className={`Default rounded-lg bg-brand-purple2 py-2 px-4 font-medium ${className ?? ''}`} onClick={onClick}>
    {children}
  </button>
);
