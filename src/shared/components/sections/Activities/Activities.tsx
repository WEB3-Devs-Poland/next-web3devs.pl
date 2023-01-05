import { Section } from '@components/Section';
import React from 'react';

import { ACTIVITIES } from './Activities.constants';

export const Activities: React.FunctionComponent = () => {
  return (
    <Section title="Activities">
      <div className="flex flex-col lg:flex-row">
        {ACTIVITIES.map(({ SVG, title }) => (
          <div key={title} className="mx-auto my-8 flex flex-col self-start lg:my-0">
            <div className="flex lg:h-[275px]">
              <SVG className="mb-4 scale-75 self-end lg:scale-100" />
            </div>
            <h3 className="w-full max-w-[300px] text-center text-2xl font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};
