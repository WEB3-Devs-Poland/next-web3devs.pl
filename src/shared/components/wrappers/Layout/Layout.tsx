import React from 'react';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { Header } from '@components/Header';

export interface ILayout extends PropsWithChildren {
  title?: string;
}

export const Layout: React.FunctionComponent<ILayout> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mx-auto flex min-h-screen w-10/12 flex-col">
        <Header />
        {children}
      </div>
    </>
  );
};
