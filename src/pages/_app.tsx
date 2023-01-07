import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-multi-carousel/lib/styles.css';
import '@styles/animations.css';
import '@styles/globals.css';
import { AppProps } from 'next/app';
import { WagmiProvider } from '@providers/WagmiProvider';

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiProvider>
      <Component {...pageProps} />
    </WagmiProvider>
  );
};

export default App;
