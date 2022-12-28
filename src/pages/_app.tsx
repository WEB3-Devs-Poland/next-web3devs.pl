import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@styles/animations.css';
import '@styles/globals.css';
import { AppProps } from 'next/app';

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
