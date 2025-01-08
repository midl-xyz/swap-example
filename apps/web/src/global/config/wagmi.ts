'use client';

import { midlRegtest } from '@midl-xyz/midl-js-executor';
import { Chain } from 'viem';
import { createConfig, createStorage, http } from 'wagmi';

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig;
  }
}
export const wagmiConfig = createConfig({
  chains: [
    {
      ...midlRegtest,

      rpcUrls: {
        default: {
          http: [midlRegtest.rpcUrls.default.http[0]],
        },
      },
      // contracts: {
      //   multicall3: {
      //     address: '0x98e1171a1EeCbCC56a6DAC6a1e8D828dD407113c',
      //   },
      // },
    } as Chain,
  ],
  batch: {
    multicall: true,
  },
  transports: {
    [midlRegtest.id]: http(midlRegtest.rpcUrls.default.http[0]),
  },
  storage: createStorage({
    storage: typeof localStorage === 'undefined' ? undefined : localStorage,
    key: 'midl-swap-v0.0.1',
  }),
  ssr: false,
});

export type ChainId = (typeof wagmiConfig)['chains'][number]['id'];
