import type { Address } from 'viem';

export type Token = {
  symbol: string;
  name: string;
  address: Address;
  chainId: number;
  decimals: number;
  logoURI: string;
  isPopular?: boolean;
};
