import { useERC20Allowance } from '@/features/token';
import { WETHByChain } from '@/global';
import { deployments, uniswapV2Router02Abi } from '@/global/contracts';
import {
  useAddTxIntention,
  useClearTxIntentions,
  useEVMAddress,
  useToken,
} from '@midl-xyz/midl-js-executor';
import { useMutation } from '@tanstack/react-query';
import { Address, encodeFunctionData, erc20Abi, zeroAddress } from 'viem';
import { useChainId } from 'wagmi';

type UseSwapMidlParams = {
  tokenIn: Address;
  amountIn: bigint;
};

export type SwapArgs = {
  tokenOut: Address;
  amountOutMin: bigint;
  to: Address;
  deadline: bigint;
};

export const useSwapMidl = ({ tokenIn, amountIn }: UseSwapMidlParams) => {
  const address = useEVMAddress();
  const chainId = useChainId();
  console.log('address', address);

  const { data: allowance = 0n } = useERC20Allowance({
    token: tokenIn,
    spender: deployments[chainId].UniswapV2Router02.address,
    user: address!,
  });

  const { addTxIntention } = useAddTxIntention();
  const clearTxIntentions = useClearTxIntentions();
  const { rune } = useToken(tokenIn);

  const isTokenANeedApprove = allowance < amountIn && tokenIn !== zeroAddress;

  const {
    mutate: swap,
    mutateAsync: swapAsync,
    ...rest
  } = useMutation<void, Error, SwapArgs>({
    mutationFn: async ({ to, deadline, tokenOut, amountOutMin }) => {
      clearTxIntentions();
      const isTokenETH = tokenIn === zeroAddress;

      const WETH = WETHByChain[chainId];
      if (!WETH) {
        throw new Error('WETH not found');
      }

      if (!isTokenETH && !rune) {
        throw new Error('Token not found');
      }

      if (rune && !isTokenETH) {
        if (isTokenANeedApprove) {
          addTxIntention({
            hasRunesDeposit: true,
            rune: {
              id: rune.id,
              value: amountIn,
            },
            evmTransaction: {
              to: tokenIn,
              data: encodeFunctionData({
                abi: erc20Abi,
                functionName: 'approve',
                args: [
                  deployments[chainId].UniswapV2Router02.address,
                  amountIn,
                ],
              }),
            },
          });
        } else {
          addTxIntention({
            hasRunesDeposit: true,
            rune: {
              id: rune.id,
              value: amountIn,
            },
          });
        }
      }
      let args:
        | SmartContractFunctionArgs<
            typeof uniswapV2Router02Abi,
            'swapExactETHForTokens'
          >
        | SmartContractFunctionArgs<
            typeof uniswapV2Router02Abi,
            'swapExactTokensForETH'
          >
        | SmartContractFunctionArgs<
            typeof uniswapV2Router02Abi,
            'swapExactTokensForTokens'
          >;

      let txName:
        | 'swapExactETHForTokens'
        | 'swapExactTokensForETH'
        | 'swapExactTokensForTokens';

      if (tokenIn === zeroAddress) {
        txName = 'swapExactETHForTokens';
        args = [amountOutMin, [WETH, tokenOut], to, deadline];
      } else if (tokenOut === zeroAddress) {
        txName = 'swapExactTokensForETH';
        args = [amountIn, amountOutMin, [tokenIn, WETH], to, deadline];
      } else {
        txName = 'swapExactTokensForTokens';
        args = [amountIn, amountOutMin, [tokenIn, tokenOut], to, deadline];
      }

      addTxIntention({
        evmTransaction: {
          to: deployments[chainId].UniswapV2Router02.address,
          chainId,
          type: 'btc',
          data: encodeFunctionData({
            abi: uniswapV2Router02Abi,
            functionName: txName,
            args: args as any,
          }),
          value: (tokenIn === zeroAddress ? amountIn : BigInt(0)) as any,
        },
      });
    },
  });

  return {
    swap,
    swapAsync,
    ...rest,
  };
};
