import { NextPage } from 'next';

import { Section } from '@components/Section';
import { Layout } from '@components/wrappers/Layout';
import { Activities } from '@components/sections/Activities';

const Home: NextPage = () => {
  return (
    <Layout title="Web3 Devs Poland">
      <Section title="Content coming soon...">More specifically, sometime in the future...</Section>
      <Activities />
      <Section title="Content coming soon...">More specifically, sometime in the future...</Section>
      <Section title="Content coming soon...">More specifically, sometime in the future...</Section>
      <Section title="Content coming soon...">More specifically, sometime in the future...</Section>
    </Layout>
  );
};

export default Home;
