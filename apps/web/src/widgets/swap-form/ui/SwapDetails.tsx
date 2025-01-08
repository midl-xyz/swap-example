import { useGetPools } from '@/features/liquidity';
import { parseNumberInput } from '@/shared';
import { AiOutlineSwapVertical } from '@/shared/assets';
import { calculatePriceImpact } from '@/widgets/swap-form/ui/utils';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { css } from '~/styled-system/css';
import { Box, HStack, VStack } from '~/styled-system/jsx';

interface TokenInfo {
  address: string;
  chainId: number;
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
}

interface Props {
  inputTokenInfo: TokenInfo;
  outputTokenInfo: TokenInfo;
  inputTokenAmount: string;
  outputTokenAmount: string;
  priceImpact?: number;
  amountOutMin: string;
}

export const SwapDetails = ({
  inputTokenInfo,
  outputTokenInfo,
  inputTokenAmount,
  outputTokenAmount,
  amountOutMin,
}: Props) => {
  const { data: pools } = useGetPools();

  const pool = pools?.pairs?.find(({ token0, token1 }) => {
    const token0Address = token0.id.toLowerCase();
    const token1Address = token1.id.toLowerCase();
    const inputTokenAddress = inputTokenInfo.address.toLowerCase();
    const outputTokenAddress = outputTokenInfo.address.toLowerCase();

    return (
      (token0Address === inputTokenAddress &&
        token1Address === outputTokenAddress) ||
      (token1Address === inputTokenAddress &&
        token0Address === outputTokenAddress)
    );
  });

  const isBuyingToken0 =
    pool?.token0.id.toLowerCase() === outputTokenInfo.address.toLowerCase();

  const priceImpact = pool
    ? calculatePriceImpact(
        isBuyingToken0
          ? {
              amountIn: parseFloat(inputTokenAmount),
              reserveIn: parseFloat(pool?.reserve1 || 0),
              reserveOut: parseFloat(pool?.reserve0 || 0),
            }
          : {
              amountIn: parseFloat(inputTokenAmount),
              reserveIn: parseFloat(pool?.reserve0 || 0),
              reserveOut: parseFloat(pool?.reserve1 || 0),
            },
      )
    : 0;

  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  const details = [
    { name: 'Price impact', value: priceImpact },
    {
      name: 'Receive at least',
      value: `${amountOutMin} ${outputTokenInfo.symbol}`,
    },
  ];

  const rate = useMemo(() => {
    try {
      return (
        parseFloat(parseNumberInput(inputTokenAmount)) /
        parseFloat(parseNumberInput(outputTokenAmount))
      );
    } catch {
      return 0;
    }
  }, [inputTokenAmount, outputTokenAmount]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={3.5}
      paddingX={7}
      gap={3}
      border="1px solid"
      borderColor="#E2E2E2"
      borderRadius="xl"
      onClick={handleToggle}
      cursor="pointer"
    >
      {' '}
      <HStack width="100%" justifyContent="space-between">
        <span>
          1 {outputTokenInfo.symbol} = {rate} {inputTokenInfo.symbol}
        </span>
        <HStack gap={2.5}>
          <AiOutlineSwapVertical
            className={css({
              transform: 'rotate(90deg)',
              width: '24px',
              height: '24px',
            })}
          />
          {open ? (
            <ChevronUpIcon width={24} height={24} />
          ) : (
            <ChevronDownIcon width={24} height={24} />
          )}
        </HStack>
      </HStack>
      {open ? (
        <VStack alignItems="baseline" gap={3}>
          {details.map(({ name, value }) => (
            <HStack
              key={name}
              width="100%"
              justifyContent="space-between"
              color="#9498A2"
            >
              <span>{name}</span>
              <span>{value}</span>
            </HStack>
          ))}
        </VStack>
      ) : null}
    </Box>
  );
};
