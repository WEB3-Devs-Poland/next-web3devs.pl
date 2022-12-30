import { NextPage } from 'next';

import { Section } from '@components/Section';
import { Layout } from '@components/wrappers/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Web3 Devs Poland">
      <Section title="Here will be our content soon">in the future...</Section>
      <Section title="Here will be our content soon">in the future...</Section>
      <Section title="Here will be our content soon">in the future...</Section>
      <Section title="Here will be our content soon">in the future...</Section>
      <Section title="Here will be our content soon">in the future...</Section>
    </Layout>
  );
};

export default Home;
