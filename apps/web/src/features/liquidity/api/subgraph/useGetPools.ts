import { graphqlClient } from '@/features/liquidity';
import { graphql } from '@/features/liquidity/api/gql';
import {
  PairOrderByInput,
  type PairsQuery,
} from '@/features/liquidity/api/gql/graphql';
import { useQuery } from '@tanstack/react-query';

const GetPools = graphql(`
  query Pairs(
    $where: PairWhereInput
    $orderBy: [PairOrderByInput!]
    $offset: Int
    $limit: Int
  ) {
    pairs(where: $where, orderBy: $orderBy, offset: $offset, limit: $limit) {
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

export const useGetPools = () => {
  return useQuery<PairsQuery>({
    queryKey: ['GetPools'],
    refetchOnWindowFocus: false,
    queryFn: () => {
      // Sort by liq
      return graphqlClient.request(GetPools, {
        orderBy: PairOrderByInput.LiquidityUsdDesc,
      });
    },
  });
};
