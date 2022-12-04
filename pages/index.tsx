import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold">
      <FontAwesomeIcon icon={faDiscord} />
      Welcome in Web3 Devs Poland
    </h1>
  );
};

export default Home;
