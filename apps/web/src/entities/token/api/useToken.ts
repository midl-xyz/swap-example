import type { Token } from '@/entities';
import { useTokenBalance } from '@/features';
import { tokenList } from '@/global';
import { getTokenSymbol } from '@/widgets/swap-form/ui/utils';
import { useMemo } from 'react';
import type { Address } from 'viem';

export const useToken = (address: Address, chainId: number): Token => {
  const { data } = useTokenBalance(address, { chainId });

  return useMemo(() => {
    const token = tokenList.find(
      (token) => token.address === address && token.chainId === chainId,
    );

    if (!token) {
      return {
        symbol: getTokenSymbol(address) || (data.symbol ?? 'N/A'),
        name: data.name ?? 'N/A',
        address,
        chainId,
        decimals: data.decimals ?? 18,
        logoURI: '',
        isPopular: false,
      };
    }

    return token;
  }, [data, address, chainId]);
};
