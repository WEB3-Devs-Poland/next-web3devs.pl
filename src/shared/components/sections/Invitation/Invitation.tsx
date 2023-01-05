import { Button } from '@components/Button';
import { Section } from '@components/Section';
import React from 'react';

export const Invitation: React.FunctionComponent = () => {
  return (
    <Section className="flex flex-col justify-center">
      <h1 className="mx-auto max-w-lg text-center text-5xl font-semibold tracking-wide">
        <p className="inline-block text-brand-purple2">Web3</p> Developers Polish Community
      </h1>

      <h2 className="mx-auto my-8 text-center text-2xl font-medium">
        Learn. <p className="inline-block text-brand-purple2">BUIDL.</p> Grow.
      </h2>

      <Button className="m-auto py-2 px-12 text-xl font-semibold">Join us</Button>
    </Section>
  );
};
