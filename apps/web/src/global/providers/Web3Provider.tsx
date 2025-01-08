'use client';

import { LastUsedTokensProvider } from '@/features';
import { midlConfig, queryClient, wagmiConfig } from '@/global';
import { WagmiMidlProvider } from '@midl-xyz/midl-js-executor';
import { MidlProvider } from '@midl-xyz/midl-js-react';
import { QueryClientProvider } from '@tanstack/react-query';
import { cookieToInitialState, WagmiProvider } from 'wagmi';

export const Web3Provider = ({
  children,
  cookie,
}: Readonly<{ children: React.ReactNode; cookie: string }>) => {
  return (
    <WagmiProvider
      config={wagmiConfig}
      initialState={cookieToInitialState(wagmiConfig, cookie)}
    >
      <MidlProvider config={midlConfig}>
        <QueryClientProvider client={queryClient}>
          <WagmiMidlProvider />

          <LastUsedTokensProvider>{children}</LastUsedTokensProvider>
        </QueryClientProvider>
      </MidlProvider>
    </WagmiProvider>
  );
};
