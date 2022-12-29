import { NextPage } from 'next';

import { Header } from '@components/Header';
import { Section } from '@components/Section';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Section title="New Web3 Devs Poland page">Content</Section>
    </div>
  );
};

export default Home;
