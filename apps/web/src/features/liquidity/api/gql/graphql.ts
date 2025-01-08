/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** Big number decimal */
  BigDecimal: { input: any; output: any };
  /** Big number integer */
  BigInt: { input: any; output: any };
};

export type CurrentLiquidityPosition = {
  __typename?: 'CurrentLiquidityPosition';
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  liquidityTokenBalance: Scalars['BigDecimal']['output'];
  pair: Pair;
  user: User;
};

export type CurrentLiquidityPositionEdge = {
  __typename?: 'CurrentLiquidityPositionEdge';
  cursor: Scalars['String']['output'];
  node: CurrentLiquidityPosition;
};

export enum CurrentLiquidityPositionOrderByInput {
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  LiquidityTokenBalanceAsc = 'liquidityTokenBalance_ASC',
  LiquidityTokenBalanceAscNullsFirst = 'liquidityTokenBalance_ASC_NULLS_FIRST',
  LiquidityTokenBalanceAscNullsLast = 'liquidityTokenBalance_ASC_NULLS_LAST',
  LiquidityTokenBalanceDesc = 'liquidityTokenBalance_DESC',
  LiquidityTokenBalanceDescNullsFirst = 'liquidityTokenBalance_DESC_NULLS_FIRST',
  LiquidityTokenBalanceDescNullsLast = 'liquidityTokenBalance_DESC_NULLS_LAST',
  PairCreatedAtBlockNumberAsc = 'pair_createdAtBlockNumber_ASC',
  PairCreatedAtBlockNumberAscNullsFirst = 'pair_createdAtBlockNumber_ASC_NULLS_FIRST',
  PairCreatedAtBlockNumberAscNullsLast = 'pair_createdAtBlockNumber_ASC_NULLS_LAST',
  PairCreatedAtBlockNumberDesc = 'pair_createdAtBlockNumber_DESC',
  PairCreatedAtBlockNumberDescNullsFirst = 'pair_createdAtBlockNumber_DESC_NULLS_FIRST',
  PairCreatedAtBlockNumberDescNullsLast = 'pair_createdAtBlockNumber_DESC_NULLS_LAST',
  PairCreatedAtTimestampAsc = 'pair_createdAtTimestamp_ASC',
  PairCreatedAtTimestampAscNullsFirst = 'pair_createdAtTimestamp_ASC_NULLS_FIRST',
  PairCreatedAtTimestampAscNullsLast = 'pair_createdAtTimestamp_ASC_NULLS_LAST',
  PairCreatedAtTimestampDesc = 'pair_createdAtTimestamp_DESC',
  PairCreatedAtTimestampDescNullsFirst = 'pair_createdAtTimestamp_DESC_NULLS_FIRST',
  PairCreatedAtTimestampDescNullsLast = 'pair_createdAtTimestamp_DESC_NULLS_LAST',
  PairFees24hDeltaAsc = 'pair_fees24hDelta_ASC',
  PairFees24hDeltaAscNullsFirst = 'pair_fees24hDelta_ASC_NULLS_FIRST',
  PairFees24hDeltaAscNullsLast = 'pair_fees24hDelta_ASC_NULLS_LAST',
  PairFees24hDeltaDesc = 'pair_fees24hDelta_DESC',
  PairFees24hDeltaDescNullsFirst = 'pair_fees24hDelta_DESC_NULLS_FIRST',
  PairFees24hDeltaDescNullsLast = 'pair_fees24hDelta_DESC_NULLS_LAST',
  PairFees24hAsc = 'pair_fees24h_ASC',
  PairFees24hAscNullsFirst = 'pair_fees24h_ASC_NULLS_FIRST',
  PairFees24hAscNullsLast = 'pair_fees24h_ASC_NULLS_LAST',
  PairFees24hDesc = 'pair_fees24h_DESC',
  PairFees24hDescNullsFirst = 'pair_fees24h_DESC_NULLS_FIRST',
  PairFees24hDescNullsLast = 'pair_fees24h_DESC_NULLS_LAST',
  PairFeesEth24hAsc = 'pair_feesETH24h_ASC',
  PairFeesEth24hAscNullsFirst = 'pair_feesETH24h_ASC_NULLS_FIRST',
  PairFeesEth24hAscNullsLast = 'pair_feesETH24h_ASC_NULLS_LAST',
  PairFeesEth24hDesc = 'pair_feesETH24h_DESC',
  PairFeesEth24hDescNullsFirst = 'pair_feesETH24h_DESC_NULLS_FIRST',
  PairFeesEth24hDescNullsLast = 'pair_feesETH24h_DESC_NULLS_LAST',
  PairFeesUsd24hAsc = 'pair_feesUSD24h_ASC',
  PairFeesUsd24hAscNullsFirst = 'pair_feesUSD24h_ASC_NULLS_FIRST',
  PairFeesUsd24hAscNullsLast = 'pair_feesUSD24h_ASC_NULLS_LAST',
  PairFeesUsd24hDesc = 'pair_feesUSD24h_DESC',
  PairFeesUsd24hDescNullsFirst = 'pair_feesUSD24h_DESC_NULLS_FIRST',
  PairFeesUsd24hDescNullsLast = 'pair_feesUSD24h_DESC_NULLS_LAST',
  PairIdAsc = 'pair_id_ASC',
  PairIdAscNullsFirst = 'pair_id_ASC_NULLS_FIRST',
  PairIdAscNullsLast = 'pair_id_ASC_NULLS_LAST',
  PairIdDesc = 'pair_id_DESC',
  PairIdDescNullsFirst = 'pair_id_DESC_NULLS_FIRST',
  PairIdDescNullsLast = 'pair_id_DESC_NULLS_LAST',
  PairLastUpdatedAtBlockTimestampAsc = 'pair_lastUpdatedAtBlockTimestamp_ASC',
  PairLastUpdatedAtBlockTimestampAscNullsFirst = 'pair_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  PairLastUpdatedAtBlockTimestampAscNullsLast = 'pair_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  PairLastUpdatedAtBlockTimestampDesc = 'pair_lastUpdatedAtBlockTimestamp_DESC',
  PairLastUpdatedAtBlockTimestampDescNullsFirst = 'pair_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  PairLastUpdatedAtBlockTimestampDescNullsLast = 'pair_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  PairLastUpdatedAtAsc = 'pair_lastUpdatedAt_ASC',
  PairLastUpdatedAtAscNullsFirst = 'pair_lastUpdatedAt_ASC_NULLS_FIRST',
  PairLastUpdatedAtAscNullsLast = 'pair_lastUpdatedAt_ASC_NULLS_LAST',
  PairLastUpdatedAtDesc = 'pair_lastUpdatedAt_DESC',
  PairLastUpdatedAtDescNullsFirst = 'pair_lastUpdatedAt_DESC_NULLS_FIRST',
  PairLastUpdatedAtDescNullsLast = 'pair_lastUpdatedAt_DESC_NULLS_LAST',
  PairLiquidity24hDeltaAsc = 'pair_liquidity24hDelta_ASC',
  PairLiquidity24hDeltaAscNullsFirst = 'pair_liquidity24hDelta_ASC_NULLS_FIRST',
  PairLiquidity24hDeltaAscNullsLast = 'pair_liquidity24hDelta_ASC_NULLS_LAST',
  PairLiquidity24hDeltaDesc = 'pair_liquidity24hDelta_DESC',
  PairLiquidity24hDeltaDescNullsFirst = 'pair_liquidity24hDelta_DESC_NULLS_FIRST',
  PairLiquidity24hDeltaDescNullsLast = 'pair_liquidity24hDelta_DESC_NULLS_LAST',
  PairLiquidityProviderCountAsc = 'pair_liquidityProviderCount_ASC',
  PairLiquidityProviderCountAscNullsFirst = 'pair_liquidityProviderCount_ASC_NULLS_FIRST',
  PairLiquidityProviderCountAscNullsLast = 'pair_liquidityProviderCount_ASC_NULLS_LAST',
  PairLiquidityProviderCountDesc = 'pair_liquidityProviderCount_DESC',
  PairLiquidityProviderCountDescNullsFirst = 'pair_liquidityProviderCount_DESC_NULLS_FIRST',
  PairLiquidityProviderCountDescNullsLast = 'pair_liquidityProviderCount_DESC_NULLS_LAST',
  PairLiquidityUsdAsc = 'pair_liquidityUSD_ASC',
  PairLiquidityUsdAscNullsFirst = 'pair_liquidityUSD_ASC_NULLS_FIRST',
  PairLiquidityUsdAscNullsLast = 'pair_liquidityUSD_ASC_NULLS_LAST',
  PairLiquidityUsdDesc = 'pair_liquidityUSD_DESC',
  PairLiquidityUsdDescNullsFirst = 'pair_liquidityUSD_DESC_NULLS_FIRST',
  PairLiquidityUsdDescNullsLast = 'pair_liquidityUSD_DESC_NULLS_LAST',
  PairLpDecimalsAsc = 'pair_lpDecimals_ASC',
  PairLpDecimalsAscNullsFirst = 'pair_lpDecimals_ASC_NULLS_FIRST',
  PairLpDecimalsAscNullsLast = 'pair_lpDecimals_ASC_NULLS_LAST',
  PairLpDecimalsDesc = 'pair_lpDecimals_DESC',
  PairLpDecimalsDescNullsFirst = 'pair_lpDecimals_DESC_NULLS_FIRST',
  PairLpDecimalsDescNullsLast = 'pair_lpDecimals_DESC_NULLS_LAST',
  PairLpTotalLockedAsc = 'pair_lpTotalLocked_ASC',
  PairLpTotalLockedAscNullsFirst = 'pair_lpTotalLocked_ASC_NULLS_FIRST',
  PairLpTotalLockedAscNullsLast = 'pair_lpTotalLocked_ASC_NULLS_LAST',
  PairLpTotalLockedDesc = 'pair_lpTotalLocked_DESC',
  PairLpTotalLockedDescNullsFirst = 'pair_lpTotalLocked_DESC_NULLS_FIRST',
  PairLpTotalLockedDescNullsLast = 'pair_lpTotalLocked_DESC_NULLS_LAST',
  PairLpTotalSupplyAsc = 'pair_lpTotalSupply_ASC',
  PairLpTotalSupplyAscNullsFirst = 'pair_lpTotalSupply_ASC_NULLS_FIRST',
  PairLpTotalSupplyAscNullsLast = 'pair_lpTotalSupply_ASC_NULLS_LAST',
  PairLpTotalSupplyDesc = 'pair_lpTotalSupply_DESC',
  PairLpTotalSupplyDescNullsFirst = 'pair_lpTotalSupply_DESC_NULLS_FIRST',
  PairLpTotalSupplyDescNullsLast = 'pair_lpTotalSupply_DESC_NULLS_LAST',
  PairReserve0Asc = 'pair_reserve0_ASC',
  PairReserve0AscNullsFirst = 'pair_reserve0_ASC_NULLS_FIRST',
  PairReserve0AscNullsLast = 'pair_reserve0_ASC_NULLS_LAST',
  PairReserve0Desc = 'pair_reserve0_DESC',
  PairReserve0DescNullsFirst = 'pair_reserve0_DESC_NULLS_FIRST',
  PairReserve0DescNullsLast = 'pair_reserve0_DESC_NULLS_LAST',
  PairReserve1Asc = 'pair_reserve1_ASC',
  PairReserve1AscNullsFirst = 'pair_reserve1_ASC_NULLS_FIRST',
  PairReserve1AscNullsLast = 'pair_reserve1_ASC_NULLS_LAST',
  PairReserve1Desc = 'pair_reserve1_DESC',
  PairReserve1DescNullsFirst = 'pair_reserve1_DESC_NULLS_FIRST',
  PairReserve1DescNullsLast = 'pair_reserve1_DESC_NULLS_LAST',
  PairToken0IdAsc = 'pair_token0Id_ASC',
  PairToken0IdAscNullsFirst = 'pair_token0Id_ASC_NULLS_FIRST',
  PairToken0IdAscNullsLast = 'pair_token0Id_ASC_NULLS_LAST',
  PairToken0IdDesc = 'pair_token0Id_DESC',
  PairToken0IdDescNullsFirst = 'pair_token0Id_DESC_NULLS_FIRST',
  PairToken0IdDescNullsLast = 'pair_token0Id_DESC_NULLS_LAST',
  PairToken0PriceAsc = 'pair_token0Price_ASC',
  PairToken0PriceAscNullsFirst = 'pair_token0Price_ASC_NULLS_FIRST',
  PairToken0PriceAscNullsLast = 'pair_token0Price_ASC_NULLS_LAST',
  PairToken0PriceDesc = 'pair_token0Price_DESC',
  PairToken0PriceDescNullsFirst = 'pair_token0Price_DESC_NULLS_FIRST',
  PairToken0PriceDescNullsLast = 'pair_token0Price_DESC_NULLS_LAST',
  PairToken1IdAsc = 'pair_token1Id_ASC',
  PairToken1IdAscNullsFirst = 'pair_token1Id_ASC_NULLS_FIRST',
  PairToken1IdAscNullsLast = 'pair_token1Id_ASC_NULLS_LAST',
  PairToken1IdDesc = 'pair_token1Id_DESC',
  PairToken1IdDescNullsFirst = 'pair_token1Id_DESC_NULLS_FIRST',
  PairToken1IdDescNullsLast = 'pair_token1Id_DESC_NULLS_LAST',
  PairToken1PriceAsc = 'pair_token1Price_ASC',
  PairToken1PriceAscNullsFirst = 'pair_token1Price_ASC_NULLS_FIRST',
  PairToken1PriceAscNullsLast = 'pair_token1Price_ASC_NULLS_LAST',
  PairToken1PriceDesc = 'pair_token1Price_DESC',
  PairToken1PriceDescNullsFirst = 'pair_token1Price_DESC_NULLS_FIRST',
  PairToken1PriceDescNullsLast = 'pair_token1Price_DESC_NULLS_LAST',
  PairTradeVolume24hDeltaAsc = 'pair_tradeVolume24hDelta_ASC',
  PairTradeVolume24hDeltaAscNullsFirst = 'pair_tradeVolume24hDelta_ASC_NULLS_FIRST',
  PairTradeVolume24hDeltaAscNullsLast = 'pair_tradeVolume24hDelta_ASC_NULLS_LAST',
  PairTradeVolume24hDeltaDesc = 'pair_tradeVolume24hDelta_DESC',
  PairTradeVolume24hDeltaDescNullsFirst = 'pair_tradeVolume24hDelta_DESC_NULLS_FIRST',
  PairTradeVolume24hDeltaDescNullsLast = 'pair_tradeVolume24hDelta_DESC_NULLS_LAST',
  PairTradeVolume24hAsc = 'pair_tradeVolume24h_ASC',
  PairTradeVolume24hAscNullsFirst = 'pair_tradeVolume24h_ASC_NULLS_FIRST',
  PairTradeVolume24hAscNullsLast = 'pair_tradeVolume24h_ASC_NULLS_LAST',
  PairTradeVolume24hDesc = 'pair_tradeVolume24h_DESC',
  PairTradeVolume24hDescNullsFirst = 'pair_tradeVolume24h_DESC_NULLS_FIRST',
  PairTradeVolume24hDescNullsLast = 'pair_tradeVolume24h_DESC_NULLS_LAST',
  PairTradeVolumeEth24hAsc = 'pair_tradeVolumeETH24h_ASC',
  PairTradeVolumeEth24hAscNullsFirst = 'pair_tradeVolumeETH24h_ASC_NULLS_FIRST',
  PairTradeVolumeEth24hAscNullsLast = 'pair_tradeVolumeETH24h_ASC_NULLS_LAST',
  PairTradeVolumeEth24hDesc = 'pair_tradeVolumeETH24h_DESC',
  PairTradeVolumeEth24hDescNullsFirst = 'pair_tradeVolumeETH24h_DESC_NULLS_FIRST',
  PairTradeVolumeEth24hDescNullsLast = 'pair_tradeVolumeETH24h_DESC_NULLS_LAST',
  PairTradeVolumeUsd24hAsc = 'pair_tradeVolumeUSD24h_ASC',
  PairTradeVolumeUsd24hAscNullsFirst = 'pair_tradeVolumeUSD24h_ASC_NULLS_FIRST',
  PairTradeVolumeUsd24hAscNullsLast = 'pair_tradeVolumeUSD24h_ASC_NULLS_LAST',
  PairTradeVolumeUsd24hDesc = 'pair_tradeVolumeUSD24h_DESC',
  PairTradeVolumeUsd24hDescNullsFirst = 'pair_tradeVolumeUSD24h_DESC_NULLS_FIRST',
  PairTradeVolumeUsd24hDescNullsLast = 'pair_tradeVolumeUSD24h_DESC_NULLS_LAST',
  PairTxCount24hAsc = 'pair_txCount24h_ASC',
  PairTxCount24hAscNullsFirst = 'pair_txCount24h_ASC_NULLS_FIRST',
  PairTxCount24hAscNullsLast = 'pair_txCount24h_ASC_NULLS_LAST',
  PairTxCount24hDesc = 'pair_txCount24h_DESC',
  PairTxCount24hDescNullsFirst = 'pair_txCount24h_DESC_NULLS_FIRST',
  PairTxCount24hDescNullsLast = 'pair_txCount24h_DESC_NULLS_LAST',
  UserIdAsc = 'user_id_ASC',
  UserIdAscNullsFirst = 'user_id_ASC_NULLS_FIRST',
  UserIdAscNullsLast = 'user_id_ASC_NULLS_LAST',
  UserIdDesc = 'user_id_DESC',
  UserIdDescNullsFirst = 'user_id_DESC_NULLS_FIRST',
  UserIdDescNullsLast = 'user_id_DESC_NULLS_LAST',
  UserLastUpdatedAtBlockTimestampAsc = 'user_lastUpdatedAtBlockTimestamp_ASC',
  UserLastUpdatedAtBlockTimestampAscNullsFirst = 'user_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  UserLastUpdatedAtBlockTimestampAscNullsLast = 'user_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  UserLastUpdatedAtBlockTimestampDesc = 'user_lastUpdatedAtBlockTimestamp_DESC',
  UserLastUpdatedAtBlockTimestampDescNullsFirst = 'user_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  UserLastUpdatedAtBlockTimestampDescNullsLast = 'user_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  UserLastUpdatedAtAsc = 'user_lastUpdatedAt_ASC',
  UserLastUpdatedAtAscNullsFirst = 'user_lastUpdatedAt_ASC_NULLS_FIRST',
  UserLastUpdatedAtAscNullsLast = 'user_lastUpdatedAt_ASC_NULLS_LAST',
  UserLastUpdatedAtDesc = 'user_lastUpdatedAt_DESC',
  UserLastUpdatedAtDescNullsFirst = 'user_lastUpdatedAt_DESC_NULLS_FIRST',
  UserLastUpdatedAtDescNullsLast = 'user_lastUpdatedAt_DESC_NULLS_LAST',
  UserSwapsAmountAsc = 'user_swapsAmount_ASC',
  UserSwapsAmountAscNullsFirst = 'user_swapsAmount_ASC_NULLS_FIRST',
  UserSwapsAmountAscNullsLast = 'user_swapsAmount_ASC_NULLS_LAST',
  UserSwapsAmountDesc = 'user_swapsAmount_DESC',
  UserSwapsAmountDescNullsFirst = 'user_swapsAmount_DESC_NULLS_FIRST',
  UserSwapsAmountDescNullsLast = 'user_swapsAmount_DESC_NULLS_LAST',
  UserUsdSwappedAsc = 'user_usdSwapped_ASC',
  UserUsdSwappedAscNullsFirst = 'user_usdSwapped_ASC_NULLS_FIRST',
  UserUsdSwappedAscNullsLast = 'user_usdSwapped_ASC_NULLS_LAST',
  UserUsdSwappedDesc = 'user_usdSwapped_DESC',
  UserUsdSwappedDescNullsFirst = 'user_usdSwapped_DESC_NULLS_FIRST',
  UserUsdSwappedDescNullsLast = 'user_usdSwapped_DESC_NULLS_LAST',
}

