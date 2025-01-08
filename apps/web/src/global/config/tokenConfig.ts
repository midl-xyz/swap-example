import { wagmiConfig } from '@/global';
import { midlRegtest } from '@midl-xyz/midl-js-executor';
import { Address } from 'viem';
import { GetChainIdReturnType } from 'wagmi/actions';

type ChainId = GetChainIdReturnType<typeof wagmiConfig>;

export const WETHByChain: Record<ChainId, Address> = {
  [midlRegtest.id]: '0x76818770D192A506F90e79D5cB844E708be0D7A0',
};
