import { WagmiConfig, createClient, mainnet } from 'wagmi';

import React, { PropsWithChildren } from 'react';
import { ENV } from '@config/env';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

export const WagmiProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const client = createClient(
    getDefaultClient({
      appName: 'next-web3devs.pl',
      alchemyId: ENV.ALCHEMY_ID,
      chains: [mainnet],
    })
  );

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  );
};
