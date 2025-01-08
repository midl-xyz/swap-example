import { midlRegtest } from '@midl-xyz/midl-js-executor';
import type { Address } from 'viem';
import type { Config } from 'wagmi';

type Deployments = Record<
  Config['chains'][number]['id'],
  {
    UniswapV2Router02: {
      address: Address;
    };
    UniswapV2Factory: {
      address: Address;
    };
    UV2Library: UV2Library;
  }
>;

export const deployments: Deployments = {
  [midlRegtest.id]: {
    UniswapV2Router02: require('@midl-swap/periphery/deployments/1.0.3/midl/UniswapV2Router02.json'),
    UniswapV2Factory: require('@midl-swap/core/deployments/2.0.0/midl/UniswapV2Factory.json'),
  },
};
