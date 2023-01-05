import { NextPage } from 'next';

import { Section } from '@components/Section';
import { Layout } from '@components/wrappers/Layout';
import { Activities } from '@components/sections/Activities';
import { Invitation } from '@components/sections/Invitation';
import { Partners } from '@components/sections/Partners';

const Home: NextPage = () => {
  return (
    <Layout title="Web3 Devs Poland">
      <Invitation />
      <Activities />
      <Partners />
      <Section title="Content coming soon...">More specifically, sometime in the future...</Section>
      <Section title="Content coming soon...">More specifically, sometime in the future...</Section>
    </Layout>
  );
};

export default Home;
