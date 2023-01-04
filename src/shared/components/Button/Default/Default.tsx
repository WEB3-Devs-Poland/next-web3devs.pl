import React from 'react';

export interface IDefault extends React.PropsWithChildren {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Default: React.FunctionComponent<IDefault> = ({ children, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${disabled ? 'cursor-not-allowed' : 'Default'}
        rounded-lg bg-grayScale-grey2 py-2 px-4 font-medium ${className ?? ''}`}>
      {children}
    </button>
  );
};
