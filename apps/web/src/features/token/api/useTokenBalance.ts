import { tokenList } from '@/global';
import { useToken } from '@midl-xyz/midl-js-executor';
import {
  useAccounts,
  useBalance as useBTCBalance,
  useRuneBalance,
} from '@midl-xyz/midl-js-react';
import { useMemo } from 'react';
import { Address, erc20Abi, formatUnits, parseUnits, zeroAddress } from 'viem';
import { useAccount, useBalance, useReadContracts } from 'wagmi';

export const useTokenBalance = (
  contract: Address,
  {
    address,
  }: {
    chainId?: number;
    address?: Address;
  } = {},
) => {
  const { address: userAddress } = useAccount();
  const { ordinalsAccount, paymentAccount } = useAccounts();
  const { balance: btcBalance } = useBTCBalance({
    address: paymentAccount?.address || ordinalsAccount?.address || '',
    query: {
      enabled: Boolean(paymentAccount?.address || ordinalsAccount?.address),
    },
  });

  const convertedBTCBalance = btcBalance * 10 ** 10;
  const contracts: any[] = [
    {
      address: contract,
      abi: erc20Abi,
      functionName: 'decimals',
    },
    {
      address: contract,
      abi: erc20Abi,
      functionName: 'name',
    },
    {
      address: contract,
      abi: erc20Abi,
      functionName: 'symbol',
    },
    {
      address: contract,
      abi: erc20Abi,
      functionName: 'totalSupply',
    },
  ];

  if (address || userAddress) {
    contracts.push({
      address: contract,
      abi: erc20Abi,
      functionName: 'balanceOf',
      args: [address ?? userAddress],
    });
  }

  const { data, ...rest } = useReadContracts({
    allowFailure: true,
    scopeKey: 'balance',
    contracts,
    query: {
      enabled: Boolean(contract),
    },
  });

  const { data: balance, ...restBalance } = useBalance({
    address: address ?? userAddress,
    query: {
      enabled: Boolean(contract),
    },
  });

  const { rune } = useToken(contract);

  const { balance: runeBalance } = useRuneBalance({
    runeId: rune?.id ?? '',
    address: paymentAccount?.address || ordinalsAccount?.address || '',
    query: {
      enabled: Boolean(
        rune?.id && (paymentAccount?.address || ordinalsAccount?.address),
      ),
    },
  });

  const parsedRuneBalance = parseUnits(
    runeBalance?.balance ?? '0',
    rune?.divisibility ?? 0,
  );

  const combinedBalance =
    ((data?.[4]?.result as bigint) || 0n) + parsedRuneBalance;

  const decimals = rune?.divisibility ?? (data?.[0]?.result as number) ?? 0;

  const parsedData: {
    decimals?: number;
    name?: string;
    symbol?: string;
    totalSupply?: bigint;
    balance?: bigint;
    formattedBalance?: string;
  } = useMemo(
    () => ({
      decimals: rune?.divisibility ?? (data?.[0]?.result as number),
      name: rune?.spaced_name ?? (data?.[1]?.result as string),
      symbol: rune?.symbol ?? (data?.[2]?.result as string),
      totalSupply: data?.[3]?.result as bigint,
      balance: combinedBalance,
      formattedBalance:
        decimals > 0
          ? formatUnits(combinedBalance, decimals)
          : combinedBalance.toString(),
    }),
    [data, rune, runeBalance],
  );

  if (contract === zeroAddress) {
    return {
      data: {
        decimals: 18,
        name: tokenList.find((it) => it.address === zeroAddress)?.name,
        symbol: tokenList.find((it) => it.address === zeroAddress)?.symbol,
        totalSupply: 0,
        balance: BigInt(convertedBTCBalance ?? 0),
        formattedBalance: formatUnits(BigInt(convertedBTCBalance ?? 0), 18),
      },
      ...restBalance,
    };
  }

  return {
    ...rest,
    data: parsedData,
  };
};