export type CurrentLiquidityPositionWhereInput = {
  AND?: InputMaybe<Array<CurrentLiquidityPositionWhereInput>>;
  OR?: InputMaybe<Array<CurrentLiquidityPositionWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityTokenBalance_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityTokenBalance_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  pair?: InputMaybe<PairWhereInput>;
  pair_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserWhereInput>;
  user_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CurrentLiquidityPositionsConnection = {
  __typename?: 'CurrentLiquidityPositionsConnection';
  edges: Array<CurrentLiquidityPositionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Holder = {
  __typename?: 'Holder';
  balance: Scalars['BigDecimal']['output'];
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  tokenId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type HolderEdge = {
  __typename?: 'HolderEdge';
  cursor: Scalars['String']['output'];
  node: Holder;
};

export enum HolderOrderByInput {
  BalanceAsc = 'balance_ASC',
  BalanceAscNullsFirst = 'balance_ASC_NULLS_FIRST',
  BalanceAscNullsLast = 'balance_ASC_NULLS_LAST',
  BalanceDesc = 'balance_DESC',
  BalanceDescNullsFirst = 'balance_DESC_NULLS_FIRST',
  BalanceDescNullsLast = 'balance_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  TokenIdAsc = 'tokenId_ASC',
  TokenIdAscNullsFirst = 'tokenId_ASC_NULLS_FIRST',
  TokenIdAscNullsLast = 'tokenId_ASC_NULLS_LAST',
  TokenIdDesc = 'tokenId_DESC',
  TokenIdDescNullsFirst = 'tokenId_DESC_NULLS_FIRST',
  TokenIdDescNullsLast = 'tokenId_DESC_NULLS_LAST',
  UserIdAsc = 'userId_ASC',
  UserIdAscNullsFirst = 'userId_ASC_NULLS_FIRST',
  UserIdAscNullsLast = 'userId_ASC_NULLS_LAST',
  UserIdDesc = 'userId_DESC',
  UserIdDescNullsFirst = 'userId_DESC_NULLS_FIRST',
  UserIdDescNullsLast = 'userId_DESC_NULLS_LAST',
}

export type HolderWhereInput = {
  AND?: InputMaybe<Array<HolderWhereInput>>;
  OR?: InputMaybe<Array<HolderWhereInput>>;
  balance_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  balance_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  balance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenId_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenId_eq?: InputMaybe<Scalars['String']['input']>;
  tokenId_gt?: InputMaybe<Scalars['String']['input']>;
  tokenId_gte?: InputMaybe<Scalars['String']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tokenId_lt?: InputMaybe<Scalars['String']['input']>;
  tokenId_lte?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_eq?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  tokenId_startsWith?: InputMaybe<Scalars['String']['input']>;
  userId_contains?: InputMaybe<Scalars['String']['input']>;
  userId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  userId_endsWith?: InputMaybe<Scalars['String']['input']>;
  userId_eq?: InputMaybe<Scalars['String']['input']>;
  userId_gt?: InputMaybe<Scalars['String']['input']>;
  userId_gte?: InputMaybe<Scalars['String']['input']>;
  userId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  userId_lt?: InputMaybe<Scalars['String']['input']>;
  userId_lte?: InputMaybe<Scalars['String']['input']>;
  userId_not_contains?: InputMaybe<Scalars['String']['input']>;
  userId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  userId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  userId_not_eq?: InputMaybe<Scalars['String']['input']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  userId_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type HoldersConnection = {
  __typename?: 'HoldersConnection';
  edges: Array<HolderEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LiquidityPositionHistoriesConnection = {
  __typename?: 'LiquidityPositionHistoriesConnection';
  edges: Array<LiquidityPositionHistoryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LiquidityPositionHistory = {
  __typename?: 'LiquidityPositionHistory';
  block: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  liquidityPosition: CurrentLiquidityPosition;
  liquidityTokenBalance: Scalars['BigDecimal']['output'];
  liquidityTokenTotalSupply: Scalars['BigDecimal']['output'];
  liquidityUSD?: Maybe<Scalars['BigDecimal']['output']>;
  pair: Pair;
  reserve0: Scalars['BigDecimal']['output'];
  reserve1: Scalars['BigDecimal']['output'];
  timestamp: Scalars['BigInt']['output'];
  token0PriceUSD?: Maybe<Scalars['BigDecimal']['output']>;
  token1PriceUSD?: Maybe<Scalars['BigDecimal']['output']>;
  user: User;
};

export type LiquidityPositionHistoryEdge = {
  __typename?: 'LiquidityPositionHistoryEdge';
  cursor: Scalars['String']['output'];
  node: LiquidityPositionHistory;
};

export enum LiquidityPositionHistoryOrderByInput {
  BlockAsc = 'block_ASC',
  BlockAscNullsFirst = 'block_ASC_NULLS_FIRST',
  BlockAscNullsLast = 'block_ASC_NULLS_LAST',
  BlockDesc = 'block_DESC',
  BlockDescNullsFirst = 'block_DESC_NULLS_FIRST',
  BlockDescNullsLast = 'block_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  LiquidityPositionIdAsc = 'liquidityPosition_id_ASC',
  LiquidityPositionIdAscNullsFirst = 'liquidityPosition_id_ASC_NULLS_FIRST',
  LiquidityPositionIdAscNullsLast = 'liquidityPosition_id_ASC_NULLS_LAST',
  LiquidityPositionIdDesc = 'liquidityPosition_id_DESC',
  LiquidityPositionIdDescNullsFirst = 'liquidityPosition_id_DESC_NULLS_FIRST',
  LiquidityPositionIdDescNullsLast = 'liquidityPosition_id_DESC_NULLS_LAST',
  LiquidityPositionLastUpdatedAtBlockTimestampAsc = 'liquidityPosition_lastUpdatedAtBlockTimestamp_ASC',
  LiquidityPositionLastUpdatedAtBlockTimestampAscNullsFirst = 'liquidityPosition_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LiquidityPositionLastUpdatedAtBlockTimestampAscNullsLast = 'liquidityPosition_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LiquidityPositionLastUpdatedAtBlockTimestampDesc = 'liquidityPosition_lastUpdatedAtBlockTimestamp_DESC',
  LiquidityPositionLastUpdatedAtBlockTimestampDescNullsFirst = 'liquidityPosition_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LiquidityPositionLastUpdatedAtBlockTimestampDescNullsLast = 'liquidityPosition_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LiquidityPositionLastUpdatedAtAsc = 'liquidityPosition_lastUpdatedAt_ASC',
  LiquidityPositionLastUpdatedAtAscNullsFirst = 'liquidityPosition_lastUpdatedAt_ASC_NULLS_FIRST',
  LiquidityPositionLastUpdatedAtAscNullsLast = 'liquidityPosition_lastUpdatedAt_ASC_NULLS_LAST',
  LiquidityPositionLastUpdatedAtDesc = 'liquidityPosition_lastUpdatedAt_DESC',
  LiquidityPositionLastUpdatedAtDescNullsFirst = 'liquidityPosition_lastUpdatedAt_DESC_NULLS_FIRST',
  LiquidityPositionLastUpdatedAtDescNullsLast = 'liquidityPosition_lastUpdatedAt_DESC_NULLS_LAST',
  LiquidityPositionLiquidityTokenBalanceAsc = 'liquidityPosition_liquidityTokenBalance_ASC',
  LiquidityPositionLiquidityTokenBalanceAscNullsFirst = 'liquidityPosition_liquidityTokenBalance_ASC_NULLS_FIRST',
  LiquidityPositionLiquidityTokenBalanceAscNullsLast = 'liquidityPosition_liquidityTokenBalance_ASC_NULLS_LAST',
  LiquidityPositionLiquidityTokenBalanceDesc = 'liquidityPosition_liquidityTokenBalance_DESC',
  LiquidityPositionLiquidityTokenBalanceDescNullsFirst = 'liquidityPosition_liquidityTokenBalance_DESC_NULLS_FIRST',
  LiquidityPositionLiquidityTokenBalanceDescNullsLast = 'liquidityPosition_liquidityTokenBalance_DESC_NULLS_LAST',
  LiquidityTokenBalanceAsc = 'liquidityTokenBalance_ASC',
  LiquidityTokenBalanceAscNullsFirst = 'liquidityTokenBalance_ASC_NULLS_FIRST',
  LiquidityTokenBalanceAscNullsLast = 'liquidityTokenBalance_ASC_NULLS_LAST',
  LiquidityTokenBalanceDesc = 'liquidityTokenBalance_DESC',
  LiquidityTokenBalanceDescNullsFirst = 'liquidityTokenBalance_DESC_NULLS_FIRST',
  LiquidityTokenBalanceDescNullsLast = 'liquidityTokenBalance_DESC_NULLS_LAST',
  LiquidityTokenTotalSupplyAsc = 'liquidityTokenTotalSupply_ASC',
  LiquidityTokenTotalSupplyAscNullsFirst = 'liquidityTokenTotalSupply_ASC_NULLS_FIRST',
  LiquidityTokenTotalSupplyAscNullsLast = 'liquidityTokenTotalSupply_ASC_NULLS_LAST',
  LiquidityTokenTotalSupplyDesc = 'liquidityTokenTotalSupply_DESC',
  LiquidityTokenTotalSupplyDescNullsFirst = 'liquidityTokenTotalSupply_DESC_NULLS_FIRST',
  LiquidityTokenTotalSupplyDescNullsLast = 'liquidityTokenTotalSupply_DESC_NULLS_LAST',
  LiquidityUsdAsc = 'liquidityUSD_ASC',
  LiquidityUsdAscNullsFirst = 'liquidityUSD_ASC_NULLS_FIRST',
  LiquidityUsdAscNullsLast = 'liquidityUSD_ASC_NULLS_LAST',
  LiquidityUsdDesc = 'liquidityUSD_DESC',
  LiquidityUsdDescNullsFirst = 'liquidityUSD_DESC_NULLS_FIRST',
  LiquidityUsdDescNullsLast = 'liquidityUSD_DESC_NULLS_LAST',
  PairCreatedAtBlockNumberAsc = 'pair_createdAtBlockNumber_ASC',
  PairCreatedAtBlockNumberAscNullsFirst = 'pair_createdAtBlockNumber_ASC_NULLS_FIRST',
  PairCreatedAtBlockNumberAscNullsLast = 'pair_createdAtBlockNumber_ASC_NULLS_LAST',
  PairCreatedAtBlockNumberDesc = 'pair_createdAtBlockNumber_DESC',
  PairCreatedAtBlockNumberDescNullsFirst = 'pair_createdAtBlockNumber_DESC_NULLS_FIRST',
  PairCreatedAtBlockNumberDescNullsLast = 'pair_createdAtBlockNumber_DESC_NULLS_LAST',
  PairCreatedAtTimestampAsc = 'pair_createdAtTimestamp_ASC',
  PairCreatedAtTimestampAscNullsFirst = 'pair_createdAtTimestamp_ASC_NULLS_FIRST',
  PairCreatedAtTimestampAscNullsLast = 'pair_createdAtTimestamp_ASC_NULLS_LAST',
  PairCreatedAtTimestampDesc = 'pair_createdAtTimestamp_DESC',
  PairCreatedAtTimestampDescNullsFirst = 'pair_createdAtTimestamp_DESC_NULLS_FIRST',
  PairCreatedAtTimestampDescNullsLast = 'pair_createdAtTimestamp_DESC_NULLS_LAST',
  PairFees24hDeltaAsc = 'pair_fees24hDelta_ASC',
  PairFees24hDeltaAscNullsFirst = 'pair_fees24hDelta_ASC_NULLS_FIRST',
  PairFees24hDeltaAscNullsLast = 'pair_fees24hDelta_ASC_NULLS_LAST',
  PairFees24hDeltaDesc = 'pair_fees24hDelta_DESC',
  PairFees24hDeltaDescNullsFirst = 'pair_fees24hDelta_DESC_NULLS_FIRST',
  PairFees24hDeltaDescNullsLast = 'pair_fees24hDelta_DESC_NULLS_LAST',
  PairFees24hAsc = 'pair_fees24h_ASC',
  PairFees24hAscNullsFirst = 'pair_fees24h_ASC_NULLS_FIRST',
  PairFees24hAscNullsLast = 'pair_fees24h_ASC_NULLS_LAST',
  PairFees24hDesc = 'pair_fees24h_DESC',
  PairFees24hDescNullsFirst = 'pair_fees24h_DESC_NULLS_FIRST',
  PairFees24hDescNullsLast = 'pair_fees24h_DESC_NULLS_LAST',
  PairFeesEth24hAsc = 'pair_feesETH24h_ASC',
  PairFeesEth24hAscNullsFirst = 'pair_feesETH24h_ASC_NULLS_FIRST',
  PairFeesEth24hAscNullsLast = 'pair_feesETH24h_ASC_NULLS_LAST',
  PairFeesEth24hDesc = 'pair_feesETH24h_DESC',
  PairFeesEth24hDescNullsFirst = 'pair_feesETH24h_DESC_NULLS_FIRST',
  PairFeesEth24hDescNullsLast = 'pair_feesETH24h_DESC_NULLS_LAST',
  PairFeesUsd24hAsc = 'pair_feesUSD24h_ASC',
  PairFeesUsd24hAscNullsFirst = 'pair_feesUSD24h_ASC_NULLS_FIRST',
  PairFeesUsd24hAscNullsLast = 'pair_feesUSD24h_ASC_NULLS_LAST',
  PairFeesUsd24hDesc = 'pair_feesUSD24h_DESC',
  PairFeesUsd24hDescNullsFirst = 'pair_feesUSD24h_DESC_NULLS_FIRST',
  PairFeesUsd24hDescNullsLast = 'pair_feesUSD24h_DESC_NULLS_LAST',
  PairIdAsc = 'pair_id_ASC',
  PairIdAscNullsFirst = 'pair_id_ASC_NULLS_FIRST',
  PairIdAscNullsLast = 'pair_id_ASC_NULLS_LAST',
  PairIdDesc = 'pair_id_DESC',
  PairIdDescNullsFirst = 'pair_id_DESC_NULLS_FIRST',
  PairIdDescNullsLast = 'pair_id_DESC_NULLS_LAST',
  PairLastUpdatedAtBlockTimestampAsc = 'pair_lastUpdatedAtBlockTimestamp_ASC',
  PairLastUpdatedAtBlockTimestampAscNullsFirst = 'pair_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  PairLastUpdatedAtBlockTimestampAscNullsLast = 'pair_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  PairLastUpdatedAtBlockTimestampDesc = 'pair_lastUpdatedAtBlockTimestamp_DESC',
  PairLastUpdatedAtBlockTimestampDescNullsFirst = 'pair_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  PairLastUpdatedAtBlockTimestampDescNullsLast = 'pair_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  PairLastUpdatedAtAsc = 'pair_lastUpdatedAt_ASC',
  PairLastUpdatedAtAscNullsFirst = 'pair_lastUpdatedAt_ASC_NULLS_FIRST',
  PairLastUpdatedAtAscNullsLast = 'pair_lastUpdatedAt_ASC_NULLS_LAST',
  PairLastUpdatedAtDesc = 'pair_lastUpdatedAt_DESC',
  PairLastUpdatedAtDescNullsFirst = 'pair_lastUpdatedAt_DESC_NULLS_FIRST',
  PairLastUpdatedAtDescNullsLast = 'pair_lastUpdatedAt_DESC_NULLS_LAST',
  PairLiquidity24hDeltaAsc = 'pair_liquidity24hDelta_ASC',
  PairLiquidity24hDeltaAscNullsFirst = 'pair_liquidity24hDelta_ASC_NULLS_FIRST',
  PairLiquidity24hDeltaAscNullsLast = 'pair_liquidity24hDelta_ASC_NULLS_LAST',
  PairLiquidity24hDeltaDesc = 'pair_liquidity24hDelta_DESC',
  PairLiquidity24hDeltaDescNullsFirst = 'pair_liquidity24hDelta_DESC_NULLS_FIRST',
  PairLiquidity24hDeltaDescNullsLast = 'pair_liquidity24hDelta_DESC_NULLS_LAST',
  PairLiquidityProviderCountAsc = 'pair_liquidityProviderCount_ASC',
  PairLiquidityProviderCountAscNullsFirst = 'pair_liquidityProviderCount_ASC_NULLS_FIRST',
  PairLiquidityProviderCountAscNullsLast = 'pair_liquidityProviderCount_ASC_NULLS_LAST',
  PairLiquidityProviderCountDesc = 'pair_liquidityProviderCount_DESC',
  PairLiquidityProviderCountDescNullsFirst = 'pair_liquidityProviderCount_DESC_NULLS_FIRST',
  PairLiquidityProviderCountDescNullsLast = 'pair_liquidityProviderCount_DESC_NULLS_LAST',
  PairLiquidityUsdAsc = 'pair_liquidityUSD_ASC',
  PairLiquidityUsdAscNullsFirst = 'pair_liquidityUSD_ASC_NULLS_FIRST',
  PairLiquidityUsdAscNullsLast = 'pair_liquidityUSD_ASC_NULLS_LAST',
  PairLiquidityUsdDesc = 'pair_liquidityUSD_DESC',
  PairLiquidityUsdDescNullsFirst = 'pair_liquidityUSD_DESC_NULLS_FIRST',
  PairLiquidityUsdDescNullsLast = 'pair_liquidityUSD_DESC_NULLS_LAST',
  PairLpDecimalsAsc = 'pair_lpDecimals_ASC',
  PairLpDecimalsAscNullsFirst = 'pair_lpDecimals_ASC_NULLS_FIRST',
  PairLpDecimalsAscNullsLast = 'pair_lpDecimals_ASC_NULLS_LAST',
  PairLpDecimalsDesc = 'pair_lpDecimals_DESC',
  PairLpDecimalsDescNullsFirst = 'pair_lpDecimals_DESC_NULLS_FIRST',
  PairLpDecimalsDescNullsLast = 'pair_lpDecimals_DESC_NULLS_LAST',
  PairLpTotalLockedAsc = 'pair_lpTotalLocked_ASC',
  PairLpTotalLockedAscNullsFirst = 'pair_lpTotalLocked_ASC_NULLS_FIRST',
  PairLpTotalLockedAscNullsLast = 'pair_lpTotalLocked_ASC_NULLS_LAST',
  PairLpTotalLockedDesc = 'pair_lpTotalLocked_DESC',
  PairLpTotalLockedDescNullsFirst = 'pair_lpTotalLocked_DESC_NULLS_FIRST',
  PairLpTotalLockedDescNullsLast = 'pair_lpTotalLocked_DESC_NULLS_LAST',
  PairLpTotalSupplyAsc = 'pair_lpTotalSupply_ASC',
  PairLpTotalSupplyAscNullsFirst = 'pair_lpTotalSupply_ASC_NULLS_FIRST',
  PairLpTotalSupplyAscNullsLast = 'pair_lpTotalSupply_ASC_NULLS_LAST',
  PairLpTotalSupplyDesc = 'pair_lpTotalSupply_DESC',
  PairLpTotalSupplyDescNullsFirst = 'pair_lpTotalSupply_DESC_NULLS_FIRST',
  PairLpTotalSupplyDescNullsLast = 'pair_lpTotalSupply_DESC_NULLS_LAST',
  PairReserve0Asc = 'pair_reserve0_ASC',
  PairReserve0AscNullsFirst = 'pair_reserve0_ASC_NULLS_FIRST',
  PairReserve0AscNullsLast = 'pair_reserve0_ASC_NULLS_LAST',
  PairReserve0Desc = 'pair_reserve0_DESC',
  PairReserve0DescNullsFirst = 'pair_reserve0_DESC_NULLS_FIRST',
  PairReserve0DescNullsLast = 'pair_reserve0_DESC_NULLS_LAST',
  PairReserve1Asc = 'pair_reserve1_ASC',
  PairReserve1AscNullsFirst = 'pair_reserve1_ASC_NULLS_FIRST',
  PairReserve1AscNullsLast = 'pair_reserve1_ASC_NULLS_LAST',
  PairReserve1Desc = 'pair_reserve1_DESC',
  PairReserve1DescNullsFirst = 'pair_reserve1_DESC_NULLS_FIRST',
  PairReserve1DescNullsLast = 'pair_reserve1_DESC_NULLS_LAST',
  PairToken0IdAsc = 'pair_token0Id_ASC',
  PairToken0IdAscNullsFirst = 'pair_token0Id_ASC_NULLS_FIRST',
  PairToken0IdAscNullsLast = 'pair_token0Id_ASC_NULLS_LAST',
  PairToken0IdDesc = 'pair_token0Id_DESC',
  PairToken0IdDescNullsFirst = 'pair_token0Id_DESC_NULLS_FIRST',
  PairToken0IdDescNullsLast = 'pair_token0Id_DESC_NULLS_LAST',
  PairToken0PriceAsc = 'pair_token0Price_ASC',
  PairToken0PriceAscNullsFirst = 'pair_token0Price_ASC_NULLS_FIRST',
  PairToken0PriceAscNullsLast = 'pair_token0Price_ASC_NULLS_LAST',
  PairToken0PriceDesc = 'pair_token0Price_DESC',
  PairToken0PriceDescNullsFirst = 'pair_token0Price_DESC_NULLS_FIRST',
  PairToken0PriceDescNullsLast = 'pair_token0Price_DESC_NULLS_LAST',
  PairToken1IdAsc = 'pair_token1Id_ASC',
  PairToken1IdAscNullsFirst = 'pair_token1Id_ASC_NULLS_FIRST',
  PairToken1IdAscNullsLast = 'pair_token1Id_ASC_NULLS_LAST',
  PairToken1IdDesc = 'pair_token1Id_DESC',
  PairToken1IdDescNullsFirst = 'pair_token1Id_DESC_NULLS_FIRST',
  PairToken1IdDescNullsLast = 'pair_token1Id_DESC_NULLS_LAST',
  PairToken1PriceAsc = 'pair_token1Price_ASC',
  PairToken1PriceAscNullsFirst = 'pair_token1Price_ASC_NULLS_FIRST',
  PairToken1PriceAscNullsLast = 'pair_token1Price_ASC_NULLS_LAST',
  PairToken1PriceDesc = 'pair_token1Price_DESC',
  PairToken1PriceDescNullsFirst = 'pair_token1Price_DESC_NULLS_FIRST',
  PairToken1PriceDescNullsLast = 'pair_token1Price_DESC_NULLS_LAST',
  PairTradeVolume24hDeltaAsc = 'pair_tradeVolume24hDelta_ASC',
  PairTradeVolume24hDeltaAscNullsFirst = 'pair_tradeVolume24hDelta_ASC_NULLS_FIRST',
  PairTradeVolume24hDeltaAscNullsLast = 'pair_tradeVolume24hDelta_ASC_NULLS_LAST',
  PairTradeVolume24hDeltaDesc = 'pair_tradeVolume24hDelta_DESC',
  PairTradeVolume24hDeltaDescNullsFirst = 'pair_tradeVolume24hDelta_DESC_NULLS_FIRST',
  PairTradeVolume24hDeltaDescNullsLast = 'pair_tradeVolume24hDelta_DESC_NULLS_LAST',
  PairTradeVolume24hAsc = 'pair_tradeVolume24h_ASC',
  PairTradeVolume24hAscNullsFirst = 'pair_tradeVolume24h_ASC_NULLS_FIRST',
  PairTradeVolume24hAscNullsLast = 'pair_tradeVolume24h_ASC_NULLS_LAST',
  PairTradeVolume24hDesc = 'pair_tradeVolume24h_DESC',
  PairTradeVolume24hDescNullsFirst = 'pair_tradeVolume24h_DESC_NULLS_FIRST',
  PairTradeVolume24hDescNullsLast = 'pair_tradeVolume24h_DESC_NULLS_LAST',
  PairTradeVolumeEth24hAsc = 'pair_tradeVolumeETH24h_ASC',
  PairTradeVolumeEth24hAscNullsFirst = 'pair_tradeVolumeETH24h_ASC_NULLS_FIRST',
  PairTradeVolumeEth24hAscNullsLast = 'pair_tradeVolumeETH24h_ASC_NULLS_LAST',
  PairTradeVolumeEth24hDesc = 'pair_tradeVolumeETH24h_DESC',
  PairTradeVolumeEth24hDescNullsFirst = 'pair_tradeVolumeETH24h_DESC_NULLS_FIRST',
  PairTradeVolumeEth24hDescNullsLast = 'pair_tradeVolumeETH24h_DESC_NULLS_LAST',
  PairTradeVolumeUsd24hAsc = 'pair_tradeVolumeUSD24h_ASC',
  PairTradeVolumeUsd24hAscNullsFirst = 'pair_tradeVolumeUSD24h_ASC_NULLS_FIRST',
  PairTradeVolumeUsd24hAscNullsLast = 'pair_tradeVolumeUSD24h_ASC_NULLS_LAST',
  PairTradeVolumeUsd24hDesc = 'pair_tradeVolumeUSD24h_DESC',
  PairTradeVolumeUsd24hDescNullsFirst = 'pair_tradeVolumeUSD24h_DESC_NULLS_FIRST',
  PairTradeVolumeUsd24hDescNullsLast = 'pair_tradeVolumeUSD24h_DESC_NULLS_LAST',
  PairTxCount24hAsc = 'pair_txCount24h_ASC',
  PairTxCount24hAscNullsFirst = 'pair_txCount24h_ASC_NULLS_FIRST',
  PairTxCount24hAscNullsLast = 'pair_txCount24h_ASC_NULLS_LAST',
  PairTxCount24hDesc = 'pair_txCount24h_DESC',
  PairTxCount24hDescNullsFirst = 'pair_txCount24h_DESC_NULLS_FIRST',
  PairTxCount24hDescNullsLast = 'pair_txCount24h_DESC_NULLS_LAST',
  Reserve0Asc = 'reserve0_ASC',
  Reserve0AscNullsFirst = 'reserve0_ASC_NULLS_FIRST',
  Reserve0AscNullsLast = 'reserve0_ASC_NULLS_LAST',
  Reserve0Desc = 'reserve0_DESC',
  Reserve0DescNullsFirst = 'reserve0_DESC_NULLS_FIRST',
  Reserve0DescNullsLast = 'reserve0_DESC_NULLS_LAST',
  Reserve1Asc = 'reserve1_ASC',
  Reserve1AscNullsFirst = 'reserve1_ASC_NULLS_FIRST',
  Reserve1AscNullsLast = 'reserve1_ASC_NULLS_LAST',
  Reserve1Desc = 'reserve1_DESC',
  Reserve1DescNullsFirst = 'reserve1_DESC_NULLS_FIRST',
  Reserve1DescNullsLast = 'reserve1_DESC_NULLS_LAST',
  TimestampAsc = 'timestamp_ASC',
  TimestampAscNullsFirst = 'timestamp_ASC_NULLS_FIRST',
  TimestampAscNullsLast = 'timestamp_ASC_NULLS_LAST',
  TimestampDesc = 'timestamp_DESC',
  TimestampDescNullsFirst = 'timestamp_DESC_NULLS_FIRST',
  TimestampDescNullsLast = 'timestamp_DESC_NULLS_LAST',
  Token0PriceUsdAsc = 'token0PriceUSD_ASC',
  Token0PriceUsdAscNullsFirst = 'token0PriceUSD_ASC_NULLS_FIRST',
  Token0PriceUsdAscNullsLast = 'token0PriceUSD_ASC_NULLS_LAST',
  Token0PriceUsdDesc = 'token0PriceUSD_DESC',
  Token0PriceUsdDescNullsFirst = 'token0PriceUSD_DESC_NULLS_FIRST',
  Token0PriceUsdDescNullsLast = 'token0PriceUSD_DESC_NULLS_LAST',
  Token1PriceUsdAsc = 'token1PriceUSD_ASC',
  Token1PriceUsdAscNullsFirst = 'token1PriceUSD_ASC_NULLS_FIRST',
  Token1PriceUsdAscNullsLast = 'token1PriceUSD_ASC_NULLS_LAST',
  Token1PriceUsdDesc = 'token1PriceUSD_DESC',
  Token1PriceUsdDescNullsFirst = 'token1PriceUSD_DESC_NULLS_FIRST',
  Token1PriceUsdDescNullsLast = 'token1PriceUSD_DESC_NULLS_LAST',
  UserIdAsc = 'user_id_ASC',
  UserIdAscNullsFirst = 'user_id_ASC_NULLS_FIRST',
  UserIdAscNullsLast = 'user_id_ASC_NULLS_LAST',
  UserIdDesc = 'user_id_DESC',
  UserIdDescNullsFirst = 'user_id_DESC_NULLS_FIRST',
  UserIdDescNullsLast = 'user_id_DESC_NULLS_LAST',
  UserLastUpdatedAtBlockTimestampAsc = 'user_lastUpdatedAtBlockTimestamp_ASC',
  UserLastUpdatedAtBlockTimestampAscNullsFirst = 'user_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  UserLastUpdatedAtBlockTimestampAscNullsLast = 'user_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  UserLastUpdatedAtBlockTimestampDesc = 'user_lastUpdatedAtBlockTimestamp_DESC',
  UserLastUpdatedAtBlockTimestampDescNullsFirst = 'user_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  UserLastUpdatedAtBlockTimestampDescNullsLast = 'user_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  UserLastUpdatedAtAsc = 'user_lastUpdatedAt_ASC',
  UserLastUpdatedAtAscNullsFirst = 'user_lastUpdatedAt_ASC_NULLS_FIRST',
  UserLastUpdatedAtAscNullsLast = 'user_lastUpdatedAt_ASC_NULLS_LAST',
  UserLastUpdatedAtDesc = 'user_lastUpdatedAt_DESC',
  UserLastUpdatedAtDescNullsFirst = 'user_lastUpdatedAt_DESC_NULLS_FIRST',
  UserLastUpdatedAtDescNullsLast = 'user_lastUpdatedAt_DESC_NULLS_LAST',
  UserSwapsAmountAsc = 'user_swapsAmount_ASC',
  UserSwapsAmountAscNullsFirst = 'user_swapsAmount_ASC_NULLS_FIRST',
  UserSwapsAmountAscNullsLast = 'user_swapsAmount_ASC_NULLS_LAST',
  UserSwapsAmountDesc = 'user_swapsAmount_DESC',
  UserSwapsAmountDescNullsFirst = 'user_swapsAmount_DESC_NULLS_FIRST',
  UserSwapsAmountDescNullsLast = 'user_swapsAmount_DESC_NULLS_LAST',
  UserUsdSwappedAsc = 'user_usdSwapped_ASC',
  UserUsdSwappedAscNullsFirst = 'user_usdSwapped_ASC_NULLS_FIRST',
  UserUsdSwappedAscNullsLast = 'user_usdSwapped_ASC_NULLS_LAST',
  UserUsdSwappedDesc = 'user_usdSwapped_DESC',
  UserUsdSwappedDescNullsFirst = 'user_usdSwapped_DESC_NULLS_FIRST',
  UserUsdSwappedDescNullsLast = 'user_usdSwapped_DESC_NULLS_LAST',
}

export type LiquidityPositionHistoryWhereInput = {
  AND?: InputMaybe<Array<LiquidityPositionHistoryWhereInput>>;
  OR?: InputMaybe<Array<LiquidityPositionHistoryWhereInput>>;
  block_eq?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not_eq?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityPosition?: InputMaybe<CurrentLiquidityPositionWhereInput>;
  liquidityPosition_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityTokenBalance_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityTokenBalance_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  liquidityTokenTotalSupply_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  liquidityTokenTotalSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityTokenTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  liquidityUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  pair?: InputMaybe<PairWhereInput>;
  pair_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve0_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  timestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0PriceUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0PriceUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token0PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1PriceUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1PriceUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token1PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  user?: InputMaybe<UserWhereInput>;
  user_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

export type Pair = {
  __typename?: 'Pair';
  createdAtBlockNumber: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  fees24h?: Maybe<Scalars['BigDecimal']['output']>;
  fees24hDelta?: Maybe<Scalars['BigDecimal']['output']>;
  feesETH24h?: Maybe<Scalars['BigDecimal']['output']>;
  feesUSD24h?: Maybe<Scalars['BigDecimal']['output']>;
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  liquidity24hDelta?: Maybe<Scalars['BigDecimal']['output']>;
  liquidityProviderCount: Scalars['BigInt']['output'];
  liquidityUSD?: Maybe<Scalars['BigDecimal']['output']>;
  lpDecimals: Scalars['BigInt']['output'];
  lpTotalLocked: Scalars['BigDecimal']['output'];
  lpTotalSupply: Scalars['BigDecimal']['output'];
  reserve0: Scalars['BigDecimal']['output'];
  reserve1: Scalars['BigDecimal']['output'];
  token0: Token;
  token0Id?: Maybe<Scalars['String']['output']>;
  token0Price: Scalars['BigDecimal']['output'];
  token1: Token;
  token1Id?: Maybe<Scalars['String']['output']>;
  token1Price: Scalars['BigDecimal']['output'];
  tradeVolume24h?: Maybe<Scalars['BigDecimal']['output']>;
  tradeVolume24hDelta?: Maybe<Scalars['BigDecimal']['output']>;
  tradeVolumeETH24h?: Maybe<Scalars['BigDecimal']['output']>;
  tradeVolumeUSD24h?: Maybe<Scalars['BigDecimal']['output']>;
  txCount24h: Scalars['BigInt']['output'];
};

export type PairDayData = {
  __typename?: 'PairDayData';
  date: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  liquidityProviderCount: Scalars['BigInt']['output'];
  liquidityUSD?: Maybe<Scalars['BigDecimal']['output']>;
  lpTotalLocked: Scalars['BigDecimal']['output'];
  lpTotalSupply: Scalars['BigDecimal']['output'];
  pairAddress: Scalars['String']['output'];
  reserve0: Scalars['BigDecimal']['output'];
  reserve1: Scalars['BigDecimal']['output'];
  token0: TokenDayData;
  token0Price: Scalars['BigDecimal']['output'];
  token1: TokenDayData;
  token1Price: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
};

export type PairDayDataConnection = {
  __typename?: 'PairDayDataConnection';
  edges: Array<PairDayDataEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PairDayDataEdge = {
  __typename?: 'PairDayDataEdge';
  cursor: Scalars['String']['output'];
  node: PairDayData;
};

export enum PairDayDataOrderByInput {
  DateAsc = 'date_ASC',
  DateAscNullsFirst = 'date_ASC_NULLS_FIRST',
  DateAscNullsLast = 'date_ASC_NULLS_LAST',
  DateDesc = 'date_DESC',
  DateDescNullsFirst = 'date_DESC_NULLS_FIRST',
  DateDescNullsLast = 'date_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  LiquidityProviderCountAsc = 'liquidityProviderCount_ASC',
  LiquidityProviderCountAscNullsFirst = 'liquidityProviderCount_ASC_NULLS_FIRST',
  LiquidityProviderCountAscNullsLast = 'liquidityProviderCount_ASC_NULLS_LAST',
  LiquidityProviderCountDesc = 'liquidityProviderCount_DESC',
  LiquidityProviderCountDescNullsFirst = 'liquidityProviderCount_DESC_NULLS_FIRST',
  LiquidityProviderCountDescNullsLast = 'liquidityProviderCount_DESC_NULLS_LAST',
  LiquidityUsdAsc = 'liquidityUSD_ASC',
  LiquidityUsdAscNullsFirst = 'liquidityUSD_ASC_NULLS_FIRST',
  LiquidityUsdAscNullsLast = 'liquidityUSD_ASC_NULLS_LAST',
  LiquidityUsdDesc = 'liquidityUSD_DESC',
  LiquidityUsdDescNullsFirst = 'liquidityUSD_DESC_NULLS_FIRST',
  LiquidityUsdDescNullsLast = 'liquidityUSD_DESC_NULLS_LAST',
  LpTotalLockedAsc = 'lpTotalLocked_ASC',
  LpTotalLockedAscNullsFirst = 'lpTotalLocked_ASC_NULLS_FIRST',
  LpTotalLockedAscNullsLast = 'lpTotalLocked_ASC_NULLS_LAST',
  LpTotalLockedDesc = 'lpTotalLocked_DESC',
  LpTotalLockedDescNullsFirst = 'lpTotalLocked_DESC_NULLS_FIRST',
  LpTotalLockedDescNullsLast = 'lpTotalLocked_DESC_NULLS_LAST',
  LpTotalSupplyAsc = 'lpTotalSupply_ASC',
  LpTotalSupplyAscNullsFirst = 'lpTotalSupply_ASC_NULLS_FIRST',
  LpTotalSupplyAscNullsLast = 'lpTotalSupply_ASC_NULLS_LAST',
  LpTotalSupplyDesc = 'lpTotalSupply_DESC',
  LpTotalSupplyDescNullsFirst = 'lpTotalSupply_DESC_NULLS_FIRST',
  LpTotalSupplyDescNullsLast = 'lpTotalSupply_DESC_NULLS_LAST',
  PairAddressAsc = 'pairAddress_ASC',
  PairAddressAscNullsFirst = 'pairAddress_ASC_NULLS_FIRST',
  PairAddressAscNullsLast = 'pairAddress_ASC_NULLS_LAST',
  PairAddressDesc = 'pairAddress_DESC',
  PairAddressDescNullsFirst = 'pairAddress_DESC_NULLS_FIRST',
  PairAddressDescNullsLast = 'pairAddress_DESC_NULLS_LAST',
  Reserve0Asc = 'reserve0_ASC',
  Reserve0AscNullsFirst = 'reserve0_ASC_NULLS_FIRST',
  Reserve0AscNullsLast = 'reserve0_ASC_NULLS_LAST',
  Reserve0Desc = 'reserve0_DESC',
  Reserve0DescNullsFirst = 'reserve0_DESC_NULLS_FIRST',
  Reserve0DescNullsLast = 'reserve0_DESC_NULLS_LAST',
  Reserve1Asc = 'reserve1_ASC',
  Reserve1AscNullsFirst = 'reserve1_ASC_NULLS_FIRST',
  Reserve1AscNullsLast = 'reserve1_ASC_NULLS_LAST',
  Reserve1Desc = 'reserve1_DESC',
  Reserve1DescNullsFirst = 'reserve1_DESC_NULLS_FIRST',
  Reserve1DescNullsLast = 'reserve1_DESC_NULLS_LAST',
  Token0PriceAsc = 'token0Price_ASC',
  Token0PriceAscNullsFirst = 'token0Price_ASC_NULLS_FIRST',
  Token0PriceAscNullsLast = 'token0Price_ASC_NULLS_LAST',
  Token0PriceDesc = 'token0Price_DESC',
  Token0PriceDescNullsFirst = 'token0Price_DESC_NULLS_FIRST',
  Token0PriceDescNullsLast = 'token0Price_DESC_NULLS_LAST',
  Token0CirculationSupplyAsc = 'token0_circulationSupply_ASC',
  Token0CirculationSupplyAscNullsFirst = 'token0_circulationSupply_ASC_NULLS_FIRST',
  Token0CirculationSupplyAscNullsLast = 'token0_circulationSupply_ASC_NULLS_LAST',
  Token0CirculationSupplyDesc = 'token0_circulationSupply_DESC',
  Token0CirculationSupplyDescNullsFirst = 'token0_circulationSupply_DESC_NULLS_FIRST',
  Token0CirculationSupplyDescNullsLast = 'token0_circulationSupply_DESC_NULLS_LAST',
  Token0DateAsc = 'token0_date_ASC',
  Token0DateAscNullsFirst = 'token0_date_ASC_NULLS_FIRST',
  Token0DateAscNullsLast = 'token0_date_ASC_NULLS_LAST',
  Token0DateDesc = 'token0_date_DESC',
  Token0DateDescNullsFirst = 'token0_date_DESC_NULLS_FIRST',
  Token0DateDescNullsLast = 'token0_date_DESC_NULLS_LAST',
  Token0HoldersAsc = 'token0_holders_ASC',
  Token0HoldersAscNullsFirst = 'token0_holders_ASC_NULLS_FIRST',
  Token0HoldersAscNullsLast = 'token0_holders_ASC_NULLS_LAST',
  Token0HoldersDesc = 'token0_holders_DESC',
  Token0HoldersDescNullsFirst = 'token0_holders_DESC_NULLS_FIRST',
  Token0HoldersDescNullsLast = 'token0_holders_DESC_NULLS_LAST',
  Token0IdAsc = 'token0_id_ASC',
  Token0IdAscNullsFirst = 'token0_id_ASC_NULLS_FIRST',
  Token0IdAscNullsLast = 'token0_id_ASC_NULLS_LAST',
  Token0IdDesc = 'token0_id_DESC',
  Token0IdDescNullsFirst = 'token0_id_DESC_NULLS_FIRST',
  Token0IdDescNullsLast = 'token0_id_DESC_NULLS_LAST',
  Token0LastUpdatedAtBlockTimestampAsc = 'token0_lastUpdatedAtBlockTimestamp_ASC',
  Token0LastUpdatedAtBlockTimestampAscNullsFirst = 'token0_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  Token0LastUpdatedAtBlockTimestampAscNullsLast = 'token0_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  Token0LastUpdatedAtBlockTimestampDesc = 'token0_lastUpdatedAtBlockTimestamp_DESC',
  Token0LastUpdatedAtBlockTimestampDescNullsFirst = 'token0_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  Token0LastUpdatedAtBlockTimestampDescNullsLast = 'token0_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  Token0LastUpdatedAtAsc = 'token0_lastUpdatedAt_ASC',
  Token0LastUpdatedAtAscNullsFirst = 'token0_lastUpdatedAt_ASC_NULLS_FIRST',
  Token0LastUpdatedAtAscNullsLast = 'token0_lastUpdatedAt_ASC_NULLS_LAST',
  Token0LastUpdatedAtDesc = 'token0_lastUpdatedAt_DESC',
  Token0LastUpdatedAtDescNullsFirst = 'token0_lastUpdatedAt_DESC_NULLS_FIRST',
  Token0LastUpdatedAtDescNullsLast = 'token0_lastUpdatedAt_DESC_NULLS_LAST',
  Token0MarketCapUsdAsc = 'token0_marketCapUSD_ASC',
  Token0MarketCapUsdAscNullsFirst = 'token0_marketCapUSD_ASC_NULLS_FIRST',
  Token0MarketCapUsdAscNullsLast = 'token0_marketCapUSD_ASC_NULLS_LAST',
  Token0MarketCapUsdDesc = 'token0_marketCapUSD_DESC',
  Token0MarketCapUsdDescNullsFirst = 'token0_marketCapUSD_DESC_NULLS_FIRST',
  Token0MarketCapUsdDescNullsLast = 'token0_marketCapUSD_DESC_NULLS_LAST',
  Token0PriceEthAsc = 'token0_priceETH_ASC',
  Token0PriceEthAscNullsFirst = 'token0_priceETH_ASC_NULLS_FIRST',
  Token0PriceEthAscNullsLast = 'token0_priceETH_ASC_NULLS_LAST',
  Token0PriceEthDesc = 'token0_priceETH_DESC',
  Token0PriceEthDescNullsFirst = 'token0_priceETH_DESC_NULLS_FIRST',
  Token0PriceEthDescNullsLast = 'token0_priceETH_DESC_NULLS_LAST',
  Token0PriceUsdAsc = 'token0_priceUSD_ASC',
  Token0PriceUsdAscNullsFirst = 'token0_priceUSD_ASC_NULLS_FIRST',
  Token0PriceUsdAscNullsLast = 'token0_priceUSD_ASC_NULLS_LAST',
  Token0PriceUsdDesc = 'token0_priceUSD_DESC',
  Token0PriceUsdDescNullsFirst = 'token0_priceUSD_DESC_NULLS_FIRST',
  Token0PriceUsdDescNullsLast = 'token0_priceUSD_DESC_NULLS_LAST',
  Token0TotalLiquidityAllPairsUsdAsc = 'token0_totalLiquidityAllPairsUSD_ASC',
  Token0TotalLiquidityAllPairsUsdAscNullsFirst = 'token0_totalLiquidityAllPairsUSD_ASC_NULLS_FIRST',
  Token0TotalLiquidityAllPairsUsdAscNullsLast = 'token0_totalLiquidityAllPairsUSD_ASC_NULLS_LAST',
  Token0TotalLiquidityAllPairsUsdDesc = 'token0_totalLiquidityAllPairsUSD_DESC',
  Token0TotalLiquidityAllPairsUsdDescNullsFirst = 'token0_totalLiquidityAllPairsUSD_DESC_NULLS_FIRST',
  Token0TotalLiquidityAllPairsUsdDescNullsLast = 'token0_totalLiquidityAllPairsUSD_DESC_NULLS_LAST',
  Token0TotalLiquidityAllPairsAsc = 'token0_totalLiquidityAllPairs_ASC',
  Token0TotalLiquidityAllPairsAscNullsFirst = 'token0_totalLiquidityAllPairs_ASC_NULLS_FIRST',
  Token0TotalLiquidityAllPairsAscNullsLast = 'token0_totalLiquidityAllPairs_ASC_NULLS_LAST',
  Token0TotalLiquidityAllPairsDesc = 'token0_totalLiquidityAllPairs_DESC',
  Token0TotalLiquidityAllPairsDescNullsFirst = 'token0_totalLiquidityAllPairs_DESC_NULLS_FIRST',
  Token0TotalLiquidityAllPairsDescNullsLast = 'token0_totalLiquidityAllPairs_DESC_NULLS_LAST',
  Token0TotalSupplyAsc = 'token0_totalSupply_ASC',
  Token0TotalSupplyAscNullsFirst = 'token0_totalSupply_ASC_NULLS_FIRST',
  Token0TotalSupplyAscNullsLast = 'token0_totalSupply_ASC_NULLS_LAST',
  Token0TotalSupplyDesc = 'token0_totalSupply_DESC',
  Token0TotalSupplyDescNullsFirst = 'token0_totalSupply_DESC_NULLS_FIRST',
  Token0TotalSupplyDescNullsLast = 'token0_totalSupply_DESC_NULLS_LAST',
  Token0TradeVolume24hAsc = 'token0_tradeVolume24h_ASC',
  Token0TradeVolume24hAscNullsFirst = 'token0_tradeVolume24h_ASC_NULLS_FIRST',
  Token0TradeVolume24hAscNullsLast = 'token0_tradeVolume24h_ASC_NULLS_LAST',
  Token0TradeVolume24hDesc = 'token0_tradeVolume24h_DESC',
  Token0TradeVolume24hDescNullsFirst = 'token0_tradeVolume24h_DESC_NULLS_FIRST',
  Token0TradeVolume24hDescNullsLast = 'token0_tradeVolume24h_DESC_NULLS_LAST',
  Token0TradeVolumeEth24hAsc = 'token0_tradeVolumeETH24h_ASC',
  Token0TradeVolumeEth24hAscNullsFirst = 'token0_tradeVolumeETH24h_ASC_NULLS_FIRST',
  Token0TradeVolumeEth24hAscNullsLast = 'token0_tradeVolumeETH24h_ASC_NULLS_LAST',
  Token0TradeVolumeEth24hDesc = 'token0_tradeVolumeETH24h_DESC',
  Token0TradeVolumeEth24hDescNullsFirst = 'token0_tradeVolumeETH24h_DESC_NULLS_FIRST',
  Token0TradeVolumeEth24hDescNullsLast = 'token0_tradeVolumeETH24h_DESC_NULLS_LAST',
  Token0TradeVolumeUsd24hAsc = 'token0_tradeVolumeUSD24h_ASC',
  Token0TradeVolumeUsd24hAscNullsFirst = 'token0_tradeVolumeUSD24h_ASC_NULLS_FIRST',
  Token0TradeVolumeUsd24hAscNullsLast = 'token0_tradeVolumeUSD24h_ASC_NULLS_LAST',
  Token0TradeVolumeUsd24hDesc = 'token0_tradeVolumeUSD24h_DESC',
  Token0TradeVolumeUsd24hDescNullsFirst = 'token0_tradeVolumeUSD24h_DESC_NULLS_FIRST',
  Token0TradeVolumeUsd24hDescNullsLast = 'token0_tradeVolumeUSD24h_DESC_NULLS_LAST',
  Token0TxCountAsc = 'token0_txCount_ASC',
  Token0TxCountAscNullsFirst = 'token0_txCount_ASC_NULLS_FIRST',
  Token0TxCountAscNullsLast = 'token0_txCount_ASC_NULLS_LAST',
  Token0TxCountDesc = 'token0_txCount_DESC',
  Token0TxCountDescNullsFirst = 'token0_txCount_DESC_NULLS_FIRST',
  Token0TxCountDescNullsLast = 'token0_txCount_DESC_NULLS_LAST',
  Token1PriceAsc = 'token1Price_ASC',
  Token1PriceAscNullsFirst = 'token1Price_ASC_NULLS_FIRST',
  Token1PriceAscNullsLast = 'token1Price_ASC_NULLS_LAST',
  Token1PriceDesc = 'token1Price_DESC',
  Token1PriceDescNullsFirst = 'token1Price_DESC_NULLS_FIRST',
  Token1PriceDescNullsLast = 'token1Price_DESC_NULLS_LAST',
  Token1CirculationSupplyAsc = 'token1_circulationSupply_ASC',
  Token1CirculationSupplyAscNullsFirst = 'token1_circulationSupply_ASC_NULLS_FIRST',
  Token1CirculationSupplyAscNullsLast = 'token1_circulationSupply_ASC_NULLS_LAST',
  Token1CirculationSupplyDesc = 'token1_circulationSupply_DESC',
  Token1CirculationSupplyDescNullsFirst = 'token1_circulationSupply_DESC_NULLS_FIRST',
  Token1CirculationSupplyDescNullsLast = 'token1_circulationSupply_DESC_NULLS_LAST',
  Token1DateAsc = 'token1_date_ASC',
  Token1DateAscNullsFirst = 'token1_date_ASC_NULLS_FIRST',
  Token1DateAscNullsLast = 'token1_date_ASC_NULLS_LAST',
  Token1DateDesc = 'token1_date_DESC',
  Token1DateDescNullsFirst = 'token1_date_DESC_NULLS_FIRST',
  Token1DateDescNullsLast = 'token1_date_DESC_NULLS_LAST',
  Token1HoldersAsc = 'token1_holders_ASC',
  Token1HoldersAscNullsFirst = 'token1_holders_ASC_NULLS_FIRST',
  Token1HoldersAscNullsLast = 'token1_holders_ASC_NULLS_LAST',
  Token1HoldersDesc = 'token1_holders_DESC',
  Token1HoldersDescNullsFirst = 'token1_holders_DESC_NULLS_FIRST',
  Token1HoldersDescNullsLast = 'token1_holders_DESC_NULLS_LAST',
  Token1IdAsc = 'token1_id_ASC',
  Token1IdAscNullsFirst = 'token1_id_ASC_NULLS_FIRST',
  Token1IdAscNullsLast = 'token1_id_ASC_NULLS_LAST',
  Token1IdDesc = 'token1_id_DESC',
  Token1IdDescNullsFirst = 'token1_id_DESC_NULLS_FIRST',
  Token1IdDescNullsLast = 'token1_id_DESC_NULLS_LAST',
  Token1LastUpdatedAtBlockTimestampAsc = 'token1_lastUpdatedAtBlockTimestamp_ASC',
  Token1LastUpdatedAtBlockTimestampAscNullsFirst = 'token1_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  Token1LastUpdatedAtBlockTimestampAscNullsLast = 'token1_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  Token1LastUpdatedAtBlockTimestampDesc = 'token1_lastUpdatedAtBlockTimestamp_DESC',
  Token1LastUpdatedAtBlockTimestampDescNullsFirst = 'token1_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  Token1LastUpdatedAtBlockTimestampDescNullsLast = 'token1_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  Token1LastUpdatedAtAsc = 'token1_lastUpdatedAt_ASC',
  Token1LastUpdatedAtAscNullsFirst = 'token1_lastUpdatedAt_ASC_NULLS_FIRST',
  Token1LastUpdatedAtAscNullsLast = 'token1_lastUpdatedAt_ASC_NULLS_LAST',
  Token1LastUpdatedAtDesc = 'token1_lastUpdatedAt_DESC',
  Token1LastUpdatedAtDescNullsFirst = 'token1_lastUpdatedAt_DESC_NULLS_FIRST',
  Token1LastUpdatedAtDescNullsLast = 'token1_lastUpdatedAt_DESC_NULLS_LAST',
  Token1MarketCapUsdAsc = 'token1_marketCapUSD_ASC',
  Token1MarketCapUsdAscNullsFirst = 'token1_marketCapUSD_ASC_NULLS_FIRST',
  Token1MarketCapUsdAscNullsLast = 'token1_marketCapUSD_ASC_NULLS_LAST',
  Token1MarketCapUsdDesc = 'token1_marketCapUSD_DESC',
  Token1MarketCapUsdDescNullsFirst = 'token1_marketCapUSD_DESC_NULLS_FIRST',
  Token1MarketCapUsdDescNullsLast = 'token1_marketCapUSD_DESC_NULLS_LAST',
  Token1PriceEthAsc = 'token1_priceETH_ASC',
  Token1PriceEthAscNullsFirst = 'token1_priceETH_ASC_NULLS_FIRST',
  Token1PriceEthAscNullsLast = 'token1_priceETH_ASC_NULLS_LAST',
  Token1PriceEthDesc = 'token1_priceETH_DESC',
  Token1PriceEthDescNullsFirst = 'token1_priceETH_DESC_NULLS_FIRST',
  Token1PriceEthDescNullsLast = 'token1_priceETH_DESC_NULLS_LAST',
  Token1PriceUsdAsc = 'token1_priceUSD_ASC',
  Token1PriceUsdAscNullsFirst = 'token1_priceUSD_ASC_NULLS_FIRST',
  Token1PriceUsdAscNullsLast = 'token1_priceUSD_ASC_NULLS_LAST',
  Token1PriceUsdDesc = 'token1_priceUSD_DESC',
  Token1PriceUsdDescNullsFirst = 'token1_priceUSD_DESC_NULLS_FIRST',
  Token1PriceUsdDescNullsLast = 'token1_priceUSD_DESC_NULLS_LAST',
  Token1TotalLiquidityAllPairsUsdAsc = 'token1_totalLiquidityAllPairsUSD_ASC',
  Token1TotalLiquidityAllPairsUsdAscNullsFirst = 'token1_totalLiquidityAllPairsUSD_ASC_NULLS_FIRST',
  Token1TotalLiquidityAllPairsUsdAscNullsLast = 'token1_totalLiquidityAllPairsUSD_ASC_NULLS_LAST',
  Token1TotalLiquidityAllPairsUsdDesc = 'token1_totalLiquidityAllPairsUSD_DESC',
  Token1TotalLiquidityAllPairsUsdDescNullsFirst = 'token1_totalLiquidityAllPairsUSD_DESC_NULLS_FIRST',
  Token1TotalLiquidityAllPairsUsdDescNullsLast = 'token1_totalLiquidityAllPairsUSD_DESC_NULLS_LAST',
  Token1TotalLiquidityAllPairsAsc = 'token1_totalLiquidityAllPairs_ASC',
  Token1TotalLiquidityAllPairsAscNullsFirst = 'token1_totalLiquidityAllPairs_ASC_NULLS_FIRST',
  Token1TotalLiquidityAllPairsAscNullsLast = 'token1_totalLiquidityAllPairs_ASC_NULLS_LAST',
  Token1TotalLiquidityAllPairsDesc = 'token1_totalLiquidityAllPairs_DESC',
  Token1TotalLiquidityAllPairsDescNullsFirst = 'token1_totalLiquidityAllPairs_DESC_NULLS_FIRST',
  Token1TotalLiquidityAllPairsDescNullsLast = 'token1_totalLiquidityAllPairs_DESC_NULLS_LAST',
  Token1TotalSupplyAsc = 'token1_totalSupply_ASC',
  Token1TotalSupplyAscNullsFirst = 'token1_totalSupply_ASC_NULLS_FIRST',
  Token1TotalSupplyAscNullsLast = 'token1_totalSupply_ASC_NULLS_LAST',
  Token1TotalSupplyDesc = 'token1_totalSupply_DESC',
  Token1TotalSupplyDescNullsFirst = 'token1_totalSupply_DESC_NULLS_FIRST',
  Token1TotalSupplyDescNullsLast = 'token1_totalSupply_DESC_NULLS_LAST',
  Token1TradeVolume24hAsc = 'token1_tradeVolume24h_ASC',
  Token1TradeVolume24hAscNullsFirst = 'token1_tradeVolume24h_ASC_NULLS_FIRST',
  Token1TradeVolume24hAscNullsLast = 'token1_tradeVolume24h_ASC_NULLS_LAST',
  Token1TradeVolume24hDesc = 'token1_tradeVolume24h_DESC',
  Token1TradeVolume24hDescNullsFirst = 'token1_tradeVolume24h_DESC_NULLS_FIRST',
  Token1TradeVolume24hDescNullsLast = 'token1_tradeVolume24h_DESC_NULLS_LAST',
  Token1TradeVolumeEth24hAsc = 'token1_tradeVolumeETH24h_ASC',
  Token1TradeVolumeEth24hAscNullsFirst = 'token1_tradeVolumeETH24h_ASC_NULLS_FIRST',
  Token1TradeVolumeEth24hAscNullsLast = 'token1_tradeVolumeETH24h_ASC_NULLS_LAST',
  Token1TradeVolumeEth24hDesc = 'token1_tradeVolumeETH24h_DESC',
  Token1TradeVolumeEth24hDescNullsFirst = 'token1_tradeVolumeETH24h_DESC_NULLS_FIRST',
  Token1TradeVolumeEth24hDescNullsLast = 'token1_tradeVolumeETH24h_DESC_NULLS_LAST',
  Token1TradeVolumeUsd24hAsc = 'token1_tradeVolumeUSD24h_ASC',
  Token1TradeVolumeUsd24hAscNullsFirst = 'token1_tradeVolumeUSD24h_ASC_NULLS_FIRST',
  Token1TradeVolumeUsd24hAscNullsLast = 'token1_tradeVolumeUSD24h_ASC_NULLS_LAST',
  Token1TradeVolumeUsd24hDesc = 'token1_tradeVolumeUSD24h_DESC',
  Token1TradeVolumeUsd24hDescNullsFirst = 'token1_tradeVolumeUSD24h_DESC_NULLS_FIRST',
  Token1TradeVolumeUsd24hDescNullsLast = 'token1_tradeVolumeUSD24h_DESC_NULLS_LAST',
  Token1TxCountAsc = 'token1_txCount_ASC',
  Token1TxCountAscNullsFirst = 'token1_txCount_ASC_NULLS_FIRST',
  Token1TxCountAscNullsLast = 'token1_txCount_ASC_NULLS_LAST',
  Token1TxCountDesc = 'token1_txCount_DESC',
  Token1TxCountDescNullsFirst = 'token1_txCount_DESC_NULLS_FIRST',
  Token1TxCountDescNullsLast = 'token1_txCount_DESC_NULLS_LAST',
  TxCountAsc = 'txCount_ASC',
  TxCountAscNullsFirst = 'txCount_ASC_NULLS_FIRST',
  TxCountAscNullsLast = 'txCount_ASC_NULLS_LAST',
  TxCountDesc = 'txCount_DESC',
  TxCountDescNullsFirst = 'txCount_DESC_NULLS_FIRST',
  TxCountDescNullsLast = 'txCount_DESC_NULLS_LAST',
}

export type PairDayDataWhereInput = {
  AND?: InputMaybe<Array<PairDayDataWhereInput>>;
  OR?: InputMaybe<Array<PairDayDataWhereInput>>;
  date_eq?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not_eq?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityProviderCount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityProviderCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalLocked_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalLocked_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lpTotalLocked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalSupply_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lpTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  pairAddress_contains?: InputMaybe<Scalars['String']['input']>;
  pairAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  pairAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  pairAddress_eq?: InputMaybe<Scalars['String']['input']>;
  pairAddress_gt?: InputMaybe<Scalars['String']['input']>;
  pairAddress_gte?: InputMaybe<Scalars['String']['input']>;
  pairAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pairAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pairAddress_lt?: InputMaybe<Scalars['String']['input']>;
  pairAddress_lte?: InputMaybe<Scalars['String']['input']>;
  pairAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  pairAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  pairAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  pairAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  pairAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pairAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  pairAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  reserve0_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0?: InputMaybe<TokenDayDataWhereInput>;
  token0Price_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token1?: InputMaybe<TokenDayDataWhereInput>;
  token1Price_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type PairEdge = {
  __typename?: 'PairEdge';
  cursor: Scalars['String']['output'];
  node: Pair;
};

export enum PairOrderByInput {
  CreatedAtBlockNumberAsc = 'createdAtBlockNumber_ASC',
  CreatedAtBlockNumberAscNullsFirst = 'createdAtBlockNumber_ASC_NULLS_FIRST',
  CreatedAtBlockNumberAscNullsLast = 'createdAtBlockNumber_ASC_NULLS_LAST',
  CreatedAtBlockNumberDesc = 'createdAtBlockNumber_DESC',
  CreatedAtBlockNumberDescNullsFirst = 'createdAtBlockNumber_DESC_NULLS_FIRST',
  CreatedAtBlockNumberDescNullsLast = 'createdAtBlockNumber_DESC_NULLS_LAST',
  CreatedAtTimestampAsc = 'createdAtTimestamp_ASC',
  CreatedAtTimestampAscNullsFirst = 'createdAtTimestamp_ASC_NULLS_FIRST',
  CreatedAtTimestampAscNullsLast = 'createdAtTimestamp_ASC_NULLS_LAST',
  CreatedAtTimestampDesc = 'createdAtTimestamp_DESC',
  CreatedAtTimestampDescNullsFirst = 'createdAtTimestamp_DESC_NULLS_FIRST',
  CreatedAtTimestampDescNullsLast = 'createdAtTimestamp_DESC_NULLS_LAST',
  Fees24hDeltaAsc = 'fees24hDelta_ASC',
  Fees24hDeltaAscNullsFirst = 'fees24hDelta_ASC_NULLS_FIRST',
  Fees24hDeltaAscNullsLast = 'fees24hDelta_ASC_NULLS_LAST',
  Fees24hDeltaDesc = 'fees24hDelta_DESC',
  Fees24hDeltaDescNullsFirst = 'fees24hDelta_DESC_NULLS_FIRST',
  Fees24hDeltaDescNullsLast = 'fees24hDelta_DESC_NULLS_LAST',
  Fees24hAsc = 'fees24h_ASC',
  Fees24hAscNullsFirst = 'fees24h_ASC_NULLS_FIRST',
  Fees24hAscNullsLast = 'fees24h_ASC_NULLS_LAST',
  Fees24hDesc = 'fees24h_DESC',
  Fees24hDescNullsFirst = 'fees24h_DESC_NULLS_FIRST',
  Fees24hDescNullsLast = 'fees24h_DESC_NULLS_LAST',
  FeesEth24hAsc = 'feesETH24h_ASC',
  FeesEth24hAscNullsFirst = 'feesETH24h_ASC_NULLS_FIRST',
  FeesEth24hAscNullsLast = 'feesETH24h_ASC_NULLS_LAST',
  FeesEth24hDesc = 'feesETH24h_DESC',
  FeesEth24hDescNullsFirst = 'feesETH24h_DESC_NULLS_FIRST',
  FeesEth24hDescNullsLast = 'feesETH24h_DESC_NULLS_LAST',
  FeesUsd24hAsc = 'feesUSD24h_ASC',
  FeesUsd24hAscNullsFirst = 'feesUSD24h_ASC_NULLS_FIRST',
  FeesUsd24hAscNullsLast = 'feesUSD24h_ASC_NULLS_LAST',
  FeesUsd24hDesc = 'feesUSD24h_DESC',
  FeesUsd24hDescNullsFirst = 'feesUSD24h_DESC_NULLS_FIRST',
  FeesUsd24hDescNullsLast = 'feesUSD24h_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  Liquidity24hDeltaAsc = 'liquidity24hDelta_ASC',
  Liquidity24hDeltaAscNullsFirst = 'liquidity24hDelta_ASC_NULLS_FIRST',
  Liquidity24hDeltaAscNullsLast = 'liquidity24hDelta_ASC_NULLS_LAST',
  Liquidity24hDeltaDesc = 'liquidity24hDelta_DESC',
  Liquidity24hDeltaDescNullsFirst = 'liquidity24hDelta_DESC_NULLS_FIRST',
  Liquidity24hDeltaDescNullsLast = 'liquidity24hDelta_DESC_NULLS_LAST',
  LiquidityProviderCountAsc = 'liquidityProviderCount_ASC',
  LiquidityProviderCountAscNullsFirst = 'liquidityProviderCount_ASC_NULLS_FIRST',
  LiquidityProviderCountAscNullsLast = 'liquidityProviderCount_ASC_NULLS_LAST',
  LiquidityProviderCountDesc = 'liquidityProviderCount_DESC',
  LiquidityProviderCountDescNullsFirst = 'liquidityProviderCount_DESC_NULLS_FIRST',
  LiquidityProviderCountDescNullsLast = 'liquidityProviderCount_DESC_NULLS_LAST',
  LiquidityUsdAsc = 'liquidityUSD_ASC',
  LiquidityUsdAscNullsFirst = 'liquidityUSD_ASC_NULLS_FIRST',
  LiquidityUsdAscNullsLast = 'liquidityUSD_ASC_NULLS_LAST',
  LiquidityUsdDesc = 'liquidityUSD_DESC',
  LiquidityUsdDescNullsFirst = 'liquidityUSD_DESC_NULLS_FIRST',
  LiquidityUsdDescNullsLast = 'liquidityUSD_DESC_NULLS_LAST',
  LpDecimalsAsc = 'lpDecimals_ASC',
  LpDecimalsAscNullsFirst = 'lpDecimals_ASC_NULLS_FIRST',
  LpDecimalsAscNullsLast = 'lpDecimals_ASC_NULLS_LAST',
  LpDecimalsDesc = 'lpDecimals_DESC',
  LpDecimalsDescNullsFirst = 'lpDecimals_DESC_NULLS_FIRST',
  LpDecimalsDescNullsLast = 'lpDecimals_DESC_NULLS_LAST',
  LpTotalLockedAsc = 'lpTotalLocked_ASC',
  LpTotalLockedAscNullsFirst = 'lpTotalLocked_ASC_NULLS_FIRST',
  LpTotalLockedAscNullsLast = 'lpTotalLocked_ASC_NULLS_LAST',
  LpTotalLockedDesc = 'lpTotalLocked_DESC',
  LpTotalLockedDescNullsFirst = 'lpTotalLocked_DESC_NULLS_FIRST',
  LpTotalLockedDescNullsLast = 'lpTotalLocked_DESC_NULLS_LAST',
  LpTotalSupplyAsc = 'lpTotalSupply_ASC',
  LpTotalSupplyAscNullsFirst = 'lpTotalSupply_ASC_NULLS_FIRST',
  LpTotalSupplyAscNullsLast = 'lpTotalSupply_ASC_NULLS_LAST',
  LpTotalSupplyDesc = 'lpTotalSupply_DESC',
  LpTotalSupplyDescNullsFirst = 'lpTotalSupply_DESC_NULLS_FIRST',
  LpTotalSupplyDescNullsLast = 'lpTotalSupply_DESC_NULLS_LAST',
  Reserve0Asc = 'reserve0_ASC',
  Reserve0AscNullsFirst = 'reserve0_ASC_NULLS_FIRST',
  Reserve0AscNullsLast = 'reserve0_ASC_NULLS_LAST',
  Reserve0Desc = 'reserve0_DESC',
  Reserve0DescNullsFirst = 'reserve0_DESC_NULLS_FIRST',
  Reserve0DescNullsLast = 'reserve0_DESC_NULLS_LAST',
  Reserve1Asc = 'reserve1_ASC',
  Reserve1AscNullsFirst = 'reserve1_ASC_NULLS_FIRST',
  Reserve1AscNullsLast = 'reserve1_ASC_NULLS_LAST',
  Reserve1Desc = 'reserve1_DESC',
  Reserve1DescNullsFirst = 'reserve1_DESC_NULLS_FIRST',
  Reserve1DescNullsLast = 'reserve1_DESC_NULLS_LAST',
  Token0PriceAsc = 'token0Price_ASC',
  Token0PriceAscNullsFirst = 'token0Price_ASC_NULLS_FIRST',
  Token0PriceAscNullsLast = 'token0Price_ASC_NULLS_LAST',
  Token0PriceDesc = 'token0Price_DESC',
  Token0PriceDescNullsFirst = 'token0Price_DESC_NULLS_FIRST',
  Token0PriceDescNullsLast = 'token0Price_DESC_NULLS_LAST',
  Token0CirculationSupplyAsc = 'token0_circulationSupply_ASC',
  Token0CirculationSupplyAscNullsFirst = 'token0_circulationSupply_ASC_NULLS_FIRST',
  Token0CirculationSupplyAscNullsLast = 'token0_circulationSupply_ASC_NULLS_LAST',
  Token0CirculationSupplyDesc = 'token0_circulationSupply_DESC',
  Token0CirculationSupplyDescNullsFirst = 'token0_circulationSupply_DESC_NULLS_FIRST',
  Token0CirculationSupplyDescNullsLast = 'token0_circulationSupply_DESC_NULLS_LAST',
  Token0DecimalsAsc = 'token0_decimals_ASC',
  Token0DecimalsAscNullsFirst = 'token0_decimals_ASC_NULLS_FIRST',
  Token0DecimalsAscNullsLast = 'token0_decimals_ASC_NULLS_LAST',
  Token0DecimalsDesc = 'token0_decimals_DESC',
  Token0DecimalsDescNullsFirst = 'token0_decimals_DESC_NULLS_FIRST',
  Token0DecimalsDescNullsLast = 'token0_decimals_DESC_NULLS_LAST',
  Token0FdvAsc = 'token0_fdv_ASC',
  Token0FdvAscNullsFirst = 'token0_fdv_ASC_NULLS_FIRST',
  Token0FdvAscNullsLast = 'token0_fdv_ASC_NULLS_LAST',
  Token0FdvDesc = 'token0_fdv_DESC',
  Token0FdvDescNullsFirst = 'token0_fdv_DESC_NULLS_FIRST',
  Token0FdvDescNullsLast = 'token0_fdv_DESC_NULLS_LAST',
  Token0HoldersAsc = 'token0_holders_ASC',
  Token0HoldersAscNullsFirst = 'token0_holders_ASC_NULLS_FIRST',
  Token0HoldersAscNullsLast = 'token0_holders_ASC_NULLS_LAST',
  Token0HoldersDesc = 'token0_holders_DESC',
  Token0HoldersDescNullsFirst = 'token0_holders_DESC_NULLS_FIRST',
  Token0HoldersDescNullsLast = 'token0_holders_DESC_NULLS_LAST',
  Token0IdAsc = 'token0_id_ASC',
  Token0IdAscNullsFirst = 'token0_id_ASC_NULLS_FIRST',
  Token0IdAscNullsLast = 'token0_id_ASC_NULLS_LAST',
  Token0IdDesc = 'token0_id_DESC',
  Token0IdDescNullsFirst = 'token0_id_DESC_NULLS_FIRST',
  Token0IdDescNullsLast = 'token0_id_DESC_NULLS_LAST',
  Token0LastUpdatedAtBlockTimestampAsc = 'token0_lastUpdatedAtBlockTimestamp_ASC',
  Token0LastUpdatedAtBlockTimestampAscNullsFirst = 'token0_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  Token0LastUpdatedAtBlockTimestampAscNullsLast = 'token0_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  Token0LastUpdatedAtBlockTimestampDesc = 'token0_lastUpdatedAtBlockTimestamp_DESC',
  Token0LastUpdatedAtBlockTimestampDescNullsFirst = 'token0_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  Token0LastUpdatedAtBlockTimestampDescNullsLast = 'token0_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  Token0LastUpdatedAtAsc = 'token0_lastUpdatedAt_ASC',
  Token0LastUpdatedAtAscNullsFirst = 'token0_lastUpdatedAt_ASC_NULLS_FIRST',
  Token0LastUpdatedAtAscNullsLast = 'token0_lastUpdatedAt_ASC_NULLS_LAST',
  Token0LastUpdatedAtDesc = 'token0_lastUpdatedAt_DESC',
  Token0LastUpdatedAtDescNullsFirst = 'token0_lastUpdatedAt_DESC_NULLS_FIRST',
  Token0LastUpdatedAtDescNullsLast = 'token0_lastUpdatedAt_DESC_NULLS_LAST',
  Token0MarketCapUsdAsc = 'token0_marketCapUSD_ASC',
  Token0MarketCapUsdAscNullsFirst = 'token0_marketCapUSD_ASC_NULLS_FIRST',
  Token0MarketCapUsdAscNullsLast = 'token0_marketCapUSD_ASC_NULLS_LAST',
  Token0MarketCapUsdDesc = 'token0_marketCapUSD_DESC',
  Token0MarketCapUsdDescNullsFirst = 'token0_marketCapUSD_DESC_NULLS_FIRST',
  Token0MarketCapUsdDescNullsLast = 'token0_marketCapUSD_DESC_NULLS_LAST',
  Token0NameAsc = 'token0_name_ASC',
  Token0NameAscNullsFirst = 'token0_name_ASC_NULLS_FIRST',
  Token0NameAscNullsLast = 'token0_name_ASC_NULLS_LAST',
  Token0NameDesc = 'token0_name_DESC',
  Token0NameDescNullsFirst = 'token0_name_DESC_NULLS_FIRST',
  Token0NameDescNullsLast = 'token0_name_DESC_NULLS_LAST',
  Token0Price24hDeltaAsc = 'token0_price24hDelta_ASC',
  Token0Price24hDeltaAscNullsFirst = 'token0_price24hDelta_ASC_NULLS_FIRST',
  Token0Price24hDeltaAscNullsLast = 'token0_price24hDelta_ASC_NULLS_LAST',
  Token0Price24hDeltaDesc = 'token0_price24hDelta_DESC',
  Token0Price24hDeltaDescNullsFirst = 'token0_price24hDelta_DESC_NULLS_FIRST',
  Token0Price24hDeltaDescNullsLast = 'token0_price24hDelta_DESC_NULLS_LAST',
  Token0PriceEthAsc = 'token0_priceETH_ASC',
  Token0PriceEthAscNullsFirst = 'token0_priceETH_ASC_NULLS_FIRST',
  Token0PriceEthAscNullsLast = 'token0_priceETH_ASC_NULLS_LAST',
  Token0PriceEthDesc = 'token0_priceETH_DESC',
  Token0PriceEthDescNullsFirst = 'token0_priceETH_DESC_NULLS_FIRST',
  Token0PriceEthDescNullsLast = 'token0_priceETH_DESC_NULLS_LAST',
  Token0PriceUsdAsc = 'token0_priceUSD_ASC',
  Token0PriceUsdAscNullsFirst = 'token0_priceUSD_ASC_NULLS_FIRST',
  Token0PriceUsdAscNullsLast = 'token0_priceUSD_ASC_NULLS_LAST',
  Token0PriceUsdDesc = 'token0_priceUSD_DESC',
  Token0PriceUsdDescNullsFirst = 'token0_priceUSD_DESC_NULLS_FIRST',
  Token0PriceUsdDescNullsLast = 'token0_priceUSD_DESC_NULLS_LAST',
  Token0SymbolAsc = 'token0_symbol_ASC',
  Token0SymbolAscNullsFirst = 'token0_symbol_ASC_NULLS_FIRST',
  Token0SymbolAscNullsLast = 'token0_symbol_ASC_NULLS_LAST',
  Token0SymbolDesc = 'token0_symbol_DESC',
  Token0SymbolDescNullsFirst = 'token0_symbol_DESC_NULLS_FIRST',
  Token0SymbolDescNullsLast = 'token0_symbol_DESC_NULLS_LAST',
  Token0TotalLiquidityAllPairsUsdAsc = 'token0_totalLiquidityAllPairsUSD_ASC',
  Token0TotalLiquidityAllPairsUsdAscNullsFirst = 'token0_totalLiquidityAllPairsUSD_ASC_NULLS_FIRST',
  Token0TotalLiquidityAllPairsUsdAscNullsLast = 'token0_totalLiquidityAllPairsUSD_ASC_NULLS_LAST',
  Token0TotalLiquidityAllPairsUsdDesc = 'token0_totalLiquidityAllPairsUSD_DESC',
  Token0TotalLiquidityAllPairsUsdDescNullsFirst = 'token0_totalLiquidityAllPairsUSD_DESC_NULLS_FIRST',
  Token0TotalLiquidityAllPairsUsdDescNullsLast = 'token0_totalLiquidityAllPairsUSD_DESC_NULLS_LAST',
  Token0TotalLiquidityAllPairsAsc = 'token0_totalLiquidityAllPairs_ASC',
  Token0TotalLiquidityAllPairsAscNullsFirst = 'token0_totalLiquidityAllPairs_ASC_NULLS_FIRST',
  Token0TotalLiquidityAllPairsAscNullsLast = 'token0_totalLiquidityAllPairs_ASC_NULLS_LAST',
  Token0TotalLiquidityAllPairsDesc = 'token0_totalLiquidityAllPairs_DESC',
  Token0TotalLiquidityAllPairsDescNullsFirst = 'token0_totalLiquidityAllPairs_DESC_NULLS_FIRST',
  Token0TotalLiquidityAllPairsDescNullsLast = 'token0_totalLiquidityAllPairs_DESC_NULLS_LAST',
  Token0TotalSupplyAsc = 'token0_totalSupply_ASC',
  Token0TotalSupplyAscNullsFirst = 'token0_totalSupply_ASC_NULLS_FIRST',
  Token0TotalSupplyAscNullsLast = 'token0_totalSupply_ASC_NULLS_LAST',
  Token0TotalSupplyDesc = 'token0_totalSupply_DESC',
  Token0TotalSupplyDescNullsFirst = 'token0_totalSupply_DESC_NULLS_FIRST',
  Token0TotalSupplyDescNullsLast = 'token0_totalSupply_DESC_NULLS_LAST',
  Token0TradeVolume24hAsc = 'token0_tradeVolume24h_ASC',
  Token0TradeVolume24hAscNullsFirst = 'token0_tradeVolume24h_ASC_NULLS_FIRST',
  Token0TradeVolume24hAscNullsLast = 'token0_tradeVolume24h_ASC_NULLS_LAST',
  Token0TradeVolume24hDesc = 'token0_tradeVolume24h_DESC',
  Token0TradeVolume24hDescNullsFirst = 'token0_tradeVolume24h_DESC_NULLS_FIRST',
  Token0TradeVolume24hDescNullsLast = 'token0_tradeVolume24h_DESC_NULLS_LAST',
  Token0TradeVolumeEth24hAsc = 'token0_tradeVolumeETH24h_ASC',
  Token0TradeVolumeEth24hAscNullsFirst = 'token0_tradeVolumeETH24h_ASC_NULLS_FIRST',
  Token0TradeVolumeEth24hAscNullsLast = 'token0_tradeVolumeETH24h_ASC_NULLS_LAST',
  Token0TradeVolumeEth24hDesc = 'token0_tradeVolumeETH24h_DESC',
  Token0TradeVolumeEth24hDescNullsFirst = 'token0_tradeVolumeETH24h_DESC_NULLS_FIRST',
  Token0TradeVolumeEth24hDescNullsLast = 'token0_tradeVolumeETH24h_DESC_NULLS_LAST',
  Token0TradeVolumeUsd24hAsc = 'token0_tradeVolumeUSD24h_ASC',
  Token0TradeVolumeUsd24hAscNullsFirst = 'token0_tradeVolumeUSD24h_ASC_NULLS_FIRST',
  Token0TradeVolumeUsd24hAscNullsLast = 'token0_tradeVolumeUSD24h_ASC_NULLS_LAST',
  Token0TradeVolumeUsd24hDesc = 'token0_tradeVolumeUSD24h_DESC',
  Token0TradeVolumeUsd24hDescNullsFirst = 'token0_tradeVolumeUSD24h_DESC_NULLS_FIRST',
  Token0TradeVolumeUsd24hDescNullsLast = 'token0_tradeVolumeUSD24h_DESC_NULLS_LAST',
  Token0TxCount24hAsc = 'token0_txCount24h_ASC',
  Token0TxCount24hAscNullsFirst = 'token0_txCount24h_ASC_NULLS_FIRST',
  Token0TxCount24hAscNullsLast = 'token0_txCount24h_ASC_NULLS_LAST',
  Token0TxCount24hDesc = 'token0_txCount24h_DESC',
  Token0TxCount24hDescNullsFirst = 'token0_txCount24h_DESC_NULLS_FIRST',
  Token0TxCount24hDescNullsLast = 'token0_txCount24h_DESC_NULLS_LAST',
  Token1PriceAsc = 'token1Price_ASC',
  Token1PriceAscNullsFirst = 'token1Price_ASC_NULLS_FIRST',
  Token1PriceAscNullsLast = 'token1Price_ASC_NULLS_LAST',
  Token1PriceDesc = 'token1Price_DESC',
  Token1PriceDescNullsFirst = 'token1Price_DESC_NULLS_FIRST',
  Token1PriceDescNullsLast = 'token1Price_DESC_NULLS_LAST',
  Token1CirculationSupplyAsc = 'token1_circulationSupply_ASC',
  Token1CirculationSupplyAscNullsFirst = 'token1_circulationSupply_ASC_NULLS_FIRST',
  Token1CirculationSupplyAscNullsLast = 'token1_circulationSupply_ASC_NULLS_LAST',
  Token1CirculationSupplyDesc = 'token1_circulationSupply_DESC',
  Token1CirculationSupplyDescNullsFirst = 'token1_circulationSupply_DESC_NULLS_FIRST',
  Token1CirculationSupplyDescNullsLast = 'token1_circulationSupply_DESC_NULLS_LAST',
  Token1DecimalsAsc = 'token1_decimals_ASC',
  Token1DecimalsAscNullsFirst = 'token1_decimals_ASC_NULLS_FIRST',
  Token1DecimalsAscNullsLast = 'token1_decimals_ASC_NULLS_LAST',
  Token1DecimalsDesc = 'token1_decimals_DESC',
  Token1DecimalsDescNullsFirst = 'token1_decimals_DESC_NULLS_FIRST',
  Token1DecimalsDescNullsLast = 'token1_decimals_DESC_NULLS_LAST',
  Token1FdvAsc = 'token1_fdv_ASC',
  Token1FdvAscNullsFirst = 'token1_fdv_ASC_NULLS_FIRST',
  Token1FdvAscNullsLast = 'token1_fdv_ASC_NULLS_LAST',
  Token1FdvDesc = 'token1_fdv_DESC',
  Token1FdvDescNullsFirst = 'token1_fdv_DESC_NULLS_FIRST',
  Token1FdvDescNullsLast = 'token1_fdv_DESC_NULLS_LAST',
  Token1HoldersAsc = 'token1_holders_ASC',
  Token1HoldersAscNullsFirst = 'token1_holders_ASC_NULLS_FIRST',
  Token1HoldersAscNullsLast = 'token1_holders_ASC_NULLS_LAST',
  Token1HoldersDesc = 'token1_holders_DESC',
  Token1HoldersDescNullsFirst = 'token1_holders_DESC_NULLS_FIRST',
  Token1HoldersDescNullsLast = 'token1_holders_DESC_NULLS_LAST',
  Token1IdAsc = 'token1_id_ASC',
  Token1IdAscNullsFirst = 'token1_id_ASC_NULLS_FIRST',
  Token1IdAscNullsLast = 'token1_id_ASC_NULLS_LAST',
  Token1IdDesc = 'token1_id_DESC',
  Token1IdDescNullsFirst = 'token1_id_DESC_NULLS_FIRST',
  Token1IdDescNullsLast = 'token1_id_DESC_NULLS_LAST',
  Token1LastUpdatedAtBlockTimestampAsc = 'token1_lastUpdatedAtBlockTimestamp_ASC',
  Token1LastUpdatedAtBlockTimestampAscNullsFirst = 'token1_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  Token1LastUpdatedAtBlockTimestampAscNullsLast = 'token1_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  Token1LastUpdatedAtBlockTimestampDesc = 'token1_lastUpdatedAtBlockTimestamp_DESC',
  Token1LastUpdatedAtBlockTimestampDescNullsFirst = 'token1_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  Token1LastUpdatedAtBlockTimestampDescNullsLast = 'token1_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  Token1LastUpdatedAtAsc = 'token1_lastUpdatedAt_ASC',
  Token1LastUpdatedAtAscNullsFirst = 'token1_lastUpdatedAt_ASC_NULLS_FIRST',
  Token1LastUpdatedAtAscNullsLast = 'token1_lastUpdatedAt_ASC_NULLS_LAST',
  Token1LastUpdatedAtDesc = 'token1_lastUpdatedAt_DESC',
  Token1LastUpdatedAtDescNullsFirst = 'token1_lastUpdatedAt_DESC_NULLS_FIRST',
  Token1LastUpdatedAtDescNullsLast = 'token1_lastUpdatedAt_DESC_NULLS_LAST',
  Token1MarketCapUsdAsc = 'token1_marketCapUSD_ASC',
  Token1MarketCapUsdAscNullsFirst = 'token1_marketCapUSD_ASC_NULLS_FIRST',
  Token1MarketCapUsdAscNullsLast = 'token1_marketCapUSD_ASC_NULLS_LAST',
  Token1MarketCapUsdDesc = 'token1_marketCapUSD_DESC',
  Token1MarketCapUsdDescNullsFirst = 'token1_marketCapUSD_DESC_NULLS_FIRST',
  Token1MarketCapUsdDescNullsLast = 'token1_marketCapUSD_DESC_NULLS_LAST',
  Token1NameAsc = 'token1_name_ASC',
  Token1NameAscNullsFirst = 'token1_name_ASC_NULLS_FIRST',
  Token1NameAscNullsLast = 'token1_name_ASC_NULLS_LAST',
  Token1NameDesc = 'token1_name_DESC',
  Token1NameDescNullsFirst = 'token1_name_DESC_NULLS_FIRST',
  Token1NameDescNullsLast = 'token1_name_DESC_NULLS_LAST',
  Token1Price24hDeltaAsc = 'token1_price24hDelta_ASC',
  Token1Price24hDeltaAscNullsFirst = 'token1_price24hDelta_ASC_NULLS_FIRST',
  Token1Price24hDeltaAscNullsLast = 'token1_price24hDelta_ASC_NULLS_LAST',
  Token1Price24hDeltaDesc = 'token1_price24hDelta_DESC',
  Token1Price24hDeltaDescNullsFirst = 'token1_price24hDelta_DESC_NULLS_FIRST',
  Token1Price24hDeltaDescNullsLast = 'token1_price24hDelta_DESC_NULLS_LAST',
  Token1PriceEthAsc = 'token1_priceETH_ASC',
  Token1PriceEthAscNullsFirst = 'token1_priceETH_ASC_NULLS_FIRST',
  Token1PriceEthAscNullsLast = 'token1_priceETH_ASC_NULLS_LAST',
  Token1PriceEthDesc = 'token1_priceETH_DESC',
  Token1PriceEthDescNullsFirst = 'token1_priceETH_DESC_NULLS_FIRST',
  Token1PriceEthDescNullsLast = 'token1_priceETH_DESC_NULLS_LAST',
  Token1PriceUsdAsc = 'token1_priceUSD_ASC',
  Token1PriceUsdAscNullsFirst = 'token1_priceUSD_ASC_NULLS_FIRST',
  Token1PriceUsdAscNullsLast = 'token1_priceUSD_ASC_NULLS_LAST',
  Token1PriceUsdDesc = 'token1_priceUSD_DESC',
  Token1PriceUsdDescNullsFirst = 'token1_priceUSD_DESC_NULLS_FIRST',
  Token1PriceUsdDescNullsLast = 'token1_priceUSD_DESC_NULLS_LAST',
  Token1SymbolAsc = 'token1_symbol_ASC',
  Token1SymbolAscNullsFirst = 'token1_symbol_ASC_NULLS_FIRST',
  Token1SymbolAscNullsLast = 'token1_symbol_ASC_NULLS_LAST',
  Token1SymbolDesc = 'token1_symbol_DESC',
  Token1SymbolDescNullsFirst = 'token1_symbol_DESC_NULLS_FIRST',
  Token1SymbolDescNullsLast = 'token1_symbol_DESC_NULLS_LAST',
  Token1TotalLiquidityAllPairsUsdAsc = 'token1_totalLiquidityAllPairsUSD_ASC',
  Token1TotalLiquidityAllPairsUsdAscNullsFirst = 'token1_totalLiquidityAllPairsUSD_ASC_NULLS_FIRST',
  Token1TotalLiquidityAllPairsUsdAscNullsLast = 'token1_totalLiquidityAllPairsUSD_ASC_NULLS_LAST',
  Token1TotalLiquidityAllPairsUsdDesc = 'token1_totalLiquidityAllPairsUSD_DESC',
  Token1TotalLiquidityAllPairsUsdDescNullsFirst = 'token1_totalLiquidityAllPairsUSD_DESC_NULLS_FIRST',
  Token1TotalLiquidityAllPairsUsdDescNullsLast = 'token1_totalLiquidityAllPairsUSD_DESC_NULLS_LAST',
  Token1TotalLiquidityAllPairsAsc = 'token1_totalLiquidityAllPairs_ASC',
  Token1TotalLiquidityAllPairsAscNullsFirst = 'token1_totalLiquidityAllPairs_ASC_NULLS_FIRST',
  Token1TotalLiquidityAllPairsAscNullsLast = 'token1_totalLiquidityAllPairs_ASC_NULLS_LAST',
  Token1TotalLiquidityAllPairsDesc = 'token1_totalLiquidityAllPairs_DESC',
  Token1TotalLiquidityAllPairsDescNullsFirst = 'token1_totalLiquidityAllPairs_DESC_NULLS_FIRST',
  Token1TotalLiquidityAllPairsDescNullsLast = 'token1_totalLiquidityAllPairs_DESC_NULLS_LAST',
  Token1TotalSupplyAsc = 'token1_totalSupply_ASC',
  Token1TotalSupplyAscNullsFirst = 'token1_totalSupply_ASC_NULLS_FIRST',
  Token1TotalSupplyAscNullsLast = 'token1_totalSupply_ASC_NULLS_LAST',
  Token1TotalSupplyDesc = 'token1_totalSupply_DESC',
  Token1TotalSupplyDescNullsFirst = 'token1_totalSupply_DESC_NULLS_FIRST',
  Token1TotalSupplyDescNullsLast = 'token1_totalSupply_DESC_NULLS_LAST',
  Token1TradeVolume24hAsc = 'token1_tradeVolume24h_ASC',
  Token1TradeVolume24hAscNullsFirst = 'token1_tradeVolume24h_ASC_NULLS_FIRST',
  Token1TradeVolume24hAscNullsLast = 'token1_tradeVolume24h_ASC_NULLS_LAST',
  Token1TradeVolume24hDesc = 'token1_tradeVolume24h_DESC',
  Token1TradeVolume24hDescNullsFirst = 'token1_tradeVolume24h_DESC_NULLS_FIRST',
  Token1TradeVolume24hDescNullsLast = 'token1_tradeVolume24h_DESC_NULLS_LAST',
  Token1TradeVolumeEth24hAsc = 'token1_tradeVolumeETH24h_ASC',
  Token1TradeVolumeEth24hAscNullsFirst = 'token1_tradeVolumeETH24h_ASC_NULLS_FIRST',
  Token1TradeVolumeEth24hAscNullsLast = 'token1_tradeVolumeETH24h_ASC_NULLS_LAST',
  Token1TradeVolumeEth24hDesc = 'token1_tradeVolumeETH24h_DESC',
  Token1TradeVolumeEth24hDescNullsFirst = 'token1_tradeVolumeETH24h_DESC_NULLS_FIRST',
  Token1TradeVolumeEth24hDescNullsLast = 'token1_tradeVolumeETH24h_DESC_NULLS_LAST',
  Token1TradeVolumeUsd24hAsc = 'token1_tradeVolumeUSD24h_ASC',
  Token1TradeVolumeUsd24hAscNullsFirst = 'token1_tradeVolumeUSD24h_ASC_NULLS_FIRST',
  Token1TradeVolumeUsd24hAscNullsLast = 'token1_tradeVolumeUSD24h_ASC_NULLS_LAST',
  Token1TradeVolumeUsd24hDesc = 'token1_tradeVolumeUSD24h_DESC',
  Token1TradeVolumeUsd24hDescNullsFirst = 'token1_tradeVolumeUSD24h_DESC_NULLS_FIRST',
  Token1TradeVolumeUsd24hDescNullsLast = 'token1_tradeVolumeUSD24h_DESC_NULLS_LAST',
  Token1TxCount24hAsc = 'token1_txCount24h_ASC',
  Token1TxCount24hAscNullsFirst = 'token1_txCount24h_ASC_NULLS_FIRST',
  Token1TxCount24hAscNullsLast = 'token1_txCount24h_ASC_NULLS_LAST',
  Token1TxCount24hDesc = 'token1_txCount24h_DESC',
  Token1TxCount24hDescNullsFirst = 'token1_txCount24h_DESC_NULLS_FIRST',
  Token1TxCount24hDescNullsLast = 'token1_txCount24h_DESC_NULLS_LAST',
  TradeVolume24hDeltaAsc = 'tradeVolume24hDelta_ASC',
  TradeVolume24hDeltaAscNullsFirst = 'tradeVolume24hDelta_ASC_NULLS_FIRST',
  TradeVolume24hDeltaAscNullsLast = 'tradeVolume24hDelta_ASC_NULLS_LAST',
  TradeVolume24hDeltaDesc = 'tradeVolume24hDelta_DESC',
  TradeVolume24hDeltaDescNullsFirst = 'tradeVolume24hDelta_DESC_NULLS_FIRST',
  TradeVolume24hDeltaDescNullsLast = 'tradeVolume24hDelta_DESC_NULLS_LAST',
  TradeVolume24hAsc = 'tradeVolume24h_ASC',
  TradeVolume24hAscNullsFirst = 'tradeVolume24h_ASC_NULLS_FIRST',
  TradeVolume24hAscNullsLast = 'tradeVolume24h_ASC_NULLS_LAST',
  TradeVolume24hDesc = 'tradeVolume24h_DESC',
  TradeVolume24hDescNullsFirst = 'tradeVolume24h_DESC_NULLS_FIRST',
  TradeVolume24hDescNullsLast = 'tradeVolume24h_DESC_NULLS_LAST',
  TradeVolumeEth24hAsc = 'tradeVolumeETH24h_ASC',
  TradeVolumeEth24hAscNullsFirst = 'tradeVolumeETH24h_ASC_NULLS_FIRST',
  TradeVolumeEth24hAscNullsLast = 'tradeVolumeETH24h_ASC_NULLS_LAST',
  TradeVolumeEth24hDesc = 'tradeVolumeETH24h_DESC',
  TradeVolumeEth24hDescNullsFirst = 'tradeVolumeETH24h_DESC_NULLS_FIRST',
  TradeVolumeEth24hDescNullsLast = 'tradeVolumeETH24h_DESC_NULLS_LAST',
  TradeVolumeUsd24hAsc = 'tradeVolumeUSD24h_ASC',
  TradeVolumeUsd24hAscNullsFirst = 'tradeVolumeUSD24h_ASC_NULLS_FIRST',
  TradeVolumeUsd24hAscNullsLast = 'tradeVolumeUSD24h_ASC_NULLS_LAST',
  TradeVolumeUsd24hDesc = 'tradeVolumeUSD24h_DESC',
  TradeVolumeUsd24hDescNullsFirst = 'tradeVolumeUSD24h_DESC_NULLS_FIRST',
  TradeVolumeUsd24hDescNullsLast = 'tradeVolumeUSD24h_DESC_NULLS_LAST',
  TxCount24hAsc = 'txCount24h_ASC',
  TxCount24hAscNullsFirst = 'txCount24h_ASC_NULLS_FIRST',
  TxCount24hAscNullsLast = 'txCount24h_ASC_NULLS_LAST',
  TxCount24hDesc = 'txCount24h_DESC',
  TxCount24hDescNullsFirst = 'txCount24h_DESC_NULLS_FIRST',
  TxCount24hDescNullsLast = 'txCount24h_DESC_NULLS_LAST',
}

export type PairWhereInput = {
  AND?: InputMaybe<Array<PairWhereInput>>;
  OR?: InputMaybe<Array<PairWhereInput>>;
  createdAtBlockNumber_eq?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees24hDelta_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24hDelta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24hDelta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24hDelta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees24hDelta_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fees24hDelta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24hDelta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24hDelta_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24hDelta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fees24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesETH24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesETH24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesETH24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesETH24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesETH24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  feesETH24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesETH24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesETH24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesETH24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  feesUSD24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity24hDelta_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity24hDelta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity24hDelta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity24hDelta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidity24hDelta_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidity24hDelta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity24hDelta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity24hDelta_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity24hDelta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityProviderCount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityProviderCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpDecimals_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lpDecimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpDecimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpDecimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpDecimals_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lpDecimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpDecimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpDecimals_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lpDecimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpTotalLocked_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalLocked_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lpTotalLocked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalSupply_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lpTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve0_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0?: InputMaybe<TokenWhereInput>;
  token0Id_contains?: InputMaybe<Scalars['String']['input']>;
  token0Id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token0Id_endsWith?: InputMaybe<Scalars['String']['input']>;
  token0Id_eq?: InputMaybe<Scalars['String']['input']>;
  token0Id_gt?: InputMaybe<Scalars['String']['input']>;
  token0Id_gte?: InputMaybe<Scalars['String']['input']>;
  token0Id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0Id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token0Id_lt?: InputMaybe<Scalars['String']['input']>;
  token0Id_lte?: InputMaybe<Scalars['String']['input']>;
  token0Id_not_contains?: InputMaybe<Scalars['String']['input']>;
  token0Id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token0Id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  token0Id_not_eq?: InputMaybe<Scalars['String']['input']>;
  token0Id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0Id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  token0Id_startsWith?: InputMaybe<Scalars['String']['input']>;
  token0Price_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token1?: InputMaybe<TokenWhereInput>;
  token1Id_contains?: InputMaybe<Scalars['String']['input']>;
  token1Id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token1Id_endsWith?: InputMaybe<Scalars['String']['input']>;
  token1Id_eq?: InputMaybe<Scalars['String']['input']>;
  token1Id_gt?: InputMaybe<Scalars['String']['input']>;
  token1Id_gte?: InputMaybe<Scalars['String']['input']>;
  token1Id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1Id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token1Id_lt?: InputMaybe<Scalars['String']['input']>;
  token1Id_lte?: InputMaybe<Scalars['String']['input']>;
  token1Id_not_contains?: InputMaybe<Scalars['String']['input']>;
  token1Id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token1Id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  token1Id_not_eq?: InputMaybe<Scalars['String']['input']>;
  token1Id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1Id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  token1Id_startsWith?: InputMaybe<Scalars['String']['input']>;
  token1Price_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolume24hDelta_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24hDelta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24hDelta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24hDelta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolume24hDelta_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolume24hDelta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24hDelta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24hDelta_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24hDelta_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  tradeVolume24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolume24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolume24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeETH24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeETH24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeETH24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeUSD24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount24h_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCount24h_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type PairsConnection = {
  __typename?: 'PairsConnection';
  edges: Array<PairEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  currentLiquidityPositionById?: Maybe<CurrentLiquidityPosition>;
  currentLiquidityPositions: Array<CurrentLiquidityPosition>;
  currentLiquidityPositionsConnection: CurrentLiquidityPositionsConnection;
  holderById?: Maybe<Holder>;
  holders: Array<Holder>;
  holdersConnection: HoldersConnection;
  liquidityPositionHistories: Array<LiquidityPositionHistory>;
  liquidityPositionHistoriesConnection: LiquidityPositionHistoriesConnection;
  liquidityPositionHistoryById?: Maybe<LiquidityPositionHistory>;
  pairById?: Maybe<Pair>;
  pairDayData: Array<PairDayData>;
  pairDayDataById?: Maybe<PairDayData>;
  pairDayDataConnection: PairDayDataConnection;
  pairs: Array<Pair>;
  pairsConnection: PairsConnection;
  squidStatus?: Maybe<SquidStatus>;
  tokenById?: Maybe<Token>;
  tokenDayData: Array<TokenDayData>;
  tokenDayDataById?: Maybe<TokenDayData>;
  tokenDayDataConnection: TokenDayDataConnection;
  tokens: Array<Token>;
  tokensConnection: TokensConnection;
  userById?: Maybe<User>;
  users: Array<User>;
  usersConnection: UsersConnection;
};

export type QueryCurrentLiquidityPositionByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryCurrentLiquidityPositionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CurrentLiquidityPositionOrderByInput>>;
  where?: InputMaybe<CurrentLiquidityPositionWhereInput>;
};

export type QueryCurrentLiquidityPositionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<CurrentLiquidityPositionOrderByInput>;
  where?: InputMaybe<CurrentLiquidityPositionWhereInput>;
};

export type QueryHolderByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryHoldersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HolderOrderByInput>>;
  where?: InputMaybe<HolderWhereInput>;
};

export type QueryHoldersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<HolderOrderByInput>;
  where?: InputMaybe<HolderWhereInput>;
};

export type QueryLiquidityPositionHistoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LiquidityPositionHistoryOrderByInput>>;
  where?: InputMaybe<LiquidityPositionHistoryWhereInput>;
};

export type QueryLiquidityPositionHistoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<LiquidityPositionHistoryOrderByInput>;
  where?: InputMaybe<LiquidityPositionHistoryWhereInput>;
};

export type QueryLiquidityPositionHistoryByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryPairByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryPairDayDataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PairDayDataOrderByInput>>;
  where?: InputMaybe<PairDayDataWhereInput>;
};

export type QueryPairDayDataByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryPairDayDataConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<PairDayDataOrderByInput>;
  where?: InputMaybe<PairDayDataWhereInput>;
};

export type QueryPairsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PairOrderByInput>>;
  where?: InputMaybe<PairWhereInput>;
};

export type QueryPairsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<PairOrderByInput>;
  where?: InputMaybe<PairWhereInput>;
};

