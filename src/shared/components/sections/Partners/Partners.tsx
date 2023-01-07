import { Section } from '@components/Section';
import React from 'react';
import { PARTNERS } from './Partners.constants';

export const Partners: React.FunctionComponent = () => {
  return (
    <Section title="Partners" className="flex flex-row justify-center">
      {PARTNERS.map(({ name, Logo }) => (
        <div
          key={name}
          // eslint-disable-next-line max-len
          className="m-8 flex aspect-square cursor-pointer rounded-md border-2 border-grayScale-grey2 bg-black p-8 duration-500 ease-in-out hover:border-brand-purple2 hover:drop-shadow-card">
          <Logo className="self-center" />
        </div>
      ))}
    </Section>
  );
};
