import React, { PropsWithChildren } from 'react';

export interface SectionProps extends PropsWithChildren {
  id?: string;
  title?: string;
  className?: string;
}

export const Section: React.FunctionComponent<SectionProps> = ({ children, className, title, id }) => (
  <section id={id} className={`mx-auto w-10/12 py-24 ${className ?? ''}`}>
    {title ? <h2 className="text-center text-3xl font-medium">{title}</h2> : null}
    <div className="my-20">{children}</div>
  </section>
);
