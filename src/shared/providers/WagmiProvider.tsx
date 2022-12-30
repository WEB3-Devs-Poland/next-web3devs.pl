import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import React, { PropsWithChildren } from 'react';

export const WagmiProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { provider, webSocketProvider } = configureChains([mainnet], [publicProvider()]);

  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
  });

  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};
