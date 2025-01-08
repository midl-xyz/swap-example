import { graphqlClient } from '@/features/liquidity';
import { graphql } from '@/features/liquidity/api/gql';
import type { PairByIdQuery } from '@/features/liquidity/api/gql/graphql';
import { useQuery } from '@tanstack/react-query';

const GetPair = graphql(`
  query PairById($pairByIdId: String!) {
    pairById(id: $pairByIdId) {
      id
      token0 {
        id
        symbol
        name
        decimals
        priceUSD
        priceETH
        totalSupply
        circulationSupply
        marketCapUSD
        tradeVolume24h
        tradeVolumeUSD24h
        tradeVolumeETH24h
        txCount24h
        totalLiquidityAllPairs
        totalLiquidityAllPairsUSD
        holders
        lastUpdatedAt
      }
      token1 {
        id
        symbol
        name
        decimals
        priceUSD
        priceETH
        totalSupply
        circulationSupply
        marketCapUSD
        tradeVolume24h
        tradeVolumeUSD24h
        tradeVolumeETH24h
        txCount24h
        totalLiquidityAllPairs
        totalLiquidityAllPairsUSD
        holders
        lastUpdatedAt
      }
      reserve0
      reserve1
      liquidityUSD
      liquidity24hDelta
      lpTotalSupply
      lpTotalLocked
      token0Price
      token1Price
      txCount24h
      tradeVolume24h
      tradeVolumeUSD24h
      tradeVolumeETH24h
      tradeVolume24hDelta
      fees24h
      feesUSD24h
      feesETH24h
      fees24hDelta
      createdAtTimestamp
      createdAtBlockNumber
      liquidityProviderCount
      lastUpdatedAt
    }
  }
`);

export const useGetPair = (id: string) => {
  return useQuery<PairByIdQuery>({
    queryKey: ['GetPair', id],
    queryFn: () => {
      return graphqlClient.request(GetPair, {
        pairByIdId: id,
      });
    },
  });
};