export type QueryTokenByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryTokenDayDataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TokenDayDataOrderByInput>>;
  where?: InputMaybe<TokenDayDataWhereInput>;
};

export type QueryTokenDayDataByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryTokenDayDataConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<TokenDayDataOrderByInput>;
  where?: InputMaybe<TokenDayDataWhereInput>;
};

export type QueryTokensArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TokenOrderByInput>>;
  where?: InputMaybe<TokenWhereInput>;
};

export type QueryTokensConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<TokenOrderByInput>;
  where?: InputMaybe<TokenWhereInput>;
};

export type QueryUserByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<UserOrderByInput>;
  where?: InputMaybe<UserWhereInput>;
};

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']['output']>;
};

export type Token = {
  __typename?: 'Token';
  circulationSupply: Scalars['BigInt']['output'];
  decimals: Scalars['BigInt']['output'];
  fdv?: Maybe<Scalars['BigDecimal']['output']>;
  holders: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  marketCapUSD: Scalars['BigDecimal']['output'];
  name: Scalars['String']['output'];
  price24hDelta?: Maybe<Scalars['BigDecimal']['output']>;
  priceETH?: Maybe<Scalars['BigDecimal']['output']>;
  priceUSD?: Maybe<Scalars['BigDecimal']['output']>;
  symbol: Scalars['String']['output'];
  totalLiquidityAllPairs: Scalars['BigDecimal']['output'];
  totalLiquidityAllPairsUSD: Scalars['BigDecimal']['output'];
  totalSupply: Scalars['BigInt']['output'];
  tradeVolume24h: Scalars['BigDecimal']['output'];
  tradeVolumeETH24h: Scalars['BigDecimal']['output'];
  tradeVolumeUSD24h: Scalars['BigDecimal']['output'];
  txCount24h: Scalars['BigInt']['output'];
};

