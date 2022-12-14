import React, { PropsWithChildren } from 'react';

export interface ISection extends PropsWithChildren {
  id?: string;
  title?: string;
  className?: string;
}

export const Section: React.FunctionComponent<ISection> = ({ children, className, title, id }) => (
  <section id={id} className="mx-auto w-10/12 py-12 lg:py-24">
    {title ? <h2 className="text-center text-3xl font-medium">{title}</h2> : null}
    <div className={`mt-20 mb-10 ${className ?? ''}`}>{children}</div>
  </section>
);
