import React from 'react';

export interface ButtonProps extends React.PropsWithChildren {
  onClick?: () => void;
}

export const Default: React.FunctionComponent<ButtonProps> = ({ children, onClick }) => (
  <button className="Default rounded-lg bg-brand-purple2 py-2 px-4 font-medium" onClick={onClick}>
    {children}
  </button>
);
