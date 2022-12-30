import React from 'react';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export interface ILayout extends PropsWithChildren {
  title?: string;
}

export const Layout: React.FunctionComponent<ILayout> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
