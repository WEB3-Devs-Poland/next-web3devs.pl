import { Button } from '@components/Button';
import { MEDIA } from '@components/Footer/Footer.constants';
import { Section } from '@components/Section';
import React from 'react';

export const Invitation: React.FunctionComponent = () => (
  <Section className="flex flex-col justify-center">
    <h1 className="mx-auto max-w-xl text-center text-4xl font-semibold tracking-wide lg:text-6xl">
      <p className="inline-block text-brand-purple2">Web3</p> Developers Polish Community
    </h1>

    <h2 className="mx-auto my-8 text-center text-xl font-medium lg:text-3xl">
      Learn. <p className="inline-block text-brand-purple2">BUIDL.</p> Grow.
    </h2>

    <a href={MEDIA[1].link} className="m-auto">
      <Button className="py-3 px-14 text-xl font-semibold lg:text-2xl">Join us</Button>
    </a>

    <p className="mx-auto mt-8 text-lg">or scroll down to learn more</p>
  </Section>
);