export type TokenDayData = {
  __typename?: 'TokenDayData';
  circulationSupply: Scalars['BigInt']['output'];
  date: Scalars['Int']['output'];
  holders: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  marketCapUSD: Scalars['BigDecimal']['output'];
  priceETH?: Maybe<Scalars['BigDecimal']['output']>;
  priceUSD?: Maybe<Scalars['BigDecimal']['output']>;
  token: Token;
  totalLiquidityAllPairs: Scalars['BigDecimal']['output'];
  totalLiquidityAllPairsUSD: Scalars['BigDecimal']['output'];
  totalSupply: Scalars['BigInt']['output'];
  tradeVolume24h: Scalars['BigDecimal']['output'];
  tradeVolumeETH24h: Scalars['BigDecimal']['output'];
  tradeVolumeUSD24h: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
};

export type TokenDayDataConnection = {
  __typename?: 'TokenDayDataConnection';
  edges: Array<TokenDayDataEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TokenDayDataEdge = {
  __typename?: 'TokenDayDataEdge';
  cursor: Scalars['String']['output'];
  node: TokenDayData;
};

export enum TokenDayDataOrderByInput {
  CirculationSupplyAsc = 'circulationSupply_ASC',
  CirculationSupplyAscNullsFirst = 'circulationSupply_ASC_NULLS_FIRST',
  CirculationSupplyAscNullsLast = 'circulationSupply_ASC_NULLS_LAST',
  CirculationSupplyDesc = 'circulationSupply_DESC',
  CirculationSupplyDescNullsFirst = 'circulationSupply_DESC_NULLS_FIRST',
  CirculationSupplyDescNullsLast = 'circulationSupply_DESC_NULLS_LAST',
  DateAsc = 'date_ASC',
  DateAscNullsFirst = 'date_ASC_NULLS_FIRST',
  DateAscNullsLast = 'date_ASC_NULLS_LAST',
  DateDesc = 'date_DESC',
  DateDescNullsFirst = 'date_DESC_NULLS_FIRST',
  DateDescNullsLast = 'date_DESC_NULLS_LAST',
  HoldersAsc = 'holders_ASC',
  HoldersAscNullsFirst = 'holders_ASC_NULLS_FIRST',
  HoldersAscNullsLast = 'holders_ASC_NULLS_LAST',
  HoldersDesc = 'holders_DESC',
  HoldersDescNullsFirst = 'holders_DESC_NULLS_FIRST',
  HoldersDescNullsLast = 'holders_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  MarketCapUsdAsc = 'marketCapUSD_ASC',
  MarketCapUsdAscNullsFirst = 'marketCapUSD_ASC_NULLS_FIRST',
  MarketCapUsdAscNullsLast = 'marketCapUSD_ASC_NULLS_LAST',
  MarketCapUsdDesc = 'marketCapUSD_DESC',
  MarketCapUsdDescNullsFirst = 'marketCapUSD_DESC_NULLS_FIRST',
  MarketCapUsdDescNullsLast = 'marketCapUSD_DESC_NULLS_LAST',
  PriceEthAsc = 'priceETH_ASC',
  PriceEthAscNullsFirst = 'priceETH_ASC_NULLS_FIRST',
  PriceEthAscNullsLast = 'priceETH_ASC_NULLS_LAST',
  PriceEthDesc = 'priceETH_DESC',
  PriceEthDescNullsFirst = 'priceETH_DESC_NULLS_FIRST',
  PriceEthDescNullsLast = 'priceETH_DESC_NULLS_LAST',
  PriceUsdAsc = 'priceUSD_ASC',
  PriceUsdAscNullsFirst = 'priceUSD_ASC_NULLS_FIRST',
  PriceUsdAscNullsLast = 'priceUSD_ASC_NULLS_LAST',
  PriceUsdDesc = 'priceUSD_DESC',
  PriceUsdDescNullsFirst = 'priceUSD_DESC_NULLS_FIRST',
  PriceUsdDescNullsLast = 'priceUSD_DESC_NULLS_LAST',
  TokenCirculationSupplyAsc = 'token_circulationSupply_ASC',
  TokenCirculationSupplyAscNullsFirst = 'token_circulationSupply_ASC_NULLS_FIRST',
  TokenCirculationSupplyAscNullsLast = 'token_circulationSupply_ASC_NULLS_LAST',
  TokenCirculationSupplyDesc = 'token_circulationSupply_DESC',
  TokenCirculationSupplyDescNullsFirst = 'token_circulationSupply_DESC_NULLS_FIRST',
  TokenCirculationSupplyDescNullsLast = 'token_circulationSupply_DESC_NULLS_LAST',
  TokenDecimalsAsc = 'token_decimals_ASC',
  TokenDecimalsAscNullsFirst = 'token_decimals_ASC_NULLS_FIRST',
  TokenDecimalsAscNullsLast = 'token_decimals_ASC_NULLS_LAST',
  TokenDecimalsDesc = 'token_decimals_DESC',
  TokenDecimalsDescNullsFirst = 'token_decimals_DESC_NULLS_FIRST',
  TokenDecimalsDescNullsLast = 'token_decimals_DESC_NULLS_LAST',
  TokenFdvAsc = 'token_fdv_ASC',
  TokenFdvAscNullsFirst = 'token_fdv_ASC_NULLS_FIRST',
  TokenFdvAscNullsLast = 'token_fdv_ASC_NULLS_LAST',
  TokenFdvDesc = 'token_fdv_DESC',
  TokenFdvDescNullsFirst = 'token_fdv_DESC_NULLS_FIRST',
  TokenFdvDescNullsLast = 'token_fdv_DESC_NULLS_LAST',
  TokenHoldersAsc = 'token_holders_ASC',
  TokenHoldersAscNullsFirst = 'token_holders_ASC_NULLS_FIRST',
  TokenHoldersAscNullsLast = 'token_holders_ASC_NULLS_LAST',
  TokenHoldersDesc = 'token_holders_DESC',
  TokenHoldersDescNullsFirst = 'token_holders_DESC_NULLS_FIRST',
  TokenHoldersDescNullsLast = 'token_holders_DESC_NULLS_LAST',
  TokenIdAsc = 'token_id_ASC',
  TokenIdAscNullsFirst = 'token_id_ASC_NULLS_FIRST',
  TokenIdAscNullsLast = 'token_id_ASC_NULLS_LAST',
  TokenIdDesc = 'token_id_DESC',
  TokenIdDescNullsFirst = 'token_id_DESC_NULLS_FIRST',
  TokenIdDescNullsLast = 'token_id_DESC_NULLS_LAST',
  TokenLastUpdatedAtBlockTimestampAsc = 'token_lastUpdatedAtBlockTimestamp_ASC',
  TokenLastUpdatedAtBlockTimestampAscNullsFirst = 'token_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  TokenLastUpdatedAtBlockTimestampAscNullsLast = 'token_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  TokenLastUpdatedAtBlockTimestampDesc = 'token_lastUpdatedAtBlockTimestamp_DESC',
  TokenLastUpdatedAtBlockTimestampDescNullsFirst = 'token_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  TokenLastUpdatedAtBlockTimestampDescNullsLast = 'token_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  TokenLastUpdatedAtAsc = 'token_lastUpdatedAt_ASC',
  TokenLastUpdatedAtAscNullsFirst = 'token_lastUpdatedAt_ASC_NULLS_FIRST',
  TokenLastUpdatedAtAscNullsLast = 'token_lastUpdatedAt_ASC_NULLS_LAST',
  TokenLastUpdatedAtDesc = 'token_lastUpdatedAt_DESC',
  TokenLastUpdatedAtDescNullsFirst = 'token_lastUpdatedAt_DESC_NULLS_FIRST',
  TokenLastUpdatedAtDescNullsLast = 'token_lastUpdatedAt_DESC_NULLS_LAST',
  TokenMarketCapUsdAsc = 'token_marketCapUSD_ASC',
  TokenMarketCapUsdAscNullsFirst = 'token_marketCapUSD_ASC_NULLS_FIRST',
  TokenMarketCapUsdAscNullsLast = 'token_marketCapUSD_ASC_NULLS_LAST',
  TokenMarketCapUsdDesc = 'token_marketCapUSD_DESC',
  TokenMarketCapUsdDescNullsFirst = 'token_marketCapUSD_DESC_NULLS_FIRST',
  TokenMarketCapUsdDescNullsLast = 'token_marketCapUSD_DESC_NULLS_LAST',
  TokenNameAsc = 'token_name_ASC',
  TokenNameAscNullsFirst = 'token_name_ASC_NULLS_FIRST',
  TokenNameAscNullsLast = 'token_name_ASC_NULLS_LAST',
  TokenNameDesc = 'token_name_DESC',
  TokenNameDescNullsFirst = 'token_name_DESC_NULLS_FIRST',
  TokenNameDescNullsLast = 'token_name_DESC_NULLS_LAST',
  TokenPrice24hDeltaAsc = 'token_price24hDelta_ASC',
  TokenPrice24hDeltaAscNullsFirst = 'token_price24hDelta_ASC_NULLS_FIRST',
  TokenPrice24hDeltaAscNullsLast = 'token_price24hDelta_ASC_NULLS_LAST',
  TokenPrice24hDeltaDesc = 'token_price24hDelta_DESC',
  TokenPrice24hDeltaDescNullsFirst = 'token_price24hDelta_DESC_NULLS_FIRST',
  TokenPrice24hDeltaDescNullsLast = 'token_price24hDelta_DESC_NULLS_LAST',
  TokenPriceEthAsc = 'token_priceETH_ASC',
  TokenPriceEthAscNullsFirst = 'token_priceETH_ASC_NULLS_FIRST',
  TokenPriceEthAscNullsLast = 'token_priceETH_ASC_NULLS_LAST',
  TokenPriceEthDesc = 'token_priceETH_DESC',
  TokenPriceEthDescNullsFirst = 'token_priceETH_DESC_NULLS_FIRST',
  TokenPriceEthDescNullsLast = 'token_priceETH_DESC_NULLS_LAST',
  TokenPriceUsdAsc = 'token_priceUSD_ASC',
  TokenPriceUsdAscNullsFirst = 'token_priceUSD_ASC_NULLS_FIRST',
  TokenPriceUsdAscNullsLast = 'token_priceUSD_ASC_NULLS_LAST',
  TokenPriceUsdDesc = 'token_priceUSD_DESC',
  TokenPriceUsdDescNullsFirst = 'token_priceUSD_DESC_NULLS_FIRST',
  TokenPriceUsdDescNullsLast = 'token_priceUSD_DESC_NULLS_LAST',
  TokenSymbolAsc = 'token_symbol_ASC',
  TokenSymbolAscNullsFirst = 'token_symbol_ASC_NULLS_FIRST',
  TokenSymbolAscNullsLast = 'token_symbol_ASC_NULLS_LAST',
  TokenSymbolDesc = 'token_symbol_DESC',
  TokenSymbolDescNullsFirst = 'token_symbol_DESC_NULLS_FIRST',
  TokenSymbolDescNullsLast = 'token_symbol_DESC_NULLS_LAST',
  TokenTotalLiquidityAllPairsUsdAsc = 'token_totalLiquidityAllPairsUSD_ASC',
  TokenTotalLiquidityAllPairsUsdAscNullsFirst = 'token_totalLiquidityAllPairsUSD_ASC_NULLS_FIRST',
  TokenTotalLiquidityAllPairsUsdAscNullsLast = 'token_totalLiquidityAllPairsUSD_ASC_NULLS_LAST',
  TokenTotalLiquidityAllPairsUsdDesc = 'token_totalLiquidityAllPairsUSD_DESC',
  TokenTotalLiquidityAllPairsUsdDescNullsFirst = 'token_totalLiquidityAllPairsUSD_DESC_NULLS_FIRST',
  TokenTotalLiquidityAllPairsUsdDescNullsLast = 'token_totalLiquidityAllPairsUSD_DESC_NULLS_LAST',
  TokenTotalLiquidityAllPairsAsc = 'token_totalLiquidityAllPairs_ASC',
  TokenTotalLiquidityAllPairsAscNullsFirst = 'token_totalLiquidityAllPairs_ASC_NULLS_FIRST',
  TokenTotalLiquidityAllPairsAscNullsLast = 'token_totalLiquidityAllPairs_ASC_NULLS_LAST',
  TokenTotalLiquidityAllPairsDesc = 'token_totalLiquidityAllPairs_DESC',
  TokenTotalLiquidityAllPairsDescNullsFirst = 'token_totalLiquidityAllPairs_DESC_NULLS_FIRST',
  TokenTotalLiquidityAllPairsDescNullsLast = 'token_totalLiquidityAllPairs_DESC_NULLS_LAST',
  TokenTotalSupplyAsc = 'token_totalSupply_ASC',
  TokenTotalSupplyAscNullsFirst = 'token_totalSupply_ASC_NULLS_FIRST',
  TokenTotalSupplyAscNullsLast = 'token_totalSupply_ASC_NULLS_LAST',
  TokenTotalSupplyDesc = 'token_totalSupply_DESC',
  TokenTotalSupplyDescNullsFirst = 'token_totalSupply_DESC_NULLS_FIRST',
  TokenTotalSupplyDescNullsLast = 'token_totalSupply_DESC_NULLS_LAST',
  TokenTradeVolume24hAsc = 'token_tradeVolume24h_ASC',
  TokenTradeVolume24hAscNullsFirst = 'token_tradeVolume24h_ASC_NULLS_FIRST',
  TokenTradeVolume24hAscNullsLast = 'token_tradeVolume24h_ASC_NULLS_LAST',
  TokenTradeVolume24hDesc = 'token_tradeVolume24h_DESC',
  TokenTradeVolume24hDescNullsFirst = 'token_tradeVolume24h_DESC_NULLS_FIRST',
  TokenTradeVolume24hDescNullsLast = 'token_tradeVolume24h_DESC_NULLS_LAST',
  TokenTradeVolumeEth24hAsc = 'token_tradeVolumeETH24h_ASC',
  TokenTradeVolumeEth24hAscNullsFirst = 'token_tradeVolumeETH24h_ASC_NULLS_FIRST',
  TokenTradeVolumeEth24hAscNullsLast = 'token_tradeVolumeETH24h_ASC_NULLS_LAST',
  TokenTradeVolumeEth24hDesc = 'token_tradeVolumeETH24h_DESC',
  TokenTradeVolumeEth24hDescNullsFirst = 'token_tradeVolumeETH24h_DESC_NULLS_FIRST',
  TokenTradeVolumeEth24hDescNullsLast = 'token_tradeVolumeETH24h_DESC_NULLS_LAST',
  TokenTradeVolumeUsd24hAsc = 'token_tradeVolumeUSD24h_ASC',
  TokenTradeVolumeUsd24hAscNullsFirst = 'token_tradeVolumeUSD24h_ASC_NULLS_FIRST',
  TokenTradeVolumeUsd24hAscNullsLast = 'token_tradeVolumeUSD24h_ASC_NULLS_LAST',
  TokenTradeVolumeUsd24hDesc = 'token_tradeVolumeUSD24h_DESC',
  TokenTradeVolumeUsd24hDescNullsFirst = 'token_tradeVolumeUSD24h_DESC_NULLS_FIRST',
  TokenTradeVolumeUsd24hDescNullsLast = 'token_tradeVolumeUSD24h_DESC_NULLS_LAST',
  TokenTxCount24hAsc = 'token_txCount24h_ASC',
  TokenTxCount24hAscNullsFirst = 'token_txCount24h_ASC_NULLS_FIRST',
  TokenTxCount24hAscNullsLast = 'token_txCount24h_ASC_NULLS_LAST',
  TokenTxCount24hDesc = 'token_txCount24h_DESC',
  TokenTxCount24hDescNullsFirst = 'token_txCount24h_DESC_NULLS_FIRST',
  TokenTxCount24hDescNullsLast = 'token_txCount24h_DESC_NULLS_LAST',
  TotalLiquidityAllPairsUsdAsc = 'totalLiquidityAllPairsUSD_ASC',
  TotalLiquidityAllPairsUsdAscNullsFirst = 'totalLiquidityAllPairsUSD_ASC_NULLS_FIRST',
  TotalLiquidityAllPairsUsdAscNullsLast = 'totalLiquidityAllPairsUSD_ASC_NULLS_LAST',
  TotalLiquidityAllPairsUsdDesc = 'totalLiquidityAllPairsUSD_DESC',
  TotalLiquidityAllPairsUsdDescNullsFirst = 'totalLiquidityAllPairsUSD_DESC_NULLS_FIRST',
  TotalLiquidityAllPairsUsdDescNullsLast = 'totalLiquidityAllPairsUSD_DESC_NULLS_LAST',
  TotalLiquidityAllPairsAsc = 'totalLiquidityAllPairs_ASC',
  TotalLiquidityAllPairsAscNullsFirst = 'totalLiquidityAllPairs_ASC_NULLS_FIRST',
  TotalLiquidityAllPairsAscNullsLast = 'totalLiquidityAllPairs_ASC_NULLS_LAST',
  TotalLiquidityAllPairsDesc = 'totalLiquidityAllPairs_DESC',
  TotalLiquidityAllPairsDescNullsFirst = 'totalLiquidityAllPairs_DESC_NULLS_FIRST',
  TotalLiquidityAllPairsDescNullsLast = 'totalLiquidityAllPairs_DESC_NULLS_LAST',
  TotalSupplyAsc = 'totalSupply_ASC',
  TotalSupplyAscNullsFirst = 'totalSupply_ASC_NULLS_FIRST',
  TotalSupplyAscNullsLast = 'totalSupply_ASC_NULLS_LAST',
  TotalSupplyDesc = 'totalSupply_DESC',
  TotalSupplyDescNullsFirst = 'totalSupply_DESC_NULLS_FIRST',
  TotalSupplyDescNullsLast = 'totalSupply_DESC_NULLS_LAST',
  TradeVolume24hAsc = 'tradeVolume24h_ASC',
  TradeVolume24hAscNullsFirst = 'tradeVolume24h_ASC_NULLS_FIRST',
  TradeVolume24hAscNullsLast = 'tradeVolume24h_ASC_NULLS_LAST',
  TradeVolume24hDesc = 'tradeVolume24h_DESC',
  TradeVolume24hDescNullsFirst = 'tradeVolume24h_DESC_NULLS_FIRST',
  TradeVolume24hDescNullsLast = 'tradeVolume24h_DESC_NULLS_LAST',
  TradeVolumeEth24hAsc = 'tradeVolumeETH24h_ASC',
  TradeVolumeEth24hAscNullsFirst = 'tradeVolumeETH24h_ASC_NULLS_FIRST',
  TradeVolumeEth24hAscNullsLast = 'tradeVolumeETH24h_ASC_NULLS_LAST',
  TradeVolumeEth24hDesc = 'tradeVolumeETH24h_DESC',
  TradeVolumeEth24hDescNullsFirst = 'tradeVolumeETH24h_DESC_NULLS_FIRST',
  TradeVolumeEth24hDescNullsLast = 'tradeVolumeETH24h_DESC_NULLS_LAST',
  TradeVolumeUsd24hAsc = 'tradeVolumeUSD24h_ASC',
  TradeVolumeUsd24hAscNullsFirst = 'tradeVolumeUSD24h_ASC_NULLS_FIRST',
  TradeVolumeUsd24hAscNullsLast = 'tradeVolumeUSD24h_ASC_NULLS_LAST',
  TradeVolumeUsd24hDesc = 'tradeVolumeUSD24h_DESC',
  TradeVolumeUsd24hDescNullsFirst = 'tradeVolumeUSD24h_DESC_NULLS_FIRST',
  TradeVolumeUsd24hDescNullsLast = 'tradeVolumeUSD24h_DESC_NULLS_LAST',
  TxCountAsc = 'txCount_ASC',
  TxCountAscNullsFirst = 'txCount_ASC_NULLS_FIRST',
  TxCountAscNullsLast = 'txCount_ASC_NULLS_LAST',
  TxCountDesc = 'txCount_DESC',
  TxCountDescNullsFirst = 'txCount_DESC_NULLS_FIRST',
  TxCountDescNullsLast = 'txCount_DESC_NULLS_LAST',
}

export type TokenDayDataWhereInput = {
  AND?: InputMaybe<Array<TokenDayDataWhereInput>>;
  OR?: InputMaybe<Array<TokenDayDataWhereInput>>;
  circulationSupply_eq?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  circulationSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  circulationSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  date_eq?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not_eq?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  holders_eq?: InputMaybe<Scalars['BigInt']['input']>;
  holders_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holders_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holders_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holders_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  holders_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holders_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holders_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  holders_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketCapUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  marketCapUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  marketCapUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceETH_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceETH_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  priceETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token?: InputMaybe<TokenWhereInput>;
  token_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidityAllPairsUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  totalLiquidityAllPairsUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidityAllPairsUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  totalLiquidityAllPairs_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityAllPairs_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidityAllPairs_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  totalSupply_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradeVolume24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolume24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolume24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeETH24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeETH24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeETH24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeUSD24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type TokenEdge = {
  __typename?: 'TokenEdge';
  cursor: Scalars['String']['output'];
  node: Token;
};

export enum TokenOrderByInput {
  CirculationSupplyAsc = 'circulationSupply_ASC',
  CirculationSupplyAscNullsFirst = 'circulationSupply_ASC_NULLS_FIRST',
  CirculationSupplyAscNullsLast = 'circulationSupply_ASC_NULLS_LAST',
  CirculationSupplyDesc = 'circulationSupply_DESC',
  CirculationSupplyDescNullsFirst = 'circulationSupply_DESC_NULLS_FIRST',
  CirculationSupplyDescNullsLast = 'circulationSupply_DESC_NULLS_LAST',
  DecimalsAsc = 'decimals_ASC',
  DecimalsAscNullsFirst = 'decimals_ASC_NULLS_FIRST',
  DecimalsAscNullsLast = 'decimals_ASC_NULLS_LAST',
  DecimalsDesc = 'decimals_DESC',
  DecimalsDescNullsFirst = 'decimals_DESC_NULLS_FIRST',
  DecimalsDescNullsLast = 'decimals_DESC_NULLS_LAST',
  FdvAsc = 'fdv_ASC',
  FdvAscNullsFirst = 'fdv_ASC_NULLS_FIRST',
  FdvAscNullsLast = 'fdv_ASC_NULLS_LAST',
  FdvDesc = 'fdv_DESC',
  FdvDescNullsFirst = 'fdv_DESC_NULLS_FIRST',
  FdvDescNullsLast = 'fdv_DESC_NULLS_LAST',
  HoldersAsc = 'holders_ASC',
  HoldersAscNullsFirst = 'holders_ASC_NULLS_FIRST',
  HoldersAscNullsLast = 'holders_ASC_NULLS_LAST',
  HoldersDesc = 'holders_DESC',
  HoldersDescNullsFirst = 'holders_DESC_NULLS_FIRST',
  HoldersDescNullsLast = 'holders_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  MarketCapUsdAsc = 'marketCapUSD_ASC',
  MarketCapUsdAscNullsFirst = 'marketCapUSD_ASC_NULLS_FIRST',
  MarketCapUsdAscNullsLast = 'marketCapUSD_ASC_NULLS_LAST',
  MarketCapUsdDesc = 'marketCapUSD_DESC',
  MarketCapUsdDescNullsFirst = 'marketCapUSD_DESC_NULLS_FIRST',
  MarketCapUsdDescNullsLast = 'marketCapUSD_DESC_NULLS_LAST',
  NameAsc = 'name_ASC',
  NameAscNullsFirst = 'name_ASC_NULLS_FIRST',
  NameAscNullsLast = 'name_ASC_NULLS_LAST',
  NameDesc = 'name_DESC',
  NameDescNullsFirst = 'name_DESC_NULLS_FIRST',
  NameDescNullsLast = 'name_DESC_NULLS_LAST',
  Price24hDeltaAsc = 'price24hDelta_ASC',
  Price24hDeltaAscNullsFirst = 'price24hDelta_ASC_NULLS_FIRST',
  Price24hDeltaAscNullsLast = 'price24hDelta_ASC_NULLS_LAST',
  Price24hDeltaDesc = 'price24hDelta_DESC',
  Price24hDeltaDescNullsFirst = 'price24hDelta_DESC_NULLS_FIRST',
  Price24hDeltaDescNullsLast = 'price24hDelta_DESC_NULLS_LAST',
  PriceEthAsc = 'priceETH_ASC',
  PriceEthAscNullsFirst = 'priceETH_ASC_NULLS_FIRST',
  PriceEthAscNullsLast = 'priceETH_ASC_NULLS_LAST',
  PriceEthDesc = 'priceETH_DESC',
  PriceEthDescNullsFirst = 'priceETH_DESC_NULLS_FIRST',
  PriceEthDescNullsLast = 'priceETH_DESC_NULLS_LAST',
  PriceUsdAsc = 'priceUSD_ASC',
  PriceUsdAscNullsFirst = 'priceUSD_ASC_NULLS_FIRST',
  PriceUsdAscNullsLast = 'priceUSD_ASC_NULLS_LAST',
  PriceUsdDesc = 'priceUSD_DESC',
  PriceUsdDescNullsFirst = 'priceUSD_DESC_NULLS_FIRST',
  PriceUsdDescNullsLast = 'priceUSD_DESC_NULLS_LAST',
  SymbolAsc = 'symbol_ASC',
  SymbolAscNullsFirst = 'symbol_ASC_NULLS_FIRST',
  SymbolAscNullsLast = 'symbol_ASC_NULLS_LAST',
  SymbolDesc = 'symbol_DESC',
  SymbolDescNullsFirst = 'symbol_DESC_NULLS_FIRST',
  SymbolDescNullsLast = 'symbol_DESC_NULLS_LAST',
  TotalLiquidityAllPairsUsdAsc = 'totalLiquidityAllPairsUSD_ASC',
  TotalLiquidityAllPairsUsdAscNullsFirst = 'totalLiquidityAllPairsUSD_ASC_NULLS_FIRST',
  TotalLiquidityAllPairsUsdAscNullsLast = 'totalLiquidityAllPairsUSD_ASC_NULLS_LAST',
  TotalLiquidityAllPairsUsdDesc = 'totalLiquidityAllPairsUSD_DESC',
  TotalLiquidityAllPairsUsdDescNullsFirst = 'totalLiquidityAllPairsUSD_DESC_NULLS_FIRST',
  TotalLiquidityAllPairsUsdDescNullsLast = 'totalLiquidityAllPairsUSD_DESC_NULLS_LAST',
  TotalLiquidityAllPairsAsc = 'totalLiquidityAllPairs_ASC',
  TotalLiquidityAllPairsAscNullsFirst = 'totalLiquidityAllPairs_ASC_NULLS_FIRST',
  TotalLiquidityAllPairsAscNullsLast = 'totalLiquidityAllPairs_ASC_NULLS_LAST',
  TotalLiquidityAllPairsDesc = 'totalLiquidityAllPairs_DESC',
  TotalLiquidityAllPairsDescNullsFirst = 'totalLiquidityAllPairs_DESC_NULLS_FIRST',
  TotalLiquidityAllPairsDescNullsLast = 'totalLiquidityAllPairs_DESC_NULLS_LAST',
  TotalSupplyAsc = 'totalSupply_ASC',
  TotalSupplyAscNullsFirst = 'totalSupply_ASC_NULLS_FIRST',
  TotalSupplyAscNullsLast = 'totalSupply_ASC_NULLS_LAST',
  TotalSupplyDesc = 'totalSupply_DESC',
  TotalSupplyDescNullsFirst = 'totalSupply_DESC_NULLS_FIRST',
  TotalSupplyDescNullsLast = 'totalSupply_DESC_NULLS_LAST',
  TradeVolume24hAsc = 'tradeVolume24h_ASC',
  TradeVolume24hAscNullsFirst = 'tradeVolume24h_ASC_NULLS_FIRST',
  TradeVolume24hAscNullsLast = 'tradeVolume24h_ASC_NULLS_LAST',
  TradeVolume24hDesc = 'tradeVolume24h_DESC',
  TradeVolume24hDescNullsFirst = 'tradeVolume24h_DESC_NULLS_FIRST',
  TradeVolume24hDescNullsLast = 'tradeVolume24h_DESC_NULLS_LAST',
  TradeVolumeEth24hAsc = 'tradeVolumeETH24h_ASC',
  TradeVolumeEth24hAscNullsFirst = 'tradeVolumeETH24h_ASC_NULLS_FIRST',
  TradeVolumeEth24hAscNullsLast = 'tradeVolumeETH24h_ASC_NULLS_LAST',
  TradeVolumeEth24hDesc = 'tradeVolumeETH24h_DESC',
  TradeVolumeEth24hDescNullsFirst = 'tradeVolumeETH24h_DESC_NULLS_FIRST',
  TradeVolumeEth24hDescNullsLast = 'tradeVolumeETH24h_DESC_NULLS_LAST',
  TradeVolumeUsd24hAsc = 'tradeVolumeUSD24h_ASC',
  TradeVolumeUsd24hAscNullsFirst = 'tradeVolumeUSD24h_ASC_NULLS_FIRST',
  TradeVolumeUsd24hAscNullsLast = 'tradeVolumeUSD24h_ASC_NULLS_LAST',
  TradeVolumeUsd24hDesc = 'tradeVolumeUSD24h_DESC',
  TradeVolumeUsd24hDescNullsFirst = 'tradeVolumeUSD24h_DESC_NULLS_FIRST',
  TradeVolumeUsd24hDescNullsLast = 'tradeVolumeUSD24h_DESC_NULLS_LAST',
  TxCount24hAsc = 'txCount24h_ASC',
  TxCount24hAscNullsFirst = 'txCount24h_ASC_NULLS_FIRST',
  TxCount24hAscNullsLast = 'txCount24h_ASC_NULLS_LAST',
  TxCount24hDesc = 'txCount24h_DESC',
  TxCount24hDescNullsFirst = 'txCount24h_DESC_NULLS_FIRST',
  TxCount24hDescNullsLast = 'txCount24h_DESC_NULLS_LAST',
}

export type TokenWhereInput = {
  AND?: InputMaybe<Array<TokenWhereInput>>;
  OR?: InputMaybe<Array<TokenWhereInput>>;
  circulationSupply_eq?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  circulationSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  circulationSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_eq?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fdv_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fdv_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fdv_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  holders_eq?: InputMaybe<Scalars['BigInt']['input']>;
  holders_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holders_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holders_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holders_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  holders_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holders_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holders_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  holders_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketCapUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  marketCapUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  marketCapUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  name_endsWith?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  name_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  name_startsWith?: InputMaybe<Scalars['String']['input']>;
  price24hDelta_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price24hDelta_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  price24hDelta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceETH_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceETH_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  priceETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  symbol_endsWith?: InputMaybe<Scalars['String']['input']>;
  symbol_eq?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  symbol_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  symbol_not_eq?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  symbol_startsWith?: InputMaybe<Scalars['String']['input']>;
  totalLiquidityAllPairsUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  totalLiquidityAllPairsUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidityAllPairsUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  totalLiquidityAllPairs_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityAllPairs_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidityAllPairs_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  totalSupply_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradeVolume24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolume24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolume24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeETH24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeETH24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeETH24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeUSD24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount24h_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCount24h_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type TokensConnection = {
  __typename?: 'TokensConnection';
  edges: Array<TokenEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  liquidityPositions: Array<CurrentLiquidityPosition>;
  swapsAmount: Scalars['BigInt']['output'];
  usdSwapped: Scalars['BigDecimal']['output'];
};

export type UserLiquidityPositionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CurrentLiquidityPositionOrderByInput>>;
  where?: InputMaybe<CurrentLiquidityPositionWhereInput>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  SwapsAmountAsc = 'swapsAmount_ASC',
  SwapsAmountAscNullsFirst = 'swapsAmount_ASC_NULLS_FIRST',
  SwapsAmountAscNullsLast = 'swapsAmount_ASC_NULLS_LAST',
  SwapsAmountDesc = 'swapsAmount_DESC',
  SwapsAmountDescNullsFirst = 'swapsAmount_DESC_NULLS_FIRST',
  SwapsAmountDescNullsLast = 'swapsAmount_DESC_NULLS_LAST',
  UsdSwappedAsc = 'usdSwapped_ASC',
  UsdSwappedAscNullsFirst = 'usdSwapped_ASC_NULLS_FIRST',
  UsdSwappedAscNullsLast = 'usdSwapped_ASC_NULLS_LAST',
  UsdSwappedDesc = 'usdSwapped_DESC',
  UsdSwappedDescNullsFirst = 'usdSwapped_DESC_NULLS_FIRST',
  UsdSwappedDescNullsLast = 'usdSwapped_DESC_NULLS_LAST',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityPositions_every?: InputMaybe<CurrentLiquidityPositionWhereInput>;
  liquidityPositions_none?: InputMaybe<CurrentLiquidityPositionWhereInput>;
  liquidityPositions_some?: InputMaybe<CurrentLiquidityPositionWhereInput>;
  swapsAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapsAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapsAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapsAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapsAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  swapsAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapsAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapsAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapsAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  usdSwapped_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdSwapped_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  usdSwapped_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PairByIdQueryVariables = Exact<{
  pairByIdId: Scalars['String']['input'];
}>;

export type PairByIdQuery = {
  __typename?: 'Query';
  pairById?: {
    __typename?: 'Pair';
    id: string;
    reserve0: any;
    reserve1: any;
    liquidityUSD?: any | null;
    liquidity24hDelta?: any | null;
    lpTotalSupply: any;
    lpTotalLocked: any;
    token0Price: any;
    token1Price: any;
    txCount24h: any;
    tradeVolume24h?: any | null;
    tradeVolumeUSD24h?: any | null;
    tradeVolumeETH24h?: any | null;
    tradeVolume24hDelta?: any | null;
    fees24h?: any | null;
    feesUSD24h?: any | null;
    feesETH24h?: any | null;
    fees24hDelta?: any | null;
    createdAtTimestamp: any;
    createdAtBlockNumber: any;
    liquidityProviderCount: any;
    lastUpdatedAt: any;
    token0: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      priceUSD?: any | null;
      priceETH?: any | null;
      totalSupply: any;
      circulationSupply: any;
      marketCapUSD: any;
      tradeVolume24h: any;
      tradeVolumeUSD24h: any;
      tradeVolumeETH24h: any;
      txCount24h: any;
      totalLiquidityAllPairs: any;
      totalLiquidityAllPairsUSD: any;
      holders: any;
      lastUpdatedAt: any;
    };
    token1: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      priceUSD?: any | null;
      priceETH?: any | null;
      totalSupply: any;
      circulationSupply: any;
      marketCapUSD: any;
      tradeVolume24h: any;
      tradeVolumeUSD24h: any;
      tradeVolumeETH24h: any;
      txCount24h: any;
      totalLiquidityAllPairs: any;
      totalLiquidityAllPairsUSD: any;
      holders: any;
      lastUpdatedAt: any;
    };
  } | null;
};

export type PairsQueryVariables = Exact<{
  where?: InputMaybe<PairWhereInput>;
  orderBy?: InputMaybe<Array<PairOrderByInput> | PairOrderByInput>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type PairsQuery = {
  __typename?: 'Query';
  pairs: Array<{
    __typename?: 'Pair';
    id: string;
    reserve0: any;
    reserve1: any;
    liquidityUSD?: any | null;
    liquidity24hDelta?: any | null;
    lpTotalSupply: any;
    lpTotalLocked: any;
    token0Price: any;
    token1Price: any;
    txCount24h: any;
    tradeVolume24h?: any | null;
    tradeVolumeUSD24h?: any | null;
    tradeVolumeETH24h?: any | null;
    tradeVolume24hDelta?: any | null;
    fees24h?: any | null;
    feesUSD24h?: any | null;
    feesETH24h?: any | null;
    fees24hDelta?: any | null;
    createdAtTimestamp: any;
    createdAtBlockNumber: any;
    liquidityProviderCount: any;
    lastUpdatedAt: any;
    token0: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      priceUSD?: any | null;
      priceETH?: any | null;
      totalSupply: any;
      circulationSupply: any;
      marketCapUSD: any;
      tradeVolume24h: any;
      tradeVolumeUSD24h: any;
      tradeVolumeETH24h: any;
      txCount24h: any;
      totalLiquidityAllPairs: any;
      totalLiquidityAllPairsUSD: any;
      holders: any;
      lastUpdatedAt: any;
    };
    token1: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      priceUSD?: any | null;
      priceETH?: any | null;
      totalSupply: any;
      circulationSupply: any;
      marketCapUSD: any;
      tradeVolume24h: any;
      tradeVolumeUSD24h: any;
      tradeVolumeETH24h: any;
      txCount24h: any;
      totalLiquidityAllPairs: any;
      totalLiquidityAllPairsUSD: any;
      holders: any;
      lastUpdatedAt: any;
    };
  }>;
};

