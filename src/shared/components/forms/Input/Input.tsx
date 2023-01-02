import React, { InputHTMLAttributes } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

export const Input: React.FunctionComponent<IInput> = ({ className, label, ...props }) => {
  return (
    <div className="inline-block w-full lg:w-fit">
      <p className="my-1 text-grayScale-grey4">{label}</p>
      <input
        {...props}
        // eslint-disable-next-line max-len
        className={`rounded-md border-[1px] border-grayScale-grey3 bg-transparent py-2 px-2 focus:border-brand-purple2 ${
          className ?? ''
        } outline-none`}
      />
    </div>
  );
};
