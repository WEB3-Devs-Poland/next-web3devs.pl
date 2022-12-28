import React from 'react';

export interface ButtonProps extends React.PropsWithChildren {}

export const Default: React.FunctionComponent<ButtonProps> = ({ children }) => (
  <button className="Default py-2 px-4 bg-brand-purple2 rounded-lg font-medium">{children}</button>
);
