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

        <meta name="description" content="Web3 Devs Poland" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col first:mt-20">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