export type CurrentLiquidityPositionsQueryVariables = Exact<{
  where?: InputMaybe<CurrentLiquidityPositionWhereInput>;
  orderBy?: InputMaybe<
    | Array<CurrentLiquidityPositionOrderByInput>
    | CurrentLiquidityPositionOrderByInput
  >;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type CurrentLiquidityPositionsQuery = {
  __typename?: 'Query';
  currentLiquidityPositions: Array<{
    __typename?: 'CurrentLiquidityPosition';
    id: string;
    liquidityTokenBalance: any;
    lastUpdatedAt: any;
    user: { __typename?: 'User'; usdSwapped: any; id: string };
    pair: {
      __typename?: 'Pair';
      id: string;
      reserve0: any;
      reserve1: any;
      liquidityUSD?: any | null;
      liquidity24hDelta?: any | null;
      lpTotalSupply: any;
      lpTotalLocked: any;
      token0Price: any;
      token1Price: any;
      txCount24h: any;
      tradeVolume24h?: any | null;
      tradeVolumeUSD24h?: any | null;
      tradeVolumeETH24h?: any | null;
      tradeVolume24hDelta?: any | null;
      fees24h?: any | null;
      feesUSD24h?: any | null;
      feesETH24h?: any | null;
      fees24hDelta?: any | null;
      createdAtTimestamp: any;
      createdAtBlockNumber: any;
      liquidityProviderCount: any;
      lastUpdatedAt: any;
      token0: {
        __typename?: 'Token';
        id: string;
        symbol: string;
        name: string;
        decimals: any;
        priceUSD?: any | null;
        priceETH?: any | null;
        totalSupply: any;
        circulationSupply: any;
        marketCapUSD: any;
        tradeVolume24h: any;
        tradeVolumeUSD24h: any;
        tradeVolumeETH24h: any;
        txCount24h: any;
        totalLiquidityAllPairs: any;
        totalLiquidityAllPairsUSD: any;
        holders: any;
        lastUpdatedAt: any;
      };
      token1: {
        __typename?: 'Token';
        id: string;
        symbol: string;
        name: string;
        decimals: any;
        priceUSD?: any | null;
        priceETH?: any | null;
        totalSupply: any;
        circulationSupply: any;
        marketCapUSD: any;
        tradeVolume24h: any;
        tradeVolumeUSD24h: any;
        tradeVolumeETH24h: any;
        txCount24h: any;
        totalLiquidityAllPairs: any;
        totalLiquidityAllPairsUSD: any;
        holders: any;
        lastUpdatedAt: any;
      };
    };
  }>;
};

export const PairByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PairById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pairByIdId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pairById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pairByIdId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'token0' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'symbol' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'decimals' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceETH' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'circulationSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'marketCapUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolume24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeUSD24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeETH24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txCount24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalLiquidityAllPairs' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'totalLiquidityAllPairsUSD',
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'holders' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastUpdatedAt' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'token1' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'symbol' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'decimals' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceETH' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'circulationSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'marketCapUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolume24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeUSD24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeETH24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txCount24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalLiquidityAllPairs' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'totalLiquidityAllPairsUSD',
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'holders' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastUpdatedAt' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve0' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve1' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidityUSD' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidity24hDelta' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lpTotalSupply' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lpTotalLocked' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'token0Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token1Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'txCount24h' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolume24h' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolumeUSD24h' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolumeETH24h' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolume24hDelta' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'fees24h' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesUSD24h' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesETH24h' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fees24hDelta' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'createdAtTimestamp' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'createdAtBlockNumber' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidityProviderCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lastUpdatedAt' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PairByIdQuery, PairByIdQueryVariables>;
export const PairsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Pairs' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'PairWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'PairOrderByInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'offset' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pairs' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'offset' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'token0' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'symbol' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'decimals' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceETH' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'circulationSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'marketCapUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolume24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeUSD24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeETH24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txCount24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalLiquidityAllPairs' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'totalLiquidityAllPairsUSD',
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'holders' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastUpdatedAt' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'token1' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'symbol' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'decimals' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceETH' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'circulationSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'marketCapUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolume24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeUSD24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeETH24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txCount24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalLiquidityAllPairs' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'totalLiquidityAllPairsUSD',
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'holders' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastUpdatedAt' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve0' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve1' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidityUSD' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidity24hDelta' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lpTotalSupply' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lpTotalLocked' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'token0Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token1Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'txCount24h' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolume24h' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolumeUSD24h' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolumeETH24h' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolume24hDelta' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'fees24h' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesUSD24h' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesETH24h' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fees24hDelta' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'createdAtTimestamp' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'createdAtBlockNumber' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidityProviderCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lastUpdatedAt' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PairsQuery, PairsQueryVariables>;
export const CurrentLiquidityPositionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CurrentLiquidityPositions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CurrentLiquidityPositionWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'CurrentLiquidityPositionOrderByInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'offset' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currentLiquidityPositions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'offset' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'usdSwapped' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pair' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'token0' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'symbol' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'decimals' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'priceUSD' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'priceETH' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'totalSupply' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'circulationSupply',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'marketCapUSD' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tradeVolume24h' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tradeVolumeUSD24h',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tradeVolumeETH24h',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'txCount24h' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'totalLiquidityAllPairs',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'totalLiquidityAllPairsUSD',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'holders' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lastUpdatedAt' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'token1' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'symbol' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'decimals' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'priceUSD' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'priceETH' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'totalSupply' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'circulationSupply',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'marketCapUSD' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tradeVolume24h' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tradeVolumeUSD24h',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tradeVolumeETH24h',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'txCount24h' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'totalLiquidityAllPairs',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'totalLiquidityAllPairsUSD',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'holders' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lastUpdatedAt' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reserve0' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reserve1' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'liquidityUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'liquidity24hDelta' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lpTotalSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lpTotalLocked' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'token0Price' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'token1Price' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txCount24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolume24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeUSD24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeETH24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolume24hDelta' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fees24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'feesUSD24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'feesETH24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fees24hDelta' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAtTimestamp' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAtBlockNumber' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'liquidityProviderCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastUpdatedAt' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidityTokenBalance' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lastUpdatedAt' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CurrentLiquidityPositionsQuery,
  CurrentLiquidityPositionsQueryVariables
>;
